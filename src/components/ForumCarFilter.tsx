'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Brand {
    brand: string;
    models: { model: string; slug: string }[];
}

interface ForumCarFilterProps {
    brands: Brand[];
    currentCar: string | null;
    currentCategory: string | null;
}

export default function ForumCarFilter({ brands, currentCar, currentCategory }: ForumCarFilterProps) {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedBrand, setSelectedBrand] = useState('');

    const selectedBrandData = brands.find(b => b.brand === selectedBrand);

    const handleBrandChange = (brand: string) => {
        setSelectedBrand(brand);
    };

    const handleModelSelect = (slug: string) => {
        const params = new URLSearchParams();
        params.set('arac', slug);
        if (currentCategory) params.set('kategori', currentCategory);
        router.push(`/forum?${params.toString()}`);
        setIsOpen(false);
        setSelectedBrand('');
    };

    const handleClearFilter = () => {
        const params = new URLSearchParams();
        if (currentCategory) params.set('kategori', currentCategory);
        const qs = params.toString();
        router.push(`/forum${qs ? `?${qs}` : ''}`);
        setIsOpen(false);
        setSelectedBrand('');
    };

    return (
        <div className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 p-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between text-xs font-bold text-stone-400 uppercase tracking-wider"
            >
                <span>Arac Filtrele</span>
                <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <div className="mt-3 space-y-2">
                    {/* Brand select */}
                    <select
                        value={selectedBrand}
                        onChange={(e) => handleBrandChange(e.target.value)}
                        className="w-full px-3 py-2 rounded-md border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-sm text-stone-800 dark:text-stone-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                        <option value="">Marka seciniz</option>
                        {brands.map(b => (
                            <option key={b.brand} value={b.brand}>{b.brand}</option>
                        ))}
                    </select>

                    {/* Model select */}
                    {selectedBrandData && (
                        <select
                            defaultValue=""
                            onChange={(e) => {
                                if (e.target.value) handleModelSelect(e.target.value);
                            }}
                            className="w-full px-3 py-2 rounded-md border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-sm text-stone-800 dark:text-stone-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        >
                            <option value="">Model seciniz</option>
                            {selectedBrandData.models.map(m => (
                                <option key={m.slug} value={m.slug}>{m.model}</option>
                            ))}
                        </select>
                    )}

                    {/* Clear filter */}
                    {currentCar && (
                        <button
                            onClick={handleClearFilter}
                            className="w-full text-xs text-orange-600 hover:underline font-medium py-1"
                        >
                            Filtreyi Kaldir
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}
