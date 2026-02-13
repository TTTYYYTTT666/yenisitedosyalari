'use client';

import { useEffect, useState } from 'react';

const BRAND_SLUGS = [
    'bmw', 'audi', 'volkswagen', 'toyota',
    'honda', 'ford', 'renault', 'peugeot',
    'fiat', 'skoda', 'opel', 'nissan',
    'kia', 'hyundai', 'volvo', 'mazda',
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

    // Only show a few scattered, large, very faint icons — not a grid
    const positions = [
        { slug: BRAND_SLUGS[0], left: '5%', top: '10%', size: 48, rotate: -15 },
        { slug: BRAND_SLUGS[1], left: '85%', top: '5%', size: 40, rotate: 10 },
        { slug: BRAND_SLUGS[2], left: '15%', top: '65%', size: 36, rotate: 5 },
        { slug: BRAND_SLUGS[3], left: '75%', top: '60%', size: 44, rotate: -8 },
        { slug: BRAND_SLUGS[4], left: '45%', top: '85%', size: 32, rotate: 12 },
        { slug: BRAND_SLUGS[5], left: '92%', top: '40%', size: 38, rotate: -20 },
        { slug: BRAND_SLUGS[6], left: '3%', top: '40%', size: 34, rotate: 8 },
        { slug: BRAND_SLUGS[7], left: '60%', top: '15%', size: 30, rotate: -5 },
    ];

    const iconColor = isDark ? 'white' : '57534e';

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
            <div
                className="absolute inset-0 transition-opacity duration-1000"
                style={{ opacity: loaded ? (isDark ? 0.03 : 0.06) : 0 }}
            >
                {positions.map((item, i) => (
                    <div
                        key={i}
                        className="absolute flex items-center justify-center"
                        style={{
                            left: item.left,
                            top: item.top,
                            transform: `rotate(${item.rotate}deg)`,
                        }}
                    >
                        <img
                            src={`https://cdn.simpleicons.org/${item.slug}/${iconColor}`}
                            alt=""
                            loading="lazy"
                            className="object-contain"
                            style={{ width: item.size, height: item.size }}
                            onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none';
                            }}
                        />
                    </div>
                ))}
            </div>
            {/* Soft edge fade */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,#e7e5e4_95%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_50%,#0c0a09_95%)]" />
        </div>
    );
}
