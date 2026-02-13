'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Turnstile } from '@marsidev/react-turnstile';

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const [turnstileToken, setTurnstileToken] = useState('');

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError('');

        if (!email) {
            setError('Lütfen email adresinizi girin');
            return;
        }

        if (!turnstileToken && process.env.NEXT_PUBLIC_CLOUDFLARE_SITE_KEY) {
            setError('Lütfen robot olmadığınızı doğrulayın');
            return;
        }

        setLoading(true);

        try {
            const res = await fetch('/api/auth/reset-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, token: turnstileToken }),
            });

            if (!res.ok) {
                const text = await res.text();
                throw new Error(text || 'Bir hata oluştu');
            }

            setSuccess(true);
        } catch (err: any) {
            setError(err.message || 'Bir hata oluştu.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen bg-stone-50 dark:bg-[#0c0a09] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white dark:bg-stone-900 p-8 rounded-xl border border-stone-200 dark:border-stone-800 shadow-sm">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-stone-900 dark:text-stone-100">
                        Şifremi Unuttum
                    </h2>
                    <p className="mt-2 text-center text-sm text-stone-600 dark:text-stone-400">
                        Email adresinizi girin, size şifre sıfırlama bağlantısı gönderelim.
                    </p>
                </div>

                {success ? (
                    <div className="rounded-md bg-green-50 dark:bg-green-900/20 p-4">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="ml-3">
                                <h3 className="text-sm font-medium text-green-800 dark:text-green-200">
                                    Sıfırlama bağlantısı gönderildi!
                                </h3>
                                <div className="mt-2 text-sm text-green-700 dark:text-green-300">
                                    <p>
                                        <b>{email}</b> adresine şifre sıfırlama bağlantısı gönderildi. Lütfen e-posta kutunuzu kontrol edin. (Spam klasörüne bakmayı unutmayın)
                                    </p>
                                </div>
                                <div className="mt-4">
                                    <Link href="/giris" className="text-sm font-medium text-green-600 dark:text-green-400 hover:text-green-500">
                                        &larr; Giriş sayfasına dön
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="sr-only">Email Adresi</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-stone-300 dark:border-stone-700 placeholder-stone-500 text-stone-900 dark:text-stone-100 dark:bg-stone-800 focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                                placeholder="Email adresiniz"
                            />
                        </div>

                        {error && (
                            <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-lg p-3 flex items-center gap-2.5">
                                <svg className="w-4 h-4 text-red-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-red-600 dark:text-red-400 text-sm">{error}</span>
                            </div>
                        )}

                        {process.env.NEXT_PUBLIC_CLOUDFLARE_SITE_KEY && (
                            <div className="w-full flex justify-center">
                                <Turnstile
                                    siteKey={process.env.NEXT_PUBLIC_CLOUDFLARE_SITE_KEY}
                                    options={{ theme: 'auto' }}
                                    onSuccess={(token) => setTurnstileToken(token)}
                                />
                            </div>
                        )}

                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="group relative w-full flex justify-center py-2.5 px-4 border border-transparent text-sm font-semibold rounded-lg text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                {loading ? (
                                    <span className="flex items-center gap-2">
                                        <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Gönderiliyor...
                                    </span>
                                ) : (
                                    'Sıfırlama Bağlantısı Gönder'
                                )}
                            </button>
                        </div>

                        <div className="text-center">
                            <Link href="/giris" className="font-medium text-orange-600 hover:text-orange-500 text-sm">
                                Giriş sayfasına dön
                            </Link>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}
