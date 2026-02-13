import { Car } from '@/types';

export const mercedesCars: Car[] = [
    // ═══════════════════════════════════════════════════════
    // C SERİSİ
    // ═══════════════════════════════════════════════════════
    {
        id: "mercedes-c180-w205",
        slug: "mercedes-c180-w205",
        brand: "Mercedes-Benz",
        model: "C Serisi",
        variant: "C180 1.6 Turbo",
        years: "2014-2021",
        generation: "W205",
        price: 1650000,
        expertNote: "Türkiye'nin en çok satan Mercedes modellerinden biri. M274 1.6 Turbo motor güvenilir ancak turbo yağ kaçağı ve zincir gergi sorunlarına dikkat edilmeli. Düşük yakıt tüketimi ve yıldız prestiji bir arada.",
        reliabilityScore: 76,
        totalIssues: 3,
        searchCount: 28000,
        issues: [
            {
                id: "c180-w205-1",
                title: "Turbo Yağ Kaçağı",
                description: "M274 1.6T motorlarda turbo bağlantı noktalarından yağ sızıntısı. Motor bölmesinde yağ kokusu ve duman.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "12.000 - 20.000 TL"
            },
            {
                id: "c180-w205-2",
                title: "Zincir Gergi Problemi",
                description: "Zaman zinciri gergisinin zayıflaması, sabah ilk çalıştırmada metalik ses.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "100.000+ km",
                repairCost: "25.000 - 40.000 TL"
            },
            {
                id: "c180-w205-3",
                title: "Rüzgar Sesi",
                description: "Akustik cam olmayan modellerde 110+ km/h'de rüzgar sesi.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "Çözümsüz"
            }
        ],
        pros: [
            "Düşük yakıt tüketimi (6-7L/100km)",
            "Yıldız prestiji",
            "İç mekan kalitesi",
            "Konforlu sürüş"
        ],
        cons: [
            "Turbo yağ kaçağı riski",
            "Zincir gergi maliyeti",
            "Rüzgar sesi (akustik cam yoksa)",
            "Arka diz mesafesi dar"
        ],
        buyingTips: [
            "Sabah ilk çalıştırmada zincir sesi dinleyin",
            "Motor alt karter yağ izi kontrol edin",
            "Akustik cam opsiyonu var mı bakın"
        ]
    },
    {
        id: "mercedes-c200-w205",
        slug: "mercedes-c200-w205",
        brand: "Mercedes-Benz",
        model: "C Serisi",
        variant: "C200 2.0 Turbo",
        years: "2014-2021",
        generation: "W205",
        price: 1900000,
        expertNote: "M274 2.0 Turbo 184 HP motor ile Türkiye'de çok popüler. C180'den daha güçlü ama benzer kronik sorunları paylaşır. NOx sensörü arızası en yaygın şikayet.",
        reliabilityScore: 78,
        totalIssues: 2,
        searchCount: 20000,
        issues: [
            {
                id: "w205-1",
                title: "NOx Sensörü",
                description: "Benzinli ve dizel motorlarda NOx sensörü arızası, motor arıza lambası yanar.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "60.000+ km",
                repairCost: "15.000 - 25.000 TL"
            },
            {
                id: "w205-2",
                title: "Rüzgar Sesi",
                description: "Akustik cam olmayan modellerde yüksek hızda rüzgar sesi.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "Çözümsüz"
            }
        ],
        pros: [
            "Yıldız prestiji",
            "İç mekan kalitesi",
            "Sürüş konforu",
            "184 HP yeterli performans"
        ],
        cons: [
            "NOx sensörü maliyeti",
            "Rüzgar sesi",
            "Trim sesleri"
        ],
        buyingTips: [
            "NOx sensörü değişmiş mi kontrol edin",
            "Akustik cam opsiyonu var mı bakın"
        ]
    },
    {
        id: "mercedes-c200d-w205",
        slug: "mercedes-c200d-w205",
        brand: "Mercedes-Benz",
        model: "C Serisi",
        variant: "C200d 1.6 Dizel AMG",
        years: "2014-2021",
        generation: "W205",
        price: 2400000,
        expertNote: "OM626 1.6 Dizel 136 HP motor Türkiye'de en çok tercih edilen C Serisi varyantı. AMG Line paketiyle ikinci elde çok değerli. İmzalı seri (dikişli göğüs) olanlar prim yapar.",
        reliabilityScore: 88,
        totalIssues: 2,
        searchCount: 42000,
        issues: [
            {
                id: "c200d-2",
                title: "Artico Deri Çatlaması",
                description: "Sürücü koltuğu kenarındaki suni derinin çatlaması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "Döşeme Tamiri"
            },
            {
                id: "c200d-1",
                title: "NOx Sensörü",
                description: "Egzoz emisyon sistemi sensör arızası.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "15.000 - 25.000 TL"
            }
        ],
        pros: [
            "Prestij",
            "Konfor",
            "İkinci el değer kaybı düşük",
            "Düşük yakıt tüketimi (5L/100km)"
        ],
        cons: [
            "Rüzgar sesi (Fitil)",
            "Arka diz mesafesi dar"
        ],
        buyingTips: [
            "İmzalı seri (dikişli göğüs) olup olmadığını kontrol edin, imzalılar daha değerlidir",
            "AMG Line paketi ikinci elde çok fark yapar"
        ]
    },
    {
        id: "mercedes-c200-w206",
        slug: "mercedes-c200-w206",
        brand: "Mercedes-Benz",
        model: "C Serisi",
        variant: "C200 4Matic 1.5 Turbo +EQ",
        years: "2021-2025",
        generation: "W206",
        price: 3800000,
        expertNote: "M254 1.5 Turbo + 48V mild-hybrid motor. Fütüristik iç mekan, dev ekranlar, ama 48V batarya arızaları ilk yıllarda ciddi sorun oldu. Garanti dahilinde olmasını mutlaka kontrol edin.",
        reliabilityScore: 75,
        totalIssues: 2,
        searchCount: 22000,
        issues: [
            {
                id: "w206-1",
                title: "48V Batarya Hatası",
                description: "Kırmızı akü uyarısı ve çalışmama sorunu. 48V EQ Boost sistemi arızası.",
                category: "elektronik",
                riskLevel: "HIGH",
                affectedKm: "0-30.000 km",
                repairCost: "Garantiden Değişim (Normalde 100.000+ TL)"
            },
            {
                id: "w206-2",
                title: "Ekran Kararması",
                description: "MBUX ekranının kapanıp açılması, donmaları.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Yazılımsal",
                repairCost: "Yazılım Güncellemesi"
            }
        ],
        pros: [
            "Fütüristik iç mekan",
            "Konfor",
            "Dev ekranlar",
            "Mild-hybrid verimlilik"
        ],
        cons: [
            "48V sistemi sorunları",
            "Dokunmatik tuş hassasiyeti",
            "Parça fiyatları W205'ten pahalı"
        ],
        buyingTips: [
            "48V akü güncellemesi yapıldı mı sorun",
            "Garantisi devam ediyor mu mutlaka kontrol edin"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // E SERİSİ
    // ═══════════════════════════════════════════════════════
    {
        id: "mercedes-e250-w212",
        slug: "mercedes-e250-w212",
        brand: "Mercedes-Benz",
        model: "E Serisi",
        variant: "E250 1.8 Turbo",
        years: "2009-2016",
        generation: "W212",
        price: 1500000,
        expertNote: "M271 1.8 Turbo 204 HP motor ile Türkiye'de efsaneleşmiş model. Tank gibi sağlam gövde ama M271 motorun eksantrik dişlisi sıyırması pahalı onarımlara yol açabilir. Motor çalıştırıldığında çıt çıt sesi varsa uzak durun.",
        reliabilityScore: 80,
        totalIssues: 2,
        searchCount: 18000,
        issues: [
            {
                id: "w212-1",
                title: "Eksantrik Dişlisi Sıyırması",
                description: "M271 motorlarda eksantrik dişlisi sıyırması. İlk çalıştırmada metalik çıtırtı sesi gelir.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "100.000+ km",
                repairCost: "30.000 - 50.000 TL"
            },
            {
                id: "w212-2",
                title: "Arka LED Stop Arızası",
                description: "LED stop lambalarının sönük yanması veya tamamen bozulması.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "5.000 - 10.000 TL"
            }
        ],
        pros: [
            "Tank gibi sağlam gövde",
            "Konfor kralı",
            "Uzun yol gemisi",
            "Ses yalıtımı"
        ],
        cons: [
            "M271 zincir/dişli riski",
            "Yakıt tüketimi (9-11L/100km)"
        ],
        buyingTips: [
            "İlk çalıştırmada zincir sesi var mı mutlaka dinleyin",
            "Stop lambalarını kontrol edin",
            "Facelift (2013+) tercih edin, sorunlar azaltılmış"
        ]
    },
    {
        id: "mercedes-e200-w213",
        slug: "mercedes-e200-w213",
        brand: "Mercedes-Benz",
        model: "E Serisi",
        variant: "E200 2.0 Turbo",
        years: "2016-2023",
        generation: "W213",
        price: 2800000,
        expertNote: "M274 2.0 Turbo 184 HP benzinli motor. Türkiye'de dizel kadar yaygın olmasa da şehir içi kullanım için ideal. NOx sensörü dışında ciddi bir problemi yok.",
        reliabilityScore: 83,
        totalIssues: 1,
        searchCount: 14000,
        issues: [
            {
                id: "w213-e200-1",
                title: "NOx Sensörü",
                description: "Motor arıza lambası ve NOx sensör hatası.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "15.000 - 25.000 TL"
            }
        ],
        pros: [
            "Kusursuz konfor",
            "Prestij",
            "Geniş iç mekan",
            "Ses yalıtımı"
        ],
        cons: [
            "Parça fiyatları",
            "Yakıt tüketimi (8-10L/100km)"
        ],
        buyingTips: [
            "Yetkili servis bakımlı tercih edin",
            "Widescreen Cockpit opsiyonu değerini artırır"
        ]
    },
    {
        id: "mercedes-e200d-w213",
        slug: "mercedes-e220d-w213",
        brand: "Mercedes-Benz",
        model: "E Serisi",
        variant: "E220d 2.0 Dizel 4Matic",
        years: "2016-2023",
        generation: "W213",
        price: 3200000,
        expertNote: "OM654 2.0 Dizel 194 HP Türkiye'nin en popüler E Serisi motoru. AdBlue pompası ve EGR valfi en yaygın sorunlar. Uzun yol yapanlar için ideal, 4-5L/100km yakar. 4Matic versiyonu kış aylarında büyük avantaj.",
        reliabilityScore: 82,
        totalIssues: 3,
        searchCount: 19000,
        issues: [
            {
                id: "e220d-w213-1",
                title: "AdBlue Pompası Arızası",
                description: "AdBlue (sıvı üre) pompasının arızalanması, motor gücü kısıtlaması uyarısı.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "60.000+ km",
                repairCost: "18.000 - 30.000 TL"
            },
            {
                id: "e220d-w213-2",
                title: "EGR Valfi Tıkanması",
                description: "Egzoz gazı devridaim valfinin karbon birikmesiyle tıkanması. Güç kaybı yapar.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "10.000 - 18.000 TL"
            },
            {
                id: "e220d-w213-3",
                title: "NOx Sensörü",
                description: "Motor arıza lambası ve NOx sensör hatası.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "15.000 - 25.000 TL"
            }
        ],
        pros: [
            "Kusursuz konfor",
            "Düşük yakıt (4-5L/100km uzun yol)",
            "4Matic kış güvenliği",
            "Prestij"
        ],
        cons: [
            "AdBlue sistemi maliyeti",
            "EGR bakım gerektiriyor",
            "Parça fiyatları"
        ],
        buyingTips: [
            "AdBlue pompası değişmiş mi sorun",
            "EGR temizliği yapılmış mı kontrol edin",
            "Yetkili servis bakım geçmişi şart"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // A SERİSİ
    // ═══════════════════════════════════════════════════════
    {
        id: "mercedes-a180-w177",
        slug: "mercedes-a180-w177",
        brand: "Mercedes-Benz",
        model: "A Serisi",
        variant: "A180 1.3 Turbo",
        years: "2018-2024",
        generation: "W177",
        price: 1800000,
        expertNote: "M282 1.3 Turbo 136 HP motor (Renault ortak geliştirme). Giriş seviye Mercedes ama iç mekan premium hissiyat veriyor. MBUX sistemi sınıfının en iyisi. AMG Line sert süspansiyonu şehir içinde rahatsız edebilir.",
        reliabilityScore: 82,
        totalIssues: 2,
        searchCount: 14000,
        issues: [
            {
                id: "a180-w177-1",
                title: "MBUX Donması",
                description: "Multimedya sisteminin donması veya yeniden başlaması.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "2.500 - 6.000 TL (Yazılım)"
            },
            {
                id: "a180-w177-2",
                title: "Süspansiyon Sertliği",
                description: "AMG Line paketinde aşırı sert sürüş hissi, bozuk yollarda rahatsız.",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Çözümsüz (Tasarım)"
            }
        ],
        pros: [
            "Premium iç mekan",
            "MBUX sistemi",
            "Güvenlik donanımları",
            "Düşük yakıt (6L/100km)"
        ],
        cons: [
            "Arka yaşam alanı dar",
            "AMG Line çok sert",
            "Bagaj hacmi sınırlı"
        ],
        buyingTips: [
            "AMG Line ise sürüşü mutlaka test edin",
            "MBUX yazılımı güncel mi kontrol edin",
            "Progressive Line daha konforlu"
        ]
    },
    {
        id: "mercedes-a180d-sedan",
        slug: "mercedes-a180d-sedan-v177",
        brand: "Mercedes-Benz",
        model: "A Serisi",
        variant: "A180d Sedan 1.5 Dizel AMG",
        years: "2019-2024",
        generation: "V177",
        price: 2300000,
        expertNote: "OM608 1.5 Dizel 116 HP (Renault ortak motor). Türkiye'de sedan versiyonu çok tutuluyor. AMG Line paketiyle ikinci elde premium fiyat. Teknoloji paketi (büyük ekran) olmazsa olmaz.",
        reliabilityScore: 86,
        totalIssues: 1,
        searchCount: 25000,
        issues: [
            {
                id: "a180d-sedan-1",
                title: "MBUX Sesli Komut",
                description: "Hey Mercedes sisteminin gereksiz devreye girmesi ve yanlış komut algılaması.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "-",
                repairCost: "Yazılım ile kapatılabilir"
            }
        ],
        pros: [
            "İç ambiyans",
            "Dev ekranlar",
            "Yakıt ekonomisi (4.5L/100km)",
            "Sedan prestiji"
        ],
        cons: [
            "Arka süspansiyon sert",
            "Yere çok yakın (altını vurabilir)",
            "116 HP bazı kullanıcılara az gelebilir"
        ],
        buyingTips: [
            "Teknoloji paketi (büyük ekran) olmazsa olmazdır",
            "AMG Line tercih edin, ikinci elde değer katıyor"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // CLA
    // ═══════════════════════════════════════════════════════
    {
        id: "mercedes-cla-200",
        slug: "mercedes-cla-200",
        brand: "Mercedes-Benz",
        model: "CLA",
        variant: "CLA 200 1.3 Turbo",
        years: "2019-2024",
        generation: "C118",
        price: 2500000,
        expertNote: "M282 1.3 Turbo 163 HP. A Serisi platformunun coupe versiyonu. Çerçevesiz camlar ve sportif tasarım dikkat çekiyor. DCT (çift kavramalı) şanzıman düşük hızlarda titreme yapabilir.",
        reliabilityScore: 83,
        totalIssues: 2,
        searchCount: 11000,
        issues: [
            {
                id: "cla200-c118-1",
                title: "DCT Titremesi",
                description: "Çift kavramalı şanzımanda düşük hızlarda kavrama titremesi, yokuş kalkışında hissedilir.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "30.000+ km",
                repairCost: "20.000 - 35.000 TL"
            },
            {
                id: "cla200-c118-2",
                title: "Ambient Aydınlatma",
                description: "LED ambient şeritlerde renk kayması veya yanmama.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "3.000 - 8.000 TL"
            }
        ],
        pros: [
            "Coupe tasarım",
            "Çerçevesiz camlar",
            "Kaliteli iç mekan",
            "Marka prestiji"
        ],
        cons: [
            "Arka kafa mesafesi çok dar",
            "DCT hassasiyeti",
            "Bagaj girişi dar"
        ],
        buyingTips: [
            "Yokuş kalkışında titreme var mı test edin",
            "Arka koltuğa oturup kafa mesafesini kontrol edin"
        ]
    },
    {
        id: "mercedes-cla-180d-c117",
        slug: "mercedes-cla-180d-c117",
        brand: "Mercedes-Benz",
        model: "CLA",
        variant: "CLA 180d 1.5 Dizel AMG",
        years: "2014-2019",
        generation: "C117",
        price: 1750000,
        expertNote: "OM607 1.5 Dizel 109 HP (Renault motor). İlk nesil CLA Türkiye'de çok tutuldu. Çerçevesiz camlar zamana rağmen dikkat çekiyor. Sert süspansiyon ve iç trim sesleri en büyük şikayet.",
        reliabilityScore: 84,
        totalIssues: 1,
        searchCount: 26000,
        issues: [
            {
                id: "cla-c117-1",
                title: "Trim Sesleri",
                description: "Sert süspansiyon nedeniyle iç mekandan gıcırtı ve takırtı sesleri.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "40.000+ km",
                repairCost: "İzolasyon ile azaltılabilir"
            }
        ],
        pros: [
            "Çerçevesiz camlar",
            "Coupe formu",
            "Dikkat çekici tasarım",
            "Düşük yakıt (4.5L/100km)"
        ],
        cons: [
            "Çok sert süspansiyon",
            "Arka baş mesafesi yok",
            "Görüş açısı dar"
        ],
        buyingTips: [
            "Cam tavanın perdesini kontrol edin, sarkma yapabilir",
            "Facelift (2016+) MBUX'li modelleri tercih edin"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // GLA
    // ═══════════════════════════════════════════════════════
    {
        id: "mercedes-gla-200",
        slug: "mercedes-gla-200",
        brand: "Mercedes-Benz",
        model: "GLA",
        variant: "GLA 200 1.3 Turbo",
        years: "2020-2024",
        generation: "H247",
        price: 2600000,
        expertNote: "M282 1.3 Turbo 163 HP. A Serisi platformunun SUV versiyonu. Yüksek sürüş pozisyonu ve premium iç mekan. Elektronik termostat arızası ve geri görüş kamerası kapağı en yaygın sorunlar.",
        reliabilityScore: 84,
        totalIssues: 3,
        searchCount: 10000,
        issues: [
            {
                id: "gla-h247-1",
                title: "Geri Görüş Kamerası",
                description: "Kamera kapağının açılmaması veya siyah ekran problemi.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Mekanizma Değişimi 5.000 TL"
            },
            {
                id: "gla-h247-2",
                title: "Silindir Kapağı",
                description: "Nadir durumlarda M282 motorda subap/kapak sorunları.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "100.000+ km",
                repairCost: "Motor Revizyonu"
            },
            {
                id: "gla-h247-3",
                title: "Elektronik Termostat",
                description: "Elektronik termostat arızası, motor sıcaklık dalgalanması.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "60.000+ km",
                repairCost: "8.000 - 12.000 TL"
            }
        ],
        pros: [
            "Yüksek sürüş pozisyonu",
            "Premium iç mekan",
            "Güvenlik donanımları",
            "MBUX sistemi"
        ],
        cons: [
            "Bagaj hacmi sınırlı",
            "Fiyat/performans",
            "1.3 motor SUV'a az gelebilir"
        ],
        buyingTips: [
            "Tüm kameraları test edin",
            "Motor sıcaklık göstergesini izleyin"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // GLB
    // ═══════════════════════════════════════════════════════
    {
        id: "mercedes-glb-200",
        slug: "mercedes-glb-200",
        brand: "Mercedes-Benz",
        model: "GLB",
        variant: "GLB 200 1.3 Turbo",
        years: "2020-2024",
        generation: "X247",
        price: 2800000,
        expertNote: "M282 1.3 Turbo 163 HP. Mercedes'in 7 kişilik kompakt SUV'u. Türkiye'de aile aracı olarak çok popüler. GLA'dan daha geniş iç mekan ve opsiyonel 3. sıra koltuk. DCT titremesi ve MBUX donması dikkat edilmesi gereken noktalar.",
        reliabilityScore: 82,
        totalIssues: 3,
        searchCount: 12000,
        issues: [
            {
                id: "glb-200-1",
                title: "DCT Kavrama Titremesi",
                description: "7 ileri çift kavramalı şanzımanda düşük hızlarda titreme ve sarsıntı.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "30.000+ km",
                repairCost: "20.000 - 35.000 TL"
            },
            {
                id: "glb-200-2",
                title: "MBUX Donması",
                description: "Multimedya ekranının donması, siyah ekran veya yeniden başlama.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Yazılım Güncellemesi"
            },
            {
                id: "glb-200-3",
                title: "Elektronik Termostat",
                description: "Elektronik termostat arızası, motor sıcaklık uyarısı.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "60.000+ km",
                repairCost: "8.000 - 12.000 TL"
            }
        ],
        pros: [
            "7 kişilik kapasite",
            "Geniş iç mekan",
            "Yüksek sürüş pozisyonu",
            "Premium hissiyat",
            "Aile dostu"
        ],
        cons: [
            "1.3 motor 7 kişiye zayıf",
            "DCT hassasiyeti",
            "3. sıra sadece çocuklar için",
            "Yakıt tüketimi (7-8L/100km)"
        ],
        buyingTips: [
            "Trafik sıkışıklığında şanzıman titremesini test edin",
            "MBUX yazılım sürümünü kontrol edin",
            "Progressive Line daha konforlu süspansiyona sahip"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // GLC
    // ═══════════════════════════════════════════════════════
    {
        id: "mercedes-glc-250d",
        slug: "mercedes-glc-250d",
        brand: "Mercedes-Benz",
        model: "GLC",
        variant: "GLC 250d 2.1 Dizel 4Matic",
        years: "2015-2022",
        generation: "X253",
        price: 2600000,
        expertNote: "OM651 2.1 Dizel 204 HP. Türkiye'de çok tutulan premium orta boy SUV. 4Matic dört çeker sistemi kış aylarında büyük avantaj. Akustik cam yoksa rüzgar sesi rahatsız edebilir.",
        reliabilityScore: 80,
        totalIssues: 2,
        searchCount: 13000,
        issues: [
            {
                id: "glc-x253-1",
                title: "Aks Titremesi (Crabbing)",
                description: "Tam tur dönüşlerde önden gelen titreme hissi, 4Matic sistemine bağlı.",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "Kış aylarında belirgin",
                repairCost: "Lastik değişimi ile azalır"
            },
            {
                id: "glc-x253-2",
                title: "Rüzgar Sesi",
                description: "Akustik cam yoksa 120+ km/h'de rüzgar sesi.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "Akustik cam retrofiti mümkün değil"
            }
        ],
        pros: [
            "Yüksek kalite hissi",
            "4Matic başarısı",
            "Konforlu sürüş",
            "Geniş bagaj"
        ],
        cons: [
            "Krom soyulmaları",
            "Rüzgar sesi",
            "Parça fiyatları"
        ],
        buyingTips: [
            "Akustik cam opsiyonu var mı kontrol edin",
            "Krom kaplamaları kontrol edin (soyulma başlamış mı)"
        ]
    },
    {
        id: "mercedes-glc-200-x254",
        slug: "mercedes-glc-200-x254",
        brand: "Mercedes-Benz",
        model: "GLC",
        variant: "GLC 200 2.0 Turbo 4Matic",
        years: "2022-2025",
        generation: "X254",
        price: 4200000,
        expertNote: "M254 2.0 Turbo 197 HP + 48V mild-hybrid. Yeni nesil GLC tamamen yenilendi. Daha büyük iç mekan, dev tablet ekran. 48V sistemi W206 C Serisi'ndeki sorunların giderilmiş versiyonu ama yine de dikkatli olmak gerek.",
        reliabilityScore: 79,
        totalIssues: 2,
        searchCount: 9000,
        issues: [
            {
                id: "glc-x254-1",
                title: "48V Sistem Uyarıları",
                description: "Mild-hybrid batarya sistemi uyarı mesajları ve performans kısıtlaması.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "0-20.000 km",
                repairCost: "Garanti dahilinde"
            },
            {
                id: "glc-x254-2",
                title: "MBUX Ekran Gecikmesi",
                description: "Büyük tablet ekranda gecikme ve donma problemi.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Yazılımsal",
                repairCost: "Yazılım Güncellemesi"
            }
        ],
        pros: [
            "Modern tasarım",
            "Geniş iç mekan",
            "Dev ekran",
            "4Matic standart",
            "Mild-hybrid verimlilik"
        ],
        cons: [
            "Fiyat çok yüksek",
            "48V güvenilirlik endişesi",
            "Parça fiyatları astronomik"
        ],
        buyingTips: [
            "Garantisi devam eden araç tercih edin",
            "48V batarya güncellemesi yapılmış mı sorun"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // GLC COUPE
    // ═══════════════════════════════════════════════════════
    {
        id: "mercedes-glc-220d-coupe",
        slug: "mercedes-glc-220d-coupe-c253",
        brand: "Mercedes-Benz",
        model: "GLC Coupe",
        variant: "GLC 220d 2.0 Dizel 4Matic Coupe",
        years: "2016-2022",
        generation: "C253",
        price: 2900000,
        expertNote: "OM654 2.0 Dizel 194 HP. GLC'nin sportif coupe versiyonu. Türkiye'de çok rağbet gören model, ikinci elde değer kaybı düşük. Normal GLC ile aynı teknik altyapıyı paylaşır ama bagaj hacmi daha kısıtlı.",
        reliabilityScore: 81,
        totalIssues: 2,
        searchCount: 8000,
        issues: [
            {
                id: "glc-coupe-1",
                title: "AdBlue Pompası",
                description: "AdBlue sistemi pompa arızası, motor gücü kısıtlama uyarısı.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "60.000+ km",
                repairCost: "18.000 - 30.000 TL"
            },
            {
                id: "glc-coupe-2",
                title: "Panaromik Cam Tavan Sızıntısı",
                description: "Panoramik cam tavanın kenarlarından su sızıntısı, tahliye kanalları tıkanması.",
                category: "govde",
                riskLevel: "MEDIUM",
                affectedKm: "50.000+ km",
                repairCost: "5.000 - 15.000 TL"
            }
        ],
        pros: [
            "Sportif coupe tasarım",
            "Yüksek ikinci el değeri",
            "4Matic güvenliği",
            "Premium hissiyat"
        ],
        cons: [
            "Bagaj hacmi GLC'den küçük",
            "Arka görüş açısı dar",
            "Fiyat farkı normal GLC'ye göre yüksek"
        ],
        buyingTips: [
            "Cam tavan kenarlarını su izi için kontrol edin",
            "AdBlue sistemi bakım geçmişini isteyin"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // GLE
    // ═══════════════════════════════════════════════════════
    {
        id: "mercedes-gle-350d",
        slug: "mercedes-gle-350d-v167",
        brand: "Mercedes-Benz",
        model: "GLE",
        variant: "GLE 350d 3.0 Dizel 4Matic",
        years: "2019-2024",
        generation: "V167",
        price: 5500000,
        expertNote: "OM656 3.0 V6 Dizel 272 HP. Mercedes'in büyük SUV'u, Türkiye'nin lüks SUV segmentinde çok popüler. Hava süspansiyonu konfor sağlıyor ama arızalandığında maliyetli. AdBlue sistemi sorunları da yaygın.",
        reliabilityScore: 77,
        totalIssues: 3,
        searchCount: 7000,
        issues: [
            {
                id: "gle-350d-1",
                title: "Hava Süspansiyonu Arızası",
                description: "AIRMATIC hava süspansiyonu körüklerinin patlaması veya sızıntı yapması. Araç bir tarafa yatar.",
                category: "suspansiyon",
                riskLevel: "HIGH",
                affectedKm: "60.000+ km",
                repairCost: "40.000 - 80.000 TL (körük başına)"
            },
            {
                id: "gle-350d-2",
                title: "AdBlue Sistemi",
                description: "AdBlue pompası arızası, ısıtıcı hatası, motor güç kısıtlaması.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "50.000+ km",
                repairCost: "25.000 - 45.000 TL"
            },
            {
                id: "gle-350d-3",
                title: "MBUX AR Navigasyon",
                description: "Artırılmış gerçeklik navigasyon kamerasının buğulanması veya çalışmaması.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Garanti/Yazılım"
            }
        ],
        pros: [
            "Devasa iç mekan",
            "272 HP güçlü motor",
            "Hava süspansiyon konforu",
            "4Matic güvenliği",
            "Prestij"
        ],
        cons: [
            "Hava süspansiyon maliyeti",
            "AdBlue sistemi hassas",
            "Yakıt tüketimi (8-10L/100km)",
            "Şehir içi manevra zor"
        ],
        buyingTips: [
            "Hava süspansiyonunu park halinde kontrol edin (bir tarafa yatıyor mu)",
            "Soğuk çalıştırmada süspansiyon kompresör sesini dinleyin",
            "AdBlue bakım geçmişini isteyin"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // S SERİSİ
    // ═══════════════════════════════════════════════════════
    {
        id: "mercedes-s350d-w223",
        slug: "mercedes-s350d-w223",
        brand: "Mercedes-Benz",
        model: "S Serisi",
        variant: "S350d 3.0 Dizel 4Matic",
        years: "2021-2025",
        generation: "W223",
        price: 8500000,
        expertNote: "OM656 3.0 Dizel 286 HP. Otomobil dünyasının amiral gemisi. Türkiye'de CEO'ların, işadamlarının tercihi. Arka aks direksiyonu devrimsel ama arızalandığında astronomik maliyetli. MBUX Hyperscreen çizilmeye hassas.",
        reliabilityScore: 74,
        totalIssues: 3,
        searchCount: 5000,
        issues: [
            {
                id: "s350d-w223-1",
                title: "Arka Aks Direksiyonu",
                description: "4.5° veya 10° arka aks direksiyon sisteminde kalibrasyon hatası veya motor arızası.",
                category: "suspansiyon",
                riskLevel: "HIGH",
                affectedKm: "30.000+ km",
                repairCost: "80.000 - 150.000 TL"
            },
            {
                id: "s350d-w223-2",
                title: "MBUX Hyperscreen Çizilme",
                description: "Dev OLED Hyperscreen'in kolay çizilmesi ve parmak izi göstermesi.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "İlk günden",
                repairCost: "Ekran koruyucu + Film 5.000 TL"
            },
            {
                id: "s350d-w223-3",
                title: "Hava Süspansiyonu",
                description: "E-Active Body Control veya AIRMATIC körük sızıntısı.",
                category: "suspansiyon",
                riskLevel: "HIGH",
                affectedKm: "50.000+ km",
                repairCost: "60.000 - 120.000 TL"
            }
        ],
        pros: [
            "En ileri teknoloji",
            "Eşsiz konfor",
            "Prestijin zirvesi",
            "Arka aks direksiyonu (çalışırken harika)",
            "Ses yalıtımı"
        ],
        cons: [
            "Astronomik parça fiyatları",
            "Arka aks direksiyon riski",
            "Hava süspansiyon maliyeti",
            "Sigorta çok pahalı"
        ],
        buyingTips: [
            "Garantisi mutlaka devam etmeli",
            "Arka aks direksiyon güncelleme yapılmış mı kontrol edin",
            "Mercedes-Benz Certified Pre-Owned tercih edin",
            "Bakım anlaşması sorgulayın"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // VITO
    // ═══════════════════════════════════════════════════════
    {
        id: "mercedes-vito-tourer",
        slug: "mercedes-vito-tourer-114-cdi",
        brand: "Mercedes-Benz",
        model: "Vito",
        variant: "Vito Tourer 114 CDI 2.1 Dizel",
        years: "2014-2024",
        generation: "W447",
        price: 2200000,
        expertNote: "OM651 2.1 Dizel 136 HP. Türkiye'de VIP transfer ve aile aracı olarak çok popüler. Geniş iç mekan, çok yönlü kullanım ama enjektör ve turbo aktuatör arızaları sıkça yaşanıyor. Ticari kullanımda yüksek km'lilerden kaçının.",
        reliabilityScore: 73,
        totalIssues: 3,
        searchCount: 15000,
        issues: [
            {
                id: "vito-w447-1",
                title: "Enjektör Kaçağı",
                description: "Dizel enjektörlerden yakıt kaçağı, enjektör ringi sızıntısı. Siyah duman ve güç kaybı.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "80.000+ km",
                repairCost: "20.000 - 40.000 TL (enjektör başına)"
            },
            {
                id: "vito-w447-2",
                title: "Turbo Aktuatör Arızası",
                description: "Elektronik turbo aktuatörün (Wastegate) arızalanması. Motor gücü düşer, limp mode'a girer.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "15.000 - 25.000 TL"
            },
            {
                id: "vito-w447-3",
                title: "Sürgülü Kapı Mekanizması",
                description: "Elektrikli sürgülü kapının takılması veya açılmaması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "50.000+ km",
                repairCost: "8.000 - 15.000 TL"
            }
        ],
        pros: [
            "Devasa iç mekan",
            "VIP dönüşüm imkanı",
            "Mercedes güvenliği",
            "Çok yönlü kullanım",
            "Düşük yakıt (6-7L/100km)"
        ],
        cons: [
            "Enjektör arızası yaygın",
            "Turbo aktuatör riski",
            "Parça fiyatları",
            "Ticari araç konforunda"
        ],
        buyingTips: [
            "Egzozdan duman kontrolü yapın (siyah/mavi)",
            "Turbo basıncını test edin",
            "Ticari kullanılmış olanlardan kaçının (yıpranma fazla)",
            "Sürgülü kapıları defalarca açıp kapatın"
        ]
    }
];
