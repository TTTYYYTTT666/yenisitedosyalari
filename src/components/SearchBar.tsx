'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { brands } from '@/data/cars';

export default function SearchBar() {
    const router = useRouter();
    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedModel, setSelectedModel] = useState('');
    const [selectedVariant, setSelectedVariant] = useState('');
    const [availableModels, setAvailableModels] = useState<{ id: string; name: string }[]>([]);
    const [availableVariants, setAvailableVariants] = useState<{ id: string; name: string; slug: string }[]>([]);

    useEffect(() => {
        if (selectedBrand) {
            const brand = brands.find(b => b.id === selectedBrand);
            setAvailableModels(brand?.models || []);
            setSelectedModel('');
            setSelectedVariant('');
            setAvailableVariants([]);
        } else {
            setAvailableModels([]);
            setSelectedModel('');
            setSelectedVariant('');
            setAvailableVariants([]);
        }
    }, [selectedBrand]);

    useEffect(() => {
        if (selectedModel) {
            const brand = brands.find(b => b.id === selectedBrand);
            const model = brand?.models.find(m => m.id === selectedModel);
            setAvailableVariants(model?.variants || []);
            setSelectedVariant('');
        } else {
            setAvailableVariants([]);
            setSelectedVariant('');
        }
    }, [selectedModel, selectedBrand]);

    const handleSearch = () => {
        if (selectedVariant) {
            const variant = availableVariants.find(v => v.id === selectedVariant);
            if (variant) {
                router.push(`/arac/${variant.slug}`);
            }
        } else if (selectedModel) {
            if (availableVariants.length > 0) {
                router.push(`/arac/${availableVariants[0].slug}`);
            }
        }
    };

    return (
        <div className="w-full max-w-3xl mx-auto">
            <div className="bg-white dark:bg-stone-900 rounded-xl p-4 border border-stone-300/80 dark:border-stone-800 shadow-xl dark:shadow-none">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                    {/* Brand */}
                    <div className="relative">
                        <label className="block text-xs font-medium text-stone-600 dark:text-stone-400 mb-1.5">
                            Marka
                        </label>
                        <select
                            value={selectedBrand}
                            onChange={(e) => setSelectedBrand(e.target.value)}
                            className="w-full px-3 py-2.5 bg-stone-50 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-lg text-sm text-stone-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all cursor-pointer appearance-none"
                        >
                            <option value="">Marka Seçin</option>
                            {brands.map((brand) => (
                                <option key={brand.id} value={brand.id}>
                                    {brand.name}
                                </option>
                            ))}
                        </select>
                        <div className="absolute right-2.5 bottom-3 pointer-events-none">
                            <svg className="w-4 h-4 text-stone-400 dark:text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>

                    {/* Model */}
                    <div className="relative">
                        <label className="block text-xs font-medium text-stone-600 dark:text-stone-400 mb-1.5">
                            Model
                        </label>
                        <select
                            value={selectedModel}
                            onChange={(e) => setSelectedModel(e.target.value)}
                            disabled={!selectedBrand}
                            className="w-full px-3 py-2.5 bg-stone-50 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-lg text-sm text-stone-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all cursor-pointer appearance-none disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                            <option value="">Model Seçin</option>
                            {availableModels.map((model) => (
                                <option key={model.id} value={model.id}>
                                    {model.name}
                                </option>
                            ))}
                        </select>
                        <div className="absolute right-2.5 bottom-3 pointer-events-none">
                            <svg className="w-4 h-4 text-stone-400 dark:text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>

                    {/* Variant */}
                    <div className="relative">
                        <label className="block text-xs font-medium text-stone-600 dark:text-stone-400 mb-1.5">
                            Versiyon
                        </label>
                        <select
                            value={selectedVariant}
                            onChange={(e) => setSelectedVariant(e.target.value)}
                            disabled={!selectedModel}
                            className="w-full px-3 py-2.5 bg-stone-50 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-lg text-sm text-stone-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all cursor-pointer appearance-none disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                            <option value="">Versiyon Seçin</option>
                            {availableVariants.map((variant) => (
                                <option key={variant.id} value={variant.id}>
                                    {variant.name}
                                </option>
                            ))}
                        </select>
                        <div className="absolute right-2.5 bottom-3 pointer-events-none">
                            <svg className="w-4 h-4 text-stone-400 dark:text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>

                    {/* Search */}
                    <div className="flex items-end">
                        <button
                            onClick={handleSearch}
                            disabled={!selectedBrand}
                            className="w-full px-4 py-2.5 bg-orange-600 text-white text-sm font-semibold rounded-lg hover:bg-orange-700 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-stone-900 transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                        >
                            <span className="flex items-center justify-center gap-1.5">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                Ara
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
