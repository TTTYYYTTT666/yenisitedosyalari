import { Car } from '@/types';

export const miniCars: Car[] = [
    {
        id: "mini-cooper-f56",
        slug: "mini-cooper-f56",
        brand: "Mini",
        model: "Cooper",
        variant: "F56",
        years: "2014-2024",
        generation: "F56",
        price: 1800000,
        expertNote: "BMW B38 (3 silindirli) / B48 (4 silindirli) motor paylaşımı. Türkiye'de Mini servis ağı BMW Borusan ile ortak. Zincir gergi arızası B38 motor kodunda 80.000 km sonrası kronik — motor iniyor, 15.000-28.000 TL. Klima kompresörü de sık arızalanır. Go-kart sürüş hissi benzersiz ama günlük kullanımda sert. İç mekan gerçekten çok dar, 1.70m üstü sürücüler zorlanır.",
        reliabilityScore: 77,
        totalIssues: 2,
        searchCount: 7000,
        issues: [
            {
                id: "mini-1",
                title: "Zincir Gergi",
                description: "B38/B48 motorlarda zincir gergi arızası.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "15.000 - 28.000 TL"
            },
            {
                id: "mini-2",
                title: "Klima Kompresör",
                description: "Klima kompresörünün arızalanması.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "60.000+ km",
                repairCost: "18.000 - 30.000 TL"
            }
        ],
        pros: [
            "İkonik tasarım",
            "Go-kart hissi",
            "Premium"
        ],
        cons: [
            "BMW parça fiyatları",
            "Dar iç mekan"
        ],
        buyingTips: [
            "Zincir sesi dinleyin",
            "Klimayı çalıştırın"
        ]
    },
    {
        id: "mini-countryman-f60",
        slug: "mini-countryman-f60",
        brand: "Mini",
        model: "Countryman",
        variant: "Cooper ALL4",
        years: "2017-2024",
        generation: "F60",
        price: 2100000,
        expertNote: "BMW UKL2 platformu, X1 ile ortak altyapı. ALL4 (4 çeker) Haldex sistemi — gerçek off-road değil ama karda iyi. Motor takozu erken yıpranması F60'a özel kronik sorun — 50.000 km sonrası titreşim hissederseniz bakın. Türkiye'de aile için tek uygun Mini modelidir. Borusan BMW yetkili servis ağı bakıyor, fiyatlar BMW seviyesinde.",
        reliabilityScore: 86,
        totalIssues: 1,
        searchCount: 14000,
        issues: [
            {
                id: "countryman-1",
                title: "Motor Kulağı",
                description: "Motor takozunun erken yıpranması.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "50.000+ km",
                repairCost: "8.000 TL"
            }
        ],
        pros: [
            "Tarz",
            "Genişlik (Mini'ye göre)",
            "Sürüş hissi"
        ],
        cons: [
            "Sert süspansiyon",
            "Yol sesi"
        ],
        buyingTips: [
            "Aile için tek uygun Mini modelidir. ALL4 (4 çeker) tercih edin."
        ]
    },
];
