import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-stone-100 dark:bg-[#0c0a09] text-stone-600 dark:text-stone-300 mt-auto border-t border-stone-200 dark:border-stone-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-0.5 mb-3">
                            <div className="relative w-7 h-7 -mr-0.5">
                                <Image
                                    src="/logo-transparent.png"
                                    alt="OTORAPORU"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-base font-bold tracking-tight"><span className="text-orange-600">OTORAPORU</span><span className="text-stone-900 dark:text-white">.NET</span></span>
                        </div>
                        <p className="text-stone-500 text-sm max-w-sm leading-relaxed">
                            Araç satın almadan önce kronik sorunları ve yaygın arızaları öğrenin.
                            Güvenilir araç rehberiniz.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">Hızlı Linkler</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-sm text-stone-500 hover:text-orange-400 transition-colors">
                                    Ana Sayfa
                                </Link>
                            </li>
                            <li>
                                <Link href="/markalar" className="text-sm text-stone-500 hover:text-orange-400 transition-colors">
                                    Tüm Markalar
                                </Link>
                            </li>
                            <li>
                                <Link href="/hakkimizda" className="text-sm text-stone-500 hover:text-orange-400 transition-colors">
                                    Hakkımızda
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Popular Brands */}
                    <div>
                        <h3 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">Popüler Markalar</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/arac/fiat-egea-1-4-fire" className="text-sm text-stone-500 hover:text-orange-400 transition-colors">
                                    Fiat Egea
                                </Link>
                            </li>
                            <li>
                                <Link href="/arac/volkswagen-passat-b8-1-6-tdi" className="text-sm text-stone-500 hover:text-orange-400 transition-colors">
                                    VW Passat
                                </Link>
                            </li>
                            <li>
                                <Link href="/arac/honda-civic-fc5-1-6-vtec" className="text-sm text-stone-500 hover:text-orange-400 transition-colors">
                                    Honda Civic
                                </Link>
                            </li>
                            <li>
                                <Link href="/arac/renault-megane-4-1-5-dci" className="text-sm text-stone-500 hover:text-orange-400 transition-colors">
                                    Renault Megane
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-stone-200 dark:border-stone-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
                    <p className="text-stone-600 text-xs">
                        © {new Date().getFullYear()} OTORAPORU.NET. Tüm hakları saklıdır.
                    </p>
                    <p className="text-stone-700 text-xs">
                        Bu site yalnızca bilgilendirme amaçlıdır.
                    </p>
                </div>
            </div>
        </footer>
    );
}
