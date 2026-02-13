import { prisma } from '@/lib/db';
import { auth } from '@/auth';
import { NextResponse } from 'next/server';

export async function GET(req: Request, { params }: { params: Promise<{ slug: string }> }) {
    const session = await auth();
    if (session?.user?.role !== 'ADMIN') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { slug } = await params;
    const car = await prisma.car.findUnique({
        where: { slug },
        include: { issues: true }
    });

    if (!car) {
        return NextResponse.json({ error: 'Car not found' }, { status: 404 });
    }

    return NextResponse.json(car);
}

export async function PUT(req: Request, { params }: { params: Promise<{ slug: string }> }) {
    const session = await auth();
    if (session?.user?.role !== 'ADMIN') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { slug } = await params;

    try {
        const body = await req.json();
        const {
            brand, model, variant, years, generation,
            price, reliabilityScore, expertNote,
            pros, cons, buyingTips,
            // issues handled separately or simple replacement? 
            // Let's assume issues are not passed here for now to keep it simple, 
            // or we can handle them if the array is present.
        } = body;

        const updatedCar = await prisma.car.update({
            where: { slug },
            data: {
                brand, model, variant, years, generation,
                price: price ? parseInt(price) : null,
                reliabilityScore: parseInt(reliabilityScore),
                expertNote,
                pros: JSON.stringify(pros || []),
                cons: JSON.stringify(cons || []),
                buyingTips: JSON.stringify(buyingTips || []),
            }
        });

        // Log action
        await prisma.systemLog.create({
            data: {
                action: 'UPDATE_CAR',
                details: `Updated car ${slug}`,
                userId: session.user.id
            }
        });

        return NextResponse.json(updatedCar);
    } catch (error) {
        console.error('Failed to update car', error);
        return NextResponse.json({ error: 'Failed to update car' }, { status: 500 });
    }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ slug: string }> }) {
    const session = await auth();
    if (session?.user?.role !== 'ADMIN') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { slug } = await params;

    try {
        await prisma.car.delete({
            where: { slug }
        });

        // Log action
        await prisma.systemLog.create({
            data: {
                action: 'DELETE_CAR',
                details: `Deleted car ${slug}`,
                userId: session.user.id
            }
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete car' }, { status: 500 });
    }
}
