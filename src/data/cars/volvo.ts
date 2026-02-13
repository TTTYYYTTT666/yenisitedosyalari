import { Car } from '@/types';

export const volvoCars: Car[] = [
    {
        id: "volvo-xc60-b4",
        slug: "volvo-xc60-b4",
        brand: "Volvo",
        model: "XC60",
        variant: "B4 Mild Hybrid",
        years: "2017-2024",
        generation: "SPA",
        price: 3500000,
        expertNote: "Volvo SPA platformu — dünyanın en güvenli SUV'u. B4 Mild Hybrid motor (197 HP + 14 HP elektrik), Aisin 8AT şanzıman. Türkiye'de Volvo Car Türkiye yetkili servis ağı var (İstanbul, Ankara, İzmir). Sunroof tahliye kanalları yılda 1 kez temizletilmeli. Google Automotive OS yeni nesillerde donma yapabilir ama OTA ile çözülür. Bowers & Wilkins ses sistemi opsiyonu varsa kaçırmayın.",
        reliabilityScore: 83,
        totalIssues: 2,
        searchCount: 9000,
        issues: [
            {
                id: "xc60-2",
                title: "Sunroof Su Alma",
                description: "Tahliye kanallarının tıkanması sonucu su alma.",
                category: "govde",
                riskLevel: "MEDIUM",
                affectedKm: "Bakımsız araçlarda",
                repairCost: "Temizlik"
            },
            {
                id: "xc60-1",
                title: "Google Automotive Donması",
                description: "Yeni nesil multimedya sisteminin çökmesi.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Reset/Yazılım"
            }
        ],
        pros: [
            "Dünyanın en güvenli aracı",
            "Koltuk konforu",
            "Bower & Wilkins ses sistemi"
        ],
        cons: [
            "Yedek parça fiyatları (Çok yüksek)",
            "Yakıt tüketimi (Ağır kasa)"
        ],
        buyingTips: [
            "Sunroof etrafında su izi var mı?",
            "Yetkili servis bakımlı mı? (İyi niyet garantisi için şart)"
        ]
    },
    {
        id: "volvo-xc40-t4",
        slug: "volvo-xc40-t4",
        brand: "Volvo",
        model: "XC40",
        variant: "T4",
        years: "2018-2024",
        generation: "XC",
        price: 2800000,
        expertNote: "Volvo CMA platformu (Geely ortak). T4 motor (190 HP), 8AT Aisin şanzıman. Türkiye'de en çok satılan Volvo modeli. Sensus multimedya sistemi eski nesillerde donma yapabilir — test edin. Pilot Assist yarı otonom sürüş destekli. Skandinav minimalizmi sevenler için mükemmel. Yedek parça fiyatları BMW seviyesinde.",
        reliabilityScore: 85,
        totalIssues: 2,
        searchCount: 9000,
        issues: [
            {
                id: "xc40-2",
                title: "Pilot Assist",
                description: "Pilot Assist sisteminin beklenmedik şekilde devre dışı kalması.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Servis kalibrasyonu"
            },
            {
                id: "xc40-1",
                title: "Sensus Donması",
                description: "Multimedya sisteminin donması.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "2.000 - 5.000 TL (Yazılım)"
            }
        ],
        pros: [
            "Güvenlik referansı",
            "Premium kalite",
            "Skandinav tasarım"
        ],
        cons: [
            "Yavaş multimedya",
            "Yedek parça fiyatları"
        ],
        buyingTips: [
            "Sensus sistemini test edin"
        ]
    },
    {
        id: "volvo-s60-t4",
        slug: "volvo-s60-t4",
        brand: "Volvo",
        model: "S60",
        variant: "T4",
        years: "2019-2024",
        generation: "Z",
        price: 3000000,
        expertNote: "SPA platformu, S90'ın kısa versiyonu. T4 motor (190 HP) Türkiye'de tek seçenek. Opsiyonel hava süspansiyonu konfor açısından harika ama arızalanınca 25.000-45.000 TL masraf çıkarır. Normal süspansiyonlu modeli daha akıllıca tercih. Volvo'nun 180 km/s elektronik hız limiti var — otobanda sorun değil ama tuhaf hissettirir.",
        reliabilityScore: 86,
        totalIssues: 1,
        searchCount: 6500,
        issues: [
            {
                id: "s60-1",
                title: "Hava Süspansiyonu",
                description: "Opsiyonel hava süspansiyonunun ses yapması.",
                category: "suspansiyon",
                riskLevel: "MEDIUM",
                affectedKm: "60.000+ km",
                repairCost: "25.000 - 45.000 TL"
            }
        ],
        pros: [
            "Sessiz kabin",
            "Güvenlik",
            "Şık tasarım"
        ],
        cons: [
            "Hava süspansiyon riski",
            "Yedek parça"
        ],
        buyingTips: [
            "Normal mi hava süspansiyon mu kontrol edin"
        ]
    },
    {
        id: "volvo-xc40-t3",
        slug: "volvo-xc40-t3",
        brand: "Volvo",
        model: "XC40",
        variant: "T3 R-Design",
        years: "2018-2024",
        generation: "Mk1",
        price: 2500000,
        expertNote: "CMA platformu, XC40 T4'ün giriş motoru. T3 (163 HP) 3 silindirli motor — yeterli ama şehir dışında zorlanabilir. R-Design donanım sportif görünüm verir. Türkiye'de XC40 T3 en uygun fiyatlı Volvo giriş modelidir. Yakıt tüketimi 9-10 litre arası, göze alın.",
        reliabilityScore: 92,
        totalIssues: 1,
        searchCount: 21000,
        issues: [
            {
                id: "xc40-1",
                title: "Yazılım Hataları",
                description: "Ekranın donması veya güvenlik sistemlerinin gereksiz uyarısı.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Güncelleme"
            }
        ],
        pros: [
            "Güvenlik",
            "Saklama alanları",
            "Tasarım"
        ],
        cons: [
            "Yakıt tüketimi (T3 motor)",
            "Bagaj küçük"
        ],
        buyingTips: [
            "T3 motor biraz fazla yakar (9-10L), bunu bilerek alın."
        ]
    },
    {
        id: "volvo-s60-new",
        slug: "volvo-s60-b5",
        brand: "Volvo",
        model: "S60",
        variant: "B5 AWD Inscription",
        years: "2019-2024",
        generation: "Mk3",
        price: 3200000,
        expertNote: "SPA platformu, B5 motor (250 HP + 14 HP elektrik destek). AWD standart. TCAM modülü (LTE/GPS anten) arızası Türkiye'de özellikle sık çıkıyor — anahtar çalışmayabilir, 15.000-25.000 TL masraf. 48V mild hybrid batarya uyarısı (kaplumbağa modu) garantiden çözülür. Bowers & Wilkins ses sistemi dünyadaki en iyi araç ses sistemidir.",
        reliabilityScore: 93,
        totalIssues: 3,
        searchCount: 12000,
        issues: [
            {
                id: "s60-b5-1",
                title: "TCAM Modülü",
                description: "LTE/GPS anten modülü arızası ve anahtarın çalışmaması.",
                category: "elektronik",
                riskLevel: "HIGH",
                affectedKm: "Rastgele",
                repairCost: "15.000 - 25.000 TL"
            },
            {
                id: "s60-b5-2",
                title: "Google OS Donma",
                description: "Multimedya ekranının donması veya yeniden başlaması.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Yazılım",
                repairCost: "Güncelleme"
            },
            {
                id: "s60-b5-3",
                title: "48V Batarya",
                description: "Mild Hybrid sistem hatası (Kaplumbağa uyarısı).",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "Servis / Garanti"
            }
        ],
        pros: [
            "Güvenlik",
            "Tasarım",
            "Ses sistemi (B&W)"
        ],
        cons: [
            "180 km/s hız limiti",
            "Yakıt"
        ],
        buyingTips: [
            "Bowers & Wilkins ses sistemi opsiyonu varsa kaçırmayın, dünyadaki en iyi araç ses sistemidir."
        ]
    },
    {
        id: "volvo-v40",
        slug: "volvo-v40-1-6-d2",
        brand: "Volvo",
        model: "V40",
        variant: "1.6 D2 Powershift",
        years: "2012-2015",
        generation: "Mk1",
        price: 1200000,
        expertNote: "DİKKAT: V40 1.6 D2'de Ford Powershift (DCT) şanzıman var — KESINLIKLE en riskli Volvo modelidir. Kuru çift kavrama 80.000 km sonrası kesin bozulur, 40.000-60.000 TL masraf. 2016 sonrası modellerde Geartronic 6 (tork konvertörlü) şanzıman var — onlar güvenilirdir. V40 kasa güvenlik açısından hâlâ mükemmel ama bu şanzıman yüzünden ikinci el değeri düştü.",
        reliabilityScore: 58,
        totalIssues: 1,
        searchCount: 11000,
        issues: [
            {
                id: "v40-1",
                title: "Powershift Riski",
                description: "Ford kaynaklı Powershift şanzıman saatli bombadır. Kavrama ve mekatronik bozulur.",
                category: "sanziman",
                riskLevel: "HIGH",
                affectedKm: "80.000+ km",
                repairCost: "40.000 - 60.000 TL"
            }
        ],
        pros: [
            "Güvenlik",
            "Tasarım",
            "Kalite"
        ],
        cons: [
            "Arka görüş",
            "Şanzıman riski",
            "Sert süspansiyon"
        ],
        buyingTips: [
            "2016 sonrası 1.5 T3 motorlu ve tork konvertörlü şanzımanlı olanları tercih edin."
        ]
    },
];
