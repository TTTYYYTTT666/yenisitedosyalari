import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, token, password } = body;

        if (!email || !token || !password) {
            return new NextResponse("Tüm alanlar gerekli", { status: 400 });
        }

        if (password.length < 8) {
            return new NextResponse("Şifre en az 8 karakter olmalı", { status: 400 });
        }

        // Password complexity check (matching registration requirements)
        if (!/[A-Za-z]/.test(password)) {
            return new NextResponse("Şifre en az bir harf içermeli", { status: 400 });
        }
        if (!/[0-9]/.test(password)) {
            return new NextResponse("Şifre en az bir rakam içermeli", { status: 400 });
        }

        // Verify token
        const resetToken = await prisma.verificationToken.findFirst({
            where: {
                identifier: `reset:${email}`,
                token: token,
                expires: { gt: new Date() }
            }
        });

        if (!resetToken) {
            return new NextResponse("Geçersiz veya süresi dolmuş bağlantı. Lütfen tekrar şifre sıfırlama talebi gönderin.", { status: 400 });
        }

        // Hash new password
        const hashedPassword = await bcrypt.hash(password, 12);

        // Update user password
        await prisma.user.update({
            where: { email },
            data: { password: hashedPassword }
        });

        // Delete used token
        await prisma.verificationToken.delete({
            where: {
                identifier_token: {
                    identifier: `reset:${email}`,
                    token: token,
                }
            }
        });

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error("Password Reset Confirm Error:", error);
        return new NextResponse("Bir hata oluştu. Lütfen tekrar deneyin.", { status: 500 });
    }
}
