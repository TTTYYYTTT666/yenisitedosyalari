'use server';

import { auth } from '@/auth';
import { prisma } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import DOMPurify from 'isomorphic-dompurify';

// Validation schema
const commentSchema = z.object({
    text: z.string()
        .min(2, 'Yorum en az 2 karakter olmalı')
        .max(2000, 'Yorum en fazla 2000 karakter olabilir'),
    carSlug: z.string()
        .min(1, 'Araç bilgisi gerekli')
        .max(200, 'Geçersiz araç bilgisi'),
});

export async function addComment(carSlug: string, text: string) {
    const session = await auth();
    if (!session?.user?.id) throw new Error('Oturum açmalısınız');

    // Validate input
    const validationResult = commentSchema.safeParse({ text, carSlug });

    if (!validationResult.success) {
        const errors = validationResult.error.flatten().fieldErrors;
        const firstError = Object.values(errors)[0]?.[0] || 'Geçersiz veri';
        throw new Error(firstError);
    }

    // Sanitize text to prevent XSS
    const sanitizedText = DOMPurify.sanitize(validationResult.data.text, {
        ALLOWED_TAGS: [],
        ALLOWED_ATTR: [],
    });

    await prisma.comment.create({
        data: {
            text: sanitizedText,
            carSlug: validationResult.data.carSlug,
            userId: session.user.id
        }
    });

    revalidatePath(`/arac/${carSlug}`);
}

export async function deleteComment(commentId: string) {
    const session = await auth();
    if (!session?.user?.id) throw new Error('Oturum açmalısınız');

    // Validate commentId format
    if (!commentId || typeof commentId !== 'string' || commentId.length > 50) {
        throw new Error('Geçersiz yorum ID');
    }

    // Check ownership
    const comment = await prisma.comment.findUnique({
        where: { id: commentId },
    });

    if (!comment) throw new Error('Yorum bulunamadı');
    if (comment.userId !== session.user.id) throw new Error('Yetkiniz yok');

    await prisma.comment.delete({
        where: { id: commentId }
    });

    revalidatePath(`/arac/${comment.carSlug}`);
}
