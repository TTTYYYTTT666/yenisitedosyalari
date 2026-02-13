import { Car } from '@/types';

export const daciaCars: Car[] = [
    {
        id: "dacia-duster-1-3-tce",
        slug: "dacia-duster-1-3-tce",
        brand: "Dacia",
        model: "Duster",
        variant: "1.3 TCe",
        years: "2018-2024",
        generation: "HM",
        price: 1450000,
        expertNote: "Mercedes A-Serisi ile ortak 1.3 TCe motor (H5Ht). Türkiye'de en çok aranan SUV'lerden — gerçek arazi yeteneği var. 4x4 AllMode diferansiyeli 100.000 km sonrası uğultu yapar, göze alın. EDC şanzımanlı modellerde kuru kavrama sorunu kronik, mümkünse manuel tercih edin. Dacia servis ağı Renault ile ortak, parçalar çok uygun.",
        reliabilityScore: 81,
        totalIssues: 3,
        searchCount: 15100,
        issues: [
            {
                id: "duster-1",
                title: "Diferansiyel Ötmesi (4x4)",
                description: "4x4 modellerde 90-110 km/s hızlarda arkadan gelen uğultu sesi (Kronik).",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "20.000+ km",
                repairCost: "40.000 - 60.000 TL (Değişim)"
            },
            {
                id: "duster-4",
                title: "Turbo Arızası (Islık Sesi)",
                description: "Gaza basınca gelen ıslık sesi ve çekiş düşüklüğü (Turbo mili boşluğu).",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "50.000+ km",
                repairCost: "30.000 - 50.000 TL"
            },
            {
                id: "duster-3",
                title: "Klima Kompresör Sesi",
                description: "Klima açıldığında motordan gelen inleme/uğultu sesi.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Sıfırdan itibaren",
                repairCost: "15.000 - 25.000 TL"
            },
            {
                id: "duster-2",
                title: "Yakıt Gösterge Hatası",
                description: "Depo ful olsa bile ibrenin eksik göstermesi veya dalgalanması (Şamandıra ve Yazılım).",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "5.000 - 8.000 TL"
            },
            {
                id: "duster-5",
                title: "Kapı Fitillerinden Toz Alma",
                description: "Arazi kullanımlarında kapı fitillerinin yetersiz kalıp içeri toz alması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Arazi Kullanımı",
                repairCost: "Ek Fitil"
            },
            {
                id: "duster-6",
                title: "EDC Şanzıman Silkelemesi",
                description: "Otomatik vitesli modellerde kalkışta titreme ve kararsızlık.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "60.000+ km",
                repairCost: "20.000 - 35.000 TL (Kavrama)"
            }
        ],
        pros: [
            "Gerçek arazi yeteneği",
            "Mercedes ortak motor (1.3 TCe)",
            "Dayanıklı"
        ],
        cons: [
            "Güvenlik zayıf (NCAP)",
            "Yalıtım kötü",
            "Koltuk konforu"
        ],
        buyingTips: [
            "Arazide hor kullanılmış mı bakın",
            "Diferansiyel sesini 100km hızda dinleyin"
        ]
    },
    {
        id: "dacia-sandero-stepway-1-0-tce",
        slug: "dacia-sandero-stepway-1-0-tce",
        brand: "Dacia",
        model: "Sandero",
        variant: "Stepway 1.0 TCe",
        years: "2021-2024",
        generation: "Mk3",
        price: 1100000,
        expertNote: "Renault-Nissan CMF-B platformu. Fabrikasyon LPG'li model Türkiye'ye özel ve en mantıklı seçenek — aylık 2.000-3.000 TL yakıt tasarrufu. 3 silindirli sesi bu motorda normal, alışırsınız. Wastegate şıngırtısı kronikdir, performansı etkilemez. NCAP 2 yıldız — güvenlik zayıf ama bu fiyata başka alternatif yok.",
        reliabilityScore: 82,
        totalIssues: 2,
        searchCount: 12000,
        issues: [
            {
                id: "sandero-1",
                title: "Wastegate Sesi (Şıngırtı)",
                description: "Turbodan gelen metalik şıngırtı sesi (Performansa etkisi yok, karakteristik).",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "0 km'den itibaren",
                repairCost: "Çözümsüz / Yay Takılması"
            },
            {
                id: "sandero-2",
                title: "LPG/Benzin Geçiş Sorunu",
                description: "Fabrikasyon LPG'li modellerde geçiş sırasında stop etme veya tekleme.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "20.000+ km",
                repairCost: "LPG Regülatör / Enjektör"
            },
            {
                id: "sandero-3",
                title: "Enjektör Arızası",
                description: "Benzin enjektörlerinin tıkanması sonucu 'Enjeksiyonu Kontrol Ettirin' uyarısı.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "40.000+ km",
                repairCost: "5.000 - 10.000 TL"
            },
            {
                id: "sandero-4",
                title: "Multimedya Donması",
                description: "Kablosuz Apple CarPlay/Android Auto kopmaları ve ekranın kilitlenmesi.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Yazılım Güncelleme"
            },
            {
                id: "sandero-5",
                title: "Debriyaj Sirkelemesi",
                description: "Manuel vitesli modellerde kalkışta titreme (Debriyaj yapısı zayıf).",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "30.000+ km",
                repairCost: "Baskı Balata"
            }
        ],
        pros: [
            "Fiyat/Performans",
            "Yüksek sürüş",
            "LPG uyumu"
        ],
        cons: [
            "Güvenlik (2 yıldız)",
            "Plastik kalitesi"
        ],
        buyingTips: [
            "Turbo sesini (şıngırtı) dinleyin"
        ]
    },
    {
        id: "dacia-jogger-1-0-tce",
        slug: "dacia-jogger-1-0-tce",
        brand: "Dacia",
        model: "Jogger",
        variant: "1.0 TCe",
        years: "2022-2024",
        generation: "Mk1",
        price: 1250000,
        expertNote: "Türkiye'nin en ucuz 7 kişilik aracı. 3 silindirli 1.0 TCe motor 7 kişi dolu iken zorlanıyor, otoyolda sabırlı olun. LPG'li model direkt fabrikadan gelir, garantiyi bozmaz. Modüler tavan barları rüzgar sesi yapar ama çıkarılabilir. Debriyaj şehir içi kullanımda 20.000 km'de biter, baskı balata birlikte değiştirilmeli.",
        reliabilityScore: 84,
        totalIssues: 2,
        searchCount: 7000,
        issues: [
            {
                id: "jogger-1",
                title: "Debriyaj Erken Bitmesi",
                description: "Özellikle şehir içi kullanımda debriyajın erken sıyırması ve koku yapması.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "20.000 - 40.000 km",
                repairCost: "Baskı Balata"
            },
            {
                id: "jogger-2",
                title: "LPG/Benzin Geçiş Sorunu",
                description: "Fabrikasyon LPG'li modellerde geçiş sırasında tekleme ve stop etme.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "LPG Regülatör / Yazılım"
            },
            {
                id: "jogger-3",
                title: "Rüzgar Sesi (Tavan Barları)",
                description: "Modüler tavan barlarından 100 km/s üzeri hızlarda gelen rüzgar sesi.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "100 km/s+",
                repairCost: "Yok (Yapısal)"
            },
            {
                id: "jogger-4",
                title: "Elektronik Park Freni Hatası",
                description: "El freninin bırakmaması veya 'Park Frenini Kontrol Ettirin' uyarısı.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "Yazılım / Motor Değişimi"
            },
            {
                id: "jogger-5",
                title: "Motor Titreşimi",
                description: "3 silindirli motorun rölantide kabine yansıyan titreşimi.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Yok"
            }
        ],
        pros: [
            "7 kişilik en ucuz araç",
            "Genişlik",
            "Fiyat"
        ],
        cons: [
            "Motor performansı (dolu iken)",
            "Yalıtım"
        ],
        buyingTips: [
            "7 koltuklu mu kontrol edin, debriyajı dinleyin"
        ]
    },
    {
        id: "dacia-sandero-stepway",
        slug: "dacia-sandero-stepway-0-9-tce",
        brand: "Dacia",
        model: "Sandero",
        variant: "Stepway 0.9 TCe",
        years: "2012-2020",
        generation: "Mk2",
        price: 900000,
        expertNote: "Renault H4B 0.9 TCe motor — 3 silindirli ama oldukça güvenilir. Easy-R robotize şanzımandan kesinlikle kaçının, manuel çok daha sorunsuz. Plastik termostat yuvası kronik sorundur, Renault/Dacia hepsinde var. Türkiye'de en uygun fiyatlı ikinci el SUV tarzı araçtır. LPG uyumludur.",
        reliabilityScore: 87,
        totalIssues: 1,
        searchCount: 21000,
        issues: [
            {
                id: "sandero-1",
                title: "Termostat Yuvası",
                description: "Plastik yuvanın çatlaması ve su kaçağı.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "80.000+ km",
                repairCost: "2.000 - 4.000 TL"
            }
        ],
        pros: [
            "Yüksek alt yapı",
            "Ucuz parça",
            "LPG uyumu"
        ],
        cons: [
            "Güvenlik (Yıldız)",
            "Yalıtım yok",
            "Konfor zayıf"
        ],
        buyingTips: [
            "Easy-R robotize şanzımandan kaçınıp manuel tercih etmek daha sorunsuzdur."
        ]
    },
    {
        id: "dacia-lodgy",
        slug: "dacia-lodgy-1-5-dci",
        brand: "Dacia",
        model: "Lodgy",
        variant: "1.5 dCi",
        years: "2012-2022",
        generation: "J92",
        price: 800000,
        expertNote: "Renault K9K 1.5 dCi motor — milyonlarca üretilmiş, en güvenilir dizel motorlardan. 7 kişilik Lodgy Türkiye'de ticari taksi olarak çok kullanıldı, ikinci el alırken ticari geçmişi mutlaka sorgulayın. AdBlue sistemi 80.000 km sonrası sorun çıkarır ama çözümü basit. Logan MCV'den türemiş platform — sağlam ama konforlu değil.",
        reliabilityScore: 85,
        totalIssues: 2,
        searchCount: 15000,
        issues: [
            {
                id: "lodgy-2",
                title: "Kapı Fitilleri",
                description: "Fitillerin yırtılması ve ses.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "Değişim"
            },
            {
                id: "lodgy-1",
                title: "AdBlue",
                description: "AdBlue sistemi arızası.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "15.000 TL"
            }
        ],
        pros: [
            "7 Koltuk",
            "Genişlik",
            "Yakıt"
        ],
        cons: [
            "Güvenlik (3 Yıldız)",
            "Teneke hissiyatı"
        ],
        buyingTips: [
            "Ticari geçmişi var mı sorgulayın."
        ]
    },
    {
        id: "dacia-dokker",
        slug: "dacia-dokker-1-5-dci",
        brand: "Dacia",
        model: "Dokker",
        variant: "1.5 dCi",
        years: "2012-2021",
        generation: "Mk1",
        price: 750000,
        expertNote: "Renault K9K 1.5 dCi motor, Kangoo ile aynı altyapı. Ticari kullanım için Türkiye'nin en çok tercih edilen araçlarından biri. Stepway donanım yolcu taşımacılığında şıklık katar. AdBlue enjektörü 80.000 km sonrası tıkandığında 10.000 TL civarı masraf çıkarır. 2022'den sonra Dokker üretimi durdu, yerini Jogger aldı.",
        reliabilityScore: 88,
        totalIssues: 1,
        searchCount: 18000,
        issues: [
            {
                id: "dokker-1",
                title: "AdBlue",
                description: "AdBlue enjektör/pompa tıkanması.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "10.000 TL"
            }
        ],
        pros: [
            "Yükleme hacmi",
            "Dayanıklılık",
            "Yakıt"
        ],
        cons: [
            "Konfor yok",
            "Yalıtım yok"
        ],
        buyingTips: [
            "Stepway donanım daha şıktır."
        ]
    }
];
