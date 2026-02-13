import { Car } from '@/types';

export const fordCars: Car[] = [
    // ═══════════════════════════════════════════════════════
    // FOCUS MK4 — 1.5 Ti-VCT (Benzin Atmosferik)
    // ═══════════════════════════════════════════════════════
    {
        id: "ford-focus-mk4-tivct",
        slug: "ford-focus-1-5-ti-vct",
        brand: "Ford",
        model: "Focus",
        variant: "1.5 Ti-VCT 123 HP (6AT)",
        years: "2018-2024",
        generation: "Mk4",
        price: 1100000,
        expertNote: "Duratec 1.5 Ti-VCT 123 HP + 6 ileri tork konvertörlü otomatik. Focus Mk4 yol tutuşta sınıf lideri olmaya devam. AMA bu motor atmosferik — 3 silindirli EcoBoost'a göre performanssız ve çok yakıyor (şehir içi 10L). LPG'ye çok uyumlu. Triger kayışı bu motorda yağlı (wet belt) — mutlaka kontrol edin!",
        reliabilityScore: 78,
        totalIssues: 4,
        searchCount: 25000,
        issues: [
            {
                id: "focus4-tivct-1",
                title: "Triger Kayışı (Wet Belt)",
                description: "Kayış yağ içinde çalışır. Orijinal olmayan yağ kullanımı kayışı eritip motoru kilitler. ÇOK KRİTİK!",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "60.000-90.000 km",
                repairCost: "Kayış değişimi 8.000 TL / Motor hasarı 60.000-100.000 TL"
            },
            {
                id: "focus4-tivct-2",
                title: "6AT Şanzıman Vuruntusu",
                description: "6 ileri tork konvertörlü şanzımanda düşük hızlarda vuruntu ve uğultu.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "40.000 - 60.000 TL (Revizyon)"
            },
            {
                id: "focus4-tivct-3",
                title: "EVAP Yakıt Buhar Valfi",
                description: "Depo havalandırma valfi arızası sonucu rölanti bozukluğu ve stop etme.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "3.000 - 6.000 TL"
            },
            {
                id: "focus4-tivct-4",
                title: "SYNC 3 Ekran Donması",
                description: "Multimedya ekranının kilitlenmesi veya siyah ekran vermesi.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Yazılım Güncellemesi"
            }
        ],
        pros: [
            "Sınıf lideri yol tutuş",
            "Sessiz kabin",
            "LPG tam uyumu",
            "Modern iç mekan"
        ],
        cons: [
            "Yüksek yakıt tüketimi (şehir 10L)",
            "Atmosferik motor performansı zayıf",
            "Wet Belt riski",
            "Arka koltuk dar"
        ],
        buyingTips: [
            "Triger kayışı değişmiş mi mutlaka sorun",
            "Şanzıman geçişlerini yokuşta test edin",
            "LPG takmayı düşünüyorsanız ideal araç"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // FOCUS MK3 — 1.6 TDCi (Powershift KABUSU)
    // ═══════════════════════════════════════════════════════
    {
        id: "ford-focus-mk3-16tdci",
        slug: "ford-focus-3-1-6-tdci",
        brand: "Ford",
        model: "Focus",
        variant: "Mk3 1.6 TDCi 115 HP (Powershift)",
        years: "2011-2014",
        generation: "Mk3",
        price: 700000,
        expertNote: "Duratorq 1.6 TDCi 115 HP + 6 ileri Powershift (kuru kavrama). POWERSHIFT KABUSU! Bu nesilde kuru kavramalı şanzıman kullanıldı — yolda bırakma, kavrama yanması, TCM beyin arızası. Yol tutuş referans ama şanzıman riski çok yüksek. Dizel + kuru kavrama = felaket.",
        reliabilityScore: 55,
        totalIssues: 3,
        searchCount: 16000,
        issues: [
            {
                id: "focus3-16-1",
                title: "Powershift Kuru Kavrama KABUSU",
                description: "Şanzıman kartı (TCM) ve kuru kavraması kronik olarak bozulur. Yolda bırakır, vites geçmez, silkeleme yapar.",
                category: "sanziman",
                riskLevel: "HIGH",
                affectedKm: "60.000+ km",
                repairCost: "60.000+ TL (TCM + Kavrama)"
            },
            {
                id: "focus3-16-2",
                title: "Enjektör Şakırtısı",
                description: "Dizel enjektörlerin aşınması ve metalik şakırtı sesi.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "150.000+ km",
                repairCost: "10.000 - 20.000 TL"
            },
            {
                id: "focus3-16-3",
                title: "DPF Tıkanıklığı",
                description: "Şehir içi kullanımda partikül filtresi dolması.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Şehir içi",
                repairCost: "8.000 - 15.000 TL"
            }
        ],
        pros: [
            "Yol tutuş referansı",
            "Yakıt ekonomisi (4-5L/100km)",
            "Tasarım"
        ],
        cons: [
            "Powershift kabusu (KRİTİK)",
            "Arka diz mesafesi dar",
            "İkinci el değeri düşük (şanzıman korkusu)"
        ],
        buyingTips: [
            "Powershift varsa vites geçişlerini ÇOK DİKKATLİ test edin",
            "TCM beyin arızası yapmış mı sorun",
            "Manuel şanzımanlısını tercih edin"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // FOCUS MK3.5 — 1.5 TDCi (Makyajlı - ISLAK KAVRAMA)
    // ═══════════════════════════════════════════════════════
    {
        id: "ford-focus-mk35-15tdci",
        slug: "ford-focus-3-5-1-5-tdci",
        brand: "Ford",
        model: "Focus",
        variant: "Mk3.5 1.5 TDCi 120 HP Titanium (Powershift)",
        years: "2015-2018",
        generation: "Mk3.5 Facelift",
        price: 950000,
        expertNote: "Duratorq 1.5 TDCi 120 HP + 6 ileri Powershift (ıslak kavrama). Makyajlı kasada gelen 1.5 TDCi + ıslak kavramalı Powershift uyumu ÇOK DAHA İYİ. Kuru kavrama kabusu yok — ıslak kavrama daha güvenilir. Sürüş zevki denince akla gelen ilk model. Yol tutuş referans noktası.",
        reliabilityScore: 82,
        totalIssues: 3,
        searchCount: 50000,
        issues: [
            {
                id: "focus35-1",
                title: "Powershift Islak Kavrama Titremesi",
                description: "Kalkışlarda hafif kararsızlık ve titreme (kuru kavrama kadar değil ama mevcuttur).",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Kavrama değişimi (25.000-40.000 TL)"
            },
            {
                id: "focus35-2",
                title: "AdBlue Isıtıcı Arızası",
                description: "AdBlue ısıtıcısı veya sensör arızası nedeniyle motor arıza lambası.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "60.000+ km",
                repairCost: "10.000 - 20.000 TL"
            },
            {
                id: "focus35-3",
                title: "Çift Kütleli Volan",
                description: "Rölantide şakırtılı çalışma sesi — çift kütleli volan aşınması.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "15.000 - 25.000 TL (Volan değişimi)"
            }
        ],
        pros: [
            "Sınıfının en iyi yol tutuşu",
            "Güçlü dizel motor (120 HP)",
            "Islak kavrama Powershift (güvenilir)",
            "İkinci el piyasası hızlı"
        ],
        cons: [
            "Arka diz mesafesi dar",
            "Powershift bakım maliyeti",
            "Sert süspansiyon",
            "AdBlue maliyeti"
        ],
        buyingTips: [
            "Vites geçişlerinde titreme veya vuruntu test edin",
            "AdBlue sistemi çalışıyor mu kontrol edin",
            "Volan sesi dinleyin (rölantide şakırtı)"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // FIESTA — 1.0 EcoBoost
    // ═══════════════════════════════════════════════════════
    {
        id: "ford-fiesta-1-0-ecoboost",
        slug: "ford-fiesta-1-0-ecoboost",
        brand: "Ford",
        model: "Fiesta",
        variant: "1.0 EcoBoost 100/125 HP",
        years: "2017-2023",
        generation: "Mk8",
        price: 850000,
        expertNote: "Fox 1.0 EcoBoost 3 silindirli turbo. Sınıfının en iyi yol tutuşu — mini Focus gibi. Motor torklu ve eğlenceli AMA wet belt (yağlı triger kayışı) riski VAR. Kayış parçalanırsa motor gider. Üretimi durdu — yedek parça fiyatları artacak.",
        reliabilityScore: 76,
        totalIssues: 4,
        searchCount: 15000,
        issues: [
            {
                id: "fiesta-1",
                title: "Wet Belt (Triger Kayışı)",
                description: "Yağ içinde çalışan triger kayışının parçalanarak yağ pompasını tıkaması ve motoru kitlemesi. HAYATİ RİSK!",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "40.000+ km / 5 yıl",
                repairCost: "Kayış 8.000 TL / Motor hasarı 40.000-60.000 TL"
            },
            {
                id: "fiesta-2",
                title: "Plastik Su Pompası Patlaması",
                description: "Plastik gövdeli su pompasının çatlaması sonucu ani su kaybı ve conta yanması.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "60.000+ km",
                repairCost: "5.000 - 10.000 TL"
            },
            {
                id: "fiesta-3",
                title: "Turbo Arızası",
                description: "Yağ basıncı düşüklüğü nedeniyle turbonun yağsız kalıp bozulması (kayışa bağlı).",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "Kayışa bağlı",
                repairCost: "15.000 - 25.000 TL"
            },
            {
                id: "fiesta-4",
                title: "Karbon Kurum Birikmesi",
                description: "Direkt enjeksiyon nedeniyle supaplarda kurum birikmesi ve tekleme.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "50.000+ km",
                repairCost: "3.000 - 5.000 TL (Temizlik)"
            }
        ],
        pros: [
            "Sınıfının en iyi yol tutuşu",
            "Torklu ve eğlenceli motor",
            "Sessiz kabin",
            "B&O ses sistemi"
        ],
        cons: [
            "Wet Belt riski (KRİTİK)",
            "Arka yaşam alanı dar",
            "Üretimi durdu",
            "Yedek parça fiyatları artıyor"
        ],
        buyingTips: [
            "Triger kayışı değişmiş mi — HAYAT MESELESİ",
            "Su seviyesi kontrol edin (plastik pompa patlar)",
            "Üretimi durduğu için parça fiyatlarını göze alın"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // PUMA — 1.0 EcoBoost
    // ═══════════════════════════════════════════════════════
    {
        id: "ford-puma-1-0-ecoboost",
        slug: "ford-puma-1-0-ecoboost",
        brand: "Ford",
        model: "Puma",
        variant: "1.0 EcoBoost 125 HP ST-Line (6AT)",
        years: "2020-2024",
        generation: "Mk1",
        price: 1200000,
        expertNote: "Fox 1.0 EcoBoost 125 HP + 6 ileri torque converter. Ford'un en popüler crossover'ı. MegaBox bagaj çözümü harikadır (yıkanabilir havuz). Sürüş keyfi Focus kalitesinde. AMA 1.0 EcoBoost wet belt riski burada da geçerli — mutlaka kontrol edin.",
        reliabilityScore: 80,
        totalIssues: 3,
        searchCount: 30000,
        issues: [
            {
                id: "puma-1",
                title: "Wet Belt (Triger Kayışı)",
                description: "1.0 EcoBoost motorun en kritik sorunu. Yağ içinde çalışan triger kayışının parçalanması ve motor hasarı.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "40.000+ km / 5 yıl",
                repairCost: "Kayış 8.000 TL / Motor hasarı 40.000-60.000 TL"
            },
            {
                id: "puma-2",
                title: "Su Pompası / Hararet",
                description: "Plastik gövdeli su pompasının çatlaması ve antifriz kaçırması.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "50.000+ km",
                repairCost: "5.000 - 10.000 TL"
            },
            {
                id: "puma-3",
                title: "MegaBox Su Alma",
                description: "Bagaj altındaki plastik havuzun tahliye tapasından su alması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Yağışlı hava",
                repairCost: "Tapa kontrolü / Yalıtım"
            }
        ],
        pros: [
            "MegaBox bagaj çözümü (yıkanabilir)",
            "Sportif tasarım",
            "Focus kalitesinde yol tutuş",
            "ST-Line sportif detaylar"
        ],
        cons: [
            "Wet Belt riski (KRİTİK)",
            "Arka koltuk dar",
            "Fiyat yüksek",
            "3 silindir titreşim"
        ],
        buyingTips: [
            "Triger kayışı değişmiş mi — HAYAT MESELESİ",
            "MegaBox içine bakın su izi var mı",
            "Su seviyesini kontrol edin"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // PUMA — 1.0 EcoBoost MHEV (48V Hybrid)
    // ═══════════════════════════════════════════════════════
    {
        id: "ford-puma-stline-hybrid",
        slug: "ford-puma-stline-1-0-hybrid",
        brand: "Ford",
        model: "Puma",
        variant: "1.0 EcoBoost MHEV 155 HP ST-Line X",
        years: "2020-2024",
        generation: "Mk1 MHEV",
        price: 1350000,
        expertNote: "Fox 1.0 EcoBoost + 48V Mild Hybrid 155 HP. Puma'nın en güçlü benzinli versiyonu. 48V sistem start-stop'ta ve düşük hızlarda motora destek veriyor. Yakıt tasarrufu sağlıyor. Motor hâlâ 1.0 EcoBoost — wet belt riski aynı. 155 HP ile performans çok iyi.",
        reliabilityScore: 81,
        totalIssues: 3,
        searchCount: 28000,
        issues: [
            {
                id: "puma-h-1",
                title: "Wet Belt (Yağlı Triger Kayışı)",
                description: "1.0 EcoBoost motorun en kritik sorunu. 5 yıl/60.000 km'de değiştirilmelidir.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "40.000+ km / 5 yıl",
                repairCost: "Kayış 8.000 TL / Motor hasarı 40.000-60.000 TL"
            },
            {
                id: "puma-h-2",
                title: "48V LiB Akü Zayıflığı",
                description: "Mild hybrid 48V lityum aküsünün zayıflığı. Start-stop devre dışı kalır.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "8.000 - 15.000 TL"
            },
            {
                id: "puma-h-3",
                title: "Karbon Birikmesi",
                description: "Direkt enjeksiyon nedeniyle supaplarda karbon birikmesi ve tekleme.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "50.000+ km",
                repairCost: "3.000 - 5.000 TL (Temizlik)"
            }
        ],
        pros: [
            "155 HP güçlü performans",
            "48V Mild Hybrid yakıt tasarrufu",
            "MegaBox bagaj çözümü",
            "ST-Line X premium donanım"
        ],
        cons: [
            "Wet Belt riski (KRİTİK)",
            "Arka koltuk dar",
            "48V akü ömrü belirsiz",
            "Fiyat yüksek"
        ],
        buyingTips: [
            "Triger kayışı — HAYAT MESELESİ",
            "48V akü sağlığını sordurabilirseniz sorun",
            "ST-Line X donanımını tercih edin"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // KUGA — 1.5 EcoBlue Dizel
    // ═══════════════════════════════════════════════════════
    {
        id: "ford-kuga-1-5-ecoblue",
        slug: "ford-kuga-1-5-ecoblue",
        brand: "Ford",
        model: "Kuga",
        variant: "1.5 EcoBlue 120 HP Titanium (8AT)",
        years: "2020-2024",
        generation: "Mk3",
        price: 1500000,
        expertNote: "Duratorq 1.5 EcoBlue 120 HP + 8 ileri otomatik. Ford'un D-SUV segmentindeki amiral gemisi. Kayar arka koltuk ve sessiz dizel motor büyük artı. AMA eksantrik zinciri kopma riski var — bazı üretimlerde 7mm zincir kullanıldı (8mm ile değiştirilmeli). AdBlue pompası da risk.",
        reliabilityScore: 79,
        totalIssues: 4,
        searchCount: 20000,
        issues: [
            {
                id: "kuga-eb-1",
                title: "Eksantrik Zinciri Kopması",
                description: "Bazı üretimlerde 7mm zincir kullanılması sonucu zincir kopması ve motor hasarı. 8mm ile değişim gerekli.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "40.000-80.000 km",
                repairCost: "50.000 - 80.000 TL"
            },
            {
                id: "kuga-eb-2",
                title: "AdBlue Sistemi Arızası",
                description: "AdBlue ısıtıcısı veya enjektör arızası nedeniyle motorun çalışmaması.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "30.000+ km",
                repairCost: "15.000 - 25.000 TL"
            },
            {
                id: "kuga-eb-3",
                title: "Rotary Vites Seçici",
                description: "Döner vites kumandasının tutukluk yapması veya P konumuna geçmemesi.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "5.000 - 10.000 TL"
            },
            {
                id: "kuga-eb-4",
                title: "DPF Tıkanıklığı",
                description: "Şehir içi kullanımda dizel partikül filtresinin erken dolması.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Şehir içi",
                repairCost: "Rejenerasyon / Temizlik"
            }
        ],
        pros: [
            "Sessiz dizel motor",
            "Kayar arka koltuk",
            "Konforlu süspansiyon",
            "8 ileri şanzıman"
        ],
        cons: [
            "Zincir kopma riski (7mm üretimler)",
            "AdBlue maliyeti",
            "Rotary vites seçici sorunlu",
            "Şehir içi yakıt tüketimi"
        ],
        buyingTips: [
            "Zincir değişmiş mi mutlaka sorun (7mm mi 8mm mi?)",
            "Döner vites seçicisini test edin",
            "AdBlue pompası kontrol ettirin"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // KUGA — 2.5 FHEV (Full Hybrid)
    // ═══════════════════════════════════════════════════════
    {
        id: "ford-kuga-fhev-25",
        slug: "ford-kuga-fhev-2-5",
        brand: "Ford",
        model: "Kuga",
        variant: "2.5 FHEV 190 HP Titanium (CVT)",
        years: "2020-2024",
        generation: "Mk3 FHEV",
        price: 1750000,
        expertNote: "Duratec 2.5 Atkinson + elektrik motor toplam 190 HP + CVT. Full hybrid SUV — şehir içi 5-6L gerçekten mümkün. Dizel Kuga'ya göre ÇOK daha güvenilir (zincir/AdBlue sorunu yok). CVT şanzıman bazen bağırır ama sağlamdır. Rotary vites seçici sorunlu olabilir.",
        reliabilityScore: 86,
        totalIssues: 3,
        searchCount: 22000,
        issues: [
            {
                id: "kuga-fhev-1",
                title: "CVT Şanzıman Uğultusu",
                description: "Performans talep edildiğinde CVT şanzımanın motoru yüksek devirde tutması ve bağırma sesi.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Çözümsüz (CVT karakteri)"
            },
            {
                id: "kuga-fhev-2",
                title: "12V Akü Bitme",
                description: "Araç park halindeyken 12V aküyü bitirmesi. AGM akü yetersizliği.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "24 ay+",
                repairCost: "3.000 - 5.000 TL (AGM Akü)"
            },
            {
                id: "kuga-fhev-3",
                title: "Rotary Vites Seçici Tutukluk",
                description: "Döner vites seçicisinin P konumuna geçmemesi veya tutukluk yapması.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "Vites Seçici Değişimi (5.000-10.000 TL)"
            }
        ],
        pros: [
            "Şehir içi 5-6L yakıt (gerçek)",
            "Sessiz hibrit sürüş",
            "Kayar arka koltuk",
            "Dizel'e göre çok daha güvenilir"
        ],
        cons: [
            "CVT bağırması",
            "Döner vites seçici sorunlu",
            "Fiyat yüksek",
            "12V akü zayıf"
        ],
        buyingTips: [
            "12V akü ne zaman değişmiş sorun",
            "Döner vites seçiciyi test edin",
            "Hibrit batarya garanti bitmemiş mi kontrol edin"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // MONDEO — 1.5 EcoBoost
    // ═══════════════════════════════════════════════════════
    {
        id: "ford-mondeo-1-5-ecoboost",
        slug: "ford-mondeo-1-5-ecoboost",
        brand: "Ford",
        model: "Mondeo",
        variant: "1.5 EcoBoost 160 HP Titanium (6AT)",
        years: "2014-2022",
        generation: "Mk5",
        price: 1100000,
        expertNote: "EcoBoost 1.5 160 HP + 6F35 6 ileri otomatik. Amerikan konforu arayanlara birebir. Yalnız 1.5 motor bu kasayı taşırken yakıyor — şehir içi 11-12L gözden çıkarın. Şanzıman (6F35) biraz hantal. LPG'ye çok uyumlu. Sony ses sistemi muhteşem.",
        reliabilityScore: 79,
        totalIssues: 3,
        searchCount: 13000,
        issues: [
            {
                id: "mondeo-1",
                title: "6F35 Şanzıman Vuruntusu",
                description: "6F35 şanzımanın 2'den 3'e geçerken sarsması ve vuruntu yapması.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "30.000 - 50.000 TL (Revizyon)"
            },
            {
                id: "mondeo-2",
                title: "Su Pompası Kaçağı",
                description: "Devirdaim pompasının çatlaması ve antifriz kaçırması.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "90.000+ km",
                repairCost: "5.000 - 10.000 TL"
            },
            {
                id: "mondeo-3",
                title: "Direksiyon Kutusu Boşluğu",
                description: "Direksiyon kutusunda boşluk oluşması ve tıkırtı sesi.",
                category: "suspansiyon",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "20.000 - 35.000 TL"
            }
        ],
        pros: [
            "Sessiz kabin (sınıf lideri)",
            "Amerikan konfor hissi",
            "Sony ses sistemi",
            "LPG tam uyumu"
        ],
        cons: [
            "Şehir içi yakıt (11-12L)",
            "Hantal şanzıman",
            "Ağır kasa",
            "Üretimi durdu"
        ],
        buyingTips: [
            "Şanzıman yağı düzenli değişmiş mi sorun",
            "Sony ses sistemi var mı kontrol edin — büyük fark",
            "LPG taktırarak yakıt sorununu çözebilirsiniz"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // TOURNEO COURIER
    // ═══════════════════════════════════════════════════════
    {
        id: "ford-tourneo-courier",
        slug: "ford-tourneo-courier-1-5-tdci",
        brand: "Ford",
        model: "Tourneo Courier",
        variant: "1.5 TDCi 100 HP Titanium Plus",
        years: "2014-2024",
        generation: "Mk1/Mk1.5",
        price: 900000,
        expertNote: "Duratorq 1.5 TDCi 100 HP. Esnafın yeni gözdesi — Focus motoruyla çok sağlam. İkinci el hızlı satılır. AMA ticari kullanıldığı için km düşürülmüş olabilir, beyninden mutlaka sorgulayın. Titanium Plus donanımını tercih edin — boş paket 'şirket çıkması' olabilir.",
        reliabilityScore: 87,
        totalIssues: 2,
        searchCount: 45000,
        issues: [
            {
                id: "courier-1",
                title: "AdBlue Isıtıcı Arızası",
                description: "Euro 6 motorlarda AdBlue ısıtıcısının bozulması. Soğuk havalarda daha sık.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "15.000 - 25.000 TL"
            },
            {
                id: "courier-2",
                title: "DPF Tıkanıklığı",
                description: "Şehir içi kısa mesafe kullanımda DPF dolması.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Şehir içi",
                repairCost: "8.000 - 15.000 TL"
            }
        ],
        pros: [
            "Çok sağlam ve dayanıklı motor",
            "İkinci el çok hızlı satılır",
            "Focus yol tutuşu",
            "Geniş iç hacim"
        ],
        cons: [
            "Arka koltuklar dar",
            "Sert süspansiyon",
            "AdBlue maliyeti",
            "Ticari araç imajı"
        ],
        buyingTips: [
            "Km düşürülmüş mü — beyin okumasını mutlaka yaptırın",
            "Titanium Plus donanım olsun",
            "AdBlue ısıtıcı ne zaman değişmiş sorun"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // TOURNEO CONNECT — 1.5 EcoBlue
    // ═══════════════════════════════════════════════════════
    {
        id: "ford-tourneo-connect-15",
        slug: "ford-tourneo-connect-1-5-tdci",
        brand: "Ford",
        model: "Tourneo Connect",
        variant: "1.5 EcoBlue 120 HP Titanium (8AT)",
        years: "2018-2024",
        generation: "Mk2 Facelift",
        price: 1200000,
        expertNote: "Duratorq 1.5 EcoBlue 120 HP + 8 ileri otomatik. Hafif ticari sınıfın reis-i cumhuru. Motor Focus ile aynı ve çok sağlam. Ticari kullanılmıştır — km düşürülmüş olabilir, beyin okumasını mutlaka yapın. Sürgülü kapılar aile için pratik.",
        reliabilityScore: 86,
        totalIssues: 3,
        searchCount: 40000,
        issues: [
            {
                id: "tconnect-1",
                title: "AdBlue Isıtıcı Arızası",
                description: "Euro 6 motorlarda AdBlue ısıtıcısının bozulması ve motorun çalışmaması.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "60.000+ km",
                repairCost: "15.000 - 25.000 TL"
            },
            {
                id: "tconnect-2",
                title: "Sürgülü Kapı Rayı Aşınması",
                description: "Ticari kullanımda sürgülü kapı ray mekanizmasının aşınması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Sık kullanım",
                repairCost: "3.000 - 6.000 TL"
            },
            {
                id: "tconnect-3",
                title: "Turbo Basınç Hortumu",
                description: "Turbo basınç hortumunun çıkması ve ani güç kaybı.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "2.000 - 5.000 TL"
            }
        ],
        pros: [
            "Sağlam ve dayanıklı motor",
            "Geniş iç hacim",
            "İkinci el hızlı satılır",
            "Sürgülü kapılar pratik"
        ],
        cons: [
            "Ticari araç imajı",
            "AdBlue maliyeti",
            "Sert süspansiyon",
            "Km düşürme riski"
        ],
        buyingTips: [
            "Km düşürülmüş mü beyin okumasını yaptırın",
            "Titanium Plus donanım olsun",
            "AdBlue ısıtıcı ne zaman değişmiş sorun"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // ECOSPORT — 1.0 EcoBoost
    // ═══════════════════════════════════════════════════════
    {
        id: "ford-ecosport",
        slug: "ford-ecosport-1-0-ecoboost",
        brand: "Ford",
        model: "EcoSport",
        variant: "1.0 EcoBoost 125 HP",
        years: "2014-2022",
        generation: "Mk2",
        price: 800000,
        expertNote: "Fox 1.0 EcoBoost 125 HP. Ford'un kompakt SUV'u. Yüksek sürüş pozisyonu ve park kolaylığı iyi. Motor Fiesta ile aynı — wet belt riski var. Yana açılan bagaj kapağı alışkanlık ister. Üretimi durdu.",
        reliabilityScore: 76,
        totalIssues: 3,
        searchCount: 7000,
        issues: [
            {
                id: "ecosport-1",
                title: "Wet Belt (Yağ Pompası Tıkanma)",
                description: "Triger kayışı parçacıklarının yağ pompasını tıkaması.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "60.000+ km",
                repairCost: "25.000 - 45.000 TL"
            },
            {
                id: "ecosport-2",
                title: "Yana Açılan Bagaj Kapağı",
                description: "Bagaj kapağı amortisörünün bozulması ve kapağın tutmaması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "2.000 - 4.000 TL"
            },
            {
                id: "ecosport-3",
                title: "Su Pompası Çatlağı",
                description: "Plastik su pompasının çatlaması ve hararet.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "50.000+ km",
                repairCost: "5.000 - 10.000 TL"
            }
        ],
        pros: [
            "Yüksek sürüş pozisyonu",
            "Park kolaylığı (kompakt boyut)",
            "B&O ses sistemi",
            "Uygun fiyat"
        ],
        cons: [
            "Wet Belt riski",
            "Bagaj kapağı kullanışsız",
            "Üretimi durdu",
            "Dar iç hacim"
        ],
        buyingTips: [
            "Triger kayışını mutlaka sorun (Wet Belt)",
            "Bagaj kapağı amortisörünü test edin",
            "Su seviyesi kontrolü yapın"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // RANGER — 2.0 EcoBlue / 3.2
    // ═══════════════════════════════════════════════════════
    {
        id: "ford-ranger-wildtrak",
        slug: "ford-ranger-2-0-ecoblue",
        brand: "Ford",
        model: "Ranger",
        variant: "2.0 EcoBlue / 3.2 TDCi Wildtrak",
        years: "2015-2024",
        generation: "T6 / T6.2",
        price: 2200000,
        expertNote: "2.0 EcoBlue BiTurbo 213 HP veya 3.2 TDCi 200 HP. Pick-up segmentinin kralı. 3.2 motorlu asfaltı ağlatır ama mazotu içer (13-15L). 2.0 Bi-Turbo olanlar daha makul ama AdBlue derdi var. 10 ileri şanzıman bazen kararsız kalır. Off-road donanımlarına dikkat.",
        reliabilityScore: 83,
        totalIssues: 3,
        searchCount: 35000,
        issues: [
            {
                id: "ranger-1",
                title: "10 İleri Şanzıman Kararsızlığı",
                description: "10 ileri otomatik şanzımanın vites geçişlerinde kararsızlık ve vuruntu.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Yazılım Güncellemesi"
            },
            {
                id: "ranger-2",
                title: "AdBlue Isıtıcı (2.0 EcoBlue)",
                description: "2.0 EcoBlue motorlarda AdBlue deposu ısıtıcı arızası.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "60.000+ km",
                repairCost: "15.000 - 25.000 TL"
            },
            {
                id: "ranger-3",
                title: "Şaft İstavroz Titremesi",
                description: "Kalkışlarda şaft istavrozundan gelen titreme.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "80.000+ km",
                repairCost: "5.000 - 10.000 TL"
            }
        ],
        pros: [
            "Gerçek arazi yeteneği",
            "Heybetli görünüm",
            "Wildtrak donanımı zengin",
            "Çekme kapasitesi yüksek"
        ],
        cons: [
            "MTV ve ÖTV yüksek",
            "Şehir içi park imkânsız",
            "Yakıt tüketimi (10-15L)",
            "Yüksek sigorta primi"
        ],
        buyingTips: [
            "Off-road donanımı sonradan takılmışsa şasi kontrol edin",
            "Motor altı korumalar ezik mi bakın",
            "10 ileri şanzıman yazılımı güncel mi sorun"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // TRANSIT CUSTOM
    // ═══════════════════════════════════════════════════════
    {
        id: "ford-transit-custom",
        slug: "ford-transit-custom-2-0-ecoblue",
        brand: "Ford",
        model: "Transit Custom",
        variant: "2.0 EcoBlue 130 HP Titanium (6MT)",
        years: "2018-2024",
        generation: "Mk2 Facelift",
        price: 1400000,
        expertNote: "Panther 2.0 EcoBlue 130 HP. Ticari sınıfın en premium modeli — Titanium donanımda binek araç gibi. VIP dönüşüm yapılan araçlarda değer çok yüksek. Motor sağlam ama AdBlue ve enjektör sorunları yüksek km'de çıkıyor. Ticari geçmişi mutlaka sorgulayın.",
        reliabilityScore: 84,
        totalIssues: 3,
        searchCount: 30000,
        issues: [
            {
                id: "tcustom-1",
                title: "AdBlue Sistemi Arızası",
                description: "AdBlue ısıtıcı veya sensör arızası. Soğuk havalarda daha sık görülür.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "60.000+ km",
                repairCost: "15.000 - 30.000 TL"
            },
            {
                id: "tcustom-2",
                title: "Enjektör Terleme",
                description: "Enjektör pullarının aşınmasıyla mazot kokusu.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "120.000+ km",
                repairCost: "5.000 - 10.000 TL (Pul değişimi)"
            },
            {
                id: "tcustom-3",
                title: "Turbo Basınç Hortumu",
                description: "Turbo hortumunun çatlaması ve güç kaybı.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "3.000 - 6.000 TL"
            }
        ],
        pros: [
            "Binek araç konforu (Titanium)",
            "Sağlam 2.0 EcoBlue motor",
            "VIP dönüşüme çok uygun",
            "Geniş iç hacim"
        ],
        cons: [
            "AdBlue maliyeti",
            "Ticari kullanım yıpranması",
            "Yakıt tüketimi (8-10L)",
            "Sigorta primi yüksek"
        ],
        buyingTips: [
            "VIP dönüşüm varsa işçilik kalitesini kontrol edin",
            "Ticari geçmişi beyin okumasıyla sorgulayın",
            "AdBlue ısıtıcı değişmiş mi sorun",
            "Titanium donanım tercih edin"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // S-MAX (AİLE ARACI)
    // ═══════════════════════════════════════════════════════
    {
        id: "ford-smax-20-tdci",
        slug: "ford-smax-2-0-tdci",
        brand: "Ford",
        model: "S-Max",
        variant: "2.0 TDCi 150 HP Titanium (Powershift)",
        years: "2015-2023",
        generation: "Mk2",
        price: 1200000,
        expertNote: "Duratorq 2.0 TDCi 150 HP + 6 ileri Powershift. 7 kişilik aile aracı — MPV'lerin sportif olanı. Mondeo platformunda ama çok daha pratik. 3. sıra koltuklar çocuklar için uygun. Yol tutuş MPV'ye göre inanılmaz iyi. Powershift bu motorda ıslak kavramalı.",
        reliabilityScore: 81,
        totalIssues: 3,
        searchCount: 10000,
        issues: [
            {
                id: "smax-1",
                title: "Powershift Islak Kavrama",
                description: "Islak kavramalı Powershift şanzımanın yüksek km'de kavrama aşınması.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "25.000 - 40.000 TL"
            },
            {
                id: "smax-2",
                title: "DPF Tıkanıklığı",
                description: "Şehir içi kısa mesafe kullanımda DPF dolması.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Şehir içi",
                repairCost: "8.000 - 15.000 TL"
            },
            {
                id: "smax-3",
                title: "3. Sıra Koltuk Mekanizması",
                description: "3. sıra koltuk katlanma mekanizmasının zorlanması veya kilitlenmesi.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Sık kullanım",
                repairCost: "3.000 - 6.000 TL"
            }
        ],
        pros: [
            "7 kişilik + sportif yol tutuş",
            "Mondeo konforu MPV formunda",
            "Pratik 3. sıra koltuklar",
            "Güçlü 2.0 dizel"
        ],
        cons: [
            "Powershift bakım maliyeti",
            "Yakıt tüketimi (şehir 8-9L)",
            "Yedek parça pahalı",
            "İkinci el yavaş gider"
        ],
        buyingTips: [
            "Powershift şanzıman geçişlerini test edin",
            "3. sıra koltuk mekanizmasını deneyin",
            "Otoyol ağırlıklı aileler için ideal"
        ]
    },
];
