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
        totalIssues: 5,
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
        totalIssues: 5,
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
        totalIssues: 4,
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
            },
            {
                id: "mokka-1-2-turbo-auto-3",
                title: "Yağ Eksiltme",
                description: "Motor yağının servis aralarında eksilmesi. Düzenli kontrol şart.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "Segman / 5.000 - 15.000 TL"
            },
            {
                id: "mokka-1-2-turbo-auto-4",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
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
        totalIssues: 4,
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
            },
            {
                id: "crossland-1-2-turbo-auto-3",
                title: "Yağ Eksiltme",
                description: "Motor yağının servis aralarında eksilmesi. Düzenli kontrol şart.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "Segman / 5.000 - 15.000 TL"
            },
            {
                id: "crossland-1-2-turbo-auto-4",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
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
        totalIssues: 5,
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
            },
            {
                id: "astra-k-1-4-turbo-auto-4",
                title: "Yağ Eksiltme",
                description: "Motor yağının servis aralarında eksilmesi. Düzenli kontrol şart.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "Segman / 5.000 - 15.000 TL"
            },
            {
                id: "astra-k-1-4-turbo-auto-5",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
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
        totalIssues: 4,
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
            },
            {
                id: "grandland-x-1-2-turbo-auto-3",
                title: "Buji/Ateşleme Bobini",
                description: "Buji veya ateşleme bobini arızası. Rölantide titreşim ve performans kaybı.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "60.000+ km",
                repairCost: "2.000 - 5.000 TL"
            },
            {
                id: "grandland-x-1-2-turbo-auto-4",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
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
        totalIssues: 5,
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
,

    // ─── Eski new-cars dosyasından taşındı ───
    {
        id: "opel-combo-1-5-cdti",
        slug: "opel-combo-1-5-cdti",
        brand: "Opel",
        model: "Combo",
        variant: "1.5 CDTI",
        years: "2018-2024",
        generation: "E",
        price: 1100000,
        reliabilityScore: 80,
        totalIssues: 5,
        searchCount: 7500,
        expertNote: "Combo aslında Citroen Berlingo ve Peugeot Rifter kardeşidir, aynı platformu paylaşırlar. PSA 1.5 BlueHDi motoru güvenilirdir. Ticari geçmişe dikkat edin.",
        issues: [
            { id: "combo-1", title: "DPF Rejenerasyon Sorunu", description: "Şehir içi kısa mesafe kullanımda partikül filtresi dolması ve rejenerasyon talebi. Ticari kullanımda daha sık yaşanır.", category: "motor", riskLevel: "MEDIUM", affectedKm: "50.000+ km", repairCost: "8.000 - 18.000 TL" },
            { id: "combo-2", title: "AdBlue Sistem Hatası", description: "PSA motorlarında yaygın AdBlue dozajlama ünitesi kristalleşmesi ve tıkanması.", category: "motor", riskLevel: "HIGH", affectedKm: "40.000+ km", repairCost: "15.000 - 30.000 TL" },
            { id: "combo-3", title: "Sürgülü Kapı Ray Aşınması", description: "Arka sürgülü kapı ray mekanizmasının aşınması. Kapı açılıp kapanırken ses yapar veya takılır.", category: "govde", riskLevel: "LOW", affectedKm: "60.000+ km", repairCost: "3.000 - 8.000 TL" },
            { id: "combo-4", title: "Arka Süspansiyon Vuruntu", description: "Arka yaprak yay süspansiyondan kasis geçişlerinde gelen vuruntu sesi. Burç ve takoz değişimi gerekir.", category: "suspansiyon", riskLevel: "LOW", affectedKm: "50.000+ km", repairCost: "3.000 - 6.000 TL" },
            { id: "combo-5", title: "Start-Stop Akü Uyarısı", description: "Start-stop sistemi akü voltajı düşüklüğü nedeniyle devre dışı kalır ve panel uyarısı verir.", category: "elektronik", riskLevel: "LOW", affectedKm: "3-4 Yıl", repairCost: "4.000 - 7.000 TL (Akü)" }
        ],
        pros: ["Çok geniş iç hacim", "Güvenilir 1.5 CDTI motor", "Pratik sürgülü kapılar", "Ekonomik yakıt tüketimi"],
        cons: ["Ticari kökenli sert sürüş", "İç mekan kalitesi düşük", "AdBlue derdi"],
        buyingTips: ["Ticari geçmişi var mı araştırın", "AdBlue sistemi hata veriyor mu?", "Sürgülü kapıları açıp kapayın"]
    }
,

    // ─── Eski new-cars dosyasından taşındı ───
    {
        id: "opel-grandland-1-2-turbo-new",
        slug: "opel-grandland-1-2-turbo",
        brand: "Opel",
        model: "Grandland",
        variant: "1.2 Turbo GS Line",
        years: "2022-2025",
        generation: "Mk2",
        price: 1400000,
        expertNote: "PSA platformu üzerine kurulu yeni nesil Opel SUV. 1.2 PureTech motor Peugeot ile aynıdır — avantajları ve sorunları da aynıdır. Vizör tasarımı dikkat çeker.",
        reliabilityScore: 80,
        totalIssues: 5,
        searchCount: 20000,
        issues: [
            {
                id: "grandland-n-1",
                title: "PureTech Triger Zinciri",
                description: "1.2 PureTech 3 silindirli motorun triger zinciri uzama sorunu. PSA grubunun kronik problemi.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "60.000+ km",
                repairCost: "12.000 - 25.000 TL"
            },
            {
                id: "grandland-n-2",
                title: "Yağ Tüketimi",
                description: "PureTech motorun yağ yakma sorunu. Servis arasında yağ seviye kontrolü gerekir.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "40.000+ km",
                repairCost: "Yağ Takibi"
            },
            {
                id: "grandland-n-3",
                title: "EAT8 Düşük Hız Sarsıntısı",
                description: "Aisin 8 ileri otomatik şanzımanda park manevralarında sarsıntı.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Yazılım"
            },
            {
                id: "grandland-n-4",
                title: "Ön Kamera Sistemi Hatası",
                description: "ADAS kamera sisteminin sis ve yağmurda yanlış uyarı vermesi.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Hava koşullarına bağlı",
                repairCost: "Kamera Kalibrasyonu"
            },
            {
                id: "grandland-n-5",
                title: "Plastik Trim Sesleri",
                description: "Torpido ve kapı panellerinden bozuk yolda gelen plastik tıkırtı sesleri.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "Yalıtım"
            }
        ],
        pros: [
            "Modern Vizör tasarımı",
            "Geniş iç hacim",
            "Zengin donanım"
        ],
        cons: [
            "PureTech motor riskleri",
            "3 silindir titreşimi",
            "Fiyat"
        ],
        buyingTips: [
            "Triger zinciri kontrol ettirin",
            "Yağ seviyesini bakın",
            "EAT8 şanzıman geçişlerini test edin"
        ]
    }
,

    // ─── Eski new-cars dosyasından taşındı ───
    {
        id: "opel-astra-j-1-6-cdti",
        slug: "opel-astra-j-1-6-cdti",
        brand: "Opel",
        model: "Astra",
        variant: "J 1.6 CDTi",
        years: "2009-2015",
        generation: "J",
        price: 400000,
        reliabilityScore: 71,
        totalIssues: 6,
        searchCount: 9500,
        expertNote: "Astra J TR'de çok satmıştır. 1.6 CDTi motor güçlü (136hp) ama triger zinciri uzaması kronik ve motor hasarına yol açabilir. 1.4 Turbo benzinli de var ama o da zincir sorunu yaşar. Kontrol ettirmeden almayın.",
        issues: [
            { id: "astj-1", title: "Triger Zinciri Uzaması", description: "1.6 CDTi motorun triger zincirinde erken uzama. Motor çalışırken takırtı, zamanlaması kayar ve motor hasar görür.", category: "motor", riskLevel: "CRITICAL", affectedKm: "60.000 - 100.000 km", repairCost: "10.000 - 20.000 TL" },
            { id: "astj-2", title: "Çift Kütleli Volan Aşınması", description: "Volan kütlelerinin ayrılması sonucu rölantide titreşim ve metalik ses.", category: "sanziman", riskLevel: "HIGH", affectedKm: "80.000+ km", repairCost: "10.000 - 18.000 TL" },
            { id: "astj-3", title: "EGR Tıkanması", description: "EGR valfinde kurum birikimi. Motor performans düşüşü ve arıza lambası.", category: "motor", riskLevel: "MEDIUM", affectedKm: "60.000+ km", repairCost: "3.000 - 6.000 TL" },
            { id: "astj-4", title: "Su Pompası/Termostat Arızası", description: "Plastik gövdeli termostat veya su pompasından kaçak. Hararet riski.", category: "motor", riskLevel: "MEDIUM", affectedKm: "60.000+ km", repairCost: "3.000 - 7.000 TL" },
            { id: "astj-5", title: "Ön Süspansiyon Rotil/Rot Başı", description: "Ön rotil ve rot başlarının erken aşınması. Direksiyon boşluğu ve vuruntu.", category: "suspansiyon", riskLevel: "MEDIUM", affectedKm: "50.000+ km", repairCost: "2.000 - 4.000 TL" },
            { id: "astj-6", title: "Klima Panel Arızası", description: "Klima kontrol panelinin butonlarının tepkisiz kalması veya ekranının bozulması.", category: "elektronik", riskLevel: "LOW", affectedKm: "Yaş kaynaklı", repairCost: "2.000 - 5.000 TL" }
        ],
        pros: ["Güçlü 1.6 CDTi motor", "Geniş kabin", "Sportif tasarım", "OPC Line donanımı zengin"],
        cons: ["Zincir uzaması tehlikeli", "Volan/kavrama pahalı", "Opel yedek parça pahalanıyor"],
        buyingTips: ["Triger zinciri ne zaman değişmiş mutlaka sorun", "Soğuk motorla çalıştırıp zincir sesi dinleyin", "EGR temizliğini kontrol edin"]
    }
,

    // ─── Eski new-cars dosyasından taşındı ───
    {
        id: "opel-corsa-d-1-3-cdti",
        slug: "opel-corsa-d-1-3-cdti",
        brand: "Opel",
        model: "Corsa",
        variant: "D 1.3 CDTi",
        years: "2006-2014",
        generation: "D",
        price: 280000,
        reliabilityScore: 72,
        totalIssues: 6,
        searchCount: 8000,
        expertNote: "Corsa D TR'de çok satılan şehir aracı. 1.3 CDTi motor Fiat ortaklığı ile üretilmiştir (Multijet). Ekonomik ve güvenilir ama EGR ve turbo sorunları var. Easytronic (robotize) şanzımandan uzak durun.",
        issues: [
            { id: "corsad-1", title: "Easytronic Şanzıman Arızası", description: "Robotize Easytronic şanzımanda aktüatör arızası. Vites geçişlerinde takılma ve sarsıntı.", category: "sanziman", riskLevel: "CRITICAL", affectedKm: "40.000 - 60.000 km", repairCost: "8.000 - 15.000 TL" },
            { id: "corsad-2", title: "EGR Valfi Tıkanması", description: "EGR valfinde kurum birikimi. Motor düzensizliği ve arıza lambası.", category: "motor", riskLevel: "MEDIUM", affectedKm: "60.000+ km", repairCost: "2.000 - 5.000 TL" },
            { id: "corsad-3", title: "Turbo Aktuatör", description: "Turbo basınç aktuatörünün bozulması. Güç kaybı.", category: "motor", riskLevel: "MEDIUM", affectedKm: "80.000+ km", repairCost: "4.000 - 8.000 TL" },
            { id: "corsad-4", title: "Cam Kaldırma Mekanizması", description: "Cam kaldırma telinin kopması.", category: "govde", riskLevel: "LOW", affectedKm: "50.000+ km", repairCost: "1.000 - 2.000 TL" },
            { id: "corsad-5", title: "Direksiyon Kolon Sesi", description: "Direksiyon çevirirken gıcırtı sesi.", category: "suspansiyon", riskLevel: "LOW", affectedKm: "40.000+ km", repairCost: "1.500 - 3.000 TL" },
            { id: "corsad-6", title: "Radyo/CD Arızası", description: "CD 30/CD 30 MP3 kafaünitesinin CD okuyucu veya ekran arızası.", category: "elektronik", riskLevel: "LOW", affectedKm: "Yaş kaynaklı", repairCost: "1.000 - 3.000 TL" }
        ],
        pros: ["Ekonomik 1.3 CDTi", "Küçük ve çevik", "Ucuz bakım", "Şehir içi ideal"],
        cons: ["Easytronic kabusları", "Gürültü yalıtımı zayıf", "İç mekan kalitesi düşük"],
        buyingTips: ["Easytronic'ten kaçın, manuel alın", "EGR temizliği yapılmış mı sorun", "Turbo sesi dinleyin"]
    }
,
    {
            "id": "opel-astra-h-1-3-cdti",
            "slug": "opel-astra-h-1-3-cdti",
            "brand": "Opel",
            "model": "Astra H",
            "variant": "1.3 CDTi Enjoy",
            "years": "2004-2010",
            "generation": "H",
            "price": 300000,
            "expertNote": "Fiat 1.3 Multijet motor Opel'e uyarlanmış hali. Astra H Türkiye'de çok satıldı, yedek parçası bol ve ucuz. Easytronic şanzımandan uzak durun, manuel alın.",
            "reliabilityScore": 74,
            "totalIssues": 5,
            "searchCount": 10000,
            "issues": [
                    {
                            "id": "astrah-1",
                            "title": "Çift Kütleli Volan",
                            "description": "Çift kütleli volanın aşınması. Rölantide titreşim.",
                            "category": "sanziman",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "100.000+ km",
                            "repairCost": "5.000 - 10.000 TL"
                    },
                    {
                            "id": "astrah-2",
                            "title": "EGR Karbon Birikimi",
                            "description": "EGR valfinde kurum birikimi.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "80.000+ km",
                            "repairCost": "2.000 - 5.000 TL"
                    },
                    {
                            "id": "astrah-3",
                            "title": "Cam Kaldırma Mekanizması",
                            "description": "Cam kaldırma telinin kopması.",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "Kronik",
                            "repairCost": "1.000 - 2.000 TL"
                    },
                    {
                            "id": "astrah-4",
                            "title": "Arka Fren Kampanası",
                            "description": "Arka kampanalı fren sisteminin aşınması. Fren tutmama.",
                            "category": "fren",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "60.000+ km",
                            "repairCost": "1.500 - 3.000 TL"
                    },
                    {
                            "id": "astrah-5",
                            "title": "Direksiyon Kolon Sesi",
                            "description": "Direksiyon kolonundan gıcırtı.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "50.000+ km",
                            "repairCost": "1.500 - 3.000 TL"
                    }
            ],
            "pros": [
                    "Ucuz yedek parça",
                    "Bol bulunur",
                    "Ekonomik dizel",
                    "Geniş iç mekan"
            ],
            "cons": [
                    "Yaşlı platform",
                    "Güvenlik puanı düşük",
                    "İç mekan kalitesi"
            ],
            "buyingTips": [
                    "Manuel vites tercih edin",
                    "Volan titreşimi kontrol edin",
                    "Pas kontrolü yaptırın"
            ]
    }
,
    {
            "id": "opel-insignia-b-1-5-turbo",
            "slug": "opel-insignia-b-1-5-turbo",
            "brand": "Opel",
            "model": "Insignia B (Grand Sport)",
            "variant": "1.5 Turbo Enjoy",
            "years": "2017-2022",
            "generation": "Z18",
            "price": 1000000,
            "expertNote": "1.5 Turbo 165 HP + 6AT. Insignia B Türkiye'de D segment olarak iyi fiyata sunuldu. Geniş iç mekan ve büyük bagaj. Motor güvenilir, 6AT sorunsuz.",
            "reliabilityScore": 79,
            "totalIssues": 5,
            "searchCount": 8000,
            "issues": [
                    {
                            "id": "insb-1",
                            "title": "Turbo Wastegate",
                            "description": "Turbo wastegate titremesi. Hafif ses.",
                            "category": "motor",
                            "riskLevel": "LOW",
                            "affectedKm": "80.000+ km",
                            "repairCost": "5.000 - 10.000 TL"
                    },
                    {
                            "id": "insb-2",
                            "title": "IntelliLux LED",
                            "description": "Matrix LED far modülü arızası.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Rastgele",
                            "repairCost": "5.000 - 12.000 TL"
                    },
                    {
                            "id": "insb-3",
                            "title": "Ön Fren Diski",
                            "description": "Fren disklerinin erken eğrilmesi.",
                            "category": "fren",
                            "riskLevel": "LOW",
                            "affectedKm": "30.000+ km",
                            "repairCost": "3.000 - 6.000 TL"
                    },
                    {
                            "id": "insb-4",
                            "title": "Şanzıman Sarsıntısı",
                            "description": "6AT soğukta sert vites geçişi.",
                            "category": "sanziman",
                            "riskLevel": "LOW",
                            "affectedKm": "Soğuk hava",
                            "repairCost": "Yağ Değişimi"
                    },
                    {
                            "id": "insb-5",
                            "title": "Panoramik Tavan",
                            "description": "Panoramik cam tavandan kasiste ses.",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "Bozuk yollar",
                            "repairCost": "Fitil"
                    }
            ],
            "pros": [
                    "Geniş D segment",
                    "Uygun fiyat",
                    "Matrix LED far",
                    "Konforlu sürüş"
            ],
            "cons": [
                    "Marka algısı zayıf",
                    "İkinci el değer kaybı",
                    "Parça bulmak zorlaşıyor"
            ],
            "buyingTips": [
                    "Enjoy donanım minimum",
                    "6AT yağı değişmiş mi sorun",
                    "LED far test edin"
            ]
    }
,
    {
            "id": "opel-corsa-e-1-4",
            "slug": "opel-corsa-e-1-4-enjoy",
            "brand": "Opel",
            "model": "Corsa E",
            "variant": "1.4 Enjoy Otomatik",
            "years": "2014-2019",
            "generation": "E (X15)",
            "price": 600000,
            "expertNote": "B14XEL 1.4 90 HP + 6AT. Corsa E Türkiye'de şehir aracı olarak çok satıldı. Motor basit ve güvenilir. 6AT Aisin şanzıman sorunsuz. Easytronic bitti, sevin.",
            "reliabilityScore": 80,
            "totalIssues": 5,
            "searchCount": 10000,
            "issues": [
                    {
                            "id": "corsae-1",
                            "title": "Direksiyon Sesi",
                            "description": "Direksiyon çevirirken hafif gıcırtı.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "40.000+ km",
                            "repairCost": "1.500 - 3.000 TL"
                    },
                    {
                            "id": "corsae-2",
                            "title": "Cam Kaldırma",
                            "description": "Cam kaldırma mekanizması arızası.",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "50.000+ km",
                            "repairCost": "1.000 - 2.000 TL"
                    },
                    {
                            "id": "corsae-3",
                            "title": "Klima Kondansatörü",
                            "description": "Klima kondansatörü taş çarpma hasarı.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Rastgele",
                            "repairCost": "3.000 - 6.000 TL"
                    },
                    {
                            "id": "corsae-4",
                            "title": "Ön Fren Diski",
                            "description": "Ön fren disklerinin erken aşınması.",
                            "category": "fren",
                            "riskLevel": "LOW",
                            "affectedKm": "30.000+ km",
                            "repairCost": "2.000 - 4.000 TL"
                    },
                    {
                            "id": "corsae-5",
                            "title": "IntelliLink Donma",
                            "description": "IntelliLink multimedya donması.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Rastgele",
                            "repairCost": "Yazılım"
                    }
            ],
            "pros": [
                    "Sorunsuz otomatik",
                    "Kompakt boyut",
                    "Ucuz bakım",
                    "Şehir içi ideal"
            ],
            "cons": [
                    "90 HP az",
                    "Arka alan dar",
                    "Otoyolda gürültülü"
            ],
            "buyingTips": [
                    "Otomatik alın",
                    "Enjoy donanım minimum",
                    "Klima kontrolü"
            ]
    }
,
    {
            "id": "opel-insignia-a-2-0-cdti",
            "slug": "opel-insignia-a-2-0-cdti-cosmo",
            "brand": "Opel",
            "model": "Insignia A",
            "variant": "2.0 CDTi Cosmo",
            "years": "2008-2017",
            "generation": "G09",
            "price": 500000,
            "expertNote": "2.0 CDTi 160 HP + 6AT. Insignia A güzel araç ama turbo ve şanzıman sorunları ünlü. Yüksek bakım maliyetleri. Çok ucuz ikinci el ama nedenini anla.",
            "reliabilityScore": 62,
            "totalIssues": 7,
            "searchCount": 8000,
            "issues": [
                    {
                            "id": "insa-1",
                            "title": "Turbo Arızası",
                            "description": "Turbo kartuşunun çatlaması veya aktuatör arızası. Motor güç kaybı ve duman.",
                            "category": "motor",
                            "riskLevel": "HIGH",
                            "affectedKm": "80.000+ km",
                            "repairCost": "10.000 - 20.000 TL"
                    },
                    {
                            "id": "insa-2",
                            "title": "6AT Şanzıman",
                            "description": "AF40-6 otomatik şanzımanda vites kayması ve sarsıntı.",
                            "category": "sanziman",
                            "riskLevel": "HIGH",
                            "affectedKm": "100.000+ km",
                            "repairCost": "15.000 - 30.000 TL"
                    },
                    {
                            "id": "insa-3",
                            "title": "Çift Kütleli Volan",
                            "description": "Volan aşınması. Motor titreşimi.",
                            "category": "sanziman",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "80.000+ km",
                            "repairCost": "8.000 - 15.000 TL"
                    },
                    {
                            "id": "insa-4",
                            "title": "EGR Tıkanması",
                            "description": "EGR valfinde sürekli kurum birikimi.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "60.000+ km",
                            "repairCost": "2.000 - 5.000 TL"
                    },
                    {
                            "id": "insa-5",
                            "title": "DPF Tıkanması",
                            "description": "DPF filtresi sürekli doluyor.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Şehir içi",
                            "repairCost": "5.000 - 15.000 TL"
                    },
                    {
                            "id": "insa-6",
                            "title": "Direksiyon Pompası",
                            "description": "Elektrikli direksiyon pompası arızası.",
                            "category": "suspansiyon",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "80.000+ km",
                            "repairCost": "5.000 - 12.000 TL"
                    },
                    {
                            "id": "insa-7",
                            "title": "Klima Kompresörü",
                            "description": "Klima kompresörü kavrama arızası.",
                            "category": "elektronik",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "80.000+ km",
                            "repairCost": "5.000 - 10.000 TL"
                    }
            ],
            "pros": [
                    "Geniş D segment",
                    "Konforlu sürüş",
                    "Ucuz ikinci el"
            ],
            "cons": [
                    "Turbo arıza riski",
                    "Şanzıman sorunları",
                    "Yüksek bakım maliyeti",
                    "DPF+EGR kâbusu"
            ],
            "buyingTips": [
                    "Turbo sesini çok iyi dinleyin",
                    "Şanzıman kayması var mı test edin",
                    "Bakım geçmişi şart",
                    "Ucuz diye atlamayın"
            ]
    }
];
