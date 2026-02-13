import { Car } from '@/types';

export const cupraCars: Car[] = [
    {
        id: "cupra-formentor-1-5-tsi",
        slug: "cupra-formentor-1-5-tsi",
        brand: "Cupra",
        model: "Formentor",
        variant: "1.5 TSI",
        years: "2020-2024",
        generation: "KM",
        price: 2400000,
        expertNote: "Formentor, Cupra markasının çıkış modeli ve en çok satanıdır. Tasarım olarak rakiplerinden çok farklıdır. 1.5 TSI motor yeterli güçtedir ama DSG DQ200 şanzıman kangaroo etkisi yapar. 2.0 TSI VZ versiyonu performans odaklıdır. DSG adaptasyonu ve yazılım güncellemesi yapılmışsa çok daha iyi sürülür.",
        reliabilityScore: 79,
        totalIssues: 5,
        searchCount: 14000,
        issues: [
            {
                id: "formentor-1",
                title: "Kangaroo Effect (DSG DQ200)",
                description: "Düşük hızlarda (10-30 km/s) DSG şanzımanın vites geçişlerinde silkeleme ve sarsıntı hissedilmesi. Kuru kavrama sisteminin karakteristiğidir. Yazılım güncellemesi ile kısmen düzelir ancak tam çözüm sağlanamaz. Şehir içi trafikte oldukça rahatsız edicidir.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "0 km'den itibaren (Karakteristik)",
                repairCost: "Yazılım / 3.000 - 8.000 TL"
            },
            {
                id: "formentor-2",
                title: "İç Trim ve Konsol Gıcırtısı",
                description: "Kapı panelleri, merkezi konsol ve torpido bölgesindeki plastik parçalardan gelen gıcırtı ve takırtı sesleri. Bozuk yollarda belirginleşir. Ses yalıtım bandajı ve keçe ile azaltılabilir ama tam çözüm yoktur.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Bozuk yolda / 20.000+ km",
                repairCost: "2.000 - 5.000 TL"
            },
            {
                id: "formentor-3",
                title: "Su Pompası / Termostat Sızıntısı",
                description: "1.5 TSI Evo motorlarda plastik termostat/su pompası ünitesinden antifriz kaçağı. VW grubu 1.5 TSI motorların bilinen kronik sorunudur. Motor altında antifriz lekesi ve su seviyesi düşüşü ile fark edilir.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "50.000+ km",
                repairCost: "8.000 - 15.000 TL"
            },
            {
                id: "formentor-4",
                title: "MIB3 Multimedya Donması",
                description: "MIB3 infotainment sisteminin donması, siyah ekran vermesi, CarPlay/Android Auto bağlantısının kopması. Bazen araç yeniden başlatılıncaya kadar düzelmez. Yazılım güncellemesi ile kısmen çözülür.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "Yazılım / MIB Değişimi (15.000 TL)"
            },
            {
                id: "formentor-5",
                title: "SOS Acil Çağrı Modülü",
                description: "Tavandaki eCall SOS modülünün arızalanması ve gösterge panelinde sürekli 'SOS Hatası' uyarısı vermesi. Modül değişimi gerekir. VW grubu araçlarda yaygın bir sorundur.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "5.000 - 10.000 TL"
            }
        ],
        pros: [
            "Etkileyici ve farklı tasarım",
            "Sportif sürüş dinamikleri",
            "Cupra markasının fiyat avantajı (Audi Q3'e göre)",
            "Güçlü ivmelenme (1.5 TSI 150hp)"
        ],
        cons: [
            "Kangaroo effect (Şehir içi rahatsız edici)",
            "İç mekan trim kalitesi düşük",
            "Yüksek sigorta primi"
        ],
        buyingTips: [
            "Soğuk motorla şehir içi trafikte test sürüşü yapın",
            "DSG yazılımının güncel olduğundan emin olun",
            "Copper rengi ikinci elde çok daha hızlı satılır"
        ]
    },
    {
        id: "cupra-born-58",
        slug: "cupra-born-58",
        brand: "Cupra",
        model: "Born",
        variant: "58 kWh",
        years: "2022-2024",
        generation: "MEB",
        price: 1800000,
        expertNote: "Born, VW ID.3'ün sportif versiyonudur. MEB platformu üzerine kuruludur ve Türkiye'de elektrikli araç seçenekleri arasında en sportif olanıdır. 58 kWh batarya ile gerçek dünyada 300-350 km menzil sunar. 12V akü sorunu bilinen bir zayıf noktadır.",
        reliabilityScore: 80,
        totalIssues: 5,
        searchCount: 7500,
        issues: [
            {
                id: "born-1",
                title: "12V Akü Erken Bitmesi",
                description: "12V yardımcı aküsünün beklenenden çok daha erken (1-2 yıl) bitmesi. Araç kapılarını açamama, göstergelerin yanmaması ve araçların çalışmaması ile sonuçlanır. Elektrikli araçlarda 12V akü kritik bir bileşendir.",
                category: "elektronik",
                riskLevel: "HIGH",
                affectedKm: "20.000+ km / 1-2 yıl",
                repairCost: "5.000 - 10.000 TL"
            },
            {
                id: "born-2",
                title: "Yazılım Hataları ve Güncelleme Sorunları",
                description: "OTA (Over-The-Air) güncellemelerinin başarısız olması, gösterge panelinde hata mesajları ve sürüş asistanlarının beklenmedik şekilde devre dışı kalması. MEB platformunun olgunlaşma sürecinin bir parçasıdır.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "Yazılım / Servis ziyareti"
            },
            {
                id: "born-3",
                title: "Şarj Kapağı Mekanizması",
                description: "Elektrikli şarj kapağının açılmaması veya kapanmaması. Kış aylarında buz tutması ve mekanizmanın donması daha sık görülür. Motor ve kilit mekanizması değişimi gerekebilir.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kış ayları / Rastgele",
                repairCost: "3.000 - 8.000 TL"
            },
            {
                id: "born-4",
                title: "Isı Pompası Arızası",
                description: "Kış aylarında kabin ısıtması için kullanılan ısı pompasının verimli çalışmaması. Menzil ciddi şekilde düşer (30-40% kayıp). Kompresör veya soğutucu devresi değişimi gerekebilir.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Kış ayları",
                repairCost: "15.000 - 30.000 TL"
            },
            {
                id: "born-5",
                title: "Arka Kamera ve Park Sensörü",
                description: "Arka görüş kamerasının donması veya siyah ekran vermesi ve park sensörlerinin yanlış uyarı yapması. Yazılım güncellemesi veya kamera modülü değişimi gerekir.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "5.000 - 12.000 TL"
            }
        ],
        pros: [
            "Sportif elektrikli tasarım",
            "Hızlı DC şarj (120 kW)",
            "Düşük işletme maliyeti",
            "VW grubu güvenilirliği"
        ],
        cons: [
            "12V akü hassasiyeti",
            "Kış aylarında menzil kaybı",
            "Şarj altyapısı yetersizliği (Türkiye)",
            "Yüksek fiyat"
        ],
        buyingTips: [
            "12V akü değişmiş mi sorun",
            "Yazılım versiyonunun güncel olduğundan emin olun",
            "Kış menzilini gerçekçi değerlendirin (250-300 km)"
        ]
    },
    {
        id: "cupra-leon-2-0-vz",
        slug: "cupra-leon-2-0-vz",
        brand: "Cupra",
        model: "Leon",
        variant: "2.0 TSI VZ 300hp",
        years: "2020-2024",
        generation: "Mk1",
        price: 3200000,
        expertNote: "Cupra Leon VZ, Golf R ve Civic Type-R ile yarışan bir hot-hatch efsanesidir. 300hp 2.0 TSI EA888 Evo motor son derece güvenilirdir. DSG DQ381 ıslak kavrama şanzıman da sağlamdır. Asıl sorunlar elektronik ve yazılım kaynaklıdır. Track modunda gerçek bir yarış aracı gibi hissettirir.",
        reliabilityScore: 85,
        totalIssues: 5,
        searchCount: 12000,
        issues: [
            {
                id: "cupra-vz-1",
                title: "MIB3 Infotainment Donması",
                description: "MIB3 infotainment sisteminin donması, siyah ekran vermesi ve yeniden başlaması. CarPlay/Android Auto bağlantısı da etkilenir. Yazılım güncellemesi kısmen çözer ancak tekrarlayabilir.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele (Yazılım)",
                repairCost: "Yazılım / MIB Değişimi (15.000 TL)"
            },
            {
                id: "cupra-vz-2",
                title: "Dokunmatik Klima/Tavan Kumandası",
                description: "Kapasitif dokunmatik klima paneli ve tavan kumandalarının geç tepki vermesi, yanlış algılama veya hiç çalışmaması. Tasarım kaynaklı olduğu için kesin çözümü yoktur.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Karakteristik (Tasarım)",
                repairCost: "Çözümsüz / Modül Değişimi"
            },
            {
                id: "cupra-vz-3",
                title: "DSG Kalkış Gecikmesi",
                description: "Duruştan kalkışta gaz pedalına geç tepki verme (turbo lag + DSG gecikmesi). Sport/Cupra modunda daha az hissedilir. Pedal Box aksesuar veya yazılım kalibrasyonu ile iyileştirilebilir.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "Karakteristik (Yazılım)",
                repairCost: "Pedal Box (2.000 TL) / Yazılım"
            },
            {
                id: "cupra-vz-4",
                title: "Ön Fren Disk Deformasyonu",
                description: "340mm ön fren disklerinin agresif sürüşte ısınarak deformasyon yapması. Fren sırasında direksiyon titremesi hissedilir. Track kullanımında yarış fren diskleri (slotted/drilled) önerilir.",
                category: "fren",
                riskLevel: "MEDIUM",
                affectedKm: "30.000+ km (Agresif sürüş)",
                repairCost: "8.000 - 15.000 TL"
            },
            {
                id: "cupra-vz-5",
                title: "SOS Acil Çağrı Hatası",
                description: "eCall SOS modülünün arızalanması ve gösterge panelinde 'SOS Hatası' uyarısı. VW grubu ortak sorunudur. Modül değişimi gerekir.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "5.000 - 10.000 TL"
            }
        ],
        pros: [
            "Saf performans (300hp / 400Nm)",
            "EA888 Evo motor güvenilirliği",
            "Golf R muadili ama daha ucuz",
            "Adaptif süspansiyon (DCC)"
        ],
        cons: [
            "Yüksek MTV ve sigorta",
            "Yakıt tüketimi (Agresif sürüşte 12-14L)",
            "Sert süspansiyon (Comfort modunda bile)"
        ],
        buyingTips: [
            "Gerçek bir hot-hatch arıyorsanız, Type-R ile yarışan tek model budur",
            "Track geçmişi olan araçlardan uzak durun (Fren ve süspansiyon kontrolü)",
            "Stage 1 yazılımlı araçlar garanti kapsamı dışında kalır"
        ]
    },
];
