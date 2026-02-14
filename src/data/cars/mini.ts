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
        totalIssues: 4,
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
            },
            {
                id: "cooper-f56-auto-3",
                title: "Yağ Eksiltme",
                description: "Motor yağının servis aralarında eksilmesi. Düzenli kontrol şart.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "Segman / 5.000 - 15.000 TL"
            },
            {
                id: "cooper-f56-auto-4",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
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
        totalIssues: 4,
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
            },
            {
                id: "countryman-f60-auto-2",
                title: "12V Akü Boşalması",
                description: "12V yardımcı akünün uzun park halinde boşalması.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "3.000 - 5.000 TL"
            },
            {
                id: "countryman-f60-auto-3",
                title: "Şarj Kapağı Sorunu",
                description: "Şarj kapağının donması veya mekanik olarak açılmaması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kış ayları",
                repairCost: "1.500 - 3.000 TL"
            },
            {
                id: "countryman-f60-auto-4",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
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
    }
,
    {
            "id": "mini-cooper-f55-1-5",
            "slug": "mini-cooper-f55-1-5",
            "brand": "Mini",
            "model": "Cooper 5 Kapı (F55)",
            "variant": "1.5 Turbo Pepper",
            "years": "2014-2021",
            "generation": "F55",
            "price": 1100000,
            "expertNote": "B38 1.5 Turbo 136 HP + 6AT Steptronic. 5 kapılı Mini daha pratik. BMW B38 3 silindir motor ama MINI DNA hissettiriyor. Go-kart sürüş keyfi korunuyor.",
            "reliabilityScore": 78,
            "totalIssues": 5,
            "searchCount": 6000,
            "issues": [
                    {
                            "id": "f55-1",
                            "title": "Zincir Sesi",
                            "description": "B38 3 silindir motorda soğuk çalıştırmada zincir sesi.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "60.000+ km",
                            "repairCost": "8.000 - 15.000 TL"
                    },
                    {
                            "id": "f55-2",
                            "title": "Yağ Tüketimi",
                            "description": "B38 motorun yağ eksiltmesi.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "50.000+ km",
                            "repairCost": "2.000 - 5.000 TL"
                    },
                    {
                            "id": "f55-3",
                            "title": "Steptronic Sarsıntısı",
                            "description": "6AT Steptronic soğukta sert vites geçişi.",
                            "category": "sanziman",
                            "riskLevel": "LOW",
                            "affectedKm": "Soğuk hava",
                            "repairCost": "3.000 - 6.000 TL (Yağ Değişimi)"
                    },
                    {
                            "id": "f55-4",
                            "title": "Navigasyon Uyumsuzluğu",
                            "description": "Connected navigasyonun Türkiye haritası sorunları.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Yazılım",
                            "repairCost": "1.500 - 4.000 TL (Yazılım)"
                    },
                    {
                            "id": "f55-5",
                            "title": "Arka Süspansiyon",
                            "description": "Arka süspansiyon burçlarından vuruntu.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "60.000+ km",
                            "repairCost": "3.000 - 6.000 TL"
                    }
            ],
            "pros": [
                    "Go-kart sürüş",
                    "İkonik tasarım",
                    "5 kapı pratiklik",
                    "BMW güvenilirliği"
            ],
            "cons": [
                    "3 silindir sesi",
                    "Yağ tüketimi",
                    "BMW parça fiyatları"
            ],
            "buyingTips": [
                    "Soğukta çalıştırıp zincir sesi dinleyin",
                    "Pepper donanım yeterli",
                    "Yağ seviyesini kontrol edin"
            ]
    }
];
