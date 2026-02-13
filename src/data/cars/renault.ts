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
        totalIssues: 5,
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
                repairCost: "Yazılım"
            },
            {
                id: "clio-5-yeni-2",
                title: "Multimedya Donması",
                description: "Ekranın siyah olması veya Apple CarPlay bağlantı kopması.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Yazılım Güncelleme"
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
                repairCost: "Yazılım / Kavrama"
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
                repairCost: "İzolasyon"
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
        totalIssues: 5,
        searchCount: 7800,
        issues: [
            {
                id: "symbol-3",
                title: "Teyp Ekranı Silinmesi",
                description: "Hava veya teyp ısınınca ekranın yazılarının kaybolması (Kronik).",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "Ekran Değişimi"
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
                repairCost: "Kaplama"
            },
            {
                id: "symbol-4",
                title: "Triger Kayışı Risk",
                description: "4 yıl / 60.000 km periyodu aşılırsa kopma riski çok yüksek.",
                category: "motor",
                riskLevel: "CRITICAL",
                affectedKm: "Bakım Aksarsa",
                repairCost: "Motor Revizyonu"
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
        totalIssues: 2,
        searchCount: 13000,
        issues: [
            {
                id: "clio4-1",
                title: "Rüzgar Sesi (Ayna/Kelebek Camı)",
                description: "90 km/s üzeri hızlarda kapı fitillerinden ve aynalardan gelen rüzgar uğultusu.",
                category: "govde",
                riskLevel: "MEDIUM",
                affectedKm: "Tüm Kilometreler",
                repairCost: "Fitil Değişimi"
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
                repairCost: "Yalıtım"
            },
            {
                id: "clio4-4",
                title: "Start-Stop Arızası",
                description: "Akü voltajı düşüklüğü nedeniyle start-stop sisteminin çalışmaması.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Akü Değişimi"
            },
            {
                id: "clio4-5",
                title: "Yakıt Şamandıra Sesi",
                description: "Depo dolu olduğunda arkadan gelen dalgalanma sesi.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Depo Fulken",
                repairCost: "Çözümsüz"
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
        totalIssues: 1,
        searchCount: 5000,
        issues: [
            {
                id: "taliant-1",
                title: "CVT Şanzıman Isınması",
                description: "Uzun süreli yokuşlarda veya sıkışık trafikte şanzıman ısınma uyarısı.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "Ağır şartlar",
                repairCost: "Soğutma (Bekleme)"
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
                repairCost: "Yazılım / Pil Değişimi"
            },
            {
                id: "taliant-4",
                title: "Multimedya Ekran Donması",
                description: "Ekranın kilitlenmesi veya tepki vermemesi (Apple CarPlay/Android Auto).",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Yazılım Güncelleme"
            },
            {
                id: "taliant-5",
                title: "Yüksek Yakıt Tüketimi",
                description: "Şehir içi kullanımda fabrika verisinin çok üzerinde yakıt tüketimi (8-9L).",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Sürekli",
                repairCost: "Karakteristik"
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
        totalIssues: 2,
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
                repairCost: "Servis Takibi"
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
                repairCost: "Yazılım Güncelleme"
            },
            {
                id: "captur-5",
                title: "Trim Sesleri",
                description: "B sütunu ve bagaj kapağından gelen plastik sesleri.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "Yalıtım"
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
        totalIssues: 2,
        searchCount: 12000,
        issues: [
            {
                id: "austral-1",
                title: "OpenR Link Ekran Donması",
                description: "Multimedya ekranının kilitlenmesi, kararması veya tepkisiz kalması.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "Yazılım Güncelleme"
            },
            {
                id: "austral-2",
                title: "Trim ve Konsol Sesleri",
                description: "Özellikle orta konsol ve kapı içlerinden gelen gıcırtı sesleri.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Sıfırdan itibaren",
                repairCost: "Yalıtım (Servis Aksiyonu)"
            },
            {
                id: "austral-3",
                title: "Rüzgar Sesi (110 km/s+)",
                description: "Yüksek hızlarda A sütunu ve aynalardan gelen rüzgar uğultusu.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Yüksek Hız",
                repairCost: "Fitil İyileştirme"
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
                repairCost: "Servis Güncellemesi"
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
        totalIssues: 2,
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
        totalIssues: 3,
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
                repairCost: "Kozmetik"
            },
            {
                id: "fluence-2",
                title: "Kapı Gergisi",
                description: "Kapıyı açarken gelen \"çat çat\" sesi (Kronik).",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "1.500 TL"
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
        totalIssues: 2,
        searchCount: 18000,
        issues: [
            {
                id: "koleos-1",
                title: "X-Tronic Şanzıman",
                description: "CVT şanzımanın yüksek tork altında ısınması.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "Zorlu kullanım",
                repairCost: "Yağ değişimi / Revizyon"
            },
            {
                id: "koleos-2",
                title: "Elektrikli Bagaj",
                description: "Bagaj kapağının sensör arızası.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "2.000 - 4.000 TL"
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
        totalIssues: 3,
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
        totalIssues: 2,
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
        totalIssues: 3,
        searchCount: 10500,
        issues: [
            {
                id: "kadjar-1",
                title: "Rüzgar Sesi",
                description: "100 km/s üzeri hızlarda yoğun rüzgar sesi (Ayna kaynaklı).",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "Fitil / İzolasyon"
            },
            {
                id: "kadjar-2",
                title: "Trim Sesleri",
                description: "Orta konsol ve kapı tutamaklarından gelen gıcırtılar.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Sıfırdan itibaren",
                repairCost: "İzolasyon"
            },
            {
                id: "kadjar-3",
                title: "EDC Kararsızlığı",
                description: "Düşük hızlarda şanzımanın vites seçememesi.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "Karakteristik",
                repairCost: "Yazılım"
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
];
