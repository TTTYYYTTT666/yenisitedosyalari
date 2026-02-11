'use server';

import { auth } from '@/auth';
import { prisma } from '@/lib/db';
import { revalidatePath } from 'next/cache';

// Check if current user is admin or owner
async function checkAdminAccess() {
    const session = await auth();
    if (!session?.user?.id) {
        throw new Error('Oturum açmanız gerekiyor');
    }

    const user = await prisma.user.findUnique({
        where: { id: session.user.id },
        select: { role: true }
    });

    if (user?.role !== 'ADMIN' && user?.role !== 'OWNER') {
        throw new Error('Bu işlem için yetkiniz yok');
    }

    return { userId: session.user.id, role: user.role };
}

// Get all users with pagination
export async function getUsers(page = 1, limit = 20) {
    await checkAdminAccess();

    const skip = (page - 1) * limit;

    const [users, total] = await Promise.all([
        prisma.user.findMany({
            skip,
            take: limit,
            orderBy: { id: 'desc' },
            select: {
                id: true,
                name: true,
                email: true,
                image: true,
                role: true,
                carBrand: true,
                carModel: true,
                _count: {
                    select: {
                        comments: true,
                        experiences: true,
                        posts: true,
                    }
                }
            }
        }),
        prisma.user.count()
    ]);

    return { users, total, pages: Math.ceil(total / limit) };
}

// Update user role
export async function updateUserRole(targetUserId: string, newRole: 'USER' | 'ADMIN' | 'OWNER') {
    const { role: currentUserRole } = await checkAdminAccess();

    // Only OWNER can assign OWNER or ADMIN roles
    if ((newRole === 'OWNER' || newRole === 'ADMIN') && currentUserRole !== 'OWNER') {
        throw new Error('Sadece site sahibi admin atayabilir');
    }

    // Can't change OWNER role unless you're OWNER
    const targetUser = await prisma.user.findUnique({
        where: { id: targetUserId },
        select: { role: true }
    });

    if (targetUser?.role === 'OWNER' && currentUserRole !== 'OWNER') {
        throw new Error('Site sahibinin rolünü değiştiremezsiniz');
    }

    await prisma.user.update({
        where: { id: targetUserId },
        data: { role: newRole }
    });

    revalidatePath('/admin');
    revalidatePath('/admin/kullanicilar');
    return { success: true };
}

// Delete user (and all their content)
export async function deleteUser(targetUserId: string) {
    const { userId, role } = await checkAdminAccess();

    // Can't delete yourself
    if (targetUserId === userId) {
        throw new Error('Kendinizi silemezsiniz');
    }

    // Can't delete OWNER
    const targetUser = await prisma.user.findUnique({
        where: { id: targetUserId },
        select: { role: true }
    });

    if (targetUser?.role === 'OWNER') {
        throw new Error('Site sahibini silemezsiniz');
    }

    // Only OWNER can delete ADMIN
    if (targetUser?.role === 'ADMIN' && role !== 'OWNER') {
        throw new Error('Sadece site sahibi adminleri silebilir');
    }

    await prisma.user.delete({
        where: { id: targetUserId }
    });

    revalidatePath('/admin');
    revalidatePath('/admin/kullanicilar');
    return { success: true };
}

// Delete experience
export async function adminDeleteExperience(experienceId: string) {
    await checkAdminAccess();

    await prisma.experience.delete({
        where: { id: experienceId }
    });

    revalidatePath('/admin');
    revalidatePath('/admin/deneyimler');
    revalidatePath('/deneyimler');
    return { success: true };
}

// Delete comment
export async function adminDeleteComment(commentId: string) {
    await checkAdminAccess();

    const comment = await prisma.comment.findUnique({
        where: { id: commentId },
        select: { carSlug: true }
    });

    await prisma.comment.delete({
        where: { id: commentId }
    });

    if (comment?.carSlug) {
        revalidatePath(`/arac/${comment.carSlug}`);
    }
    revalidatePath('/admin');
    revalidatePath('/admin/yorumlar');
    return { success: true };
}

// Delete blog post
export async function adminDeleteBlogPost(postId: string) {
    await checkAdminAccess();

    await prisma.blogPost.delete({
        where: { id: postId }
    });

    revalidatePath('/admin');
    revalidatePath('/blog');
    return { success: true };
}

// Get all experiences for moderation
export async function getExperiencesForModeration(page = 1, limit = 20) {
    await checkAdminAccess();

    const skip = (page - 1) * limit;

    const [experiences, total] = await Promise.all([
        prisma.experience.findMany({
            skip,
            take: limit,
            orderBy: { createdAt: 'desc' },
            include: {
                user: {
                    select: { name: true, email: true }
                }
            }
        }),
        prisma.experience.count()
    ]);

    return { experiences, total, pages: Math.ceil(total / limit) };
}

// Get all comments for moderation
export async function getCommentsForModeration(page = 1, limit = 50) {
    await checkAdminAccess();

    const skip = (page - 1) * limit;

    const [comments, total] = await Promise.all([
        prisma.comment.findMany({
            skip,
            take: limit,
            orderBy: { createdAt: 'desc' },
            include: {
                user: {
                    select: { name: true, email: true }
                }
            }
        }),
        prisma.comment.count()
    ]);

    return { comments, total, pages: Math.ceil(total / limit) };
}
