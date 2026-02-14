import { Car } from '@/types';

export const bmwCars: Car[] = [
    // ═══════════════════════════════════════════════════════
    // 1 SERİSİ
    // ═══════════════════════════════════════════════════════
    {
        id: "bmw-116i-f20",
        slug: "bmw-116i-f20",
        brand: "BMW",
        model: "1 Serisi (F20)",
        variant: "116i 1.6 Turbo",
        years: "2011-2019",
        generation: "F20",
        price: 1100000,
        expertNote: "N13 1.6 Turbo 136 HP. BMW'nin son arkadan itişli 1 Serisi. Sınıfında tek arka çeker olması onu efsane yapıyor. N13 motorda su kaçağı en büyük sorun. ZF 8 ileri şanzımanı muhteşem.",
        reliabilityScore: 76,
        totalIssues: 5,
        searchCount: 18000,
        issues: [
            {
                id: "116i-f20-1",
                title: "Su Eksiltme (N13)",
                description: "Devirdaim pompası, termostat veya o-ringlerden soğutma sıvısı kaçağı.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "60.000+ km",
                repairCost: "5.000 - 10.000 TL"
            },
            {
                id: "116i-f20-2",
                title: "Tahrik Hatası Uyarısı",
                description: "Turbo valfi, bobin veya sensör kaynaklı güç kısıtlaması.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "5.000 - 15.000 TL"
            },
            {
                id: "116i-f20-3",
                title: "Zincir Gergi (N13)",
                description: "Triger zinciri uzaması ve ses yapması. Müdahale edilmezse motor hasarı.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "100.000+ km",
                repairCost: "25.000 - 40.000 TL"
            },
            {
                id: "116i-f20-auto-4",
                title: "Yağ Eksiltme",
                description: "Motor yağının servis aralarında eksilmesi. Düzenli kontrol şart.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "Segman / 5.000 - 15.000 TL"
            },
            {
                id: "116i-f20-auto-5",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
            }
        ],
        pros: [
            "Arkadan itiş (sınıfında tek)",
            "ZF 8 ileri şanzıman",
            "Sportif sürüş keyfi",
            "Giriş seviye BMW fiyatı"
        ],
        cons: [
            "Arka yaşam alanı çok dar",
            "Yakıt tüketimi (şehir içi 9-10L)",
            "Su kaçağı riski",
            "Bagaj küçük"
        ],
        buyingTips: [
            "Su genleşme kabını ve hortumları kontrol edin",
            "Soğuk çalıştırmada zincir sesi dinleyin",
            "Sport Line veya M Sport tercih edin (ikinci el değeri)"
        ]
    },
    {
        id: "bmw-118i-f40",
        slug: "bmw-118i-f40",
        brand: "BMW",
        model: "1 Serisi (F40)",
        variant: "118i 1.5 Turbo",
        years: "2019-2024",
        generation: "F40",
        price: 1900000,
        expertNote: "B38 1.5 3-silindirli Turbo 140 HP. Yeni nesil 1 Serisi önden çekişe geçti - BMW puristleri üzüldü ama pratiklik arttı. MINI platformunda, iç mekan kalitesi iyi. 3 silindirli motor titreşim yapabilir.",
        reliabilityScore: 81,
        totalIssues: 4,
        searchCount: 10000,
        issues: [
            {
                id: "118i-f40-1",
                title: "3 Silindirli Motor Titreşimi",
                description: "Rölantide ve düşük devirlerde hissedilen titreşim. 3 silindirli motorların karakteristiği.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Çözümsüz (Tasarım)"
            },
            {
                id: "118i-f40-2",
                title: "Soğutma Suyu Kaçağı",
                description: "Plastik hortum bağlantılarından su sızıntısı.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "50.000+ km",
                repairCost: "3.000 - 8.000 TL"
            },
            {
                id: "118i-f40-auto-3",
                title: "Yağ Eksiltme",
                description: "Motor yağının servis aralarında eksilmesi. Düzenli kontrol şart.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "Segman / 5.000 - 15.000 TL"
            },
            {
                id: "118i-f40-auto-4",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
            }
        ],
        pros: [
            "Modern iç mekan",
            "Pratik boyut",
            "İyi yakıt ekonomisi (6L/100km)",
            "Güvenlik donanımları"
        ],
        cons: [
            "Önden çekiş (BMW ruhu yok)",
            "3 silindirli titreşim",
            "Arka çekere göre sönük sürüş"
        ],
        buyingTips: [
            "M Sport paketi ikinci elde önemli fark yapar",
            "Rölantide titreşimi kabul edilebilir mi test edin"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // 2 SERİSİ
    // ═══════════════════════════════════════════════════════
    {
        id: "bmw-218i-gc",
        slug: "bmw-218i-gran-coupe",
        brand: "BMW",
        model: "2 Serisi (F44)",
        variant: "218i Gran Coupe 1.5 Turbo M Sport",
        years: "2020-2024",
        generation: "F44",
        price: 2100000,
        expertNote: "B38 1.5 Turbo 140 HP. 1 Serisi F40 platformunda coupe sedan. Çerçevesiz kapılar ve sportif tasarım dikkat çekiyor. Önden çekiş ama M Sport paketiyle güzel duruyor. Giriş seviye 'sedan BMW' arayan gençlerin favorisi.",
        reliabilityScore: 80,
        totalIssues: 4,
        searchCount: 14000,
        issues: [
            {
                id: "218i-gc-1",
                title: "Motor Takozu Yıpranması",
                description: "Motor takozunun erken yıpranması, rölantide titreşim artışı.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "40.000+ km",
                repairCost: "5.000 - 8.000 TL"
            },
            {
                id: "218i-gc-2",
                title: "Tahrik Uyarısı",
                description: "Yazılımsal hatalar ve sensor kaynaklı güç kısıtlama uyarıları.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Yazılım Güncellemesi"
            },
            {
                id: "218i-gran-coupe-auto-3",
                title: "12V Akü Boşalması",
                description: "12V yardımcı akünün uzun park halinde boşalması.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "3.000 - 5.000 TL"
            },
            {
                id: "218i-gran-coupe-auto-4",
                title: "Şarj Kapağı Sorunu",
                description: "Şarj kapağının donması veya mekanik olarak açılmaması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kış ayları",
                repairCost: "1.500 - 3.000 TL"
            }
        ],
        pros: [
            "Çerçevesiz kapılar",
            "Sportif tasarım",
            "Güncel teknoloji",
            "Premium marka giriş fiyatı"
        ],
        cons: [
            "Önden çekiş (BMW ruhuna aykırı)",
            "Arka kafa mesafesi dar",
            "3 silindirli motor zayıf hissedebilir"
        ],
        buyingTips: [
            "M Sport paket olmazsa olmazdır",
            "Çerçevesiz kapılarda cam fitillerini kontrol edin"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // 3 SERİSİ
    // ═══════════════════════════════════════════════════════
    {
        id: "bmw-320i-f30",
        slug: "bmw-320i-f30-ed",
        brand: "BMW",
        model: "3 Serisi (F30)",
        variant: "320i ED 1.6 Turbo (40. Yıl / Sport Line)",
        years: "2012-2019",
        generation: "F30",
        price: 1350000,
        expertNote: "N13 1.6 Turbo 170 HP. Türkiye'nin en popüler BMW'si. D segmentinin referans modeli. ZF 8 ileri şanzıman ve arkadan itiş ile sürüş keyfi veriyor. Ancak N13/N20 motorlarda zincir ve su kaçağı sorunları ciddi maliyetlere yol açabilir. Harman Kardon ve NBT ekran araçın değerini çok etkiler.",
        reliabilityScore: 74,
        totalIssues: 4,
        searchCount: 85000,
        issues: [
            {
                id: "f30-320i-1",
                title: "Zincir Sesi (N13/N20)",
                description: "Triger zincirinin uzaması ve sabah ilk çalıştırmada metalik ses. Müdahale edilmezse motor hasarı yapar.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "100.000+ km",
                repairCost: "30.000 - 50.000 TL"
            },
            {
                id: "f30-320i-2",
                title: "Su Eksiltme / Hararet",
                description: "Genleşme kabı çatlağı, devirdaim pompası ve termostat arızası. Hararet riski.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "80.000+ km",
                repairCost: "5.000 - 15.000 TL"
            },
            {
                id: "f30-320i-3",
                title: "Kapı Kolu Erimesi",
                description: "İç kapı tutamaklarının zamanla yapış yapış olup erimesi. Tüm F30'larda kronik.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "2.000 - 5.000 TL (Kaplama/Değişim)"
            },
            {
                id: "f30-320i-4",
                title: "Tahrik Uyarısı",
                description: "Turbo valfi, bobin veya sensör kaynaklı güç kısıtlaması uyarısı.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "5.000 - 15.000 TL"
            }
        ],
        pros: [
            "Mükemmel sürüş dinamikleri",
            "ZF 8 ileri şanzıman",
            "Arkadan itiş keyfi",
            "İkinci el hızı yüksek"
        ],
        cons: [
            "Zincir riski (N13/N20)",
            "Su kaçağı sorunu",
            "Kapı kolları erimesi",
            "Yakıt tüketimi (şehir içi 10L+)"
        ],
        buyingTips: [
            "Soğuk çalıştırmada zincir sesi var mı mutlaka dinleyin",
            "Genleşme kabını su izi için kontrol edin",
            "Harman Kardon + NBT ekran olup olmadığını sorun",
            "40. Yıl versiyonu özel donanımlıdır"
        ]
    },
    {
        id: "bmw-320d-f30",
        slug: "bmw-320d-f30",
        brand: "BMW",
        model: "3 Serisi (F30)",
        variant: "320d 2.0 Dizel",
        years: "2012-2018",
        generation: "F30",
        price: 1500000,
        expertNote: "N47 2.0 Dizel 184 HP (2012-2014), B47 2.0 Dizel 190 HP (2015+). 2013 öncesi N47 motorlarda triger zinciri kopma riski çok yüksek — bu dönem araçlardan uzak durun. 2015+ B47 motorlu facelift modeller çok daha güvenilir.",
        reliabilityScore: 65,
        totalIssues: 5,
        searchCount: 18000,
        issues: [
            {
                id: "f30-320d-1",
                title: "N47 Zincir Kopması",
                description: "2013 öncesi N47 motorlarda triger zinciri kopma ve motor hasarı riski. Çok kritik!",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "100.000+ km",
                repairCost: "40.000 - 70.000 TL"
            },
            {
                id: "f30-320d-2",
                title: "Turbo Arızası",
                description: "Yüksek km'lerde turbo ıslık sesi artışı ve yağ kaçağı.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "150.000+ km",
                repairCost: "20.000 - 35.000 TL"
            },
            {
                id: "f30-320d-3",
                title: "EGR/DPF Sorunları",
                description: "Kısa mesafe kullanımda DPF tıkanması ve EGR karbon birikimi.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "10.000 - 25.000 TL"
            },
            {
                id: "320d-f30-auto-4",
                title: "DPF Tıkanması",
                description: "Şehir içi kısa mesafe kullanımda DPF filtresinin dolması.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Şehir içi kullanım",
                repairCost: "5.000 - 12.000 TL"
            },
            {
                id: "320d-f30-auto-5",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
            }
        ],
        pros: [
            "Güçlü ve torklı motor",
            "Düşük yakıt tüketimi (5-6L/100km)",
            "Sürüş keyfi",
            "B47 (2015+) güvenilir"
        ],
        cons: [
            "N47 zincir riski (2013 öncesi)",
            "Sert süspansiyon",
            "DPF bakımı gerekli"
        ],
        buyingTips: [
            "2015+ B47 motorlu facelift tercih edin",
            "N47 motorlarda zincir değişmiş mi fatura isteyin",
            "DPF doluluk oranını arıza cihazıyla kontrol ettirin"
        ]
    },
    {
        id: "bmw-g20-320i",
        slug: "bmw-g20-320i",
        brand: "BMW",
        model: "3 Serisi (G20)",
        variant: "320i 2.0 Turbo M Sport",
        years: "2019-2025",
        generation: "G20",
        price: 2800000,
        expertNote: "B48 2.0 Turbo 184 HP. N20'nin yerini alan B48 motor çok daha güvenilir. Zincir sorunu neredeyse yok. Su pompası ve soğutma sistemi hâlâ BMW'nin kronik zayıf noktası. Modern teknoloji ve konfor seviyesi çok yüksek.",
        reliabilityScore: 84,
        totalIssues: 4,
        searchCount: 18000,
        issues: [
            {
                id: "g20-320i-1",
                title: "Elektrikli Su Pompası",
                description: "Elektrikli su pompasının erken bozulması ve hararet riski.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "60.000+ km",
                repairCost: "15.000 - 30.000 TL"
            },
            {
                id: "g20-320i-2",
                title: "Soğutma Suyu Kaçağı",
                description: "Plastik hortumlar ve genleşme tankından su sızıntısı.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "50.000+ km",
                repairCost: "5.000 - 15.000 TL"
            },
            {
                id: "g20-320i-auto-3",
                title: "12V Akü Boşalması",
                description: "12V yardımcı akünün uzun park halinde boşalması.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "3.000 - 5.000 TL"
            },
            {
                id: "g20-320i-auto-4",
                title: "Şarj Kapağı Sorunu",
                description: "Şarj kapağının donması veya mekanik olarak açılmaması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kış ayları",
                repairCost: "1.500 - 3.000 TL"
            }
        ],
        pros: [
            "B48 motor güvenilirliği",
            "Modern teknoloji",
            "İyi yalıtım",
            "Sportif sürüş + konfor dengesi"
        ],
        cons: [
            "Yüksek fiyat",
            "Run-Flat lastik sertliği",
            "Parça fiyatları"
        ],
        buyingTips: [
            "M Sport paketi ikinci elde değer katar",
            "Yazılım güncellemelerini kontrol edin",
            "Lazer far opsiyonu varsa bonus"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // 4 SERİSİ
    // ═══════════════════════════════════════════════════════
    {
        id: "bmw-420i-g22",
        slug: "bmw-420i-gran-coupe-g26",
        brand: "BMW",
        model: "4 Serisi (G26)",
        variant: "420i Gran Coupe 2.0 Turbo M Sport",
        years: "2021-2025",
        generation: "G26",
        price: 3200000,
        expertNote: "B48 2.0 Turbo 184 HP. 3 Serisi G20 platformunda 4 kapılı coupe. Dev böbrek ızgarasıyla tartışmalı tasarım ama Türkiye'de çok tutuluyor. Sportif görünüm + sedan pratikliği bir arada.",
        reliabilityScore: 83,
        totalIssues: 5,
        searchCount: 12000,
        issues: [
            {
                id: "g26-420i-1",
                title: "Elektrikli Su Pompası",
                description: "G20 3 Serisi ile ortak B48 motorda su pompası arızası.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "60.000+ km",
                repairCost: "15.000 - 30.000 TL"
            },
            {
                id: "g26-420i-2",
                title: "Aktif Panjur Takılması",
                description: "Ön panjur kanatçıklarının açık veya kapalı pozisyonda takılı kalması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "5.000 - 10.000 TL"
            },
            {
                id: "g26-420i-3",
                title: "Yağ Filtre Kapağı Kaçağı",
                description: "Plastik yağ filtre kapağından sızıntı. Motor bölmesinde yağ izi.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "60.000+ km",
                repairCost: "3.000 - 6.000 TL"
            },
            {
                id: "g26-420i-4",
                title: "Şanzıman Sarsıntısı (Soğukta)",
                description: "ZF 8HP şanzımanın soğuk havalarda düşük viteslerde hafif sarsıntı yapması.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Yazılım Güncelleme"
            },
            {
                id: "g26-420i-5",
                title: "Fren Disk Aşınması",
                description: "Ön fren disklerinin erken aşınması ve frende titreşim. BMW fren diskleri yumuşak alaşımdır.",
                category: "fren",
                riskLevel: "LOW",
                affectedKm: "30.000+ km",
                repairCost: "6.000 - 12.000 TL"
            }
        ],
        pros: [
            "Sportif coupe tasarım",
            "4 kapılı pratiklik",
            "B48 güvenilir motor",
            "M Sport görselliği"
        ],
        cons: [
            "Tartışmalı böbrek ızgarası",
            "Yüksek fiyat (3 Serisi'ne göre)",
            "Arka görüş sınırlı"
        ],
        buyingTips: [
            "M Sport paket standart gelir, ekstra opsiyonlara bakın",
            "Lazer far ve Harman Kardon değerini artırır"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // 5 SERİSİ
    // ═══════════════════════════════════════════════════════
    {
        id: "bmw-520i-f10",
        slug: "bmw-520i-f10",
        brand: "BMW",
        model: "5 Serisi (F10)",
        variant: "520i 1.6 Turbo Executive / M Sport",
        years: "2010-2017",
        generation: "F10",
        price: 1850000,
        expertNote: "N20B16 1.6 Turbo 170 HP. Türkiye'de vergi avantajı nedeniyle efsaneleşmiş motor. 1.6 motor bu kadar ağır kasaya biraz zorlanıyor ama yakıt tasarrufu sağlıyor. N20 zincir ve yağ kaçağı en büyük riskler. Vakumlu kapı, hayalet gösterge ve NBT ekran opsiyonlarına mutlaka bakın.",
        reliabilityScore: 72,
        totalIssues: 4,
        searchCount: 65000,
        issues: [
            {
                id: "f10-520i-1",
                title: "N20 Zincir Uzaması",
                description: "Triger zincirinin zamanla gevşeyip ses yapması. Değiştirilmezse motor hasarı.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "100.000+ km",
                repairCost: "40.000 - 60.000 TL"
            },
            {
                id: "f10-520i-2",
                title: "Yağ Kaçağı (Külbütör)",
                description: "Külbütör kapağından egzoz manifolduna yağ damlaması ve yanık kokusu.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "10.000 - 20.000 TL"
            },
            {
                id: "f10-520i-3",
                title: "Kapı Kolu ve Tuş Erimesi",
                description: "İç kapı tutamakları ve klima tuşlarının zamanla soyulup yapış yapış olması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "2.000 - 5.000 TL"
            },
            {
                id: "f10-520i-4",
                title: "Su Alma / Sunroof Sızıntısı",
                description: "Sunroof tahliye kanallarının tıkanması ve içeriye su sızması.",
                category: "govde",
                riskLevel: "MEDIUM",
                affectedKm: "Zamanla",
                repairCost: "5.000 - 10.000 TL"
            }
        ],
        pros: [
            "Yönetici sedan konforu",
            "Geniş iç mekan",
            "Prestij",
            "Uzun yol gemisi"
        ],
        cons: [
            "N20 zincir riski",
            "Ağır bakım masrafları",
            "1.6 motor kasaya zorlanıyor",
            "Trim erimesi"
        ],
        buyingTips: [
            "Motor soğukken zincir sesi dinleyin",
            "Vakum kapı, hayalet gösterge, NBT ekran var mı sorun",
            "Hava süspansiyonsuz olanı tercih edin (daha az risk)"
        ]
    },
    {
        id: "bmw-520d-f10",
        slug: "bmw-520d-f10",
        brand: "BMW",
        model: "5 Serisi (F10)",
        variant: "520d 2.0 Dizel",
        years: "2010-2017",
        generation: "F10",
        price: 2000000,
        expertNote: "N47 2.0 Dizel 184 HP (2010-2014), B47 2.0 Dizel 190 HP (2014+). Dizel 5 Serisi uzun yolcuların favorisi. N47 motorlarda zincir kopma riski ve EGR soğutucu yangın riski çok ciddi — yetkili servis geri çağırma kontrolü şart.",
        reliabilityScore: 70,
        totalIssues: 5,
        searchCount: 20000,
        issues: [
            {
                id: "f10-520d-1",
                title: "N47 Zincir Kopması",
                description: "2014 öncesi N47 motorlarda triger zinciri kopması. Motor hasarı garantili.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "100.000+ km",
                repairCost: "40.000 - 70.000 TL"
            },
            {
                id: "f10-520d-2",
                title: "EGR Soğutucusu (Yangın Riski)",
                description: "EGR soğutucusundaki kaçak nedeniyle yangın riski. BMW geri çağırma kampanyası var.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "Her an",
                repairCost: "Ücretsiz (Yetkili Servis Geri Çağırma)"
            },
            {
                id: "f10-520d-3",
                title: "Krank Kasnağı Sesi",
                description: "Krank kasnağındaki kauçuğun kopması, motordan çıkan ritmik ses.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "150.000+ km",
                repairCost: "8.000 - 15.000 TL"
            },
            {
                id: "520d-f10-auto-4",
                title: "DPF Tıkanması",
                description: "Şehir içi kısa mesafe kullanımda DPF filtresinin dolması.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Şehir içi kullanım",
                repairCost: "5.000 - 12.000 TL"
            },
            {
                id: "520d-f10-auto-5",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
            }
        ],
        pros: [
            "Ekonomik dizel (5-6L/100km)",
            "Yüksek tork",
            "Uzun yol konforu",
            "B47 (2014+) güvenilir"
        ],
        cons: [
            "N47 zincir riski (2014 öncesi)",
            "EGR yangın riski",
            "DPF bakımı gerekli"
        ],
        buyingTips: [
            "2014+ B47 motorlu tercih edin",
            "EGR geri çağırma yapılmış mı yetkili servisten sorgulayın",
            "N47 motorlarda zincir değişim faturası isteyin"
        ]
    },
    {
        id: "bmw-520i-g30",
        slug: "bmw-520i-g30",
        brand: "BMW",
        model: "5 Serisi (G30)",
        variant: "520i 2.0 Turbo M Sport / Special Edition",
        years: "2017-2023",
        generation: "G30",
        price: 3500000,
        expertNote: "B48 2.0 Turbo 184 HP. F10'un yerini alan G30 çok daha olgun ve güvenilir. B48 motor N20'nin tüm sorunlarını çözmüş. Klima paneli çatlağı ve aktif panjur dışında ciddi sorunu yok. Borusan çıkışlı ve Special Edition (vakum/hayalet/Harman Kardon) olanları arayın.",
        reliabilityScore: 91,
        totalIssues: 5,
        searchCount: 45000,
        issues: [
            {
                id: "g30-520i-1",
                title: "Klima Paneli Çatlağı",
                description: "Klima kontrol panelinin yüzeyinde çatlama. Kronik estetik sorun.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "15.000 TL (Panel değişimi)"
            },
            {
                id: "g30-520i-2",
                title: "Aktif Panjur Takılması",
                description: "Ön panjur kanatçıklarının açık/kapalı pozisyonda takılı kalması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "5.000 TL"
            },
            {
                id: "g30-520i-3",
                title: "Elektrikli Su Pompası",
                description: "B48 motorda elektrikli su pompasının arızalanması. Hararet uyarısı.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "80.000+ km",
                repairCost: "15.000 - 28.000 TL"
            },
            {
                id: "g30-520i-4",
                title: "Lastik Basınç Sensörü",
                description: "TPMS lastik basınç sensörlerinin pil ömrü bitişi. Göstergede uyarı.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "80.000+ km / 5+ yıl",
                repairCost: "4.000 - 8.000 TL (4 adet)"
            },
            {
                id: "g30-520i-5",
                title: "Arka Fren Balata Sensörü",
                description: "Fren aşınma sensörünün erken uyarı vermesi. Sensör tek kullanımlık.",
                category: "fren",
                riskLevel: "LOW",
                affectedKm: "30.000+ km",
                repairCost: "1.500 - 3.000 TL"
            }
        ],
        pros: [
            "Mükemmel yalıtım",
            "B48 güvenilir motor",
            "Konfor ve prestij",
            "Yüksek teknoloji"
        ],
        cons: [
            "Büyük boyutlar (park zorluğu)",
            "Lastik maliyeti",
            "Yakıt tüketimi (8-10L şehir içi)"
        ],
        buyingTips: [
            "Borusan çıkışlı tercih edin",
            "Special Edition (Vakum kapı, Hayalet gösterge, Harman Kardon) arayın",
            "Lazer far opsiyonu büyük artı"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // X1
    // ═══════════════════════════════════════════════════════
    {
        id: "bmw-x1-sdrive18i",
        slug: "bmw-x1-sdrive18i",
        brand: "BMW",
        model: "X1 (F48)",
        variant: "sDrive18i 1.5 Turbo",
        years: "2015-2022",
        generation: "F48",
        price: 1600000,
        expertNote: "B38 1.5 3-silindirli Turbo 140 HP. BMW'nin giriş seviye SUV'u. Önden çekiş (sDrive) versiyonu Türkiye'de daha yaygın. 3 silindirli motor SUV'a biraz cılız kalıyor ama yakıt ekonomisi iyi.",
        reliabilityScore: 78,
        totalIssues: 5,
        searchCount: 9500,
        issues: [
            {
                id: "x1-f48-1",
                title: "Zincir Gergi (B38)",
                description: "B38 3 silindirli motorda zincir gergi sesi ve yağ pompası sorunu.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "12.000 - 25.000 TL"
            },
            {
                id: "x1-f48-2",
                title: "Vanos Yağ Sızıntısı",
                description: "Vanos biriminden yağ sızıntısı, motor bölmesinde yağ izi.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "60.000+ km",
                repairCost: "8.000 - 15.000 TL"
            },
            {
                id: "x1-f48-3",
                title: "Turbo Wastegate Sesi",
                description: "B38 motorda turbo wastegate aktüatöründen gelen metalik ses.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "40.000+ km",
                repairCost: "5.000 - 12.000 TL"
            },
            {
                id: "x1-f48-4",
                title: "Arka Süspansiyon Burcu",
                description: "Arka süspansiyon burçlarının aşınması. Kasisten geçerken vuruntu.",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "60.000+ km",
                repairCost: "3.000 - 6.000 TL"
            },
            {
                id: "x1-f48-5",
                title: "Multimedya Donması",
                description: "iDrive ekranının donması veya yeniden başlaması. Yazılım hatası.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Yazılım Güncelleme"
            }
        ],
        pros: [
            "Pratik boyutlar",
            "İyi yakıt ekonomisi (6-7L/100km)",
            "Premium marka",
            "Geniş bagaj"
        ],
        cons: [
            "3 silindirli motor SUV'a zayıf",
            "Önden çekiş (BMW ruhu yok)",
            "Bakım masrafları"
        ],
        buyingTips: [
            "Zincir sesini dinleyin",
            "Motor altını yağ kaçağı için kontrol edin",
            "xDrive versiyonu kış için daha iyi"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // X2
    // ═══════════════════════════════════════════════════════
    {
        id: "bmw-x2-sdrive18i",
        slug: "bmw-x2-sdrive18i",
        brand: "BMW",
        model: "X2 (F39)",
        variant: "sDrive18i 1.5 Turbo M Sport",
        years: "2018-2023",
        generation: "F39",
        price: 1900000,
        expertNote: "B38 1.5 Turbo 140 HP. X1'in sportif coupe SUV versiyonu. Daha alçak tavan çizgisi ve sportif duruş. Aynı mekanik platformu X1 F48 ile paylaşır. Gençlere hitap eden tasarım.",
        reliabilityScore: 79,
        totalIssues: 5,
        searchCount: 7000,
        issues: [
            {
                id: "x2-f39-1",
                title: "Zincir Gergi (B38)",
                description: "X1 ile ortak B38 motorda zincir gergi sorunu.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "12.000 - 25.000 TL"
            },
            {
                id: "x2-f39-2",
                title: "Soğutma Suyu Kaçağı",
                description: "Plastik bağlantı parçalarından soğutma sıvısı sızıntısı.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "50.000+ km",
                repairCost: "3.000 - 8.000 TL"
            },
            {
                id: "x2-f39-3",
                title: "Elektrikli Bagaj Kapağı",
                description: "Elektrikli bagaj kapağı amortisörünün zayıflaması. Kapak tam açılmaz.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "60.000+ km",
                repairCost: "4.000 - 8.000 TL"
            },
            {
                id: "x2-f39-4",
                title: "Cam Fitili Rüzgar Sesi",
                description: "Kapı cam fitillerinin sertleşmesi sonucu yüksek hızda rüzgar sesi.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Yaş kaynaklı",
                repairCost: "2.000 - 4.000 TL"
            },
            {
                id: "x2-f39-5",
                title: "Park Sensörü Hatası",
                description: "Arka park sensörlerinin kirlenme veya arıza nedeniyle yanlış uyarı vermesi.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "1.500 - 3.000 TL"
            }
        ],
        pros: [
            "Sportif SUV tasarımı",
            "Kompakt boyut",
            "M Sport standart",
            "İyi yakıt ekonomisi"
        ],
        cons: [
            "Arka kafa mesafesi düşük",
            "Bagaj X1'den küçük",
            "3 silindirli motor zayıf"
        ],
        buyingTips: [
            "M Sport X paketi (siyah kaplamalı) daha sportif duruyor",
            "Arka koltuğa oturup kafa mesafesini kontrol edin"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // X3
    // ═══════════════════════════════════════════════════════
    {
        id: "bmw-x3-xdrive20i",
        slug: "bmw-x3-xdrive20i",
        brand: "BMW",
        model: "X3 (G01)",
        variant: "xDrive20i 2.0 Turbo M Sport",
        years: "2017-2024",
        generation: "G01",
        price: 3800000,
        expertNote: "B48 2.0 Turbo 184 HP + xDrive 4 çeker. Türkiye'de orta boy premium SUV segmentinin en popüler modeli. B48 motor güvenilir, xDrive sistemi başarılı. Benzinli motor şehir içinde çok yakıyor (11L).",
        reliabilityScore: 87,
        totalIssues: 5,
        searchCount: 20000,
        issues: [
            {
                id: "x3-g01-1",
                title: "Soğutma Sıvısı Kaçağı",
                description: "Plastik hortum bağlantılarından soğutma sıvısı sızıntısı.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "50.000+ km",
                repairCost: "3.000 - 8.000 TL"
            },
            {
                id: "x3-g01-2",
                title: "Aktif Panjur Arızası",
                description: "Ön aktif panjur kanatçıklarının donması veya takılması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kış aylarında",
                repairCost: "5.000 - 10.000 TL"
            },
            {
                id: "x3-g01-3",
                title: "Elektrikli Su Pompası",
                description: "B48 motorda elektrikli su pompasının arızalanması.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "80.000+ km",
                repairCost: "15.000 - 28.000 TL"
            },
            {
                id: "x3-g01-4",
                title: "Transfer Case (xDrive)",
                description: "xDrive transfer kutusu sızıntısı veya aktüatör arızası.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "10.000 - 20.000 TL"
            },
            {
                id: "x3-g01-5",
                title: "Kapı Menteşe Korozyonu",
                description: "Kapı menteşelerinde korozyon ve kapı açılırken gıcırtı sesi.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Yaş kaynaklı",
                repairCost: "2.000 - 5.000 TL"
            }
        ],
        pros: [
            "İdeal boyut",
            "xDrive 4 çeker başarısı",
            "B48 güvenilir motor",
            "Yüksek ikinci el değeri"
        ],
        cons: [
            "Benzinli motor çok yakıyor (11L şehir içi)",
            "Rüzgar sesi",
            "M Sport süspansiyon sert"
        ],
        buyingTips: [
            "M Sport süspansiyon serttir; konfor için xLine düşünün",
            "Soğutma sıvısı seviyesini kontrol edin"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // X5
    // ═══════════════════════════════════════════════════════
    {
        id: "bmw-x5-xdrive30d",
        slug: "bmw-x5-xdrive30d-g05",
        brand: "BMW",
        model: "X5 (G05)",
        variant: "xDrive30d 3.0 Dizel M Sport",
        years: "2018-2024",
        generation: "G05",
        price: 6500000,
        expertNote: "B57 3.0 6 silindirli Dizel 265 HP. BMW'nin amiral gemisi SUV'u. Sürüş keyfi veren nadir büyük SUV'lardan biri. Hava süspansiyonu opsiyonu konfor sağlıyor ama uzun vadede maliyetli. Lazer far opsiyonu gece sürüşünde devrim.",
        reliabilityScore: 85,
        totalIssues: 5,
        searchCount: 28000,
        issues: [
            {
                id: "x5-g05-1",
                title: "Hava Süspansiyonu Körüğü",
                description: "AIRMATIC körüklerin zamanla havasını kaybetmesi, araç bir tarafa yatma.",
                category: "suspansiyon",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "40.000 - 80.000 TL"
            },
            {
                id: "x5-g05-2",
                title: "AdBlue Sistemi",
                description: "AdBlue pompası veya ısıtıcı arızası, motor güç kısıtlama uyarısı.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "60.000+ km",
                repairCost: "15.000 - 30.000 TL"
            },
            {
                id: "x5-g05-3",
                title: "Elektrikli Bagaj Kapak Amortisörü",
                description: "Elektrikli bagaj kapağı amortisörlerinin zayıflaması. Kapak tam açılmaz veya düşer.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "80.000+ km",
                repairCost: "8.000 - 15.000 TL"
            },
            {
                id: "x5-g05-4",
                title: "Panoramik Tavan Sızıntısı",
                description: "Panoramik cam tavan fitillerinin sertleşmesiyle yağmur sonrası su sızıntısı.",
                category: "govde",
                riskLevel: "MEDIUM",
                affectedKm: "Yaş kaynaklı",
                repairCost: "5.000 - 12.000 TL"
            },
            {
                id: "x5-g05-5",
                title: "Fren Disk Eğrilmesi",
                description: "Büyük ve ağır kasa nedeniyle fren disklerinin erken eğrilmesi. Titreşim.",
                category: "fren",
                riskLevel: "LOW",
                affectedKm: "30.000+ km",
                repairCost: "12.000 - 22.000 TL"
            }
        ],
        pros: [
            "Sürüş keyfi (büyük SUV için şaşırtıcı)",
            "Kaliteli iç mekan",
            "Yüksek teknoloji",
            "6 silindirli dizel güç"
        ],
        cons: [
            "Lastik maliyeti astronomik",
            "Bakım ücretleri çok yüksek",
            "Hava süspansiyon riski",
            "Yakıt (8-10L/100km)"
        ],
        buyingTips: [
            "Lazer far opsiyonu gece sürüşü için devrim niteliğindedir",
            "Hava süspansiyonlu modelde körükleri park halinde kontrol edin",
            "Borusan çıkışlı ve garantili tercih edin"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // 3 SERİSİ (DiZEL G20)
    // ═══════════════════════════════════════════════════════
    {
        id: "bmw-320d-g20",
        slug: "bmw-320d-g20",
        brand: "BMW",
        model: "3 Serisi (G20)",
        variant: "320d 2.0 Dizel xDrive M Sport",
        years: "2019-2025",
        generation: "G20",
        price: 3200000,
        expertNote: "B47 2.0 Dizel 190 HP. N47'nin tüm sorunlarını geride bırakan güvenilir dizel motor. Düşük yakıt tüketimi ile uzun yol yapanların favorisi. xDrive versiyonu kış şartlarında büyük avantaj.",
        reliabilityScore: 86,
        totalIssues: 5,
        searchCount: 15000,
        issues: [
            {
                id: "g20-320d-1",
                title: "AdBlue Pompası",
                description: "AdBlue sistemi pompa arızası ve motor güç kısıtlama uyarısı.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "60.000+ km",
                repairCost: "12.000 - 22.000 TL"
            },
            {
                id: "g20-320d-2",
                title: "DPF Rejenerasyonu",
                description: "Kısa mesafe kullanımda DPF filtresinin tıkanması ve rejenerasyon gerekliliği.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Şehir içi kullanımda",
                repairCost: "5.000 - 10.000 TL (Temizlik)"
            },
            {
                id: "g20-320d-3",
                title: "Klima Paneli Çatlağı",
                description: "Klima kontrol paneli yüzeyindeki çatlama. G20/G30 kronik sorunu.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "12.000 - 18.000 TL"
            },
            {
                id: "g20-320d-4",
                title: "Aktif Panjur Arızası",
                description: "Ön panjur kanatçıklarının takılı kalması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kış ayları",
                repairCost: "5.000 - 10.000 TL"
            },
            {
                id: "g20-320d-5",
                title: "Arka Fren Disk Korozyonu",
                description: "Arka fren disklerinde korozyon ve frende titreşim. Az kullanılan araçlarda daha sık.",
                category: "fren",
                riskLevel: "LOW",
                affectedKm: "30.000+ km",
                repairCost: "5.000 - 10.000 TL"
            }
        ],
        pros: [
            "B47 güvenilir dizel",
            "Düşük yakıt (4.5-5.5L/100km)",
            "Sportif sürüş",
            "xDrive kış güvenliği"
        ],
        cons: [
            "AdBlue bakımı",
            "Kısa mesafe kullanıma uygun değil",
            "Parça fiyatları"
        ],
        buyingTips: [
            "Uzun yol kullanılmış olanları tercih edin",
            "DPF doluluk oranını arıza cihazıyla kontrol ettirin",
            "AdBlue sistemi bakım geçmişini sorun"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // 5 SERİSİ (DiZEL G30)
    // ═══════════════════════════════════════════════════════
    {
        id: "bmw-520d-g30",
        slug: "bmw-520d-g30",
        brand: "BMW",
        model: "5 Serisi (G30)",
        variant: "520d 2.0 Dizel xDrive M Sport",
        years: "2017-2023",
        generation: "G30",
        price: 3800000,
        expertNote: "B47 2.0 Dizel 190 HP. G30'un dizel versiyonu uzun yol yapanlar için mükemmel. 4-5L/100km yakıt tüketimi ile ekonomik. AdBlue sistemi dışında ciddi sorunu yok.",
        reliabilityScore: 88,
        totalIssues: 5,
        searchCount: 16000,
        issues: [
            {
                id: "g30-520d-1",
                title: "AdBlue Sistemi",
                description: "AdBlue pompası veya ısıtıcı arızası.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "60.000+ km",
                repairCost: "12.000 - 25.000 TL"
            },
            {
                id: "g30-520d-2",
                title: "Aktif Panjur",
                description: "Ön panjur kanatçıklarının takılı kalması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "5.000 TL"
            },
            {
                id: "g30-520d-3",
                title: "Klima Paneli Çatlağı",
                description: "Klima kontrol paneli yüzeyindeki kronik çatlama sorunu.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "12.000 - 18.000 TL"
            },
            {
                id: "g30-520d-4",
                title: "DPF Doluluk (Kısa Mesafe)",
                description: "Şehir içi kısa mesafe kullanımda DPF filtresi dolması. Güç kaybı.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Şehir içi kullanım",
                repairCost: "5.000 - 12.000 TL"
            },
            {
                id: "g30-520d-5",
                title: "Lastik Basınç Sensörü",
                description: "TPMS lastik basınç sensörlerinin pil ömrü bitmesi.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "5+ yıl",
                repairCost: "4.000 - 8.000 TL"
            }
        ],
        pros: [
            "Muhteşem yakıt ekonomisi (4-5L/100km)",
            "B47 güvenilir motor",
            "Üst düzey konfor ve yalıtım",
            "xDrive güvenliği"
        ],
        cons: [
            "AdBlue bakımı",
            "Büyük boyutlar",
            "Parça fiyatları yüksek"
        ],
        buyingTips: [
            "M Sport + Special Edition donanımını arayın",
            "Uzun yol kullanılmış olanları tercih edin"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // X1 (YENİ NESİL)
    // ═══════════════════════════════════════════════════════
    {
        id: "bmw-x1-u11",
        slug: "bmw-x1-sdrive18i-u11",
        brand: "BMW",
        model: "X1 (U11)",
        variant: "sDrive18i 1.5 Turbo",
        years: "2022-2025",
        generation: "U11",
        price: 2500000,
        expertNote: "B38 1.5 Turbo 136 HP. Yeni nesil X1 tasarımıyla çok büyüdü. İç mekan kalitesi ve teknoloji önceki nesle göre devrim niteliğinde. Curved Display (kavisli ekran) standart. 3 silindirli motor yeterli ama heyecansız.",
        reliabilityScore: 82,
        totalIssues: 4,
        searchCount: 8000,
        issues: [
            {
                id: "x1-u11-1",
                title: "Soğutma Sistemi",
                description: "Plastik soğutma hortum bağlantılarından sızıntı. BMW'nin kronik sorunu.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "40.000+ km",
                repairCost: "3.000 - 8.000 TL"
            },
            {
                id: "x1-u11-2",
                title: "Curved Display Yansıma",
                description: "Kavisli ekranda güneş ışığında aşırı yansıma. Tasarım sorunu.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Tasarım",
                repairCost: "Ekran koruyucu film"
            },
            {
                id: "x1-u11-3",
                title: "B38 Turbo Wastegate Sesi",
                description: "3 silindirli motorda turbo wastegate aktüatöründen metalik tıkırtı.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "30.000+ km",
                repairCost: "5.000 - 12.000 TL"
            },
            {
                id: "x1-u11-4",
                title: "Otomatik Park Sistemi Hassasiyeti",
                description: "Park sensörlerinin aşırı hassas tepki vermesi. Sürekli uyarı.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Yazılım Güncelleme"
            }
        ],
        pros: [
            "Devasa iç mekan (sınıf lideri)",
            "Curved Display teknolojisi",
            "Modern tasarım",
            "Geniş bagaj"
        ],
        cons: [
            "3 silindirli motor heyecansız",
            "Fiyat önceki nesle göre çok arttı",
            "Önden çekiş"
        ],
        buyingTips: [
            "M Sport paketi standart gelir",
            "Garantisi devam eden tercih edin"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // X3 (YENİ NESİL)
    // ═══════════════════════════════════════════════════════
    {
        id: "bmw-x3-xdrive20d",
        slug: "bmw-x3-xdrive20d-g01",
        brand: "BMW",
        model: "X3 (G01)",
        variant: "xDrive20d 2.0 Dizel M Sport",
        years: "2017-2024",
        generation: "G01",
        price: 4200000,
        expertNote: "B47 2.0 Dizel 190 HP + xDrive. X3'ün dizel versiyonu uzun yol yapan aileler için ideal. Düşük yakıt tüketimi ve yüksek tork. AdBlue sistemi dışında sorunsuz bir araç.",
        reliabilityScore: 86,
        totalIssues: 5,
        searchCount: 11000,
        issues: [
            {
                id: "x3-20d-1",
                title: "AdBlue Pompası",
                description: "AdBlue sistemi arızası ve motor güç kısıtlaması.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "60.000+ km",
                repairCost: "12.000 - 25.000 TL"
            },
            {
                id: "x3-20d-2",
                title: "Arka Fren Disk Eğrilmesi",
                description: "Arka fren disklerinin zamanla eğrilmesi ve frende titreşim.",
                category: "fren",
                riskLevel: "LOW",
                affectedKm: "40.000+ km",
                repairCost: "5.000 - 10.000 TL"
            },
            {
                id: "x3-20d-3",
                title: "DPF Doluluk Sorunu",
                description: "Kısa mesafe kullanımda DPF filtresinin tıkanması.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Şehir içi kullanım",
                repairCost: "5.000 - 12.000 TL"
            },
            {
                id: "x3-20d-4",
                title: "Transfer Case Sızıntısı",
                description: "xDrive transfer kutusu conta sızıntısı.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "8.000 - 18.000 TL"
            },
            {
                id: "x3-20d-5",
                title: "Aktif Panjur Motoru",
                description: "Ön panjur elektrik motorunun arızalanması. Hata kodu.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "5.000 - 10.000 TL"
            }
        ],
        pros: [
            "Düşük yakıt (5-6L/100km)",
            "B47 güvenilir dizel",
            "xDrive 4 çeker",
            "İdeal aile SUV'u"
        ],
        cons: [
            "AdBlue bakımı",
            "Benzinliye göre yavaş hissedebilir",
            "Parça fiyatları"
        ],
        buyingTips: [
            "Uzun yol kullanımı tercih edin",
            "AdBlue sistemi kontrol ettirin"
        ]
    },

    // ─── Eski new-cars dosyasından taşındı ───
    {
        id: "bmw-218i-gran-coupe-msport",
        slug: "bmw-218i-gran-coupe-msport",
        brand: "BMW",
        model: "2 Serisi",
        variant: "218i Gran Coupé M Sport",
        years: "2020-2025",
        generation: "F44",
        price: 1800000,
        expertNote: "Giriş seviye BMW. Önden çekişlidir — BMW puristleri sevmez ama gerçek dünyada çok iyi bir araçtır. 1.5 3 silindir motor bu kasaya yeterlidir. M Sport paketi şarttır.",
        reliabilityScore: 82,
        totalIssues: 5,
        searchCount: 25000,
        issues: [
            {
                id: "218i-gc-1",
                title: "3 Silindir Titreşimi",
                description: "1.5L 3 silindirli motorun rölantide hissedilen titreşimi. Motor takozu aşındıkça kötüleşir.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Motor Takozu (5.000 TL)"
            },
            {
                id: "218i-gc-2",
                title: "Triger Zinciri Uzaması",
                description: "B38 motorun triger zincirinin uzama eğilimi. İlk çalıştırmada şakırtı sesi.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "80.000+ km",
                repairCost: "15.000 - 25.000 TL"
            },
            {
                id: "218i-gc-3",
                title: "iDrive Yazılım Hataları",
                description: "iDrive 7 sisteminin donması ve kamera görüntüsünün gecikmesi.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Yazılım Güncellemesi"
            },
            {
                id: "218i-gc-4",
                title: "Süspansiyon Sertliği (M Sport)",
                description: "M Sport paketinin sert süspansiyonunun bozuk yollarda konfor kaybına neden olması.",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Çözümsüz (Tasarım)"
            },
            {
                id: "218i-gc-5",
                title: "Su Pompası Kaçağı",
                description: "BMW'nin klasik elektrikli su pompası arızası. Su seviyesi düşüşü.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "60.000+ km",
                repairCost: "8.000 - 15.000 TL"
            }
        ],
        pros: [
            "BMW prestiji",
            "M Sport görünüşü",
            "İyi yol tutuşu"
        ],
        cons: [
            "Önden çekiş",
            "3 silindir titreşimi",
            "Dar arka koltuk"
        ],
        buyingTips: [
            "M Sport paketsiz almayın — satarken çok daha zor gider",
            "Triger zinciri kontrol ettirin",
            "Garanti kapsamını kontrol edin"
        ]
    }
,

    // ─── Eski new-cars dosyasından taşındı ───
    {
        id: "bmw-e90-320i-2-0",
        slug: "bmw-e90-320i-2-0",
        brand: "BMW",
        model: "3 Serisi (E90)",
        variant: "E90 320i N46 2.0 (150hp)",
        years: "2005-2012",
        generation: "E90",
        price: 550000,
        reliabilityScore: 73,
        totalIssues: 6,
        searchCount: 14000,
        expertNote: "E90 320i son gerçek doğal emişli BMW. N46 2.0 motor güvenilir ama VANOS ve valf troniği sorunları var. Otomatik şanzıman ZF 6HP sorunsuz. Sürüş keyfi hâlâ rakipsiz.",
        issues: [
            { id: "e90-1", title: "VANOS Solenoid Arızası", description: "Değişken supap zamanlaması (VANOS) solenoitin tıkanması. Motor çekiş kaybı, rölanti düzensizliği.", category: "motor", riskLevel: "HIGH", affectedKm: "80.000+ km", repairCost: "3.000 - 8.000 TL" },
            { id: "e90-2", title: "N46 Valf Troniği Arızası", description: "Valvetronic motor ayar sistemi arızası. Motor arıza lambası ve limp mode.", category: "motor", riskLevel: "HIGH", affectedKm: "100.000+ km", repairCost: "5.000 - 12.000 TL" },
            { id: "e90-3", title: "Devirdaim Pompası/Termostat", description: "Elektrikli devirdaim pompası veya termostatın arızalanması. Hararet riski.", category: "motor", riskLevel: "HIGH", affectedKm: "80.000+ km", repairCost: "5.000 - 10.000 TL" },
            { id: "e90-4", title: "Yağ Filtre Gövdesi Kaçağı", description: "Yağ filtre gövdesinden yağ sızıntısı. Motor bölgesinde yağ birikmesi.", category: "motor", riskLevel: "MEDIUM", affectedKm: "80.000+ km", repairCost: "2.000 - 5.000 TL" },
            { id: "e90-5", title: "Arka Süspansiyon Burçları", description: "Arka süspansiyon burçlarının kuruması ve çatlaması. Vuruntu sesi.", category: "suspansiyon", riskLevel: "MEDIUM", affectedKm: "60.000+ km", repairCost: "3.000 - 6.000 TL" },
            { id: "e90-6", title: "CCC/CIC iDrive Arızası", description: "iDrive ekranının donması, DVD sürücü arızası, navigasyon hatası.", category: "elektronik", riskLevel: "LOW", affectedKm: "Yaş kaynaklı", repairCost: "5.000 - 10.000 TL" }
        ],
        pros: ["Son doğal emişli BMW", "Mükemmel sürüş dinamikleri", "ZF 6HP güvenilir", "Yüksek prestij"],
        cons: ["VANOS/Valvetronic bakımı pahalı", "Yaşı nedeniyle elektronik sorunlar", "BMW servisi pahalı"],
        buyingTips: ["VANOS sesini dinleyin (Tıkırtı)", "Antifriz seviyesini kontrol edin", "Arıza kodlarını tarattırın"]
    }
,
    {
            "id": "bmw-f30-320i",
            "slug": "bmw-f30-320i",
            "brand": "BMW",
            "model": "3 Serisi (F30)",
            "variant": "320i 2.0 Turbo",
            "years": "2012-2019",
            "generation": "F30",
            "price": 1100000,
            "expertNote": "N20 2.0 Turbo 184 HP. F30 Türkiye'de çok popüler, sürüş keyfi hâlâ rakipsiz. N20 motorun zincir problemi kritik. Zincir sesi varsa uzak durun.",
            "reliabilityScore": 76,
            "totalIssues": 5,
            "searchCount": 22000,
            "issues": [
                    {
                            "id": "f30-1",
                            "title": "N20 Zincir Uzaması",
                            "description": "N20 2.0 Turbo motorda triger zinciri uzaması. Kritik motor hasarı riski.",
                            "category": "motor",
                            "riskLevel": "CRITICAL",
                            "affectedKm": "60.000 - 100.000 km",
                            "repairCost": "15.000 - 30.000 TL"
                    },
                    {
                            "id": "f30-2",
                            "title": "Yağ Filtre Gövdesi Kaçağı",
                            "description": "Plastik yağ filtre gövdesinden sızıntı.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "60.000+ km",
                            "repairCost": "3.000 - 6.000 TL"
                    },
                    {
                            "id": "f30-3",
                            "title": "Devirdaim Pompası",
                            "description": "Elektrikli su pompasının arızalanması. Hararet riski.",
                            "category": "motor",
                            "riskLevel": "HIGH",
                            "affectedKm": "80.000+ km",
                            "repairCost": "5.000 - 10.000 TL"
                    },
                    {
                            "id": "f30-4",
                            "title": "Direksiyon Kutusu Sesi",
                            "description": "Direksiyon kutusundan tıkırtı sesi.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "60.000+ km",
                            "repairCost": "3.000 - 8.000 TL"
                    },
                    {
                            "id": "f30-5",
                            "title": "iDrive Donma",
                            "description": "iDrive NBT ekranının donması.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Rastgele",
                            "repairCost": "Yazılım"
                    }
            ],
            "pros": [
                    "Mükemmel sürüş",
                    "Prestij",
                    "Arka çeker keyfi",
                    "N20 performans"
            ],
            "cons": [
                    "Zincir uzaması KRİTİK",
                    "Bakım pahalı",
                    "Parça fiyatları"
            ],
            "buyingTips": [
                    "Soğukta çalıştırıp zincir sesi dinleyin",
                    "Yağ seviyesi kontrol",
                    "LCI (facelift) tercih edin"
            ]
    }
,
    {
            "id": "bmw-e46-320i",
            "slug": "bmw-e46-320i",
            "brand": "BMW",
            "model": "3 Serisi (E46)",
            "variant": "320i 2.2 (170hp)",
            "years": "1998-2005",
            "generation": "E46",
            "price": 400000,
            "expertNote": "M54 2.2L 170 HP. Efsanevi E46 hâlâ Türkiye sokaklarında çok. Doğal emişli motor güvenilir ama yaşı nedeniyle soğutma ve elektrik sorunları. Drift kültürünün sembolü.",
            "reliabilityScore": 72,
            "totalIssues": 5,
            "searchCount": 15000,
            "issues": [
                    {
                            "id": "e46-1",
                            "title": "Soğutma Sistemi",
                            "description": "Plastik genleşme tankı, termostat ve devirdaim pompası arızası. Kronik hararet riski.",
                            "category": "motor",
                            "riskLevel": "HIGH",
                            "affectedKm": "Her 60.000 km",
                            "repairCost": "5.000 - 12.000 TL"
                    },
                    {
                            "id": "e46-2",
                            "title": "Arka Subframe Çatlağı",
                            "description": "Arka subframe bağlantı noktalarında çatlama. Ciddi güvenlik riski.",
                            "category": "suspansiyon",
                            "riskLevel": "CRITICAL",
                            "affectedKm": "Yaş/km kaynaklı",
                            "repairCost": "10.000 - 25.000 TL"
                    },
                    {
                            "id": "e46-3",
                            "title": "Cam Kaldırma Mekanizması",
                            "description": "Cam kaldırma klips ve tellerinin kırılması.",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "Kronik",
                            "repairCost": "1.000 - 2.000 TL"
                    },
                    {
                            "id": "e46-4",
                            "title": "VANOS Contası",
                            "description": "VANOS sistemi contalarının sertleşmesi. Performans kaybı.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "100.000+ km",
                            "repairCost": "3.000 - 6.000 TL"
                    },
                    {
                            "id": "e46-5",
                            "title": "Gösterge Pixel Bozulması",
                            "description": "Gösterge paneli ve klima ekranı pixel kaybı.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "1.500 - 3.000 TL"
                    }
            ],
            "pros": [
                    "Efsanevi sürüş",
                    "M54 motor güvenilir",
                    "Yedek parça bol",
                    "Klasikleşiyor"
            ],
            "cons": [
                    "Soğutma sistemi kronik",
                    "Subframe riski",
                    "Yaşı nedeniyle her şey eskimiş"
            ],
            "buyingTips": [
                    "Subframe çatlağı KRİTİK kontrol ettirin",
                    "Soğutma sistemi yenilenmiş mi sorun",
                    "Antifriz seviyesi kontrol edin"
            ]
    }
,
    {
            "id": "bmw-x5-e70-3-0d",
            "slug": "bmw-x5-e70-3-0d",
            "brand": "BMW",
            "model": "X5 (E70)",
            "variant": "3.0d xDrive (235hp)",
            "years": "2007-2013",
            "generation": "E70",
            "price": 1200000,
            "expertNote": "M57 3.0d 235 HP. E70 X5 Türkiye'de çok aranan lüks SUV. Güçlü dizel motor güvenilir ama turbo ve enjektöre dikkat. Hava süspansiyonu pahalı arıza kalemi.",
            "reliabilityScore": 74,
            "totalIssues": 5,
            "searchCount": 12000,
            "issues": [
                    {
                            "id": "e70-1",
                            "title": "Hava Süspansiyonu",
                            "description": "Arka hava yastıkları patlama/sızıntı. Araç bir tarafa yatar.",
                            "category": "suspansiyon",
                            "riskLevel": "HIGH",
                            "affectedKm": "80.000+ km",
                            "repairCost": "15.000 - 30.000 TL"
                    },
                    {
                            "id": "e70-2",
                            "title": "Turbo Kartuş Aşınması",
                            "description": "M57 turbo kartuşunun aşınması. Güç kaybı ve mavi duman.",
                            "category": "motor",
                            "riskLevel": "HIGH",
                            "affectedKm": "120.000+ km",
                            "repairCost": "10.000 - 20.000 TL"
                    },
                    {
                            "id": "e70-3",
                            "title": "Transfer Case Arızası",
                            "description": "xDrive transfer kutusu aktüatör arızası.",
                            "category": "sanziman",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "100.000+ km",
                            "repairCost": "15.000 - 25.000 TL"
                    },
                    {
                            "id": "e70-4",
                            "title": "Panoramik Tavan Dreni",
                            "description": "Drenaj tıkanması sonucu su sızması.",
                            "category": "govde",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "3.000 - 8.000 TL"
                    },
                    {
                            "id": "e70-5",
                            "title": "CCC/CIC iDrive",
                            "description": "iDrive ekranının donması.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "5.000 - 10.000 TL"
                    }
            ],
            "pros": [
                    "Güçlü M57 dizel",
                    "Lüks iç mekan",
                    "xDrive güvenliği",
                    "Prestij"
            ],
            "cons": [
                    "Hava süspansiyon riski",
                    "Bakım astronomik",
                    "Yakıt 10-12L"
            ],
            "buyingTips": [
                    "Hava süspansiyonu test edin",
                    "Turbo sesi dinleyin",
                    "Transfer case kontrol"
            ]
    }
,
    {
            "id": "bmw-f10-520d",
            "slug": "bmw-f10-520d",
            "brand": "BMW",
            "model": "5 Serisi (F10)",
            "variant": "520d 2.0 (184hp)",
            "years": "2010-2017",
            "generation": "F10",
            "price": 1100000,
            "expertNote": "N47/B47 2.0d 184 HP. F10 Türkiye'de iş dünyasının otomobili. N47 motordan uzak durun (zincir arkada), B47 (2014+) tercih edin.",
            "reliabilityScore": 76,
            "totalIssues": 5,
            "searchCount": 18000,
            "issues": [
                    {
                            "id": "f10-1",
                            "title": "N47 Zincir Sorunu",
                            "description": "N47 motorlarda triger zinciri arkada olduğundan motor indirme gerektirir.",
                            "category": "motor",
                            "riskLevel": "CRITICAL",
                            "affectedKm": "80.000+ km",
                            "repairCost": "20.000 - 40.000 TL"
                    },
                    {
                            "id": "f10-2",
                            "title": "Turbo Aktuatör",
                            "description": "Turbo elektronik aktuatör arızası.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "100.000+ km",
                            "repairCost": "5.000 - 12.000 TL"
                    },
                    {
                            "id": "f10-3",
                            "title": "Şanzıman Sarsıntısı",
                            "description": "ZF 8HP şanzımanda soğukta sert geçişler.",
                            "category": "sanziman",
                            "riskLevel": "LOW",
                            "affectedKm": "Soğuk hava",
                            "repairCost": "Yağ Değişimi"
                    },
                    {
                            "id": "f10-4",
                            "title": "Direksiyon Kutusu",
                            "description": "Direksiyon kutusundan tıkırtı.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "80.000+ km",
                            "repairCost": "5.000 - 12.000 TL"
                    },
                    {
                            "id": "f10-5",
                            "title": "NBT iDrive Arıza",
                            "description": "iDrive ekranının donması.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Rastgele",
                            "repairCost": "Yazılım"
                    }
            ],
            "pros": [
                    "İş dünyasının favorisi",
                    "ZF 8HP mükemmel",
                    "Konforlu sürüş",
                    "Prestij"
            ],
            "cons": [
                    "N47 zincir KRİTİK",
                    "Bakım pahalı",
                    "Parça fiyatları"
            ],
            "buyingTips": [
                    "N47 DEĞİL B47 (2014+) alın",
                    "ZF yağ değişimini sorun",
                    "LCI tercih edin"
            ]
    }
,
    {
            "id": "bmw-e36-316i",
            "slug": "bmw-e36-316i-m43",
            "brand": "BMW",
            "model": "3 Serisi",
            "variant": "E36 316i M43",
            "years": "1990-2000",
            "generation": "E36",
            "price": 250000,
            "expertNote": "M43B16 1.6 102 HP. E36 Türkiye'de çok yaygın. 316i en ekonomik versiyonu. M43 motor güvenilir ve ucuz bakımlı. Drift kültürünün sembolü.",
            "reliabilityScore": 75,
            "totalIssues": 5,
            "searchCount": 20000,
            "issues": [
                    {
                            "id": "e36-1",
                            "title": "Soğutma Sistemi",
                            "description": "Plastik su deposu, termostat ve radyatör sızıntısı.",
                            "category": "motor",
                            "riskLevel": "HIGH",
                            "affectedKm": "Kronik",
                            "repairCost": "1.000 - 3.000 TL"
                    },
                    {
                            "id": "e36-2",
                            "title": "Arka Süspansiyon Burçları",
                            "description": "Arka süspansiyon trailing arm burçlarının aşınması.",
                            "category": "suspansiyon",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "80.000+ km",
                            "repairCost": "1.500 - 3.000 TL"
                    },
                    {
                            "id": "e36-3",
                            "title": "Kaporta Pası",
                            "description": "Kapı altları, jant kenarları ve tavan paslanması.",
                            "category": "govde",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "Boya / Kaynak"
                    },
                    {
                            "id": "e36-4",
                            "title": "VANOS Contası",
                            "description": "VANOS ünitesinin contasının sertleşmesi.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "100.000+ km",
                            "repairCost": "1.000 - 2.000 TL"
                    },
                    {
                            "id": "e36-5",
                            "title": "Cam Kaldırma",
                            "description": "Cam kaldırma mekanizması klipsi kırılması.",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "300 - 800 TL"
                    }
            ],
            "pros": [
                    "BMW sürüş keyfi",
                    "M43 güvenilir",
                    "Drift/spor potansiyeli",
                    "Koleksiyoner değeri arttı"
            ],
            "cons": [
                    "Soğutma sistemi kronik",
                    "Pas sorunu",
                    "BMW parça maliyeti",
                    "Yaşlı araç"
            ],
            "buyingTips": [
                    "Soğutma sistemi yenilenmiş mi",
                    "Arka burçları kontrol edin",
                    "316i en ekonomik BMW",
                    "Coupe versiyonu koleksiyonluk"
            ]
    }
,
    {
            "id": "bmw-e36-318is",
            "slug": "bmw-e36-318is-m42",
            "brand": "BMW",
            "model": "3 Serisi",
            "variant": "E36 318is M42/M44",
            "years": "1990-2000",
            "generation": "E36",
            "price": 300000,
            "expertNote": "M42/M44 1.8 140 HP. 318is Coupe E36'nın sportif versiyonu. VANOS'lu M44 daha güçlü. Çift kapılı coupe çok aranan versiyon. Drift ve pist aracı.",
            "reliabilityScore": 74,
            "totalIssues": 5,
            "searchCount": 15000,
            "issues": [
                    {
                            "id": "e36is-1",
                            "title": "VANOS Contası",
                            "description": "M44 motorlarda VANOS contası sertleşmesi. Performans kaybı.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "80.000+ km",
                            "repairCost": "1.500 - 3.000 TL"
                    },
                    {
                            "id": "e36is-2",
                            "title": "Soğutma Sistemi",
                            "description": "Plastik parçaların çatlaması. Hararet riski.",
                            "category": "motor",
                            "riskLevel": "HIGH",
                            "affectedKm": "Kronik",
                            "repairCost": "1.000 - 3.000 TL"
                    },
                    {
                            "id": "e36is-3",
                            "title": "Yağ Filtresi Contası",
                            "description": "Yağ filtresi yuvasından yağ kaçağı.",
                            "category": "motor",
                            "riskLevel": "LOW",
                            "affectedKm": "Kronik",
                            "repairCost": "200 - 500 TL"
                    },
                    {
                            "id": "e36is-4",
                            "title": "Arka Diferansiyel",
                            "description": "Arka diferansiyel homurtusu (drift kullanımı).",
                            "category": "sanziman",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Kullanıma bağlı",
                            "repairCost": "3.000 - 8.000 TL"
                    },
                    {
                            "id": "e36is-5",
                            "title": "Triger Zinciri",
                            "description": "M42 motorlarda triger zinciri gergi kılavuz aşınması.",
                            "category": "motor",
                            "riskLevel": "HIGH",
                            "affectedKm": "120.000+ km",
                            "repairCost": "3.000 - 6.000 TL"
                    }
            ],
            "pros": [
                    "Sportif coupe",
                    "VANOS M44 güçlü",
                    "BMW sürüş keyfi",
                    "Koleksiyoner arttı"
            ],
            "cons": [
                    "Soğutma kronik",
                    "Drift'le yıpranmış olabilir",
                    "Parça pahalı",
                    "Fiyatı çok arttı"
            ],
            "buyingTips": [
                    "Drift aracı olarak kullanılmış mı",
                    "VANOS sesi dinleyin",
                    "M44 motor tercih edin",
                    "Coupe kaporta hasarı kontrol"
            ]
    }
,
    {
            "id": "bmw-e39-520i-m52",
            "slug": "bmw-e39-520i-m52",
            "brand": "BMW",
            "model": "5 Serisi",
            "variant": "E39 520i M52",
            "years": "1996-2003",
            "generation": "E39",
            "price": 350000,
            "expertNote": "M52B20 2.0 150 HP. E39 birçok otomobil gazetecisine göre en iyi 5 Serisi. Mükemmel sürüş, kaliteli yapı. 520i en ekonomik versiyonu. Touring çok aranır.",
            "reliabilityScore": 74,
            "totalIssues": 6,
            "searchCount": 18000,
            "issues": [
                    {
                            "id": "e39-1",
                            "title": "Soğutma Sistemi",
                            "description": "Genleşme kabı, termostat, su pompası. Plastik parçalar.",
                            "category": "motor",
                            "riskLevel": "HIGH",
                            "affectedKm": "Kronik",
                            "repairCost": "2.000 - 5.000 TL"
                    },
                    {
                            "id": "e39-2",
                            "title": "VANOS Contası",
                            "description": "VANOS ünitesi contası sertleşmesi. Gürültü ve güç kaybı.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "100.000+ km",
                            "repairCost": "1.500 - 3.000 TL"
                    },
                    {
                            "id": "e39-3",
                            "title": "Ön Süspansiyon",
                            "description": "Ön alt kol ve burçların aşınması.",
                            "category": "suspansiyon",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "60.000+ km",
                            "repairCost": "2.000 - 5.000 TL"
                    },
                    {
                            "id": "e39-4",
                            "title": "Kaporta Pası",
                            "description": "Tavan, kapı altları ve bagaj kenarları paslanması.",
                            "category": "govde",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "Boya / Kaynak"
                    },
                    {
                            "id": "e39-5",
                            "title": "Yağ Kaçağı",
                            "description": "Valf kapağı ve karter contasından yağ kaçağı.",
                            "category": "motor",
                            "riskLevel": "LOW",
                            "affectedKm": "100.000+ km",
                            "repairCost": "1.000 - 2.500 TL"
                    },
                    {
                            "id": "e39-6",
                            "title": "Piksel Sorunu",
                            "description": "Gösterge paneli ve OBC piksellerinin sönmesi.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "500 - 1.500 TL"
                    }
            ],
            "pros": [
                    "En iyi 5 Serisi",
                    "Mükemmel sürüş",
                    "M52 motor güvenilir",
                    "Touring efsane"
            ],
            "cons": [
                    "Soğutma sistemi",
                    "BMW bakım maliyeti",
                    "Yaşlı araç",
                    "Süspansiyon maliyetli"
            ],
            "buyingTips": [
                    "Soğutma sistemi komple yenilenmiş mi",
                    "VANOS sesi kontrol",
                    "Touring çok talep gördü",
                    "Sedan de konforlu"
            ]
    }
];
