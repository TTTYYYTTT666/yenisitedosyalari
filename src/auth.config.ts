
import type { NextAuthConfig } from "next-auth"

export const authConfig = {
    pages: {
        signIn: "/giris",
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith('/bilgilerim') || nextUrl.pathname.startsWith('/blog/yaz') || nextUrl.pathname.startsWith('/profil-tamamla');
            const isOnAdmin = nextUrl.pathname.startsWith('/admin');

            if (isOnAdmin) {
                if (isLoggedIn) {
                    const role = (auth?.user as any)?.role;
                    return role === "ADMIN" || role === "OWNER";
                }
                return false; // Redirect to login
            }

            if (isOnDashboard) {
                if (isLoggedIn) return true;
                return false; // Redirect to login
            }

            return true;
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
    providers: [], // Configured in auth.ts
} satisfies NextAuthConfig
