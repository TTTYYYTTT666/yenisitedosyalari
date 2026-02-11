'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import UserMenu from '@/components/auth/UserMenu';

const toolsMenu = [
    { href: '/karsilastir', label: 'Araç Karşılaştırma', desc: '3 aracı yan yana karşılaştır' },
    { href: '/siralama', label: 'Marka Sıralaması', desc: 'Güvenilirlik sıralaması' },
    { href: '/ekspertiz', label: 'Ekspertiz Checklist', desc: 'Alım öncesi kontrol listesi' },
    { href: '/parcalar', label: 'Parça Fiyatları', desc: 'Marka bazlı karşılaştırma' },
    { href: '/deneyimler', label: 'Kullanıcı Deneyimleri', desc: 'Gerçek sahip yorumları' },
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
                    <Link href="/" className="flex items-center gap-2.5">
                        <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                            <svg className="w-4.5 h-4.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4" />
                            </svg>
                        </div>
                        <span className="text-lg font-bold tracking-tight text-stone-900 dark:text-stone-100">
                            SORUNSUZAL
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
                        <Link href="/blog" className="px-3 py-1.5 text-sm text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-md font-medium transition-colors">
                            Blog
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
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
