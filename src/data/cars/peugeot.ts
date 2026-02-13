import { Car } from '@/types';

export const peugeotCars: Car[] = [
    {
        id: "peugeot-2008-1-2-puretech",
        slug: "peugeot-2008-1-2-puretech",
        brand: "Peugeot",
        model: "2008",
        variant: "1.2 PureTech",
        years: "2020-2024",
        generation: "P24",
        reliabilityScore: 50,
        totalIssues: 2,
        searchCount: 11000,
        issues: [
            {
                id: "2008-1",
                title: "Triger Kayışı Ufalanması (Wet Belt)",
                description: "Yağ içinde çalışan kayışın zamanla parçalanıp yağ pompasını tıkaması (Motor kilitleme riski).",
                category: "motor",
                riskLevel: "CRITICAL",
                affectedKm: "40.000 - 60.000 km",
                repairCost: "40.000 - 120.000 TL"
            },
            {
                id: "2008-2",
                title: "Aşırı Yağ Tüketimi",
                description: "Segman kurumlanması ve valf lastikleri nedeniyle 1000 km'de yarım litreye varan yağ eksiltme.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "60.000+ km",
                repairCost: "25.000 - 50.000 TL"
            },
            {
                id: "2008-3",
                title: "Buji ve Bobin Arızası",
                description: "Yağ yakma kaynaklı bujilerin yağlanması ve ateşleme bobini arızası (Tekleme).",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "30.000+ km",
                repairCost: "3.000 - 6.000 TL"
            },
            {
                id: "2008-4",
                title: "Katalitik Konvertör Arızası",
                description: "Yanmayan yağın katalizörü tıkaması sonucu motor arıza lambası (P0420).",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "15.000 - 25.000 TL"
            },
            {
                id: "2008-5",
                title: "Multimedya Ekran Sorunu",
                description: "Ekranın dokunmatiğinin donması veya kararması (Yazılım güncellemesi gerekebilir).",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Yazılım / Değişim"
            }
        ],
        pros: [
            "Harika tasarım",
            "i-Cockpit",
            "EAT8 tam otomatik şanzıman"
        ],
        cons: [
            "Triger kayışı parçalanma riski",
            "Küçük direksiyon göstergeyi kapatabiliyor"
        ],
        buyingTips: [
            "Triger kayışı değişimi yapılmış mı? (40.000 de olsa bile)",
            "Yağ basıncı uyarısı geçmişine bakın"
        ]
    },
    {
        id: "peugeot-3008-1-5-bluehdi",
        slug: "peugeot-3008-1-5-bluehdi",
        brand: "Peugeot",
        model: "3008",
        variant: "1.5 BlueHDi",
        years: "2016-2023",
        generation: "P84",
        reliabilityScore: 55,
        totalIssues: 2,
        searchCount: 13500,
        issues: [
            {
                id: "3008-2",
                title: "Eksantrik Zinciri Kopması (7mm)",
                description: "1.5 BlueHDi motorlarda 7mm zincir kopup motoru kırabilir (8mm revize zincir şart).",
                category: "motor",
                riskLevel: "CRITICAL",
                affectedKm: "40.000 - 100.000 km",
                repairCost: "150.000 - 250.000 TL"
            },
            {
                id: "3008-1",
                title: "AdBlue Tankı ve Pompa Arızası",
                description: "AdBlue tankının deforme olması veya pompanın tıkanması (UREA ışığı yakar).",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "60.000+ km",
                repairCost: "30.000 - 50.000 TL"
            },
            {
                id: "3008-3",
                title: "DPF Tıkanıklığı",
                description: "Şehir içi kullanımda Dizel Partikül Filtresi'nin dolması ve çekiş düşüklüğü.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Şehir içi",
                repairCost: "5.000 - 10.000 TL (Temizlik)"
            },
            {
                id: "3008-4",
                title: "Multimedya ve Elektronik Hatalar",
                description: "Hayalet ekranın gitmesi, dokunmatiğin donması veya sensör hataları.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Yazılım / Değişim"
            },
            {
                id: "3008-5",
                title: "Kaput Dalgalanması",
                description: "Yüksek hızlarda kaputun titreme yapması (Ayar gerektirir).",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "120+ km/s",
                repairCost: "Ayarlama"
            }
        ],
        pros: [
            "Premium iç mekan",
            "Konfor",
            "Düşük tüketim"
        ],
        cons: [
            "AdBlue ve Zincir riskleri",
            "İkinci elde değer kaybı (Zincir korkusu)"
        ],
        buyingTips: [
            "Eksantrik zinciri 8mm revize edilmiş mi?",
            "AdBlue iptali var mı bakın"
        ]
    },
    {
        id: "peugeot-308-new-1-2",
        slug: "peugeot-308-new-1-2",
        brand: "Peugeot",
        model: "308",
        variant: "1.2 PureTech",
        years: "2022-2024",
        generation: "P51",
        reliabilityScore: 81,
        totalIssues: 1,
        searchCount: 8000,
        issues: [
            {
                id: "308-1",
                title: "Ekran Yazılımı",
                description: "Infotainment sistemi yavaşlığı.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Yazılım"
            }
        ],
        pros: [
            "Premium tasarım",
            "Kalite",
            "Sürüş"
        ],
        cons: [
            "Motor sesi",
            "Fiyat"
        ],
        buyingTips: [
            "Yazılım güncellemelerini sorun"
        ]
    },
    {
        id: "peugeot-408-1-2-puretech",
        slug: "peugeot-408-1-2-puretech",
        brand: "Peugeot",
        model: "408",
        variant: "1.2 PureTech",
        years: "2023-2024",
        generation: "Mk1",
        reliabilityScore: 82,
        totalIssues: 1,
        searchCount: 9500,
        issues: [
            {
                id: "408-1",
                title: "Triger Kayışı Ufalanması (Wet Belt)",
                description: "Yağ içinde çalışan triger kayışının parçalanarak yağ pompasını tıkaması (Kritik).",
                category: "motor",
                riskLevel: "CRITICAL",
                affectedKm: "40.000+ km",
                repairCost: "40.000 - 70.000 TL"
            },
            {
                id: "408-2",
                title: "Benzin Kaçağı (Recall)",
                description: "Yüksek basınçlı yakıt borusunda sızıntı riski (Geri çağırma işlemi).",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "2023-2025 Modeller",
                repairCost: "Ücretsiz (Servis)"
            },
            {
                id: "408-3",
                title: "Aşırı Yağ Tüketimi",
                description: "Segmanlardan kaynaklı motorun yağ yakması.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "50.000+ km",
                repairCost: "Motor Yenileme"
            },
            {
                id: "408-4",
                title: "i-Cockpit Ekran Donması",
                description: "3D gösterge paneli veya multimedya ekranının tepkisiz kalması.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Yazılım"
            },
            {
                id: "408-5",
                title: "Start-Stop Çalışmaması",
                description: "Akü şarj seviyesi nedeniyle sistemin devreye girmemesi.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Kısa Mesafe",
                repairCost: "Akü Şarjı"
            }
        ],
        pros: [
            "Göz alıcı tasarım",
            "Genişlik",
            "Konfor"
        ],
        cons: [
            "Arka görüş kısıtlı",
            "Motor performansı"
        ],
        buyingTips: [
            "Özel servis geçmişine bakın"
        ]
    },
    {
        id: "peugeot-208-puretech",
        slug: "peugeot-208-1-2-puretech",
        brand: "Peugeot",
        model: "208",
        variant: "1.2 PureTech Allure",
        years: "2019-2024",
        generation: "P21",
        price: 1200000,
        reliabilityScore: 82,
        totalIssues: 2,
        searchCount: 13000,
        issues: [
            {
                id: "208-1",
                title: "Triger Kayışı",
                description: "Kayışın yağ içinde çalışması nedeniyle ufalanıp yağ pompasını tıkaması (Eski serilerde).",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "60.000+ km",
                repairCost: "20.000 - 40.000 TL"
            },
            {
                id: "208-2",
                title: "AdBlue Arızası",
                description: "Dizel versiyonlarda tank değişimi gerekebilir.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "15.000 - 25.000 TL"
            }
        ],
        pros: [
            "i-Cockpit tasarım",
            "Yol tutuş",
            "8 ileri EAT8 şanzıman"
        ],
        cons: [
            "Arka alan dar",
            "Direksiyon göstergeyi kapatabiliyor (Boy'a göre)"
        ],
        buyingTips: [
            "Triger kayışının durumunu yağ kapağından kontrol ettirin (Şişme/çatlama var mı)."
        ]
    },
    {
        id: "peugeot-rifter",
        slug: "peugeot-rifter-1-5-bluehdi",
        brand: "Peugeot",
        model: "Rifter",
        variant: "1.5 BlueHDi GT",
        years: "2019-2024",
        generation: "Mk3",
        reliabilityScore: 82,
        totalIssues: 2,
        searchCount: 8000,
        issues: [
            {
                id: "rifter-2",
                title: "Triger (Zincir)",
                description: "Eksantrik zinciri sesi (1.5 dizel).",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "80.000+ km",
                repairCost: "15.000 TL"
            },
            {
                id: "rifter-1",
                title: "AdBlue",
                description: "AdBlue sistemi ve pompa arızası.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "40.000+ km",
                repairCost: "25.000 TL"
            }
        ],
        pros: [
            "SUV görünümlü ticari",
            "i-Cockpit",
            "8 İleri Otomatik"
        ],
        cons: [
            "AdBlue riski",
            "Sert süspansiyon"
        ],
        buyingTips: [
            "Yük taşınmamış, aile aracı olarak kullanılmış olanı bulun."
        ]
    },
    {
        id: "peugeot-5008-1-6-bluehdi",
        slug: "peugeot-5008-1-6-bluehdi",
        brand: "Peugeot",
        model: "5008",
        variant: "1.6 BlueHDi Allure",
        years: "2017-2020",
        generation: "P87",
        reliabilityScore: 82,
        totalIssues: 2,
        searchCount: 12000,
        issues: [
            {
                id: "5008-1",
                title: "AdBlue Deposu",
                description: "AdBlue pompa arızası (Komple depo değişimi).",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "60.000+ km",
                repairCost: "25.000 - 35.000 TL"
            },
            {
                id: "5008-2",
                title: "Kaput Dalgalanması",
                description: "Yüksek hızda kaputun titremesi.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Servis Ayarı"
            }
        ],
        pros: [
            "7 Koltuk",
            "i-Cockpit",
            "Geniş bagaj"
        ],
        cons: [
            "AdBlue sorunu",
            "Arka süspansiyon sert"
        ],
        buyingTips: [
            "AdBlue deposu değişmiş mi?"
        ]
    },
    {
        id: "peugeot-301-1-6-hdi",
        slug: "peugeot-301-1-6-hdi",
        brand: "Peugeot",
        model: "301",
        variant: "1.6 HDi Allure",
        years: "2012-2022",
        generation: "Mk1",
        expertNote: "Taksicinin, plasiyerin dostu. Az yakar, çok kaçar, parçası sudan ucuzdur. Ama konfor bekleme, yalıtım sıfır, teneke hissi verir.",
        price: 650000,
        reliabilityScore: 85,
        totalIssues: 2,
        searchCount: 28000,
        issues: [
            {
                id: "301-2",
                title: "Arka Stop Erimesi",
                description: "Ampul ısısından stop lambası duyunun erimesi.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "1.500 - 3.000 TL"
            },
            {
                id: "301-1",
                title: "Amortisör Takozu",
                description: "Ön takımdan gelen lakırtı sesleri (Kronik).",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "40.000+ km",
                repairCost: "2.000 - 4.000 TL"
            }
        ],
        pros: [
            "Yakıt koklar",
            "Bagaj değil mağara",
            "Parçası ucuz"
        ],
        cons: [
            "Güvenlik zayıf",
            "Yalıtım yok",
            "Cam açma tuşları vitesin yanında"
        ],
        buyingTips: [
            "Taksi çıkması mı motor numarasından sorgula",
            "Ön takımı dinle"
        ]
    }
];
