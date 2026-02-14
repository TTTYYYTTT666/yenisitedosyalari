import { createPost } from '@/actions/blog-actions';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function WriteBlogPage() {
    const session = await auth();

    if (!session?.user) {
        redirect('/giris');
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#0c0a09] py-12">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white dark:bg-[#27272a] rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-stone-700">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Deneyimini Paylaş</h1>
                        <p className="text-gray-600 dark:text-gray-400">
                            Aracınızla ilgili tecrübelerinizi veya otomobil dünyası hakkındaki görüşlerinizi yazın.
                        </p>
                    </div>

                    <form action={createPost} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Başlık
                            </label>
                            <input
                                name="title"
                                type="text"
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-stone-600 bg-white dark:bg-stone-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                                placeholder="Örn: Honda Civic 10.000km Kullanıcı Deneyimim"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Kategori
                            </label>
                            <select
                                name="category"
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-stone-600 bg-white dark:bg-stone-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                            >
                                <option value="">Seçiniz</option>
                                <option value="Deneyim">Kullanıcı Deneyimi</option>
                                <option value="Bakım">Bakım & Onarım</option>
                                <option value="Haber">Otomobil Haberleri</option>
                                <option value="Rehber">Alım Satım Rehberi</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Görsel URL (Opsiyonel)
                            </label>
                            <input
                                name="image"
                                type="url"
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-stone-600 bg-white dark:bg-stone-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                                placeholder="https://..."
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                İçerik
                            </label>
                            <textarea
                                name="content"
                                required
                                rows={12}
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-stone-600 bg-white dark:bg-stone-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-y"
                                placeholder="Yazınızı buraya yazın..."
                            ></textarea>
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transform hover:-translate-y-0.5"
                            >
                                Yayınla
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
