'use client';

import { useState, useEffect } from 'react';
import { getExperiencesForModeration, adminDeleteExperience } from '@/actions/admin-actions';
import Link from 'next/link';

interface Experience {
    id: string;
    title: string;
    carBrand: string;
    carModel: string;
    rating: number;
    content: string;
    createdAt: Date;
    user: {
        name: string | null;
        email: string | null;
    };
}

export default function AdminExperiencesPage() {
    const [experiences, setExperiences] = useState<Experience[]>([]);
    const [loading, setLoading] = useState(true);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(1);
    const [actionLoading, setActionLoading] = useState<string | null>(null);

    async function loadExperiences() {
        setLoading(true);
        try {
            const data = await getExperiencesForModeration(page);
            setExperiences(data.experiences);
            setTotal(data.total);
            setPages(data.pages);
        } catch (error) {
            console.error(error);
            alert('Deneyimler yüklenemedi');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadExperiences();
    }, [page]);

    async function handleDelete(experienceId: string) {
        if (!confirm('Bu deneyimi silmek istediğinize emin misiniz?')) return;

        setActionLoading(experienceId);
        try {
            await adminDeleteExperience(experienceId);
            await loadExperiences();
        } catch (error: unknown) {
            alert(error instanceof Error ? error.message : 'Hata oluştu');
        } finally {
            setActionLoading(null);
        }
    }

    return (
        <div className="min-h-screen bg-zinc-950 text-white">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-900 to-teal-900 border-b border-green-800">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold">📝 Deneyim Moderasyonu</h1>
                            <p className="text-green-200 mt-1">Toplam {total} deneyim</p>
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
                        {/* Experiences List */}
                        <div className="space-y-4">
                            {experiences.map((exp: any) => (
                                <div key={exp.id} className="bg-stone-900 border border-stone-800 rounded-xl p-4">
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="font-bold text-lg">{exp.title}</h3>
                                                <span className="text-yellow-400">{'★'.repeat(exp.rating)}</span>
                                            </div>
                                            <p className="text-gray-400 text-sm line-clamp-2 mb-2">{exp.content}</p>
                                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                                <span>🚗 {exp.carBrand} {exp.carModel}</span>
                                                <span>👤 {exp.user.name || 'İsimsiz'}</span>
                                                <span>📧 {exp.user.email}</span>
                                                <span>📅 {new Date(exp.createdAt).toLocaleDateString('tr-TR')}</span>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => handleDelete(exp.id)}
                                            disabled={actionLoading === exp.id}
                                            className="px-4 py-2 bg-red-500/20 text-red-400 hover:bg-red-500/30 rounded-lg text-sm"
                                        >
                                            {actionLoading === exp.id ? '...' : '🗑️ Sil'}
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
