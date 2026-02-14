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
        totalIssues: 5,
        searchCount: 5000,
        issues: [
            {
                id: "stonic-1",
                title: "Motor Performansı",
                description: "Atmosferik motorun yokuşlarda ve yüklü durumda çekiş düşüklüğü.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Sürekli",
                repairCost: "0 TL (Karakteristik)"
            },
            {
                id: "stonic-2",
                title: "Yüksek Yakıt Tüketimi",
                description: "Şehir içi kullanımda fabrika verilerinin çok üzerine çıkan yakıt tüketimi.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Sürekli",
                repairCost: "8.000 - 15.000 TL (LPG)"
            },
            {
                id: "stonic-3",
                title: "Şanzıman Kararsızlığı",
                description: "Otomatik şanzımanın yokuşlarda vites seçiminde kararsız kalması.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "Yokuşlu Yollar",
                repairCost: "1.000 - 2.000 TL (Yazılım)"
            },
            {
                id: "stonic-4",
                title: "Trim Sesleri",
                description: "Sert plastik malzemelerden gelen tıkırtı sesleri.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Bozuk Yollar",
                repairCost: "500 - 1.500 TL (Yalıtım)"
            },
            {
                id: "stonic-5",
                title: "Multimedya Kopmaları",
                description: "Apple CarPlay / Android Auto bağlantısının sık sık kopması.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "500 - 2.000 TL (Kablo/Yazılım)"
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
        totalIssues: 4,
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
            },
            {
                id: "sportage-1-6-tgdi-auto-3",
                title: "Yağ Eksiltme",
                description: "Motor yağının servis aralarında eksilmesi. Düzenli kontrol şart.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "Segman / 5.000 - 15.000 TL"
            },
            {
                id: "sportage-1-6-tgdi-auto-4",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
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
        totalIssues: 5,
        searchCount: 12000,
        issues: [
            {
                id: "ceed-1",
                title: "Multimedya Gecikmesi",
                description: "Ekranın yavaş tepki vermesi.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "1.000 - 3.000 TL (Yazılım)"
            },
            {
                id: "ceed-2",
                title: "Turbo Boru Sesi",
                description: "1.5 T-GDI motorda turbo hortumu bağlantısından ıslık sesi.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "30.000+ km",
                repairCost: "1.500 - 3.000 TL"
            },
            {
                id: "ceed-3",
                title: "Arka Süspansiyon Sesi",
                description: "Arka süspansiyon burçlarından kasiste geçerken vuruntu sesi.",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "40.000+ km",
                repairCost: "2.000 - 4.000 TL"
            },
            {
                id: "ceed-4",
                title: "Otomatik Şanzıman Sıcak Uyarısı",
                description: "DCT şanzımanın uzun tırmanmada sıcaklık uyarısı vermesi.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "Yoğun trafik",
                repairCost: "3.000 - 6.000 TL (Şanzıman Yağı)"
            },
            {
                id: "ceed-5",
                title: "Far Buğulanması",
                description: "Yağmurlu havalarda far camlarının içinden buğulanma.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "1.000 - 3.000 TL"
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
        totalIssues: 5,
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
            },
            {
                id: "niro-ev-2",
                title: "12V Akü Boşalması",
                description: "Uzun süre park halinde 12V yardımcı akünün boşalması.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "3.000 - 5.000 TL"
            },
            {
                id: "niro-ev-3",
                title: "Şarj Kapasitesi Düşüşü (Soğuk)",
                description: "Kış aylarında menzilde %20-30 düşüş. Batarya ısıtması enerji harcar.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "0 TL (Karakteristik)"
            },
            {
                id: "niro-ev-4",
                title: "Regen Fren Titremesi",
                description: "Rejeneratif frenleme sırasında hafif titreşim ve ses.",
                category: "fren",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "1.000 - 3.000 TL (Yazılım)"
            },
            {
                id: "niro-ev-5",
                title: "Rüzgar Sesi (A Sütunu)",
                description: "Yüksek hızlarda A sütunu bölgesinden rüzgar sesi.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Yüksek hız",
                repairCost: "500 - 2.000 TL (Fitil/Yalıtım)"
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
        totalIssues: 5,
        searchCount: 22000,
        issues: [
            {
                id: "sportage-1",
                title: "PPF Sensörü",
                description: "Egzoz/Partikül sensörü hatası.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "0 TL (Garanti Kapsamı)"
            },
            {
                id: "sportage-crdi-2",
                title: "DPF Rejenerasyonu",
                description: "Şehir içi kısa mesafe kullanımda DPF filtresinin dolması. Motor uyarı lambası.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "30.000+ km",
                repairCost: "5.000 - 12.000 TL"
            },
            {
                id: "sportage-crdi-3",
                title: "Mild Hybrid 48V Batarya",
                description: "48V mild hybrid bataryasının soğukta performans kaybı ve yeniden şarj sorunu.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "60.000+ km",
                repairCost: "8.000 - 15.000 TL"
            },
            {
                id: "sportage-crdi-4",
                title: "DCT Şanzıman Titreşimi",
                description: "7 ileri DCT şanzımanın düşük hızlarda titreşim ve sarsıntı yapması.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "Şehir içi",
                repairCost: "Yazılım / 10.000 - 20.000 TL"
            },
            {
                id: "sportage-crdi-5",
                title: "Arka Kamera Buğu",
                description: "Geri görüş kamerası camının buğulanması veya su alması.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "2.000 - 4.000 TL"
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
        totalIssues: 5,
        searchCount: 5000,
        issues: [
            {
                id: "niro-1",
                title: "Debriyaj Aktüatörü",
                description: "Hidrolik debriyaj aktüatörü sızıntısı (Geri çağırma var).",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "0 TL (Garanti/Servis)"
            },
            {
                id: "niro-h-2",
                title: "Hibrit Batarya Fan Sesi",
                description: "Arka koltuk altındaki hibrit batarya fanlarının yüksek sesle çalışması.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Yaz ayları",
                repairCost: "2.000 - 4.000 TL (Fan Temizliği)"
            },
            {
                id: "niro-h-3",
                title: "Motor/Elektrik Geçiş Sarsıntısı",
                description: "Benzin motoru ve elektrik motoru arasındaki geçişlerde hafif sarsıntı.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "0 TL (Karakteristik)"
            },
            {
                id: "niro-h-4",
                title: "Rüzgar Sesi",
                description: "A sütunu bölgesinden yüksek hızlarda rüzgar gürültüsü.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "120+ km/h",
                repairCost: "500 - 1.500 TL (Fitil)"
            },
            {
                id: "niro-h-5",
                title: "Arka Süspansiyon Sesi",
                description: "Arka süspansiyon aksamından kasis geçişlerinde vuruntu sesi.",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "40.000+ km",
                repairCost: "2.000 - 5.000 TL"
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
        totalIssues: 5,
        searchCount: 8000,
        issues: [
            {
                id: "picanto-1",
                title: "AMT Şanzıman",
                description: "Vites geçişlerinde sarsıntı ve yığılma.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "1.000 - 2.000 TL (Yazılım)"
            },
            {
                id: "picanto-2",
                title: "Rölanti Titreşimi",
                description: "3 silindirli motorun rölantide titreşim yapması. Tasarım gereği.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "0 TL (Karakteristik)"
            },
            {
                id: "picanto-3",
                title: "Klima Performansı",
                description: "1.0 motorla klima açıldığında belirgin güç kaybı.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Sürekli",
                repairCost: "0 TL (Karakteristik)"
            },
            {
                id: "picanto-4",
                title: "Gürültü Yalıtımı",
                description: "Otoban hızında aşırı rüzgar ve lastik gürültüsü.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "100+ km/h",
                repairCost: "500 - 1.500 TL (Yalıtım)"
            },
            {
                id: "picanto-5",
                title: "Far Halojen Zörleşmesi",
                description: "Halojen far camlarının zamanla matlaşması ve aydınlatma kaybı.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Yaş kaynaklı",
                repairCost: "1.000 - 3.000 TL (Far Parlatma)"
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
        totalIssues: 4,
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
            },
            {
                id: "sportage-1-6-gdi-auto-3",
                title: "Yağ Eksiltme",
                description: "Motor yağının servis aralarında eksilmesi. Düzenli kontrol şart.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "Segman / 5.000 - 15.000 TL"
            },
            {
                id: "sportage-1-6-gdi-auto-4",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
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
        totalIssues: 5,
        searchCount: 14000,
        issues: [
            {
                id: "rio-1",
                title: "Debriyaj Erken Bitmesi",
                description: "Manuel vitesli modellerde debriyaj balatasının erken aşınması.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "30.000 - 50.000 km",
                repairCost: "4.000 - 8.000 TL (Baskı Balata)"
            },
            {
                id: "rio-2",
                title: "Direksiyon Kutusu Sesi",
                description: "Direksiyon kutusundan gelen tıkırtı sesi (Burç arızası).",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "Bozuk Yollar",
                repairCost: "3.000 - 7.000 TL (Tamir/Değişim)"
            },
            {
                id: "rio-3",
                title: "Yüksek Yakıt Tüketimi",
                description: "Otomatik vitesli (6AT) modellerde şehir içi yüksek tüketim.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Sürekli",
                repairCost: "8.000 - 15.000 TL (LPG)"
            },
            {
                id: "rio-4",
                title: "Trim Sesleri",
                description: "B sütunu ve torpidodan gelen plastik sesleri.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Bozuk Yollar",
                repairCost: "500 - 2.000 TL (Yalıtım)"
            },
            {
                id: "rio-5",
                title: "Klima Kompresör Sesi",
                description: "Klima açıldığında motordan gelen uğultu sesi.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "5.000 - 12.000 TL (Kompresör)"
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
        totalIssues: 5,
        searchCount: 8000,
        issues: [
            {
                id: "cerato-1",
                title: "Direksiyon Kolonu Sesi",
                description: "Elektrikli direksiyon motorundan (EPS) gelen tıkırtı sesi.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "60.000+ km",
                repairCost: "3.000 - 8.000 TL (EPS Tamiri)"
            },
            {
                id: "cerato-2",
                title: "Ateşleme Bobini Arızası",
                description: "Bobin arızası nedeniyle motorda tekleme ve sarsıntı.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "80.000+ km",
                repairCost: "1.500 - 3.000 TL (Bobin)"
            },
            {
                id: "cerato-3",
                title: "Klima Tuş Soyulması",
                description: "Klima kontrol ünitesindeki tuşların kaplamasının soyulması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "1.000 - 3.000 TL (Restorasyon)"
            },
            {
                id: "cerato-4",
                title: "Far Buğulanması",
                description: "Yağmurlu havalarda farların su alması veya buğulanması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "500 - 1.500 TL (Yalıtım)"
            },
            {
                id: "cerato-5",
                title: "Şanzıman Kararsızlığı",
                description: "Otomatik şanzımanın yokuş aşağı inerken gereksiz vites büyütmesi.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "Yokuşlu Yollar",
                repairCost: "1.000 - 2.000 TL (Yazılım)"
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

    // ─── Eski new-cars dosyasından taşındı ───
    {
        id: "kia-ceed-ed-1-6-crdi",
        slug: "kia-ceed-ed-1-6-crdi",
        brand: "Kia",
        model: "Ceed",
        variant: "ED 1.6 CRDi",
        years: "2007-2012",
        generation: "ED",
        price: 300000,
        reliabilityScore: 74,
        totalIssues: 5,
        searchCount: 7000,
        expertNote: "Ceed ED Kia'nın Avrupa için tasarladığı ilk ciddi araçtı. 1.6 CRDi motor güvenilir ve ekonomik. 5 yıl/sınırsız km garanti efsaneydi. Basit ama sağlam araç.",
        issues: [
            { id: "ceeded-1", title: "Çift Kütleli Volan", description: "Volan kütlelerinin aşınması. Rölantide metalik ses ve titreşim.", category: "sanziman", riskLevel: "HIGH", affectedKm: "80.000+ km", repairCost: "8.000 - 15.000 TL" },
            { id: "ceeded-2", title: "EGR Valfi", description: "EGR valfinde kurum birikimi.", category: "motor", riskLevel: "MEDIUM", affectedKm: "60.000+ km", repairCost: "2.000 - 5.000 TL" },
            { id: "ceeded-3", title: "Ön Rot ve Rotil", description: "Ön rot başları ve rotillerin aşınması.", category: "suspansiyon", riskLevel: "MEDIUM", affectedKm: "50.000+ km", repairCost: "1.500 - 3.000 TL" },
            { id: "ceeded-4", title: "Debriyaj Balata", description: "Şehir içi kullanımda debriyaj balatası erken biter.", category: "sanziman", riskLevel: "MEDIUM", affectedKm: "60.000+ km", repairCost: "4.000 - 7.000 TL" },
            { id: "ceeded-5", title: "Klima Kontrol Paneli", description: "Klima kontrol tuşlarının tepkisiz kalması.", category: "elektronik", riskLevel: "LOW", affectedKm: "Yaş kaynaklı", repairCost: "1.500 - 3.000 TL" }
        ],
        pros: ["Ekonomik dizel", "Geniş kabin", "Ucuz bakım", "Sağlam yapı"],
        cons: ["Volan/kavrama masraflı", "Tasarımı eski", "İç mekan sade"],
        buyingTips: ["Volan sesini dinleyin", "Debriyaj kaçını test edin", "EGR temizliği yaptırılmış mı sorun"]
    }
    ,

    // ─── Eski new-cars dosyasından taşındı ───
    {
        id: "kia-ceed-1-6-crdi",
        slug: "kia-ceed-1-6-crdi",
        brand: "Kia",
        model: "Ceed",
        variant: "1.6 CRDi",
        years: "2018-2024",
        generation: "CD",
        price: 1400000,
        reliabilityScore: 82,
        totalIssues: 5,
        searchCount: 6200,
        expertNote: "Ceed sessiz sakin aile aracıdır. 7 yıl garanti avantajı büyüktür. 1.6 CRDi motor güvenilirdir ama DPF bakımını ihmal etmeyin. DCT şanzımandan kaçın, manuel veya CVT alın.",
        issues: [
            { id: "ceed-1", title: "DCT Şanzıman Titreşimi", description: "7 ileri çift kavramalı DCT şanzımanda düşük hızlarda belirgin titreşim ve sarsıntı. Kavrama diskleri erken aşınabilir. Kia garanti kapsamında değişim yapabilir.", category: "sanziman", riskLevel: "MEDIUM", affectedKm: "40.000 - 70.000 km", repairCost: "Garanti / 25.000 TL" },
            { id: "ceed-2", title: "DPF Tıkanması", description: "Kısa mesafe şehir içi kullanımda partikül filtresi dolması. Motor arıza lambası ve güç kaybı.", category: "motor", riskLevel: "MEDIUM", affectedKm: "50.000+ km (Şehir içi)", repairCost: "8.000 - 18.000 TL" },
            { id: "ceed-3", title: "Multimedya Ekran Yavaşlığı", description: "8 inç dokunmatik ekranın geç tepki vermesi ve navigasyonun yavaş çalışması. Yazılım güncelleme kısmen iyileştirir.", category: "elektronik", riskLevel: "LOW", affectedKm: "Sürekli", repairCost: "1.500 - 4.000 TL (Yazılım)" },
            { id: "ceed-4", title: "Ön Fren Disk Eğrilmesi", description: "Yoğun şehir içi kullanımda ön fren disklerinin ısınarak eğrilmesi. Frenleme sırasında direksiyon titremesi.", category: "fren", riskLevel: "LOW", affectedKm: "40.000+ km", repairCost: "3.000 - 6.000 TL" },
            { id: "ceed-5", title: "Kapı Fitil Rüzgar Sesi", description: "100 km/s üzeri hızlarda kapı fitillerinden gelen rüzgar uğultusu ve ıslık sesi.", category: "govde", riskLevel: "LOW", affectedKm: "Kronik", repairCost: "1.000 - 3.000 TL (Fitil)" }
        ],
        pros: ["7 yıl fabrika garantisi", "Ekonomik dizel motor", "Geniş bagaj (395L)", "Dengeli sürüş"],
        cons: ["DCT şanzıman riskleri", "İmaj algısı (Kore markası)", "İkinci el değer kaybı"],
        buyingTips: ["Garanti süresi ne kadar kaldı kontrol edin", "DCT varsa titreşim testi yapın", "DPF doluluk taraması yaptırın"]
    }
    ,

    // ─── Eski new-cars dosyasından taşındı ───
    {
        id: "kia-ceed-sw-1-5-tgdi",
        slug: "kia-ceed-sw-1-5-tgdi",
        brand: "Kia",
        model: "Ceed",
        variant: "SW 1.5 T-GDi DCT Prestige",
        years: "2021-2025",
        generation: "CD Facelift",
        price: 1300000,
        expertNote: "Station wagon severlerin yeni gözdesi. 7 yıl garanti hala geçerli. 1.5 T-GDi motor canlıdır. DCT şanzıman trafikte ısınabilir ama genel olarak sorunsuzdur. Bagajı muazzamdır.",
        reliabilityScore: 86,
        totalIssues: 5,
        searchCount: 22000,
        issues: [
            {
                id: "ceed-sw-1",
                title: "DCT Şanzıman Isınması",
                description: "Yoğun trafikte DCT çift kavramalı şanzımanın ısınma uyarısı vermesi. Kenara çekip bekleme gerekir.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "Trafikte",
                repairCost: "0 TL (Karakteristik)"
            },
            {
                id: "ceed-sw-2",
                title: "GPF Tıkanıklığı",
                description: "Benzin partikül filtresinin şehir içi kullanımda dolması. Motor uyarı verir.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Şehir içi",
                repairCost: "2.000 - 5.000 TL (DPF Rejenerasyon)"
            },
            {
                id: "ceed-sw-3",
                title: "Multimedya Donması",
                description: "10.25 inç ekranın donması ve geç tepki vermesi.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "1.000 - 3.000 TL (Yazılım)"
            },
            {
                id: "ceed-sw-4",
                title: "Arka Fren Gıcırtısı",
                description: "Arka disk frenlerde sabah ilk kullanımda gıcırtı sesi. Nem ve pas kaynaklıdır.",
                category: "fren",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "2.000 - 5.000 TL (Balata/Disk)"
            },
            {
                id: "ceed-sw-5",
                title: "Rüzgar Sesi (A Sütunu)",
                description: "100+ km/s hızlarda A sütunu ve aynadan gelen rüzgar sesi.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "100+ km/s",
                repairCost: "500 - 1.500 TL (Fitil)"
            }
        ],
        pros: [
            "Devasa bagaj (625L)",
            "7 yıl garanti",
            "Canlı motor"
        ],
        cons: [
            "DCT trafikte ısınır",
            "Sert plastik aksamlar",
            "Station wagon imajı"
        ],
        buyingTips: [
            "7 yıl garanti hala geçerli mi kontrol edin",
            "SW (station wagon) versiyonunu tercih edin — bagajı muazzam",
            "DCT şanzıman trafikte test edin"
        ]
    }
    ,

    // ─── Eski new-cars dosyasından taşındı ───
    {
        id: "kia-cerato-2010-1-6-crdi",
        slug: "kia-cerato-2010-1-6-crdi",
        brand: "Kia",
        model: "Cerato",
        variant: "1.6 CRDi",
        years: "2009-2013",
        generation: "TD",
        price: 320000,
        reliabilityScore: 74,
        totalIssues: 5,
        searchCount: 8000,
        expertNote: "Cerato TR'de çok satılan uygun fiyatlı sedandı. 1.6 CRDi motor güvenilir ve ekonomik. Debriyaj ve süspansiyon parçaları aşınır ama ucuza onarılır. Fiyat/performans kralı.",
        issues: [
            { id: "cerato10-1", title: "Debriyaj Balata Aşınması", description: "Şehir içi trafik kullanımda debriyaj balatası erken biter. Kavrama kaçırma.", category: "sanziman", riskLevel: "MEDIUM", affectedKm: "60.000 - 80.000 km", repairCost: "4.000 - 8.000 TL" },
            { id: "cerato10-2", title: "Ön Rot ve Rotil", description: "Ön rot başları ve rotillerin aşınması. Direksiyon boşluğu.", category: "suspansiyon", riskLevel: "MEDIUM", affectedKm: "50.000+ km", repairCost: "1.500 - 3.000 TL" },
            { id: "cerato10-3", title: "Egzoz Esnek Boru", description: "Egzoz esnek borusunun çatlaması. Egzoz sesi artışı.", category: "motor", riskLevel: "LOW", affectedKm: "80.000+ km", repairCost: "1.500 - 3.000 TL" },
            { id: "cerato10-4", title: "Kapı Kilit Aktüatörü", description: "Merkezi kilit aktüatörlerinin bozulması.", category: "elektronik", riskLevel: "LOW", affectedKm: "60.000+ km", repairCost: "1.000 - 2.000 TL" },
            { id: "cerato10-5", title: "Klima Radyatör Sızıntısı", description: "Klima kondenseri (ön radyatör) delinmesi veya sızıntısı. Klima soğutmaz.", category: "elektronik", riskLevel: "LOW", affectedKm: "80.000+ km", repairCost: "3.000 - 5.000 TL" }
        ],
        pros: ["Çok uygun fiyat", "Ekonomik dizel", "Ucuz bakım", "Geniş kabin"],
        cons: ["İç mekan plastiği zayıf", "Gürültü yalıtımı orta", "Donanım sade"],
        buyingTips: ["Debriyaj kaçını test edin", "Alt takım kontrolü yaptırın", "Klima soğutuyor mu kontrol edin"]
    }
    ,
    {
        "id": "kia-sportage-ql-1-6-crdi",
        "slug": "kia-sportage-ql-1-6-crdi",
        "brand": "Kia",
        "model": "Sportage (QL)",
        "variant": "1.6 CRDi DCT 4x4 GT-Line",
        "years": "2016-2021",
        "generation": "QL",
        "price": 1400000,
        "expertNote": "U3 1.6 CRDi 136 HP + 7DCT. Sportage QL Türkiye'de premium SUV segmentinde çok satıldı. 7 yıl garanti avantajı. DCT şanzıman hassas ama motor sağlam.",
        "reliabilityScore": 81,
        "totalIssues": 5,
        "searchCount": 16000,
        "issues": [
            {
                "id": "spql-1",
                "title": "DCT Kavrama Titremesi",
                "description": "7DCT şanzımanda düşük hızlarda titreme.",
                "category": "sanziman",
                "riskLevel": "MEDIUM",
                "affectedKm": "50.000+ km",
                "repairCost": "12.000 - 25.000 TL"
            },
            {
                "id": "spql-2",
                "title": "DPF Tıkanması",
                "description": "Şehir içi kullanımda DPF dolması.",
                "category": "motor",
                "riskLevel": "MEDIUM",
                "affectedKm": "Şehir içi",
                "repairCost": "5.000 - 12.000 TL"
            },
            {
                "id": "spql-3",
                "title": "Turbo Hortumu",
                "description": "Turbo bağlantı hortumunun çatlaması.",
                "category": "motor",
                "riskLevel": "MEDIUM",
                "affectedKm": "80.000+ km",
                "repairCost": "3.000 - 6.000 TL"
            },
            {
                "id": "spql-4",
                "title": "Panoramik Tavan Sesi",
                "description": "Panoramik cam tavandan rüzgar sesi.",
                "category": "govde",
                "riskLevel": "LOW",
                "affectedKm": "120+ km/h",
                "repairCost": "500 - 2.000 TL (Fitil)"
            },
            {
                "id": "spql-5",
                "title": "Arka Kamera Buğulanması",
                "description": "Geri görüş kamerası lensinin buğulanması.",
                "category": "elektronik",
                "riskLevel": "LOW",
                "affectedKm": "Nem/kış",
                "repairCost": "1.500 - 3.000 TL"
            }
        ],
        "pros": [
            "7 yıl garanti",
            "Geniş iç mekan",
            "4x4 güvenliği",
            "GT-Line tasarım"
        ],
        "cons": [
            "DCT hassasiyeti",
            "DPF riski",
            "Parça fiyatları artıyor"
        ],
        "buyingTips": [
            "DCT trafikte test edin",
            "GT-Line donanım tercih edin",
            "DPF taraması yaptırın"
        ]
    }
    ,
    {
        "id": "kia-ceed-jd-1-6-crdi",
        "slug": "kia-ceed-jd-1-6-crdi",
        "brand": "Kia",
        "model": "Cee'd (JD)",
        "variant": "1.6 CRDi DCT Premium",
        "years": "2012-2018",
        "generation": "JD",
        "price": 700000,
        "expertNote": "U2 1.6 CRDi 128-136 HP + 7DCT. Cee'd JD Türkiye'de 7 yıl garantisiyle öne çıktı. Golf rakibi ama daha uygun fiyatlı. DCT hassas ama motor sağlam.",
        "reliabilityScore": 79,
        "totalIssues": 5,
        "searchCount": 10000,
        "issues": [
            {
                "id": "ceedjd-1",
                "title": "DCT Kavrama",
                "description": "7DCT şanzımanda kavrama aşınması. Titreme.",
                "category": "sanziman",
                "riskLevel": "MEDIUM",
                "affectedKm": "60.000+ km",
                "repairCost": "10.000 - 22.000 TL"
            },
            {
                "id": "ceedjd-2",
                "title": "DPF Tıkanması",
                "description": "Şehir içi kullanımda DPF dolması.",
                "category": "motor",
                "riskLevel": "MEDIUM",
                "affectedKm": "Şehir içi",
                "repairCost": "5.000 - 10.000 TL"
            },
            {
                "id": "ceedjd-3",
                "title": "Direksiyon Kolonu",
                "description": "Direksiyon kolonundan gıcırtı sesi.",
                "category": "suspansiyon",
                "riskLevel": "LOW",
                "affectedKm": "40.000+ km",
                "repairCost": "1.500 - 3.000 TL"
            },
            {
                "id": "ceedjd-4",
                "title": "Arka Fren Diski",
                "description": "Arka fren disk eğrilmesi.",
                "category": "fren",
                "riskLevel": "LOW",
                "affectedKm": "40.000+ km",
                "repairCost": "2.000 - 4.000 TL"
            },
            {
                "id": "ceedjd-5",
                "title": "AVN Multimedya",
                "description": "AVN navigasyon sisteminin yavaşlaması.",
                "category": "elektronik",
                "riskLevel": "LOW",
                "affectedKm": "Yaş kaynaklı",
                "repairCost": "1.500 - 4.000 TL (Yazılım)"
            }
        ],
        "pros": [
            "7 yıl garanti",
            "Golf rakibi",
            "Uygun fiyat",
            "Geniş iç mekan"
        ],
        "cons": [
            "DCT hassasiyeti",
            "DPF riski",
            "Marka algısı"
        ],
        "buyingTips": [
            "DCT trafikte test edin",
            "Premium donanım",
            "DPF taraması"
        ]
    }
    ,
    {
        "id": "kia-rio-4-1-4-mpi",
        "slug": "kia-rio-4-1-4-mpi-cool",
        "brand": "Kia",
        "model": "Rio (YB)",
        "variant": "1.4 MPI Cool Plus",
        "years": "2017-2023",
        "generation": "YB",
        "price": 700000,
        "expertNote": "Kappa 1.4 MPI 100 HP + 6AT. Rio YB Türkiye'de genç sürücülerin favorisi. Motor doğal emişli ve çok güvenilir. 6AT sorunsuz. 7 yıl garanti avantajı.",
        "reliabilityScore": 84,
        "totalIssues": 5,
        "searchCount": 11000,
        "issues": [
            {
                "id": "rio4-1",
                "title": "CVT/AT Sarsıntısı",
                "description": "6AT soğukta hafif sert vites geçişi.",
                "category": "sanziman",
                "riskLevel": "LOW",
                "affectedKm": "Soğuk hava",
                "repairCost": "3.000 - 6.000 TL (Yağ Değişimi)"
            },
            {
                "id": "rio4-2",
                "title": "Direksiyon Sesi",
                "description": "Direksiyon çevirirken hafif ses.",
                "category": "suspansiyon",
                "riskLevel": "LOW",
                "affectedKm": "40.000+ km",
                "repairCost": "1.000 - 2.000 TL"
            },
            {
                "id": "rio4-3",
                "title": "Arka Fren Kampanası",
                "description": "Arka kampanalı fren aşınması.",
                "category": "fren",
                "riskLevel": "LOW",
                "affectedKm": "40.000+ km",
                "repairCost": "1.000 - 2.000 TL"
            },
            {
                "id": "rio4-4",
                "title": "Cam Fitili",
                "description": "Cam fitillerinin sertleşmesi.",
                "category": "govde",
                "riskLevel": "LOW",
                "affectedKm": "Yaş kaynaklı",
                "repairCost": "500 - 1.500 TL"
            },
            {
                "id": "rio4-5",
                "title": "Multimedya",
                "description": "AVN navigasyon gecikmeleri.",
                "category": "elektronik",
                "riskLevel": "LOW",
                "affectedKm": "Tasarım",
                "repairCost": "0 TL (Karakteristik)"
            }
        ],
        "pros": [
            "7 yıl garanti",
            "Güvenilir motor",
            "6AT sorunsuz",
            "Modern tasarım"
        ],
        "cons": [
            "100 HP az",
            "Arka alan dar",
            "Bagaj küçük"
        ],
        "buyingTips": [
            "Cool Plus donanım alın",
            "6AT tercih edin",
            "Garanti hâlâ var mı kontrol edin"
        ]
    }
    ,
    {
        "id": "kia-sephia-1-5-gtx",
        "slug": "kia-sephia-1-5-gtx",
        "brand": "Kia",
        "model": "Sephia",
        "variant": "1.5 GTX",
        "years": "1994-2001",
        "generation": "FA",
        "price": 60000,
        "expertNote": "B5 1.5 80 HP (Mazda 323 tabanlı). Sephia Kia'nın ilk dünya pazarı aracı. Mazda motorlu güvenilir. Türkiye'de çok ucuza satıldı. Yedek parça hâlâ var.",
        "reliabilityScore": 70,
        "totalIssues": 5,
        "searchCount": 6000,
        "issues": [
            {
                "id": "sep-1",
                "title": "Motor Conta",
                "description": "Silindir kapağı contası atma riski.",
                "category": "motor",
                "riskLevel": "MEDIUM",
                "affectedKm": "120.000+ km",
                "repairCost": "1.500 - 3.000 TL"
            },
            {
                "id": "sep-2",
                "title": "Kaporta Pası",
                "description": "Ciddi paslanma sorunu.",
                "category": "govde",
                "riskLevel": "HIGH",
                "affectedKm": "Yaş kaynaklı",
                "repairCost": "5.000 - 15.000 TL (Boya/Kaynak)"
            },
            {
                "id": "sep-3",
                "title": "Şanzıman Senkromece",
                "description": "Manuel şanzıman senkromece aşınması.",
                "category": "sanziman",
                "riskLevel": "MEDIUM",
                "affectedKm": "100.000+ km",
                "repairCost": "2.000 - 4.000 TL"
            },
            {
                "id": "sep-4",
                "title": "Elektrik",
                "description": "Elektrik tesisatı sorunları.",
                "category": "elektronik",
                "riskLevel": "LOW",
                "affectedKm": "Yaş kaynaklı",
                "repairCost": "500 - 1.500 TL"
            },
            {
                "id": "sep-5",
                "title": "Egzoz",
                "description": "Egzoz sistemi çürümesi.",
                "category": "motor",
                "riskLevel": "LOW",
                "affectedKm": "Yaş kaynaklı",
                "repairCost": "500 - 1.500 TL"
            }
        ],
        "pros": [
            "Çok ucuz",
            "Mazda motoru",
            "Basit mekanik",
            "Yedek parça var"
        ],
        "cons": [
            "Pas kabusu",
            "Düşük kalite",
            "Güvenlik yok",
            "Konfor az"
        ],
        "buyingTips": [
            "Mazda B5 motor güvenilir",
            "Pas kontrolü ŞART",
            "GTX donanım en iyisi",
            "Çok ucuz ama dikkatli olun"
        ]
    }
    ,
    {
        "id": "kia-ceed-1-6-crdi",
        "slug": "kia-ceed-jd-1-6-crdi-concept-plus",
        "brand": "Kia",
        "model": "Cee'd",
        "variant": "JD 1.6 CRDi Concept Plus",
        "years": "2012-2018",
        "generation": "JD",
        "price": 400000,
        "expertNote": "D4FB 1.6 CRDi 128 HP. Cee'd JD i30'un kardeşi (Hyundai-Kia platformu). İzmit üretimi. Concept Plus donanım zengin. 7 yıl garanti ile ünlü.",
        "reliabilityScore": 76,
        "totalIssues": 5,
        "searchCount": 12000,
        "issues": [
            {
                "id": "ced-1",
                "title": "DCT Şanzıman",
                "description": "7DCT çift kavrama titreşimi.",
                "category": "sanziman",
                "riskLevel": "HIGH",
                "affectedKm": "60.000+ km",
                "repairCost": "8.000 - 18.000 TL"
            },
            {
                "id": "ced-2",
                "title": "Turbo",
                "description": "Turbo aktuatör arızası.",
                "category": "motor",
                "riskLevel": "MEDIUM",
                "affectedKm": "100.000+ km",
                "repairCost": "3.000 - 6.000 TL"
            },
            {
                "id": "ced-3",
                "title": "EGR",
                "description": "EGR valfi tıkanması.",
                "category": "motor",
                "riskLevel": "MEDIUM",
                "affectedKm": "80.000+ km",
                "repairCost": "2.000 - 4.000 TL"
            },
            {
                "id": "ced-4",
                "title": "Süspansiyon",
                "description": "Arka burç aşınması.",
                "category": "suspansiyon",
                "riskLevel": "LOW",
                "affectedKm": "50.000+ km",
                "repairCost": "500 - 1.500 TL"
            },
            {
                "id": "ced-5",
                "title": "Multimedya",
                "description": "Multimedya donması.",
                "category": "elektronik",
                "riskLevel": "LOW",
                "affectedKm": "Kronik",
                "repairCost": "500 - 1.500 TL"
            }
        ],
        "pros": [
            "7 yıl garanti",
            "İzmit üretimi",
            "Concept Plus zengin",
            "i30 ikizi"
        ],
        "cons": [
            "DCT riskli",
            "Dizel bakım pahalı",
            "Değer kaybı",
            "Plastik kalite"
        ],
        "buyingTips": [
            "Manuel tercih edin",
            "DCT'den kaçının",
            "7 yıl garanti avantajı",
            "i30 ile parça ortaklığı"
        ]
    }
    ,
    {
        "id": "kia-sportage-ql-1-6-crdi",
        "slug": "kia-sportage-ql-1-6-crdi-concept-plus",
        "brand": "Kia",
        "model": "Sportage",
        "variant": "QL 1.6 CRDi Concept Plus",
        "years": "2016-2021",
        "generation": "QL",
        "price": 850000,
        "expertNote": "D4FE 1.6 CRDi 136 HP. Sportage QL Tucson'un kardeşi. Güçlü tasarım, iyi donanım. Concept Plus 8 inç ekran, CarPlay, kör nokta. 7 yıl garanti.",
        "reliabilityScore": 76,
        "totalIssues": 5,
        "searchCount": 14000,
        "issues": [
            {
                "id": "spo-1",
                "title": "DCT",
                "description": "7DCT çift kavrama titreşimi.",
                "category": "sanziman",
                "riskLevel": "HIGH",
                "affectedKm": "60.000+ km",
                "repairCost": "8.000 - 18.000 TL"
            },
            {
                "id": "spo-2",
                "title": "Turbo",
                "description": "Turbo wastegate arızası.",
                "category": "motor",
                "riskLevel": "MEDIUM",
                "affectedKm": "100.000+ km",
                "repairCost": "4.000 - 8.000 TL"
            },
            {
                "id": "spo-3",
                "title": "EGR",
                "description": "EGR valfi.",
                "category": "motor",
                "riskLevel": "MEDIUM",
                "affectedKm": "80.000+ km",
                "repairCost": "2.000 - 5.000 TL"
            },
            {
                "id": "spo-4",
                "title": "Süspansiyon",
                "description": "Ön amortisör gıcırtısı.",
                "category": "suspansiyon",
                "riskLevel": "LOW",
                "affectedKm": "40.000+ km",
                "repairCost": "1.000 - 2.500 TL"
            },
            {
                "id": "spo-5",
                "title": "Infotainment",
                "description": "Multimedya donması.",
                "category": "elektronik",
                "riskLevel": "LOW",
                "affectedKm": "Kronik",
                "repairCost": "500 - 2.000 TL"
            }
        ],
        "pros": [
            "Güçlü tasarım",
            "7 yıl garanti",
            "Concept Plus zengin",
            "C-SUV"
        ],
        "cons": [
            "DCT riskli",
            "Dizel bakım pahalı",
            "Fiyat yüksek",
            "Yakıt tüketimi"
        ],
        "buyingTips": [
            "Manuel veya torque converter otomatik tercih",
            "DCT'den kaçının",
            "Tucson'la karşılaştırın",
            "7 yıl garanti avantaj"
        ]
    }
    ,
    {
        "id": "kia-rio-1-4-crdi",
        "slug": "kia-rio-ub-1-4-crdi-concept",
        "brand": "Kia",
        "model": "Rio",
        "variant": "UB 1.4 CRDi Concept",
        "years": "2011-2017",
        "generation": "UB",
        "price": 300000,
        "expertNote": "U-II 1.4 CRDi 90 HP. Rio UB küçük şehir aracı. Euro NCAP 5 yıldız. Concept donanım 7 inç ekran, geri kamera. 7 yıl garanti.",
        "reliabilityScore": 75,
        "totalIssues": 5,
        "searchCount": 10000,
        "issues": [
            {
                "id": "rio-1",
                "title": "Turbo",
                "description": "Turbo aktuatör.",
                "category": "motor",
                "riskLevel": "MEDIUM",
                "affectedKm": "100.000+ km",
                "repairCost": "3.000 - 6.000 TL"
            },
            {
                "id": "rio-2",
                "title": "Enjektör",
                "description": "CRDi enjektör.",
                "category": "motor",
                "riskLevel": "MEDIUM",
                "affectedKm": "120.000+ km",
                "repairCost": "3.000 - 6.000 TL"
            },
            {
                "id": "rio-3",
                "title": "Süspansiyon",
                "description": "Ön amortisör aşınması.",
                "category": "suspansiyon",
                "riskLevel": "LOW",
                "affectedKm": "40.000+ km",
                "repairCost": "500 - 1.500 TL"
            },
            {
                "id": "rio-4",
                "title": "Klima",
                "description": "Klima gazı kaçağı.",
                "category": "elektronik",
                "riskLevel": "LOW",
                "affectedKm": "Yaş kaynaklı",
                "repairCost": "500 - 1.000 TL"
            },
            {
                "id": "rio-5",
                "title": "Cam Kaldırma",
                "description": "Cam kaldırma mekanizması.",
                "category": "govde",
                "riskLevel": "LOW",
                "affectedKm": "Yaş kaynaklı",
                "repairCost": "400 - 800 TL"
            }
        ],
        "pros": [
            "7 yıl garanti",
            "5 yıldız güvenlik",
            "Ekonomik",
            "Ucuz bakım"
        ],
        "cons": [
            "90 HP yeterli ama az",
            "Küçük araç",
            "Plastik kalite",
            "Gürültülü"
        ],
        "buyingTips": [
            "Benzinli 1.25 daha sorunsuz",
            "Concept donanım iyi",
            "7 yıl garanti avantajı",
            "İlk araç ideal"
        ]
    }
    ,
    {
        "id": "kia-sportage-ql-fl",
        "slug": "kia-sportage-ql-facelift-1-6-crdi-gt-line",
        "brand": "Kia",
        "model": "Sportage",
        "variant": "Sportage QL Facelift 1.6 CRDi GT Line",
        "years": "2019-2021",
        "generation": "Ara Kasa (2019-2021)",
        "price": 1000000,
        "expertNote": "QL facelift'te ön ızgara, LED farlar ve arka stoplar değişti. 48V mild hybrid sistem eklendi — yakıt tasarrufu sağlıyor. DCT şanzıman kaldırılıp 6AT geldi (bazı pazarlarda). ADAS güvenlik sistemleri geliştirildi.",
        "reliabilityScore": 74,
        "totalIssues": 4,
        "searchCount": 12100,
        "issues": [
            {
                "id": "kia-sqfl-1",
                "title": "48V Mild Hybrid Akü Ömrü",
                "description": "48V lithium-ion akü 5-7 yıl sonra kapasite kaybedebilir. Değişim maliyeti yüksek.",
                "category": "elektronik",
                "riskLevel": "MEDIUM",
                "affectedKm": "100.000+ km / 5+ yıl",
                "repairCost": "5.000 - 12.000 TL"
            },
            {
                "id": "kia-sqfl-2",
                "title": "Otomatik Şanzıman Adaptasyon",
                "description": "6AT şanzıman zaman zaman adaptasyon kaybı yapabilir. Yazılım sıfırlama ile çözülür. DCT'ye göre çok daha güvenilir.",
                "category": "sanziman",
                "riskLevel": "LOW",
                "affectedKm": "50.000+ km",
                "repairCost": "0 - 1.500 TL"
            },
            {
                "id": "kia-sqfl-3",
                "title": "ADAS Sensör Kalibrasyonu",
                "description": "Gelişmiş sürüş destek sistemleri cam değişimi veya tampon hasarı sonrası kalibrasyon gerektirir.",
                "category": "elektronik",
                "riskLevel": "MEDIUM",
                "affectedKm": "Tüm km",
                "repairCost": "2.000 - 5.000 TL"
            },
            {
                "id": "kia-sqfl-4",
                "title": "LED Far Buğulanma",
                "description": "LED farlar içinde buğulanma olabilir. Conta değişimi ile çözülür.",
                "category": "elektronik",
                "riskLevel": "LOW",
                "affectedKm": "Tüm km",
                "repairCost": "500 - 2.000 TL"
            }
        ],
        "pros": [
            "DCT kaldırılmış olabilir (6AT daha güvenilir)",
            "48V mild hybrid yakıt tasarrufu",
            "Gelişmiş ADAS güvenlik",
            "LED farlar standart",
            "7 yıl Kia garantisi"
        ],
        "cons": [
            "48V akü gelecekte pahalı",
            "ADAS kalibrasyon maliyeti",
            "Pre-facelift'e göre fiyat farkı yüksek"
        ],
        "buyingTips": [
            "DCT mi 6AT mi olduğunu mutlaka teyit edin",
            "48V sistemin sağlığını kontrol edin",
            "Kia garantisi hâlâ devam ediyor mu bakın",
            "Pre-facelift QL'ye göre daha rafine"
        ]
    }
];
