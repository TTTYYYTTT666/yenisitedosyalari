'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import UserMenu from '@/components/auth/UserMenu';

const toolsMenu = [
    { href: '/karsilastir', label: 'Araç Karşılaştırma', desc: '3 aracı yan yana karşılaştır' },
    { href: '/siralama', label: 'Marka Sıralaması', desc: 'Güvenilirlik sıralaması' },
    { href: '/ekspertiz', label: 'Ekspertiz Checklist', desc: 'Alım öncesi kontrol listesi' },
    { href: '/deneyimler', label: 'Kullanıcı Deneyimleri', desc: 'Gerçek sahip yorumları' },
    { href: '/forum', label: 'Forum', desc: 'Tartışma ve deneyim paylaşımı' },
    { href: '/favorilerim', label: 'Favorilerim', desc: 'Kaydettiğiniz araçlar' },
];

interface HeaderClientProps {
    user?: {
        name?: string | null;
        email?: string | null;
        image?: string | null;
        carBrand?: string | null;
        role?: string | null;
    } | null;
}

export default function HeaderClient({ user }: HeaderClientProps) {
    const [isDark, setIsDark] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isToolsOpen, setIsToolsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDark(savedTheme === 'dark' || (!savedTheme && prefersDark));
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsToolsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header className="sticky top-0 z-50 bg-white dark:bg-[#0c0a09] border-b border-stone-200 dark:border-stone-800">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-14">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-0.5">
                        <div className="relative w-8 h-8 -mr-0.5">
                            <Image
                                src="/logo-transparent.png"
                                alt="OTORAPORU"
                                fill
                                priority
                                sizes="32px"
                                className="object-contain"
                            />
                        </div>
                        <span className="text-xl font-black tracking-tighter leading-none">
                            <span className="text-orange-600">OTORAPORU</span><span className="text-stone-900 dark:text-stone-100">.NET</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        <Link href="/" className="px-3 py-1.5 text-sm text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-md font-medium transition-colors">
                            Ana Sayfa
                        </Link>
                        <Link href="/markalar" className="px-3 py-1.5 text-sm text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-md font-medium transition-colors">
                            Markalar
                        </Link>
                        <Link href="/forum" className="px-3 py-1.5 text-sm text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-md font-medium transition-colors">
                            Forum
                        </Link>

                        {/* Tools Dropdown */}
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setIsToolsOpen(!isToolsOpen)}
                                className="flex items-center gap-1 px-3 py-1.5 text-sm text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-md font-medium transition-colors"
                            >
                                Araçlar
                                <svg className={`w-3.5 h-3.5 transition-transform ${isToolsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {isToolsOpen && (
                                <div className="absolute top-full left-0 mt-1 w-64 bg-white dark:bg-stone-900 rounded-lg shadow-lg border border-stone-200 dark:border-stone-700 py-1 z-50">
                                    {toolsMenu.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setIsToolsOpen(false)}
                                            className="flex flex-col px-3.5 py-2.5 hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors"
                                        >
                                            <span className="text-sm font-medium text-stone-900 dark:text-stone-100">{item.label}</span>
                                            <span className="text-xs text-stone-500 dark:text-stone-500">{item.desc}</span>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link href="/hakkimizda" className="px-3 py-1.5 text-sm text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-md font-medium transition-colors">
                            Hakkımızda
                        </Link>
                    </div>

                    {/* Right side */}
                    <div className="flex items-center gap-2">
                        <UserMenu user={user || undefined} />

                        {/* Theme Toggle */}
                        <button
                            onClick={() => setIsDark(!isDark)}
                            className="p-2 rounded-lg text-stone-500 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 hover:text-stone-700 dark:hover:text-stone-200 transition-colors"
                            aria-label="Tema değiştir"
                        >
                            {isDark ? (
                                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            ) : (
                                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            )}
                        </button>

                        {/* Mobile menu */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 rounded-lg text-stone-500 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                            aria-label="Menü"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-3 border-t border-stone-200 dark:border-stone-800">
                        <div className="flex flex-col">
                            <Link href="/" className="px-3 py-2 text-sm text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-md font-medium">
                                Ana Sayfa
                            </Link>
                            <Link href="/markalar" className="px-3 py-2 text-sm text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-md font-medium">
                                Markalar
                            </Link>
                            <Link href="/blog" className="px-3 py-2 text-sm text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-md font-medium">
                                Blog
                            </Link>
                            <div className="px-3 py-2 text-xs font-semibold text-stone-400 dark:text-stone-500 uppercase tracking-wider mt-2">Araçlar</div>
                            {toolsMenu.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="px-3 py-2 text-sm text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-md pl-5"
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <Link href="/hakkimizda" className="px-3 py-2 text-sm text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-md font-medium mt-1">
                                Hakkımızda
                            </Link>

                            {/* Mobile User Links */}
                            <div className="px-3 py-2 text-xs font-semibold text-stone-400 dark:text-stone-500 uppercase tracking-wider mt-4 border-t border-stone-200 dark:border-stone-800 pt-4">Hesabım</div>
                            {user ? (
                                <>
                                    <div className="px-3 py-2 flex items-center gap-2 mb-2">
                                        {user.image ? (
                                            <img src={user.image} alt={user.name || 'User'} className="w-8 h-8 rounded-full border border-stone-200 dark:border-stone-700" />
                                        ) : (
                                            <div className="w-8 h-8 rounded-full bg-stone-200 dark:bg-stone-800 flex items-center justify-center text-xs font-bold text-stone-600 dark:text-stone-400">
                                                {user.name?.[0] || 'U'}
                                            </div>
                                        )}
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium text-stone-900 dark:text-stone-100">{user.name}</span>
                                            <span className="text-xs text-stone-500 truncate max-w-[150px]">{user.email}</span>
                                        </div>
                                    </div>
                                    <Link href="/bilgilerim" className="px-3 py-2 text-sm text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-md font-medium flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                        Bilgilerim
                                    </Link>
                                    {user.role === 'ADMIN' && (
                                        <Link href="/admin" className="px-3 py-2 text-sm text-orange-600 dark:text-orange-400 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-md font-medium flex items-center gap-2">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            Yönetim Paneli
                                        </Link>
                                    )}
                                    <button
                                        onClick={() => {
                                            setIsMenuOpen(false);
                                            import('next-auth/react').then(({ signOut }) => signOut({ callbackUrl: '/' }));
                                        }}
                                        className="w-full px-3 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-md font-medium flex items-center gap-2 mt-1"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                        </svg>
                                        Çıkış Yap
                                    </button>
                                </>
                            ) : (
                                <Link href="/giris" className="px-3 py-2 text-sm text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-md font-medium flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                    </svg>
                                    Giriş Yap
                                </Link>
                            )}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
