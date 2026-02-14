import Link from 'next/link';
import { notFound } from 'next/navigation';
import { prisma } from '@/lib/db';
import { auth } from '@/auth';
import DOMPurify from 'isomorphic-dompurify';
import ForumReplySection from '@/components/ForumReplySection';

interface ForumPostPageProps {
    params: Promise<{ slug: string }>;
}

export default async function ForumPostPage({ params }: ForumPostPageProps) {
    const { slug } = await params;

    const post = await prisma.blogPost.findUnique({
        where: { slug },
        include: {
            author: { select: { name: true, image: true } },
        },
    });

    if (!post) notFound();

    // Try to get replies (may fail if model not yet migrated)
    let replies: any[] = [];
    let viewCount = 0;
    try {
        replies = await (prisma as any).forumReply.findMany({
            where: { postId: post.id },
            include: { user: { select: { id: true, name: true, image: true } } },
            orderBy: { createdAt: 'asc' },
        });
        // Increment view count
        const updated = await prisma.blogPost.update({
            where: { id: post.id },
            data: { viewCount: { increment: 1 } } as any,
        });
        viewCount = (updated as any).viewCount || 0;
    } catch {
        // Models not yet migrated, gracefully degrade
    }

    const session = await auth();
    const isLoggedIn = !!session?.user?.id;

    const sanitizedContent = DOMPurify.sanitize(post.content, {
        ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'a', 'blockquote', 'code', 'pre'],
        ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'class', 'target', 'rel'],
        ALLOW_DATA_ATTR: false,
    });

    return (
        <div className="min-h-screen bg-stone-100 dark:bg-[#0c0a09]">
            {/* Header */}
            <div className="bg-stone-900 dark:bg-stone-950 border-b border-stone-800">
                <div className="max-w-4xl mx-auto px-4 py-8 lg:py-12">
                    <Link href="/forum" className="inline-flex items-center text-orange-400 hover:text-orange-300 mb-4 text-sm transition-colors">
                        ← Forum&apos;a Dön
                    </Link>

                    <div className="flex items-center gap-2 mb-3">
                        <span className="px-2.5 py-1 bg-orange-600/20 text-orange-400 rounded-lg text-xs font-medium border border-orange-500/20">
                            {post.category}
                        </span>
                        <span className="text-stone-500 text-xs">
                            {new Date(post.createdAt).toLocaleDateString('tr-TR', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric',
                            })}
                        </span>
                    </div>

                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-stone-700 flex items-center justify-center overflow-hidden">
                            {post.author.image ? (
                                <img src={post.author.image} alt="" className="w-full h-full object-cover" />
                            ) : (
                                <span className="text-stone-400 text-sm font-bold">
                                    {(post.author.name || '?')[0].toUpperCase()}
                                </span>
                            )}
                        </div>
                        <div>
                            <div className="text-sm font-medium text-white">{post.author.name || 'Anonim'}</div>
                            <div className="text-xs text-stone-500">
                                {viewCount} görüntüleme · {replies.length} yanıt
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-6 lg:p-8 shadow-sm mb-8">
                    <div
                        className="prose dark:prose-invert max-w-none prose-stone prose-p:text-stone-600 dark:prose-p:text-stone-400 prose-headings:text-stone-900 dark:prose-headings:text-stone-100 prose-a:text-orange-600"
                        dangerouslySetInnerHTML={{ __html: sanitizedContent }}
                    />
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
