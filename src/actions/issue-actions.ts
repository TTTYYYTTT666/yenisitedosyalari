'use server';

import { auth } from '@/auth';
import { prisma } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function voteIssue(issueId: string, carSlug: string, type: 'CONFIRM' | 'DENY') {
    const session = await auth();
    if (!session?.user?.id) throw new Error('Oturum açmalısınız');

    if (!issueId || !carSlug || !['CONFIRM', 'DENY'].includes(type)) {
        throw new Error('Geçersiz veri');
    }

    // Check if user already voted
    const existing = await (prisma as any).issueVote.findUnique({
        where: { userId_issueId: { userId: session.user.id, issueId } }
    });

    if (existing) {
        if (existing.type === type) {
            await (prisma as any).issueVote.delete({ where: { id: existing.id } });
        } else {
            await (prisma as any).issueVote.update({
                where: { id: existing.id },
                data: { type }
            });
        }
    } else {
        await (prisma as any).issueVote.create({
            data: { issueId, carSlug, type, userId: session.user.id }
        });
    }

    revalidatePath(`/arac/${carSlug}`);
}

export async function getIssueVotes(carSlug: string) {
    try {
        const votes = await (prisma as any).issueVote.groupBy({
            by: ['issueId', 'type'],
            where: { carSlug },
            _count: { id: true }
        });

        const result: Record<string, { confirms: number; denies: number }> = {};
        for (const v of votes) {
            if (!result[v.issueId]) result[v.issueId] = { confirms: 0, denies: 0 };
            if (v.type === 'CONFIRM') result[v.issueId].confirms = v._count.id;
            else result[v.issueId].denies = v._count.id;
        }
        return result;
    } catch {
        return {};
    }
}

export async function getUserIssueVotes(carSlug: string) {
    try {
        const session = await auth();
        if (!session?.user?.id) return {};

        const votes = await (prisma as any).issueVote.findMany({
            where: { carSlug, userId: session.user.id }
        });

        const result: Record<string, string> = {};
        for (const v of votes) {
            result[v.issueId] = v.type;
        }
        return result;
    } catch {
        return {};
    }
}
