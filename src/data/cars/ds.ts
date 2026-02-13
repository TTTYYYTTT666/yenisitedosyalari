import { Car } from '@/types';

export const dsCars: Car[] = [
    // ═══════════════════════════════════════════════════════
    // DS 3 CROSSBACK
    // ═══════════════════════════════════════════════════════
    {
        id: "ds-3-crossback",
        slug: "ds-3-crossback-puretech",
        brand: "DS",
        model: "DS3 Crossback",
        variant: "1.2 PureTech 130 HP (EAT8)",
        years: "2019-2024",
        generation: "D34",
        price: 1300000,
        expertNote: "EB2ADTS 1.2 PureTech 130 HP + EAT8. DS markasının giriş seviye crossover'ı. Küçük ama inanılmaz şık — iç mekan gerçekten premium hissettiriyor. Elmas motifli iç mekan detayları dikkat çekici. AMA PureTech wet belt riski aynen geçerli. Türkiye'de az satıldı, ikinci el zor gider.",
        reliabilityScore: 74,
        totalIssues: 5,
        searchCount: 3000,
        issues: [
            {
                id: "ds3cb-1",
                title: "PureTech Wet Belt",
                description: "1.2 PureTech Turbo motorun yağ içinde çalışan triger kayışı riski. PSA grubunun en kritik sorunu.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "40.000+ km / 4 yıl",
                repairCost: "8.000 TL (kayış) / Motor hasarı 40.000-70.000 TL"
            },
            {
                id: "ds3cb-2",
                title: "Multimedya Donması",
                description: "Dokunmatik ekranın donması ve CarPlay bağlantısının kopması.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Yazılım Güncellemesi"
            },
            {
                id: "ds3cb-3",
                title: "Flush Door Handle (Gizli Kapı Kolu)",
                description: "Elektrikli gizli kapı kollarının açılmaması veya donması. Kış aylarında sorun.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Kış / Nem",
                repairCost: "5.000 - 15.000 TL"
            },
            {
                id: "3-crossback-puretech-auto-4",
                title: "12V Akü Boşalması",
                description: "12V yardımcı akünün uzun park halinde boşalması.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "3.000 - 5.000 TL"
            },
            {
                id: "3-crossback-puretech-auto-5",
                title: "Şarj Kapağı Sorunu",
                description: "Şarj kapağının donması veya mekanik olarak açılmaması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kış ayları",
                repairCost: "1.500 - 3.000 TL"
            }
        ],
        pros: [
            "Sanat eseri iç mekan tasarımı",
            "Elmas motifli detaylar",
            "Gizli kapı kolları (şık)",
            "Kompakt boyut"
        ],
        cons: [
            "PureTech motor riski",
            "Türkiye'de servis ağı çok az",
            "İkinci el çok zor gider",
            "Kapı kolları sorunlu olabilir"
        ],
        buyingTips: [
            "Triger kayışı kontrol ettirin mutlaka",
            "Gizli kapı kollarını soğuk havada test edin",
            "İkinci el değer kaybını göze alarak alın",
            "Yetkili servis yakınlığını kontrol edin"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // DS 4
    // ═══════════════════════════════════════════════════════
    {
        id: "ds-4-puretech",
        slug: "ds-4-puretech",
        brand: "DS",
        model: "DS4",
        variant: "1.6 PureTech 180 HP Opera (EAT8)",
        years: "2021-2024",
        generation: "Mk2",
        price: 2300000,
        expertNote: "EP6FADTXD 1.6 PureTech 180 HP + EAT8. DS markasının C segmenti silahı. İç mekan kalitesi ve tasarımı gerçekten üst düzey — Opera donanımı Nappa deri ve Focal ses sistemiyle geliyor. Yolda dikkat çekiyor çünkü kimse tanımıyor. PureTech 1.6 motor wet belt değil ama yağ tüketimi olabilir.",
        reliabilityScore: 82,
        totalIssues: 5,
        searchCount: 10000,
        issues: [
            {
                id: "ds4-1",
                title: "Yazılım / Ekran Hataları",
                description: "DS Iris sistemi gösterge paneli ve multimedya ekranının kararması veya donması.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Yazılım Güncellemesi"
            },
            {
                id: "ds4-2",
                title: "Krom Detayların Matlaşması",
                description: "Dış krom süsleme parçalarının erken matlaşması ve renk değişimi.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Dış etkenler (güneş, yıkama)",
                repairCost: "Kozmetik onarım"
            },
            {
                id: "ds4-3",
                title: "Süspansiyon Sertliği",
                description: "Düşük hızlarda ve bozuk yollarda süspansiyonun sert ve gürültülü olması.",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Çözümsüz (Tasarım)"
            },
            {
                id: "4-puretech-auto-4",
                title: "Yağ Eksiltme",
                description: "Motor yağının servis aralarında eksilmesi. Düzenli kontrol şart.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "Segman / 5.000 - 15.000 TL"
            },
            {
                id: "4-puretech-auto-5",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
            }
        ],
        pros: [
            "Sanat eseri tasarım (iç ve dış)",
            "Opera donanımı (Nappa deri + Focal)",
            "Konfor ve sessizlik",
            "Yolda dikkat çekici"
        ],
        cons: [
            "İkinci el çok yavaş gider",
            "Servis ağı çok az",
            "Fiyat/marka algısı dengesiz",
            "Parça fiyatları yüksek"
        ],
        buyingTips: [
            "Sıradan olmak istemiyorsanız yoldaki en şık araç budur",
            "İkinci el değer kaybını göze alın",
            "Opera donanımını tercih edin — fark çok büyük"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // DS 7 CROSSBACK
    // ═══════════════════════════════════════════════════════
    {
        id: "ds-7-crossback-puretech",
        slug: "ds-7-crossback-puretech",
        brand: "DS",
        model: "DS7 Crossback",
        variant: "1.6 PureTech 180 HP Rivoli (EAT8)",
        years: "2018-2024",
        generation: "X74",
        price: 2000000,
        expertNote: "EP6FADTXD 1.6 PureTech 180 HP + EAT8. DS'in amiral gemisi SUV. Fransa Cumhurbaşkanlığı makam aracı olan model. İç mekan gerçekten lüks — BRM saat, elmas kaplama, Nappa deri. PureTech 1.6 motorda wet belt yok ama zincir ve yağ tüketimi sorunları var.",
        reliabilityScore: 75,
        totalIssues: 5,
        searchCount: 6000,
        issues: [
            {
                id: "ds7-1",
                title: "PureTech 1.6 Zincir Sesi",
                description: "1.6 PureTech motorun eksantrik zincirinin uzaması ve soğuk çalıştırmada ses.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "80.000+ km",
                repairCost: "20.000 - 35.000 TL"
            },
            {
                id: "ds7-2",
                title: "EAT8 Düşük Hız Sarsıntısı",
                description: "Dur-kalk trafikte ve park manevralarında hafif şanzıman sarsıntısı.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Yazılım Güncellemesi"
            },
            {
                id: "ds7-3",
                title: "DS Active Scan Süspansiyon",
                description: "Kameralı aktif süspansiyon sisteminin kalibrasyon hataları ve arızaları.",
                category: "suspansiyon",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "10.000 - 20.000 TL"
            },
            {
                id: "7-crossback-puretech-auto-4",
                title: "Yağ Eksiltme",
                description: "Motor yağının servis aralarında eksilmesi. Düzenli kontrol şart.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "Segman / 5.000 - 15.000 TL"
            },
            {
                id: "7-crossback-puretech-auto-5",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
            }
        ],
        pros: [
            "Fransa Cumhurbaşkanlığı makam aracı",
            "BRM saat ve elmas detaylar",
            "Premium iç mekan kalitesi",
            "DS Active Scan süspansiyon (varsa)"
        ],
        cons: [
            "PureTech motor zincir riski",
            "Servis ağı Türkiye'de çok sınırlı",
            "İkinci el değer kaybı yüksek",
            "Marka bilinirliği düşük"
        ],
        buyingTips: [
            "Triger zinciri kontrol ettirin",
            "Rivoli veya Grand Chic donanımı tercih edin",
            "DS Active Scan süspansiyonlu varsa bonus",
            "Yetkili servis yakınlığını kontrol edin"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // DS 7 E-TENSE (PHEV)
    // ═══════════════════════════════════════════════════════
    {
        id: "ds-7-etense",
        slug: "ds-7-crossback-e-tense-phev",
        brand: "DS",
        model: "DS7",
        variant: "E-Tense 4x4 300 HP PHEV",
        years: "2019-2024",
        generation: "X74 PHEV",
        price: 2500000,
        expertNote: "1.6 PureTech + 2 elektrik motor toplam 300 HP + 4x4. DS7'nin plug-in hibrit versiyonu. ÖTV avantajıyla Türkiye'de ilgi gördü. 58 km elektrik menzil. 300 HP ile çok hızlı ama şarjsız kullanılırsa çok yakar. İkinci el çok belirsiz.",
        reliabilityScore: 73,
        totalIssues: 5,
        searchCount: 4000,
        issues: [
            {
                id: "ds7e-1",
                title: "Şarj Sistemi Arızası",
                description: "AC şarj ünitesinin arızalanması ve aracın şarj olmaması.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "10.000 - 20.000 TL"
            },
            {
                id: "ds7e-2",
                title: "Hibrit Sistem Geçiş Sarsıntısı",
                description: "Benzin motor ve elektrik motor arasındaki geçişlerde hissedilen sarsıntı ve gecikme.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Yazılım Kalibrasyon"
            },
            {
                id: "ds7e-3",
                title: "12V Akü Zayıflığı",
                description: "Hibrit sistemin 12V aksesuar aküsünü hızlı bitirmesi. Araç açılmama sorunu.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "18 ay+",
                repairCost: "3.000 - 6.000 TL"
            },
            {
                id: "7-crossback-e-tense-phev-auto-4",
                title: "12V Akü Boşalması",
                description: "Hibrit sistemin 12V yardımcı aküyü hızla tüketmesi. Araç yatabilir.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "2.500 - 5.000 TL"
            },
            {
                id: "7-crossback-e-tense-phev-auto-5",
                title: "Rejeneratif Fren Hissi",
                description: "Rejeneratif frenlemenin suni ve alışılmadık hissettirmesi.",
                category: "fren",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Normal (Tasarım)"
            }
        ],
        pros: [
            "300 HP toplam güç + 4x4",
            "58 km elektrik menzili",
            "ÖTV avantajı (PHEV)",
            "Lüks iç mekan"
        ],
        cons: [
            "Şarjsız çok yakar (10-12L)",
            "PHEV servis deneyimi çok az",
            "İkinci el değeri çok belirsiz",
            "Yedek parça bekleme süresi uzun"
        ],
        buyingTips: [
            "Evde/işte şarj imkânı yoksa almayın",
            "Batarya sağlık raporunu isteyin",
            "Hibrit sistem geçişlerini test edin",
            "PHEV garanti kapsamını detaylıca okuyun"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // DS 5 (ESKİ NESİL)
    // ═══════════════════════════════════════════════════════
    {
        id: "ds-5-hybrid",
        slug: "ds-5-1-6-thp",
        brand: "DS",
        model: "DS5",
        variant: "1.6 THP 165 HP (EAT6)",
        years: "2015-2018",
        generation: "Mk1",
        price: 700000,
        expertNote: "EP6CDT 1.6 THP 165 HP + EAT6. DS markası henüz Citroen'den ayrılmadan önceki model. Uzay mekiği kokpit tasarımı efsanevi. Aviator koltuğu ve uçak kokpiti görünümü. AMA elektronik sorunlar ve yedek parça bulmak çok zor. Koleksiyoner aracı gibi.",
        reliabilityScore: 65,
        totalIssues: 4,
        searchCount: 2000,
        issues: [
            {
                id: "ds5-1",
                title: "THP Motor Zincir Sesi",
                description: "1.6 THP motorun eksantrik zinciri uzaması. Eski EP6 motorun bilinen sorunu.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "80.000+ km",
                repairCost: "15.000 - 30.000 TL"
            },
            {
                id: "ds5-2",
                title: "Elektronik Arızalar",
                description: "Gösterge paneli, multimedya ve sensör arızaları. Elektrik sistemi çok karmaşık.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "Değişken (Arızaya bağlı)"
            },
            {
                id: "ds5-3",
                title: "Yedek Parça Bulma Zorluğu",
                description: "Üretimi durmuş model — yedek parça bulmak çok zor ve pahalı.",
                category: "govde",
                riskLevel: "HIGH",
                affectedKm: "Kaza/arıza durumunda",
                repairCost: "Bekleme + Yüksek fiyat"
            },
            {
                id: "ds5-4",
                title: "Yağ Tüketimi",
                description: "THP motorlarda servis arasında yağ seviye düşüşü.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "60.000+ km",
                repairCost: "Yağ takibi"
            }
        ],
        pros: [
            "Efsanevi kokpit tasarımı",
            "Aviator koltuklar",
            "Dikkat çekici tasarım",
            "Uygun ikinci el fiyatı"
        ],
        cons: [
            "Yedek parça bulmak neredeyse imkânsız",
            "Elektronik sorunlar",
            "Servis ağı yok denecek kadar az",
            "İkinci el değeri çok düşük"
        ],
        buyingTips: [
            "Sadece tasarım aşığıysanız ve mekanik bilginiz varsa düşünün",
            "Yedek parça sorunu göze alınamıyorsa uzak durun",
            "Motor zinciri kontrol ettirin",
            "Elektronik sistemleri detaylı test edin"
        ]
    }
];
