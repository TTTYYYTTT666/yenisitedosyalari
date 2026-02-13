import { Car } from '@/types';

export const nissanCars: Car[] = [
        {
        id: "nissan-qashqai-1-3-dig-t",
        slug: "nissan-qashqai-1-3-dig-t",
        brand: "Nissan",
        model: "Qashqai",
        variant: "1.3 DIG-T",
        years: "2021-2024",
        generation: "J12",
        price: 1700000,
        reliabilityScore: 83,
        totalIssues: 3,
        searchCount: 9700,
        issues: [
            {
                id: "qashqai-j12-1",
                title: "12V Hibrit Sistemi Hatası",
                description: "Start-stop ve hibrit sisteminin devre dışı kalması (Sarı İngiliz anahtarı uyarısı).",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "Servis Güncellemesi / Jeneratör Kayışı"
            },
            {
                id: "qashqai-j12-4",
                title: "Triger Zinciri Sesi",
                description: "Soğuk çalıştırmada 1.3 DIG-T motordan gelen şakırtı sesi (Zincir uzaması).",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "40.000 - 70.000 km",
                repairCost: "30.000 - 50.000 TL"
            },
            {
                id: "qashqai-j12-3",
                title: "X-Tronic Şanzıman Silkelemesi",
                description: "Düşük hızlarda veya dur-kalk trafikte CVT şanzımanın kararsızlığı.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "30.000+ km",
                repairCost: "Yazılım / Şanzıman Yağı"
            },
            {
                id: "qashqai-j12-2",
                title: "Termostat Gövdesi Kaçağı",
                description: "Plastik termostat gövdesinden su sızdırması ve hararet riski.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "60.000+ km",
                repairCost: "8.000 - 15.000 TL"
            },
            {
                id: "qashqai-j12-5",
                title: "Direksiyon Kutusu Sesi",
                description: "Manevralarda direksiyondan gelen tıkırtı veya gıcırtı sesi.",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "20.000+ km",
                repairCost: "Yağlama / Değişim"
            },
            {
                id: "qashqai-j12-6",
                title: "Multimedya Donması",
                description: "Ekranın tepki vermemesi veya siyah ekran (Nissan Connect).",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Yazılım Güncelleme"
            }
        ],
        pros: [
            "Konforlu süspansiyon",
            "Geniş iç mekan",
            "Güvenlik donanımı"
        ],
        cons: [
            "CVT şanzıman hissizliği",
            "Multimedya arayüzü"
        ],
        buyingTips: [
            "Akü voltajını ölçtürün",
            "Kaput titremesi var mı bakın (Yüksek hızda)"
        ]
    },
        {
        id: "nissan-juke-1-0-dig-t",
        slug: "nissan-juke-1-0-dig-t",
        brand: "Nissan",
        model: "Juke",
        variant: "1.0 DIG-T",
        years: "2019-2024",
        generation: "F16",
        reliabilityScore: 84,
        totalIssues: 2,
        searchCount: 6000,
        issues: [
            {
                id: "juke-1",
                title: "DCT Şanzıman Isınması",
                description: "Yoğun trafikte çift kavramalı şanzımanın ısınması ve silkelemesi.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "Şehir İçi",
                repairCost: "Soğutma / Kavrama"
            },
            {
                id: "juke-2",
                title: "Start-Stop ve Akü Deşarjı",
                description: "Akü kapasitesinin yetersiz kalması sonucu sistemin devre dışı kalması.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Akü Değişimi (EFB/AGM)"
            },
            {
                id: "juke-3",
                title: "Soğuk Motorda Silkeleme",
                description: "Motor soğukken ilk kalkışta tekleme ve gaz yememe sorunu.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Soğuk Havalar",
                repairCost: "Yazılım Güncelleme"
            },
            {
                id: "juke-4",
                title: "Elektronik Park Freni",
                description: "El freninin takılı kalması veya bırakmaması.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "Modül Değişimi"
            },
            {
                id: "juke-5",
                title: "Turbo Gecikmesi (Lag)",
                description: "Alt devirlerde belirgin güç eksikliği ve ani hızlanma isteğine geç cevap verme.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Yok"
            }
        ],
        pros: [
            "Tasarım",
            "Ses sistemi (Bose)",
            "Sürüş"
        ],
        cons: [
            "Arka alan",
            "Sert süspansiyon"
        ],
        buyingTips: [
            "DCT geçişlerini kontrol edin"
        ]
    },
        {
        id: "nissan-qashqai-j11",
        slug: "nissan-qashqai-j11-1-5-dci",
        brand: "Nissan",
        model: "Qashqai",
        variant: "J11 1.5 dCi Sky Pack",
        years: "2014-2021",
        generation: "J11",
        price: 1650000,
        reliabilityScore: 86,
        totalIssues: 2,
        searchCount: 45000,
        issues: [
            {
                id: "qashqai-1",
                title: "Turbo Hortumu",
                description: "Turbo hortumunun patlaması ve güç kaybı.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "3.000 - 6.000 TL"
            },
            {
                id: "qashqai-2",
                title: "Start-Stop Hatası",
                description: "Akü zayıflığına bağlı sistem hatası.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "3-4 Yıl",
                repairCost: "5.000 - 8.000 TL"
            }
        ],
        pros: [
            "Piyasa lideri",
            "Panoramik cam tavan",
            "Yakıt"
        ],
        cons: [
            "Multimedya eski",
            "Rüzgar sesi"
        ],
        buyingTips: [
            "Turbo hortumunun orijinal olup olmadığını kontrol edin (Yan sanayi çabuk patlar)."
        ]
    },
        {
        id: "nissan-xtrail",
        slug: "nissan-xtrail-1-6-dci",
        brand: "Nissan",
        model: "X-Trail",
        variant: "1.6 dCi Platinum",
        years: "2014-2021",
        generation: "T32",
        reliabilityScore: 81,
        totalIssues: 2,
        searchCount: 13000,
        issues: [
            {
                id: "xtrail-1",
                title: "Turbo Hortumu",
                description: "Turbo hortumunun yırtılması.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "5.000 TL"
            },
            {
                id: "xtrail-2",
                title: "DPF ve Enjektör",
                description: "Yakıt sistemi hassasiyeti.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "15.000 TL"
            }
        ],
        pros: [
            "Panoramik cam tavan",
            "7 Koltuk",
            "İkinci el"
        ],
        cons: [
            "CVT performansı",
            "İç mekan kalitesi"
        ],
        buyingTips: [
            "Turbo hortumlarında yağ kaçağı var mı?"
        ]
    },
        {
        id: "nissan-juke-1-6-cvt",
        slug: "nissan-juke-1-6-cvt",
        brand: "Nissan",
        model: "Juke",
        variant: "1.6 Visia/Tekna",
        years: "2011-2019",
        generation: "F15",
        expertNote: "Ya çok seversin ya nefret edersin. Şehir içi için idealdir ama arka koltuğa ancak çocuğunu oturtursun. CVT şanzımanı biraz nazlıdır, yağına suyuna dikkat et.",
        price: 750000,
        reliabilityScore: 82,
        totalIssues: 3,
        searchCount: 14000,
        issues: [
            {
                id: "juke-1",
                title: "CVT Şanzıman",
                description: "Şanzıman ısınması ve devir dalgalanması (Koruma moduna alır).",
                category: "sanziman",
                riskLevel: "HIGH",
                affectedKm: "100.000+ km",
                repairCost: "35.000 - 60.000 TL"
            },
            {
                id: "juke-2",
                title: "Kapı Kolları",
                description: "Arka kapı kollarının (gizli kol) kırılması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "1.000 - 2.000 TL"
            },
            {
                id: "juke-3",
                title: "Boya Atması",
                description: "Tampon köşe boyalarının dökülmesi.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "Kozmetik"
            }
        ],
        pros: [
            "Sıradışı tasarım",
            "Yüksek sürüş",
            "Park kolaylığı"
        ],
        cons: [
            "Klostrofobik arka taraf",
            "CVT şanzıman riski",
            "Bagaj yok gibi"
        ],
        buyingTips: [
            "Şanzımanı yokuşta zorlayın, ötme var mı?",
            "Arka kapı kollarını kontrol edin"
        ]
    },
];
