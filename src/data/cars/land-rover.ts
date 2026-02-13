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
        totalIssues: 3,
        searchCount: 5000,
        issues: [
            {
                id: "rrs-1",
                title: "Krank Mili Kırılması",
                description: "3.0 dizel motorlarda krank mili kırılma riski (Motor yatak sarması).",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "100.000+ km",
                repairCost: "300.000+ TL"
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
                repairCost: "Tespiti zor"
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
        totalIssues: 2,
        searchCount: 25000,
        issues: [
            {
                id: "evoque-1",
                title: "KRANK MİLİ KIRILMASI",
                description: "Ingenium dizel motorlarda krank mili aniden kırılır. Motor çöp olur.",
                category: "motor",
                riskLevel: "CRITICAL",
                affectedKm: "Rastgele (Her an olabilir)",
                repairCost: "250.000+ TL (Yeni Motor)"
            },
            {
                id: "evoque-2",
                title: "Zincir Kopması",
                description: "Arkada konumlu zincir koparsa motor iner.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "100.000 km",
                repairCost: "60.000+ TL"
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
    },
];
