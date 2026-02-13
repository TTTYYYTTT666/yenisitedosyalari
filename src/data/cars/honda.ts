import { Car } from '@/types';

export const hondaCars: Car[] = [
    // ═══════════════════════════════════════════════════════
    // CIVIC FB7 — 1.6 i-VTEC (EFSANE KASA)
    // ═══════════════════════════════════════════════════════
    {
        id: "honda-civic-fb7-eco",
        slug: "honda-civic-fb7-eco",
        brand: "Honda",
        model: "Civic",
        variant: "FB7 1.6 i-VTEC 125 HP Eco Elegance (CVT)",
        years: "2012-2016",
        generation: "FB7",
        price: 900000,
        expertNote: "R18Z 1.6 i-VTEC 125 HP + 5 ileri tam otomatik. Türk halkının en sevdiği Honda kasası — 'Japon Mercedes'i' lakabı takılmıştır. Motor ölümsüzdür, şanzıman tork konvertörlüdür, bozulmaz. LPG ile uyumu kusursuz (fabrikasyon Türk montajı). Boya kalitesi zayıf nokta — ince vernik soyulması kronik.",
        reliabilityScore: 92,
        totalIssues: 3,
        searchCount: 55000,
        issues: [
            {
                id: "fb7-1",
                title: "Direksiyon Kutusu Tıkırtısı",
                description: "Direksiyon kutusundan gelen tıkırtı sesi — Honda klasiği. Düz yolda hissedilmez, bozuk yolda ortaya çıkar.",
                category: "suspansiyon",
                riskLevel: "MEDIUM",
                affectedKm: "60.000+ km",
                repairCost: "10.000 - 15.000 TL"
            },
            {
                id: "fb7-2",
                title: "Boya/Vernik Soyulması",
                description: "Çok ince boya tabakası — özellikle beyaz renklerde tavan ve kaputta vernik atması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "5+ yıl",
                repairCost: "Boyama / Seramik kaplama"
            },
            {
                id: "fb7-3",
                title: "Fren Diski Yamulması",
                description: "Fren disklerinin çabuk yamulması ve frende titreme.",
                category: "fren",
                riskLevel: "LOW",
                affectedKm: "40.000+ km",
                repairCost: "3.000 - 5.000 TL"
            }
        ],
        pros: [
            "LPG tam uyumu (fabrikasyon Türk montajı)",
            "Ölümsüz motor + şanzıman",
            "İkinci el piyasası çok hızlı",
            "Geniş iç hacim"
        ],
        cons: [
            "Boya kalitesi çok ince",
            "Yalıtım zayıf (yol sesi)",
            "CVT şanzıman performanssız",
            "Bagaj kolu yer kaplar"
        ],
        buyingTips: [
            "Direksiyon kutusunda boşluk/ses var mı dinleyin",
            "LPG sistemi düzgün bakılmış mı sorun",
            "Boya kalınlığını ölçtürün (ince olacak ama orijinalliği anlarsınız)"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // CIVIC FC5 — 1.6 i-VTEC
    // ═══════════════════════════════════════════════════════
    {
        id: "honda-civic-fc5-16",
        slug: "honda-civic-fc5-1-6-vtec",
        brand: "Honda",
        model: "Civic",
        variant: "FC5 1.6 i-VTEC 125 HP Eco Executive (CVT)",
        years: "2016-2021",
        generation: "FC5",
        price: 1100000,
        expertNote: "R16B 1.6 i-VTEC 125 HP + CVT. FB7'nin evrimleşmiş hali — aerodinamik tasarım, daha modern iç mekan. Motor aynı efsanevi VTEC, sorun çıkarmaz. C sütunu göçüğü MEŞHURDUR — 2016-2018 arası modellerde kronik, 2018 sonrası fabrikada çözüldü. Kaporta sacı ince — elinizle bastırırsanız göçer. LPG'ye çok uyumlu.",
        reliabilityScore: 87,
        totalIssues: 4,
        searchCount: 45000,
        issues: [
            {
                id: "fc5-16-1",
                title: "C Sütunu Göçüğü",
                description: "Arka C sütununda kendiliğinden oluşan dalgalanma. 2016-2018 modellerde kronik, 2018+ düzeldi.",
                category: "govde",
                riskLevel: "MEDIUM",
                affectedKm: "Kronik (2016-2018)",
                repairCost: "5.000 - 10.000 TL (Kaporta düzeltme)"
            },
            {
                id: "fc5-16-2",
                title: "Direksiyon Kutusu Sesi",
                description: "Bozuk yollarda direksiyon kutusundan gelen tıkırtı sesi.",
                category: "suspansiyon",
                riskLevel: "MEDIUM",
                affectedKm: "40.000+ km",
                repairCost: "20.000 - 35.000 TL"
            },
            {
                id: "fc5-16-3",
                title: "Klima Kondenser Delinmesi",
                description: "Klima radyatörünün taş gelmesiyle kolayca delinmesi ve gaz kaçırması.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "5.000 - 10.000 TL"
            },
            {
                id: "fc5-16-4",
                title: "Denso Yakıt Pompası (Recall)",
                description: "Denso marka yakıt pompası pervanesinin şişmesi ve aracın stop etmesi. Geri çağırma var.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "Rastgele",
                repairCost: "Ücretsiz (Servis geri çağırma)"
            }
        ],
        pros: [
            "LPG tam uyumu",
            "İkinci el piyasası çok hızlı",
            "Geniş iç hacim",
            "Aerodinamik tasarım"
        ],
        cons: [
            "Yalıtım zayıf (yol sesi)",
            "Kaporta sacı ince",
            "CVT şanzıman hissizliği",
            "C sütunu göçüğü (2016-2018)"
        ],
        buyingTips: [
            "C sütununu elinizle kontrol edin (göçük var mı)",
            "Yakıt pompası recall yapılmış mı sorun",
            "2018+ model tercih edin (göçük düzeldi)",
            "Klima soğutuyor mu kontrol edin"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // CIVIC FK7 — 1.0 Turbo (AVRUPA)
    // ═══════════════════════════════════════════════════════
    {
        id: "honda-civic-fk7-10t",
        slug: "honda-civic-fk7-1-0-turbo",
        brand: "Honda",
        model: "Civic",
        variant: "FK7 1.0 VTEC Turbo 129 HP Executive (CVT)",
        years: "2017-2021",
        generation: "FK7",
        price: 1200000,
        expertNote: "P10A2 1.0 VTEC Turbo 129 HP 3 silindirli + CVT. İngiltere üretimi — Türk montajı FC5'ten farklı araç. Turbo motor daha performanslı ama 3 silindir titreşimi var. LPG'ye uygun AMA fabrikasyon değil (sonradan taktırılmalı). Yağ inceltme (oil dilution) kış aylarında sorun.",
        reliabilityScore: 83,
        totalIssues: 3,
        searchCount: 15000,
        issues: [
            {
                id: "fk7-1",
                title: "Yağ İnceltme (Oil Dilution)",
                description: "Soğuk ve kısa mesafe kullanımda benzinin kartere inerek yağı inceltmesi. Kışın yağ çubuğunda benzin kokusu.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Kış ayları / Kısa mesafe",
                repairCost: "Sık yağ değişimi"
            },
            {
                id: "fk7-2",
                title: "CVT Bakımsızlık Riski",
                description: "CVT şanzıman yağı ve filtre zamanında değişmezse silkeleme ve kayma.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "40.000 km (bakım aralığı)",
                repairCost: "Yağ değişimi 3.000 TL / Revizyon 30.000+ TL"
            },
            {
                id: "fk7-3",
                title: "3 Silindir Titreşim",
                description: "3 silindirli motor yapısı gereği rölantide hissedilen titreşim.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Çözümsüz (3 silindir doğası)"
            }
        ],
        pros: [
            "Turbo ile güçlü performans",
            "İngiltere üretim kalitesi",
            "Sportif tasarım",
            "CVT yumuşak geçişler"
        ],
        cons: [
            "3 silindir titreşim (rölantide)",
            "Yağ inceltme riski (kış)",
            "LPG fabrikasyon değil",
            "Yalıtım hâlâ zayıf"
        ],
        buyingTips: [
            "Yağ çubuğunu koklayın — benzin kokusu var mı?",
            "CVT şanzıman yağı ne zaman değişmiş sorun",
            "Kısa mesafe şehir içi kullanıyorsanız yağı sık değiştirin"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // CIVIC FE1 — 1.5 Turbo (YENİ NESİL)
    // ═══════════════════════════════════════════════════════
    {
        id: "honda-civic-fe1-15t",
        slug: "honda-civic-fe1-1-5-turbo",
        brand: "Honda",
        model: "Civic",
        variant: "FE1 1.5 VTEC Turbo 182 HP (CVT)",
        years: "2022-2025",
        generation: "FE1 (11. Nesil)",
        price: 1800000,
        expertNote: "L15CA 1.5 VTEC Turbo 182 HP + CVT. Civic'in en premium hali — minimalist iç mekan, mükemmel yol tutuş. Motor güçlü ama oil dilution (yağ inceltme) riski devam ediyor. Yapışkan direksiyon (sticky steering) recall'ı var. Boya kalitesi hâlâ Honda'nın zayıf noktası. LPG'ye uygun DEĞİL (direkt enjeksiyon turbo).",
        reliabilityScore: 86,
        totalIssues: 3,
        searchCount: 20000,
        issues: [
            {
                id: "fe1-1",
                title: "Yapışkan Direksiyon (Sticky Steering)",
                description: "Direksiyonun düz yolda takılı kalması ve 'dişli atlama' hissi. KRİTİK güvenlik sorunu — recall var.",
                category: "suspansiyon",
                riskLevel: "HIGH",
                affectedKm: "10.000+ km",
                repairCost: "Garantiden değişim (Recall)"
            },
            {
                id: "fe1-2",
                title: "Yağ İnceltme (Oil Dilution)",
                description: "Soğuk ve kısa mesafe kullanımda benzinin kartere inerek yağı inceltmesi.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Kış ayları",
                repairCost: "Sık yağ değişimi"
            },
            {
                id: "fe1-3",
                title: "Boya Kalitesi / Soyulma",
                description: "Kapı kolları, ayna kapakları ve tamponlarda boya atması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "2-3 yıl",
                repairCost: "Kozmetik tamir"
            }
        ],
        pros: [
            "Mükemmel yol tutuş",
            "Güçlü motor (182 HP / 240 Nm)",
            "Minimalist premium iç mekan",
            "Honda Sensing güvenlik paketi"
        ],
        cons: [
            "Yalıtım hâlâ sınıfının gerisinde",
            "Yapışkan direksiyon riski",
            "Yağ inceltme (kışın)",
            "LPG uyumsuz (direkt enjeksiyon turbo)"
        ],
        buyingTips: [
            "Direksiyon recall'ı yapılmış mı mutlaka sorun",
            "Yağ çubuğunu koklayın (benzin kokusu)",
            "Boya kalınlığını ölçtürün"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // CITY — 1.5 i-VTEC
    // ═══════════════════════════════════════════════════════
    {
        id: "honda-city-15",
        slug: "honda-city-1-5-i-vtec",
        brand: "Honda",
        model: "City",
        variant: "1.5 i-VTEC 121 HP Executive (CVT)",
        years: "2021-2025",
        generation: "GN2",
        price: 1150000,
        expertNote: "L15BE 1.5 i-VTEC 121 HP + CVT. Honda'nın B-sedan segmentindeki silahı — Civic'ten küçük ama iç hacmi çok geniş. Motor atmosferik, güvenilir ve sorunsuz. Yalıtım ÇOK ZAYIF — otobanda yol sesi rahatsız edici. Malzeme kalitesi düşük (sert plastikler). Arka diskler kampana.",
        reliabilityScore: 87,
        totalIssues: 3,
        searchCount: 12000,
        issues: [
            {
                id: "city-1",
                title: "Yalıtım Zayıflığı",
                description: "Yol, rüzgar ve lastik sesini içeriye çok alması. Sınıfının en zayıfı.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Ek izolasyon (3.000-5.000 TL)"
            },
            {
                id: "city-2",
                title: "Boya Soyulması",
                description: "Beyaz renklerde tavan ve kaputta boya atması.",
                category: "govde",
                riskLevel: "MEDIUM",
                affectedKm: "3-4 yıl",
                repairCost: "Kozmetik tamir (boyama)"
            },
            {
                id: "city-3",
                title: "CVT Kayış Sesi",
                description: "Hızlanmalarda CVT şanzımandan gelen karakteristik metalik kayış sesi.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Yok (normal davranış)"
            }
        ],
        pros: [
            "Geniş iç hacim (Civic'e yakın)",
            "Sorunsuz atmosferik motor",
            "Ekonomik yakıt tüketimi",
            "LPG'ye uyumlu"
        ],
        cons: [
            "Yalıtım çok zayıf",
            "Malzeme kalitesi düşük (sert plastik)",
            "Arka diskler kampana",
            "Klima kapasitesi yetersiz (sıcakta)"
        ],
        buyingTips: [
            "Otoban sürüşü yapıp yalıtımı test edin",
            "Şehir içi kullanım için idealdir",
            "Executive donanımı tercih edin"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // CR-V — 2.0 i-MMD Hybrid
    // ═══════════════════════════════════════════════════════
    {
        id: "honda-crv-hybrid",
        slug: "honda-crv-hybrid",
        brand: "Honda",
        model: "CR-V",
        variant: "2.0 i-MMD e:HEV 184 HP (eCVT)",
        years: "2019-2023",
        generation: "Mk5 Facelift",
        price: 1800000,
        expertNote: "LFB 2.0 i-VTEC + i-MMD Hybrid 184 HP toplam + eCVT. Honda'nın amiral gemisi SUV. Devasa iç hacim ve konfor. Hibrit system (i-MMD) Toyota'nınkine rakip — çok sorunsuz. Yapışkan direksiyon recall'ı burda da var. 12V akü birkaç gün yatınca biter — AGM akü takın.",
        reliabilityScore: 89,
        totalIssues: 3,
        searchCount: 10000,
        issues: [
            {
                id: "crv-h-1",
                title: "Yapışkan Direksiyon (Recall)",
                description: "Direksiyonun düz yolda takılı kalması. Kritik güvenlik — recall var.",
                category: "suspansiyon",
                riskLevel: "HIGH",
                affectedKm: "10.000+ km",
                repairCost: "Garantiden değişim (Recall)"
            },
            {
                id: "crv-h-2",
                title: "12V Akü Bitmesi",
                description: "Birkaç gün park halinde kalınca 12V akünün boşalması.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Kısa mesafe / Park",
                repairCost: "AGM akü değişimi (3.000-5.000 TL)"
            },
            {
                id: "crv-h-3",
                title: "CMBS Hayalet Frenleme",
                description: "Çarpışma önleme sisteminin gereksiz yere fren yapması.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "Yazılım / Radar kalibrasyonu"
            }
        ],
        pros: [
            "Devasa iç hacim",
            "i-MMD Hibrit sistemi çok güvenilir",
            "Konforlu süspansiyon",
            "Düşük yakıt tüketimi (5-6L)"
        ],
        cons: [
            "Yapışkan direksiyon riski",
            "12V akü zayıf",
            "Multimedya ekranı demode",
            "Yol sesi (arka taraftan)"
        ],
        buyingTips: [
            "Direksiyon recall'ı yapılmış mı sorun",
            "Yağ çubuğunu koklayın (benzin kokusu — oil dilution)",
            "AGM akü değişmiş mi kontrol edin"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // HR-V — 1.5 i-VTEC (Mk1)
    // ═══════════════════════════════════════════════════════
    {
        id: "honda-hrv-15-ru",
        slug: "honda-hrv-1-5-ivtec",
        brand: "Honda",
        model: "HR-V",
        variant: "1.5 i-VTEC 130 HP Executive (CVT)",
        years: "2015-2021",
        generation: "RU (Mk2)",
        price: 1050000,
        expertNote: "L15B 1.5 i-VTEC 130 HP + CVT. Gizli kahraman — dışarıdan küçük görünür ama Magic Seats sayesinde iç hacmi SUV'larla yarışır. Motor atmosferik, performans vermez ama sorun da çıkarmaz. CVT konforlu ama uğultulu. Sorunsuzluk abidesidir.",
        reliabilityScore: 88,
        totalIssues: 2,
        searchCount: 22000,
        issues: [
            {
                id: "hrv-1",
                title: "CVT Uğultusu",
                description: "Yüksek devirde CVT şanzımandan gelen karakteristik uğultu sesi.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "Yüksek devir",
                repairCost: "Yok (CVT karakteri)"
            },
            {
                id: "hrv-2",
                title: "Start-Stop Arızası",
                description: "Start-stop sisteminin akü nedeniyle devreye girmemesi.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Akü bağlı",
                repairCost: "Akü değişimi (2.000-4.000 TL)"
            }
        ],
        pros: [
            "Magic Seats (katlanır koltuklar)",
            "Sorunsuzluk abidesi",
            "Kompakt boyut + geniş iç hacim",
            "Ekonomik yakıt tüketimi"
        ],
        cons: [
            "Hızlanma performansı zayıf",
            "Yalıtım yetersiz",
            "Multimedya eski",
            "Klima dokunmatik paneli sorunlu"
        ],
        buyingTips: [
            "Start-stop çalışıyor mu test edin",
            "Dokunmatik klima panelini deneyin",
            "Magic Seats mekanizması sağlam mı kontrol edin"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // HR-V — e:HEV (YENİ NESİL)
    // ═══════════════════════════════════════════════════════
    {
        id: "honda-hrv-ehev",
        slug: "honda-hrv-ehev-hybrid",
        brand: "Honda",
        model: "HR-V",
        variant: "1.5 e:HEV 131 HP (eCVT)",
        years: "2022-2025",
        generation: "RV (Mk3)",
        price: 1450000,
        expertNote: "LEB 1.5 Atkinson + e:HEV Hybrid 131 HP. HR-V'nin yeni nesli — tam hibrit sistemiyle şehirde 4-5L yakıt. CR-V'den küçük ama hibrit performansı aynı seviyede. Daha modern iç mekan ama Magic Seats artık yok. Fiyatı sınıfına göre yüksek.",
        reliabilityScore: 88,
        totalIssues: 2,
        searchCount: 8000,
        issues: [
            {
                id: "hrv-ehev-1",
                title: "12V Akü Zayıflığı",
                description: "Hibrit araçların 12V akü sorunu — uzun süre park edince akü biter.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Park süresi",
                repairCost: "AGM akü (3.000-5.000 TL)"
            },
            {
                id: "hrv-ehev-2",
                title: "Rejeneratif Fren Hissi",
                description: "Hibrit rejeneratif fren ile mekanik fren arasında geçişte sıradışı his.",
                category: "fren",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Yok (hibrit doğası)"
            }
        ],
        pros: [
            "Şehirde 4-5L yakıt (hibrit)",
            "Modern tasarım",
            "Honda Sensing güvenlik paketi",
            "Kompakt boyut + pratiklik"
        ],
        cons: [
            "Magic Seats artık yok",
            "Fiyat sınıfına göre yüksek",
            "12V akü zayıf",
            "Performans beklentisi düşük"
        ],
        buyingTips: [
            "12V akü sağlığını kontrol ettirin",
            "Hibrit batarya garanti süresini sorun",
            "Şehir içi kullanım için ideal"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // JAZZ — 1.5 e:HEV Hybrid
    // ═══════════════════════════════════════════════════════
    {
        id: "honda-jazz-ehev",
        slug: "honda-jazz-1-5-ehev",
        brand: "Honda",
        model: "Jazz",
        variant: "1.5 e:HEV Hybrid 109 HP (eCVT)",
        years: "2020-2024",
        generation: "GR (Mk4)",
        price: 1050000,
        expertNote: "LEB 1.5 Atkinson + e:HEV Hybrid 109 HP. Küçük dev — iç hacmi ve pratikliği inanılmaz. Magic Seats (sihirli koltuklar) sayesinde B-segment araçta C-segment bagaj. Hibrit sistemiyle şehirde 3.5L yakıt gerçekten mümkün. Neredeyse arıza yapmayan araç. Sorunsuzluk abidesi.",
        reliabilityScore: 94,
        totalIssues: 1,
        searchCount: 15000,
        issues: [
            {
                id: "jazz-1",
                title: "Multimedya Yavaşlığı",
                description: "Ekran arayüzünün bazen yavaşlaması ve geç tepki vermesi.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Yazılım",
                repairCost: "Güncelleme"
            }
        ],
        pros: [
            "Magic Seats (efsanevi pratiklik)",
            "3.5L yakıt tüketimi (hibrit)",
            "Geniş görüş açısı",
            "Sorunsuzluk abidesi"
        ],
        cons: [
            "Fiyat sınıfına göre yüksek",
            "Otoyol performansı zayıf",
            "Yalıtım yetersiz",
            "Tasarım tartışmalı"
        ],
        buyingTips: [
            "Sihirli koltuk mekanizması çalışıyor mu test edin",
            "Bakımları yetkili serviste mi yapılmış sorun",
            "Şehir içi + market aracı olarak mükemmel"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // ZR-V — 2.0 e:HEV (YENİ MODEL)
    // ═══════════════════════════════════════════════════════
    {
        id: "honda-zrv-ehev",
        slug: "honda-zrv-2-0-ehev",
        brand: "Honda",
        model: "ZR-V",
        variant: "2.0 e:HEV 184 HP Sport (eCVT)",
        years: "2023-2025",
        generation: "RZ",
        price: 1900000,
        expertNote: "LFB 2.0 i-VTEC + e:HEV Hybrid 184 HP. Honda'nın yeni C-SUV'u — CR-V ile HR-V arasına konumlanıyor. Motor CR-V ile aynı hibrit — çok güvenilir. İç mekan kalitesi Honda standartlarının üzerinde. Yeni model olduğu için kronikler henüz netleşmedi. Direksiyon hissi mükemmel.",
        reliabilityScore: 87,
        totalIssues: 2,
        searchCount: 5000,
        issues: [
            {
                id: "zrv-1",
                title: "12V Akü Zayıflığı",
                description: "Hibrit araçların genel 12V akü sorunu.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Park süresi",
                repairCost: "AGM akü (3.000-5.000 TL)"
            },
            {
                id: "zrv-2",
                title: "Yazılım Güncellemeleri",
                description: "Yeni model olduğu için multimedya ve ADAS sistem yazılım güncellemeleri gerekebilir.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Servis güncelleme"
            }
        ],
        pros: [
            "Güçlü hibrit motor (184 HP)",
            "İç mekan kalitesi (Honda'nın en iyisi)",
            "Mükemmel direksiyon hissi",
            "Honda Sensing güvenlik"
        ],
        cons: [
            "Fiyat yüksek",
            "Henüz çok yeni (kronikler bilinmiyor)",
            "Servis ağı sınırlı (Honda Türkiye)",
            "Bagaj hacmi rakiplerin gerisinde"
        ],
        buyingTips: [
            "Yeni model — garanti süresinden faydalanın",
            "Hibrit batarya garanti koşullarını sorun",
            "Test sürüşünde direksiyon hissini değerlendirin"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // ACCORD — 2.0 i-VTEC (ESKİ AMA EFSANE)
    // ═══════════════════════════════════════════════════════
    {
        id: "honda-accord-20",
        slug: "honda-accord-2-0",
        brand: "Honda",
        model: "Accord",
        variant: "2.0 i-VTEC 155 HP Executive (5AT)",
        years: "2008-2015",
        generation: "8. Nesil (CU)",
        price: 750000,
        expertNote: "R20A3 2.0 i-VTEC 155 HP + 5 ileri tam otomatik. Sanayiye sadece yağ değişimi için gidersiniz. Motor ve şanzıman MERMİDİR — bozulmaz. Direksiyon power pompası yağ kaçırır, o da Honda'nın tuzu biberi. 2.0 motor yüzünden MTV yüksek. LPG ile uyumlu.",
        reliabilityScore: 92,
        totalIssues: 2,
        searchCount: 12000,
        issues: [
            {
                id: "accord-1",
                title: "Direksiyon Pompası Yağ Kaçağı",
                description: "Direksiyon power pompasının inlemesi ve yağ kaçırması.",
                category: "suspansiyon",
                riskLevel: "MEDIUM",
                affectedKm: "150.000+ km",
                repairCost: "5.000 - 10.000 TL"
            },
            {
                id: "accord-2",
                title: "VTEC Solenoid Conta Terleme",
                description: "Motor üzerinde VTEC solenoid contasından hafif yağ terlemesi.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "120.000+ km",
                repairCost: "1.000 TL (Conta değişimi)"
            }
        ],
        pros: [
            "Ölümsüz motor + şanzıman",
            "D-segment konfor ve genişlik",
            "LPG uyumu",
            "VTEC keyfi"
        ],
        cons: [
            "2.0 motor MTV yüksek",
            "Şehir içi yakıt (10-12L)",
            "Yaşlanan tasarım",
            "Honda yedek parça pahalı"
        ],
        buyingTips: [
            "Direksiyon pump kaçağı var mı kontrol edin",
            "LPG ayarı düzgün mü sorun",
            "Km'si ne olursa olsun motor güvenilirdir — bakımlarına bakın"
        ]
    },
];
