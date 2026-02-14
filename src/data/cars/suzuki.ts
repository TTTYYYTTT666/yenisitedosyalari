import { Car } from '@/types';

export const suzukiCars: Car[] = [
    {
        id: "suzuki-vitara-boosterjet",
        slug: "suzuki-vitara-1-4-boosterjet",
        brand: "Suzuki",
        model: "Vitara",
        variant: "1.4 BoosterJet AllGrip",
        years: "2016-2024",
        generation: "LY",
        expertNote: "1.4 BoosterJet turbo motor (140 HP) + Aisin 6AT. AllGrip 4x4 gerçek off-road değil ama çamurda ve karda mükemmel. Türkiye'de sorunsuzluk şampiyonu — JD Power ve Warrantywise raporlarında sürekli zirvede. Karbon birikimi direkt enjeksiyondan kaynaklanıyor, 60.000 km sonrası temizlik gerek. Trim sesleri sert plastik aksamdan geliyor, konfor beklemeyin. Yedek parça fiyatları çok uygun.",
        reliabilityScore: 94,
        totalIssues: 5,
        searchCount: 12000,
        issues: [
            {
                id: "vitara-bj-3",
                title: "Karbon Birikimi",
                description: "Emme subaplarında kurum birikmesi (Direkt enjeksiyon).",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "60.000+ km",
                repairCost: "2.000 - 5.000 TL"
            },
            {
                id: "vitara-bj-2",
                title: "Trim Sesleri",
                description: "Sert plastik aksamlardan gelen tıkırtılar.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Zamanla",
                repairCost: "2.000 - 5.000 TL"
            },
            {
                id: "vitara-bj-1",
                title: "Start-Stop Hatası",
                description: "Start-stop sisteminin devre dışı kalması.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "1.500 - 4.000 TL (Yazılım)"
            },
            {
                id: "vitara-1-4-boosterjet-auto-4",
                title: "Yağ Eksiltme",
                description: "Motor yağının servis aralarında eksilmesi. Düzenli kontrol şart.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "Segman / 5.000 - 15.000 TL"
            },
            {
                id: "vitara-1-4-boosterjet-auto-5",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
            }
        ],
        pros: [
            "Gerçek 4x4 (AllGrip)",
            "Sorunsuz Japon",
            "Yakıt/Performans"
        ],
        cons: [
            "İç mekan kalitesi düşük (Trim)",
            "Kapılar hafif",
            "Yalıtım"
        ],
        buyingTips: [
            "Sorunsuzluk ve 4 çeker istiyorsanız rakipsizdir. Konfor beklemeyin."
        ]
    },
    {
        id: "suzuki-swift-1-2-dualjet",
        slug: "suzuki-swift-1-2-dualjet",
        brand: "Suzuki",
        model: "Swift",
        variant: "1.2 Dualjet",
        years: "2017-2024",
        generation: "A2L",
        expertNote: "1.2 Dualjet atmosferik motor (90 HP), ultra hafif 900 kg kasa. Türkiye'de şehir içi en pratik araç. CVT şanzıman düşük hızlarda titreşim yapabilir — mümkünse manuel seçin. 4-5 litre yakıt tüketimi efsane. Otoyol hızlarında motor gürültüsü yüksek. Arka koltuk 1.70m üstü için dar. Mild hybrid versiyon daha ekonomik.",
        reliabilityScore: 91,
        totalIssues: 4,
        searchCount: 7000,
        issues: [
            {
                id: "swift-1",
                title: "CVT Titreme",
                description: "CVT şanzımanda düşük hızlarda hafif titreme.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "2.000 - 5.000 TL"
            },
            {
                id: "swift-1-2-dualjet-auto-2",
                title: "12V Akü Boşalması",
                description: "Hibrit sistemin 12V yardımcı aküyü hızla tüketmesi. Araç yatabilir.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "2.500 - 5.000 TL"
            },
            {
                id: "swift-1-2-dualjet-auto-3",
                title: "Rejeneratif Fren Hissi",
                description: "Rejeneratif frenlemenin suni ve alışılmadık hissettirmesi.",
                category: "fren",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "0 TL (Karakteristik)"
            },
            {
                id: "swift-1-2-dualjet-auto-4",
                title: "Motor/Elektrik Geçiş Sarsıntısı",
                description: "Benzin ve elektrik motoru geçişlerinde hafif sarsıntı.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "0 TL (Karakteristik)"
            }
        ],
        pros: [
            "Ultra hafif (900kg)",
            "Şehir içi pratiklik",
            "Düşük tüketim"
        ],
        cons: [
            "Otoyol hızlarında gürültü",
            "Arka koltuk dar"
        ],
        buyingTips: [
            "Manuel tercih edin (CVT yerine)"
        ]
    },
    {
        id: "suzuki-scross-1-4-hybrid",
        slug: "suzuki-scross-1-4-hybrid",
        brand: "Suzuki",
        model: "S-Cross",
        variant: "1.4 BoosterJet Hybrid GLX",
        years: "2021-2024",
        generation: "Mk3",
        expertNote: "BoosterJet 1.4 Turbo + 48V Mild Hybrid. Türkiye'de fiyat/performans SUV seçiminde en akıllı tercih. AllGrip 4x4 versiyonu arazide Duster'a yakın performans verir. Koltuk kumaşı erken deforme sorunu var ama kılıf takılabilir. Multimedya ekranı basit ama telefon bağlantısı kopma sorunu olabilir. Yakıt tüketimi 6-7 litre mükemmel.",
        reliabilityScore: 93,
        totalIssues: 4,
        searchCount: 11000,
        issues: [
            {
                id: "scross-2",
                title: "Koltuk Kumaşı",
                description: "Koltuk kenarlarının erken deforme olması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "30.000+ km",
                repairCost: "3.000 - 8.000 TL (Tamir)"
            },
            {
                id: "scross-1",
                title: "Multimedya",
                description: "Ekranın telefon bağlantısını koparması.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Yazılım",
                repairCost: "1.500 - 4.000 TL (Yazılım)"
            },
            {
                id: "scross-1-4-hybrid-auto-3",
                title: "12V Akü Boşalması",
                description: "Hibrit sistemin 12V yardımcı aküyü hızla tüketmesi. Araç yatabilir.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "2.500 - 5.000 TL"
            },
            {
                id: "scross-1-4-hybrid-auto-4",
                title: "Rejeneratif Fren Hissi",
                description: "Rejeneratif frenlemenin suni ve alışılmadık hissettirmesi.",
                category: "fren",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "0 TL (Karakteristik)"
            }
        ],
        pros: [
            "Fiyat/Performans",
            "Sorunsuzluk",
            "Yakıt ekonomisi"
        ],
        cons: [
            "Tasarım (Subjektif)",
            "Yalıtım",
            "Malzeme kalitesi"
        ],
        buyingTips: [
            "AllGrip (4x4) olanları arazide de şaşırtıcı derecede yeteneklidir."
        ]
    },
    {
        id: "suzuki-jimny",
        slug: "suzuki-jimny-1-5",
        brand: "Suzuki",
        model: "Jimny",
        variant: "1.5 GLX 4x4",
        years: "2018-2024",
        generation: "JB74",
        expertNote: "1.5 K15B atmosferik motor (102 HP), part-time 4WD. Dünyada üretimi durdu, ikinci el fiyatı sıfırın ÜSTÜNDE. Türkiye'de koleksiyon aracına dönüştü. Gerçek arazi yeteneği (yaklaşma/ayrılma açısı) Land Rover'a yakın. Konfor yoktur — sert süspansiyon, dar kabin, bagaj 85 litre. Şehir içi sürüş zayıf, otoyolda rüzgara hassas. Ama tapanı var, bakanı var.",
        reliabilityScore: 92,
        totalIssues: 4,
        searchCount: 12000,
        issues: [
            {
                id: "jimny-1",
                title: "Diferansiyel Ötmesi",
                description: "Yüksek hızda diferansiyel sesi.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "0 TL (Karakteristik)"
            },
            {
                id: "jimny-1-5-auto-2",
                title: "Yağ Eksiltme",
                description: "Motor yağının servis aralarında eksilmesi. Düzenli kontrol şart.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "Segman / 5.000 - 15.000 TL"
            },
            {
                id: "jimny-1-5-auto-3",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
            },
            {
                id: "jimny-1-5-auto-4",
                title: "Süspansiyon Burcu Aşınması",
                description: "Ön/arka süspansiyon burçlarının aşınması. Kasiste vuruntu sesi.",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "60.000+ km",
                repairCost: "2.000 - 5.000 TL"
            }
        ],
        pros: [
            "Gerçek arazi yeteneği",
            "Tasarım",
            "İkinci el"
        ],
        cons: [
            "Konfor",
            "Bagaj yok",
            "Yol tutuş"
        ],
        buyingTips: [
            "Şehir içi konfor beklemeyin, arazi canavarıdır."
        ]
    }
,

    // ─── Eski new-cars dosyasından taşındı ───
    {
        id: "suzuki-swift-3-1-3-ddis",
        slug: "suzuki-swift-3-1-3-ddis",
        brand: "Suzuki",
        model: "Swift",
        variant: "III 1.3 DDiS",
        years: "2005-2010",
        generation: "RS",
        reliabilityScore: 74,
        totalIssues: 5,
        searchCount: 5000,
        expertNote: "Swift III küçük ama çevik şehir aracı. 1.3 DDiS dizel motor Fiat Multijet ortaklığı ile üretilmiştir. Ekonomik ve güvenilir. Spor versiyonu (Sport) çok eğlencelidir.",
        issues: [
            { id: "swift3-1", title: "EGR Valfi Tıkanması", description: "EGR valfinde kurum birikimi. Motor düzensizliği.", category: "motor", riskLevel: "MEDIUM", affectedKm: "60.000+ km", repairCost: "2.000 - 4.000 TL" },
            { id: "swift3-2", title: "Turbo Yağ Kaçağı", description: "Turbo yağ keçelerinden sızıntı. Mavi duman.", category: "motor", riskLevel: "MEDIUM", affectedKm: "100.000+ km", repairCost: "4.000 - 8.000 TL" },
            { id: "swift3-3", title: "Arka Kampana Fren", description: "Arka kampana fren aşınması.", category: "fren", riskLevel: "LOW", affectedKm: "50.000+ km", repairCost: "1.000 - 2.000 TL" },
            { id: "swift3-4", title: "Cam Kaldırma Mekanizması", description: "Cam kaldırma motorunun zayıflaması.", category: "govde", riskLevel: "LOW", affectedKm: "Yaş kaynaklı", repairCost: "1.000 - 2.000 TL" },
            { id: "swift3-5", title: "Ön Stabilizatör Biyel Kolu", description: "Stabilizatör biyel kolunun aşınması. Virajlarda takırtı.", category: "suspansiyon", riskLevel: "LOW", affectedKm: "40.000+ km", repairCost: "500 - 1.500 TL" }
        ],
        pros: ["Çok ekonomik", "Çevik sürüş", "Küçük ve pratik", "Ucuz bakım"],
        cons: ["Çok küçük kabin", "Otoyolda yetersiz", "Parça bulmak zorlaşıyor"],
        buyingTips: ["EGR temizliği yapılmış mı sorun", "Turbo sesini dinleyin", "Pas kontrolü yaptırın"]
    }
,

    // ─── Eski new-cars dosyasından taşındı ───
    {
        id: "suzuki-across-2-5-hybrid",
        slug: "suzuki-across-2-5-hybrid",
        brand: "Suzuki",
        model: "Across",
        variant: "2.5 Hybrid",
        years: "2021-2024",
        generation: "A5",
        reliabilityScore: 88,
        totalIssues: 4,
        searchCount: 3500,
        expertNote: "Suzuki Across aslında Toyota RAV4 PHEV'in badge engineering versiyonudur — birebir aynı araçtır. Toyota güvenilirliği Suzuki amblemiyle gelir. PHEV sistemi çok iyi ama şarj altyapısı önemli.",
        issues: [
            { id: "across-1", title: "PHEV Şarj Ünitesi Arızası", description: "Araç üzeri şarj cihazının (OBC) aşırı ısınma nedeniyle kapanması veya hata vermesi. Şarj işleminin yarıda kalmasına neden olur. Yazılım güncelleme veya OBC değişimi gerekebilir.", category: "elektronik", riskLevel: "MEDIUM", affectedKm: "30.000+ km", repairCost: "10.000 - 25.000 TL" },
            { id: "across-2", title: "Arka Fren Diski Korozyonu", description: "Rejeneratif frenleme nedeniyle arka fren diskleri yeterince kullanılmaz ve korozyon yapar. Fren sesi ve titreşim oluşur.", category: "fren", riskLevel: "LOW", affectedKm: "20.000+ km", repairCost: "3.000 - 6.000 TL" },
            { id: "across-3", title: "12V Akü Boşalması", description: "PHEV sistemi uzun süre kullanılmadığında 12V yardımcı akünün boşalması. Araç çalışmaz hale gelebilir. Periyodik kullanım önerilir.", category: "elektronik", riskLevel: "LOW", affectedKm: "Kullanıma bağlı", repairCost: "4.000 - 7.000 TL (Akü)" },
            { id: "across-4", title: "Multimedya Ekran Tepkisizliği", description: "Toyota kaynaklı multimedya ünitesinin arada donması veya geç tepki vermesi. Yazılım güncelleme ile iyileşir.", category: "elektronik", riskLevel: "LOW", affectedKm: "Rastgele", repairCost: "1.500 - 4.000 TL (Yazılım)" }
        ],
        pros: ["Toyota güvenilirliği (RAV4 PHEV)", "75 km elektrikli menzil", "306hp toplam güç", "E-Four AWD sistemi"],
        cons: ["Suzuki servisi sınırlı", "Yüksek satın alma fiyatı", "Yedek parça temin süresi"],
        buyingTips: ["Evde şarj imkanı olmalı (PHEV verimli kullanım için)", "12V akü voltajını kontrol ettirin", "Toyota RAV4 PHEV ile fiyat karşılaştırın"]
    }
,

    // ─── Eski new-cars dosyasından taşındı ───
    {
        id: "suzuki-scross-hybrid-new",
        slug: "suzuki-scross-1-4-hybrid-new",
        brand: "Suzuki",
        model: "S-Cross",
        variant: "1.4 Boosterjet Hybrid GLX",
        years: "2022-2025",
        generation: "Mk3",
        expertNote: "Gizli cevher. ALLGRIP 4x4 sistemi bu fiyata rakipsizdir. 1.4 Boosterjet motor + 48V mild hybrid. Japonya üretimi kalitesi çok iyi. Marka bilinirliği düşük ama araç sağlamdır.",
        reliabilityScore: 88,
        totalIssues: 5,
        searchCount: 12000,
        issues: [
            {
                id: "scross-n-1",
                title: "48V Akü Zayıflığı",
                description: "Mild hybrid sistemin 48V aküsünün zamanla kapasitesini kaybetmesi.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "8.000 - 12.000 TL"
            },
            {
                id: "scross-n-2",
                title: "6AT Şanzıman Gecikmesi",
                description: "Aisin 6 ileri otomatik şanzımanda vites değiştirme gecikmesi.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "0 TL (Tasarım Kaynaklı)"
            },
            {
                id: "scross-n-3",
                title: "Rüzgar Sesi (Ayna)",
                description: "110+ km/s hızlarda aynalardan gelen rüzgar sesi.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "110+ km/s",
                repairCost: "500 - 2.000 TL (Fitil)"
            },
            {
                id: "scross-n-4",
                title: "Multimedya Gecikme",
                description: "9 inç ekranın başlangıçta yavaş açılması ve CarPlay bağlantı gecikmesi.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "1.500 - 4.000 TL (Yazılım)"
            },
            {
                id: "scross-n-5",
                title: "Turbo Wastegate Sesi",
                description: "Boosterjet turbodan gelen metalik tıkırtı sesi. Performansı etkilemez.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "2.000 - 5.000 TL"
            }
        ],
        pros: [
            "ALLGRIP 4x4 (Bu fiyata yok)",
            "Japonya üretimi",
            "Sorunsuz mekanik"
        ],
        cons: [
            "Marka bilinirliği düşük",
            "İkinci el piyasası yavaş",
            "İç mekan sade"
        ],
        buyingTips: [
            "ALLGRIP 4x4'lü olanı mutlaka tercih edin",
            "GLX donanım yeterlidir",
            "İthalatçı garanti süresini kontrol edin"
        ]
    }
,
    {
            "id": "suzuki-vitara-1-6-ddis",
            "slug": "suzuki-vitara-1-6-ddis",
            "brand": "Suzuki",
            "model": "Vitara (LY)",
            "variant": "1.6 DDiS GLX 4x4",
            "years": "2015-2020",
            "generation": "LY",
            "expertNote": "D16AA 1.6 DDiS 120 HP + 6AT + AllGrip 4x4. Vitara Türkiye'de kompakt SUV segmentinde fiyatıyla öne çıktı. Fiat kaynaklı 1.6 dizel motor güvenilir. AllGrip 4x4 sistemi arazi için yeterli.",
            "reliabilityScore": 79,
            "totalIssues": 5,
            "searchCount": 8000,
            "issues": [
                    {
                            "id": "vitra-1",
                            "title": "DPF Tıkanması",
                            "description": "Şehir içi kısa mesafe kullanımda DPF dolması.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Şehir içi",
                            "repairCost": "5.000 - 12.000 TL"
                    },
                    {
                            "id": "vitra-2",
                            "title": "EGR Karbon Birikimi",
                            "description": "EGR valfinde kurum birikimi.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "80.000+ km",
                            "repairCost": "3.000 - 6.000 TL"
                    },
                    {
                            "id": "vitra-3",
                            "title": "Ön Süspansiyon Burcu",
                            "description": "Ön süspansiyon burçlarının aşınması.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "60.000+ km",
                            "repairCost": "2.000 - 4.000 TL"
                    },
                    {
                            "id": "vitra-4",
                            "title": "Multimedya Donması",
                            "description": "Multimedya ekran donması.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Rastgele",
                            "repairCost": "1.500 - 4.000 TL (Yazılım)"
                    },
                    {
                            "id": "vitra-5",
                            "title": "Rüzgar Sesi",
                            "description": "Yüksek hızda ayna bölgesinden ses.",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "120+ km/h",
                            "repairCost": "1.000 - 3.000 TL (Fitil)"
                    }
            ],
            "pros": [
                    "Uygun fiyat",
                    "AllGrip 4x4",
                    "Kompakt boyut",
                    "Ekonomik dizel"
            ],
            "cons": [
                    "DPF hassasiyeti",
                    "İç mekan kalitesi",
                    "Suzuki servisi sınırlı"
            ],
            "buyingTips": [
                    "DPF taraması yaptırın",
                    "GLX donanım tercih edin",
                    "4x4 test edin"
            ]
    }
,
    {
            "id": "suzuki-swift-4-1-2-hybrid",
            "slug": "suzuki-swift-4-1-2-hybrid",
            "brand": "Suzuki",
            "model": "Swift (Mk4)",
            "variant": "1.2 DualJet SHVS GLX",
            "years": "2017-2024",
            "generation": "AZ",
            "expertNote": "K12C 1.2 DualJet 90 HP + SHVS mild hybrid. Swift Mk4 çok hafif (900 kg) ve eğlenceli. Mild hybrid yakıt ekonomisi sağlıyor. CVT veya 5MT seçenekleri.",
            "reliabilityScore": 85,
            "totalIssues": 5,
            "searchCount": 8000,
            "issues": [
                    {
                            "id": "sw4-1",
                            "title": "CVT Sesi",
                            "description": "CVT şanzımandan hızlanmada uğultu.",
                            "category": "sanziman",
                            "riskLevel": "LOW",
                            "affectedKm": "Karakteristik",
                            "repairCost": "0 TL (Karakteristik)"
                    },
                    {
                            "id": "sw4-2",
                            "title": "SHVS Sistem",
                            "description": "Mild hybrid starter motor/jeneratör arızası.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Rastgele",
                            "repairCost": "5.000 - 10.000 TL"
                    },
                    {
                            "id": "sw4-3",
                            "title": "Rüzgar Sesi",
                            "description": "Yüksek hızda rüzgar sesi (hafif gövde).",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "120+ km/h",
                            "repairCost": "0 TL (Karakteristik)"
                    },
                    {
                            "id": "sw4-4",
                            "title": "Arka Süspansiyon",
                            "description": "Arka torsion bar sert his.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "Bozuk yollar",
                            "repairCost": "0 TL (Karakteristik)"
                    },
                    {
                            "id": "sw4-5",
                            "title": "Fren Diski",
                            "description": "Ön fren disklerinin erken aşınması.",
                            "category": "fren",
                            "riskLevel": "LOW",
                            "affectedKm": "30.000+ km",
                            "repairCost": "2.000 - 4.000 TL"
                    }
            ],
            "pros": [
                    "Çok hafif (900 kg)",
                    "Eğlenceli sürüş",
                    "Ekonomik",
                    "Ucuz bakım"
            ],
            "cons": [
                    "Arka alan dar",
                    "Otoyolda gürültülü",
                    "90 HP az"
            ],
            "buyingTips": [
                    "GLX donanım alın",
                    "Manuel versiyonu daha eğlenceli",
                    "Hafifliğinin tadını çıkarın"
            ]
    }
];
