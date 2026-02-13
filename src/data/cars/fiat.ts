import { Car } from '@/types';

export const fiatCars: Car[] = [
    // ═══════════════════════════════════════════════════════
    // EGEA SEDAN — 1.4 Fire
    // ═══════════════════════════════════════════════════════
    {
        id: "fiat-egea-1-4-fire",
        slug: "fiat-egea-1-4-fire",
        brand: "Fiat",
        model: "Egea",
        variant: "1.4 Fire 95 HP Sedan (Manuel)",
        years: "2015-2024",
        generation: "Tip 356",
        price: 750000,
        expertNote: "332A 1.4 Fire 95 HP atmosferik benzin. Türkiye'nin en çok satan aracı. Yağ yakma normaldir kitapçıkta yazıyor derler — inanmayın. 2021 öncesi Euro6b motorlarda piston segmanı sorunu var, 2021 sonrası düzeldi. LPG'ye çok uyumlu ama yokuşta bayılır. Bagajda yağ bidonu varsa kaçın.",
        reliabilityScore: 72,
        totalIssues: 5,
        searchCount: 95000,
        issues: [
            {
                id: "egea-14-1",
                title: "Aşırı Yağ Tüketimi (1.4 Fire)",
                description: "2021 öncesi Euro 6b motorlarda piston segmanlarından kaynaklı yüksek yağ eksiltme (1000km/1L). Bagajda yağ bidonu taşıyan sahipler var.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "30.000+ km",
                repairCost: "35.000 - 65.000 TL (Motor revizyonu)"
            },
            {
                id: "egea-14-2",
                title: "Ateşleme Bobini / Buji Arızası",
                description: "Motorun teklemesi ve arıza lambası yakması. Buji ve bobin ömrü kısadır.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "40.000+ km",
                repairCost: "4.000 - 7.500 TL"
            },
            {
                id: "egea-14-3",
                title: "City Modu / Direksiyon Kutusu",
                description: "Direksiyon kutusu tıkırtısı ve City modu sertleşme sorunu. Manevrada direksiyon taş gibi olur.",
                category: "suspansiyon",
                riskLevel: "MEDIUM",
                affectedKm: "60.000+ km",
                repairCost: "20.000 - 40.000 TL"
            },
            {
                id: "egea-14-4",
                title: "Radyatör Üst Hortumu Patlaması",
                description: "Üst hortumun şişmesi ve patlaması riski. Servis aksiyonu ile kelepçe değişimi yapılmalı.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "60.000+ km",
                repairCost: "2.500 - 5.000 TL"
            },
            {
                id: "egea-14-5",
                title: "Yokuşta Bayılma (Performans)",
                description: "Atmosferik motor yapısı gereği yokuşlarda ciddi tork yetersizliği. Klima açıkken daha da beter.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Çözümsüz (Motor karakteri)"
            }
        ],
        pros: [
            "Ekonomik yedek parça (her yerde bulunur)",
            "Geniş iç hacim ve bagaj",
            "LPG tam uyumu",
            "Yüksek ikinci el değeri"
        ],
        cons: [
            "Yağ yakma (2021 öncesi)",
            "Yalıtım zayıf (rüzgar sesi)",
            "Motor performansı (yokuşta bayılma)",
            "Kapı fitillerinden ıslık sesi"
        ],
        buyingTips: [
            "Yağ çubuğunu kontrol edin (bagajda yağ bidonu var mı?)",
            "Direksiyonu tam tur çevirip ses dinleyin",
            "2021 sonrası model yılı tercih edin (yağ sorunu düzeldi)",
            "Radyatör hortumunu gözle kontrol edin"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // EGEA SEDAN — 1.3 MultiJet Dizel
    // ═══════════════════════════════════════════════════════
    {
        id: "fiat-egea-1-3-multijet",
        slug: "fiat-egea-1-3-multijet",
        brand: "Fiat",
        model: "Egea",
        variant: "1.3 MultiJet 95 HP Sedan (Manuel)",
        years: "2015-2024",
        generation: "Tip 356",
        price: 850000,
        expertNote: "199B 1.3 MultiJet 95 HP dizel. Egea'nın en ekonomik versiyonu — yolda 3.5-4L yakar. AMA FCA'nın efsanevi 1.3 MultiJet motoru hem avantaj hem risk: Triger zinciri uzaması, AdBlue pompası (2021+ modellerde) ve DPF tıkanması en büyük riskler. Şehir içi kullanılacaksa DPF sorunu kaçınılmaz.",
        reliabilityScore: 75,
        totalIssues: 5,
        searchCount: 75000,
        issues: [
            {
                id: "egea-13-1",
                title: "Triger Zinciri Uzaması",
                description: "1.3 MultiJet motorlarda zincir uzaması ve metalik şakırtı sesi. 120.000 km'yi beklemeden değiştirilmeli.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "90.000+ km",
                repairCost: "15.000 - 25.000 TL"
            },
            {
                id: "egea-13-2",
                title: "DPF Tıkanıklığı",
                description: "Şehir içi kısa mesafe kullanımda partikül filtresi dolması ve rejenerasyon uyarısı.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Şehir içi sürekli kullanım",
                repairCost: "8.000 - 18.000 TL"
            },
            {
                id: "egea-13-3",
                title: "AdBlue Pompası Arızası",
                description: "Euro 6d motorlarda (2021+) AdBlue pompa arızası. Motor çalışmayı reddedebilir.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "60.000+ km",
                repairCost: "25.000 - 40.000 TL"
            },
            {
                id: "egea-13-4",
                title: "Turbo Hortumu Patlaması",
                description: "Intercooler hortumunun yırtılması sonucu çekiş düşüklüğü ve 'tıss' sesi.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "3.000 - 6.000 TL"
            },
            {
                id: "egea-13-5",
                title: "EGR Valfi Tıkanıklığı",
                description: "Kurum birikmesi sonucu EGR valfinin çalışmaması, güç kaybı ve siyah duman.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "5.000 - 10.000 TL"
            }
        ],
        pros: [
            "Çok düşük yakıt tüketimi (4L/100km)",
            "Torklu motor (200 Nm)",
            "Sağlam alt takım",
            "Ekonomik yedek parça"
        ],
        cons: [
            "Motor sesi kabine giriyor",
            "AdBlue sorunu (2021+ modeller)",
            "Şehir içinde DPF sorunu",
            "Soğukta vites sert"
        ],
        buyingTips: [
            "Zincir sesi var mı soğuk motorla dinleyin",
            "Egzozdan kurum atıyor mu bakın",
            "AdBlue deposu değişmiş mi sorun (2021+)",
            "Kısa mesafe şehir içi kullanıyorsanız benzin alın"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // EGEA CROSS — 1.4 Fire
    // ═══════════════════════════════════════════════════════
    {
        id: "fiat-egea-cross-1-4",
        slug: "fiat-egea-cross-1-4",
        brand: "Fiat",
        model: "Egea Cross",
        variant: "1.4 Fire 95 HP (Manuel)",
        years: "2020-2024",
        generation: "Tip 356 Cross",
        price: 900000,
        expertNote: "332A 1.4 Fire 95 HP + Cross gövde kiti. Egea Sedan'ın SUV görünümlü versiyonu. Yüksek sürüş pozisyonu ve 10 inç tablet ekran farkıyla. Motor aynı — yağ yakma ve yokuşta bayılma devam. Cross versiyonunda tavan çıtası solması ve krom soyulma da ekleniyor.",
        reliabilityScore: 73,
        totalIssues: 4,
        searchCount: 65000,
        issues: [
            {
                id: "egea-cross-1",
                title: "Aşırı Yağ Tüketimi",
                description: "1.4 Fire motor genel karakteristiği — 1.000 km'de yarım litreye kadar yağ eksiltme.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "Sıfır km'den itibaren",
                repairCost: "Yağ takibi / Revizyon (35.000-65.000 TL)"
            },
            {
                id: "egea-cross-2",
                title: "Tablet Ekran Sorunları",
                description: "10 inç tablet ekranın donması, hayalet dokunuşlar veya geri görüş kamerasının açılmaması.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "Yazılım / Ekran Değişimi (5.000-10.000 TL)"
            },
            {
                id: "egea-cross-3",
                title: "Krom Detay Soyulması",
                description: "Ön panjur ve kapı kollarındaki kromların erken deformasyonu ve soyulması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "2-3 yıl",
                repairCost: "Kozmetik onarım"
            },
            {
                id: "egea-cross-4",
                title: "Yokuşta Bayılma",
                description: "1.4 atmosferik motor + Cross'un ekstra 30 kg ağırlığı = yokuşta ciddi performans düşüşü.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Çözümsüz"
            }
        ],
        pros: [
            "Yüksek sürüş pozisyonu",
            "Şık Cross görünümü",
            "10 inç dijital gösterge paneli",
            "LPG uyumlu"
        ],
        cons: [
            "Motor performansı yetersiz",
            "Yağ yakma (1.4 Fire)",
            "Rüzgar sesi (aynalardan)",
            "Tavan çıtaları soluyor"
        ],
        buyingTips: [
            "Ekranın dokunmatiğini tüm bölgelerde test edin",
            "1.4 Fire yağ yakma kontrolü yapın",
            "2022+ model yılı tercih edin"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // EGEA CROSS — 1.6 MultiJet DCT
    // ═══════════════════════════════════════════════════════
    {
        id: "fiat-egea-cross-1-6-multijet",
        slug: "fiat-egea-cross-1-6-multijet",
        brand: "Fiat",
        model: "Egea Cross",
        variant: "1.6 MultiJet 130 HP DCT (Otomatik)",
        years: "2021-2024",
        generation: "Tip 356 Cross Facelift",
        price: 1200000,
        expertNote: "55280444 1.6 MultiJet 130 HP + 6 ileri DCT (kuru kavrama). Egea'nın en güçlü ve pahalı versiyonu. DCT şanzıman konfor sağlıyor ama yoğun trafikte ısınma ve silkeleme yapabilir. 320 Nm tork ile performans iyi. AdBlue sistemi var — arızası pahalı.",
        reliabilityScore: 80,
        totalIssues: 3,
        searchCount: 50000,
        issues: [
            {
                id: "egea-cross16-1",
                title: "DCT Şanzıman Isınması",
                description: "Kuru kavramalı DCT şanzımanın yoğun İstanbul trafiğinde ısınması ve vites kararsızlığı.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "Dur-kalk trafik",
                repairCost: "Kavrama değişimi (15.000-25.000 TL)"
            },
            {
                id: "egea-cross16-2",
                title: "AdBlue Sistemi Arızası",
                description: "AdBlue pompa veya enjektör arızası — motor çalışmayı reddedebilir.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "30.000+ km",
                repairCost: "15.000 - 25.000 TL"
            },
            {
                id: "egea-cross16-3",
                title: "DPF Tıkanıklığı",
                description: "Şehir içi ağırlıklı kullanımda dizel partikül filtresi dolması.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Şehir içi kullanım",
                repairCost: "Rejenerasyon / Temizleme (8.000-15.000 TL)"
            }
        ],
        pros: [
            "Güçlü motor (130 HP / 320 Nm tork)",
            "DCT otomatik konfor",
            "Ekonomik yakıt (5-6L/100km)",
            "Yüksek sürüş pozisyonu"
        ],
        cons: [
            "DCT trafikte kararsız (ısınma)",
            "AdBlue sistemi maliyeti",
            "Şehir içinde DPF sorunu",
            "Fiyat (Egea'ya göre yüksek)"
        ],
        buyingTips: [
            "DCT şanzımanı yoğun trafikte test edin",
            "AdBlue deposu dolu mu kontrol edin",
            "Otoyol ağırlıklı kullanacaksanız ideal"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // EGEA STATION WAGON — 1.6 MultiJet
    // ═══════════════════════════════════════════════════════
    {
        id: "fiat-egea-sw-1-6-multijet",
        slug: "fiat-egea-sw-1-6-multijet",
        brand: "Fiat",
        model: "Egea Station Wagon",
        variant: "1.6 MultiJet 120 HP Lounge (DCT)",
        years: "2017-2024",
        generation: "Tip 356 SW",
        price: 1050000,
        expertNote: "1.6 MultiJet 120 HP + DCT. Egea'nın station wagon versiyonu — Türkiye'nin en çok satan SW'si. Devasa 550 litrelik bagaj. Aile aracı olarak mükemmel. Motor ve şanzıman sorunları diğer Egea dizellerle aynı.",
        reliabilityScore: 79,
        totalIssues: 3,
        searchCount: 35000,
        issues: [
            {
                id: "egea-sw-1",
                title: "DCT Şanzıman Sarsıntısı",
                description: "Düşük hızlarda kuru kavramalı DCT şanzımanın silkelemesi.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "Dur-kalk trafik",
                repairCost: "Kavrama değişimi (15.000-25.000 TL)"
            },
            {
                id: "egea-sw-2",
                title: "AdBlue Pompası (2021+ modeller)",
                description: "AdBlue enjeksiyon sistemi arızası. Motor çalışmayabilir.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "60.000+ km",
                repairCost: "20.000 - 35.000 TL"
            },
            {
                id: "egea-sw-3",
                title: "Arka Süspansiyon Sesleri",
                description: "Yüklü kullanıldığında arka süspansiyondan gelen vuruntu sesleri.",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "Yüklü kullanımda",
                repairCost: "Tampon değişimi (3.000-6.000 TL)"
            }
        ],
        pros: [
            "Devasa bagaj (550L)",
            "Aile aracı olarak ideal",
            "Ekonomik dizel motor",
            "DCT otomatik konfor"
        ],
        cons: [
            "DCT trafikte huzursuz",
            "AdBlue maliyeti",
            "Baza yüksekliği (bagaj yükleme)",
            "Rüzgar sesi"
        ],
        buyingTips: [
            "Bagaj altı çekmece ve paspasları kontrol edin",
            "DCT şanzımanı trafikte test edin",
            "2021+ modellerde AdBlue durumunu sorun"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // EGEA — 1.0 Turbo Hybrid (YENİ NESİL)
    // ═══════════════════════════════════════════════════════
    {
        id: "fiat-egea-1-0-turbo-hybrid",
        slug: "fiat-egea-1-0-turbo-hybrid",
        brand: "Fiat",
        model: "Egea",
        variant: "1.0 FireFly Turbo Hybrid 100 HP (DCT)",
        years: "2024-2025",
        generation: "Tip 356 Facelift",
        price: 1100000,
        expertNote: "GSE 1.0 FireFly Turbo 100 HP + 48V Mild Hybrid + 6 ileri DCT. Egea'nın en yeni motoru. 1.4 Fire'ın yerini aldı. 3 silindirli turbo motor performansta büyük fark yaratıyor — yokuşta artık bayılmıyor! Mild hybrid system start-stop ve hızlanmada destek veriyor. Henüz yeni — kronikler net değil.",
        reliabilityScore: 80,
        totalIssues: 2,
        searchCount: 20000,
        issues: [
            {
                id: "egea-10t-1",
                title: "3 Silindirli Motor Titreşimi",
                description: "3 silindirli motor yapısı gereği rölantide hissedilen titreşim.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Çözümsüz (3 silindir doğası)"
            },
            {
                id: "egea-10t-2",
                title: "DCT Düşük Hız Kararsızlığı",
                description: "Kuru kavramalı DCT şanzımanın park manevrasında ve düşük hızda tereddüt etmesi.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Yazılım kalibrasyon"
            }
        ],
        pros: [
            "Turbo ile yokuşta bayılma yok",
            "48V Mild Hybrid yakıt tasarrufu",
            "DCT otomatik konfor",
            "Modern Euro 6e standartlarında"
        ],
        cons: [
            "3 silindir titreşimi",
            "Henüz çok yeni (kronikler bilinmiyor)",
            "LPG uyumu belirsiz",
            "Fiyat artışı (1.4'e göre)"
        ],
        buyingTips: [
            "1.4 Fire ile test sürüşünde farkı hissedin",
            "LPG takmak istiyorsanız garanti durumunu sorun",
            "DCT davranışını trafikte test edin"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // LINEA — 1.3 MultiJet
    // ═══════════════════════════════════════════════════════
    {
        id: "fiat-linea-1-3-multijet",
        slug: "fiat-linea-1-3-multijet",
        brand: "Fiat",
        model: "Linea",
        variant: "1.3 MultiJet 95 HP",
        years: "2007-2017",
        generation: "Tip 323",
        price: 450000,
        expertNote: "199B 1.3 MultiJet 95 HP. Egea'nın atası. Az yakar çok koşar — parçası her bakkalda var. Yağ soğutucu patlaması en tehlikeli kronik (genleşme kabında tahin varsa kaçın). Torpido çatlağı da kronik. Bütçe aracı olarak hâlâ mantıklı.",
        reliabilityScore: 77,
        totalIssues: 4,
        searchCount: 35000,
        issues: [
            {
                id: "linea-1",
                title: "Yağ Soğutucusu Patlaması",
                description: "Yağın soğutma suyuna karışması. Genleşme kabında tahin kıvamında sıvı varsa MOTOR GİTMİŞ DEMEKTİR.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "120.000+ km",
                repairCost: "5.000 - 10.000 TL (erken yakalanırsa)"
            },
            {
                id: "linea-2",
                title: "Kızdırma Bujisi Kaynaması",
                description: "Kızdırma bujilerinin silindir kapağına kaynaması ve sökülürken kırılması.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "80.000+ km",
                repairCost: "4.000 - 8.000 TL"
            },
            {
                id: "linea-3",
                title: "Vites Halatı Kopması",
                description: "Vites geçişlerinin sertleşmesi veya vites kolunun boşa çıkması.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "3.000 - 6.000 TL"
            },
            {
                id: "linea-4",
                title: "Torpido Çatlaması",
                description: "Yolcu hava yastığı kısmının güneşten çatlaması. Fiat'ın kronik sorunu.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "10+ yıl",
                repairCost: "Kaplama (2.000-5.000 TL)"
            }
        ],
        pros: [
            "Az yakar çok koşar",
            "Parçası her bakkalda var",
            "Geniş bagaj",
            "Uygun fiyat"
        ],
        cons: [
            "Yaşlanan tasarım",
            "Yalıtım yetersiz",
            "Torpido çatlağı kronik",
            "Plastik kalitesi düşük"
        ],
        buyingTips: [
            "Genleşme kabını mutlaka kontrol edin (tahin varsa kaçın!)",
            "EGR iptali yapılmış mı sorun",
            "Debriyaj pedalı ağırlığını kontrol edin"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // PUNTO EVO
    // ═══════════════════════════════════════════════════════
    {
        id: "fiat-punto-evo-1-3-multijet",
        slug: "fiat-punto-evo-1-3-multijet",
        brand: "Fiat",
        model: "Punto",
        variant: "1.3 MultiJet 75 HP Evo",
        years: "2010-2018",
        generation: "Tipo 199 Evo",
        price: 400000,
        expertNote: "199B 1.3 MultiJet 75 HP. Fiyatına göre alınabilecek en mantıklı araçlardan. İçi Egea'dan daha kalitelidir — Evo göğüs tasarımı güzel. Maserati çizgileri taşıyan tasarım karizmatiğidir. City modu arızası meşhurdur — direksiyon taş gibi olur.",
        reliabilityScore: 78,
        totalIssues: 3,
        searchCount: 25000,
        issues: [
            {
                id: "punto-1",
                title: "City Modu Arızası",
                description: "EPS direksiyon motorunun bozulması — direksiyon taş gibi olur. Park manevrası imkânsızlaşır.",
                category: "elektronik",
                riskLevel: "HIGH",
                affectedKm: "Kronik / Rastgele",
                repairCost: "8.000 - 15.000 TL"
            },
            {
                id: "punto-2",
                title: "Torpido Çatlağı",
                description: "Yolcu hava yastığı kısmından torpidonun güneşte çatlaması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Güneşe bağlı",
                repairCost: "Kaplama (2.000-5.000 TL)"
            },
            {
                id: "punto-3",
                title: "Arka Stop Buğulanması",
                description: "Stop lambalarının su alması veya buğu yapması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "1.000 - 2.000 TL"
            }
        ],
        pros: [
            "Maserati çizgileri tasarım",
            "İç mekan kalitesi (Egea'dan iyi)",
            "Ekonomik yakıt tüketimi",
            "Uygun fiyat"
        ],
        cons: [
            "City modu riski",
            "Torpido çatlağı kronik",
            "Yedek parça azalıyor",
            "Dar bagaj"
        ],
        buyingTips: [
            "Torpido üstüne bakın çatlak var mı",
            "City modu çalışıyor mu — direksiyonu park halinde çevirin",
            "Evo (facelift) versiyonu tercih edin"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // DOBLO — 1.6 MultiJet
    // ═══════════════════════════════════════════════════════
    {
        id: "fiat-doblo-1-6-multijet",
        slug: "fiat-doblo-1-6-multijet",
        brand: "Fiat",
        model: "Doblo",
        variant: "1.6 MultiJet 120 HP Combi Premio",
        years: "2010-2022",
        generation: "Mk3 (D4)",
        price: 900000,
        expertNote: "263A 1.6 MultiJet 120 HP. Türkiye'nin aile aracı efsanesi — devasa iç hacim. Bağımsız arka süspansiyon konforlu. Hususi (beyaz plakalı) kullanılmış olanları altın değerinde, ticari geçmişli olanlardan uzak durun. Turbo hortumu ve enjektör sorunları yüksek km'de.",
        reliabilityScore: 82,
        totalIssues: 4,
        searchCount: 55000,
        issues: [
            {
                id: "doblo16-1",
                title: "Turbo Islık Sesi / Yağ Kaçağı",
                description: "Turbo mili boşluğu oluşması, ıslık sesi ve yağ kaçağı. Revizyon gerekebilir.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "120.000+ km",
                repairCost: "15.000 - 30.000 TL (Revizyon)"
            },
            {
                id: "doblo16-2",
                title: "EGR ve DPF Tıkanıklığı",
                description: "Şehir içi kullanımda kurum birikmesi ve çekiş düşüklüğü.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Şehir içi sürekli",
                repairCost: "8.000 - 15.000 TL"
            },
            {
                id: "doblo16-3",
                title: "Vites Geçiş Zorlanması",
                description: "1. vitese geçişte zorlanma ve cırtlama sesi. Senkromeç aşınması.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "10.000 - 20.000 TL"
            },
            {
                id: "doblo16-4",
                title: "Torpido Airbag Şişmesi",
                description: "Yolcu tarafı airbag kapağının güneşte şişmesi.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "Kaplama"
            }
        ],
        pros: [
            "Devasa iç hacim ve yükleme alanı",
            "Güçlü 1.6 motor (120 HP)",
            "Bağımsız arka süspansiyon (konfor)",
            "Yüksek ikinci el değeri"
        ],
        cons: [
            "Rüzgar sesi (büyük aynalar)",
            "Ticari araç imajı",
            "Yüksek km'de turbo riski",
            "Torpido şişmesi"
        ],
        buyingTips: [
            "Hususi (beyaz plaka) kullanılmış olanları tercih edin",
            "Turbo hortumlarında yağ kaçağı var mı kontrol edin",
            "Arka kapı kilitlerini test edin",
            "Ticari geçmişli olanlardan uzak durun"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // DOBLO — 1.3 MultiJet (ESKİ)
    // ═══════════════════════════════════════════════════════
    {
        id: "fiat-doblo-1-3-multijet",
        slug: "fiat-doblo-1-3-multijet",
        brand: "Fiat",
        model: "Doblo",
        variant: "1.3 MultiJet 90 HP Combi Premio",
        years: "2010-2022",
        generation: "Mk3 (D3/D4)",
        price: 750000,
        expertNote: "199B 1.3 MultiJet 90 HP. 1.6'dan daha ekonomik ama kalabalık ailede ve yüklüyken güç yetersiz. Zincir uzaması 1.3 MultiJet'in bilinen sorunu. Hususi kullanılmış şık olanları çok aranan araç.",
        reliabilityScore: 84,
        totalIssues: 3,
        searchCount: 40000,
        issues: [
            {
                id: "doblo13-1",
                title: "Triger Zinciri Uzaması",
                description: "1.3 MultiJet motorun zincir uzaması ve metalik şakırtı sesi.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "120.000+ km",
                repairCost: "15.000 - 25.000 TL"
            },
            {
                id: "doblo13-2",
                title: "DPF Tıkanıklığı",
                description: "Şehir içi kullanımda partikül filtresi dolması.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "60.000+ km",
                repairCost: "5.000 - 10.000 TL"
            },
            {
                id: "doblo13-3",
                title: "Amortisör Takozu",
                description: "Ön takımdan gelen lokurtu sesleri.",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "40.000+ km",
                repairCost: "2.000 - 4.000 TL"
            }
        ],
        pros: [
            "Devasa iç hacim",
            "Ekonomik yakıt tüketimi",
            "Yedek parça ucuzluğu",
            "Yüksek ikinci el değeri"
        ],
        cons: [
            "1.3 motor yüklüyken güçsüz",
            "Yalıtım yetersiz",
            "Performans düşük"
        ],
        buyingTips: [
            "Yük görmemiş 'Hususi' kullanılmış araç bulursanız kaçırmayın",
            "Zincir sesi dinleyin (soğuk çalıştırma)",
            "Motor bagajını yağ kaçağı açısından kontrol edin"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // FİORİNO — 1.3 MultiJet
    // ═══════════════════════════════════════════════════════
    {
        id: "fiat-fiorino-1-3-multijet",
        slug: "fiat-fiorino-1-3-multijet",
        brand: "Fiat",
        model: "Fiorino",
        variant: "1.3 MultiJet 75 HP Combi",
        years: "2008-2024",
        generation: "Mk3",
        price: 600000,
        expertNote: "199B 1.3 MultiJet 75 HP. Türkiye'nin şehir içi kurye/ticari aracı. Yakıt cimrisi — 4L/100km yakar. Parçası çok ucuz ve her yerde bulunur. Konfor zero, yalıtım zero, güvenlik sıfır yıldız — ama işini görür. Yağ soğutucu patlaması en tehlikeli kronik.",
        reliabilityScore: 80,
        totalIssues: 4,
        searchCount: 30000,
        issues: [
            {
                id: "fiorino-1",
                title: "Triger Zincir Uzaması",
                description: "1.3 MultiJet zincir uzaması ve şakırtı sesi. Koparsa motor dağılır.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "120.000+ km",
                repairCost: "15.000 - 25.000 TL"
            },
            {
                id: "fiorino-2",
                title: "Yağ Soğutucu Patlaması",
                description: "Yağ soğutucunun çürümesi sonucu suya yağ karışması — genleşme kabında tahin.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "150.000+ km",
                repairCost: "5.000 - 10.000 TL"
            },
            {
                id: "fiorino-3",
                title: "Amortisör Kulesi Sesi",
                description: "Ön amortisör kule bilyalarının ve takozlarının çabuk bozulması.",
                category: "suspansiyon",
                riskLevel: "MEDIUM",
                affectedKm: "40.000+ km",
                repairCost: "4.000 - 8.000 TL"
            },
            {
                id: "fiorino-4",
                title: "Turbo Islık / Boşluk",
                description: "Turbo milinde boşluk oluşması ve ötme sesi. Yağ yakmaya sebep olur.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "150.000+ km",
                repairCost: "15.000 - 30.000 TL"
            }
        ],
        pros: [
            "Şehir içi pratiklik (küçük boyut)",
            "Yakıt cimrisi (4L/100km)",
            "Parça çok ucuz ve bol",
            "Ticari araç vergi avantajı"
        ],
        cons: [
            "Konfor yok denecek seviyede",
            "Gürültü yalıtımı zero",
            "Güvenlik sıfır yıldız",
            "Ticari araç imajı"
        ],
        buyingTips: [
            "Ticari geçmişi çok yıpratır — bakımlı araç arayın",
            "Zincir sesi dinleyin",
            "Genleşme kabını kontrol edin (tahin varsa kaçın)"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // 500X — 1.6 MultiJet
    // ═══════════════════════════════════════════════════════
    {
        id: "fiat-500x-1-6-multijet",
        slug: "fiat-500x-1-6-multijet",
        brand: "Fiat",
        model: "500X",
        variant: "1.6 MultiJet 120 HP Cross (DCT)",
        years: "2015-2023",
        generation: "Tip 334",
        price: 1050000,
        expertNote: "55260384 1.6 MultiJet 120 HP + DDCT. Jeep Renegade'in İtalyan ikizi — aynı platform (Small Wide). İç mekan kalitesi Egea'dan çok iyi. Şekli şemaili güzel ama ikinci eli yavaş gider çünkü kimse tanımıyor. Elektronik biraz narin.",
        reliabilityScore: 79,
        totalIssues: 3,
        searchCount: 8500,
        issues: [
            {
                id: "500x-1",
                title: "DDCT Şanzıman Titremesi",
                description: "Çift kavramalı DDCT şanzımanın düşük hızlarda titreme/silkeleme yapması.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "Dur-kalk trafik",
                repairCost: "Kavrama değişimi (15.000-25.000 TL)"
            },
            {
                id: "500x-2",
                title: "Turbo Hortumu Patlaması",
                description: "Turbo intercooler hortumunun çatlaması ve çekiş düşüklüğü.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "3.000 - 6.000 TL"
            },
            {
                id: "500x-3",
                title: "Start-Stop Arızası",
                description: "Start-Stop sisteminin akü nedeniyle devre dışı kalması.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Akü değişimi (3.000-5.000 TL)"
            }
        ],
        pros: [
            "Tarz tasarım",
            "Kaliteli iç mekan (Egea'dan iyi)",
            "Dizel-otomatik uyumu güzel",
            "Jeep Renegade ile ortak platform"
        ],
        cons: [
            "İkinci eli yavaş gider",
            "Bagaj küçük (350L)",
            "Fiyatı yüksek (Egea'ya göre)",
            "Parça fiyatları pahalı"
        ],
        buyingTips: [
            "Elektronik aksamını (klima, ekran) tek tek deneyin",
            "DDCT şanzımanı trafikte test edin",
            "İkinci el değer kaybını göze alarak alın"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // 500L — 1.3 MultiJet
    // ═══════════════════════════════════════════════════════
    {
        id: "fiat-500l-1-3-multijet",
        slug: "fiat-500l-1-3-multijet",
        brand: "Fiat",
        model: "500L",
        variant: "1.3 MultiJet 85 HP Pop Star",
        years: "2012-2022",
        generation: "Tip 330",
        price: 650000,
        expertNote: "199B 1.3 MultiJet 85 HP. Geniş, ferah aile aracı — küçük MPV. AMA Dualogic robotize şanzımandan UZAK DURUN. Vites geçişlerinde başınızı öne eğdirir — yokuşta kafası karışır. Manuel alın veya Dualogic'e alışık olun.",
        reliabilityScore: 76,
        totalIssues: 3,
        searchCount: 12000,
        issues: [
            {
                id: "500l-1",
                title: "Dualogic Robotize Şanzıman",
                description: "Yarı otomatik şanzıman robot aktüatöründen yağ kaçağı, sarsıntılı vites geçişleri ve hata kodları.",
                category: "sanziman",
                riskLevel: "HIGH",
                affectedKm: "80.000+ km",
                repairCost: "20.000 - 35.000 TL"
            },
            {
                id: "500l-2",
                title: "Turbo Hortumu Patlaması",
                description: "Turbo intercooler hortumunun yırtılması ve çekiş düşüşü.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "60.000+ km",
                repairCost: "3.000 - 5.000 TL"
            },
            {
                id: "500l-3",
                title: "Multimedya Ekran Kararması",
                description: "UConnect multimedya ekranının kararması veya donması.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "3.000 - 6.000 TL"
            }
        ],
        pros: [
            "Muazzam iç hacim (MPV keyfinde)",
            "İyi görüş açısı",
            "Değişken arka koltuklar",
            "Uygun fiyat"
        ],
        cons: [
            "Dualogic şanzıman felaket",
            "Ağır olduğu için çok yakar",
            "Tasarım tartışmalı",
            "İkinci el değeri düşük"
        ],
        buyingTips: [
            "Dualogic'i yokuşta mutlaka deneyin",
            "Manuel şanzımanlısını tercih edin",
            "Cam tavan perdesi çalışıyor mu kontrol edin"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // PANDA — 1.2 Fire
    // ═══════════════════════════════════════════════════════
    {
        id: "fiat-panda-1-2-fire",
        slug: "fiat-panda-1-2-fire",
        brand: "Fiat",
        model: "Panda",
        variant: "1.2 Fire 69 HP",
        years: "2012-2024",
        generation: "Tip 319 (Mk3)",
        price: 500000,
        expertNote: "169A 1.2 Fire 69 HP. Şehir aracının babası. Park yeri sıkıntısı yok — 3.65m boyuyla her yere sığar. Motor basit ve güvenilir. Konfor sıfır ama şehirde işinizi görür. Dualogic'ten uzak durun — manuel alın.",
        reliabilityScore: 82,
        totalIssues: 2,
        searchCount: 15000,
        issues: [
            {
                id: "panda-1",
                title: "Dualogic Şanzıman (Otomatikse)",
                description: "Robotize Dualogic şanzımanın sarsıntılı çalışması ve aktüatör arızası.",
                category: "sanziman",
                riskLevel: "HIGH",
                affectedKm: "60.000+ km",
                repairCost: "15.000 - 30.000 TL"
            },
            {
                id: "panda-2",
                title: "Ateşleme Bobini",
                description: "Bobin arızası ve motor teklemesi.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "50.000+ km",
                repairCost: "2.000 - 4.000 TL"
            }
        ],
        pros: [
            "Şehirde park kolaylığı (3.65m)",
            "Basit ve güvenilir motor",
            "Çok ucuz yedek parça",
            "Ekonomik yakıt"
        ],
        cons: [
            "Konfor sıfır",
            "Gürültü yalıtımı yok",
            "Güvenlik düşük",
            "Yol tutuşu kötü"
        ],
        buyingTips: [
            "Manuel şanzıman tercih edin (Dualogic'ten kaçın)",
            "LPG'li olanları yakıt açısından ideal",
            "Şehir dışı uzun yol aracı değildir"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // TOFAŞ ŞAHİN (EFSANEVİ)
    // ═══════════════════════════════════════════════════════
    {
        id: "tofas-sahin-ie",
        slug: "tofas-sahin-1-6-ie",
        brand: "Fiat",
        model: "Şahin",
        variant: "1.6 ie S",
        years: "1998-2002",
        generation: "Kuş Serisi",
        price: 350000,
        expertNote: "1.6 ie enjeksiyonlu. Efsanevi 'Kuş Serisi'nin son hali. Parçası bakkalda bile var — tamircisi her köşede. Arka tekerlekten itiş keyfi var ama güvenlik 0 yıldız. Çürümemiş, şasisi düzgün bir tane bulmak neredeyse imkânsız.",
        reliabilityScore: 60,
        totalIssues: 3,
        searchCount: 100000,
        issues: [
            {
                id: "sahin-1",
                title: "Gövde Çürümesi",
                description: "Alt taban, marşpiyel ve çamurluk ağızlarında ileri seviye çürüme.",
                category: "govde",
                riskLevel: "HIGH",
                affectedKm: "Yaşa bağlı",
                repairCost: "15.000 - 30.000 TL (Sac işçiliği)"
            },
            {
                id: "sahin-2",
                title: "Hararet / Conta Yakma",
                description: "Motor silindir kapak contasının yakılması. Fiat 124 DNA'sının efsanevi kronik sorunu.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "Her an",
                repairCost: "5.000 TL"
            },
            {
                id: "sahin-3",
                title: "Diferansiyel Ötmesi",
                description: "Arka diferansiyeleden gelen uğultu sesi.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "3.000 TL"
            }
        ],
        pros: [
            "Parçası bakkalda bile var",
            "Tamiri kolay (her usta bilir)",
            "Arkadan itiş keyfi",
            "Nostaljik değer"
        ],
        cons: [
            "Güvenlik 0 yıldız",
            "Konfor yok",
            "Yalıtım yok",
            "Çürüme kaçınılmaz"
        ],
        buyingTips: [
            "Çürük olmayan bulmak imkânsıza yakın — alt tabanı mutlaka kontrol ettirin",
            "Şasi numarası ve ruhsat kontrolü yapın",
            "Hararet yapıp yapmadığını sorun"
        ]
    },

    // ═══════════════════════════════════════════════════════
    // 500 (Cinquecento)
    // ═══════════════════════════════════════════════════════
    {
        id: "fiat-500-1-2",
        slug: "fiat-500-1-2-pop",
        brand: "Fiat",
        model: "500",
        variant: "1.2 Pop/Lounge 69 HP",
        years: "2007-2023",
        generation: "Tipo 312",
        price: 550000,
        expertNote: "169A 1.2 Fire 69 HP. İkonik retro tasarım. İtalyan şıklığının simgesi — kadınların favorisi. Motor Panda ile aynı, basit ve güvenilir. Dualogic şanzımandan uzak durun. Manuel alın. İç mekan dar ama karizmatik.",
        reliabilityScore: 78,
        totalIssues: 3,
        searchCount: 10000,
        issues: [
            {
                id: "500-1",
                title: "Dualogic Şanzıman",
                description: "Robotize şanzımanın sarsıntılı vites geçişleri ve aktüatör arızası.",
                category: "sanziman",
                riskLevel: "HIGH",
                affectedKm: "60.000+ km",
                repairCost: "15.000 - 30.000 TL"
            },
            {
                id: "500-2",
                title: "City Modu Arızası",
                description: "EPS direksiyon motoru arızası — park manevrası zorlaşır.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "8.000 - 12.000 TL"
            },
            {
                id: "500-3",
                title: "Triger Kayışı",
                description: "Triger kayışı bakım aralığının yakından takip edilmesi gerekiyor.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "60.000 km / 5 yıl",
                repairCost: "3.000 - 5.000 TL"
            }
        ],
        pros: [
            "İkonik İtalyan tasarımı",
            "Şehirde park kolaylığı",
            "Basit ve güvenilir motor",
            "Retro karizmatik iç mekan"
        ],
        cons: [
            "İç mekan çok dar",
            "Arka koltuk kullanılamaz",
            "Bagaj küçücük (185L)",
            "Dualogic şanzıman"
        ],
        buyingTips: [
            "Dualogic'ten uzak durun — manuel veya Abarth tercih edin",
            "Cabrio versiyonu varsa tavan mekanizmasını test edin",
            "City modu çalışıyor mu kontrol edin"
        ]
    },
];
