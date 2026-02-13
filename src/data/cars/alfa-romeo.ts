import { Car } from '@/types';

export const alfaRomeoCars: Car[] = [
    {
        id: "alfa-romeo-giulia-2-0-turbo",
        slug: "alfa-romeo-giulia-2-0-turbo",
        brand: "Alfa Romeo",
        model: "Giulia",
        variant: "2.0 Turbo",
        years: "2016-2024",
        generation: "952",
        price: 2200000,
        expertNote: "2.0 GME turbo motor Ferrari mühendisliği ile geliştirildi. ZF 8HP şanzıman BMW ile ortak. Türkiye'de Alfa Romeo tutkunları için rüya araç ama bakım maliyetleri yüksek. Wastegate valfi 60.000 km sonrası kronik problem. Süspansiyon bilyaları Alman rakiplerinden daha hızlı biter. Fiat-Chrysler servis ağı sınırlı — İstanbul dışında bakım zor. İkinci elde değer kaybı yüksek.",
        reliabilityScore: 72,
        totalIssues: 3,
        searchCount: 5500,
        issues: [
            {
                id: "giulia-2",
                title: "Süspansiyon Bilyası",
                description: "Ön alt salıncak bilyalarının erken bitmesi.",
                category: "suspansiyon",
                riskLevel: "MEDIUM",
                affectedKm: "40.000+ km",
                repairCost: "8.000 - 15.000 TL"
            },
            {
                id: "giulia-1",
                title: "Turbo Valf",
                description: "Turbo wastegate valfi arızası.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "60.000+ km",
                repairCost: "25.000 - 45.000 TL"
            },
            {
                id: "giulia-3",
                title: "Elektrik",
                description: "Çeşitli sensör hataları.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "5.000 - 20.000 TL"
            }
        ],
        pros: [
            "En iyi sürüş hissi",
            "Ferrari motoru (tuning)",
            "İtalyan tasarım"
        ],
        cons: [
            "Güvenilirlik sorunu",
            "Yüksek bakım maliyetleri"
        ],
        buyingTips: [
            "Mutlaka detaylı ekspertiz yaptırın",
            "Servis geçmişini kontrol edin"
        ]
    },
    {
        id: "alfa-romeo-stelvio-2-0-turbo",
        slug: "alfa-romeo-stelvio-2-0-turbo",
        brand: "Alfa Romeo",
        model: "Stelvio",
        variant: "2.0 Turbo",
        years: "2017-2024",
        generation: "949",
        price: 2500000,
        expertNote: "Giulia ile aynı Giorgio platformu ve 2.0 GME motor. AWD Q4 sistem lazım değil Türkiye'de, RWD yeterli. ZF şanzıman uğultusu 80.000 km sonrası oluşabilir. Premium SUV arayan ama Mercedes/BMW'den farklı bir şey isteyen niş kittle için. Servis ağı sınırlı — Stellantis bayileri bakıyor ama uzmanlık eksik olabilir.",
        reliabilityScore: 71,
        totalIssues: 2,
        searchCount: 4500,
        issues: [
            {
                id: "stelvio-1",
                title: "Motor Arızaları",
                description: "Giulia ile aynı motor sorunları.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "60.000+ km",
                repairCost: "25.000 - 50.000 TL"
            },
            {
                id: "stelvio-2",
                title: "Şanzıman Sesi",
                description: "ZF 8HP şanzımandan gelen uğultu.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "20.000 - 40.000 TL"
            }
        ],
        pros: [
            "SUV dünyasının en sportifi",
            "Çekici tasarım",
            "Premium"
        ],
        cons: [
            "Alfa güvenilirliği",
            "Yedek parça fiyatları"
        ],
        buyingTips: [
            "Uzun garantili tercih edin"
        ]
    },
    {
        id: "alfa-romeo-giulietta",
        slug: "alfa-romeo-giulietta-1-4",
        brand: "Alfa Romeo",
        model: "Giulietta",
        variant: "1.4 MultiAir",
        years: "2010-2020",
        generation: "940",
        price: 900000,
        expertNote: "Fiat/Chrysler MultiAir teknolojisi — 1.4 Turbo motor (170 HP). MultiAir ünitesi motor yağına HAYATİ derecede bağımlı, 7.500 km'de bir yağ değişimi şart. Yağsız kalırsa 30.000 TL masraf. Kapı kolu kırılması kronik ama ucuz (~1.000 TL). Türkiye'de gizli şampiyon — sürüş hissi Golf GTI'dan iyi ama ikinci el değeri düşük.",
        reliabilityScore: 78,
        totalIssues: 2,
        searchCount: 7000,
        issues: [
            {
                id: "giulietta-1",
                title: "MultiAir Ünitesi",
                description: "Motor yağsız kalırsa ünite arızası.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "Bakımsızsa",
                repairCost: "30.000 TL"
            },
            {
                id: "giulietta-2",
                title: "Kapı Kolu",
                description: "İç kapı açma kolunun kırılması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "1.000 TL"
            }
        ],
        pros: [
            "Tasarım",
            "Yol tutuş",
            "Ruh"
        ],
        cons: [
            "İkinci el",
            "Parça fiyatları"
        ],
        buyingTips: [
            "MultiAir filtre temizliği yapılmış mı sorun."
        ]
    },
];
