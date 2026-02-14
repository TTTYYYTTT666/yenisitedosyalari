'use client';

import { useState, useTransition } from 'react';
import { voteIssue } from '@/actions/issue-actions';

interface IssueVoteButtonsProps {
    issueId: string;
    carSlug: string;
    confirms: number;
    denies: number;
    userVote?: string; // 'CONFIRM' | 'DENY' | undefined
}

export default function IssueVoteButtons({ issueId, carSlug, confirms, denies, userVote }: IssueVoteButtonsProps) {
    const [isPending, startTransition] = useTransition();
    const [localConfirms, setLocalConfirms] = useState(confirms);
    const [localDenies, setLocalDenies] = useState(denies);
    const [localVote, setLocalVote] = useState(userVote);

    const handleVote = (type: 'CONFIRM' | 'DENY') => {
        // Optimistic update
        if (localVote === type) {
            // Toggle off
            if (type === 'CONFIRM') setLocalConfirms(c => c - 1);
            else setLocalDenies(d => d - 1);
            setLocalVote(undefined);
        } else {
            if (localVote === 'CONFIRM') setLocalConfirms(c => c - 1);
            if (localVote === 'DENY') setLocalDenies(d => d - 1);
            if (type === 'CONFIRM') setLocalConfirms(c => c + 1);
            else setLocalDenies(d => d + 1);
            setLocalVote(type);
        }

        startTransition(() => {
            voteIssue(issueId, carSlug, type).catch(() => {
                // Revert on error
                setLocalConfirms(confirms);
                setLocalDenies(denies);
                setLocalVote(userVote);
            });
        });
    };

    return (
        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-stone-100 dark:border-stone-800">
            <button
                onClick={() => handleVote('CONFIRM')}
                disabled={isPending}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${localVote === 'CONFIRM'
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 ring-1 ring-green-300 dark:ring-green-700'
                        : 'bg-stone-100 text-stone-500 hover:bg-green-50 hover:text-green-600 dark:bg-stone-800 dark:text-stone-400 dark:hover:bg-green-900/20 dark:hover:text-green-400'
                    }`}
            >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Ben de yaşadım
                {localConfirms > 0 && <span className="font-bold">({localConfirms})</span>}
            </button>

            <button
                onClick={() => handleVote('DENY')}
                disabled={isPending}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${localVote === 'DENY'
                        ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 ring-1 ring-red-300 dark:ring-red-700'
                        : 'bg-stone-100 text-stone-500 hover:bg-red-50 hover:text-red-600 dark:bg-stone-800 dark:text-stone-400 dark:hover:bg-red-900/20 dark:hover:text-red-400'
                    }`}
            >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Yaşamadım
                {localDenies > 0 && <span className="font-bold">({localDenies})</span>}
            </button>
        </div>
    );
}
