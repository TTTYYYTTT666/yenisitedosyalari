import { Car } from '@/types';

export const porscheCars: Car[] = [
    {
        id: "porsche-macan",
        slug: "porsche-macan-2-0",
        brand: "Porsche",
        model: "Macan",
        variant: "2.0",
        years: "2014-2023",
        generation: "95B",
        price: 4500000,
        expertNote: "Audi Q5 MLB platformu, EA888 2.0 TSI motor (252 HP). 7 ileri PDK şanzıman. Türkiye'de en uygun fiyatlı Porsche girişi. Transfer kutusu arızası 60.000 km sonrası ciddi — titreşim hissettiğinizde hemen baktırın, 50.000+ TL masraf. Yağ kaçağı zamanlama kapağından 80.000 km sonrası başlar. Porsche Centre Türkiye (İstanbul, Ankara) servis ağı var, fiyatlar premium. Porsche Approved uzatılmış garanti devam eden araç bulmaya çalışın.",
        reliabilityScore: 80,
        totalIssues: 2,
        searchCount: 6000,
        issues: [
            {
                id: "macan-1",
                title: "Transfer Kutusu",
                description: "4 çeker transfer kutusu arızası (Titreme).",
                category: "sanziman",
                riskLevel: "HIGH",
                affectedKm: "60.000+ km",
                repairCost: "50.000+ TL"
            },
            {
                id: "macan-2",
                title: "Yağ Kaçağı",
                description: "Zamanlama kapağından yağ sızıntısı.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "15.000 TL"
            }
        ],
        pros: [
            "Sürüş (Spor araba gibi)",
            "Marka",
            "PDK Şanzıman"
        ],
        cons: [
            "Bakım maliyetleri",
            "Arkası dar"
        ],
        buyingTips: [
            "Porsche garantisi (Uzatılmış) devam eden araç bakın."
        ]
    }
];
