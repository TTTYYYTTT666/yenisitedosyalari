import { Car } from '@/types';

export const jeepCars: Car[] = [
    // ═══════════════════════════════════════════════════════
    // RENEGADE — 1.6 MultiJet (DİZEL — EN ÇOK SATAN)
    // ═══════════════════════════════════════════════════════
    {
        id: "jeep-renegade-mjet",
        slug: "jeep-renegade-1-6-multijet",
        brand: "Jeep",
        model: "Renegade",
        variant: "1.6 MultiJet 120 HP Longitude (DDCT)",
        years: "2015-2023",
        generation: "BU",
        expertNote: "Fiat 1.6 MultiJet 120 HP + DDCT (kuru kavrama çift kavrama). Türkiye'de en çok satan Jeep modeli — ikonik tasarımıyla ilgi çeker. Motor Fiat altyapısı, parçalar ucuz ve her yerde bulunur. AMA DDCT kuru kavramalı şanzıman SORUNLU — titreme ve silkeleme kronik. Bagaj çok küçük (351L). Arazi yeteneği düşünülenden daha iyi ama gerçek off-road aracı değil.",
        reliabilityScore: 72,
        totalIssues: 5,
        searchCount: 14000,
        issues: [
            {
                id: "renegade-d-1",
                title: "DDCT Kuru Kavrama Titremesi",
                description: "Çift kavramalı (kuru) şanzımanda kalkışlarda titreme, silkeleme ve vites geçiş sertliği. Fiat grubu kroniği.",
                category: "sanziman",
                riskLevel: "HIGH",
                affectedKm: "40.000+ km",
                repairCost: "25.000 - 45.000 TL (Kavrama seti)"
            },
            {
                id: "renegade-d-2",
                title: "Turbo Basınç Valfi (N75)",
                description: "Turbo basınç kontrol valfi arızası sonucu güç kaybı ve arıza lambası.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "3.000 - 5.000 TL"
            },
            {
                id: "renegade-d-3",
                title: "Start-Stop Arızası",
                description: "Start-stop sisteminin çalışmaması — Fiat grubu genel kroniği.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Sensör değişimi (2.000-4.000 TL)"
            },
            {
                id: "renegade-1-6-multijet-auto-4",
                title: "Yağ Eksiltme",
                description: "Motor yağının servis aralarında eksilmesi. Düzenli kontrol şart.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "Segman / 5.000 - 15.000 TL"
            },
            {
                id: "renegade-1-6-multijet-auto-5",
                title: "DCT Kavrama Titremesi",
                description: "Çift kavramalı şanzımanda düşük hızlarda titreşim.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "40.000+ km",
                repairCost: "10.000 - 25.000 TL"
            }
        ],
        pros: [
            "İkonik Jeep tasarımı",
            "Fiat altyapısı (ucuz ve yaygın parça)",
            "Yüksek sürüş pozisyonu",
            "Sağlam şasi"
        ],
        cons: [
            "DDCT kuru kavrama sorunu",
            "Bagaj çok küçük (351L)",
            "Rüzgar sesi (kutu tasarım)",
            "İkinci elde değer kaybı yüksek"
        ],
        buyingTips: [
            "DDCT şanzımanda kalkışta titreme test edin — ÇOK ÖNEMLİ",
            "Arazide kullanılmış mı altına baktırın",
            "Fiat MultiJet servisleri bakım yapabilir — Jeep servisine gitmenize gerek yok"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // RENEGADE — 1.3 Turbo (BENZİNLİ)
    // ═══════════════════════════════════════════════════════
    {
        id: "jeep-renegade-13t",
        slug: "jeep-renegade-1-3-turbo",
        brand: "Jeep",
        model: "Renegade",
        variant: "1.3 T4 150 HP Limited (DDCT)",
        years: "2019-2023",
        generation: "BU Facelift",
        expertNote: "GSE 1.3 T4 150 HP + 6 ileri DDCT. Renegade'in makyajlı benzinli versiyonu. Motor Fiat 500X ile ortak. Daha güçlü ama benzinli olduğu için yakıyor (şehir içi 10-11L). DDCT kavrama sorunu burada da var. Zincir sesi bazı üretimlerde erken çıkabiliyor.",
        reliabilityScore: 71,
        totalIssues: 5,
        searchCount: 6000,
        issues: [
            {
                id: "renegade-b-1",
                title: "DDCT Kuru Kavrama",
                description: "Kuru kavramalı çift kavrama şanzımanda titreme ve silkeleme.",
                category: "sanziman",
                riskLevel: "HIGH",
                affectedKm: "40.000+ km",
                repairCost: "25.000 - 45.000 TL"
            },
            {
                id: "renegade-b-2",
                title: "Zincir Sesi",
                description: "1.3 T4 motorlarda eksantrik zincirinden gelen şakırtı sesi.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "60.000+ km",
                repairCost: "15.000 - 25.000 TL"
            },
            {
                id: "renegade-b-3",
                title: "Uconnect Donma",
                description: "Uconnect infotainment sisteminin donması ve yeniden başlatma gerekliliği.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "1.500 - 4.000 TL (Yazılım)"
            },
            {
                id: "renegade-1-3-turbo-auto-4",
                title: "Yağ Eksiltme",
                description: "Motor yağının servis aralarında eksilmesi. Düzenli kontrol şart.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "Segman / 5.000 - 15.000 TL"
            },
            {
                id: "renegade-1-3-turbo-auto-5",
                title: "DCT Kavrama Titremesi",
                description: "Çift kavramalı şanzımanda düşük hızlarda titreşim.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "40.000+ km",
                repairCost: "10.000 - 25.000 TL"
            }
        ],
        pros: [
            "150 HP güçlü motor",
            "İkonik tasarım",
            "Fiat altyapısı (yaygın parça)",
            "Yüksek görüş açısı"
        ],
        cons: [
            "DDCT kavrama sorunu",
            "Yüksek yakıt tüketimi (benzinli)",
            "Zincir sesi riski",
            "Bagaj küçük"
        ],
        buyingTips: [
            "Zincir sesi dinleyin — sabah ilk çalıştırmada",
            "DDCT kalkış testini mutlaka yapın",
            "Dizel versiyonu daha ekonomik — bütçenize göre karar verin"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // COMPASS — 1.3 Turbo (DDCT KABUSU)
    // ═══════════════════════════════════════════════════════
    {
        id: "jeep-compass-13t",
        slug: "jeep-compass-1-3-turbo",
        brand: "Jeep",
        model: "Compass",
        variant: "1.3 T4 150 HP Limited (DDCT)",
        years: "2017-2024",
        generation: "MP",
        expertNote: "GSE 1.3 T4 150 HP + 6 ileri DDCT. Jeep'in C-SUV'u — Renegade'den büyük, daha premium. AMA DDCT kuru kavrama kabusu burada da aynen devam ediyor. Elektrik sorunları da ekleniyor. Compass güzel araç ama güvenilirlik puanı düşük. İkinci elde herkes DDCT'den korkuyor. Trail Rated arazi yeteneği var ama gerçek off-road aracı değil.",
        reliabilityScore: 68,
        totalIssues: 5,
        searchCount: 8500,
        issues: [
            {
                id: "compass-1",
                title: "DDCT Kuru Kavrama KABUSU",
                description: "Çift kavramalı (kuru) şanzımanda kronik titreme, silkeleme ve vites geçmeme. Yolda bırakma riski.",
                category: "sanziman",
                riskLevel: "HIGH",
                affectedKm: "30.000+ km",
                repairCost: "30.000 - 55.000 TL (Komple kavrama seti)"
            },
            {
                id: "compass-2",
                title: "Elektrik / Sensör Hataları",
                description: "Çeşitli sensör arızaları, gösterge uyarı lambası fırtınası, park sensörü hayalet uyarıları.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "5.000 - 15.000 TL"
            },
            {
                id: "compass-3",
                title: "Uconnect Infotainment",
                description: "Ekranın donması, Bluetooth bağlantı kesilmesi, geri görüş kamerasının geç açılması.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "1.500 - 4.000 TL (Yazılım)"
            },
            {
                id: "compass-1-3-turbo-auto-4",
                title: "12V Akü Boşalması",
                description: "12V yardımcı akünün uzun park halinde boşalması.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "3.000 - 5.000 TL"
            },
            {
                id: "compass-1-3-turbo-auto-5",
                title: "Şarj Kapağı Sorunu",
                description: "Şarj kapağının donması veya mekanik olarak açılmaması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kış ayları",
                repairCost: "1.500 - 3.000 TL"
            }
        ],
        pros: [
            "Jeep DNA ve Trail Rated rozeti",
            "Premium tasarım",
            "Geniş iç mekan (Renegade'den büyük)",
            "Yüksek görüş açısı"
        ],
        cons: [
            "DDCT kavrama kabusu (KRİTİK)",
            "Elektrik sorunları kronik",
            "İkinci elde ağır değer kaybı",
            "Yakıt tüketimi yüksek (şehir 11-12L)"
        ],
        buyingTips: [
            "DDCT şanzımanı ÇOK DİKKATLİ test edin — kalkışta titreme var mı?",
            "Arıza geçmişini mutlaka sorgulayın",
            "Manuel şanzımanlısı bulabilirseniz tercih edin",
            "Garanti süresi bitmemiş olanları tercih edin"
        ]
    }
,
    {
            "id": "jeep-cherokee-2-0-td",
            "slug": "jeep-cherokee-2-0-td",
            "brand": "Jeep",
            "model": "Cherokee (KL)",
            "variant": "2.0 TD Limited AWD",
            "years": "2014-2022",
            "generation": "KL",
            "expertNote": "MultiJet II 2.0 TD 170 HP + 9AT + Active Drive 4x4. Cherokee KL Türkiye'de cesur tasarımıyla tartışmalı ama off-road yeteneği gerçek. 9AT ZF şanzıman hassas.",
            "reliabilityScore": 73,
            "totalIssues": 5,
            "searchCount": 6000,
            "issues": [
                    {
                            "id": "cher-1",
                            "title": "9AT ZF Şanzıman",
                            "description": "ZF 9HP şanzımanda vites kararsızlığı.",
                            "category": "sanziman",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "50.000+ km",
                            "repairCost": "Yazılım / 10.000 TL"
                    },
                    {
                            "id": "cher-2",
                            "title": "EGR Tıkanması",
                            "description": "EGR valfinde karbon birikmesi.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "80.000+ km",
                            "repairCost": "3.000 - 8.000 TL"
                    },
                    {
                            "id": "cher-3",
                            "title": "Elektronik Arızalar",
                            "description": "Çeşitli sensör uyarı mesajları.",
                            "category": "elektronik",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Rastgele",
                            "repairCost": "3.000 - 10.000 TL"
                    },
                    {
                            "id": "cher-4",
                            "title": "Ön Süspansiyon",
                            "description": "Ön süspansiyon alt kol bilyası aşınması.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "60.000+ km",
                            "repairCost": "3.000 - 6.000 TL"
                    },
                    {
                            "id": "cher-5",
                            "title": "DPF Tıkanması",
                            "description": "Şehir içi kullanımda DPF dolması.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Şehir içi",
                            "repairCost": "5.000 - 15.000 TL"
                    }
            ],
            "pros": [
                    "Gerçek off-road",
                    "Cesur tasarım",
                    "MultiJet güç",
                    "AWD sistemi"
            ],
            "cons": [
                    "9AT hassasiyeti",
                    "Elektronik güvenilirlik",
                    "Parça pahalı"
            ],
            "buyingTips": [
                    "9AT yazılımı güncel mi sorun",
                    "Limited donanım",
                    "Off-road testini yapın"
            ]
    }
,
    {
            "id": "jeep-wrangler-jl-2-0",
            "slug": "jeep-wrangler-jl-2-0-turbo",
            "brand": "Jeep",
            "model": "Wrangler (JL)",
            "variant": "2.0 Turbo Rubicon",
            "years": "2018-2025",
            "generation": "JL",
            "expertNote": "GME 2.0 Turbo 272 HP + 8AT. JL Wrangler dünyanın en ikonik off-road aracı. Rubicon paketi en donanımlı arazi versiyonu. Günlük kullanımda gürültülü ve yakıt canavarı.",
            "reliabilityScore": 75,
            "totalIssues": 5,
            "searchCount": 8000,
            "issues": [
                    {
                            "id": "wjl-1",
                            "title": "Yağ Tüketimi",
                            "description": "2.0 Turbo motorda yağ tüketimi.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "50.000+ km",
                            "repairCost": "Takip / 10.000 TL"
                    },
                    {
                            "id": "wjl-2",
                            "title": "Kapı/Tavan Su Sızması",
                            "description": "Çıkarılabilir panel bağlantılarından su sızması.",
                            "category": "govde",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Yoğun yağmur",
                            "repairCost": "Fitil / 3.000 TL"
                    },
                    {
                            "id": "wjl-3",
                            "title": "8AT Sarsıntısı",
                            "description": "ZF 8HP soğukta sert geçişler.",
                            "category": "sanziman",
                            "riskLevel": "LOW",
                            "affectedKm": "Soğuk",
                            "repairCost": "2.000 - 5.000 TL (Yağ)"
                    },
                    {
                            "id": "wjl-4",
                            "title": "Death Wobble",
                            "description": "Yüksek hızda direksiyon titremesi (direksiyon damperi).",
                            "category": "suspansiyon",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "60.000+ km",
                            "repairCost": "5.000 - 10.000 TL"
                    },
                    {
                            "id": "wjl-5",
                            "title": "UConnect Donma",
                            "description": "UConnect multimedya donması.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Rastgele",
                            "repairCost": "1.500 - 4.000 TL (Yazılım)"
                    }
            ],
            "pros": [
                    "İkonik off-road",
                    "Çıkarılabilir tavan/kapılar",
                    "Rubicon arazi yeteneği",
                    "Topluluk kültürü"
            ],
            "cons": [
                    "Yakıt tüketimi 12-15L",
                    "Gürültülü",
                    "Su sızması riski"
            ],
            "buyingTips": [
                    "Rubicon alırsanız gerçek arazi yapın",
                    "Tüm fitilleri kontrol edin",
                    "Death wobble var mı test edin"
            ]
    }
];
