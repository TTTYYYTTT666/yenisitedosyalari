'use client';

import { useState, useTransition } from 'react';
import { createReply } from '@/actions/forum-actions';
import DOMPurify from 'isomorphic-dompurify';

interface Reply {
    id: string;
    content: string;
    createdAt: string;
    userId: string;
    userName: string | null;
    userImage: string | null;
}

interface ForumReplySectionProps {
    postId: string;
    replies: Reply[];
    isLoggedIn: boolean;
}

export default function ForumReplySection({ postId, replies: initialReplies, isLoggedIn }: ForumReplySectionProps) {
    const [replies] = useState(initialReplies);
    const [replyText, setReplyText] = useState('');
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!replyText.trim()) return;
        setError('');

        startTransition(async () => {
            try {
                await createReply(postId, replyText);
                setReplyText('');
            } catch (err: any) {
                setError(err.message || 'Bir hata oluştu');
            }
        });
    };

    return (
        <div>
            <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-4 flex items-center gap-2">
                💬 Yanıtlar
                <span className="text-sm text-stone-400 font-normal">({replies.length})</span>
            </h2>

            {replies.length === 0 ? (
                <div className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 p-6 text-center mb-6">
                    <p className="text-sm text-stone-400">Henüz yanıt yok. İlk yanıtı siz yazın!</p>
                </div>
            ) : (
                <div className="space-y-3 mb-6">
                    {replies.map((reply) => {
                        const sanitized = DOMPurify.sanitize(reply.content, {
                            ALLOWED_TAGS: ['p', 'br', 'strong', 'em'],
                            ALLOWED_ATTR: [],
                        });
                        return (
                            <div
                                key={reply.id}
                                className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 p-5"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 rounded-full bg-stone-200 dark:bg-stone-700 flex items-center justify-center overflow-hidden shrink-0">
                                        {reply.userImage ? (
                                            <img src={reply.userImage} alt="" className="w-full h-full object-cover" />
                                        ) : (
                                            <span className="text-stone-500 text-xs font-bold">
                                                {(reply.userName || '?')[0].toUpperCase()}
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <span className="text-sm font-medium text-stone-800 dark:text-stone-200">
                                            {reply.userName || 'Anonim'}
                                        </span>
                                        <span className="text-xs text-stone-400 ml-2">
                                            {new Date(reply.createdAt).toLocaleDateString('tr-TR', {
                                                day: 'numeric',
                                                month: 'short',
                                                hour: '2-digit',
                                                minute: '2-digit',
                                            })}
                                        </span>
                                    </div>
                                </div>
                                <div
                                    className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: sanitized }}
                                />
                            </div>
                        );
                    })}
                </div>
            )}

            {/* Reply form */}
            {isLoggedIn ? (
                <form onSubmit={handleSubmit} className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 p-5">
                    <textarea
                        value={replyText}
                        onChange={e => setReplyText(e.target.value)}
                        placeholder="Yanıtınızı yazın..."
                        rows={3}
                        className="w-full px-4 py-3 text-sm rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-800 dark:text-stone-200 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none mb-3"
                    />
                    {error && <p className="text-xs text-red-500 mb-2">{error}</p>}
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            disabled={isPending || !replyText.trim()}
                            className="px-5 py-2.5 bg-orange-600 hover:bg-orange-700 disabled:opacity-50 text-white text-sm font-semibold rounded-xl transition-colors"
                        >
                            {isPending ? 'Gönderiliyor...' : 'Yanıtla'}
                        </button>
                    </div>
                </form>
            ) : (
                <div className="bg-stone-50 dark:bg-stone-800/50 rounded-xl border border-stone-200 dark:border-stone-700 p-4 text-center">
                    <p className="text-sm text-stone-500 dark:text-stone-400">
                        Yanıt yazmak için{' '}
                        <a href="/giris" className="text-orange-600 dark:text-orange-400 font-medium hover:underline">
                            giriş yapın
                        </a>
                    </p>
                </div>
            )}
        </div>
    );
}
