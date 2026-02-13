import { Car } from '@/types';

export const volvoCars: Car[] = [
    {
        id: "volvo-xc60-b4",
        slug: "volvo-xc60-b4",
        brand: "Volvo",
        model: "XC60",
        variant: "B4 Mild Hybrid",
        years: "2017-2024",
        generation: "SPA",
        price: 3500000,
        expertNote: "Volvo SPA platformu — dünyanın en güvenli SUV'u. B4 Mild Hybrid motor (197 HP + 14 HP elektrik), Aisin 8AT şanzıman. Türkiye'de Volvo Car Türkiye yetkili servis ağı var (İstanbul, Ankara, İzmir). Sunroof tahliye kanalları yılda 1 kez temizletilmeli. Google Automotive OS yeni nesillerde donma yapabilir ama OTA ile çözülür. Bowers & Wilkins ses sistemi opsiyonu varsa kaçırmayın.",
        reliabilityScore: 83,
        totalIssues: 4,
        searchCount: 9000,
        issues: [
            {
                id: "xc60-2",
                title: "Sunroof Su Alma",
                description: "Tahliye kanallarının tıkanması sonucu su alma.",
                category: "govde",
                riskLevel: "MEDIUM",
                affectedKm: "Bakımsız araçlarda",
                repairCost: "Temizlik"
            },
            {
                id: "xc60-1",
                title: "Google Automotive Donması",
                description: "Yeni nesil multimedya sisteminin çökmesi.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Reset/Yazılım"
            },
            {
                id: "xc60-b4-auto-3",
                title: "12V Akü Boşalması",
                description: "Hibrit sistemin 12V yardımcı aküyü hızla tüketmesi. Araç yatabilir.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "2.500 - 5.000 TL"
            },
            {
                id: "xc60-b4-auto-4",
                title: "Rejeneratif Fren Hissi",
                description: "Rejeneratif frenlemenin suni ve alışılmadık hissettirmesi.",
                category: "fren",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Normal (Tasarım)"
            }
        ],
        pros: [
            "Dünyanın en güvenli aracı",
            "Koltuk konforu",
            "Bower & Wilkins ses sistemi"
        ],
        cons: [
            "Yedek parça fiyatları (Çok yüksek)",
            "Yakıt tüketimi (Ağır kasa)"
        ],
        buyingTips: [
            "Sunroof etrafında su izi var mı?",
            "Yetkili servis bakımlı mı? (İyi niyet garantisi için şart)"
        ]
    },
    {
        id: "volvo-xc40-t4",
        slug: "volvo-xc40-t4",
        brand: "Volvo",
        model: "XC40",
        variant: "T4",
        years: "2018-2024",
        generation: "XC",
        price: 2800000,
        expertNote: "Volvo CMA platformu (Geely ortak). T4 motor (190 HP), 8AT Aisin şanzıman. Türkiye'de en çok satılan Volvo modeli. Sensus multimedya sistemi eski nesillerde donma yapabilir — test edin. Pilot Assist yarı otonom sürüş destekli. Skandinav minimalizmi sevenler için mükemmel. Yedek parça fiyatları BMW seviyesinde.",
        reliabilityScore: 85,
        totalIssues: 4,
        searchCount: 9000,
        issues: [
            {
                id: "xc40-2",
                title: "Pilot Assist",
                description: "Pilot Assist sisteminin beklenmedik şekilde devre dışı kalması.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Servis kalibrasyonu"
            },
            {
                id: "xc40-1",
                title: "Sensus Donması",
                description: "Multimedya sisteminin donması.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "2.000 - 5.000 TL (Yazılım)"
            },
            {
                id: "xc40-t4-auto-3",
                title: "12V Akü Boşalması",
                description: "12V yardımcı akünün uzun park halinde boşalması.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "3.000 - 5.000 TL"
            },
            {
                id: "xc40-t4-auto-4",
                title: "Şarj Kapağı Sorunu",
                description: "Şarj kapağının donması veya mekanik olarak açılmaması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kış ayları",
                repairCost: "1.500 - 3.000 TL"
            }
        ],
        pros: [
            "Güvenlik referansı",
            "Premium kalite",
            "Skandinav tasarım"
        ],
        cons: [
            "Yavaş multimedya",
            "Yedek parça fiyatları"
        ],
        buyingTips: [
            "Sensus sistemini test edin"
        ]
    },
    {
        id: "volvo-s60-t4",
        slug: "volvo-s60-t4",
        brand: "Volvo",
        model: "S60",
        variant: "T4",
        years: "2019-2024",
        generation: "Z",
        price: 3000000,
        expertNote: "SPA platformu, S90'ın kısa versiyonu. T4 motor (190 HP) Türkiye'de tek seçenek. Opsiyonel hava süspansiyonu konfor açısından harika ama arızalanınca 25.000-45.000 TL masraf çıkarır. Normal süspansiyonlu modeli daha akıllıca tercih. Volvo'nun 180 km/s elektronik hız limiti var — otobanda sorun değil ama tuhaf hissettirir.",
        reliabilityScore: 86,
        totalIssues: 4,
        searchCount: 6500,
        issues: [
            {
                id: "s60-1",
                title: "Hava Süspansiyonu",
                description: "Opsiyonel hava süspansiyonunun ses yapması.",
                category: "suspansiyon",
                riskLevel: "MEDIUM",
                affectedKm: "60.000+ km",
                repairCost: "25.000 - 45.000 TL"
            },
            {
                id: "s60-t4-auto-2",
                title: "Yağ Eksiltme",
                description: "Motor yağının servis aralarında eksilmesi. Düzenli kontrol şart.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "Segman / 5.000 - 15.000 TL"
            },
            {
                id: "s60-t4-auto-3",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
            },
            {
                id: "s60-t4-auto-4",
                title: "Süspansiyon Burcu Aşınması",
                description: "Ön/arka süspansiyon burçlarının aşınması. Kasiste vuruntu sesi.",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "60.000+ km",
                repairCost: "2.000 - 5.000 TL"
            }
        ],
        pros: [
            "Sessiz kabin",
            "Güvenlik",
            "Şık tasarım"
        ],
        cons: [
            "Hava süspansiyon riski",
            "Yedek parça"
        ],
        buyingTips: [
            "Normal mi hava süspansiyon mu kontrol edin"
        ]
    },
    {
        id: "volvo-xc40-t3",
        slug: "volvo-xc40-t3",
        brand: "Volvo",
        model: "XC40",
        variant: "T3 R-Design",
        years: "2018-2024",
        generation: "Mk1",
        price: 2500000,
        expertNote: "CMA platformu, XC40 T4'ün giriş motoru. T3 (163 HP) 3 silindirli motor — yeterli ama şehir dışında zorlanabilir. R-Design donanım sportif görünüm verir. Türkiye'de XC40 T3 en uygun fiyatlı Volvo giriş modelidir. Yakıt tüketimi 9-10 litre arası, göze alın.",
        reliabilityScore: 92,
        totalIssues: 4,
        searchCount: 21000,
        issues: [
            {
                id: "xc40-1",
                title: "Yazılım Hataları",
                description: "Ekranın donması veya güvenlik sistemlerinin gereksiz uyarısı.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Güncelleme"
            },
            {
                id: "xc40-t3-auto-2",
                title: "Yağ Eksiltme",
                description: "Motor yağının servis aralarında eksilmesi. Düzenli kontrol şart.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "Segman / 5.000 - 15.000 TL"
            },
            {
                id: "xc40-t3-auto-3",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
            },
            {
                id: "xc40-t3-auto-4",
                title: "Süspansiyon Burcu Aşınması",
                description: "Ön/arka süspansiyon burçlarının aşınması. Kasiste vuruntu sesi.",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "60.000+ km",
                repairCost: "2.000 - 5.000 TL"
            }
        ],
        pros: [
            "Güvenlik",
            "Saklama alanları",
            "Tasarım"
        ],
        cons: [
            "Yakıt tüketimi (T3 motor)",
            "Bagaj küçük"
        ],
        buyingTips: [
            "T3 motor biraz fazla yakar (9-10L), bunu bilerek alın."
        ]
    },
    {
        id: "volvo-s60-new",
        slug: "volvo-s60-b5",
        brand: "Volvo",
        model: "S60",
        variant: "B5 AWD Inscription",
        years: "2019-2024",
        generation: "Mk3",
        price: 3200000,
        expertNote: "SPA platformu, B5 motor (250 HP + 14 HP elektrik destek). AWD standart. TCAM modülü (LTE/GPS anten) arızası Türkiye'de özellikle sık çıkıyor — anahtar çalışmayabilir, 15.000-25.000 TL masraf. 48V mild hybrid batarya uyarısı (kaplumbağa modu) garantiden çözülür. Bowers & Wilkins ses sistemi dünyadaki en iyi araç ses sistemidir.",
        reliabilityScore: 93,
        totalIssues: 5,
        searchCount: 12000,
        issues: [
            {
                id: "s60-b5-1",
                title: "TCAM Modülü",
                description: "LTE/GPS anten modülü arızası ve anahtarın çalışmaması.",
                category: "elektronik",
                riskLevel: "HIGH",
                affectedKm: "Rastgele",
                repairCost: "15.000 - 25.000 TL"
            },
            {
                id: "s60-b5-2",
                title: "Google OS Donma",
                description: "Multimedya ekranının donması veya yeniden başlaması.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Yazılım",
                repairCost: "Güncelleme"
            },
            {
                id: "s60-b5-3",
                title: "48V Batarya",
                description: "Mild Hybrid sistem hatası (Kaplumbağa uyarısı).",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "Servis / Garanti"
            },
            {
                id: "s60-b5-auto-4",
                title: "12V Akü Boşalması",
                description: "Hibrit sistemin 12V yardımcı aküyü hızla tüketmesi. Araç yatabilir.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "2.500 - 5.000 TL"
            },
            {
                id: "s60-b5-auto-5",
                title: "Rejeneratif Fren Hissi",
                description: "Rejeneratif frenlemenin suni ve alışılmadık hissettirmesi.",
                category: "fren",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Normal (Tasarım)"
            }
        ],
        pros: [
            "Güvenlik",
            "Tasarım",
            "Ses sistemi (B&W)"
        ],
        cons: [
            "180 km/s hız limiti",
            "Yakıt"
        ],
        buyingTips: [
            "Bowers & Wilkins ses sistemi opsiyonu varsa kaçırmayın, dünyadaki en iyi araç ses sistemidir."
        ]
    },
    {
        id: "volvo-v40",
        slug: "volvo-v40-1-6-d2",
        brand: "Volvo",
        model: "V40",
        variant: "1.6 D2 Powershift",
        years: "2012-2015",
        generation: "Mk1",
        price: 1200000,
        expertNote: "DİKKAT: V40 1.6 D2'de Ford Powershift (DCT) şanzıman var — KESINLIKLE en riskli Volvo modelidir. Kuru çift kavrama 80.000 km sonrası kesin bozulur, 40.000-60.000 TL masraf. 2016 sonrası modellerde Geartronic 6 (tork konvertörlü) şanzıman var — onlar güvenilirdir. V40 kasa güvenlik açısından hâlâ mükemmel ama bu şanzıman yüzünden ikinci el değeri düştü.",
        reliabilityScore: 58,
        totalIssues: 4,
        searchCount: 11000,
        issues: [
            {
                id: "v40-1",
                title: "Powershift Riski",
                description: "Ford kaynaklı Powershift şanzıman saatli bombadır. Kavrama ve mekatronik bozulur.",
                category: "sanziman",
                riskLevel: "HIGH",
                affectedKm: "80.000+ km",
                repairCost: "40.000 - 60.000 TL"
            },
            {
                id: "v40-1-6-d2-auto-2",
                title: "Yağ Eksiltme",
                description: "Motor yağının servis aralarında eksilmesi. Düzenli kontrol şart.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "Segman / 5.000 - 15.000 TL"
            },
            {
                id: "v40-1-6-d2-auto-3",
                title: "DCT Kavrama Titremesi",
                description: "Çift kavramalı şanzımanda düşük hızlarda titreşim.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "40.000+ km",
                repairCost: "10.000 - 25.000 TL"
            },
            {
                id: "v40-1-6-d2-auto-4",
                title: "Süspansiyon Burcu Aşınması",
                description: "Ön/arka süspansiyon burçlarının aşınması. Kasiste vuruntu sesi.",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "60.000+ km",
                repairCost: "2.000 - 5.000 TL"
            }
        ],
        pros: [
            "Güvenlik",
            "Tasarım",
            "Kalite"
        ],
        cons: [
            "Arka görüş",
            "Şanzıman riski",
            "Sert süspansiyon"
        ],
        buyingTips: [
            "2016 sonrası 1.5 T3 motorlu ve tork konvertörlü şanzımanlı olanları tercih edin."
        ]
    },

    // ─── Eski new-cars dosyasından taşındı ───
    {
        id: "volvo-s90-d5-awd",
        slug: "volvo-s90-d5-awd",
        brand: "Volvo",
        model: "S90",
        variant: "D5 AWD",
        years: "2016-2023",
        generation: "SPA",
        price: 2800000,
        reliabilityScore: 76,
        totalIssues: 6,
        searchCount: 5000,
        expertNote: "S90 D5 muhteşem bir araçtır ama Volvo'nun Drive-E motorları 2.0L hack hacimde 235hp çıkarır ve bu motora yüklenir. PowerPulse sistemi sorunlu, AdBlue baş belası. Ama sürüş konforu rakipsiz.",
        issues: [
            { id: "s90-1", title: "PowerPulse Kompresör Arızası", description: "Elektrikli hava kompresörü ile turbo lag'ı azaltan PowerPulse sisteminin arızalanması. Kompresör sesi veya sistem devre dışı kalması. Sistem kaldırılabilir.", category: "motor", riskLevel: "HIGH", affectedKm: "60.000 - 100.000 km", repairCost: "20.000 - 35.000 TL" },
            { id: "s90-2", title: "AdBlue Dozajlama Arızası", description: "SCR katalizör ve AdBlue enjektörünün kristalleşme sonucu tıkanması. Motor çalışmayacak uyarısı.", category: "motor", riskLevel: "HIGH", affectedKm: "50.000+ km", repairCost: "20.000 - 40.000 TL" },
            { id: "s90-3", title: "8AT Geartronic Sarsıntısı", description: "Aisin 8 ileri otomatik şanzımanda düşük hızlarda sarsıntı ve vites geçiş tereddütü. Yazılım güncellemesi genellikle çözer.", category: "sanziman", riskLevel: "LOW", affectedKm: "30.000+ km", repairCost: "Yazılım Güncelleme" },
            { id: "s90-4", title: "Sensus Multimedya Donması", description: "Dikey 9 inç Sensus dokunmatik ekranın donması, kararması veya uygulamaların çökmesi. Yeniden başlatma gerektirir.", category: "elektronik", riskLevel: "MEDIUM", affectedKm: "Rastgele", repairCost: "Yazılım / 10.000 TL (Ünite)" },
            { id: "s90-5", title: "Ön Süspansiyon Burç Sesi", description: "Ön alt salıncak burçlarından gelen gıcırtı ve vuruntu sesi. Özellikle kasis geçişlerinde belirginleşir.", category: "suspansiyon", riskLevel: "LOW", affectedKm: "50.000+ km", repairCost: "5.000 - 10.000 TL" },
            { id: "s90-6", title: "Pilot Assist Kalibrasyon Hatası", description: "Yarı otonom sürüş asistanı Pilot Assist'in radar veya kamera kalibrasyonunu kaybetmesi. Sistem devre dışı kalır.", category: "elektronik", riskLevel: "LOW", affectedKm: "Rastgele", repairCost: "Servis Kalibrasyonu" }
        ],
        pros: ["İskandinav tasarım harikası", "Bowers & Wilkins ses sistemi", "Pilot Assist (Yarı otonom)", "En güvenli sedan"],
        cons: ["PowerPulse sistemi sorunlu", "Bakım maliyeti çok yüksek", "2.0L motor prestij algısı"],
        buyingTips: ["PowerPulse sistemi çalışıyor mu test edin", "AdBlue hatası var mı kontrol edin", "Servis geçmişi eksiksiz olmalı"]
    }
,

    // ─── Eski new-cars dosyasından taşındı ───
    {
        id: "volvo-s40-1-6-d",
        slug: "volvo-s40-1-6-d",
        brand: "Volvo",
        model: "S40",
        variant: "1.6 D DRIVe",
        years: "2007-2012",
        generation: "MS",
        price: 350000,
        reliabilityScore: 73,
        totalIssues: 5,
        searchCount: 6000,
        expertNote: "S40 Ford Focus platformu üzerinde kurulu kompakt Volvo. 1.6 D motor PSA kaynaklı (HDi). Güvenlik Volvo standardında ama dizel motor sorunları Ford/PSA ile ortak. DPF ve enjektör dikkat ister.",
        issues: [
            { id: "s40-1", title: "DPF Tıkanması", description: "PSA kaynaklı 1.6 dizel motorun DPF filtresi şehir içinde tıkanır.", category: "motor", riskLevel: "HIGH", affectedKm: "60.000+ km", repairCost: "5.000 - 15.000 TL" },
            { id: "s40-2", title: "Enjektör Arızası", description: "Siemens VDO enjektörlerin tıkanması.", category: "motor", riskLevel: "HIGH", affectedKm: "100.000+ km", repairCost: "6.000 - 15.000 TL" },
            { id: "s40-3", title: "Çift Kütleli Volan", description: "Volan aşınması sonucu rölantide metalik ses.", category: "sanziman", riskLevel: "HIGH", affectedKm: "80.000+ km", repairCost: "10.000 - 18.000 TL" },
            { id: "s40-4", title: "Ön Süspansiyon Alt Kol", description: "Ön alt kol burçlarının aşınması. Ford Focus ile ortak sorun.", category: "suspansiyon", riskLevel: "MEDIUM", affectedKm: "50.000+ km", repairCost: "2.000 - 4.000 TL" },
            { id: "s40-5", title: "Klima Kontrol Paneli", description: "Klima kontrol panelinin ekran arızası veya tuş tepkisizliği.", category: "elektronik", riskLevel: "LOW", affectedKm: "Yaş kaynaklı", repairCost: "3.000 - 6.000 TL" }
        ],
        pros: ["Volvo güvenliği", "Kaliteli iç mekan", "İskandinav tasarımı", "Konforlu sürüş"],
        cons: ["DPF sorunları", "Volvo bakımı pahalı", "PSA motor sorunları"],
        buyingTips: ["DPF tarattırın", "Enjektör testini yaptırın", "Volan sesini dinleyin"]
    }
,
    {
            "id": "volvo-xc60-d5-awd",
            "slug": "volvo-xc60-d5-awd",
            "brand": "Volvo",
            "model": "XC60 (Mk1)",
            "variant": "D5 AWD Inscription",
            "years": "2008-2017",
            "generation": "Y20",
            "price": 1100000,
            "expertNote": "D5 2.4 Dizel 215 HP + AWD. İlk nesil XC60 Türkiye'de premium SUV olarak çok tutuldu. Volvo güvenliği + İskandinav tasarımı. Yüksek km'de bakım pahalılaşır.",
            "reliabilityScore": 77,
            "totalIssues": 5,
            "searchCount": 9000,
            "issues": [
                    {
                            "id": "xc60d5-1",
                            "title": "DPF Tıkanması",
                            "description": "Şehir içi kullanımda DPF dolması. D5 motorda sık.",
                            "category": "motor",
                            "riskLevel": "HIGH",
                            "affectedKm": "60.000+ km",
                            "repairCost": "10.000 - 20.000 TL"
                    },
                    {
                            "id": "xc60d5-2",
                            "title": "Şanzıman Sarsıntısı",
                            "description": "Aisin 6AT şanzımanda vites geçiş sarsıntısı.",
                            "category": "sanziman",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "100.000+ km",
                            "repairCost": "5.000 - 15.000 TL"
                    },
                    {
                            "id": "xc60d5-3",
                            "title": "Turbo Yağ Kaçağı",
                            "description": "D5 motorun turbo bağlantılarından sızıntı.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "100.000+ km",
                            "repairCost": "5.000 - 12.000 TL"
                    },
                    {
                            "id": "xc60d5-4",
                            "title": "Ön Süspansiyon Salıncak",
                            "description": "Ön alt kol burçları ve bilyası aşınması.",
                            "category": "suspansiyon",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "60.000+ km",
                            "repairCost": "3.000 - 6.000 TL"
                    },
                    {
                            "id": "xc60d5-5",
                            "title": "Multimedya Ekranı",
                            "description": "Sensus ekranının tepkisizliği.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "Yazılım / 5.000 TL"
                    }
            ],
            "pros": [
                    "Volvo güvenliği",
                    "AWD performansı",
                    "D5 güç",
                    "İskandinav tasarımı"
            ],
            "cons": [
                    "DPF riski",
                    "Bakım pahalı",
                    "Yakıt tüketimi (8-10L)"
            ],
            "buyingTips": [
                    "DPF taraması yaptırın",
                    "Servis geçmişi şart",
                    "Inscription donanım tercih edin"
            ]
    }
,
    {
            "id": "volvo-v40-d3-aut",
            "slug": "volvo-v40-d3-aut",
            "brand": "Volvo",
            "model": "V40 (Mk2)",
            "variant": "D3 Inscription Otomatik",
            "years": "2012-2019",
            "generation": "525",
            "price": 900000,
            "expertNote": "D4204T 2.0 D3 150 HP + 6AT Powershift. V40 Volvo'nun premium hatchback'i. İskandinav tasarımı ve güvenliği ön planda. City Safety standart. Powershift şanzıman çift kavramalı.",
            "reliabilityScore": 77,
            "totalIssues": 5,
            "searchCount": 8000,
            "issues": [
                    {
                            "id": "v40d3-1",
                            "title": "Powershift DCT",
                            "description": "Powershift çift kavramalı şanzımanda titreme.",
                            "category": "sanziman",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "60.000+ km",
                            "repairCost": "15.000 - 30.000 TL"
                    },
                    {
                            "id": "v40d3-2",
                            "title": "DPF Tıkanması",
                            "description": "Şehir içi kullanımda DPF dolması.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Şehir içi",
                            "repairCost": "5.000 - 12.000 TL"
                    },
                    {
                            "id": "v40d3-3",
                            "title": "Enjektör",
                            "description": "Dizel enjektör tıkanması.",
                            "category": "motor",
                            "riskLevel": "HIGH",
                            "affectedKm": "120.000+ km",
                            "repairCost": "8.000 - 15.000 TL"
                    },
                    {
                            "id": "v40d3-4",
                            "title": "CEM Modülü",
                            "description": "Central Electronic Module arızası.",
                            "category": "elektronik",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "5.000 - 12.000 TL"
                    },
                    {
                            "id": "v40d3-5",
                            "title": "Ön Süspansiyon",
                            "description": "Ön süspansiyon burcu aşınması.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "60.000+ km",
                            "repairCost": "2.000 - 5.000 TL"
                    }
            ],
            "pros": [
                    "Volvo güvenliği",
                    "City Safety",
                    "İskandinav tasarımı",
                    "Premium hissiyat"
            ],
            "cons": [
                    "Powershift riski",
                    "Bakım pahalı",
                    "Parça fiyatları"
            ],
            "buyingTips": [
                    "Powershift titremesi test edin",
                    "Inscription donanım alın",
                    "Servis geçmişi şart"
            ]
    }
];
