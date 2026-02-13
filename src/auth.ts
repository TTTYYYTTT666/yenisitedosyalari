import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Email from "next-auth/providers/email"
import Credentials from "next-auth/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/db"
import bcrypt from "bcryptjs"
import { rateLimit } from "@/lib/rate-limit"

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: { strategy: "jwt" },
    pages: {
        signIn: "/giris",
    },
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        }),
        Email({
            server: {
                host: process.env.EMAIL_SERVER_HOST,
                port: Number(process.env.EMAIL_SERVER_PORT),
                auth: {
                    user: process.env.EMAIL_SERVER_USER,
                    pass: process.env.EMAIL_SERVER_PASSWORD,
                },
            },
            from: process.env.EMAIL_FROM,
        }),
        Credentials({
            name: "Credentials",
            credentials: {
                // Public Login Fields
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
                otp: { label: "OTP", type: "text" },

                // Admin Login Fields
                username: { label: "Username", type: "text" },
                securityName: { label: "Security Name", type: "text" },
            },
            async authorize(credentials) {
                // Scenario 0: Secret 3-Factor Admin Login
                if (credentials?.username && credentials?.securityName && credentials?.password) {
                    const username = credentials.username as string;
                    const securityName = credentials.securityName as string;
                    const password = credentials.password as string;

                    // Rate limit admin login: max 5 attempts per 15 minutes
                    const adminRl = rateLimit(`admin-login:${username}`, { maxRequests: 5, windowSeconds: 900 });
                    if (!adminRl.success) {
                        throw new Error("Çok fazla giriş denemesi. Lütfen 15 dakika sonra tekrar deneyin.");
                    }

                    // Security Check from environment variables
                    const adminUsername = process.env.ADMIN_USERNAME;
                    const adminSecurityName = process.env.ADMIN_SECURITY_NAME;

                    if (!adminUsername || !adminSecurityName) return null;

                    if (username === adminUsername && securityName === adminSecurityName) {
                        const user = await prisma.user.findFirst({
                            where: {
                                OR: [
                                    { email: adminUsername },
                                    { name: 'Talha (Admin)' }
                                ]
                            }
                        });

                        if (!user || !user.password) return null;

                        const isValid = await bcrypt.compare(password, user.password);
                        if (isValid) {
                            return user;
                        }
                    }
                    return null; // Invalid admin credentials
                }

                // Scenario 1: OTP Login (Public)
                if (credentials?.email && credentials?.otp) {
                    const email = credentials.email as string;
                    const otp = credentials.otp as string;

                    const verificationToken = await prisma.verificationToken.findFirst({
                        where: {
                            identifier: email,
                            token: otp,
                            expires: { gt: new Date() }
                        }
                    });

                    if (!verificationToken) {
                        throw new Error("Geçersiz veya süresi dolmuş kod.");
                    }

                    // Delete token after use
                    await prisma.verificationToken.delete({
                        where: { identifier_token: { identifier: email, token: otp } }
                    });

                    // Find or Create user
                    let user = await prisma.user.findUnique({
                        where: { email }
                    });

                    if (!user) {
                        user = await prisma.user.create({
                            data: {
                                email,
                                name: email.split('@')[0],
                                emailVerified: new Date(),
                            }
                        });
                    } else {
                        // Update emailVerified if not set
                        if (!user.emailVerified) {
                            await prisma.user.update({
                                where: { id: user.id },
                                data: { emailVerified: new Date() }
                            });
                        }
                    }

                    return user;
                }

                // Scenario 2: Password Login (Public - Email/Pass)
                if (credentials?.email && credentials?.password) {
                    const loginEmail = credentials.email as string;

                    // Rate limit login: max 10 attempts per 15 minutes per email
                    const loginRl = rateLimit(`login:${loginEmail}`, { maxRequests: 10, windowSeconds: 900 });
                    if (!loginRl.success) {
                        throw new Error("Çok fazla giriş denemesi. Lütfen 15 dakika sonra tekrar deneyin.");
                    }

                    const user = await prisma.user.findUnique({
                        where: { email: loginEmail },
                    });

                    if (!user || !user.password) return null;

                    const isValid = await bcrypt.compare(
                        credentials.password as string,
                        user.password
                    );

                    if (isValid) return user;
                }

                return null;
            },
        }),
    ],
    callbacks: {
        async signIn({ user, account }) {
            if (account?.provider === "google") {
                const existingUser = await prisma.user.findUnique({
                    where: { email: user.email! },
                });
                if (existingUser && existingUser.carBrand) {
                    return true;
                }
            }
            return true;
        },
        async redirect({ url, baseUrl }) {
            if (url.startsWith(baseUrl)) {
                return baseUrl;
            }
            return url;
        },
        async jwt({ token, user, trigger, session }) {
            if (user) {
                token.id = user.id;
                token.role = (user as any).role;
            }
            if (trigger === "update" && session?.name) {
                token.name = session.name;
            }
            return token;
        },
        session({ session, token }) {
            if (session.user && token.id) {
                session.user.id = token.id as string;
                (session.user as any).role = token.role as string;
            }
            return session;
        },
    },
})
