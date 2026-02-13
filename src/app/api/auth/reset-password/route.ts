import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import crypto from "crypto";
import { sendPasswordResetEmail } from "@/lib/mail";
import { rateLimit } from "@/lib/rate-limit";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, token } = body;

        if (!email) {
            return new NextResponse("Email gerekli", { status: 400 });
        }

        // Rate limit password reset: max 3 per email per hour
        const resetRl = rateLimit(`reset:${email}`, { maxRequests: 3, windowSeconds: 3600 });
        if (!resetRl.success) {
            return new NextResponse("Çok fazla deneme. Lütfen daha sonra tekrar deneyin.", { status: 429 });
        }

        // Verify Turnstile Token
        if (process.env.CLOUDFLARE_SECRET_KEY) {
            if (!token) {
                return new NextResponse("Robot doğrulaması gerekli", { status: 400 });
            }

            const formData = new FormData();
            formData.append('secret', process.env.CLOUDFLARE_SECRET_KEY);
            formData.append('response', token);
            formData.append('remoteip', req.headers.get('cf-connecting-ip') || req.headers.get('x-forwarded-for') || '127.0.0.1');

            const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
            const result = await fetch(url, {
                body: formData,
                method: 'POST',
            });

            const outcome = await result.json();
            if (!outcome.success) {
                return new NextResponse("Robot doğrulaması başarısız", { status: 400 });
            }
        }

        // Check if user exists — but return generic response to prevent enumeration
        const user = await prisma.user.findUnique({
            where: { email }
        });

        if (user && user.password) {
            // Generate reset token
            const resetToken = crypto.randomBytes(32).toString('hex');
            const expires = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

            // Delete existing tokens for this email
            await prisma.verificationToken.deleteMany({
                where: { identifier: `reset:${email}` }
            });

            // Create new reset token
            await prisma.verificationToken.create({
                data: {
                    identifier: `reset:${email}`,
                    token: resetToken,
                    expires,
                }
            });

            // Send email
            const baseUrl = process.env.NEXTAUTH_URL || 'https://otoraporu.net';
            const resetUrl = `${baseUrl}/sifre-sifirla?token=${resetToken}&email=${encodeURIComponent(email)}`;
            await sendPasswordResetEmail(email, resetUrl);
        }

        // Always return success to prevent email enumeration
        return NextResponse.json({ success: true, message: "Şifre sıfırlama bağlantısı e-posta adresinize gönderildi." });
    } catch (error: any) {
        console.error("Password Reset Error:", error);
        return new NextResponse("Bir hata oluştu. Lütfen tekrar deneyin.", { status: 500 });
    }
}
