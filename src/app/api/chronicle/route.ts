import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { rateLimit, getClientIp } from '@/lib/rate-limit';

const API_READ_LIMIT = { maxRequests: 30, windowSeconds: 60 };
const API_WRITE_LIMIT = { maxRequests: 10, windowSeconds: 60 };

// API Key doğrulama
async function validateApiKey(request: NextRequest): Promise<boolean> {
    const apiKey = request.headers.get('x-api-key');
    if (!apiKey) return false;

    const key = await prisma.apiKey.findUnique({
        where: { key: apiKey, isActive: true }
    });

    if (key) {
        // Son kullanım zamanını güncelle
        await prisma.apiKey.update({
            where: { id: key.id },
            data: { lastUsedAt: new Date() }
        });
        return true;
    }
    return false;
}

// GET /api/chronicle - Tüm kronikleri listele
export async function GET(request: NextRequest) {
    const ip = getClientIp(request.headers);
    const rl = rateLimit(`chronicle-get:${ip}`, API_READ_LIMIT);
    if (!rl.success) {
        return NextResponse.json(
            { error: 'Too many requests', retryIn: rl.resetIn },
            { status: 429 }
        );
    }

    const { searchParams } = new URL(request.url);
    const carSlug = searchParams.get('carSlug');
    const status = searchParams.get('status') || 'APPROVED';

    const chronicles = await prisma.chronicle.findMany({
        where: {
            ...(carSlug && { carSlug }),
            status
        },
        include: {
            issues: true
        },
        orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json({ chronicles });
}

// POST /api/chronicle - Yeni kronik ekle (n8n'den)
export async function POST(request: NextRequest) {
    const ip = getClientIp(request.headers);
    const rl = rateLimit(`chronicle-post:${ip}`, API_WRITE_LIMIT);
    if (!rl.success) {
        return NextResponse.json(
            { error: 'Too many requests', retryIn: rl.resetIn },
            { status: 429 }
        );
    }

    // API key doğrulama
    if (!await validateApiKey(request)) {
        return NextResponse.json(
            { error: 'Unauthorized - Invalid API key' },
            { status: 401 }
        );
    }

    try {
        const body = await request.json();

        const {
            carSlug,
            expertNote,
            pros,
            cons,
            buyingTips,
            issues,
            source,
            sourceUrl
        } = body;

        // Gerekli alanları kontrol et
        if (!carSlug || !source) {
            return NextResponse.json(
                { error: 'carSlug and source are required' },
                { status: 400 }
            );
        }

        // Kronik oluştur
        const chronicle = await prisma.chronicle.create({
            data: {
                carSlug,
                expertNote: expertNote || null,
                pros: JSON.stringify(pros || []),
                cons: JSON.stringify(cons || []),
                buyingTips: JSON.stringify(buyingTips || []),
                source,
                sourceUrl: sourceUrl || null,
                status: 'PENDING', // Admin onayı bekler
                issues: {
                    create: (issues || []).map((issue: {
                        title: string;
                        description: string;
                        category: string;
                        riskLevel: string;
                        affectedKm?: string;
                        repairCost?: string;
                    }) => ({
                        title: issue.title,
                        description: issue.description,
                        category: issue.category || 'motor',
                        riskLevel: issue.riskLevel || 'MEDIUM',
                        affectedKm: issue.affectedKm || null,
                        repairCost: issue.repairCost || null
                    }))
                }
            },
            include: {
                issues: true
            }
        });

        return NextResponse.json({
            success: true,
            chronicle
        }, { status: 201 });

    } catch (error) {
        console.error('Chronicle creation error:', error);
        return NextResponse.json(
            { error: 'Failed to create chronicle' },
            { status: 500 }
        );
    }
}

// PATCH /api/chronicle - Kronik durumunu güncelle (Admin)
export async function PATCH(request: NextRequest) {
    const ip = getClientIp(request.headers);
    const rl = rateLimit(`chronicle-patch:${ip}`, API_WRITE_LIMIT);
    if (!rl.success) {
        return NextResponse.json(
            { error: 'Too many requests', retryIn: rl.resetIn },
            { status: 429 }
        );
    }

    // API key doğrulama
    if (!await validateApiKey(request)) {
        return NextResponse.json(
            { error: 'Unauthorized - Invalid API key' },
            { status: 401 }
        );
    }

    try {
        const body = await request.json();
        const { id, status } = body;

        if (!id || !['PENDING', 'APPROVED', 'REJECTED'].includes(status)) {
            return NextResponse.json(
                { error: 'Valid id and status (PENDING/APPROVED/REJECTED) required' },
                { status: 400 }
            );
        }

        const chronicle = await prisma.chronicle.update({
            where: { id },
            data: { status }
        });

        return NextResponse.json({ success: true, chronicle });

    } catch (error) {
        console.error('Chronicle update error:', error);
        return NextResponse.json(
            { error: 'Failed to update chronicle' },
            { status: 500 }
        );
    }
}
