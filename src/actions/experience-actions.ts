'use server';

import { auth } from "@/auth";
import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { z } from 'zod';
import DOMPurify from 'isomorphic-dompurify';

// Validation schema
const experienceSchema = z.object({
    carBrand: z.string().min(1, 'Marka gerekli').max(50),
    carModel: z.string().min(1, 'Model gerekli').max(50),
    carVariant: z.string().max(100).optional(),
    rating: z.number().int().min(1).max(5),
    title: z.string().min(5, 'Başlık en az 5 karakter').max(200),
    content: z.string().min(20, 'İçerik en az 20 karakter').max(10000),
    km: z.string().max(20).optional(),
    ownershipDuration: z.string().max(50).optional(),
    pros: z.string().max(1000).optional(),
    cons: z.string().max(1000).optional(),
});

// Max image size: 2MB per image, max 4 images = 8MB total
const MAX_IMAGE_SIZE = 2 * 1024 * 1024; // 2MB in bytes

export async function getExperiences(brandFilter?: string, ratingFilter?: number) {
    const where: Record<string, unknown> = {};

    if (brandFilter && brandFilter !== 'all') {
        where.carBrand = brandFilter;
    }

    if (ratingFilter && ratingFilter > 0) {
        where.rating = ratingFilter;
    }

    try {
        const experiences = await prisma.experience.findMany({
            where,
            include: {
                user: {
                    select: {
                        name: true,
                        image: true,
                    },
                },
            },
            orderBy: { createdAt: 'desc' },
        });

        return experiences.map((exp: any) => ({
            ...exp,
            images: exp.images ? JSON.parse(exp.images) as string[] : [],
            pros: JSON.parse(exp.pros) as string[],
            cons: JSON.parse(exp.cons) as string[],
        }));
    } catch (error) {
        console.error('getExperiences error:', error);
        return [];
    }
}

export async function getExperienceStats() {
    try {
        const total = await prisma.experience.count();
        const avgRating = await prisma.experience.aggregate({
            _avg: { rating: true },
        });
        const brands = await prisma.experience.groupBy({
            by: ['carBrand'],
            _count: true,
        });

        return {
            total,
            avgRating: avgRating._avg.rating || 0,
            brandCount: brands.length,
            brands: brands.map((b: any) => b.carBrand),
        };
    } catch (error) {
        console.error('getExperienceStats error:', error);
        return {
            total: 0,
            avgRating: 0,
            brandCount: 0,
            brands: [],
        };
    }
}

export async function addExperience(formData: FormData) {
    const session = await auth();
    if (!session?.user?.id) {
        throw new Error("Giriş yapmanız gerekiyor");
    }

    const rawData = {
        carBrand: formData.get("carBrand") as string,
        carModel: formData.get("carModel") as string,
        carVariant: formData.get("carVariant") as string,
        rating: parseInt(formData.get("rating") as string) || 0,
        title: formData.get("title") as string,
        content: formData.get("content") as string,
        km: formData.get("km") as string,
        ownershipDuration: formData.get("ownershipDuration") as string,
        pros: formData.get("pros") as string,
        cons: formData.get("cons") as string,
    };

    // Validate input
    const validationResult = experienceSchema.safeParse(rawData);

    if (!validationResult.success) {
        const errors = validationResult.error.flatten().fieldErrors;
        const firstError = Object.values(errors)[0]?.[0] || 'Geçersiz veri';
        throw new Error(firstError);
    }

    const data = validationResult.data;

    // Sanitize text content
    const sanitizedTitle = DOMPurify.sanitize(data.title, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] });
    const sanitizedContent = DOMPurify.sanitize(data.content, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] });

    // Parse and validate images
    const imagesJson = formData.get("images") as string;
    let images: string[] = [];

    try {
        const parsedImages = imagesJson ? JSON.parse(imagesJson) : [];

        // Validate each image
        if (Array.isArray(parsedImages)) {
            images = parsedImages.filter((img: string) => {
                // Only allow data URLs or https URLs
                if (typeof img !== 'string') return false;

                // Check size for base64 images
                if (img.startsWith('data:image/')) {
                    const base64Data = img.split(',')[1] || '';
                    const sizeInBytes = (base64Data.length * 3) / 4;
                    if (sizeInBytes > MAX_IMAGE_SIZE) {
                        console.warn('Image too large, skipping');
                        return false;
                    }
                    return true;
                }

                // Only allow HTTPS URLs
                if (img.startsWith('https://')) {
                    return img.length < 500; // URL length limit
                }

                return false;
            }).slice(0, 4); // Max 4 images
        }
    } catch {
        images = [];
    }

    // Parse pros and cons (comma separated)
    const pros = data.pros ? data.pros.split(',').map((p: string) => DOMPurify.sanitize(p.trim(), { ALLOWED_TAGS: [], ALLOWED_ATTR: [] })).filter(Boolean).slice(0, 10) : [];
    const cons = data.cons ? data.cons.split(',').map((c: string) => DOMPurify.sanitize(c.trim(), { ALLOWED_TAGS: [], ALLOWED_ATTR: [] })).filter(Boolean).slice(0, 10) : [];

    await prisma.experience.create({
        data: {
            carBrand: data.carBrand,
            carModel: data.carModel,
            carVariant: data.carVariant || null,
            rating: data.rating,
            title: sanitizedTitle,
            content: sanitizedContent,
            images: images.length > 0 ? JSON.stringify(images) : null,
            km: data.km || null,
            ownershipDuration: data.ownershipDuration || null,
            pros: JSON.stringify(pros),
            cons: JSON.stringify(cons),
            userId: session.user.id,
        },
    });

    revalidatePath("/deneyimler");
    return { success: true };
}
