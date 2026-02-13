import { Car } from '@/types';

export const tofasCars: Car[] = [
        {
        id: "tofas-sahin-s",
        slug: "tofas-sahin-s-1-6",
        brand: "Tofaş",
        model: "Şahin",
        variant: "S 1.6",
        years: "1993-2002",
        generation: "131",
        expertNote: "Motoru her usta yapar, parçası bakkalda bile var. Ama şasisi çürükse uzak dur, ortadan ikiye ayrılır.",
        price: 250000,
        reliabilityScore: 60,
        totalIssues: 5,
        searchCount: 50000,
        issues: [
            {
                id: "tofas-1",
                title: "Çürük",
                description: "Taban sacı, marşpiyel ve direklerde çürüme.",
                category: "govde",
                riskLevel: "HIGH",
                affectedKm: "Kronik",
                repairCost: "20.000+ TL"
            },
            {
                id: "tofas-2",
                title: "Difransiyel Ötmesi",
                description: "Arkadan gelen uğultu sesi.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "Her KM",
                repairCost: "5.000 TL"
            },
            {
                id: "tofas-3",
                title: "Hararet",
                description: "Fan açmazsa conta yakar.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Yaz Ayları",
                repairCost: "7.000 TL"
            },
            {
                id: "sahin-s-1-6-auto-4",
                title: "Yağ Eksiltme",
                description: "Motor yağının servis aralarında eksilmesi. Düzenli kontrol şart.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "Segman / 5.000 - 15.000 TL"
            },
            {
                id: "sahin-s-1-6-auto-5",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
            }
        ],
        pros: [
            "Parçası bedava",
            "Her usta anlar",
            "Piyasa aracı"
        ],
        cons: [
            "Güvenlik sıfır",
            "Konfor yok",
            "Çürüme sorunu"
        ],
        buyingTips: [
            "Altına mutlaka baktırın, çürük varsa macunla kapatılmış olabilir."
        ]
    },
        {
        id: "tofas-dogan-slx",
        slug: "tofas-dogan-slx-1-6-ie",
        brand: "Tofaş",
        model: "Doğan",
        variant: "SLX 1.6 ie",
        years: "1993-2002",
        generation: "131",
        expertNote: "Bunun hastası başkadır. ie motor (enjeksiyonlu) tüpte bazen patlatma yapar, düz karbüratörlüsü daha makbuldür.",
        price: 350000,
        reliabilityScore: 65,
        totalIssues: 4,
        searchCount: 45000,
        issues: [
            {
                id: "dogan-1",
                title: "Rolanti",
                description: "Enjeksiyonlu modellerde rolanti dalgalanması.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "3.000 TL"
            },
            {
                id: "dogan-2",
                title: "Elektrik",
                description: "Sigorta kutusu erimesi ve fan açmama.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "2.000 TL"
            },
            {
                id: "dogan-slx-1-6-ie-auto-3",
                title: "Yağ Eksiltme",
                description: "Motor yağının servis aralarında eksilmesi. Düzenli kontrol şart.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "Segman / 5.000 - 15.000 TL"
            },
            {
                id: "dogan-slx-1-6-ie-auto-4",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
            }
        ],
        pros: [
            "Hidrolik direksiyon",
            "Klima (opsiyonel)",
            "SLX prestiji"
        ],
        cons: [
            "Yakıt canavarı",
            "Güvenlik zayıf"
        ],
        buyingTips: [
            "Koltukları yırtıksa orijinalini bulmak zor. Torpido çatlağına dikkat."
        ]
    }
];
