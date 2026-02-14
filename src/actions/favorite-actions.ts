'use server';

import { auth } from '@/auth';
import { prisma } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function toggleFavorite(carSlug: string) {
    const session = await auth();
    if (!session?.user?.id) throw new Error('Oturum açmalısınız');

    if (!carSlug || carSlug.length > 200) throw new Error('Geçersiz araç');

    const existing = await (prisma as any).favoriteCar.findUnique({
        where: { userId_carSlug: { userId: session.user.id, carSlug } }
    });

    if (existing) {
        await (prisma as any).favoriteCar.delete({ where: { id: existing.id } });
    } else {
        await (prisma as any).favoriteCar.create({
            data: { userId: session.user.id, carSlug }
        });
    }

    revalidatePath(`/arac/${carSlug}`);
    revalidatePath('/favorilerim');
}

export async function isFavorited(carSlug: string): Promise<boolean> {
    try {
        const session = await auth();
        if (!session?.user?.id) return false;

        const fav = await (prisma as any).favoriteCar.findUnique({
            where: { userId_carSlug: { userId: session.user.id, carSlug } }
        });

        return !!fav;
    } catch {
        return false;
    }
}

export async function getUserFavorites(): Promise<string[]> {
    try {
        const session = await auth();
        if (!session?.user?.id) return [];

        const favorites = await (prisma as any).favoriteCar.findMany({
            where: { userId: session.user.id },
            orderBy: { createdAt: 'desc' },
        });

        return favorites.map((f: any) => f.carSlug);
    } catch {
        return [];
    }
}
