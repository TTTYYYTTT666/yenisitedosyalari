'use client';

import { useState, useTransition } from 'react';
import { submitRating } from '@/actions/rating-actions';

interface CarRatingFormProps {
    carSlug: string;
    onSubmitted?: () => void;
}

function StarInput({ label, value, onChange }: { label: string; value: number; onChange: (v: number) => void }) {
    return (
        <div className="flex items-center justify-between">
            <span className="text-sm text-stone-600 dark:text-stone-400">{label}</span>
            <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map(star => (
                    <button
                        key={star}
                        type="button"
                        onClick={() => onChange(star)}
                        className="transition-transform hover:scale-110"
                    >
                        <svg
                            className={`w-5 h-5 ${star <= value ? 'text-amber-400' : 'text-stone-300 dark:text-stone-600'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    </button>
                ))}
            </div>
        </div>
    );
}

interface RatingDisplayProps {
    averages: { overall: number; motor: number; konfor: number; yakit: number; bakim: number };
    count: number;
    ratings: Array<{
        id: string;
        overall: number;
        comment: string | null;
        userName: string | null;
        createdAt: string;
    }>;
}

function RatingBar({ label, value }: { label: string; value: number }) {
    const pct = (value / 5) * 100;
    return (
        <div className="flex items-center gap-3">
            <span className="text-xs text-stone-500 dark:text-stone-400 w-14 shrink-0">{label}</span>
            <div className="flex-1 h-2 bg-stone-200 dark:bg-stone-700 rounded-full overflow-hidden">
                <div
                    className="h-full bg-amber-400 rounded-full transition-all"
                    style={{ width: `${pct}%` }}
                />
            </div>
            <span className="text-xs font-bold text-stone-700 dark:text-stone-300 w-7 text-right">{value}</span>
        </div>
    );
}

export default function CarRatingSection({ carSlug, ratingData, isLoggedIn }: {
    carSlug: string;
    ratingData: RatingDisplayProps;
    isLoggedIn: boolean;
}) {
    const [showForm, setShowForm] = useState(false);
    const [isPending, startTransition] = useTransition();
    const [submitted, setSubmitted] = useState(false);
    const [ratings, setRatings] = useState({ overall: 0, motor: 0, konfor: 0, yakit: 0, bakim: 0 });
    const [comment, setComment] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (ratings.overall === 0) return;
        startTransition(async () => {
            await submitRating({ carSlug, ...ratings, comment: comment || undefined });
            setSubmitted(true);
            setShowForm(false);
        });
    };

    return (
        <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-6 shadow-sm">
            <h3 className="text-base font-bold text-stone-900 dark:text-stone-100 mb-4 flex items-center gap-2.5">
                <div className="w-8 h-8 bg-amber-100 dark:bg-amber-950/30 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                </div>
                Kullanıcı Puanları
                {ratingData.count > 0 && (
                    <span className="text-xs text-stone-400 font-normal">({ratingData.count} oy)</span>
                )}
            </h3>

            {ratingData.count > 0 ? (
                <div className="space-y-2 mb-4">
                    <RatingBar label="Genel" value={ratingData.averages.overall} />
                    <RatingBar label="Motor" value={ratingData.averages.motor} />
                    <RatingBar label="Konfor" value={ratingData.averages.konfor} />
                    <RatingBar label="Yakıt" value={ratingData.averages.yakit} />
                    <RatingBar label="Bakım" value={ratingData.averages.bakim} />
                </div>
            ) : (
                <p className="text-xs text-stone-400 mb-4">Henüz puanlama yapılmadı</p>
            )}

            {/* Recent comments */}
            {ratingData.ratings.filter(r => r.comment).slice(0, 3).map(r => (
                <div key={r.id} className="border-t border-stone-100 dark:border-stone-800 pt-2 mt-2">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-medium text-stone-700 dark:text-stone-300">{r.userName || 'Anonim'}</span>
                        <span className="text-amber-400 text-xs">{'★'.repeat(r.overall)}</span>
                    </div>
                    <p className="text-xs text-stone-500 dark:text-stone-400">{r.comment}</p>
                </div>
            ))}

            {/* Rating form */}
            {isLoggedIn && !submitted ? (
                showForm ? (
                    <form onSubmit={handleSubmit} className="mt-4 pt-4 border-t border-stone-200 dark:border-stone-700 space-y-3">
                        <StarInput label="Genel" value={ratings.overall} onChange={v => setRatings(r => ({ ...r, overall: v }))} />
                        <StarInput label="Motor" value={ratings.motor} onChange={v => setRatings(r => ({ ...r, motor: v }))} />
                        <StarInput label="Konfor" value={ratings.konfor} onChange={v => setRatings(r => ({ ...r, konfor: v }))} />
                        <StarInput label="Yakıt" value={ratings.yakit} onChange={v => setRatings(r => ({ ...r, yakit: v }))} />
                        <StarInput label="Bakım" value={ratings.bakim} onChange={v => setRatings(r => ({ ...r, bakim: v }))} />
                        <textarea
                            value={comment}
                            onChange={e => setComment(e.target.value)}
                            placeholder="Kısa yorum (opsiyonel)"
                            rows={2}
                            className="w-full px-3 py-2 text-sm rounded-lg border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-800 dark:text-stone-200 focus:outline-none focus:ring-1 focus:ring-orange-500 resize-none"
                        />
                        <button
                            type="submit"
                            disabled={isPending || ratings.overall === 0}
                            className="w-full py-2 bg-orange-600 hover:bg-orange-700 disabled:opacity-50 text-white text-sm font-semibold rounded-lg transition-colors"
                        >
                            {isPending ? 'Kaydediliyor...' : 'Puanla'}
                        </button>
                    </form>
                ) : (
                    <button
                        onClick={() => setShowForm(true)}
                        className="w-full mt-3 py-2 text-sm font-medium text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/10 transition-colors"
                    >
                        ⭐ Bu Aracı Puanla
                    </button>
                )
            ) : submitted ? (
                <p className="text-xs text-green-600 dark:text-green-400 mt-3 text-center font-medium">✅ Puanınız kaydedildi!</p>
            ) : null}
        </div>
    );
}
