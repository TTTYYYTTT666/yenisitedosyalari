'use server';

import { signIn, signOut, auth } from "@/auth";
import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { z } from 'zod';
import DOMPurify from 'isomorphic-dompurify';

// Validation schema
const profileSchema = z.object({
    name: z.string().min(2).max(50).optional(),
    phone: z.string().max(20).optional(),
    carBrand: z.string().max(50).optional(),
    carModel: z.string().max(50).optional(),
});

export async function login() {
    await signIn("google");
}

export async function logout() {
    await signOut();
}

export async function getProfile() {
    const session = await auth();
    if (!session?.user?.id) return null;

    const user = await prisma.user.findUnique({
        where: { id: session.user.id },
        select: {
            name: true,
            phone: true,
            carBrand: true,
            carModel: true,
        },
    });

    return user;
}

export async function updateProfile(formData: FormData) {
    const session = await auth();
    if (!session?.user?.id) {
        throw new Error("Oturum açmanız gerekiyor");
    }

    const rawData = {
        name: formData.get("name") as string,
        phone: formData.get("phone") as string,
        carBrand: formData.get("carBrand") as string,
        carModel: formData.get("carModel") as string,
    };

    // Validate input
    const validationResult = profileSchema.safeParse(rawData);

    if (!validationResult.success) {
        throw new Error('Geçersiz veri');
    }

    const data = validationResult.data;

    // Sanitize inputs
    const sanitizedData = {
        name: data.name ? DOMPurify.sanitize(data.name, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] }) : undefined,
        phone: data.phone ? DOMPurify.sanitize(data.phone, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] }) : undefined,
        carBrand: data.carBrand ? DOMPurify.sanitize(data.carBrand, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] }) : undefined,
        carModel: data.carModel ? DOMPurify.sanitize(data.carModel, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] }) : undefined,
    };

    await prisma.user.update({
        where: { id: session.user.id },
        data: {
            name: sanitizedData.name || undefined,
            phone: sanitizedData.phone || undefined,
            carBrand: sanitizedData.carBrand || undefined,
            carModel: sanitizedData.carModel || undefined,
        },
    });

    revalidatePath("/");
    revalidatePath("/bilgilerim");
    return { success: true };
}

// Legacy function for backwards compatibility
export async function completeProfile(formData: FormData) {
    return updateProfile(formData);
}

export async function checkProfileComplete() {
    const session = await auth();
    if (!session?.user?.id) return false;

    const user = await prisma.user.findUnique({
        where: { id: session.user.id },
        select: { carBrand: true },
    });

    return !!user?.carBrand;
}
