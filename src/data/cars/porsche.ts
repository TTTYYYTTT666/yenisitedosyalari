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
        totalIssues: 4,
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
            },
            {
                id: "macan-2-0-auto-3",
                title: "12V Akü Boşalması",
                description: "12V yardımcı akünün uzun park halinde boşalması.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "3.000 - 5.000 TL"
            },
            {
                id: "macan-2-0-auto-4",
                title: "Şarj Kapağı Sorunu",
                description: "Şarj kapağının donması veya mekanik olarak açılmaması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kış ayları",
                repairCost: "1.500 - 3.000 TL"
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
,
    {
            "id": "porsche-cayenne-3-0-v6",
            "slug": "porsche-cayenne-3-0-v6",
            "brand": "Porsche",
            "model": "Cayenne (E3)",
            "variant": "3.0 V6 Turbo",
            "years": "2018-2024",
            "generation": "E3 (PO536)",
            "price": 7000000,
            "expertNote": "EA839 3.0 V6 Turbo 340 HP + 8AT Tiptronic S. Cayenne E3 Porsche'nin en çok satan modeli. Türkiye'de prestij SUV segmentinin kralı. Sürüş dinamikleri bir SUV için inanılmaz.",
            "reliabilityScore": 82,
            "totalIssues": 5,
            "searchCount": 8000,
            "issues": [
                    {
                            "id": "cay3-1",
                            "title": "Hava Süspansiyonu",
                            "description": "PASM hava süspansiyon arızası. Araç bir tarafına yatar.",
                            "category": "suspansiyon",
                            "riskLevel": "HIGH",
                            "affectedKm": "80.000+ km",
                            "repairCost": "30.000 - 60.000 TL"
                    },
                    {
                            "id": "cay3-2",
                            "title": "Soğutma Sıvısı Kaçağı",
                            "description": "Plastik bağlantılardan soğutma sıvısı sızması.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "60.000+ km",
                            "repairCost": "5.000 - 12.000 TL"
                    },
                    {
                            "id": "cay3-3",
                            "title": "PCM Ekran Donma",
                            "description": "Porsche Communication Management ekranının donması.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Rastgele",
                            "repairCost": "Yazılım Güncelleme"
                    },
                    {
                            "id": "cay3-4",
                            "title": "Fren Disk Aşınması",
                            "description": "Büyük fren disklerinin erken aşınması.",
                            "category": "fren",
                            "riskLevel": "LOW",
                            "affectedKm": "30.000+ km",
                            "repairCost": "15.000 - 30.000 TL"
                    },
                    {
                            "id": "cay3-5",
                            "title": "Turbo Wastegate",
                            "description": "Turbo wastegate aktuatörü titremesi.",
                            "category": "motor",
                            "riskLevel": "LOW",
                            "affectedKm": "80.000+ km",
                            "repairCost": "10.000 - 20.000 TL"
                    }
            ],
            "pros": [
                    "İnanılmaz sürüş",
                    "Porsche prestiji",
                    "V6 performansı",
                    "Premium iç mekan"
            ],
            "cons": [
                    "Hava süspansiyon riski",
                    "Bakım astronomik",
                    "Fren maliyeti"
            ],
            "buyingTips": [
                    "Hava süspansiyonu test edin",
                    "Porsche Approved garanti",
                    "Sport Chrono tercih edin"
            ]
    }
];
