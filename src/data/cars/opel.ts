import { Car } from '@/types';

export const opelCars: Car[] = [
    {
        id: "opel-corsa-1-2-turbo",
        slug: "opel-corsa-1-2-turbo",
        brand: "Opel",
        model: "Corsa",
        variant: "1.2 Turbo",
        years: "2019-2024",
        generation: "Corsa F",
        reliabilityScore: 79,
        totalIssues: 2,
        searchCount: 8800,
        issues: [
            {
                id: "corsa-1",
                title: "Triger Kayışı Ufalanması (Wet Belt)",
                description: "PSA grubu 1.2 motorlarda kayışın yağda çözünüp parçalanması (Motor kilitler).",
                category: "motor",
                riskLevel: "CRITICAL",
                affectedKm: "40.000 - 60.000 km",
                repairCost: "40.000 - 100.000 TL"
            },
            {
                id: "corsa-2",
                title: "Aşırı Yağ Tüketimi",
                description: "1.2 Turbo motorlarda segman ve valf kaynaklı yağ yakma.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "60.000+ km",
                repairCost: "25.000 - 50.000 TL (Revizyon)"
            },
            {
                id: "corsa-3",
                title: "Tavan Boyası Atması",
                description: "Siyah tavanlı (çift renk) modellerde boyanın soyulması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "3-4 Yıl",
                repairCost: "5.000 - 10.000 TL (Kaplama)"
            },
            {
                id: "corsa-4",
                title: "Multimedya ve Ekran Kararması",
                description: "IntelliLink ekranın donması veya geri görüş kamerasının gitmesi.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Yazılım / Değişim"
            },
            {
                id: "corsa-5",
                title: "Turbo Hortumu Çatlaması",
                description: "Plastik turbo borularının zamanla sertleşip hava kaçırması (Çekiş düşüklüğü).",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "50.000+ km",
                repairCost: "5.000 - 10.000 TL"
            }
        ],
        pros: [
            "Sportif sürüş",
            "EAT8 (Sorunsuz otomatik)",
            "Donanım (Matrix LED)"
        ],
        cons: [
            "Arka yaşam alanı dar",
            "Triger riski"
        ],
        buyingTips: [
            "Triger kontrolü yaptırın (Motor kapağından görünebilir)",
            "130hp olanı tercih edin"
        ]
    },
    {
        id: "opel-astra-1-2-turbo",
        slug: "opel-astra-1-2-turbo",
        brand: "Opel",
        model: "Astra",
        variant: "1.2 Turbo",
        years: "2022-2024",
        generation: "L",
        price: 1550000,
        reliabilityScore: 80,
        totalIssues: 2,
        searchCount: 9800,
        issues: [
            {
                id: "astra-l-1",
                title: "Triger Kayışı Ufalanması (Wet Belt)",
                description: "Yağ içinde çalışan triger kayışının parçalanarak yağ pompasını tıkaması (Kritik).",
                category: "motor",
                riskLevel: "CRITICAL",
                affectedKm: "40.000+ km",
                repairCost: "40.000 - 70.000 TL"
            },
            {
                id: "astra-l-2",
                title: "Aşırı Yağ Tüketimi",
                description: "Segmanlardan veya PCV valfinden kaynaklı yağ yakma sorunu.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "60.000+ km",
                repairCost: "10.000 - 30.000 TL"
            },
            {
                id: "astra-l-3",
                title: "Pure Panel Ekran Kararması",
                description: "Gösterge ve multimedya ekranlarının kararması veya donması.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Yazılım / Ekran Değişimi"
            },
            {
                id: "astra-l-4",
                title: "EAT8 Şanzıman Sarsıntısı",
                description: "Düşük hızlarda vites geçişlerinde kararsızlık ve sarsıntı.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "Şehir İçi",
                repairCost: "Yazılım"
            },
            {
                id: "astra-l-5",
                title: "Ön Tampon/Far Ayarsızlığı",
                description: "Fabrikasyon montaj hataları nedeniyle panel aralıklarının eşit olmaması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "0 km'den itibaren",
                repairCost: "Ayar"
            }
        ],
        pros: [
            "Keskin tasarım",
            "Pure Panel ekran",
            "Tok sürüş"
        ],
        cons: [
            "Sert süspansiyon",
            "Arka camlar küçük"
        ],
        buyingTips: [
            "Kameraları kontrol edin",
            "Yazılım güncel mi?"
        ]
    },
    {
        id: "opel-mokka-1-2-turbo",
        slug: "opel-mokka-1-2-turbo",
        brand: "Opel",
        model: "Mokka",
        variant: "1.2 Turbo",
        years: "2021-2024",
        generation: "B",
        reliabilityScore: 81,
        totalIssues: 2,
        searchCount: 9200,
        issues: [
            {
                id: "mokka-2",
                title: "Triger Kayışı",
                description: "1.2 motorlarda triger kayışı kontrolü şart.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "60.000+ km",
                repairCost: "15.000 TL"
            },
            {
                id: "mokka-1",
                title: "Start Stop",
                description: "Start stop devreye girmeme sorunu (Akü).",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Akü kaynaklı",
                repairCost: "Akü değişimi"
            }
        ],
        pros: [
            "Tasarım ikonu",
            "Donanım",
            "Şehir içi kullanım"
        ],
        cons: [
            "İç mekan dar",
            "Bagaj küçük"
        ],
        buyingTips: [
            "Akü durumuna bakın",
            "Triger kontrolü yapıldı mı?"
        ]
    },
    {
        id: "opel-crossland-1-2-turbo",
        slug: "opel-crossland-1-2-turbo",
        brand: "Opel",
        model: "Crossland",
        variant: "1.2 Turbo",
        years: "2020-2024",
        generation: "Mk1",
        reliabilityScore: 45,
        totalIssues: 2,
        searchCount: 7000,
        issues: [
            {
                id: "crossland-1",
                title: "TRİGER KAYIŞI ERİMESİ",
                description: "1.2 PureTech motorun yağı benzine karışır, kayışı eritir ve motoru kilitler. MOTOR SANDIK RİSKİ.",
                category: "motor",
                riskLevel: "CRITICAL",
                affectedKm: "40.000+ km",
                repairCost: "150.000+ TL (Sandık Motor)"
            },
            {
                id: "crossland-2",
                title: "Amortisör Sesi",
                description: "Süspansiyon çalışma sesi (Lokurtu).",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "0"
            }
        ],
        pros: [
            "Fonksiyonellik",
            "Genişlik",
            "Fiyat"
        ],
        cons: [
            "Eski platform",
            "Rüzgar sesi"
        ],
        buyingTips: [
            "Kol dayama sağlam mı bakın"
        ]
    },
    {
        id: "opel-astra-k-14t",
        slug: "opel-astra-k-1-4-turbo",
        brand: "Opel",
        model: "Astra",
        variant: "K 1.4 Turbo Excellence",
        years: "2015-2021",
        generation: "K",
        price: 1400000,
        reliabilityScore: 78,
        totalIssues: 3,
        searchCount: 14200,
        issues: [
            {
                id: "astrak-1",
                title: "LSPI (Piston Kırma)",
                description: "Düşük devirde yüksek yük altında piston segmanlarında hasar riski (Dexos1 Gen2 yağ kullanılmalı).",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "Rastgele",
                repairCost: "60.000 - 100.000 TL"
            },
            {
                id: "astrak-3",
                title: "Direksiyon Kolon Kilidi",
                description: "Aracın çalışmamasına neden olan elektronik kilit arızası.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "8.000 - 15.000 TL"
            },
            {
                id: "astrak-2",
                title: "Matrix LED Far",
                description: "Far beyni arızası veya led modüllerin sönmesi.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "5+ Yıl",
                repairCost: "20.000 - 40.000 TL"
            }
        ],
        pros: [
            "Matrix LED farlar",
            "Performans",
            "Şık tasarım"
        ],
        cons: [
            "Piston kırma riski (yağ seçimi kritik)",
            "Trim sesleri"
        ],
        buyingTips: [
            "Yetkili servis bakımlı olmasına ve doğru yağ (Dexos1 Gen2) kullanılmasına dikkat edin."
        ]
    },
    {
        id: "opel-grandland-x",
        slug: "opel-grandland-x-1-2-turbo",
        brand: "Opel",
        model: "Grandland X",
        variant: "1.2 Turbo",
        years: "2017-2024",
        generation: "A",
        reliabilityScore: 78,
        totalIssues: 2,
        searchCount: 9000,
        issues: [
            {
                id: "grandland-1",
                title: "Triger Kayışı (Wet Belt)",
                description: "Yağ içinde çalışan kayışın deformasyonu (1.2 PureTech).",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "60.000+ km",
                repairCost: "30.000 TL"
            },
            {
                id: "grandland-2",
                title: "Yağ Eksiltme",
                description: "Yüksek yağ tüketimi.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Sürekli",
                repairCost: "Motor Revizyonu"
            }
        ],
        pros: [
            "AGR koltuklar",
            "Yalıtım",
            "Fiyat"
        ],
        cons: [
            "PSA grubu kronik sorunları",
            "Multimedya"
        ],
        buyingTips: [
            "Triger kayışını mutlaka kontrol ettirin."
        ]
    },
    {
        id: "opel-insignia-a-1-6-turbo",
        slug: "opel-insignia-a-1-6-turbo",
        brand: "Opel",
        model: "Insignia",
        variant: "1.6 Turbo Cosmo",
        years: "2009-2017",
        generation: "Insignia A",
        expertNote: "Zamanının makam aracı. 180 beygirlik modeline \"LPG takılmaz\" derler, takan pişman olur (Subap erir). 1.6 CDTi dizel olanı (Fısıltı dizeli) makbuldür ama zincir sesi yapar.",
        price: 850000,
        reliabilityScore: 75,
        totalIssues: 4,
        searchCount: 16000,
        issues: [
            {
                id: "insignia-1",
                title: "Subap Erimesi",
                description: "1.6 Turbo (180hp) araçlarda LPG kaynaklı motor hasarı.",
                category: "motor",
                riskLevel: "CRITICAL",
                affectedKm: "60.000+ km (LPG)",
                repairCost: "40.000 - 70.000 TL"
            },
            {
                id: "insignia-3",
                title: "AFL Far Beyni",
                description: "Akıllı far sisteminin su alıp bozulması (Çok pahalı).",
                category: "elektronik",
                riskLevel: "HIGH",
                affectedKm: "Yağmurlu bölgeler",
                repairCost: "15.000 - 25.000 TL (Adet)"
            },
            {
                id: "insignia-4",
                title: "Zincir Sesi",
                description: "1.6 CDTi dizel motorlarda zincir şırıltısı (Kronik).",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "80.000+ km",
                repairCost: "20.000 - 35.000 TL"
            },
            {
                id: "insignia-2",
                title: "Turbo Arızası",
                description: "Turbonun yağ kaçırması veya ötmesi.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "100.000+ km",
                repairCost: "15.000 - 30.000 TL"
            }
        ],
        pros: [
            "Mükemmel yol tutuş",
            "Konfor",
            "Güvenlik (Tank gibi)"
        ],
        cons: [
            "Ağır kasa",
            "Çok yakar",
            "Elektronik sorunlar"
        ],
        buyingTips: [
            "LPG varsa subaplar çelik mi?",
            "AFL farlar sağa sola dönüyor mu test edin."
        ]
    },
    {
        id: "opel-astra-j-1-4-turbo",
        slug: "opel-astra-j-1-4-turbo",
        brand: "Opel",
        model: "Astra",
        variant: "1.4 Turbo Sport",
        years: "2009-2020",
        generation: "J",
        expertNote: "Tank gibi araba ama motoru biraz hassas. 1.4 Turbo motorlarda piston kırma efsanesi vardır, yağ değişimine ve benzine dikkat etmezsen (LSPI) riskli. Süspansiyonu çok iyidir.",
        price: 780000,
        reliabilityScore: 78,
        totalIssues: 4,
        searchCount: 45000,
        issues: [
            {
                id: "astra-1",
                title: "Piston Kırma (LSPI)",
                description: "Düşük devirde yüksek yük altında piston segman kanalı kırılması.",
                category: "motor",
                riskLevel: "CRITICAL",
                affectedKm: "60.000+ km",
                repairCost: "50.000 - 80.000 TL (Motor Rektefiye)"
            },
            {
                id: "astra-2",
                title: "Termostat Gövdesi",
                description: "Plastik termostat gövdesinin çatlaması ve su kaçağı.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Kronik",
                repairCost: "3.000 - 5.000 TL"
            },
            {
                id: "astra-4",
                title: "M32 Şanzıman",
                description: "Manuel vitesin 1. ve 2. vites bilye sesi.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "10.000 - 15.000 TL"
            },
            {
                id: "astra-3",
                title: "Bobin Arızası",
                description: "Ateşleme bobininin bozulması ve tekleme.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "2.000 - 4.000 TL"
            }
        ],
        pros: [
            "Tok sürüş hissi",
            "Yol tutuş",
            "Güvenlik"
        ],
        cons: [
            "Ağır kasa",
            "Yakıt tüketimi",
            "Motor riski (LSPI)"
        ],
        buyingTips: [
            "Motor yağı Dexos 1 Gen 2 onaylı mı kullanılmış?",
            "Su yedek deposunda çatlak var mı?"
        ]
    },
    {
        id: "opel-grandland-1-5-diesel",
        slug: "opel-grandland-1-5-diesel",
        brand: "Opel",
        model: "Grandland",
        variant: "1.5 Diesel",
        years: "2018-2024",
        generation: "X",
        reliabilityScore: 76,
        totalIssues: 2,
        searchCount: 16000,
        issues: [
            {
                id: "grandland-d-1",
                title: "Eksantrik Zinciri Kopması",
                description: "1.5 BlueHDi motorlarda 7mm zincir kullanımı sonucu kopma ve motor hasarı (8mm set ile değişim şart).",
                category: "motor",
                riskLevel: "CRITICAL",
                affectedKm: "40.000 - 90.000 km",
                repairCost: "60.000 - 100.000 TL"
            },
            {
                id: "grandland-d-2",
                title: "AdBlue Deposu Arızası",
                description: "AdBlue enjektörü veya pompa arızası (Kronik PSA sorunu).",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "40.000+ km",
                repairCost: "25.000 - 35.000 TL"
            },
            {
                id: "grandland-d-3",
                title: "EAT8 Şanzıman Sarsıntısı",
                description: "Vites geçişlerinde vuruntu veya kararsızlık.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "Şehir İçi",
                repairCost: "Yazılım / Yağ Değişimi"
            },
            {
                id: "grandland-d-4",
                title: "DPF Tıkanıklığı",
                description: "Şehir içi kısa mesafe kullanımında partikül filtresinin dolması.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Şehir İçi",
                repairCost: "Temizlik"
            },
            {
                id: "grandland-d-5",
                title: "Multimedya Sorunları",
                description: "Ekranın kararması veya geri görüş kamerasının çalışmaması.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Yazılım"
            }
        ],
        pros: [
            "Düşük yakıt tüketimi",
            "Güçlü tork",
            "Yalıtım"
        ],
        cons: [
            "AdBlue maliyetleri",
            "Zincir riski"
        ],
        buyingTips: [
            "Eksantrik zincir seti 8mm ile değişmiş mi? (Çok Önemli)",
            "AdBlue sistemi kontrol edildi mi?"
        ]
    }
];
