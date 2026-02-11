import { auth } from "@/auth"
import { NextResponse } from "next/server"

export default auth(async (req) => {
    const { pathname } = req.nextUrl

    // Admin routes — require ADMIN or OWNER role
    if (pathname.startsWith("/admin")) {
        if (!req.auth?.user?.id) {
            return NextResponse.redirect(new URL("/giris", req.url))
        }

        // Fetch user role from DB (lightweight check)
        const { prisma } = await import("@/lib/db")
        const user = await prisma.user.findUnique({
            where: { id: req.auth.user.id },
            select: { role: true },
        })

        if (user?.role !== "ADMIN" && user?.role !== "OWNER") {
            return NextResponse.redirect(new URL("/", req.url))
        }
    }

    // Protected routes — require authentication
    const protectedPaths = ["/bilgilerim", "/blog/yaz", "/profil-tamamla"]
    if (protectedPaths.some((p) => pathname.startsWith(p))) {
        if (!req.auth?.user?.id) {
            return NextResponse.redirect(new URL("/giris", req.url))
        }
    }

    return NextResponse.next()
})

export const config = {
    matcher: [
        "/admin/:path*",
        "/bilgilerim",
        "/blog/yaz",
        "/profil-tamamla",
    ],
}
