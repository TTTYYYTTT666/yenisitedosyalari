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
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        setLoaded(true);
        const checkDark = () => {
            setIsDark(document.documentElement.classList.contains('dark'));
        };
        checkDark();

        const observer = new MutationObserver(checkDark);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
        return () => observer.disconnect();
    }, []);

    const cols = 8;
    const rows = 12;
    const items: { slug: string; x: number; y: number }[] = [];
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const idx = (row * cols + col) % BRAND_SLUGS.length;
            const xOffset = row % 2 === 0 ? 0 : 50;
            items.push({
                slug: BRAND_SLUGS[idx],
                x: (col / cols) * 100 + xOffset / cols,
                y: (row / rows) * 100,
            });
        }
    }

    // In light mode: use a warm stone color, much more opacity
    // In dark mode: use white, subtle opacity
    const iconColor = isDark ? 'white' : '57534e'; // stone-600 hex for light mode

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
            <div
                className="absolute inset-0 transition-opacity duration-1000"
                style={{ opacity: loaded ? (isDark ? 0.04 : 0.12) : 0 }}
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
                            src={`https://cdn.simpleicons.org/${item.slug}/${iconColor}`}
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
            {/* Vignette that fades to page background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#e7e5e4_90%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_40%,#0c0a09_100%)]" />
        </div>
    );
}
