import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blog-posts';
import DOMPurify from 'isomorphic-dompurify';

interface BlogPostPageProps {
    params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        notFound();
    }

    // Sanitize content to prevent XSS attacks
    const sanitizedContent = DOMPurify.sanitize(post.content, {
        ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'a', 'img', 'blockquote', 'code', 'pre'],
        ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'class', 'target', 'rel'],
        ALLOW_DATA_ATTR: false,
    });

    return (
        <article className="min-h-screen bg-zinc-950 text-white pb-20">
            {/* Hero Header */}
            <div className="relative bg-zinc-900 border-b border-zinc-800">
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/10 to-transparent pointer-events-none" />
                <div className="max-w-4xl mx-auto px-4 py-16 lg:py-24 relative z-10">
                    <Link href="/blog" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-6 transition-colors">
                        ← Blog'a Dön
                    </Link>

                    <div className="flex items-center gap-3 mb-6">
                        <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-sm font-medium border border-emerald-500/20">
                            {post.category}
                        </span>
                        <span className="text-gray-400 text-sm">{post.date}</span>
                        <span className="text-gray-500 text-sm">• {post.readTime} okuma</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        {post.title}
                    </h1>

                    <p className="text-xl text-gray-400 leading-relaxed max-w-2xl border-l-4 border-emerald-500 pl-6">
                        {post.excerpt}
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4 mt-8 pt-8 border-t border-zinc-800">
                        <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="w-12 h-12 rounded-full border-2 border-zinc-800"
                        />
                        <div>
                            <div className="font-bold text-white">{post.author.name}</div>
                            <div className="text-sm text-emerald-500">{post.author.role}</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Body */}
            <div className="max-w-4xl mx-auto px-4 py-12">
                <div
                    className="prose prose-invert prose-lg max-w-none 
                    prose-headings:text-white prose-p:text-gray-300 
                    prose-strong:text-white prose-blockquote:border-emerald-500 
                    prose-li:text-gray-300 prose-img:rounded-2xl prose-img:shadow-2xl
                    prose-a:text-emerald-400 hover:prose-a:text-emerald-300"
                    dangerouslySetInnerHTML={{ __html: sanitizedContent }}
                />

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-wrap gap-2">
                    {post.tags.map((tag: any) => (
                        <span key={tag} className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-gray-400">
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
}

// Generate static params if we want static export, but for now dynamic is fine.
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}
