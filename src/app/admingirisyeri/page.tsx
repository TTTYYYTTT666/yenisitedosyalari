'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setError('');

        const formData = new FormData(e.currentTarget);
        const username = formData.get('username') as string;
        const securityName = formData.get('securityName') as string;
        const password = formData.get('password') as string;

        try {
            const result = await signIn('credentials', {
                username,
                securityName,
                password,
                redirect: false,
            });

            if (result?.error) {
                setError('Erişim Reddedildi. Bilgiler hatalı.');
            } else {
                router.push('/admin');
                router.refresh();
            }
        } catch {
            setError('Bir hata oluştu.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-4">
            <div className="max-w-md w-full space-y-8 bg-zinc-900 p-10 rounded-xl border border-zinc-800 shadow-2xl">
                <div>
                    <h2 className="text-center text-3xl font-bold text-white tracking-widest uppercase">
                        Yönetici Girişi
                    </h2>
                    <p className="mt-2 text-center text-xs text-zinc-500 font-mono">
                        Yetkisiz erişim kaydedilmektedir.
                    </p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="username" className="sr-only">Kullanıcı Adı</label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-zinc-700 placeholder-zinc-500 text-white bg-black focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm font-mono"
                                placeholder="Kullanıcı Adı"
                            />
                        </div>
                        <div>
                            <label htmlFor="securityName" className="sr-only">Güvenlik İsmi</label>
                            <input
                                id="securityName"
                                name="securityName"
                                type="text"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-zinc-700 placeholder-zinc-500 text-white bg-black focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm font-mono"
                                placeholder="Güvenlik İsmi"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Şifre</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-zinc-700 placeholder-zinc-500 text-white bg-black focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm font-mono"
                                placeholder="Şifre"
                            />
                        </div>
                    </div>

                    {error && (
                        <div className="text-red-500 text-xs text-center font-mono bg-red-900/20 p-2 border border-red-900/50">
                            {error}
                        </div>
                    )}

                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium text-white bg-red-900 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 transition-colors uppercase tracking-wider"
                        >
                            {loading ? 'Doğrulanıyor...' : 'Sisteme Gir'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
