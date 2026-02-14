'use server';

import { auth } from '@/auth';
import { prisma } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const ratingSchema = z.object({
    carSlug: z.string().min(1).max(200),
    overall: z.number().int().min(1).max(5),
    motor: z.number().int().min(1).max(5),
    konfor: z.number().int().min(1).max(5),
    yakit: z.number().int().min(1).max(5),
    bakim: z.number().int().min(1).max(5),
    comment: z.string().max(1000).optional(),
});

export async function submitRating(data: {
    carSlug: string;
    overall: number;
    motor: number;
    konfor: number;
    yakit: number;
    bakim: number;
    comment?: string;
}) {
    const session = await auth();
    if (!session?.user?.id) throw new Error('Oturum açmalısınız');

    const validated = ratingSchema.parse(data);

    await (prisma as any).carRating.upsert({
        where: { userId_carSlug: { userId: session.user.id, carSlug: validated.carSlug } },
        create: { ...validated, userId: session.user.id },
        update: validated,
    });

    revalidatePath(`/arac/${validated.carSlug}`);
}

export async function getCarRatings(carSlug: string) {
    try {
        const ratings = await (prisma as any).carRating.findMany({
            where: { carSlug },
            include: { user: { select: { name: true, image: true } } },
            orderBy: { createdAt: 'desc' },
            take: 50,
        });

        if (ratings.length === 0) {
            return {
                count: 0,
                averages: { overall: 0, motor: 0, konfor: 0, yakit: 0, bakim: 0 },
                ratings: [],
            };
        }

        const avg = (field: string) =>
            Math.round((ratings.reduce((s: number, r: any) => s + r[field], 0) / ratings.length) * 10) / 10;

        return {
            count: ratings.length,
            averages: {
                overall: avg('overall'),
                motor: avg('motor'),
                konfor: avg('konfor'),
                yakit: avg('yakit'),
                bakim: avg('bakim'),
            },
            ratings: ratings.map((r: any) => ({
                id: r.id,
                overall: r.overall,
                motor: r.motor,
                konfor: r.konfor,
                yakit: r.yakit,
                bakim: r.bakim,
                comment: r.comment,
                userName: r.user.name,
                userImage: r.user.image,
                createdAt: r.createdAt.toISOString(),
            })),
        };
    } catch {
        return {
            count: 0,
            averages: { overall: 0, motor: 0, konfor: 0, yakit: 0, bakim: 0 },
            ratings: [],
        };
    }
}
