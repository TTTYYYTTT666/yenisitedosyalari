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
    userCreatedAt?: string | null;
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
                setError(err.message || 'Bir hata olustu');
            }
        });
    };

    return (
        <div>
            <h2 className="text-base font-bold text-stone-900 dark:text-stone-100 mb-4">
                Yanitlar ({replies.length})
            </h2>

            {replies.length === 0 ? (
                <div className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 p-6 text-center mb-4">
                    <p className="text-sm text-stone-400">Henüz yanit yok. Ilk yaniti siz yazin.</p>
                </div>
            ) : (
                <div className="space-y-2 mb-4">
                    {replies.map((reply, index) => {
                        const sanitized = DOMPurify.sanitize(reply.content, {
                            ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'a', 'code'],
                            ALLOWED_ATTR: ['href'],
                        });
                        const memberSince = reply.userCreatedAt
                            ? new Date(reply.userCreatedAt).toLocaleDateString('tr-TR', { month: 'short', year: 'numeric' })
                            : null;

                        return (
                            <div
                                key={reply.id}
                                className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 overflow-hidden"
                            >
                                <div className="md:flex">
                                    {/* Author sidebar */}
                                    <div className="md:w-40 bg-stone-50 dark:bg-stone-800/30 p-3 md:border-r border-b md:border-b-0 border-stone-200 dark:border-stone-800 flex md:flex-col items-center gap-2">
                                        <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-stone-200 dark:bg-stone-700 flex items-center justify-center overflow-hidden shrink-0">
                                            {reply.userImage ? (
                                                <img src={reply.userImage} alt="" className="w-full h-full object-cover" />
                                            ) : (
                                                <span className="text-stone-400 text-xs font-bold">
                                                    {(reply.userName || '?')[0].toUpperCase()}
                                                </span>
                                            )}
                                        </div>
                                        <div className="md:text-center">
                                            <div className="text-xs font-bold text-stone-800 dark:text-stone-200">
                                                {reply.userName || 'Anonim'}
                                            </div>
                                            {memberSince && (
                                                <div className="text-[10px] text-stone-400 mt-0.5">
                                                    Üye: {memberSince}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Reply content */}
                                    <div className="flex-1 p-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-[11px] text-stone-400">
                                                {new Date(reply.createdAt).toLocaleDateString('tr-TR', {
                                                    day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit',
                                                })}
                                            </span>
                                            <span className="text-[11px] text-stone-300 dark:text-stone-600">#{index + 1}</span>
                                        </div>
                                        <div
                                            className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed"
                                            dangerouslySetInnerHTML={{ __html: sanitized }}
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* Reply form */}
            {isLoggedIn ? (
                <form onSubmit={handleSubmit} className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 p-4">
                    <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                        Yanit Yaz
                    </label>
                    <textarea
                        value={replyText}
                        onChange={e => setReplyText(e.target.value)}
                        placeholder="Yanitinizi yazin..."
                        rows={4}
                        className="w-full px-3 py-2.5 text-sm rounded-lg border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-800 dark:text-stone-200 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none mb-2"
                    />
                    {error && <p className="text-xs text-red-500 mb-2">{error}</p>}
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            disabled={isPending || !replyText.trim()}
                            className="px-5 py-2 bg-orange-600 hover:bg-orange-700 disabled:opacity-50 text-white text-sm font-semibold rounded-lg transition-colors"
                        >
                            {isPending ? 'Gönderiliyor...' : 'Yanitla'}
                        </button>
                    </div>
                </form>
            ) : (
                <div className="bg-stone-50 dark:bg-stone-800/50 rounded-lg border border-stone-200 dark:border-stone-700 p-4 text-center">
                    <p className="text-sm text-stone-500">
                        Yanit yazmak icin{' '}
                        <a href="/giris" className="text-orange-600 font-medium hover:underline">
                            giris yapin
                        </a>
                    </p>
                </div>
            )}
        </div>
    );
}
