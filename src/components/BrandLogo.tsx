'use client';

import { useState } from 'react';

interface BrandLogoProps {
    brand: string;
    className?: string; // e.g. w-8 h-8
    color?: string; // Optional: 'white', 'black', or hex code
}

// Simple Icons slug mappings (for cases where brand name != slug)
const simpleIconSlugs: Record<string, string> = {
    'mercedes-benz': 'mercedes',
    'mercedes': 'mercedes',
    'alfa romeo': 'alfaromeo',
    'land rover': 'landrover',
    'chery': 'chery',
    'togg': 'togg',
    'tofaş': 'fiat', // Tofaş uses Fiat logo (subsidiary)
    'vw': 'volkswagen',
    'ds': 'dsautomobiles',
    'mg': 'mg',
    'mini': 'mini',
    'jaguar': 'jaguar',
    'cupra': 'cupra',
};

// Fallback Logo.dev API token
const LOGO_DEV_TOKEN = 'pk_UJxN50N7SQehlwjjATOFcQ';

// Brand domains (keep as fallback)
const brandDomains: Record<string, string> = {
    'fiat': 'fiat.com',
    'renault': 'renault.com',
    'volkswagen': 'volkswagen.com',
    'honda': 'honda.com',
    'toyota': 'toyota.com',
    'hyundai': 'hyundai.com',
    'ford': 'ford.com',
    'dacia': 'dacia.com',
    'peugeot': 'peugeot.com',
    'skoda': 'skoda-auto.com',
    'opel': 'opel.com',
    'citroen': 'citroen.com',
    'nissan': 'nissan.com',
    'kia': 'kia.com',
    'bmw': 'bmw.com',
    'mercedes': 'mercedes-benz.com',
    'mercedes-benz': 'mercedes-benz.com',
    'audi': 'audi.com',
    'seat': 'seat.com',
    'volvo': 'volvocars.com',
    'mazda': 'mazda.com',
    'tesla': 'tesla.com',
    'togg': 'togg.com.tr',
    'chery': 'cheryinternational.com',
    'porsche': 'porsche.com',
    'land rover': 'landrover.com',
    'jeep': 'jeep.com',
    'suzuki': 'suzuki.com',
    'mg': 'mgmotor.eu',
    'cupra': 'cupraofficial.com',
    'alfa romeo': 'alfaromeo.com',
    'mini': 'mini.com',
    'ds': 'dsautomobiles.com',
    'mitsubishi': 'mitsubishi-motors.com',
};

// Brand colors for text fallback
const brandColors: Record<string, string> = {
    'fiat': '#9A0000',
    'renault': '#FFCC00',
    'volkswagen': '#001E50',
    'honda': '#CC0000',
    'toyota': '#CC0000',
    'hyundai': '#002C5F',
    'ford': '#003478',
    'dacia': '#646B52',
    'peugeot': '#000000',
    'skoda': '#4BA82E',
    'opel': '#000000',
    'citroen': '#AC1D26',
    'nissan': '#C3002F',
    'kia': '#05141F',
    'bmw': '#0066B1',
    'mercedes': '#000000',
    'mercedes-benz': '#000000',
    'audi': '#BB0A30',
    'seat': '#E33739',
    'volvo': '#003057',
    'mazda': '#910D29',
    'tesla': '#CC0000',
    'togg': '#1DB954',
    'chery': '#D4001A',
    'porsche': '#000000',
    'land rover': '#005A2B',
    'jeep': '#1D252C',
    'suzuki': '#E30613',
    'mg': '#000000',
    'cupra': '#000000',
    'alfa romeo': '#8B0000',
    'mini': '#000000',
    'ds': '#000000',
    'mitsubishi': '#CC0000',
};

export default function BrandLogo({ brand, className = 'w-10 h-10', color }: BrandLogoProps) {
    const [logoStage, setLogoStage] = useState(0); // 0=local, 1=simpleicons, 2=logo.dev, 3=text

    const brandKey = brand.toLowerCase().trim();
    const slug = simpleIconSlugs[brandKey] || brandKey.replace(/\s+/g, '');
    const domain = brandDomains[brandKey];
    const bgColor = brandColors[brandKey] || '#4B5563';

    // Priority order:
    // 0. Local file: /brands/{slug}.png
    const localUrl = `/brands/${slug}.png`;
    // 1. Simple Icons CDN
    const simpleIconsUrl = `https://cdn.simpleicons.org/${slug}${color ? '/' + color : ''}`;
    // 2. Logo.dev
    const logoDevUrl = domain ? `https://img.logo.dev/${domain}?token=${LOGO_DEV_TOKEN}` : null;

    const getInitials = (name: string) => {
        const lower = name.toLowerCase();
        if (lower === 'volkswagen') return 'VW';
        if (lower === 'mercedes-benz') return 'MB';
        if (lower === 'alfa romeo') return 'AR';
        if (lower === 'land rover') return 'LR';
        return name.substring(0, 2).toUpperCase();
    };

    const handleError = () => {
        setLogoStage(prev => {
            const next = prev + 1;
            // Skip logo.dev if no domain
            if (next === 2 && !logoDevUrl) return 3;
            return next;
        });
    };

    // Stage 3: Text fallback
    if (logoStage >= 3) {
        return (
            <div
                className={`flex items-center justify-center rounded-md font-bold text-white text-xs ${className}`}
                style={{ backgroundColor: bgColor }}
            >
                {getInitials(brand)}
            </div>
        );
    }

    // Determine current URL based on stage
    let currentUrl = localUrl;
    if (logoStage === 1) currentUrl = simpleIconsUrl;
    if (logoStage === 2) currentUrl = logoDevUrl || '';

    return (
        <img
            src={currentUrl}
            alt={`${brand} logo`}
            className={`object-contain transition-opacity duration-300 ${className}`}
            onError={handleError}
        />
    );
}

