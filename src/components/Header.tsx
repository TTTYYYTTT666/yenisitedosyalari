import { auth } from '@/auth';
import { prisma } from '@/lib/db';
import HeaderClient from './HeaderClient';

export default async function Header() {
    const session = await auth();

    let userWithCar = null;
    if (session?.user?.id) {
        const dbUser = await prisma.user.findUnique({
            where: { id: session.user.id },
            select: { carBrand: true, role: true },
        });
        userWithCar = {
            ...session.user,
            carBrand: dbUser?.carBrand,
            role: dbUser?.role,
        };
    }

    return <HeaderClient user={userWithCar} />;
}
