import { Car } from '@/types';

export const mazdaCars: Car[] = [
    {
        id: "mazda-cx5-2-0-skyactiv",
        slug: "mazda-cx5-2-0-skyactiv",
        brand: "Mazda",
        model: "CX-5",
        variant: "2.0 Skyactiv-G",
        years: "2017-2024",
        generation: "KF",
        price: 1800000,
        expertNote: "Skyactiv-G 2.0 atmosferik motor — turbo yok, sorun yok. Japon mühendisliğinin zirvesi: dünyada en az arıza yapan SUV'lardan biri. Türkiye'de 2.0 motor MTV'de yüksek vergi dilimine giriyor, hesap edin. Ayna katlama motoru bilinen tek kronik sorunudur. Mazda Türkiye servis ağı az ama kaliteli (İstanbul Beyoğlu, Ankara Kızılay).",
        reliabilityScore: 90,
        totalIssues: 1,
        searchCount: 8500,
        issues: [
            {
                id: "cx5-1",
                title: "Ayna Katlama Motoru",
                description: "Yan aynaların katlanmaması veya dişli sesi.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "2.000 - 5.000 TL"
            }
        ],
        pros: [
            "Japon mühendisliği",
            "Sorunsuz atmosferik motor",
            "Sürüş hissi"
        ],
        cons: [
            "Motor performansı (Turbo yok)",
            "Vergi dilimi (2.0 motor)"
        ],
        buyingTips: [
            "Aynaları açıp kapatarak test edin"
        ]
    },
    {
        id: "mazda3-bp",
        slug: "mazda-3-2-0-skyactiv",
        brand: "Mazda",
        model: "Mazda3",
        variant: "2.0 Skyactiv-G",
        years: "2019-2024",
        generation: "BP",
        price: 1600000,
        expertNote: "Skyactiv-G 2.0 atmosferik motor. Mazda3 Türkiye'de niş bir seçim ama kalite açısından Alman rakiplerini geçer. SCBS (Smart City Brake Support) hayalet fren sorunu var — özellikle yağmurda sensör kirlenince gereksiz fren yapabilir, kalibrasyonla çözülür. C sütunu çok kalın, kör nokta var — BSD opsiyonu şart. İkinci el değeri yavaş gider.",
        reliabilityScore: 92,
        totalIssues: 2,
        searchCount: 6000,
        issues: [
            {
                id: "mazda3-bp-1",
                title: "Akü Deşarjı",
                description: "Aracın kullanılmadığı durumlarda akünün hızlı bitmesi (Yazılım kaynaklı).",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "Yazılım / Akü"
            },
            {
                id: "mazda3-bp-2",
                title: "Hayalet Fren",
                description: "SCBS sisteminin gereksiz yere fren yapması (Sensör hassasiyeti).",
                category: "elektronik",
                riskLevel: "HIGH",
                affectedKm: "Rastgele",
                repairCost: "Kalibrasyon"
            }
        ],
        pros: [
            "Tasarım ödüllü",
            "İç mekan kalitesi",
            "Sessizlik"
        ],
        cons: [
            "Arka görüş (C sütunu çok geniş)",
            "İkinci el yavaş"
        ],
        buyingTips: [
            "Kör nokta uyarı sistemi çalışıyor mu kontrol edin"
        ]
    },
    {
        id: "mazda-cx30-2-0-skyactiv",
        slug: "mazda-cx30-2-0-skyactiv",
        brand: "Mazda",
        model: "CX-30",
        variant: "2.0 Skyactiv-G Power Sense",
        years: "2020-2024",
        generation: "DM",
        price: 1900000,
        expertNote: "Skyactiv-G 2.0 atmosferik, CX-5'in küçük kardeşi. Türkiye'de sorunsuzluk arayan niş alıcılar için ideal. SCBS hayalet fren sorunu bu modelde de var. Akü deşarjı bagaj kapağı modülünden kaynaklanıyor — ücretsiz servis kampanyası var. Arka yaşam alanı ve bagaj küçük, aile aracı olarak CX-5 daha uygun.",
        reliabilityScore: 95,
        totalIssues: 2,
        searchCount: 8000,
        issues: [
            {
                id: "cx30-2",
                title: "Fren Otuşu",
                description: "Otomatik fren sisteminin (SCBS) gereksiz devreye girmesi.",
                category: "elektronik",
                riskLevel: "HIGH",
                affectedKm: "Sensör kirliliği",
                repairCost: "Kalibrasyon"
            },
            {
                id: "cx30-1",
                title: "Akü Deşarjı",
                description: "Bagaj kapağı modülünün aküyü bitirmesi (Geri çağırma).",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "Ücretsiz (Servis)"
            }
        ],
        pros: [
            "Sorunsuzluk zirvesi",
            "Malzeme kalitesi (Premium)",
            "Tasarım"
        ],
        cons: [
            "Arka yaşam alanı dar",
            "Bagaj küçük",
            "İkinci eli yavaş"
        ],
        buyingTips: [
            "Sorunsuzluk ve kalite arayıp, ikinci el hızını dert etmeyenler için en iyi seçenek."
        ]
    },
    {
        id: "mazda-cx3",
        slug: "mazda-cx3-1-5-diesel",
        brand: "Mazda",
        model: "CX-3",
        variant: "1.5 Skyactiv-D",
        years: "2015-2022",
        generation: "DK",
        price: 1100000,
        expertNote: "Skyactiv-D 1.5 dizel motor — Mazda'nın küçük dizel SUV'u. Türkiye'de kısa mesafe kullanımda DPF tıkanma riski var, şehir içi kullanıcısıysanız benzinli model daha mantıklı. Enjektör sesi 100.000 km sonrası çıkabilir. CX-3 kasası gerçekten küçük — arka koltuk ve bagaj dar. Sona erdi, yeni üretilmiyor.",
        reliabilityScore: 86,
        totalIssues: 2,
        searchCount: 5500,
        issues: [
            {
                id: "cx3-1",
                title: "DPF",
                description: "Kısa mesafe kullanımda DPF tıkanması.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Şehir içi",
                repairCost: "Temizlik"
            },
            {
                id: "cx3-2",
                title: "Enjektör",
                description: "Dizel enjektör ses yapması.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "10.000 TL"
            }
        ],
        pros: [
            "Tasarım",
            "Sürüş keyfi",
            "Kalite"
        ],
        cons: [
            "Çok dar arka ve bagaj",
            "Pahalı yedek parça"
        ],
        buyingTips: [
            "Benzinli model daha sorunsuzdur, mümkünse benzinli alın."
        ]
    },
];
