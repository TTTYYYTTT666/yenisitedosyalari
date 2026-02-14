import Link from 'next/link';
import { prisma } from '@/lib/db';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Forum',
    description: 'Otomobil deneyimlerinizi paylaşın, sorular sorun ve diğer araç sahipleriyle tartışın.',
};

export default async function ForumPage() {
    // Fetch posts from DB
    let dbPosts: any[] = [];
    try {
        dbPosts = await prisma.blogPost.findMany({
            where: { published: true },
            include: {
                author: { select: { name: true, image: true } },
            },
            orderBy: { updatedAt: 'desc' },
        });
    } catch {
        dbPosts = [];
    }

    const categories = ['Deneyim', 'Bakım', 'Haber', 'Rehber'];

    return (
        <div className="min-h-screen bg-stone-100 dark:bg-[#0c0a09]">
            {/* Hero */}
            <div className="bg-stone-900 dark:bg-stone-950 border-b border-stone-800">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h1 className="text-3xl font-bold text-white">
                                💬 Forum
                            </h1>
                            <p className="text-stone-400 text-sm mt-1">
                                Araç deneyimlerinizi paylaşın, sorular sorun ve tartışmalara katılın
                            </p>
                        </div>
                        <Link
                            href="/forum/yeni"
                            className="px-4 py-2.5 bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold rounded-xl transition-colors shadow-lg shadow-orange-500/20"
                        >
                            + Yeni Konu
                        </Link>
                    </div>

                    {/* Category filter */}
                    <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 bg-orange-600 text-white rounded-lg text-xs font-semibold">
                            Tümü
                        </span>
                        {categories.map(cat => (
                            <span
                                key={cat}
                                className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-300 rounded-lg text-xs font-medium cursor-pointer transition-colors"
                            >
                                {cat}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Topics List */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {dbPosts.length === 0 ? (
                    <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-12 text-center">
                        <div className="text-5xl mb-4">💬</div>
                        <h2 className="text-lg font-bold text-stone-700 dark:text-stone-300 mb-2">
                            Henüz konu yok
                        </h2>
                        <p className="text-sm text-stone-500 dark:text-stone-400 mb-6">
                            İlk konuyu siz açın!
                        </p>
                        <Link
                            href="/forum/yeni"
                            className="inline-flex px-5 py-2.5 bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-700 transition-colors"
                        >
                            Konu Aç
                        </Link>
                    </div>
                ) : (
                    <div className="space-y-2">
                        {/* Table header */}
                        <div className="hidden sm:flex items-center gap-4 px-5 py-2 text-xs font-bold text-stone-400 uppercase tracking-wider">
                            <span className="flex-1">Konu</span>
                            <span className="w-32 text-right">Son Aktivite</span>
                        </div>

                        {dbPosts.map((post: any) => (
                            <Link
                                key={post.id}
                                href={`/forum/${post.slug}`}
                                className="flex items-center gap-4 bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 px-5 py-4 hover:border-orange-300 dark:hover:border-orange-700 transition-all hover:shadow-md group"
                            >
                                {/* Author avatar */}
                                <div className="w-10 h-10 rounded-full bg-stone-200 dark:bg-stone-700 flex items-center justify-center shrink-0 overflow-hidden">
                                    {post.author?.image ? (
                                        <img src={post.author.image} alt="" className="w-full h-full object-cover" />
                                    ) : (
                                        <span className="text-stone-500 text-sm font-bold">
                                            {(post.author?.name || '?')[0].toUpperCase()}
                                        </span>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-0.5">
                                        <span className="px-2 py-0.5 bg-stone-100 dark:bg-stone-800 text-stone-500 rounded text-[11px] font-medium">
                                            {post.category}
                                        </span>
                                    </div>
                                    <h2 className="font-bold text-sm sm:text-base text-stone-900 dark:text-stone-100 group-hover:text-orange-500 transition-colors truncate">
                                        {post.title}
                                    </h2>
                                    <p className="text-xs text-stone-400 mt-0.5">
                                        {post.author?.name || 'Anonim'}
                                    </p>
                                </div>

                                {/* Date */}
                                <div className="w-32 text-right shrink-0 hidden sm:block">
                                    <div className="text-xs text-stone-500">
                                        {new Date(post.updatedAt).toLocaleDateString('tr-TR', {
                                            day: 'numeric',
                                            month: 'short',
                                        })}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
