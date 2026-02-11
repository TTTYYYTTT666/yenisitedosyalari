'use client';

import { useState, useEffect } from 'react';
import { getCommentsForModeration, adminDeleteComment } from '@/actions/admin-actions';
import Link from 'next/link';

interface Comment {
    id: string;
    text: string;
    carSlug: string;
    createdAt: Date;
    user: {
        name: string | null;
        email: string | null;
    };
}

export default function AdminCommentsPage() {
    const [comments, setComments] = useState<Comment[]>([]);
    const [loading, setLoading] = useState(true);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(1);
    const [actionLoading, setActionLoading] = useState<string | null>(null);

    async function loadComments() {
        setLoading(true);
        try {
            const data = await getCommentsForModeration(page);
            setComments(data.comments);
            setTotal(data.total);
            setPages(data.pages);
        } catch (error) {
            console.error(error);
            alert('Yorumlar yüklenemedi');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadComments();
    }, [page]);

    async function handleDelete(commentId: string) {
        if (!confirm('Bu yorumu silmek istediğinize emin misiniz?')) return;

        setActionLoading(commentId);
        try {
            await adminDeleteComment(commentId);
            await loadComments();
        } catch (error: unknown) {
            alert(error instanceof Error ? error.message : 'Hata oluştu');
        } finally {
            setActionLoading(null);
        }
    }

    return (
        <div className="min-h-screen bg-zinc-950 text-white">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-900 to-pink-900 border-b border-purple-800">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold">💬 Yorum Moderasyonu</h1>
                            <p className="text-purple-200 mt-1">Toplam {total} yorum</p>
                        </div>
                        <Link
                            href="/admin"
                            className="px-4 py-2 bg-stone-800 hover:bg-stone-700 rounded-lg transition-colors"
                        >
                            ← Admin Paneli
                        </Link>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8">
                {loading ? (
                    <div className="text-center py-12">Yükleniyor...</div>
                ) : (
                    <>
                        {/* Comments List */}
                        <div className="space-y-4">
                            {comments.map((comment: any) => (
                                <div key={comment.id} className="bg-stone-900 border border-stone-800 rounded-xl p-4">
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="text-gray-300">{comment.text}</div>
                                            <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                                                <span>👤 {comment.user.name || 'İsimsiz'}</span>
                                                <span>📧 {comment.user.email}</span>
                                                <span>🚗 {comment.carSlug}</span>
                                                <span>📅 {new Date(comment.createdAt).toLocaleDateString('tr-TR')}</span>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => handleDelete(comment.id)}
                                            disabled={actionLoading === comment.id}
                                            className="px-4 py-2 bg-red-500/20 text-red-400 hover:bg-red-500/30 rounded-lg text-sm"
                                        >
                                            {actionLoading === comment.id ? '...' : '🗑️ Sil'}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination */}
                        {pages > 1 && (
                            <div className="flex justify-center gap-2 mt-6">
                                <button
                                    onClick={() => setPage(p => Math.max(1, p - 1))}
                                    disabled={page === 1}
                                    className="px-4 py-2 bg-stone-800 rounded-lg disabled:opacity-50"
                                >
                                    ← Önceki
                                </button>
                                <span className="px-4 py-2 text-gray-400">
                                    Sayfa {page} / {pages}
                                </span>
                                <button
                                    onClick={() => setPage(p => Math.min(pages, p + 1))}
                                    disabled={page === pages}
                                    className="px-4 py-2 bg-stone-800 rounded-lg disabled:opacity-50"
                                >
                                    Sonraki →
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
