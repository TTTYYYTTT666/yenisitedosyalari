import { Car } from '@/types';

export const suzukiCars: Car[] = [
    {
        id: "suzuki-vitara-boosterjet",
        slug: "suzuki-vitara-1-4-boosterjet",
        brand: "Suzuki",
        model: "Vitara",
        variant: "1.4 BoosterJet AllGrip",
        years: "2016-2024",
        generation: "LY",
        price: 1400000,
        expertNote: "1.4 BoosterJet turbo motor (140 HP) + Aisin 6AT. AllGrip 4x4 gerçek off-road değil ama çamurda ve karda mükemmel. Türkiye'de sorunsuzluk şampiyonu — JD Power ve Warrantywise raporlarında sürekli zirvede. Karbon birikimi direkt enjeksiyondan kaynaklanıyor, 60.000 km sonrası temizlik gerek. Trim sesleri sert plastik aksamdan geliyor, konfor beklemeyin. Yedek parça fiyatları çok uygun.",
        reliabilityScore: 94,
        totalIssues: 3,
        searchCount: 12000,
        issues: [
            {
                id: "vitara-bj-3",
                title: "Karbon Birikimi",
                description: "Emme subaplarında kurum birikmesi (Direkt enjeksiyon).",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "60.000+ km",
                repairCost: "Temizlik"
            },
            {
                id: "vitara-bj-2",
                title: "Trim Sesleri",
                description: "Sert plastik aksamlardan gelen tıkırtılar.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Zamanla",
                repairCost: "İzolasyon"
            },
            {
                id: "vitara-bj-1",
                title: "Start-Stop Hatası",
                description: "Start-stop sisteminin devre dışı kalması.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Yazılım / Akü"
            }
        ],
        pros: [
            "Gerçek 4x4 (AllGrip)",
            "Sorunsuz Japon",
            "Yakıt/Performans"
        ],
        cons: [
            "İç mekan kalitesi düşük (Trim)",
            "Kapılar hafif",
            "Yalıtım"
        ],
        buyingTips: [
            "Sorunsuzluk ve 4 çeker istiyorsanız rakipsizdir. Konfor beklemeyin."
        ]
    },
    {
        id: "suzuki-swift-1-2-dualjet",
        slug: "suzuki-swift-1-2-dualjet",
        brand: "Suzuki",
        model: "Swift",
        variant: "1.2 Dualjet",
        years: "2017-2024",
        generation: "A2L",
        price: 900000,
        expertNote: "1.2 Dualjet atmosferik motor (90 HP), ultra hafif 900 kg kasa. Türkiye'de şehir içi en pratik araç. CVT şanzıman düşük hızlarda titreşim yapabilir — mümkünse manuel seçin. 4-5 litre yakıt tüketimi efsane. Otoyol hızlarında motor gürültüsü yüksek. Arka koltuk 1.70m üstü için dar. Mild hybrid versiyon daha ekonomik.",
        reliabilityScore: 91,
        totalIssues: 1,
        searchCount: 7000,
        issues: [
            {
                id: "swift-1",
                title: "CVT Titreme",
                description: "CVT şanzımanda düşük hızlarda hafif titreme.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Kabul edilebilir"
            }
        ],
        pros: [
            "Ultra hafif (900kg)",
            "Şehir içi pratiklik",
            "Düşük tüketim"
        ],
        cons: [
            "Otoyol hızlarında gürültü",
            "Arka koltuk dar"
        ],
        buyingTips: [
            "Manuel tercih edin (CVT yerine)"
        ]
    },
    {
        id: "suzuki-scross-1-4-hybrid",
        slug: "suzuki-scross-1-4-hybrid",
        brand: "Suzuki",
        model: "S-Cross",
        variant: "1.4 BoosterJet Hybrid GLX",
        years: "2021-2024",
        generation: "Mk3",
        price: 1500000,
        expertNote: "BoosterJet 1.4 Turbo + 48V Mild Hybrid. Türkiye'de fiyat/performans SUV seçiminde en akıllı tercih. AllGrip 4x4 versiyonu arazide Duster'a yakın performans verir. Koltuk kumaşı erken deforme sorunu var ama kılıf takılabilir. Multimedya ekranı basit ama telefon bağlantısı kopma sorunu olabilir. Yakıt tüketimi 6-7 litre mükemmel.",
        reliabilityScore: 93,
        totalIssues: 2,
        searchCount: 11000,
        issues: [
            {
                id: "scross-2",
                title: "Koltuk Kumaşı",
                description: "Koltuk kenarlarının erken deforme olması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "30.000+ km",
                repairCost: "Döşeme Tamiri"
            },
            {
                id: "scross-1",
                title: "Multimedya",
                description: "Ekranın telefon bağlantısını koparması.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Yazılım",
                repairCost: "Güncelleme"
            }
        ],
        pros: [
            "Fiyat/Performans",
            "Sorunsuzluk",
            "Yakıt ekonomisi"
        ],
        cons: [
            "Tasarım (Subjektif)",
            "Yalıtım",
            "Malzeme kalitesi"
        ],
        buyingTips: [
            "AllGrip (4x4) olanları arazide de şaşırtıcı derecede yeteneklidir."
        ]
    },
    {
        id: "suzuki-jimny",
        slug: "suzuki-jimny-1-5",
        brand: "Suzuki",
        model: "Jimny",
        variant: "1.5 GLX 4x4",
        years: "2018-2024",
        generation: "JB74",
        price: 1800000,
        expertNote: "1.5 K15B atmosferik motor (102 HP), part-time 4WD. Dünyada üretimi durdu, ikinci el fiyatı sıfırın ÜSTÜNDE. Türkiye'de koleksiyon aracına dönüştü. Gerçek arazi yeteneği (yaklaşma/ayrılma açısı) Land Rover'a yakın. Konfor yoktur — sert süspansiyon, dar kabin, bagaj 85 litre. Şehir içi sürüş zayıf, otoyolda rüzgara hassas. Ama tapanı var, bakanı var.",
        reliabilityScore: 92,
        totalIssues: 1,
        searchCount: 12000,
        issues: [
            {
                id: "jimny-1",
                title: "Diferansiyel Ötmesi",
                description: "Yüksek hızda diferansiyel sesi.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Normal"
            }
        ],
        pros: [
            "Gerçek arazi yeteneği",
            "Tasarım",
            "İkinci el"
        ],
        cons: [
            "Konfor",
            "Bagaj yok",
            "Yol tutuş"
        ],
        buyingTips: [
            "Şehir içi konfor beklemeyin, arazi canavarıdır."
        ]
    }
];
