import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { getCarBySlug, cars, getCategoryLabel } from '@/data/cars';
import ReliabilityGauge from '@/components/ReliabilityGauge';
import IssueCard from '@/components/IssueCard';
import AdSpace from '@/components/AdSpace';
import { auth } from '@/auth';
import { prisma } from '@/lib/db';
import CommentsSection from '@/components/comments/CommentsSection';


interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return cars.map((car) => ({
        slug: car.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const car = getCarBySlug(slug);

    if (!car) {
        return {
            title: 'Araç Bulunamadı - SORUNSUZAL',
        };
    }

    return {
        title: `${car.brand} ${car.model} ${car.variant} Sorunları ve Güvenilirlik | SORUNSUZAL`,
        description: `${car.brand} ${car.model} ${car.variant} kronik sorunları, yaygın arızaları ve satın alma öncesi kontrol listesi. Güvenilirlik puanı: ${car.reliabilityScore}/100`,
    };
}

export default async function CarDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const car = getCarBySlug(slug);

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

    const highRiskCount = car.issues.filter(i => i.riskLevel === 'HIGH').length;
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
        <div className="min-h-screen bg-stone-50 dark:bg-[#0c0a09]">
            {/* Hero Section */}
            <section className="bg-stone-900 dark:bg-stone-950 text-white py-10 lg:py-14 border-b border-stone-800">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-1.5 text-xs text-stone-500 mb-5">
                        <Link href="/" className="hover:text-stone-300 transition-colors">
                            Ana Sayfa
                        </Link>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span>{car.brand}</span>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-stone-300">{car.model}</span>
                    </nav>

                    <div className="grid lg:grid-cols-3 gap-8 items-center">
                        {/* Car Info */}
                        <div className="lg:col-span-2">
                            <span className="inline-block px-2.5 py-1 bg-stone-800 border border-stone-700 rounded text-stone-400 text-xs font-medium mb-3">
                                {car.generation}
                            </span>
                            <h1 className="text-3xl md:text-4xl font-bold mb-1.5 tracking-tight">
                                {car.brand} {car.model}
                            </h1>
                            <p className="text-lg text-orange-500 font-semibold mb-1">{car.variant}</p>
                            <p className="text-stone-400 text-sm">{car.years}</p>

                            {/* Risk Summary */}
                            <div className="flex flex-wrap gap-2 mt-5">
                                {highRiskCount > 0 && (
                                    <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-red-950/40 border border-red-800/40 rounded-md">
                                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                                        <span className="text-red-400 text-xs font-medium">{highRiskCount} Yüksek Risk</span>
                                    </div>
                                )}
                                {mediumRiskCount > 0 && (
                                    <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-amber-950/40 border border-amber-800/40 rounded-md">
                                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                                        <span className="text-amber-400 text-xs font-medium">{mediumRiskCount} Orta Risk</span>
                                    </div>
                                )}
                                {lowRiskCount > 0 && (
                                    <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-green-950/40 border border-green-800/40 rounded-md">
                                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                                        <span className="text-green-400 text-xs font-medium">{lowRiskCount} Düşük Risk</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Reliability Score */}
                        <div className="flex justify-center lg:justify-end">
                            <div className="bg-stone-800/50 rounded-xl p-5 border border-stone-700/50">
                                <h3 className="text-center text-stone-400 text-xs font-medium mb-3 uppercase tracking-wider">Güvenilirlik Puanı</h3>
                                <ReliabilityGauge score={car.reliabilityScore} size="lg" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Issues Section */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Expert Note */}
                        {car.expertNote && (
                            <div className="p-5 bg-amber-50 dark:bg-amber-950/15 rounded-xl border border-amber-200 dark:border-amber-900/40">
                                <h3 className="text-sm font-bold text-amber-800 dark:text-amber-400 mb-2 flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                    Sanayi Notu
                                </h3>
                                <p className="text-sm text-stone-700 dark:text-stone-300 italic leading-relaxed">
                                    &ldquo;{car.expertNote}&rdquo;
                                </p>
                                <div className="mt-2 text-[10px] font-semibold text-amber-600 dark:text-amber-600 uppercase tracking-wider">
                                    Oto Sanayi Deneyimi
                                </div>
                            </div>
                        )}

                        {/* Chronic Issues */}
                        <section>
                            <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                                Kronik Sorunlar ({car.issues.length})
                            </h2>

                            {Object.entries(issuesByCategory).map(([category, issues]) => (
                                <div key={category} className="mb-5">
                                    <h3 className="text-sm font-semibold text-stone-500 dark:text-stone-400 mb-3 flex items-center gap-1.5 uppercase tracking-wider">
                                        <span className="w-1 h-1 bg-orange-500 rounded-full" />
                                        {getCategoryLabel(category)}
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

                    {/* Sidebar */}
                    <div className="space-y-4">
                        {/* Buying Tips */}
                        <div className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 p-5">
                            <h3 className="text-sm font-bold text-stone-900 dark:text-stone-100 mb-3 flex items-center gap-2">
                                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                                Satın Alma Öncesi Kontrol
                            </h3>
                            <ul className="space-y-2">
                                {car.buyingTips.map((tip, index) => (
                                    <li key={index} className="flex items-start gap-2 text-sm text-stone-600 dark:text-stone-400">
                                        <svg className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>{tip}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Pros */}
                        <div className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 p-5">
                            <h3 className="text-sm font-bold text-green-700 dark:text-green-400 mb-3 flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                </svg>
                                Artıları
                            </h3>
                            <ul className="space-y-1.5">
                                {car.pros.map((pro, index) => (
                                    <li key={index} className="flex items-start gap-2 text-sm text-stone-600 dark:text-stone-400">
                                        <span className="text-green-500 mt-1.5 shrink-0">•</span>
                                        <span>{pro}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Cons */}
                        <div className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 p-5">
                            <h3 className="text-sm font-bold text-red-700 dark:text-red-400 mb-3 flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
                                </svg>
                                Eksileri
                            </h3>
                            <ul className="space-y-1.5">
                                {car.cons.map((con, index) => (
                                    <li key={index} className="flex items-start gap-2 text-sm text-stone-600 dark:text-stone-400">
                                        <span className="text-red-500 mt-1.5 shrink-0">•</span>
                                        <span>{con}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Back to Search */}
                        <Link
                            href="/"
                            className="block w-full text-center px-4 py-2.5 bg-orange-600 text-white text-sm font-semibold rounded-lg hover:bg-orange-700 transition-colors"
                        >
                            Yeni Araç Ara
                        </Link>
                    </div>
                </div>

                <div className="mt-10">
                    <AdSpace type="insurance" />
                </div>
            </div>
        </div>
    );
}
