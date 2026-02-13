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
        price: 1300000,
        expertNote: "Subaru yatay (Boxer) 1.6 motor + simetrik AWD. Türkiye'de Subaru servis ağı çok sınırlı (İstanbul ve Ankara). Boxer motor karakteristik olarak yağ eksiltir — 1.000 km'de 0.5 litre normal kabul ediliyor. EyeSight güvenlik sistemi Türkiye yollarında iyi çalışıyor. Performans beklemeyin (114 HP), güvenlik ve karda sürüş için alın. İkinci elde çok yavaş gider — alıcı kitlesi dar.",
        reliabilityScore: 88,
        totalIssues: 1,
        searchCount: 4000,
        issues: [
            {
                id: "xv-1",
                title: "Yağ Eksiltme",
                description: "Boxer motorun karakteristik yağ tüketimi.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Sürekli",
                repairCost: "Bakım"
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
    },
];
