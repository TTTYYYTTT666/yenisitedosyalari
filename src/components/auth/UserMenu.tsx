'use client';

import { useState, useRef, useEffect } from 'react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';

interface User {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    carBrand?: string | null;
    role?: string | null;
}

interface UserMenuProps {
    user?: User;
}

export default function UserMenu({ user }: UserMenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const isProfileIncomplete = !user?.carBrand;
    const isAdmin = user?.role === 'ADMIN' || user?.role === 'OWNER';

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    if (!user) {
        return (
            <a
                href="/giris"
                className="hidden md:flex items-center gap-1.5 px-3.5 py-1.5 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors text-sm max-w-[140px] overflow-hidden whitespace-nowrap"
            >
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Giriş Yap
            </a>
        );
    }

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 focus:outline-none relative"
            >
                {user.image ? (
                    <img
                        src={user.image}
                        alt={user.name || 'User'}
                        className={`w-8 h-8 rounded-full border-2 transition-colors ${user.role === 'OWNER' ? 'border-red-500' :
                            user.role === 'ADMIN' ? 'border-orange-500' :
                                'border-stone-300 dark:border-stone-600 hover:border-stone-400'
                            }`}
                    />
                ) : (
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${user.role === 'OWNER' ? 'bg-red-500' :
                        user.role === 'ADMIN' ? 'bg-orange-500' :
                            'bg-stone-500'
                        }`}>
                        {user.name?.[0] || 'U'}
                    </div>
                )}
                {isProfileIncomplete && (
                    <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-amber-500 rounded-full flex items-center justify-center text-white text-[9px] font-bold">
                        !
                    </span>
                )}
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-1.5 w-52 bg-white dark:bg-stone-900 rounded-lg shadow-lg border border-stone-200 dark:border-stone-800 py-1 z-50">
                    <div className="px-3.5 py-2 border-b border-stone-200 dark:border-stone-800">
                        <div className="flex items-center gap-1.5">
                            <p className="text-sm font-semibold text-stone-900 dark:text-stone-100 truncate">{user.name || 'Kullanıcı'}</p>
                            {user.role === 'OWNER' && (
                                <span className="px-1.5 py-0.5 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-[10px] font-bold rounded">OWNER</span>
                            )}
                            {user.role === 'ADMIN' && (
                                <span className="px-1.5 py-0.5 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-[10px] font-bold rounded">ADMIN</span>
                            )}
                        </div>
                        <p className="text-xs text-stone-400 truncate">{user.email}</p>
                    </div>

                    {isAdmin && (
                        <Link
                            href="/admin"
                            onClick={() => setIsOpen(false)}
                            className="w-full text-left px-3.5 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors flex items-center gap-2 border-b border-stone-200 dark:border-stone-800"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            Admin Paneli
                        </Link>
                    )}

                    <Link
                        href="/bilgilerim"
                        onClick={() => setIsOpen(false)}
                        className="w-full text-left px-3.5 py-2 text-sm text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors flex items-center gap-2"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Bilgilerim
                        {isProfileIncomplete && (
                            <span className="ml-auto bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 text-[10px] px-1.5 py-0.5 rounded font-medium">
                                Eksik
                            </span>
                        )}
                    </Link>

                    <button
                        onClick={() => signOut({ callbackUrl: '/' })}
                        className="w-full text-left px-3.5 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors flex items-center gap-2"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Çıkış Yap
                    </button>
                </div>
            )}
        </div>
    );
}
