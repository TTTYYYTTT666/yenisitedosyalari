'use server';

import { auth } from '@/auth';
import { prisma } from '@/lib/db';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import DOMPurify from 'isomorphic-dompurify';

// Validation schema
const postSchema = z.object({
    title: z.string()
        .min(5, 'Başlık en az 5 karakter olmalı')
        .max(200, 'Başlık en fazla 200 karakter olabilir'),
    content: z.string()
        .min(50, 'İçerik en az 50 karakter olmalı')
        .max(50000, 'İçerik çok uzun'),
    category: z.enum(['Deneyim', 'Bakım', 'Haber', 'Rehber', 'Soru']),
    image: z.string().url().optional().or(z.literal('')),
    carSlug: z.string().optional().or(z.literal('')),
});

function slugify(text: string) {
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
}

export async function createPost(formData: FormData) {
    const session = await auth();
    if (!session?.user?.id) {
        throw new Error('Yazı paylaşmak için giriş yapmalısınız.');
    }

    const rawData = {
        title: formData.get('title') as string,
        content: formData.get('content') as string,
        category: formData.get('category') as string,
        image: formData.get('image') as string,
        carSlug: formData.get('carSlug') as string,
    };

    // Validate input
    const validationResult = postSchema.safeParse(rawData);

    if (!validationResult.success) {
        const errors = validationResult.error.flatten().fieldErrors;
        const firstError = Object.values(errors)[0]?.[0] || 'Geçersiz veri';
        throw new Error(firstError);
    }

    const { title, content, category, image, carSlug } = validationResult.data;

    // Sanitize content to prevent stored XSS
    const sanitizedContent = DOMPurify.sanitize(content, {
        ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'a', 'blockquote', 'code', 'pre'],
        ALLOWED_ATTR: ['href', 'target', 'rel'],
        ALLOW_DATA_ATTR: false,
        FORBID_ATTR: ['onerror', 'onclick', 'onload', 'onmouseover', 'onfocus'],
    });

    // Extra: strip javascript: and data: URLs from href attributes
    const safeSanitizedContent = sanitizedContent.replace(
        /href\s*=\s*["']\s*(javascript|data|vbscript):/gi,
        'href="about:blank'
    );

    // Sanitize title
    const sanitizedTitle = DOMPurify.sanitize(title, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] });

    // Generate excerpt (first 150 chars of text content)
    const plainText = safeSanitizedContent.replace(/<[^>]+>/g, '');
    const excerpt = plainText.slice(0, 150) + (plainText.length > 150 ? '...' : '');

    let slug = slugify(sanitizedTitle);

    // Check if slug exists
    const existingPost = await prisma.blogPost.findUnique({
        where: { slug }
    });

    if (existingPost) {
        slug = `${slug}-${Date.now()}`;
    }

    await prisma.blogPost.create({
        data: {
            title: sanitizedTitle,
            content: safeSanitizedContent,
            excerpt,
            category,
            image: image || null,
            slug,
            authorId: session.user.id,
            published: true,
            ...(carSlug ? { carSlug } : {}),
        } as any
    });

    revalidatePath('/forum');
    redirect('/forum');
}
