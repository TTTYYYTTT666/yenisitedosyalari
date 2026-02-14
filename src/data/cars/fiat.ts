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
                repairCost: "0 TL (Karakteristik)"
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
                repairCost: "3.000 - 10.000 TL (Boya/Rötuş)"
            },
            {
                id: "egea-cross-4",
                title: "Yokuşta Bayılma",
                description: "1.4 atmosferik motor + Cross'un ekstra 30 kg ağırlığı = yokuşta ciddi performans düşüşü.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "0 TL (Tasarım Kaynaklı)"
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
        expertNote: "55280444 1.6 MultiJet 130 HP + 6 ileri DCT (kuru kavrama). Egea'nın en güçlü ve pahalı versiyonu. DCT şanzıman konfor sağlıyor ama yoğun trafikte ısınma ve silkeleme yapabilir. 320 Nm tork ile performans iyi. AdBlue sistemi var — arızası pahalı.",
        reliabilityScore: 80,
        totalIssues: 5,
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
            },
            {
                id: "egea-cross-1-6-multijet-auto-4",
                title: "Yağ Eksiltme",
                description: "Motor yağının servis aralarında eksilmesi. Düzenli kontrol şart.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "Segman / 5.000 - 15.000 TL"
            },
            {
                id: "egea-cross-1-6-multijet-auto-5",
                title: "DCT Kavrama Titremesi",
                description: "Çift kavramalı şanzımanda düşük hızlarda titreşim.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "40.000+ km",
                repairCost: "10.000 - 25.000 TL"
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
        expertNote: "1.6 MultiJet 120 HP + DCT. Egea'nın station wagon versiyonu — Türkiye'nin en çok satan SW'si. Devasa 550 litrelik bagaj. Aile aracı olarak mükemmel. Motor ve şanzıman sorunları diğer Egea dizellerle aynı.",
        reliabilityScore: 79,
        totalIssues: 5,
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
            },
            {
                id: "egea-sw-1-6-multijet-auto-4",
                title: "12V Akü Boşalması",
                description: "12V yardımcı akünün uzun park halinde boşalması.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "3.000 - 5.000 TL"
            },
            {
                id: "egea-sw-1-6-multijet-auto-5",
                title: "Şarj Kapağı Sorunu",
                description: "Şarj kapağının donması veya mekanik olarak açılmaması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kış ayları",
                repairCost: "1.500 - 3.000 TL"
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
        expertNote: "GSE 1.0 FireFly Turbo 100 HP + 48V Mild Hybrid + 6 ileri DCT. Egea'nın en yeni motoru. 1.4 Fire'ın yerini aldı. 3 silindirli turbo motor performansta büyük fark yaratıyor — yokuşta artık bayılmıyor! Mild hybrid system start-stop ve hızlanmada destek veriyor. Henüz yeni — kronikler net değil.",
        reliabilityScore: 80,
        totalIssues: 4,
        searchCount: 20000,
        issues: [
            {
                id: "egea-10t-1",
                title: "3 Silindirli Motor Titreşimi",
                description: "3 silindirli motor yapısı gereği rölantide hissedilen titreşim.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "0 TL (Karakteristik)"
            },
            {
                id: "egea-10t-2",
                title: "DCT Düşük Hız Kararsızlığı",
                description: "Kuru kavramalı DCT şanzımanın park manevrasında ve düşük hızda tereddüt etmesi.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "2.000 - 5.000 TL (Yazılım)"
            },
            {
                id: "egea-1-0-turbo-hybrid-auto-3",
                title: "12V Akü Boşalması",
                description: "Hibrit sistemin 12V yardımcı aküyü hızla tüketmesi. Araç yatabilir.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "2.500 - 5.000 TL"
            },
            {
                id: "egea-1-0-turbo-hybrid-auto-4",
                title: "Rejeneratif Fren Hissi",
                description: "Rejeneratif frenlemenin suni ve alışılmadık hissettirmesi.",
                category: "fren",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "0 TL (Karakteristik)"
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
        expertNote: "199B 1.3 MultiJet 75 HP. Fiyatına göre alınabilecek en mantıklı araçlardan. İçi Egea'dan daha kalitelidir — Evo göğüs tasarımı güzel. Maserati çizgileri taşıyan tasarım karizmatiğidir. City modu arızası meşhurdur — direksiyon taş gibi olur.",
        reliabilityScore: 78,
        totalIssues: 5,
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
            },
            {
                id: "punto-evo-1-3-multijet-auto-4",
                title: "12V Akü Boşalması",
                description: "12V yardımcı akünün uzun park halinde boşalması.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "3.000 - 5.000 TL"
            },
            {
                id: "punto-evo-1-3-multijet-auto-5",
                title: "Şarj Kapağı Sorunu",
                description: "Şarj kapağının donması veya mekanik olarak açılmaması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kış ayları",
                repairCost: "1.500 - 3.000 TL"
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
                repairCost: "5.000 - 15.000 TL (Kaplama)"
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
        expertNote: "199B 1.3 MultiJet 90 HP. 1.6'dan daha ekonomik ama kalabalık ailede ve yüklüyken güç yetersiz. Zincir uzaması 1.3 MultiJet'in bilinen sorunu. Hususi kullanılmış şık olanları çok aranan araç.",
        reliabilityScore: 84,
        totalIssues: 5,
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
            },
            {
                id: "doblo-1-3-multijet-auto-4",
                title: "Yağ Eksiltme",
                description: "Motor yağının servis aralarında eksilmesi. Düzenli kontrol şart.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "Segman / 5.000 - 15.000 TL"
            },
            {
                id: "doblo-1-3-multijet-auto-5",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
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
        expertNote: "55260384 1.6 MultiJet 120 HP + DDCT. Jeep Renegade'in İtalyan ikizi — aynı platform (Small Wide). İç mekan kalitesi Egea'dan çok iyi. Şekli şemaili güzel ama ikinci eli yavaş gider çünkü kimse tanımıyor. Elektronik biraz narin.",
        reliabilityScore: 79,
        totalIssues: 5,
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
            },
            {
                id: "500x-1-6-multijet-auto-4",
                title: "Yağ Eksiltme",
                description: "Motor yağının servis aralarında eksilmesi. Düzenli kontrol şart.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "Segman / 5.000 - 15.000 TL"
            },
            {
                id: "500x-1-6-multijet-auto-5",
                title: "DCT Kavrama Titremesi",
                description: "Çift kavramalı şanzımanda düşük hızlarda titreşim.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "40.000+ km",
                repairCost: "10.000 - 25.000 TL"
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
        expertNote: "199B 1.3 MultiJet 85 HP. Geniş, ferah aile aracı — küçük MPV. AMA Dualogic robotize şanzımandan UZAK DURUN. Vites geçişlerinde başınızı öne eğdirir — yokuşta kafası karışır. Manuel alın veya Dualogic'e alışık olun.",
        reliabilityScore: 76,
        totalIssues: 5,
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
            },
            {
                id: "500l-1-3-multijet-auto-4",
                title: "Yağ Eksiltme",
                description: "Motor yağının servis aralarında eksilmesi. Düzenli kontrol şart.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "Segman / 5.000 - 15.000 TL"
            },
            {
                id: "500l-1-3-multijet-auto-5",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
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
        expertNote: "169A 1.2 Fire 69 HP. Şehir aracının babası. Park yeri sıkıntısı yok — 3.65m boyuyla her yere sığar. Motor basit ve güvenilir. Konfor sıfır ama şehirde işinizi görür. Dualogic'ten uzak durun — manuel alın.",
        reliabilityScore: 82,
        totalIssues: 4,
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
            },
            {
                id: "panda-1-2-fire-auto-3",
                title: "Yağ Eksiltme",
                description: "Motor yağının servis aralarında eksilmesi. Düzenli kontrol şart.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "Segman / 5.000 - 15.000 TL"
            },
            {
                id: "panda-1-2-fire-auto-4",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
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
        expertNote: "1.6 ie enjeksiyonlu. Efsanevi 'Kuş Serisi'nin son hali. Parçası bakkalda bile var — tamircisi her köşede. Arka tekerlekten itiş keyfi var ama güvenlik 0 yıldız. Çürümemiş, şasisi düzgün bir tane bulmak neredeyse imkânsız.",
        reliabilityScore: 60,
        totalIssues: 5,
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
            },
            {
                id: "sahin-1-6-ie-auto-4",
                title: "12V Akü Boşalması",
                description: "12V yardımcı akünün uzun park halinde boşalması.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "3.000 - 5.000 TL"
            },
            {
                id: "sahin-1-6-ie-auto-5",
                title: "Şarj Kapağı Sorunu",
                description: "Şarj kapağının donması veya mekanik olarak açılmaması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kış ayları",
                repairCost: "1.500 - 3.000 TL"
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
        expertNote: "169A 1.2 Fire 69 HP. İkonik retro tasarım. İtalyan şıklığının simgesi — kadınların favorisi. Motor Panda ile aynı, basit ve güvenilir. Dualogic şanzımandan uzak durun. Manuel alın. İç mekan dar ama karizmatik.",
        reliabilityScore: 78,
        totalIssues: 5,
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
            },
            {
                id: "500-1-2-pop-auto-4",
                title: "Yağ Eksiltme",
                description: "Motor yağının servis aralarında eksilmesi. Düzenli kontrol şart.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "Segman / 5.000 - 15.000 TL"
            },
            {
                id: "500-1-2-pop-auto-5",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
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

    // ─── Eski new-cars dosyasından taşındı ───
    {
        id: "fiat-linea-1-3-multijet-ii",
        slug: "fiat-linea-1-3-multijet-ii",
        brand: "Fiat",
        model: "Linea",
        variant: "1.3 Multijet II",
        years: "2007-2016",
        generation: "323",
        reliabilityScore: 69,
        totalIssues: 6,
        searchCount: 10000,
        expertNote: "Linea Tofaş üretimi, Türkiye'nin en çok satan sedanlarından biriydi. 1.3 Multijet motor dayanıklı ama enjektör ve turbo sorunları yaygın. Boya kalitesi çok zayıf. Fiyatına göre geniş ve pratik.",
        issues: [
            { id: "linea2-1", title: "Enjektör Arızası (1.3 MJT)", description: "Piezo enjektörlerin tıkanması veya sızıntısı. Rölantide titreşim, duman ve güç kaybı.", category: "motor", riskLevel: "HIGH", affectedKm: "80.000+ km", repairCost: "5.000 - 12.000 TL" },
            { id: "linea2-2", title: "Turbo Aktuatör Arızası", description: "Turbo basınç aktuatörünün elektrikli bileşeninin bozulması. Turbo basınç kaybı.", category: "motor", riskLevel: "HIGH", affectedKm: "80.000+ km", repairCost: "4.000 - 10.000 TL" },
            { id: "linea2-3", title: "Boya Dökülmesi", description: "Özellikle tavan, kaput ve bagaj kapağında boya kabarcıklanması ve dökülmesi. Tofaş üretimi modellerde kronik.", category: "govde", riskLevel: "MEDIUM", affectedKm: "3-5 yıl", repairCost: "Lokal boya (2.000 TL)" },
            { id: "linea2-4", title: "Debriyaj Hidrolik Sistemi", description: "Debriyaj merkez ve çevre silindirinde sızıntı. Debriyaj pedalı sertleşir veya zemine yapışır.", category: "sanziman", riskLevel: "MEDIUM", affectedKm: "60.000+ km", repairCost: "2.000 - 4.000 TL" },
            { id: "linea2-5", title: "Direksiyon Kolonu Sesi", description: "Direksiyon çevirirken gelen plastik gıcırtı/tıkırtı sesleri.", category: "suspansiyon", riskLevel: "LOW", affectedKm: "30.000+ km", repairCost: "1.000 - 3.000 TL" },
            { id: "linea2-6", title: "Cam Kaldırma Regülatörü", description: "Cam kaldırma telinin kopması. Cam inip kalkmaz.", category: "govde", riskLevel: "LOW", affectedKm: "50.000+ km", repairCost: "1.000 - 2.000 TL" }
        ],
        pros: ["Çok ucuz alım fiyatı", "Geniş sedan kabin", "1.3 MJT ekonomik", "Bol yedek parça"],
        cons: ["Boya kalitesi çok zayıf", "İç mekan sade", "Değer kaybı yüksek"],
        buyingTips: ["Boya durumunu dikkatli inceleyin", "Enjektör sesi dinleyin", "Debriyaj pedalını test edin"]
    }
,

    // ─── Eski new-cars dosyasından taşındı ───
    {
        id: "fiat-doblo-1-3-multijet-2010",
        slug: "fiat-doblo-1-3-multijet-2010",
        brand: "Fiat",
        model: "Doblo",
        variant: "1.3 Multijet (2. Nesil)",
        years: "2010-2020",
        generation: "263",
        reliabilityScore: 72,
        totalIssues: 6,
        searchCount: 10000,
        expertNote: "Doblo Türkiye'nin en popüler hafif ticarisi. 1.3 Multijet motor milyon km yapabilir ama enjektör ve turbo bakımı gerekir. Sürgülü kapılar yoğun kullanımda sorun çıkarır. Tofaş üretimi, yedek parça bol ve ucuz.",
        issues: [
            { id: "doblo2-1", title: "Enjektör Arızası", description: "1.3 Multijet enjektörlerin tıkanması veya sızıntısı. Rölantide titreşim ve duman.", category: "motor", riskLevel: "HIGH", affectedKm: "100.000+ km", repairCost: "5.000 - 12.000 TL" },
            { id: "doblo2-2", title: "Turbo Yağ Keçesi Kaçağı", description: "Turbo yağ keçelerinden sızıntı. Mavi duman ve yağ tüketimi.", category: "motor", riskLevel: "MEDIUM", affectedKm: "100.000+ km", repairCost: "4.000 - 8.000 TL" },
            { id: "doblo2-3", title: "Sürgülü Kapı Ray/Mekanizma", description: "Sürgülü kapı raylarının aşınması ve kilitleme mekanizmasının bozulması.", category: "govde", riskLevel: "MEDIUM", affectedKm: "60.000+ km", repairCost: "2.000 - 5.000 TL" },
            { id: "doblo2-4", title: "EGR Valfi", description: "EGR valfinde kurum birikimi. Motor performans düşüşü.", category: "motor", riskLevel: "MEDIUM", affectedKm: "60.000+ km", repairCost: "2.000 - 5.000 TL" },
            { id: "doblo2-5", title: "Arka Yaprak Yay Kırılması", description: "Ticari kullanımda arka yaprak yayların aşınması veya kırılması.", category: "suspansiyon", riskLevel: "MEDIUM", affectedKm: "80.000+ km (Ağır yük)", repairCost: "2.000 - 4.000 TL" },
            { id: "doblo2-6", title: "Boya Dökülmesi", description: "Tofaş üretimi boya kalitesi sorunu. Kapı kenarları ve çatıda dökülme.", category: "govde", riskLevel: "LOW", affectedKm: "3-5 yıl", repairCost: "3.000 - 10.000 TL (Boya/Rötuş)" }
        ],
        pros: ["Devasa yük kapasitesi", "Güvenilir 1.3 MJT", "Bol ve ucuz yedek parça", "Çok yönlü kullanım"],
        cons: ["Boya kalitesi zayıf", "Gürültü yalıtımı yok", "Binek konforu düşük"],
        buyingTips: ["Enjektör testini yaptırın", "Sürgülü kapıları açıp kapatın", "Kaporta altı pas kontrolü"]
    }
,
    {
            "id": "fiat-egea-1-6-multijet-sedan",
            "slug": "fiat-egea-1-6-multijet-sedan",
            "brand": "Fiat",
            "model": "Egea Sedan",
            "variant": "1.6 Multijet Lounge",
            "years": "2016-2025",
            "generation": "Tipo (356)",
            "expertNote": "1.6 Multijet 120 HP. Türkiye'nin en çok satan otomobili. Geniş iç mekan, büyük bagaj, düşük yakıt. Multijet motor güvenilir ama debriyaj/volan sorunlarına dikkat.",
            "reliabilityScore": 80,
            "totalIssues": 5,
            "searchCount": 35000,
            "issues": [
                    {
                            "id": "egea16-1",
                            "title": "Çift Kütleli Volan",
                            "description": "Çift kütleli volanın aşınması. Motordan titreşim.",
                            "category": "sanziman",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "80.000+ km",
                            "repairCost": "8.000 - 15.000 TL"
                    },
                    {
                            "id": "egea16-2",
                            "title": "DPF Rejenerasyon",
                            "description": "Şehir içi kullanımda DPF filtresi rejenerasyon sorunu.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Şehir içi",
                            "repairCost": "3.000 - 8.000 TL"
                    },
                    {
                            "id": "egea16-3",
                            "title": "Direksiyon Sesi",
                            "description": "Direksiyon çevirirken gıcırtı. Kolon kaplingi.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "40.000+ km",
                            "repairCost": "1.500 - 3.000 TL"
                    },
                    {
                            "id": "egea16-4",
                            "title": "Arka Süspansiyon Sesi",
                            "description": "Arka süspansiyondan kasiste vuruntu.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "50.000+ km",
                            "repairCost": "2.000 - 4.000 TL"
                    },
                    {
                            "id": "egea16-5",
                            "title": "BlueStar Multimedya",
                            "description": "BlueStar (UConnect) ekranının donması.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Rastgele",
                            "repairCost": "1.500 - 4.000 TL (Yazılım)"
                    }
            ],
            "pros": [
                    "Türkiye'nin en çok satanı",
                    "Dev bagaj",
                    "Düşük yakıt",
                    "Ucuz bakım"
            ],
            "cons": [
                    "Volan maliyeti",
                    "DPF hassasiyeti",
                    "Plastik kalitesi"
            ],
            "buyingTips": [
                    "Volan titreşimi test edin",
                    "DPF taraması yaptırın",
                    "Lounge donanım tercih edin"
            ]
    }
,
    {
            "id": "fiat-doblo-2-1-6-mjt",
            "slug": "fiat-doblo-2-1-6-multijet",
            "brand": "Fiat",
            "model": "Doblo (Mk2)",
            "variant": "1.6 Multijet Premio Plus",
            "years": "2010-2022",
            "generation": "263",
            "expertNote": "1.6 Multijet 105-120 HP. Doblo Türkiye'nin en çok satan hafif ticarisi. Geniş iç mekan, kayan kapılar. Motor güvenilir ama volan ve turbo bakımı önemli.",
            "reliabilityScore": 78,
            "totalIssues": 5,
            "searchCount": 15000,
            "issues": [
                    {
                            "id": "dob2-1",
                            "title": "Çift Kütleli Volan",
                            "description": "Çift kütleli volanın aşınması. Rölantide titreşim.",
                            "category": "sanziman",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "100.000+ km",
                            "repairCost": "6.000 - 12.000 TL"
                    },
                    {
                            "id": "dob2-2",
                            "title": "Turbo Aktuatör",
                            "description": "Turbo basınç aktuatörü arızası.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "80.000+ km",
                            "repairCost": "4.000 - 8.000 TL"
                    },
                    {
                            "id": "dob2-3",
                            "title": "Sürgülü Kapı Mekanizması",
                            "description": "Sürgülü kapı kablo ve rulmanlı mekanizma aşınması.",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "80.000+ km",
                            "repairCost": "3.000 - 6.000 TL"
                    },
                    {
                            "id": "dob2-4",
                            "title": "EGR Karbon",
                            "description": "EGR valfinde kurum birikimi.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "80.000+ km",
                            "repairCost": "2.000 - 5.000 TL"
                    },
                    {
                            "id": "dob2-5",
                            "title": "Arka Yaprak Yay",
                            "description": "Arka yaprak yaylarının yorulması.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "Yüklü kullanım",
                            "repairCost": "2.000 - 4.000 TL"
                    }
            ],
            "pros": [
                    "Geniş iç mekan",
                    "Kayan kapılar",
                    "Ekonomik Multijet",
                    "Ucuz bakım"
            ],
            "cons": [
                    "Volan maliyeti",
                    "Gürültü yalıtımı zayıf",
                    "İç mekan plastik"
            ],
            "buyingTips": [
                    "Volan titreşimi kontrol edin",
                    "Premio Plus donanım",
                    "Turbo sesi dinleyin"
            ]
    }
,
    {
            "id": "fiat-linea-1-3-mjt-2",
            "slug": "fiat-linea-1-3-multijet-active",
            "brand": "Fiat",
            "model": "Linea",
            "variant": "1.3 Multijet Active Plus",
            "years": "2007-2016",
            "generation": "323",
            "expertNote": "1.3 Multijet 75-95 HP. Linea Türkiye'de Tofaş tarafından üretildi. Ucuz sedan. Motor güvenilir ama iç mekan ve yapı kalitesi zayıf. Yedek parçası çok bol ve ucuz.",
            "reliabilityScore": 74,
            "totalIssues": 5,
            "searchCount": 12000,
            "issues": [
                    {
                            "id": "linea2-1",
                            "title": "Çift Kütleli Volan",
                            "description": "Volan aşınması. Rölantide titreşim.",
                            "category": "sanziman",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "80.000+ km",
                            "repairCost": "4.000 - 8.000 TL"
                    },
                    {
                            "id": "linea2-2",
                            "title": "Turbo Aktuatör",
                            "description": "Turbo basınç aktuatörü arızası.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "80.000+ km",
                            "repairCost": "3.000 - 6.000 TL"
                    },
                    {
                            "id": "linea2-3",
                            "title": "Cam Kaldırma",
                            "description": "Cam kaldırma mekanizmasının bozulması.",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "50.000+ km",
                            "repairCost": "1.000 - 2.000 TL"
                    },
                    {
                            "id": "linea2-4",
                            "title": "Kaporta Pası",
                            "description": "Kapı altları ve davlumbazda pas başlaması.",
                            "category": "govde",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "5+ yıl",
                            "repairCost": "3.000 - 10.000 TL (Boya/Rötuş)"
                    },
                    {
                            "id": "linea2-5",
                            "title": "Ön Süspansiyon",
                            "description": "Ön alt kol bilyası aşınması.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "50.000+ km",
                            "repairCost": "1.000 - 2.000 TL"
                    }
            ],
            "pros": [
                    "Çok ucuz",
                    "Tofaş üretimi",
                    "Bol yedek parça",
                    "Basit motor"
            ],
            "cons": [
                    "İç mekan kalitesi çok düşük",
                    "Pas sorunu",
                    "Güvenlik düşük"
            ],
            "buyingTips": [
                    "Pas kontrolü şart",
                    "Volan titreşimi test edin",
                    "Boyalı panel kontrol edin"
            ]
    }
,
    {
            "id": "fiat-500l-1-3-mjt-pop",
            "slug": "fiat-500l-1-3-multijet-popstar",
            "brand": "Fiat",
            "model": "500L",
            "variant": "1.3 Multijet Popstar",
            "years": "2013-2022",
            "generation": "330",
            "expertNote": "1.3 Multijet 95 HP. 500L adına aldanmayın, 500 ile alakası yok. Büyük ve ağır MPV. Motor güçsüz, şanzıman ve elektronik sorunları çok. TCT robotize şanzıman felaket.",
            "reliabilityScore": 60,
            "totalIssues": 7,
            "searchCount": 6000,
            "issues": [
                    {
                            "id": "500l-1",
                            "title": "TCT Robotize Şanzıman",
                            "description": "TCT (çift kavramalı) robotize şanzımanda KRONİK sarsıntı ve titreme. Kavrama aşınması çok hızlı.",
                            "category": "sanziman",
                            "riskLevel": "CRITICAL",
                            "affectedKm": "30.000+ km",
                            "repairCost": "15.000 - 30.000 TL"
                    },
                    {
                            "id": "500l-2",
                            "title": "Turbo Aktuatör",
                            "description": "1.3 Multijet turbo aktuatörü arızası. Güç kaybı.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "60.000+ km",
                            "repairCost": "4.000 - 8.000 TL"
                    },
                    {
                            "id": "500l-3",
                            "title": "Çift Kütleli Volan",
                            "description": "Volan aşınması.",
                            "category": "sanziman",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "60.000+ km",
                            "repairCost": "5.000 - 10.000 TL"
                    },
                    {
                            "id": "500l-4",
                            "title": "Elektrik Arızaları",
                            "description": "Rastgele arıza lambaları, sensör hataları.",
                            "category": "elektronik",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Kronik",
                            "repairCost": "3.000 - 10.000 TL"
                    },
                    {
                            "id": "500l-5",
                            "title": "EGR Tıkanması",
                            "description": "EGR valfinde kurum birikimi.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "60.000+ km",
                            "repairCost": "2.000 - 5.000 TL"
                    },
                    {
                            "id": "500l-6",
                            "title": "Süspansiyon Aşınması",
                            "description": "Ağır gövde nedeniyle süspansiyon parçaları hızla aşınır.",
                            "category": "suspansiyon",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "40.000+ km",
                            "repairCost": "3.000 - 6.000 TL"
                    },
                    {
                            "id": "500l-7",
                            "title": "UConnect Donma",
                            "description": "UConnect multimedya sistemi donma ve karartma.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Kronik",
                            "repairCost": "1.500 - 4.000 TL (Yazılım)"
                    }
            ],
            "pros": [
                    "Geniş iç mekan",
                    "Pratik MPV",
                    "500 ismi"
            ],
            "cons": [
                    "TCT şanzıman FELAKET",
                    "Motor ağır gövdeye güçsüz",
                    "Elektronik arızalar",
                    "Yüksek bakım maliyeti"
            ],
            "buyingTips": [
                    "TCT ALMAYIN manuel versiyonu arayın",
                    "1.3 motor bu araca güçsüz 1.6 tercih edin",
                    "500L başka bir şey 500 başka"
            ]
    }
,
    {
            "id": "fiat-tempra-1-6-sx",
            "slug": "fiat-tempra-1-6-sx",
            "brand": "Fiat",
            "model": "Tempra",
            "variant": "1.6 SX i.e.",
            "years": "1991-1999",
            "generation": "159",
            "expertNote": "Tipo'nun sedan versiyonu. Tofaş Bursa üretimi. 1.6 8V enjeksiyonlu motor güvenilir. Dönemine göre konforlu sedan. Türkiye'de çok satıldı.",
            "reliabilityScore": 70,
            "totalIssues": 5,
            "searchCount": 10000,
            "issues": [
                    {
                            "id": "tmp-1",
                            "title": "Motor Conta",
                            "description": "Silindir kapağı contasının atması. Hararet problemi.",
                            "category": "motor",
                            "riskLevel": "HIGH",
                            "affectedKm": "150.000+ km",
                            "repairCost": "2.000 - 4.000 TL"
                    },
                    {
                            "id": "tmp-2",
                            "title": "Kaporta Pası",
                            "description": "Kapı altları ve çamurluk bölgesinde paslanma.",
                            "category": "govde",
                            "riskLevel": "HIGH",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "5.000 - 15.000 TL (Boya/Kaynak)"
                    },
                    {
                            "id": "tmp-3",
                            "title": "Elektrik Tesisatı",
                            "description": "Elektrik tesisatında yaşlanma kaynaklı kısa devreler.",
                            "category": "elektronik",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "500 - 2.000 TL"
                    },
                    {
                            "id": "tmp-4",
                            "title": "Şanzıman Senkromece",
                            "description": "2. vites senkromece aşınması.",
                            "category": "sanziman",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "100.000+ km",
                            "repairCost": "2.000 - 4.000 TL"
                    },
                    {
                            "id": "tmp-5",
                            "title": "Süspansiyon",
                            "description": "Ön amortisör ve rotillerin aşınması.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "50.000+ km",
                            "repairCost": "1.000 - 2.000 TL"
                    }
            ],
            "pros": [
                    "Tofaş üretimi",
                    "Ucuz bakım",
                    "Sağlam motor",
                    "Geniş sedan"
            ],
            "cons": [
                    "Pas sorunu",
                    "Eski teknoloji",
                    "Güvenlik düşük",
                    "Yedek parça azalıyor"
            ],
            "buyingTips": [
                    "Conta atma geçmişi sorulmalı",
                    "Pas kontrolü şart",
                    "Tesisat kontrolü",
                    "LPG dönüşüm kalitesi"
            ]
    }
,
    {
            "id": "fiat-marea-1-6-elx",
            "slug": "fiat-marea-1-6-16v-elx",
            "brand": "Fiat",
            "model": "Marea",
            "variant": "1.6 16V ELX",
            "years": "1997-2007",
            "generation": "185",
            "expertNote": "Tempra'nın halefi. 1.6 16V 103 HP motor canlı. Tofaş Bursa üretimi. Dönemine göre lüks donanım ve iyi sürüş. Weekend SW versiyonu çok aranır.",
            "reliabilityScore": 65,
            "totalIssues": 6,
            "searchCount": 12000,
            "issues": [
                    {
                            "id": "mar-1",
                            "title": "Yağ Keçesi Kaçağı",
                            "description": "Motor yağ keçelerinden sızıntı. Valf kapağı ve karter.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "100.000+ km",
                            "repairCost": "1.000 - 3.000 TL"
                    },
                    {
                            "id": "mar-2",
                            "title": "Elektrik Arızaları",
                            "description": "Gösterge paneli, cam kaldırma ve merkezi kilit arızaları.",
                            "category": "elektronik",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Kronik",
                            "repairCost": "500 - 2.000 TL"
                    },
                    {
                            "id": "mar-3",
                            "title": "Kaporta Pası",
                            "description": "Kapı altları, çamurluklar ve eşik bölgesinde paslanma.",
                            "category": "govde",
                            "riskLevel": "HIGH",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "5.000 - 15.000 TL (Boya/Kaynak)"
                    },
                    {
                            "id": "mar-4",
                            "title": "Triger Kayışı",
                            "description": "Triger kayışı kopması. Motor hasarı riski.",
                            "category": "motor",
                            "riskLevel": "CRITICAL",
                            "affectedKm": "60.000 km",
                            "repairCost": "1.500 - 3.000 TL"
                    },
                    {
                            "id": "mar-5",
                            "title": "Radyatör Fan Motoru",
                            "description": "Radyatör fan motorunun yanması. Hararet.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "800 - 2.000 TL"
                    },
                    {
                            "id": "mar-6",
                            "title": "Arka Davlumbaz Çürümesi",
                            "description": "Arka davlumbaz iç kısmının tamamen çürümesi.",
                            "category": "govde",
                            "riskLevel": "HIGH",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "3.000 - 10.000 TL (Boya/Rötuş)"
                    }
            ],
            "pros": [
                    "Canlı 16V motor",
                    "Tofaş üretimi",
                    "ELX donanım zengin",
                    "Weekend SW çok pratik"
            ],
            "cons": [
                    "Elektrik arızaları",
                    "Pas sorunu ağır",
                    "Triger riski",
                    "Yedek parça azalıyor"
            ],
            "buyingTips": [
                    "Triger ne zaman değişti sorulmalı",
                    "Davlumbaz çürüğü kontrol",
                    "Weekend varsa tercih edin",
                    "Elektrik taraması şart"
            ]
    }
,
    {
            "id": "fiat-linea-1-3-multijet",
            "slug": "fiat-linea-1-3-multijet-pop",
            "brand": "Fiat",
            "model": "Linea",
            "variant": "1.3 Multijet Pop",
            "years": "2007-2017",
            "generation": "323",
            "expertNote": "Fiat 1.3 Multijet 95 HP. Linea Tofaş Bursa üretimi sedan. Pop donanım temel. 1.3 Multijet motor çok ekonomik. Türkiye'de çok satıldı.",
            "reliabilityScore": 73,
            "totalIssues": 5,
            "searchCount": 14000,
            "issues": [
                    {
                            "id": "lin-1",
                            "title": "Turbo",
                            "description": "Turbo yağ kaçağı.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "80.000+ km",
                            "repairCost": "2.000 - 5.000 TL"
                    },
                    {
                            "id": "lin-2",
                            "title": "EGR",
                            "description": "EGR valfi tıkanması.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "60.000+ km",
                            "repairCost": "1.500 - 3.000 TL"
                    },
                    {
                            "id": "lin-3",
                            "title": "Süspansiyon",
                            "description": "Ön amortisör ve bilyalar.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "40.000+ km",
                            "repairCost": "500 - 1.500 TL"
                    },
                    {
                            "id": "lin-4",
                            "title": "Firen Disk",
                            "description": "Ön fren diskleri çarpması.",
                            "category": "fren",
                            "riskLevel": "LOW",
                            "affectedKm": "30.000+ km",
                            "repairCost": "500 - 1.000 TL"
                    },
                    {
                            "id": "lin-5",
                            "title": "Cam Kaldırma",
                            "description": "Cam kaldırma mekanizması.",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "300 - 800 TL"
                    }
            ],
            "pros": [
                    "Bursa üretimi",
                    "Ekonomik Multijet",
                    "Ucuz bakım",
                    "Geniş sedan"
            ],
            "cons": [
                    "Pop donanım fakir",
                    "Plastik kalite",
                    "Sürüş keyfi düşük",
                    "Değer kaybı"
            ],
            "buyingTips": [
                    "1.3 Multijet ekonomik",
                    "Pop yeterli ama Active daha iyi",
                    "Bursa üretimi kaliteli",
                    "Turbo kontrolü"
            ]
    }
,
    {
            "id": "fiat-egea-1-3-multijet",
            "slug": "fiat-egea-1-3-multijet-easy",
            "brand": "Fiat",
            "model": "Egea",
            "variant": "1.3 MultiJet Easy",
            "years": "2015-2024",
            "generation": "356",
            "expertNote": "Fiat 1.3 MultiJet 95 HP. Egea Tofaş Bursa üretimi. Türkiye'nin EN ÇOK SATAN arabası yıllarca. Easy donanım 5 inç ekran, klima, ESP. Sedan, HB, SW versiyonları.",
            "reliabilityScore": 75,
            "totalIssues": 5,
            "searchCount": 25000,
            "issues": [
                    {
                            "id": "ege-1",
                            "title": "Turbo",
                            "description": "Turbo aktuatör arızası.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "100.000+ km",
                            "repairCost": "3.000 - 6.000 TL"
                    },
                    {
                            "id": "ege-2",
                            "title": "EGR",
                            "description": "EGR valfi tıkanması.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "60.000+ km",
                            "repairCost": "1.500 - 3.000 TL"
                    },
                    {
                            "id": "ege-3",
                            "title": "Süspansiyon",
                            "description": "Ön amortisör gıcırtısı.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "30.000+ km",
                            "repairCost": "500 - 1.500 TL"
                    },
                    {
                            "id": "ege-4",
                            "title": "Fren Diskleri",
                            "description": "Ön fren diskleri çarpması.",
                            "category": "fren",
                            "riskLevel": "LOW",
                            "affectedKm": "25.000+ km",
                            "repairCost": "500 - 1.000 TL"
                    },
                    {
                            "id": "ege-5",
                            "title": "Dualogic",
                            "description": "Dualogic robotize şanzıman titreşimi.",
                            "category": "sanziman",
                            "riskLevel": "HIGH",
                            "affectedKm": "40.000+ km",
                            "repairCost": "5.000 - 12.000 TL"
                    }
            ],
            "pros": [
                    "Satış şampiyonu",
                    "Bursa üretimi",
                    "Ekonomik",
                    "Sedan/HB/SW seçeneği"
            ],
            "cons": [
                    "Dualogic şanzıman KABUSu",
                    "Plastik kalite düşük",
                    "İç mekan sade",
                    "Fren diskleri çabuk biter"
            ],
            "buyingTips": [
                    "MANUEL ŞANZIMAN ŞART",
                    "Dualogic'ten KAÇININ",
                    "Easy yeterli ama Urban daha iyi",
                    "HB versiyonu sportif"
            ]
    }
,
    {
            "id": "fiat-500x-1-6-multijet",
            "slug": "fiat-500x-1-6-multijet-cross-plus",
            "brand": "Fiat",
            "model": "500X",
            "variant": "1.6 MultiJet Cross Plus",
            "years": "2015-2022",
            "generation": "334",
            "expertNote": "1.6 MultiJet 120 HP. 500X B-SUV segment. Jeep Renegade platformu. Cross Plus donanım 7 inç Uconnect, geri kamera, çift bölgeli klima.",
            "reliabilityScore": 72,
            "totalIssues": 5,
            "searchCount": 8000,
            "issues": [
                    {
                            "id": "500x-1",
                            "title": "DDCT Şanzıman",
                            "description": "DDCT çift kavrama şanzıman titreşimi.",
                            "category": "sanziman",
                            "riskLevel": "HIGH",
                            "affectedKm": "40.000+ km",
                            "repairCost": "8.000 - 18.000 TL"
                    },
                    {
                            "id": "500x-2",
                            "title": "Turbo",
                            "description": "Turbo aktuatör arızası.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "100.000+ km",
                            "repairCost": "3.000 - 6.000 TL"
                    },
                    {
                            "id": "500x-3",
                            "title": "EGR",
                            "description": "EGR valfi tıkanması.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "80.000+ km",
                            "repairCost": "2.000 - 4.000 TL"
                    },
                    {
                            "id": "500x-4",
                            "title": "Infotainment",
                            "description": "Uconnect donması.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Kronik",
                            "repairCost": "500 - 2.000 TL"
                    },
                    {
                            "id": "500x-5",
                            "title": "Süspansiyon",
                            "description": "Ön amortisör gıcırtısı.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "40.000+ km",
                            "repairCost": "1.000 - 2.000 TL"
                    }
            ],
            "pros": [
                    "Şık tasarım",
                    "500 ikonu",
                    "Cross Plus zengin",
                    "Jeep platformu"
            ],
            "cons": [
                    "DDCT riski",
                    "EGR sorunu",
                    "Parça pahalı",
                    "Yakıt tüketimi"
            ],
            "buyingTips": [
                    "MANUEL tercih edin",
                    "DDCT'den kaçının",
                    "Cross Plus en iyi donanım",
                    "1.6 MultiJet yeterli"
            ]
    }
];
