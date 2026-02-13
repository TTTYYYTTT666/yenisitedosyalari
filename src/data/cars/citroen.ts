import { Car } from '@/types';

export const citroenCars: Car[] = [
    // ═══════════════════════════════════════════════════════
    // C3
    // ═══════════════════════════════════════════════════════
    {
        id: "citroen-c3-puretech",
        slug: "citroen-c3-1-2-puretech",
        brand: "Citroen",
        model: "C3",
        variant: "1.2 PureTech 82 HP (Manuel)",
        years: "2016-2024",
        generation: "Mk3",
        price: 750000,
        expertNote: "EB2 1.2 PureTech 82 HP atmosferik motor. Citroen'in B segmenti şampiyonu. Türkiye'de çok satan uygun fiyatlı şehir aracı. Konforlu koltuklar ve yumuşak süspansiyon ile şehir içi kullanıma biçilmiş kaftan. Airbump yan korumalar taş çarpmasına karşı iyi. Yağ yakma sorunu özellikle yüksek km'de dikkat!",
        reliabilityScore: 79,
        totalIssues: 3,
        searchCount: 9500,
        issues: [
            {
                id: "c3-mk3-1",
                title: "Yağ Yakma (PureTech)",
                description: "1.2 PureTech motorlarda piston segmanlarının kurum bağlaması ve yağ tüketiminin artması.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Motor Revizyonu (30.000-50.000 TL)"
            },
            {
                id: "c3-mk3-2",
                title: "Amortisör Takoz Sesi",
                description: "Ön amortisör takozu ve bilyasından gelen lokurtu sesi.",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "40.000+ km",
                repairCost: "3.000 - 6.000 TL"
            },
            {
                id: "c3-mk3-3",
                title: "Multimedya Yavaşlığı",
                description: "Dokunmatik ekranın tepki gecikmesi ve arayüzün yavaş çalışması.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "Yazılım Güncellemesi"
            }
        ],
        pros: [
            "Çok konforlu koltuklar",
            "Airbump yan koruma",
            "Yumuşak süspansiyon",
            "Uygun fiyat"
        ],
        cons: [
            "Viraj performansı zayıf (yatıyor)",
            "Multimedya yavaş",
            "Yağ yakma riski",
            "Plastik iç kalitesi"
        ],
        buyingTips: [
            "1.000 km'de yağ seviyesi düşüyor mu sorun",
            "Airbump'ların durumuna ve kapı altları hasarına bakın",
            "EAT6 otomatik tercih edin (manuel ağır debriyaj)"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // C-ELYSÉE
    // ═══════════════════════════════════════════════════════
    {
        id: "citroen-celysee-1-5-bluehdi",
        slug: "citroen-celysee-1-5-bluehdi",
        brand: "Citroen",
        model: "C-Elysée",
        variant: "1.5 BlueHDi 100 HP Shine",
        years: "2018-2024",
        generation: "Mk2 Facelift",
        price: 780000,
        expertNote: "DV5R 1.5 BlueHDi 100 HP. Peugeot 301'in ikiz kardeşi — aynı platform, sadece logo farklı. Türkiye'nin en çok satan bütçe sedanlarından. 1.5 BlueHDi AdBlue'lu motor ekonomik ama AdBlue pompası arızası çok maliyetli. Ticari taksi kullanımına çok uygun.",
        reliabilityScore: 78,
        totalIssues: 3,
        searchCount: 20000,
        issues: [
            {
                id: "celysee-1",
                title: "AdBlue Pompası Arızası",
                description: "AdBlue enjeksiyon pompasının arızalanması ve motor çalışmaması. PSA grubunun bilinen sorunu.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "80.000+ km",
                repairCost: "20.000 - 35.000 TL"
            },
            {
                id: "celysee-2",
                title: "Eksantrik Zinciri Sesi",
                description: "1.5 BlueHDi motorlarda eksantrik zincirinin uzaması ve çalıştırmada metalik ses.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "100.000+ km",
                repairCost: "15.000 - 25.000 TL"
            },
            {
                id: "celysee-3",
                title: "Dokunmatik Ekran Arızası",
                description: "Ekran dokunmatiğinin tepkisiz kalması veya bozulması.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "3.000 - 6.000 TL"
            }
        ],
        pros: [
            "Çok ekonomik dizel (4-5L/100km)",
            "Geniş iç mekan",
            "Uygun fiyat",
            "Yüksek model yılı"
        ],
        cons: [
            "AdBlue pompası maliyeti",
            "İç malzeme kalitesi düşük",
            "Gürültü yalıtımı zayıf"
        ],
        buyingTips: [
            "AdBlue sistemi iptali yapılmış mı kontrol edin",
            "Motor sesini soğuk çalıştırmada dinleyin (zincir)",
            "Taksi kullanımından gelip gelmediğini sorun"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // C3 AIRCROSS
    // ═══════════════════════════════════════════════════════
    {
        id: "citroen-c3-aircross",
        slug: "citroen-c3-aircross-1-2-puretech",
        brand: "Citroen",
        model: "C3 Aircross",
        variant: "1.2 PureTech 130 HP Turbo (EAT6)",
        years: "2017-2024",
        generation: "Mk1",
        price: 950000,
        expertNote: "EB2DTS 1.2 PureTech Turbo 130 HP + EAT6. Kompakt SUV segmentinin konfor şampiyonu. AMA PureTech 1.2 Turbo motorun en tehlikeli sorunu var: WET BELT (yağ içinde çalışan triger kayışı). Bu kayış parçalanırsa motor komple gider. Mutlaka bakım geçmişini kontrol edin!",
        reliabilityScore: 68,
        totalIssues: 4,
        searchCount: 15000,
        issues: [
            {
                id: "c3ac-1",
                title: "Wet Belt: Triger Kayışı Ufalanması",
                description: "Yağ içinde çalışan triger kayışının parçalanarak yağ pompasını ve motoru tıkaması. Değiştirilmezse MOTOR HASTALANıR. PSA'nın en kritik sorunu!",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "40.000+ km / 4 yıl (hangisi önce gelirse)",
                repairCost: "Kayış değişimi 8.000 TL / Motor hasarında 40.000-70.000 TL"
            },
            {
                id: "c3ac-2",
                title: "Aşırı Yağ Tüketimi",
                description: "Piston segmanlarının kurum bağlaması sonucu yağ yakma. 1.000 km'de 0.5-1L yağ harcıyor.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "60.000+ km",
                repairCost: "Motor revizyonu (30.000-50.000 TL)"
            },
            {
                id: "c3ac-3",
                title: "Buji Porselen Kırılması",
                description: "Ateşleme sistemi kaynaklı buji porseleninin kırılıp silindire düşme riski.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "30.000-40.000 km aralığında buji değişimi şart",
                repairCost: "Motor revizyonu (buji düşerse)"
            },
            {
                id: "c3ac-4",
                title: "Multimedya Donması",
                description: "Dokunmatik ekranın kararması, donması veya tepkisiz kalması.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Yazılım / Ekran Değişimi (5.000-10.000 TL)"
            }
        ],
        pros: [
            "Geniş iç hacim (sınıfının en genişi)",
            "Konforlu süspansiyon",
            "Özgün tasarım",
            "İyi donanım paketi"
        ],
        cons: [
            "PureTech motor riskleri (WET BELT!)",
            "Yağ yakma",
            "Plastik iç kalitesi",
            "Multimedya yavaş"
        ],
        buyingTips: [
            "Triger kayışı değiştirilmiş mi MUTLAKA fatura isteyin",
            "Yağ kapağını açıp kayışın durumuna bakın (çatlak/şişme var mı)",
            "1.000 km'de ne kadar yağ yaktığını sorun",
            "30.000 km'de buji değişimi yapılmış mı kontrol edin"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // C4 CACTUS
    // ═══════════════════════════════════════════════════════
    {
        id: "citroen-c4-cactus",
        slug: "citroen-c4-cactus-1-2-puretech",
        brand: "Citroen",
        model: "C4 Cactus",
        variant: "1.2 PureTech 110 HP (EAT6)",
        years: "2014-2020",
        generation: "Mk1/Mk2",
        price: 650000,
        expertNote: "EB2DT 1.2 PureTech Turbo 110 HP. Citroen'in cesur tasarım denemesi. Advanced Comfort koltuklar muhteşem. Airbump panelleri capsiz. AMA ETG robotize şanzımandan UZAK DURUN — EAT6 olanı alın. PureTech motor yağ yakma riski var.",
        reliabilityScore: 74,
        totalIssues: 3,
        searchCount: 7500,
        issues: [
            {
                id: "cactus-1",
                title: "ETG Robotize Şanzıman",
                description: "ETG (robotize manuel) şanzımanın sarsıntılı vites geçişleri, baskı balata yıpranması. Konfor dışı sürüş.",
                category: "sanziman",
                riskLevel: "HIGH",
                affectedKm: "50.000+ km",
                repairCost: "15.000 - 25.000 TL"
            },
            {
                id: "cactus-2",
                title: "Dokunmatik Ekran Bozulması",
                description: "Tüm kontrollerin tek ekranda olması ve ekranın bozulması. Klima bile kullanılamaz hale gelir.",
                category: "elektronik",
                riskLevel: "HIGH",
                affectedKm: "Rastgele",
                repairCost: "10.000 - 20.000 TL"
            },
            {
                id: "cactus-3",
                title: "Katalizör Hatası (P0420)",
                description: "Katalitik konvertörün verimliliğinin düşmesi ve motor arıza ışığı.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "15.000 TL"
            }
        ],
        pros: [
            "Advanced Comfort koltuklar (Efsane konfor)",
            "Özgün cesur tasarım",
            "Düşük yakıt tüketimi (5-6L/100km)",
            "Airbump koruma panelleri"
        ],
        cons: [
            "ETG şanzıman felaket (EAT6 tercih edin)",
            "Devir saati yok",
            "Arka camlar açılmıyor (bazı versiyonlarda)",
            "İkinci el değeri düşük"
        ],
        buyingTips: [
            "ETG şanzımandan uzak durun — mutlaka EAT6 veya manuel alın",
            "Ekranı detaylı test edin — klima/radyo her şey orada",
            "Advanced Comfort koltuklu versiyonu tercih edin"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // C4 (YENİ NESİL)
    // ═══════════════════════════════════════════════════════
    {
        id: "citroen-c4-new",
        slug: "citroen-c4-1-2-puretech",
        brand: "Citroen",
        model: "C4",
        variant: "1.2 PureTech 130 HP (EAT8)",
        years: "2021-2024",
        generation: "Mk3",
        price: 1200000,
        expertNote: "EB2ADTS 1.2 PureTech 130 HP + EAT8 8 ileri otomatik. Yeni nesil C4 crossover formunda — ne sedan ne hatchback. Advanced Comfort süspansiyon sistemi müthiş. EAT8 şanzıman çok iyi (Aisin yapımı). PureTech wet belt riski bu modelde de var ama Citroen bakım aralığını kısalttı.",
        reliabilityScore: 79,
        totalIssues: 3,
        searchCount: 9000,
        issues: [
            {
                id: "c4-mk3-1",
                title: "PureTech Wet Belt Riski",
                description: "1.2 PureTech Turbo motorun yağ içinde çalışan triger kayışı riski. 4 yıl/60.000 km'de kayış değişimi gerekli.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "60.000+ km / 4 yıl",
                repairCost: "8.000 TL (kayış) / Motor hasarı 40.000+ TL"
            },
            {
                id: "c4-mk3-2",
                title: "Arka Görüş Açısı",
                description: "Yüksek bagaj hattı ve küçük arka cam nedeniyle geriye görüş çok kısıtlı.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Tasarım",
                repairCost: "Çözümsüz (Kameraya alışın)"
            },
            {
                id: "c4-mk3-3",
                title: "Tablet Tutucu Kırılması",
                description: "Yolcu tarafındaki tablet tutucunun plastik mekanizmasının kırılması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kullanıma bağlı",
                repairCost: "1.000 TL"
            }
        ],
        pros: [
            "Advanced Comfort süspansiyon (uçan halı)",
            "EAT8 mükemmel şanzıman",
            "Özgün crossover tasarım",
            "İç mekan kalitesi iyi"
        ],
        cons: [
            "PureTech wet belt riski",
            "Arka görüş açısı çok dar",
            "Bagaj eşiği yüksek",
            "Sportif sürüş kapasitesi yok"
        ],
        buyingTips: [
            "Wet belt kayışı bakım geçmişini mutlaka sorun",
            "Geri görüş kamerasını test edin — buna bağımlı olacaksınız",
            "EAT8 şanzıman konforunu test sürüşünde hissedin"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // C4 X
    // ═══════════════════════════════════════════════════════
    {
        id: "citroen-c4-x",
        slug: "citroen-c4-x-1-2-puretech",
        brand: "Citroen",
        model: "C4 X",
        variant: "1.2 PureTech 130 HP (EAT8)",
        years: "2023-2025",
        generation: "Mk1",
        price: 1350000,
        expertNote: "EB2ADTS 1.2 PureTech 130 HP + EAT8. C4'ün sedanlaştırılmış (fastback) versiyonu. Türkiye pazarına özel model — sedan seven Türk tüketicisine hitap ediyor. Aynı platform ama daha büyük bagaj (510L). Benzin kaçağı geri çağırması mutlaka kontrol edilmeli!",
        reliabilityScore: 76,
        totalIssues: 4,
        searchCount: 18000,
        issues: [
            {
                id: "c4x-1",
                title: "PureTech Wet Belt",
                description: "Yağ içinde çalışan triger kayışı parçalanma riski. PSA grubunun en kritik sorunu.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "40.000+ km / 4 yıl",
                repairCost: "8.000 TL (kayış) / Motor hasarı 40.000-70.000 TL"
            },
            {
                id: "c4x-2",
                title: "Benzin Kaçağı (Geri Çağırma)",
                description: "Yüksek basınçlı yakıt borusunda sızıntı ve YANGIN RİSKİ. BMW geri çağırma kampanyası mevcut.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "2023-2025 model yılları",
                repairCost: "Ücretsiz (Yetkili Servis Geri Çağırma)"
            },
            {
                id: "c4x-3",
                title: "Multimedya Donması",
                description: "Ekranın donması, kararması veya geri görüş kamerasının gecikmesi.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Yazılım Güncellemesi"
            },
            {
                id: "c4x-4",
                title: "Ön Takım Süspansiyon Sesi",
                description: "Bozuk yollarda süspansiyon burçlarından gelen lokurtu sesi.",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "Bozuk yollar",
                repairCost: "Burç değişimi (5.000-8.000 TL)"
            }
        ],
        pros: [
            "Büyük bagaj (510L — sınıf lideri)",
            "Advanced Comfort konfor",
            "EAT8 mükemmel şanzıman",
            "Fastback şık tasarım"
        ],
        cons: [
            "PureTech motor riskleri",
            "Benzin kaçağı geri çağırması",
            "Arka görüş açısı dar",
            "Sportif sürüş yok"
        ],
        buyingTips: [
            "Geri çağırma (Recall) yapılmış mı yetkili servisten sorgulayın",
            "Triger kayışı bakım geçmişini isteyin",
            "Fastback tasarım için arka koltuk kafa mesafesini kontrol edin"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // C5 AIRCROSS
    // ═══════════════════════════════════════════════════════
    {
        id: "citroen-c5-aircross",
        slug: "citroen-c5-aircross-1-5-bluehdi",
        brand: "Citroen",
        model: "C5 Aircross",
        variant: "1.5 BlueHDi 130 HP Shine (EAT8)",
        years: "2019-2024",
        generation: "Mk1",
        price: 1750000,
        expertNote: "DV5RD 1.5 BlueHDi 130 HP + EAT8. Citroen'in D-SUV segmentindeki amiral gemisi. 'Uçan halı' süspansiyon sistemiyle konfor şampiyonu. Bağımsız 3 ayrı arka koltuk katlanabiliyor. AdBlue pompası PSA grubunun kronik sorunu — ama bu araç konfor için alınır.",
        reliabilityScore: 82,
        totalIssues: 3,
        searchCount: 20000,
        issues: [
            {
                id: "c5ac-1",
                title: "AdBlue Pompası Arızası",
                description: "AdBlue enjeksiyon pompasının arızalanması ve motor güç kısıtlaması. PSA grubunun bilinen sorunu.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "70.000+ km",
                repairCost: "25.000 - 35.000 TL"
            },
            {
                id: "c5ac-2",
                title: "Elektrikli Bagaj Kapağı",
                description: "Elektrikli bagaj kapağının açılmaması, yarıda kalması veya kapanmaması.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "5.000 - 10.000 TL"
            },
            {
                id: "c5ac-3",
                title: "Dokunmatik Klima Paneli",
                description: "Dokunmatik klima kontrol tuşlarının hassas olması ve yanlış algılama.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "Çözümsüz (Tasarım)"
            }
        ],
        pros: [
            "'Uçan halı' süspansiyon (PHC)",
            "Bağımsız 3 arka koltuk",
            "Mükemmel sessizlik",
            "EAT8 güzel şanzıman"
        ],
        cons: [
            "Virajlarda yatma (konfor bedeli)",
            "Dokunmatik klima tuşları kullanışsız",
            "AdBlue pompası riski",
            "Sportif sürüş kapasitesi yok"
        ],
        buyingTips: [
            "Konfor odaklıysanız sınıfının en iyisidir",
            "AdBlue pompası kontrol ettirin",
            "Shine paket tercih edin — donanım farkı büyük"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // BERLINGO
    // ═══════════════════════════════════════════════════════
    {
        id: "citroen-berlingo-shine",
        slug: "citroen-berlingo-1-5-bluehdi",
        brand: "Citroen",
        model: "Berlingo",
        variant: "1.5 BlueHDi 130 HP Shine Bold (EAT8)",
        years: "2019-2024",
        generation: "Mk3",
        price: 1400000,
        expertNote: "DV5RD 1.5 BlueHDi 130 HP + EAT8. Türkiye'nin aile aracı efsanesi. Modutop cam tavan/saklama alanı çocuklu aileler için harika. İç hacmi devasa. Minibüs değil — premium MPV. AdBlue pompası yine risk.",
        reliabilityScore: 83,
        totalIssues: 3,
        searchCount: 18000,
        issues: [
            {
                id: "berlingo-1",
                title: "AdBlue Pompası",
                description: "AdBlue enjeksiyon sistemi arızası. PSA dizel grubunun kronik sorunu.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "60.000+ km",
                repairCost: "25.000 - 35.000 TL"
            },
            {
                id: "berlingo-2",
                title: "Elektronik El Freni Takılması",
                description: "Elektronik el freninin takılı kalması ve çözülmemesi.",
                category: "fren",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "5.000 - 10.000 TL"
            },
            {
                id: "berlingo-3",
                title: "Sürgülü Kapı Mekanizması",
                description: "Sürgülü kapı ray mekanizmasının aşınması ve kapının zor açılması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "80.000+ km",
                repairCost: "3.000 - 8.000 TL"
            }
        ],
        pros: [
            "Modutop cam tavan ve saklama alanı",
            "Devasa iç hacim",
            "Konforlu süspansiyon",
            "Sürgülü kapılar (pratiklik)"
        ],
        cons: [
            "AdBlue pompası riski",
            "Elektronik el freni sorunu",
            "Ticari araç imajı (hakkını vermiyor)",
            "Rüzgar sesi yüksek hızda"
        ],
        buyingTips: [
            "Modutop tavanlı versiyonu çocuklu aileler için olmazsa olmazdır",
            "Sürgülü kapı mekanizmalarını test edin",
            "Shine Bold donanımı tercih edin"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // C4 PICASSO / SPACETOURER
    // ═══════════════════════════════════════════════════════
    {
        id: "citroen-c4-picasso",
        slug: "citroen-c4-picasso-1-6-ehdi",
        brand: "Citroen",
        model: "C4 Picasso",
        variant: "1.6 e-HDi 115 HP",
        years: "2013-2018",
        generation: "Mk2",
        price: 700000,
        expertNote: "DV6C 1.6 e-HDi 115 HP. 'Uzay mekiği' tasarımıyla MPV segmentinin en cesur modeli. Panoramik ön cam görüş açısı inanılmaz. AMA robotize MCP şanzımandan kesinlikle uzak durun — 2016 sonrası EAT6 tam otomatik şanzımanlı olanları alın.",
        reliabilityScore: 72,
        totalIssues: 3,
        searchCount: 7000,
        issues: [
            {
                id: "picasso-1",
                title: "MCP Robotize Şanzıman",
                description: "Robotize şanzımanın sarsıntılı çalışması ve baskı/balata bitirmesi. Konfor dışı sürüş.",
                category: "sanziman",
                riskLevel: "HIGH",
                affectedKm: "70.000+ km",
                repairCost: "15.000 - 25.000 TL (Baskı/Balata seti)"
            },
            {
                id: "picasso-2",
                title: "Hayalet Ekran Kararması",
                description: "Gösterge panelindeki hayalet ekranın kararması veya piksel bozulması.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "10.000 - 15.000 TL"
            },
            {
                id: "picasso-3",
                title: "Turbo Basınç Kaybı",
                description: "Turbo hortumlarının çatlaması ve turbo basınç kaybı. Motor cesurluk kaybı.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "5.000 - 12.000 TL"
            }
        ],
        pros: [
            "Uzay mekiği tasarım",
            "Panoramik ön cam (muhteşem görüş)",
            "Geniş ve konforlu",
            "EAT6 şanzıman (2016+)"
        ],
        cons: [
            "MCP robotize şanzıman felaket (2016 öncesi)",
            "Elektronik karışıklık",
            "İkinci el değeri düşük",
            "Yedek parça pahalı"
        ],
        buyingTips: [
            "2016 sonrası EAT6 tam otomatik şanzımanlı olanları alın",
            "MCP şanzımandan kesinlikle uzak durun",
            "Hayalet ekranın çalışıp çalışmadığını kontrol edin"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // C3 AIRCROSS (YENİ NESİL)
    // ═══════════════════════════════════════════════════════
    {
        id: "citroen-c3-aircross-new",
        slug: "citroen-c3-aircross-new-2024",
        brand: "Citroen",
        model: "C3 Aircross",
        variant: "1.2 PureTech 100 HP Yeni Nesil",
        years: "2024-2025",
        generation: "Mk2",
        price: 1100000,
        expertNote: "Yeni 1.2 PureTech 100 HP + 6 ileri manuel/ë-DCS6 çift kavrama. Tamamen yeni tasarımla gelen nesil. Eski modele göre daha büyük ve 7 kişilik opsiyonu var. Motor ve şanzıman güncellendi ama PureTech DNA'sı devam ediyor. Fiyat/alan oranı mükemmel.",
        reliabilityScore: 78,
        totalIssues: 2,
        searchCount: 10000,
        issues: [
            {
                id: "c3ac-new-1",
                title: "PureTech Motor DNA'sı",
                description: "Yeni nesil motor güncellendi ancak PureTech ailesinin yağ yakma ve triger kayışı eğilimi tam olarak bilinmiyor.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Henüz yeni — takip edilmeli",
                repairCost: "Bilinmiyor"
            },
            {
                id: "c3ac-new-2",
                title: "İç Malzeme Kalitesi",
                description: "Fiyat odaklı segment olduğu için plastik kalitesi ve trim sesleri.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Sıfırdan",
                repairCost: "Yalıtım"
            }
        ],
        pros: [
            "7 kişilik opsiyonu (sınıfında nadir)",
            "Devasa iç hacim",
            "Uygun fiyat",
            "Yeni modern tasarım"
        ],
        cons: [
            "PureTech motor endişesi",
            "İç malzeme kalitesi düşük",
            "Henüz çok yeni (kronikler bilinmiyor)"
        ],
        buyingTips: [
            "7 kişilik versiyonu alacaksanız 3. sıra kafa mesafesini kontrol edin",
            "PureTech motor bakım programını öğrenin",
            "Garanti kapsamını detaylıca inceleyin"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // ë-C4 (ELEKTRİKLİ)
    // ═══════════════════════════════════════════════════════
    {
        id: "citroen-ec4-electric",
        slug: "citroen-ec4-elektrikli",
        brand: "Citroen",
        model: "ë-C4",
        variant: "Elektrikli 136 HP (50 kWh)",
        years: "2021-2024",
        generation: "Mk1 EV",
        price: 1400000,
        expertNote: "Elektrik motor 136 HP + 50 kWh batarya. C4 platformunun tamamen elektrikli versiyonu. 350 km WLTP menzil (gerçek hayatta ~280 km). Advanced Comfort süspansiyon + sessiz elektrikli sürüş = mükemmel konfor. Şarj altyapınız varsa çok mantıklı seçenek.",
        reliabilityScore: 84,
        totalIssues: 2,
        searchCount: 5000,
        issues: [
            {
                id: "ec4-1",
                title: "Kış Menzil Düşüşü",
                description: "Soğuk havalarda menzilinin %25-30 düşmesi. 280 km gerçek menzil kışta 200 km'ye inebilir.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Kış ayları",
                repairCost: "Çözümsüz (EV karakteri)"
            },
            {
                id: "ec4-2",
                title: "Şarj Hız Sınırlaması",
                description: "DC hızlı şarj maksimum 100 kW ile sınırlı — rakiplere göre yavaş.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Uzun yol şarjlarında",
                repairCost: "Donanım sınırı"
            }
        ],
        pros: [
            "Advanced Comfort + elektrikli sessizlik",
            "Sıfır emisyon",
            "Düşük işletme maliyeti",
            "Vergili fiyat avantajı"
        ],
        cons: [
            "Sınırlı menzil (280 km gerçek)",
            "DC şarj hızı yavaş (100 kW maks)",
            "İkinci el değeri belirsiz",
            "Şarj altyapısı yetersiz (Türkiye)"
        ],
        buyingTips: [
            "Ev/iş yerinde şarj imkânınız yoksa almayın",
            "Günlük 100 km altı mesafe için ideal",
            "Batarya garanti süresini ve kapsamını sorun",
            "Kışın menzil düşeceğini hesaba katın"
        ]
    },
];
