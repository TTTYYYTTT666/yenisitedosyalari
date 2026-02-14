'use client';

import { useState, useTransition } from 'react';
import { reportIssue } from '@/actions/report-actions';

interface IssueReportFormProps {
    carSlug: string;
    isLoggedIn: boolean;
}

const categories = [
    { value: 'motor', label: 'Motor' },
    { value: 'sanziman', label: 'Şanzıman' },
    { value: 'elektrik', label: 'Elektrik' },
    { value: 'govde', label: 'Gövde / Boya' },
    { value: 'fren', label: 'Fren' },
    { value: 'suspansiyon', label: 'Süspansiyon' },
    { value: 'diger', label: 'Diğer' },
];

export default function IssueReportForm({ carSlug, isLoggedIn }: IssueReportFormProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isPending, startTransition] = useTransition();
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        const formData = new FormData(e.currentTarget);

        startTransition(async () => {
            try {
                await reportIssue({
                    carSlug,
                    title: formData.get('title') as string,
                    description: formData.get('description') as string,
                    category: formData.get('category') as string,
                    km: (formData.get('km') as string) || undefined,
                });
                setSubmitted(true);
                setIsOpen(false);
            } catch (err: any) {
                setError(err.message || 'Bir hata oluştu');
            }
        });
    };

    if (!isLoggedIn) return null;

    if (submitted) {
        return (
            <div className="flex items-center gap-2 p-4 bg-green-50 dark:bg-green-950/20 rounded-xl border border-green-200 dark:border-green-800">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-sm text-green-700 dark:text-green-400 font-medium">Sorun bildiriminiz alındı, incelenecektir.</p>
            </div>
        );
    }

    return (
        <div>
            {!isOpen ? (
                <button
                    onClick={() => setIsOpen(true)}
                    className="flex items-center gap-2 px-4 py-2.5 bg-stone-100 dark:bg-stone-800 hover:bg-orange-50 dark:hover:bg-orange-900/10 text-stone-600 dark:text-stone-400 hover:text-orange-600 dark:hover:text-orange-400 rounded-xl border border-stone-200 dark:border-stone-700 hover:border-orange-200 dark:hover:border-orange-700 transition-all text-sm font-medium"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Yeni Sorun Bildir
                </button>
            ) : (
                <form onSubmit={handleSubmit} className="bg-stone-50 dark:bg-stone-800/50 rounded-xl border border-stone-200 dark:border-stone-700 p-5 space-y-4">
                    <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100">Yeni Sorun Bildir</h4>

                    <div>
                        <label className="block text-xs font-medium text-stone-600 dark:text-stone-400 mb-1">Kategori</label>
                        <select
                            name="category"
                            required
                            className="w-full px-3 py-2 text-sm rounded-lg border border-stone-200 dark:border-stone-600 bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200 focus:outline-none focus:ring-1 focus:ring-orange-500"
                        >
                            <option value="">Seçiniz</option>
                            {categories.map(c => (
                                <option key={c.value} value={c.value}>{c.label}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-stone-600 dark:text-stone-400 mb-1">Sorun Başlığı</label>
                        <input
                            name="title"
                            required
                            minLength={5}
                            maxLength={200}
                            placeholder="Örn: Turbo basınç düşmesi"
                            className="w-full px-3 py-2 text-sm rounded-lg border border-stone-200 dark:border-stone-600 bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200 focus:outline-none focus:ring-1 focus:ring-orange-500"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-stone-600 dark:text-stone-400 mb-1">Açıklama</label>
                        <textarea
                            name="description"
                            required
                            minLength={20}
                            maxLength={2000}
                            rows={3}
                            placeholder="Sorunu detaylı açıklayın..."
                            className="w-full px-3 py-2 text-sm rounded-lg border border-stone-200 dark:border-stone-600 bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200 focus:outline-none focus:ring-1 focus:ring-orange-500 resize-none"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-stone-600 dark:text-stone-400 mb-1">Kilometre (opsiyonel)</label>
                        <input
                            name="km"
                            maxLength={50}
                            placeholder="Örn: 85.000 km"
                            className="w-full px-3 py-2 text-sm rounded-lg border border-stone-200 dark:border-stone-600 bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200 focus:outline-none focus:ring-1 focus:ring-orange-500"
                        />
                    </div>

                    {error && <p className="text-xs text-red-500">{error}</p>}

                    <div className="flex gap-2">
                        <button
                            type="submit"
                            disabled={isPending}
                            className="flex-1 py-2 bg-orange-600 hover:bg-orange-700 disabled:opacity-50 text-white text-sm font-semibold rounded-lg transition-colors"
                        >
                            {isPending ? 'Gönderiliyor...' : 'Gönder'}
                        </button>
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="px-4 py-2 text-sm text-stone-500 hover:text-stone-700 dark:hover:text-stone-300 transition-colors"
                        >
                            İptal
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
}
