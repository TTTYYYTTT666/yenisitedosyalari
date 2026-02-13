
import { auth } from "@/auth";
import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const session = await auth();
    if (session?.user?.role !== "ADMIN") {
        return new NextResponse("Unauthorized", { status: 401 });
    }

    try {
        const body = await req.json();
        const { brand, model, variant, years, slug, reliabilityScore } = body;

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
        return new NextResponse("Internal Error", { status: 500 });
    }
}
