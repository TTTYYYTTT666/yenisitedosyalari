'use server';

import { auth } from '@/auth';
import { prisma } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import DOMPurify from 'isomorphic-dompurify';

const replySchema = z.object({
    content: z.string().min(2, 'Yanıt en az 2 karakter').max(5000, 'Yanıt çok uzun'),
    postId: z.string().min(1),
});

export async function createReply(postId: string, content: string) {
    const session = await auth();
    if (!session?.user?.id) throw new Error('Oturum açmalısınız');

    const validated = replySchema.parse({ content, postId });

    const sanitized = DOMPurify.sanitize(validated.content, {
        ALLOWED_TAGS: ['p', 'br', 'strong', 'em'],
        ALLOWED_ATTR: [],
    });

    const post = await prisma.blogPost.findUnique({ where: { id: postId } });
    if (!post) throw new Error('Konu bulunamadı');

    await (prisma as any).forumReply.create({
        data: {
            content: sanitized,
            postId: validated.postId,
            userId: session.user.id,
        }
    });

    revalidatePath(`/forum/${post.slug}`);
}

export async function getPostReplies(postId: string) {
    try {
        return await (prisma as any).forumReply.findMany({
            where: { postId },
            include: { user: { select: { name: true, image: true } } },
            orderBy: { createdAt: 'asc' },
        });
    } catch {
        return [];
    }
}
