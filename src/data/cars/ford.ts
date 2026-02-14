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
        totalIssues: 5,
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
            },
            {
                id: "focus-3-1-6-tdci-auto-4",
                title: "DPF Tıkanması",
                description: "Şehir içi kısa mesafe kullanımda DPF filtresinin dolması.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Şehir içi kullanım",
                repairCost: "5.000 - 12.000 TL"
            },
            {
                id: "focus-3-1-6-tdci-auto-5",
                title: "DCT Kavrama Titremesi",
                description: "Çift kavramalı şanzımanda düşük hızlarda titreşim.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "40.000+ km",
                repairCost: "10.000 - 25.000 TL"
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
        totalIssues: 5,
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
            },
            {
                id: "focus-3-5-1-5-tdci-auto-4",
                title: "12V Akü Boşalması",
                description: "12V yardımcı akünün uzun park halinde boşalması.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "3.000 - 5.000 TL"
            },
            {
                id: "focus-3-5-1-5-tdci-auto-5",
                title: "Şarj Kapağı Sorunu",
                description: "Şarj kapağının donması veya mekanik olarak açılmaması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kış ayları",
                repairCost: "1.500 - 3.000 TL"
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
        totalIssues: 5,
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
            },
            {
                id: "puma-1-0-ecoboost-auto-4",
                title: "Yağ Eksiltme",
                description: "Motor yağının servis aralarında eksilmesi. Düzenli kontrol şart.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "Segman / 5.000 - 15.000 TL"
            },
            {
                id: "puma-1-0-ecoboost-auto-5",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
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
        totalIssues: 5,
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
            },
            {
                id: "puma-stline-1-0-hybrid-auto-4",
                title: "12V Akü Boşalması",
                description: "Hibrit sistemin 12V yardımcı aküyü hızla tüketmesi. Araç yatabilir.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "2.500 - 5.000 TL"
            },
            {
                id: "puma-stline-1-0-hybrid-auto-5",
                title: "Rejeneratif Fren Hissi",
                description: "Rejeneratif frenlemenin suni ve alışılmadık hissettirmesi.",
                category: "fren",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Normal (Tasarım)"
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
        totalIssues: 5,
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
            },
            {
                id: "kuga-fhev-2-5-auto-4",
                title: "12V Akü Boşalması",
                description: "Hibrit sistemin 12V yardımcı aküyü hızla tüketmesi. Araç yatabilir.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "2.500 - 5.000 TL"
            },
            {
                id: "kuga-fhev-2-5-auto-5",
                title: "Rejeneratif Fren Hissi",
                description: "Rejeneratif frenlemenin suni ve alışılmadık hissettirmesi.",
                category: "fren",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Normal (Tasarım)"
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
        totalIssues: 5,
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
            },
            {
                id: "mondeo-1-5-ecoboost-auto-4",
                title: "Yağ Eksiltme",
                description: "Motor yağının servis aralarında eksilmesi. Düzenli kontrol şart.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "Segman / 5.000 - 15.000 TL"
            },
            {
                id: "mondeo-1-5-ecoboost-auto-5",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
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
        totalIssues: 4,
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
            },
            {
                id: "tourneo-courier-1-5-tdci-auto-3",
                title: "DPF Tıkanması",
                description: "Şehir içi kısa mesafe kullanımda DPF filtresinin dolması.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Şehir içi kullanım",
                repairCost: "5.000 - 12.000 TL"
            },
            {
                id: "tourneo-courier-1-5-tdci-auto-4",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
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
        totalIssues: 5,
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
            },
            {
                id: "tourneo-connect-1-5-tdci-auto-4",
                title: "Yağ Eksiltme",
                description: "Motor yağının servis aralarında eksilmesi. Düzenli kontrol şart.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "Segman / 5.000 - 15.000 TL"
            },
            {
                id: "tourneo-connect-1-5-tdci-auto-5",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
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
        totalIssues: 5,
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
            },
            {
                id: "ecosport-1-0-ecoboost-auto-4",
                title: "Yağ Eksiltme",
                description: "Motor yağının servis aralarında eksilmesi. Düzenli kontrol şart.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "Segman / 5.000 - 15.000 TL"
            },
            {
                id: "ecosport-1-0-ecoboost-auto-5",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
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
        totalIssues: 5,
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
            },
            {
                id: "ranger-2-0-ecoblue-auto-4",
                title: "DPF Tıkanması",
                description: "Şehir içi kısa mesafe kullanımda DPF filtresinin dolması.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Şehir içi kullanım",
                repairCost: "5.000 - 12.000 TL"
            },
            {
                id: "ranger-2-0-ecoblue-auto-5",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
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
        totalIssues: 5,
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
            },
            {
                id: "transit-custom-2-0-ecoblue-auto-4",
                title: "Yağ Eksiltme",
                description: "Motor yağının servis aralarında eksilmesi. Düzenli kontrol şart.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "Segman / 5.000 - 15.000 TL"
            },
            {
                id: "transit-custom-2-0-ecoblue-auto-5",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
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
        totalIssues: 5,
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
            },
            {
                id: "smax-2-0-tdci-auto-4",
                title: "DPF Tıkanması",
                description: "Şehir içi kısa mesafe kullanımda DPF filtresinin dolması.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Şehir içi kullanım",
                repairCost: "5.000 - 12.000 TL"
            },
            {
                id: "smax-2-0-tdci-auto-5",
                title: "DCT Kavrama Titremesi",
                description: "Çift kavramalı şanzımanda düşük hızlarda titreşim.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "40.000+ km",
                repairCost: "10.000 - 25.000 TL"
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

    // ─── Eski new-cars dosyasından taşındı ───
    {
        id: "ford-fiesta-mk6-1-4-tdci",
        slug: "ford-fiesta-mk6-1-4-tdci",
        brand: "Ford",
        model: "Fiesta",
        variant: "Mk6 1.4 TDCi",
        years: "2008-2013",
        generation: "Mk6",
        price: 280000,
        reliabilityScore: 75,
        totalIssues: 5,
        searchCount: 7500,
        expertNote: "Fiesta Mk6 sınıfının sürüş eğlencesi lideri. 1.4 TDCi motor (PSA ortak) güvenilir ve ekonomik. DPF'siz versiyonlar sorunsuz. Küçük ama çevik, şehir içi ideal.",
        issues: [
            { id: "fimk6-1", title: "Debriyaj Teli Kopması", description: "Debriyaj telinin kopması. Pedal dibe yapışır.", category: "sanziman", riskLevel: "MEDIUM", affectedKm: "60.000+ km", repairCost: "500 - 1.500 TL" },
            { id: "fimk6-2", title: "Ön Süspansiyon Alt Kol", description: "Ön alt kol burçlarının aşınması. Vuruntu ve boşluk.", category: "suspansiyon", riskLevel: "MEDIUM", affectedKm: "40.000+ km", repairCost: "1.500 - 3.000 TL" },
            { id: "fimk6-3", title: "Cam Kaldırma Mekanizması", description: "Cam kaldırma telinin kopması.", category: "govde", riskLevel: "LOW", affectedKm: "50.000+ km", repairCost: "1.000 - 2.000 TL" },
            { id: "fimk6-4", title: "Kapı Menteşe Aşınması", description: "Kapı menteşe pimlerinin aşınması. Kapı sarkması.", category: "govde", riskLevel: "LOW", affectedKm: "Yaş kaynaklı", repairCost: "500 - 1.000 TL" },
            { id: "fimk6-5", title: "Klima Radyatör Sızıntısı", description: "Ön kondenser delinmesi. Klima gaz kaçağı.", category: "elektronik", riskLevel: "LOW", affectedKm: "80.000+ km", repairCost: "2.000 - 4.000 TL" }
        ],
        pros: ["Eğlenceli sürüş", "Çok ekonomik", "Bol yedek parça", "Küçük ve çevik"],
        cons: ["Çok küçük arka kabin", "Gürültü yalıtımı zayıf", "Otoyolda sallantı"],
        buyingTips: ["Alt takım kontrolü", "Debriyaj teli durumunu sorun", "Kaporta altı pas kontrolü"]
    }
,

    // ─── Eski new-cars dosyasından taşındı ───
    {
        id: "ford-focus-2-1-6-tdci",
        slug: "ford-focus-2-1-6-tdci",
        brand: "Ford",
        model: "Focus",
        variant: "II 1.6 TDCi",
        years: "2005-2011",
        generation: "Mk2",
        price: 350000,
        reliabilityScore: 74,
        totalIssues: 6,
        searchCount: 10000,
        expertNote: "Focus Mk2 sürüş keyfi veren kompakt hatch. 1.6 TDCi motor (PSA ortak) güvenilir ama DPF problemi var. Çift kütleli volan ve debriyaj kronik. Yol tutuşu hâlâ sınıfında referans.",
        issues: [
            { id: "foc2-1", title: "Çift Kütleli Volan Arızası", description: "Rölantide ve motor dururken metalik vuruntu/şıkırtı sesi. Kavrama seti ile birlikte değiştirilmeli.", category: "sanziman", riskLevel: "HIGH", affectedKm: "80.000 - 120.000 km", repairCost: "10.000 - 18.000 TL" },
            { id: "foc2-2", title: "DPF Tıkanması", description: "Şehir içi kısa mesafe kullanımda partikül filtresi tıkanması. Güç kaybı ve arıza lambası.", category: "motor", riskLevel: "HIGH", affectedKm: "60.000+ km", repairCost: "5.000 - 15.000 TL" },
            { id: "foc2-3", title: "EGR Valfi Tıkanması", description: "Egzoz gazı geri dönüş valfinde kurum birikimi. Rölanti düzensizliği ve emisyon hatası.", category: "motor", riskLevel: "MEDIUM", affectedKm: "60.000+ km", repairCost: "3.000 - 6.000 TL" },
            { id: "foc2-4", title: "Arka Süspansiyon Burcu", description: "Arka süspansiyon alt kolunda burç aşınması. Virajlarda kayma hissi ve vuruntu.", category: "suspansiyon", riskLevel: "MEDIUM", affectedKm: "60.000+ km", repairCost: "2.000 - 5.000 TL" },
            { id: "foc2-5", title: "Direksiyon Elektrik Motoru", description: "Elektrikli direksiyon motorunun ağırlaşması veya arızalanması.", category: "elektronik", riskLevel: "MEDIUM", affectedKm: "100.000+ km", repairCost: "5.000 - 10.000 TL" },
            { id: "foc2-6", title: "Kapı Menteşe Pimi Aşınması", description: "Ön kapı menteşe pimlerinin aşınması. Kapılar sarkma yaparak gıcırtı verir.", category: "govde", riskLevel: "LOW", affectedKm: "100.000+ km", repairCost: "1.000 - 2.000 TL" }
        ],
        pros: ["Mükemmel yol tutuşu", "1.6 TDCi ekonomik", "Yedek parça bol ve ucuz", "Eğlenceli sürüş"],
        cons: ["Volan/kavrama masraflı", "DPF sorunu", "İç mekan plastikleri eskiyor"],
        buyingTips: ["Soğuk motorla çalıştırıp volan sesini dinleyin", "DPF durumunu tarattırın", "EGR temizliği yapılmış mı sorun"]
    }
,
    {
            "id": "ford-focus-4-1-5-ecoblue",
            "slug": "ford-focus-4-1-5-ecoblue",
            "brand": "Ford",
            "model": "Focus (Mk4)",
            "variant": "1.5 EcoBlue Titanium",
            "years": "2018-2024",
            "generation": "Mk4",
            "price": 1200000,
            "expertNote": "1.5 EcoBlue 120 HP dizel + 8AT. Son nesil Focus Türkiye'de sedan ve HB olarak satıldı. Mükemmel sürüş dinamikleri ve SYNC 3 multimedya. Ford Türkiye'den çekilince servis endişesi.",
            "reliabilityScore": 80,
            "totalIssues": 5,
            "searchCount": 16000,
            "issues": [
                    {
                            "id": "foc4-1",
                            "title": "AdBlue Sistemi",
                            "description": "AdBlue dozaj pompası veya sensör arızası.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "60.000+ km",
                            "repairCost": "8.000 - 18.000 TL"
                    },
                    {
                            "id": "foc4-2",
                            "title": "8AT Sarsıntısı",
                            "description": "8 ileri otomatik şanzımanda soğukta sert vites geçişleri.",
                            "category": "sanziman",
                            "riskLevel": "LOW",
                            "affectedKm": "50.000+ km",
                            "repairCost": "Yağ Değişimi"
                    },
                    {
                            "id": "foc4-3",
                            "title": "SYNC 3 Donma",
                            "description": "Multimedya sisteminin donması.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Rastgele",
                            "repairCost": "Yazılım"
                    },
                    {
                            "id": "foc4-4",
                            "title": "Arka Süspansiyon Burcu",
                            "description": "Arka süspansiyon burçlarından vuruntu sesi.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "60.000+ km",
                            "repairCost": "2.000 - 4.000 TL"
                    },
                    {
                            "id": "foc4-5",
                            "title": "DPF Rejenerasyon",
                            "description": "Kısa mesafe kullanımda DPF dolması.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Şehir içi",
                            "repairCost": "5.000 - 10.000 TL"
                    }
            ],
            "pros": [
                    "Mükemmel sürüş",
                    "8AT konfor",
                    "SYNC 3 kaliteli",
                    "Geniş bagaj"
            ],
            "cons": [
                    "Ford Türkiye çekildi",
                    "Servis endişesi",
                    "AdBlue maliyeti"
            ],
            "buyingTips": [
                    "Yetkili servis bakımlı tercih edin",
                    "AdBlue kontrolü",
                    "Titanium donanım minimum"
            ]
    }
,
    {
            "id": "ford-transit-connect-1-5-tdci",
            "slug": "ford-transit-connect-1-5-ecoblue",
            "brand": "Ford",
            "model": "Transit Connect (V408)",
            "variant": "1.5 EcoBlue Deluxe",
            "years": "2018-2024",
            "generation": "V408",
            "price": 1100000,
            "expertNote": "1.5 EcoBlue 120 HP + 8AT. Transit Connect ticari kullanıcıların gözdesi. 8AT şanzıman konfor sağlıyor. Ford Türkiye çekilse de parça bulmak kolay.",
            "reliabilityScore": 78,
            "totalIssues": 5,
            "searchCount": 9000,
            "issues": [
                    {
                            "id": "tc408-1",
                            "title": "EGR Tıkanması",
                            "description": "EGR valfinde kurum birikimi.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "80.000+ km",
                            "repairCost": "3.000 - 8.000 TL"
                    },
                    {
                            "id": "tc408-2",
                            "title": "DPF Dolması",
                            "description": "Şehir içi kısa mesafe kullanımda DPF tıkanması.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Şehir içi",
                            "repairCost": "5.000 - 12.000 TL"
                    },
                    {
                            "id": "tc408-3",
                            "title": "Sürgülü Kapı Rayı",
                            "description": "Sürgülü kapı ray mekanizmasının aşınması.",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "80.000+ km",
                            "repairCost": "3.000 - 6.000 TL"
                    },
                    {
                            "id": "tc408-4",
                            "title": "Arka Yaprak Yay",
                            "description": "Arka yaprak yaylarının yorulması.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "Yüklü kullanım",
                            "repairCost": "3.000 - 5.000 TL"
                    },
                    {
                            "id": "tc408-5",
                            "title": "SYNC 3",
                            "description": "Multimedya donması.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Rastgele",
                            "repairCost": "Yazılım"
                    }
            ],
            "pros": [
                    "Geniş yük alanı",
                    "8AT konfor",
                    "Düşük yakıt",
                    "Ticari kullanım ideal"
            ],
            "cons": [
                    "Ford çekildi",
                    "DPF riski",
                    "İç mekan sade"
            ],
            "buyingTips": [
                    "DPF taraması yaptırın",
                    "Deluxe donanım alın",
                    "8AT tercih edin"
            ]
    }
,
    {
            "id": "ford-courier-1-5-tdci",
            "slug": "ford-courier-1-5-tdci-titanium",
            "brand": "Ford",
            "model": "Tourneo Courier",
            "variant": "1.5 TDCi Titanium Plus",
            "years": "2014-2024",
            "generation": "JU2",
            "price": 800000,
            "expertNote": "1.5 TDCi 95 HP. Tourneo Courier Türkiye'de Yeniköy'de üretilen mini MPV. Aile aracı olarak çok pratik. Kayan arka kapılar yok ama büyük bagaj. Motor güvenilir.",
            "reliabilityScore": 80,
            "totalIssues": 5,
            "searchCount": 15000,
            "issues": [
                    {
                            "id": "cour-1",
                            "title": "EGR Tıkanması",
                            "description": "EGR valfinde kurum birikimi.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "80.000+ km",
                            "repairCost": "2.000 - 5.000 TL"
                    },
                    {
                            "id": "cour-2",
                            "title": "Debriyaj Hidroliği",
                            "description": "Debriyaj hidrolik hattı sızıntısı.",
                            "category": "sanziman",
                            "riskLevel": "LOW",
                            "affectedKm": "60.000+ km",
                            "repairCost": "1.500 - 3.000 TL"
                    },
                    {
                            "id": "cour-3",
                            "title": "Arka Amortisör",
                            "description": "Arka amortisörlerin erken yorulması.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "50.000+ km",
                            "repairCost": "2.000 - 4.000 TL"
                    },
                    {
                            "id": "cour-4",
                            "title": "Kapı Kilit",
                            "description": "Merkezi kilit aktüatörü arızası.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "60.000+ km",
                            "repairCost": "1.000 - 2.000 TL"
                    },
                    {
                            "id": "cour-5",
                            "title": "Boya Kalitesi",
                            "description": "İnce boya, taş çarpmaları.",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "Kronik",
                            "repairCost": "Lokal Boya"
                    }
            ],
            "pros": [
                    "Türkiye üretimi",
                    "Pratik aile aracı",
                    "Ekonomik TDCi",
                    "Büyük bagaj"
            ],
            "cons": [
                    "95 HP az",
                    "Otomatik yok",
                    "İç mekan sade"
            ],
            "buyingTips": [
                    "Titanium Plus donanım alın",
                    "EGR temizliği sorulmalı",
                    "Bakım geçmişi kontrol"
            ]
    }
,
    {
            "id": "ford-focus-2-1-6-ti-vct-aut",
            "slug": "ford-focus-2-1-6-ti-vct-powershift",
            "brand": "Ford",
            "model": "Focus II/III",
            "variant": "1.6 Ti-VCT PowerShift",
            "years": "2011-2018",
            "generation": "DYB",
            "price": 500000,
            "expertNote": "1.6 Ti-VCT 125 HP + PowerShift DCT. PowerShift çift kavramalı şanzıman FORD'un EN KÖTÜ kararı. Kavrama sarsıntısı, titreme, ani güç kesilmesi. Dünya genelinde geri çağırma yapıldı.",
            "reliabilityScore": 55,
            "totalIssues": 7,
            "searchCount": 12000,
            "issues": [
                    {
                            "id": "fps-1",
                            "title": "PowerShift Kavrama Titremesi",
                            "description": "Kuru kavramalı DCT şanzımanda KRONİK titreme ve sarsıntı. Düşük hızlarda araç sallanır. Dünya genelinde dava konusu oldu.",
                            "category": "sanziman",
                            "riskLevel": "CRITICAL",
                            "affectedKm": "20.000+ km",
                            "repairCost": "20.000 - 35.000 TL"
                    },
                    {
                            "id": "fps-2",
                            "title": "PowerShift Ani Güç Kesilmesi",
                            "description": "Trafikte beklenmedik anda şanzımanın boşa geçmesi. Güvenlik riski.",
                            "category": "sanziman",
                            "riskLevel": "CRITICAL",
                            "affectedKm": "Rastgele",
                            "repairCost": "Kavrama Seti / Modül"
                    },
                    {
                            "id": "fps-3",
                            "title": "TCM Modülü Arızası",
                            "description": "Şanzıman kontrol modülünün arızalanması.",
                            "category": "sanziman",
                            "riskLevel": "HIGH",
                            "affectedKm": "60.000+ km",
                            "repairCost": "10.000 - 20.000 TL"
                    },
                    {
                            "id": "fps-4",
                            "title": "Devridaim Pompası",
                            "description": "Su pompası sızıntısı. Hararet riski.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "60.000+ km",
                            "repairCost": "3.000 - 6.000 TL"
                    },
                    {
                            "id": "fps-5",
                            "title": "Kapı Kilit Aktüatörü",
                            "description": "Merkezi kilit aktüatörü arızası.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "50.000+ km",
                            "repairCost": "1.000 - 2.000 TL"
                    },
                    {
                            "id": "fps-6",
                            "title": "Ön Süspansiyon",
                            "description": "Ön alt kol bilyası aşınması.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "50.000+ km",
                            "repairCost": "1.500 - 3.000 TL"
                    },
                    {
                            "id": "fps-7",
                            "title": "EGR Tıkanması",
                            "description": "EGR valfinde kurum birikimi.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "80.000+ km",
                            "repairCost": "2.000 - 5.000 TL"
                    }
            ],
            "pros": [
                    "Sürüş keyfi (motor iyi)",
                    "Geniş iç mekan"
            ],
            "cons": [
                    "PowerShift KABUS",
                    "Ani güç kesilmesi GÜVENLİK RİSKİ",
                    "Dünya geneli geri çağırma",
                    "Kavrama ömrü çok kısa"
            ],
            "buyingTips": [
                    "POWERSHIFT ALMAYIN",
                    "Manuel alın veya dizel otomatik alın",
                    "1.5 TDCi + PowerShift de sorunlu",
                    "Bu şanzımanı olan hiçbir Ford almayın"
            ]
    }
,
    {
            "id": "ford-taunus-2-0-gl",
            "slug": "ford-taunus-2-0-gl-oto",
            "brand": "Ford",
            "model": "Taunus",
            "variant": "2.0 GL Otomatik",
            "years": "1970-1994",
            "generation": "TC/GBT",
            "price": 120000,
            "expertNote": "Ford Otosan üretimi efsane. Türkiye'de 1994'e kadar üretildi. 2.0 OHC motor çok sağlam. Otomatik şanzıman (C3) da güvenilir. Koleksiyoner değeri hızla artıyor.",
            "reliabilityScore": 73,
            "totalIssues": 5,
            "searchCount": 20000,
            "issues": [
                    {
                            "id": "tau-1",
                            "title": "Karbüratör Ayarı",
                            "description": "Weber karbüratör sürekli ayar istiyor.",
                            "category": "motor",
                            "riskLevel": "LOW",
                            "affectedKm": "Kronik",
                            "repairCost": "200 - 500 TL"
                    },
                    {
                            "id": "tau-2",
                            "title": "Kaporta Pası",
                            "description": "Ciddi paslanma problemi (50 yıllık araç).",
                            "category": "govde",
                            "riskLevel": "HIGH",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "Restorasyon"
                    },
                    {
                            "id": "tau-3",
                            "title": "Fren Sistemi",
                            "description": "Ön disk, arka kampana. Fren merkezi kaçırması.",
                            "category": "fren",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "500 - 2.000 TL"
                    },
                    {
                            "id": "tau-4",
                            "title": "Elektrik Tesisatı",
                            "description": "Tamamen yaşlanmış tesisat.",
                            "category": "elektronik",
                            "riskLevel": "HIGH",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "2.000 - 5.000 TL"
                    },
                    {
                            "id": "tau-5",
                            "title": "Süspansiyon",
                            "description": "Tüm süspansiyon parçaları aşınmış.",
                            "category": "suspansiyon",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "2.000 - 5.000 TL"
                    }
            ],
            "pros": [
                    "Efsanevi araç",
                    "2.0 OHC sağlam",
                    "Koleksiyoner değeri",
                    "Ford Otosan üretimi"
            ],
            "cons": [
                    "50 yıllık araç",
                    "Pas kabusu",
                    "Güvenlik sıfır",
                    "Restorasyon şart"
            ],
            "buyingTips": [
                    "Restorasyon bütçesi ayırın",
                    "Orijinallik önemli",
                    "Çürük şase = kaçın",
                    "TC3 kasa en aranan"
            ]
    }
,
    {
            "id": "ford-escort-1-6-clx",
            "slug": "ford-escort-1-6-clx-zetec",
            "brand": "Ford",
            "model": "Escort",
            "variant": "1.6 CLX Zetec",
            "years": "1990-2000",
            "generation": "Mk5/6",
            "price": 90000,
            "expertNote": "1.6 Zetec 90 HP. Escort Ford'un dünya çapında en çok satan arabası. Mk5/6 Türkiye'de çok satıldı. CVH yerine Zetec motor daha güvenilir.",
            "reliabilityScore": 73,
            "totalIssues": 5,
            "searchCount": 10000,
            "issues": [
                    {
                            "id": "esc-1",
                            "title": "Triger Kayışı",
                            "description": "Triger kayışı kopması riski.",
                            "category": "motor",
                            "riskLevel": "CRITICAL",
                            "affectedKm": "60.000 km",
                            "repairCost": "800 - 1.500 TL"
                    },
                    {
                            "id": "esc-2",
                            "title": "Kaporta Pası",
                            "description": "Yaygın paslanma.",
                            "category": "govde",
                            "riskLevel": "HIGH",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "Boya / Kaynak"
                    },
                    {
                            "id": "esc-3",
                            "title": "Su Pompası",
                            "description": "Devridaim pompası sızıntısı.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "80.000+ km",
                            "repairCost": "500 - 1.200 TL"
                    },
                    {
                            "id": "esc-4",
                            "title": "Ön Rotiller",
                            "description": "Ön süspansiyon rotilleri aşınması.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "40.000 km",
                            "repairCost": "400 - 800 TL"
                    },
                    {
                            "id": "esc-5",
                            "title": "Egzoz Manifoldu",
                            "description": "Egzoz manifoldu çatlağı.",
                            "category": "motor",
                            "riskLevel": "LOW",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "500 - 1.500 TL"
                    }
            ],
            "pros": [
                    "Zetec motor güvenilir",
                    "Ucuz bakım",
                    "Sportif sürüş",
                    "Yedek parça var"
            ],
            "cons": [
                    "Pas sorunu",
                    "Yaşlı araç",
                    "Güvenlik düşük",
                    "Parça azalıyor"
            ],
            "buyingTips": [
                    "Zetec motorlu tercih edin",
                    "Triger kontrolü",
                    "CVH motordan kaçının",
                    "CLX donanım yeterli"
            ]
    }
,
    {
            "id": "ford-mondeo-mk2-2-0",
            "slug": "ford-mondeo-mk2-2-0-ghia",
            "brand": "Ford",
            "model": "Mondeo",
            "variant": "Mk2 2.0 Ghia",
            "years": "1996-2000",
            "generation": "Mk2",
            "price": 100000,
            "expertNote": "2.0 Zetec-E 130 HP. Mondeo Mk2 güzel tasarım ve iyi sürüş. Ghia donanım deri koltuk, klima, ABS. D segment. Almanya'dan ithal araçlar çok.",
            "reliabilityScore": 72,
            "totalIssues": 5,
            "searchCount": 9000,
            "issues": [
                    {
                            "id": "mon2-1",
                            "title": "Triger Kayışı",
                            "description": "Triger kayışı ve gergi mekanizması.",
                            "category": "motor",
                            "riskLevel": "CRITICAL",
                            "affectedKm": "80.000 km",
                            "repairCost": "1.000 - 2.000 TL"
                    },
                    {
                            "id": "mon2-2",
                            "title": "Ön Alt Kol Burçları",
                            "description": "Ön süspansiyon alt kol burçlarının aşınması.",
                            "category": "suspansiyon",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "60.000+ km",
                            "repairCost": "1.000 - 2.500 TL"
                    },
                    {
                            "id": "mon2-3",
                            "title": "Kalorifer Peteği",
                            "description": "Kalorifer peteğinden su kaçağı.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "1.000 - 2.500 TL"
                    },
                    {
                            "id": "mon2-4",
                            "title": "Elektrik Arızaları",
                            "description": "Cam kaldırma ve merkezi kilit arızaları.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "500 - 1.500 TL"
                    },
                    {
                            "id": "mon2-5",
                            "title": "Kaporta Pası",
                            "description": "Kapı altları paslanması.",
                            "category": "govde",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "Boya / Kaynak"
                    }
            ],
            "pros": [
                    "İyi sürüş",
                    "Güçlü motor",
                    "Ghia donanım zengin",
                    "D segment konfor"
            ],
            "cons": [
                    "Triger riski",
                    "Yaşlı araç",
                    "Parça azalıyor",
                    "Yakıt tüketimi"
            ],
            "buyingTips": [
                    "Triger ne zaman değişti",
                    "Ghia veya GLX tercih edin",
                    "Almanya ithalatı kontrol",
                    "Manuel şanzıman tercih"
            ]
    }
,
    {
            "id": "ford-focus-mk1-1-6",
            "slug": "ford-focus-mk1-1-6-ghia",
            "brand": "Ford",
            "model": "Focus",
            "variant": "Mk1 1.6 Ghia",
            "years": "1998-2005",
            "generation": "Mk1 (C170)",
            "price": 140000,
            "expertNote": "1.6 Zetec-SE 100 HP. Focus Mk1 devrim yaratan C segment. Mükemmel yol tutuşu. HB, sedan ve SW versiyonları. Türkiye'de çok satıldı.",
            "reliabilityScore": 76,
            "totalIssues": 5,
            "searchCount": 16000,
            "issues": [
                    {
                            "id": "fmk1-1",
                            "title": "Termostat",
                            "description": "Termostat arızası. Hararet veya ısınmama.",
                            "category": "motor",
                            "riskLevel": "LOW",
                            "affectedKm": "60.000+ km",
                            "repairCost": "300 - 800 TL"
                    },
                    {
                            "id": "fmk1-2",
                            "title": "Arka Teker Mekanizması",
                            "description": "Arka çok noktalı süspansiyon burçları aşınması.",
                            "category": "suspansiyon",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "60.000+ km",
                            "repairCost": "1.000 - 2.500 TL"
                    },
                    {
                            "id": "fmk1-3",
                            "title": "Cam Kaldırma",
                            "description": "Cam kaldırma mekanizması arızası.",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "500 - 1.200 TL"
                    },
                    {
                            "id": "fmk1-4",
                            "title": "Katalitik Konvertör",
                            "description": "Katalitik konvertör tıkanması veya bozulması.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "100.000+ km",
                            "repairCost": "2.000 - 5.000 TL"
                    },
                    {
                            "id": "fmk1-5",
                            "title": "Motor Takozları",
                            "description": "Motor takozlarının sertleşmesi/kırılması.",
                            "category": "motor",
                            "riskLevel": "LOW",
                            "affectedKm": "80.000+ km",
                            "repairCost": "500 - 1.500 TL"
                    }
            ],
            "pros": [
                    "Efsane yol tutuşu",
                    "Güzel sürüş",
                    "Sportif tasarım",
                    "HB ikonu"
            ],
            "cons": [
                    "Yaşlanıyor",
                    "Süspansiyon maliyetli",
                    "Parça kısmen zor",
                    "Yakıt ortanın üstü"
            ],
            "buyingTips": [
                    "HB tercih edin (sportif)",
                    "Süspansiyon sesleri dinleyin",
                    "Ghia donanım en iyisi",
                    "Zetec-SE motor güvenilir"
            ]
    }
,
    {
            "id": "ford-fiesta-mk4-1-25",
            "slug": "ford-fiesta-mk4-1-25-flair",
            "brand": "Ford",
            "model": "Fiesta",
            "variant": "Mk4 1.25 Flair",
            "years": "1995-2002",
            "generation": "Mk4",
            "price": 70000,
            "expertNote": "1.25 Zetec-SE 75 HP. Fiesta Mk4 küçük, çevik şehir aracı. Motor güvenilir ve ekonomik. Yol tutuşu iyi (Focus tabanlı).",
            "reliabilityScore": 75,
            "totalIssues": 5,
            "searchCount": 8000,
            "issues": [
                    {
                            "id": "fie4-1",
                            "title": "Triger Kayışı",
                            "description": "Triger kayışı kontrol zamanı.",
                            "category": "motor",
                            "riskLevel": "CRITICAL",
                            "affectedKm": "60.000 km",
                            "repairCost": "600 - 1.200 TL"
                    },
                    {
                            "id": "fie4-2",
                            "title": "Kaporta Pası",
                            "description": "Kapı altları ve arka çamurluk pası.",
                            "category": "govde",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "Boya / Kaynak"
                    },
                    {
                            "id": "fie4-3",
                            "title": "Şanzıman Senkromece",
                            "description": "2. vites senkromece aşınması.",
                            "category": "sanziman",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "100.000+ km",
                            "repairCost": "2.000 - 4.000 TL"
                    },
                    {
                            "id": "fie4-4",
                            "title": "Arka Fren Kampanası",
                            "description": "Arka kampana frenlerin tutmaması.",
                            "category": "fren",
                            "riskLevel": "LOW",
                            "affectedKm": "40.000+ km",
                            "repairCost": "400 - 800 TL"
                    },
                    {
                            "id": "fie4-5",
                            "title": "Kalorifer Peteği",
                            "description": "Kalorifer peteğinden su kaçağı.",
                            "category": "motor",
                            "riskLevel": "LOW",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "500 - 1.200 TL"
                    }
            ],
            "pros": [
                    "Ekonomik",
                    "Çevik sürüş",
                    "1.25 güvenilir",
                    "Şehir aracı"
            ],
            "cons": [
                    "Küçük araç",
                    "75 HP az",
                    "Yaşlı",
                    "Parça azalıyor"
            ],
            "buyingTips": [
                    "1.25 Zetec-SE tercih edin",
                    "Triger kontrolü",
                    "İlk araç idealdir",
                    "Flair donanım yeterli"
            ]
    }
,
    {
            "id": "ford-focus-mk3-1-6-tdci",
            "slug": "ford-focus-mk3-1-6-tdci-trend-x",
            "brand": "Ford",
            "model": "Focus",
            "variant": "Mk3 1.6 TDCi Trend X",
            "years": "2011-2018",
            "generation": "Mk3 (DYB)",
            "price": 430000,
            "expertNote": "HHJD 1.6 TDCi 115 HP. Focus Mk3 mükemmel C segment. İyi sürüş dinamiği. Trend X donanım SYNC ekran, geri kamera. Ford Otosan Gölcük üretimi.",
            "reliabilityScore": 75,
            "totalIssues": 5,
            "searchCount": 16000,
            "issues": [
                    {
                            "id": "fmk3-1",
                            "title": "PowerShift Şanzıman",
                            "description": "PowerShift 6DCT450 çift kavrama şanzıman titreşimi ve arızası.",
                            "category": "sanziman",
                            "riskLevel": "CRITICAL",
                            "affectedKm": "40.000+ km",
                            "repairCost": "10.000 - 25.000 TL"
                    },
                    {
                            "id": "fmk3-2",
                            "title": "EGR Soğutucu",
                            "description": "EGR soğutucu çatlağı. Soğutma sıvısı kaçağı.",
                            "category": "motor",
                            "riskLevel": "HIGH",
                            "affectedKm": "80.000+ km",
                            "repairCost": "3.000 - 6.000 TL"
                    },
                    {
                            "id": "fmk3-3",
                            "title": "Su Pompası",
                            "description": "Su pompası sızıntısı.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "80.000+ km",
                            "repairCost": "1.500 - 3.000 TL"
                    },
                    {
                            "id": "fmk3-4",
                            "title": "Arka Süspansiyon",
                            "description": "Arka süspansiyon burçları sıkışması.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "50.000+ km",
                            "repairCost": "1.000 - 2.000 TL"
                    },
                    {
                            "id": "fmk3-5",
                            "title": "SYNC Donması",
                            "description": "Ford SYNC multimedya donması.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Kronik",
                            "repairCost": "500 - 1.500 TL"
                    }
            ],
            "pros": [
                    "Mükemmel sürüş",
                    "Ford Otosan üretimi",
                    "SYNC teknolojisi",
                    "C segment kralı"
            ],
            "cons": [
                    "PowerShift FELAKET",
                    "EGR sorunu",
                    "Parça pahalılaştı",
                    "İç mekan plastik"
            ],
            "buyingTips": [
                    "MANUEL ŞANZIMAN ŞART",
                    "PowerShift'den KAÇININ",
                    "1.6 TDCi yeterli",
                    "Trend X donanım ideal"
            ]
    }
,
    {
            "id": "ford-fiesta-mk7-1-4-tdci",
            "slug": "ford-fiesta-mk7-1-4-tdci-titanium",
            "brand": "Ford",
            "model": "Fiesta",
            "variant": "Mk7 1.4 TDCi Titanium",
            "years": "2009-2017",
            "generation": "Mk7 (JA8)",
            "price": 320000,
            "expertNote": "KVJA 1.4 TDCi 70 HP. Fiesta Mk7 şık küçük araç. İyi sürüş, ekonomik. Titanium donanım otomatik klima, Bluetooth, yol bilgisayarı.",
            "reliabilityScore": 77,
            "totalIssues": 5,
            "searchCount": 12000,
            "issues": [
                    {
                            "id": "fie7-1",
                            "title": "EGR Valfi",
                            "description": "EGR valfi tıkanması.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "80.000+ km",
                            "repairCost": "1.500 - 3.000 TL"
                    },
                    {
                            "id": "fie7-2",
                            "title": "Gösterge Arızası",
                            "description": "Gösterge paneli piksel sönmesi.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "500 - 1.500 TL"
                    },
                    {
                            "id": "fie7-3",
                            "title": "Su Pompası",
                            "description": "Su pompası sızıntısı.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "80.000+ km",
                            "repairCost": "1.000 - 2.000 TL"
                    },
                    {
                            "id": "fie7-4",
                            "title": "Arka Fren",
                            "description": "Arka kampana fren ayarı.",
                            "category": "fren",
                            "riskLevel": "LOW",
                            "affectedKm": "40.000+ km",
                            "repairCost": "300 - 800 TL"
                    },
                    {
                            "id": "fie7-5",
                            "title": "Motor Takozları",
                            "description": "Motor takozları sertleşmesi.",
                            "category": "motor",
                            "riskLevel": "LOW",
                            "affectedKm": "60.000+ km",
                            "repairCost": "500 - 1.200 TL"
                    }
            ],
            "pros": [
                    "Şık tasarım",
                    "Ekonomik",
                    "İyi sürüş",
                    "Titanium donanım güzel"
            ],
            "cons": [
                    "70 HP az",
                    "Küçük iç mekan",
                    "Dizel partikül",
                    "Parça pahalılaştı"
            ],
            "buyingTips": [
                    "1.0 EcoBoost çok daha iyi motor",
                    "Titanium donanım tercih",
                    "70 HP şehir içine yeter",
                    "Manuel şanzıman güvenilir"
            ]
    }
,
    {
            "id": "ford-courier-1-5-tdci",
            "slug": "ford-courier-1-5-tdci-trend",
            "brand": "Ford",
            "model": "Courier",
            "variant": "1.5 TDCi Trend",
            "years": "2014-2024",
            "generation": "JU2",
            "price": 600000,
            "expertNote": "XVCA 1.5 TDCi 75/95 HP. Courier Ford Otosan'ın Türkiye tasarımı. Küçük ticari → aile arabası dönüşümü. Çok pratik, ekonomik, geniş. Trend donanım klima, ses sistemi.",
            "reliabilityScore": 78,
            "totalIssues": 5,
            "searchCount": 22000,
            "issues": [
                    {
                            "id": "cou-1",
                            "title": "Triger Kayışı",
                            "description": "1.5 TDCi triger kayışı kontrol/değişimi.",
                            "category": "motor",
                            "riskLevel": "CRITICAL",
                            "affectedKm": "150.000 km",
                            "repairCost": "2.000 - 4.000 TL"
                    },
                    {
                            "id": "cou-2",
                            "title": "Turbo",
                            "description": "Turbo aktuatör arızası.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "120.000+ km",
                            "repairCost": "3.000 - 6.000 TL"
                    },
                    {
                            "id": "cou-3",
                            "title": "Sürgülü Kapı",
                            "description": "Sürgülü kapı mekanizması arızası.",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "Kullanım kaynaklı",
                            "repairCost": "1.000 - 2.500 TL"
                    },
                    {
                            "id": "cou-4",
                            "title": "Süspansiyon",
                            "description": "Arka yaprak yay (ticari versiyon).",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "Yüklü kullanım",
                            "repairCost": "1.000 - 2.000 TL"
                    },
                    {
                            "id": "cou-5",
                            "title": "Klima",
                            "description": "Klima gazı kaçağı.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "500 - 1.500 TL"
                    }
            ],
            "pros": [
                    "Çok pratik",
                    "Ekonomik",
                    "Ford Otosan kalitesi",
                    "Geniş iç mekan"
            ],
            "cons": [
                    "Ticari DNA",
                    "Gürültü yalıtımı kötü",
                    "Sürüş konforu düşük",
                    "Küçük motor"
            ],
            "buyingTips": [
                    "95 HP versiyonu tercih edin",
                    "Tourneo Courier aile versiyonu",
                    "Triger kontrolü",
                    "Ford Otosan yerli üretim"
            ]
    }
,
    {
            "id": "ford-kuga-1-5-tdci",
            "slug": "ford-kuga-mk2-1-5-tdci-titanium",
            "brand": "Ford",
            "model": "Kuga",
            "variant": "Mk2 1.5 TDCi Titanium",
            "years": "2013-2020",
            "generation": "Mk2 (DM2)",
            "price": 700000,
            "expertNote": "XWMC 1.5 TDCi 120 HP. Kuga Mk2 Ford'un C-SUV'u. Mükemmel sürüş dinamiği (SUV için). Titanium donanım SYNC 3, Apple CarPlay, deri koltuk. PowerShift risk!",
            "reliabilityScore": 74,
            "totalIssues": 5,
            "searchCount": 14000,
            "issues": [
                    {
                            "id": "kug-1",
                            "title": "PowerShift",
                            "description": "PowerShift çift kavrama şanzıman arızası.",
                            "category": "sanziman",
                            "riskLevel": "CRITICAL",
                            "affectedKm": "40.000+ km",
                            "repairCost": "10.000 - 25.000 TL"
                    },
                    {
                            "id": "kug-2",
                            "title": "Motor Soğutma",
                            "description": "Su pompası ve termostat arızası.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "80.000+ km",
                            "repairCost": "2.000 - 5.000 TL"
                    },
                    {
                            "id": "kug-3",
                            "title": "Ön Süspansiyon",
                            "description": "Ön alt kol burçları.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "50.000+ km",
                            "repairCost": "1.000 - 2.500 TL"
                    },
                    {
                            "id": "kug-4",
                            "title": "Turbo",
                            "description": "Turbo wastegate arızası.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "120.000+ km",
                            "repairCost": "4.000 - 8.000 TL"
                    },
                    {
                            "id": "kug-5",
                            "title": "SYNC",
                            "description": "SYNC 3 donma ve yazılım sorunları.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Kronik",
                            "repairCost": "500 - 2.000 TL"
                    }
            ],
            "pros": [
                    "İyi sürüş dinamiği",
                    "SYNC 3 mükemmel",
                    "Titanium donanım zengin",
                    "Güzel tasarım"
            ],
            "cons": [
                    "PowerShift FELAKET",
                    "Turbo maliyetli",
                    "Parça pahalı",
                    "Yakıt tüketimi"
            ],
            "buyingTips": [
                    "MANUEL ŞANZIMAN tercih edin",
                    "PowerShift'den KAÇININ",
                    "1.5 TDCi yeterli",
                    "Titanium en iyi donanım/fiyat"
            ]
    }
,
    {
            "id": "ford-transit-connect-1-5-tdci",
            "slug": "ford-transit-connect-1-5-tdci-trend",
            "brand": "Ford",
            "model": "Transit Connect",
            "variant": "1.5 TDCi Trend",
            "years": "2013-2024",
            "generation": "V408",
            "price": 600000,
            "expertNote": "XVCC 1.5 TDCi 100/120 HP. Transit Connect büyük ticari araç. Deluxe yolcu versiyonu da var. Ford Otosan kalitesi. 120 HP motor yeterli güçte.",
            "reliabilityScore": 77,
            "totalIssues": 5,
            "searchCount": 14000,
            "issues": [
                    {
                            "id": "tc-1",
                            "title": "Turbo",
                            "description": "Turbo aktuatör arızası.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "120.000+ km",
                            "repairCost": "3.000 - 6.000 TL"
                    },
                    {
                            "id": "tc-2",
                            "title": "Enjektör",
                            "description": "Enjektör tıkanması.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "150.000+ km",
                            "repairCost": "3.000 - 8.000 TL"
                    },
                    {
                            "id": "tc-3",
                            "title": "Sürgülü Kapı",
                            "description": "Sürgülü kapı rayı ve mekanizma.",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "Kullanım",
                            "repairCost": "1.000 - 2.500 TL"
                    },
                    {
                            "id": "tc-4",
                            "title": "Süspansiyon",
                            "description": "Arka yaprak yay (yüklü kullanım).",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "Yüklü kullanım",
                            "repairCost": "1.000 - 2.000 TL"
                    },
                    {
                            "id": "tc-5",
                            "title": "Klima",
                            "description": "Klima kompresörü arızası.",
                            "category": "elektronik",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "100.000+ km",
                            "repairCost": "2.000 - 5.000 TL"
                    }
            ],
            "pros": [
                    "Ford Otosan kalitesi",
                    "Geniş yük alanı",
                    "120 HP yeterli",
                    "Sağlam yapı"
            ],
            "cons": [
                    "Ticari araç",
                    "Konfor düşük",
                    "Yakıt tüketimi",
                    "Gürültü"
            ],
            "buyingTips": [
                    "120 HP tercih edin",
                    "Yolcu versiyonu daha konforlu",
                    "Ford Otosan yerli",
                    "Manuel şanzıman güvenilir"
            ]
    }
,
{
  "id": "ford-focus-mk35-fl",
  "slug": "ford-focus-mk3-5-1-5-tdci-facelift",
  "brand": "Ford",
  "model": "Focus",
  "variant": "Focus Mk3.5 Facelift 1.5 TDCi Titanium",
  "years": "2015-2018",
  "generation": "Ara Kasa (2015-2018)",
  "price": 700000,
  "expertNote": "Mk3.5 facelift Ford'un en önemli düzeltmesi: PowerShift DCT kaldırılıp 6 ileri torque converter otomatik şanzıman geldi. Bu tek başına büyük bir iyileşme. 1.5 TDCi motor 1.6 TDCi'ın yerini aldı — daha verimli ama EGR sorunları devam edebilir.",
  "reliabilityScore": 70,
  "totalIssues": 5,
  "searchCount": 12500,
  "issues": [
    {
      "id": "ford-fmk35-1",
      "title": "1.5 TDCi EGR Valve Tıkanması",
      "description": "1.6 TDCi'da da olan EGR tıkanma sorunu 1.5 TDCi'da azaldı ama tamamen çözülmedi. Şehir içi kısa mesafe kullanımda EGR valfı karbon biriktirir.",
      "category": "motor",
      "riskLevel": "MEDIUM",
      "affectedKm": "80.000-150.000 km",
      "repairCost": "₺3.000 – ₺6.000"
    },
    {
      "id": "ford-fmk35-2",
      "title": "6AT Şanzıman Vites Geçiş Gecikmesi",
      "description": "Torque converter 6AT, PowerShift'e göre çok daha güvenilir ancak düşük hızlarda vites geçiş kararlarında gecikme yaşanabilir. Performans açısından DCT kadar keskin değil.",
      "category": "sanziman",
      "riskLevel": "LOW",
      "affectedKm": "Tüm km",
      "repairCost": "₺0 (normal davranış)"
    },
    {
      "id": "ford-fmk35-3",
      "title": "Enjektör Sızıntısı",
      "description": "1.5 TDCi enjektörleri yüksek km'de sızıntı yapabilir. Motor bölgesinde dizel kokusu ve güç kaybı belirtisi.",
      "category": "motor",
      "riskLevel": "HIGH",
      "affectedKm": "120.000+ km",
      "repairCost": "₺4.000 – ₺12.000"
    },
    {
      "id": "ford-fmk35-4",
      "title": "SYNC 2 Multimedya Yavaşlama",
      "description": "SYNC 2 infotainment sistemi zamanla yavaşlar. Dokunmatik ekran tepki süreleri uzar.",
      "category": "elektronik",
      "riskLevel": "LOW",
      "affectedKm": "Tüm km",
      "repairCost": "₺0 – ₺1.500"
    },
    {
      "id": "ford-fmk35-5",
      "title": "Süspansiyon Bijon Gevşemesi",
      "description": "Ön süspansiyon alt salıncak bijonları zamanla gevşeyebilir. Direksiyon titremesi ve gürültü yapar.",
      "category": "suspansiyon",
      "riskLevel": "MEDIUM",
      "affectedKm": "60.000-100.000 km",
      "repairCost": "₺1.500 – ₺3.500"
    }
  ],
  "pros": [
    "PowerShift DCT KALDIRILDI — en büyük iyileşme",
    "6AT güvenilir otomatik",
    "1.5 TDCi daha verimli",
    "Daha modern ön tasarım",
    "SYNC 2 dokunmatik ekran"
  ],
  "cons": [
    "EGR sorunu devam ediyor",
    "1.5 TDCi enjektör riski var",
    "SYNC 2 zamanla yavaşlıyor"
  ],
  "buyingTips": [
    "MUTLAKA facelift olduğunu teyit edin — PowerShift DCT olan Mk3 ile karıştırmayın",
    "EGR valfı temizliği yapılmış mı kontrol edin",
    "6AT şanzıman sağlığını düz yolda test edin",
    "PowerShift'li Mk3'ten çok daha güvenilir"
  ]
}
];
