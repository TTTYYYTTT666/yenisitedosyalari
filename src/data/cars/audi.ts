import { Car } from '@/types';

export const audiCars: Car[] = [
    {
        id: "audi-a4-b8-2-0-tdi",
        slug: "audi-a4-b8-2-0-tdi",
        brand: "Audi",
        model: "A4",
        variant: "B8 2.0 TDI",
        years: "2008-2015",
        generation: "B8",
        price: 1150000,
        expertNote: "B8 kasa A4, Audi'nin en çok satanıdır. TDI motor güvenilirdir ancak Multitronic şanzıman ciddi risk taşır. Quattro + S-Tronic kombinasyonu en güvenlisidir. Benzinli 2.0 TFSI modellerde yağ yakma sorunu kronik ve çok pahalıdır.",
        reliabilityScore: 72,
        totalIssues: 5,
        searchCount: 16000,
        issues: [
            {
                id: "a4b8-1",
                title: "Yağ Yakma (2.0 TFSI)",
                description: "Benzinli 2.0 TFSI motorlarda piston segmanlarının karbon birikimi nedeniyle yapışması ve aşırı yağ tüketimi. 1000 km'de 1 litre yağ yakabilir. Çözüm motor revizyonu veya segman değişimidir. Audi bu sorunu resmi olarak kabul etmiştir.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "80.000+ km",
                repairCost: "50.000 - 80.000 TL"
            },
            {
                id: "a4b8-2",
                title: "Multitronic CVT Arızası",
                description: "Multitronic (CVT) şanzıman beyni arızası ve kayış aşınması. Vites geçişlerinde titreşim, anlık güç kesintisi ve 'Şanzıman Arızası' uyarısı verir. Tamiri çok pahalıdır ve çoğu zaman komple değişim gerekir. Quattro modellerde bu şanzıman yoktur.",
                category: "sanziman",
                riskLevel: "HIGH",
                affectedKm: "120.000+ km",
                repairCost: "35.000 - 60.000 TL"
            },
            {
                id: "a4b8-3",
                title: "Triger Zinciri Uzaması",
                description: "2.0 TDI motorlarda triger zincirinin uzaması ve çalışma sesinin artması. Motor arka tarafta olduğu için değişim çok işçiliklidir. Zamanında yapılmazsa zincir atlayabilir ve motor hasar görür.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "150.000+ km",
                repairCost: "15.000 - 25.000 TL"
            },
            {
                id: "a4b8-4",
                title: "Kontrol Kolları (Ön Takım)",
                description: "Ön süspansiyonda 4 adet kontrol kolu bulunur ve burçları aşınınca direksiyon oynar, kasis geçişlerinde takırtı sesi gelir. Genellikle set halinde değişim önerilir. Audi'nin klasik ön takım sorunudur.",
                category: "suspansiyon",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "8.000 - 15.000 TL"
            },
            {
                id: "a4b8-5",
                title: "Mechatronik Yağ Kaçağı",
                description: "S-Tronic (DSG) şanzımanlı modellerde mechatronik üniteden yağ sızıntısı. Vites geçişlerinde sertlik ve gecikme yaşanır. Erken müdahale edilmezse komple şanzıman hasarına yol açabilir.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "20.000 - 40.000 TL"
            }
        ],
        pros: [
            "Quattro çekiş güveni",
            "Malzeme kalitesi (Yumuşak plastikler)",
            "Sessiz kabin",
            "İkinci el değer koruma"
        ],
        cons: [
            "Yağ yakma sorunu (Benzinli 2.0 TFSI)",
            "Multitronic şanzıman riski",
            "Yüksek bakım maliyeti"
        ],
        buyingTips: [
            "Yağ tüketimi testi mutlaka isteyin",
            "Dizel + Quattro + S-Tronic en güvenli kombinasyondur",
            "Multitronic şanzımandan uzak durun"
        ]
    },
    {
        id: "audi-a3-8v-1-4-tfsi",
        slug: "audi-a3-8v-1-4-tfsi",
        brand: "Audi",
        model: "A3",
        variant: "8V 1.4 TFSI",
        years: "2012-2020",
        generation: "8V",
        price: 1350000,
        expertNote: "Premium hatchback segmentinin yıllardır lideri. 1.4 TFSI (150hp) motor performans/tüketim dengesi mükemmeldir. S-Tronic şanzıman bakımlıysa sorun çıkarmaz. Sunroofsuz A3 ikinci elde çok zor satılır.",
        reliabilityScore: 80,
        totalIssues: 5,
        searchCount: 14000,
        issues: [
            {
                id: "a3-8v-1",
                title: "S-Tronic (DSG) Kavrama Aşınması",
                description: "DQ200 kuru kavrama şanzımanda titreme, sarsıntı ve kavrama disk aşınması. Şehir içi kullanımda daha hızlı yıpranır. Kavrama seti değişimi gerektiğinde volan da birlikte değiştirilmelidir.",
                category: "sanziman",
                riskLevel: "HIGH",
                affectedKm: "60.000+ km",
                repairCost: "25.000 - 45.000 TL"
            },
            {
                id: "a3-8v-2",
                title: "Termostat/Su Pompası Kaçağı",
                description: "Plastik termostat gövdesinin çatlaması ve antifriz sızıntısı. Hararet iğnesi yükselir ve motor arıza lambası yanar. Zamanında müdahale edilmezse motor hasar görebilir. VW grubu ortak sorunudur.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "70.000+ km",
                repairCost: "8.000 - 15.000 TL"
            },
            {
                id: "a3-8v-3",
                title: "Yağ Tüketimi (1.4 TFSI)",
                description: "Silindir cidar kaplamasının aşınmasıyla artan yağ tüketimi. 5000 km'de 500ml'ye kadar normal kabul edilir ancak daha fazlası segman sorunu işaret eder. Erken dönem motorlarda daha sık görülür.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "20.000 - 50.000 TL (Revizyon)"
            },
            {
                id: "a3-8v-4",
                title: "MMI Ekran Mekanizması",
                description: "Motorlu MMI ekranının açılıp kapanma mekanizmasının bozulması. Ekran yarıda kalır veya hiç çıkmaz. Motor ve dişli seti değişimi gerekir.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Kronik (Yaşa bağlı)",
                repairCost: "5.000 - 10.000 TL"
            },
            {
                id: "a3-8v-5",
                title: "Ön Süspansiyon Burçları",
                description: "Alt salıncak burçlarının aşınması ile kasislerde takırtı sesi ve direksiyon oynaması. Rotlarla birlikte değişim önerilir.",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "80.000+ km",
                repairCost: "5.000 - 8.000 TL"
            }
        ],
        pros: [
            "Premium hatchback segmentinin lideri",
            "Mükemmel sürüş kalitesi",
            "Güçlü ikinci el değeri",
            "Sessiz kabin"
        ],
        cons: [
            "S-Tronic şanzıman masrafları",
            "Arkada şaft tüneli yüksek",
            "Yüksek bakım maliyeti"
        ],
        buyingTips: [
            "Kavrama testi mutlaka yapın (yokuş kalkış)",
            "Triger kayışı 90.000 km'de değişmiş mi kontrol edin",
            "Sunroofsuz model almayın — satışı çok zor"
        ]
    },
    {
        id: "audi-a3-8y-35-tfsi",
        slug: "audi-a3-8y-35-tfsi",
        brand: "Audi",
        model: "A3",
        variant: "35 TFSI",
        years: "2020-2024",
        generation: "8Y",
        price: 2000000,
        expertNote: "Yeni nesil A3, Golf 8 ile aynı MQB Evo platformunu kullanır. Dokunmatik kontroller ergonomik açıdan eleştirilir ama kalite hissi üst düzeydir. DSG DQ200 kavrama sorunu devam eder. Sedan versiyonu Türkiye'de çok popülerdir.",
        reliabilityScore: 81,
        totalIssues: 5,
        searchCount: 13000,
        issues: [
            {
                id: "a3-8y-1",
                title: "Dokunmatik Klima Kontrolü",
                description: "Kapasitif dokunmatik klima panelinin geç tepki vermesi, yanlış algılama yapması veya hiç çalışmaması. Tasarım kaynaklı olduğu için kesin çözümü yoktur. Sürüş sırasında dikkat dağıtıcıdır.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Karakteristik (Tasarım)",
                repairCost: "Çözümsüz"
            },
            {
                id: "a3-8y-2",
                title: "DSG DQ200 Kavrama Titremesi",
                description: "Kuru kavrama DSG şanzımanda soğuk motorla veya şehir içi trafikte belirgin titreme ve sarsıntı. Kavrama seti değişimi veya yazılım güncellemesi gerekebilir. VW grubu ortak sorunudur.",
                category: "sanziman",
                riskLevel: "HIGH",
                affectedKm: "50.000+ km",
                repairCost: "25.000 - 45.000 TL"
            },
            {
                id: "a3-8y-3",
                title: "MIB3 Multimedya Donması",
                description: "MIB3 infotainment sisteminin donması, siyah ekran vermesi veya CarPlay/Android Auto bağlantısının kopması. Yazılım güncellemesiyle kısmen düzelir ancak tekrarlayabilir.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "Yazılım / MIB Değişimi (15.000 TL)"
            },
            {
                id: "a3-8y-4",
                title: "SOS Acil Çağrı Modülü",
                description: "Tavandaki SOS modülünün arızalanması ve gösterge panelinde sürekli 'SOS Hatası' uyarısı vermesi. Modül değişimi gerekir.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "5.000 - 10.000 TL"
            },
            {
                id: "a3-8y-5",
                title: "Su Pompası / Termostat Sızıntısı",
                description: "1.5 TFSI Evo motorlarda plastik termostat/su pompası ünitesinden antifriz sızıntısı. VW grubu 1.5 TSI motorların kronik sorunudur. Erken müdahale önemlidir.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "50.000+ km",
                repairCost: "8.000 - 15.000 TL"
            }
        ],
        pros: [
            "Premium kaliteli iç mekan",
            "Matrix LED farlar",
            "Gelişmiş sürüş asistanları",
            "Kompakt premium segmentin en iyisi"
        ],
        cons: [
            "Dokunmatik kontroller (Ergonomi sorunu)",
            "DSG DQ200 kavrama riski",
            "Yüksek fiyat"
        ],
        buyingTips: [
            "DSG vites geçişlerini soğuk motorla test edin",
            "Multimedya yazılımının güncel olduğundan emin olun",
            "Sedan versiyonu ikinci elde daha hızlı satılır"
        ]
    },
    {
        id: "audi-q3-35-tfsi",
        slug: "audi-q3-35-tfsi",
        brand: "Audi",
        model: "Q3",
        variant: "35 TFSI",
        years: "2018-2024",
        generation: "F3",
        price: 2400000,
        expertNote: "Kompakt premium SUV segmentinin en kalitelisi. Tiguan altyapısını kullanır ama iç mekan çok daha premium hissettirir. Quattro seçeneği kış aylarında büyük avantaj sağlar. Sportback versiyonu daha şık ama bagajı küçüktür.",
        reliabilityScore: 82,
        totalIssues: 5,
        searchCount: 11000,
        issues: [
            {
                id: "q3-1",
                title: "Panoramik Tavan Mekanizması",
                description: "Panoramik cam tavanın açılırken takılması, yarıda kalması veya kapanmaması. Motor ve ray mekanizmasındaki aşınma kaynaklıdır. Kış aylarında buz tutmasıyla daha sık görülür. Mekanizma değişimi gerekebilir.",
                category: "govde",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele / Yaşa bağlı",
                repairCost: "8.000 - 15.000 TL"
            },
            {
                id: "q3-2",
                title: "DSG DQ381 Vites Geçiş Sertliği",
                description: "7 ileri DSG şanzımanda özellikle 2. ve 3. vites geçişlerinde sertlik ve vuruntu hissedilmesi. Soğuk havalarda daha belirgindir. Yazılım güncellemesi ve kavrama adaptasyonu ile iyileşir.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "40.000+ km",
                repairCost: "Yazılım / 20.000 - 35.000 TL (Kavrama)"
            },
            {
                id: "q3-3",
                title: "Su Pompası Sızıntısı",
                description: "1.5 TFSI motorlarda plastik su pompası/termostat ünitesinden antifriz kaçağı. VW grubu 1.5 TSI motorların bilinen kronik sorunudur. Motor altında antifriz lekesi ve su seviyesi düşüşü ile fark edilir.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "50.000+ km",
                repairCost: "8.000 - 15.000 TL"
            },
            {
                id: "q3-4",
                title: "Virtual Cockpit Piksellenme",
                description: "Dijital gösterge panelinde (Virtual Cockpit) bazı bölgelerde piksel bozulması veya karartma. Ekran ünitesi komple değişim gerektirir.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "15.000 - 25.000 TL"
            },
            {
                id: "q3-5",
                title: "Arka Fren Disk Aşınması",
                description: "Arka fren disklerinin beklenenden erken aşınması ve fren sırasında titreşim hissedilmesi. SUV ağırlığı nedeniyle frenler daha çok zorlanır. Disk ve balata birlikte değiştirilmelidir.",
                category: "fren",
                riskLevel: "LOW",
                affectedKm: "40.000+ km",
                repairCost: "5.000 - 8.000 TL"
            }
        ],
        pros: [
            "Premium iç mekan kalitesi",
            "Quattro seçeneği",
            "Virtual Cockpit",
            "Geniş bagaj hacmi"
        ],
        cons: [
            "Yüksek fiyat",
            "Bakım maliyetleri",
            "Donanım opsiyonel (Fiyatı artırır)"
        ],
        buyingTips: [
            "Panoramik tavanı mutlaka açıp kapatın",
            "Virtual Cockpit ekranını karanlıkta kontrol edin",
            "Quattro modeller kışın çok daha güvenlidir"
        ]
    },
    {
        id: "audi-a3-8v-sedan",
        slug: "audi-a3-sedan-8v-tfsi",
        brand: "Audi",
        model: "A3",
        variant: "Sedan 35 TFSI",
        years: "2013-2020",
        generation: "8V",
        price: 1650000,
        expertNote: "Türkiye'nin en popüler premium sedanı. A3 Sedan ikinci elde altın gibidir. Sunrooflu/Matrix LED'li modeller çok hızlı satılır. S-Tronic bakımlıysa uzun ömürlüdür.",
        reliabilityScore: 85,
        totalIssues: 5,
        searchCount: 28000,
        issues: [
            {
                id: "a3-sed-1",
                title: "S-Tronic Mekatronik Arızası",
                description: "DQ200 şanzıman mekatronik kartının arızalanması. Vites geçişlerinde sertlik, titreme veya vitese geçmeme durumu yaşanır. Basınç tüpü gevşemesi de sık görülür.",
                category: "sanziman",
                riskLevel: "HIGH",
                affectedKm: "80.000+ km",
                repairCost: "25.000 - 45.000 TL"
            },
            {
                id: "a3-sed-2",
                title: "Termostat / Su Pompası",
                description: "Plastik termostat gövdesinden antifriz sızıntısı. Hararet iğnesi normal görünse bile motor altında yeşil/pembe leke oluşur. Zamanında değiştirilmezse motor hasar görebilir.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "70.000+ km",
                repairCost: "8.000 - 15.000 TL"
            },
            {
                id: "a3-sed-3",
                title: "MMI Ekran Motoru",
                description: "Pop-up MMI ekranının açılıp kapanma mekanizmasındaki dişlinin aşınması. Ekran yarıda kalır veya çıkmaz. Dişli seti veya motor değişimi gerekir.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Yaşa bağlı",
                repairCost: "5.000 - 10.000 TL"
            },
            {
                id: "a3-sed-4",
                title: "Çift Kütleli Volan Sesi",
                description: "Motor stop ederken veya rölantide gelen 'şak şak' metalik ses. Volanın iç yaylarının aşınmasından kaynaklanır. Kavrama ile birlikte değiştirilmelidir.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "15.000 - 25.000 TL"
            },
            {
                id: "a3-sed-5",
                title: "Ön Süspansiyon Burç / Rot",
                description: "Alt salıncak burçları ve rot başlarının aşınmasıyla kasislerde takırtı sesi. Direksiyon oynaması ve düzensiz lastik aşınması da yaşanabilir.",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "80.000+ km",
                repairCost: "5.000 - 10.000 TL"
            }
        ],
        pros: [
            "Türkiye'nin en popüler premium sedanı",
            "Güçlü ikinci el değeri",
            "Sessiz kabin",
            "Premium malzeme kalitesi"
        ],
        cons: [
            "Donanım fakiri paketler var (Ambition dikkat)",
            "Arka diz mesafesi sınırlı",
            "S-Tronic masrafları"
        ],
        buyingTips: [
            "Matrix LED farlı modelleri tercih edin",
            "Sunroofsuz A3 Sedan almayın — satışı çok zor",
            "Kavrama ve volan sesini mutlaka dinleyin"
        ]
    },
    {
        id: "audi-a4-b9",
        slug: "audi-a4-b9-tdi",
        brand: "Audi",
        model: "A4",
        variant: "B9 40 TDI Quattro",
        years: "2016-2024",
        generation: "B9",
        price: 2800000,
        expertNote: "B9 kasa A4, Audi'nin en olgun sedanıdır. 2.0 TDI Quattro kombinasyonu uzun yolda benzersiz bir deneyim sunar. AdBlue sistemi bilinen tek zayıf noktasıdır. Virtual Cockpit ve Matrix LED opsiyon olup ikinci el değerini ciddi artırır.",
        reliabilityScore: 87,
        totalIssues: 5,
        searchCount: 18000,
        issues: [
            {
                id: "a4b9-1",
                title: "AdBlue Dozajlama Arızası",
                description: "AdBlue enjektörünün kristalleşmesi veya pompa arızası nedeniyle 'AdBlue Hatası: Motor X km sonra çalışmayacak' uyarısı. Kış aylarında AdBlue donması da sorun yaratır. Enjektör ve tank temizliği/değişimi gerekir.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "60.000+ km",
                repairCost: "15.000 - 30.000 TL"
            },
            {
                id: "a4b9-2",
                title: "Kontrol Kolları (Ön Süspansiyon)",
                description: "Audi'nin karakteristik çoklu kontrol kolu ön süspansiyonunda burç aşınması. Kasislerde takırtı sesi, 120+ km/s hızlarda direksiyon titremesi yaşanır. Set halinde değişim önerilir.",
                category: "suspansiyon",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "10.000 - 18.000 TL"
            },
            {
                id: "a4b9-3",
                title: "DPF Rejenerasyon Sorunu",
                description: "Şehir içi kısa mesafe kullanımda DPF'nin dolması ve rejenerasyon yapılamaması. Motor arıza lambası yanar ve güç sınırlaması devreye girer. Uzun yolda yüksek devirde sürüş gerekir.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Şehir içi kullanım",
                repairCost: "8.000 - 20.000 TL (Temizlik/Değişim)"
            },
            {
                id: "a4b9-4",
                title: "Virtual Cockpit Hatası",
                description: "Dijital gösterge panelinde donma, yeniden başlama veya piksel bozulması. Yazılım güncellemesi ile düzelebilir ancak bazı durumlarda ekran değişimi gerekir.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Yazılım / 15.000 - 25.000 TL (Ekran)"
            },
            {
                id: "a4b9-5",
                title: "EGR Valfi Tıkanması",
                description: "Egzoz gazı devridaim valfinin karbon birikimi nedeniyle tıkanması. Motor performans kaybı, duman ve arıza lambası ile kendini gösterir. Temizlik veya değişim gerekir.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "10.000 - 18.000 TL"
            }
        ],
        pros: [
            "Quattro güveni (4 çeker)",
            "Premium malzeme kalitesi",
            "Sessiz ve konforlu kabin",
            "Güçlü ikinci el değeri"
        ],
        cons: [
            "Muhafazakar tasarım",
            "Yüksek bakım maliyeti",
            "AdBlue masrafı"
        ],
        buyingTips: [
            "Quattro olmayan önden çekişli modeller daha ekonomiktir",
            "Virtual Cockpit + Matrix LED farlı modelleri tercih edin",
            "AdBlue sistemi son ne zaman bakım görmüş sorun"
        ]
    },
    {
        id: "audi-q5-40-tdi",
        slug: "audi-q5-40-tdi",
        brand: "Audi",
        model: "Q5",
        variant: "40 TDI Quattro S-Line",
        years: "2017-2024",
        generation: "FY",
        price: 3500000,
        expertNote: "Q5, Audi'nin en çok satan SUV'udur. Quattro sistemi kış aylarında rakipsizdir. S-Line paketi ikinci elde ciddi fark yaratır. 2.0 TDI motor güçlü ve ekonomiktir ancak AdBlue sistemi bakım ister.",
        reliabilityScore: 86,
        totalIssues: 5,
        searchCount: 19000,
        issues: [
            {
                id: "q5-1",
                title: "AdBlue Dozajlama Arızası",
                description: "AdBlue enjektörünün kristalleşmesi veya pompanın arızalanması. 'Motor X km sonra çalışmayacak' uyarısı verir. Tank ve enjektör temizliği/değişimi gerekir. Kış aylarında donma riski de vardır.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "60.000+ km",
                repairCost: "15.000 - 30.000 TL"
            },
            {
                id: "q5-2",
                title: "Panoramik Tavan Su Sızıntısı",
                description: "Cam tavan giderlerinin yaprak ve kir ile tıkanması sonucu araç içine su sızması. A sütunu ve tavan döşemesi ıslanır. Düzenli gider temizliği şarttır.",
                category: "govde",
                riskLevel: "MEDIUM",
                affectedKm: "Bakımsızsa",
                repairCost: "Temizlik / 10.000 - 20.000 TL (Hasar varsa)"
            },
            {
                id: "q5-3",
                title: "S-Tronic Vites Geçiş Sertliği",
                description: "7 ileri S-Tronic (DQ500) şanzımanda düşük hızda vites geçişlerinde sarsıntı ve sertlik. Kavrama adaptasyonu veya yazılım güncellemesi ile iyileşir.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "50.000+ km",
                repairCost: "Yazılım / 20.000 - 40.000 TL (Kavrama)"
            },
            {
                id: "q5-4",
                title: "Elektronik Motor Kulağı",
                description: "Elektronik aktif motor kulaklarının erken yıpranması. Motor titreşiminin kabine yansıması ve rölantide belirgin sarsıntı hissedilmesi.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "80.000+ km",
                repairCost: "12.000 - 20.000 TL"
            },
            {
                id: "q5-5",
                title: "Fren Disk Deformasyonu",
                description: "Ağır SUV kasası nedeniyle ön fren disklerinin ısınarak deformasyon yapması. Fren sırasında direksiyon titremesi hissedilir. Performans fren diskleri önerilir.",
                category: "fren",
                riskLevel: "LOW",
                affectedKm: "50.000+ km",
                repairCost: "8.000 - 12.000 TL"
            }
        ],
        pros: [
            "Quattro güveni",
            "Sessiz ve konforlu kabin",
            "Premium iç mekan kalitesi",
            "Güçlü 2.0 TDI motor"
        ],
        cons: [
            "Yüksek fiyat",
            "Servis ve bakım pahalı",
            "AdBlue masrafı"
        ],
        buyingTips: [
            "Matrix LED far olmayanları ikinci elde daha yavaş satılır",
            "S-Line paketi mutlaka tercih edin",
            "Cam tavan giderlerini kontrol ettirin"
        ]
    },
    {
        id: "audi-a6-c8-40-tdi",
        slug: "audi-a6-c8-40-tdi",
        brand: "Audi",
        model: "A6",
        variant: "40 TDI Quattro S-Line",
        years: "2018-2024",
        generation: "C8",
        price: 4200000,
        expertNote: "C8 kasa A6, Audi'nin teknoloji vitrinidir. Üç ekranlı kokpit devrim niteliğindedir. 2.0 TDI Quattro kombinasyonu mükemmel yol tutuşu sunar. Vakum kapı ve direksiyon ısıtma opsiyonları ikinci elde ciddi fark yaratır.",
        reliabilityScore: 86,
        totalIssues: 5,
        searchCount: 22000,
        issues: [
            {
                id: "a6c8-1",
                title: "MMI Dokunmatik Ekran Sorunu",
                description: "Üst veya alt dokunmatik ekranın tepki vermemesi, donması veya hayalet dokunma algılaması. Haptic feedback (titreşimli geri bildirim) çalışmayabilir. Yazılım güncellemesi veya ekran değişimi gerekir.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "Yazılım / 20.000 - 35.000 TL (Ekran)"
            },
            {
                id: "a6c8-2",
                title: "AdBlue Sistemi",
                description: "AdBlue enjektörü kristalleşmesi ve pompa arızası. Kış aylarında AdBlue sıvısının donması riski. Sistem hatayı verdiğinde motor belirli bir km sonra çalışmayı reddeder.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "60.000+ km",
                repairCost: "15.000 - 30.000 TL"
            },
            {
                id: "a6c8-3",
                title: "48V Mild Hybrid Akü",
                description: "48V hafif hibrit sisteminin lityum aküsünün arızalanması. Start-stop çalışmaması, rejeneratif frenleme kaybı ve motor titreşimi. Akü değişimi pahalıdır.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "20.000 - 35.000 TL"
            },
            {
                id: "a6c8-4",
                title: "Kontrol Kolları (Ön Takım)",
                description: "Audi'nin karakteristik çoklu kontrol kolu ön süspansiyonunda burç aşınması. Kasislerde takırtı, yüksek hızda direksiyon titreşimi. Set halinde değişim önerilir.",
                category: "suspansiyon",
                riskLevel: "MEDIUM",
                affectedKm: "70.000+ km",
                repairCost: "12.000 - 20.000 TL"
            },
            {
                id: "a6c8-5",
                title: "Kamera ve Sensör Kalibrasyonu",
                description: "Cam değişimi veya far ayarı sonrasında ADAS kameralarının kalibrasyonunun bozulması. Şerit takip, uyarlanabilir hız sabitleme ve gece görüş sistemleri çalışmaz. Yetkili serviste kalibrasyon gerekir.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Cam değişimi sonrası",
                repairCost: "5.000 - 10.000 TL (Kalibrasyon)"
            }
        ],
        pros: [
            "Teknoloji üssü (Üç ekranlı kokpit)",
            "Premium konfor",
            "Prestij ve statü",
            "Quattro güveni"
        ],
        cons: [
            "Parmak izi manyaklığı (Ekranlar)",
            "Yazılım hataları",
            "Çok yüksek bakım maliyeti"
        ],
        buyingTips: [
            "Direksiyon ısıtma ve vakum kapı opsiyonlarını arayın",
            "Her iki dokunmatik ekranı da test edin",
            "AdBlue sistemi son bakım tarihini sorun"
        ]
    },
    {
        id: "audi-a4-b9-2-0-tfsi",
        slug: "audi-a4-b9-2-0-tfsi",
        brand: "Audi",
        model: "A4",
        variant: "2.0 TFSI Advanced",
        years: "2016-2024",
        generation: "B9",
        price: 2500000,
        reliabilityScore: 89,
        totalIssues: 3,
        searchCount: 16000,
        issues: [
            {
                id: "a4-b9-1",
                title: "Termostat/Su Pompası",
                description: "Plastik termostat gövdesinin çatlaması ve su kaçağı.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "60.000 - 100.000 km",
                repairCost: "12.000 - 20.000 TL"
            },
            {
                id: "a4-b9-2",
                title: "Motor Kulağı",
                description: "Elektronik motor kulaklarının erken yıpranması.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "80.000+ km",
                repairCost: "10.000 - 15.000 TL"
            },
            {
                id: "a4-b9-3",
                title: "Kontrol Kolları",
                description: "Ön süspansiyon burçlarının ses yapması.",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "70.000+ km",
                repairCost: "8.000 TL"
            }
        ],
        pros: [
            "Sessizlik",
            "Yol tutuş",
            "Kalite"
        ],
        cons: [
            "Önden çekiş (Quattro değilse)",
            "Arka diz mesafesi"
        ],
        buyingTips: [
            "Benzinli motorlar (TFSI) dizellere göre çok daha sessiz ve sorunsuzdur."
        ]
    },
    {
        id: "audi-a3-8v-1-6-tdi",
        slug: "audi-a3-8v-1-6-tdi",
        brand: "Audi",
        model: "A3",
        variant: "1.6 TDI Ambition",
        years: "2012-2017",
        generation: "8V",
        price: 1250000,
        expertNote: "Türkiye'de en çok aranan A3 versiyon. 1.6 TDI motor ekonomik ve dayanıklıdır. Ambition paketi boş olabilir, Environment veya S-Line paketi tercih edin. Sunroofsuz model almayın.",
        reliabilityScore: 84,
        totalIssues: 5,
        searchCount: 40000,
        issues: [
            {
                id: "a3-tdi-1",
                title: "S-Tronic Mekatronik Arızası",
                description: "DQ200 kuru kavrama şanzımanın mekatronik kart arızası. Vites geçişlerinde titreme, sertlik veya vitese geçmeme. Basınç tüpü gevşemesi de sık görülür. Bakımlı şanzımanlarda daha geç ortaya çıkar.",
                category: "sanziman",
                riskLevel: "HIGH",
                affectedKm: "80.000+ km",
                repairCost: "25.000 - 45.000 TL"
            },
            {
                id: "a3-tdi-2",
                title: "MMI Ekran Mekanizması",
                description: "Pop-up MMI ekranının açılıp kapanma mekanizmasının bozulması. Dişli seti aşınır ve ekran yarıda kalır veya hiç çıkmaz.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Yaşa bağlı (Kronik)",
                repairCost: "5.000 - 10.000 TL"
            },
            {
                id: "a3-tdi-3",
                title: "EGR Valfi Tıkanması",
                description: "Şehir içi kısa mesafe kullanımda EGR valfinin karbon birikimi ile tıkanması. Motor performans kaybı, duman ve arıza lambası. Temizlik veya değişim gerekir.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "8.000 - 15.000 TL"
            },
            {
                id: "a3-tdi-4",
                title: "Çift Kütleli Volan",
                description: "Motor stop ederken ve rölantide metalik 'şak şak' sesi. Volan iç yaylarının aşınması. Kavrama ile birlikte değiştirme önerilir.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "120.000+ km",
                repairCost: "15.000 - 25.000 TL"
            },
            {
                id: "a3-tdi-5",
                title: "Devirdaim Pompası",
                description: "Elektronik devirdaim pompasının sıkışması veya sızıntı yapması. Hararet yükselmesi ile kendini gösterir. Triger seti ile birlikte değişimi önerilir.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "90.000+ km",
                repairCost: "8.000 - 15.000 TL"
            }
        ],
        pros: [
            "Premium his ve kalite",
            "Ekonomik 1.6 TDI motor",
            "Altın değerinde ikinci el",
            "Sessiz kabin"
        ],
        cons: [
            "Ambition paketi boş olabilir",
            "S-Tronic masrafları",
            "DSG bakım maliyeti"
        ],
        buyingTips: [
            "Sunroof olmayan A3'ler çok zor satılır",
            "Environment veya S-Line paketi tercih edin",
            "Kavrama ve volan sesini mutlaka dinleyin"
        ]
    },
    {
        id: "audi-q2",
        slug: "audi-q2-1-6-tdi",
        brand: "Audi",
        model: "Q2",
        variant: "1.6 TDI Design",
        years: "2017-2023",
        generation: "GA",
        price: 1500000,
        expertNote: "Q2 görünüşte premium ama iç mekan kalitesi A3'e göre düşük. Sert plastikler ve dar arka alan hayal kırıklığı yaratabilir. Şehir içi kullanım için idealdi ama fiyat/performans oranı düşük.",
        reliabilityScore: 82,
        totalIssues: 5,
        searchCount: 9000,
        issues: [
            {
                id: "q2-1",
                title: "S-Tronic (DQ200) Kavrama",
                description: "Kuru kavrama DSG şanzımanda şehir içi trafikte belirgin titreme ve sarsıntı. Soğuk motorla daha belirgindir. Kavrama seti değişimi veya yazılım güncellemesi gerekir.",
                category: "sanziman",
                riskLevel: "HIGH",
                affectedKm: "60.000+ km",
                repairCost: "25.000 - 45.000 TL"
            },
            {
                id: "q2-2",
                title: "EGR Valfi Tıkanması",
                description: "1.6 TDI motorlarda EGR valfinin karbon birikimi ile tıkanması. Güç kaybı, duman ve arıza lambası belirtileri. Şehir içi kullanımda daha sık görülür.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "8.000 - 15.000 TL"
            },
            {
                id: "q2-3",
                title: "Plastik İç Trim Gıcırtısı",
                description: "Kapı panelleri ve torpido bölgesinde sert plastik parçaların gıcırdaması. Bozuk yollarda belirginleşir. Q2'nin iç mekan kalitesi A3'e göre düşük olmasından kaynaklanır.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "30.000+ km",
                repairCost: "2.000 - 5.000 TL (Ses yalıtım bandaj)"
            },
            {
                id: "q2-4",
                title: "DPF Rejenerasyon",
                description: "Şehir içi kısa mesafe kullanımda DPF'nin dolması. Motor arıza lambası yanar ve güç sınırlaması devreye girer. Düzenli uzun yol sürüşü gerekir.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Şehir içi kullanım",
                repairCost: "8.000 - 18.000 TL (Temizlik/Değişim)"
            },
            {
                id: "q2-5",
                title: "Multimedya Donması",
                description: "Infotainment sisteminin donması, siyah ekran vermesi ve Bluetooth bağlantı kopması. Yazılım güncellemesi kısmen çözer.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Yazılım / 8.000 TL (MIB)"
            }
        ],
        pros: [
            "Premium imaj",
            "Şehir içi pratiklik",
            "Farklı tasarım"
        ],
        cons: [
            "Sert plastikler (Audi kalitesi değil)",
            "Yüksek fiyat/değer oranı",
            "Dar arka alan"
        ],
        buyingTips: [
            "Tasarımı sevenler için iyi, kalite arayanlar A3 almalı",
            "1.0 TSI benzinli motor daha az sorunludur",
            "DSG kavrama testini mutlaka yapın"
        ]
    },
    {
        id: "audi-a1",
        slug: "audi-a1-1-4-tfsi",
        brand: "Audi",
        model: "A1",
        variant: "1.4 TFSI",
        years: "2011-2018",
        generation: "8X",
        price: 850000,
        expertNote: "A1, şehir için üretilmiş en küçük Audi'dir. Tek kişi veya çiftler için idealdir. 1.4 TFSI Twincharged (kompresör + turbo) versiyonu 185hp ile eğlencelidir ama zincir sorunu vardır. S-Tronic bakımı ihmal edilmemelidir.",
        reliabilityScore: 78,
        totalIssues: 5,
        searchCount: 5000,
        issues: [
            {
                id: "a1-1",
                title: "S-Tronic Mekatronik",
                description: "DQ200 şanzıman mekatronik kart arızası. Vites geçişlerinde titreme, sertlik veya vitese geçmeme durumu yaşanır. S-Tronic yazılım güncellemesi veya kart değişimi gerekir.",
                category: "sanziman",
                riskLevel: "HIGH",
                affectedKm: "70.000+ km",
                repairCost: "25.000 - 45.000 TL"
            },
            {
                id: "a1-2",
                title: "Triger Zinciri Uzaması",
                description: "1.4 TFSI motorlarda triger zincirinin uzaması ve ilk çalıştırmada metalik zincir sesi. Zamanında değiştirilmezse zincir atlayabilir ve motor hasar görür. Özellikle 140hp ve 185hp motorlarda yaygın.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "80.000+ km",
                repairCost: "12.000 - 20.000 TL"
            },
            {
                id: "a1-3",
                title: "Turbo Wastegate Sesi",
                description: "Turbonun wastegate kanalcığındaki aşınma nedeniyle motor yüklenme ve boşalmada metalik ses. Turbo değişimi gerekebilir.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "15.000 - 25.000 TL"
            },
            {
                id: "a1-4",
                title: "Bobinler ve Ateşleme",
                description: "Ateşleme bobinlerinin zamanından önce arızalanması. Motor titreşimi, güç kaybı ve arıza lambası. Genellikle 4 bobinin birden değişimi önerilir.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "60.000+ km",
                repairCost: "3.000 - 6.000 TL"
            },
            {
                id: "a1-5",
                title: "Kaping ve Süspansiyon",
                description: "Küçük kasa ve kısa süspansiyon seyahati nedeniyle sert sürüş. Bozuk yollarda amortisörler hızlı yıpranır ve kasis geçişlerinde vuruntu sesi gelir.",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "70.000+ km",
                repairCost: "5.000 - 10.000 TL"
            }
        ],
        pros: [
            "Şehir içi pratiklik",
            "Premium kalite hissi",
            "Kompakt boyut"
        ],
        cons: [
            "Arka diz mesafesi yok gibi",
            "Yüksek bakım maliyeti",
            "Zincir ve DSG riskleri"
        ],
        buyingTips: [
            "Tek kişi veya çiftler için uygundur",
            "İlk çalıştırmada zincir sesini mutlaka dinleyin",
            "1.0 TFSI 3 silindirli motor daha sorunsuzdur"
        ]
    },
    {
        id: "audi-a6-c7-tdi",
        slug: "audi-a6-c7-2-0-tdi",
        brand: "Audi",
        model: "A6",
        variant: "2.0 TDI",
        years: "2011-2018",
        generation: "C7",
        price: 1800000,
        expertNote: "C7 kasa A6, Audi'nin en zarif sedanlarından biridir. Multitronic CVT şanzıman en büyük risk faktörüdür — kesinlikle Quattro + S-Tronic tercih edin. TDI motor güvenilirdir ama EGR ve AdBlue sorunları olabilir. Fiyat/performans açısından premium segmentin en iyi tekliflerinden.",
        reliabilityScore: 75,
        totalIssues: 5,
        searchCount: 14500,
        issues: [
            {
                id: "a6c7-1",
                title: "Multitronic CVT Arızası",
                description: "Multitronic (CVT) şanzıman beyni arızası ve kayış aşınması. Vites geçişlerinde titreşim, anlık güç kesintisi ve 'Şanzıman Arızası' uyarısı. Tamiri çok pahalı, çoğu zaman komple değişim gerekir. Quattro modellerde bu şanzıman yoktur.",
                category: "sanziman",
                riskLevel: "HIGH",
                affectedKm: "120.000+ km",
                repairCost: "30.000 - 55.000 TL"
            },
            {
                id: "a6c7-2",
                title: "EGR Soğutucu Çatlağı",
                description: "EGR soğutucusunun çatlayarak antifriz sızıntısı yapması. Su seviyesi düşer ve motor hasar görebilir. Soğutucu değişimi emek gerektiren bir iştir.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "100.000+ km",
                repairCost: "15.000 - 25.000 TL"
            },
            {
                id: "a6c7-3",
                title: "Kontrol Kolları (Ön Takım)",
                description: "Audi'nin klasik çoklu kontrol kolu ön süspansiyonunda burç aşınması. Kasislerde takırtı, yüksek hızda direksiyon oynaması. A6 ağır kasa olduğu için daha erken aşınır.",
                category: "suspansiyon",
                riskLevel: "MEDIUM",
                affectedKm: "70.000+ km",
                repairCost: "10.000 - 18.000 TL"
            },
            {
                id: "a6c7-4",
                title: "Triger Zinciri Uzaması",
                description: "2.0 TDI motorlarda triger zincirinin uzaması. Motor arka tarafta olduğu için değişim çok işçiliklidir. İlk çalıştırmada metalik ses duyulursa acil müdahale gerekir.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "150.000+ km",
                repairCost: "15.000 - 25.000 TL"
            },
            {
                id: "a6c7-5",
                title: "MMI Ekran ve Navigasyon",
                description: "MMI ekranının donması, navigasyon haritalarının güncellenmemesi ve Bluetooth bağlantı sorunları. Eski nesil MMI sistemi güncel telefonlarla uyumsuzluk yaşayabilir.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Yaşa bağlı",
                repairCost: "5.000 - 15.000 TL"
            }
        ],
        pros: [
            "Premium konfor ve sessizlik",
            "Zarif tasarım",
            "Geniş kabin",
            "Güçlü ikinci el değeri"
        ],
        cons: [
            "Multitronic şanzıman ciddi risk",
            "Yüksek bakım maliyeti",
            "Yedek parça pahalı"
        ],
        buyingTips: [
            "Multitronic şanzımandan uzak durun — Quattro + S-Tronic alın",
            "EGR soğutucu ve triger zinciri bakımlarını sorgulayın",
            "Ön süspansiyon kontrolü yaptırın"
        ]
    }
];
