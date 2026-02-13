import { Car } from '@/types';

export const mitsubishiCars: Car[] = [
    {
        id: "mitsubishi-eclipse-cross-phev",
        slug: "mitsubishi-eclipse-cross-phev",
        brand: "Mitsubishi",
        model: "Eclipse Cross",
        variant: "PHEV",
        years: "2021-2024",
        generation: "GK",
        price: 2000000,
        expertNote: "Mitsubishi'nin PHEV teknolojisi (2.4 MIVEC + 2 elektrik motor). S-AWC 4 çeker hibrit sistem kar/buzda mükemmel. Türkiye'de az bilinen ama teknolojik açıdan en ileri SUV'lardan biri. Dahili şarj kablosu dayanıklılığı zayıf — harici şarj kablosu alın. Temsa yetkili servis ağı var ama tecrube sınırlı. Şehir içi sadece elektrikle ~45 km gidebilir.",
        reliabilityScore: 83,
        totalIssues: 4,
        searchCount: 5000,
        issues: [
            {
                id: "eclipse-1",
                title: "Şarj Kablosu",
                description: "Dahili şarj kablosunun dayanıklılık sorunu.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Kullanıma bağlı",
                repairCost: "3.000 - 6.000 TL"
            },
            {
                id: "eclipse-cross-phev-auto-2",
                title: "12V Akü Boşalması",
                description: "Hibrit sistemin 12V yardımcı aküyü hızla tüketmesi. Araç yatabilir.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "2.500 - 5.000 TL"
            },
            {
                id: "eclipse-cross-phev-auto-3",
                title: "Rejeneratif Fren Hissi",
                description: "Rejeneratif frenlemenin suni ve alışılmadık hissettirmesi.",
                category: "fren",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Normal (Tasarım)"
            },
            {
                id: "eclipse-cross-phev-auto-4",
                title: "Motor/Elektrik Geçiş Sarsıntısı",
                description: "Benzin ve elektrik motoru geçişlerinde hafif sarsıntı.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Normal"
            }
        ],
        pros: [
            "PHEV teknolojisi",
            "S-AWC 4x4",
            "Sessiz şehir içi"
        ],
        cons: [
            "Az bilinen marka",
            "Servis ağı"
        ],
        buyingTips: [
            "Orijinal şarj kablosu sağlam mı?"
        ]
    },
    {
        id: "mitsubishi-asx-1-3-turbo",
        slug: "mitsubishi-asx-1-3-turbo",
        brand: "Mitsubishi",
        model: "ASX",
        variant: "1.3 Turbo Instyle",
        years: "2023-2024",
        generation: "Mk2",
        price: 1450000,
        expertNote: "Renault Captur CMF-B platformu, yalnızca Mitsubishi logosu taşıyor. TCe 130 EDC şanzıman Renault ile BIREBIR aynı. EDC titremesi kalkışta normal, sportif hız şanzıman değil. Captur bulamazsanız aynı aracı Mitsubishi logosuyla alın — garanti koşulları daha iyi olabilir. Start-stop akkü bağımlı, kışın sorun çıkarabilir.",
        reliabilityScore: 88,
        totalIssues: 5,
        searchCount: 5000,
        issues: [
            {
                id: "asx-new-1",
                title: "EDC Titreme",
                description: "Yokuş kalkışlarında şanzıman kararsızlığı.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Yazılım"
            },
            {
                id: "asx-new-2",
                title: "Start-Stop",
                description: "Sistemin devreye girmemesi (Akü voltajı).",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Kış ayları",
                repairCost: "Akü"
            },
            {
                id: "asx-new-3",
                title: "Multimedya",
                description: "Ekranın donması ve yeniden başlaması.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Yazılım",
                repairCost: "Reset"
            },
            {
                id: "asx-1-3-turbo-auto-4",
                title: "Yağ Eksiltme",
                description: "Motor yağının servis aralarında eksilmesi. Düzenli kontrol şart.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "Segman / 5.000 - 15.000 TL"
            },
            {
                id: "asx-1-3-turbo-auto-5",
                title: "DCT Kavrama Titremesi",
                description: "Çift kavramalı şanzımanda düşük hızlarda titreşim.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "40.000+ km",
                repairCost: "10.000 - 25.000 TL"
            }
        ],
        pros: [
            "Renault Captur altyapısı",
            "Motor performansı",
            "Garanti"
        ],
        cons: [
            "Kopya tasarım (Captur ile aynı)",
            "Marka imajı (Eskiye göre)"
        ],
        buyingTips: [
            "Captur bulamazsanız aynı aracı Mitsubishi logosuyla alabilirsiniz."
        ]
    },
    {
        id: "mitsubishi-l200",
        slug: "mitsubishi-l200-tornado",
        brand: "Mitsubishi",
        model: "L200",
        variant: "2.4 DI-D Tornado",
        years: "2015-2023",
        generation: "Mk5",
        price: 2200000,
        expertNote: "MIVEC 2.4 dizel motor (181 HP), Super Select 4WD. Türkiye'de pick-up segmentinde Toyota Hilux'un en güçlü rakibi. Tornado donanım en dolu versiyon. DPF şehir içi kullanımda doluyor — haftada 1 kez uzun yol yapın. Temsa yetkili servis ağı ticari araç tecrübesine sahip. 2023'den sonra Triton kötü göründüğü için önceki kasayı tercih edin.",
        reliabilityScore: 90,
        totalIssues: 4,
        searchCount: 7000,
        issues: [
            {
                id: "l200-1",
                title: "DPF",
                description: "Şehir içi kullanımda DPF dolması.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Sürekli",
                repairCost: "Temizlik"
            },
            {
                id: "l200-tornado-auto-2",
                title: "DPF Tıkanması",
                description: "Şehir içi kısa mesafe kullanımda DPF filtresinin dolması.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Şehir içi kullanım",
                repairCost: "5.000 - 12.000 TL"
            },
            {
                id: "l200-tornado-auto-3",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
            },
            {
                id: "l200-tornado-auto-4",
                title: "Süspansiyon Burcu Aşınması",
                description: "Ön/arka süspansiyon burçlarının aşınması. Kasiste vuruntu sesi.",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "60.000+ km",
                repairCost: "2.000 - 5.000 TL"
            }
        ],
        pros: [
            "Arazi yeteneği (Super Select)",
            "Dayanıklılık",
            "Piyasa"
        ],
        cons: [
            "Arka koltuk konforu",
            "Yakıt"
        ],
        buyingTips: [
            "Tornado donanım en dolusudur."
        ]
    },

    // ─── Eski new-cars dosyasından taşındı ───
    {
        id: "mitsubishi-lancer-1-6-mivec",
        slug: "mitsubishi-lancer-1-6-mivec",
        brand: "Mitsubishi",
        model: "Lancer",
        variant: "1.6 MIVEC",
        years: "2008-2014",
        generation: "CY",
        price: 350000,
        reliabilityScore: 77,
        totalIssues: 5,
        searchCount: 6000,
        expertNote: "Lancer CY güvenilir Japon sedanı. 1.6 MIVEC motor basit ve dayanıklı. CVT şanzıman sessiz ama sportif değil. Mitsubishi servisi azaldı ama motor sorunsuz çalışır.",
        issues: [
            { id: "lancer-1", title: "CVT Şanzıman Uğultusu", description: "CVT şanzımandan yüksek devirde uğultu sesi. Motor yüksek devirde kalır (rubber band).", category: "sanziman", riskLevel: "LOW", affectedKm: "Karakteristik", repairCost: "CVT Yağı (4.000 TL)" },
            { id: "lancer-2", title: "Ön Alt Kol Burcu", description: "Ön alt kol burçlarının aşınması.", category: "suspansiyon", riskLevel: "MEDIUM", affectedKm: "50.000+ km", repairCost: "2.000 - 4.000 TL" },
            { id: "lancer-3", title: "Klima Kompresörü", description: "Klima kompresör kavramasının aşınması. Soğutma kaybı.", category: "elektronik", riskLevel: "MEDIUM", affectedKm: "80.000+ km", repairCost: "5.000 - 10.000 TL" },
            { id: "lancer-4", title: "Boya Kalitesi", description: "Boya kalitesinin zayıf olması. Küçük taşlardan boya atması.", category: "govde", riskLevel: "LOW", affectedKm: "2-3 yıl", repairCost: "Lokal Boya" },
            { id: "lancer-5", title: "Arka Kampana Fren", description: "Arka kampana fren balata ve tambur aşınması.", category: "fren", riskLevel: "LOW", affectedKm: "50.000+ km", repairCost: "1.500 - 3.000 TL" }
        ],
        pros: ["Güvenilir MIVEC motor", "Geniş kabin", "Düşük bakım maliyeti", "Japon kalitesi"],
        cons: ["CVT sportif değil", "Mitsubishi servisi azaldı", "Tasarım eski"],
        buyingTips: ["CVT yağ değişim geçmişini sorun", "Alt takım kontrolü", "Boya durumunu inceleyin"]
    }
,
    {
            "id": "mitsubishi-outlander-2-0",
            "slug": "mitsubishi-outlander-2-0",
            "brand": "Mitsubishi",
            "model": "Outlander (GF)",
            "variant": "2.0 CVT 4WD Intense",
            "years": "2013-2021",
            "generation": "GF",
            "price": 1000000,
            "expertNote": "4B11 2.0 MiVEC 150 HP + CVT + S-AWC. Outlander Türkiye'de 7 kişilik SUV olarak fiyatıyla öne çıktı. CVT şanzıman bazı sürücülere garip gelir. S-AWC 4x4 sistemi güvenilir.",
            "reliabilityScore": 78,
            "totalIssues": 5,
            "searchCount": 8000,
            "issues": [
                    {
                            "id": "out-1",
                            "title": "CVT Sesi",
                            "description": "CVT şanzımandan hızlanmada uğultu sesi.",
                            "category": "sanziman",
                            "riskLevel": "LOW",
                            "affectedKm": "Karakteristik",
                            "repairCost": "Normal (Tasarım)"
                    },
                    {
                            "id": "out-2",
                            "title": "CVT Isınma",
                            "description": "Yoğun trafikte CVT şanzıman ısınması. Koruma moduna geçer.",
                            "category": "sanziman",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Ağır trafik",
                            "repairCost": "Soğutma / CVT Yağı"
                    },
                    {
                            "id": "out-3",
                            "title": "Ön Fren Diski",
                            "description": "Ön fren disklerinin erken eğrilmesi.",
                            "category": "fren",
                            "riskLevel": "LOW",
                            "affectedKm": "30.000+ km",
                            "repairCost": "3.000 - 6.000 TL"
                    },
                    {
                            "id": "out-4",
                            "title": "Panoramik Tavan",
                            "description": "Panoramik cam tavan fitillerinden ses.",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "Bozuk yollar",
                            "repairCost": "Fitil"
                    },
                    {
                            "id": "out-5",
                            "title": "Multimedya Sistemi",
                            "description": "MMCS multimedya sisteminin eski ve yavaş kalması.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Tasarım",
                            "repairCost": "Aftermarket ekran"
                    }
            ],
            "pros": [
                    "7 kişilik",
                    "S-AWC 4x4",
                    "Uygun fiyat",
                    "Geniş bagaj"
            ],
            "cons": [
                    "CVT hissizliği",
                    "İç mekan kalitesi sade",
                    "2.0 motor yeterli ama heyecansız"
            ],
            "buyingTips": [
                    "CVT'yi uzun test sürüşünde deneyin",
                    "Intense donanım tercih edin",
                    "PHEV versiyonu da inceleyin"
            ]
    }
];
