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
    if (!post) return { title: 'Konu Bulunamadi' };
    return {
        title: `${post.title} | Forum - OTORAPORU.NET`,
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

    // Replies & view count
    let replies: any[] = [];
    let viewCount = 0;
    try {
        replies = await (prisma as any).forumReply.findMany({
            where: { postId: post.id },
            include: { user: { select: { id: true, name: true, image: true, createdAt: true } } },
            orderBy: { createdAt: 'asc' },
        });
        const updated = await prisma.blogPost.update({
            where: { id: post.id },
            data: { viewCount: { increment: 1 } } as any,
        });
        viewCount = (updated as any).viewCount || 0;
    } catch { /* */ }

    const session = await auth();
    const isLoggedIn = !!session?.user?.id;

    const carSlug = (post as any).carSlug;
    const carInfo = carSlug ? await getCarBySlug(carSlug) : null;

    const sanitizedContent = DOMPurify.sanitize(post.content, {
        ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'a', 'blockquote', 'code', 'pre', 'img'],
        ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'class', 'target', 'rel'],
        ALLOW_DATA_ATTR: false,
    });

    const memberSince = post.author.createdAt
        ? new Date(post.author.createdAt).toLocaleDateString('tr-TR', { month: 'long', year: 'numeric' })
        : null;

    return (
        <div className="min-h-screen bg-stone-50 dark:bg-[#0c0a09]">
            {/* Breadcrumb */}
            <div className="bg-white dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800">
                <div className="max-w-5xl mx-auto px-4 py-3">
                    <nav className="flex items-center gap-1.5 text-xs text-stone-400">
                        <Link href="/forum" className="hover:text-orange-600 transition-colors">Forum</Link>
                        {post.category && (
                            <>
                                <span>/</span>
                                <Link href={`/forum?kategori=${post.category}`} className="hover:text-orange-600 transition-colors">{post.category}</Link>
                            </>
                        )}
                        {carInfo && (
                            <>
                                <span>/</span>
                                <Link href={`/forum?arac=${carSlug}`} className="hover:text-orange-600 transition-colors">{carInfo.brand} {carInfo.model}</Link>
                            </>
                        )}
                    </nav>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 py-6">
                {/* Title area */}
                <div className="mb-4">
                    <h1 className="text-xl md:text-2xl font-bold text-stone-900 dark:text-white mb-2">
                        {post.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-stone-400">
                        <span>{post.author.name || 'Anonim'}</span>
                        <span>·</span>
                        <span>{new Date(post.createdAt).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                        <span>·</span>
                        <span>{viewCount} görüntüleme</span>
                        <span>·</span>
                        <span>{replies.length} yanit</span>
                        {carInfo && (
                            <>
                                <span>·</span>
                                <Link href={`/arac/${carSlug}`} className="text-orange-600 hover:underline">
                                    {carInfo.brand} {carInfo.model} {carInfo.variant}
                                </Link>
                            </>
                        )}
                    </div>
                </div>

                {/* Original Post - Thread style */}
                <div className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 overflow-hidden mb-6">
                    <div className="md:flex">
                        {/* Author sidebar */}
                        <div className="md:w-44 bg-stone-50 dark:bg-stone-800/30 p-4 md:border-r border-b md:border-b-0 border-stone-200 dark:border-stone-800 flex md:flex-col items-center md:items-center gap-3 md:gap-2">
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-stone-200 dark:bg-stone-700 flex items-center justify-center overflow-hidden">
                                {post.author.image ? (
                                    <img src={post.author.image} alt="" className="w-full h-full object-cover" />
                                ) : (
                                    <span className="text-stone-400 text-lg font-bold">
                                        {(post.author.name || '?')[0].toUpperCase()}
                                    </span>
                                )}
                            </div>
                            <div className="md:text-center">
                                <div className="text-sm font-bold text-stone-900 dark:text-white">{post.author.name || 'Anonim'}</div>
                                <div className="text-[11px] text-stone-400">Konu Sahibi</div>
                                {memberSince && (
                                    <div className="text-[10px] text-stone-400 mt-1">Üye: {memberSince}</div>
                                )}
                            </div>
                        </div>

                        {/* Post content */}
                        <div className="flex-1 p-5">
                            <div className="text-xs text-stone-400 mb-3">
                                {new Date(post.createdAt).toLocaleDateString('tr-TR', {
                                    day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit',
                                })}
                            </div>
                            <div
                                className="prose dark:prose-invert max-w-none text-sm prose-stone prose-p:text-stone-600 dark:prose-p:text-stone-400 prose-headings:text-stone-900 dark:prose-headings:text-stone-100 prose-a:text-orange-600"
                                dangerouslySetInnerHTML={{ __html: sanitizedContent }}
                            />
                        </div>
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
                        userCreatedAt: r.user.createdAt?.toISOString() || null,
                    }))}
                    isLoggedIn={isLoggedIn}
                />
            </div>
        </div>
    );
}
