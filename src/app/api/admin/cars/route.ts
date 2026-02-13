
import { auth } from "@/auth";
import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import { z } from "zod";

const carCreateSchema = z.object({
    brand: z.string().min(1).max(100),
    model: z.string().min(1).max(100),
    variant: z.string().min(1).max(100),
    years: z.string().min(1).max(50),
    slug: z.string().min(1).max(200).regex(/^[a-z0-9-]+$/),
    reliabilityScore: z.number().int().min(0).max(100).optional(),
});

export async function POST(req: Request) {
    const session = await auth();
    const role = (session?.user as any)?.role;
    if (!['ADMIN', 'OWNER'].includes(role)) {
        return new NextResponse("Unauthorized", { status: 401 });
    }

    try {
        const body = await req.json();

        // Validate input
        const validationResult = carCreateSchema.safeParse(body);
        if (!validationResult.success) {
            return new NextResponse("Geçersiz veri", { status: 400 });
        }

        const { brand, model, variant, years, slug, reliabilityScore } = validationResult.data;

        const car = await prisma.car.create({
            data: {
                brand,
                model,
                variant,
                years,
                slug,
                reliabilityScore: reliabilityScore || 80,
                searchCount: 0,
                pros: "[]",
                cons: "[]",
                buyingTips: "[]",
            }
        });

        return NextResponse.json(car);
    } catch (error) {
        console.error("Error creating car:", error);
        return new NextResponse("Bir hata oluştu", { status: 500 });
    }
}
