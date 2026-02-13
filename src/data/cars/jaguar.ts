import { Car } from '@/types';

export const jaguarCars: Car[] = [
    // ═══════════════════════════════════════════════════════
    // F-PACE — 2.0 Ingenium Dizel
    // Türkiye'de satılan tek gerçek Jaguar SUV
    // ═══════════════════════════════════════════════════════
    {
        id: "jaguar-fpace-20d",
        slug: "jaguar-f-pace-2-0-d",
        brand: "Jaguar",
        model: "F-Pace",
        variant: "2.0d Ingenium 180 HP R-Sport (8AT)",
        years: "2016-2023",
        generation: "X761",
        price: 2200000,
        expertNote: "Ingenium 2.0d 180 HP + ZF 8HP 8 ileri otomatik. Türkiye'de satılan tek gerçek Jaguar SUV. Tasarımı şahane ama Ingenium motorun zincir seti sorunu ÇOK CİDDİ — 80.000 km sonrası motor zinciri uzayabilir, müdahale edilmezse motor gider. Servis ağı Türkiye'de ÇOK SINIRLI (Borusan Oto). Yedek parça fiyatları şok etkisi yaratır. İkinci elde çok değer kaybediyor çünkü herkes sorunlarından korkuyor.",
        reliabilityScore: 62,
        totalIssues: 3,
        searchCount: 5000,
        issues: [
            {
                id: "fpace-1",
                title: "Ingenium Zincir Seti Sorunu",
                description: "Ingenium 2.0d motor zincirinin uzaması ve motor arıza lambası. Müdahale edilmezse motor hasarı. Türkiye'de revize maliyeti çok yüksek.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "80.000+ km",
                repairCost: "100.000 - 180.000 TL"
            },
            {
                id: "fpace-2",
                title: "Elektronik Sensör ve Ekran Hataları",
                description: "InControl Touch ekranının donması, park sensörü hayalet uyarıları, kamera arızaları.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "10.000 - 30.000 TL"
            },
            {
                id: "fpace-3",
                title: "Su Pompası Kaçağı",
                description: "Devirdaim pompasının kaçırması ve hararet riski.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "60.000+ km",
                repairCost: "15.000 - 25.000 TL"
            }
        ],
        pros: [
            "Tasarım harikası (göz alıcı dış görünüm)",
            "ZF 8 ileri şanzıman kalitesi",
            "Sürüş dinamikleri (arka çeker DNA)",
            "Prestij"
        ],
        cons: [
            "Ingenium zincir riski (KRİTİK)",
            "Servis ağı çok sınırlı (Türkiye)",
            "Yedek parça fiyatları astronomik",
            "İkinci elde ağır değer kaybı"
        ],
        buyingTips: [
            "Motor zincir sesi mutlaka dinleyin — sabah ilk çalıştırmada",
            "Servis bakım geçmişi Borusan Oto'da mı yapılmış sorun",
            "İkinci el alırken kaskoyu önceden fiyatlandırın — şoke olursunuz",
            "Güzel ama riskli araç — bilinçli alıcılar için"
        ]
    },
];
