import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-stone-50 dark:bg-[#0c0a09] flex items-center justify-center p-4">
            <div className="max-w-sm w-full text-center">
                <h1 className="text-7xl font-black text-stone-900 dark:text-stone-100 mb-3 tracking-tight">
                    4<span className="text-orange-500">0</span>4
                </h1>
                <p className="text-base text-stone-600 dark:text-stone-400 font-medium mb-2">
                    Aradığınız sayfa bulunamadı
                </p>
                <p className="text-sm text-stone-400 dark:text-stone-600 mb-8">
                    Araç veya sayfa veritabanımızda mevcut değil ya da taşınmış olabilir.
                </p>

                <div className="space-y-2.5">
                    <Link
                        href="/"
                        className="block w-full px-5 py-2.5 bg-orange-600 text-white text-sm font-semibold rounded-lg hover:bg-orange-700 transition-colors"
                    >
                        Ana Sayfaya Dön
                    </Link>
                    <Link
                        href="/markalar"
                        className="block w-full px-5 py-2.5 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 text-sm font-semibold rounded-lg hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors"
                    >
                        Markalara Göz At
                    </Link>
                </div>
            </div>
        </div>
    );
}
