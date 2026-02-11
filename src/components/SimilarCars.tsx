'use client';

import Link from 'next/link';
import { Car } from '@/types';
import BrandLogo from '@/components/BrandLogo';

interface SimilarCarsProps {
    cars: Car[];
}

export default function SimilarCars({ cars }: SimilarCarsProps) {
    const getScoreColor = (score: number) => {
        if (score >= 80) return 'bg-green-600';
        if (score >= 60) return 'bg-amber-500';
        return 'bg-red-500';
    };

    if (!cars || cars.length === 0) return null;

    return (
        <div className="mt-12">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-stone-900 dark:text-stone-100">
                <svg className="w-5 h-5 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                İlginizi Çekebilecek Diğer Araçlar
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cars.map((car) => (
                    <Link
                        key={car.id}
                        href={`/arac/${car.slug}`}
                        className="group relative bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 overflow-hidden hover:border-orange-400 transition-all duration-200"
                    >
                        {/* Car Image */}
                        <div className="h-36 relative overflow-hidden">
                            <img
                                src={car.image || `https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80`}
                                alt={`${car.brand} ${car.model}`}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        </div>

                        {/* Card Content */}
                        <div className="p-4">
                            <div className="flex items-start justify-between mb-2">
                                <div>
                                    <div className="flex items-center gap-1.5 mb-1">
                                        <div className="w-6 h-6 bg-white dark:bg-stone-800 rounded flex items-center justify-center p-0.5 border border-stone-200 dark:border-stone-700">
                                            <BrandLogo brand={car.brand} />
                                        </div>
                                        <p className="text-xs text-orange-600 dark:text-orange-400 font-semibold">
                                            {car.brand}
                                        </p>
                                    </div>
                                    <h3 className="text-base font-bold text-stone-900 dark:text-stone-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                                        {car.model} {car.variant}
                                    </h3>
                                    <p className="text-xs text-stone-400">
                                        {car.years}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${getScoreColor(car.reliabilityScore)} text-white font-bold text-sm`}>
                                        {car.reliabilityScore}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-2.5 border-t border-stone-100 dark:border-stone-800">
                                <span className="text-xs font-semibold text-stone-900 dark:text-stone-100">
                                    {car.price ? `~${(car.price / 1000000).toFixed(2)} M ₺` : 'Fiyat Bilinmiyor'}
                                </span>
                                <span className="text-xs text-orange-500 font-medium group-hover:translate-x-0.5 transition-transform">İncele →</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
