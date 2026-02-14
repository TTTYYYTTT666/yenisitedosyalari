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
        totalIssues: 5,
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
                repairCost: "1.500 - 4.000 TL (Yazılım)"
            },
            {
                id: "i20-5",
                title: "Trim Sesleri",
                description: "Sert plastik aksamdan gelen çıtırtı sesleri (B sütunu ve kapılar).",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "1.000 - 3.000 TL (Yalıtım)"
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
        totalIssues: 5,
        searchCount: 11000,
        issues: [
            {
                id: "tucson-1",
                title: "GPF (Benzin Partikül Filtresi) Tıkanması",
                description: "Kısa mesafe kullanımda egzoz filtresinin dolması ve 'Sürüşe Devam Edin' uyarısı.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Şehir içi kullanım",
                repairCost: "5.000 - 15.000 TL (Egzoz/DPF)"
            },
            {
                id: "tucson-3",
                title: "DCT Şanzıman Isınması",
                description: "Yoğun trafikte dur-kalk yaparken şanzıman sıcaklık uyarısı ve silkeleme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "Sıkışık Trafik",
                repairCost: "0 TL (Karakteristik)"
            },
            {
                id: "tucson-2",
                title: "Multimedya Ekran Reset",
                description: "Sürüş esnasında ekranın kendiliğinden kapanıp açılması veya donması.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "1.500 - 4.000 TL (Yazılım)"
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
                repairCost: "2.000 - 5.000 TL (Yağ)"
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
        totalIssues: 4,
        searchCount: 6000,
        issues: [
            {
                id: "i10-1",
                title: "AMT Şanzıman Sarsıntısı",
                description: "Yarı otomatik şanzımanın vites geçişlerinde kararsızlık, silkeleme ve ısınma.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "Karakteristik",
                repairCost: "1.500 - 4.000 TL (Yazılım)"
            },
            {
                id: "i10-2",
                title: "Direksiyon Kolonu Sesi",
                description: "Direksiyon çevirirken gelen tıkırtı sesi (EPS motoru veya mafsal).",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "30.000+ km",
                repairCost: "0 TL (Garanti Kapsamı)"
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
                repairCost: "4.000 - 8.000 TL (Şanzıman Yağı)"
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
        totalIssues: 5,
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
                repairCost: "0 TL (Garanti Kapsamı)"
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
                repairCost: "3.000 - 6.000 TL (Yağ Değişimi)"
            },
            {
                id: "bayon-5",
                title: "Multimedya Donması",
                description: "Kablosuz bağlantıda kopmalar ve ekranın siyah olması.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "1.500 - 4.000 TL (Yazılım)"
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
        totalIssues: 5,
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
                repairCost: "2.000 - 5.000 TL (Yağ)"
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
                repairCost: "0 TL (Karakteristik)"
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
        totalIssues: 4,
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
            },
            {
                id: "i20-1-4-mpi-auto-2",
                title: "Yağ Eksiltme",
                description: "Motor yağının servis aralarında eksilmesi. Düzenli kontrol şart.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "Segman / 5.000 - 15.000 TL"
            },
            {
                id: "i20-1-4-mpi-auto-3",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
            },
            {
                id: "i20-1-4-mpi-auto-4",
                title: "Süspansiyon Burcu Aşınması",
                description: "Ön/arka süspansiyon burçlarının aşınması. Kasiste vuruntu sesi.",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "60.000+ km",
                repairCost: "2.000 - 5.000 TL"
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
        totalIssues: 4,
        searchCount: 38000,
        issues: [
            {
                id: "tucson-2",
                title: "GPF Tıkanıklığı",
                description: "Benzin partikül filtresi uyarısı (Kısa mesafe kullanımı).",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Şehir içi",
                repairCost: "0 TL (Garanti Kapsamı)"
            },
            {
                id: "tucson-1",
                title: "DCT Isınma",
                description: "Yoğun trafikte şanzıman ısınma uyarısı.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "Trafik",
                repairCost: "2.000 - 5.000 TL"
            },
            {
                id: "tucson-1-6-tgdi-auto-3",
                title: "Yağ Eksiltme",
                description: "Motor yağının servis aralarında eksilmesi. Düzenli kontrol şart.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "Segman / 5.000 - 15.000 TL"
            },
            {
                id: "tucson-1-6-tgdi-auto-4",
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
        totalIssues: 5,
        searchCount: 19000,
        issues: [
            {
                id: "accent-1",
                title: "DCT Isınması",
                description: "Dur-kalk trafikte şanzıman ısınma uyarısı.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "Yoğun Trafik",
                repairCost: "2.000 - 5.000 TL"
            },
            {
                id: "accent-2",
                title: "Direksiyon Soyulması",
                description: "Deri direksiyonun erkenden dökülmesi.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "50.000+ km",
                repairCost: "5.000 - 15.000 TL (Kaplama)"
            },
            {
                id: "accent-3",
                title: "Amortisör Sesi",
                description: "Arka amortisörlerin ses yapması.",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "80.000+ km",
                repairCost: "3.000 - 6.000 TL"
            },
            {
                id: "accent-blue-1-6-crdi-auto-4",
                title: "DPF Tıkanması",
                description: "Şehir içi kısa mesafe kullanımda DPF filtresinin dolması.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Şehir içi kullanım",
                repairCost: "5.000 - 12.000 TL"
            },
            {
                id: "accent-blue-1-6-crdi-auto-5",
                title: "DCT Kavrama Titremesi",
                description: "Çift kavramalı şanzımanda düşük hızlarda titreşim.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "40.000+ km",
                repairCost: "10.000 - 25.000 TL"
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
        totalIssues: 4,
        searchCount: 9000,
        issues: [
            {
                id: "kona-1",
                title: "DCT Isınma",
                description: "Sıkışık trafikte şanzıman ısınma uyarısı.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "Trafikte",
                repairCost: "0 TL (Karakteristik)"
            },
            {
                id: "kona-1-0-tgdi-auto-2",
                title: "Yağ Eksiltme",
                description: "Motor yağının servis aralarında eksilmesi. Düzenli kontrol şart.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "Segman / 5.000 - 15.000 TL"
            },
            {
                id: "kona-1-0-tgdi-auto-3",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
            },
            {
                id: "kona-1-0-tgdi-auto-4",
                title: "Süspansiyon Burcu Aşınması",
                description: "Ön/arka süspansiyon burçlarının aşınması. Kasiste vuruntu sesi.",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "60.000+ km",
                repairCost: "2.000 - 5.000 TL"
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
        totalIssues: 5,
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
                repairCost: "5.000 - 15.000 TL (Kaplama)"
            },
            {
                id: "ix35-3",
                title: "Koltuk Isıtma",
                description: "Sürücü koltuk ısıtma rezistansının kopması.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "2.000 - 4.000 TL"
            },
            {
                id: "ix35-1-6-gdi-auto-4",
                title: "Yağ Eksiltme",
                description: "Motor yağının servis aralarında eksilmesi. Düzenli kontrol şart.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "Segman / 5.000 - 15.000 TL"
            },
            {
                id: "ix35-1-6-gdi-auto-5",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
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
        totalIssues: 4,
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
            },
            {
                id: "i20-troy-1-4-auto-3",
                title: "Yağ Eksiltme",
                description: "Motor yağının servis aralarında eksilmesi. Düzenli kontrol şart.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "Segman / 5.000 - 15.000 TL"
            },
            {
                id: "i20-troy-1-4-auto-4",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
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
        totalIssues: 4,
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
                repairCost: "1.500 - 4.000 TL (Yazılım)"
            },
            {
                id: "kona-1-6-tgdi-auto-3",
                title: "Yağ Eksiltme",
                description: "Motor yağının servis aralarında eksilmesi. Düzenli kontrol şart.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "Segman / 5.000 - 15.000 TL"
            },
            {
                id: "kona-1-6-tgdi-auto-4",
                title: "DCT Kavrama Titremesi",
                description: "Çift kavramalı şanzımanda düşük hızlarda titreşim.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "40.000+ km",
                repairCost: "10.000 - 25.000 TL"
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
                repairCost: "0 TL (Karakteristik)"
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
                repairCost: "0 TL (Karakteristik)"
            },
            {
                id: "kona-ev-4",
                title: "Rejeneratif Fren Gıcırtısı",
                description: "Mekanik fren disklerinin az kullanılması nedeniyle paslanması ve ilk baskılarda gıcırtı sesi.",
                category: "fren",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "3.000 - 7.000 TL (Fren)"
            },
            {
                id: "kona-ev-5",
                title: "Batarya Geri Çağırma (İlk Üretim)",
                description: "2019-2020 üretim araçlarda batarya yangın riski nedeniyle geri çağırma yapıldı. Batarya değişimi ücretsiz.",
                category: "elektronik",
                riskLevel: "CRITICAL",
                affectedKm: "2019-2020 Üretim",
                repairCost: "0 TL (Garanti Kapsamı)"
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
,

    // ─── Eski new-cars dosyasından taşındı ───
    {
        id: "hyundai-accent-era-1-5-crdi",
        slug: "hyundai-accent-era-1-5-crdi",
        brand: "Hyundai",
        model: "Accent",
        variant: "Era 1.5 CRDi",
        years: "2006-2012",
        generation: "MC",
        price: 280000,
        reliabilityScore: 73,
        totalIssues: 6,
        searchCount: 9000,
        expertNote: "Accent Era taksi, kurye ve öğrenci aracı olarak milyonlarca satıldı. 1.5 CRDi motor dayanıklı ama enjektörler ve turbo yüksek km'de sorun çıkarır. Debriyaj basık değilse sağlam araçtır.",
        issues: [
            { id: "aera-1", title: "Enjektör Arızası", description: "1.5 CRDi enjektörlerin tıkanması veya sızıntısı. Rölantide titreşim, güç kaybı, siyah duman.", category: "motor", riskLevel: "HIGH", affectedKm: "100.000+ km", repairCost: "6.000 - 15.000 TL" },
            { id: "aera-2", title: "Turbo Yağ Kaçağı", description: "Turbo yağ keçelerinden sızıntı. Egzozdan mavi duman ve yağ tüketimi artışı.", category: "motor", riskLevel: "HIGH", affectedKm: "120.000+ km", repairCost: "5.000 - 12.000 TL" },
            { id: "aera-3", title: "Debriyaj Balata Aşınması", description: "Trafik yoğun şehirlerde debriyaj balatası hızla aşınır. Kavrama kaçırma ve sert vites geçişleri.", category: "sanziman", riskLevel: "MEDIUM", affectedKm: "60.000 - 80.000 km", repairCost: "4.000 - 8.000 TL" },
            { id: "aera-4", title: "Ön Rot ve Rotil Aşınması", description: "Ön rot başları ve rotillerin erken aşınması. Direksiyon boşluğu, titreşim.", category: "suspansiyon", riskLevel: "MEDIUM", affectedKm: "40.000+ km", repairCost: "1.500 - 3.000 TL" },
            { id: "aera-5", title: "Egzoz Manifoldu Çatlağı", description: "Egzoz manifoldunda çatlama. Metal ses ve egzoz gürültüsü artışı.", category: "motor", riskLevel: "LOW", affectedKm: "100.000+ km", repairCost: "2.000 - 4.000 TL" },
            { id: "aera-6", title: "Silecek Motor Arızası", description: "Ön silecek motorunun zayıflaması veya durması. Yağmurda tehlikeli.", category: "elektronik", riskLevel: "LOW", affectedKm: "Yaş kaynaklı", repairCost: "1.000 - 2.500 TL" }
        ],
        pros: ["Çok ucuz bakım", "Dayanıklı motor", "Bol yedek parça", "Düşük alım fiyatı"],
        cons: ["İç mekan kalitesi çok düşük", "Gürültü yalıtımı yok denecek kadar az", "Güvenlik donanımı minimal"],
        buyingTips: ["Enjektör sesi dinleyin", "Egzozdan duman rengi kontrol edin", "Debriyaj kaçını test edin"]
    }
,

    // ─── Eski new-cars dosyasından taşındı ───
    {
        id: "hyundai-getz-1-5-crdi",
        slug: "hyundai-getz-1-5-crdi",
        brand: "Hyundai",
        model: "Getz",
        variant: "1.5 CRDi",
        years: "2005-2011",
        generation: "TB",
        price: 220000,
        reliabilityScore: 73,
        totalIssues: 5,
        searchCount: 8000,
        expertNote: "Getz öğrenci ve kadın sürücülerin favorisiydi. 1.5 CRDi motor güvenilir ve ekonomik. Küçük ama pratik. Yüksek km'de enjektör ve turbo sorun çıkarır ama bakımı ucuz.",
        issues: [
            { id: "getz-1", title: "Enjektör Arızası", description: "1.5 CRDi enjektörlerin yüksek km'de tıkanması. Rölantide titreşim ve duman.", category: "motor", riskLevel: "HIGH", affectedKm: "120.000+ km", repairCost: "5.000 - 12.000 TL" },
            { id: "getz-2", title: "Turbo Yağ Kaçağı", description: "Turbo yağ keçelerinden sızıntı. Mavi egzoz dumanı.", category: "motor", riskLevel: "MEDIUM", affectedKm: "100.000+ km", repairCost: "4.000 - 8.000 TL" },
            { id: "getz-3", title: "Ön Rot ve Rotil", description: "Ön rot başları ve rotillerin erken aşınması.", category: "suspansiyon", riskLevel: "LOW", affectedKm: "40.000+ km", repairCost: "1.000 - 2.000 TL" },
            { id: "getz-4", title: "Silecek Motoru Zayıflaması", description: "Ön silecek motorunun zayıflaması veya durması.", category: "elektronik", riskLevel: "LOW", affectedKm: "Yaş kaynaklı", repairCost: "1.000 - 2.000 TL" },
            { id: "getz-5", title: "Kapı Menteşe Sarkması", description: "Kapı menteşelerinin aşınması nedeniyle kapı sarkması ve kapanmama.", category: "govde", riskLevel: "LOW", affectedKm: "Yaş kaynaklı", repairCost: "500 - 1.500 TL" }
        ],
        pros: ["Çok ucuz bakım", "Küçük ve pratik", "Ekonomik dizel", "Şehir içi ideal"],
        cons: ["Çok küçük kabin", "Güvenlik düşük", "Otoyolda yetersiz"],
        buyingTips: ["Enjektör sesi dinleyin", "Egzozdan duman kontrolü", "Yaş kaynaklı pas kontrolü"]
    }
,

    // ─── Eski new-cars dosyasından taşındı ───
    {
        id: "hyundai-santafe-2-2-crdi",
        slug: "hyundai-santafe-2-2-crdi",
        brand: "Hyundai",
        model: "Santa Fe",
        variant: "2.2 CRDi",
        years: "2019-2024",
        generation: "TM",
        price: 2500000,
        reliabilityScore: 79,
        totalIssues: 6,
        searchCount: 8000,
        expertNote: "Santa Fe 2.2 CRDi güçlü bir motordur ama bu motorun enjektörleri ve DPF sistemi hassastır. 8 ileri otomatik şanzıman çok kaliteli. 4x4 sistemi olmayanlar SUV görünümlü otomobildir.",
        issues: [
            { id: "santafe-1", title: "Dizel Enjektör Arızası", description: "2.2 CRDi motorun piezo enjektörlerinin arızalanması. Hızlanmada tereddüt, titreme ve beyaz/siyah duman. Kötü yakıt kullanımı ömrü kısaltır.", category: "motor", riskLevel: "HIGH", affectedKm: "80.000 - 120.000 km", repairCost: "20.000 - 40.000 TL" },
            { id: "santafe-2", title: "DPF Tıkanması ve Rejenerasyon", description: "Şehir içi kullanımda partikül filtresi dolması. Zorlanmış rejenerasyon uyarısı ve güç kaybı. Uzun yol yapılması veya servis müdahalesi gerekir.", category: "motor", riskLevel: "HIGH", affectedKm: "50.000+ km (Şehir içi)", repairCost: "10.000 - 25.000 TL" },
            { id: "santafe-3", title: "Transfer Case Arızası (4WD)", description: "4x4 transfer kutusu aktüatörünün arızalanması. 4WD modları arasında geçiş yapılamaması veya hata vermesi.", category: "sanziman", riskLevel: "MEDIUM", affectedKm: "80.000+ km", repairCost: "15.000 - 30.000 TL" },
            { id: "santafe-4", title: "Elektrikli Bagaj Kapağı Arızası", description: "Elektrikli bagaj kapağı motorunun veya sensörünün bozulması. Kapak yarıda kalabilir veya kapatma işlevi çalışmayabilir.", category: "elektronik", riskLevel: "LOW", affectedKm: "50.000+ km", repairCost: "5.000 - 10.000 TL" },
            { id: "santafe-5", title: "Ön Amortisör Takozu Sesi", description: "Kasis geçişlerinde ve direksiyon çevirirken ön takımdan gelen 'gıcırtı' sesi. Amortisör üst takozu ve rulman değişimi gerekir.", category: "suspansiyon", riskLevel: "LOW", affectedKm: "40.000+ km", repairCost: "4.000 - 8.000 TL" },
            { id: "santafe-6", title: "Cam Tavan Motor/Ray Arızası", description: "Panoramik cam tavan motorunun sıkışması veya rayların aşınması. Tavan açılıp kapanmayabilir veya sıkışabilir.", category: "govde", riskLevel: "LOW", affectedKm: "60.000+ km", repairCost: "8.000 - 15.000 TL" }
        ],
        pros: ["Güçlü 2.2 CRDi motor (200hp)", "8 ileri şanzıman kalitesi", "Geniş 7 kişilik opsiyon", "Zengin donanım"],
        cons: ["Enjektör masrafı yüksek", "DPF bakımı gerektirir", "Yüksek satın alma fiyatı"],
        buyingTips: ["Enjektör sesi dinleyin (Vuruntu var mı?)", "DPF doluluk oranını taratın", "4WD modlarını test edin"]
    }
,
    {
            "id": "hyundai-tucson-nx4-1-6-tgdi",
            "slug": "hyundai-tucson-nx4-1-6-tgdi",
            "brand": "Hyundai",
            "model": "Tucson (NX4)",
            "variant": "1.6 T-GDI 4x4 DCT",
            "years": "2021-2025",
            "generation": "NX4",
            "price": 2200000,
            "expertNote": "Smartstream G1.6 T-GDI 180 HP + 7DCT. Yeni nesil Tucson cesur tasarımıyla dikkat çekiyor. Parametrik gizli farlar ve geniş iç mekan. DCT şanzıman hassas olabilir.",
            "reliabilityScore": 80,
            "totalIssues": 5,
            "searchCount": 20000,
            "issues": [
                    {
                            "id": "nx4-1",
                            "title": "DCT Titremesi",
                            "description": "7 ileri DCT şanzımanda düşük devirde titreme ve sarsıntı.",
                            "category": "sanziman",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "30.000+ km",
                            "repairCost": "15.000 - 30.000 TL"
                    },
                    {
                            "id": "nx4-2",
                            "title": "Turbo Lag",
                            "description": "Düşük devirlerde belirgin turbo gecikmesi.",
                            "category": "motor",
                            "riskLevel": "LOW",
                            "affectedKm": "Karakteristik",
                            "repairCost": "0 TL (Karakteristik)"
                    },
                    {
                            "id": "nx4-3",
                            "title": "12V Akü Boşalma",
                            "description": "Start-stop sisteminin aküyü hızla tüketmesi.",
                            "category": "elektronik",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Rastgele",
                            "repairCost": "3.000 - 5.000 TL"
                    },
                    {
                            "id": "nx4-4",
                            "title": "Panoramik Tavan Sesi",
                            "description": "Panoramik cam tavandan kasis geçişlerinde ses.",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "Bozuk yollar",
                            "repairCost": "500 - 2.000 TL (Fitil)"
                    },
                    {
                            "id": "nx4-5",
                            "title": "Navigasyon Donması",
                            "description": "10.25 inç ekranın donması ve yeniden başlaması.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Rastgele",
                            "repairCost": "1.500 - 4.000 TL (Yazılım)"
                    }
            ],
            "pros": [
                    "Cesur tasarım",
                    "Geniş iç mekan",
                    "4x4 güvenliği",
                    "Teknoloji paketi"
            ],
            "cons": [
                    "DCT hassasiyeti",
                    "Turbo lag",
                    "Parça fiyatları yükseliyor"
            ],
            "buyingTips": [
                    "DCT'yi trafikte test edin",
                    "Panoramik tavan fitillerini kontrol edin",
                    "Elite donanım tercih edin"
            ]
    }
,
    {
            "id": "hyundai-i30-1-6-crdi",
            "slug": "hyundai-i30-1-6-crdi",
            "brand": "Hyundai",
            "model": "i30 (GD)",
            "variant": "1.6 CRDi DCT Elite",
            "years": "2012-2017",
            "generation": "GD",
            "price": 650000,
            "expertNote": "U2 1.6 CRDi 136 HP + 7DCT. Kore'nin Golf'e cevabı. Türkiye'de uygun fiyata kaliteli C segment arayanlara ideal. DCT şanzıman hassas ama motor sağlam.",
            "reliabilityScore": 79,
            "totalIssues": 5,
            "searchCount": 12000,
            "issues": [
                    {
                            "id": "i30gd-1",
                            "title": "DCT Kavrama Titremesi",
                            "description": "7DCT şanzımanda düşük hızlarda titreme. Kavrama seti aşınması.",
                            "category": "sanziman",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "60.000+ km",
                            "repairCost": "12.000 - 22.000 TL"
                    },
                    {
                            "id": "i30gd-2",
                            "title": "EGR Karbon Birikimi",
                            "description": "EGR valfinde kurum birikimi. Motor performans kaybı.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "80.000+ km",
                            "repairCost": "3.000 - 8.000 TL"
                    },
                    {
                            "id": "i30gd-3",
                            "title": "Direksiyon Kolon Sesi",
                            "description": "Direksiyon çevirirken gıcırtı sesi.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "50.000+ km",
                            "repairCost": "2.000 - 4.000 TL"
                    },
                    {
                            "id": "i30gd-4",
                            "title": "Klima Kompresörü",
                            "description": "Klima kompresörü kavramasının aşınması.",
                            "category": "elektronik",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "80.000+ km",
                            "repairCost": "5.000 - 10.000 TL"
                    },
                    {
                            "id": "i30gd-5",
                            "title": "Arka Fren Diski Eğrilmesi",
                            "description": "Arka fren disklerinin erken eğrilmesi. Frende titreşim.",
                            "category": "fren",
                            "riskLevel": "LOW",
                            "affectedKm": "40.000+ km",
                            "repairCost": "2.000 - 4.000 TL"
                    }
            ],
            "pros": [
                    "Uygun fiyat",
                    "Geniş iç mekan",
                    "Güvenlik donanımları",
                    "5 yıl garanti"
            ],
            "cons": [
                    "DCT hassasiyeti",
                    "Marka algısı",
                    "İkinci el değer kaybı"
            ],
            "buyingTips": [
                    "DCT titremesi var mı test edin",
                    "EGR temizliği yapılmış mı sorun",
                    "Elite donanım tercih edin"
            ]
    }
,
    {
            "id": "hyundai-i20-n-line",
            "slug": "hyundai-i20-n-line-1-0-tgdi",
            "brand": "Hyundai",
            "model": "i20 (BC3)",
            "variant": "1.0 T-GDI 48V N Line DCT",
            "years": "2020-2025",
            "generation": "BC3",
            "price": 1100000,
            "expertNote": "Kappa 1.0 T-GDI 100 HP + 48V mild hybrid + 7DCT. Yeni nesil i20 çok agresif tasarıma sahip. N Line versiyonu sportif görünüm sunuyor. DCT şanzıman ve 48V sistem modern.",
            "reliabilityScore": 81,
            "totalIssues": 5,
            "searchCount": 14000,
            "issues": [
                    {
                            "id": "i20n-1",
                            "title": "DCT Titremesi",
                            "description": "7DCT şanzımanda düşük hızlarda hafif titreme.",
                            "category": "sanziman",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "30.000+ km",
                            "repairCost": "10.000 - 22.000 TL"
                    },
                    {
                            "id": "i20n-2",
                            "title": "48V Sistem",
                            "description": "Mild hybrid 48V sisteminin devre dışı kalması.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Rastgele",
                            "repairCost": "1.500 - 4.000 TL (Yazılım)"
                    },
                    {
                            "id": "i20n-3",
                            "title": "Turbo Lag",
                            "description": "1.0 turbo düşük devirde gecikme.",
                            "category": "motor",
                            "riskLevel": "LOW",
                            "affectedKm": "Karakteristik",
                            "repairCost": "0 TL (Karakteristik)"
                    },
                    {
                            "id": "i20n-4",
                            "title": "Arka Süspansiyon",
                            "description": "Arka torsion bar süspansiyonda kasiste sertlik.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "Bozuk yollar",
                            "repairCost": "0 TL (Karakteristik)"
                    },
                    {
                            "id": "i20n-5",
                            "title": "Bağlantı Sorunları",
                            "description": "Bluelink bağlantı kopmaları.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Rastgele",
                            "repairCost": "1.500 - 4.000 TL (Yazılım)"
                    }
            ],
            "pros": [
                    "Agresif tasarım",
                    "N Line sportif",
                    "48V mild hybrid",
                    "Modern teknoloji"
            ],
            "cons": [
                    "DCT hassasiyeti",
                    "1.0 motor otoyolda yetersiz",
                    "Arka alan dar"
            ],
            "buyingTips": [
                    "DCT trafikte test edin",
                    "N Line alın",
                    "SmartSense paket şart"
            ]
    }
,
    {
            "id": "hyundai-accent-blue-1-4",
            "slug": "hyundai-accent-blue-1-4-cvvt",
            "brand": "Hyundai",
            "model": "Accent Blue (RB)",
            "variant": "1.4 CVVT Mode Plus",
            "years": "2011-2018",
            "generation": "RB",
            "price": 450000,
            "expertNote": "Gamma 1.4 CVVT 100 HP + 6AT. Accent Blue TR'de çok satılan B sedan. Motor doğal emişli ve çok güvenilir. 6AT sorunsuz. Ucuz bakım ve düşük yakıt.",
            "reliabilityScore": 83,
            "totalIssues": 5,
            "searchCount": 16000,
            "issues": [
                    {
                            "id": "ab14-1",
                            "title": "Direksiyon Pompası",
                            "description": "Elektrikli direksiyon pompasından vızıltı sesi.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "60.000+ km",
                            "repairCost": "3.000 - 6.000 TL"
                    },
                    {
                            "id": "ab14-2",
                            "title": "Klima Kompresörü",
                            "description": "Klima kompresörü kavrama arızası.",
                            "category": "elektronik",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "80.000+ km",
                            "repairCost": "4.000 - 8.000 TL"
                    },
                    {
                            "id": "ab14-3",
                            "title": "Arka Fren Kampana",
                            "description": "Arka kampanalı fren aşınması.",
                            "category": "fren",
                            "riskLevel": "LOW",
                            "affectedKm": "40.000+ km",
                            "repairCost": "1.000 - 2.000 TL"
                    },
                    {
                            "id": "ab14-4",
                            "title": "Cam Fitili Sesi",
                            "description": "Kapı cam fitillerinin sertleşmesi. Rüzgar sesi.",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "1.000 - 2.000 TL"
                    },
                    {
                            "id": "ab14-5",
                            "title": "Otomatik Vites Sarsıntısı",
                            "description": "6AT soğukta hafif sert vites geçişi.",
                            "category": "sanziman",
                            "riskLevel": "LOW",
                            "affectedKm": "Soğuk hava",
                            "repairCost": "3.000 - 6.000 TL (Yağ Değişimi)"
                    }
            ],
            "pros": [
                    "Çok güvenilir motor",
                    "Ucuz bakım",
                    "6AT sorunsuz",
                    "Düşük yakıt"
            ],
            "cons": [
                    "Tasarımı sade",
                    "İç mekan plastik",
                    "Performans düşük"
            ],
            "buyingTips": [
                    "Otomatik alın sorunsuz",
                    "Mode Plus donanım yeterli",
                    "Klima kontrolü"
            ]
    }
,
    {
            "id": "hyundai-accent-lc-1-5-crdi",
            "slug": "hyundai-accent-lc-1-5-crdi-admire",
            "brand": "Hyundai",
            "model": "Accent",
            "variant": "LC 1.5 CRDi Admire",
            "years": "1999-2005",
            "generation": "LC",
            "price": 110000,
            "expertNote": "D3EA 1.5 CRDi 82 HP. Accent LC Türkiye'de çok satılan ekonomik sedan. CRDi dizel motor güvenilir ve ekonomik. Admire donanım yeterli.",
            "reliabilityScore": 72,
            "totalIssues": 5,
            "searchCount": 14000,
            "issues": [
                    {
                            "id": "alc-1",
                            "title": "Turbo Arızası",
                            "description": "Turbo yağ kaçağı ve arızası.",
                            "category": "motor",
                            "riskLevel": "HIGH",
                            "affectedKm": "100.000+ km",
                            "repairCost": "3.000 - 6.000 TL"
                    },
                    {
                            "id": "alc-2",
                            "title": "Enjektör Tıkanması",
                            "description": "CRDi enjektörlerin tıkanması.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "120.000+ km",
                            "repairCost": "3.000 - 8.000 TL"
                    },
                    {
                            "id": "alc-3",
                            "title": "Kaporta Pası",
                            "description": "Kapı altları ve çamurluk paslanması.",
                            "category": "govde",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "5.000 - 15.000 TL (Boya/Kaynak)"
                    },
                    {
                            "id": "alc-4",
                            "title": "Ön Süspansiyon",
                            "description": "Ön amortisör ve rotil aşınması.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "40.000+ km",
                            "repairCost": "500 - 1.500 TL"
                    },
                    {
                            "id": "alc-5",
                            "title": "Elektrik Tesisatı",
                            "description": "Elektrik sorunları (cam kaldırma, merkezi kilit).",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "500 - 1.500 TL"
                    }
            ],
            "pros": [
                    "Ekonomik dizel",
                    "Ucuz araç",
                    "Basit mekanik",
                    "Yedek parça ucuz"
            ],
            "cons": [
                    "Turbo riski",
                    "Düşük kalite hissi",
                    "Gürültülü",
                    "Güvenlik düşük"
            ],
            "buyingTips": [
                    "CRDi motor ekonomik",
                    "Turbo kontrolü şart",
                    "Admire donanım yeterli",
                    "Ex-ticari mi kontrol edin"
            ]
    }
,
    {
            "id": "hyundai-elantra-xd-1-6",
            "slug": "hyundai-elantra-xd-1-6-gl",
            "brand": "Hyundai",
            "model": "Elantra",
            "variant": "XD 1.6 GL",
            "years": "2000-2006",
            "generation": "XD",
            "price": 120000,
            "expertNote": "G4ED 1.6 107 HP. Elantra XD Hyundai'nin C segment sedan aracı. Motor güvenilir, fiyat avantajlı. GL donanım standart. Türkiye'de ticari kullanım çok.",
            "reliabilityScore": 72,
            "totalIssues": 5,
            "searchCount": 10000,
            "issues": [
                    {
                            "id": "exd-1",
                            "title": "Motor Conta",
                            "description": "Silindir kapağı contası atma riski.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "120.000+ km",
                            "repairCost": "2.000 - 4.000 TL"
                    },
                    {
                            "id": "exd-2",
                            "title": "Otomatik Şanzıman",
                            "description": "4 vitesli otomatik şanzıman kayması.",
                            "category": "sanziman",
                            "riskLevel": "HIGH",
                            "affectedKm": "150.000+ km",
                            "repairCost": "5.000 - 10.000 TL"
                    },
                    {
                            "id": "exd-3",
                            "title": "Kaporta Pası",
                            "description": "Paslanma sorunu.",
                            "category": "govde",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "5.000 - 15.000 TL (Boya/Kaynak)"
                    },
                    {
                            "id": "exd-4",
                            "title": "Süspansiyon",
                            "description": "Ön amortisör ve bilyaların aşınması.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "40.000+ km",
                            "repairCost": "500 - 1.500 TL"
                    },
                    {
                            "id": "exd-5",
                            "title": "Elektrik",
                            "description": "Cam kaldırma ve gösterge arızaları.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "300 - 1.000 TL"
                    }
            ],
            "pros": [
                    "Ucuz araç",
                    "Geniş sedan",
                    "Basit mekanik",
                    "Yedek parça ucuz"
            ],
            "cons": [
                    "Düşük kalite hissi",
                    "Otomat riskli",
                    "Pas sorunu",
                    "Değer kaybı"
            ],
            "buyingTips": [
                    "Manuel şanzıman tercih edin",
                    "Conta geçmişi sorulmalı",
                    "GL donanım yeterli",
                    "Ticari kullanılmış mı kontrol"
            ]
    }
,
    {
            "id": "hyundai-i20-1-4-crdi",
            "slug": "hyundai-i20-mk1-1-4-crdi-style",
            "brand": "Hyundai",
            "model": "i20",
            "variant": "Mk1 1.4 CRDi Style",
            "years": "2009-2014",
            "generation": "PB",
            "price": 280000,
            "expertNote": "U-II 1.4 CRDi 75 HP. i20 Mk1 küçük şehir aracı. Ekonomik dizel. 5 yıl garanti ile satıldı. Style donanım klima, ABS, airbag.",
            "reliabilityScore": 74,
            "totalIssues": 5,
            "searchCount": 10000,
            "issues": [
                    {
                            "id": "i20-1",
                            "title": "Turbo",
                            "description": "Turbo aktuatör arızası.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "100.000+ km",
                            "repairCost": "3.000 - 6.000 TL"
                    },
                    {
                            "id": "i20-2",
                            "title": "Enjektör",
                            "description": "CRDi enjektör tıkanması.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "120.000+ km",
                            "repairCost": "3.000 - 8.000 TL"
                    },
                    {
                            "id": "i20-3",
                            "title": "Direksiyon Pompası",
                            "description": "Elektrikli direksiyon arızası.",
                            "category": "suspansiyon",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "80.000+ km",
                            "repairCost": "2.000 - 5.000 TL"
                    },
                    {
                            "id": "i20-4",
                            "title": "Süspansiyon",
                            "description": "Ön amortisör aşınması.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "40.000+ km",
                            "repairCost": "500 - 1.500 TL"
                    },
                    {
                            "id": "i20-5",
                            "title": "Klima",
                            "description": "Klima gazı kaçağı.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "500 - 1.000 TL"
                    }
            ],
            "pros": [
                    "Ekonomik",
                    "5 yıl garanti",
                    "Ucuz bakım",
                    "Şehir aracı"
            ],
            "cons": [
                    "75 HP az",
                    "Küçük araç",
                    "Plastik kalite düşük",
                    "Gürültülü"
            ],
            "buyingTips": [
                    "1.4 CRDi ekonomik",
                    "Style donanım yeterli",
                    "Garanti geçmişi kontrol",
                    "Benzinli 1.4 daha sorunsuz"
            ]
    }
,
    {
            "id": "hyundai-i30-1-6-crdi",
            "slug": "hyundai-i30-mk2-1-6-crdi-elite",
            "brand": "Hyundai",
            "model": "i30",
            "variant": "Mk2 1.6 CRDi Elite",
            "years": "2012-2017",
            "generation": "GD",
            "price": 420000,
            "expertNote": "U-II 1.6 CRDi 128 HP. i30 Mk2 Hyundai'nin C segment aracı. İzmit üretimi. Peter Schreyer tasarımı. Elite donanım 7 inç ekran, deri, panoramik tavan.",
            "reliabilityScore": 76,
            "totalIssues": 5,
            "searchCount": 14000,
            "issues": [
                    {
                            "id": "i30-1",
                            "title": "DCT Şanzıman",
                            "description": "7DCT çift kavrama şanzıman titreşimi.",
                            "category": "sanziman",
                            "riskLevel": "HIGH",
                            "affectedKm": "60.000+ km",
                            "repairCost": "8.000 - 18.000 TL"
                    },
                    {
                            "id": "i30-2",
                            "title": "Turbo",
                            "description": "Turbo aktuatör arızası.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "100.000+ km",
                            "repairCost": "3.000 - 6.000 TL"
                    },
                    {
                            "id": "i30-3",
                            "title": "Enjektör",
                            "description": "CRDi enjektör sorunları.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "120.000+ km",
                            "repairCost": "3.000 - 8.000 TL"
                    },
                    {
                            "id": "i30-4",
                            "title": "Süspansiyon",
                            "description": "Arka süspansiyon burçları.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "50.000+ km",
                            "repairCost": "500 - 1.500 TL"
                    },
                    {
                            "id": "i30-5",
                            "title": "Multimedya",
                            "description": "Multimedya sistemi donması.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Kronik",
                            "repairCost": "500 - 2.000 TL"
                    }
            ],
            "pros": [
                    "İzmit üretimi",
                    "C segment",
                    "Elite donanım zengin",
                    "İyi tasarım"
            ],
            "cons": [
                    "DCT şanzıman riskli",
                    "Dizel bakım pahalı",
                    "Değer kaybı",
                    "Plastik kalite"
            ],
            "buyingTips": [
                    "Manuel şanzıman tercih edin",
                    "DCT'den kaçının",
                    "Elite en iyi donanım",
                    "İzmit üretimi kaliteli"
            ]
    }
,
    {
            "id": "hyundai-tucson-tl-1-6-crdi",
            "slug": "hyundai-tucson-tl-1-6-crdi-elite",
            "brand": "Hyundai",
            "model": "Tucson",
            "variant": "TL 1.6 CRDi Elite",
            "years": "2015-2020",
            "generation": "TL",
            "price": 800000,
            "expertNote": "D4FE 1.6 CRDi 136 HP. Tucson TL SUV trendinin en popüler araçlarından. Elite donanım 8 inç ekran, CarPlay, şerit takip, kör nokta. Güzel tasarım.",
            "reliabilityScore": 76,
            "totalIssues": 5,
            "searchCount": 16000,
            "issues": [
                    {
                            "id": "tuc-1",
                            "title": "DCT Şanzıman",
                            "description": "7DCT çift kavrama şanzıman titreşimi.",
                            "category": "sanziman",
                            "riskLevel": "HIGH",
                            "affectedKm": "60.000+ km",
                            "repairCost": "8.000 - 18.000 TL"
                    },
                    {
                            "id": "tuc-2",
                            "title": "Turbo",
                            "description": "Turbo wastegate arızası.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "100.000+ km",
                            "repairCost": "4.000 - 8.000 TL"
                    },
                    {
                            "id": "tuc-3",
                            "title": "EGR",
                            "description": "EGR valfi tıkanması.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "80.000+ km",
                            "repairCost": "2.000 - 5.000 TL"
                    },
                    {
                            "id": "tuc-4",
                            "title": "Infotainment",
                            "description": "Multimedya donması ve GPS sorunları.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Kronik",
                            "repairCost": "500 - 2.000 TL"
                    },
                    {
                            "id": "tuc-5",
                            "title": "Süspansiyon",
                            "description": "Ön amortisör gıcırtısı.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "40.000+ km",
                            "repairCost": "1.000 - 2.500 TL"
                    }
            ],
            "pros": [
                    "Güzel tasarım",
                    "Elite donanım süper",
                    "C-SUV",
                    "5 yıl garanti"
            ],
            "cons": [
                    "DCT riskli",
                    "Dizel bakım pahalı",
                    "Fiyatı yüksek",
                    "Yakıt tüketimi"
            ],
            "buyingTips": [
                    "Otomatik yerine manuel alın",
                    "DCT kontrolü",
                    "1.6 CRDi yeterli",
                    "Benzinli 1.6 T-GDi daha sorunsuz"
            ]
    }
,
    {
            "id": "hyundai-accent-blue-1-6-crdi",
            "slug": "hyundai-accent-blue-1-6-crdi-mode-plus",
            "brand": "Hyundai",
            "model": "Accent Blue",
            "variant": "1.6 CRDi Mode Plus",
            "years": "2011-2018",
            "generation": "RB",
            "price": 350000,
            "expertNote": "D4FB 1.6 CRDi 128 HP. Accent Blue İzmit üretimi sedan. İç pazar aracı. Mode Plus donanım 7 inç, geri kamera, park sensörü. Ekonomik ve geniş.",
            "reliabilityScore": 74,
            "totalIssues": 5,
            "searchCount": 16000,
            "issues": [
                    {
                            "id": "ab-1",
                            "title": "Turbo",
                            "description": "Turbo aktuatör arızası.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "100.000+ km",
                            "repairCost": "3.000 - 6.000 TL"
                    },
                    {
                            "id": "ab-2",
                            "title": "Enjektör",
                            "description": "CRDi enjektör sorunları.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "120.000+ km",
                            "repairCost": "3.000 - 8.000 TL"
                    },
                    {
                            "id": "ab-3",
                            "title": "DCT",
                            "description": "6DCT çift kavrama şanzıman.",
                            "category": "sanziman",
                            "riskLevel": "HIGH",
                            "affectedKm": "60.000+ km",
                            "repairCost": "8.000 - 18.000 TL"
                    },
                    {
                            "id": "ab-4",
                            "title": "Süspansiyon",
                            "description": "Ön amortisör ve bilyalar.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "40.000+ km",
                            "repairCost": "500 - 1.500 TL"
                    },
                    {
                            "id": "ab-5",
                            "title": "Klima",
                            "description": "Klima kompresörü.",
                            "category": "elektronik",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "100.000+ km",
                            "repairCost": "2.000 - 4.000 TL"
                    }
            ],
            "pros": [
                    "İzmit üretimi",
                    "Ekonomik",
                    "Geniş sedan",
                    "Ucuz bakım"
            ],
            "cons": [
                    "DCT riskli",
                    "Plastik iç mekan",
                    "Değer kaybı",
                    "Gürültü yalıtımı"
            ],
            "buyingTips": [
                    "Manuel şanzıman tercih",
                    "İzmit üretimi kaliteli",
                    "Mode Plus donanım iyi",
                    "Benzinli 1.4 daha güvenilir"
            ]
    }
,
{
  "id": "hyundai-tucson-tl-fl",
  "slug": "hyundai-tucson-tl-facelift-1-6-crdi-elite-plus",
  "brand": "Hyundai",
  "model": "Tucson",
  "variant": "Tucson TL Facelift 1.6 CRDi Elite Plus",
  "years": "2018-2020",
  "generation": "Ara Kasa (2018-2020)",
  "price": 925000,
  "expertNote": "TL facelift'te 7 ileri DCT kaldırılıp 6 ileri torque converter otomatik geldi — DCT Tucson TL'nin en büyük sorunuydu. Kaskad ön ızgara tasarımı, LED farlar ve daha büyük multimedya ekranı eklendi.",
  "reliabilityScore": 72,
  "totalIssues": 4,
  "searchCount": 16800,
  "issues": [
    {
      "id": "hy-ttfl-1",
      "title": "1.6 CRDi Motor Titreşimi (Azalmış)",
      "description": "1.6 CRDi diesel motor titreşimi facelift'te motor takozları iyileştirilerek azaltıldı ama tam çözülmedi. Rölantide hafif titreşim devam edebilir.",
      "category": "motor",
      "riskLevel": "LOW",
      "affectedKm": "Tüm km",
      "repairCost": "0 TL (normal)"
    },
    {
      "id": "hy-ttfl-2",
      "title": "6AT Şanzıman Uyum Sorunu (Nadir)",
      "description": "6AT torque converter, DCT'ye göre çok daha güvenilir. Nadiren soğuk havalarda 1-2 vites arası sert geçiş yapabilir.",
      "category": "sanziman",
      "riskLevel": "LOW",
      "affectedKm": "50.000+ km",
      "repairCost": "0 - 2.000 TL (yazılım)"
    },
    {
      "id": "hy-ttfl-3",
      "title": "Navegasyon Harita Güncellemesi",
      "description": "Yerleşik navigasyon haritaları güncelliayetini yitirebilir. Güncelleme ücreti yüksek olabilir.",
      "category": "elektronik",
      "riskLevel": "LOW",
      "affectedKm": "Tüm km",
      "repairCost": "500 - 2.000 TL"
    },
    {
      "id": "hy-ttfl-4",
      "title": "Arka Süspansiyon Takırtısı",
      "description": "Arka süspansiyon burçları 50-80 bin km'de sertleşip takırtı yapabilir. Pre-facelift'te de olan sorun.",
      "category": "suspansiyon",
      "riskLevel": "LOW",
      "affectedKm": "50.000-80.000 km",
      "repairCost": "2.000 - 4.000 TL"
    }
  ],
  "pros": [
    "DCT KALDIRILDI — en kritik iyileşme",
    "6AT çok daha güvenilir",
    "Modern kaskad ızgara tasarımı",
    "LED farlar standart",
    "Motor titreşimi azaltılmış"
  ],
  "cons": [
    "Diesel motor gürültüsü hâlâ var",
    "Navigasyon güncelleme maliyeti",
    "Arka süspansiyon takırtısı"
  ],
  "buyingTips": [
    "MUTLAKA facelift (2018+) alın — DCT'li pre-facelift'ten kaçının",
    "6AT şanzıman sağlığını test edin",
    "LED far modülleri çalışıyor mu kontrol edin",
    "Pre-facelift TL'ye göre çok daha güvenilir"
  ]
}
];
