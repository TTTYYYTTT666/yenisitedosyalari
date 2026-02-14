import { Car } from '@/types';

export const mazdaCars: Car[] = [
    {
        id: "mazda-cx5-2-0-skyactiv",
        slug: "mazda-cx5-2-0-skyactiv",
        brand: "Mazda",
        model: "CX-5",
        variant: "2.0 Skyactiv-G",
        years: "2017-2024",
        generation: "KF",
        price: 1800000,
        expertNote: "Skyactiv-G 2.0 atmosferik motor — turbo yok, sorun yok. Japon mühendisliğinin zirvesi: dünyada en az arıza yapan SUV'lardan biri. Türkiye'de 2.0 motor MTV'de yüksek vergi dilimine giriyor, hesap edin. Ayna katlama motoru bilinen tek kronik sorunudur. Mazda Türkiye servis ağı az ama kaliteli (İstanbul Beyoğlu, Ankara Kızılay).",
        reliabilityScore: 90,
        totalIssues: 4,
        searchCount: 8500,
        issues: [
            {
                id: "cx5-1",
                title: "Ayna Katlama Motoru",
                description: "Yan aynaların katlanmaması veya dişli sesi.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "2.000 - 5.000 TL"
            },
            {
                id: "cx5-2-0-skyactiv-auto-2",
                title: "Yağ Eksiltme",
                description: "Motor yağının servis aralarında eksilmesi. Düzenli kontrol şart.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "Segman / 5.000 - 15.000 TL"
            },
            {
                id: "cx5-2-0-skyactiv-auto-3",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
            },
            {
                id: "cx5-2-0-skyactiv-auto-4",
                title: "Süspansiyon Burcu Aşınması",
                description: "Ön/arka süspansiyon burçlarının aşınması. Kasiste vuruntu sesi.",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "60.000+ km",
                repairCost: "2.000 - 5.000 TL"
            }
        ],
        pros: [
            "Japon mühendisliği",
            "Sorunsuz atmosferik motor",
            "Sürüş hissi"
        ],
        cons: [
            "Motor performansı (Turbo yok)",
            "Vergi dilimi (2.0 motor)"
        ],
        buyingTips: [
            "Aynaları açıp kapatarak test edin"
        ]
    },
    {
        id: "mazda3-bp",
        slug: "mazda-3-2-0-skyactiv",
        brand: "Mazda",
        model: "Mazda3",
        variant: "2.0 Skyactiv-G",
        years: "2019-2024",
        generation: "BP",
        price: 1600000,
        expertNote: "Skyactiv-G 2.0 atmosferik motor. Mazda3 Türkiye'de niş bir seçim ama kalite açısından Alman rakiplerini geçer. SCBS (Smart City Brake Support) hayalet fren sorunu var — özellikle yağmurda sensör kirlenince gereksiz fren yapabilir, kalibrasyonla çözülür. C sütunu çok kalın, kör nokta var — BSD opsiyonu şart. İkinci el değeri yavaş gider.",
        reliabilityScore: 92,
        totalIssues: 4,
        searchCount: 6000,
        issues: [
            {
                id: "mazda3-bp-1",
                title: "Akü Deşarjı",
                description: "Aracın kullanılmadığı durumlarda akünün hızlı bitmesi (Yazılım kaynaklı).",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "1.500 - 4.000 TL (Yazılım)"
            },
            {
                id: "mazda3-bp-2",
                title: "Hayalet Fren",
                description: "SCBS sisteminin gereksiz yere fren yapması (Sensör hassasiyeti).",
                category: "elektronik",
                riskLevel: "HIGH",
                affectedKm: "Rastgele",
                repairCost: "1.500 - 4.000 TL (Yazılım)"
            },
            {
                id: "3-2-0-skyactiv-auto-3",
                title: "Yağ Eksiltme",
                description: "Motor yağının servis aralarında eksilmesi. Düzenli kontrol şart.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "Segman / 5.000 - 15.000 TL"
            },
            {
                id: "3-2-0-skyactiv-auto-4",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
            }
        ],
        pros: [
            "Tasarım ödüllü",
            "İç mekan kalitesi",
            "Sessizlik"
        ],
        cons: [
            "Arka görüş (C sütunu çok geniş)",
            "İkinci el yavaş"
        ],
        buyingTips: [
            "Kör nokta uyarı sistemi çalışıyor mu kontrol edin"
        ]
    },
    {
        id: "mazda-cx30-2-0-skyactiv",
        slug: "mazda-cx30-2-0-skyactiv",
        brand: "Mazda",
        model: "CX-30",
        variant: "2.0 Skyactiv-G Power Sense",
        years: "2020-2024",
        generation: "DM",
        price: 1900000,
        expertNote: "Skyactiv-G 2.0 atmosferik, CX-5'in küçük kardeşi. Türkiye'de sorunsuzluk arayan niş alıcılar için ideal. SCBS hayalet fren sorunu bu modelde de var. Akü deşarjı bagaj kapağı modülünden kaynaklanıyor — ücretsiz servis kampanyası var. Arka yaşam alanı ve bagaj küçük, aile aracı olarak CX-5 daha uygun.",
        reliabilityScore: 95,
        totalIssues: 4,
        searchCount: 8000,
        issues: [
            {
                id: "cx30-2",
                title: "Fren Otuşu",
                description: "Otomatik fren sisteminin (SCBS) gereksiz devreye girmesi.",
                category: "elektronik",
                riskLevel: "HIGH",
                affectedKm: "Sensör kirliliği",
                repairCost: "1.500 - 4.000 TL (Yazılım)"
            },
            {
                id: "cx30-1",
                title: "Akü Deşarjı",
                description: "Bagaj kapağı modülünün aküyü bitirmesi (Geri çağırma).",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "0 TL (Garanti Kapsamı)"
            },
            {
                id: "cx30-2-0-skyactiv-auto-3",
                title: "Yağ Eksiltme",
                description: "Motor yağının servis aralarında eksilmesi. Düzenli kontrol şart.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "Segman / 5.000 - 15.000 TL"
            },
            {
                id: "cx30-2-0-skyactiv-auto-4",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
            }
        ],
        pros: [
            "Sorunsuzluk zirvesi",
            "Malzeme kalitesi (Premium)",
            "Tasarım"
        ],
        cons: [
            "Arka yaşam alanı dar",
            "Bagaj küçük",
            "İkinci eli yavaş"
        ],
        buyingTips: [
            "Sorunsuzluk ve kalite arayıp, ikinci el hızını dert etmeyenler için en iyi seçenek."
        ]
    },
    {
        id: "mazda-cx3",
        slug: "mazda-cx3-1-5-diesel",
        brand: "Mazda",
        model: "CX-3",
        variant: "1.5 Skyactiv-D",
        years: "2015-2022",
        generation: "DK",
        price: 1100000,
        expertNote: "Skyactiv-D 1.5 dizel motor — Mazda'nın küçük dizel SUV'u. Türkiye'de kısa mesafe kullanımda DPF tıkanma riski var, şehir içi kullanıcısıysanız benzinli model daha mantıklı. Enjektör sesi 100.000 km sonrası çıkabilir. CX-3 kasası gerçekten küçük — arka koltuk ve bagaj dar. Sona erdi, yeni üretilmiyor.",
        reliabilityScore: 86,
        totalIssues: 4,
        searchCount: 5500,
        issues: [
            {
                id: "cx3-1",
                title: "DPF",
                description: "Kısa mesafe kullanımda DPF tıkanması.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Şehir içi",
                repairCost: "2.000 - 5.000 TL"
            },
            {
                id: "cx3-2",
                title: "Enjektör",
                description: "Dizel enjektör ses yapması.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "10.000 TL"
            },
            {
                id: "cx3-1-5-diesel-auto-3",
                title: "DPF Tıkanması",
                description: "Şehir içi kısa mesafe kullanımda DPF filtresinin dolması.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Şehir içi kullanım",
                repairCost: "5.000 - 12.000 TL"
            },
            {
                id: "cx3-1-5-diesel-auto-4",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
            }
        ],
        pros: [
            "Tasarım",
            "Sürüş keyfi",
            "Kalite"
        ],
        cons: [
            "Çok dar arka ve bagaj",
            "Pahalı yedek parça"
        ],
        buyingTips: [
            "Benzinli model daha sorunsuzdur, mümkünse benzinli alın."
        ]
    },

    // ─── Eski new-cars dosyasından taşındı ───
    {
        id: "mazda-3-bl-1-6d",
        slug: "mazda-3-bl-1-6d",
        brand: "Mazda",
        model: "3",
        variant: "BL 1.6 CD",
        years: "2009-2013",
        generation: "BL",
        price: 350000,
        reliabilityScore: 76,
        totalIssues: 5,
        searchCount: 6000,
        expertNote: "Mazda 3 BL eğlenceli sürüşüyle bilinen kompakt. 1.6 CD dizel motor PSA/Ford ortaklığı (DV6). Güvenilir motor ama DPF sorunları var. Zoom-Zoom sürüş karakteri hâlâ hissedilir.",
        issues: [
            { id: "m3bl-1", title: "DPF Tıkanması", description: "PSA kaynaklı 1.6 CD motorun DPF'si şehir içi kullanımda tıkanır.", category: "motor", riskLevel: "HIGH", affectedKm: "60.000+ km", repairCost: "5.000 - 15.000 TL" },
            { id: "m3bl-2", title: "EGR Valfi", description: "EGR valfinde kurum birikimi. Motor düzensizliği.", category: "motor", riskLevel: "MEDIUM", affectedKm: "60.000+ km", repairCost: "2.000 - 5.000 TL" },
            { id: "m3bl-3", title: "Çift Kütleli Volan", description: "Rölantide metalik ses. Kavrama ile değiştirilmeli.", category: "sanziman", riskLevel: "HIGH", affectedKm: "80.000+ km", repairCost: "10.000 - 18.000 TL" },
            { id: "m3bl-4", title: "Ön Alt Kol Burcu", description: "Ön alt kol burçlarının aşınması.", category: "suspansiyon", riskLevel: "MEDIUM", affectedKm: "50.000+ km", repairCost: "2.000 - 4.000 TL" },
            { id: "m3bl-5", title: "Klima Radyatör Sızıntısı", description: "Klima kondenseri delinmesi.", category: "elektronik", riskLevel: "LOW", affectedKm: "Yaş kaynaklı", repairCost: "3.000 - 5.000 TL" }
        ],
        pros: ["Eğlenceli sürüş", "Sportif tasarım", "Kaliteli iç mekan", "Zoom-Zoom hissi"],
        cons: ["DPF sorunu", "Mazda servis ağı dar", "Yedek parça bulma zorluğu"],
        buyingTips: ["DPF tarattırın", "Volan sesini dinleyin", "EGR temizliği yaptırılmış mı sorun"]
    }
,
    {
            "id": "mazda-cx5-2-5-skyactiv",
            "slug": "mazda-cx5-2-5-skyactiv",
            "brand": "Mazda",
            "model": "CX-5 (KF)",
            "variant": "2.5 Skyactiv-G AWD",
            "years": "2017-2024",
            "generation": "KF",
            "price": 1600000,
            "expertNote": "PE-VPS 2.5 Skyactiv-G 194 HP + 6AT + AWD. İkinci nesil CX-5 premium hissiyat veriyor. Kodo tasarım dili çok beğeniliyor. Doğal emişli motor güvenilir ama yakıt tüketimi yüksek.",
            "reliabilityScore": 85,
            "totalIssues": 5,
            "searchCount": 11000,
            "issues": [
                    {
                            "id": "cx5kf-1",
                            "title": "Fren Diski Eğrilmesi",
                            "description": "Fren disklerinin eğrilmesi. Frende titreşim.",
                            "category": "fren",
                            "riskLevel": "LOW",
                            "affectedKm": "40.000+ km",
                            "repairCost": "3.000 - 6.000 TL"
                    },
                    {
                            "id": "cx5kf-2",
                            "title": "Infotainment Donması",
                            "description": "Mazda Connect ekranının donması.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Rastgele",
                            "repairCost": "1.500 - 4.000 TL (Yazılım)"
                    },
                    {
                            "id": "cx5kf-3",
                            "title": "Rüzgar Sesi",
                            "description": "Ayna bölgesinden yüksek hızda rüzgar sesi.",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "120+ km/h",
                            "repairCost": "1.000 - 3.000 TL (Fitil)"
                    },
                    {
                            "id": "cx5kf-4",
                            "title": "AWD Aktüatör",
                            "description": "i-ACTIV AWD aktüatörünün nadir arızası.",
                            "category": "sanziman",
                            "riskLevel": "LOW",
                            "affectedKm": "100.000+ km",
                            "repairCost": "10.000 - 18.000 TL"
                    },
                    {
                            "id": "cx5kf-5",
                            "title": "Yağ Eksiltme",
                            "description": "2.5L motorun yüksek devirde yağ eksiltmesi.",
                            "category": "motor",
                            "riskLevel": "LOW",
                            "affectedKm": "100.000+ km",
                            "repairCost": "2.000 - 5.000 TL"
                    }
            ],
            "pros": [
                    "Premium hissiyat",
                    "Kodo tasarım",
                    "AWD güvenliği",
                    "Güvenilir motor"
            ],
            "cons": [
                    "Yakıt tüketimi (9-11L)",
                    "Mazda servisi sınırlı",
                    "Arka alan rakiplere göre dar"
            ],
            "buyingTips": [
                    "Fren diskleri kontrol edin",
                    "Power donanım tercih edin",
                    "Makyajlı (2022+) tercih edin"
            ]
    }
];
