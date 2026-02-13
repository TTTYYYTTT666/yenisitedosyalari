
import { NextResponse } from "next/server";
import { generateVerificationToken } from "@/lib/token";
import { sendOtpEmail } from "@/lib/mail";
import { prisma } from "@/lib/db";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, token } = body;

        if (!email) {
            return new NextResponse("Email gerekli", { status: 400 });
        }

        // Check if user exists (Prevent spam/open registration exploit)
        // User requested: "bütün maillere gönderiliyor kayıt olup olmaması onemlı deıl" (Complaint)
        const userExists = await prisma.user.findUnique({
            where: { email }
        });

        if (!userExists) {
            // Return success to avoid enumeration, but DO NOT send email
            return NextResponse.json({ success: true });
        }

        // Verify Turnstile Token
        if (process.env.CLOUDFLARE_SECRET_KEY) {
            if (!token) {
                return new NextResponse("Robot doğrulaması gerekli", { status: 400 });
            }

            const formData = new FormData();
            formData.append('secret', process.env.CLOUDFLARE_SECRET_KEY);
            formData.append('response', token);
            formData.append('remoteip', req.headers.get('x-forwarded-for') || '127.0.0.1');

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

        const verificationToken = await generateVerificationToken(email);
        await sendOtpEmail(verificationToken.identifier, verificationToken.token);

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error("OTP Error:", error);
        return new NextResponse(error.message || "Bir hata oluştu", { status: 500 });
    }
}
