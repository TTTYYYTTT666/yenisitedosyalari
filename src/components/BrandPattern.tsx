'use client';

import { useEffect, useState } from 'react';

const BRAND_SLUGS = [
    'bmw', 'audi', 'volkswagen', 'toyota',
    'honda', 'tesla', 'ford', 'renault', 'peugeot',
    'fiat', 'skoda', 'seat', 'opel', 'nissan',
    'kia', 'hyundai', 'volvo', 'citroen',
    'mazda', 'subaru', 'suzuki', 'porsche',
    'lamborghini', 'ferrari', 'bentley', 'jaguar',
    'landrover', 'mini', 'smart', 'dacia'
];

export default function BrandPattern() {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => setLoaded(true), []);

    // Create a big grid: 8 columns x 12 rows = 96 logos
    const cols = 8;
    const rows = 12;
    const items: { slug: string; x: number; y: number }[] = [];
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const idx = (row * cols + col) % BRAND_SLUGS.length;
            // Offset every other row for diagonal effect
            const xOffset = row % 2 === 0 ? 0 : 50;
            items.push({
                slug: BRAND_SLUGS[idx],
                x: (col / cols) * 100 + xOffset / cols,
                y: (row / rows) * 100,
            });
        }
    }

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
            <div
                className="absolute inset-0 transition-opacity duration-1000"
                style={{ opacity: loaded ? 0.04 : 0 }}
            >
                {items.map((item, i) => (
                    <div
                        key={i}
                        className="absolute w-16 h-16 flex items-center justify-center"
                        style={{
                            left: `${item.x}%`,
                            top: `${item.y}%`,
                        }}
                    >
                        <img
                            src={`https://cdn.simpleicons.org/${item.slug}/white`}
                            alt=""
                            loading="lazy"
                            className="w-10 h-10 object-contain"
                            onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none';
                            }}
                        />
                    </div>
                ))}
            </div>
            {/* Gentle vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#0c0a09_100%)]" />
        </div>
    );
}
