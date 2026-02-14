import { Car } from '@/types';

export const skodaCars: Car[] = [
    {
        id: "skoda-superb-mk3-tdi",
        slug: "skoda-superb-1-6-tdi",
        brand: "Skoda",
        model: "Superb",
        variant: "1.6 TDI Elegance",
        years: "2015-2023",
        generation: "Mk3 (3V)",
        expertNote: "Superb, VW Passat ile aynı MQB platformunu paylaşır ama çok daha geniş iç alan ve bagaj hacmi sunar. 1.6 TDI 120hp motor sessiz ve ekonomiktir. DSG DQ200 şanzıman tek ciddi risk faktörüdür. Simply Clever özellikleri günlük kullanımda büyük kolaylık sağlar. Fiyat/performans kralıdır.",
        reliabilityScore: 82,
        totalIssues: 5,
        searchCount: 25000,
        issues: [
            {
                id: "superb-1",
                title: "DSG DQ200 Mekatronik Arızası",
                description: "DQ200 kuru kavrama şanzıman mekatronik kartı arızası. Vites geçişlerinde titreme, sertlik veya vitese geçmeme durumu yaşanır. Basınç tüpü gevşemesi de sık görülür. Bakımlı şanzımanlarda daha geç ortaya çıkar.",
                category: "sanziman",
                riskLevel: "HIGH",
                affectedKm: "80.000+ km",
                repairCost: "25.000 - 45.000 TL"
            },
            {
                id: "superb-2",
                title: "EGR / DPF Tıkanıklığı",
                description: "Şehir içi kısa mesafe kullanımda EGR valfinin karbon birikimi ve DPF partikül filtresinin dolması. Güç kaybı, duman ve arıza lambası. Düzenli uzun yol sürüşü gerekir. Temizlik veya değişim yapılabilir.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "60.000+ km",
                repairCost: "8.000 - 20.000 TL"
            },
            {
                id: "superb-3",
                title: "Su Pompası / Termostat Sızıntısı",
                description: "Plastik termostat/devirdaim pompası ünitesinden antifriz sızıntısı. Motor altında leke ve su seviyesi düşüşü ile fark edilir. Zamanında müdahale edilmezse motor hasar görebilir.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "6.000 - 12.000 TL"
            },
            {
                id: "superb-4",
                title: "AdBlue Dozajlama Hatası",
                description: "AdBlue enjektörünün kristalleşmesi veya pompa arızası. 'Motor X km sonra çalışmayacak' uyarısı verir. Tank ve enjektör temizliği/değişimi gerekir. Kış aylarında donma riski de vardır.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "40.000+ km",
                repairCost: "15.000 - 30.000 TL"
            },
            {
                id: "superb-5",
                title: "Krom Çıta Oksidasyonu",
                description: "Cam kenarı krom çıtalarının oksitlenmesi ve matlaşması. Kozmetik bir sorundur ancak araç yaşlandıkça belirginleşir. Çıta değişimi veya polisaj ile giderilebilir.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Yaşa bağlı",
                repairCost: "2.000 - 5.000 TL"
            }
        ],
        pros: [
            "Devasa iç alan ve bagaj (625L)",
            "Simply Clever özellikler",
            "Ekonomik 1.6 TDI motor",
            "Fiyat/kalite kralı"
        ],
        cons: [
            "DSG DQ200 mekatronik riski",
            "Krom çıta oksidasyonu",
            "AdBlue masrafı"
        ],
        buyingTips: [
            "DSG kavrama testini mutlaka yapın",
            "AdBlue sistemi son bakım tarihini sorun",
            "Elegance/L&K donanımları ikinci elde çok daha hızlı satılır"
        ]
    },
    {
        id: "skoda-octavia-a7-tdi",
        slug: "skoda-octavia-a7-1-6-tdi",
        brand: "Skoda",
        model: "Octavia",
        variant: "A7 1.6 TDI",
        years: "2013-2020",
        generation: "Mk3 (A7)",
        expertNote: "Octavia A7, Türkiye'nin en çok satan Skoda modelidir. Golf 7 altyapısını kullanır ama çok daha geniş iç alan sunar. 1.6 TDI motor güvenilir ve ekonomiktir. DSG DQ200 şanzıman tek ciddi risk faktörüdür. Liftback versiyonu sedan alternatifi olarak mükemmeldir.",
        reliabilityScore: 84,
        totalIssues: 5,
        searchCount: 30000,
        issues: [
            {
                id: "octavia-a7-1",
                title: "DSG DQ200 Kavrama Aşınması",
                description: "Kuru kavrama DSG şanzımanda titreme, sarsıntı ve kavrama disk aşınması. Şehir içi kullanımda daha hızlı yıpranır. Kavrama seti değişimi gerektiğinde volan da birlikte değiştirilmelidir.",
                category: "sanziman",
                riskLevel: "HIGH",
                affectedKm: "60.000+ km",
                repairCost: "25.000 - 45.000 TL"
            },
            {
                id: "octavia-a7-2",
                title: "Su Pompası / Devirdaim Kaçağı",
                description: "Plastik termostat/devirdaim pompası ünitesinden antifriz sızıntısı. Hararet iğnesi yükselir. VW grubu ortak sorunudur. Zamanında müdahale şarttır.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "6.000 - 12.000 TL"
            },
            {
                id: "octavia-a7-3",
                title: "EGR Valfi Tıkanması",
                description: "Şehir içi kullanımda EGR valfinin karbon birikimi ile tıkanması. Güç kaybı, rölantide titreşim ve arıza lambası. Temizlik veya değişim gerekir.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "8.000 - 15.000 TL"
            },
            {
                id: "octavia-a7-4",
                title: "Çift Kütleli Volan Sesi",
                description: "Motor stop ederken ve rölantide 'şak şak' metalik ses. Volanın iç yaylarının aşınmasından kaynaklanır. Kavrama ile birlikte değiştirilmelidir.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "120.000+ km",
                repairCost: "15.000 - 25.000 TL"
            },
            {
                id: "octavia-a7-5",
                title: "Multimedya Ekran Donması",
                description: "Bolero/Columbus multimedya sisteminin donması veya geç tepki vermesi. Özellikle navigasyon kullanımında yavaşlama görülür. Yazılım güncellemesi ile kısmen düzelir.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Yazılım / 8.000 TL (MIB Değişimi)"
            }
        ],
        pros: [
            "Devasa iç alan (Golf'ten çok geniş)",
            "Liftback pratikliği",
            "Ekonomik 1.6 TDI motor",
            "Güçlü ikinci el değeri"
        ],
        cons: [
            "DSG DQ200 kavrama riski",
            "İç mekan kalitesi orta seviye",
            "Tasarım muhafazakar"
        ],
        buyingTips: [
            "DSG kavrama testini mutlaka yapın (yokuş kalkış)",
            "Volan sesini rölantide dinleyin",
            "Elegance donanım ikinci elde çok daha hızlı satılır"
        ]
    },
    {
        id: "skoda-octavia-mk4-etec",
        slug: "skoda-octavia-1-5-tsi-e-tec",
        brand: "Skoda",
        model: "Octavia",
        variant: "1.5 TSI e-Tec",
        years: "2020-2024",
        generation: "Mk4 (NX)",
        expertNote: "Octavia Mk4, yeni nesil MQB Evo platformu ile geldi. 1.5 TSI e-Tec mild hybrid motor yakıt tasarrufu sağlar ancak kangalama etkisi yaratır. MIB3 infotainment ve Travel Assist sorunları Golf 8 ile ortaktır. Liftback versiyonu sedan rakiplerine göre çok daha pratiktir.",
        reliabilityScore: 80,
        totalIssues: 5,
        searchCount: 22000,
        issues: [
            {
                id: "octavia-mk4-1",
                title: "Kangaroo Effect / Mild Hybrid Silkelme",
                description: "1.5 TSI e-Tec mild hybrid sistemde düşük hızlarda belirgin silkeleme ve kangalama etkisi. Rejeneratif frenleme ve motor stop/start geçişlerinde de hissedilir. Yazılım güncellemesiyle kısmen düzelir.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "0 km'den itibaren (Karakteristik)",
                repairCost: "Yazılım / 3.000 - 8.000 TL"
            },
            {
                id: "octavia-mk4-2",
                title: "MIB3 Infotainment Donması",
                description: "MIB3 multimedya sisteminin donması, siyah ekran vermesi, geç açılması veya CarPlay/Android Auto bağlantısının kopması. Golf 8 sendromu olarak bilinir.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele (Yazılım)",
                repairCost: "Yazılım / MIB Değişimi (15.000 TL)"
            },
            {
                id: "octavia-mk4-3",
                title: "SOS Acil Çağrı Modülü",
                description: "Tavandaki eCall SOS modülünün arızalanması ve gösterge panelinde sürekli 'SOS Hatası' uyarısı. VW grubu araçlarda yaygın ortak sorundur. Modül değişimi gerekir.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "5.000 - 10.000 TL"
            },
            {
                id: "octavia-mk4-4",
                title: "12V Akü Problemi",
                description: "48V mild hybrid sisteme rağmen 12V aküsünün çabuk bitmesi. Araç çalışmama, elektronik arızalar ve gösterge hataları. AGM akü değişimi gerekir.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "1-2 yıl / Rastgele",
                repairCost: "3.000 - 6.000 TL (AGM Akü)"
            },
            {
                id: "octavia-mk4-5",
                title: "Travel Assist / Lane Assist Hataları",
                description: "Sürüş asistan sistemlerinin beklenmedik şekilde devreye girmesi veya çıkması. Şerit takibi yanlış algılama yapabilir. Kamera kalibrasyonu veya yazılım güncellemesi gerekir.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele (Yazılım)",
                repairCost: "Yazılım / Kalibrasyon (5.000 TL)"
            }
        ],
        pros: [
            "Devasa iç alan ve 600L bagaj",
            "Mild hybrid yakıt tasarrufu",
            "Modern MIB3 infotainment",
            "Simply Clever pratiklik"
        ],
        cons: [
            "Kangaroo effect / Kangalama",
            "Yazılım sorunları (Golf 8 sendromu)",
            "12V akü zayıflığı"
        ],
        buyingTips: [
            "Mild hybrid silkelemeyi şehir içi test sürüşünde değerlendirin",
            "MIB3 yazılımının güncel olduğundan emin olun",
            "12V akü değişmiş mi sorun"
        ]
    },
    {
        id: "skoda-karoq-tsi",
        slug: "skoda-karoq-1-5-tsi",
        brand: "Skoda",
        model: "Karoq",
        variant: "1.5 TSI",
        years: "2018-2024",
        generation: "NU",
        expertNote: "Karoq, Tiguan ile aynı MQB platformunu paylaşan kompakt SUV'dur. Tiguan'a göre daha hafif ve ekonomiktir. VarioFlex arka koltuk sistemi (çıkarılabilir) benzersiz bir özelliktir. 1.5 TSI motor kangaroo effect sorunu yaşar ama yazılım güncellemesiyle azalır.",
        reliabilityScore: 83,
        totalIssues: 5,
        searchCount: 15000,
        issues: [
            {
                id: "karoq-1",
                title: "Kangaroo Effect (DSG Silkelme)",
                description: "1.5 TSI + DSG kombinasyonunda düşük hızlarda silkeleme ve sarsıntı. Motor soğukken daha belirgindir. Yazılım güncellemesi kısmen düzeltir ancak tam çözüm sağlanamaz.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "0 km'den itibaren (Karakteristik)",
                repairCost: "Yazılım / 3.000 - 8.000 TL"
            },
            {
                id: "karoq-2",
                title: "Su Pompası / Termostat Kaçağı",
                description: "1.5 TSI motorlarda plastik su pompası/termostat ünitesinden antifriz sızıntısı. VW grubu 1.5 TSI motorların bilinen kronik sorunudur. Erken müdahale önemlidir.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "50.000+ km",
                repairCost: "8.000 - 15.000 TL"
            },
            {
                id: "karoq-3",
                title: "Kapı Fitili Rüzgar Sesi",
                description: "Kapı fitillerinin aşınması veya oturmamasından kaynaklanan rüzgar sesi. 100+ km/s hızlarda belirginleşir. Fitil değişimi ile çözülür.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kronik / Yaşa bağlı",
                repairCost: "2.000 - 4.000 TL (Fitil Değişimi)"
            },
            {
                id: "karoq-4",
                title: "DSG DQ200 Kavrama Aşınması",
                description: "Kuru kavrama DSG şanzımanda kavrama disk aşınması. Şehir içi stop-go trafikte daha hızlı yıpranır. Kavrama seti değişimi gerekir.",
                category: "sanziman",
                riskLevel: "HIGH",
                affectedKm: "70.000+ km",
                repairCost: "25.000 - 45.000 TL"
            },
            {
                id: "karoq-5",
                title: "Multimedya Donması",
                description: "Infotainment ekranının donması veya siyah ekran vermesi. Navigasyon kullanımında yavaşlama görülür. Yazılım güncellemesi kısmen çözer.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Yazılım / MIB Değişimi (12.000 TL)"
            }
        ],
        pros: [
            "VarioFlex arka koltuk sistemi",
            "Kompakt SUV pratikliği",
            "Ekonomik 1.5 TSI motor",
            "VW kalitesi uygun fiyata"
        ],
        cons: [
            "Kangaroo effect",
            "DSG DQ200 kavrama riski",
            "İç mekan plastiği orta kalite"
        ],
        buyingTips: [
            "DSG vites geçişlerini soğuk motorla test edin",
            "VarioFlex koltuk mekanizmasını kontrol edin",
            "Su seviyesini kontrol edin"
        ]
    },
    {
        id: "skoda-kodiaq-tdi",
        slug: "skoda-kodiaq-2-0-tdi",
        brand: "Skoda",
        model: "Kodiaq",
        variant: "2.0 TDI",
        years: "2017-2024",
        generation: "NS",
        expertNote: "Kodiaq, Skoda'nın en büyük SUV'udur ve 7 kişilik seçeneği ile aile araçlarının en iyisidir. Tiguan Allspace'den daha uygun fiyatlıdır. 2.0 TDI motor güçlü ve ekonomiktir. DSG DQ381 ıslak kavrama şanzıman DQ200'den çok daha güvenilirdir. Sunroof giderleri düzenli temizlenmelidir.",
        reliabilityScore: 84,
        totalIssues: 5,
        searchCount: 20000,
        issues: [
            {
                id: "kodiaq-1",
                title: "Su Pompası / Devirdaim Kaçağı",
                description: "2.0 TDI motorlarda su pompası sızıntısı. Motor altında antifriz lekesi ve su seviyesi düşüşü ile fark edilir. Zamanında değiştirilmezse motor hasar görebilir.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "70.000+ km",
                repairCost: "8.000 - 15.000 TL"
            },
            {
                id: "kodiaq-2",
                title: "DSG DQ381 Flywheel Sesi",
                description: "Çift kütleli volanın iç yaylarının aşınmasıyla rölantide ve motor stop ederken metalik ses. 2.0 TDI motorların torkuyla ilişkili kronik bir sorundur. Kavrama ile birlikte değişim önerilir.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "15.000 - 25.000 TL"
            },
            {
                id: "kodiaq-3",
                title: "Sunroof Gider Tıkanıklığı",
                description: "Panoramik cam tavan giderlerinin yaprak ve kir ile tıkanması sonucu araç içine su sızması. A sütunu ve tavan döşemesi ıslanabilir. Düzenli gider temizliği şarttır.",
                category: "govde",
                riskLevel: "MEDIUM",
                affectedKm: "Bakımsızsa",
                repairCost: "Temizlik / 10.000 - 20.000 TL (Hasar varsa)"
            },
            {
                id: "kodiaq-4",
                title: "AdBlue Dozajlama Hatası",
                description: "AdBlue enjektörünün kristalleşmesi. 'Motor X km sonra çalışmayacak' uyarısı verir. Enjektör ve tank temizliği/değişimi gerekir.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "60.000+ km",
                repairCost: "15.000 - 30.000 TL"
            },
            {
                id: "kodiaq-5",
                title: "Kapı Koruma Plastiği Soyulması",
                description: "Yan kapılardaki koruma plastiklerinin arasından yapıştırıcının aşınarak plastiğin soyulması veya kabarcık yapması. Özellikle sıcak iklimlerde daha hızlı görülür.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Yaşa bağlı",
                repairCost: "2.000 - 5.000 TL"
            }
        ],
        pros: [
            "7 kişilik seçenek",
            "Devasa iç alan ve bagaj",
            "Güçlü 2.0 TDI motor",
            "Fiyat/performans"
        ],
        cons: [
            "AdBlue masrafı",
            "Sunroof gider bakımı gerekli",
            "3. sıra çok dar"
        ],
        buyingTips: [
            "Sunroof giderlerini kontrol ettirin",
            "AdBlue sistemi son bakım tarihini sorun",
            "DSG yağ değişimi yapılmış mı sorun"
        ]
    },
    {
        id: "skoda-kamiq-tsi",
        slug: "skoda-kamiq-1-0-tsi",
        brand: "Skoda",
        model: "Kamiq",
        variant: "1.0 TSI",
        years: "2019-2024",
        generation: "NW",
        expertNote: "Kamiq, Scala altyapısı üzerine kurulmuş kompakt crossover'dır. Yüksek oturma pozisyonu ve şehir içi pratikliğiyle öne çıkar. Simply Clever özellikleri günlük kullanımda fark yaratır. 1.0 TSI motor yeterli güçtedir ama DSG DQ200 mekatronik riski her zaman vardır.",
        reliabilityScore: 83,
        totalIssues: 5,
        searchCount: 12000,
        issues: [
            {
                id: "kamiq-1",
                title: "Multimedya Donması / Geç Açılma",
                description: "Infotainment sisteminin donması, siyah ekran vermesi veya araç çalıştırıldığında geç açılması. Yazılım güncellemesi kısmen çözer. Bazen araç yeniden başlatılması gerekir.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "Yazılım / MIB Değişimi (12.000 TL)"
            },
            {
                id: "kamiq-2",
                title: "Kapı Fitili Rüzgar Sesi",
                description: "Kapı fitillerinin aşınması veya oturmamasından kaynaklanan rüzgar ve ıslık sesi. 100+ km/s hızlarda belirginleşir. Özellikle sürücü tarafı kapıda yaygın.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kronik / 20.000+ km",
                repairCost: "2.000 - 4.000 TL (Fitil Değişimi)"
            },
            {
                id: "kamiq-3",
                title: "SOS Acil Çağrı Hatası",
                description: "eCall SOS modülünün arızalanması ve gösterge panelinde sürekli 'SOS Hatası' uyarısı. VW grubu araçlarda yaygın. Modül değişimi gerekir.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "5.000 - 10.000 TL"
            },
            {
                id: "kamiq-4",
                title: "DSG DQ200 Kararsızlığı",
                description: "Düşük hızlarda DSG şanzımanın vites geçişlerinde sarsıntı ve kararsızlık. Şehir içi trafikte rahatsız edici. Yazılım güncellemesi ve kavrama adaptasyonu ile iyileşir.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "30.000+ km",
                repairCost: "Yazılım / 20.000 - 35.000 TL (Kavrama)"
            },
            {
                id: "kamiq-5",
                title: "Start-Stop Sistem Arızası",
                description: "Start-stop sisteminin devreye girmemesi ve akü zayıflığı uyarısı. AGM akü ömrünün kısalmasından kaynaklanır. Akü değişimi gerekir.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele / 2 yıl+",
                repairCost: "3.000 - 5.000 TL (AGM Akü)"
            }
        ],
        pros: [
            "Yüksek oturma pozisyonu",
            "Simply Clever pratiklik",
            "Kompakt boyut şehir içi ideal",
            "Uygun fiyat"
        ],
        cons: [
            "İç mekan kalitesi orta seviye",
            "Rüzgar sesi yüksek hızlarda",
            "DSG DQ200 mekatronik riski"
        ],
        buyingTips: [
            "DSG vites geçişlerini soğuk motorla test edin",
            "Kapı fitillerini kontrol edin",
            "Ambition donanımı çok boş olabilir"
        ]
    },
    {
        id: "skoda-scala-tsi",
        slug: "skoda-scala-1-0-tsi",
        brand: "Skoda",
        model: "Scala",
        variant: "1.0 TSI",
        years: "2019-2024",
        generation: "NW",
        expertNote: "Scala, Rapid'in yerine gelen hatchback modelidir. MQB A0 platformu üzerinde kuruludur. 1.0 TSI 3 silindirli motor yeterli güçtedir ve ekonomiktir. Geniş bagaj hacmi (467L) sınıf lideridir. Simply Clever özellikler standart gelir.",
        reliabilityScore: 83,
        totalIssues: 5,
        searchCount: 10000,
        issues: [
            {
                id: "scala-1",
                title: "Multimedya Donması",
                description: "Infotainment sisteminin donması veya siyah ekran vermesi. Bluetooth/CarPlay bağlantı kopmaları da yaşanabilir. Yazılım güncellemesi kısmen çözer.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "Yazılım / MIB Değişimi (10.000 TL)"
            },
            {
                id: "scala-2",
                title: "Klima Panel Arızası",
                description: "Klima kontrol panelinin düğmelerinin tepki vermemesi veya LED aydınlatmasının sönmesi. Panel değişimi gerekir.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele / Yaşa bağlı",
                repairCost: "3.000 - 6.000 TL"
            },
            {
                id: "scala-3",
                title: "Arka Fren Disk Erken Aşınması",
                description: "Arka fren disklerinin beklenenden erken aşınması ve fren sırasında titreşim hissedilmesi. Disk ve balata birlikte değiştirilmelidir.",
                category: "fren",
                riskLevel: "LOW",
                affectedKm: "40.000+ km",
                repairCost: "4.000 - 7.000 TL"
            },
            {
                id: "scala-4",
                title: "DSG DQ200 Sarsıntısı",
                description: "Düşük hızlarda DSG şanzımanın vites geçişlerinde sarsıntı. Soğuk havada daha belirgindir. Yazılım güncellemesi ve kavrama adaptasyonu gerekir.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "30.000+ km",
                repairCost: "Yazılım / 20.000 - 35.000 TL (Kavrama)"
            },
            {
                id: "scala-5",
                title: "İç Trim Gıcırtısı",
                description: "Torpido bölgesi ve kapı panellerinden gelen gıcırtı sesleri. Bozuk yollarda belirginleşir. Ses yalıtım bandajı ile azaltılabilir.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "20.000+ km",
                repairCost: "1.000 - 3.000 TL"
            }
        ],
        pros: [
            "Sınıf lideri bagaj hacmi (467L)",
            "Simply Clever özellikler",
            "Ekonomik 1.0 TSI motor",
            "Modern tasarım"
        ],
        cons: [
            "Multimedya donmaları",
            "İç trim kalitesi orta",
            "DSG DQ200 mekatronik riski"
        ],
        buyingTips: [
            "Ambition paketi çok boş — Style veya L&K tercih edin",
            "DSG vites geçişlerini test edin",
            "Fren disklerini kontrol ettirin"
        ]
    },
    {
        id: "skoda-superb-tsi",
        slug: "skoda-superb-1-5-tsi",
        brand: "Skoda",
        model: "Superb",
        variant: "1.5 TSI",
        years: "2019-2023",
        generation: "Mk3 Facelift",
        expertNote: "Superb 1.5 TSI benzinli versiyon, dizel istemeyenler için mükemmel bir alternatiftir. Kangaroo effect var ama yazılım güncellemesiyle kabul edilebilir düzeye iner. Geniş iç alan ve bagaj hacmi ile bu fiyattaki en iyi sedan/liftback. ACT (Aktif Silindir Yönetimi) teknolojisi yakıt tasarrufu sağlar.",
        reliabilityScore: 82,
        totalIssues: 5,
        searchCount: 15000,
        issues: [
            {
                id: "superb-tsi-1",
                title: "Kangaroo Effect (DSG DQ200)",
                description: "1.5 TSI + DSG DQ200 kombinasyonunda düşük hızlarda silkeleme. Motor soğukken daha belirgindir. Yazılım güncellemesi kısmen düzeltir. ACT (Aktif Silindir Yönetimi) geçişlerinde de hafif sarsıntı olabilir.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "0 km'den itibaren (Karakteristik)",
                repairCost: "Yazılım / 3.000 - 8.000 TL"
            },
            {
                id: "superb-tsi-2",
                title: "Su Pompası / Termostat Sızıntısı",
                description: "1.5 TSI motorlarda plastik termostat/su pompası ünitesinden antifriz kaçağı. VW grubu 1.5 TSI motorların bilinen kronik sorunudur.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "50.000+ km",
                repairCost: "8.000 - 15.000 TL"
            },
            {
                id: "superb-tsi-3",
                title: "Krom Çıta Oksidasyonu",
                description: "Cam kenarı krom çıtalarının oksitlenmesi ve matlaşması. Kozmetik sorundur ama araç değerini etkiler.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Yaşa bağlı",
                repairCost: "2.000 - 5.000 TL"
            },
            {
                id: "superb-tsi-4",
                title: "Arka Fren Disk Aşınması",
                description: "Arka fren disklerinin erken aşınması. Ağır kasa nedeniyle frenler daha çok zorlanır. Disk ve balata birlikte değiştirilmelidir.",
                category: "fren",
                riskLevel: "LOW",
                affectedKm: "40.000+ km",
                repairCost: "5.000 - 8.000 TL"
            },
            {
                id: "superb-tsi-5",
                title: "DSG DQ200 Kavrama Aşınması",
                description: "Kuru kavrama şanzımanda kavrama disk aşınması. Şehir içi kullanımda daha hızlı yıpranır. Kavrama seti değişimi gerekir.",
                category: "sanziman",
                riskLevel: "HIGH",
                affectedKm: "70.000+ km",
                repairCost: "25.000 - 45.000 TL"
            }
        ],
        pros: [
            "Devasa iç alan ve bagaj (625L)",
            "ACT yakıt tasarrufu",
            "Premium kalite his",
            "Simply Clever özellikler"
        ],
        cons: [
            "Kangaroo effect",
            "DSG DQ200 kavrama riski",
            "Krom çıta oksidasyonu"
        ],
        buyingTips: [
            "DSG kavrama testini mutlaka yapın",
            "Su seviyesini kontrol edin",
            "L&K donanım ikinci elde çok hızlı satılır"
        ]
    },

    // ─── Eski new-cars dosyasından taşındı ───
    {
        id: "skoda-fabia-ii-1-4-tdi",
        slug: "skoda-fabia-ii-1-4-tdi",
        brand: "Skoda",
        model: "Fabia",
        variant: "II 1.4 TDI",
        years: "2007-2014",
        generation: "5J",
        reliabilityScore: 77,
        totalIssues: 5,
        searchCount: 6000,
        expertNote: "Fabia II sınıfının en pratik aracı. 1.4 TDI 3 silindirli motor ekonomik ve güvenilir. Polo'nun ucuz kardeşi, aynı platform ama daha geniş bagaj (300L). Simply Clever detaylar fiyatına göre harika.",
        issues: [
            { id: "fabi2-1", title: "3 Silindirli Motor Titreşimi", description: "1.4 TDI 3 silindirli motorun rölantide titreşimi. Motor takozları aşındıkça artar.", category: "motor", riskLevel: "LOW", affectedKm: "Karakteristik", repairCost: "Motor Takozu (2.000 TL)" },
            { id: "fabi2-2", title: "EGR Valfi", description: "EGR valfinde kurum birikimi.", category: "motor", riskLevel: "MEDIUM", affectedKm: "60.000+ km", repairCost: "2.000 - 4.000 TL" },
            { id: "fabi2-3", title: "Debriyaj Balata", description: "Şehir içi kullanımda debriyaj balatası aşınması.", category: "sanziman", riskLevel: "MEDIUM", affectedKm: "60.000+ km", repairCost: "4.000 - 7.000 TL" },
            { id: "fabi2-4", title: "Cam Kaldırma Mekanizması", description: "Ön cam kaldırma regülatörünün bozulması.", category: "govde", riskLevel: "LOW", affectedKm: "60.000+ km", repairCost: "1.500 - 3.000 TL" },
            { id: "fabi2-5", title: "Arka Amortisör", description: "Arka amortisörlerin erken aşınması. Kasis geçişinde sallanma.", category: "suspansiyon", riskLevel: "LOW", affectedKm: "50.000+ km", repairCost: "2.000 - 4.000 TL" }
        ],
        pros: ["Geniş bagaj (300L)", "Ekonomik 1.4 TDI", "Polo kalitesi ucuza", "Pratik Simply Clever"],
        cons: ["3 silindir titreşimi", "İç mekan sade", "Tasarımı eski"],
        buyingTips: ["Motor takozlarını kontrol edin", "EGR temizliği yaptırılmış mı?", "Debriyaj kaçını test edin"]
    }
,

    // ─── Eski new-cars dosyasından taşındı ───
    {
        id: "skoda-octavia-a5-1-6-tdi",
        slug: "skoda-octavia-a5-1-6-tdi",
        brand: "Skoda",
        model: "Octavia",
        variant: "A5 1.6 TDI",
        years: "2009-2013",
        generation: "1Z",
        reliabilityScore: 78,
        totalIssues: 5,
        searchCount: 8000,
        expertNote: "Octavia A5 Türkiye'de çok sevildi. Golf 5 platformu, aynı sağlamlık ama daha ucuz ve daha geniş bagaj (590L!). 1.6 TDI motor güvenilir, DSG riski var ama manuel olanlar sorunsuz. Pratikliğin tanımı.",
        issues: [
            { id: "octa5-1", title: "DSG DQ200 Mekatronik", description: "7 ileri kuru kavramalı DSG'de mekatronik kart arızası. Sarsıntı ve vites kararsızlığı.", category: "sanziman", riskLevel: "HIGH", affectedKm: "60.000 - 100.000 km", repairCost: "20.000 - 40.000 TL" },
            { id: "octa5-2", title: "EGR Valfi Tıkanması", description: "EGR valfinde kurum birikimi. Motor düzensizliği.", category: "motor", riskLevel: "MEDIUM", affectedKm: "60.000+ km", repairCost: "3.000 - 6.000 TL" },
            { id: "octa5-3", title: "Devirdaim Pompası", description: "Plastik gövdeli devirdaim pompasından sızıntı.", category: "motor", riskLevel: "MEDIUM", affectedKm: "60.000+ km", repairCost: "4.000 - 8.000 TL" },
            { id: "octa5-4", title: "Arka Amortisör Aşınması", description: "Arka amortisörlerin erken aşınması. Kasis geçişlerinde sallanma.", category: "suspansiyon", riskLevel: "LOW", affectedKm: "60.000+ km", repairCost: "3.000 - 6.000 TL" },
            { id: "octa5-5", title: "Multimedya/Radyo Arızası", description: "Bolero/Swing kafaünitesinde ekran bozulması veya CD okuyucu arızası.", category: "elektronik", riskLevel: "LOW", affectedKm: "Yaş kaynaklı", repairCost: "2.000 - 5.000 TL" }
        ],
        pros: ["Devasa 590L bagaj", "Golf kalitesi daha ucuza", "Ekonomik 1.6 TDI", "Pratik Simply Clever detaylar"],
        cons: ["DSG riski", "Tasarımı sade", "Yaşı nedeniyle plastikler aşınmış"],
        buyingTips: ["Manuel tercih edin", "EGR temizliği yapılmış mı sorun", "Devirdaim pompası kontrol edin"]
    }
,

    // ─── Eski new-cars dosyasından taşındı ───
    {
        id: "skoda-fabia-1-0-tsi",
        slug: "skoda-fabia-1-0-tsi",
        brand: "Skoda",
        model: "Fabia",
        variant: "1.0 TSI",
        years: "2018-2024",
        generation: "NJ/PJ",
        reliabilityScore: 83,
        totalIssues: 5,
        searchCount: 7000,
        expertNote: "Fabia sınıfının en pratik aracıdır. 1.0 TSI motor güvenilirdir ama DSG ile kombine edildiğinde sorunlar başlar. Manuel şanzımanlı olanlar gerçek altındır.",
        issues: [
            { id: "fabia-1", title: "DSG DQ200 Kavrama Aşınması", description: "Kuru kavramalı 7 ileri DSG şanzımanda kavrama disklerinin erken aşınması. Düşük hızlarda titreşim, sarsıntı ve vites kararsızlığı.", category: "sanziman", riskLevel: "HIGH", affectedKm: "50.000 - 80.000 km", repairCost: "25.000 - 45.000 TL" },
            { id: "fabia-2", title: "1.0 TSI Zincir Gerilme Problemi", description: "3 silindirli motorun triger zincirinde uzama ve gerilme kaybı. Motor çalıştırırken kısa süreli şıkırtı sesi. Zincir seti değişimi gerekir.", category: "motor", riskLevel: "MEDIUM", affectedKm: "80.000+ km", repairCost: "8.000 - 15.000 TL" },
            { id: "fabia-3", title: "Devirdaim/Termostat Kaçağı", description: "Plastik termostat gövdesinden su sızdırması. Antifriz seviyesi düşer ve hararet yapabilir. VW grubu ortak sorunu.", category: "motor", riskLevel: "MEDIUM", affectedKm: "50.000+ km", repairCost: "5.000 - 10.000 TL" },
            { id: "fabia-4", title: "Start-Stop Akü Sorunu", description: "Start-stop sistemi için gereken AGM/EFB akünün erken ölmesi. Sistem devre dışı kalır ve çeşitli elektronik hatalar oluşabilir.", category: "elektronik", riskLevel: "LOW", affectedKm: "3-4 Yıl", repairCost: "4.000 - 7.000 TL (Akü)" },
            { id: "fabia-5", title: "Rüzgar Sesi (100+ km/s)", description: "Ayna dipleri ve kapı fitillerinden yüksek hızlarda gelen rüzgar uğultusu. Sınıfı gereği normal kabul edilebilir.", category: "govde", riskLevel: "LOW", affectedKm: "Yüksek Hız", repairCost: "1.000 - 3.000 TL (Fitil)" }
        ],
        pros: ["Sınıfının en geniş bagajı (380L)", "Pratik Simply Clever detaylar", "Ekonomik yakıt tüketimi", "Güçlü 1.0 TSI (95/110hp)"],
        cons: ["DSG riski", "Arka süspansiyon sert (Torsion)", "Opsiyonel donanım ayrı fiyat"],
        buyingTips: ["Manuel şanzıman tercih edin", "Zincir sesini soğuk motorla dinleyin", "Antifriz seviyesini kontrol edin"]
    }
,
    {
            "id": "skoda-octavia-a8-1-5-tsi",
            "slug": "skoda-octavia-a8-1-5-tsi",
            "brand": "Skoda",
            "model": "Octavia (A8)",
            "variant": "1.5 TSI ACT DSG",
            "years": "2020-2025",
            "generation": "A8 (NX)",
            "expertNote": "EA211 Evo 1.5 TSI 150 HP + DSG7. Yeni nesil Octavia dev iç mekan ve bagaj hacmiyle sınıfının kralı. VW Golf platformu ama daha pratik. Canton ses sistemi opsiyonu harika.",
            "reliabilityScore": 82,
            "totalIssues": 5,
            "searchCount": 15000,
            "issues": [
                    {
                            "id": "oct8-1",
                            "title": "DSG Kavrama",
                            "description": "DSG7 şanzımanda düşük hızda titreme.",
                            "category": "sanziman",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "50.000+ km",
                            "repairCost": "10.000 - 25.000 TL"
                    },
                    {
                            "id": "oct8-2",
                            "title": "1.5 TSI Yağ Eksiltme",
                            "description": "Motor yağının servis aralarında eksilmesi.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "50.000+ km",
                            "repairCost": "8.000 - 20.000 TL (Segman)"
                    },
                    {
                            "id": "oct8-3",
                            "title": "Işık Sensörü",
                            "description": "Otomatik far sensörünün yanlış çalışması.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Rastgele",
                            "repairCost": "1.500 - 3.000 TL"
                    },
                    {
                            "id": "oct8-4",
                            "title": "Süspansiyon Sesi",
                            "description": "Ön süspansiyondan kasis geçişlerinde ses.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "40.000+ km",
                            "repairCost": "2.000 - 5.000 TL"
                    },
                    {
                            "id": "oct8-5",
                            "title": "Virtual Cockpit Pixellenmesi",
                            "description": "Dijital gösterge panelinde pixel hatası.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Rastgele",
                            "repairCost": "0 TL (Garanti Kapsamı)"
                    }
            ],
            "pros": [
                    "Dev iç mekan",
                    "660L bagaj",
                    "VW kalitesi",
                    "Uygun fiyat/donanım"
            ],
            "cons": [
                    "DSG hassasiyeti",
                    "Yağ eksiltme",
                    "Tasarımı sade"
            ],
            "buyingTips": [
                    "DSG titremesi test edin",
                    "Canton ses seçeneği tercih edin",
                    "Style Plus donanım"
            ]
    }
,
    {
            "id": "skoda-superb-b8-2-0-tdi",
            "slug": "skoda-superb-b8-2-0-tdi",
            "brand": "Skoda",
            "model": "Superb (B8)",
            "variant": "2.0 TDI DSG Style",
            "years": "2015-2024",
            "generation": "3V",
            "expertNote": "EA288 2.0 TDI 150 HP + DSG6. Superb B8 gizli lüks. VW Passat B8 ile aynı platform ama daha geniş. Arka koltuk limuzin seviyesinde. Skoda fiyatına premium deneyim.",
            "reliabilityScore": 82,
            "totalIssues": 5,
            "searchCount": 10000,
            "issues": [
                    {
                            "id": "sup8-1",
                            "title": "DSG Mechatronik",
                            "description": "DSG6 mechatronik ünitesi arızası.",
                            "category": "sanziman",
                            "riskLevel": "HIGH",
                            "affectedKm": "100.000+ km",
                            "repairCost": "18.000 - 35.000 TL"
                    },
                    {
                            "id": "sup8-2",
                            "title": "AdBlue Sistemi",
                            "description": "AdBlue dozaj pompası arızası.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "80.000+ km",
                            "repairCost": "10.000 - 20.000 TL"
                    },
                    {
                            "id": "sup8-3",
                            "title": "DPF Tıkanması",
                            "description": "Şehir içi DPF dolması.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Şehir içi",
                            "repairCost": "5.000 - 12.000 TL"
                    },
                    {
                            "id": "sup8-4",
                            "title": "Ön Süspansiyon",
                            "description": "Ön süspansiyon burcu aşınması.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "60.000+ km",
                            "repairCost": "2.000 - 5.000 TL"
                    },
                    {
                            "id": "sup8-5",
                            "title": "Columbus Nav",
                            "description": "Columbus multimedya donması.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Rastgele",
                            "repairCost": "1.500 - 4.000 TL (Yazılım)"
                    }
            ],
            "pros": [
                    "Limuzin arka alan",
                    "VW kalitesi",
                    "Uygun fiyat/boyut",
                    "Dev bagaj (625L)"
            ],
            "cons": [
                    "DSG hassasiyeti",
                    "AdBlue maliyeti",
                    "Marka algısı"
            ],
            "buyingTips": [
                    "DSG yağ bakımı şart",
                    "Style donanım minimum",
                    "Canton ses opsiyonu harika"
            ]
    }
,
    {
            "id": "skoda-rapid-1-6-tdi",
            "slug": "skoda-rapid-1-6-tdi-greentec",
            "brand": "Skoda",
            "model": "Rapid (NH)",
            "variant": "1.6 TDI Greentec Ambition",
            "years": "2013-2019",
            "generation": "NH",
            "expertNote": "1.6 TDI 90 HP. Rapid Türkiye'de uygun fiyata VW kalitesi sunan sedan. Motor ekonomik. Basit ama işlevsel. Hatchback (Spaceback) ve sedan versiyonları var.",
            "reliabilityScore": 80,
            "totalIssues": 5,
            "searchCount": 9000,
            "issues": [
                    {
                            "id": "rap-1",
                            "title": "EGR Tıkanması",
                            "description": "EGR valfinde kurum birikimi.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "80.000+ km",
                            "repairCost": "2.000 - 5.000 TL"
                    },
                    {
                            "id": "rap-2",
                            "title": "DPF Tıkanması",
                            "description": "Şehir içi kullanımda DPF dolması.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Şehir içi",
                            "repairCost": "5.000 - 10.000 TL"
                    },
                    {
                            "id": "rap-3",
                            "title": "Ön Süspansiyon Bilyası",
                            "description": "Ön alt kol bilyası aşınması.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "50.000+ km",
                            "repairCost": "1.500 - 3.000 TL"
                    },
                    {
                            "id": "rap-4",
                            "title": "Debriyaj Sertliği",
                            "description": "Debriyaj pedalının sertleşmesi.",
                            "category": "sanziman",
                            "riskLevel": "LOW",
                            "affectedKm": "60.000+ km",
                            "repairCost": "2.000 - 4.000 TL"
                    },
                    {
                            "id": "rap-5",
                            "title": "Bolero Radyo",
                            "description": "Bolero radyo/multimedya donması.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Rastgele",
                            "repairCost": "1.500 - 4.000 TL (Yazılım)"
                    }
            ],
            "pros": [
                    "VW kalitesi",
                    "Ekonomik TDI",
                    "Uygun fiyat",
                    "Geniş bagaj"
            ],
            "cons": [
                    "Tasarımı sade",
                    "İç mekan basit",
                    "DPF riski"
            ],
            "buyingTips": [
                    "Ambition donanım alın",
                    "Manuel tercih edin",
                    "DPF taraması"
            ]
    }
,
    {
            "id": "skoda-octavia-a7-1-6-tdi",
            "slug": "skoda-octavia-a7-1-6-tdi-style",
            "brand": "Škoda",
            "model": "Octavia",
            "variant": "A7 1.6 TDI Style",
            "years": "2013-2020",
            "generation": "A7 (5E)",
            "expertNote": "CLHA 1.6 TDI 110 HP. Octavia A7 en iyi para/değer oranı D segment. MQB platformu (Golf 7 tabanlı). Style donanım 8 inç Columbus, park asistanı, LED.",
            "reliabilityScore": 78,
            "totalIssues": 5,
            "searchCount": 16000,
            "issues": [
                    {
                            "id": "oct-1",
                            "title": "DSG Şanzıman",
                            "description": "DQ200 7 ileri DSG mekatro arızası.",
                            "category": "sanziman",
                            "riskLevel": "HIGH",
                            "affectedKm": "80.000+ km",
                            "repairCost": "10.000 - 25.000 TL"
                    },
                    {
                            "id": "oct-2",
                            "title": "AdBlue",
                            "description": "AdBlue enjektörü arızası.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "80.000+ km",
                            "repairCost": "3.000 - 6.000 TL"
                    },
                    {
                            "id": "oct-3",
                            "title": "Su Pompası",
                            "description": "Elektrikli su pompası.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "80.000+ km",
                            "repairCost": "2.000 - 4.000 TL"
                    },
                    {
                            "id": "oct-4",
                            "title": "Turbo",
                            "description": "Turbo aktuatör.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "120.000+ km",
                            "repairCost": "3.000 - 6.000 TL"
                    },
                    {
                            "id": "oct-5",
                            "title": "Süspansiyon",
                            "description": "Ön alt kol burçları.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "50.000+ km",
                            "repairCost": "1.000 - 2.500 TL"
                    }
            ],
            "pros": [
                    "En iyi para/değer",
                    "Golf 7 platformu",
                    "Style donanım süper",
                    "DEVASA bagaj"
            ],
            "cons": [
                    "DSG riski",
                    "AdBlue sorunu",
                    "Parça pahalılaştı",
                    "Plastik kalite orta"
            ],
            "buyingTips": [
                    "MANUEL şanzıman tercih edin",
                    "DSG mekatro kontrolü",
                    "Style en iyi donanım/fiyat",
                    "Combi (SW) çok pratik"
            ]
    }
,
    {
            "id": "skoda-rapid-1-6-tdi",
            "slug": "skoda-rapid-1-6-tdi-style",
            "brand": "Škoda",
            "model": "Rapid",
            "variant": "1.6 TDI Style",
            "years": "2013-2019",
            "generation": "NH",
            "expertNote": "CAYC 1.6 TDI 90/105 HP. Rapid Octavia ile Fabia arası sedan. Style donanım 6.5 inç Bolero, park sensörü. Ekonomik ve pratik.",
            "reliabilityScore": 76,
            "totalIssues": 5,
            "searchCount": 10000,
            "issues": [
                    {
                            "id": "rap-1",
                            "title": "DSG",
                            "description": "DQ200 DSG mekatro.",
                            "category": "sanziman",
                            "riskLevel": "HIGH",
                            "affectedKm": "80.000+ km",
                            "repairCost": "10.000 - 20.000 TL"
                    },
                    {
                            "id": "rap-2",
                            "title": "EGR",
                            "description": "EGR valfi tıkanması.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "60.000+ km",
                            "repairCost": "1.500 - 3.000 TL"
                    },
                    {
                            "id": "rap-3",
                            "title": "Turbo",
                            "description": "Turbo aktuatör.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "100.000+ km",
                            "repairCost": "3.000 - 6.000 TL"
                    },
                    {
                            "id": "rap-4",
                            "title": "Süspansiyon",
                            "description": "Ön amortisör.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "40.000+ km",
                            "repairCost": "500 - 1.500 TL"
                    },
                    {
                            "id": "rap-5",
                            "title": "Cam Kaldırma",
                            "description": "Cam kaldırma.",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "300 - 800 TL"
                    }
            ],
            "pros": [
                    "VW grubu platform",
                    "Ekonomik",
                    "Pratik sedan",
                    "İyi bagaj"
            ],
            "cons": [
                    "DSG riski",
                    "Plastik kalite",
                    "Sürüş keyfi orta",
                    "Popüler değil"
            ],
            "buyingTips": [
                    "Manuel tercih edin",
                    "Style donanım güzel",
                    "Octavia'dan ucuz",
                    "DSG mekatro kontrolü"
            ]
    }
,
{
  "id": "skoda-octavia-a7fl",
  "slug": "skoda-octavia-a7-facelift-1-6-tdi-style",
  "brand": "Škoda",
  "model": "Octavia",
  "variant": "Octavia A7 Facelift 1.6 TDI Style",
  "years": "2017-2020",
  "generation": "Ara Kasa (2017-2020)",
  "expertNote": "A7 facelift'te full LED farlar, yeni 4 kollu direksiyon ve 8 inç Columbus multimedya geldi. DSG DQ200 yazılımı tekrar güncellendi — mekatronik arızaları pre-facelift'e göre belirgin azaldı. 1.6 TDI CXXB motor aynı kaldı.",
  "reliabilityScore": 72,
  "totalIssues": 4,
  "searchCount": 13400,
  "issues": [
    {
      "id": "sk-oa7fl-1",
      "title": "DSG DQ200 Mekatronik (İyileşmiş)",
      "description": "DQ200 7 ileri DSG'nin mekatronik ünitesi hâlâ potansiyel risk taşıyor ancak facelift'te güncellenen yazılım ile arıza oranı %40 civarı azaldı. Yine de dikkatli olunmalı.",
      "category": "sanziman",
      "riskLevel": "MEDIUM",
      "affectedKm": "80.000-150.000 km",
      "repairCost": "8.000 - 18.000 TL"
    },
    {
      "id": "sk-oa7fl-2",
      "title": "1.6 TDI EGR Valve",
      "description": "EGR valfı karbon birikimi şehir içi kullanımda devam eden sorun. Periyodik temizlik gerekir.",
      "category": "motor",
      "riskLevel": "MEDIUM",
      "affectedKm": "80.000-130.000 km",
      "repairCost": "2.500 - 5.000 TL"
    },
    {
      "id": "sk-oa7fl-3",
      "title": "Full LED Far Modül Arızası",
      "description": "Facelift ile gelen full LED farların modülleri arızalanabilir. Tek LED segment sönme durumu.",
      "category": "elektronik",
      "riskLevel": "LOW",
      "affectedKm": "80.000+ km",
      "repairCost": "5.000 - 15.000 TL"
    },
    {
      "id": "sk-oa7fl-4",
      "title": "Klima Kompresörü (Devam)",
      "description": "Pre-facelift'ten devam eden klima kompresörü arızası. Manyetik kavrama aşınması klima soğutmayı bozar.",
      "category": "elektronik",
      "riskLevel": "LOW",
      "affectedKm": "100.000+ km",
      "repairCost": "4.000 - 8.000 TL"
    }
  ],
  "pros": [
    "DSG DQ200 yazılımı iyileşmiş",
    "Full LED farlar standart",
    "Columbus multimedya çok iyi",
    "Geniş iç hacim Octavia avantajı",
    "1.6 TDI düşük yakıt tüketimi"
  ],
  "cons": [
    "DSG DQ200 riski tam sıfır değil",
    "LED far tamiri pahalı",
    "EGR dekarbonizasyon gerekli"
  ],
  "buyingTips": [
    "DSG servis geçmişini mutlaka kontrol edin",
    "Full LED farların tüm segmentlerini kontrol edin",
    "2017+ facelift, pre-facelift'e göre daha güvenilir",
    "Manuel şanzıman varsa DSG riski sıfır"
  ]
}
];
