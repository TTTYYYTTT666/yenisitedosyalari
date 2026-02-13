import { Car } from '@/types';

export const teslaCars: Car[] = [
    {
        id: "tesla-model-y-lr",
        slug: "tesla-model-y-lr",
        brand: "Tesla",
        model: "Model Y",
        variant: "Long Range",
        years: "2022-2024",
        generation: "Mk1",
        price: 2500000,
        expertNote: "Tesla Berlin (Almanya) üretim. Türkiye'de Tesla Supercharger ağı hızla yayılıyor (30+ istasyon). Panel boşlukları fabrikasyon hatadır — kabul edin veya etmeyin. Süspansiyon sert, Türkiye yolları için çok sert olabilir. OTA güncellemeleri ile sürekli iyileşiyor. PPF (boya koruma) şiddetle tavsiye — Tesla boyası ince. Tesla servis (İstanbul Maslak) randevu sistemiyle çalışıyor.",
        reliabilityScore: 88,
        totalIssues: 2,
        searchCount: 22000,
        issues: [
            {
                id: "tesla-1",
                title: "Panel Boşlukları",
                description: "Kaporta parçaları arasında orantısız boşluklar.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Fabrikasyon",
                repairCost: "Kozmetik"
            },
            {
                id: "tesla-2",
                title: "Süspansiyon",
                description: "Çok sert süspansiyon ve trim sesleri.",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "Sürekli",
                repairCost: "Konfor sorunu"
            }
        ],
        pros: [
            "Supercharger ağı",
            "Yazılım ve Otopilot",
            "Performans"
        ],
        cons: [
            "Sert sürüş",
            "Malzeme kalitesi"
        ],
        buyingTips: [
            "Kaporta boşluklarını ve boyayı kontrol edin"
        ]
    },
    {
        id: "tesla-model-y-long-range",
        slug: "tesla-model-y-long-range",
        brand: "Tesla",
        model: "Model Y",
        variant: "Long Range",
        years: "2022-2024",
        generation: "Mk1",
        price: 2750000,
        expertNote: "Highland (facelift) öncesi Long Range versiyon. 507 km WLTP menzil, kışın 350-400 km. Isı pompası arızası soğuk havada ciddi — garantiden değişim yapılıyor. Phantom Braking (hayalet frenleme) Otopilot açıkken oluyor, yazılım güncellemeleriyle azalıyor. Ön takım salıncak burçları 30.000 km sonrası gıcırtı yapabilir. Bagaj contasından su girme sorunu var — fitil değişimi ile çözülur.",
        reliabilityScore: 88,
        totalIssues: 2,
        searchCount: 24000,
        issues: [
            {
                id: "modely-1",
                title: "Isı Pompası Arızası",
                description: "Soğuk havalarda ısı pompasının durması ve ısıtma kaybı.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "Kış Ayları",
                repairCost: "Garantiden Değişim"
            },
            {
                id: "modely-2",
                title: "Hayalet Frenleme",
                description: "Otopilotun sebepsiz yere aniden fren yapması (Phantom Braking).",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Otopilot Açıkken",
                repairCost: "Yazılım Güncelleme"
            },
            {
                id: "modely-3",
                title: "Ön Takım Sesleri",
                description: "Salıncak burçlarından gelen gıcırtı ve lokurtu.",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "30.000+ km",
                repairCost: "10.000 - 20.000 TL"
            },
            {
                id: "modely-4",
                title: "Panel ve Boya Hataları",
                description: "Kapı/kaput ayarsızlıkları ve ince boya nedeniyle çabuk taş izi oluşumu.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Fabrikasyon",
                repairCost: "Ayarlama / PPF"
            },
            {
                id: "modely-5",
                title: "Su Alma (Bagaj)",
                description: "Bagaj contasından veya stop lambalarından su girmesi.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Yağmurlu Hava",
                repairCost: "Fitil Değişimi"
            }
        ],
        pros: [
            "507 km menzil",
            "Süpercharger ağı",
            "Otonom sürüş"
        ],
        cons: [
            "Panel kalitesi tartışmalı",
            "Servis yetersiz"
        ],
        buyingTips: [
            "Panel boşluklarını kontrol edin",
            "12V akü durumu"
        ]
    },
];
