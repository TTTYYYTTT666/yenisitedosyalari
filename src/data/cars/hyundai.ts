import { Car } from '@/types';

export const hyundaiCars: Car[] = [
    {
        id: "hyundai-i20-1-4-jump",
        slug: "hyundai-i20-1-4-jump",
        brand: "Hyundai",
        model: "i20",
        variant: "1.4 Jump",
        years: "2020-2024",
        generation: "BC3",
        reliabilityScore: 89,
        totalIssues: 2,
        searchCount: 9500,
        issues: [
            {
                id: "i20-2",
                title: "Boya Vernik Atması",
                description: "Özellikle beyaz renkli araçlarda tavanda ve bagaj kapağında vernik soyulması (Kronik).",
                category: "govde",
                riskLevel: "MEDIUM",
                affectedKm: "3-4 Yıl",
                repairCost: "5.000 - 15.000 TL (Boya/Kaplama)"
            },
            {
                id: "i20-1",
                title: "Direksiyon Kutusu Sesi",
                description: "Bozuk yollarda direksiyon kutusundan ve mafsalından gelen tıkırtı sesi.",
                category: "suspansiyon",
                riskLevel: "MEDIUM",
                affectedKm: "40.000+ km",
                repairCost: "8.000 - 15.000 TL"
            },
            {
                id: "i20-3",
                title: "Debriyaj Titremesi",
                description: "Manuel vitesli modellerde kalkışta silkeleme ve debriyajın erken bitmesi.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "50.000+ km",
                repairCost: "8.000 - 12.000 TL"
            },
            {
                id: "i20-4",
                title: "Multimedya Bağlantı Sorunu",
                description: "Android Auto / Apple CarPlay bağlantısının sık sık kopması.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Yazılım Güncelleme"
            },
            {
                id: "i20-5",
                title: "Trim Sesleri",
                description: "Sert plastik aksamdan gelen çıtırtı sesleri (B sütunu ve kapılar).",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "Yalıtım"
            }
        ],
        pros: [
            "Sorunsuz tam otomatik şanzıman",
            "Geniş iç hacim",
            "Donanım"
        ],
        cons: [
            "Yakıt tüketimi (Şehir içi 9-10LT)",
            "Sert plastikler"
        ],
        buyingTips: [
            "Tavanda boya atması var mı?",
            "Direksiyonu bozuk yolda dinleyin"
        ]
    },
    {
        id: "hyundai-tucson-1-6-t-gdi",
        slug: "hyundai-tucson-1-6-t-gdi",
        brand: "Hyundai",
        model: "Tucson",
        variant: "1.6 T-GDI",
        years: "2021-2024",
        generation: "NX4",
        reliabilityScore: 86,
        totalIssues: 2,
        searchCount: 11000,
        issues: [
            {
                id: "tucson-1",
                title: "GPF (Benzin Partikül Filtresi) Tıkanması",
                description: "Kısa mesafe kullanımda egzoz filtresinin dolması ve 'Sürüşe Devam Edin' uyarısı.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Şehir içi kullanım",
                repairCost: "Rejenerasyon (Yüksek Devir)"
            },
            {
                id: "tucson-3",
                title: "DCT Şanzıman Isınması",
                description: "Yoğun trafikte dur-kalk yaparken şanzıman sıcaklık uyarısı ve silkeleme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "Sıkışık Trafik",
                repairCost: "Soğutma (Bekleme)"
            },
            {
                id: "tucson-2",
                title: "Multimedya Ekran Reset",
                description: "Sürüş esnasında ekranın kendiliğinden kapanıp açılması veya donması.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Yazılım Güncelleme"
            },
            {
                id: "tucson-4",
                title: "AdBlue Sistemi Arızası (Dizel)",
                description: "Dizel versiyonlarda AdBlue pompasının bozulması ve geri sayım başlaması.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "40.000+ km",
                repairCost: "20.000 - 35.000 TL"
            },
            {
                id: "tucson-5",
                title: "Panoramik Cam Tavan Sesi",
                description: "Cam tavan mekanizmasından gelen tıkırtı ve yavaş kapanma sorunu.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "Bakım/Yağlama"
            }
        ],
        pros: [
            "Fütüristik tasarım",
            "Zengin donanım",
            "Performans (180hp)"
        ],
        cons: [
            "Yüksek yakıt tüketimi",
            "Pianoblack yüzeyler çiziliyor"
        ],
        buyingTips: [
            "GPF uyarısı alıyor mu sorun",
            "Cam tavan fitillerini kontrol edin"
        ]
    },
    {
        id: "hyundai-i10-1-2-mpi",
        slug: "hyundai-i10-1-2-mpi",
        brand: "Hyundai",
        model: "i10",
        variant: "1.2 MPI",
        years: "2020-2024",
        generation: "AC3",
        reliabilityScore: 88,
        totalIssues: 2,
        searchCount: 6000,
        issues: [
            {
                id: "i10-1",
                title: "AMT Şanzıman Sarsıntısı",
                description: "Yarı otomatik şanzımanın vites geçişlerinde kararsızlık, silkeleme ve ısınma.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "Karakteristik",
                repairCost: "Yazılım / Baskı Balata"
            },
            {
                id: "i10-2",
                title: "Direksiyon Kolonu Sesi",
                description: "Direksiyon çevirirken gelen tıkırtı sesi (EPS motoru veya mafsal).",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "30.000+ km",
                repairCost: "Garantiden / Değişim"
            },
            {
                id: "i10-3",
                title: "Debriyaj Titremesi",
                description: "Manuel ve AMT modellerde kalkışta titreme (Debriyaj erken bitiyor).",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "40.000+ km",
                repairCost: "10.000 - 15.000 TL"
            },
            {
                id: "i10-4",
                title: "Geri Vitese Geçmeme",
                description: "Özellikle soğuk havalarda geri vitese zor geçmesi.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Şanzıman Yağı Değişimi"
            }
        ],
        pros: [
            "Park kolaylığı",
            "Sorunsuz motor",
            "Zengin donanım (Elite)"
        ],
        cons: [
            "AMT şanzıman konforu",
            "Bagaj"
        ],
        buyingTips: [
            "Yokuş kalkışını deneyin",
            "Direksiyonu dinleyin"
        ]
    },
    {
        id: "hyundai-bayon-1-4-mpi",
        slug: "hyundai-bayon-1-4-mpi",
        brand: "Hyundai",
        model: "Bayon",
        variant: "1.4 MPI",
        years: "2021-2024",
        generation: "BC3 CUV",
        reliabilityScore: 87,
        totalIssues: 2,
        searchCount: 8500,
        issues: [
            {
                id: "bayon-1",
                title: "Direksiyon Kutusu Sesi",
                description: "Direksiyon çevirirken gelen tıkırtı ve boşluk sesi (EPS/Mafsal).",
                category: "suspansiyon",
                riskLevel: "MEDIUM",
                affectedKm: "30.000+ km",
                repairCost: "15.000 - 25.000 TL"
            },
            {
                id: "bayon-2",
                title: "Yakıt Pompası Arızası",
                description: "Seyir halindeyken stop etme ve çalışmama (Geri çağırma/Recall).",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "Rastgele",
                repairCost: "Ücretsiz Değişim"
            },
            {
                id: "bayon-3",
                title: "Bobin Arızası",
                description: "Ateşleme bobininin erken bozulması ve tekleme sorunu.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "40.000+ km",
                repairCost: "3.000 - 5.000 TL"
            },
            {
                id: "bayon-4",
                title: "Şanzıman Isınması (Otomatik)",
                description: "Yoğun trafikte tork konvertörlü şanzımanın ısınması ve vites vuruntusu.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "Sıkışık Trafik",
                repairCost: "Yağ Değişimi"
            },
            {
                id: "bayon-5",
                title: "Multimedya Donması",
                description: "Kablosuz bağlantıda kopmalar ve ekranın siyah olması.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Yazılım"
            }
        ],
        pros: [
            "Fiyat/Performans",
            "Geniş iç hacim",
            "Tam otomatik şanzıman"
        ],
        cons: [
            "Performans zayıf",
            "Plastik kalitesi"
        ],
        buyingTips: [
            "LPG takılıysa sistemini kontrol edin"
        ]
    },
    {
        id: "hyundai-elantra-1-6-mpi",
        slug: "hyundai-elantra-1-6-mpi",
        brand: "Hyundai",
        model: "Elantra",
        variant: "1.6 MPI",
        years: "2021-2024",
        generation: "CN7",
        reliabilityScore: 89,
        totalIssues: 2,
        searchCount: 5500,
        issues: [
            {
                id: "elantra-1",
                title: "Direksiyon Mafsal Sesi",
                description: "Direksiyon kolonundaki esnek kaplinin erimesi sonucu boşluk ve ses.",
                category: "suspansiyon",
                riskLevel: "MEDIUM",
                affectedKm: "40.000+ km",
                repairCost: "1.000 - 2.000 TL (Parça ucuz, işçilik zor)"
            },
            {
                id: "elantra-2",
                title: "Ateşleme Bobini Arızası",
                description: "Orjinal bobinlerin erken bozulması ve motorun tekleyerek çalışması.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "50.000+ km",
                repairCost: "3.000 - 6.000 TL"
            },
            {
                id: "elantra-3",
                title: "Motor İtici Sesi (Lifter)",
                description: "Soğuk çalışmada ve düşük devirde motordan gelen 'tık tık' sesi.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Yağ Bakımı / İtici Değişimi"
            },
            {
                id: "elantra-4",
                title: "Bagaj Kapağı Yayları",
                description: "Bagaj kapağını kaldıran torsiyon yaylarının ses yapması veya kırılması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "500 - 1.000 TL"
            },
            {
                id: "elantra-5",
                title: "CVT Şanzıman Uğultusu",
                description: "Yüksek hızlarda şanzımandan gelen karakteristik uğultu.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Yok"
            }
        ],
        pros: [
            "Cesur tasarım",
            "Geniş iç mekan",
            "Sorunsuzluk"
        ],
        cons: [
            "Bagaj ağzı dar",
            "CVT bağırması"
        ],
        buyingTips: [
            "Direksiyonu tam tur çevirip dinleyin"
        ]
    },
    {
        id: "hyundai-i20-mpi",
        slug: "hyundai-i20-1-4-mpi",
        brand: "Hyundai",
        model: "i20",
        variant: "1.4 MPI Style",
        years: "2014-2020",
        generation: "GB",
        price: 1050000,
        reliabilityScore: 92,
        totalIssues: 1,
        searchCount: 16000,
        issues: [
            {
                id: "i20-1",
                title: "Debriyaj Bilyası",
                description: "Manuel viteslerde debriyajdan gelen ses.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "60.000+ km",
                repairCost: "5.000 - 10.000 TL"
            }
        ],
        pros: [
            "Sorunsuzluk",
            "Geniş iç hacim",
            "Cam tavan opsiyonu"
        ],
        cons: [
            "Yakıt tüketimi (Otomatik)",
            "Performans (Atmosferik)"
        ],
        buyingTips: [
            "LPG uyumu tamdır, yakıt tasarrufu için LPG'li bakılabilir."
        ]
    },
    {
        id: "hyundai-tucson-tgdi",
        slug: "hyundai-tucson-1-6-tgdi",
        brand: "Hyundai",
        model: "Tucson",
        variant: "1.6 T-GDI Elite",
        years: "2020-2024",
        generation: "NX4",
        price: 1950000,
        reliabilityScore: 89,
        totalIssues: 2,
        searchCount: 38000,
        issues: [
            {
                id: "tucson-2",
                title: "GPF Tıkanıklığı",
                description: "Benzin partikül filtresi uyarısı (Kısa mesafe kullanımı).",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Şehir içi",
                repairCost: "Rejenerasyon (Ücretsiz)"
            },
            {
                id: "tucson-1",
                title: "DCT Isınma",
                description: "Yoğun trafikte şanzıman ısınma uyarısı.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "Trafik",
                repairCost: "Kullanıcı Hatası"
            }
        ],
        pros: [
            "Tasarım",
            "Donanım zenginliği",
            "Geniş iç hacim"
        ],
        cons: [
            "Yakıt tüketimi (10L+)",
            "Bagaj kapağı yavaş"
        ],
        buyingTips: [
            "Yakıt tüketimini göze alarak alın, LPG uyumlu değildir (Direkt enjeksiyon)."
        ]
    },
    {
        id: "hyundai-accent-blue-1-6-crdi",
        slug: "hyundai-accent-blue-1-6-crdi",
        brand: "Hyundai",
        model: "Accent Blue",
        variant: "1.6 CRDi DCT",
        years: "2011-2018",
        generation: "RB",
        expertNote: "Roket gibi gider, az yakar. Şirketlerin favorisidir. DCT şanzıman ısınırsa kenara çek bekle. Direksiyonu zamanla soyulur.",
        price: 750000,
        reliabilityScore: 84,
        totalIssues: 3,
        searchCount: 19000,
        issues: [
            {
                id: "accent-1",
                title: "DCT Isınması",
                description: "Dur-kalk trafikte şanzıman ısınma uyarısı.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "Yoğun Trafik",
                repairCost: "Kullanıma Bağlı"
            },
            {
                id: "accent-2",
                title: "Direksiyon Soyulması",
                description: "Deri direksiyonun erkenden dökülmesi.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "50.000+ km",
                repairCost: "Kaplama"
            },
            {
                id: "accent-3",
                title: "Amortisör Sesi",
                description: "Arka amortisörlerin ses yapması.",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "80.000+ km",
                repairCost: "3.000 - 6.000 TL"
            }
        ],
        pros: [
            "Performans (136hp)",
            "Yedek parça",
            "İkinci el"
        ],
        cons: [
            "Yol tutuş zayıf",
            "Yalıtım",
            "Frenler zayıf kalıyor"
        ],
        buyingTips: [
            "Şanzıman geçişlerinde titreme var mı?",
            "Kilometresi düşürülmüş mü (Eski şirket aracı)?"
        ]
    },
    {
        id: "hyundai-kona",
        slug: "hyundai-kona-1-0-tgdi",
        brand: "Hyundai",
        model: "Kona",
        variant: "1.0 T-GDI",
        years: "2017-2023",
        generation: "OS",
        reliabilityScore: 86,
        totalIssues: 1,
        searchCount: 9000,
        issues: [
            {
                id: "kona-1",
                title: "DCT Isınma",
                description: "Sıkışık trafikte şanzıman ısınma uyarısı.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "Trafikte",
                repairCost: "Soğutma Beklemesi"
            }
        ],
        pros: [
            "Sıradışı tasarım",
            "Güçlü motorlar",
            "Donanım"
        ],
        cons: [
            "Arka diz mesafesi",
            "Bagaj küçük"
        ],
        buyingTips: [
            "Şanzıman kavramasını test edin."
        ]
    },
    {
        id: "hyundai-ix35-1-6-gdi",
        slug: "hyundai-ix35-1-6-gdi",
        brand: "Hyundai",
        model: "ix35",
        variant: "1.6 GDI Style",
        years: "2010-2015",
        generation: "LM",
        expertNote: "Tucson'un babası. LPG'siz binilmez, LPG varsa da subap eritme riski vardır. Motoru sağlamdır, kaportası kavidir.",
        price: 750000,
        reliabilityScore: 80,
        totalIssues: 3,
        searchCount: 10000,
        issues: [
            {
                id: "ix35-1",
                title: "Subap Erimesi",
                description: "LPG'li araçlarda magnezyum alaşımlı subapların erimesi.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "80.000+ km (LPG'li)",
                repairCost: "25.000 - 40.000 TL (Kapak Revizyonu)"
            },
            {
                id: "ix35-2",
                title: "Deri Direksiyon",
                description: "Direksiyon ve vites topuzu derisinin soyulması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "Kaplama"
            },
            {
                id: "ix35-3",
                title: "Koltuk Isıtma",
                description: "Sürücü koltuk ısıtma rezistansının kopması.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "2.000 - 4.000 TL"
            }
        ],
        pros: [
            "Geniş iç hacim",
            "Cam tavan",
            "Fiyat/Performans"
        ],
        cons: [
            "Yakıt tüketimi (LPG şart)",
            "Sert süspansiyon"
        ],
        buyingTips: [
            "LPG ne zaman takılmış?",
            "Motor kompresyon testi yaptırın"
        ]
    },
    {
        id: "hyundai-i20-troy",
        slug: "hyundai-i20-troy-1-4",
        brand: "Hyundai",
        model: "i20",
        variant: "1.4 Troy",
        years: "2009-2014",
        generation: "PB",
        reliabilityScore: 85,
        totalIssues: 2,
        searchCount: 9000,
        issues: [
            {
                id: "i20-troy-1",
                title: "EPS",
                description: "Elektrikli direksiyon tıkırtısı.",
                category: "suspansiyon",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "8.000 TL"
            },
            {
                id: "i20-troy-2",
                title: "Debriyaj",
                description: "Debriyajın erken bitmesi.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "60.000 km",
                repairCost: "5.000 TL"
            }
        ],
        pros: [
            "Geniş iç hacim",
            "Sorunsuz motor",
            "İkinci el"
        ],
        cons: [
            "Sert plastikler",
            "Yalıtım"
        ],
        buyingTips: [
            "1.4 dizel 6 ileri vitesli olanı çok seridir."
        ]
    },
    {
        id: "hyundai-kona-1-6-tgdi",
        slug: "hyundai-kona-1-6-tgdi",
        brand: "Hyundai",
        model: "Kona",
        variant: "1.6 T-GDI Elite",
        years: "2018-2023",
        generation: "OS",
        expertNote: "Şaka makinesi. 177 beygirle çoğu spor arabayı üzer. Ama o DCT şanzıman var ya, trafikte ısınırsa üzer. Yakıtı da performansına göre makuldür (9-10L).",
        price: 1050000,
        reliabilityScore: 86,
        totalIssues: 2,
        searchCount: 11000,
        issues: [
            {
                id: "kona-1",
                title: "DCT Kavrama",
                description: "Agresif kullanımda kavramanın erken bitmesi.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "60.000+ km",
                repairCost: "25.000 - 40.000 TL"
            },
            {
                id: "kona-2",
                title: "Multimedya",
                description: "Ekran dokunmatiğinin takılması.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Yazılım"
            }
        ],
        pros: [
            "Performans (177hp / 198hp)",
            "Sıradışı tasarım",
            "Donanım"
        ],
        cons: [
            "Arka diz mesafesi dar",
            "Bagaj küçük",
            "Sert plastik"
        ],
        buyingTips: [
            "Kalkışta titreme var mı?",
            "Boyalı parçalarda ton farkı var mı (Plastik aksam)?"
        ]
    },
    {
        id: "hyundai-kona-ev-39kwh",
        slug: "hyundai-kona-ev-39kwh",
        brand: "Hyundai",
        model: "Kona",
        variant: "EV 39.2 kWh Style",
        years: "2019-2023",
        generation: "OS EV",
        price: 1200000,
        expertNote: "Türkiye'nin en çok satan elektrikli araçlarından biri. 39.2 kWh batarya şehir içi için yeterlidir (300 km menzil). Soğukta menzil %30 düşer. DC hızlı şarj desteği var. Bakım maliyeti çok düşük.",
        reliabilityScore: 88,
        totalIssues: 5,
        searchCount: 18000,
        issues: [
            {
                id: "kona-ev-1",
                title: "Menzil Düşüşü (Soğuk Hava)",
                description: "Kış aylarında batarya performansının %20-30 düşmesi ve menzil kaybı. Isı pompası olan versiyonlar daha iyi performans gösterir.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Çözümsüz (EV karakteri)"
            },
            {
                id: "kona-ev-2",
                title: "12V Akü Bitme",
                description: "Ana batarya dolu olmasına rağmen 12V küçük aküyü boşalması ve aracın açılmaması.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "24 ay+",
                repairCost: "2.000 - 4.000 TL (12V Akü)"
            },
            {
                id: "kona-ev-3",
                title: "Şarj Kapağı Donması",
                description: "Soğuk havalarda şarj kapağının açılmaması veya şarj fişinin çıkartılamaması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kış ayları",
                repairCost: "Isıtma / Bekleme"
            },
            {
                id: "kona-ev-4",
                title: "Rejeneratif Fren Gıcırtısı",
                description: "Mekanik fren disklerinin az kullanılması nedeniyle paslanması ve ilk baskılarda gıcırtı sesi.",
                category: "fren",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "Fren Diski Temizliği"
            },
            {
                id: "kona-ev-5",
                title: "Batarya Geri Çağırma (İlk Üretim)",
                description: "2019-2020 üretim araçlarda batarya yangın riski nedeniyle geri çağırma yapıldı. Batarya değişimi ücretsiz.",
                category: "elektronik",
                riskLevel: "CRITICAL",
                affectedKm: "2019-2020 Üretim",
                repairCost: "Ücretsiz (Geri Çağırma)"
            }
        ],
        pros: [
            "Çok düşük işletme maliyeti",
            "Sessiz ve konforlu sürüş",
            "Hızlı DC şarj desteği"
        ],
        cons: [
            "Soğukta menzil düşüşü",
            "Şarj altyapısı yetersiz",
            "İkinci el değer belirsizliği"
        ],
        buyingTips: [
            "Batarya sağlık raporu (SoH) isteyin — %90 üstü olmalı",
            "Geri çağırma yapılmış mı kontrol edin (2019-2020 üretim)",
            "DC hızlı şarj bağlantısını test edin"
        ]
    }
];
