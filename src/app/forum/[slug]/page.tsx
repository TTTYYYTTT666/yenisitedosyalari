import Link from 'next/link';
import { notFound } from 'next/navigation';
import { prisma } from '@/lib/db';
import { auth } from '@/auth';
import { getCarBySlug } from '@/lib/cars';
import DOMPurify from 'isomorphic-dompurify';
import ForumReplySection from '@/components/ForumReplySection';
import { Metadata } from 'next';

interface ForumPostPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ForumPostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = await prisma.blogPost.findUnique({ where: { slug }, select: { title: true, excerpt: true } });
    if (!post) return { title: 'Konu Bulunamadı' };
    return {
        title: `${post.title} | Forum`,
        description: post.excerpt,
    };
}

export default async function ForumPostPage({ params }: ForumPostPageProps) {
    const { slug } = await params;

    const post = await prisma.blogPost.findUnique({
        where: { slug },
        include: {
            author: { select: { id: true, name: true, image: true, createdAt: true } },
        },
    });

    if (!post) notFound();

    // Fetch replies & increment view
    let replies: any[] = [];
    let viewCount = 0;
    try {
        replies = await (prisma as any).forumReply.findMany({
            where: { postId: post.id },
            include: { user: { select: { id: true, name: true, image: true } } },
            orderBy: { createdAt: 'asc' },
        });
        const updated = await prisma.blogPost.update({
            where: { id: post.id },
            data: { viewCount: { increment: 1 } } as any,
        });
        viewCount = (updated as any).viewCount || 0;
    } catch { /* not migrated */ }

    const session = await auth();
    const isLoggedIn = !!session?.user?.id;

    // Car info
    const carSlug = (post as any).carSlug;
    const carInfo = carSlug ? await getCarBySlug(carSlug) : null;

    const sanitizedContent = DOMPurify.sanitize(post.content, {
        ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'a', 'blockquote', 'code', 'pre', 'img'],
        ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'class', 'target', 'rel'],
        ALLOW_DATA_ATTR: false,
    });

    const authorDate = post.author.createdAt
        ? new Date(post.author.createdAt).toLocaleDateString('tr-TR', { month: 'long', year: 'numeric' })
        : null;

    return (
        <div className="min-h-screen bg-stone-100 dark:bg-[#0c0a09]">
            {/* Header */}
            <div className="bg-gradient-to-b from-stone-900 to-stone-800 dark:from-stone-950 dark:to-stone-900 border-b border-stone-700">
                <div className="max-w-5xl mx-auto px-4 py-6 lg:py-10">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-xs text-stone-500 mb-4">
                        <Link href="/forum" className="hover:text-orange-400 transition-colors">Forum</Link>
                        <span>›</span>
                        {carInfo && (
                            <>
                                <Link href={`/forum?arac=${carSlug}`} className="hover:text-orange-400 transition-colors">
                                    {carInfo.brand} {carInfo.model}
                                </Link>
                                <span>›</span>
                            </>
                        )}
                        <span className="text-stone-400 truncate">{post.title}</span>
                    </nav>

                    {/* Tags */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="px-2.5 py-1 bg-orange-600/20 text-orange-400 rounded-lg text-[11px] font-semibold border border-orange-500/20">
                            {post.category}
                        </span>
                        {carInfo && (
                            <Link
                                href={`/arac/${carSlug}`}
                                className="px-2.5 py-1 bg-blue-500/10 text-blue-400 rounded-lg text-[11px] font-semibold border border-blue-500/20 hover:bg-blue-500/20 transition-colors"
                            >
                                🚗 {carInfo.brand} {carInfo.model} {carInfo.variant}
                            </Link>
                        )}
                    </div>

                    {/* Title */}
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-5 leading-tight">
                        {post.title}
                    </h1>

                    {/* Author & Stats */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center overflow-hidden ring-2 ring-orange-400/30">
                                {post.author.image ? (
                                    <img src={post.author.image} alt="" className="w-full h-full object-cover" />
                                ) : (
                                    <span className="text-white text-sm font-bold">
                                        {(post.author.name || '?')[0].toUpperCase()}
                                    </span>
                                )}
                            </div>
                            <div>
                                <div className="text-sm font-bold text-white">{post.author.name || 'Anonim'}</div>
                                <div className="text-xs text-stone-500">
                                    {authorDate && `Üye: ${authorDate} · `}
                                    {new Date(post.createdAt).toLocaleDateString('tr-TR', {
                                        day: 'numeric', month: 'long', year: 'numeric',
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-xs text-stone-500">
                            <span className="flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                {viewCount}
                            </span>
                            <span className="flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                                {replies.length}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-5xl mx-auto px-4 py-8">
                {/* Original Post */}
                <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 overflow-hidden shadow-sm mb-8">
                    {/* Post content */}
                    <div className="p-6 lg:p-8">
                        <div
                            className="prose dark:prose-invert max-w-none prose-stone prose-p:text-stone-600 dark:prose-p:text-stone-400 prose-headings:text-stone-900 dark:prose-headings:text-stone-100 prose-a:text-orange-600 prose-img:rounded-xl"
                            dangerouslySetInnerHTML={{ __html: sanitizedContent }}
                        />
                    </div>

                    {/* Post footer */}
                    <div className="border-t border-stone-100 dark:border-stone-800 px-6 py-3 flex items-center justify-between bg-stone-50 dark:bg-stone-800/30">
                        <div className="text-xs text-stone-400">
                            Son düzenleme: {new Date(post.updatedAt).toLocaleDateString('tr-TR', {
                                day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit',
                            })}
                        </div>
                        {carInfo && (
                            <Link
                                href={`/arac/${carSlug}`}
                                className="text-xs text-orange-600 hover:text-orange-500 font-medium transition-colors"
                            >
                                Araç Sayfası →
                            </Link>
                        )}
                    </div>
                </div>

                {/* Replies */}
                <ForumReplySection
                    postId={post.id}
                    replies={replies.map((r: any) => ({
                        id: r.id,
                        content: r.content,
                        createdAt: r.createdAt.toISOString(),
                        userId: r.user.id,
                        userName: r.user.name,
                        userImage: r.user.image,
                    }))}
                    isLoggedIn={isLoggedIn}
                />
            </div>
        </div>
    );
}
