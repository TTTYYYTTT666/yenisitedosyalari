'use client';

interface AdSpaceProps {
    type: 'expert' | 'sell' | 'insurance' | 'generic';
    className?: string;
}

export default function AdSpace({ type, className = '' }: AdSpaceProps) {
    const ads = {
        expert: {
            title: '🛡️ Bu Aracı Almadan Önce Emin Ol!',
            desc: 'Sürpriz masraflardan kaçınmak için kurumsal ekspertiz raporu alın.',
            cta: '%20 İndirimli Ekspertiz Randevusu Al',
            bg: 'bg-blue-950 border-blue-800',
            icon: '🔍'
        },
        sell: {
            title: '💰 Aracını Hemen Nakite Çevir',
            desc: 'Uğraşmadan, pazarlıksız, anında teklif alıp aracını sat.',
            cta: 'Ücretsiz Fiyat Teklifi Al',
            bg: 'bg-stone-900 border-stone-700',
            icon: '🤝'
        },
        insurance: {
            title: '🛡️ En Uygun Kasko Teklifleri',
            desc: '20+ sigorta şirketinden karşılaştırmalı teklif al.',
            cta: 'Hemen Hesapla',
            bg: 'bg-stone-900 border-stone-700',
            icon: '📝'
        },
        generic: {
            title: 'Reklam Alanı',
            desc: 'Buraya Google Adsense veya Sponsorlu İçerik gelebilir.',
            cta: 'Detaylı Bilgi',
            bg: 'bg-stone-900 border-stone-800',
            icon: '📢'
        }
    };

    const content = ads[type];

    return (
        <div className={`mt-6 p-5 rounded-xl border ${content.bg} ${className}`}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="text-3xl">{content.icon}</div>
                    <div>
                        <h3 className="text-base font-bold text-white mb-0.5">{content.title}</h3>
                        <p className="text-stone-400 text-sm">{content.desc}</p>
                    </div>
                </div>
                <button className="w-full md:w-auto px-5 py-2.5 bg-white text-stone-900 text-sm font-semibold rounded-lg hover:bg-stone-100 transition-colors whitespace-nowrap">
                    {content.cta}
                </button>
            </div>
            <div className="mt-1.5 text-right">
                <span className="text-[10px] text-stone-600 uppercase tracking-widest px-1.5 py-0.5 bg-black/20 rounded">Sponsorlu</span>
            </div>
        </div>
    );
}
