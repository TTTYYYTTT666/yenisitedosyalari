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
        expertNote: "SAIC Motor üretimi, Çin menşeli elektrikli SUV. Türkiye'de en uygun fiyatlı elektrikli araçlardan. 320 km menzil şehir içi yeterli, kışın 250 km'ye düşüyor. Şarj adaptasyonu bazı ZES/Eşarj istasyonlarıyla uyumsuz — yazılım güncellemesi ile çözülüyor. MG Türkiye servis ağı çok sınırlı (İstanbul, Ankara, İzmir). iSMART uygulama bağlantısı sürekli kopabilir.",
        reliabilityScore: 80,
        totalIssues: 4,
        searchCount: 11000,
        issues: [
            {
                id: "zs-1",
                title: "Şarj Adaptasyonu",
                description: "Bazı şarj istasyonlarıyla uyumsuzluk.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "1.500 - 4.000 TL (Yazılım)"
            },
            {
                id: "zs-2",
                title: "iSMART Sistem",
                description: "Mobil uygulama bağlantı sorunları.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "1.500 - 4.000 TL (Yazılım)"
            },
            {
                id: "zs-ev-auto-3",
                title: "12V Akü Boşalması",
                description: "12V yardımcı akünün uzun park halinde boşalması.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "3.000 - 5.000 TL"
            },
            {
                id: "zs-ev-auto-4",
                title: "Şarj Kapağı Sorunu",
                description: "Şarj kapağının donması veya mekanik olarak açılmaması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kış ayları",
                repairCost: "1.500 - 3.000 TL"
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
        expertNote: "SAIC 1.5 Turbo motor + DCT 7 ileri çift kavrama. Türkiye'de fiyat/performans SUV segmentinde dikkat çekiyor. DCT kalkışta gecikme yapabilir — sportif sürüş beklemeyin. Şehir içi 11-13 litre yakıyor, segment ortalamasının üstünde. Donanım zengin (panoramik cam, 360 kamera) ama plastik kalitesi zayıf. Servis ağı henüz yeterli değil.",
        reliabilityScore: 78,
        totalIssues: 4,
        searchCount: 8000,
        issues: [
            {
                id: "hs-2",
                title: "Yüksek Tüketim",
                description: "Şehir içi 11-13 litre arası yüksek tüketim.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Sürekli",
                repairCost: "0 TL (Karakteristik)"
            },
            {
                id: "hs-1",
                title: "DCT Gecikmesi",
                description: "Kalkışta DCT gecikmesi.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "Karakteristik",
                repairCost: "10.000 - 25.000 TL"
            },
            {
                id: "hs-1-5-turbo-auto-3",
                title: "Yağ Eksiltme",
                description: "Motor yağının servis aralarında eksilmesi. Düzenli kontrol şart.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "Segman / 5.000 - 15.000 TL"
            },
            {
                id: "hs-1-5-turbo-auto-4",
                title: "DCT Kavrama Titremesi",
                description: "Çift kavramalı şanzımanda düşük hızlarda titreşim.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "40.000+ km",
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
        expertNote: "SAIC MSP platformu, arkadan itişli (RWD) — sürüş dinamikleri segmentin en iyisi. 64 kWh batarya ~400 km menzil, kışın ~320 km. Şarj planlama yazılımı henüz olgunlaşmadı. Türkiye'de elektrikli araca giriş için fiyat/performans kralıdır. PPF (boya koruma) şiddetle tavsiye — boya ince.",
        reliabilityScore: 88,
        totalIssues: 4,
        searchCount: 25000,
        issues: [
            {
                id: "mg4-1",
                title: "Yazılım",
                description: "Şarj planlama ve multimedya hataları.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Yazılımsal",
                repairCost: "1.500 - 4.000 TL (Yazılım)"
            },
            {
                id: "4-electric-auto-2",
                title: "12V Akü Boşalması",
                description: "12V yardımcı akünün uzun park halinde boşalması.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "3.000 - 5.000 TL"
            },
            {
                id: "4-electric-auto-3",
                title: "Şarj Kapağı Sorunu",
                description: "Şarj kapağının donması veya mekanik olarak açılmaması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kış ayları",
                repairCost: "1.500 - 3.000 TL"
            },
            {
                id: "4-electric-auto-4",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
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

    // ─── Eski new-cars dosyasından taşındı ───
    {
        id: "mg-hs-phev",
        slug: "mg-hs-phev",
        brand: "MG",
        model: "HS",
        variant: "1.5 Turbo PHEV Luxury",
        years: "2021-2025",
        generation: "Mk1 PHEV",
        expertNote: "Fiyat/performans canavarı. Plug-in hybrid ile %0 ÖTV avantajı vardı (artık yok). 52 km elektrikli menzil şehir içi yeterlidir. Çin üretimi ama kalitesi beklentinin üstündedir.",
        reliabilityScore: 78,
        totalIssues: 5,
        searchCount: 15000,
        issues: [
            {
                id: "mg-hs-phev-1",
                title: "Şarj Sistemi Arızası",
                description: "AC şarj ünitesinin arızalanması ve aracın şarj olmaması. Yazılım veya donanım kaynaklı olabilir.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "5.000 - 15.000 TL"
            },
            {
                id: "mg-hs-phev-2",
                title: "Batarya Menzil Düşüşü",
                description: "Soğuk havalarda elektrikli menzilinin 52 km'den 30 km'ye düşmesi.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Kış ayları",
                repairCost: "0 TL (Karakteristik)"
            },
            {
                id: "mg-hs-phev-3",
                title: "Multimedya Tepki Gecikmesi",
                description: "Dokunmatik ekranın yavaş tepki vermesi ve CarPlay bağlantısının kopması.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "1.500 - 4.000 TL (Yazılım)"
            },
            {
                id: "mg-hs-phev-4",
                title: "Süspansiyon Sertliği",
                description: "PHEV batarya ağırlığı nedeniyle sert süspansiyon ve bozuk yolda konfor kaybı.",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "0 TL (Tasarım Kaynaklı)"
            },
            {
                id: "mg-hs-phev-5",
                title: "Yedek Parça Bekleme",
                description: "Çin'den gelen yedek parçaların temin süresinin uzaması.",
                category: "govde",
                riskLevel: "MEDIUM",
                affectedKm: "Kaza durumunda",
                repairCost: "0 TL (Karakteristik)"
            }
        ],
        pros: [
            "Uygun fiyat",
            "52 km elektrik menzili",
            "Geniş iç hacim"
        ],
        cons: [
            "Yedek parça sorunu",
            "Marka bilinirliği düşük",
            "İkinci el değer kaybı"
        ],
        buyingTips: [
            "Şarj sistemini test edin",
            "Yetkili servis ağını kontrol edin",
            "Batarya sağlık raporunu isteyin"
        ]
    }
,
    {
            "id": "mg-zs-1-0-turbo",
            "slug": "mg-zs-1-0-turbo",
            "brand": "MG",
            "model": "ZS (ZS11)",
            "variant": "1.0 Turbo Luxury",
            "years": "2020-2025",
            "generation": "ZS11",
            "expertNote": "1.0 Turbo 111 HP + 6AT. MG ZS Çin üretimi İngiliz markası. Fiyatına göre çok donanımlı. 6AT şanzıman CVT'den daha konvansiyonel. Uzun vadeli güvenilirlik bilinmiyor.",
            "reliabilityScore": 72,
            "totalIssues": 5,
            "searchCount": 7000,
            "issues": [
                    {
                            "id": "mgzs-1",
                            "title": "6AT Sarsıntısı",
                            "description": "6 ileri otomatik şanzımanda soğukta sert geçişler.",
                            "category": "sanziman",
                            "riskLevel": "LOW",
                            "affectedKm": "Soğuk hava",
                            "repairCost": "3.000 - 6.000 TL (Yağ Değişimi)"
                    },
                    {
                            "id": "mgzs-2",
                            "title": "Turbo Aktuatör",
                            "description": "Turbo wastegate aktuatörü arızası.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "60.000+ km",
                            "repairCost": "5.000 - 12.000 TL"
                    },
                    {
                            "id": "mgzs-3",
                            "title": "Kaporta Boşlukları",
                            "description": "Panel arası boşluklar düzensiz.",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "Fabrika",
                            "repairCost": "2.000 - 5.000 TL"
                    },
                    {
                            "id": "mgzs-4",
                            "title": "Multimedya",
                            "description": "iSMART ekranının donması.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Rastgele",
                            "repairCost": "1.500 - 4.000 TL (Yazılım)"
                    },
                    {
                            "id": "mgzs-5",
                            "title": "Ön Fren Diski",
                            "description": "Fren disklerinin erken eğrilmesi.",
                            "category": "fren",
                            "riskLevel": "LOW",
                            "affectedKm": "25.000+ km",
                            "repairCost": "2.000 - 4.000 TL"
                    }
            ],
            "pros": [
                    "Uygun fiyat",
                    "Çok donanımlı",
                    "Panoramik tavan",
                    "360 kamera"
            ],
            "cons": [
                    "Uzun vadeli güvenilirlik?",
                    "Servis ağı dar",
                    "Yapı kalitesi orta"
            ],
            "buyingTips": [
                    "Luxury donanım alın",
                    "Garanti şartlarını inceleyin",
                    "Kaporta boşluklarını kontrol edin"
            ]
    }
];
