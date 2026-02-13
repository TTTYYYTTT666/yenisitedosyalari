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
        price: 1100000,
        expertNote: "Fiat 1.6 MultiJet 120 HP + DDCT (kuru kavrama çift kavrama). Türkiye'de en çok satan Jeep modeli — ikonik tasarımıyla ilgi çeker. Motor Fiat altyapısı, parçalar ucuz ve her yerde bulunur. AMA DDCT kuru kavramalı şanzıman SORUNLU — titreme ve silkeleme kronik. Bagaj çok küçük (351L). Arazi yeteneği düşünülenden daha iyi ama gerçek off-road aracı değil.",
        reliabilityScore: 72,
        totalIssues: 3,
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
        price: 1250000,
        expertNote: "GSE 1.3 T4 150 HP + 6 ileri DDCT. Renegade'in makyajlı benzinli versiyonu. Motor Fiat 500X ile ortak. Daha güçlü ama benzinli olduğu için yakıyor (şehir içi 10-11L). DDCT kavrama sorunu burada da var. Zincir sesi bazı üretimlerde erken çıkabiliyor.",
        reliabilityScore: 71,
        totalIssues: 3,
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
                repairCost: "Yazılım güncellemesi"
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
        price: 1400000,
        expertNote: "GSE 1.3 T4 150 HP + 6 ileri DDCT. Jeep'in C-SUV'u — Renegade'den büyük, daha premium. AMA DDCT kuru kavrama kabusu burada da aynen devam ediyor. Elektrik sorunları da ekleniyor. Compass güzel araç ama güvenilirlik puanı düşük. İkinci elde herkes DDCT'den korkuyor. Trail Rated arazi yeteneği var ama gerçek off-road aracı değil.",
        reliabilityScore: 68,
        totalIssues: 3,
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
                repairCost: "Yazılım güncellemesi"
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
    },
];
