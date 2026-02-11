'use client';

import { useState } from 'react';
import { addComment, deleteComment } from '@/actions/comment-actions';
import { useOptimistic } from 'react';

interface User {
    id: string;
    name?: string | null;
    image?: string | null;
}

interface Comment {
    id: string;
    text: string;
    createdAt: Date;
    user: User;
}

interface CommentsSectionProps {
    carSlug: string;
    currentUser?: User | null;
    comments: Comment[];
}

export default function CommentsSection({ carSlug, currentUser, comments }: CommentsSectionProps) {
    const [optimisticComments, addOptimisticComment] = useOptimistic(
        comments,
        (state, newComment: Comment) => [newComment, ...state]
    );

    const [text, setText] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!text.trim() || !currentUser) return;

        setIsSubmitting(true);

        const newComment = {
            id: Math.random().toString(),
            text: text,
            createdAt: new Date(),
            user: currentUser
        };

        addOptimisticComment(newComment);

        try {
            await addComment(carSlug, text);
            setText('');
        } catch (error) {
            console.error(error);
            alert('Yorum gönderilemedi');
        } finally {
            setIsSubmitting(false);
        }
    }

    async function handleDelete(authorId: string, commentId: string) {
        if (!currentUser || currentUser.id !== authorId) return;
        if (!confirm('Silmek istediğinize emin misiniz?')) return;

        try {
            await deleteComment(commentId);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="mt-10 bg-white dark:bg-stone-900 rounded-xl p-5 sm:p-6 border border-stone-200 dark:border-stone-800">
            <h3 className="text-lg font-bold mb-5 text-stone-900 dark:text-stone-100 flex items-center gap-2">
                💬 Kullanıcı Yorumları
                <span className="text-sm font-normal text-stone-400">
                    ({optimisticComments.length})
                </span>
            </h3>

            {/* Comment Form */}
            {currentUser ? (
                <form onSubmit={handleSubmit} className="mb-8">
                    <div className="flex gap-3">
                        <img
                            src={currentUser.image || `https://ui-avatars.com/api/?name=${currentUser.name}`}
                            alt={currentUser.name || 'User'}
                            className="w-8 h-8 rounded-full"
                        />
                        <div className="flex-grow">
                            <textarea
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                placeholder="Bu araçla ilgili tecrübelerinizi veya sorularınızı yazın..."
                                className="w-full bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg p-3 min-h-[80px] focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all resize-y text-stone-900 dark:text-stone-100 text-sm"
                                required
                            />
                            <div className="flex justify-end mt-1.5">
                                <button
                                    type="submit"
                                    disabled={isSubmitting || !text.trim()}
                                    className="px-4 py-1.5 bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Gönderiliyor...' : 'Yorum Yap'}
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            ) : (
                <div className="mb-8 p-5 bg-stone-50 dark:bg-stone-800/50 rounded-lg text-center border border-stone-200 dark:border-stone-800 flex flex-col items-center justify-center gap-3">
                    <p className="text-stone-500 dark:text-stone-400 text-sm">
                        Bu araç hakkında yorum yapmak veya soru sormak için giriş yapmalısınız.
                    </p>
                    <a
                        href="/giris"
                        className="px-4 py-1.5 bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold rounded-lg transition-colors"
                    >
                        Giriş Yap / Üye Ol
                    </a>
                </div>
            )}

            {/* Comments List */}
            <div className="space-y-5">
                {optimisticComments.length === 0 ? (
                    <p className="text-stone-400 text-center py-6 text-sm">Henüz yorum yapılmamış. İlk yorumu siz yapın!</p>
                ) : (
                    optimisticComments.map((comment) => (
                        <div key={comment.id} className="flex gap-3 group">
                            <img
                                src={comment.user.image || `https://ui-avatars.com/api/?name=${comment.user.name}`}
                                alt={comment.user.name || 'User'}
                                className="w-8 h-8 rounded-full"
                            />
                            <div className="flex-grow">
                                <div className="flex items-center justify-between mb-0.5">
                                    <div>
                                        <span className="font-semibold text-stone-900 dark:text-stone-100 text-sm mr-2">
                                            {comment.user.name}
                                        </span>
                                        <span className="text-xs text-stone-400">
                                            {new Date(comment.createdAt).toLocaleDateString('tr-TR', {
                                                day: 'numeric', month: 'long', year: 'numeric'
                                            })}
                                        </span>
                                    </div>
                                    {currentUser?.id === comment.user.id && (
                                        <button
                                            onClick={() => handleDelete(comment.user.id, comment.id)}
                                            className="text-red-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity text-xs"
                                        >
                                            Sil
                                        </button>
                                    )}
                                </div>
                                <p className="text-stone-600 dark:text-stone-300 leading-relaxed text-sm">
                                    {comment.text}
                                </p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
