import { Car } from '@/types';

export const renaultCars: Car[] = [
    {
        id: "renault-clio-5-1-0-tce",
        slug: "renault-clio-5-1-0-tce",
        brand: "Renault",
        model: "Clio",
        variant: "1.0 TCe",
        years: "2019-2024",
        generation: "Clio V",
        price: 1350000,
        reliabilityScore: 76,
        totalIssues: 6,
        searchCount: 14300,
        issues: [
            {
                id: "clio-1",
                title: "Turbo Wastegate Sesi",
                description: "Gazdan ayağınızı çektiğinizde gelen metalik şıngırtı sesi (Kronik ama zararsız).",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Sıfır km'den itibaren",
                repairCost: "3.500 TL (Klips) / 12.000 TL Değişim"
            },
            {
                id: "clio-2",
                title: "Yakıt Pompası Uğultusu",
                description: "Arka koltuk altından gelen yüksek frekanslı ses.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "40.000+ km",
                repairCost: "8.000 - 16.000 TL"
            },
            {
                id: "clio-3",
                title: "Start-Stop Devreye Girmiyor",
                description: "Akü voltaj hassasiyeti nedeniyle sistemin çalışmaması.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "4.000 - 8.000 TL (Akü)"
            },
            {
                id: "clio-4",
                title: "Devirdaim Su Kaçağı",
                description: "Termostat gövdesinden veya devirdaimden su sızdırması.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "70.000+ km",
                repairCost: "6.000 - 12.000 TL"
            },
            {
                id: "clio-5-yeni-1",
                title: "Şanzıman Silkelemesi (X-Tronic)",
                description: "Düşük hızlarda veya dur-kalk trafikte CVT şanzımanın kararsızlığı.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "1.500 - 4.000 TL (Yazılım)"
            },
            {
                id: "clio-5-yeni-2",
                title: "Multimedya Donması",
                description: "Ekranın siyah olması veya Apple CarPlay bağlantı kopması.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "1.500 - 4.000 TL (Yazılım)"
            }
        ],
        pros: [
            "Modern iç mekan",
            "Düşük vergi",
            "Seri X-Tronic şanzıman"
        ],
        cons: [
            "Arka diz mesafesi dar",
            "Rüzgar sesi (110+ km/s)"
        ],
        buyingTips: [
            "Wastegate sesine takılmayın (karakteristik)",
            "Multimedya ekranı donuyor mu bakın"
        ]
    },
    {
        id: "renault-megane-4-1-3-tce",
        slug: "renault-megane-4-1-3-tce",
        brand: "Renault",
        model: "Megane",
        variant: "1.3 TCe",
        years: "2016-2023",
        generation: "Megane IV",
        price: 1600000,
        reliabilityScore: 84,
        totalIssues: 6,
        searchCount: 16500,
        issues: [
            {
                id: "megane-4",
                title: "Termostat/Devirdaim Kaçağı",
                description: "Plastik termostat gövdesinde çatlak ve su kaçağı (Kronik).",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "60.000+ km",
                repairCost: "6.000 - 12.000 TL"
            },
            {
                id: "megane-edc",
                title: "EDC Kararsızlığı / Ses",
                description: "Vites geçişlerinde metalik ses veya kararsızlık (Özellikle 1-2 arası).",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "Karakteristik",
                repairCost: "1.500 - 4.000 TL (Yazılım)"
            },
            {
                id: "megane-link",
                title: "Z Rot Sesleri",
                description: "Ön takımdan gelen lakırtı. Z rotlar çabuk bozulur.",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "40.000+ km",
                repairCost: "1.500 - 3.500 TL"
            },
            {
                id: "megane-5",
                title: "Turbo Hortumu Çıkması",
                description: "Turbo basınç hortumunun kelepçeden kurtulması.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "1.000 - 3.000 TL"
            },
            {
                id: "megane-6",
                title: "Emme Manifoldu Karbon",
                description: "Direkt enjeksiyon kaynaklı emme subaplarında kurum birikmesi.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "60.000+ km",
                repairCost: "8.000 - 15.000 TL"
            },
            {
                id: "megane-trim",
                title: "Trim Sesleri (C Sütunu)",
                description: "C sütunu ve kapı içlerinden gelen plastik sesleri.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "2.000 - 5.000 TL"
            }
        ],
        pros: [
            "Çok güçlü motor (140hp Mercedes ortak)",
            "Sessiz kabin",
            "Şık tasarım"
        ],
        cons: [
            "EDC şanzıman narinliği",
            "Arka süspansiyon torsiyon"
        ],
        buyingTips: [
            "Yokuş kalkışında titreme var mı bakın",
            "EDC vites geçişlerini kontrol edin"
        ]
    },
    {
        id: "renault-symbol-1-5-dci",
        slug: "renault-symbol-1-5-dci",
        brand: "Renault",
        model: "Symbol",
        variant: "1.5 dCi",
        years: "2013-2021",
        generation: "III",
        reliabilityScore: 88,
        totalIssues: 7,
        searchCount: 7800,
        issues: [
            {
                id: "symbol-3",
                title: "Teyp Ekranı Silinmesi",
                description: "Hava veya teyp ısınınca ekranın yazılarının kaybolması (Kronik).",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "500 - 2.000 TL (Film)"
            },
            {
                id: "symbol-6",
                title: "Enjektör Arızası",
                description: "Kalitesiz yakıt sonucu enjektör tıkanması ve 'Enjeksiyonu Kontrol Ettirin' uyarısı.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "100.000+ km",
                repairCost: "15.000 - 25.000 TL"
            },
            {
                id: "symbol-1",
                title: "Turbo Hortum Terlemesi",
                description: "Turbo intercooler hortumunda yağ terlemesi (Kronik ama zararsız).",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Her km",
                repairCost: "1.000 - 2.000 TL"
            },
            {
                id: "symbol-7",
                title: "Far Kolu Arızası",
                description: "Sinyal verirken farların sönmesi veya kornanın çalışmaması.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "2.000 - 4.000 TL"
            },
            {
                id: "symbol-5",
                title: "EGR Tıkanıklığı",
                description: "Şehir içi kullanımda EGR valfinin kurum bağlaması ve çekiş düşüklüğü.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "60.000+ km",
                repairCost: "4.000 - 8.000 TL"
            },
            {
                id: "symbol-8",
                title: "Direksiyon Soyulması",
                description: "Direksiyon simidinin erken soyulması ve ele yapışması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "50.000+ km",
                repairCost: "5.000 - 15.000 TL (Kaplama)"
            },
            {
                id: "symbol-4",
                title: "Triger Kayışı Risk",
                description: "4 yıl / 60.000 km periyodu aşılırsa kopma riski çok yüksek.",
                category: "motor",
                riskLevel: "CRITICAL",
                affectedKm: "Bakım Aksarsa",
                repairCost: "20.000 - 50.000 TL (Motor Revizyon)"
            }
        ],
        pros: [
            "Yakıt cimrisi",
            "Büyük bagaj",
            "Ucuz parça"
        ],
        cons: [
            "Güvenlik zayıf",
            "Konfor düşük",
            "Yalıtım yok"
        ],
        buyingTips: [
            "Taksi çıkması mı kontrol edin",
            "Motor kapağını açıp yağ kaçaklarına bakın"
        ]
    },
    {
        id: "renault-clio-4-1-5-dci",
        slug: "renault-clio-4-1-5-dci",
        brand: "Renault",
        model: "Clio",
        variant: "Clio 4 1.5 dCi",
        years: "2012-2019",
        generation: "IV",
        reliabilityScore: 82,
        totalIssues: 5,
        searchCount: 13000,
        issues: [
            {
                id: "clio4-1",
                title: "Rüzgar Sesi (Ayna/Kelebek Camı)",
                description: "90 km/s üzeri hızlarda kapı fitillerinden ve aynalardan gelen rüzgar uğultusu.",
                category: "govde",
                riskLevel: "MEDIUM",
                affectedKm: "Tüm Kilometreler",
                repairCost: "1.000 - 3.000 TL (Fitil)"
            },
            {
                id: "clio4-2",
                title: "EDC Şanzıman Beyni",
                description: "Vites geçişlerinde kararsızlık ve 'Vites Kutusu Hararet' uyarısı.",
                category: "sanziman",
                riskLevel: "HIGH",
                affectedKm: "80.000+ km",
                repairCost: "20.000 - 35.000 TL"
            },
            {
                id: "clio4-3",
                title: "Plastik Aksam Sesleri",
                description: "Göğüs ve kapı döşemelerinden gelen trim sesleri.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "1.000 - 3.000 TL (Yalıtım)"
            },
            {
                id: "clio4-4",
                title: "Start-Stop Arızası",
                description: "Akü voltajı düşüklüğü nedeniyle start-stop sisteminin çalışmaması.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "3.000 - 8.000 TL (Tamir)"
            },
            {
                id: "clio4-5",
                title: "Yakıt Şamandıra Sesi",
                description: "Depo dolu olduğunda arkadan gelen dalgalanma sesi.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Depo Fulken",
                repairCost: "0 TL (Tasarım Kaynaklı)"
            }
        ],
        pros: [
            "Tasarım",
            "Yakıt tüketimi",
            "İkinci el"
        ],
        cons: [
            "İç mekan kalitesi",
            "Arka camlar manuel"
        ],
        buyingTips: [
            "EDC vites geçişlerini kontrol edin",
            "Rüzgar sesini dinleyin"
        ]
    },
    {
        id: "renault-taliant-1-0-turbo",
        slug: "renault-taliant-1-0-turbo",
        brand: "Renault",
        model: "Taliant",
        variant: "1.0 Turbo",
        years: "2021-2024",
        generation: "Mk1",
        reliabilityScore: 79,
        totalIssues: 5,
        searchCount: 5000,
        issues: [
            {
                id: "taliant-1",
                title: "CVT Şanzıman Isınması",
                description: "Uzun süreli yokuşlarda veya sıkışık trafikte şanzıman ısınma uyarısı.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "Ağır şartlar",
                repairCost: "0 TL (Karakteristik)"
            },
            {
                id: "taliant-2",
                title: "Turbo Arızası ve Ses",
                description: "Turbo sisteminden gelen anormal sesler ve güç kaybı (Revizyon gerekebilir).",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "40.000+ km",
                repairCost: "25.000 - 45.000 TL"
            },
            {
                id: "taliant-3",
                title: "SOS Acil Çağrı Hatası",
                description: "Gösterge panelinde 'SOS Arızası' uyarısının belirmesi.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "1.500 - 4.000 TL (Yazılım)"
            },
            {
                id: "taliant-4",
                title: "Multimedya Ekran Donması",
                description: "Ekranın kilitlenmesi veya tepki vermemesi (Apple CarPlay/Android Auto).",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "1.500 - 4.000 TL (Yazılım)"
            },
            {
                id: "taliant-5",
                title: "Yüksek Yakıt Tüketimi",
                description: "Şehir içi kullanımda fabrika verisinin çok üzerinde yakıt tüketimi (8-9L).",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Sürekli",
                repairCost: "0 TL (Karakteristik)"
            }
        ],
        pros: [
            "Geniş bagaj",
            "LPG uyumlu motor",
            "Modern görünüm"
        ],
        cons: [
            "Dacia altyapısı",
            "Malzeme kalitesi"
        ],
        buyingTips: [
            "CVT şanzımanı yokuşta deneyin"
        ]
    },
    {
        id: "renault-captur-1-3-tce",
        slug: "renault-captur-1-3-tce",
        brand: "Renault",
        model: "Captur",
        variant: "1.3 TCe",
        years: "2020-2024",
        generation: "II",
        reliabilityScore: 80,
        totalIssues: 5,
        searchCount: 8000,
        issues: [
            {
                id: "captur-1",
                title: "EDC Şanzıman Kararsızlığı",
                description: "Düşük hızlarda vites geçişlerinde silkeleme ve ses yapması.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "40.000+ km",
                repairCost: "20.000 - 35.000 TL (Kavrama)"
            },
            {
                id: "captur-3",
                title: "Yağ Eksiltme (1.3 TCe)",
                description: "Bazı 1.3 TCe motorlarda 10.000 km öncesi yağ seviyesi uyarısı.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "İlk 20.000 km",
                repairCost: "2.000 - 5.000 TL (Servis)"
            },
            {
                id: "captur-4",
                title: "Termostat Gövdesi Kaçağı",
                description: "Plastik termostat gövdesinden su sızdırması.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "60.000+ km",
                repairCost: "8.000 - 15.000 TL"
            },
            {
                id: "captur-2",
                title: "Multimedya Donması",
                description: "EasyLink ekranın kararması veya donması.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "1.500 - 4.000 TL (Yazılım)"
            },
            {
                id: "captur-5",
                title: "Trim Sesleri",
                description: "B sütunu ve bagaj kapağından gelen plastik sesleri.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "1.000 - 3.000 TL (Yalıtım)"
            }
        ],
        pros: [
            "Kayar arka koltuklar",
            "Güçlü motor",
            "Kişiselleştirme"
        ],
        cons: [
            "Süspansiyon sert",
            "Yalıtım"
        ],
        buyingTips: [
            "Start-stop çalışıyor mu?",
            "Vites geçişleri sarsıntılı mı?"
        ]
    },
    {
        id: "renault-austral-1-3-tce",
        slug: "renault-austral-1-3-tce",
        brand: "Renault",
        model: "Austral",
        variant: "1.3 TCe Mild Hybrid",
        years: "2022-2024",
        generation: "I",
        reliabilityScore: 85,
        totalIssues: 5,
        searchCount: 12000,
        issues: [
            {
                id: "austral-1",
                title: "OpenR Link Ekran Donması",
                description: "Multimedya ekranının kilitlenmesi, kararması veya tepkisiz kalması.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "1.500 - 4.000 TL (Yazılım)"
            },
            {
                id: "austral-2",
                title: "Trim ve Konsol Sesleri",
                description: "Özellikle orta konsol ve kapı içlerinden gelen gıcırtı sesleri.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Sıfırdan itibaren",
                repairCost: "1.000 - 3.000 TL (Yalıtım)"
            },
            {
                id: "austral-3",
                title: "Rüzgar Sesi (110 km/s+)",
                description: "Yüksek hızlarda A sütunu ve aynalardan gelen rüzgar uğultusu.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Yüksek Hız",
                repairCost: "1.000 - 3.000 TL (Fitil)"
            },
            {
                id: "austral-4",
                title: "Termostat/Devirdaim Kaçağı",
                description: "Soğutma sıvısı eksiltme ve hararet uyarısı (Parça revizyonu gerekebilir).",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "50.000+ km",
                repairCost: "10.000 - 20.000 TL"
            },
            {
                id: "austral-5",
                title: "12V Akü Hatası",
                description: "Mild Hybrid sistemine bağlı 12V akü uyarısı ve start-stop arızası.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "1.500 - 4.000 TL (Yazılım)"
            }
        ],
        pros: [
            "Google işletim sistemi",
            "Arka koltuk diz mesafesi",
            "4Control"
        ],
        cons: [
            "Sert sürüş",
            "Trim sesleri"
        ],
        buyingTips: [
            "Ekranı kurcalayın donma var mı?",
            "4Control sistemini test edin"
        ]
    },
    {
        id: "renault-kangoo-1-5-dci",
        slug: "renault-kangoo-1-5-dci",
        brand: "Renault",
        model: "Kangoo",
        variant: "1.5 dCi Touch",
        years: "2013-2020",
        generation: "III",
        expertNote: "Ticari araçların en konforlusu. Süspansiyonu binek gibidir. 1.5 dCi motor sorunsuzdur. Multix versiyonları aile kullanımı için idealdir.",
        price: 600000,
        reliabilityScore: 88,
        totalIssues: 4,
        searchCount: 35000,
        issues: [
            {
                id: "kangoo-1",
                title: "Sürgülü Kapı",
                description: "Arka sürgülü kapı ray rulmanlarının ses yapması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "1.000 - 2.000 TL"
            },
            {
                id: "kangoo-2",
                title: "EGR Valfi",
                description: "Kurum bağlama ve çekiş düşüklüğü.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "3.000 - 5.000 TL"
            },
            {
                id: "kangoo-1-5-dci-auto-3",
                title: "DPF Tıkanması",
                description: "Şehir içi kısa mesafe kullanımda DPF filtresinin dolması.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Şehir içi kullanım",
                repairCost: "5.000 - 12.000 TL"
            },
            {
                id: "kangoo-1-5-dci-auto-4",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
            }
        ],
        pros: [
            "Konfor",
            "Geniş görüş açısı",
            "Yakıt"
        ],
        cons: [
            "Rüzgar sesi",
            "Plastik kalitesi"
        ],
        buyingTips: [
            "Arka kapı kilitleri çalışıyor mu?",
            "Klima soğutuyor mu?"
        ]
    },
    {
        id: "renault-fluence-1-5-dci",
        slug: "renault-fluence-1-5-dci",
        brand: "Renault",
        model: "Fluence",
        variant: "1.5 dCi EDC",
        years: "2010-2016",
        generation: "L38",
        expertNote: "Makam aracı da olur, taksi de. Motoru (K9K) ölümsüzdür ama şanzımanı (EDC) narin. Vites beynine dikkat et, gerisi teferruat.",
        price: 700000,
        reliabilityScore: 82,
        totalIssues: 5,
        searchCount: 25000,
        issues: [
            {
                id: "fluence-1",
                title: "EDC Beyni",
                description: "Şanzıman beyninin ısınması ve \"Vites kutusunu kontrol ettirin\" uyarısı.",
                category: "sanziman",
                riskLevel: "HIGH",
                affectedKm: "100.000 - 150.000 km",
                repairCost: "20.000 - 35.000 TL"
            },
            {
                id: "fluence-3",
                title: "Soyulan Tuşlar",
                description: "Teyp ve klima tuşlarının üzerindeki kaplamanın soyulması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "3.000 - 10.000 TL (Boya/Rötuş)"
            },
            {
                id: "fluence-2",
                title: "Kapı Gergisi",
                description: "Kapıyı açarken gelen \"çat çat\" sesi (Kronik).",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "1.500 TL"
            },
            {
                id: "fluence-1-5-dci-auto-4",
                title: "DPF Tıkanması",
                description: "Şehir içi kısa mesafe kullanımda DPF filtresinin dolması.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Şehir içi kullanım",
                repairCost: "5.000 - 12.000 TL"
            },
            {
                id: "fluence-1-5-dci-auto-5",
                title: "DCT Kavrama Titremesi",
                description: "Çift kavramalı şanzımanda düşük hızlarda titreşim.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "40.000+ km",
                repairCost: "10.000 - 25.000 TL"
            }
        ],
        pros: [
            "Çok geniş iç hacim",
            "Az yakar",
            "Parçası ucuz"
        ],
        cons: [
            "EDC şanzıman riski",
            "Yalıtım zayıf",
            "Yol tutuş (gemi gibi sallanır)"
        ],
        buyingTips: [
            "Yokuşta geri kaçırıyor mu?",
            "Kapı gergilerinden ses geliyor mu?"
        ]
    },
    {
        id: "renault-talisman-1-6-dci",
        slug: "renault-talisman-1-6-dci",
        brand: "Renault",
        model: "Talisman",
        variant: "1.6 dCi Icon",
        years: "2016-2020",
        generation: "L2M",
        expertNote: "Latitude'un yerine geldi, Passat'a rakip dediler ama arka süspansiyon sert. 4Control olanı virajda tren gibidir ancak arıza yaparsa ocağına incir ağacı diker.",
        price: 1250000,
        reliabilityScore: 75,
        totalIssues: 4,
        searchCount: 16000,
        issues: [
            {
                id: "talisman-1",
                title: "4Control Gıcırtısı",
                description: "Arka teker yönlendirme sisteminden gelen sesler (Pahalı onarım).",
                category: "suspansiyon",
                riskLevel: "HIGH",
                affectedKm: "60.000+ km",
                repairCost: "40.000 - 80.000 TL"
            },
            {
                id: "talisman-4",
                title: "EGR Soğutucu",
                description: "1.6 dCi 160hp çift turbolu motorda egzoz manifoldu çatlağı.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "100.000+ km",
                repairCost: "15.000 - 25.000 TL"
            },
            {
                id: "talisman-2",
                title: "R-Link 2 Donması",
                description: "Büyük dikey ekranın kararması ve dokunmatik kaybı.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "5.000 - 10.000 TL"
            },
            {
                id: "talisman-3",
                title: "Amortisör Sesi",
                description: "Ön amortisörlerden gelen lakırtı (Kronik).",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "40.000+ km",
                repairCost: "6.000 - 12.000 TL"
            }
        ],
        pros: [
            "4Control yol tutuş",
            "Masajlı koltuklar",
            "Heybetli tasarım"
        ],
        cons: [
            "İkinci eli çok zayıf",
            "Yedek parça pahalı",
            "Rüzgar sesi"
        ],
        buyingTips: [
            "4Control ışığı yanıyor mu?",
            "Ön takımdan ses geliyor mu?"
        ]
    },
    {
        id: "renault-koleos-1-6-dci",
        slug: "renault-koleos-1-6-dci",
        brand: "Renault",
        model: "Koleos",
        variant: "1.6 dCi Icon",
        years: "2016-2020",
        generation: "II",
        expertNote: "Nissan X-Trail'in Renault logolu hali. Motor ve şanzıman aynıdır. Büyük ve heybetlidir. 1.6 dCi 130hp motor güçlüdür ve zincirlidir.",
        price: 1200000,
        reliabilityScore: 85,
        totalIssues: 4,
        searchCount: 18000,
        issues: [
            {
                id: "koleos-1",
                title: "X-Tronic Şanzıman",
                description: "CVT şanzımanın yüksek tork altında ısınması.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "Zorlu kullanım",
                repairCost: "20.000 - 50.000 TL (Motor Revizyon)"
            },
            {
                id: "koleos-2",
                title: "Elektrikli Bagaj",
                description: "Bagaj kapağının sensör arızası.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "2.000 - 4.000 TL"
            },
            {
                id: "koleos-1-6-dci-auto-3",
                title: "DPF Tıkanması",
                description: "Şehir içi kısa mesafe kullanımda DPF filtresinin dolması.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Şehir içi kullanım",
                repairCost: "5.000 - 12.000 TL"
            },
            {
                id: "koleos-1-6-dci-auto-4",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
            }
        ],
        pros: [
            "Heybetli tasarım",
            "Geniş iç hacim",
            "Donanım"
        ],
        cons: [
            "İkinci eli yavaş",
            "CVT şanzıman karakteri",
            "Fiyat"
        ],
        buyingTips: [
            "4x4 sistemi (varsa) çalışıyor mu?",
            "Şanzıman yağı değişmiş mi?"
        ]
    },
    {
        id: "renault-latitude-1-5-dci",
        slug: "renault-latitude-1-5-dci",
        brand: "Renault",
        model: "Latitude",
        variant: "1.5 dCi Privilege",
        years: "2011-2015",
        generation: "L70",
        expertNote: "Renault'un makam aracı denemesi. Samsung SM5 ile kardeştir. Konforu E segmentini aratmaz, donanımı çok doludur. 1.5 dCi motor bu kasayı taşımakta biraz zorlanır ama ekonomiktir.",
        price: 650000,
        reliabilityScore: 84,
        totalIssues: 5,
        searchCount: 15000,
        issues: [
            {
                id: "latitude-3",
                title: "Ön Takım",
                description: "Ağır burun yapısından dolayı salıncak burçlarının erken yıpranması.",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "60.000+ km",
                repairCost: "2.000 - 4.000 TL"
            },
            {
                id: "latitude-1",
                title: "Cam Tavan Perdesi",
                description: "Panoramik tavan perdesinin mekanizmasının bozulması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "3.000 - 5.000 TL"
            },
            {
                id: "latitude-2",
                title: "Partikül Filtresi",
                description: "Şehir içi kullanımda DPF tıkanması.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "5.000 - 10.000 TL"
            },
            {
                id: "latitude-1-5-dci-auto-4",
                title: "DPF Tıkanması",
                description: "Şehir içi kısa mesafe kullanımda DPF filtresinin dolması.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Şehir içi kullanım",
                repairCost: "5.000 - 12.000 TL"
            },
            {
                id: "latitude-1-5-dci-auto-5",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
            }
        ],
        pros: [
            "Makam aracı konforu",
            "Masajlı koltuk (Privilege)",
            "Fiyat/Performans"
        ],
        cons: [
            "İkinci eli yavaş",
            "Hantal (1.5 dCi)",
            "Parça biraz pahalı"
        ],
        buyingTips: [
            "Masajlı koltuk çalışıyor mu?",
            "Cam tavan perdesi sağlam mı?"
        ]
    },
    {
        id: "renault-megane-3",
        slug: "renault-megane-3-1-5-dci",
        brand: "Renault",
        model: "Megane",
        variant: "1.5 dCi",
        years: "2009-2016",
        generation: "Mk3",
        reliabilityScore: 88,
        totalIssues: 4,
        searchCount: 15000,
        issues: [
            {
                id: "meg3-1",
                title: "Enjektör",
                description: "Enjektör şakırtısı ve duman atma.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "150.000+ km",
                repairCost: "10.000 TL"
            },
            {
                id: "meg3-2",
                title: "Kart Okuyucu",
                description: "Kartı görmeme sorunu.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "2.000 TL"
            },
            {
                id: "megane-3-1-5-dci-auto-3",
                title: "DPF Tıkanması",
                description: "Şehir içi kısa mesafe kullanımda DPF filtresinin dolması.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Şehir içi kullanım",
                repairCost: "5.000 - 12.000 TL"
            },
            {
                id: "megane-3-1-5-dci-auto-4",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
            }
        ],
        pros: [
            "Yol tutuş",
            "Yakıt",
            "Dayanıklılık"
        ],
        cons: [
            "İç mekan kalitesi",
            "Ses yalıtımı"
        ],
        buyingTips: [
            "Coupe versiyonu çok şıktır ama arkası dardır."
        ]
    },
    {
        id: "renault-kadjar-1-5-dci",
        slug: "renault-kadjar-1-5-dci",
        brand: "Renault",
        model: "Kadjar",
        variant: "1.5 dCi Icon",
        years: "2015-2022",
        generation: "I",
        expertNote: "Qashqai'nin Renault logolulu hali. Ama parçası Qashqai'den ucuz değildir. Trim sesleri meşhurdur, radyoyu açıp gez.",
        price: 1150000,
        reliabilityScore: 80,
        totalIssues: 5,
        searchCount: 10500,
        issues: [
            {
                id: "kadjar-1",
                title: "Rüzgar Sesi",
                description: "100 km/s üzeri hızlarda yoğun rüzgar sesi (Ayna kaynaklı).",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "1.000 - 3.000 TL (Fitil)"
            },
            {
                id: "kadjar-2",
                title: "Trim Sesleri",
                description: "Orta konsol ve kapı tutamaklarından gelen gıcırtılar.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Sıfırdan itibaren",
                repairCost: "2.000 - 5.000 TL"
            },
            {
                id: "kadjar-3",
                title: "EDC Kararsızlığı",
                description: "Düşük hızlarda şanzımanın vites seçememesi.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "Karakteristik",
                repairCost: "1.500 - 4.000 TL (Yazılım)"
            },
            {
                id: "kadjar-1-5-dci-auto-4",
                title: "DPF Tıkanması",
                description: "Şehir içi kısa mesafe kullanımda DPF filtresinin dolması.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Şehir içi kullanım",
                repairCost: "5.000 - 12.000 TL"
            },
            {
                id: "kadjar-1-5-dci-auto-5",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
            }
        ],
        pros: [
            "Yakıt ekonomisi",
            "Cam tavan ferahlığı",
            "Fiyat/Performans SUV"
        ],
        cons: [
            "İkinci eli yavaş",
            "Kalite algısı düşük",
            "Trim sesleri"
        ],
        buyingTips: [
            "Bozuk yolda trim seslerini dinleyin",
            "Ayna katlama mekanizması çalışıyor mu?"
        ]
    },
    {
        id: "renault-megane-sedan-1-5-dci",
        slug: "renault-megane-sedan-1-5-dci",
        brand: "Renault",
        model: "Megane",
        variant: "Sedan 1.5 dCi EDC Touch",
        years: "2016-2022",
        generation: "IV Sedan",
        price: 950000,
        expertNote: "Uber ve ticari filo canavari. 1.5 dCi K9K motor milyonlarca km dayanan bir efsanedir. Ama EDC şanzımanı Aşil topuğudur — kavrama setini sorun mutlaka. Manuel olanı çok daha sorunsuzdur.",
        reliabilityScore: 80,
        totalIssues: 5,
        searchCount: 42000,
        issues: [
            {
                id: "megane-sd-1",
                title: "EDC Şanzıman Kavrama Seti",
                description: "Getrag 6DCT250 çift kavramalı şanzımanda kavrama disklerinin erken aşınması. Vites geçişlerinde sarsıntı, kayma ve titreme.",
                category: "sanziman",
                riskLevel: "HIGH",
                affectedKm: "80.000+ km",
                repairCost: "25.000 - 40.000 TL"
            },
            {
                id: "megane-sd-2",
                title: "Enjektör Sızıntısı / Tıkanma",
                description: "Delphi enjektörlerin yakıt sızıntısı veya tıkanmasına bağlı titreme ve güç kaybı. Kalitesiz yakıtla hızlanır.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "120.000+ km",
                repairCost: "15.000 - 30.000 TL"
            },
            {
                id: "megane-sd-3",
                title: "Turbo Basınç Sensörü",
                description: "Turbo basınç sensörünün arızalanması ve motorun acil çalışma moduna geçmesi. Güç sınırlaması devreye girer.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "3.000 - 6.000 TL"
            },
            {
                id: "megane-sd-4",
                title: "R-Link 2 Multimedya Sorunu",
                description: "R-Link 2 ekranının donması, navigasyonun çökmesi ve geri görüş kamerasının kararması.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Yazılım / 5.000 TL (Ünite)"
            },
            {
                id: "megane-sd-5",
                title: "DPF Rejenerasyon Sorunu",
                description: "Şehir içi kısa mesafe kullanımda DPF filtresi dolması. Motor arıza lambası ve güç kısıtlaması. Düzenli uzun yol gerekir.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Şehir içi kullanım",
                repairCost: "8.000 - 15.000 TL"
            }
        ],
        pros: [
            "K9K motor efsanesi",
            "Ekonomik yakıt (4.5L/100km)",
            "Geniş sedan bagajı"
        ],
        cons: [
            "EDC şanzıman riski",
            "Taksi imajı",
            "Yedek parça bekleme süresi"
        ],
        buyingTips: [
            "EDC kavrama seti ne zaman değişmiş sorun — fatura isteyin",
            "Manuel şanzımanlı seçenek varsa tercih edin",
            "Uber/taksi geçmişi olup olmadığını kontrol edin"
        ]
    }
,

    // ─── Eski new-cars dosyasından taşındı ───
    {
        id: "renault-fluence-1-5-dci-edc",
        slug: "renault-fluence-1-5-dci-edc",
        brand: "Renault",
        model: "Fluence",
        variant: "1.5 dCi EDC",
        years: "2009-2016",
        generation: "L38",
        price: 450000,
        reliabilityScore: 68,
        totalIssues: 6,
        searchCount: 11000,
        expertNote: "Fluence Türkiye'nin en popüler sedanlarındandı. 1.5 dCi motor güvenilir ama EDC robotize şanzıman tam bir kabus. Manuel olanlar altın, EDC olanlar dikkat gerektirir. Enjektör ve turbo yüksek km sorunları.",
        issues: [
            { id: "flu-1", title: "EDC Robotize Şanzıman Arızası", description: "Getrag marka kuru kavramalı robotize şanzımanda kavrama aşınması ve aktüatör arızası. Vites takılması, sarsıntı ve ileri gitmeme.", category: "sanziman", riskLevel: "CRITICAL", affectedKm: "50.000 - 80.000 km", repairCost: "15.000 - 35.000 TL" },
            { id: "flu-2", title: "Enjektör Arızası", description: "1.5 dCi enjektörlerin tıkanması veya sızıntısı. Rölantide titreşim, güç kaybı, duman.", category: "motor", riskLevel: "HIGH", affectedKm: "100.000+ km", repairCost: "8.000 - 20.000 TL" },
            { id: "flu-3", title: "Turbo Aktuatör Bozulması", description: "Turbo basınç regülatör aktuatörünün arızalanması. Güç kaybı ve arıza lambası.", category: "motor", riskLevel: "MEDIUM", affectedKm: "80.000+ km", repairCost: "5.000 - 12.000 TL" },
            { id: "flu-4", title: "Egzoz Esnek Boru Çatlağı", description: "Ön egzoz esnek borunun çatlaması. Egzoz sesi artışı ve emisyon hatası.", category: "motor", riskLevel: "LOW", affectedKm: "80.000+ km", repairCost: "2.000 - 4.000 TL" },
            { id: "flu-5", title: "Kapı Kilit Aktüatörü", description: "Merkezi kilit aktüatörlerinin bozulması. Kapılar kilitlenmez veya açılmaz.", category: "elektronik", riskLevel: "LOW", affectedKm: "60.000+ km", repairCost: "1.500 - 3.000 TL" },
            { id: "flu-6", title: "Arka Süspansiyon Gıcırtısı", description: "Arka torsion bar süspansiyonun burçlarının kuruması. Kasis geçişlerinde gıcırtı.", category: "suspansiyon", riskLevel: "LOW", affectedKm: "50.000+ km", repairCost: "2.000 - 4.000 TL" }
        ],
        pros: ["Geniş sedan kabin", "Ekonomik 1.5 dCi", "Ucuz yedek parça", "Konforlu sürüş"],
        cons: ["EDC şanzıman kabusları", "Ses yalıtımı zayıf", "İç mekan kalitesi düşük"],
        buyingTips: ["EDC varsa üç kez düşünün, manuel tercih edin", "Enjektör testini mutlaka yaptırın", "Turbo basıncını kontrol ettirin"]
    }
,

    // ─── Eski new-cars dosyasından taşındı ───
    {
        id: "renault-clio-3-1-5-dci",
        slug: "renault-clio-3-1-5-dci",
        brand: "Renault",
        model: "Clio",
        variant: "III 1.5 dCi",
        years: "2005-2012",
        generation: "III",
        price: 250000,
        reliabilityScore: 71,
        totalIssues: 6,
        searchCount: 10000,
        expertNote: "Clio 3 Türkiye'de milyonlarca satıldı. 1.5 dCi motor ekonomik ve dayanıklı. Otomatik şanzıman yok, sadece 5MT. Basit ve güvenilir ama yaşı nedeniyle enjektör ve turbo sorunları artıyor.",
        issues: [
            { id: "clio3-1", title: "Enjektör Arızası", description: "1.5 dCi enjektörlerin yüksek km'de tıkanması. Rölantide titreşim.", category: "motor", riskLevel: "HIGH", affectedKm: "120.000+ km", repairCost: "5.000 - 12.000 TL" },
            { id: "clio3-2", title: "Turbo Aktuatör", description: "Turbo electronique aktuatörünün bozulması. Güç kaybı.", category: "motor", riskLevel: "MEDIUM", affectedKm: "80.000+ km", repairCost: "4.000 - 8.000 TL" },
            { id: "clio3-3", title: "Anahtar Kartı Tanıma Hatası", description: "'Kartı okuyucu yakınına getirin' hatası. İmmobilizer sorunu.", category: "elektronik", riskLevel: "HIGH", affectedKm: "Yaş kaynaklı", repairCost: "3.000 - 6.000 TL" },
            { id: "clio3-4", title: "Cam Kaldırma Mekanizması", description: "Cam kaldırma tel ve motor arızası.", category: "govde", riskLevel: "LOW", affectedKm: "50.000+ km", repairCost: "1.000 - 2.000 TL" },
            { id: "clio3-5", title: "Direksiyon Kolonu Sesi", description: "Direksiyon çevirirken plastik gıcırtı.", category: "suspansiyon", riskLevel: "LOW", affectedKm: "40.000+ km", repairCost: "1.000 - 3.000 TL" },
            { id: "clio3-6", title: "Arka Fren Kampana Aşınması", description: "Arka kampanalı fren balata aşınması.", category: "fren", riskLevel: "LOW", affectedKm: "50.000+ km", repairCost: "1.000 - 2.000 TL" }
        ],
        pros: ["Çok ucuz bakım", "Ekonomik 1.5 dCi", "Bol yedek parça", "Basit mekanik"],
        cons: ["Yaşı nedeniyle yıpranmış", "Güvenlik düşük", "Otomatik şanzıman yok"],
        buyingTips: ["Enjektör testini yaptırın", "Anahtar kartı sorunsuz çalışıyor mu?", "Debriyaj kaçını test edin"]
    }
,

    // ─── Eski new-cars dosyasından taşındı ───
    {
        id: "renault-scenic-1-5-dci",
        slug: "renault-scenic-1-5-dci",
        brand: "Renault",
        model: "Scenic",
        variant: "1.5 dCi",
        years: "2016-2022",
        generation: "IV",
        price: 1300000,
        reliabilityScore: 73,
        totalIssues: 6,
        searchCount: 7500,
        expertNote: "Scenic güzel araçtır ama mızmız bir dizeldir. DPF ve AdBlue ikilisi canınızı sıkar. 20 inç jantlar göze hitap eder ama cebe dokunur. Lastik masrafı SUV'lardan daha fazla çıkar.",
        issues: [
            { id: "scenic-1", title: "AdBlue Pompa/Enjektör Arızası", description: "AdBlue dozajlama modülünün kristalleşme sonucu tıkanması. 'Motor X km Sonra Çalışmayacak' uyarısı verir. Komple modül değişimi gerekir, revizyonu pek tutmaz.", category: "motor", riskLevel: "HIGH", affectedKm: "50.000 - 80.000 km", repairCost: "25.000 - 40.000 TL" },
            { id: "scenic-2", title: "DPF Rejenerasyon Sorunu", description: "Şehir içi kısa mesafe kullanımda partikül filtresi dolması. Zorlanmış rejenerasyon yapılmazsa filtre tıkanır ve motor performansı düşer. Uzun yol yapılması önerilir.", category: "motor", riskLevel: "HIGH", affectedKm: "40.000+ km (Şehir içi)", repairCost: "8.000 - 20.000 TL" },
            { id: "scenic-3", title: "Çift Kütleli Volan Aşınması", description: "EDC şanzımanla birlikte çalışan çift kütleli volanın aşınması sonucu rölantide ve stop ederken gelen metalik vuruntu sesi. Kavrama seti ile birlikte değiştirilmeli.", category: "sanziman", riskLevel: "MEDIUM", affectedKm: "100.000+ km", repairCost: "15.000 - 25.000 TL" },
            { id: "scenic-4", title: "20 inç Jant ve Lastik Hasarı", description: "Standart 20 inç jantların düşük profilli lastiklerle birlikte çukur ve kasislerde hasar görmesi. Jant eğrilmesi ve lastik yanak yırtılması sık yaşanır.", category: "govde", riskLevel: "MEDIUM", affectedKm: "Sürekli", repairCost: "3.000 - 8.000 TL (Lastik başı)" },
            { id: "scenic-5", title: "Multimedya R-Link Donması", description: "R-Link 2 ekranının kararması, donması veya navigasyonun çalışmaması. Yazılım güncellemesi kısmen çözer ancak donanımsal sorun da yaşanabilir.", category: "elektronik", riskLevel: "LOW", affectedKm: "Rastgele", repairCost: "Yazılım / 8.000 TL (Ünite)" },
            { id: "scenic-6", title: "Elektrikli El Freni Arızası", description: "Elektrikli el freni motorunun bozulması veya kalibrasyonunun kaybolması. El freni serbest bırakmama veya takılı kalma sorunu.", category: "fren", riskLevel: "MEDIUM", affectedKm: "70.000+ km", repairCost: "5.000 - 12.000 TL" }
        ],
        pros: ["Devasa panoramik tavan", "Geniş iç hacim ve bagaj", "Konforlu süspansiyon", "Şık tasarım"],
        cons: ["AdBlue sistemi sorunlu", "20 inç jant masraflı", "İkinci el değer kaybı yüksek"],
        buyingTips: ["AdBlue sistemi arıza yapıyorsa DPF ile birlikte kontrol ettirin", "Lastik ve jant durumunu inceleyin (20 inç pahalı)", "EDC şanzıman titreme var mı test edin"]
    }
,
    {
            "id": "renault-megane-4-1-5-dci",
            "slug": "renault-megane-4-1-5-dci",
            "brand": "Renault",
            "model": "Megane IV",
            "variant": "1.5 dCi EDC Touch",
            "years": "2016-2022",
            "generation": "IV (BFB)",
            "price": 1000000,
            "expertNote": "K9K 1.5 dCi 110 HP + EDC şanzıman. Türkiye'de çok satan hatchback. EDC (çift kavramalı) şanzıman sarsıntı yapabilir. R-Link 2 multimedya sistemi kullanışlı.",
            "reliabilityScore": 79,
            "totalIssues": 5,
            "searchCount": 22000,
            "issues": [
                    {
                            "id": "meg4d-1",
                            "title": "EDC Şanzıman Sarsıntısı",
                            "description": "Çift kavramalı şanzımanda düşük hızlarda titreme ve sarsıntı.",
                            "category": "sanziman",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "50.000+ km",
                            "repairCost": "15.000 - 30.000 TL"
                    },
                    {
                            "id": "meg4d-2",
                            "title": "DPF Tıkanması",
                            "description": "Şehir içi kısa mesafe kullanımda DPF dolması.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Şehir içi",
                            "repairCost": "5.000 - 12.000 TL"
                    },
                    {
                            "id": "meg4d-3",
                            "title": "Enjektör Arızası",
                            "description": "dCi enjektörlerin tıkanması. Motor titremesi.",
                            "category": "motor",
                            "riskLevel": "HIGH",
                            "affectedKm": "100.000+ km",
                            "repairCost": "8.000 - 15.000 TL"
                    },
                    {
                            "id": "meg4d-4",
                            "title": "R-Link 2 Donma",
                            "description": "Multimedya sisteminin donması ve tepkisizliği.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Rastgele",
                            "repairCost": "1.500 - 4.000 TL (Yazılım)"
                    },
                    {
                            "id": "meg4d-5",
                            "title": "Arka Fren Balata",
                            "description": "Arka fren balatalarının erken aşınması.",
                            "category": "fren",
                            "riskLevel": "LOW",
                            "affectedKm": "30.000+ km",
                            "repairCost": "1.500 - 3.000 TL"
                    }
            ],
            "pros": [
                    "Konforlu sürüş",
                    "Düşük yakıt",
                    "Geniş iç mekan",
                    "R-Link 2"
            ],
            "cons": [
                    "EDC hassasiyeti",
                    "DPF riski",
                    "Plastik kalitesi"
            ],
            "buyingTips": [
                    "EDC'yi trafikte test edin",
                    "DPF taraması yaptırın",
                    "Touch donanım minimum olmalı"
            ]
    }
,
    {
            "id": "renault-clio-5-1-3-tce",
            "slug": "renault-clio-5-1-3-tce",
            "brand": "Renault",
            "model": "Clio V",
            "variant": "1.3 TCe RS Line EDC",
            "years": "2019-2025",
            "generation": "BF (V)",
            "price": 1000000,
            "expertNote": "H5H 1.3 TCe 130 HP + EDC7. Mercedes ortakligiyla uretilen motor. Clio V Turkiye de cok populer. RS Line ile sportif gorunum.",
            "reliabilityScore": 80,
            "totalIssues": 5,
            "searchCount": 18000,
            "issues": [
                    {
                            "id": "clio5t-1",
                            "title": "EDC Sanziman",
                            "description": "EDC7 cift kavramali sanzimanda titreme.",
                            "category": "sanziman",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "40.000+ km",
                            "repairCost": "10.000 - 22.000 TL"
                    },
                    {
                            "id": "clio5t-2",
                            "title": "Turbo Hortumu",
                            "description": "Turbo baglanti hortumunun catlamasi.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "60.000+ km",
                            "repairCost": "2.000 - 5.000 TL"
                    },
                    {
                            "id": "clio5t-3",
                            "title": "Park Sensoru",
                            "description": "Park sensorlerinin yanlis uyari vermesi.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Rastgele",
                            "repairCost": "1.500 - 3.000 TL"
                    },
                    {
                            "id": "clio5t-4",
                            "title": "Arka Susupansiyon",
                            "description": "Arka susupansiyon burclarindan ses.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "50.000+ km",
                            "repairCost": "2.000 - 4.000 TL"
                    },
                    {
                            "id": "clio5t-5",
                            "title": "Trim Sesleri",
                            "description": "Torpido bolgesinden plastik tikirtilari.",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "Bozuk yollar",
                            "repairCost": "2.000 - 5.000 TL"
                    }
            ],
            "pros": [
                    "Sportif tasarim",
                    "EDC konfor",
                    "Dusuk yakit",
                    "RS Line gorunum"
            ],
            "cons": [
                    "EDC hassasiyeti",
                    "Arka alan dar",
                    "Plastik kalitesi"
            ],
            "buyingTips": [
                    "EDC trafikte test edin",
                    "RS Line donanim tercih edin",
                    "Motor sogukken dinleyin"
            ]
    }
,
    {
            "id": "renault-captur-1-5-dci",
            "slug": "renault-captur-1-5-dci",
            "brand": "Renault",
            "model": "Captur (J87)",
            "variant": "1.5 dCi EDC Icon",
            "years": "2013-2019",
            "generation": "J87",
            "price": 650000,
            "expertNote": "K9K 1.5 dCi 90 HP + EDC. İlk nesil Captur Clio bazlı mini crossover. Renkli tasarımıyla genç kitleye hitap eder. EDC şanzıman hassas ama motor ekonomik.",
            "reliabilityScore": 77,
            "totalIssues": 5,
            "searchCount": 11000,
            "issues": [
                    {
                            "id": "cap1-1",
                            "title": "EDC Şanzıman",
                            "description": "EDC çift kavramalı şanzımanda titreme ve sarsıntı.",
                            "category": "sanziman",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "50.000+ km",
                            "repairCost": "12.000 - 25.000 TL"
                    },
                    {
                            "id": "cap1-2",
                            "title": "Turbo Hortumu",
                            "description": "Turbo hortumunun yırtılması.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "80.000+ km",
                            "repairCost": "2.000 - 5.000 TL"
                    },
                    {
                            "id": "cap1-3",
                            "title": "Enjektör",
                            "description": "dCi enjektör tıkanması.",
                            "category": "motor",
                            "riskLevel": "HIGH",
                            "affectedKm": "120.000+ km",
                            "repairCost": "5.000 - 12.000 TL"
                    },
                    {
                            "id": "cap1-4",
                            "title": "MediaNav Donma",
                            "description": "MediaNav ekranının donması.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Rastgele",
                            "repairCost": "1.500 - 4.000 TL (Yazılım)"
                    },
                    {
                            "id": "cap1-5",
                            "title": "Ön Süspansiyon",
                            "description": "Ön alt kol bilyası aşınması.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "50.000+ km",
                            "repairCost": "1.500 - 3.000 TL"
                    }
            ],
            "pros": [
                    "Renkli tasarım",
                    "Ekonomik dCi",
                    "Kompakt crossover",
                    "Ucuz bakım"
            ],
            "cons": [
                    "EDC hassasiyeti",
                    "İç mekan kalitesi",
                    "Arka alan dar"
            ],
            "buyingTips": [
                    "EDC trafikte test edin",
                    "Icon donanım alın",
                    "Enjektör kontrolü"
            ]
    }
,
    {
            "id": "renault-symbol-1-5-dci-2",
            "slug": "renault-symbol-joy-1-5-dci",
            "brand": "Renault",
            "model": "Symbol (L52)",
            "variant": "Joy 1.5 dCi 75 HP",
            "years": "2013-2020",
            "generation": "L52",
            "price": 350000,
            "expertNote": "K9K 1.5 dCi 75 HP. Symbol TR'de taksi ve ticari filosunun vazgeçilmezi. Ucuz, basit, dayanıklı. Motor milyon km dayanır. İç mekan plastik ama işlevsel.",
            "reliabilityScore": 80,
            "totalIssues": 5,
            "searchCount": 18000,
            "issues": [
                    {
                            "id": "symb2-1",
                            "title": "Debriyaj Seti",
                            "description": "Debriyaj balata ve baskı aşınması. Taksi kullanımında çok erken.",
                            "category": "sanziman",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "60.000+ km",
                            "repairCost": "3.000 - 6.000 TL"
                    },
                    {
                            "id": "symb2-2",
                            "title": "Enjektör Tıkanması",
                            "description": "dCi enjektörlerin tıkanması.",
                            "category": "motor",
                            "riskLevel": "HIGH",
                            "affectedKm": "150.000+ km",
                            "repairCost": "5.000 - 10.000 TL"
                    },
                    {
                            "id": "symb2-3",
                            "title": "Ön Rot Başı",
                            "description": "Ön rot başlarının erken aşınması.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "40.000+ km",
                            "repairCost": "1.000 - 2.000 TL"
                    },
                    {
                            "id": "symb2-4",
                            "title": "Klima Kompresörü",
                            "description": "Klima kompresörü arızası.",
                            "category": "elektronik",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "80.000+ km",
                            "repairCost": "4.000 - 8.000 TL"
                    },
                    {
                            "id": "symb2-5",
                            "title": "Kapı Menteşesi",
                            "description": "Sürücü kapısı menteşe sarkması.",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "Kronik",
                            "repairCost": "500 - 1.500 TL"
                    }
            ],
            "pros": [
                    "Çok ucuz bakım",
                    "dCi motor dayanıklı",
                    "Taksi filosu güvenilirliği",
                    "Yedek parça bol"
            ],
            "cons": [
                    "İç mekan çok sade",
                    "Güvenlik puanı düşük",
                    "Konfor yok"
            ],
            "buyingTips": [
                    "Ex-taksi mi kontrol edin",
                    "Enjektör testi",
                    "Km saati doğruluğu kontrol"
            ]
    }
,
    {
            "id": "renault-laguna-3-1-5-dci",
            "slug": "renault-laguna-3-1-5-dci",
            "brand": "Renault",
            "model": "Laguna III",
            "variant": "1.5 dCi Privilege",
            "years": "2007-2015",
            "generation": "X91",
            "price": 250000,
            "expertNote": "K9K 1.5 dCi 110 HP. Laguna III güzel ama çok sorunlu. Elektronik arızalar kabus. El freni otomatik (elektrikli) ve sürekli bozulur. Kart anahtarı sorun çıkarır.",
            "reliabilityScore": 58,
            "totalIssues": 7,
            "searchCount": 6000,
            "issues": [
                    {
                            "id": "lag3-1",
                            "title": "Kart Anahtar Arızası",
                            "description": "Renault kart anahtarın tanınmaması. Araç çalışmıyor.",
                            "category": "elektronik",
                            "riskLevel": "HIGH",
                            "affectedKm": "Rastgele",
                            "repairCost": "5.000 - 10.000 TL"
                    },
                    {
                            "id": "lag3-2",
                            "title": "Elektrikli El Freni",
                            "description": "Otomatik el freni çalışmıyor veya bırakmıyor.",
                            "category": "fren",
                            "riskLevel": "HIGH",
                            "affectedKm": "60.000+ km",
                            "repairCost": "8.000 - 18.000 TL"
                    },
                    {
                            "id": "lag3-3",
                            "title": "Enjektör Arızası",
                            "description": "dCi enjektörlerin tıkanması.",
                            "category": "motor",
                            "riskLevel": "HIGH",
                            "affectedKm": "100.000+ km",
                            "repairCost": "8.000 - 15.000 TL"
                    },
                    {
                            "id": "lag3-4",
                            "title": "Gösterge Paneli Arızası",
                            "description": "Dijital gösterge panelinin çalışmaması veya hatalı bilgi göstermesi.",
                            "category": "elektronik",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Kronik",
                            "repairCost": "5.000 - 12.000 TL"
                    },
                    {
                            "id": "lag3-5",
                            "title": "DPF Tıkanması",
                            "description": "DPF filtresi sürekli doluyor.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Şehir içi",
                            "repairCost": "5.000 - 12.000 TL"
                    },
                    {
                            "id": "lag3-6",
                            "title": "Cam Tavan Su Sızması",
                            "description": "Panoramik cam tavandan su sızması.",
                            "category": "govde",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "3.000 - 8.000 TL"
                    },
                    {
                            "id": "lag3-7",
                            "title": "CAN Bus Hataları",
                            "description": "CAN Bus iletişim hataları. Rastgele arıza lambaları.",
                            "category": "elektronik",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Kronik",
                            "repairCost": "3.000 - 8.000 TL (Tamir)"
                    }
            ],
            "pros": [
                    "Konforlu sürüş",
                    "Geniş iç mekan",
                    "Ucuz ikinci el"
            ],
            "cons": [
                    "Elektronik kabusu",
                    "El freni felaketi",
                    "Kart anahtar sorunu",
                    "DPF tıkanması",
                    "Her şey bozulur"
            ],
            "buyingTips": [
                    "ARAŞTIRMADAN ALMAYIN",
                    "2 tane kart anahtar çalışıyor mu kontrol edin",
                    "El frenini 10 kez test edin",
                    "Elektronik tarama yaptırın"
            ]
    }
,
    {
            "id": "renault-12-toros",
            "slug": "renault-12-toros-1-4",
            "brand": "Renault",
            "model": "12 Toros",
            "variant": "1.4 TX",
            "years": "1971-2000",
            "generation": "R12",
            "price": 100000,
            "expertNote": "Oyak-Renault Bursa üretimi efsane. Türkiye'nin en uzun üretilen arabası (29 yıl). 1.4 motor çok basit ve dayanıklı. Tamir edilemeyecek arızası yok.",
            "reliabilityScore": 75,
            "totalIssues": 5,
            "searchCount": 30000,
            "issues": [
                    {
                            "id": "r12-1",
                            "title": "Karbüratör",
                            "description": "Karbüratör ayarı ve membran değişimi.",
                            "category": "motor",
                            "riskLevel": "LOW",
                            "affectedKm": "Kronik",
                            "repairCost": "200 - 500 TL"
                    },
                    {
                            "id": "r12-2",
                            "title": "Kaporta Pası",
                            "description": "Geniş çaplı paslanma (özellikle taban).",
                            "category": "govde",
                            "riskLevel": "HIGH",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "3.000 - 10.000 TL (Boya/Rötuş)"
                    },
                    {
                            "id": "r12-3",
                            "title": "Fren Merkezi",
                            "description": "Fren ana merkezi sızıntısı.",
                            "category": "fren",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "500 - 1.500 TL"
                    },
                    {
                            "id": "r12-4",
                            "title": "Debriyaj Teli",
                            "description": "Debriyaj telinin kopması.",
                            "category": "sanziman",
                            "riskLevel": "LOW",
                            "affectedKm": "Rastgele",
                            "repairCost": "100 - 300 TL"
                    },
                    {
                            "id": "r12-5",
                            "title": "Amortisör",
                            "description": "Amortisörlerin tamamen bitik olması.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "500 - 1.500 TL"
                    }
            ],
            "pros": [
                    "Efsanevi araç",
                    "Tamir edilemeyecek arızası yok",
                    "Yedek parça her yerde",
                    "Koleksiyoner değeri arttı"
            ],
            "cons": [
                    "Güvenlik sıfır",
                    "Konfor yok",
                    "Pas kabusu",
                    "Yaşlı araç"
            ],
            "buyingTips": [
                    "Taban pasını mutlaka kontrol edin",
                    "Orijinale yakın araçlar değerli",
                    "TX versiyonu tercih edin",
                    "Koleksiyoner parçası olarak alın"
            ]
    }
,
    {
            "id": "renault-9-broadway",
            "slug": "renault-9-broadway-1-4",
            "brand": "Renault",
            "model": "9 Broadway",
            "variant": "1.4 RNi",
            "years": "1987-1999",
            "generation": "L42",
            "price": 80000,
            "expertNote": "Oyak-Renault Bursa üretimi. R12'nin halefi olarak tasarlandı. 1.4 enjeksiyonlu motor (RNi) güvenilir. GTE versiyonu sportif. Türkiye'de taksi olarak çok kullanıldı.",
            "reliabilityScore": 73,
            "totalIssues": 5,
            "searchCount": 18000,
            "issues": [
                    {
                            "id": "r9-1",
                            "title": "Enjeksiyon Beyni",
                            "description": "Monopoint enjeksiyon ECU arızası.",
                            "category": "elektronik",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "1.000 - 2.500 TL"
                    },
                    {
                            "id": "r9-2",
                            "title": "Kaporta Pası",
                            "description": "Kapı altları ve çamurluk paslanması.",
                            "category": "govde",
                            "riskLevel": "HIGH",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "5.000 - 15.000 TL (Boya/Kaynak)"
                    },
                    {
                            "id": "r9-3",
                            "title": "Triger Kayışı",
                            "description": "Triger kayışı kopması riski.",
                            "category": "motor",
                            "riskLevel": "CRITICAL",
                            "affectedKm": "60.000 km",
                            "repairCost": "800 - 1.500 TL"
                    },
                    {
                            "id": "r9-4",
                            "title": "Şanzıman Senkromece",
                            "description": "2. ve 3. vites senkromece aşınması.",
                            "category": "sanziman",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "100.000+ km",
                            "repairCost": "2.000 - 4.000 TL"
                    },
                    {
                            "id": "r9-5",
                            "title": "Kalorifer Peteği",
                            "description": "Kalorifer peteğinden su kaçağı.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "500 - 1.500 TL"
                    }
            ],
            "pros": [
                    "Ekonomik",
                    "Basit mekanik",
                    "Enjeksiyonlu güvenilir",
                    "Ucuz yedek parça"
            ],
            "cons": [
                    "Pas sorunu",
                    "Eski teknoloji",
                    "Güvenlik düşük",
                    "Ex-taksi olabilir"
            ],
            "buyingTips": [
                    "Ex-taksi mi kontrol edin",
                    "Triger kayışı ne zaman değişti",
                    "Pas kontrolü",
                    "GTE versiyonu koleksiyonluk"
            ]
    }
,
    {
            "id": "renault-19-europa",
            "slug": "renault-19-europa-1-6",
            "brand": "Renault",
            "model": "19 Europa",
            "variant": "1.6 8V RNE",
            "years": "1988-2003",
            "generation": "X53",
            "price": 90000,
            "expertNote": "R9'un halefi. Oyak-Renault üretimi. Europa (facelift) versiyonu en yaygını. 1.6 8V motor basit ve güvenilir. Türkiye'de sedan ve HB versiyonları satıldı.",
            "reliabilityScore": 74,
            "totalIssues": 5,
            "searchCount": 16000,
            "issues": [
                    {
                            "id": "r19-1",
                            "title": "Motor Hararet",
                            "description": "Termostat ve devirdaim pompası arızaları. Hararet.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "500 - 2.000 TL"
                    },
                    {
                            "id": "r19-2",
                            "title": "Kaporta Pası",
                            "description": "Geniş çaplı paslanma.",
                            "category": "govde",
                            "riskLevel": "HIGH",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "5.000 - 15.000 TL (Boya/Kaynak)"
                    },
                    {
                            "id": "r19-3",
                            "title": "Elektrik Tesisatı",
                            "description": "Tesisat yaşlanması kaynaklı elektrik sorunları.",
                            "category": "elektronik",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "500 - 2.000 TL"
                    },
                    {
                            "id": "r19-4",
                            "title": "Debriyaj Hidrolik",
                            "description": "Debriyaj merkezi ve hortum sızıntısı.",
                            "category": "sanziman",
                            "riskLevel": "LOW",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "500 - 1.500 TL"
                    },
                    {
                            "id": "r19-5",
                            "title": "Ön Süspansiyon",
                            "description": "Ön süspansiyon rotil ve bilyalarının aşınması.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "40.000+ km",
                            "repairCost": "500 - 1.500 TL"
                    }
            ],
            "pros": [
                    "Sağlam motor",
                    "Ucuz bakım",
                    "Europa facelift iyi",
                    "Basit mekanik"
            ],
            "cons": [
                    "Pas sorunu",
                    "Eski teknoloji",
                    "Konfor düşük",
                    "Parça azalıyor"
            ],
            "buyingTips": [
                    "Hararet geçmişi sorulmalı",
                    "Pas kontrolü",
                    "Europa (facelift) tercih edin",
                    "RNE enjeksiyon tercih edin"
            ]
    }
,
    {
            "id": "renault-megane-1-1-6",
            "slug": "renault-megane-1-1-6-rte",
            "brand": "Renault",
            "model": "Megane I",
            "variant": "1.6 16V RTE",
            "years": "1996-2003",
            "generation": "X64",
            "price": 120000,
            "expertNote": "K4M 1.6 16V 107 HP. Megane I Türkiye'de çok satılan C segment. HB, sedan ve SW versiyonları var. Motor güvenilir ama elektronik arızalar yaşa bağlı artıyor.",
            "reliabilityScore": 72,
            "totalIssues": 5,
            "searchCount": 14000,
            "issues": [
                    {
                            "id": "meg1-1",
                            "title": "Gösterge Paneli",
                            "description": "Gösterge panelinin söndüğü veya hatalı bilgi gösterir.",
                            "category": "elektronik",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "1.000 - 3.000 TL"
                    },
                    {
                            "id": "meg1-2",
                            "title": "Kaporta Pası",
                            "description": "Kapı altları ve çamurluk paslanması.",
                            "category": "govde",
                            "riskLevel": "HIGH",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "5.000 - 15.000 TL (Boya/Kaynak)"
                    },
                    {
                            "id": "meg1-3",
                            "title": "Triger Kayışı",
                            "description": "Triger kayışı kopması. Motor hasarı riski.",
                            "category": "motor",
                            "riskLevel": "CRITICAL",
                            "affectedKm": "60.000 km",
                            "repairCost": "1.000 - 2.000 TL"
                    },
                    {
                            "id": "meg1-4",
                            "title": "Bobinler",
                            "description": "Ateşleme bobinlerinin yanması. Misfire.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "80.000+ km",
                            "repairCost": "500 - 1.500 TL"
                    },
                    {
                            "id": "meg1-5",
                            "title": "Cam Kaldırma",
                            "description": "Cam kaldırma mekanizmasının kırılması.",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "500 - 1.500 TL"
                    }
            ],
            "pros": [
                    "K4M motor güvenilir",
                    "C segment konfor",
                    "Geniş iç mekan",
                    "Ucuz yedek parça"
            ],
            "cons": [
                    "Gösterge arızaları",
                    "Pas sorunu",
                    "Elektrik sorunları",
                    "Yaşlı araç"
            ],
            "buyingTips": [
                    "Triger ne zaman değişti",
                    "Gösterge panelini test edin",
                    "Pas kontrolü",
                    "Sedan versiyonu pratik"
            ]
    }
,
    {
            "id": "renault-megane-2-1-5-dci",
            "slug": "renault-megane-2-1-5-dci-privilege",
            "brand": "Renault",
            "model": "Megane II",
            "variant": "1.5 dCi Privilege",
            "years": "2003-2009",
            "generation": "X84",
            "price": 200000,
            "expertNote": "K9K 1.5 dCi 100 HP. Megane II güzel tasarım, iyi sürüş. dCi motor ekonomik ve güvenilir. Ama elektronik arızalar ve cam tavan su kaçağı ünlü.",
            "reliabilityScore": 70,
            "totalIssues": 6,
            "searchCount": 16000,
            "issues": [
                    {
                            "id": "meg2-1",
                            "title": "Enjektör Arızası",
                            "description": "dCi enjektörlerin tıkanması veya kaçırması.",
                            "category": "motor",
                            "riskLevel": "HIGH",
                            "affectedKm": "120.000+ km",
                            "repairCost": "5.000 - 12.000 TL"
                    },
                    {
                            "id": "meg2-2",
                            "title": "Kart Anahtar",
                            "description": "Renault kart anahtarın tanınmaması.",
                            "category": "elektronik",
                            "riskLevel": "HIGH",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "3.000 - 6.000 TL"
                    },
                    {
                            "id": "meg2-3",
                            "title": "Cam Tavan Su Kaçağı",
                            "description": "Panoramik cam tavan sızıntısı. İç mekan ıslanır.",
                            "category": "govde",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "2.000 - 5.000 TL"
                    },
                    {
                            "id": "meg2-4",
                            "title": "Turbo Aktuatör",
                            "description": "Turbo basınç aktuatörü arızası.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "100.000+ km",
                            "repairCost": "3.000 - 6.000 TL"
                    },
                    {
                            "id": "meg2-5",
                            "title": "Gösterge Paneli",
                            "description": "Gösterge paneli arızaları devam ediyor.",
                            "category": "elektronik",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Kronik",
                            "repairCost": "1.500 - 4.000 TL"
                    },
                    {
                            "id": "meg2-6",
                            "title": "DPF Tıkanması",
                            "description": "DPF filtresi tıkanması (sonraki modellerde).",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Şehir içi",
                            "repairCost": "5.000 - 10.000 TL"
                    }
            ],
            "pros": [
                    "Ekonomik dCi",
                    "Güzel tasarım",
                    "İyi sürüş",
                    "C segment konfor"
            ],
            "cons": [
                    "Kart anahtar sorunu",
                    "Cam tavan kaçağı",
                    "Enjektör maliyeti",
                    "Elektronik arızalar"
            ],
            "buyingTips": [
                    "2 kart anahtar çalışıyor mu",
                    "Cam tavanlı almayın",
                    "Enjektör testi",
                    "Privilege donanım zengin"
            ]
    }
,
    {
            "id": "renault-laguna-2-1-6",
            "slug": "renault-laguna-2-1-6-16v-expression",
            "brand": "Renault",
            "model": "Laguna II",
            "variant": "1.6 16V Expression",
            "years": "2001-2007",
            "generation": "X74",
            "price": 130000,
            "expertNote": "K4M 1.6 16V 107 HP. Laguna II güzel D segment ama elektronik kabusu ile ünlü. Kart anahtar, gösterge paneli, elektrikli el freni — hepsi sorun. Ucuz ama riskli.",
            "reliabilityScore": 60,
            "totalIssues": 6,
            "searchCount": 10000,
            "issues": [
                    {
                            "id": "lag2-1",
                            "title": "Kart Anahtar",
                            "description": "Renault kart anahtarın tanınmaması. Araç çalışmıyor.",
                            "category": "elektronik",
                            "riskLevel": "HIGH",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "3.000 - 6.000 TL"
                    },
                    {
                            "id": "lag2-2",
                            "title": "Gösterge Paneli",
                            "description": "Gösterge panelinin söndüğü veya hatalı bilgi gösterir.",
                            "category": "elektronik",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "2.000 - 5.000 TL"
                    },
                    {
                            "id": "lag2-3",
                            "title": "Elektrikli El Freni",
                            "description": "Otomatik el freni çalışmıyor veya bırakmıyor.",
                            "category": "fren",
                            "riskLevel": "HIGH",
                            "affectedKm": "60.000+ km",
                            "repairCost": "5.000 - 12.000 TL"
                    },
                    {
                            "id": "lag2-4",
                            "title": "Triger Kayışı",
                            "description": "Triger kayışı kopması. Motor hasarı.",
                            "category": "motor",
                            "riskLevel": "CRITICAL",
                            "affectedKm": "60.000 km",
                            "repairCost": "1.500 - 3.000 TL"
                    },
                    {
                            "id": "lag2-5",
                            "title": "Cam Kaldırma",
                            "description": "Cam kaldırma mekanizması arızası.",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "500 - 1.500 TL"
                    },
                    {
                            "id": "lag2-6",
                            "title": "Yağmur Sensörü",
                            "description": "Otomatik silecek / yağmur sensörü arızası.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "500 - 1.500 TL"
                    }
            ],
            "pros": [
                    "Geniş D segment",
                    "Konforlu",
                    "Ucuz ikinci el",
                    "K4M motor güvenilir"
            ],
            "cons": [
                    "Elektronik KABUS",
                    "Kart anahtar sorunu",
                    "El freni felaketi",
                    "Gösterge arızaları"
            ],
            "buyingTips": [
                    "2 kart anahtar çalışıyor mu test edin",
                    "El frenini 10 kez test edin",
                    "Cam tavansız tercih edin",
                    "Çok ucuz olmasının sebebi var"
            ]
    }
,
    {
            "id": "renault-fluence-1-5-dci",
            "slug": "renault-fluence-1-5-dci-icon",
            "brand": "Renault",
            "model": "Fluence",
            "variant": "1.5 dCi Icon",
            "years": "2009-2017",
            "generation": "L38",
            "price": 350000,
            "expertNote": "K9K 1.5 dCi 110 HP. Fluence Megane III'ün sedan versiyonu. Türkiye Bursa üretimi. Icon donanım zengin (navigasyon, deri). dCi motor ekonomik ama enjektör riski var.",
            "reliabilityScore": 72,
            "totalIssues": 6,
            "searchCount": 18000,
            "issues": [
                    {
                            "id": "flu-1",
                            "title": "Enjektör Arızası",
                            "description": "K9K enjektörlerin tıkanması veya kaçırması. Dizel sis.",
                            "category": "motor",
                            "riskLevel": "HIGH",
                            "affectedKm": "120.000+ km",
                            "repairCost": "5.000 - 12.000 TL"
                    },
                    {
                            "id": "flu-2",
                            "title": "Turbo Aktuatör",
                            "description": "Turbo basınç aktuatörü arızası. Güç kaybı.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "100.000+ km",
                            "repairCost": "3.000 - 6.000 TL"
                    },
                    {
                            "id": "flu-3",
                            "title": "DPF Filtresi",
                            "description": "DPF filtresi tıkanması. Şehir içi kullanımda kronik.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Şehir içi",
                            "repairCost": "5.000 - 10.000 TL"
                    },
                    {
                            "id": "flu-4",
                            "title": "Kart Anahtar",
                            "description": "Renault kart anahtarın tanınmaması.",
                            "category": "elektronik",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "2.000 - 5.000 TL"
                    },
                    {
                            "id": "flu-5",
                            "title": "Süspansiyon Sesleri",
                            "description": "Ön süspansiyon bilyaları ve amortisör gıcırtıları.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "40.000+ km",
                            "repairCost": "500 - 1.500 TL"
                    },
                    {
                            "id": "flu-6",
                            "title": "Cam Kaldırma",
                            "description": "Cam kaldırma mekanizması arızası.",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "500 - 1.200 TL"
                    }
            ],
            "pros": [
                    "Ekonomik dCi",
                    "Bursa üretimi",
                    "Geniş sedan",
                    "Icon donanım zengin"
            ],
            "cons": [
                    "Enjektör maliyetli",
                    "DPF sorunu",
                    "Kart anahtar",
                    "Dizel bakım pahalı"
            ],
            "buyingTips": [
                    "Enjektör testi mutlaka",
                    "DPF temizliği yapılmış mı",
                    "1.5 dCi 110 HP en yaygın",
                    "Benzinli 1.6 daha sorunsuz"
            ]
    }
,
    {
            "id": "renault-clio-4-1-2-turbo",
            "slug": "renault-clio-4-1-2-turbo-icon",
            "brand": "Renault",
            "model": "Clio IV",
            "variant": "1.2 Turbo Icon",
            "years": "2012-2019",
            "generation": "X98",
            "price": 350000,
            "expertNote": "H5F 1.2 TCe 120 HP. Clio IV modern tasarım, iyi teknoloji. 1.2 Turbo motor performanslı ama yağ tüketimi bilinen sorun. Icon donanım MediaNav ekranlı.",
            "reliabilityScore": 71,
            "totalIssues": 6,
            "searchCount": 14000,
            "issues": [
                    {
                            "id": "c4-1",
                            "title": "Yağ Tüketimi",
                            "description": "H5F 1.2 Turbo motorlarda kronik yağ tüketimi. Segman tasarım sorunu.",
                            "category": "motor",
                            "riskLevel": "HIGH",
                            "affectedKm": "60.000+ km",
                            "repairCost": "5.000 - 10.000 TL"
                    },
                    {
                            "id": "c4-2",
                            "title": "Turbo Arızası",
                            "description": "Turbo yağ kaçağı ve arızası.",
                            "category": "motor",
                            "riskLevel": "HIGH",
                            "affectedKm": "100.000+ km",
                            "repairCost": "5.000 - 10.000 TL"
                    },
                    {
                            "id": "c4-3",
                            "title": "CVT Şanzıman",
                            "description": "EDC (çift kavrama) şanzıman titreşimi ve arızası.",
                            "category": "sanziman",
                            "riskLevel": "HIGH",
                            "affectedKm": "60.000+ km",
                            "repairCost": "8.000 - 20.000 TL"
                    },
                    {
                            "id": "c4-4",
                            "title": "MediaNav Donması",
                            "description": "MediaNav multimedya sisteminin donması.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Kronik",
                            "repairCost": "1.000 - 3.000 TL"
                    },
                    {
                            "id": "c4-5",
                            "title": "Motor Takozları",
                            "description": "Motor takozlarının sertleşmesi. Titreşim.",
                            "category": "motor",
                            "riskLevel": "LOW",
                            "affectedKm": "60.000+ km",
                            "repairCost": "500 - 1.500 TL"
                    },
                    {
                            "id": "c4-6",
                            "title": "Klima Kompresörü",
                            "description": "Klima kompresörü arızası.",
                            "category": "elektronik",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "100.000+ km",
                            "repairCost": "3.000 - 6.000 TL"
                    }
            ],
            "pros": [
                    "Modern tasarım",
                    "Güçlü 1.2 Turbo",
                    "Icon donanım iyi",
                    "Kompakt ve çevik"
            ],
            "cons": [
                    "Yağ tüketimi KRONIK",
                    "EDC şanzıman riskli",
                    "Turbo maliyetli",
                    "Küçük iç mekan"
            ],
            "buyingTips": [
                    "Manuel şanzıman ŞART tercih edin",
                    "Yağ seviyesi 2x kontrol",
                    "1.0 SCe motor daha güvenilir",
                    "EDC'den KAÇININ"
            ]
    }
,
    {
            "id": "renault-symbol-1-5-dci",
            "slug": "renault-symbol-3-1-5-dci-joy",
            "brand": "Renault",
            "model": "Symbol III",
            "variant": "1.5 dCi Joy",
            "years": "2013-2021",
            "generation": "L52",
            "price": 380000,
            "expertNote": "K9K 1.5 dCi 90 HP. Symbol III (Clio tabanlı sedan) Türkiye'de çok satıldı. Ucuz sedan. Joy donanım temel ama yeterli. dCi motor ekonomik.",
            "reliabilityScore": 73,
            "totalIssues": 5,
            "searchCount": 16000,
            "issues": [
                    {
                            "id": "sym-1",
                            "title": "Enjektör",
                            "description": "K9K enjektör tıkanması.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "120.000+ km",
                            "repairCost": "3.000 - 8.000 TL"
                    },
                    {
                            "id": "sym-2",
                            "title": "Turbo",
                            "description": "Turbo yağ sızıntısı.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "100.000+ km",
                            "repairCost": "3.000 - 6.000 TL"
                    },
                    {
                            "id": "sym-3",
                            "title": "DPF",
                            "description": "DPF filtresi tıkanması.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Şehir içi",
                            "repairCost": "5.000 - 8.000 TL"
                    },
                    {
                            "id": "sym-4",
                            "title": "Süspansiyon",
                            "description": "Ön amortisör ve bilyalar.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "40.000+ km",
                            "repairCost": "500 - 1.500 TL"
                    },
                    {
                            "id": "sym-5",
                            "title": "Cam Kaldırma",
                            "description": "Cam kaldırma mekanizması.",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "500 - 1.000 TL"
                    }
            ],
            "pros": [
                    "Ekonomik dizel",
                    "Ucuz sedan",
                    "Yedek parça ucuz",
                    "Basit mekanik"
            ],
            "cons": [
                    "Joy donanım fakir",
                    "Plastik kalitesi düşük",
                    "DPF sorunu",
                    "İç mekan dar"
            ],
            "buyingTips": [
                    "K9K motor ekonomik",
                    "Joy yeterli ama Touch daha iyi",
                    "Enjektör testi",
                    "Benzinli 1.0 SCe daha güvenilir"
            ]
    }
,
    {
            "id": "renault-megane-3-1-5-dci",
            "slug": "renault-megane-3-1-5-dci-dynamique",
            "brand": "Renault",
            "model": "Megane III",
            "variant": "1.5 dCi Dynamique",
            "years": "2009-2016",
            "generation": "X95",
            "price": 300000,
            "expertNote": "K9K 1.5 dCi 110 HP. Megane III güzel tasarım, iyi sürüş. Dynamique donanım deri direksiyon, klima, cruise control. HB, sedan ve GT Line versiyonları.",
            "reliabilityScore": 71,
            "totalIssues": 6,
            "searchCount": 14000,
            "issues": [
                    {
                            "id": "meg3-1",
                            "title": "Enjektör",
                            "description": "K9K enjektör arızaları.",
                            "category": "motor",
                            "riskLevel": "HIGH",
                            "affectedKm": "120.000+ km",
                            "repairCost": "5.000 - 12.000 TL"
                    },
                    {
                            "id": "meg3-2",
                            "title": "EDC Şanzıman",
                            "description": "EDC çift kavrama şanzıman titreşimi.",
                            "category": "sanziman",
                            "riskLevel": "HIGH",
                            "affectedKm": "60.000+ km",
                            "repairCost": "8.000 - 20.000 TL"
                    },
                    {
                            "id": "meg3-3",
                            "title": "DPF",
                            "description": "DPF filtresi tıkanması.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Şehir içi",
                            "repairCost": "5.000 - 10.000 TL"
                    },
                    {
                            "id": "meg3-4",
                            "title": "Turbo",
                            "description": "Turbo aktuatör arızası.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "100.000+ km",
                            "repairCost": "3.000 - 6.000 TL"
                    },
                    {
                            "id": "meg3-5",
                            "title": "Kart Anahtar",
                            "description": "Kart anahtar tanıma sorunu.",
                            "category": "elektronik",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "2.000 - 5.000 TL"
                    },
                    {
                            "id": "meg3-6",
                            "title": "El Freni Kablosu",
                            "description": "El freni kablosunun kopması.",
                            "category": "fren",
                            "riskLevel": "LOW",
                            "affectedKm": "60.000+ km",
                            "repairCost": "500 - 1.200 TL"
                    }
            ],
            "pros": [
                    "Güzel tasarım",
                    "İyi sürüş",
                    "Dynamique donanım iyi",
                    "HB sportif"
            ],
            "cons": [
                    "EDC şanzıman KABUSu",
                    "Enjektör pahalı",
                    "DPF sorunu",
                    "Kart anahtar"
            ],
            "buyingTips": [
                    "MANUEL ŞANZIMAN tercih edin",
                    "EDC'den KAÇININ",
                    "Enjektör testi",
                    "HB daha sportif"
            ]
    }
,
    {
            "id": "renault-kadjar-1-5-dci",
            "slug": "renault-kadjar-1-5-dci-icon",
            "brand": "Renault",
            "model": "Kadjar",
            "variant": "1.5 dCi Icon",
            "years": "2015-2022",
            "generation": "HFE",
            "price": 600000,
            "expertNote": "K9K 1.5 dCi 110 HP. Kadjar Nissan Qashqai platformu. SUV trendi ile çok satıldı. Icon donanım 7 inç ekran, geri görüş kamerası. Pratik aile SUV'u.",
            "reliabilityScore": 73,
            "totalIssues": 5,
            "searchCount": 14000,
            "issues": [
                    {
                            "id": "kad-1",
                            "title": "Enjektör",
                            "description": "K9K enjektör sorunları.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "120.000+ km",
                            "repairCost": "5.000 - 10.000 TL"
                    },
                    {
                            "id": "kad-2",
                            "title": "EDC Şanzıman",
                            "description": "EDC çift kavrama şanzıman sorunları.",
                            "category": "sanziman",
                            "riskLevel": "HIGH",
                            "affectedKm": "60.000+ km",
                            "repairCost": "8.000 - 20.000 TL"
                    },
                    {
                            "id": "kad-3",
                            "title": "Süspansiyon Sesleri",
                            "description": "Ön süspansiyon gıcırtıları.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "30.000+ km",
                            "repairCost": "500 - 1.500 TL"
                    },
                    {
                            "id": "kad-4",
                            "title": "Turbo",
                            "description": "Turbo aktuatör.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "100.000+ km",
                            "repairCost": "3.000 - 6.000 TL"
                    },
                    {
                            "id": "kad-5",
                            "title": "Multimedya",
                            "description": "R-Link multimedya donması.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Kronik",
                            "repairCost": "1.000 - 3.000 TL"
                    }
            ],
            "pros": [
                    "SUV pratikliği",
                    "Nissan platformu",
                    "Icon donanım iyi",
                    "Geniş bagaj"
            ],
            "cons": [
                    "EDC şanzıman riski",
                    "Enjektör maliyeti",
                    "Plastik iç mekan",
                    "Yol tutuşu orta"
            ],
            "buyingTips": [
                    "Manuel şanzıman tercih",
                    "1.6 dCi 130 HP daha güçlü",
                    "EDC'den kaçının",
                    "Qashqai ile parça ortaklığı"
            ]
    }
,
{
  "id": "renault-clio4-ph2",
  "slug": "renault-clio-4-phase-2-1-5-dci-icon",
  "brand": "Renault",
  "model": "Clio",
  "variant": "Clio IV Phase 2 1.5 dCi Icon",
  "years": "2016-2019",
  "generation": "Ara Kasa (2016-2019)",
  "price": 525000,
  "expertNote": "Phase 2 facelift'te ön tampon, farlar ve arka stoplar değişti. MediaNav Evolution daha stabil. LED gündüz farı standart. 1.5 dCi K9K motor aynı ancak EDC (çift kavramalı otomatik) yazılımı iyileştirildi.",
  "reliabilityScore": 65,
  "totalIssues": 5,
  "searchCount": 15800,
  "issues": [
    {
      "id": "r-c4p2-1",
      "title": "EDC Şanzıman Kavrama Aşınması (Azalmış)",
      "description": "Phase 1'deki EDC kavrama sorunu Phase 2'de yazılım güncellemesiyle azaldı ama tamamen çözülmedi. Yüksek km'de hâlâ kavrama seti değişimi gerekebilir.",
      "category": "sanziman",
      "riskLevel": "MEDIUM",
      "affectedKm": "80.000-130.000 km",
      "repairCost": "8.000 - 15.000 TL"
    },
    {
      "id": "r-c4p2-2",
      "title": "1.5 dCi Turbo Actuator",
      "description": "Turbo actuator elektronik arızası. Check engine yanar, turbo basıncı düşer. Phase 1'den devam eden sorun.",
      "category": "motor",
      "riskLevel": "MEDIUM",
      "affectedKm": "100.000+ km",
      "repairCost": "3.000 - 6.000 TL"
    },
    {
      "id": "r-c4p2-3",
      "title": "MediaNav Evolution Donma (Azalmış)",
      "description": "Phase 1'deki MediaNav çok daha sorunluydu. Evolution versiyonu daha stabil ancak GPS güncellemesi sonrası nadiren donma yaşanabilir.",
      "category": "elektronik",
      "riskLevel": "LOW",
      "affectedKm": "Tüm km",
      "repairCost": "0 - 1.000 TL"
    },
    {
      "id": "r-c4p2-4",
      "title": "Arka Fren Kampana Paslanması",
      "description": "Arka kampanalı frenler nemli iklimlerde paslanıp ses yapabilir. Periyodik temizlik gerekir.",
      "category": "fren",
      "riskLevel": "LOW",
      "affectedKm": "30.000+ km",
      "repairCost": "500 - 2.000 TL"
    },
    {
      "id": "r-c4p2-5",
      "title": "Direksiyon Kolonu Gıcırtısı",
      "description": "Soğuk havalarda direksiyon kolonu gıcırtı sesi çıkarabilir. Yağlama ile çözülür.",
      "category": "suspansiyon",
      "riskLevel": "LOW",
      "affectedKm": "40.000+ km",
      "repairCost": "200 - 800 TL"
    }
  ],
  "pros": [
    "EDC yazılımı Phase 1'e göre iyileşmiş",
    "MediaNav Evolution daha stabil",
    "LED DRL standart",
    "Daha modern ön görünüm",
    "1.5 dCi güvenilir motor"
  ],
  "cons": [
    "EDC kavrama sorunu tam çözülmemiş",
    "Turbo actuator riski devam",
    "Kampanalı arka fren"
  ],
  "buyingTips": [
    "Ph1 ve Ph2 farkını bilin: 2016 Eylül sonrası üretim Phase 2",
    "EDC kavrama seti değişmiş mi sorgulan",
    "MediaNav'ı test edin — daha iyi ama mükemmel değil",
    "Manuel şanzıman tercih ediliyorsa çok daha az sorun"
  ]
}
,
{
  "id": "renault-megane3-ph2",
  "slug": "renault-megane-3-phase-2-1-5-dci-gt-line",
  "brand": "Renault",
  "model": "Megane",
  "variant": "Megane III Phase 2 1.5 dCi GT Line",
  "years": "2012-2016",
  "generation": "Ara Kasa (2012-2016)",
  "price": 450000,
  "expertNote": "Phase 2'de en kritik değişiklik: CVT şanzıman kaldırılıp EDC çift kavrama geldi. CVT Megane 3'ün en büyük kabusuydu. Ayrıca ön tampon, farlar ve iç mekan yenilendi. R-Link multimedya geldi.",
  "reliabilityScore": 62,
  "totalIssues": 5,
  "searchCount": 11200,
  "issues": [
    {
      "id": "r-m3p2-1",
      "title": "EDC Çift Kavrama Aşınması",
      "description": "CVT gitti ama EDC çift kavrama şanzıman kendi sorunlarını getirdi. 80-120 bin km'de kavrama seti değişimi gerekebilir. CVT kadar feci değil ama ucuz da değil.",
      "category": "sanziman",
      "riskLevel": "MEDIUM",
      "affectedKm": "80.000-120.000 km",
      "repairCost": "8.000 - 15.000 TL"
    },
    {
      "id": "r-m3p2-2",
      "title": "1.5 dCi DPF Rejenerasyon Sorunu (Azalmış)",
      "description": "Phase 1'deki DPF sorunları hâlâ var ama yazılım güncellemesiyle rejenerasyon döngüleri iyileştirildi. Şehir içi kısa mesafe kullanımda hâlâ dikkat.",
      "category": "motor",
      "riskLevel": "MEDIUM",
      "affectedKm": "100.000+ km",
      "repairCost": "4.000 - 10.000 TL"
    },
    {
      "id": "r-m3p2-3",
      "title": "R-Link Multimedya Donma",
      "description": "R-Link multimedya sistemi sık sık donabilir, yavaşlayabilir. SD kart üzerinden güncelleme gerekir.",
      "category": "elektronik",
      "riskLevel": "LOW",
      "affectedKm": "Tüm km",
      "repairCost": "0 - 1.000 TL"
    },
    {
      "id": "r-m3p2-4",
      "title": "Kapı Menteşesi Paslanması (Devam)",
      "description": "Phase 1'den devam eden sorun. Özellikle sürücü kapısı menteşesi zamana bağlı paslanıp sıkışabilir.",
      "category": "govde",
      "riskLevel": "LOW",
      "affectedKm": "80.000+ km",
      "repairCost": "800 - 2.500 TL"
    },
    {
      "id": "r-m3p2-5",
      "title": "Arka Amortisör Sızıntısı",
      "description": "Arka amortisörler 60-80 bin km'de yağ sızıntısı yapabilir. Takırtı sesi ve yol tutuş bozulması.",
      "category": "suspansiyon",
      "riskLevel": "MEDIUM",
      "affectedKm": "60.000-80.000 km",
      "repairCost": "2.500 - 5.000 TL"
    }
  ],
  "pros": [
    "CVT KALDIRILDI — en kritik iyileşme",
    "EDC, CVT'den çok daha iyi",
    "R-Link multimedya",
    "Daha modern tasarım",
    "1.5 dCi güvenilir motor"
  ],
  "cons": [
    "EDC kendi sorunlarını getirdi",
    "R-Link yavaş ve buggy",
    "DPF sorunu devam"
  ],
  "buyingTips": [
    "ASLA Phase 1 CVT'li Megane 3 almayın, Phase 2 EDC'yi tercih edin",
    "EDC kavrama seti km'sini sorun",
    "DPF temizliği yapılmış mı kontrol edin",
    "Manuel şanzıman en güvenli seçenek"
  ]
}
];
