import { Car } from '@/types';

export const kiaCars: Car[] = [
        {
        id: "kia-stonic-1-4-mpi",
        slug: "kia-stonic-1-4-mpi",
        brand: "Kia",
        model: "Stonic",
        variant: "1.4 MPI",
        years: "2017-2024",
        generation: "YB",
        reliabilityScore: 89,
        totalIssues: 1,
        searchCount: 5000,
        issues: [
            {
                id: "stonic-1",
                title: "Motor Performansı",
                description: "Atmosferik motorun yokuşlarda ve yüklü durumda çekiş düşüklüğü.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Sürekli",
                repairCost: "Yok"
            },
            {
                id: "stonic-2",
                title: "Yüksek Yakıt Tüketimi",
                description: "Şehir içi kullanımda fabrika verilerinin çok üzerine çıkan yakıt tüketimi.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Sürekli",
                repairCost: "LPG Uygulaması"
            },
            {
                id: "stonic-3",
                title: "Şanzıman Kararsızlığı",
                description: "Otomatik şanzımanın yokuşlarda vites seçiminde kararsız kalması.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "Yokuşlu Yollar",
                repairCost: "Yazılım"
            },
            {
                id: "stonic-4",
                title: "Trim Sesleri",
                description: "Sert plastik malzemelerden gelen tıkırtı sesleri.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Bozuk Yollar",
                repairCost: "Yalıtım"
            },
            {
                id: "stonic-5",
                title: "Multimedya Kopmaları",
                description: "Apple CarPlay / Android Auto bağlantısının sık sık kopması.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Kablo / Yazılım"
            }
        ],
        pros: [
            "Sorunsuzluk",
            "Tam otomatik şanzıman",
            "Fiyat"
        ],
        cons: [
            "Performans",
            "Plastik kalitesi"
        ],
        buyingTips: [
            "LPG uyumunu kontrol edin"
        ]
    },
        {
        id: "kia-sportage-1-6-tgdi",
        slug: "kia-sportage-1-6-tgdi",
        brand: "Kia",
        model: "Sportage",
        variant: "1.6 T-GDI",
        years: "2022-2024",
        generation: "NQ5",
        reliabilityScore: 87,
        totalIssues: 2,
        searchCount: 18000,
        issues: [
            {
                id: "sportage-1",
                title: "Panoramik Cam Sesi",
                description: "Panoramik tavanın açılıp kapanırken ses yapması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "2.000 - 5.000 TL"
            },
            {
                id: "sportage-2",
                title: "DCT Kararsızlık",
                description: "Düşük hızlarda vites geçişinde kararsızlık.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "Şehir içi",
                repairCost: "5.000 - 12.000 TL (Yazılım)"
            }
        ],
        pros: [
            "Modern tasarım",
            "Geniş iç mekan",
            "Zengin donanım"
        ],
        cons: [
            "Yakıt tüketimi (Şehir içi)",
            "DCT alışkanlık istiyor"
        ],
        buyingTips: [
            "Panoramik tavan sesi normaldir",
            "DCT şanzımanı şehir içinde test edin"
        ]
    },
        {
        id: "kia-ceed-1-5-tgdi",
        slug: "kia-ceed-1-5-tgdi",
        brand: "Kia",
        model: "Ceed",
        variant: "1.5 T-GDI",
        years: "2021-2024",
        generation: "CD",
        reliabilityScore: 86,
        totalIssues: 1,
        searchCount: 12000,
        issues: [
            {
                id: "ceed-1",
                title: "Multimedya Gecikmesi",
                description: "Ekranın yavaş tepki vermesi.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Yazılım güncelleme"
            }
        ],
        pros: [
            "Sportif tasarım",
            "7 yıl garanti",
            "Yol tutuş"
        ],
        cons: [
            "Arka görüş sınırlı",
            "Malzeme kalitesi (Alt seviye)"
        ],
        buyingTips: [
            "Yazılım güncel mi kontrol edin"
        ]
    },
        {
        id: "kia-niro-ev",
        slug: "kia-niro-ev",
        brand: "Kia",
        model: "Niro",
        variant: "EV",
        years: "2022-2024",
        generation: "SG2",
        reliabilityScore: 89,
        totalIssues: 1,
        searchCount: 8000,
        issues: [
            {
                id: "niro-1",
                title: "Şarj Kapağı",
                description: "Şarj kapağının donması veya açılmaması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kış ayları",
                repairCost: "1.500 - 3.000 TL"
            }
        ],
        pros: [
            "460+ km menzil",
            "Hızlı şarj",
            "Sessizlik"
        ],
        cons: [
            "Şarj altyapısı",
            "Yüksek fiyat"
        ],
        buyingTips: [
            "Pil sağlık raporunu (SOH) isteyin"
        ]
    },
        {
        id: "kia-sportage-nqy5",
        slug: "kia-sportage-1-6-crdi",
        brand: "Kia",
        model: "Sportage",
        variant: "1.6 CRDi Mild Hybrid",
        years: "2021-2024",
        generation: "NQ5",
        price: 2050000,
        reliabilityScore: 91,
        totalIssues: 1,
        searchCount: 22000,
        issues: [
            {
                id: "sportage-1",
                title: "PPF Sensörü",
                description: "Egzoz/Partikül sensörü hatası.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Garantiden"
            }
        ],
        pros: [
            "Tasarım",
            "Kavisli ekran",
            "Dizel ekonomi"
        ],
        cons: [
            "Arka sinyaller tamponda (Görünürlük)",
            "Bagaj eşiği yüksek"
        ],
        buyingTips: [
            "Prestige donanım Harman Kardon ses sistemiyle tercih edilmeli."
        ]
    },
        {
        id: "kia-niro",
        slug: "kia-niro-hybrid",
        brand: "Kia",
        model: "Niro",
        variant: "1.6 GDI Hybrid",
        years: "2016-2022",
        generation: "DE",
        reliabilityScore: 90,
        totalIssues: 1,
        searchCount: 5000,
        issues: [
            {
                id: "niro-1",
                title: "Debriyaj Aktüatörü",
                description: "Hidrolik debriyaj aktüatörü sızıntısı (Geri çağırma var).",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "Garantiden/Servis"
            }
        ],
        pros: [
            "Yakıt ekonomisi",
            "Sessizlik",
            "Geniş iç hacim"
        ],
        cons: [
            "Tasarım (Kutu gibi)",
            "İkinci el yavaş"
        ],
        buyingTips: [
            "Hibrit batarya sağlığını kontrol edin."
        ]
    },
        {
        id: "kia-picanto",
        slug: "kia-picanto-1-0-amt",
        brand: "Kia",
        model: "Picanto",
        variant: "1.0 AMT",
        years: "2017-2024",
        generation: "JA",
        reliabilityScore: 85,
        totalIssues: 1,
        searchCount: 8000,
        issues: [
            {
                id: "picanto-1",
                title: "AMT Şanzıman",
                description: "Vites geçişlerinde sarsıntı ve yığılma.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Yazılım"
            }
        ],
        pros: [
            "Park kolaylığı",
            "Donanım",
            "Şirinlik"
        ],
        cons: [
            "Şanzıman konforu",
            "Bagaj"
        ],
        buyingTips: [
            "Tam otomatik (tork konvertörlü) olan eski kasalar daha konforludur."
        ]
    },
        {
        id: "kia-sportage-1-6-gdi",
        slug: "kia-sportage-1-6-gdi",
        brand: "Kia",
        model: "Sportage",
        variant: "1.6 GDI Concept Plus",
        years: "2012-2016",
        generation: "SL",
        expertNote: "Şekli on numara, hala baktırır. Ama o 1.6 atmosferik motor yok mu, benzini içer, yokuşta nazlanır. LPG takılmamışsa ocağına incir ağacı diker.",
        price: 950000,
        reliabilityScore: 88,
        totalIssues: 2,
        searchCount: 22000,
        issues: [
            {
                id: "sportage-2",
                title: "Sunroof Perdesi",
                description: "Sunroof tavan perdesinin sarkması veya mekanizma kırılması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "3.000 - 6.000 TL"
            },
            {
                id: "sportage-1",
                title: "Debriyaj Baskı Balata",
                description: "Ağır kasa nedeniyle debriyaj balatası erken biter.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "60.000+ km",
                repairCost: "8.000 - 15.000 TL"
            }
        ],
        pros: [
            "Hala çok yakışıklı",
            "Donanım gırtlak",
            "Sorunsuz motor bloğu"
        ],
        cons: [
            "Yakıt tüketimi (11-12L)",
            "Performans zayıf",
            "Bagaj küçük"
        ],
        buyingTips: [
            "LPG kiti kaliteli mi bakın (Sıvı sistem mi?)",
            "Sunroof çalışıyor mu?"
        ]
    },
        {
        id: "kia-rio-1-4-mpi",
        slug: "kia-rio-1-4-mpi",
        brand: "Kia",
        model: "Rio",
        variant: "1.4 MPI",
        years: "2017-2023",
        generation: "YB",
        reliabilityScore: 88,
        totalIssues: 2,
        searchCount: 14000,
        issues: [
            {
                id: "rio-1",
                title: "Debriyaj Erken Bitmesi",
                description: "Manuel vitesli modellerde debriyaj balatasının erken aşınması.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "30.000 - 50.000 km",
                repairCost: "Baskı Balata Değişimi"
            },
            {
                id: "rio-2",
                title: "Direksiyon Kutusu Sesi",
                description: "Direksiyon kutusundan gelen tıkırtı sesi (Burç arızası).",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "Bozuk Yollar",
                repairCost: "Tamir / Değişim"
            },
            {
                id: "rio-3",
                title: "Yüksek Yakıt Tüketimi",
                description: "Otomatik vitesli (6AT) modellerde şehir içi yüksek tüketim.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Sürekli",
                repairCost: "LPG"
            },
            {
                id: "rio-4",
                title: "Trim Sesleri",
                description: "B sütunu ve torpidodan gelen plastik sesleri.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Bozuk Yollar",
                repairCost: "Yalıtım"
            },
            {
                id: "rio-5",
                title: "Klima Kompresör Sesi",
                description: "Klima açıldığında motordan gelen uğultu sesi.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Kompresör Tamiri"
            }
        ],
        pros: [
            "Sorunsuz motor",
            "Geniş iç hacim",
            "Yedek parça"
        ],
        cons: [
            "Yalıtım zayıf",
            "Yakıt tüketimi",
            "Sert süspansiyon"
        ],
        buyingTips: [
            "Debriyaj kavrama noktasını kontrol edin",
            "Direksiyonu tam sağ-sol yapıp ses dinleyin"
        ]
    },
        {
        id: "kia-cerato-1-6-mpi",
        slug: "kia-cerato-1-6-mpi",
        brand: "Kia",
        model: "Cerato",
        variant: "1.6 MPI",
        years: "2017-2021",
        generation: "BD",
        reliabilityScore: 90,
        totalIssues: 2,
        searchCount: 8000,
        issues: [
            {
                id: "cerato-1",
                title: "Direksiyon Kolonu Sesi",
                description: "Elektrikli direksiyon motorundan (EPS) gelen tıkırtı sesi.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "60.000+ km",
                repairCost: "EPS Tamiri"
            },
            {
                id: "cerato-2",
                title: "Ateşleme Bobini Arızası",
                description: "Bobin arızası nedeniyle motorda tekleme ve sarsıntı.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "80.000+ km",
                repairCost: "Bobin Değişimi"
            },
            {
                id: "cerato-3",
                title: "Klima Tuş Soyulması",
                description: "Klima kontrol ünitesindeki tuşların kaplamasının soyulması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Restorasyon"
            },
            {
                id: "cerato-4",
                title: "Far Buğulanması",
                description: "Yağmurlu havalarda farların su alması veya buğulanması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Yalıtım"
            },
            {
                id: "cerato-5",
                title: "Şanzıman Kararsızlığı",
                description: "Otomatik şanzımanın yokuş aşağı inerken gereksiz vites büyütmesi.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "Yokuşlu Yollar",
                repairCost: "Yazılım"
            }
        ],
        pros: [
            "Sorunsuz motor/şanzıman",
            "Geniş iç hacim",
            "Sessiz sürüş"
        ],
        cons: [
            "Yüksek yakıt tüketimi",
            "Yere yakınlık",
            "Donanım (Bazı modeller)"
        ],
        buyingTips: [
            "Direksiyonu çevirirken ses var mı?",
            "Farları kontrol edin (Su alma)"
        ]
    },
];
