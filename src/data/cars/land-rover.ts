import { Car } from '@/types';

export const landRoverCars: Car[] = [
    {
        id: "land-rover-range-rover-sport",
        slug: "land-rover-range-rover-sport",
        brand: "Land Rover",
        model: "Range Rover Sport",
        variant: "3.0 SDV6",
        years: "2014-2020",
        generation: "L494",
        price: 4500000,
        expertNote: "3.0 TDV6 dizel motor (SDV6 / TDV6). Türkiye'de Range Rover Sport ikinci elde çok değer kaybediyor ama prestij arayan için hala cazibeli. Krank mili kırılma riski 100.000 km sonrası ciddi — yağ analizi yaptırın. Hava süspansiyon körükleri 80.000 km sonrası 50.000+ TL masraf. Borusan Oto yetkili servis ağı var ama fiyatlar astronomik. Motor yağı analizi (metal talaşı kontrolu) almadan ÖNCE yaptırılmalı.",
        reliabilityScore: 65,
        totalIssues: 5,
        searchCount: 5000,
        issues: [
            {
                id: "rrs-1",
                title: "Krank Mili Kırılması",
                description: "3.0 dizel motorlarda krank mili kırılma riski (Motor yatak sarması).",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "100.000+ km",
                repairCost: "2.000 - 5.000 TL"
            },
            {
                id: "rrs-2",
                title: "Hava Süspansiyonu",
                description: "Körüklerin patlaması veya kompresör arızası.",
                category: "suspansiyon",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "50.000 TL"
            },
            {
                id: "rrs-3",
                title: "Elektronik",
                description: "Ekran ve sensör arızaları.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Sürekli",
                repairCost: "2.000 - 5.000 TL"
            },
            {
                id: "rover-range-rover-sport-auto-4",
                title: "DPF Tıkanması",
                description: "Şehir içi kısa mesafe kullanımda DPF filtresinin dolması.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Şehir içi kullanım",
                repairCost: "5.000 - 12.000 TL"
            },
            {
                id: "rover-range-rover-sport-auto-5",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
            }
        ],
        pros: [
            "Konfor",
            "Arazi yeteneği",
            "Prestij"
        ],
        cons: [
            "Çok yüksek arıza riski",
            "Bakım maliyeti"
        ],
        buyingTips: [
            "Motor yağı analiz edilmeli (Metal talaşı var mı?)"
        ]
    },
    {
        id: "land-rover-evoque-critical",
        slug: "land-rover-evoque-2-0-td4",
        brand: "Land Rover",
        model: "Range Rover Evoque",
        variant: "2.0 TD4 (Ingenium)",
        years: "2015-2019",
        generation: "L538",
        price: 1800000,
        expertNote: "UYARI: Ingenium 2.0 TD4 dizel motor KRANK MİLİ KIRILMA riski taşıyor — motor aniden çöp olabilir. Bu sorun Land Rover/Jaguar resmi olarak kabul etmedi ama binlerce vaka var. 250.000+ TL yeni motor masrafı. Zincir kopma riski ayrıca var. Türkiye'de ikinci el fiyatı bu yüzden çok düştü. Benzinli Si4 motor daha güvenilir ama Türkiye'ye az geldi. MÜMKÜNSE UZAK DURUN.",
        reliabilityScore: 40,
        totalIssues: 4,
        searchCount: 25000,
        issues: [
            {
                id: "evoque-1",
                title: "KRANK MİLİ KIRILMASI",
                description: "Ingenium dizel motorlarda krank mili aniden kırılır. Motor çöp olur.",
                category: "motor",
                riskLevel: "CRITICAL",
                affectedKm: "Rastgele (Her an olabilir)",
                repairCost: "2.000 - 5.000 TL"
            },
            {
                id: "evoque-2",
                title: "Zincir Kopması",
                description: "Arkada konumlu zincir koparsa motor iner.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "100.000 km",
                repairCost: "2.000 - 5.000 TL"
            },
            {
                id: "rover-evoque-2-0-td4-auto-3",
                title: "DPF Tıkanması",
                description: "Şehir içi kısa mesafe kullanımda DPF filtresinin dolması.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Şehir içi kullanım",
                repairCost: "5.000 - 12.000 TL"
            },
            {
                id: "rover-evoque-2-0-td4-auto-4",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
            }
        ],
        pros: [
            "Prestij",
            "Tasarım"
        ],
        cons: [
            "MOTOR SAATLİ BOMBA",
            "Çok yakıyor"
        ],
        buyingTips: [
            "Motor değişmiş mi mutlaka sorun",
            "Mümkünse uzak durun"
        ]
    }
,
    {
            "id": "lr-discovery-sport-2-0-td4",
            "slug": "lr-discovery-sport-2-0-td4",
            "brand": "Land Rover",
            "model": "Discovery Sport",
            "variant": "2.0 TD4 HSE AWD",
            "years": "2015-2023",
            "generation": "L550",
            "price": 2200000,
            "expertNote": "Ingenium 2.0 TD4 180 HP + 9AT + AWD. Discovery Sport Türkiye'de premium kompakt SUV olarak popüler. Araç yüksekliği ve AWD sistemi kış aylarında avantaj. 9AT bazen hırçın.",
            "reliabilityScore": 72,
            "totalIssues": 5,
            "searchCount": 7000,
            "issues": [
                    {
                            "id": "ds-lr-1",
                            "title": "9AT Şanzıman Sarsıntısı",
                            "description": "ZF 9HP şanzımanda vites geçiş gecikmesi ve sarsıntı.",
                            "category": "sanziman",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "50.000+ km",
                            "repairCost": "1.500 - 4.000 TL (Yazılım)"
                    },
                    {
                            "id": "ds-lr-2",
                            "title": "Ingenium DPF",
                            "description": "DPF filtresi tıkanması.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Şehir içi",
                            "repairCost": "10.000 - 20.000 TL"
                    },
                    {
                            "id": "ds-lr-3",
                            "title": "Elektronik Arızalar",
                            "description": "Çeşitli elektronik uyarı mesajları. Sensör hassasiyetleri.",
                            "category": "elektronik",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Rastgele",
                            "repairCost": "5.000 - 15.000 TL"
                    },
                    {
                            "id": "ds-lr-4",
                            "title": "Cam Tavan Su Sızması",
                            "description": "Panoramik cam tavan drenaj tıkanması.",
                            "category": "govde",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "3.000 - 8.000 TL"
                    },
                    {
                            "id": "ds-lr-5",
                            "title": "AdBlue Sistemi",
                            "description": "AdBlue pompası arızası.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "60.000+ km",
                            "repairCost": "10.000 - 20.000 TL"
                    }
            ],
            "pros": [
                    "Premium hissiyat",
                    "AWD performansı",
                    "7 kişi opsiyonu",
                    "Yüksek sürüş"
            ],
            "cons": [
                    "Bakım çok pahalı",
                    "Elektronik sorunlar",
                    "Güvenilirlik endişesi"
            ],
            "buyingTips": [
                    "Garanti dahilinde alın",
                    "Servis geçmişi şart",
                    "HSE donanım tercih edin"
            ]
    }
,
    {
            "id": "lr-freelander-2-2-td4",
            "slug": "lr-freelander-2-2-td4",
            "brand": "Land Rover",
            "model": "Freelander 2",
            "variant": "2.2 TD4 HSE",
            "years": "2006-2014",
            "generation": "L359",
            "price": 600000,
            "expertNote": "DW12 2.2 TD4 160 HP + 6AT. Freelander 2 Türkiye'de çok satıldı ama sorunları efsane. Termostat, EGR, şanzıman, süspansiyon — her şey sorun çıkarır. Ucuz ama riskli.",
            "reliabilityScore": 55,
            "totalIssues": 8,
            "searchCount": 8000,
            "issues": [
                    {
                            "id": "fl2-1",
                            "title": "Termostat Gövdesi ÇATLAMASI",
                            "description": "Plastik termostat gövdesinin çatlaması. Su kaçağı ve hararet. Kopya parça da çatlar. KRİTİK arıza.",
                            "category": "motor",
                            "riskLevel": "CRITICAL",
                            "affectedKm": "60.000+ km",
                            "repairCost": "5.000 - 10.000 TL"
                    },
                    {
                            "id": "fl2-2",
                            "title": "EGR Valfı Sürekli Tıkanma",
                            "description": "EGR valfinin çok sık tıkanması. Motor arıza lambası sürekli yanar.",
                            "category": "motor",
                            "riskLevel": "HIGH",
                            "affectedKm": "40.000+ km",
                            "repairCost": "3.000 - 8.000 TL"
                    },
                    {
                            "id": "fl2-3",
                            "title": "6AT Şanzıman Arızası",
                            "description": "Aisin AF21 şanzıman tork konvertörü arızası. Şanzıman kayması.",
                            "category": "sanziman",
                            "riskLevel": "HIGH",
                            "affectedKm": "80.000+ km",
                            "repairCost": "20.000 - 40.000 TL"
                    },
                    {
                            "id": "fl2-4",
                            "title": "Haldex Pompa Arızası",
                            "description": "AWD Haldex pompası arızası. 4x4 devre dışı kalması.",
                            "category": "sanziman",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "80.000+ km",
                            "repairCost": "10.000 - 20.000 TL"
                    },
                    {
                            "id": "fl2-5",
                            "title": "Ön Süspansiyon Komple",
                            "description": "Ön süspansiyon rotilleri, bilyaları, amortisörleri — hepsi aynı anda biter.",
                            "category": "suspansiyon",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "50.000+ km",
                            "repairCost": "5.000 - 12.000 TL"
                    },
                    {
                            "id": "fl2-6",
                            "title": "Turbo Aktuatör",
                            "description": "Turbo elektronik aktuatör arızası. Güç kaybı.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "80.000+ km",
                            "repairCost": "5.000 - 12.000 TL"
                    },
                    {
                            "id": "fl2-7",
                            "title": "Elektrik Arızaları",
                            "description": "BCM modülü, cam kaldırma, merkezi kilit — sürekli elektronik arıza.",
                            "category": "elektronik",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Kronik",
                            "repairCost": "5.000 - 15.000 TL"
                    },
                    {
                            "id": "fl2-8",
                            "title": "DPF + Enjektör",
                            "description": "DPF tıkanması + enjektör aşınması birlikte gelir.",
                            "category": "motor",
                            "riskLevel": "HIGH",
                            "affectedKm": "100.000+ km",
                            "repairCost": "15.000 - 30.000 TL"
                    }
            ],
            "pros": [
                    "Premium marka",
                    "Off-road yeteneği",
                    "Ucuz ikinci el"
            ],
            "cons": [
                    "HER ŞEY ARIZALANIR",
                    "Bakım astronomik",
                    "Termostat kabusları",
                    "Şanzıman riski",
                    "Elektronik felaketi"
            ],
            "buyingTips": [
                    "ALMAYIN (şaka değil)",
                    "Alacaksanız mekanik mutlaka bakmalı",
                    "Reserve fon ayırın",
                    "Termostat yenilenmiş mi kontrol edin"
            ]
    }
];
