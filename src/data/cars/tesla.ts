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
        expertNote: "Tesla Berlin (Almanya) üretim. Türkiye'de Tesla Supercharger ağı hızla yayılıyor (30+ istasyon). Panel boşlukları fabrikasyon hatadır — kabul edin veya etmeyin. Süspansiyon sert, Türkiye yolları için çok sert olabilir. OTA güncellemeleri ile sürekli iyileşiyor. PPF (boya koruma) şiddetle tavsiye — Tesla boyası ince. Tesla servis (İstanbul Maslak) randevu sistemiyle çalışıyor.",
        reliabilityScore: 88,
        totalIssues: 4,
        searchCount: 22000,
        issues: [
            {
                id: "tesla-1",
                title: "Panel Boşlukları",
                description: "Kaporta parçaları arasında orantısız boşluklar.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Fabrikasyon",
                repairCost: "3.000 - 10.000 TL (Boya/Rötuş)"
            },
            {
                id: "tesla-2",
                title: "Süspansiyon",
                description: "Çok sert süspansiyon ve trim sesleri.",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "Sürekli",
                repairCost: "2.000 - 5.000 TL"
            },
            {
                id: "model-y-lr-auto-3",
                title: "12V Akü Boşalması",
                description: "12V yardımcı akünün uzun park halinde boşalması.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "3.000 - 5.000 TL"
            },
            {
                id: "model-y-lr-auto-4",
                title: "Şarj Kapağı Sorunu",
                description: "Şarj kapağının donması veya mekanik olarak açılmaması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kış ayları",
                repairCost: "1.500 - 3.000 TL"
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
        expertNote: "Highland (facelift) öncesi Long Range versiyon. 507 km WLTP menzil, kışın 350-400 km. Isı pompası arızası soğuk havada ciddi — garantiden değişim yapılıyor. Phantom Braking (hayalet frenleme) Otopilot açıkken oluyor, yazılım güncellemeleriyle azalıyor. Ön takım salıncak burçları 30.000 km sonrası gıcırtı yapabilir. Bagaj contasından su girme sorunu var — fitil değişimi ile çözülur.",
        reliabilityScore: 88,
        totalIssues: 5,
        searchCount: 24000,
        issues: [
            {
                id: "modely-1",
                title: "Isı Pompası Arızası",
                description: "Soğuk havalarda ısı pompasının durması ve ısıtma kaybı.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "Kış Ayları",
                repairCost: "0 TL (Garanti Kapsamı)"
            },
            {
                id: "modely-2",
                title: "Hayalet Frenleme",
                description: "Otopilotun sebepsiz yere aniden fren yapması (Phantom Braking).",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Otopilot Açıkken",
                repairCost: "1.500 - 4.000 TL (Yazılım)"
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
                repairCost: "5.000 - 15.000 TL (Kaplama)"
            },
            {
                id: "modely-5",
                title: "Su Alma (Bagaj)",
                description: "Bagaj contasından veya stop lambalarından su girmesi.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Yağmurlu Hava",
                repairCost: "1.000 - 3.000 TL (Fitil)"
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
    }
,
    {
            "id": "tesla-model-3-lr",
            "slug": "tesla-model-3-lr",
            "brand": "Tesla",
            "model": "Model 3",
            "variant": "Long Range AWD",
            "years": "2019-2024",
            "generation": "Model 3",
            "expertNote": "Dual Motor AWD 498 km menzil. Model 3 Türkiye'de elektrikli araç pazarını açan model. Supercharger ağı avantaj ama servis ağı çok sınırlı. Panel boşlukları ve ses yalıtımı zayıf.",
            "reliabilityScore": 77,
            "totalIssues": 5,
            "searchCount": 15000,
            "issues": [
                    {
                            "id": "m3-1",
                            "title": "Panel Boşlukları",
                            "description": "Kaporta panelleri arasında düzensiz boşluklar.",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "Fabrika çıkışı",
                            "repairCost": "0 TL (Garanti Kapsamı)"
                    },
                    {
                            "id": "m3-2",
                            "title": "Ses Yalıtımı",
                            "description": "Yüksek hızlarda belirgin lastik ve rüzgar sesi.",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "Karakteristik",
                            "repairCost": "1.000 - 3.000 TL (Yalıtım)"
                    },
                    {
                            "id": "m3-3",
                            "title": "12V Akü Boşalması",
                            "description": "12V yardımcı akünün boşalması.",
                            "category": "elektronik",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Rastgele",
                            "repairCost": "3.000 - 5.000 TL"
                    },
                    {
                            "id": "m3-4",
                            "title": "Kış Menzil Kaybı",
                            "description": "Soğuk havalarda %25-30 menzil düşüşü.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Kış",
                            "repairCost": "2.000 - 5.000 TL"
                    },
                    {
                            "id": "m3-5",
                            "title": "Ekran Sarılması",
                            "description": "MCU ekranında sarılma veya ölü pixel.",
                            "category": "elektronik",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "3-5 yıl",
                            "repairCost": "Garanti / 20.000 TL"
                    }
            ],
            "pros": [
                    "0-100 4.4s performans",
                    "498 km menzil",
                    "Supercharger ağı",
                    "OTA güncelleme"
            ],
            "cons": [
                    "Panel kalitesi",
                    "Servis ağı kısıtlı",
                    "Ses yalıtımı zayıf"
            ],
            "buyingTips": [
                    "Panel boşluklarını kontrol edin",
                    "Batarya sağlığı kontrol",
                    "Long Range tercih edin"
            ]
    }
,
    {
            "id": "tesla-model-y-sr",
            "slug": "tesla-model-y-standard-range",
            "brand": "Tesla",
            "model": "Model Y",
            "variant": "Standard Range RWD",
            "years": "2023-2025",
            "generation": "Model Y",
            "expertNote": "LFP batarya + tek motor RWD. Standard Range Türkiye'de en uygun Tesla. LFP batarya ömrü uzun ve %100 şarj edilebilir. Supercharger ağı büyüyor.",
            "reliabilityScore": 78,
            "totalIssues": 5,
            "searchCount": 12000,
            "issues": [
                    {
                            "id": "mysr-1",
                            "title": "Panel Boşlukları",
                            "description": "Kaporta panel boşluklarında düzensizlik.",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "Fabrika",
                            "repairCost": "0 TL (Garanti Kapsamı)"
                    },
                    {
                            "id": "mysr-2",
                            "title": "Ses Yalıtımı",
                            "description": "Lastik ve rüzgar sesi belirgin.",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "Karakteristik",
                            "repairCost": "1.000 - 3.000 TL (Yalıtım)"
                    },
                    {
                            "id": "mysr-3",
                            "title": "Kış Menzil Kaybı",
                            "description": "Soğuk havalarda %25-35 menzil düşüşü.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Kış",
                            "repairCost": "0 TL (Karakteristik)"
                    },
                    {
                            "id": "mysr-4",
                            "title": "12V Akü",
                            "description": "12V yardımcı akü boşalması.",
                            "category": "elektronik",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Rastgele",
                            "repairCost": "3.000 - 5.000 TL"
                    },
                    {
                            "id": "mysr-5",
                            "title": "Süspansiyon Sesi",
                            "description": "Ön süspansiyondan kasiste vuruntu.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "30.000+ km",
                            "repairCost": "3.000 - 8.000 TL"
                    }
            ],
            "pros": [
                    "Düşük işletme maliyeti",
                    "Supercharger ağı",
                    "OTA güncelleme",
                    "Geniş iç mekan"
            ],
            "cons": [
                    "Panel kalitesi",
                    "Servis ağı kısıtlı",
                    "Ses yalıtımı zayıf"
            ],
            "buyingTips": [
                    "Panel kontrolü yapın",
                    "LFP batarya %100 şarj edilebilir",
                    "Kış menzilini hesaplayın"
            ]
    }
];
