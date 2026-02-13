'use client';

import { login } from '@/actions/auth-actions';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Turnstile } from '@marsidev/react-turnstile';

export default function LoginPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [fieldErrors, setFieldErrors] = useState<{ email?: boolean; password?: boolean }>({});
    const [showPassword, setShowPassword] = useState(false);

    // OTP States
    const [otpLoading, setOtpLoading] = useState(false);
    const [otpSent, setOtpSent] = useState(false);
    const [otpCode, setOtpCode] = useState('');
    const [otpEmail, setOtpEmail] = useState(''); // Store email for verification step
    const [turnstileToken, setTurnstileToken] = useState('');

    async function handleCredentialsLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setError('');
        setFieldErrors({});

        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        if (!email || !password) {
            setError('Email ve şifre gereklidir');
            setFieldErrors({ email: !email, password: !password });
            setLoading(false);
            return;
        }

        try {
            const result = await signIn('credentials', {
                email,
                password,
                redirect: false,
            });

            if (result?.error) {
                setError('Yanlış email veya şifre');
                setFieldErrors({ email: true, password: true });
            } else {
                router.push('/');
                router.refresh();
            }
        } catch {
            setError('Bir hata oluştu. Lütfen tekrar deneyin.');
        } finally {
            setLoading(false);
        }
    }

    async function handleSendOtp() {
        const emailInput = document.getElementById('email') as HTMLInputElement;
        const email = emailInput?.value;

        if (!email) {
            setError('Lütfen email adresinizi girin');
            setFieldErrors({ email: true });
            return;
        }

        if (!turnstileToken) {
            setError('Lütfen robot olmadığınızı doğrulayın');
            return;
        }

        setOtpLoading(true);
        setError('');

        try {
            const res = await fetch('/api/auth/send-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, token: turnstileToken })
            });

            if (!res.ok) {
                const data = await res.text();
                throw new Error(data || 'Mail gönderilemedi');
            }

            setOtpSent(true);
            setOtpEmail(email);
            setError('');
        } catch (error: any) {
            setError(error.message || 'Kod gönderilirken bir hata oluştu.');
        } finally {
            setOtpLoading(false);
        }
    }

    async function handleVerifyOtp() {
        if (!otpCode || otpCode.length < 6) {
            setError('Lütfen 6 haneli kodu girin');
            return;
        }

        setOtpLoading(true);
        setError('');

        try {
            const result = await signIn('credentials', {
                email: otpEmail,
                otp: otpCode,
                redirect: false,
            });

            if (result?.error) {
                setError('Geçersiz veya süresi dolmuş kod.');
            } else {
                router.push('/');
                router.refresh();
            }
        } catch {
            setError('Doğrulama hatası.');
        } finally {
            setOtpLoading(false);
        }
    }

    const inputBaseClass = "appearance-none rounded-lg relative block w-full px-3.5 py-2.5 border placeholder-stone-400 text-stone-900 dark:text-stone-100 dark:bg-stone-800 focus:outline-none focus:ring-2 text-sm transition-colors";
    const inputNormalClass = `${inputBaseClass} border-stone-300 dark:border-stone-700 focus:ring-orange-500 focus:border-orange-500`;
    const inputErrorClass = `${inputBaseClass} border-red-400 dark:border-red-600 focus:ring-red-500 focus:border-red-500 bg-red-50/50 dark:bg-red-950/20`;

    return (
        <div className="min-h-screen bg-stone-50 dark:bg-[#0c0a09] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-4xl flex rounded-xl overflow-hidden border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900">

                {/* Left Info Panel */}
                <div className="hidden lg:flex lg:w-[380px] bg-stone-900 dark:bg-stone-950 p-8 flex-col justify-between relative overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:32px_32px]" />
                    <div className="relative z-10">
                        <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center mb-6">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold mb-3">
                            <span className="text-orange-500">OTORAPORU</span><span className="text-white">.NET</span>
                        </h2>
                        <p className="text-stone-400 text-sm leading-relaxed mb-8">
                            Araç almadan önce kronik sorunları öğrenin, binlerce kullanıcının deneyimlerinden faydalanın.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-orange-600/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-white text-sm font-medium">Kronik Sorun Takibi</p>
                                    <p className="text-stone-500 text-xs">255+ araç modeli için detaylı analiz</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-orange-600/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-white text-sm font-medium">Kullanıcı Deneyimleri</p>
                                    <p className="text-stone-500 text-xs">Gerçek sahiplerden ilk elden bilgi</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-orange-600/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-white text-sm font-medium">%100 Ücretsiz</p>
                                    <p className="text-stone-500 text-xs">Tamamen ücretsiz, tarafsız içerik</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="relative z-10 text-stone-600 text-[11px] mt-8">
                        Giriş yaparak hizmet şartlarımızı kabul etmiş olursunuz.
                    </p>
                </div>

                {/* Right Login Form */}
                <div className="flex-1 p-7 sm:p-8">
                    <div className="max-w-sm mx-auto">
                        <div className="text-center mb-6">
                            <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-100">
                                Tekrar Hoşgeldiniz
                            </h2>
                            <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
                                Hesabınıza giriş yapın
                            </p>
                        </div>

                        <div className="space-y-5">
                            {/* Google Login */}
                            <button
                                onClick={() => login()}
                                className="w-full flex items-center justify-center gap-2.5 px-4 py-2.5 border border-stone-300 dark:border-stone-700 rounded-lg bg-white dark:bg-stone-800 text-sm font-medium text-stone-700 dark:text-stone-200 hover:bg-stone-50 dark:hover:bg-stone-700 transition-colors"
                            >
                                <svg className="h-4.5 w-4.5" aria-hidden="true" viewBox="0 0 24 24">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                </svg>
                                Google ile Giriş Yap
                            </button>

                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-stone-200 dark:border-stone-800" />
                                </div>
                                <div className="relative flex justify-center text-xs">
                                    <span className="px-2 bg-white dark:bg-stone-900 text-stone-400">veya email ile</span>
                                </div>
                            </div>

                            {/* Error Message */}
                            {error && (
                                <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-lg p-3 flex items-center gap-2.5">
                                    <svg className="w-4 h-4 text-red-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-red-600 dark:text-red-400 text-sm">{error}</span>
                                </div>
                            )}

                            {/* Email Form */}
                            <form onSubmit={handleCredentialsLogin} className="space-y-3.5">
                                <div>
                                    <label htmlFor="email" className="block text-xs font-medium text-stone-600 dark:text-stone-400 mb-1.5">
                                        Email Adresi
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        className={fieldErrors.email ? inputErrorClass : inputNormalClass}
                                        placeholder="E-posta adresiniz"
                                        onChange={() => {
                                            if (fieldErrors.email) {
                                                setFieldErrors(prev => ({ ...prev, email: false }));
                                                setError('');
                                            }
                                        }}
                                    />
                                </div>
                                <div>
                                    <div className="flex items-center justify-between mb-1.5">
                                        <label htmlFor="password" className="block text-xs font-medium text-stone-600 dark:text-stone-400">
                                            Şifre
                                        </label>
                                        <Link href="/sifremi-unuttum" className="text-xs text-orange-600 hover:text-orange-500 font-medium">
                                            Şifremi Unuttum
                                        </Link>
                                    </div>
                                    <div className="relative">
                                        <input
                                            id="password"
                                            name="password"
                                            type={showPassword ? 'text' : 'password'}
                                            required
                                            className={`${fieldErrors.password ? inputErrorClass : inputNormalClass} pr-10`}
                                            placeholder="••••••••"
                                            onChange={() => {
                                                if (fieldErrors.password) {
                                                    setFieldErrors(prev => ({ ...prev, password: false }));
                                                    setError('');
                                                }
                                            }}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute inset-y-0 right-0 flex items-center pr-3 text-stone-400 hover:text-stone-600 dark:hover:text-stone-300 transition-colors"
                                            tabIndex={-1}
                                        >
                                            {showPassword ? (
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                                </svg>
                                            ) : (
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                            )}
                                        </button>
                                    </div>
                                </div>

                                {/* Cloudflare Turnstile */}
                                {process.env.NEXT_PUBLIC_CLOUDFLARE_SITE_KEY && (
                                    <div className="w-full flex justify-center my-6">
                                        <Turnstile
                                            siteKey={process.env.NEXT_PUBLIC_CLOUDFLARE_SITE_KEY}
                                            options={{ theme: 'auto' }}
                                            onSuccess={(token) => setTurnstileToken(token)}
                                        />
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full flex justify-center py-2.5 px-4 text-sm font-semibold rounded-lg text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {loading ? (
                                        <span className="flex items-center gap-2">
                                            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                            </svg>
                                            Giriş Yapılıyor...
                                        </span>
                                    ) : 'Giriş Yap'}
                                </button>
                            </form>

                            {/* OTP / Magic Link Section */}
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-stone-200 dark:border-stone-800" />
                                </div>
                                <div className="relative flex justify-center text-xs">
                                    <span className="px-2 bg-white dark:bg-stone-900 text-stone-400">Şifresiz Giriş</span>
                                </div>
                            </div>

                            {otpSent ? (
                                <div className="space-y-3">
                                    <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900 rounded-lg p-3 text-center">
                                        <p className="text-sm text-orange-800 dark:text-orange-300">
                                            <b>{otpEmail}</b> adresine gönderilen kodu girin:
                                        </p>
                                    </div>

                                    <input
                                        type="text"
                                        value={otpCode}
                                        onChange={(e) => setOtpCode(e.target.value)}
                                        placeholder="6 Haneli Kod"
                                        className={`${inputNormalClass} text-center text-lg tracking-widest font-mono`}
                                        maxLength={6}
                                    />

                                    <button
                                        type="button"
                                        onClick={handleVerifyOtp}
                                        disabled={otpLoading}
                                        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-orange-600 text-white hover:bg-orange-700 transition-colors disabled:opacity-50"
                                    >
                                        {otpLoading ? 'Doğrulanıyor...' : 'Giriş Yap'}
                                    </button>
                                </div>
                            ) : (
                                <button
                                    type="button"
                                    onClick={handleSendOtp}
                                    disabled={otpLoading || loading}
                                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 border border-stone-300 dark:border-stone-700 rounded-lg bg-white dark:bg-stone-800 text-sm font-medium text-stone-700 dark:text-stone-200 hover:bg-stone-50 dark:hover:bg-stone-700 transition-colors disabled:opacity-50"
                                >
                                    {otpLoading ? (
                                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                    ) : (
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    )}
                                    Doğrulama Kodu ile Giriş Yap
                                </button>
                            )}

                            <div className="text-sm text-center">
                                <span className="text-stone-500">Hesabınız yok mu? </span>
                                <Link href="/kayit" className="font-medium text-orange-600 hover:text-orange-500">
                                    Şimdi Kayıt Olun
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
