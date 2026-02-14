'use client';

import { useState, useTransition } from 'react';
import { toggleFavorite } from '@/actions/favorite-actions';

interface FavoriteButtonProps {
    carSlug: string;
    isFav: boolean;
}

export default function FavoriteButton({ carSlug, isFav }: FavoriteButtonProps) {
    const [isPending, startTransition] = useTransition();
    const [favorited, setFavorited] = useState(isFav);

    const handleToggle = () => {
        setFavorited(!favorited);
        startTransition(() => {
            toggleFavorite(carSlug).catch(() => setFavorited(isFav));
        });
    };

    return (
        <button
            onClick={handleToggle}
            disabled={isPending}
            className={`group flex items-center gap-1.5 px-3 py-2 rounded-xl border transition-all ${favorited
                    ? 'bg-red-50 border-red-200 text-red-600 dark:bg-red-950/30 dark:border-red-800 dark:text-red-400'
                    : 'bg-white border-stone-200 text-stone-400 hover:text-red-500 hover:border-red-200 dark:bg-stone-800 dark:border-stone-700 dark:hover:text-red-400'
                }`}
            title={favorited ? 'Favorilerden Çıkar' : 'Favorilere Ekle'}
        >
            <svg
                className={`w-5 h-5 transition-transform ${favorited ? 'scale-110' : 'group-hover:scale-110'}`}
                fill={favorited ? 'currentColor' : 'none'}
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
            </svg>
            <span className="text-xs font-medium hidden sm:inline">
                {favorited ? 'Favorilerde' : 'Favori'}
            </span>
        </button>
    );
}
