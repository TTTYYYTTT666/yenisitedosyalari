import Link from 'next/link';
import { brands, getTotalIssuesCount } from '@/data/cars';
import BrandLogo from '@/components/BrandLogo';

export default function BrandsPage() {
    const totalIssues = getTotalIssuesCount();

    return (
        <div className="min-h-screen bg-stone-50 dark:bg-[#0c0a09] py-10 lg:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-4">
                        Tüm Markalar
                    </h1>
                    <p className="text-base text-stone-500 max-w-2xl mx-auto">
                        Veritabanımızda {brands.length} farklı marka ve {totalIssues} kronik sorun kaydı bulunmaktadır.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {brands.map((brand) => (
                        <div key={brand.id} className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 p-5 hover:border-orange-300 dark:hover:border-orange-800 transition-colors">
                            <div className="flex items-center justify-between mb-5">
                                <div className="w-12 h-12 bg-white dark:bg-stone-800 rounded-lg flex items-center justify-center p-2 border border-stone-200 dark:border-stone-700">
                                    <BrandLogo brand={brand.name} />
                                </div>
                                <span className="px-2.5 py-0.5 bg-stone-100 dark:bg-stone-800 rounded text-xs font-medium text-stone-500">
                                    {brand.models.length} Model
                                </span>
                            </div>

                            <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-3">
                                {brand.name}
                            </h2>

                            <div className="space-y-2.5">
                                {brand.models.map((model) => (
                                    <div key={model.id} className="group">
                                        <h3 className="font-medium text-stone-600 dark:text-stone-300 text-sm mb-1.5">{model.name}</h3>
                                        <div className="flex flex-wrap gap-1.5">
                                            {model.variants.map((variant) => (
                                                <Link
                                                    key={variant.id}
                                                    href={`/arac/${variant.slug}`}
                                                    className="text-xs px-2 py-0.5 bg-stone-50 dark:bg-stone-800 hover:bg-orange-50 dark:hover:bg-orange-900/20 text-stone-500 hover:text-orange-600 dark:hover:text-orange-400 rounded transition-colors border border-stone-200 dark:border-stone-700 hover:border-orange-200 dark:hover:border-orange-800"
                                                >
                                                    {variant.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
