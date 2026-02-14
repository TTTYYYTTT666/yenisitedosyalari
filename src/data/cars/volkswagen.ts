import { Car } from '@/types';

export const volkswagenCars: Car[] = [
    {
        id: "volkswagen-passat-b8-1-6-tdi",
        slug: "volkswagen-passat-b8-1-6-tdi",
        brand: "Volkswagen",
        model: "Passat",
        variant: "B8 1.6 TDI Highline",
        years: "2015-2023",
        generation: "B8",
        price: 1300000,
        expertNote: "Türk erkeğinin hayali 'Aşiret Paket'. Highline+Cam Tavan olmadan satışı çok zordur. 1.6 TDI motor sessiz ve ekonomiktir. DSG DQ200 şanzıman en büyük risk faktörüdür. Cam tavan kronik ses yapar — silikon sprey sıkın geçer.",
        reliabilityScore: 80,
        totalIssues: 5,
        searchCount: 100000,
        issues: [
            {
                id: "passat-1",
                title: "DSG DQ200 Mekatronik Arızası",
                description: "Kuru kavrama DSG mekatronik kartı arızası. Vites geçişlerinde titreme, kararsızlık veya 'P moduna almama' uyarısı. Basınç tüpü gevşemesi de sık görülür.",
                category: "sanziman",
                riskLevel: "HIGH",
                affectedKm: "80.000+ km",
                repairCost: "25.000 - 50.000 TL"
            },
            {
                id: "passat-2",
                title: "Çift Kütleli Volan Sesi",
                description: "Rölantide ve motor stop ederken gelen metalik 'şak şak' sesi. Volanın iç yaylarının aşınmasından kaynaklanır. Kavrama ile birlikte değiştirilmesi önerilir.",
                category: "sanziman",
                riskLevel: "HIGH",
                affectedKm: "90.000+ km",
                repairCost: "15.000 - 25.000 TL"
            },
            {
                id: "passat-3",
                title: "Devirdaim Pompası Kaçağı",
                description: "Elektronik devirdaim pompasının kilitlenmesi veya su kaçırması. Triger setine zarar verebilir. Motor altında antifriz lekesi ve su seviyesi düşüşü ile fark edilir.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "70.000+ km",
                repairCost: "8.000 - 18.000 TL"
            },
            {
                id: "passat-4",
                title: "Panoramik Cam Tavan Sesi",
                description: "Panoramik cam tavanın kasislerde gıcırdaması ve tıkırtı yapması. Kronik bir sorundur, silikon sprey ile geçici çözüm sağlanır.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "Bakım / Yağlama"
            },
            {
                id: "passat-5",
                title: "DPF Tıkanıklığı",
                description: "Şehir içi kısa mesafe kullanımda DPF partikül filtresinin dolması. Motor arıza lambası ve güç sınırlaması. Düzenli uzun yol sürüşü gerekir.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Şehir içi kullanım",
                repairCost: "5.000 - 15.000 TL"
            }
        ],
        pros: [
            "D sınıfı referans konfor",
            "Geniş arka yaşam alanı",
            "İkinci el altın gibi değerlenir",
            "Prestij ve statü"
        ],
        cons: [
            "DSG DQ200 şanzıman riski",
            "Yüksek bakım maliyeti",
            "Çok çalınan araç"
        ],
        buyingTips: [
            "DSG kavramasını yokuşta test edin",
            "Volan sesini dinleyin (Stop ederken şıkırtı var mı?)",
            "Highline+Cam Tavan olmadan almayın"
        ]
    },
    {
        id: "volkswagen-golf-7-1-4-tsi",
        slug: "volkswagen-golf-7-1-4-tsi",
        brand: "Volkswagen",
        model: "Golf",
        variant: "Golf 7 1.4 TSI Highline",
        years: "2012-2020",
        generation: "Mk7",
        price: 950000,
        expertNote: "C segmentinin referans modeli. Malzeme kalitesi, yalıtım ve sürüş dinamikleri en iyisidir. 1.4 TSI 125/150hp motorlar çok seridir. Sunroof çerçevesi su sızdırabilir — fitilleri kontrol edin. 'Golf, Golf'tür.'",
        reliabilityScore: 82,
        totalIssues: 5,
        searchCount: 85000,
        issues: [
            {
                id: "golf-1",
                title: "DSG DQ200 Mekatronik Arızası",
                description: "Mekatronik kart arızası veya basınç tüpü gevşemesi. Vites geçişlerinde titreme, kararsızlık veya acil mod uyarısı. Aniden ortaya çıkabilir.",
                category: "sanziman",
                riskLevel: "HIGH",
                affectedKm: "80.000+ km",
                repairCost: "30.000 - 60.000 TL"
            },
            {
                id: "golf-2",
                title: "Aşırı Yağ Tüketimi",
                description: "1.4 TSI 122/140/150hp motorlarda segman kaynaklı yağ eksiltme. Ciddi vakalarda motor revizyonu gerekir. Yağ seviyesini düzenli kontrol edin.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "100.000+ km",
                repairCost: "Motor Revizyonu (50.000+ TL)"
            },
            {
                id: "golf-3",
                title: "Devirdaim (Termostat) Kaçağı",
                description: "Plastik termostat gövdesinden antifriz kaçağı ve su eksiltme. VW grubu TSI motorların bilinen kronik sorunudur.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "60.000+ km",
                repairCost: "8.000 - 15.000 TL"
            },
            {
                id: "golf-4",
                title: "Sunroof Çerçeve Çatlağı",
                description: "Sunroof çerçevesinin çatlaması ve içeri su sızdırması. Gider kanallarının tıkanması ile tavan döşemesi ıslanır. Çerçeve değişimi pahalıdır.",
                category: "govde",
                riskLevel: "MEDIUM",
                affectedKm: "Kronik (Mk7)",
                repairCost: "15.000 - 25.000 TL"
            },
            {
                id: "golf-5",
                title: "Kapı Kilit Motoru Arızası",
                description: "Kapı kilit mekanizmasının bozulması. Kapıların kilitlenmemesi veya dışarıdan açılmaması. Genellikle tek kapıda başlar ama diğerlerine de sıçrayabilir.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "2.000 - 5.000 TL"
            }
        ],
        pros: [
            "Kalite hissi ve yalıtım",
            "Mükemmel sürüş dinamikleri",
            "Güçlü ikinci el değeri",
            "Sessiz kabin"
        ],
        cons: [
            "DSG mekatronik riski",
            "Sunroof su alma sorunu",
            "Pahalı yetkili servis"
        ],
        buyingTips: [
            "Sunroof etrafında su lekesi var mı kontrol edin",
            "DSG kararlı çalışıyor mu? Yokuş kalkış deneyin",
            "Yedek su deposunu kontrol edin"
        ]
    },
    {
        id: "volkswagen-golf-8-1-0-etsi",
        slug: "volkswagen-golf-8-1-0-etsi",
        brand: "Volkswagen",
        model: "Golf",
        variant: "Golf 8 1.0 eTSI",
        years: "2020-2024",
        generation: "Mk8",
        price: 1350000,
        expertNote: "Golf 8, teknolojik devrim ama yazılım sorunlarıyla gündeme geldi. Dokunmatik kontroller ergonomik açıdan eleştirilir. Mild hybrid sistem yakıt tasarrufu sağlar ama kangalama yapar. Malzeme kalitesi Mk7'ye göre düştü.",
        reliabilityScore: 79,
        totalIssues: 5,
        searchCount: 30000,
        issues: [
            {
                id: "golf8-1",
                title: "MIB3 Multimedya Donması",
                description: "Ekranın tamamen siyah olması, donması veya sesin gelmemesi. CarPlay/Android Auto bağlantı kopmaları. Yazılım güncellemesi kısmen çözer.",
                category: "elektronik",
                riskLevel: "HIGH",
                affectedKm: "Rastgele",
                repairCost: "Yazılım / 5F Beyin Değişimi (15.000 TL)"
            },
            {
                id: "golf8-2",
                title: "SOS Acil Çağrı Modülü",
                description: "Gösterge panelinde sürekli 'SOS Hatası: Servise Gidin' uyarısı. Modül veya anten değişimi gerekir. VW grubu yaygın sorun.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "5.000 - 10.000 TL"
            },
            {
                id: "golf8-3",
                title: "Sürüş Asistanları Hatası",
                description: "Travel Assist ve Şerit Takip sensörlerinin hata vermesi veya beklenmedik müdahaleler yapması. Direksiyon tork sensörü değişimi gerekebilir.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "20.000+ km",
                repairCost: "20.000 - 40.000 TL"
            },
            {
                id: "golf8-4",
                title: "DSG DQ200 Sarsıntısı",
                description: "1. ve 2. vites geçişlerinde metalik ses ve silkeleme. Mild hybrid sistemin stop/start geçişleriyle birleşince daha belirgin hissedilir.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "40.000+ km",
                repairCost: "25.000 - 50.000 TL (Kavrama)"
            },
            {
                id: "golf8-5",
                title: "Anahtar Tanınamadı Hatası",
                description: "Anahtar araç içinde olmasına rağmen 'Anahtar Tanınamıyor' hatası ve aracın çalışmaması. Pil değişimi veya yazılım güncellemesi çoğu zaman çözer.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Pil / Yazılım"
            }
        ],
        pros: [
            "Gelişmiş sürüş teknolojileri",
            "Sessiz kabin",
            "Mild hybrid yakıt tasarrufu"
        ],
        cons: [
            "Dokunmatik kontroller kullanışsız",
            "Malzeme kalitesi düşüşü (Mk7'ye göre)",
            "Yazılım sorunları"
        ],
        buyingTips: [
            "SOS hatası var mı kontrol edin",
            "Dokunmatik paneli test edin",
            "Yazılım versiyonunun güncel olduğundan emin olun"
        ]
    },
    {
        id: "volkswagen-tiguan-1-5-tsi",
        slug: "volkswagen-tiguan-1-5-tsi",
        brand: "Volkswagen",
        model: "Tiguan",
        variant: "1.5 TSI Highline",
        years: "2016-2023",
        generation: "Mk2",
        price: 1500000,
        expertNote: "Ailelerin favori SUV'u. Geniş, ferah ve kaliteli. 1.5 TSI motor 150hp ile kasayı rahat taşır. Yakıtı biraz üzer (8-10L). Highline/Elegance cam tavansız alınmaz (Piyasa kuralı). DSG şanzıma dikkat edilmeli.",
        reliabilityScore: 82,
        totalIssues: 5,
        searchCount: 60000,
        issues: [
            {
                id: "tiguan-1",
                title: "Kangaroo Effect (Silkelme)",
                description: "Soğuk motorda ilk kalkışta aracın ileri geri silkelemesi. 1.5 TSI Evo motorun kronik sorunudur. Yazılım güncellemesi ile azalır ama tam düzelmez.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "0 km'den itibaren (Karakteristik)",
                repairCost: "Yazılım / 3.000 - 8.000 TL"
            },
            {
                id: "tiguan-2",
                title: "DSG Mekatronik Arızası",
                description: "Vites geçişlerinde kararsızlık, titreme ve mekatronik kart arızası. Ağır SUV kasasında DSG daha çok zorlanır.",
                category: "sanziman",
                riskLevel: "HIGH",
                affectedKm: "60.000+ km",
                repairCost: "30.000 - 50.000 TL"
            },
            {
                id: "tiguan-3",
                title: "Panoramik Tavan Su Sızıntısı",
                description: "Tavan giderlerinin tıkanması sonucu içeri su sızdırması. Düzenli gider temizliği şarttır. Çerçeve çatlağı da görülebilir.",
                category: "govde",
                riskLevel: "MEDIUM",
                affectedKm: "Her bakımda",
                repairCost: "Temizlik / 15.000 - 25.000 TL (Çerçeve)"
            },
            {
                id: "tiguan-4",
                title: "Su Pompası / Termostat Kaçağı",
                description: "1.5 TSI motorlarda plastik su pompası/termostat ünitesinden antifriz sızıntısı. VW grubu 1.5 TSI motorların bilinen kronik sorunudur.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "50.000+ km",
                repairCost: "8.000 - 15.000 TL"
            },
            {
                id: "tiguan-5",
                title: "Kapı Fitil ve Ön Takım Sesleri",
                description: "Bozuk yollarda kapı fitillerinden gıcırtı ve ön süspansiyon burçlarından ses. Soğuk havalarda daha belirgindir.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kronik / 50.000+ km",
                repairCost: "Yağlama / 3.000 - 6.000 TL"
            }
        ],
        pros: [
            "Geniş iç hacim",
            "Güçlü 150hp motor",
            "Güvenlik (Euro NCAP 5*)",
            "Güçlü ikinci el değeri"
        ],
        cons: [
            "Yakıt tüketimi (8-10L)",
            "DSG hassasiyeti",
            "Kangaroo effect"
        ],
        buyingTips: [
            "Soğuk motorla test sürüşü yapın (Silkeleme için)",
            "Cam tavanı açıp kapatın — su lekesi arayın",
            "Highline/Elegance cam tavansız almayın"
        ]
    },
    {
        id: "volkswagen-troc-1-5-tsi",
        slug: "volkswagen-troc-1-5-tsi",
        brand: "Volkswagen",
        model: "T-Roc",
        variant: "1.5 TSI Highline",
        years: "2018-2024",
        generation: "Mk1",
        price: 1350000,
        expertNote: "Golf'ün SUV hali ama içi Golf kadar kaliteli değil (Sert plastikler). Sürüşü çok keyiflidir ve gençlerin yeni gözdesidir. Panoramik cam tavan su sızdırma riski taşır.",
        reliabilityScore: 80,
        totalIssues: 5,
        searchCount: 40000,
        issues: [
            {
                id: "troc-1",
                title: "Kangaroo Effect (Silkelme)",
                description: "1.5 TSI Evo + DSG kombinasyonunda düşük hızlarda silkelme. Soğuk motorda daha belirgindir. Yazılım güncellemesi kısmen düzeltir.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "0 km'den itibaren (Karakteristik)",
                repairCost: "Yazılım / 3.000 - 8.000 TL"
            },
            {
                id: "troc-2",
                title: "DSG Mekatronik Arızası",
                description: "Viteslerde kararsızlık, titreme veya 'Şanzıman Acil Mod' uyarısı. Kuru kavrama DQ200 şanzımanın bilinen sorunu.",
                category: "sanziman",
                riskLevel: "HIGH",
                affectedKm: "60.000+ km",
                repairCost: "30.000 - 50.000 TL"
            },
            {
                id: "troc-3",
                title: "Panoramik Cam Tavan Su Sızıntısı",
                description: "Tavan çerçevesinin çatlaması veya giderlerin tıkanması sonucu içeri su sızdırması. Çerçeve değişimi çok pahalıdır.",
                category: "govde",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "15.000 - 30.000 TL (Çerçeve)"
            },
            {
                id: "troc-4",
                title: "Direksiyon Kolonu Sesi",
                description: "Dönüşlerde direksiyon altından gelen sürtünme/gıcırtı sesi. Airbag sargısı veya direksiyon mili kaynaklı olabilir.",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "40.000+ km",
                repairCost: "5.000 - 10.000 TL"
            },
            {
                id: "troc-5",
                title: "İç Trim Gıcırtısı",
                description: "Sert plastik kapı panelleri ve torpidodan gelen tıkırtı ve gıcırtı sesleri. T-Roc'un iç mekan kalitesi Golf'ün altındadır.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "Yalıtım bandajı"
            }
        ],
        pros: [
            "Sportif ve şık tasarım",
            "Yüksek sürüş pozisyonu",
            "Kompakt boyutlar",
            "İyi performans"
        ],
        cons: [
            "Malzeme kalitesi (Polo seviyesi plastik)",
            "Arka diz mesafesi dar",
            "Kangaroo effect"
        ],
        buyingTips: [
            "Kangaroo efektini soğuk motorla test edin",
            "Cam tavan su lekesi arayın",
            "DSG vites geçişlerini kontrol edin"
        ]
    },
    {
        id: "volkswagen-polo-1-0-tsi",
        slug: "volkswagen-polo-1-0-tsi",
        brand: "Volkswagen",
        model: "Polo",
        variant: "1.0 TSI",
        years: "2017-2024",
        generation: "Mk6",
        price: 1050000,
        expertNote: "Sınıf lideri genişlik ve kalite. Golf'ün küçük kardeşi. 1.0 TSI 3 silindirli motor seri ve ekonomiktir. DSG DQ200 şanzıman Risk No.1. Comfortline paketi çok boş, Life/Style tercih edin.",
        reliabilityScore: 82,
        totalIssues: 5,
        searchCount: 50000,
        issues: [
            {
                id: "polo-1",
                title: "DSG DQ200 Mekatronik ve Kavrama",
                description: "Kuru kavrama şanzımanın ısınması, titremesi ve mekatronik kart arızası. Şehir içi kullanımda daha hızlı yıpranır.",
                category: "sanziman",
                riskLevel: "HIGH",
                affectedKm: "60.000+ km",
                repairCost: "30.000 - 50.000 TL"
            },
            {
                id: "polo-2",
                title: "Yağ Eksiltme (1.0 TSI)",
                description: "1.0 TSI motorlarda segman ve subap lastiği kaynaklı yağ tüketimi. Düzenli yağ seviyesi takibi gerekir.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Servis Takibi / Revizyon"
            },
            {
                id: "polo-3",
                title: "Devirdaim / Termostat Kaçağı",
                description: "Termostat ve devirdaim pompasından antifriz sızıntısı. Su seviyesi düşüşü ile fark edilir.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "60.000+ km",
                repairCost: "5.000 - 10.000 TL"
            },
            {
                id: "polo-4",
                title: "Ön Süspansiyon Sesleri",
                description: "Viraj demir lastikleri ve burçlardan gelen gıcırtı sesleri. Bozuk yollarda belirginleşir.",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "40.000+ km",
                repairCost: "3.000 - 6.000 TL"
            },
            {
                id: "polo-5",
                title: "El Freni Düğmesi Kırılması",
                description: "Mekanik el freni tabançasındaki plastik düğmenin yerinden çıkması veya kırılması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "1.000 - 2.000 TL"
            }
        ],
        pros: [
            "Sınıf lideri genişlik",
            "Kaliteli iç mekan",
            "Güçlü ikinci el değeri"
        ],
        cons: [
            "DSG DQ200 riski",
            "Comfortline/Life paketi boş",
            "Fiyat yüksek (Sınıfına göre)"
        ],
        buyingTips: [
            "DSG vites geçişlerini soğuk motorla test edin",
            "Su seviyesini kontrol edin",
            "Style/R-Line paketli tercih edin"
        ]
    },
    {
        id: "volkswagen-polo-1-2-tsi",
        slug: "volkswagen-polo-1-2-tsi",
        brand: "Volkswagen",
        model: "Polo",
        variant: "1.2 TSI / 1.4 TDI",
        years: "2009-2017",
        generation: "6R/6C",
        price: 850000,
        expertNote: "Küçük Golf. Sınıfının en kaliteli iç mekanına sahiptir. Dizel Polo her zaman 'çeyrek altın'dır — satarken hiç üzmez. 1.2 TSI DSG'li ise kavramaya dikkat edin.",
        reliabilityScore: 83,
        totalIssues: 5,
        searchCount: 50000,
        issues: [
            {
                id: "polo5-1",
                title: "DSG DQ200 Mekatronik",
                description: "Vites geçişlerinde titreme, sarsıntı ve mekatronik kart arızası. Basınç tüpü gevşemesi de sık görülür.",
                category: "sanziman",
                riskLevel: "HIGH",
                affectedKm: "80.000+ km",
                repairCost: "25.000 - 45.000 TL"
            },
            {
                id: "polo5-2",
                title: "Su Pompası Sızıntısı",
                description: "Devirdaim pompası arızası ve antifriz sızıntısı. Su seviyesi düzenli kontrol edilmelidir.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "90.000+ km",
                repairCost: "5.000 - 10.000 TL"
            },
            {
                id: "polo5-3",
                title: "EGR Tıkanıklığı (TDI)",
                description: "Dizel motorlarda EGR valfinin karbon birikimi ile tıkanması. Güç kaybı ve arıza lambası.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "70.000+ km",
                repairCost: "5.000 - 10.000 TL"
            },
            {
                id: "polo5-4",
                title: "Kapı Kilit Motoru",
                description: "Kapı kilit mekanizmasının bozulması ve kapıların açılmaması/kilitlenmemesi.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Yaşa bağlı",
                repairCost: "2.000 - 5.000 TL"
            },
            {
                id: "polo5-5",
                title: "Enjektör Sesi (TDI)",
                description: "1.4 TDI motorlarda soğukken gelen enjektör vuruntu sesi. Normal çalışma sesinin ötesinde ise enjektör revizyonu gerekir.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "120.000+ km",
                repairCost: "15.000 - 25.000 TL"
            }
        ],
        pros: [
            "Kalite hissi",
            "Güçlü ikinci el değeri (Altın gibi)",
            "Ekonomik motorlar"
        ],
        cons: [
            "DSG riski",
            "Dar arka yaşam alanı",
            "Donanım fakiri paketler"
        ],
        buyingTips: [
            "DSG 2. viteste titreme yapıyor mu?",
            "Su eksiltme var mı?",
            "Dizel Polo satarken hiç üzmez, ikinci el altındır"
        ]
    },
    {
        id: "volkswagen-caddy-2-0-tdi-mk5",
        slug: "volkswagen-caddy-2-0-tdi",
        brand: "Volkswagen",
        model: "Caddy",
        variant: "2.0 TDI Style (Mk5)",
        years: "2020-2024",
        generation: "Mk5",
        price: 1100000,
        expertNote: "Ticari değil binek konforunda. Yeni kasada makas yerine helezon yay var, zıplatmaz. 2.0 TDI motor çok güçlüdür. Panoramik cam tavan harika bir hava katar. AdBlue sistemi baş ağrıtabilir.",
        reliabilityScore: 84,
        totalIssues: 5,
        searchCount: 50000,
        issues: [
            {
                id: "caddy5-1",
                title: "AdBlue Dozajlama Hatası",
                description: "AdBlue sisteminin kristalleşip tıkanması. 'Motoru Çalıştıramazsınız' uyarısı verir. Pompa/enjektör değişimi gerekir.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "40.000+ km",
                repairCost: "15.000 - 30.000 TL"
            },
            {
                id: "caddy5-2",
                title: "SOS Acil Çağrı Hatası",
                description: "Tavan kontrol ünitesindeki arıza nedeniyle SOS uyarısı. VW grubu yaygın sorunu. Modül değişimi gerekir.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "5.000 - 10.000 TL"
            },
            {
                id: "caddy5-3",
                title: "EGR / DPF Tıkanıklığı",
                description: "Şehir içi kullanımda partikül filtresi ve EGR valfinin dolması. Güç kaybı ve arıza lambası.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "60.000+ km",
                repairCost: "8.000 - 20.000 TL"
            },
            {
                id: "caddy5-4",
                title: "Arka Amortisör Sesi",
                description: "Arka süspansiyonun tümseklerde vuruntu yapması. Sıfırdan itibaren görülebilir. Amortisör değişimi gerekir.",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "Sıfırdan itibaren",
                repairCost: "5.000 - 10.000 TL"
            },
            {
                id: "caddy5-5",
                title: "Dijital Gösterge Kararması",
                description: "Dijital gösterge panelinin anlık kararması veya donması. Yazılım güncellemesi veya kontrol ünitesi değişimi gerekir.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele (Yazılım)",
                repairCost: "Yazılım / 10.000 TL (Değişim)"
            }
        ],
        pros: [
            "Binek konforu (Helezon yay)",
            "Güçlü 2.0 TDI motor (122hp)",
            "Panoramik cam tavan ferahlığı",
            "MQB Evo altyapısı"
        ],
        cons: [
            "AdBlue derdi",
            "Yıllık muayene (Ticari)",
            "Fiyat yüksek"
        ],
        buyingTips: [
            "AdBlue hatası var mı kontrol edin",
            "Gösterge panelinde sarı uyarı lambası var mı?",
            "Dokunmatik tuşlar çalışıyor mu?"
        ]
    },
    {
        id: "volkswagen-caddy-mk4",
        slug: "volkswagen-caddy-mk4-2-0-tdi",
        brand: "Volkswagen",
        model: "Caddy",
        variant: "2.0 TDI Comfortline (Mk4)",
        years: "2015-2020",
        generation: "Mk4",
        price: 1300000,
        expertNote: "Caddy Mk4 makas arka süspansiyonlu son nesildir. Konfor açısından Mk5'e göre dezavantajlıdır ama sağlamlığı kanıtlanmıştır. Enjektör ve EGR sorunlarına dikkat.",
        reliabilityScore: 82,
        totalIssues: 5,
        searchCount: 38000,
        issues: [
            {
                id: "caddy4-1",
                title: "Enjektör Arızası",
                description: "Kötü yakıt kalitesine bağlı enjektör bozulması ve titreme. Soğuk çalıştırmada belirgin vuruntu sesi.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "120.000+ km",
                repairCost: "20.000 - 40.000 TL"
            },
            {
                id: "caddy4-2",
                title: "EGR Valfi Tıkanması",
                description: "Şehir içi kullanımda EGR valfinin karbon birikimi ile tıkanması. Güç kaybı ve duman.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "5.000 - 12.000 TL"
            },
            {
                id: "caddy4-3",
                title: "Arka Makas Yay Sesi",
                description: "Makas arka süspansiyonun bozuk yollarda zıplatması ve ses yapması. Caddy Mk4'ün karakteristiğidir.",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Burç Değişimi (5.000 TL)"
            },
            {
                id: "caddy4-4",
                title: "DSG Kavrama Aşınması",
                description: "DSG şanzıman kavrama disk aşınması. Şehir içi stop-go trafikte daha hızlı yıpranır.",
                category: "sanziman",
                riskLevel: "HIGH",
                affectedKm: "80.000+ km",
                repairCost: "25.000 - 45.000 TL"
            },
            {
                id: "caddy4-5",
                title: "Çift Kütleli Volan Sesi",
                description: "Rölantide ve motor stop ederken metalik ses. Volanın aşınmasından kaynaklanır.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "120.000+ km",
                repairCost: "15.000 - 25.000 TL"
            }
        ],
        pros: [
            "Kanıtlanmış sağlamlık",
            "Güçlü 2.0 TDI motor",
            "DSG konforu",
            "Güçlü ikinci el değeri"
        ],
        cons: [
            "Arka makas zıplatması",
            "Enjektör sorunu",
            "Fiyat yüksek"
        ],
        buyingTips: [
            "Enjektörleri revize edilmiş mi sorun",
            "DSG kavrama testini mutlaka yapın",
            "Makas burçlarını kontrol ettirin"
        ]
    },
    {
        id: "volkswagen-jetta-1-6-tdi",
        slug: "volkswagen-jetta-1-6-tdi",
        brand: "Volkswagen",
        model: "Jetta",
        variant: "1.6 TDI Highline",
        years: "2011-2018",
        generation: "Mk6",
        price: 950000,
        expertNote: "Meksika üretimi olduğu için Golf kadar kaliteli değildir ama bagajı yayladır (510L). DSG mekatronik ve volan sesi fix menüdür. Tavan döşemesi sıcakta sarkabilir — alırken kontrol edin.",
        reliabilityScore: 78,
        totalIssues: 5,
        searchCount: 35000,
        issues: [
            {
                id: "jetta-1",
                title: "DSG DQ200 Mekatronik",
                description: "Vites geçişlerinde kararsızlık, titreme ve 'Vites kutusu hatası'. Basınç tüpü gevşemesi de sık görülür.",
                category: "sanziman",
                riskLevel: "HIGH",
                affectedKm: "80.000+ km",
                repairCost: "25.000 - 45.000 TL"
            },
            {
                id: "jetta-2",
                title: "Enjektör Şakırtısı (TDI)",
                description: "1.6 TDI motorlarda soğukken gelen metalik vuruntu sesi. Enjektör revizyonu veya değişimi gerekebilir.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "120.000+ km",
                repairCost: "20.000 - 35.000 TL"
            },
            {
                id: "jetta-3",
                title: "Devirdaim Pompası Kaçağı",
                description: "Triger setinin olduğu bölgeden antifriz sızıntısı. Zamanında müdahale edilmezse triger seti ve motor hasar görebilir.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "90.000+ km",
                repairCost: "8.000 - 15.000 TL"
            },
            {
                id: "jetta-4",
                title: "Tavan Döşemesi Sarkması",
                description: "Sıcağa maruz kalınca tavan kumaşının kendini salması. Meksika üretimi malzeme kalitesi düşüklüğünden kaynaklanır.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "7-8 yıl",
                repairCost: "3.000 - 5.000 TL"
            },
            {
                id: "jetta-5",
                title: "Çift Kütleli Volan Sesi",
                description: "Rölantide ve motor stop ederken metalik 'şak şak' sesi. Kavrama ile birlikte değiştirilmelidir.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "15.000 - 25.000 TL"
            }
        ],
        pros: [
            "Geniş bagaj hacmi (510L)",
            "İkinci el altın değerinde",
            "Ekonomik 1.6 TDI motor"
        ],
        cons: [
            "Meksika üretimi malzeme kalitesi",
            "DSG mekatronik riski",
            "Yalıtım Golf'ten düşük"
        ],
        buyingTips: [
            "Tavan döşemesine bakın sarkma var mı?",
            "DSG P'den D'ye geçerken vuruyor mu?",
            "Devirdaim değiştirilmiş mi sorun"
        ]
    },
    {
        id: "volkswagen-arteon-1-5-tsi",
        slug: "volkswagen-arteon-1-5-tsi",
        brand: "Volkswagen",
        model: "Arteon",
        variant: "1.5 TSI R-Line",
        years: "2017-2024",
        generation: "Mk1",
        price: 1800000,
        expertNote: "CC'nin varisi. Tasarımı kafa çevirtir. Çerçevesiz camlar havalıdır ama rüzgar sesi yapar. 1.5 TSI motor bu kasaya biraz zayıf kalır ama vergisi avantajlıdır. R-Line paketi tercih edin.",
        reliabilityScore: 83,
        totalIssues: 5,
        searchCount: 20000,
        issues: [
            {
                id: "arteon-1",
                title: "Çerçevesiz Cam Rüzgar Sesi",
                description: "Yüksek hızlarda çerçevesiz camlardan gelen rüzgar sesi. Kapı fitillerinin aşınmasıyla kötüleşir.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "120+ km/s",
                repairCost: "Fitil Değişimi (3.000 - 6.000 TL)"
            },
            {
                id: "arteon-2",
                title: "Sunroof Mekanizma Sesi",
                description: "Sunroof mekanizmasının esnemesi ve kasislerde tıkırtı yapması. Kronik bir sorundur.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "Bakım / Yağlama"
            },
            {
                id: "arteon-3",
                title: "Kangaroo Effect (1.5 TSI)",
                description: "Düşük hızlarda DSG silkeleme. 1.5 TSI motorun kronik sorunu. Yazılım güncellemesi kısmen düzeltir.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "Karakteristik",
                repairCost: "Yazılım / 3.000 - 8.000 TL"
            },
            {
                id: "arteon-4",
                title: "Su Pompası / Termostat Kaçağı",
                description: "1.5 TSI motorlarda plastik su pompası/termostat ünitesinden antifriz sızıntısı.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "50.000+ km",
                repairCost: "8.000 - 15.000 TL"
            },
            {
                id: "arteon-5",
                title: "Cam Krikosu Arızası",
                description: "Çerçevesiz cam mekanizmasının bozulması. Cam kapıyı açtığında inmeli ve kapanınca çıkmalıdır — bu mekanizma sorun yapabilir.",
                category: "govde",
                riskLevel: "MEDIUM",
                affectedKm: "Yaşa bağlı",
                repairCost: "3.000 - 6.000 TL"
            }
        ],
        pros: [
            "Kafa çeviren tasarım",
            "Geniş liftback bagaj",
            "Prestij ve statü"
        ],
        cons: [
            "Rüzgar sesi (Çerçevesiz cam)",
            "Arka baş mesafesi dar",
            "1.5 TSI kasaya zayıf"
        ],
        buyingTips: [
            "R-Line paket tercih edin — satarken çok daha hızlı gider",
            "Camlar tam kapanıyor mu kontrol edin",
            "Su seviyesini kontrol edin"
        ]
    },
    {
        id: "volkswagen-cc-1-4-tsi",
        slug: "volkswagen-cc-1-4-tsi",
        brand: "Volkswagen",
        model: "CC",
        variant: "1.4 TSI",
        years: "2012-2017",
        generation: "Mk1 Facelift",
        price: 1100000,
        expertNote: "Passat'ın yakışıklı kardeşi. Çerçevesiz camlar havalıdır ama fitil eskirse rüzgar sesi baş ağrıtır. Elektronik el freni hassas olabilir.",
        reliabilityScore: 78,
        totalIssues: 5,
        searchCount: 14000,
        issues: [
            {
                id: "cc-1",
                title: "Çerçevesiz Cam Fitil Sesi",
                description: "Çerçevesiz camların fitillerinin sertleşmesi sonucu yüksek hızda rüzgar sesi. Fitil değişimi gerekir.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kronik / Yaşa bağlı",
                repairCost: "3.000 - 6.000 TL"
            },
            {
                id: "cc-2",
                title: "DSG Mekatronik Arızası",
                description: "Mekatronik kart ısınması ve vites karışıklığı. Basınç tüpü gevşemesi de görülür.",
                category: "sanziman",
                riskLevel: "HIGH",
                affectedKm: "100.000+ km",
                repairCost: "25.000 - 45.000 TL"
            },
            {
                id: "cc-3",
                title: "Elektronik El Freni Arızası",
                description: "El freni motorunun bozulması ve tekerin kilitli kalması. Acil durumda tehlikeli olabilir.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "5.000 - 10.000 TL"
            },
            {
                id: "cc-4",
                title: "Devirdaim / Termostat Kaçağı",
                description: "TSI motorun klasik su kaçırma sorunu. Su seviyesi düşüşü ile fark edilir.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "80.000+ km",
                repairCost: "8.000 - 15.000 TL"
            },
            {
                id: "cc-5",
                title: "Cam Krikosu Mekanizması",
                description: "Çerçevesiz cam mekanizmasının bozulması veya ses yapması. Kapı açıp kapatmada cam düzgün inmeli ve çıkmalıdır.",
                category: "govde",
                riskLevel: "MEDIUM",
                affectedKm: "Kronik",
                repairCost: "3.000 - 5.000 TL"
            }
        ],
        pros: [
            "Çok şık tasarım",
            "Prestij",
            "Konforlu sürüş"
        ],
        cons: [
            "Arka baş mesafesi dar",
            "Rüzgar sesi (Çerçevesiz cam)",
            "Sert şehir içi süspansiyon"
        ],
        buyingTips: [
            "Camları açıp kapatırken mekanizmayı dinleyin",
            "Elektronik el frenini test edin",
            "Arka lastik aşınma dengesizliği var mı? (Camber)"
        ]
    },
    {
        id: "volkswagen-transporter-t6",
        slug: "volkswagen-transporter-t6",
        brand: "Volkswagen",
        model: "Transporter",
        variant: "2.0 TDI City Van",
        years: "2015-2024",
        generation: "T6",
        price: 1400000,
        expertNote: "VIP taşımacılığın tartışmasız lideri. Konforlu ve sessizdir. 2.0 TDI motor uzun ömürlüdür ama bakımsızsa üzer. VIP yapılı araç alıyorsanız ruhsata işli olup olmadığına (9+1) mutlaka bakın.",
        reliabilityScore: 84,
        totalIssues: 5,
        searchCount: 45000,
        issues: [
            {
                id: "t6-1",
                title: "Çift Kütleli Volan Sesi",
                description: "Rölantide ve motor stop ederken metalik ses. 2.0 TDI motorun torkuyla ilişkili kronik sorundur.",
                category: "sanziman",
                riskLevel: "HIGH",
                affectedKm: "100.000+ km",
                repairCost: "15.000 - 25.000 TL"
            },
            {
                id: "t6-2",
                title: "EGR Soğutucu Çatlağı",
                description: "EGR soğutucusunun çatlayarak antifriz sızıntısı yapması. Su seviyesi düşer ve motor hasar görebilir.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "120.000+ km",
                repairCost: "10.000 - 20.000 TL"
            },
            {
                id: "t6-3",
                title: "Sürgülü Kapı Halat Kopması",
                description: "Otomatik sürgülü kapı halatının kopması. Sık kullanımda daha erken ortaya çıkar.",
                category: "govde",
                riskLevel: "MEDIUM",
                affectedKm: "Sık kullanım",
                repairCost: "3.000 - 6.000 TL"
            },
            {
                id: "t6-4",
                title: "Enjektör Arızası",
                description: "Yakıt kalitesine bağlı enjektör bozulması ve titreme. Soğuk çalıştırmada vuruntu sesi.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "150.000+ km",
                repairCost: "20.000 - 35.000 TL"
            },
            {
                id: "t6-5",
                title: "DPF Tıkanıklığı",
                description: "Şehir içi kısa mesafe kullanımda DPF'nin dolması. Düzenli uzun yol sürüşü gerekir.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Şehir içi kullanım",
                repairCost: "8.000 - 15.000 TL"
            }
        ],
        pros: [
            "VIP taşımacılık konforu",
            "İkinci el altın değerinde",
            "Güçlü ve dayanıklı motor"
        ],
        cons: [
            "Yakıt tüketimi yüksek",
            "Bakım ve parça maliyeti",
            "Yıllık muayene (Ticari)"
        ],
        buyingTips: [
            "Motor soğukken çalıştırıp volan sesini dinleyin",
            "EGR soğutucu kontrol ettirin",
            "VIP yapıda ruhsat 9+1 mi bakın"
        ]
    },
    {
        id: "volkswagen-amarok-v6-tdi",
        slug: "volkswagen-amarok-v6-tdi",
        brand: "Volkswagen",
        model: "Amarok",
        variant: "3.0 V6 TDI Aventura",
        years: "2016-2022",
        generation: "Mk1 Facelift",
        price: 2600000,
        expertNote: "V6 TDI motor Amarok'un en doğru tercihi. 2.0 BiTDI'ye göre çok daha sağlam ve güçlüdür. Yakıtı neredeyse aynı ama performansı çok farklı. DPF dikkat ister.",
        reliabilityScore: 84,
        totalIssues: 5,
        searchCount: 22000,
        issues: [
            {
                id: "amarok-v6-1",
                title: "Direksiyon Pompası Sesi",
                description: "Ağır arazide veya düşük hızda manevralarında direksiyon pompasından ses gelmesi.",
                category: "suspansiyon",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "15.000 - 25.000 TL"
            },
            {
                id: "amarok-v6-2",
                title: "DPF Tıkanıklığı",
                description: "Şehir içi kullanımda DPF partikül filtresinin dolması. Düzenli uzun yol sürüşü gerekir.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Şehir içi kullanım",
                repairCost: "Rejenerasyon / 15.000 TL"
            },
            {
                id: "amarok-v6-3",
                title: "AdBlue Sistemi",
                description: "AdBlue enjektörü kristalleşmesi ve dozajlama hatası.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "60.000+ km",
                repairCost: "15.000 - 30.000 TL"
            },
            {
                id: "amarok-v6-4",
                title: "Otomatik Şanzıman Isınma",
                description: "Ağır arazi veya çekme koşullarında 8 ileri otomatik şanzımanın ısınma uyarısı. Yağ soğutucu bakımı önemlidir.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "Zorlu şartlarda",
                repairCost: "Yağ Soğutucu (10.000 TL)"
            },
            {
                id: "amarok-v6-5",
                title: "Arka Süspansiyon Sertliği",
                description: "Boş yükle arka süspansiyonun çok sert olması ve zıplaması. Kamyonet karakteristiğidir.",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Çözümsüz (Yük binince düzelir)"
            }
        ],
        pros: [
            "V6 motor gücü ve tork",
            "Binek konforunda kamyonet",
            "Prestij ve heybet"
        ],
        cons: [
            "Yakıt tüketimi (12-13L)",
            "Park sorunu (Geniş kasa)",
            "Yüksek fiyat"
        ],
        buyingTips: [
            "2.0 TDI yerine mutlaka V6 TDI alın",
            "AdBlue sistemini kontrol ettirin",
            "Arazide kullanılmış mı altına bakın"
        ]
    },
    {
        id: "volkswagen-amarok-2-0-bitdi",
        slug: "volkswagen-amarok-2-0-bitdi",
        brand: "Volkswagen",
        model: "Amarok",
        variant: "2.0 BiTDI Highline",
        years: "2011-2016",
        generation: "Mk1",
        price: 1100000,
        expertNote: "Arazi aracı değil asfalt kamyonetidir. 2.0 BiTDI motor o kasaya narin kalır, sıkıştırırsan hararet yapar, conta yakar. V6 olanı çok daha makbuldür.",
        reliabilityScore: 70,
        totalIssues: 5,
        searchCount: 15000,
        issues: [
            {
                id: "amarok20-1",
                title: "Turbo Hortumu Patlaması",
                description: "Turbo hortumunun patlaması ve ani çekiş kaybı. Kronik bir sorundur. Takviye hortum ile çözülebilir.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "60.000+ km",
                repairCost: "3.000 - 6.000 TL"
            },
            {
                id: "amarok20-2",
                title: "EGR Soğutucu Çatlağı",
                description: "EGR soğutucusunun çatlayarak su kaçırması. Motor arıza lambası ve hararet yükselmesi.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "100.000+ km",
                repairCost: "15.000 - 25.000 TL"
            },
            {
                id: "amarok20-3",
                title: "Şanzıman Isınması",
                description: "Otomatik şanzımanın arazi veya yükte ısınması ve güç sınırlaması devreye girmesi.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "Zorlu şartlarda",
                repairCost: "Yağ Soğutucu (10.000 TL)"
            },
            {
                id: "amarok20-4",
                title: "Çift Kütleli Volan Sesi",
                description: "Rölantide metalik ses. Volanın iç yaylarının aşınmasından kaynaklanır.",
                category: "sanziman",
                riskLevel: "HIGH",
                affectedKm: "120.000+ km",
                repairCost: "20.000 - 35.000 TL"
            },
            {
                id: "amarok20-5",
                title: "Conta Yanması (Hararet)",
                description: "2.0 BiTDI motorun bu ağır kasada sıkıştırıldığında hararet yapması ve silindir kapak contasının yanması.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "Zorlamada / 150.000+ km",
                repairCost: "25.000 - 40.000 TL"
            }
        ],
        pros: [
            "Heybetli görünüm",
            "Binek otomobil konforu",
            "Geniş iç hacim"
        ],
        cons: [
            "Yakıt tüketimi (12-14L)",
            "Motor ömrü riski (2.0 BiTDI)",
            "Yedek parça pahalı"
        ],
        buyingTips: [
            "V6 olanı çok daha sağlamdır, imkan varsa V6 alın",
            "Su eksiltiyor mu mutlaka sorun",
            "Arazide kullanılmış mı altına bakın"
        ]
    },
    {
        id: "volkswagen-scirocco-1-4-tsi",
        slug: "volkswagen-scirocco-1-4-tsi",
        brand: "Volkswagen",
        model: "Scirocco",
        variant: "1.4 TSI (160hp)",
        years: "2009-2017",
        generation: "Mk3",
        price: 850000,
        expertNote: "CAV motor kodlu 160hp'lik versiyonda piston kırma riski vardır. CTH kodlu (2013 sonrası) çok daha makbuldür. 122hp CAX motor en sağlamıdır. Apaçi elinde patlamışsa uzak durun.",
        reliabilityScore: 65,
        totalIssues: 5,
        searchCount: 18000,
        issues: [
            {
                id: "scirocco-1",
                title: "Piston Kırma (CAV Motor)",
                description: "160hp CAV motorlarda segman kanalı kırılması ve motorun bitmesi. Tuning yapılmış araçlarda risk çok yüksek. CTH motor kodlu araçlarda bu sorun yoktur.",
                category: "motor",
                riskLevel: "CRITICAL",
                affectedKm: "80.000+ km (Zorlanmış)",
                repairCost: "80.000 - 120.000 TL (Motor Yapımı)"
            },
            {
                id: "scirocco-2",
                title: "Triger Zinciri Uzaması",
                description: "İlk çalıştırmada 2-3 saniye süren zincir şakırtısı. Zincir gergisi arızası. Zamanında değiştirilmezse zincir atlayabilir.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "80.000+ km",
                repairCost: "15.000 - 25.000 TL"
            },
            {
                id: "scirocco-3",
                title: "DSG DQ200 Kavrama Aşınması",
                description: "Kuru kavrama 7 ileri DSG'nin 2. viteste titremesi. Agresif sürüşte daha hızlı yıpranır.",
                category: "sanziman",
                riskLevel: "HIGH",
                affectedKm: "60.000+ km",
                repairCost: "20.000 - 35.000 TL"
            },
            {
                id: "scirocco-4",
                title: "Turbo Wastegate Sesi",
                description: "Gaza basıp bırakınca turbodan gelen metalik şıngırtı sesi. Performansı etkilemez ama rahatsız edici.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Klips Takılması"
            },
            {
                id: "scirocco-5",
                title: "Su Pompası / Termostat Kaçağı",
                description: "TSI motorlarda klasik plastik termostat/su pompası sızıntısı.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "70.000+ km",
                repairCost: "8.000 - 15.000 TL"
            }
        ],
        pros: [
            "Zamanının ötesinde tasarım",
            "Performanslı sürüş",
            "İyi yol tutuşu"
        ],
        cons: [
            "Motor riski (CAV motor)",
            "Temizini bulmak imkansız",
            "Arka görüş sıfır"
        ],
        buyingTips: [
            "Motor kodu CAV mı CTH mi ruhsattan bakın (CTH alın)",
            "Kompresyon testi şart",
            "İlk çalıştırmada zincir sesini dinleyin"
        ]
    },
    {
        id: "volkswagen-beetle-1-2-tsi",
        slug: "volkswagen-beetle-1-2-tsi",
        brand: "Volkswagen",
        model: "Beetle",
        variant: "1.2 TSI Design",
        years: "2012-2019",
        generation: "A5",
        price: 900000,
        expertNote: "Efsane Vosvos'un torunu. Tarzı yeter. 1.2 TSI motor şehir içi için yeterlidir. Çerçevesiz camları havalıdır ama mekanizması sorun yapabilir. Fender ses sistemi olanları tercih edin.",
        reliabilityScore: 81,
        totalIssues: 5,
        searchCount: 15000,
        issues: [
            {
                id: "beetle-1",
                title: "DSG DQ200 Kavrama Titremesi",
                description: "Klasik 7 ileri DSG kuru kavrama titreme sorunu. Düşük viteslerde belirgindir.",
                category: "sanziman",
                riskLevel: "HIGH",
                affectedKm: "60.000+ km",
                repairCost: "25.000 - 45.000 TL"
            },
            {
                id: "beetle-2",
                title: "Çerçevesiz Cam Krikosu",
                description: "Çerçevesiz cam mekanizmasının bozulması veya ses yapması. Cam kapı açılınca inmeli, kapanınca çıkmalıdır.",
                category: "govde",
                riskLevel: "MEDIUM",
                affectedKm: "Kronik / Yaşa bağlı",
                repairCost: "3.000 - 5.000 TL"
            },
            {
                id: "beetle-3",
                title: "Turbo Wastegate Sesi",
                description: "Turbodan gelen şırıltı sesi. Performansı etkilemez ama rahatsız eder. Klips takılması ile azaltılabilir.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Klips Takılması"
            },
            {
                id: "beetle-4",
                title: "Su Pompası Kaçağı",
                description: "TSI motorun plastik termostat/su pompası sızıntısı. Su seviyesi takibi önemlidir.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "70.000+ km",
                repairCost: "5.000 - 10.000 TL"
            },
            {
                id: "beetle-5",
                title: "Arka Görüş Kısıtlılığı",
                description: "Eğimli arka cam nedeniyle çok kısıtlı arka görüş. Park sensörü ve kamerası olmayan modellerde park çok zordur.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Tasarım kaynaklı",
                repairCost: "Kamera ekleme (3.000 TL)"
            }
        ],
        pros: [
            "İkonik ve dikkat çekici tasarım",
            "Sürüş keyfi",
            "Koleksiyon değeri"
        ],
        cons: [
            "Arka yaşam alanı yok",
            "Küçük bagaj",
            "Yedek parça bekleme süresi"
        ],
        buyingTips: [
            "Camlar kapıyı açınca inip kalkıyor mu?",
            "DSG kavrama kararlı mı?",
            "Fender ses sistemi var mı?"
        ]
    },
    {
        id: "volkswagen-tcross-1-0-tsi",
        slug: "volkswagen-tcross-1-0-tsi",
        brand: "Volkswagen",
        model: "T-Cross",
        variant: "1.0 TSI Life",
        years: "2019-2024",
        generation: "Mk1",
        price: 1150000,
        expertNote: "Polo'nun SUV hali. Şehir içi için ideal boyutlarda. 1.0 TSI motor canlıdır ama yokuşta ve yüklü performansı üzer. İçi biraz dar hissettirebilir.",
        reliabilityScore: 83,
        totalIssues: 5,
        searchCount: 25000,
        issues: [
            {
                id: "tcross-1",
                title: "Su Pompası / Devirdaim Kaçağı",
                description: "1.0 TSI motorlarda plastik su pompası/termostat sızıntısı. Su seviyesi düşüşü ile fark edilir.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "60.000+ km",
                repairCost: "5.000 - 10.000 TL"
            },
            {
                id: "tcross-2",
                title: "İç Trim Sesleri",
                description: "Bozuk yollarda bagaj ve kapılardan gelen plastik tıkırtı sesleri.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "İzolasyon bandajı"
            },
            {
                id: "tcross-3",
                title: "Start-Stop Sistem Arızası",
                description: "Start-stop sisteminin devreye girmemesi. AGM akü zayıflığından kaynaklanır.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Akü yaşına bağlı",
                repairCost: "3.000 - 5.000 TL (AGM Akü)"
            },
            {
                id: "tcross-4",
                title: "DSG DQ200 Sarsıntısı",
                description: "Düşük hızlarda vites geçişlerinde kararsızlık ve sarsıntı. Yazılım ile kısmen düzelir.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "30.000+ km",
                repairCost: "Yazılım / 20.000 - 35.000 TL (Kavrama)"
            },
            {
                id: "tcross-5",
                title: "Rüzgar Sesi",
                description: "A sütunu ve aynalardan gelen rüzgar sesi. 100+ km/s hızlarda belirginleşir.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "100+ km/s",
                repairCost: "Fitil Ayarı"
            }
        ],
        pros: [
            "Kompakt boyutlar (Şehir içi ideal)",
            "Yüksek sürüş görüşü",
            "Park kolaylığı"
        ],
        cons: [
            "Sert plastik iç mekan",
            "Dar arka koltuk",
            "Yokuş performansı düşük"
        ],
        buyingTips: [
            "Su seviyesini kontrol edin",
            "DSG vites geçişlerini test edin",
            "Klimayı açınca motor titriyor mu?"
        ]
    },
    {
        id: "volkswagen-taigo-1-0-tsi",
        slug: "volkswagen-taigo-1-0-tsi",
        brand: "Volkswagen",
        model: "Taigo",
        variant: "1.0 TSI Style",
        years: "2021-2024",
        generation: "Mk1",
        price: 1250000,
        expertNote: "Nivus adıyla bilinen Coupe-SUV. T-Cross'tan daha sportif görünür ama altyapısı aynıdır. Bagajı şaşırtıcı derecede geniştir. Yalıtımı sınıf ortalamasındadır. Arka baş mesafesi kısıtlıdır.",
        reliabilityScore: 83,
        totalIssues: 5,
        searchCount: 30000,
        issues: [
            {
                id: "taigo-1",
                title: "DSG DQ200 Kararsızlığı",
                description: "Düşük hızlarda vites geçişlerinde kararsızlık ve sarsıntı. Kuru kavrama DSG'nin karakteristiğidir.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "30.000+ km",
                repairCost: "Yazılım / 20.000 - 35.000 TL (Kavrama)"
            },
            {
                id: "taigo-2",
                title: "Yağ Eksiltme (1.0 TSI)",
                description: "1.0 TSI motorlarda nadiren görülen yağ seviyesi düşüşü. Düzenli kontrol gerekir.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Rodaj / 50.000+ km",
                repairCost: "Yağ Takibi / Revizyon"
            },
            {
                id: "taigo-3",
                title: "Rüzgar Sesi (Ayna/B Sütunu)",
                description: "Ayna ve B sütunundan gelen rüzgar sesi. 110+ km/s hızlarda belirginleşir.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "110+ km/s",
                repairCost: "Fitil Ayarı"
            },
            {
                id: "taigo-4",
                title: "Su Pompası Kaçağı",
                description: "1.0 TSI motorlarda plastik su pompası/termostat sızıntısı.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "60.000+ km",
                repairCost: "5.000 - 10.000 TL"
            },
            {
                id: "taigo-5",
                title: "Multimedya Donması",
                description: "Infotainment sisteminin donması veya geç tepki vermesi. Yazılım güncellemesi ile kısmen düzelir.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Yazılım / MIB Değişimi"
            }
        ],
        pros: [
            "Sportif coupe tasarım",
            "Şaşırtıcı derecede geniş bagaj",
            "İyi donanım (Style)"
        ],
        cons: [
            "Arka baş mesafesi kısıtlı",
            "Motor sesi kabine geçer",
            "Fiyat (T-Cross'a yakın)"
        ],
        buyingTips: [
            "Lastik basınç sensörü hatası veriyor mu?",
            "DSG vites geçişlerini test edin",
            "Multimedya ekranı donuyor mu?"
        ]
    },

    // ─── Eski new-cars dosyasından taşındı ───
    {
        id: "vw-caddy-iii-1-9-tdi",
        slug: "vw-caddy-iii-1-9-tdi",
        brand: "Volkswagen",
        model: "Caddy",
        variant: "III 1.9 TDI",
        years: "2004-2010",
        generation: "2K",
        price: 350000,
        reliabilityScore: 76,
        totalIssues: 5,
        searchCount: 8000,
        expertNote: "Caddy III 1.9 TDI ticari segmentin efsanesi. PD (Pompe-Düse) motor güçlü ve dayanıklı. DSG yoktu bu nesilde, 5MT standart. Motor çok sağlam ama enjektörler yüksek km'de sorun çıkarır.",
        issues: [
            { id: "caddy3-1", title: "PD Enjektör Arızası", description: "Pompe-Düse enjektörlerin tıkanması veya sızıntısı. Motor titreşimi ve güç kaybı.", category: "motor", riskLevel: "HIGH", affectedKm: "150.000+ km", repairCost: "8.000 - 18.000 TL" },
            { id: "caddy3-2", title: "Çift Kütleli Volan", description: "Rölantide metalik vuruntu sesi. Kavrama ile değiştirilmeli.", category: "sanziman", riskLevel: "HIGH", affectedKm: "100.000+ km", repairCost: "10.000 - 18.000 TL" },
            { id: "caddy3-3", title: "Sürgülü Kapı Mekanizması", description: "Sürgülü kapı raylarının aşınması ve kapı kilidi bozulması.", category: "govde", riskLevel: "MEDIUM", affectedKm: "80.000+ km", repairCost: "2.000 - 5.000 TL" },
            { id: "caddy3-4", title: "Arka Yaprak Yay", description: "Ticari kullanımda arka yaprak yayların aşınması veya kırılması.", category: "suspansiyon", riskLevel: "MEDIUM", affectedKm: "100.000+ km", repairCost: "2.000 - 4.000 TL" },
            { id: "caddy3-5", title: "Devirdaim Pompası", description: "Devirdaim pompasından su sızıntısı. Triger tarafında olduğu için acil müdahale gerekir.", category: "motor", riskLevel: "MEDIUM", affectedKm: "100.000+ km", repairCost: "4.000 - 8.000 TL" }
        ],
        pros: ["Efsanevi 1.9 TDI motor", "Çok geniş yük alanı", "Sağlam yapı", "Bol yedek parça"],
        cons: ["Binek konforu düşük", "PD enjektör pahalı", "Gürültü yalıtımı yok"],
        buyingTips: ["Enjektör sesini dinleyin", "Volan sesini kontrol edin", "Sürgülü kapıları test edin"]
    }
    ,

    // ─── Eski new-cars dosyasından taşındı ───
    {
        id: "vw-passat-b7-1-4-tsi",
        slug: "vw-passat-b7-1-4-tsi",
        brand: "Volkswagen",
        model: "Passat",
        variant: "B7 1.4 TSI",
        years: "2010-2014",
        generation: "B7",
        price: 650000,
        reliabilityScore: 72,
        totalIssues: 6,
        searchCount: 12000,
        expertNote: "Passat B7 1.4 TSI Türkiye'de çok satıldı. Motor kompresörlü+turbolu (twincharger) karmaşık ve bakımı pahalı. DSG 7 ile kombine edilmiş, iki kronik sorun kaynağı bir arada. Ama konfor ve kalite tartışılmaz.",
        issues: [
            { id: "pb7-1", title: "Süperşarj (Kompresör) Zinciri Uzaması", description: "1.4 TSI twincharger motorun süperşarj aktüatör zincirinde uzama. Motor titremesi ve güç kaybı. Zincir koparsa motor hasar görür.", category: "motor", riskLevel: "CRITICAL", affectedKm: "80.000 - 120.000 km", repairCost: "10.000 - 20.000 TL" },
            { id: "pb7-2", title: "DSG DQ200 Mekatronik", description: "Kuru kavramalı DSG şanzımanda mekatronik kart ve kavrama arızası. Vites sarsıntısı, kararsızlık.", category: "sanziman", riskLevel: "HIGH", affectedKm: "60.000 - 100.000 km", repairCost: "25.000 - 50.000 TL" },
            { id: "pb7-3", title: "Devirdaim Pompası Kaçağı", description: "Plastik gövdeli devirdaim pompasından antifriz sızıntısı. Hararet riski.", category: "motor", riskLevel: "HIGH", affectedKm: "60.000+ km", repairCost: "5.000 - 10.000 TL" },
            { id: "pb7-4", title: "Turbo Wastegate Kaçağı", description: "Turbo wastegate contası veya aktuatöründen basınç kaçağı. Güç kaybı ve ıslık sesi.", category: "motor", riskLevel: "MEDIUM", affectedKm: "80.000+ km", repairCost: "5.000 - 12.000 TL" },
            { id: "pb7-5", title: "Yağ Tüketimi", description: "1.4 TSI motorun piston segmanı nedeniyle yağ tüketmesi. 5.000 km'de 500ml+.", category: "motor", riskLevel: "MEDIUM", affectedKm: "60.000+ km", repairCost: "Yağ Ekleme / Revizyon" },
            { id: "pb7-6", title: "Multimedya RCD 510 Arızası", description: "RCD 510 kafaünitesinin CD okuyucu, dokunmatik veya Bluetooth arızası.", category: "elektronik", riskLevel: "LOW", affectedKm: "Yaş kaynaklı", repairCost: "3.000 - 6.000 TL" }
        ],
        pros: ["Geniş ve konforlu kabin", "Sessiz sürüş", "Kaliteli iç mekan", "Devasa bagaj"],
        cons: ["Twincharger motor karmaşık", "DSG riski", "Bakım maliyeti yüksek"],
        buyingTips: ["DSG kavrama testini mutlaka yapın", "Süperşarj zincir sesini dinleyin", "Devirdaim pompası kontrol ettirin"]
    }
    ,

    // ─── Eski new-cars dosyasından taşındı ───
    {
        id: "vw-golf-6-1-6-tdi",
        slug: "vw-golf-6-1-6-tdi",
        brand: "Volkswagen",
        model: "Golf",
        variant: "VI 1.6 TDI",
        years: "2009-2013",
        generation: "Mk6",
        price: 500000,
        reliabilityScore: 76,
        totalIssues: 6,
        searchCount: 13000,
        expertNote: "Golf 6 hâlâ sınıfının referansı. 1.6 TDI motor ekonomik ve dayanıklı ama DSG ile birleşince riskli. Manuel versiyonlar sorunsuz. Kalite hissi ve sürüş keyfi Golf'un markası.",
        issues: [
            { id: "g6-1", title: "DSG DQ200 Mekatronik Arızası", description: "7 ileri kuru kavramalı DSG'de mekatronik kart arızası. Sarsıntı, vites kararsızlığı.", category: "sanziman", riskLevel: "HIGH", affectedKm: "60.000 - 100.000 km", repairCost: "20.000 - 45.000 TL" },
            { id: "g6-2", title: "EGR Valfi Tıkanması", description: "EGR valfinde kurum birikimi. Motor performans kaybı ve arıza lambası.", category: "motor", riskLevel: "MEDIUM", affectedKm: "60.000+ km", repairCost: "3.000 - 6.000 TL" },
            { id: "g6-3", title: "Devirdaim Pompası Kaçağı", description: "Plastik gövdeli devirdaim pompasından su sızıntısı.", category: "motor", riskLevel: "MEDIUM", affectedKm: "60.000+ km", repairCost: "4.000 - 8.000 TL" },
            { id: "g6-4", title: "Çift Kütleli Volan", description: "Rölantide metalik şıkırtı. Kavrama seti ile birlikte değiştirilmeli.", category: "sanziman", riskLevel: "MEDIUM", affectedKm: "100.000+ km", repairCost: "10.000 - 18.000 TL" },
            { id: "g6-5", title: "Kapı Cam Regülatörü", description: "Cam kaldırma mekanizmasının bozulması. Cam inip kalkmaz.", category: "govde", riskLevel: "LOW", affectedKm: "80.000+ km", repairCost: "2.000 - 4.000 TL" },
            { id: "g6-6", title: "Gösterge Paneli Piksel Bozulması", description: "MFA gösterge ekranında piksel kaybı ve okunaksızlık.", category: "elektronik", riskLevel: "LOW", affectedKm: "Yaş kaynaklı", repairCost: "2.000 - 5.000 TL" }
        ],
        pros: ["Sınıf referansı kalite", "Ekonomik 1.6 TDI", "Mükemmel yol tutuşu", "Yüksek ikinci el değeri"],
        cons: ["DSG riski", "Bakım maliyeti yüksek", "Parça fiyatları artıyor"],
        buyingTips: ["DSG'den kaçın, manuel tercih edin", "Devirdaim pompası kontrol ettirin", "Volan sesini soğuk motorla dinleyin"]
    }
    ,

    // ─── Eski new-cars dosyasından taşındı ───
    {
        id: "vw-touran-1-6-tdi",
        slug: "vw-touran-1-6-tdi",
        brand: "Volkswagen",
        model: "Touran",
        variant: "1.6 TDI",
        years: "2015-2022",
        generation: "5T",
        price: 1500000,
        reliabilityScore: 77,
        totalIssues: 6,
        searchCount: 6800,
        expertNote: "Touran aile aracı olarak harikadır ama bakım masrafları yüksektir. DSG şanzıman ile 1.6 TDI kombini çok yaygındır ve bu ikilinin sorunlarını iyi bilin. 7 koltuklu versiyonlar çok rağbet görür.",
        issues: [
            { id: "touran-1", title: "DSG DQ200 Mekatronik Arızası", description: "Kuru kavramalı 7 ileri DSG şanzımanda mekatronik kart arızası. Vites geçişlerinde sert sarsıntı, kararsızlık ve 'P' moduna geçmeme. Basınç akümülatörü de sorun yaratır.", category: "sanziman", riskLevel: "HIGH", affectedKm: "60.000 - 100.000 km", repairCost: "25.000 - 50.000 TL" },
            { id: "touran-2", title: "Çift Kütleli Volan Sesi", description: "Rölantide ve motor dururken gelen metalik şıkırtı/vuruntu sesi. Kavrama seti ile birlikte değiştirilmesi önerilir. Sesi görmezden gelmek kavramaya zarar verir.", category: "sanziman", riskLevel: "HIGH", affectedKm: "80.000+ km", repairCost: "15.000 - 25.000 TL" },
            { id: "touran-3", title: "EGR Valfi Tıkanması", description: "Egzoz gazı geri dönüş valfinin kurum bağlaması. Motor performans düşüklüğü, arıza lambası ve emisyon hatası verir.", category: "motor", riskLevel: "MEDIUM", affectedKm: "70.000+ km", repairCost: "5.000 - 10.000 TL" },
            { id: "touran-4", title: "Devirdaim Pompası Kaçağı", description: "Plastik gövdeli elektronik devirdaim pompasından su sızdırması. Triger setine yakın konumda olduğu için gecikmeden müdahale edilmeli.", category: "motor", riskLevel: "HIGH", affectedKm: "60.000+ km", repairCost: "8.000 - 15.000 TL" },
            { id: "touran-5", title: "Sürgülü Kapı Mekanizması", description: "7 koltuklu modellerde arka sürgülü kapı raylarının aşınması ve kapının düzgün kapanmaması veya açılmaması.", category: "govde", riskLevel: "MEDIUM", affectedKm: "80.000+ km", repairCost: "5.000 - 10.000 TL" },
            { id: "touran-6", title: "Arka Süspansiyon Gıcırtısı", description: "Arka torsion bar süspansiyonun bozuk yollarda gıcırtı ve vuruntu yapması. Burç ve amortisör değişimi gerekir.", category: "suspansiyon", riskLevel: "LOW", affectedKm: "50.000+ km", repairCost: "4.000 - 8.000 TL" }
        ],
        pros: ["7 koltuk opsiyonu", "Devasa bagaj (615L)", "Volkswagen kalitesi", "Sessiz kabin"],
        cons: ["DSG masraf riski", "Bakım maliyeti yüksek", "Ağır kasa (Yakıt tüketimi)"],
        buyingTips: ["DSG kavrama testini mutlaka yapın (Yokuş kalkışı)", "Volan sesini dinleyin (Motor dururken şıkırtı)", "Sürgülü kapıları açıp kapatın"]
    }
    ,
    {
        "id": "vw-passat-b8-2-0-tdi",
        "slug": "vw-passat-b8-2-0-tdi",
        "brand": "Volkswagen",
        "model": "Passat (B8)",
        "variant": "2.0 TDI DSG",
        "years": "2015-2023",
        "generation": "B8",
        "price": 1800000,
        "expertNote": "EA288 2.0 TDI 150 HP + DSG7. Türkiye'nin en çok satan D segment dizel sedan/SW. AdBlue ve DSG mecburettik bakım kalemleri. Uzun yol canavarı, 4L/100km yakar.",
        "reliabilityScore": 82,
        "totalIssues": 5,
        "searchCount": 25000,
        "issues": [
            {
                "id": "pb8-1",
                "title": "DSG Mechatronik",
                "description": "DSG7 şanzıman mechatronik ünitesi arızası. Vites geçişlerinde sarsıntı.",
                "category": "sanziman",
                "riskLevel": "HIGH",
                "affectedKm": "100.000+ km",
                "repairCost": "20.000 - 40.000 TL"
            },
            {
                "id": "pb8-2",
                "title": "AdBlue Pompası",
                "description": "AdBlue dozaj pompası arızası. Motor güç kısıtlaması.",
                "category": "motor",
                "riskLevel": "MEDIUM",
                "affectedKm": "80.000+ km",
                "repairCost": "10.000 - 20.000 TL"
            },
            {
                "id": "pb8-3",
                "title": "DPF Tıkanması",
                "description": "Şehir içi kullanımda partikül filtresi dolması.",
                "category": "motor",
                "riskLevel": "MEDIUM",
                "affectedKm": "Şehir içi",
                "repairCost": "5.000 - 12.000 TL"
            },
            {
                "id": "pb8-4",
                "title": "Süspansiyon Burcu",
                "description": "Ön süspansiyon burçlarının aşınması, vuruntu sesi.",
                "category": "suspansiyon",
                "riskLevel": "LOW",
                "affectedKm": "60.000+ km",
                "repairCost": "2.000 - 5.000 TL"
            },
            {
                "id": "pb8-5",
                "title": "Discover Pro Donma",
                "description": "Multimedya ekranının donması ve yeniden başlaması.",
                "category": "elektronik",
                "riskLevel": "LOW",
                "affectedKm": "Rastgele",
                "repairCost": "Yazılım Güncelleme"
            }
        ],
        "pros": [
            "Uzun yol konforu",
            "Düşük yakıt (4L/100km)",
            "Geniş bagaj",
            "Prestij"
        ],
        "cons": [
            "DSG bakımı pahalı",
            "AdBlue sistemi",
            "Parça fiyatları"
        ],
        "buyingTips": [
            "DSG yağ değişim geçmişini sorun",
            "AdBlue pompası kontrol ettirin",
            "Highline donanım tercih edin"
        ]
    },
    {
        "id": "vw-tiguan-2-0-tdi-mk2",
        "slug": "vw-tiguan-2-0-tdi-mk2",
        "brand": "Volkswagen",
        "model": "Tiguan (Mk2)",
        "variant": "2.0 TDI DSG 4Motion",
        "years": "2016-2024",
        "generation": "AD1",
        "price": 2000000,
        "expertNote": "EA288 2.0 TDI 150 HP + DSG7 + 4Motion. Tiguan Mk2 Türkiye'nin en çok aranan SUV'u. VW kalitesi + DSG konfor + 4Motion güvenliği. AdBlue ve DSG bakımı önemli.",
        "reliabilityScore": 81,
        "totalIssues": 5,
        "searchCount": 22000,
        "issues": [
            {
                "id": "tig2-1",
                "title": "DSG Kavrama Titremesi",
                "description": "DSG7 şanzımanda düşük devirde titreşim.",
                "category": "sanziman",
                "riskLevel": "MEDIUM",
                "affectedKm": "50.000+ km",
                "repairCost": "10.000 - 25.000 TL"
            },
            {
                "id": "tig2-2",
                "title": "AdBlue Pompası",
                "description": "AdBlue dozaj pompası arızası.",
                "category": "motor",
                "riskLevel": "MEDIUM",
                "affectedKm": "80.000+ km",
                "repairCost": "10.000 - 20.000 TL"
            },
            {
                "id": "tig2-3",
                "title": "DPF Tıkanması",
                "description": "Şehir içi kullanımda DPF dolması.",
                "category": "motor",
                "riskLevel": "MEDIUM",
                "affectedKm": "Şehir içi",
                "repairCost": "5.000 - 12.000 TL"
            },
            {
                "id": "tig2-4",
                "title": "Panoramik Tavan Sesi",
                "description": "Panoramik cam tavandan kasis sesler.",
                "category": "govde",
                "riskLevel": "LOW",
                "affectedKm": "Bozuk yollar",
                "repairCost": "Fitil ayarı"
            },
            {
                "id": "tig2-5",
                "title": "Discover Pro Donma",
                "description": "Multimedya ekranının donması.",
                "category": "elektronik",
                "riskLevel": "LOW",
                "affectedKm": "Rastgele",
                "repairCost": "Yazılım"
            }
        ],
        "pros": [
            "VW kalitesi",
            "DSG + 4Motion",
            "Geniş iç mekan",
            "Yüksek ikinci el değeri"
        ],
        "cons": [
            "DSG bakım maliyeti",
            "AdBlue riski",
            "Fiyatı yüksek"
        ],
        "buyingTips": [
            "DSG yağ değişim geçmişi",
            "Highline R-Line alın",
            "4Motion tercih edin"
        ]
    }
    ,
    {
        "id": "vw-polo-6r-1-4-tdi",
        "slug": "vw-polo-6r-1-4-tdi",
        "brand": "Volkswagen",
        "model": "Polo (6R/6C)",
        "variant": "1.4 TDI Comfortline",
        "years": "2009-2017",
        "generation": "6R/6C",
        "price": 500000,
        "expertNote": "EA288 1.4 TDI 90 HP + DSG7. Polo 6R Türkiye'de B segment dizel olarak çok satıldı. Küçük ama kaliteli. DSG7 hassas ama motor çok güvenilir ve ekonomik.",
        "reliabilityScore": 80,
        "totalIssues": 5,
        "searchCount": 14000,
        "issues": [
            {
                "id": "polo6r-1",
                "title": "DSG7 Mechatronik",
                "description": "DSG7 şanzıman mechatronik ünitesi arızası.",
                "category": "sanziman",
                "riskLevel": "HIGH",
                "affectedKm": "80.000+ km",
                "repairCost": "15.000 - 30.000 TL"
            },
            {
                "id": "polo6r-2",
                "title": "EGR Tıkanması",
                "description": "EGR valfinde karbon birikimi.",
                "category": "motor",
                "riskLevel": "MEDIUM",
                "affectedKm": "80.000+ km",
                "repairCost": "3.000 - 6.000 TL"
            },
            {
                "id": "polo6r-3",
                "title": "Cam Kaldırma",
                "description": "Cam kaldırma mekanizması arızası.",
                "category": "govde",
                "riskLevel": "LOW",
                "affectedKm": "60.000+ km",
                "repairCost": "1.500 - 3.000 TL"
            },
            {
                "id": "polo6r-4",
                "title": "Arka Fren Kampanası",
                "description": "Arka kampanalı fren aşınması.",
                "category": "fren",
                "riskLevel": "LOW",
                "affectedKm": "50.000+ km",
                "repairCost": "1.500 - 3.000 TL"
            },
            {
                "id": "polo6r-5",
                "title": "Klima Kompresörü",
                "description": "Klima kompresörü arızası.",
                "category": "elektronik",
                "riskLevel": "MEDIUM",
                "affectedKm": "80.000+ km",
                "repairCost": "5.000 - 10.000 TL"
            }
        ],
        "pros": [
            "VW kalitesi",
            "Ekonomik TDI",
            "Kompakt boyut",
            "DSG konfor"
        ],
        "cons": [
            "DSG hassasiyeti",
            "Arka alan dar",
            "Parça fiyatları"
        ],
        "buyingTips": [
            "DSG yağ bakımı yapılmış mı",
            "Manuel alırsanız sorun yok",
            "Comfortline minimum donanım"
        ]
    }
    ,
    {
        "id": "vw-caddy-2k-1-6-tdi",
        "slug": "vw-caddy-2k-1-6-tdi",
        "brand": "Volkswagen",
        "model": "Caddy (2K)",
        "variant": "1.6 TDI Trendline",
        "years": "2010-2015",
        "generation": "2K",
        "price": 600000,
        "expertNote": "CAYC 1.6 TDI 102 HP + 5MT/DSG7. Caddy 2K Türkiye'de hem ticari hem aile aracı. Motor güvenilir. DSG7'den uzak durun, 5MT tercih edin. Geniş iç mekan.",
        "reliabilityScore": 78,
        "totalIssues": 5,
        "searchCount": 14000,
        "issues": [
            {
                "id": "cad2k-1",
                "title": "DSG7 Mechatronik",
                "description": "DSG7 şanzıman mechatronik arızası (DSG varsa).",
                "category": "sanziman",
                "riskLevel": "HIGH",
                "affectedKm": "80.000+ km",
                "repairCost": "15.000 - 30.000 TL"
            },
            {
                "id": "cad2k-2",
                "title": "EGR Tıkanması",
                "description": "EGR valfinde kurum birikimi.",
                "category": "motor",
                "riskLevel": "MEDIUM",
                "affectedKm": "80.000+ km",
                "repairCost": "2.000 - 5.000 TL"
            },
            {
                "id": "cad2k-3",
                "title": "Sürgülü Kapı Rayı",
                "description": "Sürgülü kapı ray mekanizması aşınması.",
                "category": "govde",
                "riskLevel": "LOW",
                "affectedKm": "80.000+ km",
                "repairCost": "3.000 - 6.000 TL"
            },
            {
                "id": "cad2k-4",
                "title": "Devridaim Pompası",
                "description": "Su pompası sızıntısı.",
                "category": "motor",
                "riskLevel": "MEDIUM",
                "affectedKm": "80.000+ km",
                "repairCost": "2.000 - 5.000 TL"
            },
            {
                "id": "cad2k-5",
                "title": "Arka Yaprak Yay",
                "description": "Arka yaprak yaylarının kırılması (yüklü).",
                "category": "suspansiyon",
                "riskLevel": "MEDIUM",
                "affectedKm": "Yüklü kullanım",
                "repairCost": "2.000 - 4.000 TL"
            }
        ],
        "pros": [
            "Geniş iç mekan",
            "VW kalitesi",
            "Ekonomik TDI",
            "Sürgülü kapılar"
        ],
        "cons": [
            "DSG7 riski",
            "Ticari araç hissi",
            "Parça fiyatları"
        ],
        "buyingTips": [
            "MUTLAKA 5MT alın DSG7 ALMAYIN",
            "EGR kontrolü",
            "Sürgülü kapı testi"
        ]
    }
    ,
    {
        "id": "vw-golf-3-1-6",
        "slug": "vw-golf-3-1-6-cl",
        "brand": "Volkswagen",
        "model": "Golf III",
        "variant": "1.6 CL",
        "years": "1991-1997",
        "generation": "Mk3 (1H)",
        "price": 100000,
        "expertNote": "ABU 1.6 75 HP. Golf 3 Türkiye'de çok satıldı. Motor basit ve güvenilir. HB ve Variant versiyonları. VR6 versiyonu koleksiyonluk.",
        "reliabilityScore": 74,
        "totalIssues": 5,
        "searchCount": 14000,
        "issues": [
            {
                "id": "g3-1",
                "title": "Triger Kayışı",
                "description": "Triger kayışı kontrol zamanı.",
                "category": "motor",
                "riskLevel": "CRITICAL",
                "affectedKm": "60.000 km",
                "repairCost": "600 - 1.200 TL"
            },
            {
                "id": "g3-2",
                "title": "Kaporta Pası",
                "description": "Kapı altları ve arka çamurluk pası.",
                "category": "govde",
                "riskLevel": "MEDIUM",
                "affectedKm": "Yaş kaynaklı",
                "repairCost": "Boya / Kaynak"
            },
            {
                "id": "g3-3",
                "title": "Termostat",
                "description": "Termostat arızası.",
                "category": "motor",
                "riskLevel": "LOW",
                "affectedKm": "Yaş kaynaklı",
                "repairCost": "200 - 500 TL"
            },
            {
                "id": "g3-4",
                "title": "Cam Kaldırma",
                "description": "Cam kaldırma mekanizması arızası.",
                "category": "govde",
                "riskLevel": "LOW",
                "affectedKm": "Yaş kaynaklı",
                "repairCost": "500 - 1.200 TL"
            },
            {
                "id": "g3-5",
                "title": "Valf Kapağı Contası",
                "description": "Valf kapağından yağ sızıntısı.",
                "category": "motor",
                "riskLevel": "LOW",
                "affectedKm": "100.000+ km",
                "repairCost": "300 - 800 TL"
            }
        ],
        "pros": [
            "Güvenilir motor",
            "VW kalitesi",
            "Ucuz bakım",
            "Yedek parça bol"
        ],
        "cons": [
            "Yaşlı araç",
            "Pas başlıyor",
            "Konfor az",
            "Güvenlik eski"
        ],
        "buyingTips": [
            "ABU motor güvenilir",
            "Triger kontrolü",
            "CL veya GL tercih",
            "VR6 varsa koleksiyonluk"
        ]
    }
    ,
    {
        "id": "vw-golf-4-1-6",
        "slug": "vw-golf-4-1-6-comfortline",
        "brand": "Volkswagen",
        "model": "Golf IV",
        "variant": "1.6 Comfortline",
        "years": "1997-2003",
        "generation": "Mk4 (1J)",
        "price": 170000,
        "expertNote": "AKL/APF 1.6 100 HP. Golf 4 modern VW çağını başlattı. Kaliteli iç mekan, iyi sürüş. HB ve Variant. R32 versiyonu efsane. Türkiye'de çok yaygın.",
        "reliabilityScore": 77,
        "totalIssues": 5,
        "searchCount": 18000,
        "issues": [
            {
                "id": "g4-1",
                "title": "Bobinler",
                "description": "Ateşleme bobini arızası. Misfire.",
                "category": "motor",
                "riskLevel": "MEDIUM",
                "affectedKm": "80.000+ km",
                "repairCost": "500 - 1.500 TL"
            },
            {
                "id": "g4-2",
                "title": "Cam Kaldırma",
                "description": "Cam kaldırma mekanizması klipsi kırılması.",
                "category": "govde",
                "riskLevel": "LOW",
                "affectedKm": "Yaş kaynaklı",
                "repairCost": "300 - 800 TL"
            },
            {
                "id": "g4-3",
                "title": "Su Pompası",
                "description": "Devridaim pompası sızıntısı.",
                "category": "motor",
                "riskLevel": "MEDIUM",
                "affectedKm": "80.000+ km",
                "repairCost": "500 - 1.500 TL"
            },
            {
                "id": "g4-4",
                "title": "Yağ Tüketimi",
                "description": "AKL motorlarda yağ tüketimi artışı.",
                "category": "motor",
                "riskLevel": "LOW",
                "affectedKm": "150.000+ km",
                "repairCost": "Takip"
            },
            {
                "id": "g4-5",
                "title": "Süspansiyon Burçları",
                "description": "Ön süspansiyon burçlarının aşınması.",
                "category": "suspansiyon",
                "riskLevel": "LOW",
                "affectedKm": "60.000+ km",
                "repairCost": "500 - 1.500 TL"
            }
        ],
        "pros": [
            "VW kalitesi",
            "İyi sürüş",
            "Kaliteli iç mekan",
            "Güvenilir 1.6"
        ],
        "cons": [
            "Parça pahalılaştı",
            "Yaşlanıyor",
            "Yağ tüketimi",
            "Fiyatı arttı"
        ],
        "buyingTips": [
            "AKL motor tercih edin",
            "Comfortline donanım ideal",
            "Yağ seviyesi kontrol",
            "HB versiyonu daha sportif"
        ]
    }
    ,
    {
        "id": "vw-passat-b5-1-8t",
        "slug": "vw-passat-b5-1-8t-comfortline",
        "brand": "Volkswagen",
        "model": "Passat",
        "variant": "B5 1.8T Comfortline",
        "years": "1996-2005",
        "generation": "B5/B5.5 (3B)",
        "price": 170000,
        "expertNote": "APU/AEB 1.8T 150 HP. Passat B5 en kaliteli D segment araçlardan biri. Audi A4 B5 tabanlı. 1.8T motor güçlü ama turbo ve yağ tüketimi bilinen sorunlar.",
        "reliabilityScore": 72,
        "totalIssues": 6,
        "searchCount": 15000,
        "issues": [
            {
                "id": "pb5-1",
                "title": "Turbo Arızası",
                "description": "K03 turbo arızası. Yağ keçesi ve hareket kolu.",
                "category": "motor",
                "riskLevel": "HIGH",
                "affectedKm": "120.000+ km",
                "repairCost": "5.000 - 10.000 TL"
            },
            {
                "id": "pb5-2",
                "title": "Yağ Tüketimi",
                "description": "1.8T motorlarda kronik yağ tüketimi.",
                "category": "motor",
                "riskLevel": "MEDIUM",
                "affectedKm": "100.000+ km",
                "repairCost": "Segman / Supap"
            },
            {
                "id": "pb5-3",
                "title": "Su Pompası",
                "description": "Plastik çarklı su pompası kırılması.",
                "category": "motor",
                "riskLevel": "MEDIUM",
                "affectedKm": "80.000+ km",
                "repairCost": "1.000 - 2.000 TL"
            },
            {
                "id": "pb5-4",
                "title": "Triger Kayışı",
                "description": "Triger kayışı kopması. Motor hasarı.",
                "category": "motor",
                "riskLevel": "CRITICAL",
                "affectedKm": "60.000 km",
                "repairCost": "1.500 - 3.000 TL"
            },
            {
                "id": "pb5-5",
                "title": "Cam Kaldırma",
                "description": "Cam kaldırma mekanizması arızası.",
                "category": "govde",
                "riskLevel": "LOW",
                "affectedKm": "Yaş kaynaklı",
                "repairCost": "500 - 1.500 TL"
            },
            {
                "id": "pb5-6",
                "title": "Gösterge Pikselleri",
                "description": "Gösterge paneli piksellerinin sönmesi.",
                "category": "elektronik",
                "riskLevel": "LOW",
                "affectedKm": "Yaş kaynaklı",
                "repairCost": "500 - 1.500 TL"
            }
        ],
        "pros": [
            "Audi tabanlı kalite",
            "1.8T güçlü",
            "D segment konfor",
            "VW güvenilirliği"
        ],
        "cons": [
            "Turbo maliyetli",
            "Yağ tüketimi",
            "Triger riski",
            "Parça pahalı"
        ],
        "buyingTips": [
            "Turbo sesi dinleyin",
            "Yağ tüketimi sorulmalı",
            "Triger ne zaman değişti",
            "B5.5 facelift tercih edin"
        ]
    }
    ,
    {
        "id": "vw-bora-1-6-pacific",
        "slug": "vw-bora-1-6-pacific",
        "brand": "Volkswagen",
        "model": "Bora",
        "variant": "1.6 Pacific",
        "years": "1998-2005",
        "generation": "1J",
        "price": 170000,
        "expertNote": "AKL 1.6 100 HP. Bora = Golf 4'ün sedan versiyonu. Pacific özel seri donanım. Türkiye'de çok popüler sedan. Golf 4 ile aynı güvenilirlik.",
        "reliabilityScore": 77,
        "totalIssues": 5,
        "searchCount": 14000,
        "issues": [
            {
                "id": "bor-1",
                "title": "Bobinler",
                "description": "Ateşleme bobini arızası.",
                "category": "motor",
                "riskLevel": "MEDIUM",
                "affectedKm": "80.000+ km",
                "repairCost": "500 - 1.500 TL"
            },
            {
                "id": "bor-2",
                "title": "Cam Kaldırma",
                "description": "Cam kaldırma klipsi kırılması.",
                "category": "govde",
                "riskLevel": "LOW",
                "affectedKm": "Yaş kaynaklı",
                "repairCost": "300 - 800 TL"
            },
            {
                "id": "bor-3",
                "title": "Yağ Tüketimi",
                "description": "Motor yağ tüketimi artışı.",
                "category": "motor",
                "riskLevel": "LOW",
                "affectedKm": "150.000+ km",
                "repairCost": "Takip"
            },
            {
                "id": "bor-4",
                "title": "Su Pompası",
                "description": "Devridaim pompası sızıntısı.",
                "category": "motor",
                "riskLevel": "MEDIUM",
                "affectedKm": "80.000+ km",
                "repairCost": "500 - 1.500 TL"
            },
            {
                "id": "bor-5",
                "title": "Merkezi Kilit",
                "description": "Merkezi kilit motoru arızası.",
                "category": "elektronik",
                "riskLevel": "LOW",
                "affectedKm": "Yaş kaynaklı",
                "repairCost": "300 - 800 TL"
            }
        ],
        "pros": [
            "Golf 4 güvenilirliği",
            "Sedan konfor",
            "Pacific donanım zengin",
            "VW kalitesi"
        ],
        "cons": [
            "Yaşlanıyor",
            "Parça pahalılaştı",
            "Fiyatı yüksek",
            "Yağ tüketimi"
        ],
        "buyingTips": [
            "Pacific donanım tercih edin",
            "AKL motor güvenilir",
            "Sedan konfor isteyenlere",
            "Golf 4 ile aynı yedek parça"
        ]
    }
    ,
    {
        "id": "vw-polo-6n-1-6",
        "slug": "vw-polo-6n-1-6-comfortline",
        "brand": "Volkswagen",
        "model": "Polo",
        "variant": "6N 1.6 Comfortline",
        "years": "1994-2001",
        "generation": "6N",
        "price": 80000,
        "expertNote": "AEE 1.6 75 HP. Polo 6N küçük ama kaliteli VW. İyi iç mekan kalitesi, güvenilir motor. Şehir aracı olarak ideal.",
        "reliabilityScore": 75,
        "totalIssues": 5,
        "searchCount": 10000,
        "issues": [
            {
                "id": "p6n-1",
                "title": "Triger Kayışı",
                "description": "Triger kayışı kontrol zamanı.",
                "category": "motor",
                "riskLevel": "CRITICAL",
                "affectedKm": "60.000 km",
                "repairCost": "500 - 1.000 TL"
            },
            {
                "id": "p6n-2",
                "title": "Cam Kaldırma",
                "description": "Cam kaldırma mekanizması arızası.",
                "category": "govde",
                "riskLevel": "LOW",
                "affectedKm": "Yaş kaynaklı",
                "repairCost": "400 - 800 TL"
            },
            {
                "id": "p6n-3",
                "title": "Radyatör",
                "description": "Radyatör sızıntısı.",
                "category": "motor",
                "riskLevel": "MEDIUM",
                "affectedKm": "Yaş kaynaklı",
                "repairCost": "500 - 1.500 TL"
            },
            {
                "id": "p6n-4",
                "title": "Fren Diskleri",
                "description": "Ön fren disklerinin çarpması.",
                "category": "fren",
                "riskLevel": "LOW",
                "affectedKm": "40.000+ km",
                "repairCost": "500 - 1.000 TL"
            },
            {
                "id": "p6n-5",
                "title": "Kaporta Pası",
                "description": "Arka çamurluk pası.",
                "category": "govde",
                "riskLevel": "MEDIUM",
                "affectedKm": "Yaş kaynaklı",
                "repairCost": "Boya"
            }
        ],
        "pros": [
            "VW kalitesi",
            "Güvenilir 1.6",
            "Küçük ama kaliteli",
            "Ekonomik"
        ],
        "cons": [
            "Küçük araç",
            "75 HP az",
            "Yaşlı",
            "Parça kısmen zor"
        ],
        "buyingTips": [
            "AEE motor tercihi",
            "6N2 facelift daha iyi",
            "Comfortline donanım şart",
            "Triger kontrolü"
        ]
    }
    ,
    {
        "id": "vw-jetta-1-6-tdi",
        "slug": "vw-jetta-mk6-1-6-tdi-comfortline",
        "brand": "Volkswagen",
        "model": "Jetta",
        "variant": "Mk6 1.6 TDI Comfortline",
        "years": "2011-2018",
        "generation": "Mk6 (5C6)",
        "price": 500000,
        "expertNote": "CAYC/CLHA 1.6 TDI 105 HP. Jetta Mk6 Golf'ün sedan versiyonu. VW kalitesi, DSG şanzıman seçeneği. Comfortline donanım yeterli. Türkiye'de çok satıldı.",
        "reliabilityScore": 76,
        "totalIssues": 5,
        "searchCount": 18000,
        "issues": [
            {
                "id": "jet-1",
                "title": "DSG Şanzıman",
                "description": "7 ileri DSG (DQ200) mekatro arızası.",
                "category": "sanziman",
                "riskLevel": "HIGH",
                "affectedKm": "80.000+ km",
                "repairCost": "10.000 - 25.000 TL"
            },
            {
                "id": "jet-2",
                "title": "EGR Valfi",
                "description": "EGR valfi tıkanması.",
                "category": "motor",
                "riskLevel": "MEDIUM",
                "affectedKm": "80.000+ km",
                "repairCost": "2.000 - 5.000 TL"
            },
            {
                "id": "jet-3",
                "title": "Turbo",
                "description": "Turbo aktuatör arızası.",
                "category": "motor",
                "riskLevel": "MEDIUM",
                "affectedKm": "120.000+ km",
                "repairCost": "3.000 - 8.000 TL"
            },
            {
                "id": "jet-4",
                "title": "Süspansiyon",
                "description": "Ön alt kol burçları aşınması.",
                "category": "suspansiyon",
                "riskLevel": "LOW",
                "affectedKm": "50.000+ km",
                "repairCost": "1.000 - 2.500 TL"
            },
            {
                "id": "jet-5",
                "title": "Klima Kompresörü",
                "description": "Klima kompresörü arızası.",
                "category": "elektronik",
                "riskLevel": "MEDIUM",
                "affectedKm": "100.000+ km",
                "repairCost": "3.000 - 6.000 TL"
            }
        ],
        "pros": [
            "VW kalitesi",
            "Geniş sedan",
            "1.6 TDI ekonomik",
            "Comfortline iyi"
        ],
        "cons": [
            "DSG ÇOK RİSKLİ",
            "Parça pahalı",
            "EGR sorunu",
            "Plastikler sertleşiyor"
        ],
        "buyingTips": [
            "MANUEL ŞANZIMAN tercih edin",
            "DSG'li alıyorsanız mekatro kontrolü",
            "1.6 TDI en ekonomik",
            "Comfortline yeterli"
        ]
    }
    ,
    {
        "id": "vw-passat-b7-1-6-tdi",
        "slug": "vw-passat-b7-1-6-tdi-comfortline",
        "brand": "Volkswagen",
        "model": "Passat",
        "variant": "B7 1.6 TDI Comfortline",
        "years": "2010-2015",
        "generation": "B7 (3C)",
        "price": 500000,
        "expertNote": "CAYC 1.6 TDI 105 HP. Passat B7 aslında B6 facelift. D segment VW kalitesi. Comfortline donanım 5.8 inç ekran, park sensörü. DSG veya 6MT seçeneği.",
        "reliabilityScore": 75,
        "totalIssues": 5,
        "searchCount": 16000,
        "issues": [
            {
                "id": "pb7-1",
                "title": "DSG Şanzıman",
                "description": "DQ200 7 ileri DSG mekatro arızası.",
                "category": "sanziman",
                "riskLevel": "HIGH",
                "affectedKm": "80.000+ km",
                "repairCost": "10.000 - 25.000 TL"
            },
            {
                "id": "pb7-2",
                "title": "Triger Kayışı",
                "description": "1.6 TDI motorlarda triger kayışı kontrolü.",
                "category": "motor",
                "riskLevel": "CRITICAL",
                "affectedKm": "120.000 km",
                "repairCost": "2.000 - 4.000 TL"
            },
            {
                "id": "pb7-3",
                "title": "EGR Valfi",
                "description": "EGR valfi tıkanması.",
                "category": "motor",
                "riskLevel": "MEDIUM",
                "affectedKm": "80.000+ km",
                "repairCost": "2.000 - 5.000 TL"
            },
            {
                "id": "pb7-4",
                "title": "Yağ Pompası Zinciri",
                "description": "Yağ pompası zinciri uzaması (bazı motorlarda).",
                "category": "motor",
                "riskLevel": "HIGH",
                "affectedKm": "100.000+ km",
                "repairCost": "5.000 - 10.000 TL"
            },
            {
                "id": "pb7-5",
                "title": "Süspansiyon",
                "description": "Ön süspansiyon burçları.",
                "category": "suspansiyon",
                "riskLevel": "LOW",
                "affectedKm": "50.000+ km",
                "repairCost": "1.000 - 2.500 TL"
            }
        ],
        "pros": [
            "D segment VW",
            "Kaliteli yapı",
            "1.6 TDI ekonomik",
            "Comfortline donanım iyi"
        ],
        "cons": [
            "DSG riski çok yüksek",
            "EGR sorunu",
            "Triger kayışı",
            "Parça pahalı"
        ],
        "buyingTips": [
            "MANUEL tercih edin",
            "DSG mekatro kontrolü",
            "Triger ne zaman değişti",
            "B7 esasen B6 facelift"
        ]
    }
    ,
    {
        "id": "vw-polo-6r-1-4-tdi",
        "slug": "vw-polo-6r-1-4-tdi-comfortline",
        "brand": "Volkswagen",
        "model": "Polo",
        "variant": "6R 1.4 TDI Comfortline",
        "years": "2009-2017",
        "generation": "6R/6C",
        "price": 350000,
        "expertNote": "CUSA 1.4 TDI 75/90 HP. Polo 6R/6C küçük ama kaliteli VW. 1.4 TDI yeni nesil motor güvenilir. Comfortline donanım 6.5 inç ekran, klima.",
        "reliabilityScore": 78,
        "totalIssues": 5,
        "searchCount": 14000,
        "issues": [
            {
                "id": "p6r-1",
                "title": "DSG Şanzıman",
                "description": "DQ200 7 ileri DSG mekatro arızası (DSG varsa).",
                "category": "sanziman",
                "riskLevel": "HIGH",
                "affectedKm": "80.000+ km",
                "repairCost": "10.000 - 20.000 TL"
            },
            {
                "id": "p6r-2",
                "title": "Triger Kayışı",
                "description": "Triger kayışı kontrol/değişim.",
                "category": "motor",
                "riskLevel": "CRITICAL",
                "affectedKm": "120.000 km",
                "repairCost": "1.500 - 3.000 TL"
            },
            {
                "id": "p6r-3",
                "title": "Bobinler",
                "description": "Ateşleme bobini arızası (benzinli).",
                "category": "motor",
                "riskLevel": "LOW",
                "affectedKm": "80.000+ km",
                "repairCost": "500 - 1.500 TL"
            },
            {
                "id": "p6r-4",
                "title": "Cam Kaldırma",
                "description": "Cam kaldırma mekanizması klips.",
                "category": "govde",
                "riskLevel": "LOW",
                "affectedKm": "Yaş kaynaklı",
                "repairCost": "300 - 800 TL"
            },
            {
                "id": "p6r-5",
                "title": "EGR",
                "description": "EGR valfi tıkanması.",
                "category": "motor",
                "riskLevel": "MEDIUM",
                "affectedKm": "80.000+ km",
                "repairCost": "1.500 - 3.000 TL"
            }
        ],
        "pros": [
            "VW kalitesi",
            "Güvenilir 1.4 TDI",
            "Kompakt ve kaliteli",
            "Ucuz bakım"
        ],
        "cons": [
            "DSG riski",
            "Küçük araç",
            "Parça pahalılaştı",
            "Bagaj küçük"
        ],
        "buyingTips": [
            "Manuel şanzıman tercih",
            "6C facelift daha iyi",
            "1.4 TDI ekonomik",
            "Comfortline yeterli"
        ]
    }
    ,
    {
        "id": "vw-golf-7-1-6-tdi",
        "slug": "vw-golf-7-1-6-tdi-comfortline",
        "brand": "Volkswagen",
        "model": "Golf VII",
        "variant": "1.6 TDI Comfortline",
        "years": "2012-2019",
        "generation": "Mk7 (5G)",
        "price": 650000,
        "expertNote": "CLHA/DGTE 1.6 TDI 110 HP. Golf 7 dünyanın en iyi C segmenti. MQB platformu. Comfortline donanım 6.5 inç Discovery, ACC, park sensörü. Kalite standartı.",
        "reliabilityScore": 78,
        "totalIssues": 5,
        "searchCount": 20000,
        "issues": [
            {
                "id": "g7-1",
                "title": "DSG Şanzıman",
                "description": "DQ200 7 ileri DSG mekatro arızası.",
                "category": "sanziman",
                "riskLevel": "HIGH",
                "affectedKm": "80.000+ km",
                "repairCost": "10.000 - 25.000 TL"
            },
            {
                "id": "g7-2",
                "title": "AdBlue Sistemi",
                "description": "AdBlue enjektörü ve pompa arızası.",
                "category": "motor",
                "riskLevel": "MEDIUM",
                "affectedKm": "80.000+ km",
                "repairCost": "3.000 - 6.000 TL"
            },
            {
                "id": "g7-3",
                "title": "Turbo",
                "description": "Turbo aktuatör arızası.",
                "category": "motor",
                "riskLevel": "MEDIUM",
                "affectedKm": "120.000+ km",
                "repairCost": "3.000 - 8.000 TL"
            },
            {
                "id": "g7-4",
                "title": "Su Pompası",
                "description": "Elektrikli su pompası arızası.",
                "category": "motor",
                "riskLevel": "MEDIUM",
                "affectedKm": "80.000+ km",
                "repairCost": "2.000 - 5.000 TL"
            },
            {
                "id": "g7-5",
                "title": "Multimedya",
                "description": "Discover multimedya donması.",
                "category": "elektronik",
                "riskLevel": "LOW",
                "affectedKm": "Kronik",
                "repairCost": "500 - 2.000 TL"
            }
        ],
        "pros": [
            "En iyi C segment",
            "MQB kalitesi",
            "Comfortline donanım süper",
            "Sürüş keyfi"
        ],
        "cons": [
            "DSG riski",
            "AdBlue sorunu",
            "Fiyatı çok yüksek",
            "VW parça maliyeti"
        ],
        "buyingTips": [
            "Manuel şanzıman altın değerinde",
            "DSG mekatro kontrolü",
            "Comfortline yeterli, Highline gereksiz",
            "1.6 TDI en mantıklı motor"
        ]
    }
    ,
    {
        "id": "vw-tiguan-1-4-tsi",
        "slug": "vw-tiguan-mk2-1-4-tsi-comfortline",
        "brand": "Volkswagen",
        "model": "Tiguan",
        "variant": "Mk2 1.4 TSI Comfortline",
        "years": "2016-2024",
        "generation": "Mk2 (AD1)",
        "price": 1100000,
        "expertNote": "CZEA 1.4 TSI 150 HP. Tiguan Mk2 VW'nin en çok satan SUV'u. MQB platformu. Comfortline donanım 8 inç Discover, park asistanı, LED far. Premium C-SUV.",
        "reliabilityScore": 77,
        "totalIssues": 5,
        "searchCount": 18000,
        "issues": [
            {
                "id": "tig-1",
                "title": "DSG Şanzıman",
                "description": "DQ250 6 ileri DSG ıslak kavrama sorunları.",
                "category": "sanziman",
                "riskLevel": "MEDIUM",
                "affectedKm": "100.000+ km",
                "repairCost": "8.000 - 15.000 TL"
            },
            {
                "id": "tig-2",
                "title": "Su Pompası",
                "description": "Elektrikli su pompası arızası.",
                "category": "motor",
                "riskLevel": "MEDIUM",
                "affectedKm": "80.000+ km",
                "repairCost": "2.000 - 5.000 TL"
            },
            {
                "id": "tig-3",
                "title": "Turbo",
                "description": "Turbo wastegate arızası.",
                "category": "motor",
                "riskLevel": "MEDIUM",
                "affectedKm": "120.000+ km",
                "repairCost": "5.000 - 10.000 TL"
            },
            {
                "id": "tig-4",
                "title": "Infotainment",
                "description": "Discover Pro donma ve bug.",
                "category": "elektronik",
                "riskLevel": "LOW",
                "affectedKm": "Kronik",
                "repairCost": "500 - 2.000 TL"
            },
            {
                "id": "tig-5",
                "title": "Ön Süspansiyon",
                "description": "Ön alt kol ve bilyalar.",
                "category": "suspansiyon",
                "riskLevel": "LOW",
                "affectedKm": "50.000+ km",
                "repairCost": "1.500 - 3.000 TL"
            }
        ],
        "pros": [
            "Premium C-SUV",
            "MQB kalitesi",
            "Comfortline zengin",
            "1.4 TSI güçlü"
        ],
        "cons": [
            "Fiyatı çok yüksek",
            "DSG bakım maliyeti",
            "VW parça pahalı",
            "Yakıt tüketimi"
        ],
        "buyingTips": [
            "DSG 6 ileri ıslak kavrama daha güvenli",
            "1.4 TSI yeterli güçte",
            "Comfortline en iyi donanım/fiyat",
            "İkinci el değer kaybı düşük"
        ]
    }
    ,
    {
        "id": "vw-golf-75-fl",
        "slug": "vw-golf-7-5-1-5-tsi-facelift",
        "brand": "Volkswagen",
        "model": "Golf",
        "variant": "Golf 7.5 Facelift 1.5 TSI Comfortline",
        "years": "2017-2020",
        "generation": "Ara Kasa (2017-2020)",
        "price": 1125000,
        "expertNote": "Golf 7.5, 1.4 TSI yerine gelen 1.5 TSI EA211 Evo motorla geldi. Silindır deaktivasyonu (ACT) yakıt tasarrufu sağlıyor ancak düşük devirde titreşim yapabilir. DQ381 DSG yedi ileri şanzıman DQ200'e göre çok daha güvenilir. MIB2+ multimedya ve full LED farlar standart.",
        "reliabilityScore": 72,
        "totalIssues": 5,
        "searchCount": 18500,
        "issues": [
            {
                "id": "vw-g75-1",
                "title": "1.5 TSI Silindır Deaktivasyonu Titreşimi",
                "description": "ACT (Active Cylinder Management) sistemi 2 silindiri devre dışı bıraktığında özellikle düşük devirde (1200-1800 rpm) belirgin titreşim ve gürültü hissedilir. Yazılım güncellemesiyle kısmen azaltılabilir.",
                "category": "motor",
                "riskLevel": "MEDIUM",
                "affectedKm": "0-150.000 km",
                "repairCost": "₺0 – ₺2.000 (yazılım güncelleme)"
            },
            {
                "id": "vw-g75-2",
                "title": "DQ381 7 İleri DSG Adaptasyon Sorunu",
                "description": "DQ200'e göre çok daha güvenilir olan DQ381, nadiren adaptasyon kaybı yaşayabilir. Vites geçişlerinde hafif sarsıntı olabilir. Yazılım sıfırlama ve yeniden adaptasyon genellikle çözer.",
                "category": "sanziman",
                "riskLevel": "LOW",
                "affectedKm": "50.000-120.000 km",
                "repairCost": "₺1.000 – ₺3.000"
            },
            {
                "id": "vw-g75-3",
                "title": "Turbo Wastegate Gıcırtısı",
                "description": "1.5 TSI motorun elektronik wastegate'i soğuk havalarda veya motor soğukken gıcırtı sesi çıkarabilir. Performansı etkilemez ama rahatsız edici olabilir.",
                "category": "motor",
                "riskLevel": "LOW",
                "affectedKm": "30.000-100.000 km",
                "repairCost": "₺2.000 – ₺5.000"
            },
            {
                "id": "vw-g75-4",
                "title": "MIB2+ Multimedya Donma",
                "description": "Infotainment sistemi zaman zaman donabilir veya yavaşlayabilir. Yazılım güncellemesiyle büyük ölçüde düzeltilebilir.",
                "category": "elektronik",
                "riskLevel": "LOW",
                "affectedKm": "Tüm km",
                "repairCost": "₺0 – ₺500"
            },
            {
                "id": "vw-g75-5",
                "title": "Arka Fren Disk Aşınması",
                "description": "Arka fren diskleri 40-50 bin km civarında aşınabilir. Ön disklere göre daha sık değişim gerektirir.",
                "category": "fren",
                "riskLevel": "LOW",
                "affectedKm": "40.000-60.000 km",
                "repairCost": "₺2.500 – ₺4.000"
            }
        ],
        "pros": [
            "1.5 TSI motor Golf 7'deki 1.4'ten daha verimli",
            "DQ381 DSG çok daha güvenilir",
            "Full LED farlar standart",
            "ACT yakıt tasarrufu sağlıyor",
            "Daha modern MIB2+ multimedya"
        ],
        "cons": [
            "ACT titreşimi rahatsız edici olabilir",
            "Yedek parça fiyatları yüksek",
            "Sigorta primleri yüksek"
        ],
        "buyingTips": [
            "Silindır deaktivasyonu test edin, aşırı titreşim varsa yazılım güncellemesi yapılmamış olabilir",
            "DSG adaptasyon testini mutlaka yapın",
            "Son yazılım güncellemelerinin yüklendiğinden emin olun",
            "Golf 7'ye göre daha az sorunlu ama fiyat farkı çok — değerlendir"
        ]
    }
    ,
    {
        "id": "vw-passat-b85-fl",
        "slug": "vw-passat-b8-5-1-5-tsi-facelift",
        "brand": "Volkswagen",
        "model": "Passat",
        "variant": "Passat B8.5 Facelift 1.5 TSI Elegance",
        "years": "2019-2023",
        "generation": "Ara Kasa (2019-2023)",
        "price": 1500000,
        "expertNote": "B8.5 facelift'te en büyük değişiklik Digital Cockpit (dijital gösterge paneli), Travel Assist yarı-otonom sürüş ve IQ.Light LED matrix farlar. 1.5 TSI motor 1.4 TSI'nin yerini aldı. DSG DQ381 7 ileri şanzıman artık standard. DPF sorunları büyük ölçüde çözüldü.",
        "reliabilityScore": 75,
        "totalIssues": 4,
        "searchCount": 14200,
        "issues": [
            {
                "id": "vw-pb85-1",
                "title": "1.5 TSI ACT Titreşim",
                "description": "Golf 7.5 ile aynı 1.5 TSI EA211 Evo motor. Silindır deaktivasyonu düşük devirde titreşim yapabilir. Özellikle D viteste durma anında hissedilir.",
                "category": "motor",
                "riskLevel": "MEDIUM",
                "affectedKm": "0-150.000 km",
                "repairCost": "₺0 – ₺2.000"
            },
            {
                "id": "vw-pb85-2",
                "title": "Digital Cockpit Yazılım Hataları",
                "description": "12.3 inç dijital gösterge panelinde nadiren yazılım hataları, donma veya ekran titremesi yaşanabilir. OTA güncelleme ile düzeltilebilir.",
                "category": "elektronik",
                "riskLevel": "LOW",
                "affectedKm": "Tüm km",
                "repairCost": "₺0 – ₺2.000"
            },
            {
                "id": "vw-pb85-3",
                "title": "Travel Assist Sensör Kalibrasyonu",
                "description": "Yarı-otonom sürüş sistemi cam değişiminden sonra kalibrasyon gerektirir. Doğru kalibre edilmezse şerit takip ve adaptif hız sabitleme düzgün çalışmaz.",
                "category": "elektronik",
                "riskLevel": "MEDIUM",
                "affectedKm": "Tüm km",
                "repairCost": "₺3.000 – ₺7.000 (cam+kalibrasyon)"
            },
            {
                "id": "vw-pb85-4",
                "title": "IQ.Light LED Matrix Far Modül Arızası",
                "description": "Matrix LED far modülleri arızalanabilir. Tek LED segment sönebilir. Modül değişimi yüksek maliyetli.",
                "category": "elektronik",
                "riskLevel": "LOW",
                "affectedKm": "60.000+ km",
                "repairCost": "₺8.000 – ₺20.000"
            }
        ],
        "pros": [
            "DSG DQ381 çok güvenilir",
            "Digital Cockpit modern görünüm",
            "Travel Assist konforu",
            "DPF sorunları B8'e göre çözülmüş",
            "1.5 TSI verimli motor"
        ],
        "cons": [
            "Matrix far tamiri çok pahalı",
            "ACT titreşimi devam ediyor",
            "İkinci el fiyatları hâlâ yüksek"
        ],
        "buyingTips": [
            "Matrix farların tüm segmentlerinin çalıştığını kontrol edin",
            "Digital Cockpit'i test edin",
            "Cam değişimi yapılmışsa sensör kalibrasyonu sorulmalı",
            "B8'e göre daha az kronik sorun — fiyat farkına değer"
        ]
    }
];
