import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { brands } from '@/data/cars';

// n8n için araç listesi endpoint'i
// GET /api/cars - Tüm araçları listele (n8n scraper için)
export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const format = searchParams.get('format') || 'full';
    const brand = searchParams.get('brand');

    const where = brand ? { brand: { equals: brand, mode: 'insensitive' as const } } : {};

    const cars = await prisma.car.findMany({
        where,
        select: {
            slug: true,
            brand: true,
            model: true,
            variant: true,
            years: true,
            reliabilityScore: true, // Needed for full?
            // Select more fields if format is 'full'
            // But to simplify, let's fetch what's needed.
            // If format is full, we need everything.
        }
    });

    if (format === 'minimal') {
        return NextResponse.json({
            total: cars.length,
            cars: cars.map(c => ({
                slug: c.slug,
                brand: c.brand,
                model: c.model,
                variant: c.variant,
                years: c.years
            }))
        });
    }

    if (format === 'slugs') {
        return NextResponse.json({
            total: cars.length,
            slugs: cars.map(c => c.slug)
        });
    }

    // Full data
    // We need to fetch everything for full data
    const fullCars = await prisma.car.findMany({
        where,
        include: { issues: true }
    });

    return NextResponse.json({
        total: fullCars.length,
        brands: brands.length, // Keep using static brands count for now or use fullCars unique brands
        cars: fullCars.map(c => ({
            ...c,
            pros: JSON.parse(c.pros || '[]'),
            cons: JSON.parse(c.cons || '[]'),
            buyingTips: JSON.parse(c.buyingTips || '[]'),
        }))
    });
}
