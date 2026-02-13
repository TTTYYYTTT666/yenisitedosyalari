import { Car } from '@/types';

export const cheryCars: Car[] = [
    // ═══════════════════════════════════════════════════════
    // OMODA 5
    // ═══════════════════════════════════════════════════════
    {
        id: "chery-omoda-5-2023",
        slug: "chery-omoda-5-1-6-tgdi",
        brand: "Chery",
        model: "Omoda 5",
        variant: "1.6 TGDI Luxury (7DCT)",
        years: "2023-2024",
        generation: "1. Nesil",
        price: 1300000,
        expertNote: "Acteco 1.6 TGDI 187 HP + 7 ileri DCT. Türkiye'de fırtına gibi esen Çin markası. Fütüristik tasarımı ve donanım zenginliğiyle rakiplerini sollayan fiyat/performans şampiyonu. Motor güçlü ama 7DCT şanzıman şehir içinde biraz tereddütlü. Boya kalitesi zayıf — PPF kaplatmadan almayın.",
        reliabilityScore: 80,
        totalIssues: 5,
        searchCount: 95000,
        issues: [
            {
                id: "omoda5-23-1",
                title: "Yüksek Yakıt Tüketimi",
                description: "Şehir içi yoğun trafikte 11-13 litrelere varan benzin tüketimi. 1.6 Turbo motor susuz değil.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Sürekli",
                repairCost: "Yakıt Maliyeti (LPG uyumsuz)"
            },
            {
                id: "omoda5-23-2",
                title: "DCT Şanzıman Kararsızlığı",
                description: "Düşük hızlarda ve dur-kalk trafikte DCT şanzımanın titremesi/silkelemesi. Yokuşta geri kayma hissi.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "Şehir içi kullanım",
                repairCost: "Yazılım / Kalibrasyon"
            },
            {
                id: "omoda5-23-3",
                title: "Ekran Donması / Kararması",
                description: "Multimedya ekranının kilitlenmesi, siyah ekranda kalması. CarPlay kopmaları.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Yazılım Güncellemesi"
            },
            {
                id: "omoda5-23-4",
                title: "Boya Kalitesi Düşük",
                description: "Kaput ve tavanda taş izlerine bağlı boya atması. Avrupa markalarına göre belirgin fark.",
                category: "govde",
                riskLevel: "MEDIUM",
                affectedKm: "İlk km'lerden itibaren",
                repairCost: "PPF Kaplama (15.000-25.000 TL)"
            },
            {
                id: "omoda5-23-5",
                title: "Fren Disk Yamulması",
                description: "Ön fren disklerin erken yamulması ve fren yaparken direksiyonda titreme.",
                category: "fren",
                riskLevel: "MEDIUM",
                affectedKm: "20.000+ km",
                repairCost: "Torna / Disk Değişimi (5.000-10.000 TL)"
            }
        ],
        pros: [
            "Fiyat/Performans lideri",
            "187 HP güçlü motor",
            "Zengin ADAS güvenlik donanımı",
            "Fütüristik tasarım"
        ],
        cons: [
            "Yüksek yakıt tüketimi",
            "DCT şehir içinde tereddütlü",
            "Boya kalitesi düşük",
            "Servis ağı henüz gelişiyor"
        ],
        buyingTips: [
            "PPF kaplama yaptırmadan kullanmayın",
            "DCT şanzımanı trafikte test edin",
            "Ekranın tepki hızını deneyin",
            "Luxury donanımı tercih edin (ADAS paket)"
        ]
    },
    {
        id: "chery-omoda-5-2025",
        slug: "chery-omoda-5-2025-facelift",
        brand: "Chery",
        model: "Omoda 5",
        variant: "1.5 TGDI Facelift (CVT)",
        years: "2025",
        generation: "1. Nesil Facelift",
        price: 1400000,
        expertNote: "Yeni 1.5 TGDI 147 HP + CVT şanzıman. Chery facelift ile motoru ve şanzımanı değiştirdi. DCT yerine CVT geldi — şehir içi konfor arttı ama performans hissi düştü. Tasarım detayları güncellendi.",
        reliabilityScore: 82,
        totalIssues: 5,
        searchCount: 25000,
        issues: [
            {
                id: "omoda5-25-1",
                title: "CVT Uğultusu",
                description: "CVT şanzımanın gaza basıldığında motor devrini yüksek tutması ve uğultu sesi.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Çözümsüz (CVT tasarımı)"
            },
            {
                id: "omoda5-25-2",
                title: "Boya Hassasiyeti",
                description: "Önceki nesille aynı boya kalitesi sorunu devam ediyor.",
                category: "govde",
                riskLevel: "MEDIUM",
                affectedKm: "Sürekli",
                repairCost: "PPF Kaplama (15.000-25.000 TL)"
            },
            {
                id: "omoda5-25-3",
                title: "Multimedya Yazılım Hataları",
                description: "Yeni nesil multimedya sisteminde arayüz donması ve Bluetooth kopma.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Yazılım Güncellemesi"
            },
            {
                id: "omoda-5-2025-facelift-auto-4",
                title: "Yağ Eksiltme",
                description: "Motor yağının servis aralarında eksilmesi. Düzenli kontrol şart.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "Segman / 5.000 - 15.000 TL"
            },
            {
                id: "omoda-5-2025-facelift-auto-5",
                title: "DCT Kavrama Titremesi",
                description: "Çift kavramalı şanzımanda düşük hızlarda titreşim.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "40.000+ km",
                repairCost: "10.000 - 25.000 TL"
            }
        ],
        pros: [
            "CVT ile şehir içi konfor",
            "Güncellenmiş tasarım",
            "Zengin donanım",
            "DCT silkeleme sorunu yok"
        ],
        cons: [
            "CVT performans hissi düşük",
            "Boya kalitesi hâlâ zayıf",
            "1.5 motor eski 1.6'ya göre daha güçsüz"
        ],
        buyingTips: [
            "Trafikte CVT davranışını test edin",
            "Eski 1.6 TGDI versiyonla karşılaştırın — hangisi size uygun?",
            "PPF kaplama yine şart"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // TIGGO 7 PRO
    // ═══════════════════════════════════════════════════════
    {
        id: "chery-tiggo-7-pro",
        slug: "chery-tiggo-7-pro-1-6-tgdi",
        brand: "Chery",
        model: "Tiggo 7 Pro",
        variant: "1.6 TGDI Distinctive (7DCT)",
        years: "2023-2024",
        generation: "1. Nesil",
        price: 1450000,
        expertNote: "Acteco 1.6 TGDI 187 HP + 7 ileri DCT. Omoda 5 ile aynı mekanik ama daha geleneksel SUV tasarımı. Panoramik cam tavan standart. Daha geniş ve ailelere yönelik. DCT ve yakıt sorunları Omoda ile aynı.",
        reliabilityScore: 79,
        totalIssues: 4,
        searchCount: 25000,
        issues: [
            {
                id: "t7pro-1",
                title: "DCT Şanzıman Isınması",
                description: "Yoğun trafikte DCT şanzıman ısınma uyarısı ve vites kararsızlığı.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "Dur-kalk trafik",
                repairCost: "Soğutma bekleme / Yazılım"
            },
            {
                id: "t7pro-2",
                title: "Yüksek Yakıt Tüketimi",
                description: "Şehir içi 11-13 litre arası benzin tüketimi.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Sürekli",
                repairCost: "Yakıt Maliyeti"
            },
            {
                id: "t7pro-3",
                title: "Trim ve Gıcırtı Sesleri",
                description: "Bozuk yollarda B sütunu ve ön konsoldan plastik tıkırtı/gıcırtı sesleri.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Zamanla",
                repairCost: "Yalıtım bantlama"
            },
            {
                id: "t7pro-4",
                title: "Klima Performansı Yetersiz",
                description: "Sıcak yaz günlerinde klimanın soğutma performansının düşük kalması.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Yaz ayları",
                repairCost: "Yazılım Güncelleme / Gaz dolumu"
            }
        ],
        pros: [
            "Panoramik cam tavan",
            "Geniş iç hacim",
            "Fiyat/donanım dengesi",
            "187 HP güçlü motor"
        ],
        cons: [
            "Yakıt tüketimi yüksek",
            "DCT trafikte huzursuz",
            "İkinci el değeri belirsiz",
            "Servis ağı gelişiyor"
        ],
        buyingTips: [
            "DCT şanzımanı yoğun trafikte mutlaka test edin",
            "Ekran ve 360 kamerayı deneyin",
            "Yakıt tüketimini kabul ederek alın"
        ]
    },
    {
        id: "chery-tiggo-7-pro-max",
        slug: "chery-tiggo-7-pro-max-2025",
        brand: "Chery",
        model: "Tiggo 7 Pro Max",
        variant: "1.5 TGDI (CVT)",
        years: "2025",
        generation: "2. Nesil",
        price: 1550000,
        expertNote: "Yeni 1.5 TGDI 147 HP + CVT. Tiggo 7 Pro'nun yenilenen versiyonu. DCT yerine CVT şanzıman geldi. Tasarım modernleşti, iç mekan kalitesi arttı. 'Max' ismiyle yeniden konumlandırıldı.",
        reliabilityScore: 81,
        totalIssues: 5,
        searchCount: 12000,
        issues: [
            {
                id: "t7max-1",
                title: "CVT Motor Uğultusu",
                description: "Hızlanmada CVT şanzımanın motoru yüksek devirde tutması ve uğultu.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Çözümsüz (CVT)"
            },
            {
                id: "t7max-2",
                title: "Boya Hassasiyeti",
                description: "Chery'nin genel boya kalitesi sorunu bu modelde de devam ediyor.",
                category: "govde",
                riskLevel: "MEDIUM",
                affectedKm: "Sürekli",
                repairCost: "PPF Kaplama"
            },
            {
                id: "t7max-3",
                title: "Multimedya Dil Hataları",
                description: "Türkçe arayüzde çeviri hataları ve menü tutarsızlıkları.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "Yazılım Güncellemesi"
            },
            {
                id: "tiggo-7-pro-max-2025-auto-4",
                title: "Yağ Eksiltme",
                description: "Motor yağının servis aralarında eksilmesi. Düzenli kontrol şart.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "Segman / 5.000 - 15.000 TL"
            },
            {
                id: "tiggo-7-pro-max-2025-auto-5",
                title: "DCT Kavrama Titremesi",
                description: "Çift kavramalı şanzımanda düşük hızlarda titreşim.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "40.000+ km",
                repairCost: "10.000 - 25.000 TL"
            }
        ],
        pros: [
            "CVT ile şehir konforu",
            "Yenilenen iç mekan",
            "Panoramik tavan devam",
            "DCT sorunu yok"
        ],
        cons: [
            "CVT performans hissi düşük",
            "1.5 motor 1.6'ya göre güçsüz",
            "Boya kalitesi"
        ],
        buyingTips: [
            "Eski Tiggo 7 Pro ile karşılaştırın",
            "CVT davranışını beğendiğinizden emin olun"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // TIGGO 8 PRO
    // ═══════════════════════════════════════════════════════
    {
        id: "chery-tiggo-8-pro",
        slug: "chery-tiggo-8-pro-1-6-tgdi",
        brand: "Chery",
        model: "Tiggo 8 Pro",
        variant: "1.6 TGDI Excellent (7DCT)",
        years: "2023-2024",
        generation: "1. Nesil",
        price: 1750000,
        expertNote: "Acteco 1.6 TGDI 187 HP + 7 ileri DCT. Chery'nin amiral gemisi. 7 kişilik oturma düzeni ve premium iç mekanıyla D-SUV segmentinde rakipsiz fiyat/donanım. Yakıt tüketimi yüksek, ağır kasa DCT'yi zorluyor. Ama bu fiyata 7 kişilik, panoramik tavanlı, ADAS'lı araç yok.",
        reliabilityScore: 78,
        totalIssues: 5,
        searchCount: 70000,
        issues: [
            {
                id: "t8pro-1",
                title: "Şanzıman Isınma Uyarısı",
                description: "Yoğun Türkiye trafiğinde DCT şanzıman ısınma uyarısı vermesi. Araç molaya zorluyor.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "Dur-kalk trafik",
                repairCost: "Soğutma bekleme"
            },
            {
                id: "t8pro-2",
                title: "Yüksek Yakıt Tüketimi",
                description: "2 tonluk kasa ile şehir içi 12-14 litre yakıt tüketimi.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Sürekli",
                repairCost: "Yakıt Maliyeti"
            },
            {
                id: "t8pro-3",
                title: "Boya Atması / Taş İzi",
                description: "Tampon uçları ve kaputta boya kalkması. Çiziklere karşı hassas.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "İlk km'lerden",
                repairCost: "PPF / Rötuş (Garanti dışı)"
            },
            {
                id: "t8pro-4",
                title: "Multimedya Hataları",
                description: "360 derece kamera sistemi hata vermesi, ekran donması.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Yazılım Güncellemesi"
            },
            {
                id: "t8pro-5",
                title: "Rüzgar Sesi (Yüksek Hız)",
                description: "110+ km/s hızlarda cam fitillerinden belirgin rüzgar sesi.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "110+ km/s",
                repairCost: "Fitil iyileştirmesi"
            }
        ],
        pros: [
            "7 kişilik oturma düzeni",
            "Premium iç mekan kalitesi",
            "Bu fiyata dolu donanım",
            "Büyük bagaj"
        ],
        cons: [
            "Çok yakıyor (12-14L)",
            "DCT ısınma sorunu",
            "Ağır kasa",
            "Boya kalitesi"
        ],
        buyingTips: [
            "Yakıtı dert etmiyorsanız bu fiyata en lüks gemidir",
            "PPF mutlaka kaplatın",
            "3. sıra koltuk mekanizmalarını kontrol edin",
            "Excellent donanımı tercih edin"
        ]
    },
    {
        id: "chery-tiggo-8-pro-max",
        slug: "chery-tiggo-8-pro-max-2025",
        brand: "Chery",
        model: "Tiggo 8 Pro Max",
        variant: "1.5 TGDI (CVT)",
        years: "2025",
        generation: "2. Nesil",
        price: 1900000,
        expertNote: "Yeni 1.5 TGDI 147 HP + CVT. Tiggo 8 Pro'nun Max versiyonu. DCT'den CVT'ye geçiş yapıldı — şehir içi konfor arttı. Tasarım güncellendi ama 2 tonluk kasayla 147 HP biraz zorlanabilir.",
        reliabilityScore: 80,
        totalIssues: 5,
        searchCount: 10000,
        issues: [
            {
                id: "t8max-1",
                title: "CVT + Ağır Kasa Uyumsuzluğu",
                description: "147 HP motor ve CVT kombinasyonu ağır kasayla hızlanmada zorlanma hissi.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Çözümsüz (Tasarım)"
            },
            {
                id: "t8max-2",
                title: "Boya Kalitesi",
                description: "Chery boya kalitesi sorunu bu modelde de devam.",
                category: "govde",
                riskLevel: "MEDIUM",
                affectedKm: "Sürekli",
                repairCost: "PPF Kaplama"
            },
            {
                id: "t8max-3",
                title: "Yazılım Çeviri Hataları",
                description: "Multimedya Türkçe arayüzde çeviri eksiklikleri ve menü tutarsızlıkları.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "Yazılım Güncellemesi"
            },
            {
                id: "tiggo-8-pro-max-2025-auto-4",
                title: "Yağ Eksiltme",
                description: "Motor yağının servis aralarında eksilmesi. Düzenli kontrol şart.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "Segman / 5.000 - 15.000 TL"
            },
            {
                id: "tiggo-8-pro-max-2025-auto-5",
                title: "DCT Kavrama Titremesi",
                description: "Çift kavramalı şanzımanda düşük hızlarda titreşim.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "40.000+ km",
                repairCost: "10.000 - 25.000 TL"
            }
        ],
        pros: [
            "CVT ile şehir konforu (DCT sorunu yok)",
            "7 kişilik düzen korunuyor",
            "Yenilenen tasarım",
            "Daha fazla donanım"
        ],
        cons: [
            "147 HP bu kasaya cılız",
            "Hızlanma performansı düşük",
            "Boya kalitesi"
        ],
        buyingTips: [
            "Test sürüşünde hızlanma performansını mutlaka deneyin",
            "Eski 1.6 TGDI ile güç farkını hissedin",
            "7 kişi bindiğinde yokuşu deneyin"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // TIGGO 4 PRO
    // ═══════════════════════════════════════════════════════
    {
        id: "chery-tiggo-4-pro",
        slug: "chery-tiggo-4-pro",
        brand: "Chery",
        model: "Tiggo 4 Pro",
        variant: "1.5 CVT Distinctive",
        years: "2023-2024",
        generation: "1. Nesil",
        price: 1050000,
        expertNote: "1.5 Aspirasyon 113 HP + CVT. Chery'nin giriş seviye SUV'u. Fiyatına göre inanılmaz donanım: panoramik tavan, 360 kamera, dijital gösterge. CVT şanzıman sakin ama performanssız. Yedek parça bekleme süresi en büyük risk.",
        reliabilityScore: 76,
        totalIssues: 4,
        searchCount: 18000,
        issues: [
            {
                id: "t4pro-1",
                title: "CVT Uğultusu",
                description: "CVT şanzımandan yüksek devirde motor uğultusu. Performans isteyince araç bağırıyor.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Çözümsüz (CVT tasarımı)"
            },
            {
                id: "t4pro-2",
                title: "Yedek Parça Bekleme",
                description: "Kaza durumunda Çin'den yedek parça gelmesi 2-3 ay sürebilir.",
                category: "govde",
                riskLevel: "HIGH",
                affectedKm: "Kaza durumunda",
                repairCost: "Bekleme süresi"
            },
            {
                id: "t4pro-3",
                title: "Boya Kalitesi Düşük",
                description: "Çizilme ve taş çarpması izleri Avrupa markalarına göre çok daha belirgin.",
                category: "govde",
                riskLevel: "MEDIUM",
                affectedKm: "İlk km'lerden",
                repairCost: "Seramik/PPF Kaplama"
            },
            {
                id: "t4pro-4",
                title: "Plastik Trim Sesleri",
                description: "Bozuk yollarda torpido ve kapı panellerinden plastik gıcırtı sesi.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Sıfırdan",
                repairCost: "Yalıtım bantlama"
            }
        ],
        pros: [
            "Fiyatına göre çok zengin donanım",
            "Panoramik tavan + 360 kamera",
            "5 yıl garanti",
            "Geniş iç hacim"
        ],
        cons: [
            "CVT performans hissi yok",
            "Yedek parça bekleme süresi",
            "Boya kalitesi",
            "İkinci el değer kaybı yüksek"
        ],
        buyingTips: [
            "Yetkili servis yakınlığını kontrol edin",
            "5 yıl garantiyi imzalatın",
            "PPF veya seramik kaplama yaptırın",
            "Çin'den gelen parça süresini sorun"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // OMODA 7
    // ═══════════════════════════════════════════════════════
    {
        id: "chery-omoda-7",
        slug: "chery-omoda-7-2025",
        brand: "Chery",
        model: "Omoda 7",
        variant: "1.5 TGDI (CVT)",
        years: "2025",
        generation: "1. Nesil",
        price: 1650000,
        expertNote: "Yeni 1.5 TGDI 147 HP + CVT. Omoda serisinin büyük kardeşi. Tiggo 7 Pro Max ile aynı platformda ama daha modern coupe SUV tasarımıyla. Omoda 5'in büyütülmüş, daha premium versiyonu. Türkiye'ye yeni geldi.",
        reliabilityScore: 80,
        totalIssues: 5,
        searchCount: 8000,
        issues: [
            {
                id: "omoda7-1",
                title: "CVT Hızlanma Hissi",
                description: "CVT şanzımanın hızlanmada motor devrini yüksek tutması ve lastik bant hissi.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Çözümsüz (CVT)"
            },
            {
                id: "omoda7-2",
                title: "Boya Hassasiyeti",
                description: "Chery genelinde devam eden boya kalitesi sorunu.",
                category: "govde",
                riskLevel: "MEDIUM",
                affectedKm: "Sürekli",
                repairCost: "PPF Kaplama"
            },
            {
                id: "omoda7-3",
                title: "Henüz Yeni - Kronikler Belirsiz",
                description: "Araç çok yeni olduğu için uzun vadeli kronik sorunlar henüz ortaya çıkmadı.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Bilinmiyor",
                repairCost: "Takip edilmeli"
            },
            {
                id: "omoda-7-2025-auto-4",
                title: "Yağ Eksiltme",
                description: "Motor yağının servis aralarında eksilmesi. Düzenli kontrol şart.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "Segman / 5.000 - 15.000 TL"
            },
            {
                id: "omoda-7-2025-auto-5",
                title: "CVT Sesi",
                description: "CVT şanzımandan hızlanmada uğultu sesi.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Normal (Tasarım)"
            }
        ],
        pros: [
            "Modern coupe SUV tasarımı",
            "Omoda 5'ten büyük iç hacim",
            "Zengin donanım paketi",
            "Rekabetçi fiyat"
        ],
        cons: [
            "Henüz çok yeni (kronikler belirsiz)",
            "CVT performans hissi düşük",
            "Boya kalitesi",
            "Servis ağı hâlâ gelişiyor"
        ],
        buyingTips: [
            "İlk parti araçlarda üretim kalite kontrol raporunu sorun",
            "Omoda 5 ve Tiggo 7 Pro Max ile karşılaştırın",
            "Garanti kapsamını detaylıca okuyun"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // TIGGO 8 PRO e+  (PHEV)
    // ═══════════════════════════════════════════════════════
    {
        id: "chery-tiggo-8-pro-e-plus",
        slug: "chery-tiggo-8-pro-e-plus-phev",
        brand: "Chery",
        model: "Tiggo 8 Pro e+",
        variant: "1.5 TGDI PHEV",
        years: "2024-2025",
        generation: "PHEV",
        price: 1850000,
        expertNote: "1.5 TGDI + Elektrik motor PHEV. Tiggo 8 Pro'nun plug-in hibrit versiyonu. ÖTV avantajıyla dikkat çekti. Elektrikli menzil ~80 km. Şarjsız kullanılırsa çok yakar. 7 kişilik devam.",
        reliabilityScore: 77,
        totalIssues: 5,
        searchCount: 12000,
        issues: [
            {
                id: "t8phev-1",
                title: "Şarj Altyapı Uyumsuzluğu",
                description: "Bazı AC şarj istasyonlarıyla uyumsuzluk ve şarj kesilmesi.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Şarj istasyonuna bağlı",
                repairCost: "Yazılım / İstasyon değiştirme"
            },
            {
                id: "t8phev-2",
                title: "Kış Menzil Düşüşü",
                description: "Soğuk havalarda elektrik menzilinin 80 km'den 50 km'ye düşmesi.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Kış ayları",
                repairCost: "Çözümsüz (PHEV karakteri)"
            },
            {
                id: "t8phev-3",
                title: "Benzin + Elektrik Geçiş Sarsıntısı",
                description: "Benzin motordan elektrik motora geçişte hissedilen sarsıntı.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Yazılım kalibrasyon"
            },
            {
                id: "tiggo-8-pro-e-plus-phev-auto-4",
                title: "12V Akü Boşalması",
                description: "Hibrit sistemin 12V yardımcı aküyü hızla tüketmesi. Araç yatabilir.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "2.500 - 5.000 TL"
            },
            {
                id: "tiggo-8-pro-e-plus-phev-auto-5",
                title: "Rejeneratif Fren Hissi",
                description: "Rejeneratif frenlemenin suni ve alışılmadık hissettirmesi.",
                category: "fren",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Normal (Tasarım)"
            }
        ],
        pros: [
            "ÖTV avantajıyla uygun fiyat",
            "~80 km elektrik menzili",
            "7 kişilik aile aracı",
            "Düşük yakıt (şarjla kullanılırsa)"
        ],
        cons: [
            "Şarjsız kullanılırsa çok yakar",
            "Batarya ağırlığı → sert sürüş",
            "Servis ağı PHEV deneyimi düşük",
            "İkinci el değeri çok belirsiz"
        ],
        buyingTips: [
            "Evde/işte şarj imkânınız yoksa ALMATIN",
            "Batarya garanti şartlarını detaylıca okuyun",
            "Günlük mesafeniz 80 km altındaysa ideal",
            "Benzin+elektrik geçiş davranışını test edin"
        ]
    }
];
