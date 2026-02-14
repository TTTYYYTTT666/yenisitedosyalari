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
                repairCost: "2.000 - 5.000 TL"
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
,
    {
            "id": "tofas-sahin-1-6",
            "slug": "tofas-sahin-1-6-s",
            "brand": "Tofaş",
            "model": "Şahin",
            "variant": "1.6 S",
            "years": "1983-2002",
            "generation": "131",
            "expertNote": "Fiat 131 tabanlı efsane. Murat 131'in sportif versiyonu. 1.6 8V 75 HP motor basit ve tamiri kolay. Türkiye'nin en ikonik arabası. Yedek parça her yerde ve çok ucuz.",
            "reliabilityScore": 72,
            "totalIssues": 6,
            "searchCount": 25000,
            "issues": [
                    {
                            "id": "sah-1",
                            "title": "Karbüratör Ayarı",
                            "description": "Karbüratör sürekli ayar istiyor. Rölantide dengesiz çalışma.",
                            "category": "motor",
                            "riskLevel": "LOW",
                            "affectedKm": "Kronik",
                            "repairCost": "200 - 500 TL"
                    },
                    {
                            "id": "sah-2",
                            "title": "Distribütör Arızası",
                            "description": "Distribütör kapağı ve platinlerin aşınması. Ateşleme sorunu.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "30.000+ km",
                            "repairCost": "300 - 800 TL"
                    },
                    {
                            "id": "sah-3",
                            "title": "Kapı ve Kaporta Pası",
                            "description": "Kapı altları, çamurluklar ve davlumbaz bölgesi paslanması.",
                            "category": "govde",
                            "riskLevel": "HIGH",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "5.000 - 15.000 TL (Boya/Kaynak)"
                    },
                    {
                            "id": "sah-4",
                            "title": "Fren Sistemi",
                            "description": "Ön disk arka kampanalı fren sistemi. Arka frenlerin tutmaması.",
                            "category": "fren",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "20.000+ km",
                            "repairCost": "500 - 1.500 TL"
                    },
                    {
                            "id": "sah-5",
                            "title": "Sanzıman Dişli Sesi",
                            "description": "2. ve 3. vites dişli homurtusu.",
                            "category": "sanziman",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "100.000+ km",
                            "repairCost": "2.000 - 4.000 TL"
                    },
                    {
                            "id": "sah-6",
                            "title": "Süspansiyon Sertliği",
                            "description": "Yaprak yay arka süspansiyon çok sert. Yolcu konforu düşük.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "Tasarım",
                            "repairCost": "0 TL (Karakteristik)"
                    }
            ],
            "pros": [
                    "Efsanevi araç",
                    "Yedek parça çok ucuz",
                    "Tamiri basit",
                    "Kültür ikonu"
            ],
            "cons": [
                    "Güvenlik yok",
                    "Konfor yok",
                    "Pas sorunu kronik",
                    "Eski teknoloji"
            ],
            "buyingTips": [
                    "Pas kontrolü şart — altını mutlaka kaldırın",
                    "Şase çürüğü varsa kaçın",
                    "Motor basit kontrol edin",
                    "Orijinal Şahin S çok arttı fiyatı"
            ]
    }
,
    {
            "id": "tofas-kartal-slx-sw",
            "slug": "tofas-kartal-slx-1-6-sw",
            "brand": "Tofaş",
            "model": "Kartal SLX",
            "variant": "1.6 i.e. SW",
            "years": "1993-2002",
            "generation": "131",
            "expertNote": "Doğan'ın station wagon versiyonu. Büyük bagaj hacmi. Ticari kullanıma ve aileye uygun. Tofaş üçlüsünün en pratik olanı.",
            "reliabilityScore": 70,
            "totalIssues": 5,
            "searchCount": 15000,
            "issues": [
                    {
                            "id": "kar-1",
                            "title": "Arka Kapı Menteşesi",
                            "description": "SW arka kapı menteşesinin sarkması ve pas tutması.",
                            "category": "govde",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "500 - 1.500 TL"
                    },
                    {
                            "id": "kar-2",
                            "title": "Kaporta Pası",
                            "description": "Tüm gövdede yaygın paslanma.",
                            "category": "govde",
                            "riskLevel": "HIGH",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "5.000 - 15.000 TL (Boya/Kaynak)"
                    },
                    {
                            "id": "kar-3",
                            "title": "Arka Süspansiyon",
                            "description": "Yaprak yayların kırılması (yüklü kullanım).",
                            "category": "suspansiyon",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Yüklü kullanım",
                            "repairCost": "1.000 - 2.000 TL"
                    },
                    {
                            "id": "kar-4",
                            "title": "Egzoz Sistemi",
                            "description": "Egzoz borusu ve susturucunun çürümesi.",
                            "category": "motor",
                            "riskLevel": "LOW",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "500 - 1.500 TL"
                    },
                    {
                            "id": "kar-5",
                            "title": "Cam Fitili",
                            "description": "Tüm kapı ve cam fitillerinin sertleşmesi.",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "500 - 1.000 TL"
                    }
            ],
            "pros": [
                    "Büyük bagaj",
                    "Ucuz bakım",
                    "Pratik SW",
                    "Yedek parça bol"
            ],
            "cons": [
                    "Pas kabusu",
                    "Güvenlik yok",
                    "Konfor düşük",
                    "Eski teknoloji"
            ],
            "buyingTips": [
                    "Arka kapı menteşesini kontrol et",
                    "Yüklü kullanım yaprak yay kırar",
                    "Şase mutlaka kontrol"
            ]
    }
];
