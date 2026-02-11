'use client';

import { useState, useEffect } from 'react';
import { getUsers, updateUserRole, deleteUser } from '@/actions/admin-actions';
import Link from 'next/link';

interface User {
    id: string;
    name: string | null;
    email: string | null;
    image: string | null;
    role: string;
    carBrand: string | null;
    carModel: string | null;
    _count: {
        comments: number;
        experiences: number;
        posts: number;
    };
}

export default function AdminUsersPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(1);
    const [actionLoading, setActionLoading] = useState<string | null>(null);

    async function loadUsers() {
        setLoading(true);
        try {
            const data = await getUsers(page);
            setUsers(data.users);
            setTotal(data.total);
            setPages(data.pages);
        } catch (error) {
            console.error(error);
            alert('Kullanıcılar yüklenemedi');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadUsers();
    }, [page]);

    async function handleRoleChange(userId: string, newRole: 'USER' | 'ADMIN' | 'OWNER') {
        if (!confirm(`Bu kullanıcının rolünü ${newRole} olarak değiştirmek istediğinize emin misiniz?`)) return;

        setActionLoading(userId);
        try {
            await updateUserRole(userId, newRole);
            await loadUsers();
        } catch (error: unknown) {
            alert(error instanceof Error ? error.message : 'Hata oluştu');
        } finally {
            setActionLoading(null);
        }
    }

    async function handleDelete(userId: string, userName: string | null) {
        if (!confirm(`${userName || 'Bu kullanıcı'} ve tüm içerikleri silinecek. Emin misiniz?`)) return;

        setActionLoading(userId);
        try {
            await deleteUser(userId);
            await loadUsers();
        } catch (error: unknown) {
            alert(error instanceof Error ? error.message : 'Hata oluştu');
        } finally {
            setActionLoading(null);
        }
    }

    return (
        <div className="min-h-screen bg-zinc-950 text-white">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 border-b border-blue-800">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold">👥 Kullanıcı Yönetimi</h1>
                            <p className="text-blue-200 mt-1">Toplam {total} kullanıcı</p>
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
                        {/* Users Table */}
                        <div className="bg-stone-900 border border-stone-800 rounded-xl overflow-hidden">
                            <table className="w-full">
                                <thead className="bg-stone-800">
                                    <tr>
                                        <th className="text-left px-4 py-3">Kullanıcı</th>
                                        <th className="text-left px-4 py-3">Araç</th>
                                        <th className="text-center px-4 py-3">İçerik</th>
                                        <th className="text-center px-4 py-3">Rol</th>
                                        <th className="text-center px-4 py-3">İşlemler</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user: any) => (
                                        <tr key={user.id} className="border-t border-stone-800 hover:bg-stone-800/50">
                                            <td className="px-4 py-3">
                                                <div className="flex items-center gap-3">
                                                    <img
                                                        src={user.image || `https://ui-avatars.com/api/?name=${user.name}`}
                                                        alt={user.name || 'User'}
                                                        className="w-10 h-10 rounded-full"
                                                    />
                                                    <div>
                                                        <div className="font-medium">{user.name || 'İsimsiz'}</div>
                                                        <div className="text-sm text-gray-500">{user.email}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 text-gray-400">
                                                {user.carBrand ? `${user.carBrand} ${user.carModel || ''}` : '-'}
                                            </td>
                                            <td className="px-4 py-3 text-center">
                                                <div className="flex items-center justify-center gap-4 text-sm">
                                                    <span title="Deneyimler" className="text-green-400">
                                                        📝 {user._count.experiences}
                                                    </span>
                                                    <span title="Yorumlar" className="text-blue-400">
                                                        💬 {user._count.comments}
                                                    </span>
                                                    <span title="Blog" className="text-purple-400">
                                                        📰 {user._count.posts}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 text-center">
                                                <select
                                                    value={user.role}
                                                    onChange={(e) => handleRoleChange(user.id, e.target.value as 'USER' | 'ADMIN' | 'OWNER')}
                                                    disabled={actionLoading === user.id}
                                                    className={`px-3 py-1 rounded-lg text-sm font-medium ${user.role === 'OWNER' ? 'bg-red-500/20 text-red-400' :
                                                        user.role === 'ADMIN' ? 'bg-orange-500/20 text-orange-400' :
                                                            'bg-stone-700 text-gray-300'
                                                        }`}
                                                >
                                                    <option value="USER">USER</option>
                                                    <option value="ADMIN">ADMIN</option>
                                                    <option value="OWNER">OWNER</option>
                                                </select>
                                            </td>
                                            <td className="px-4 py-3 text-center">
                                                <button
                                                    onClick={() => handleDelete(user.id, user.name)}
                                                    disabled={actionLoading === user.id || user.role === 'OWNER'}
                                                    className="px-3 py-1 bg-red-500/20 text-red-400 hover:bg-red-500/30 rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                                                >
                                                    {actionLoading === user.id ? '...' : 'Sil'}
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
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
