import Link from 'next/link';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-stone-50 dark:bg-[#0c0a09] py-10 lg:py-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-4">
                        Hakkımızda
                    </h1>
                    <p className="text-base text-stone-500">
                        SORUNSUZAL, araç alım sürecinizi şeffaflaştırmak ve güvenli hale getirmek için burada.
                    </p>
                </div>

                <div className="space-y-8">
                    {/* Mission */}
                    <section className="bg-white dark:bg-stone-900 rounded-xl p-6 md:p-8 border border-stone-200 dark:border-stone-800">
                        <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-3">Misyonumuz</h2>
                        <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                            Amacımız, Türkiye'deki ikinci el araç pazarında bilgi kirliliğini önlemek ve kullanıcılara
                            doğru, tarafsız teknik veriler sunmaktır. Her kullanıcının hayalindeki aracı satın almadan önce
                            olası riskleri bilmeye hakkı olduğuna inanıyoruz. Platformumuz, sanayi ustalarının tecrübeleri
                            ve gerçek kullanıcı geri bildirimleri ile harmanlanmış, veri odaklı bir rehberdir.
                        </p>
                    </section>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div className="bg-white dark:bg-stone-900 p-5 rounded-xl text-center border border-stone-200 dark:border-stone-800">
                            <div className="text-2xl font-bold text-orange-600 mb-1">50+</div>
                            <div className="text-xs text-stone-500">Araç Modeli</div>
                        </div>
                        <div className="bg-white dark:bg-stone-900 p-5 rounded-xl text-center border border-stone-200 dark:border-stone-800">
                            <div className="text-2xl font-bold text-orange-600 mb-1">%100</div>
                            <div className="text-xs text-stone-500">Ücretsiz</div>
                        </div>
                        <div className="bg-white dark:bg-stone-900 p-5 rounded-xl text-center border border-stone-200 dark:border-stone-800">
                            <div className="text-2xl font-bold text-orange-600 mb-1">7/24</div>
                            <div className="text-xs text-stone-500">Erişim</div>
                        </div>
                        <div className="bg-white dark:bg-stone-900 p-5 rounded-xl text-center border border-stone-200 dark:border-stone-800">
                            <div className="text-2xl font-bold text-orange-600 mb-1">Tarafsız</div>
                            <div className="text-xs text-stone-500">İçerik</div>
                        </div>
                    </div>

                    {/* Contact */}
                    <section className="bg-stone-900 text-white rounded-xl p-6 md:p-8 text-center">
                        <h2 className="text-xl font-bold mb-3">Bize Ulaşın</h2>
                        <p className="text-stone-400 mb-6 max-w-lg mx-auto text-sm">
                            Öneri, şikayet veya iş birliği talepleriniz için bize e-posta gönderebilirsiniz.
                            Geri bildirimleriniz bizim için çok değerli.
                        </p>
                        <a href="mailto:iletisim@sorunsuzal.com" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-stone-900 text-sm font-semibold rounded-lg hover:bg-orange-50 transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            iletisim@sorunsuzal.com
                        </a>
                    </section>
                </div>
            </div>
        </div>
    );
}
