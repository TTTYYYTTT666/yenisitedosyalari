
import { prisma } from '@/lib/db';
import { Car } from '@/types';
// We need to map Prisma result to our Car interface manually or rely on compatibility.
// Prisma returns objects. Our `Car` interface has `issues: Issue[]`. 
// The DB `Car` has `issues: CarIssue[]`. The structures are similar but need check.

// Helper to parse JSON fields
const parseCar = (car: any): Car => {
    return {
        ...car,
        pros: JSON.parse(car.pros || '[]'),
        cons: JSON.parse(car.cons || '[]'),
        buyingTips: JSON.parse(car.buyingTips || '[]'),
        // Map CarIssue to Issue
        issues: car.issues?.map((issue: any) => ({
            ...issue,
            // category and riskLevel are strings in DB, checking if they match Union types is loose but fine for now
        })) || []
    };
};

export async function getAllCars(): Promise<Car[]> {
    const cars = await prisma.car.findMany({
        include: { issues: true },
        orderBy: { searchCount: 'desc' } // Default sort
    });
    return cars.map(parseCar);
}

export async function getCarBySlug(slug: string): Promise<Car | null> {
    const car = await prisma.car.findUnique({
        where: { slug },
        include: { issues: true }
    });
    if (!car) return null;
    return parseCar(car);
}

export async function getTrendingCars(limit = 9): Promise<Car[]> {
    const cars = await prisma.car.findMany({
        orderBy: { searchCount: 'desc' },
        take: limit,
        include: { issues: true }
    });
    return cars.map(parseCar);
}

export async function incrementSearchCount(slug: string) {
    try {
        await prisma.car.update({
            where: { slug },
            data: { searchCount: { increment: 1 } }
        });
    } catch (e) {
        console.error("Failed to increment search count", e);
    }
}

export async function searchCars(query: string): Promise<Car[]> {
    // Basic search on brand OR model
    const cars = await prisma.car.findMany({
        where: {
            OR: [
                { brand: { contains: query } },
                { model: { contains: query } }
            ]
        },
        include: { issues: true }
    });
    return cars.map(parseCar);
}

export async function getTotalIssuesCount(): Promise<number> {
    return await prisma.carIssue.count();
}

export async function getTotalCarsCount(): Promise<number> {
    return await prisma.car.count();
}
