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
                ? 'bg-orange-50 border-orange-200 text-orange-600 dark:bg-orange-950/30 dark:border-orange-800 dark:text-orange-400'
                : 'bg-white border-stone-200 text-stone-400 hover:text-orange-500 hover:border-orange-200 dark:bg-stone-800 dark:border-stone-700 dark:hover:text-orange-400'
                }`}
            title={favorited ? 'Favorilerden Cikar' : 'Favorilere Ekle'}
        >
            {/* Bookmark icon - Instagram/TikTok style */}
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
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
            </svg>
            <span className="text-xs font-medium hidden sm:inline">
                {favorited ? 'Kaydedildi' : 'Kaydet'}
            </span>
        </button>
    );
}
