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
        expertNote: "Mercedes A-Serisi ile ortak 1.3 TCe motor (H5Ht). Türkiye'de en çok aranan SUV'lerden — gerçek arazi yeteneği var. 4x4 AllMode diferansiyeli 100.000 km sonrası uğultu yapar, göze alın. EDC şanzımanlı modellerde kuru kavrama sorunu kronik, mümkünse manuel tercih edin. Dacia servis ağı Renault ile ortak, parçalar çok uygun.",
        reliabilityScore: 81,
        totalIssues: 6,
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
                repairCost: "1.000 - 3.000 TL (Fitil)"
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
        expertNote: "Renault-Nissan CMF-B platformu. Fabrikasyon LPG'li model Türkiye'ye özel ve en mantıklı seçenek — aylık 2.000-3.000 TL yakıt tasarrufu. 3 silindirli sesi bu motorda normal, alışırsınız. Wastegate şıngırtısı kronikdir, performansı etkilemez. NCAP 2 yıldız — güvenlik zayıf ama bu fiyata başka alternatif yok.",
        reliabilityScore: 82,
        totalIssues: 5,
        searchCount: 12000,
        issues: [
            {
                id: "sandero-1",
                title: "Wastegate Sesi (Şıngırtı)",
                description: "Turbodan gelen metalik şıngırtı sesi (Performansa etkisi yok, karakteristik).",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "0 km'den itibaren",
                repairCost: "0 TL (Karakteristik)"
            },
            {
                id: "sandero-2",
                title: "LPG/Benzin Geçiş Sorunu",
                description: "Fabrikasyon LPG'li modellerde geçiş sırasında stop etme veya tekleme.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "20.000+ km",
                repairCost: "3.000 - 8.000 TL (LPG Bakım)"
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
                repairCost: "1.500 - 4.000 TL (Yazılım)"
            },
            {
                id: "sandero-5",
                title: "Debriyaj Sirkelemesi",
                description: "Manuel vitesli modellerde kalkışta titreme (Debriyaj yapısı zayıf).",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "30.000+ km",
                repairCost: "5.000 - 12.000 TL (Debriyaj/Balata)"
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
        expertNote: "Türkiye'nin en ucuz 7 kişilik aracı. 3 silindirli 1.0 TCe motor 7 kişi dolu iken zorlanıyor, otoyolda sabırlı olun. LPG'li model direkt fabrikadan gelir, garantiyi bozmaz. Modüler tavan barları rüzgar sesi yapar ama çıkarılabilir. Debriyaj şehir içi kullanımda 20.000 km'de biter, baskı balata birlikte değiştirilmeli.",
        reliabilityScore: 84,
        totalIssues: 5,
        searchCount: 7000,
        issues: [
            {
                id: "jogger-1",
                title: "Debriyaj Erken Bitmesi",
                description: "Özellikle şehir içi kullanımda debriyajın erken sıyırması ve koku yapması.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "20.000 - 40.000 km",
                repairCost: "5.000 - 12.000 TL (Debriyaj/Balata)"
            },
            {
                id: "jogger-2",
                title: "LPG/Benzin Geçiş Sorunu",
                description: "Fabrikasyon LPG'li modellerde geçiş sırasında tekleme ve stop etme.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "1.500 - 4.000 TL (Yazılım)"
            },
            {
                id: "jogger-3",
                title: "Rüzgar Sesi (Tavan Barları)",
                description: "Modüler tavan barlarından 100 km/s üzeri hızlarda gelen rüzgar sesi.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "100 km/s+",
                repairCost: "2.000 - 5.000 TL"
            },
            {
                id: "jogger-4",
                title: "Elektronik Park Freni Hatası",
                description: "El freninin bırakmaması veya 'Park Frenini Kontrol Ettirin' uyarısı.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "1.500 - 4.000 TL (Yazılım)"
            },
            {
                id: "jogger-5",
                title: "Motor Titreşimi",
                description: "3 silindirli motorun rölantide kabine yansıyan titreşimi.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "0 TL (Karakteristik)"
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
        expertNote: "Renault H4B 0.9 TCe motor — 3 silindirli ama oldukça güvenilir. Easy-R robotize şanzımandan kesinlikle kaçının, manuel çok daha sorunsuz. Plastik termostat yuvası kronik sorundur, Renault/Dacia hepsinde var. Türkiye'de en uygun fiyatlı ikinci el SUV tarzı araçtır. LPG uyumludur.",
        reliabilityScore: 87,
        totalIssues: 4,
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
            },
            {
                id: "sandero-stepway-0-9-tce-auto-2",
                title: "Yağ Eksiltme",
                description: "Motor yağının servis aralarında eksilmesi. Düzenli kontrol şart.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "Segman / 5.000 - 15.000 TL"
            },
            {
                id: "sandero-stepway-0-9-tce-auto-3",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
            },
            {
                id: "sandero-stepway-0-9-tce-auto-4",
                title: "Süspansiyon Burcu Aşınması",
                description: "Ön/arka süspansiyon burçlarının aşınması. Kasiste vuruntu sesi.",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "60.000+ km",
                repairCost: "2.000 - 5.000 TL"
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
        expertNote: "Renault K9K 1.5 dCi motor — milyonlarca üretilmiş, en güvenilir dizel motorlardan. 7 kişilik Lodgy Türkiye'de ticari taksi olarak çok kullanıldı, ikinci el alırken ticari geçmişi mutlaka sorgulayın. AdBlue sistemi 80.000 km sonrası sorun çıkarır ama çözümü basit. Logan MCV'den türemiş platform — sağlam ama konforlu değil.",
        reliabilityScore: 85,
        totalIssues: 4,
        searchCount: 15000,
        issues: [
            {
                id: "lodgy-2",
                title: "Kapı Fitilleri",
                description: "Fitillerin yırtılması ve ses.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "3.000 - 8.000 TL (Tamir)"
            },
            {
                id: "lodgy-1",
                title: "AdBlue",
                description: "AdBlue sistemi arızası.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "15.000 TL"
            },
            {
                id: "lodgy-1-5-dci-auto-3",
                title: "DPF Tıkanması",
                description: "Şehir içi kısa mesafe kullanımda DPF filtresinin dolması.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Şehir içi kullanım",
                repairCost: "5.000 - 12.000 TL"
            },
            {
                id: "lodgy-1-5-dci-auto-4",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
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
        expertNote: "Renault K9K 1.5 dCi motor, Kangoo ile aynı altyapı. Ticari kullanım için Türkiye'nin en çok tercih edilen araçlarından biri. Stepway donanım yolcu taşımacılığında şıklık katar. AdBlue enjektörü 80.000 km sonrası tıkandığında 10.000 TL civarı masraf çıkarır. 2022'den sonra Dokker üretimi durdu, yerini Jogger aldı.",
        reliabilityScore: 88,
        totalIssues: 4,
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
            },
            {
                id: "dokker-1-5-dci-auto-2",
                title: "DPF Tıkanması",
                description: "Şehir içi kısa mesafe kullanımda DPF filtresinin dolması.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Şehir içi kullanım",
                repairCost: "5.000 - 12.000 TL"
            },
            {
                id: "dokker-1-5-dci-auto-3",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
            },
            {
                id: "dokker-1-5-dci-auto-4",
                title: "Süspansiyon Burcu Aşınması",
                description: "Ön/arka süspansiyon burçlarının aşınması. Kasiste vuruntu sesi.",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "60.000+ km",
                repairCost: "2.000 - 5.000 TL"
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
,

    // ─── Eski new-cars dosyasından taşındı ───
    {
        id: "dacia-spring-electric",
        slug: "dacia-spring-electric",
        brand: "Dacia",
        model: "Spring",
        variant: "Electric",
        years: "2022-2024",
        generation: "HJF",
        reliabilityScore: 72,
        totalIssues: 5,
        searchCount: 9000,
        expertNote: "Spring Avrupa'nın en ucuz elektrikli aracıdır ve fiyatına göre çok iyidir. Ama 230 km menzil gerçekte 150-180 km civarıdır. Şehir içi kullanım için idealdir, uzun yol aracı DEĞİLDİR.",
        issues: [
            { id: "spring-1", title: "Düşük Menzil (Kışın)", description: "44hp motorla zaten sınırlı olan menzil, kış aylarında %30-40 düşer. WLTP 230 km iken gerçek kullanımda 120-150 km'ye inebilir. Isıtma sistemi bataryayı hızla tüketir.", category: "elektronik", riskLevel: "HIGH", affectedKm: "Kış ayları", repairCost: "0 TL (Karakteristik)" },
            { id: "spring-2", title: "Şarj Hızı Çok Düşük", description: "AC şarjda maksimum 6.6kW, DC hızlı şarjda 30kW. Tam şarj AC ile 8-14 saat, DC ile 1 saat sürer. Uzun yolda şarj bekleme süresi çok fazla.", category: "elektronik", riskLevel: "MEDIUM", affectedKm: "Sürekli", repairCost: "0 TL (Karakteristik)" },
            { id: "spring-3", title: "Süspansiyon Sertliği", description: "Çok kısa süspansiyon yolculuğu nedeniyle bozuk yollarda aşırı sert geçişler. Arka koltukta zıplama hissi. Konfor düşük.", category: "suspansiyon", riskLevel: "LOW", affectedKm: "Sürekli", repairCost: "0 TL (Karakteristik)" },
            { id: "spring-4", title: "Batarya Yönetim Sistemi Hatası", description: "BMS ünitesinin arada sırada hatalı menzil göstermesi veya şarj seviyesini yanlış raporlaması.", category: "elektronik", riskLevel: "MEDIUM", affectedKm: "Rastgele", repairCost: "1.500 - 4.000 TL (Yazılım)" },
            { id: "spring-5", title: "Plastik İç Mekan Sesleri", description: "Çok sade ve ince plastik iç mekan kaplamaları nedeniyle sürekli trim sesleri ve gıcırtılar.", category: "govde", riskLevel: "LOW", affectedKm: "Sıfırdan itibaren", repairCost: "1.000 - 3.000 TL (Yalıtım)" }
        ],
        pros: ["En ucuz elektrikli araç", "Sıfır emisyon", "Şehir içi pratiklik", "Düşük işletme maliyeti"],
        cons: ["Çok düşük menzil", "Şarj hızı yavaş", "Konfor ve malzeme kalitesi düşük", "Güvenlik (3 yıldız)"],
        buyingTips: ["Kış menzilini hesaba katın (150 km civarı)", "Evde şarj imkanınız olmalı", "Uzun yol aracı olarak düşünmeyin"]
    }
,

    // ─── Eski new-cars dosyasından taşındı ───
    {
        id: "dacia-jogger-hybrid-140",
        slug: "dacia-jogger-hybrid-140",
        brand: "Dacia",
        model: "Jogger",
        variant: "Hybrid 140 Extreme",
        years: "2023-2025",
        generation: "Mk1 Hybrid",
        expertNote: "7 kişilik aile aracı hibrit motorla. Renault Clio hybrid platformu. E-Tech hibrit sistemi akıllıdır — vitessiz çalışır, rölantide elektrikle gider. Ama üçüncü sıra yetişkinler için dar.",
        reliabilityScore: 83,
        totalIssues: 5,
        searchCount: 25000,
        issues: [
            {
                id: "jogger-h-1",
                title: "Köpekli Şanzıman Sesi",
                description: "E-Tech hibrit sistemin köpekli dişli mekanizmasından gelen vites geçiş sesleri. Karakteristik bir ses — arıza değildir.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "0 TL (Tasarım Kaynaklı)"
            },
            {
                id: "jogger-h-2",
                title: "12V Akü Zayıflığı",
                description: "Hibrit sistemin 12V küçük aküyü yorması. Start-stop çalışmaması.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "18 ay+",
                repairCost: "2.000 - 4.000 TL"
            },
            {
                id: "jogger-h-3",
                title: "Süspansiyon Sesi (Üçüncü Sıra)",
                description: "Arka süspansiyon burçlarından gelen ses. Uzun şasi nedeniyle arka kısım daha çok çalışır.",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "40.000+ km",
                repairCost: "3.000 - 5.000 TL"
            },
            {
                id: "jogger-h-4",
                title: "Multimedya Tepki Gecikmesi",
                description: "Media Nav ekranının yavaş tepki vermesi ve dokunmatik gecikmesi.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "1.500 - 4.000 TL (Yazılım)"
            },
            {
                id: "jogger-h-5",
                title: "İç Trim Sesleri",
                description: "Maliyet odaklı plastik aksamdan gelen gıcırtı ve tıkırtı sesleri.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Sıfırdan itibaren",
                repairCost: "1.000 - 3.000 TL (Yalıtım)"
            }
        ],
        pros: [
            "7 kişilik aile aracı",
            "Hibrit ile düşük tüketim",
            "Uygun fiyat"
        ],
        cons: [
            "Üçüncü sıra yetişkinlere dar",
            "Plastik iç mekan",
            "Yalıtım zayıf"
        ],
        buyingTips: [
            "Üçüncü sıraya oturup deneyin — yeterli mi?",
            "Hibrit batarya durumunu sorun",
            "Extreme donanımı tercih edin"
        ]
    }
,

    // ─── Eski new-cars dosyasından taşındı ───
    {
        id: "dacia-logan-1-5-dci",
        slug: "dacia-logan-1-5-dci",
        brand: "Dacia",
        model: "Logan",
        variant: "1.5 dCi",
        years: "2005-2012",
        generation: "LS",
        reliabilityScore: 75,
        totalIssues: 5,
        searchCount: 7000,
        expertNote: "Logan en ucuz sedan. Renault 1.5 dCi motor güvenilir ve ekonomik. Hiçbir şeyi yok ama hiçbir şeyi de bozulmaz. Basitliği en büyük avantajı. Taksi ve ticari kullanım için ideal.",
        issues: [
            { id: "logan-1", title: "Enjektör Arızası (Yüksek KM)", description: "200.000+ km'de enjektörlerin aşınması. Rölanti düzensizliği ve güç kaybı.", category: "motor", riskLevel: "MEDIUM", affectedKm: "150.000+ km", repairCost: "5.000 - 12.000 TL" },
            { id: "logan-2", title: "Debriyaj Balata", description: "Şehir içi kullanımda debriyaj balatası aşınması.", category: "sanziman", riskLevel: "MEDIUM", affectedKm: "80.000+ km", repairCost: "3.000 - 6.000 TL" },
            { id: "logan-3", title: "Göğüs Kapağı Tutamağı", description: "Torpido gözü kapağı tutamağının kırılması. Çok yaygın.", category: "govde", riskLevel: "LOW", affectedKm: "Sıfırdan itibaren", repairCost: "200 - 500 TL" },
            { id: "logan-4", title: "Kapı Fitili Sertleşmesi", description: "Kapı fitillerinin sertleşip çatlayarak rüzgar sesi ve su sızıntısı yapması.", category: "govde", riskLevel: "LOW", affectedKm: "Yaş kaynaklı", repairCost: "500 - 1.500 TL" },
            { id: "logan-5", title: "Rot ve Rotil Aşınması", description: "Ön rot başları ve rotillerin aşınması. Direksiyon boşluğu.", category: "suspansiyon", riskLevel: "LOW", affectedKm: "40.000+ km", repairCost: "1.000 - 2.000 TL" }
        ],
        pros: ["En ucuz sedan", "Güvenilir 1.5 dCi", "Çok düşük bakım maliyeti", "Basit mekanik"],
        cons: ["İç mekan plastiği çok sade", "Güvenlik donanımı minimal", "Konfor düşük"],
        buyingTips: ["Enjektör sesi dinleyin", "Debriyaj kaçını test edin", "Kaporta altı pas kontrolü yaptırın"]
    }
,
    {
            "id": "dacia-duster-1-5-dci",
            "slug": "dacia-duster-1-5-dci",
            "brand": "Dacia",
            "model": "Duster (HM)",
            "variant": "1.5 dCi 4x4 Prestige",
            "years": "2018-2024",
            "generation": "HM (Mk2)",
            "expertNote": "K9K 1.5 dCi 115 HP. Duster fiyat/performans kralı. 4x4 versiyonu Türkiye şartlarına ideal. Renault dCi motor güvenilir ama enjektör ve turbo bakımı önemli.",
            "reliabilityScore": 78,
            "totalIssues": 5,
            "searchCount": 20000,
            "issues": [
                    {
                            "id": "dust2-1",
                            "title": "Enjektör Tıkanması",
                            "description": "dCi enjektörlerin yüksek km'de tıkanması.",
                            "category": "motor",
                            "riskLevel": "HIGH",
                            "affectedKm": "120.000+ km",
                            "repairCost": "8.000 - 15.000 TL"
                    },
                    {
                            "id": "dust2-2",
                            "title": "Turbo Hortumu",
                            "description": "Turbo hortumunun yırtılması. Güç kaybı.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "80.000+ km",
                            "repairCost": "3.000 - 6.000 TL"
                    },
                    {
                            "id": "dust2-3",
                            "title": "Arka Süspansiyon Sesi",
                            "description": "Arka süspansiyon burçlarından vuruntu.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "60.000+ km",
                            "repairCost": "2.000 - 4.000 TL"
                    },
                    {
                            "id": "dust2-4",
                            "title": "Plastik İç Mekan Sesleri",
                            "description": "Torpedo ve kapı panellerinden tıkırtı.",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "Bozuk yollar",
                            "repairCost": "1.000 - 3.000 TL (Yalıtım)"
                    },
                    {
                            "id": "dust2-5",
                            "title": "Media Nav Donma",
                            "description": "Multimedya ekranının donması.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Rastgele",
                            "repairCost": "1.500 - 4.000 TL (Yazılım)"
                    }
            ],
            "pros": [
                    "Fiyat/performans kralı",
                    "4x4 güvenliği",
                    "Basit ve sağlam",
                    "dCi ekonomik"
            ],
            "cons": [
                    "İç mekan kalitesi düşük",
                    "Gürültü yalıtımı zayıf",
                    "Enjektör riski"
            ],
            "buyingTips": [
                    "4x4 versiyonu tercih edin",
                    "Enjektör testi yaptırın",
                    "Prestige donanım"
            ]
    }
,
    {
            "id": "dacia-sandero-2-stepway-0-9-tce",
            "slug": "dacia-sandero-2-stepway-0-9-tce",
            "brand": "Dacia",
            "model": "Sandero Stepway (B52)",
            "variant": "0.9 TCe Ambiance",
            "years": "2013-2020",
            "generation": "B52",
            "expertNote": "H4B 0.9 TCe 90 HP. Sandero Stepway Türkiye'de fiyat/performans efsanesi. Crossover görünümü ile B segment pratikliği. Motor basit ve güvenilir ama gücü düşük.",
            "reliabilityScore": 78,
            "totalIssues": 5,
            "searchCount": 12000,
            "issues": [
                    {
                            "id": "sand2-1",
                            "title": "Turbo Hortumu",
                            "description": "Turbo intercooler hortumunun patlaması.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "60.000+ km",
                            "repairCost": "1.500 - 3.000 TL"
                    },
                    {
                            "id": "sand2-2",
                            "title": "Debriyaj Sertliği",
                            "description": "Debriyaj pedalının sertleşmesi.",
                            "category": "sanziman",
                            "riskLevel": "LOW",
                            "affectedKm": "60.000+ km",
                            "repairCost": "2.000 - 4.000 TL"
                    },
                    {
                            "id": "sand2-3",
                            "title": "Ön Süspansiyon",
                            "description": "Ön amortisör ve bilyaların aşınması.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "50.000+ km",
                            "repairCost": "2.000 - 4.000 TL"
                    },
                    {
                            "id": "sand2-4",
                            "title": "Cam Kaldırma",
                            "description": "Cam kaldırma mekanizması arızası.",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "50.000+ km",
                            "repairCost": "1.000 - 2.000 TL"
                    },
                    {
                            "id": "sand2-5",
                            "title": "MediaNav",
                            "description": "MediaNav ekranının donması.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Rastgele",
                            "repairCost": "1.500 - 4.000 TL (Yazılım)"
                    }
            ],
            "pros": [
                    "Çok ucuz",
                    "Crossover görünümü",
                    "Basit motor",
                    "Pratik"
            ],
            "cons": [
                    "90 HP yetersiz",
                    "İç mekan kalitesi düşük",
                    "Gürültü yalıtımı zayıf"
            ],
            "buyingTips": [
                    "Turbo hortumunu kontrol edin",
                    "Manuel alın",
                    "Ambiance yeterli"
            ]
    }
,
    {
            "id": "dacia-logan-mcv-1-5-dci",
            "slug": "dacia-logan-mcv-1-5-dci",
            "brand": "Dacia",
            "model": "Logan MCV (K90)",
            "variant": "1.5 dCi Laureate",
            "years": "2013-2020",
            "generation": "K90",
            "expertNote": "K9K 1.5 dCi 90 HP. Logan MCV (station wagon) Türkiye'de en ucuz SW. Dev bagaj (573L). Motor güvenilir. İç mekan plastik ama çok fonksiyonel.",
            "reliabilityScore": 78,
            "totalIssues": 5,
            "searchCount": 8000,
            "issues": [
                    {
                            "id": "lmcv-1",
                            "title": "Enjektör",
                            "description": "dCi enjektör tıkanması.",
                            "category": "motor",
                            "riskLevel": "HIGH",
                            "affectedKm": "120.000+ km",
                            "repairCost": "5.000 - 12.000 TL"
                    },
                    {
                            "id": "lmcv-2",
                            "title": "Turbo Hortumu",
                            "description": "Turbo hortumunun yırtılması.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "80.000+ km",
                            "repairCost": "2.000 - 4.000 TL"
                    },
                    {
                            "id": "lmcv-3",
                            "title": "Ön Süspansiyon",
                            "description": "Ön amortisör ve bilyaların aşınması.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "50.000+ km",
                            "repairCost": "2.000 - 4.000 TL"
                    },
                    {
                            "id": "lmcv-4",
                            "title": "Kapı Menteşesi",
                            "description": "Kapı menteşe sarkması.",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "Kronik",
                            "repairCost": "500 - 1.500 TL"
                    },
                    {
                            "id": "lmcv-5",
                            "title": "MediaNav",
                            "description": "MediaNav ekranının donması.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Rastgele",
                            "repairCost": "1.500 - 4.000 TL (Yazılım)"
                    }
            ],
            "pros": [
                    "En ucuz SW",
                    "Dev bagaj 573L",
                    "Ekonomik dCi",
                    "Basit ve sağlam"
            ],
            "cons": [
                    "İç mekan çok sade",
                    "Yapı kalitesi düşük",
                    "Güvenlik puanı düşük"
            ],
            "buyingTips": [
                    "Enjektör testi",
                    "Laureate donanım",
                    "Pas kontrolü"
            ]
    }
,
    {
            "id": "dacia-duster-1-5-dci",
            "slug": "dacia-duster-mk1-1-5-dci-laureate",
            "brand": "Dacia",
            "model": "Duster",
            "variant": "Mk1 1.5 dCi Laureate",
            "years": "2010-2017",
            "generation": "HS",
            "expertNote": "K9K 1.5 dCi 110 HP. Duster ucuz SUV devrimi yarattı. Laureate donanım multimedya, park sensörü. 4x4 seçeneği. Renault K9K motor güvenilir.",
            "reliabilityScore": 74,
            "totalIssues": 5,
            "searchCount": 18000,
            "issues": [
                    {
                            "id": "dus-1",
                            "title": "Turbo",
                            "description": "Turbo aktuatör arızası.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "100.000+ km",
                            "repairCost": "3.000 - 6.000 TL"
                    },
                    {
                            "id": "dus-2",
                            "title": "Enjektör",
                            "description": "K9K enjektör tıkanması.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "120.000+ km",
                            "repairCost": "3.000 - 8.000 TL"
                    },
                    {
                            "id": "dus-3",
                            "title": "Süspansiyon",
                            "description": "Ön amortisör ve bilyalar. Sert kullanım.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "40.000+ km",
                            "repairCost": "500 - 1.500 TL"
                    },
                    {
                            "id": "dus-4",
                            "title": "Transfer Kutusu",
                            "description": "4x4 transfer kutusu arızası.",
                            "category": "sanziman",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "80.000+ km",
                            "repairCost": "5.000 - 10.000 TL"
                    },
                    {
                            "id": "dus-5",
                            "title": "Gürültü Yalıtımı",
                            "description": "İç mekan gürültü yalıtımı çok kötü.",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "Tasarım",
                            "repairCost": "0 TL (Karakteristik)"
                    }
            ],
            "pros": [
                    "Ucuz SUV",
                    "K9K güvenilir",
                    "4x4 seçeneği",
                    "Yüksek taban"
            ],
            "cons": [
                    "İç mekan kalitesiz",
                    "Gürültülü",
                    "Sert süspansiyon",
                    "Konfor düşük"
            ],
            "buyingTips": [
                    "2WD yeterli",
                    "K9K motor ekonomik",
                    "Laureate donanım iyi",
                    "Sert kullanıma dayanıklı"
            ]
    }
,
    {
            "id": "dacia-sandero-1-5-dci",
            "slug": "dacia-sandero-mk2-1-5-dci-stepway",
            "brand": "Dacia",
            "model": "Sandero",
            "variant": "Mk2 1.5 dCi Stepway",
            "years": "2012-2020",
            "generation": "B52",
            "expertNote": "K9K 1.5 dCi 90 HP. Sandero Stepway SUV görünümlü HB. Çok ekonomik. Stepway donanım yüksek taban, tavan rayları, MediaNav ekran.",
            "reliabilityScore": 74,
            "totalIssues": 5,
            "searchCount": 14000,
            "issues": [
                    {
                            "id": "san-1",
                            "title": "Turbo",
                            "description": "Turbo aktuatör.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "100.000+ km",
                            "repairCost": "3.000 - 6.000 TL"
                    },
                    {
                            "id": "san-2",
                            "title": "Enjektör",
                            "description": "K9K enjektör.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "120.000+ km",
                            "repairCost": "3.000 - 8.000 TL"
                    },
                    {
                            "id": "san-3",
                            "title": "Süspansiyon",
                            "description": "Ön amortisör.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "40.000+ km",
                            "repairCost": "500 - 1.500 TL"
                    },
                    {
                            "id": "san-4",
                            "title": "Cam Kaldırma",
                            "description": "Cam kaldırma mekanizması.",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "300 - 800 TL"
                    },
                    {
                            "id": "san-5",
                            "title": "MediaNav",
                            "description": "MediaNav donması.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Kronik",
                            "repairCost": "500 - 1.500 TL"
                    }
            ],
            "pros": [
                    "Çok ucuz",
                    "Ekonomik",
                    "Stepway SUV görünüm",
                    "Pratik HB"
            ],
            "cons": [
                    "Plastik kalite düşük",
                    "Gürültülü",
                    "Konfor az",
                    "İç mekan sade"
            ],
            "buyingTips": [
                    "Stepway yüksek taban güzel",
                    "K9K ekonomik",
                    "MediaNav yeterli",
                    "Benzinli 0.9 TCe daha sorunsuz"
            ]
    }
];
