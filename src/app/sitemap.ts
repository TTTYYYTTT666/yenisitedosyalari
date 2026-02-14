import { MetadataRoute } from 'next'
import { prisma } from '@/lib/db'
import { brands } from '@/data/cars'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://otoraporu.net'

    // Static pages
    const routes = [
        '',
        '/markalar',
        '/karsilastir',
        '/blog',
        '/hakkimizda',
        '/giris',
        '/kayit',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Brand detail pages
    const brandRoutes = brands.map((brand) => ({
        url: `${baseUrl}/markalar/${brand.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.85,
    }))

    // Dynamic car pages
    const cars = await prisma.car.findMany({
        select: { slug: true, updatedAt: true }
    });

    const carRoutes = cars.map((car) => ({
        url: `${baseUrl}/arac/${car.slug}`,
        lastModified: car.updatedAt,
        changeFrequency: 'weekly' as const,
        priority: 0.9, // High priority for content pages
    }))

    return [...routes, ...brandRoutes, ...carRoutes]
}
