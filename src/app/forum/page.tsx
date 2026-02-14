import Link from 'next/link';
import { prisma } from '@/lib/db';
import { Metadata } from 'next';
import { getAllCars } from '@/lib/cars';

export const metadata: Metadata = {
    title: 'Forum | OTORAPORU.NET',
    description: 'Otomobil deneyimlerinizi paylaşın, sorular sorun ve diğer araç sahipleriyle tartışın.',
};

const CATEGORIES = [
    { id: 'all', label: 'Tümü', icon: '🔥', color: 'bg-orange-600 text-white' },
    { id: 'Deneyim', label: 'Deneyimler', icon: '🚗', color: 'bg-blue-500/10 text-blue-400 border border-blue-500/20' },
    { id: 'Bakım', label: 'Bakım & Onarım', icon: '🔧', color: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' },
    { id: 'Soru', label: 'Soru-Cevap', icon: '❓', color: 'bg-purple-500/10 text-purple-400 border border-purple-500/20' },
    { id: 'Rehber', label: 'Alım Rehberi', icon: '📋', color: 'bg-amber-500/10 text-amber-400 border border-amber-500/20' },
    { id: 'Haber', label: 'Haberler', icon: '📰', color: 'bg-rose-500/10 text-rose-400 border border-rose-500/20' },
];

interface ForumPageProps {
    searchParams: Promise<{ arac?: string; kategori?: string }>;
}

export default async function ForumPage({ searchParams }: ForumPageProps) {
    const params = await searchParams;
    const carFilter = params.arac || null;
    const categoryFilter = params.kategori || null;

    // Build query
    const where: any = { published: true };
    if (carFilter) where.carSlug = carFilter;
    if (categoryFilter && categoryFilter !== 'all') where.category = categoryFilter;

    // Fetch posts
    let posts: any[] = [];
    let totalPosts = 0;
    let totalReplies = 0;
    try {
        posts = await prisma.blogPost.findMany({
            where,
            include: {
                author: { select: { name: true, image: true } },
            },
            orderBy: { updatedAt: 'desc' },
            take: 50,
        });

        totalPosts = await prisma.blogPost.count({ where: { published: true } });

        // Count replies
        try {
            totalReplies = await (prisma as any).forumReply.count();
        } catch { totalReplies = 0; }
    } catch {
        posts = [];
    }

    // Count replies per post
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
    } catch { /* not migrated yet */ }

    // Get car info if filtering
    let carInfo: any = null;
    if (carFilter) {
        const allCars = await getAllCars();
        carInfo = allCars.find((c: any) => c.slug === carFilter);
    }

    // Unique authors count
    const uniqueAuthors = new Set(posts.map((p: any) => p.authorId)).size;

    // Category counts
    let categoryCounts: Record<string, number> = {};
    try {
        const allPosts = await prisma.blogPost.findMany({
            where: { published: true },
            select: { category: true },
        });
        for (const p of allPosts) {
            categoryCounts[p.category] = (categoryCounts[p.category] || 0) + 1;
        }
    } catch { /* */ }

    return (
        <div className="min-h-screen bg-stone-100 dark:bg-[#0c0a09]">
            {/* Hero Header */}
            <div className="bg-gradient-to-b from-stone-900 via-stone-900 to-stone-800 dark:from-stone-950 dark:via-stone-950 dark:to-stone-900 border-b border-stone-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                        <div>
                            {carInfo ? (
                                <>
                                    <div className="flex items-center gap-2 mb-2">
                                        <Link href="/forum" className="text-orange-400 hover:text-orange-300 text-sm transition-colors">
                                            ← Tüm Forum
                                        </Link>
                                    </div>
                                    <h1 className="text-3xl lg:text-4xl font-black text-white">
                                        {carInfo.brand} {carInfo.model}
                                        <span className="text-orange-400 ml-2">Forum</span>
                                    </h1>
                                    <p className="text-stone-400 text-sm mt-2">
                                        {carInfo.variant} · {carInfo.years} · Bu araç hakkında tartışın
                                    </p>
                                </>
                            ) : (
                                <>
                                    <h1 className="text-3xl lg:text-4xl font-black text-white">
                                        💬 <span className="text-orange-400">OtoRaporu</span> Forum
                                    </h1>
                                    <p className="text-stone-400 text-sm mt-2">
                                        Araç deneyimlerinizi paylaşın, sorular sorun ve diğer sahiplerle tartışın
                                    </p>
                                </>
                            )}
                        </div>
                        <Link
                            href={carFilter ? `/forum/yeni?arac=${carFilter}` : '/forum/yeni'}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-orange-600/20 hover:shadow-orange-600/40 hover:-translate-y-0.5"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            Yeni Konu Aç
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3 mb-8">
                        <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-4 text-center">
                            <div className="text-2xl font-black text-white">{totalPosts}</div>
                            <div className="text-xs text-stone-400 mt-0.5">Konu</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-4 text-center">
                            <div className="text-2xl font-black text-white">{totalReplies}</div>
                            <div className="text-xs text-stone-400 mt-0.5">Yanıt</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-4 text-center">
                            <div className="text-2xl font-black text-white">{uniqueAuthors}</div>
                            <div className="text-xs text-stone-400 mt-0.5">Yazar</div>
                        </div>
                    </div>

                    {/* Category Pills */}
                    <div className="flex flex-wrap gap-2">
                        {CATEGORIES.map(cat => {
                            const isActive = (cat.id === 'all' && !categoryFilter) || categoryFilter === cat.id;
                            const count = cat.id === 'all' ? totalPosts : (categoryCounts[cat.id] || 0);
                            return (
                                <Link
                                    key={cat.id}
                                    href={cat.id === 'all'
                                        ? (carFilter ? `/forum?arac=${carFilter}` : '/forum')
                                        : (carFilter ? `/forum?arac=${carFilter}&kategori=${cat.id}` : `/forum?kategori=${cat.id}`)
                                    }
                                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${isActive
                                        ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/20'
                                        : 'bg-stone-800 hover:bg-stone-700 text-stone-300'
                                        }`}
                                >
                                    <span>{cat.icon}</span>
                                    <span>{cat.label}</span>
                                    <span className={`ml-1 px-1.5 py-0.5 rounded-md text-[10px] ${isActive ? 'bg-white/20' : 'bg-stone-700 text-stone-400'
                                        }`}>
                                        {count}
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {posts.length === 0 ? (
                    <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-16 text-center">
                        <div className="text-6xl mb-4">💬</div>
                        <h2 className="text-xl font-bold text-stone-700 dark:text-stone-300 mb-2">
                            {carFilter ? 'Bu araç için henüz konu yok' : 'Henüz konu açılmamış'}
                        </h2>
                        <p className="text-sm text-stone-500 dark:text-stone-400 mb-8 max-w-md mx-auto">
                            {carFilter
                                ? 'Bu araç hakkında ilk konuyu siz açın ve deneyiminizi paylaşın!'
                                : 'Forumda ilk konuyu açarak topluluğu başlatın!'
                            }
                        </p>
                        <Link
                            href={carFilter ? `/forum/yeni?arac=${carFilter}` : '/forum/yeni'}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white font-bold rounded-xl hover:bg-orange-700 transition-all shadow-lg"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            İlk Konuyu Aç
                        </Link>
                    </div>
                ) : (
                    <>
                        {/* Topics Table Header */}
                        <div className="hidden sm:grid sm:grid-cols-12 gap-4 px-5 py-3 text-[11px] font-bold text-stone-400 uppercase tracking-widest mb-2">
                            <span className="col-span-7">Konu</span>
                            <span className="col-span-1 text-center">Yanıt</span>
                            <span className="col-span-1 text-center">Görüntüleme</span>
                            <span className="col-span-3 text-right">Son Aktivite</span>
                        </div>

                        {/* Topics List */}
                        <div className="space-y-1.5">
                            {posts.map((post: any) => {
                                const replyCount = replyCounts[post.id] || 0;
                                const viewCount = (post as any).viewCount || 0;
                                const categoryInfo = CATEGORIES.find(c => c.id === post.category);
                                const timeAgo = getTimeAgo(post.updatedAt);

                                return (
                                    <Link
                                        key={post.id}
                                        href={`/forum/${post.slug}`}
                                        className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 px-5 py-4 hover:border-orange-300 dark:hover:border-orange-600/50 transition-all hover:shadow-lg hover:shadow-orange-500/5 group"
                                    >
                                        {/* Topic Info */}
                                        <div className="sm:col-span-7 flex items-start gap-3.5">
                                            {/* Author Avatar */}
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-stone-200 to-stone-300 dark:from-stone-700 dark:to-stone-600 flex items-center justify-center shrink-0 overflow-hidden ring-2 ring-stone-100 dark:ring-stone-800">
                                                {post.author?.image ? (
                                                    <img src={post.author.image} alt="" className="w-full h-full object-cover" />
                                                ) : (
                                                    <span className="text-stone-500 dark:text-stone-400 text-sm font-bold">
                                                        {(post.author?.name || '?')[0].toUpperCase()}
                                                    </span>
                                                )}
                                            </div>

                                            <div className="min-w-0 flex-1">
                                                <div className="flex items-center gap-2 mb-1">
                                                    {categoryInfo && (
                                                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-stone-100 dark:bg-stone-800 text-stone-500">
                                                            {categoryInfo.icon} {categoryInfo.label}
                                                        </span>
                                                    )}
                                                    {post.carSlug && (
                                                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800">
                                                            🚗 {post.carSlug}
                                                        </span>
                                                    )}
                                                </div>
                                                <h2 className="font-bold text-sm sm:text-base text-stone-900 dark:text-stone-100 group-hover:text-orange-500 transition-colors truncate">
                                                    {post.title}
                                                </h2>
                                                <p className="text-xs text-stone-400 mt-0.5">
                                                    {post.author?.name || 'Anonim'} · {new Date(post.createdAt).toLocaleDateString('tr-TR', { day: 'numeric', month: 'short' })}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Reply Count */}
                                        <div className="hidden sm:flex sm:col-span-1 items-center justify-center">
                                            <div className="text-center">
                                                <div className={`text-sm font-bold ${replyCount > 0 ? 'text-stone-900 dark:text-stone-100' : 'text-stone-300 dark:text-stone-600'}`}>
                                                    {replyCount}
                                                </div>
                                            </div>
                                        </div>

                                        {/* View Count */}
                                        <div className="hidden sm:flex sm:col-span-1 items-center justify-center">
                                            <div className="text-center">
                                                <div className={`text-sm font-bold ${viewCount > 0 ? 'text-stone-900 dark:text-stone-100' : 'text-stone-300 dark:text-stone-600'}`}>
                                                    {viewCount}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Last Activity */}
                                        <div className="hidden sm:flex sm:col-span-3 items-center justify-end">
                                            <div className="text-right">
                                                <div className="text-xs text-stone-500">{timeAgo}</div>
                                            </div>
                                        </div>

                                        {/* Mobile meta */}
                                        <div className="flex sm:hidden items-center gap-4 text-xs text-stone-400">
                                            <span>💬 {replyCount} yanıt</span>
                                            <span>👁 {viewCount} görüntüleme</span>
                                            <span className="ml-auto">{timeAgo}</span>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

function getTimeAgo(date: Date): string {
    const now = new Date();
    const diffMs = now.getTime() - new Date(date).getTime();
    const diffMin = Math.floor(diffMs / 60000);
    const diffHour = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHour / 24);

    if (diffMin < 1) return 'Az önce';
    if (diffMin < 60) return `${diffMin} dk önce`;
    if (diffHour < 24) return `${diffHour} saat önce`;
    if (diffDay < 7) return `${diffDay} gün önce`;
    return new Date(date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'short' });
}
