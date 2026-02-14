import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { createPost } from '@/actions/blog-actions';
import { getAllCars } from '@/lib/cars';
import Link from 'next/link';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: 'Yeni Konu Ac | Forum - OTORAPORU.NET',
    description: 'Arac deneyiminizi paylasin veya soru sorun.',
};

interface NewTopicPageProps {
    searchParams: Promise<{ arac?: string }>;
}

export default async function NewForumTopicPage({ searchParams }: NewTopicPageProps) {
    const session = await auth();
    if (!session?.user?.id) redirect('/giris');

    const params = await searchParams;
    const preselectedCar = params.arac || '';

    const allCars = await getAllCars();
    const carOptions = allCars.map((c: any) => ({
        slug: c.slug,
        label: `${c.brand} ${c.model} ${c.variant}`,
    })).sort((a: any, b: any) => a.label.localeCompare(b.label, 'tr'));

    return (
        <div className="min-h-screen bg-stone-50 dark:bg-[#0c0a09]">
            {/* Breadcrumb */}
            <div className="bg-white dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800">
                <div className="max-w-3xl mx-auto px-4 py-3">
                    <nav className="flex items-center gap-1.5 text-xs text-stone-400">
                        <Link href="/forum" className="hover:text-orange-600 transition-colors">Forum</Link>
                        <span>/</span>
                        <span>Yeni Konu</span>
                    </nav>
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-4 py-6">
                <h1 className="text-xl font-bold text-stone-900 dark:text-white mb-6">Yeni Konu Ac</h1>

                <form action={createPost} className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 overflow-hidden">
                    <div className="p-5 space-y-5">
                        {/* Title */}
                        <div>
                            <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-1.5">
                                Baslik
                            </label>
                            <input
                                name="title"
                                type="text"
                                required
                                maxLength={200}
                                className="w-full px-3 py-2.5 rounded-lg border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-800 text-stone-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-sm"
                                placeholder="Konu basligini yazin"
                            />
                        </div>

                        {/* Category & Car */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-1.5">
                                    Kategori
                                </label>
                                <select
                                    name="category"
                                    required
                                    className="w-full px-3 py-2.5 rounded-lg border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-800 text-stone-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-sm"
                                >
                                    <option value="">Seciniz</option>
                                    <option value="Deneyim">Kullanici Deneyimi</option>
                                    <option value="Bakım">Bakim ve Onarim</option>
                                    <option value="Soru">Soru-Cevap</option>
                                    <option value="Rehber">Alim Rehberi</option>
                                    <option value="Haber">Haberler</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-1.5">
                                    Ilgili Arac <span className="text-stone-400 font-normal text-xs">(opsiyonel)</span>
                                </label>
                                <select
                                    name="carSlug"
                                    defaultValue={preselectedCar}
                                    className="w-full px-3 py-2.5 rounded-lg border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-800 text-stone-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-sm"
                                >
                                    <option value="">Arac secin</option>
                                    {carOptions.map((car: any) => (
                                        <option key={car.slug} value={car.slug}>{car.label}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Image */}
                        <div>
                            <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-1.5">
                                Görsel URL <span className="text-stone-400 font-normal text-xs">(opsiyonel)</span>
                            </label>
                            <input
                                name="image"
                                type="url"
                                className="w-full px-3 py-2.5 rounded-lg border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-800 text-stone-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-sm"
                                placeholder="https://..."
                            />
                        </div>

                        {/* Content */}
                        <div>
                            <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-1.5">
                                Icerik
                            </label>
                            <textarea
                                name="content"
                                required
                                rows={12}
                                className="w-full px-3 py-2.5 rounded-lg border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-800 text-stone-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-y text-sm leading-relaxed"
                                placeholder="Konunuzu detayli yazin..."
                            ></textarea>
                        </div>
                    </div>

                    {/* Submit */}
                    <div className="border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/30 px-5 py-3 flex items-center justify-between">
                        <Link href="/forum" className="text-sm text-stone-500 hover:text-stone-700 transition-colors">
                            Iptal
                        </Link>
                        <button
                            type="submit"
                            className="px-6 py-2.5 bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold rounded-lg transition-colors"
                        >
                            Yayinla
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
