import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { cars, brands } from '@/data/cars';

// n8n için araç listesi endpoint'i
// GET /api/cars - Tüm araçları listele (n8n scraper için)
export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const format = searchParams.get('format') || 'full';
    const brand = searchParams.get('brand');

    let filteredCars = cars;

    if (brand) {
        filteredCars = cars.filter(c => c.brand.toLowerCase() === brand.toLowerCase());
    }

    if (format === 'minimal') {
        // n8n için minimal veri (hızlı)
        return NextResponse.json({
            total: filteredCars.length,
            cars: filteredCars.map((c: any) => ({
                slug: c.slug,
                brand: c.brand,
                model: c.model,
                variant: c.variant,
                years: c.years
            }))
        });
    }

    if (format === 'slugs') {
        // Sadece slug listesi
        return NextResponse.json({
            total: filteredCars.length,
            slugs: filteredCars.map((c: any) => c.slug)
        });
    }

    // Tam veri
    return NextResponse.json({
        total: filteredCars.length,
        brands: brands.length,
        cars: filteredCars
    });
}
