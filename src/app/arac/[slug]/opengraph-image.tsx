
import { ImageResponse } from 'next/og'
import { getCarBySlug } from '@/lib/cars'

export const alt = 'Araç İncelemesi ve Kronik Sorunlar'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image({ params }: { params: { slug: string } }) {
    const { slug } = await params
    const car = await getCarBySlug(slug)

    if (!car) {
        return new ImageResponse(
            (
                <div
                    style={{
                        fontSize: 48,
                        background: '#0c0a09',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                    }}
                >
                    OTORAPORU.NET
                </div>
            ),
            { ...size }
        )
    }

    return new ImageResponse(
        (
            <div
                style={{
                    background: '#0c0a09',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                }}
            >
                {/* Background Grid */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: 'linear-gradient(to right, #ffffff05 1px, transparent 1px), linear-gradient(to bottom, #ffffff05 1px, transparent 1px)',
                        backgroundSize: '50px 50px',
                    }}
                />

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10 }}>
                    {/* Brand & Model */}
                    <div style={{ fontSize: 32, color: '#ea580c', fontWeight: 'bold', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '4px' }}>
                        OTORAPORU.NET
                    </div>

                    <div style={{ fontSize: 80, color: 'white', fontWeight: 'bold', textAlign: 'center', lineHeight: 1.1, marginBottom: 20 }}>
                        {car.brand} {car.model}
                    </div>

                    <div style={{ fontSize: 40, color: '#a8a29e', marginBottom: 40 }}>
                        {car.variant}
                    </div>

                    {/* Score Card */}
                    <div style={{ display: 'flex', alignItems: 'center', background: '#1c1917', padding: '20px 40px', borderRadius: 20, border: '2px solid #292524' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: 40 }}>
                            <span style={{ fontSize: 24, color: '#a8a29e', marginBottom: 5 }}>GÜVENİLİRLİK</span>
                            <span style={{ fontSize: 64, fontWeight: 'bold', color: car.reliabilityScore >= 80 ? '#22c55e' : car.reliabilityScore >= 60 ? '#f59e0b' : '#ef4444' }}>
                                {car.reliabilityScore}
                            </span>
                        </div>
                        <div style={{ width: 2, height: 80, background: '#292524', marginRight: 40 }} />
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <span style={{ fontSize: 24, color: '#a8a29e', marginBottom: 5 }}>KRONİK SORUN</span>
                            <span style={{ fontSize: 64, fontWeight: 'bold', color: 'white' }}>
                                {car.issues.length}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
