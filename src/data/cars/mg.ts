import { Car } from '@/types';

export const mgCars: Car[] = [
    {
        id: "mg-zs-ev",
        slug: "mg-zs-ev",
        brand: "MG",
        model: "ZS",
        variant: "EV",
        years: "2021-2024",
        generation: "ZS2",
        price: 1200000,
        expertNote: "SAIC Motor üretimi, Çin menşeli elektrikli SUV. Türkiye'de en uygun fiyatlı elektrikli araçlardan. 320 km menzil şehir içi yeterli, kışın 250 km'ye düşüyor. Şarj adaptasyonu bazı ZES/Eşarj istasyonlarıyla uyumsuz — yazılım güncellemesi ile çözülüyor. MG Türkiye servis ağı çok sınırlı (İstanbul, Ankara, İzmir). iSMART uygulama bağlantısı sürekli kopabilir.",
        reliabilityScore: 80,
        totalIssues: 2,
        searchCount: 11000,
        issues: [
            {
                id: "zs-1",
                title: "Şarj Adaptasyonu",
                description: "Bazı şarj istasyonlarıyla uyumsuzluk.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Yazılım"
            },
            {
                id: "zs-2",
                title: "iSMART Sistem",
                description: "Mobil uygulama bağlantı sorunları.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Yazılım güncelleme"
            }
        ],
        pros: [
            "Uygun fiyat",
            "320 km menzil",
            "Geniş iç mekan"
        ],
        cons: [
            "Servis ağı yok",
            "Marka bilinirliği",
            "Yazılım hataları"
        ],
        buyingTips: [
            "En yakın servis mesafesini araştırın"
        ]
    },
    {
        id: "mg-hs-1-5-turbo",
        slug: "mg-hs-1-5-turbo",
        brand: "MG",
        model: "HS",
        variant: "1.5 Turbo",
        years: "2021-2024",
        generation: "HS1",
        price: 1350000,
        expertNote: "SAIC 1.5 Turbo motor + DCT 7 ileri çift kavrama. Türkiye'de fiyat/performans SUV segmentinde dikkat çekiyor. DCT kalkışta gecikme yapabilir — sportif sürüş beklemeyin. Şehir içi 11-13 litre yakıyor, segment ortalamasının üstünde. Donanım zengin (panoramik cam, 360 kamera) ama plastik kalitesi zayıf. Servis ağı henüz yeterli değil.",
        reliabilityScore: 78,
        totalIssues: 2,
        searchCount: 8000,
        issues: [
            {
                id: "hs-2",
                title: "Yüksek Tüketim",
                description: "Şehir içi 11-13 litre arası yüksek tüketim.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Sürekli",
                repairCost: "Yok"
            },
            {
                id: "hs-1",
                title: "DCT Gecikmesi",
                description: "Kalkışta DCT gecikmesi.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "Karakteristik",
                repairCost: "10.000 - 25.000 TL"
            }
        ],
        pros: [
            "Fiyat/Performans",
            "Geniş iç mekan",
            "Zengin donanım"
        ],
        cons: [
            "Yüksek tüketim",
            "Servis ağı"
        ],
        buyingTips: [
            "Yakıt tüketimini göze alın"
        ]
    },
    {
        id: "mg-4-electric",
        slug: "mg-4-electric",
        brand: "MG",
        model: "MG4",
        variant: "Luxury 64kWh",
        years: "2023-2024",
        generation: "Mk1",
        price: 1400000,
        expertNote: "SAIC MSP platformu, arkadan itişli (RWD) — sürüş dinamikleri segmentin en iyisi. 64 kWh batarya ~400 km menzil, kışın ~320 km. Şarj planlama yazılımı henüz olgunlaşmadı. Türkiye'de elektrikli araca giriş için fiyat/performans kralıdır. PPF (boya koruma) şiddetle tavsiye — boya ince.",
        reliabilityScore: 88,
        totalIssues: 1,
        searchCount: 25000,
        issues: [
            {
                id: "mg4-1",
                title: "Yazılım",
                description: "Şarj planlama ve multimedya hataları.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Yazılımsal",
                repairCost: "Güncelleme"
            }
        ],
        pros: [
            "Fiyat",
            "Sürüş dinamikleri (Arkadan itiş)",
            "Menzil"
        ],
        cons: [
            "İç mekan plastiği",
            "Servis ağı (Yeni)"
        ],
        buyingTips: [
            "Elektrikli araç dünyasına giriş için fiyat/performans kralıdır."
        ]
    },
];
