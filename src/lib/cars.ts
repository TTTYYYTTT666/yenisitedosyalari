
import { prisma } from '@/lib/db';
import { Car } from '@/types';
import { cars as staticCars, getTotalIssuesCount as getStaticIssuesCount } from '@/data/cars';

// Helper to parse JSON fields from Prisma
const parseCar = (car: any): Car => {
    return {
        ...car,
        pros: JSON.parse(car.pros || '[]'),
        cons: JSON.parse(car.cons || '[]'),
        buyingTips: JSON.parse(car.buyingTips || '[]'),
        issues: car.issues?.map((issue: any) => ({
            ...issue,
        })) || []
    };
};

export async function getAllCars(): Promise<Car[]> {
    try {
        const cars = await prisma.car.findMany({
            include: { issues: true },
            orderBy: { searchCount: 'desc' }
        });
        const dbCars = cars.map(parseCar);
        // Merge: DB cars + static cars not in DB
        const dbSlugs = new Set(dbCars.map(c => c.slug));
        const extraStatic = staticCars.filter(c => !dbSlugs.has(c.slug));
        return [...dbCars, ...extraStatic];
    } catch {
        return staticCars;
    }
}

export async function getCarBySlug(slug: string): Promise<Car | null> {
    try {
        const car = await prisma.car.findUnique({
            where: { slug },
            include: { issues: true }
        });
        if (car) return parseCar(car);
    } catch {
        // DB error, fall through to static
    }
    // Fallback to static data
    return staticCars.find(c => c.slug === slug) || null;
}

export async function getTrendingCars(limit = 9): Promise<Car[]> {
    try {
        const cars = await prisma.car.findMany({
            orderBy: { searchCount: 'desc' },
            take: limit,
            include: { issues: true }
        });
        const dbCars = cars.map(parseCar);
        if (dbCars.length >= limit) return dbCars;
        // Fill remaining from static
        const dbSlugs = new Set(dbCars.map(c => c.slug));
        const extraStatic = staticCars
            .filter(c => !dbSlugs.has(c.slug))
            .sort((a, b) => (b.searchCount ?? 0) - (a.searchCount ?? 0))
            .slice(0, limit - dbCars.length);
        return [...dbCars, ...extraStatic];
    } catch {
        return [...staticCars]
            .sort((a, b) => (b.searchCount ?? 0) - (a.searchCount ?? 0))
            .slice(0, limit);
    }
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
    try {
        const cars = await prisma.car.findMany({
            where: {
                OR: [
                    { brand: { contains: query } },
                    { model: { contains: query } }
                ]
            },
            include: { issues: true }
        });
        const dbCars = cars.map(parseCar);
        const dbSlugs = new Set(dbCars.map(c => c.slug));
        const q = query.toLowerCase();
        const extraStatic = staticCars.filter(c =>
            !dbSlugs.has(c.slug) &&
            (c.brand.toLowerCase().includes(q) || c.model.toLowerCase().includes(q))
        );
        return [...dbCars, ...extraStatic];
    } catch {
        const q = query.toLowerCase();
        return staticCars.filter(c =>
            c.brand.toLowerCase().includes(q) || c.model.toLowerCase().includes(q)
        );
    }
}

export async function getTotalIssuesCount(): Promise<number> {
    try {
        const dbCount = await prisma.carIssue.count();
        if (dbCount > 0) return dbCount + getStaticIssuesCount();
        return getStaticIssuesCount();
    } catch {
        return getStaticIssuesCount();
    }
}

export async function getTotalCarsCount(): Promise<number> {
    try {
        const dbCount = await prisma.car.count();
        return dbCount + staticCars.length;
    } catch {
        return staticCars.length;
    }
}

export async function getRelatedCars(currentSlug: string, brand: string, model: string, limit = 6): Promise<Car[]> {
    const allCars = await getAllCars();
    // 1. Same model, different variant
    const sameModel = allCars.filter(c => c.slug !== currentSlug && c.brand === brand && c.model === model);
    // 2. Same brand, different model  
    const sameBrand = allCars.filter(c => c.slug !== currentSlug && c.brand === brand && c.model !== model);
    // Combine: same model first, then same brand
    const combined = [...sameModel, ...sameBrand];
    return combined.slice(0, limit);
}

