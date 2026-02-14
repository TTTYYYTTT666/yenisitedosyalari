'use server';

import { auth } from '@/auth';
import { prisma } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import DOMPurify from 'isomorphic-dompurify';

const reportSchema = z.object({
    carSlug: z.string().min(1).max(200),
    title: z.string().min(5, 'Başlık en az 5 karakter').max(200),
    description: z.string().min(20, 'Açıklama en az 20 karakter').max(2000),
    category: z.enum(['motor', 'sanziman', 'elektrik', 'govde', 'fren', 'suspansiyon', 'diger']),
    km: z.string().max(50).optional(),
});

export async function reportIssue(data: {
    carSlug: string;
    title: string;
    description: string;
    category: string;
    km?: string;
}) {
    const session = await auth();
    if (!session?.user?.id) throw new Error('Oturum açmalısınız');

    const validated = reportSchema.parse(data);

    const sanitizedTitle = DOMPurify.sanitize(validated.title, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] });
    const sanitizedDesc = DOMPurify.sanitize(validated.description, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] });

    await (prisma as any).issueReport.create({
        data: {
            carSlug: validated.carSlug,
            title: sanitizedTitle,
            description: sanitizedDesc,
            category: validated.category,
            km: validated.km || null,
            userId: session.user.id,
        }
    });

    revalidatePath(`/arac/${validated.carSlug}`);
}
