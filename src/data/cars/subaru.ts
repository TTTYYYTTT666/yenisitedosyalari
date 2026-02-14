import { Car } from '@/types';

export const subaruCars: Car[] = [
    {
        id: "subaru-xv",
        slug: "subaru-xv-1-6",
        brand: "Subaru",
        model: "XV",
        variant: "1.6 Boxer",
        years: "2012-2023",
        generation: "GP",
        expertNote: "Subaru yatay (Boxer) 1.6 motor + simetrik AWD. Türkiye'de Subaru servis ağı çok sınırlı (İstanbul ve Ankara). Boxer motor karakteristik olarak yağ eksiltir — 1.000 km'de 0.5 litre normal kabul ediliyor. EyeSight güvenlik sistemi Türkiye yollarında iyi çalışıyor. Performans beklemeyin (114 HP), güvenlik ve karda sürüş için alın. İkinci elde çok yavaş gider — alıcı kitlesi dar.",
        reliabilityScore: 88,
        totalIssues: 4,
        searchCount: 4000,
        issues: [
            {
                id: "xv-1",
                title: "Yağ Eksiltme",
                description: "Boxer motorun karakteristik yağ tüketimi.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Sürekli",
                repairCost: "2.000 - 5.000 TL"
            },
            {
                id: "xv-1-6-auto-2",
                title: "Buji/Ateşleme Bobini",
                description: "Buji veya ateşleme bobini arızası. Rölantide titreşim ve performans kaybı.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "60.000+ km",
                repairCost: "2.000 - 5.000 TL"
            },
            {
                id: "xv-1-6-auto-3",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
            },
            {
                id: "xv-1-6-auto-4",
                title: "Süspansiyon Burcu Aşınması",
                description: "Ön/arka süspansiyon burçlarının aşınması. Kasiste vuruntu sesi.",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "60.000+ km",
                repairCost: "2.000 - 5.000 TL"
            }
        ],
        pros: [
            "Simetrik 4 Çeker",
            "Güvenlik (EyeSight)",
            "Yol tutuş"
        ],
        cons: [
            "Performans (Hantal)",
            "Bagaj",
            "Yakıt"
        ],
        buyingTips: [
            "Performans beklemeyin, güvenlik ve karda sürüş için alın."
        ]
    }
];
