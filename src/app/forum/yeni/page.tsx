import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { createPost } from '@/actions/blog-actions';
import { getAllCars } from '@/lib/cars';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Yeni Konu Aç | Forum',
    description: 'Araç deneyiminizi paylaşın veya soru sorun.',
};

interface NewTopicPageProps {
    searchParams: Promise<{ arac?: string }>;
}

export default async function NewForumTopicPage({ searchParams }: NewTopicPageProps) {
    const session = await auth();
    if (!session?.user?.id) redirect('/giris');

    const params = await searchParams;
    const preselectedCar = params.arac || '';

    // Get all cars for dropdown
    const allCars = await getAllCars();
    const carOptions = allCars.map((c: any) => ({
        slug: c.slug,
        label: `${c.brand} ${c.model} ${c.variant}`,
    })).sort((a: any, b: any) => a.label.localeCompare(b.label, 'tr'));

    return (
        <div className="min-h-screen bg-stone-100 dark:bg-[#0c0a09]">
            {/* Header */}
            <div className="bg-gradient-to-b from-stone-900 to-stone-800 dark:from-stone-950 dark:to-stone-900 border-b border-stone-700">
                <div className="max-w-3xl mx-auto px-4 py-8">
                    <nav className="flex items-center gap-2 text-xs text-stone-500 mb-4">
                        <Link href="/forum" className="hover:text-orange-400 transition-colors">Forum</Link>
                        <span>›</span>
                        <span className="text-stone-400">Yeni Konu</span>
                    </nav>
                    <h1 className="text-3xl font-black text-white">
                        ✏️ Yeni Konu Aç
                    </h1>
                    <p className="text-stone-400 text-sm mt-2">
                        Araç deneyiminizi paylaşın, soru sorun veya bilgi paylaşın.
                    </p>
                </div>
            </div>

            {/* Form */}
            <div className="max-w-3xl mx-auto px-4 py-8">
                <form action={createPost} className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-xl overflow-hidden">
                    <div className="p-6 lg:p-8 space-y-6">
                        {/* Title */}
                        <div>
                            <label className="block text-sm font-bold text-stone-700 dark:text-stone-300 mb-2">
                                Konu Başlığı <span className="text-red-400">*</span>
                            </label>
                            <input
                                name="title"
                                type="text"
                                required
                                maxLength={200}
                                className="w-full px-4 py-3.5 rounded-xl border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-800 text-stone-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-base"
                                placeholder="Örn: BMW 320i 50.000km kullanım deneyimim"
                            />
                        </div>

                        {/* Category & Car - side by side */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-bold text-stone-700 dark:text-stone-300 mb-2">
                                    Kategori <span className="text-red-400">*</span>
                                </label>
                                <select
                                    name="category"
                                    required
                                    className="w-full px-4 py-3.5 rounded-xl border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-800 text-stone-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                                >
                                    <option value="">Seçiniz</option>
                                    <option value="Deneyim">🚗 Kullanıcı Deneyimi</option>
                                    <option value="Bakım">🔧 Bakım &amp; Onarım</option>
                                    <option value="Soru">❓ Soru-Cevap</option>
                                    <option value="Rehber">📋 Alım Rehberi</option>
                                    <option value="Haber">📰 Otomobil Haberleri</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-stone-700 dark:text-stone-300 mb-2">
                                    İlgili Araç <span className="text-stone-400 font-normal">(opsiyonel)</span>
                                </label>
                                <select
                                    name="carSlug"
                                    defaultValue={preselectedCar}
                                    className="w-full px-4 py-3.5 rounded-xl border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-800 text-stone-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                                >
                                    <option value="">Araç seçin (opsiyonel)</option>
                                    {carOptions.map(car => (
                                        <option key={car.slug} value={car.slug}>{car.label}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Image */}
                        <div>
                            <label className="block text-sm font-bold text-stone-700 dark:text-stone-300 mb-2">
                                Görsel URL <span className="text-stone-400 font-normal">(opsiyonel)</span>
                            </label>
                            <input
                                name="image"
                                type="url"
                                className="w-full px-4 py-3 rounded-xl border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-800 text-stone-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-sm"
                                placeholder="https://..."
                            />
                        </div>

                        {/* Content */}
                        <div>
                            <label className="block text-sm font-bold text-stone-700 dark:text-stone-300 mb-2">
                                İçerik <span className="text-red-400">*</span>
                            </label>
                            <textarea
                                name="content"
                                required
                                rows={12}
                                className="w-full px-4 py-3.5 rounded-xl border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-800 text-stone-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-y text-sm leading-relaxed"
                                placeholder="Deneyiminizi veya sorunuzu detaylı yazın. Ne kadar detaylı yazarsanız o kadar faydalı yanıtlar alırsınız..."
                            ></textarea>
                            <p className="text-xs text-stone-400 mt-1.5">HTML etiketleri desteklenir: &lt;p&gt;, &lt;strong&gt;, &lt;em&gt;, &lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;</p>
                        </div>
                    </div>

                    {/* Submit */}
                    <div className="border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/30 px-6 lg:px-8 py-4 flex items-center justify-between">
                        <Link href="/forum" className="text-sm text-stone-500 hover:text-stone-700 dark:hover:text-stone-300 transition-colors">
                            ← İptal
                        </Link>
                        <button
                            type="submit"
                            className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-0.5"
                        >
                            Yayınla →
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
