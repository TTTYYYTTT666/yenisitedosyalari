import { Car } from '@/types';

export const seatCars: Car[] = [
    {
        id: "seat-leon-1-5-tsi",
        slug: "seat-leon-1-5-tsi",
        brand: "Seat",
        model: "Leon",
        variant: "1.5 TSI FR",
        years: "2020-2024",
        generation: "Mk4",
        price: 1550000,
        expertNote: "Leon Mk4, Golf 8 ile aynı MQB Evo platformunu paylaşır ama çok daha sportif bir tasarıma sahiptir. FR paketi Türkiye'de en çok tercih edilen versiyon. Dokunmatik klima kontrolleri ergonomik açıdan eleştirilir. Kırmızı renk Leon'un klasiğidir ve ikinci elde hızlı satılır.",
        reliabilityScore: 83,
        totalIssues: 5,
        searchCount: 38000,
        issues: [
            {
                id: "leon-1",
                title: "MIB3 Multimedya Donması",
                description: "MIB3 infotainment sisteminin donması, geç açılması, siyah ekran vermesi veya kendi kendine yeniden başlaması. CarPlay/Android Auto bağlantısı da etkilenir. Golf 8 sendromu olarak bilinir. Yazılım güncellemesi kısmen çözer.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele (Yazılım)",
                repairCost: "Yazılım / MIB Değişimi (15.000 TL)"
            },
            {
                id: "leon-2",
                title: "SOS Acil Çağrı Modülü Hatası",
                description: "Tavandaki eCall SOS modülünün arızalanması ve gösterge panelinde sürekli 'SOS Hatası' uyarısı vermesi. VW grubu araçlarda yaygın bir sorundur. Modül değişimi gerekir.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "5.000 - 10.000 TL"
            },
            {
                id: "leon-3",
                title: "Su Pompası / Termostat Sızıntısı",
                description: "1.5 TSI Evo motorlarda plastik termostat/su pompası ünitesinden antifriz kaçağı. VW grubu 1.5 TSI motorların bilinen kronik sorunudur. Motor altında antifriz lekesi ve su seviyesi düşüşü ile fark edilir.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "50.000+ km",
                repairCost: "8.000 - 15.000 TL"
            },
            {
                id: "leon-4",
                title: "Dokunmatik Klima Kontrol Sorunu",
                description: "Kapasitif dokunmatik klima panelinin geç tepki vermesi, yanlış algılama yapması veya hiç çalışmaması. Tasarım kaynaklı olduğu için kesin çözümü yoktur. Sürüş sırasında dikkat dağıtıcıdır.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Karakteristik (Tasarım)",
                repairCost: "Çözümsüz"
            },
            {
                id: "leon-5",
                title: "Kangaroo Effect (DSG DQ200)",
                description: "Düşük hızlarda (10-30 km/s) DSG şanzımanın silkeleme ve sarsıntı yapması. Kuru kavrama sisteminin karakteristiğidir. Yazılım güncellemesi kısmen düzeltir. Şehir içi trafikte rahatsız edicidir.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "0 km'den itibaren (Karakteristik)",
                repairCost: "Yazılım / 3.000 - 8.000 TL"
            }
        ],
        pros: [
            "Sportif ve keskin tasarım (LED ışık barı)",
            "Mükemmel yol tutuşu",
            "Golf 8 altyapısı daha uygun fiyata",
            "FR paketi cazip donanım"
        ],
        cons: [
            "Dokunmatik klima kontrolü kullanışsız",
            "Malzeme kalitesi Golf'ün altında",
            "Yazılım sorunları (Golf 8 sendromu)"
        ],
        buyingTips: [
            "FR paketi kırmızı renk Leon'un olmazsa olmazıdır",
            "SOS hatası veriyor mu bakın",
            "Multimedya yazılımının güncel olduğundan emin olun"
        ]
    },
    {
        id: "seat-ibiza-1-0-tsi",
        slug: "seat-ibiza-1-0-tsi",
        brand: "Seat",
        model: "Ibiza",
        variant: "1.0 TSI",
        years: "2017-2024",
        generation: "6F",
        price: 1050000,
        expertNote: "Ibiza, sınıfının en sportif olanıdır. Polo ile aynı MQB A0 platformunu paylaşır ama çok daha keskin hatlara sahiptir. 1.0 TSI 3 silindirli motor yeterli güçtedir. Sert plastikler Polo'ya göre dezavantaj. DSG DQ200 şanzıman mekatronik riski taşır.",
        reliabilityScore: 84,
        totalIssues: 5,
        searchCount: 10000,
        issues: [
            {
                id: "ibiza-1",
                title: "DSG Mekatronik Arızası",
                description: "DQ200 kuru kavrama şanzıman mekatronik kartı arızası. Vites geçişlerinde sarsıntı, tıkırtı sesi veya vitese geçmeme durumu yaşanır. Basınç tüpü gevşemesi de sık görülür.",
                category: "sanziman",
                riskLevel: "HIGH",
                affectedKm: "60.000+ km",
                repairCost: "25.000 - 45.000 TL"
            },
            {
                id: "ibiza-2",
                title: "Turbo Wastegate (EPC Hatası)",
                description: "Turbonun wastegate çubuğunun takılması sonucu EPC (Electronic Power Control) ışığı yanması ve güç kaybı. Motor limp moduna geçer. Wastegate mekanizması tamiri veya turbo değişimi gerekir.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "40.000+ km",
                repairCost: "8.000 - 20.000 TL"
            },
            {
                id: "ibiza-3",
                title: "Su Pompası / Termostat Kaçağı",
                description: "1.0 TSI motorlarda plastik termostat/su pompası ünitesinden antifriz sızıntısı. Motor altında antifriz lekesi ve su seviyesi düşüşü ile fark edilir. Zamanında müdahale edilmezse motor hasar görebilir.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "60.000+ km",
                repairCost: "6.000 - 12.000 TL"
            },
            {
                id: "ibiza-4",
                title: "Klima Flap Motoru Sesi",
                description: "Klima yönlendirme kanallarındaki flap motorlarından gelen tıkırtı veya vızıltı sesi. Özellikle klima ilk açıldığında duyulur. Flap motoru değişimi gerekir.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "2.000 - 5.000 TL"
            },
            {
                id: "ibiza-5",
                title: "Ön Süspansiyon Sesleri",
                description: "Z rotlar ve alt salıncak burçlarından gelen tıkırtı sesleri. Bozuk yollarda belirginleşir. Rot ve burç seti değişimi ile çözülür.",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "60.000+ km",
                repairCost: "4.000 - 8.000 TL"
            }
        ],
        pros: [
            "Sınıfının en sportif tasarımı",
            "Performanslı 1.0 TSI motor",
            "Geniş iç alan (Sınıfına göre)",
            "İyi yol tutuşu"
        ],
        cons: [
            "Sert plastik iç mekan (Polo'dan kötü)",
            "Yalıtım zayıf",
            "DSG DQ200 mekatronik riski"
        ],
        buyingTips: [
            "DSG vites geçişlerini soğuk motorla test edin",
            "Su seviyesini kontrol edin",
            "Klima flap sesini dinleyin"
        ]
    },
    {
        id: "seat-ateca-1-5-tsi",
        slug: "seat-ateca-1-5-tsi",
        brand: "Seat",
        model: "Ateca",
        variant: "1.5 TSI",
        years: "2019-2024",
        generation: "Mk1",
        price: 1750000,
        expertNote: "Ateca, Tiguan ile aynı platformu paylaşır ama daha uygun fiyatlıdır. 1.5 TSI motor yeterli güçtedir ve kangaroo effect sorunu yazılım güncellemesiyle azaltılmıştır. Geniş iç hacim ve pratik kullanım SUV arayanlar için idealdir.",
        reliabilityScore: 83,
        totalIssues: 5,
        searchCount: 12000,
        issues: [
            {
                id: "ateca-1",
                title: "Kangaroo Effect (DSG Silkelme)",
                description: "1.5 TSI + DSG DQ200 kombinasyonunda düşük hızlarda silkeleme ve sarsıntı. Motor soğukken ilk kalkışta daha belirgindir. Yazılım güncellemesi kısmen düzeltir ancak tam çözüm sağlanamaz.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "0 km'den itibaren (Karakteristik)",
                repairCost: "Yazılım / 3.000 - 8.000 TL"
            },
            {
                id: "ateca-2",
                title: "Su Pompası / Termostat Kaçağı",
                description: "1.5 TSI motorlarda plastik su pompası/termostat ünitesinden antifriz kaçağı. VW grubu 1.5 TSI motorların bilinen kronik sorunudur. Erken müdahale önemlidir.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "50.000+ km",
                repairCost: "8.000 - 15.000 TL"
            },
            {
                id: "ateca-3",
                title: "Multimedya Donması",
                description: "Infotainment ekranının donması, siyah ekran vermesi veya geç tepki vermesi. Yazılım güncellemesi kısmen çözer. Bazen araç yeniden başlatılması gerekir.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Yazılım / MIB Değişimi (12.000 TL)"
            },
            {
                id: "ateca-4",
                title: "Elektrikli Bagaj Amortisörü",
                description: "Elektrikli bagaj kapağının açılmaması, yarım kalması veya kapanmaması. Amortisör pistonu veya motor mekanizması aşınması kaynaklıdır.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "50.000+ km",
                repairCost: "3.000 - 8.000 TL"
            },
            {
                id: "ateca-5",
                title: "Rüzgar Sesi (A Sütunu)",
                description: "120+ km/s hızlarda A sütunu ve ayna bölgesinden gelen rüzgar sesi. Kapı fitillerinin aşınması veya oturmamasından kaynaklanır. Fitil değişimi veya ayarı ile azaltılabilir.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "Fitil Değişimi (2.000 - 4.000 TL)"
            }
        ],
        pros: [
            "Geniş iç hacim",
            "VW teknolojisi uygun fiyata",
            "Pratik SUV kullanımı",
            "İyi yol tutuşu"
        ],
        cons: [
            "Kangaroo effect (Şehir içi)",
            "Sert süspansiyon",
            "Rüzgar sesi yüksek hızlarda"
        ],
        buyingTips: [
            "DSG vites geçişlerini soğuk motorla test edin",
            "Elektrikli bagajı açıp kapatın",
            "Su seviyesini kontrol edin"
        ]
    },
    {
        id: "seat-leon-1-5-etsi",
        slug: "seat-leon-1-5-etsi",
        brand: "Seat",
        model: "Leon",
        variant: "1.5 eTSI",
        years: "2020-2024",
        generation: "Mk4",
        price: 1650000,
        expertNote: "eTSI versiyonu 48V mild hybrid sistemle donatılmıştır. Rejeneratif frenleme ve otomatik start-stop ile yakıt tasarrufu sağlar. Ancak mild hybrid sistemi sarsıntı ve kangalama yaratır. DSG DQ200 yerine DQ211 şanzıman kullanılır. 12V akü sorunu bilinen bir zayıf noktadır.",
        reliabilityScore: 81,
        totalIssues: 5,
        searchCount: 18000,
        issues: [
            {
                id: "leon-etsi-1",
                title: "Mild Hybrid Silkeleme (Kangalama)",
                description: "48V mild hybrid sistemi yavaşlama ve rejenerasyon sırasında belirgin sarsıntı ve kangalama etkisi yaratır. Motor stop/start geçişlerinde de hissedilir. Sistemin karakteristiğidir, kesin çözümü yoktur.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Karakteristik (0 km'den)",
                repairCost: "Çözümsüz (Tasarım)"
            },
            {
                id: "leon-etsi-2",
                title: "12V Akü Problemi",
                description: "48V sistemine rağmen 12V aküsünün beklenenden çabuk bitmesi. Araç çalışmama, elektronik arızalar ve gösterge hataları ile sonuçlanır. AGM akü değişimi gerekir.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "1-2 yıl / Rastgele",
                repairCost: "3.000 - 6.000 TL (AGM Akü)"
            },
            {
                id: "leon-etsi-3",
                title: "MIB3 Multimedya Donması",
                description: "MIB3 infotainment sisteminin donması, siyah ekran vermesi veya kendi kendine yeniden başlaması. CarPlay/Android Auto bağlantı kopmaları da yaşanır.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele (Yazılım)",
                repairCost: "Yazılım / MIB Değişimi (15.000 TL)"
            },
            {
                id: "leon-etsi-4",
                title: "SOS Acil Çağrı Modülü",
                description: "Tavandaki eCall SOS modülünün arızalanması ve sürekli uyarı vermesi. VW grubu araçlarda yaygın. Modül değişimi gerekir.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "5.000 - 10.000 TL"
            },
            {
                id: "leon-etsi-5",
                title: "Arka LED Stop Çatlaması",
                description: "Bagaj kapağındaki LED ışık barının (Infinite Light) kendiliğinden çatlaması veya su alması. Stop komple değişimi gerekir ve orijinal parça pahalıdır.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Zamanla / Rastgele",
                repairCost: "5.000 - 12.000 TL"
            }
        ],
        pros: [
            "Keskin tasarım (LED ışık barı)",
            "Sportif sürüş dinamikleri",
            "48V mild hybrid yakıt tasarrufu",
            "Gelişmiş LED aydınlatma"
        ],
        cons: [
            "Mild hybrid kangalama etkisi",
            "Dokunmatik kontroller kullanışsız",
            "12V akü zayıflığı"
        ],
        buyingTips: [
            "Mild hybrid silkelemeyi test sürüşünde hissedin",
            "12V akü değişmiş mi sorun",
            "Arka LED stop çatlamış mı kontrol edin"
        ]
    },
    {
        id: "seat-arona-1-0-dsg",
        slug: "seat-arona-1-0-eco-tsi",
        brand: "Seat",
        model: "Arona",
        variant: "1.0 EcoTSI Xperience",
        years: "2018-2024",
        generation: "Mk1",
        price: 1350000,
        expertNote: "Arona, Ibiza altyapısı üzerine kurulmuş kompakt crossover'dır. Yüksek oturma pozisyonu ve şehir içi pratikliği ile popülerdir. Çift renkli tavan seçeneği karakteristiktir ama boya sorunları olabilir. İç mekan kalitesi sert plastikler nedeniyle eleştirilir.",
        reliabilityScore: 83,
        totalIssues: 5,
        searchCount: 18000,
        issues: [
            {
                id: "arona-1",
                title: "DSG DQ200 Kararsızlığı",
                description: "Düşük hızlarda DSG şanzımanın vites geçişlerinde sarsıntı ve kararsızlık. Soğuk havalarda daha belirgindir. Yazılım güncellemesi ve kavrama adaptasyonu ile iyileşir.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "30.000+ km",
                repairCost: "Yazılım / 20.000 - 35.000 TL (Kavrama)"
            },
            {
                id: "arona-2",
                title: "Çift Renk Tavan Boya Soyulması",
                description: "Çift renkli (bi-color) modellerde tavan boyasının vernik atması veya soyulması. Özellikle siyah tavanlı modellerde güneşe maruz kalma ile hızlanır. Boyama veya folyo kaplama gerekir.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Zamanla / 2-3 yıl",
                repairCost: "3.000 - 8.000 TL (Boyama/Kaplama)"
            },
            {
                id: "arona-3",
                title: "Rüzgar Sesi (Kapı Fitilleri)",
                description: "A sütunu ve kapı fitillerinden gelen rüzgar sesi. 100+ km/s hızlarda belirginleşir. Kapı fitillerinin aşınması veya oturmamasından kaynaklanır. Fitil değişimi ile azaltılabilir.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "Fitil Değişimi (2.000 - 4.000 TL)"
            },
            {
                id: "arona-4",
                title: "Start-Stop Sistem Arızası",
                description: "Start-stop sisteminin devreye girmemesi ve akü zayıflığı uyarısı. AGM akü ömrünün kısalmasından kaynaklanır. Akü değişimi gerekir.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele / 2 yıl+",
                repairCost: "3.000 - 5.000 TL (AGM Akü)"
            },
            {
                id: "arona-5",
                title: "Multimedya Donması",
                description: "Infotainment ekranının donması, siyah ekran vermesi veya kilitlenmesi. Yazılım güncellemesi kısmen çözer. Bazen araç yeniden başlatılması gerekir.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Yazılım / MIB Değişimi (10.000 TL)"
            }
        ],
        pros: [
            "Yüksek oturma pozisyonu",
            "Şehir içi kıvraklık ve pratiklik",
            "Çift renkli tavan karakteri",
            "Uygun fiyat"
        ],
        cons: [
            "Sert plastik iç mekan",
            "Dar bagaj hacmi",
            "Rüzgar sesi yüksek hızlarda"
        ],
        buyingTips: [
            "Çift renk tavanlı modellerde boya durumunu kontrol edin",
            "Yüksek hızda rüzgar sesini dinleyin",
            "DSG vites geçişlerini test edin"
        ]
    },
    {
        id: "seat-leon-mk3-tdi",
        slug: "seat-leon-mk3-1-6-tdi",
        brand: "Seat",
        model: "Leon",
        variant: "1.6 TDI FR",
        years: "2013-2020",
        generation: "Mk3",
        price: 1250000,
        expertNote: "Leon Mk3, Golf 7 platformunu kullanır ve fiyat/performans açısından harikadır. FR paketi sportif görünüm ve LED farlar sunar. 1.6 TDI motor ekonomik ve güvenilirdir. DSG DQ200 kavrama ve trim sesleri bilinen sorunlardır. Sunroof fitilleri su sızdırabilir.",
        reliabilityScore: 82,
        totalIssues: 5,
        searchCount: 19000,
        issues: [
            {
                id: "leon3-1",
                title: "DSG DQ200 Kavrama Aşınması",
                description: "Kuru kavrama DSG şanzımanda titreme, sarsıntı ve kavrama disk aşınması. Şehir içi kullanımda daha hızlı yıpranır. Kavrama seti değişimi gerektiğinde volan da birlikte değiştirilmelidir.",
                category: "sanziman",
                riskLevel: "HIGH",
                affectedKm: "60.000+ km",
                repairCost: "25.000 - 45.000 TL"
            },
            {
                id: "leon3-2",
                title: "Su Pompası / Termostat Sızıntısı",
                description: "Plastik termostat/su pompası ünitesinden antifriz kaçağı. Hararet iğnesi yükselir. Zamanında değiştirilmezse motor hasar görebilir.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "6.000 - 12.000 TL"
            },
            {
                id: "leon3-3",
                title: "İç Trim ve Kapı Sesleri",
                description: "Kapı panelleri, sunroof çevresi ve torpido bölgesinden gelen tıkırtı ve gıcırtı sesleri. Bozuk yollarda belirginleşir. Ses yalıtım bandajı ile azaltılabilir ama tam çözüm yoktur.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "30.000+ km",
                repairCost: "1.000 - 3.000 TL"
            },
            {
                id: "leon3-4",
                title: "EGR Valfi Tıkanması",
                description: "Şehir içi kısa mesafe kullanımda EGR valfinin karbon birikimi ile tıkanması. Güç kaybı, duman ve arıza lambası. Temizlik veya değişim gerekir.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "8.000 - 15.000 TL"
            },
            {
                id: "leon3-5",
                title: "Sunroof Su Sızıntısı",
                description: "Sunroof fitillerinin aşınması veya gider kanallarının tıkanması ile araç içine su sızması. A sütunu ve tavan döşemesi ıslanır. Düzenli gider temizliği şarttır.",
                category: "govde",
                riskLevel: "MEDIUM",
                affectedKm: "Bakımsızsa",
                repairCost: "Temizlik / 5.000 - 10.000 TL (Hasar varsa)"
            }
        ],
        pros: [
            "Sportif tasarım ve LED farlar",
            "Ekonomik 1.6 TDI motor",
            "Golf 7 altyapısı uygun fiyata",
            "İyi yol tutuşu"
        ],
        cons: [
            "DSG DQ200 kavrama riski",
            "Trim ve kapı sesleri",
            "Yalıtım Golf'ten zayıf"
        ],
        buyingTips: [
            "Sunroof fitillerini ve trim seslerini test sürüşünde dinleyin",
            "DSG kavrama testini mutlaka yapın (yokuş kalkış)",
            "FR paketi tercih edin — ikinci elde çok daha hızlı satılır"
        ]
    },

    // ─── Eski new-cars dosyasından taşındı ───
    {
        id: "seat-ibiza-iv-1-4-tdi",
        slug: "seat-ibiza-iv-1-4-tdi",
        brand: "Seat",
        model: "Ibiza",
        variant: "IV 1.4 TDI",
        years: "2008-2015",
        generation: "6J",
        price: 300000,
        reliabilityScore: 75,
        totalIssues: 5,
        searchCount: 6500,
        expertNote: "Ibiza IV VW Polo platformu üzerinde kurulu sportif hatch. 1.4 TDI motor güvenilir ama 3 silindirli olduğu için titreşim karakteristik. DSG yoktu bu motorda, sadece 5MT. Sade ama eğlenceli.",
        issues: [
            { id: "ibiza4-1", title: "3 Silindirli Motor Titreşimi", description: "1.4 TDI 3 silindirli motorun rölantide ve düşük devirlerde yapısal titreşimi.", category: "motor", riskLevel: "LOW", affectedKm: "Karakteristik", repairCost: "Motor Takozu (2.000 TL)" },
            { id: "ibiza4-2", title: "EGR Valfi", description: "EGR valfinde kurum birikimi. Motor düzensizliği.", category: "motor", riskLevel: "MEDIUM", affectedKm: "60.000+ km", repairCost: "2.000 - 4.000 TL" },
            { id: "ibiza4-3", title: "Debriyaj Balata", description: "Şehir içi kullanımda debriyaj balatası aşınması.", category: "sanziman", riskLevel: "MEDIUM", affectedKm: "60.000+ km", repairCost: "4.000 - 7.000 TL" },
            { id: "ibiza4-4", title: "Ön Fren Disk Eğrilmesi", description: "Ön fren disklerinin eğrilmesi. Direksiyon titremesi.", category: "fren", riskLevel: "MEDIUM", affectedKm: "40.000+ km", repairCost: "2.000 - 4.000 TL" },
            { id: "ibiza4-5", title: "Ayna Katlanma Motoru", description: "Elektrikli katlanır dış ayna motorunun bozulması.", category: "elektronik", riskLevel: "LOW", affectedKm: "60.000+ km", repairCost: "1.500 - 3.000 TL" }
        ],
        pros: ["Polo kalitesi ucuza", "Sportif tasarım", "Ekonomik 1.4 TDI", "Eğlenceli sürüş"],
        cons: ["3 silindir titreşimi", "Seat servisi az", "İç mekan sade"],
        buyingTips: ["Motor titreşimini rölantide hissedin", "EGR temizliği sorun", "Fren disklerini kontrol edin"]
    }
,

    // ─── Eski new-cars dosyasından taşındı ───
    {
        id: "seat-tarraco-2-0-tdi",
        slug: "seat-tarraco-2-0-tdi",
        brand: "Seat",
        model: "Tarraco",
        variant: "2.0 TDI",
        years: "2019-2024",
        generation: "KN2",
        price: 2100000,
        reliabilityScore: 80,
        totalIssues: 5,
        searchCount: 5500,
        expertNote: "Tarraco aslında Tiguan Allspace'in İspanyol kardeşidir, aynı MQB platformu. 2.0 TDI motor güvenilirdir ama DSG şanzıman VW grubunun kronik sorununu taşır. 7 koltuklu versiyonu çok pratik.",
        issues: [
            { id: "tarraco-1", title: "DSG DQ381 Mekatronik Arızası", description: "Islak kavramalı 7 ileri DSG şanzımanda mekatronik kart arızası. Vites geçişlerinde kararsızlık ve titreşim. DQ200'den daha güvenilir olsa da sorunsuz değil.", category: "sanziman", riskLevel: "HIGH", affectedKm: "70.000+ km", repairCost: "25.000 - 45.000 TL" },
            { id: "tarraco-2", title: "AdBlue Sistem Arızası", description: "SCR sistemi AdBlue dozajlama modülünün arızalanması. Motor çalışmayacak uyarısı.", category: "motor", riskLevel: "HIGH", affectedKm: "50.000+ km", repairCost: "20.000 - 35.000 TL" },
            { id: "tarraco-3", title: "Panoramik Tavan Su Sızdırma", description: "Cam tavan giderlerinin tıkanması sonucu yağmurda içeri su sızdırması. VW grubu ortak problemi.", category: "govde", riskLevel: "MEDIUM", affectedKm: "Bakıma bağlı", repairCost: "Temizlik / 5.000 TL" },
            { id: "tarraco-4", title: "Ön Fren Disk Eğrilmesi", description: "2.0 TDI'ın ağırlığı nedeniyle ön fren disklerinin erken eğrilmesi ve frenleme titremesi.", category: "fren", riskLevel: "LOW", affectedKm: "40.000+ km", repairCost: "4.000 - 8.000 TL" },
            { id: "tarraco-5", title: "Multimedya ve SOS Hataları", description: "VW grubu ortak multimedya donması ve SOS acil çağrı hatası. Yazılım güncelleme ile çözülür.", category: "elektronik", riskLevel: "LOW", affectedKm: "Rastgele", repairCost: "Yazılım Güncelleme" }
        ],
        pros: ["VW grubu kalitesi düşük fiyata", "7 koltuk opsiyonu", "Güçlü 2.0 TDI (150/190hp)", "Geniş iç hacim"],
        cons: ["DSG şanzıman riski", "Marka bilinirliği düşük", "Parça temininde gecikme"],
        buyingTips: ["DSG kavrama testini yapın", "AdBlue hatası var mı?", "Cam tavan giderlerini temizletin"]
    }
,

    // ─── Eski new-cars dosyasından taşındı ───
    {
        id: "seat-leon-mk2-1-6-tdi",
        slug: "seat-leon-mk2-1-6-tdi",
        brand: "Seat",
        model: "Leon",
        variant: "Mk2 1.6 TDI",
        years: "2009-2013",
        generation: "1P",
        price: 400000,
        reliabilityScore: 75,
        totalIssues: 5,
        searchCount: 7000,
        expertNote: "Leon Mk2 Golf 5/6 platformu üzerine kurulu sportif hatch. 1.6 TDI motor aynı güvenilir VW ünitesi. DSG yerine 5MT ve 6MT seçenekleri vardı. Spor süspansiyon sert ama eğlenceli.",
        issues: [
            { id: "leon2-1", title: "EGR Valfi Tıkanması", description: "EGR valfinde kurum birikimi. Motor performans kaybı ve arıza lambası.", category: "motor", riskLevel: "MEDIUM", affectedKm: "60.000+ km", repairCost: "3.000 - 6.000 TL" },
            { id: "leon2-2", title: "Çift Kütleli Volan", description: "Rölantide metalik şıkırtı. Kavrama seti ile değiştirilmeli.", category: "sanziman", riskLevel: "HIGH", affectedKm: "80.000+ km", repairCost: "10.000 - 18.000 TL" },
            { id: "leon2-3", title: "Devirdaim Pompası", description: "Plastik gövdeli devirdaim pompasından kaçak.", category: "motor", riskLevel: "MEDIUM", affectedKm: "60.000+ km", repairCost: "4.000 - 8.000 TL" },
            { id: "leon2-4", title: "Ön Fren Disk Eğrilmesi", description: "Sport sürüş sonrası ön fren disklerinin eğrilmesi. Direksiyon titremesi.", category: "fren", riskLevel: "MEDIUM", affectedKm: "40.000+ km", repairCost: "3.000 - 6.000 TL" },
            { id: "leon2-5", title: "Kapı Kilit Modülü", description: "Kapı kilidi mikro switch arızası. Anahtar algılama sorunu.", category: "elektronik", riskLevel: "LOW", affectedKm: "Yaş kaynaklı", repairCost: "1.500 - 3.000 TL" }
        ],
        pros: ["Golf kalitesi ucuza", "Sportif sürüş", "Ekonomik dizel", "Eğlenceli tasarım"],
        cons: ["Seat servis ağı dar", "Yedek parça VW fiyatına", "Spor süspansiyon sert"],
        buyingTips: ["Volan sesini dinleyin", "EGR temizliği yaptırılmış mı sorun", "Devirdaim pompası kontrol edin"]
    }
,
    {
            "id": "seat-leon-mk3-1-4-tsi",
            "slug": "seat-leon-mk3-1-4-tsi",
            "brand": "Seat",
            "model": "Leon (Mk3)",
            "variant": "1.4 TSI FR DSG",
            "years": "2012-2020",
            "generation": "5F",
            "price": 900000,
            "expertNote": "EA211 1.4 TSI 150 HP + DSG7. VW Golf'ün sportif İspanyol kardeşi. Leon FR Türkiye'de gençlerin favorisi. Sert süspansiyon ama mükemmel yol tutuşu.",
            "reliabilityScore": 80,
            "totalIssues": 5,
            "searchCount": 14000,
            "issues": [
                    {
                            "id": "leon3-1",
                            "title": "DSG Mechatronik",
                            "description": "DSG7 mechatronik ünitesi arızası.",
                            "category": "sanziman",
                            "riskLevel": "HIGH",
                            "affectedKm": "80.000+ km",
                            "repairCost": "15.000 - 35.000 TL"
                    },
                    {
                            "id": "leon3-2",
                            "title": "Turbo Wastegate",
                            "description": "Turbo wastegate titremesi ve ses.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "60.000+ km",
                            "repairCost": "5.000 - 12.000 TL"
                    },
                    {
                            "id": "leon3-3",
                            "title": "Far Buğulanması",
                            "description": "Full LED farlarda nem birikimi.",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "Rastgele",
                            "repairCost": "Fitil / 3.000 TL"
                    },
                    {
                            "id": "leon3-4",
                            "title": "Direksiyon Sesi",
                            "description": "Direksiyon çevirirken plastik gıcırtısı.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "40.000+ km",
                            "repairCost": "1.000 - 2.000 TL"
                    },
                    {
                            "id": "leon3-5",
                            "title": "Klima Kompresörü",
                            "description": "Klima kompresörü arızası.",
                            "category": "elektronik",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "80.000+ km",
                            "repairCost": "5.000 - 10.000 TL"
                    }
            ],
            "pros": [
                    "Sportif sürüş",
                    "FR tasarım",
                    "VW güvenilirliği",
                    "Uygun fiyat"
            ],
            "cons": [
                    "DSG hassasiyeti",
                    "Sert süspansiyon",
                    "Marka bilinirliği düşük"
            ],
            "buyingTips": [
                    "DSG yağ değişim geçmişi",
                    "FR donanım tercih edin",
                    "Cam tavan güzel opsiyondur"
            ]
    }
,
    {
            "id": "seat-ibiza-6j-1-4-tdi",
            "slug": "seat-ibiza-6j-1-4-tdi",
            "brand": "Seat",
            "model": "Ibiza (6J/6P)",
            "variant": "1.4 TDI Style DSG",
            "years": "2008-2017",
            "generation": "6J/6P",
            "price": 450000,
            "expertNote": "EA288 1.4 TDI 90 HP + DSG7. Ibiza 6J Türkiye'de gençlerin favorisi. VW Polo platformu ama daha sportif. DSG şanzıman hassas. Motor çok ekonomik.",
            "reliabilityScore": 78,
            "totalIssues": 5,
            "searchCount": 9000,
            "issues": [
                    {
                            "id": "ib6j-1",
                            "title": "DSG7 Mechatronik",
                            "description": "DSG7 mechatronik ünitesi arızası.",
                            "category": "sanziman",
                            "riskLevel": "HIGH",
                            "affectedKm": "80.000+ km",
                            "repairCost": "12.000 - 28.000 TL"
                    },
                    {
                            "id": "ib6j-2",
                            "title": "EGR Karbon",
                            "description": "EGR valfinde kurum birikimi.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "80.000+ km",
                            "repairCost": "2.000 - 5.000 TL"
                    },
                    {
                            "id": "ib6j-3",
                            "title": "Cam Kaldırma",
                            "description": "Cam kaldırma mekanizması arızası.",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "60.000+ km",
                            "repairCost": "1.000 - 2.000 TL"
                    },
                    {
                            "id": "ib6j-4",
                            "title": "Arka Kampana",
                            "description": "Arka kampanalı fren aşınması.",
                            "category": "fren",
                            "riskLevel": "LOW",
                            "affectedKm": "50.000+ km",
                            "repairCost": "1.000 - 2.000 TL"
                    },
                    {
                            "id": "ib6j-5",
                            "title": "Klima",
                            "description": "Klima kompresörü arızası.",
                            "category": "elektronik",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "80.000+ km",
                            "repairCost": "4.000 - 8.000 TL"
                    }
            ],
            "pros": [
                    "Sportif tasarım",
                    "VW kalitesi",
                    "Ekonomik TDI",
                    "Genç kitle"
            ],
            "cons": [
                    "DSG hassasiyeti",
                    "Arka alan dar",
                    "Marka bilinirliği düşük"
            ],
            "buyingTips": [
                    "DSG yağ bakımı yapılmış mı",
                    "Style donanım alın",
                    "Manuel de güzel seçenek"
            ]
    }
,
    {
            "id": "seat-toledo-1-6-tdi",
            "slug": "seat-toledo-1-6-tdi-style",
            "brand": "Seat",
            "model": "Toledo (KG)",
            "variant": "1.6 TDI Style DSG",
            "years": "2013-2019",
            "generation": "KG (NH)",
            "price": 550000,
            "expertNote": "1.6 TDI 90 HP + DSG7. Toledo VW Rapid'in Seat versiyonu. Skoda Rapid ile kardeş. TR'de uygun fiyata VW grubu kalitesi. DSG7 hassas.",
            "reliabilityScore": 78,
            "totalIssues": 5,
            "searchCount": 7000,
            "issues": [
                    {
                            "id": "tol-1",
                            "title": "DSG7 Mechatronik",
                            "description": "DSG7 mechatronik ünitesi arızası.",
                            "category": "sanziman",
                            "riskLevel": "HIGH",
                            "affectedKm": "80.000+ km",
                            "repairCost": "15.000 - 30.000 TL"
                    },
                    {
                            "id": "tol-2",
                            "title": "EGR Tıkanması",
                            "description": "EGR valfinde kurum birikimi.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "80.000+ km",
                            "repairCost": "2.000 - 5.000 TL"
                    },
                    {
                            "id": "tol-3",
                            "title": "Ön Süspansiyon",
                            "description": "Ön alt kol bilyası aşınması.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "50.000+ km",
                            "repairCost": "1.500 - 3.000 TL"
                    },
                    {
                            "id": "tol-4",
                            "title": "Debriyaj Rulmanı",
                            "description": "Debriyaj baskı rulmanı sesi.",
                            "category": "sanziman",
                            "riskLevel": "LOW",
                            "affectedKm": "80.000+ km",
                            "repairCost": "2.000 - 4.000 TL"
                    },
                    {
                            "id": "tol-5",
                            "title": "Multimedya",
                            "description": "Multimedya sistemi yavaşlaması.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "Yazılım"
                    }
            ],
            "pros": [
                    "VW grubu kalitesi",
                    "Uygun fiyat",
                    "Ekonomik TDI",
                    "Geniş sedan"
            ],
            "cons": [
                    "DSG7 riski",
                    "Marka bilinirliği düşük",
                    "Tasarımı sade"
            ],
            "buyingTips": [
                    "MANUEL tercih edin DSG'den uzak durun",
                    "Style donanım alın",
                    "EGR temizliği"
            ]
    }
,
    {
            "id": "seat-cordoba-1-6-stella",
            "slug": "seat-cordoba-1-6-stella",
            "brand": "Seat",
            "model": "Cordoba",
            "variant": "1.6 Stella",
            "years": "1999-2009",
            "generation": "6K/6L",
            "price": 80000,
            "expertNote": "AKL/BGU 1.6 100 HP. Cordoba VW/Seat platformu. Polo/Ibiza ile ortak parçalar. Ekonomik sedan. Stella donanım Türkiye'ye özel seri.",
            "reliabilityScore": 74,
            "totalIssues": 5,
            "searchCount": 10000,
            "issues": [
                    {
                            "id": "scor-1",
                            "title": "Bobinler",
                            "description": "Ateşleme bobini arızası.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "80.000+ km",
                            "repairCost": "500 - 1.500 TL"
                    },
                    {
                            "id": "scor-2",
                            "title": "Cam Kaldırma",
                            "description": "Cam kaldırma mekanizması arızası.",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "400 - 1.000 TL"
                    },
                    {
                            "id": "scor-3",
                            "title": "Kaporta Pası",
                            "description": "Kapı altları ve çamurluk pası.",
                            "category": "govde",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "Boya / Kaynak"
                    },
                    {
                            "id": "scor-4",
                            "title": "Su Pompası",
                            "description": "Devridaim pompası sızıntısı.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "80.000+ km",
                            "repairCost": "500 - 1.500 TL"
                    },
                    {
                            "id": "scor-5",
                            "title": "Süspansiyon",
                            "description": "Ön süspansiyon burçları aşınması.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "50.000+ km",
                            "repairCost": "500 - 1.200 TL"
                    }
            ],
            "pros": [
                    "VW platformu",
                    "Ucuz sedan",
                    "VW/Seat ortak parça",
                    "Ekonomik"
            ],
            "cons": [
                    "Pas sorunu",
                    "Ibiza'dan daha az sportif",
                    "Yaşlanıyor",
                    "Görünüş sade"
            ],
            "buyingTips": [
                    "AKL motor güvenilir",
                    "VW yedek parça kullanılabilir",
                    "Stella donanım yeterli",
                    "Sedan pratik"
            ]
    }
];
