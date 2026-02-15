
import SearchBar from '@/components/SearchBar';

import { cars, getTotalIssuesCount, getAllBrands } from '@/data/cars';
import BrandPattern from '@/components/BrandPattern';
import JsonLd from '@/components/JsonLd';

export default async function Home() {

  const totalIssues = getTotalIssuesCount();
  const totalCars = cars.length;
  const totalBrands = getAllBrands().length;

  return (
    <div className="min-h-screen bg-stone-100 dark:bg-[#0c0a09]">
      {/* Structured Data for Google */}
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'OTORAPORU.NET',
        alternateName: 'Oto Raporu',
        url: 'https://otoraporu.net',
        description: 'Araç satın almadan önce kronik sorunları ve yaygın arızaları öğrenin. Türkiye\'nin en kapsamlı araç güvenilirlik veritabanı.',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://otoraporu.net/?q={search_term_string}'
          },
          'query-input': 'required name=search_term_string'
        }
      }} />
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'OTORAPORU.NET',
        url: 'https://otoraporu.net',
        logo: 'https://otoraporu.net/logo-transparent.png',
        description: 'Türkiye\'nin en kapsamlı araç güvenilirlik veritabanı ve kronik sorun rehberi.',
        sameAs: []
      }} />
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 lg:pt-36 lg:pb-24">
        {/* Warm gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-200 via-stone-100 to-stone-50 dark:from-[#0c0a09] dark:via-[#0c0a09] dark:to-[#0c0a09]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#a8a29e15_1px,transparent_1px),linear-gradient(to_bottom,#a8a29e15_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:48px_48px]" />
        {/* Brand logos - hidden on mobile for performance */}
        <div className="hidden md:block">
          <BrandPattern />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">



          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-stone-900 dark:text-white leading-tight">
            Hangi aracı
            <br />
            <span className="text-orange-600 dark:text-orange-500">almayı düşünüyorsunuz?</span>
          </h1>

          <p className="text-base md:text-lg text-stone-500 dark:text-stone-400 max-w-xl mx-auto mb-10 leading-relaxed">
            Satın almadan önce kronik sorunları, gerçek onarım maliyetlerini ve
            kullanıcı deneyimlerini öğrenin.
          </p>

          {/* Search Bar */}
          <div className="relative z-10 max-w-2xl mx-auto mb-14">
            <SearchBar />
          </div>

          {/* Stats — minimal counter row */}
          <div className="flex items-center justify-center gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-stone-800 dark:text-white tabular-nums">{totalCars}+</div>
              <div className="text-[11px] uppercase tracking-wider text-stone-400 dark:text-stone-500 mt-1">Araç</div>
            </div>
            <div className="w-px h-8 bg-stone-300/50 dark:bg-stone-700/50" />
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-stone-800 dark:text-white tabular-nums">{totalIssues}+</div>
              <div className="text-[11px] uppercase tracking-wider text-stone-400 dark:text-stone-500 mt-1">Sorun Kaydı</div>
            </div>
            <div className="w-px h-8 bg-stone-300/50 dark:bg-stone-700/50" />
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-stone-800 dark:text-white tabular-nums">{totalBrands}+</div>
              <div className="text-[11px] uppercase tracking-wider text-stone-400 dark:text-stone-500 mt-1">Marka</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-20 bg-white dark:bg-[#0f0d0c] border-t border-stone-200/60 dark:border-stone-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900 dark:text-stone-100 mb-3">
              Neden OTORAPORU.NET?
            </h2>
            <p className="text-stone-500 dark:text-stone-400 max-w-lg mx-auto text-sm">
              Araç alım sürecinizde size rehberlik edecek, tamamen veri odaklı analizler.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/10 border border-red-100 dark:border-red-900/30 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-red-200/50 dark:shadow-red-900/30 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-stone-900 dark:text-stone-100 mb-2">
                Kronik Sorun Analizi
              </h3>
              <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
                Her modelin zayıf noktalarını, arıza çıkarma potansiyeli olan kilometreleri ve tahmini tamir masraflarını görün.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/10 border border-amber-100 dark:border-amber-900/30 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-amber-200/50 dark:shadow-amber-900/30 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-stone-900 dark:text-stone-100 mb-2">
                Güvenilirlik Skoru
              </h3>
              <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
                100 üzerinden hesaplanan puanlarla araçları hızlıca kıyaslayın, en sorunsuz modeli kolayca bulun.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/10 border border-blue-100 dark:border-blue-900/30 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-blue-200/50 dark:shadow-blue-900/30 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-stone-900 dark:text-stone-100 mb-2">
                Alım Rehberi
              </h3>
              <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
                Ekspertizde nelere baktırmalısınız? Hangi donanım paketinden uzak durmalısınız? İpuçları parmaklarınızın ucunda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-stone-900 dark:bg-stone-950 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,#ea580c15,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,#f9731615,transparent_50%)]" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Aracınızı tanımaya başlayın
          </h2>
          <p className="text-stone-400 mb-8 max-w-lg mx-auto text-sm">
            Sürpriz masraflarla karşılaşmamak için binlerce araç sahibinin tecrübesinden faydalanın.
          </p>
          <a
            href="/markalar"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-orange-600 text-white text-sm font-semibold rounded-lg hover:bg-orange-500 transition-colors shadow-lg shadow-orange-600/25 hover:shadow-orange-500/30"
          >
            Markalara Göz At
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
