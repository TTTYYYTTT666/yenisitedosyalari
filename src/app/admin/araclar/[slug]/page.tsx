import { prisma } from '@/lib/db';
import { notFound } from 'next/navigation';
import CarEditor from '@/components/admin/CarEditor';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function AdminEditCarPage({ params }: PageProps) {
    const { slug } = await params;

    const car = await prisma.car.findUnique({
        where: { slug }
    });

    if (!car) {
        notFound();
    }

    return <CarEditor car={car} />;
}
