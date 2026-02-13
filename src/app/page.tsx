
import SearchBar from '@/components/SearchBar';

import { getTotalIssuesCount, getTotalCarsCount } from '@/lib/cars';
import BrandPattern from '@/components/BrandPattern';

export default async function Home() {

  const totalIssues = await getTotalIssuesCount();
  const totalCars = await getTotalCarsCount();

  return (
    <div className="min-h-screen bg-stone-100 dark:bg-[#0c0a09]">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 lg:pt-36 lg:pb-24">
        {/* Warm gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-200 via-stone-100 to-stone-50 dark:from-[#0c0a09] dark:via-[#0c0a09] dark:to-[#0c0a09]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#a8a29e15_1px,transparent_1px),linear-gradient(to_bottom,#a8a29e15_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:48px_48px]" />

        <BrandPattern />

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

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {[
              { label: 'Araç Modeli', value: `${totalCars} +` },
              { label: 'Takip Edilen Sorun', value: `${totalIssues} +` },
              { label: 'Marka', value: '30+' },
              { label: 'Ücretsiz', value: '%100' }
            ].map((stat, i) => (
              <div key={i} className="py-3 px-4 rounded-lg bg-white/80 backdrop-blur-sm border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow dark:bg-stone-800/60 dark:border-stone-700/50 dark:backdrop-blur-none">
                <div className="text-xl font-bold text-stone-800 dark:text-white tabular-nums">{stat.value}</div>
                <div className="text-xs text-stone-500 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-20 bg-stone-50 dark:bg-[#0c0a09] border-t border-stone-200/60 dark:border-stone-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900 dark:text-stone-100 mb-3">
              Neden OTORAPORU.NET?
            </h2>
            <p className="text-stone-500 dark:text-stone-400 max-w-lg mx-auto text-sm">
              Araç alım sürecinizde size rehberlik edecek, tamamen veri odaklı analizler.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {/* Feature 1 */}
            <div className="p-6 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-orange-300 dark:hover:border-orange-800 hover:shadow-lg shadow-sm transition-all">
              <div className="w-10 h-10 bg-red-100 dark:bg-red-950/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <div className="p-6 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-orange-300 dark:hover:border-orange-800 hover:shadow-lg shadow-sm transition-all">
              <div className="w-10 h-10 bg-orange-100 dark:bg-orange-950/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <div className="p-6 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-orange-300 dark:hover:border-orange-800 hover:shadow-lg shadow-sm transition-all">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-950/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <section className="py-16 bg-gradient-to-b from-stone-200 to-stone-100 dark:from-stone-950 dark:to-stone-950 border-t border-stone-200/60 dark:border-stone-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 dark:text-white mb-4">
            Aracınızı tanımaya başlayın
          </h2>
          <p className="text-stone-500 dark:text-stone-400 mb-8 max-w-lg mx-auto text-sm">
            Sürpriz masraflarla karşılaşmamak için binlerce araç sahibinin tecrübesinden faydalanın.
          </p>
          <a
            href="/markalar"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-orange-600 text-white text-sm font-semibold rounded-lg hover:bg-orange-700 transition-colors shadow-md hover:shadow-lg"
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
