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
        totalIssues: 5,
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
        totalIssues: 5,
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
        totalIssues: 4,
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
            },
            {
                id: "308-new-1-2-auto-2",
                title: "Yağ Eksiltme",
                description: "Motor yağının servis aralarında eksilmesi. Düzenli kontrol şart.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "Segman / 5.000 - 15.000 TL"
            },
            {
                id: "308-new-1-2-auto-3",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
            },
            {
                id: "308-new-1-2-auto-4",
                title: "Süspansiyon Burcu Aşınması",
                description: "Ön/arka süspansiyon burçlarının aşınması. Kasiste vuruntu sesi.",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "60.000+ km",
                repairCost: "2.000 - 5.000 TL"
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
        totalIssues: 5,
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
        totalIssues: 4,
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
            },
            {
                id: "208-1-2-puretech-auto-3",
                title: "Yağ Eksiltme",
                description: "Motor yağının servis aralarında eksilmesi. Düzenli kontrol şart.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "Segman / 5.000 - 15.000 TL"
            },
            {
                id: "208-1-2-puretech-auto-4",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
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
        totalIssues: 4,
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
            },
            {
                id: "rifter-1-5-bluehdi-auto-3",
                title: "DPF Tıkanması",
                description: "Şehir içi kısa mesafe kullanımda DPF filtresinin dolması.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Şehir içi kullanım",
                repairCost: "5.000 - 12.000 TL"
            },
            {
                id: "rifter-1-5-bluehdi-auto-4",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
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
        totalIssues: 4,
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
            },
            {
                id: "5008-1-6-bluehdi-auto-3",
                title: "DPF Tıkanması",
                description: "Şehir içi kısa mesafe kullanımda DPF filtresinin dolması.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Şehir içi kullanım",
                repairCost: "5.000 - 12.000 TL"
            },
            {
                id: "5008-1-6-bluehdi-auto-4",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
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
        totalIssues: 4,
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
            },
            {
                id: "301-1-6-hdi-auto-3",
                title: "DPF Tıkanması",
                description: "Şehir içi kısa mesafe kullanımda DPF filtresinin dolması.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Şehir içi kullanım",
                repairCost: "5.000 - 12.000 TL"
            },
            {
                id: "301-1-6-hdi-auto-4",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
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
,

    // ─── Eski new-cars dosyasından taşındı ───
    {
        id: "peugeot-3008-1-6-puretech",
        slug: "peugeot-3008-1-6-puretech",
        brand: "Peugeot",
        model: "3008",
        variant: "1.6 PureTech Allure",
        years: "2017-2024",
        generation: "Mk2",
        price: 1500000,
        expertNote: "İç mekan tasarımı konusunda rakipsiz. i-Cockpit alışkanlık ister ama alışınca bırakamazsın. 1.6 PureTech motor güçlüdür ama triger zinciri sorunuyla ünlüdür — EP6 motor kodunu sorun.",
        reliabilityScore: 75,
        totalIssues: 5,
        searchCount: 30000,
        issues: [
            {
                id: "3008p-1",
                title: "Triger Zinciri Uzaması (EP6)",
                description: "1.6 PureTech/THP motorun kronik sorunu. Zincir uzar, gergisi bozulur ve zincir atlayabilir. Motor hasarı riski var.",
                category: "motor",
                riskLevel: "CRITICAL",
                affectedKm: "60.000+ km",
                repairCost: "15.000 - 30.000 TL (Zincir seti)"
            },
            {
                id: "3008p-2",
                title: "Yağ Yakma (PureTech)",
                description: "1.2 ve 1.6 PureTech motorlarda yağ tüketimi. Servis arasında 1L yağ eklemek normaldir diyor PSA.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "50.000+ km",
                repairCost: "Yağ Takibi / Revizyon"
            },
            {
                id: "3008p-3",
                title: "EAT8 Şanzıman Sarsıntısı",
                description: "Aisin 8 ileri otomatik şanzımanda düşük hızlarda kararsızlık ve sarsıntı. Yazılım ile düzelir.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Yazılım Güncellemesi"
            },
            {
                id: "3008p-4",
                title: "i-Cockpit Multimedya Donması",
                description: "Dokunmatik ekranın donması ve navigasyonun çökmesi. Araç kapatıp açınca düzelir.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Yazılım"
            },
            {
                id: "3008p-5",
                title: "Süspansiyon Gıcırtısı",
                description: "Ön süspansiyon rotil ve bijon başlıklarından gelen gıcırtı sesi.",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "40.000+ km",
                repairCost: "3.000 - 6.000 TL"
            }
        ],
        pros: [
            "İç mekan tasarımı (Sınıf lideri)",
            "i-Cockpit kokpit",
            "İyi yol tutuşu"
        ],
        cons: [
            "Triger zinciri riski (EP6)",
            "Yağ yakma",
            "Yedek parça pahalı"
        ],
        buyingTips: [
            "Motor kodu EP6 mı THP mı sorun — triger seti değişmiş mi bakın",
            "Yağ seviyesini kontrol edin",
            "i-Cockpit'e test sürüşünde alışabilecek misiniz deneyin"
        ]
    }
,

    // ─── Eski new-cars dosyasından taşındı ───
    {
        id: "peugeot-308-t9-1-6-ehdi",
        slug: "peugeot-308-t9-1-6-ehdi",
        brand: "Peugeot",
        model: "308",
        variant: "T9 1.6 e-HDi",
        years: "2013-2021",
        generation: "T9",
        price: 500000,
        reliabilityScore: 72,
        totalIssues: 6,
        searchCount: 9000,
        expertNote: "308 T9 Avrupa'da Yılın Otomobili seçildi. 1.6 e-HDi motor güvenilir ve ekonomik ama DPF ve AdBlue sorunları var. EAT6 otomatik şanzıman düzgün çalışır. i-Cockpit alışkanlık ister.",
        issues: [
            { id: "308t9-1", title: "DPF Tıkanması", description: "Şehir içi kullanımda DPF dolması. Güç kaybı ve rejenerasyon uyarısı.", category: "motor", riskLevel: "HIGH", affectedKm: "50.000+ km", repairCost: "5.000 - 15.000 TL" },
            { id: "308t9-2", title: "AdBlue Sistem Arızası", description: "AdBlue dozajlama ünitesinin kristalleşme sonucu tıkanması. Motor çalışmayacak uyarısı.", category: "motor", riskLevel: "HIGH", affectedKm: "40.000+ km", repairCost: "15.000 - 30.000 TL" },
            { id: "308t9-3", title: "Çift Kütleli Volan", description: "Rölantide metalik vuruntu sesi. Kavrama ile birlikte değiştirilmeli.", category: "sanziman", riskLevel: "HIGH", affectedKm: "80.000+ km", repairCost: "10.000 - 18.000 TL" },
            { id: "308t9-4", title: "i-Cockpit Gösterge Parlama", description: "Küçük direksiyon simidi nedeniyle gösterge panelinin üst kısmının görünmemesi. Koltuk ayar hassasiyeti.", category: "elektronik", riskLevel: "LOW", affectedKm: "Tasarım", repairCost: "Tasarım Sorunu" },
            { id: "308t9-5", title: "Direksiyon Kolonu Sesi", description: "Direksiyon çevirirken gıcırtı ve tıkırtı sesi.", category: "suspansiyon", riskLevel: "LOW", affectedKm: "40.000+ km", repairCost: "2.000 - 5.000 TL" },
            { id: "308t9-6", title: "Elektronik El Freni Arızası", description: "Elektrikli el freni motorunun bozulması veya kalibrasyonunun kaybolması.", category: "fren", riskLevel: "MEDIUM", affectedKm: "60.000+ km", repairCost: "4.000 - 10.000 TL" }
        ],
        pros: ["Yılın Otomobili kalitesi", "Ekonomik dizel", "EAT6 şanzıman düzgün", "Kompakt ama geniş"],
        cons: ["DPF/AdBlue sorunları", "Volan masraflı", "Parça fiyatları artıyor"],
        buyingTips: ["DPF doluluk oranını tarattırın", "AdBlue sistemi kontrol ettirin", "Volan sesini dinleyin"]
    }
,

    // ─── Eski new-cars dosyasından taşındı ───
    {
        id: "peugeot-206-plus-1-4-hdi",
        slug: "peugeot-206-plus-1-4-hdi",
        brand: "Peugeot",
        model: "206+",
        variant: "1.4 HDi",
        years: "2006-2013",
        generation: "2A/C",
        price: 200000,
        reliabilityScore: 71,
        totalIssues: 6,
        searchCount: 7500,
        expertNote: "206+ TR'de çok popülerdi. 1.4 HDi Siemens enjektörlü motor güvenilir ve ekonomik ama DPF'siz olduğu için emisyon sınıfı eski. Süspansiyon parçaları hızla aşınır. Fiyatına göre eğlenceli sürüş sunar.",
        issues: [
            { id: "206p-1", title: "Enjektör Tıkanması", description: "1.4 HDi Siemens enjektörlerin tıkanması. Rölantide titreşim ve düzensizlik.", category: "motor", riskLevel: "HIGH", affectedKm: "100.000+ km", repairCost: "4.000 - 10.000 TL" },
            { id: "206p-2", title: "Ön Süspansiyon Alt Kol", description: "Ön alt kol burçları ve bilyasının erken aşınması. Vuruntu ve direksiyon boşluğu.", category: "suspansiyon", riskLevel: "MEDIUM", affectedKm: "40.000+ km", repairCost: "1.500 - 3.000 TL" },
            { id: "206p-3", title: "Debriyaj Teli Kopması", description: "Debriyaj telinin kopması. Pedal dibe yapışır ve vites girmez.", category: "sanziman", riskLevel: "MEDIUM", affectedKm: "60.000+ km", repairCost: "500 - 1.500 TL" },
            { id: "206p-4", title: "Egzoz Manifoldu Çatlağı", description: "Egzoz manifoldunda çatlama. Metal ses artışı.", category: "motor", riskLevel: "LOW", affectedKm: "80.000+ km", repairCost: "1.500 - 3.000 TL" },
            { id: "206p-5", title: "Kapı Kilit Arızası", description: "Merkezi kilit aktüatörlerinin bozulması.", category: "elektronik", riskLevel: "LOW", affectedKm: "60.000+ km", repairCost: "1.000 - 2.000 TL" },
            { id: "206p-6", title: "Far Buğulanması", description: "Far ünitesinin içine nem girip buğulanması.", category: "govde", riskLevel: "LOW", affectedKm: "Yaş kaynaklı", repairCost: "500 - 2.000 TL" }
        ],
        pros: ["Çok ucuz", "Eğlenceli sürüş", "Ekonomik 1.4 HDi", "Küçük ve çevik"],
        cons: ["Çok eski platform", "Güvenlik düşük", "Süspansiyon hızla aşınır"],
        buyingTips: ["Enjektör testi yaptırın", "Alt takım kontrolü", "Kaporta altı pas kontrolü"]
    }
,

    // ─── Eski new-cars dosyasından taşındı ───
    {
        id: "peugeot-508-1-5-bluehdi",
        slug: "peugeot-508-1-5-bluehdi",
        brand: "Peugeot",
        model: "508",
        variant: "1.5 BlueHDi",
        years: "2018-2024",
        generation: "R8",
        price: 2000000,
        reliabilityScore: 78,
        totalIssues: 6,
        searchCount: 7200,
        expertNote: "508 tasarım harikasıdır, sürüşü mükemmeldir ama Fransız elektroniği sizi delirtebilir. 1.5 BlueHDi motor güvenilirdir ancak AdBlue sistemi baş ağrıtır. EAT8 şanzıman ise çok kaliteli.",
        issues: [
            { id: "508-1", title: "AdBlue Sistem Arızası", description: "AdBlue dozajlama ünitesinin kristalleşme sonucu tıkanması. 'Motor Çalışmayacak' uyarısı ve acil servis gerekliliği. Peugeot servisi dışında çözüm bulmak zordur.", category: "motor", riskLevel: "HIGH", affectedKm: "40.000 - 70.000 km", repairCost: "20.000 - 35.000 TL" },
            { id: "508-2", title: "i-Cockpit Gösterge Arızası", description: "Dijital gösterge panelinin kararması, piksellerinin bozulması veya hata göstermesi. Yazılım veya donanım kaynaklı olabilir.", category: "elektronik", riskLevel: "MEDIUM", affectedKm: "40.000+ km", repairCost: "8.000 - 20.000 TL" },
            { id: "508-3", title: "EAT8 Şanzıman Sarsıntısı", description: "8 ileri otomatik şanzımanda düşük hızlarda hafif sarsıntı ve vites geçişlerinde tereddüt. Yazılım güncellemesi ile iyileşir.", category: "sanziman", riskLevel: "LOW", affectedKm: "30.000+ km", repairCost: "Yazılım Güncelleme" },
            { id: "508-4", title: "Süspansiyon Sertliği ve Ses", description: "Düşük profilli lastikler ve sert süspansiyon ayarı nedeniyle bozuk yollarda sert geçişler ve alt takımdan gelen sesler.", category: "suspansiyon", riskLevel: "LOW", affectedKm: "Karakteristik", repairCost: "Amortisör / Burç" },
            { id: "508-5", title: "Geri Görüş Kamerası Donması", description: "Geri vites alındığında kamera görüntüsünün gelmemesi veya donması. Kamera modülü veya bağlantı kablosu arızalanabilir.", category: "elektronik", riskLevel: "LOW", affectedKm: "Rastgele", repairCost: "3.000 - 8.000 TL" },
            { id: "508-6", title: "DPF Rejenerasyon Uyarısı", description: "Kısa mesafe kullanımda partikül filtresi dolması ve rejenerasyon talebi. Şehir içi sürekli kullanımda sıklaşır.", category: "motor", riskLevel: "MEDIUM", affectedKm: "Şehir içi kullanım", repairCost: "5.000 - 15.000 TL" }
        ],
        pros: ["Muhteşem tasarım (İç/dış)", "Konforlu sürüş", "EAT8 şanzıman kalitesi", "Zengin donanım"],
        cons: ["AdBlue sistemi sorunlu", "Elektronik hassasiyetler", "Parça fiyatları yüksek"],
        buyingTips: ["AdBlue sistemi hata veriyor mu kontrol edin", "Dijital gösterge panelini inceleyin", "Servis geçmişini isteyin"]
    }
,
    {
            "id": "peugeot-2008-1-5-bluehdi",
            "slug": "peugeot-2008-1-5-bluehdi",
            "brand": "Peugeot",
            "model": "2008 (P24)",
            "variant": "1.5 BlueHDi Allure",
            "years": "2020-2025",
            "generation": "P24",
            "price": 1300000,
            "expertNote": "DV5 1.5 BlueHDi 130 HP + EAT8. Yeni nesil 2008 i-Cockpit ile dikkat çekiyor. 3D gösterge paneli ve küçük direksiyon eşsiz deneyim. DPF ve AdBlue sorunlarına dikkat.",
            "reliabilityScore": 79,
            "totalIssues": 5,
            "searchCount": 14000,
            "issues": [
                    {
                            "id": "2008p24-1",
                            "title": "AdBlue Pompası",
                            "description": "AdBlue dozaj pompası arızası. Motor güç kısıtlaması.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "60.000+ km",
                            "repairCost": "10.000 - 22.000 TL"
                    },
                    {
                            "id": "2008p24-2",
                            "title": "EAT8 Sarsıntısı",
                            "description": "8 ileri otomatik şanzımanda soğukta sert vites geçişi.",
                            "category": "sanziman",
                            "riskLevel": "LOW",
                            "affectedKm": "Soğuk havalar",
                            "repairCost": "Yağ Değişimi"
                    },
                    {
                            "id": "2008p24-3",
                            "title": "i-Cockpit Adaptasyon",
                            "description": "Küçük direksiyon ve yüksek gösterge paneline alışma süreci.",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "Tasarım",
                            "repairCost": "Normal"
                    },
                    {
                            "id": "2008p24-4",
                            "title": "DPF Tıkanması",
                            "description": "Şehir içi kullanımda DPF dolması.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Şehir içi",
                            "repairCost": "5.000 - 12.000 TL"
                    },
                    {
                            "id": "2008p24-5",
                            "title": "Park Sensörü Hatası",
                            "description": "Park sensörlerinin yanlış uyarı vermesi.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Rastgele",
                            "repairCost": "1.500 - 3.000 TL"
                    }
            ],
            "pros": [
                    "Dikkat çekici tasarım",
                    "i-Cockpit deneyim",
                    "EAT8 konfor",
                    "3D gösterge"
            ],
            "cons": [
                    "AdBlue riski",
                    "i-Cockpit alışma",
                    "Arka alan dar"
            ],
            "buyingTips": [
                    "AdBlue kontrolü yaptırın",
                    "i-Cockpit'i test sürüşünde deneyin",
                    "Allure donanım minimum"
            ]
    }
,
    {
            "id": "peugeot-308-t7-1-6-hdi",
            "slug": "peugeot-308-t7-1-6-hdi",
            "brand": "Peugeot",
            "model": "308 (T7)",
            "variant": "1.6 HDi Access",
            "years": "2007-2013",
            "generation": "T7",
            "price": 400000,
            "expertNote": "DV6 1.6 HDi 90-112 HP. 308 T7 Türkiye'de çok satıldı. Motor güvenilir ve ekonomik. Süspansiyon parçaları hızla aşınır (Peugeot klasiği). Basit ama işlevsel.",
            "reliabilityScore": 74,
            "totalIssues": 5,
            "searchCount": 10000,
            "issues": [
                    {
                            "id": "308t7-1",
                            "title": "Ön Alt Kol Bilyası",
                            "description": "Ön alt kol bilyasının erken aşınması. Vuruntu sesi.",
                            "category": "suspansiyon",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "40.000+ km",
                            "repairCost": "1.500 - 3.000 TL"
                    },
                    {
                            "id": "308t7-2",
                            "title": "DPF Tıkanması",
                            "description": "Şehir içi kullanımda DPF dolması.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Şehir içi",
                            "repairCost": "5.000 - 12.000 TL"
                    },
                    {
                            "id": "308t7-3",
                            "title": "Cam Kaldırma",
                            "description": "Cam kaldırma mekanizması arızası.",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "50.000+ km",
                            "repairCost": "1.000 - 2.000 TL"
                    },
                    {
                            "id": "308t7-4",
                            "title": "Direksiyon Pompası",
                            "description": "Elektrik direksiyon pompası arızası.",
                            "category": "suspansiyon",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "80.000+ km",
                            "repairCost": "5.000 - 10.000 TL"
                    },
                    {
                            "id": "308t7-5",
                            "title": "Debriyaj Rulmanı",
                            "description": "Debriyaj baskı rulmanı sesi.",
                            "category": "sanziman",
                            "riskLevel": "LOW",
                            "affectedKm": "80.000+ km",
                            "repairCost": "3.000 - 6.000 TL"
                    }
            ],
            "pros": [
                    "Ekonomik HDi",
                    "Konforlu sürüş",
                    "Ucuz parça",
                    "Geniş iç mekan"
            ],
            "cons": [
                    "Süspansiyon hızla aşınır",
                    "DPF riski",
                    "Plastik kalitesi düşük"
            ],
            "buyingTips": [
                    "Alt takım kontrolü",
                    "DPF taraması",
                    "Manuel vites tercih edin"
            ]
    }
,
    {
            "id": "peugeot-301-1-6-hdi-2",
            "slug": "peugeot-301-1-6-hdi-active",
            "brand": "Peugeot",
            "model": "301",
            "variant": "1.6 HDi Active",
            "years": "2012-2022",
            "generation": "4A",
            "price": 400000,
            "expertNote": "DV6 1.6 HDi 92 HP. 301 Türkiye'de üretilen sedan. Taksi ve ticari filolarda çok yaygın. Motor güvenilir, bakımı ucuz ama iç mekan çok sade.",
            "reliabilityScore": 78,
            "totalIssues": 5,
            "searchCount": 12000,
            "issues": [
                    {
                            "id": "301-2-1",
                            "title": "Debriyaj Seti",
                            "description": "Debriyaj balata ve baskı aşınması.",
                            "category": "sanziman",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "60.000+ km",
                            "repairCost": "3.000 - 6.000 TL"
                    },
                    {
                            "id": "301-2-2",
                            "title": "EGR Tıkanması",
                            "description": "EGR valfinde kurum birikimi.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "80.000+ km",
                            "repairCost": "2.000 - 5.000 TL"
                    },
                    {
                            "id": "301-2-3",
                            "title": "Ön Süspansiyon",
                            "description": "Ön alt kol bilyası erken aşınması.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "40.000+ km",
                            "repairCost": "1.500 - 3.000 TL"
                    },
                    {
                            "id": "301-2-4",
                            "title": "Boya Kalitesi",
                            "description": "İnce boya, taş çarpma izleri.",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "Kronik",
                            "repairCost": "Lokal Boya"
                    },
                    {
                            "id": "301-2-5",
                            "title": "Klima Kompresörü",
                            "description": "Klima kompresörü arızası.",
                            "category": "elektronik",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "80.000+ km",
                            "repairCost": "4.000 - 8.000 TL"
                    }
            ],
            "pros": [
                    "Türkiye üretimi",
                    "Ucuz bakım",
                    "Ekonomik HDi",
                    "Taksi güvenilirliği"
            ],
            "cons": [
                    "İç mekan çok sade",
                    "Güvenlik düşük",
                    "Otomatik yok"
            ],
            "buyingTips": [
                    "Ex-taksi mi kontrol edin",
                    "EGR temizliği yapılmış mı",
                    "Boya kontrol edin"
            ]
    }
];
