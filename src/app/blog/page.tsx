import Link from 'next/link';
import { blogPosts } from '@/data/blog-posts';

export default function BlogPage() {
    const featured = blogPosts[0];
    const rest = blogPosts.slice(1);

    return (
        <div className="min-h-screen bg-stone-100 dark:bg-[#0c0a09]">
            {/* Hero Header */}
            <div className="bg-stone-900 dark:bg-stone-950 border-b border-stone-800">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h1 className="text-3xl font-bold text-white">
                                Blog
                            </h1>
                            <p className="text-stone-400 text-sm mt-1">
                                Otomotiv dünyasından güncel haberler, teknik analizler ve rehberler
                            </p>
                        </div>
                    </div>

                    {/* Featured Post — Large Card */}
                    <Link
                        href={`/blog/${featured.slug}`}
                        className="block bg-stone-800/60 hover:bg-stone-800 border border-stone-700/50 rounded-xl overflow-hidden transition-colors group"
                    >
                        <div className="flex flex-col md:flex-row">
                            <div className="md:w-80 h-48 md:h-auto bg-stone-800 flex items-center justify-center text-6xl shrink-0">
                                {featured.image}
                            </div>
                            <div className="p-6 flex flex-col justify-center">
                                <div className="flex items-center gap-2.5 mb-3">
                                    <span className="px-2.5 py-1 bg-orange-600 text-white rounded text-xs font-semibold">
                                        {featured.category}
                                    </span>
                                    <span className="text-stone-500 text-xs">{featured.date}</span>
                                    <span className="text-stone-600 text-xs">•</span>
                                    <span className="text-stone-500 text-xs">{featured.readTime} okuma</span>
                                </div>
                                <h2 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                                    {featured.title}
                                </h2>
                                <p className="text-stone-400 text-sm leading-relaxed line-clamp-2 mb-4">
                                    {featured.excerpt}
                                </p>
                                <div className="flex items-center gap-3">
                                    <img
                                        src={featured.author.avatar}
                                        alt={featured.author.name}
                                        className="w-8 h-8 rounded-full object-cover"
                                    />
                                    <div>
                                        <p className="text-white text-sm font-medium">{featured.author.name}</p>
                                        <p className="text-stone-500 text-xs">{featured.author.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Posts List */}
                    <div className="flex-1">
                        <div className="flex items-center justify-between mb-5">
                            <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100">Son Yazılar</h2>
                            <span className="text-xs text-stone-400">{blogPosts.length} yazı</span>
                        </div>

                        <div className="space-y-4">
                            {rest.map((post) => (
                                <Link
                                    key={post.id}
                                    href={`/blog/${post.slug}`}
                                    className="flex gap-4 bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 overflow-hidden hover:border-orange-300 dark:hover:border-orange-800 transition-colors group"
                                >
                                    {/* Thumbnail */}
                                    <div className="w-32 sm:w-44 shrink-0 bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-4xl">
                                        {post.image}
                                    </div>

                                    {/* Content */}
                                    <div className="py-4 pr-4 flex flex-col justify-center min-w-0">
                                        <div className="flex items-center gap-2 mb-1.5">
                                            <span className="px-2 py-0.5 bg-stone-100 dark:bg-stone-800 text-stone-500 rounded text-[11px] font-medium">
                                                {post.category}
                                            </span>
                                            <span className="text-stone-400 text-xs">{post.date}</span>
                                        </div>
                                        <h3 className="font-bold text-sm sm:text-base text-stone-900 dark:text-stone-100 group-hover:text-orange-500 transition-colors line-clamp-2 mb-1">
                                            {post.title}
                                        </h3>
                                        <p className="text-stone-400 text-xs sm:text-sm line-clamp-2 mb-2 hidden sm:block">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center gap-2">
                                            <img
                                                src={post.author.avatar}
                                                alt={post.author.name}
                                                className="w-5 h-5 rounded-full object-cover"
                                            />
                                            <span className="text-stone-500 text-xs">{post.author.name}</span>
                                            <span className="text-stone-300 dark:text-stone-700 text-xs">•</span>
                                            <span className="text-stone-400 text-xs">{post.readTime} okuma</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:w-72 shrink-0 space-y-5">
                        {/* Categories */}
                        <div className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 p-5">
                            <h3 className="text-sm font-bold text-stone-900 dark:text-stone-100 mb-3">Kategoriler</h3>
                            <div className="space-y-1.5">
                                {['Rehber', 'Analiz', 'Teknik', 'Bilgi'].map((cat) => {
                                    const count = blogPosts.filter(p => p.category === cat).length;
                                    return (
                                        <div
                                            key={cat}
                                            className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors cursor-pointer"
                                        >
                                            <span className="text-sm text-stone-700 dark:text-stone-300">{cat}</span>
                                            <span className="text-xs text-stone-400 bg-stone-100 dark:bg-stone-800 px-2 py-0.5 rounded-full">{count}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Popular Tags */}
                        <div className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 p-5">
                            <h3 className="text-sm font-bold text-stone-900 dark:text-stone-100 mb-3">Popüler Etiketler</h3>
                            <div className="flex flex-wrap gap-1.5">
                                {Array.from(new Set(blogPosts.flatMap(p => p.tags))).map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2.5 py-1 bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 rounded-lg text-xs font-medium hover:bg-orange-100 dark:hover:bg-orange-900/20 hover:text-orange-600 dark:hover:text-orange-400 transition-colors cursor-pointer"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div className="bg-stone-900 dark:bg-stone-950 rounded-xl border border-stone-800 p-5">
                            <h3 className="text-sm font-bold text-white mb-1.5">📩 Bültene Abone Ol</h3>
                            <p className="text-stone-400 text-xs mb-3">
                                Yeni yazıları kaçırmamak için abone olun
                            </p>
                            <div className="space-y-2">
                                <input
                                    type="email"
                                    placeholder="E-posta adresiniz"
                                    className="w-full px-3 py-2 bg-stone-800 border border-stone-700 rounded-lg text-sm text-white placeholder-stone-500 focus:border-orange-500 focus:outline-none"
                                />
                                <button className="w-full px-3 py-2 bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold rounded-lg transition-colors">
                                    Abone Ol
                                </button>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
