import { Car } from '@/types';

export const newCars3: Car[] = [
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
    },
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
    },
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
                repairCost: "Soğuma Beklemesi"
            },
            {
                id: "ceed-sw-2",
                title: "GPF Tıkanıklığı",
                description: "Benzin partikül filtresinin şehir içi kullanımda dolması. Motor uyarı verir.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Şehir içi",
                repairCost: "Rejenerasyon"
            },
            {
                id: "ceed-sw-3",
                title: "Multimedya Donması",
                description: "10.25 inç ekranın donması ve geç tepki vermesi.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Yazılım"
            },
            {
                id: "ceed-sw-4",
                title: "Arka Fren Gıcırtısı",
                description: "Arka disk frenlerde sabah ilk kullanımda gıcırtı sesi. Nem ve pas kaynaklıdır.",
                category: "fren",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "Balata/Disk Bakımı"
            },
            {
                id: "ceed-sw-5",
                title: "Rüzgar Sesi (A Sütunu)",
                description: "100+ km/s hızlarda A sütunu ve aynadan gelen rüzgar sesi.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "100+ km/s",
                repairCost: "Fitil Ayarı"
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
    },
    {
        id: "dacia-jogger-hybrid-140",
        slug: "dacia-jogger-hybrid-140",
        brand: "Dacia",
        model: "Jogger",
        variant: "Hybrid 140 Extreme",
        years: "2023-2025",
        generation: "Mk1 Hybrid",
        price: 1200000,
        expertNote: "7 kişilik aile aracı hibrit motorla. Renault Clio hybrid platformu. E-Tech hibrit sistemi akıllıdır — vitessiz çalışır, rölantide elektrikle gider. Ama üçüncü sıra yetişkinler için dar.",
        reliabilityScore: 83,
        totalIssues: 5,
        searchCount: 25000,
        issues: [
            {
                id: "jogger-h-1",
                title: "Köpekli Şanzıman Sesi",
                description: "E-Tech hibrit sistemin köpekli dişli mekanizmasından gelen vites geçiş sesleri. Karakteristik bir ses — arıza değildir.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Çözümsüz (Tasarım)"
            },
            {
                id: "jogger-h-2",
                title: "12V Akü Zayıflığı",
                description: "Hibrit sistemin 12V küçük aküyü yorması. Start-stop çalışmaması.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "18 ay+",
                repairCost: "2.000 - 4.000 TL"
            },
            {
                id: "jogger-h-3",
                title: "Süspansiyon Sesi (Üçüncü Sıra)",
                description: "Arka süspansiyon burçlarından gelen ses. Uzun şasi nedeniyle arka kısım daha çok çalışır.",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "40.000+ km",
                repairCost: "3.000 - 5.000 TL"
            },
            {
                id: "jogger-h-4",
                title: "Multimedya Tepki Gecikmesi",
                description: "Media Nav ekranının yavaş tepki vermesi ve dokunmatik gecikmesi.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "Yazılım"
            },
            {
                id: "jogger-h-5",
                title: "İç Trim Sesleri",
                description: "Maliyet odaklı plastik aksamdan gelen gıcırtı ve tıkırtı sesleri.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Sıfırdan itibaren",
                repairCost: "Yalıtım"
            }
        ],
        pros: [
            "7 kişilik aile aracı",
            "Hibrit ile düşük tüketim",
            "Uygun fiyat"
        ],
        cons: [
            "Üçüncü sıra yetişkinlere dar",
            "Plastik iç mekan",
            "Yalıtım zayıf"
        ],
        buyingTips: [
            "Üçüncü sıraya oturup deneyin — yeterli mi?",
            "Hibrit batarya durumunu sorun",
            "Extreme donanımı tercih edin"
        ]
    },
    {
        id: "citroen-c3-aircross-new",
        slug: "citroen-c3-aircross-new-1-2",
        brand: "Citroen",
        model: "C3 Aircross",
        variant: "1.2 PureTech Shine",
        years: "2022-2025",
        generation: "Mk2 Facelift",
        price: 950000,
        expertNote: "Uygun fiyatlı kompakt SUV. Yuvarlak tasarımı ile sempatik. 1.2 PureTech 3 silindir motor yeterli güçtedir. Comfort süspansiyonu yumuşak ve konforludur.",
        reliabilityScore: 78,
        totalIssues: 5,
        searchCount: 18000,
        issues: [
            {
                id: "c3ac-1",
                title: "PureTech Triger Zinciri",
                description: "1.2 PureTech motorun kronik triger zinciri uzama sorunu. PSA grubunun bilinen problemi.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "60.000+ km",
                repairCost: "12.000 - 20.000 TL"
            },
            {
                id: "c3ac-2",
                title: "Yağ Tüketimi",
                description: "PureTech motorlarda servis arasında yağ seviye düşüşü.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "40.000+ km",
                repairCost: "Yağ Takibi"
            },
            {
                id: "c3ac-3",
                title: "EAT6 Şanzıman Gecikmesi",
                description: "6 ileri otomatik şanzımanda vites geçiş gecikmesi ve kararsızlık.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Yazılım"
            },
            {
                id: "c3ac-4",
                title: "Ön Cam Çatlağı",
                description: "İnce ön cam nedeniyle taş çarpmasında kolay kırılma. Citroen'in bilinen sorunu.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "5.000 - 10.000 TL (Cam değişimi)"
            },
            {
                id: "c3ac-5",
                title: "Plastik Trim Gıcırtısı",
                description: "Torpido ve kapı panellerinden bozuk yolda gelen ses.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "Yalıtım"
            }
        ],
        pros: [
            "Uygun fiyat",
            "Yumuşak süspansiyon",
            "Sempatik tasarım"
        ],
        cons: [
            "PureTech motor riski",
            "Plastik iç mekan",
            "Fren mesafesi uzun"
        ],
        buyingTips: [
            "Triger zinciri kontrol ettirin",
            "Yağ seviyesine bakın",
            "Shine donanımını tercih edin"
        ]
    },
    {
        id: "nissan-qashqai-e-power",
        slug: "nissan-qashqai-e-power",
        brand: "Nissan",
        model: "Qashqai",
        variant: "e-POWER N-Connecta",
        years: "2022-2025",
        generation: "J12 e-POWER",
        price: 1600000,
        expertNote: "Seri hibrit — benzinli motor sadece jeneratör görevi yapar, tekerlekleri elektrik motor döndürür. Elektrikli araç hissi verir ama şarj etmeye gerek yoktur. e-Pedal ile tek pedalla sürüş mümkün.",
        reliabilityScore: 84,
        totalIssues: 5,
        searchCount: 20000,
        issues: [
            {
                id: "qash-ep-1",
                title: "Motor Devir Davranışı",
                description: "Benzinli jeneratör motorun beklenmedik anlarda devir yükseltmesi. Elektrikli hisse alışmış sürücüyü rahatsız eder.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Çözümsüz (e-POWER karakteri)"
            },
            {
                id: "qash-ep-2",
                title: "12V Akü Zayıflığı",
                description: "Hibrit sistemin aksesuar aküsünü yorması. Araç açılmama sorunu.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "24 ay+",
                repairCost: "3.000 - 5.000 TL"
            },
            {
                id: "qash-ep-3",
                title: "e-Pedal Adaptasyon",
                description: "Tek pedal sürüşe (e-Pedal) adapte olmak zaman alır. Yanlış fren hissi verebilir.",
                category: "fren",
                riskLevel: "LOW",
                affectedKm: "Kullanıcıya bağlı",
                repairCost: "Çözümsüz"
            },
            {
                id: "qash-ep-4",
                title: "ProPILOT Asistan Uyarıları",
                description: "Şerit takip ve adaptif hız asistanının yanlış uyarılar vermesi.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Hava koşullarına bağlı",
                repairCost: "Kalibrasyon"
            },
            {
                id: "qash-ep-5",
                title: "Rüzgar Sesi (Ayna)",
                description: "Yüksek hızlarda dikiz aynasından gelen rüzgar sesi.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "110+ km/s",
                repairCost: "Fitil Ayarı"
            }
        ],
        pros: [
            "Elektrikli araç hissi",
            "Şarj gerektirmiyor",
            "Sessiz sürüş"
        ],
        cons: [
            "Motor devir davranışı",
            "Fiyat",
            "Bagaj kapasitesi azalmış"
        ],
        buyingTips: [
            "e-Pedal modunu test sürüşünde deneyin",
            "Motor devir davranışını gözlemleyin",
            "N-Connecta donanım yeterlidir"
        ]
    },
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
    },
    {
        id: "mercedes-a180d-amg-v177",
        slug: "mercedes-a180d-amg-v177",
        brand: "Mercedes",
        model: "A Serisi",
        variant: "A180d Sedan AMG",
        years: "2019-2025",
        generation: "V177",
        price: 1700000,
        expertNote: "Giriş seviye Mercedes sedan. MBUX sistemi harikadır. 1.5 dCi motor Renault'dan gelir — evet doğru duydun, Renault K9K. Ama Mercedes kalitesinde monte edilmiştir. AMG Line paketi şarttır.",
        reliabilityScore: 83,
        totalIssues: 5,
        searchCount: 28000,
        issues: [
            {
                id: "a180d-amg-1",
                title: "DCT Şanzıman Sarsıntısı",
                description: "8G-DCT çift kavramalı şanzımanda düşük hızlarda sarsıntı ve vites kararsızlığı.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "40.000+ km",
                repairCost: "Yazılım / Kavrama (30.000+ TL)"
            },
            {
                id: "a180d-amg-2",
                title: "MBUX Donma",
                description: "MBUX multimedya sisteminin donması, kararması ve sesli asistanın tepkisiz kalması.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Yazılım Güncellemesi"
            },
            {
                id: "a180d-amg-3",
                title: "Sunroof Drenaj Tıkanması",
                description: "Sunroof tahliye kanallarının tıkanması ve araç içine su sızması.",
                category: "govde",
                riskLevel: "MEDIUM",
                affectedKm: "Yaprak dökümü döneminde",
                repairCost: "Temizlik / 3.000 TL"
            },
            {
                id: "a180d-amg-4",
                title: "Start-Stop Akü Zayıflığı",
                description: "AGM aküyü start-stop sistemiyle hızlı bitirmesi.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "24 ay+",
                repairCost: "5.000 - 8.000 TL (AGM Akü)"
            },
            {
                id: "a180d-amg-5",
                title: "Arka Süspansiyon Gıcırtısı",
                description: "Arka torsion bar süspansiyonun burçlarından gelen gıcırtı.",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "40.000+ km",
                repairCost: "3.000 - 6.000 TL"
            }
        ],
        pros: [
            "Mercedes prestiji",
            "MBUX sistemi",
            "AMG Line görünüşü"
        ],
        cons: [
            "Torsion bar arka süspansiyon",
            "Renault motoru",
            "Fiyat"
        ],
        buyingTips: [
            "AMG Line paketsiz almayın",
            "Sunroof drenajını kontrol ettirin",
            "DCT geçişlerini test edin"
        ]
    },
    {
        id: "mg-hs-phev",
        slug: "mg-hs-phev",
        brand: "MG",
        model: "HS",
        variant: "1.5 Turbo PHEV Luxury",
        years: "2021-2025",
        generation: "Mk1 PHEV",
        price: 1300000,
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
                repairCost: "Çözümsüz (PHEV karakteri)"
            },
            {
                id: "mg-hs-phev-3",
                title: "Multimedya Tepki Gecikmesi",
                description: "Dokunmatik ekranın yavaş tepki vermesi ve CarPlay bağlantısının kopması.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "Yazılım"
            },
            {
                id: "mg-hs-phev-4",
                title: "Süspansiyon Sertliği",
                description: "PHEV batarya ağırlığı nedeniyle sert süspansiyon ve bozuk yolda konfor kaybı.",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Çözümsüz"
            },
            {
                id: "mg-hs-phev-5",
                title: "Yedek Parça Bekleme",
                description: "Çin'den gelen yedek parçaların temin süresinin uzaması.",
                category: "govde",
                riskLevel: "MEDIUM",
                affectedKm: "Kaza durumunda",
                repairCost: "Bekleme Süresi"
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
    },
    {
        id: "chery-tiggo-4-pro",
        slug: "chery-tiggo-4-pro",
        brand: "Chery",
        model: "Tiggo 4 Pro",
        variant: "1.5 CVT Distinctive",
        years: "2023-2025",
        generation: "Mk1",
        price: 1050000,
        expertNote: "Çin markası Chery'nin giriş SUV'u. Fiyatına göre çok iyi donanım sunar. CVT şanzıman yumuşaktır ama performans isteyenleri kırar. Yedek parça bekleme süresi en büyük handikap.",
        reliabilityScore: 76,
        totalIssues: 5,
        searchCount: 18000,
        issues: [
            {
                id: "tiggo4-1",
                title: "CVT Uğultusu",
                description: "CVT şanzımandan yüksek devirde gelen uğultu sesi. Performans isteyince motor bağırır.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Çözümsüz (CVT karakteri)"
            },
            {
                id: "tiggo4-2",
                title: "Plastik Trim Sesleri",
                description: "Bozuk yollarda torpido ve kapı panellerinden gelen plastik gıcırtı.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Sıfırdan",
                repairCost: "Yalıtım"
            },
            {
                id: "tiggo4-3",
                title: "Yedek Parça Temin Süresi",
                description: "Kaza durumunda Çin'den yedek parça gelmesinin 2-3 ay sürebilmesi.",
                category: "govde",
                riskLevel: "HIGH",
                affectedKm: "Kaza durumunda",
                repairCost: "Bekleme"
            },
            {
                id: "tiggo4-4",
                title: "Boya Kalitesi",
                description: "Boya kalitesinin Avrupa markalarına göre düşük olması. Çizilme ve taş çarpması izleri daha belirgin.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "Seramik kaplama önerilir"
            },
            {
                id: "tiggo4-5",
                title: "Multimedya Dil/Yazılım",
                description: "Multimedya sisteminin Türkçe çeviri hataları ve arayüz tuhaflıkları.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "Yazılım Güncellemesi"
            }
        ],
        pros: [
            "Fiyata göre çok donanım",
            "Geniş iç hacim",
            "5 yıl garanti"
        ],
        cons: [
            "Yedek parça bekleme",
            "İkinci el değer kaybı",
            "Marka güveni düşük"
        ],
        buyingTips: [
            "Yetkili servis yakınlığını kontrol edin",
            "5 yıl garantiyi doğrulatın",
            "Seramik kaplama yaptırın"
        ]
    },
    {
        id: "suzuki-scross-hybrid-new",
        slug: "suzuki-scross-1-4-hybrid-new",
        brand: "Suzuki",
        model: "S-Cross",
        variant: "1.4 Boosterjet Hybrid GLX",
        years: "2022-2025",
        generation: "Mk3",
        price: 1350000,
        expertNote: "Gizli cevher. ALLGRIP 4x4 sistemi bu fiyata rakipsizdir. 1.4 Boosterjet motor + 48V mild hybrid. Japonya üretimi kalitesi çok iyi. Marka bilinirliği düşük ama araç sağlamdır.",
        reliabilityScore: 88,
        totalIssues: 5,
        searchCount: 12000,
        issues: [
            {
                id: "scross-n-1",
                title: "48V Akü Zayıflığı",
                description: "Mild hybrid sistemin 48V aküsünün zamanla kapasitesini kaybetmesi.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "8.000 - 12.000 TL"
            },
            {
                id: "scross-n-2",
                title: "6AT Şanzıman Gecikmesi",
                description: "Aisin 6 ileri otomatik şanzımanda vites değiştirme gecikmesi.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Çözümsüz"
            },
            {
                id: "scross-n-3",
                title: "Rüzgar Sesi (Ayna)",
                description: "110+ km/s hızlarda aynalardan gelen rüzgar sesi.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "110+ km/s",
                repairCost: "Fitil Ayarı"
            },
            {
                id: "scross-n-4",
                title: "Multimedya Gecikme",
                description: "9 inç ekranın başlangıçta yavaş açılması ve CarPlay bağlantı gecikmesi.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "Yazılım"
            },
            {
                id: "scross-n-5",
                title: "Turbo Wastegate Sesi",
                description: "Boosterjet turbodan gelen metalik tıkırtı sesi. Performansı etkilemez.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Monitoring"
            }
        ],
        pros: [
            "ALLGRIP 4x4 (Bu fiyata yok)",
            "Japonya üretimi",
            "Sorunsuz mekanik"
        ],
        cons: [
            "Marka bilinirliği düşük",
            "İkinci el piyasası yavaş",
            "İç mekan sade"
        ],
        buyingTips: [
            "ALLGRIP 4x4'lü olanı mutlaka tercih edin",
            "GLX donanım yeterlidir",
            "İthalatçı garanti süresini kontrol edin"
        ]
    },
    {
        id: "togg-t10f",
        slug: "togg-t10f",
        brand: "TOGG",
        model: "T10F",
        variant: "Uzun Menzil",
        years: "2025-2026",
        generation: "Mk1",
        price: 1800000,
        expertNote: "Yerli otomobilin sedan versiyonu. T10X platformu üzerine kurulu. SUV kardeşine göre daha düşük ağırlık merkezi ve daha sportif sürüş. Henüz çok yeni — kronikler zamanla ortaya çıkacak.",
        reliabilityScore: 80,
        totalIssues: 5,
        searchCount: 35000,
        issues: [
            {
                id: "t10f-1",
                title: "Yazılım Güncelleme Gerekliliği",
                description: "OTA güncellemelerin sıkça gelmesi ve bazı güncellemelerin mevcut özelliklerde regresyona neden olması.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Sürekli",
                repairCost: "Ücretsiz (OTA)"
            },
            {
                id: "t10f-2",
                title: "Şarj Uyumluluk Sorunları",
                description: "Bazı üçüncü parti DC şarj istasyonlarıyla uyumsuzluk ve şarjın kesilmesi.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Şarj istasyonuna bağlı",
                repairCost: "Yazılım / İstasyon değiştirme"
            },
            {
                id: "t10f-3",
                title: "Menzil Düşüşü (Soğuk Hava)",
                description: "Kış aylarında batarya menzilinin %25-30 düşmesi.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Kış ayları",
                repairCost: "Çözümsüz (EV karakteri)"
            },
            {
                id: "t10f-4",
                title: "Gıcırtı Sesleri (Yeni Araç)",
                description: "İlk üretim araçlarda iç trim ve göğüs panelinden gelen gıcırtı sesleri.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Sıfırdan",
                repairCost: "Garanti Kapsamında"
            },
            {
                id: "t10f-5",
                title: "Rejeneratif Fren Kalibrasyonu",
                description: "Rejeneratif fren kuvvetinin bazen tutarsız olması. Yazılım güncellemesiyle iyileşir.",
                category: "fren",
                riskLevel: "LOW",
                affectedKm: "Yazılıma bağlı",
                repairCost: "OTA Güncelleme"
            }
        ],
        pros: [
            "Yerli ve milli gurur",
            "Sportif sedan tasarımı",
            "Elektrikli araç avantajları"
        ],
        cons: [
            "Henüz çok yeni (Kronikler belirsiz)",
            "Şarj altyapısı yetersiz",
            "İkinci el değer belirsizliği"
        ],
        buyingTips: [
            "Uzun menzil versiyonunu tercih edin",
            "Yazılım güncellemelerini takip edin",
            "Garanti koşullarını detaylıca okuyun"
        ]
    },
    {
        id: "toyota-rav4-25-hybrid-mk5",
        slug: "toyota-rav4-25-hybrid-mk5",
        brand: "Toyota",
        model: "RAV4",
        variant: "2.5 Hybrid AWD Passion X-Pack",
        years: "2019-2025",
        generation: "XA50",
        price: 2200000,
        expertNote: "Hybrid SUV segmentinin referansı. Toyota güvenilirliği + hybrid ekonomisi. AWD versiyonu arka aksı elektriktir — mekanik bağlantı yok, çok akıllı. Passion X-Pack donanımı tercih edin.",
        reliabilityScore: 92,
        totalIssues: 5,
        searchCount: 30000,
        issues: [
            {
                id: "rav4-mk5-1",
                title: "CVT Uğultusu",
                description: "Toyota eCVT şanzımanın yüksek hızda motor devir yükseltmesi ve güçlenmede uğultu. Karakteristiktir.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Çözümsüz"
            },
            {
                id: "rav4-mk5-2",
                title: "Fren Gıcırtısı",
                description: "Rejeneratif fren sistemiyle birlikte mekanik frenlerin az kullanılmasından kaynaklanan pas ve gıcırtı.",
                category: "fren",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "Disk Temizliği"
            },
            {
                id: "rav4-mk5-3",
                title: "Multimedya Yavaşlığı",
                description: "Toyota Touch & Go ekranının yavaş tepki vermesi ve navigasyonun gecikmesi.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "Yazılım"
            },
            {
                id: "rav4-mk5-4",
                title: "Rüzgar Sesi (A Sütunu)",
                description: "120+ km/s hızlarda A sütunu ve aynadan gelen rüzgar sesi.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "120+ km/s",
                repairCost: "Fitil Ayarı"
            },
            {
                id: "rav4-mk5-5",
                title: "TSS Kalibrasyon Uyarısı",
                description: "Toyota Safety Sense sisteminin kirli ön cam veya sis durumunda kalibrasyon uyarısı vermesi.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Hava koşullarına bağlı",
                repairCost: "Cam Temizliği"
            }
        ],
        pros: [
            "Toyota güvenilirliği",
            "Hibrit ile düşük tüketim (5-6L)",
            "AWD yeteneği"
        ],
        cons: [
            "CVT bağırması",
            "Fiyat yüksek",
            "Multimedya eski"
        ],
        buyingTips: [
            "AWD versiyonunu tercih edin — arka köprü elektrik",
            "Passion X-Pack donanımı alın",
            "Hibrit batarya garantisi kontrol edin"
        ]
    },
];
