import { prisma } from '@/lib/db';
import { auth } from '@/auth';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
    const session = await auth();
    if (session?.user?.role !== 'ADMIN') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const settings = await prisma.systemSettings.findMany();
    return NextResponse.json(settings);
}

export async function POST(req: Request) {
    const session = await auth();
    if (session?.user?.role !== 'ADMIN') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const body = await req.json();
        const { key, value, description } = body;

        const setting = await prisma.systemSettings.upsert({
            where: { key },
            update: { value, description },
            create: { key, value, description }
        });

        // Log the action
        await prisma.systemLog.create({
            data: {
                action: 'UPDATE_SETTING',
                details: `Updated ${key} to ${value}`,
                userId: session.user.id
            }
        });

        return NextResponse.json(setting);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update setting' }, { status: 500 });
    }
}
