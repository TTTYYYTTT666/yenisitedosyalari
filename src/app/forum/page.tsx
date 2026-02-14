import Link from 'next/link';
import { prisma } from '@/lib/db';
import { Metadata } from 'next';
import { getAllCars } from '@/lib/cars';
import ForumCarFilter from '@/components/ForumCarFilter';

export const metadata: Metadata = {
    title: 'Forum | OTORAPORU.NET',
    description: 'Otomobil deneyimlerinizi paylasin, sorular sorun ve diger arac sahipleriyle tartisin.',
};

const CATEGORIES = [
    { id: 'all', label: 'Tümü' },
    { id: 'Deneyim', label: 'Kullanici Deneyimleri' },
    { id: 'Bakım', label: 'Bakim ve Onarim' },
    { id: 'Soru', label: 'Soru-Cevap' },
    { id: 'Rehber', label: 'Alim Rehberi' },
    { id: 'Haber', label: 'Haberler' },
];

interface ForumPageProps {
    searchParams: Promise<{ arac?: string; kategori?: string; sayfa?: string; marka?: string }>;
}

export default async function ForumPage({ searchParams }: ForumPageProps) {
    const params = await searchParams;
    const carFilter = params.arac || null;
    const categoryFilter = params.kategori || null;
    const brandFilter = params.marka || null;
    const page = parseInt(params.sayfa || '1', 10);
    const perPage = 25;

    // Build query
    const where: any = { published: true };
    if (carFilter) where.carSlug = carFilter;
    if (categoryFilter && categoryFilter !== 'all') where.category = categoryFilter;

    // Fetch posts + counts
    let posts: any[] = [];
    let totalPosts = 0;

    try {
        [posts, totalPosts] = await Promise.all([
            prisma.blogPost.findMany({
                where,
                include: {
                    author: { select: { name: true, image: true } },
                },
                orderBy: { updatedAt: 'desc' },
                take: perPage,
                skip: (page - 1) * perPage,
            }),
            prisma.blogPost.count({ where }),
        ]);
    } catch {
        posts = [];
    }

    const totalPages = Math.ceil(totalPosts / perPage);

    // Reply counts per post
    let replyCounts: Record<string, number> = {};
    try {
        const postIds = posts.map((p: any) => p.id);
        if (postIds.length > 0) {
            const counts = await (prisma as any).forumReply.groupBy({
                by: ['postId'],
                where: { postId: { in: postIds } },
                _count: { id: true },
            });
            for (const c of counts) {
                replyCounts[c.postId] = c._count.id;
            }
        }
    } catch { /* */ }

    // Last replies per post
    let lastReplies: Record<string, any> = {};
    try {
        for (const post of posts) {
            const lastReply = await (prisma as any).forumReply.findFirst({
                where: { postId: post.id },
                include: { user: { select: { name: true } } },
                orderBy: { createdAt: 'desc' },
            });
            if (lastReply) lastReplies[post.id] = lastReply;
        }
    } catch { /* */ }

    // Car info for filter display
    let carInfo: any = null;
    if (carFilter) {
        const allCars = await getAllCars();
        carInfo = allCars.find((c: any) => c.slug === carFilter);
    }

    // Category counts
    let categoryCounts: Record<string, number> = {};
    let totalAllPosts = 0;
    try {
        const catPosts = await prisma.blogPost.findMany({
            where: { published: true },
            select: { category: true },
        });
        totalAllPosts = catPosts.length;
        for (const p of catPosts) {
            categoryCounts[p.category] = (categoryCounts[p.category] || 0) + 1;
        }
    } catch { /* */ }

    // Get unique brands for filter
    const allCars = await getAllCars();
    const brandsMap: Record<string, { brand: string; models: { model: string; slug: string }[] }> = {};
    for (const car of allCars) {
        if (!brandsMap[car.brand]) {
            brandsMap[car.brand] = { brand: car.brand, models: [] };
        }
        brandsMap[car.brand].models.push({ model: `${car.model} ${car.variant}`, slug: car.slug });
    }
    const brands = Object.values(brandsMap).sort((a: any, b: any) => a.brand.localeCompare(b.brand, 'tr'));

    return (
        <div className="min-h-screen bg-stone-50 dark:bg-[#0a0a0a]">
            {/* Top Header - OTORAPORU.NET FORUM branding */}
            <div className="bg-stone-900 dark:bg-black border-b border-stone-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
                    <div className="flex items-center justify-between">
                        <div>
                            {carInfo ? (
                                <>
                                    <div className="text-xs text-stone-400 mb-1">
                                        <Link href="/forum" className="hover:text-orange-500 transition-colors">Forum</Link>
                                        <span className="mx-1.5">/</span>
                                        <span>{carInfo.brand} {carInfo.model}</span>
                                    </div>
                                    <h1 className="text-xl font-bold text-white">
                                        {carInfo.brand} {carInfo.model} {carInfo.variant}
                                    </h1>
                                </>
                            ) : (
                                <h1 className="text-xl font-bold text-white">
                                    <span className="text-orange-500">OTORAPORU.NET</span> FORUM
                                </h1>
                            )}
                        </div>
                        <Link
                            href={carFilter ? `/forum/yeni?arac=${carFilter}` : '/forum/yeni'}
                            className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold rounded-lg transition-colors"
                        >
                            Yeni Konu Ac
                        </Link>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="lg:grid lg:grid-cols-4 lg:gap-6">

                    {/* Sidebar */}
                    <div className="hidden lg:block lg:col-span-1 space-y-4">
                        {/* Categories */}
                        <div className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 p-4">
                            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">Kategoriler</h3>
                            <nav className="space-y-0.5">
                                {CATEGORIES.map(cat => {
                                    const isActive = (cat.id === 'all' && !categoryFilter) || categoryFilter === cat.id;
                                    const count = cat.id === 'all' ? totalAllPosts : (categoryCounts[cat.id] || 0);
                                    const href = cat.id === 'all'
                                        ? (carFilter ? `/forum?arac=${carFilter}` : '/forum')
                                        : (carFilter ? `/forum?arac=${carFilter}&kategori=${cat.id}` : `/forum?kategori=${cat.id}`);
                                    return (
                                        <Link
                                            key={cat.id}
                                            href={href}
                                            className={`flex items-center justify-between px-3 py-2 rounded-md text-sm transition-colors ${isActive
                                                    ? 'bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400 font-semibold'
                                                    : 'text-stone-600 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-stone-800'
                                                }`}
                                        >
                                            <span>{cat.label}</span>
                                            <span className={`text-xs px-1.5 py-0.5 rounded ${isActive ? 'bg-orange-100 dark:bg-orange-900/40 text-orange-600' : 'bg-stone-100 dark:bg-stone-800 text-stone-400'
                                                }`}>{count}</span>
                                        </Link>
                                    );
                                })}
                            </nav>
                        </div>

                        {/* Brand/Model Filter */}
                        <ForumCarFilter brands={brands} currentCar={carFilter} currentCategory={categoryFilter} />
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        {/* Mobile Category Filter */}
                        <div className="lg:hidden flex flex-wrap gap-1.5 mb-4">
                            {CATEGORIES.map(cat => {
                                const isActive = (cat.id === 'all' && !categoryFilter) || categoryFilter === cat.id;
                                const href = cat.id === 'all'
                                    ? (carFilter ? `/forum?arac=${carFilter}` : '/forum')
                                    : (carFilter ? `/forum?arac=${carFilter}&kategori=${cat.id}` : `/forum?kategori=${cat.id}`);
                                return (
                                    <Link
                                        key={cat.id}
                                        href={href}
                                        className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${isActive
                                                ? 'bg-orange-600 text-white'
                                                : 'bg-white dark:bg-stone-800 text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-stone-700'
                                            }`}
                                    >
                                        {cat.label}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Active filter notice */}
                        {carFilter && carInfo && (
                            <div className="bg-orange-50 dark:bg-orange-900/10 border border-orange-200 dark:border-orange-800 rounded-lg px-4 py-2.5 mb-4 flex items-center justify-between">
                                <span className="text-sm text-stone-700 dark:text-stone-300">
                                    <span className="font-semibold">{carInfo.brand} {carInfo.model}</span> konulari filtreleniyor
                                </span>
                                <Link href="/forum" className="text-xs text-orange-600 hover:underline font-medium">
                                    Filtreyi Kaldir
                                </Link>
                            </div>
                        )}

                        {posts.length === 0 ? (
                            <div className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 p-12 text-center">
                                <h2 className="text-lg font-bold text-stone-700 dark:text-stone-300 mb-2">
                                    Henüz konu yok
                                </h2>
                                <p className="text-sm text-stone-500 mb-6">
                                    Ilk konuyu acarak toplulugu baslatin.
                                </p>
                                <Link
                                    href={carFilter ? `/forum/yeni?arac=${carFilter}` : '/forum/yeni'}
                                    className="inline-block px-5 py-2.5 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors text-sm"
                                >
                                    Konu Ac
                                </Link>
                            </div>
                        ) : (
                            <div className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 overflow-hidden">
                                {/* Table header */}
                                <div className="hidden sm:grid sm:grid-cols-12 gap-4 px-4 py-2.5 bg-stone-50 dark:bg-stone-800/50 border-b border-stone-200 dark:border-stone-700 text-[11px] font-semibold text-stone-400 uppercase tracking-wider">
                                    <span className="col-span-6">Konu</span>
                                    <span className="col-span-1 text-center">Yanit</span>
                                    <span className="col-span-2 text-center">Görüntüleme</span>
                                    <span className="col-span-3 text-right">Son Mesaj</span>
                                </div>

                                {/* Posts */}
                                <div className="divide-y divide-stone-100 dark:divide-stone-800">
                                    {posts.map((post: any) => {
                                        const replyCount = replyCounts[post.id] || 0;
                                        const viewCount = (post as any).viewCount || 0;
                                        const lastReply = lastReplies[post.id];

                                        return (
                                            <div key={post.id} className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 px-4 py-3.5 hover:bg-stone-50 dark:hover:bg-stone-800/30 transition-colors">
                                                {/* Topic */}
                                                <div className="sm:col-span-6 flex items-start gap-3">
                                                    <div className="w-9 h-9 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center shrink-0 overflow-hidden mt-0.5">
                                                        {post.author?.image ? (
                                                            <img src={post.author.image} alt="" className="w-full h-full object-cover" />
                                                        ) : (
                                                            <span className="text-stone-400 text-xs font-bold">
                                                                {(post.author?.name || '?')[0].toUpperCase()}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <div className="min-w-0 flex-1">
                                                        <div className="flex items-center gap-1.5 mb-0.5">
                                                            <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-stone-500">
                                                                {post.category}
                                                            </span>
                                                            {post.carSlug && (
                                                                <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400">
                                                                    {post.carSlug}
                                                                </span>
                                                            )}
                                                        </div>
                                                        <Link
                                                            href={`/forum/${post.slug}`}
                                                            className="font-semibold text-sm text-stone-900 dark:text-stone-100 hover:text-orange-600 dark:hover:text-orange-400 transition-colors line-clamp-1"
                                                        >
                                                            {post.title}
                                                        </Link>
                                                        <p className="text-xs text-stone-400 mt-0.5">
                                                            {post.author?.name || 'Anonim'}, {new Date(post.createdAt).toLocaleDateString('tr-TR', { day: 'numeric', month: 'short', year: 'numeric' })}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Reply count */}
                                                <div className="hidden sm:flex sm:col-span-1 items-center justify-center">
                                                    <span className={`text-sm font-semibold ${replyCount > 0 ? 'text-stone-700 dark:text-stone-300' : 'text-stone-300 dark:text-stone-600'}`}>
                                                        {replyCount}
                                                    </span>
                                                </div>

                                                {/* View count */}
                                                <div className="hidden sm:flex sm:col-span-2 items-center justify-center">
                                                    <span className={`text-sm ${viewCount > 0 ? 'text-stone-500' : 'text-stone-300 dark:text-stone-600'}`}>
                                                        {viewCount}
                                                    </span>
                                                </div>

                                                {/* Last activity */}
                                                <div className="hidden sm:flex sm:col-span-3 items-center justify-end">
                                                    <div className="text-right text-xs">
                                                        {lastReply ? (
                                                            <>
                                                                <div className="text-stone-600 dark:text-stone-400 font-medium">{lastReply.user?.name || 'Anonim'}</div>
                                                                <div className="text-stone-400">{getTimeAgo(lastReply.createdAt)}</div>
                                                            </>
                                                        ) : (
                                                            <div className="text-stone-400">{getTimeAgo(post.updatedAt)}</div>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Mobile meta */}
                                                <div className="flex sm:hidden items-center gap-3 text-xs text-stone-400">
                                                    <span>{replyCount} yanit</span>
                                                    <span>{viewCount} görüntüleme</span>
                                                    <span className="ml-auto">{getTimeAgo(post.updatedAt)}</span>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Pagination */}
                                {totalPages > 1 && (
                                    <div className="flex items-center justify-between px-4 py-3 border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/30">
                                        <span className="text-xs text-stone-400">
                                            Sayfa {page}/{totalPages}
                                        </span>
                                        <div className="flex gap-1">
                                            {page > 1 && (
                                                <Link
                                                    href={buildUrl(carFilter, categoryFilter, page - 1)}
                                                    className="px-3 py-1 text-xs font-medium bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded text-stone-600 dark:text-stone-400 hover:bg-stone-50"
                                                >
                                                    Önceki
                                                </Link>
                                            )}
                                            {page < totalPages && (
                                                <Link
                                                    href={buildUrl(carFilter, categoryFilter, page + 1)}
                                                    className="px-3 py-1 text-xs font-medium bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded text-stone-600 dark:text-stone-400 hover:bg-stone-50"
                                                >
                                                    Sonraki
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function buildUrl(car: string | null, category: string | null, page: number): string {
    const params = new URLSearchParams();
    if (car) params.set('arac', car);
    if (category) params.set('kategori', category);
    if (page > 1) params.set('sayfa', String(page));
    const qs = params.toString();
    return `/forum${qs ? `?${qs}` : ''}`;
}

function getTimeAgo(date: Date): string {
    const now = new Date();
    const diffMs = now.getTime() - new Date(date).getTime();
    const diffMin = Math.floor(diffMs / 60000);
    const diffHour = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHour / 24);

    if (diffMin < 1) return 'az önce';
    if (diffMin < 60) return `${diffMin} dk önce`;
    if (diffHour < 24) return `${diffHour} saat önce`;
    if (diffDay < 30) return `${diffDay} gün önce`;
    return new Date(date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'short' });
}
