import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { brands } from '@/data/cars';
import { getAllCars } from '@/lib/cars';
import BrandLogo from '@/components/BrandLogo';
import JsonLd from '@/components/JsonLd';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return brands.map((brand) => ({
        slug: brand.id,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const brand = brands.find(b => b.id === slug);
    if (!brand) return { title: 'Marka Bulunamadı' };

    const totalVariants = brand.models.reduce((acc, m) => acc + m.variants.length, 0);

    return {
        title: `${brand.name} Araçların Kronik Sorunları — ${totalVariants} Model İncelemesi | OTORAPORU.NET`,
        description: `${brand.name} marka araçların kronik sorunları, yaygın arızaları ve güvenilirlik analizleri. ${brand.models.map(m => m.name).join(', ')} modelleri detaylı inceleme ve alım rehberi.`,
        keywords: [
            `${brand.name} kronik sorunları`,
            `${brand.name} arıza`,
            `${brand.name} güvenilirlik`,
            `${brand.name} alınır mı`,
            ...brand.models.map(m => `${brand.name} ${m.name} sorunları`),
        ],
        alternates: {
            canonical: `https://otoraporu.net/markalar/${slug}`,
        },
        openGraph: {
            title: `${brand.name} Araçların Kronik Sorunları ve Güvenilirlik Analizi`,
            description: `${brand.name} markanın ${totalVariants} modelinin kronik sorunları, arızaları ve alım tavsiyeleri.`,
            url: `https://otoraporu.net/markalar/${slug}`,
            type: 'website',
        },
    };
}

export default async function BrandDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const brand = brands.find(b => b.id === slug);

    if (!brand) {
        notFound();
    }

    const allCars = await getAllCars();
    const brandCars = allCars.filter(c =>
        c.brand.toLowerCase() === brand.name.toLowerCase() ||
        c.brand.toLowerCase().includes(brand.name.toLowerCase()) ||
        brand.name.toLowerCase().includes(c.brand.toLowerCase())
    );

    // Calculate brand average reliability
    const avgReliability = brandCars.length > 0
        ? Math.round(brandCars.reduce((acc, c) => acc + c.reliabilityScore, 0) / brandCars.length)
        : 0;

    const totalIssues = brandCars.reduce((acc, c) => acc + c.issues.length, 0);

    return (
        <div className="min-h-screen bg-stone-50 dark:bg-[#0c0a09] py-10 lg:py-16">
            <JsonLd data={{
                '@context': 'https://schema.org',
                '@type': 'CollectionPage',
                name: `${brand.name} Araçların Kronik Sorunları`,
                description: `${brand.name} marka araçların kronik sorunları ve güvenilirlik analizleri`,
                url: `https://otoraporu.net/markalar/${slug}`,
                mainEntity: {
                    '@type': 'Brand',
                    name: brand.name,
                }
            }} />
            <JsonLd data={{
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://otoraporu.net' },
                    { '@type': 'ListItem', position: 2, name: 'Markalar', item: 'https://otoraporu.net/markalar' },
                    { '@type': 'ListItem', position: 3, name: brand.name, item: `https://otoraporu.net/markalar/${slug}` }
                ]
            }} />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-1.5 text-xs text-stone-400 dark:text-stone-500 mb-8">
                    <Link href="/" className="hover:text-orange-600 transition-colors">Ana Sayfa</Link>
                    <span>/</span>
                    <Link href="/markalar" className="hover:text-orange-600 transition-colors">Markalar</Link>
                    <span>/</span>
                    <span className="text-stone-700 dark:text-stone-300 font-medium">{brand.name}</span>
                </nav>

                {/* Brand Header */}
                <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-6 lg:p-8 mb-8 shadow-sm">
                    <div className="flex items-center gap-5 mb-6">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-white dark:bg-stone-800 rounded-2xl flex items-center justify-center p-3 border border-stone-200 dark:border-stone-700 shadow-sm">
                            <BrandLogo brand={brand.name} className="w-full h-full" />
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-white">
                                {brand.name} Kronik Sorunları
                            </h1>
                            <p className="text-stone-500 dark:text-stone-400 mt-1">
                                Tüm {brand.name} modelleri ve yaygın arızaları
                            </p>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-stone-50 dark:bg-stone-800/50 rounded-xl p-4 text-center">
                            <div className="text-2xl font-bold text-stone-800 dark:text-white">{brand.models.length}</div>
                            <div className="text-xs text-stone-500 mt-1">Model</div>
                        </div>
                        <div className="bg-stone-50 dark:bg-stone-800/50 rounded-xl p-4 text-center">
                            <div className="text-2xl font-bold text-stone-800 dark:text-white">{totalIssues}</div>
                            <div className="text-xs text-stone-500 mt-1">Sorun Kaydı</div>
                        </div>
                        <div className="bg-stone-50 dark:bg-stone-800/50 rounded-xl p-4 text-center">
                            <div className={`text-2xl font-bold ${avgReliability >= 75 ? 'text-green-600' :
                                    avgReliability >= 60 ? 'text-amber-600' : 'text-red-600'
                                }`}>{avgReliability}/100</div>
                            <div className="text-xs text-stone-500 mt-1">Ort. Güvenilirlik</div>
                        </div>
                    </div>
                </div>

                {/* Models List */}
                <div className="space-y-6">
                    {brand.models.map((model) => {
                        const modelCars = brandCars.filter(c =>
                            c.model.toLowerCase() === model.name.toLowerCase() ||
                            c.model.toLowerCase().includes(model.name.toLowerCase())
                        );
                        const modelAvg = modelCars.length > 0
                            ? Math.round(modelCars.reduce((a, c) => a + c.reliabilityScore, 0) / modelCars.length)
                            : 0;

                        return (
                            <section key={model.id} className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 p-5 lg:p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100">
                                        {brand.name} {model.name}
                                    </h2>
                                    {modelAvg > 0 && (
                                        <span className={`text-sm font-bold px-2.5 py-1 rounded-lg ${modelAvg >= 75 ? 'bg-green-50 text-green-700 dark:bg-green-950/30 dark:text-green-400' :
                                                modelAvg >= 60 ? 'bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400' :
                                                    'bg-red-50 text-red-700 dark:bg-red-950/30 dark:text-red-400'
                                            }`}>
                                            {modelAvg}/100
                                        </span>
                                    )}
                                </div>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                    {model.variants.map((variant) => {
                                        const varCar = brandCars.find(c => c.slug === variant.slug);
                                        return (
                                            <Link
                                                key={variant.id}
                                                href={`/arac/${variant.slug}`}
                                                className="group flex items-center justify-between p-3 bg-stone-50 dark:bg-stone-800/50 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/10 border border-stone-200 dark:border-stone-700 hover:border-orange-300 dark:hover:border-orange-700 transition-all"
                                            >
                                                <div className="min-w-0">
                                                    <h3 className="text-sm font-semibold text-stone-800 dark:text-stone-200 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors truncate">
                                                        {variant.name}
                                                    </h3>
                                                    <p className="text-xs text-stone-400 dark:text-stone-500">{variant.years}</p>
                                                </div>
                                                {varCar && (
                                                    <div className="flex items-center gap-2 shrink-0 ml-2">
                                                        <span className="text-xs text-stone-400">{varCar.issues.length} sorun</span>
                                                        <span className={`text-xs font-bold ${varCar.reliabilityScore >= 75 ? 'text-green-600' :
                                                                varCar.reliabilityScore >= 60 ? 'text-amber-600' : 'text-red-600'
                                                            }`}>
                                                            {varCar.reliabilityScore}
                                                        </span>
                                                    </div>
                                                )}
                                            </Link>
                                        );
                                    })}
                                </div>
                            </section>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
