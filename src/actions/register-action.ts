'use server';

import { prisma } from '@/lib/db';
import bcrypt from 'bcryptjs';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { headers } from 'next/headers';
import { rateLimit, getClientIp } from '@/lib/rate-limit';

// Validation schema
const registerSchema = z.object({
    name: z.string()
        .min(2, 'İsim en az 2 karakter olmalı')
        .max(50, 'İsim en fazla 50 karakter olabilir')
        .regex(/^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]+$/, 'İsim sadece harf içerebilir'),
    email: z.string()
        .email('Geçerli bir email adresi girin')
        .max(100, 'Email çok uzun'),
    password: z.string()
        .min(8, 'Şifre en az 8 karakter olmalı')
        .regex(/[A-Za-z]/, 'Şifre en az bir harf içermeli')
        .regex(/[0-9]/, 'Şifre en az bir rakam içermeli'),
    carBrand: z.string().optional(),
    carModel: z.string().optional(),
});

// Generate avatar with initials and random background color
function generateAvatar(name: string): string {
    const colors = [
        '#ef4444', '#f97316', '#f59e0b', '#84cc16', '#22c55e',
        '#14b8a6', '#06b6d4', '#0ea5e9', '#3b82f6', '#6366f1',
        '#8b5cf6', '#a855f7', '#d946ef', '#ec4899', '#f43f5e'
    ];

    // Sanitize name for SVG (prevent XSS in avatar)
    const sanitizedName = name.replace(/[<>&"']/g, '');

    const initials = sanitizedName
        .split(' ')
        .map((word: string) => word[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);

    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Create SVG avatar as data URL
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
            <rect width="100" height="100" fill="${randomColor}" rx="50"/>
            <text x="50" y="50" text-anchor="middle" dominant-baseline="central" 
                  fill="white" font-family="Arial, sans-serif" font-size="40" font-weight="bold">
                ${initials}
            </text>
        </svg>
    `.trim();

    const base64 = Buffer.from(svg).toString('base64');
    return `data:image/svg+xml;base64,${base64}`;
}

export async function registerUser(formData: FormData) {
    // Rate limit: max 5 registrations per IP per 15 minutes
    const headersList = await headers();
    const ip = getClientIp(headersList);
    const rl = rateLimit(`register:${ip}`, { maxRequests: 5, windowSeconds: 900 });
    if (!rl.success) {
        throw new Error('Çok fazla kayıt denemesi. Lütfen daha sonra tekrar deneyin.');
    }

    const rawData = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        password: formData.get('password') as string,
        carBrand: formData.get('carBrand') as string,
        carModel: formData.get('carModel') as string,
    };

    // Validate input
    const validationResult = registerSchema.safeParse(rawData);

    if (!validationResult.success) {
        const errors = validationResult.error.flatten().fieldErrors;
        const firstError = Object.values(errors)[0]?.[0] || 'Geçersiz veri';
        throw new Error(firstError);
    }

    const { name, email, password, carBrand, carModel } = validationResult.data;

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
        where: { email },
    });

    if (existingUser) {
        // Generic message to prevent email enumeration
        throw new Error('Kayıt işlemi başarısız. Lütfen bilgilerinizi kontrol edin.');
    }

    // Hash password with higher cost factor
    const hashedPassword = await bcrypt.hash(password, 12);

    // Generate avatar
    const avatar = generateAvatar(name);

    // Create user
    await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
            image: avatar,
            carBrand: carBrand || null,
            carModel: carModel || null,
            role: 'USER',
        },
    });

    redirect('/');
}
