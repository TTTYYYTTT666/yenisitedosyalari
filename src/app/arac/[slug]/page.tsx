import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { getCategoryLabel } from '@/data/cars';
import { getCarBySlug, getAllCars } from '@/lib/cars';
import ReliabilityGauge from '@/components/ReliabilityGauge';
import IssueCard from '@/components/IssueCard';
import AdSpace from '@/components/AdSpace';
import BrandLogo from '@/components/BrandLogo';
import { auth } from '@/auth';
import { prisma } from '@/lib/db';
import CommentsSection from '@/components/comments/CommentsSection';
import JsonLd from '@/components/JsonLd';


interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const cars = await getAllCars();
    return cars.map((car) => ({
        slug: car.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const car = await getCarBySlug(slug);

    if (!car) {
        return {
            title: 'Araç Bulunamadı - OTORAPORU.NET',
        };
    }

    return {
        title: `${car.brand} ${car.model} ${car.variant} Sorunları ve Güvenilirlik | OTORAPORU.NET`,
        description: `${car.brand} ${car.model} ${car.variant} kronik sorunları, yaygın arızaları, şanzıman ve motor problemleri. Güvenilirlik puanı: ${car.reliabilityScore}/100. ${car.expertNote ? `Uzman yorumu: ${car.expertNote}` : ''}`,
        alternates: {
            canonical: `/arac/${slug}`,
        },
        openGraph: {
            title: `${car.brand} ${car.model} Kronik Sorunlar ve İnceleme`,
            description: `${car.brand} ${car.model} alınır mı? Kronik arızaları neler? ${car.reliabilityScore}/100 Güvenilirlik Puanı ile detaylı inceleme.`,
            url: `/arac/${slug}`,
            type: 'article',
            authors: ['Otoraporu Ekibi'],
            images: [
                {
                    url: `/arac/${slug}/opengraph-image`,
                    width: 1200,
                    height: 630,
                    alt: `${car.brand} ${car.model} İncelemesi`,
                },
            ],
        },
    };
}

export default async function CarDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const car = await getCarBySlug(slug);

    if (!car) {
        notFound();
    }

    // Group issues by category
    const issuesByCategory = car.issues.reduce((acc, issue) => {
        if (!acc[issue.category]) {
            acc[issue.category] = [];
        }
        acc[issue.category].push(issue);
        return acc;
    }, {} as Record<string, typeof car.issues>);

    const highRiskCount = car.issues.filter(i => i.riskLevel === 'HIGH' || i.riskLevel === 'CRITICAL').length;
    const mediumRiskCount = car.issues.filter(i => i.riskLevel === 'MEDIUM').length;
    const lowRiskCount = car.issues.filter(i => i.riskLevel === 'LOW').length;

    // Fetch Session and Comments
    const session = await auth();

    const currentUser = session?.user?.id ? {
        id: session.user.id,
        name: session.user.name,
        image: session.user.image
    } : null;

    const comments = await prisma.comment.findMany({
        where: { carSlug: slug },
        include: { user: true },
        orderBy: { createdAt: 'desc' }
    });

    return (
        <div className="min-h-screen bg-stone-100 dark:bg-[#0c0a09]">
            <JsonLd data={{
                '@context': 'https://schema.org',
                '@type': 'Vehicle',
                name: `${car.brand} ${car.model} ${car.variant}`,
                manufacturer: {
                    '@type': 'Organization',
                    name: car.brand
                },
                model: car.model,
                vehicleConfiguration: car.variant,
                productionDate: car.years,
                description: car.expertNote || `${car.brand} ${car.model} detaylı kronik sorun analizi ve güvenilirlik raporu.`,
                aggregateRating: {
                    '@type': 'AggregateRating',
                    ratingValue: car.reliabilityScore,
                    bestRating: '100',
                    worstRating: '0',
                    ratingCount: '150' // Placeholder mainly
                },
                offers: car.price ? {
                    '@type': 'Offer',
                    price: car.price,
                    priceCurrency: 'TRY',
                    availability: 'https://schema.org/InStock'
                } : undefined,
                brand: {
                    '@type': 'Brand',
                    name: car.brand
                }
            }} />
            <JsonLd data={{
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                    {
                        '@type': 'ListItem',
                        position: 1,
                        name: 'Ana Sayfa',
                        item: 'https://otoraporu.net'
                    },
                    {
                        '@type': 'ListItem',
                        position: 2,
                        name: car.brand,
                        item: `https://otoraporu.net/markalar` // Ideally brand page
                    },
                    {
                        '@type': 'ListItem',
                        position: 3,
                        name: `${car.brand} ${car.model}`,
                        item: `https://otoraporu.net/arac/${car.slug}`
                    }
                ]
            }} />
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-white to-stone-50 dark:from-stone-950 dark:to-[#0c0a09] pt-6 pb-10 lg:pt-8 lg:pb-14 border-b border-stone-200 dark:border-stone-800">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-1.5 text-xs text-stone-400 dark:text-stone-500 mb-6 lg:mb-8">
                        <Link href="/" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                            Ana Sayfa
                        </Link>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <Link href="/markalar" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors text-stone-500 dark:text-stone-400">
                            {car.brand}
                        </Link>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-stone-700 dark:text-stone-300 font-medium">{car.model}</span>
                    </nav>

                    <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 items-start">
                        {/* Car Info with Logo */}
                        <div className="lg:col-span-2">
                            <div className="flex items-start gap-5 mb-4">
                                {/* Brand Logo */}
                                <div className="shrink-0 w-16 h-16 md:w-20 md:h-20 bg-white dark:bg-stone-800 rounded-2xl flex items-center justify-center p-3 border border-stone-200 dark:border-stone-700 shadow-sm">
                                    <BrandLogo brand={car.brand} className="w-full h-full" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <span className="inline-block px-2.5 py-1 bg-stone-100 border border-stone-200 dark:bg-stone-800 dark:border-stone-700 rounded-md text-stone-500 dark:text-stone-400 text-xs font-medium mb-2">
                                        {car.generation}
                                    </span>
                                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 dark:text-white leading-tight">
                                        {car.brand} {car.model}
                                    </h1>
                                </div>
                            </div>

                            <div className="ml-0 md:ml-[84px] lg:ml-[100px]">
                                <p className="text-xl md:text-2xl text-orange-600 dark:text-orange-500 font-bold mb-1">{car.variant}</p>
                                <p className="text-stone-500 dark:text-stone-400 text-sm mb-5">{car.years}</p>

                                {/* Risk Summary - bigger badges */}
                                <div className="flex flex-wrap gap-2.5">
                                    {highRiskCount > 0 && (
                                        <div className="flex items-center gap-2 px-3.5 py-2 bg-red-50 border border-red-200 dark:bg-red-950/40 dark:border-red-800/40 rounded-lg shadow-sm">
                                            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                                            <span className="text-red-700 dark:text-red-400 text-sm font-semibold">{highRiskCount} Yüksek Risk</span>
                                        </div>
                                    )}
                                    {mediumRiskCount > 0 && (
                                        <div className="flex items-center gap-2 px-3.5 py-2 bg-amber-50 border border-amber-200 dark:bg-amber-950/40 dark:border-amber-800/40 rounded-lg shadow-sm">
                                            <span className="w-2 h-2 bg-amber-500 rounded-full" />
                                            <span className="text-amber-700 dark:text-amber-400 text-sm font-semibold">{mediumRiskCount} Orta Risk</span>
                                        </div>
                                    )}
                                    {lowRiskCount > 0 && (
                                        <div className="flex items-center gap-2 px-3.5 py-2 bg-green-50 border border-green-200 dark:bg-green-950/40 dark:border-green-800/40 rounded-lg shadow-sm">
                                            <span className="w-2 h-2 bg-green-500 rounded-full" />
                                            <span className="text-green-700 dark:text-green-400 text-sm font-semibold">{lowRiskCount} Düşük Risk</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Reliability Score - bigger */}
                        <div className="flex justify-center lg:justify-end">
                            <div className="bg-white dark:bg-stone-800/50 rounded-2xl p-6 lg:p-8 border border-stone-200 dark:border-stone-700/50 shadow-lg dark:shadow-none w-full max-w-[220px]">
                                <h3 className="text-center text-stone-500 dark:text-stone-400 text-xs font-bold mb-4 uppercase tracking-widest">Güvenilirlik Puanı</h3>
                                <ReliabilityGauge score={car.reliabilityScore} size="lg" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Issues Section - bigger */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Expert Note - bigger */}
                        {car.expertNote && (
                            <div className="p-6 bg-amber-50 dark:bg-amber-950/15 rounded-2xl border border-amber-200 dark:border-amber-900/40 shadow-sm">
                                <h3 className="text-base font-bold text-amber-800 dark:text-amber-400 mb-3 flex items-center gap-2.5">
                                    <div className="w-8 h-8 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center shrink-0">
                                        <svg className="w-4.5 h-4.5 text-amber-600 dark:text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                        </svg>
                                    </div>
                                    Sanayi Notu
                                </h3>
                                <p className="text-base text-stone-700 dark:text-stone-300 italic leading-relaxed">
                                    &ldquo;{car.expertNote}&rdquo;
                                </p>
                                <div className="mt-3 text-[11px] font-bold text-amber-600 dark:text-amber-600 uppercase tracking-widest">
                                    Oto Sanayi Deneyimi
                                </div>
                            </div>
                        )}

                        {/* Chronic Issues - bigger heading */}
                        <section>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-red-100 dark:bg-red-950/30 rounded-xl flex items-center justify-center shrink-0">
                                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                </div>
                                <div>
                                    <h2 className="text-xl md:text-2xl font-bold text-stone-900 dark:text-stone-100">
                                        Kronik Sorunlar
                                    </h2>
                                    <p className="text-sm text-stone-500 dark:text-stone-400">{car.issues.length} bilinen sorun kaydı</p>
                                </div>
                            </div>

                            {Object.entries(issuesByCategory).map(([category, issues]) => (
                                <div key={category} className="mb-6">
                                    <h3 className="text-sm font-bold text-stone-600 dark:text-stone-400 mb-3 flex items-center gap-2 uppercase tracking-wider">
                                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                                        {getCategoryLabel(category)}
                                        <span className="text-stone-400 dark:text-stone-500 font-normal">({issues.length})</span>
                                    </h3>
                                    <div className="space-y-3">
                                        {issues.map((issue) => (
                                            <IssueCard key={issue.id} issue={issue} />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </section>

                        <AdSpace type="expert" />

                        <CommentsSection
                            carSlug={slug}
                            currentUser={currentUser}
                            comments={comments}
                        />
                    </div>

                    {/* Sidebar - bigger, stickier */}
                    <div className="space-y-5 lg:sticky lg:top-20">
                        {/* Buying Tips - bigger */}
                        <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-6 shadow-sm">
                            <h3 className="text-base font-bold text-stone-900 dark:text-stone-100 mb-4 flex items-center gap-2.5">
                                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-950/30 rounded-lg flex items-center justify-center shrink-0">
                                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                Satın Alma Öncesi Kontrol
                            </h3>
                            <ul className="space-y-3">
                                {car.buyingTips.map((tip, index) => (
                                    <li key={index} className="flex items-start gap-2.5 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                                        <svg className="w-4.5 h-4.5 text-orange-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>{tip}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Pros - bigger */}
                        <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-6 shadow-sm">
                            <h3 className="text-base font-bold text-green-700 dark:text-green-400 mb-4 flex items-center gap-2.5">
                                <div className="w-8 h-8 bg-green-100 dark:bg-green-950/30 rounded-lg flex items-center justify-center shrink-0">
                                    <svg className="w-4 h-4 text-green-600 dark:text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                    </svg>
                                </div>
                                Artıları
                            </h3>
                            <ul className="space-y-2.5">
                                {car.pros.map((pro, index) => (
                                    <li key={index} className="flex items-start gap-2.5 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                                        <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                                        <span>{pro}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Cons - bigger */}
                        <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-6 shadow-sm">
                            <h3 className="text-base font-bold text-red-700 dark:text-red-400 mb-4 flex items-center gap-2.5">
                                <div className="w-8 h-8 bg-red-100 dark:bg-red-950/30 rounded-lg flex items-center justify-center shrink-0">
                                    <svg className="w-4 h-4 text-red-600 dark:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
                                    </svg>
                                </div>
                                Eksileri
                            </h3>
                            <ul className="space-y-2.5">
                                {car.cons.map((con, index) => (
                                    <li key={index} className="flex items-start gap-2.5 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                                        <span className="text-red-500 mt-0.5 shrink-0">✗</span>
                                        <span>{con}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Back to Search - bigger */}
                        <Link
                            href="/"
                            className="block w-full text-center px-5 py-3 bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-700 transition-colors shadow-md hover:shadow-lg"
                        >
                            Yeni Araç Ara
                        </Link>
                    </div>
                </div>

                <div className="mt-12">
                    <AdSpace type="insurance" />
                </div>
            </div>
        </div>
    );
}
