
import { NextResponse } from "next/server";
import { generateVerificationToken } from "@/lib/token";
import { sendOtpEmail } from "@/lib/mail";
import { prisma } from "@/lib/db";
import { rateLimit, getClientIp } from "@/lib/rate-limit";
import { headers } from "next/headers";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, token } = body;

        if (!email) {
            return new NextResponse("Email gerekli", { status: 400 });
        }

        // Rate limit OTP sending: max 5 per email per 15 minutes
        const otpRl = rateLimit(`otp:${email}`, { maxRequests: 5, windowSeconds: 900 });
        if (!otpRl.success) {
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

        // Check if user exists (but ALWAYS return success to prevent enumeration)
        const userExists = await prisma.user.findUnique({
            where: { email }
        });

        if (userExists) {
            // Only send OTP if user actually exists
            const verificationToken = await generateVerificationToken(email);
            await sendOtpEmail(verificationToken.identifier, verificationToken.token);
        }

        // Always return success to prevent email enumeration
        return NextResponse.json({ success: true, message: "Giriş kodu e-posta adresinize gönderildi." });
    } catch (error: any) {
        console.error("OTP Error:", error);
        return new NextResponse("Bir hata oluştu. Lütfen tekrar deneyin.", { status: 500 });
    }
}
