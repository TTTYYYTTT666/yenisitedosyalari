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
        totalIssues: 6,
        searchCount: 9700,
        issues: [
            {
                id: "qashqai-j12-1",
                title: "12V Hibrit Sistemi Hatası",
                description: "Start-stop ve hibrit sisteminin devre dışı kalması (Sarı İngiliz anahtarı uyarısı).",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "1.500 - 4.000 TL (Yazılım)"
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
                repairCost: "1.500 - 4.000 TL (Yazılım)"
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
                repairCost: "2.000 - 5.000 TL (Yağ)"
            },
            {
                id: "qashqai-j12-6",
                title: "Multimedya Donması",
                description: "Ekranın tepki vermemesi veya siyah ekran (Nissan Connect).",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "1.500 - 4.000 TL (Yazılım)"
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
        totalIssues: 5,
        searchCount: 6000,
        issues: [
            {
                id: "juke-1",
                title: "DCT Şanzıman Isınması",
                description: "Yoğun trafikte çift kavramalı şanzımanın ısınması ve silkelemesi.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "Şehir İçi",
                repairCost: "2.000 - 5.000 TL"
            },
            {
                id: "juke-2",
                title: "Start-Stop ve Akü Deşarjı",
                description: "Akü kapasitesinin yetersiz kalması sonucu sistemin devre dışı kalması.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "3.000 - 8.000 TL (Tamir)"
            },
            {
                id: "juke-3",
                title: "Soğuk Motorda Silkeleme",
                description: "Motor soğukken ilk kalkışta tekleme ve gaz yememe sorunu.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Soğuk Havalar",
                repairCost: "1.500 - 4.000 TL (Yazılım)"
            },
            {
                id: "juke-4",
                title: "Elektronik Park Freni",
                description: "El freninin takılı kalması veya bırakmaması.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "5.000 - 15.000 TL (Modül)"
            },
            {
                id: "juke-5",
                title: "Turbo Gecikmesi (Lag)",
                description: "Alt devirlerde belirgin güç eksikliği ve ani hızlanma isteğine geç cevap verme.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "0 TL (Karakteristik)"
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
        totalIssues: 4,
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
            },
            {
                id: "qashqai-j11-1-5-dci-auto-3",
                title: "DPF Tıkanması",
                description: "Şehir içi kısa mesafe kullanımda DPF filtresinin dolması.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Şehir içi kullanım",
                repairCost: "5.000 - 12.000 TL"
            },
            {
                id: "qashqai-j11-1-5-dci-auto-4",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
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
        totalIssues: 4,
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
            },
            {
                id: "xtrail-1-6-dci-auto-3",
                title: "DPF Tıkanması",
                description: "Şehir içi kısa mesafe kullanımda DPF filtresinin dolması.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Şehir içi kullanım",
                repairCost: "5.000 - 12.000 TL"
            },
            {
                id: "xtrail-1-6-dci-auto-4",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
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
        totalIssues: 5,
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
                repairCost: "3.000 - 10.000 TL (Boya/Rötuş)"
            },
            {
                id: "juke-1-6-cvt-auto-4",
                title: "12V Akü Boşalması",
                description: "12V yardımcı akünün uzun park halinde boşalması.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "3.000 - 5.000 TL"
            },
            {
                id: "juke-1-6-cvt-auto-5",
                title: "Şarj Kapağı Sorunu",
                description: "Şarj kapağının donması veya mekanik olarak açılmaması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kış ayları",
                repairCost: "1.500 - 3.000 TL"
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

    // ─── Eski new-cars dosyasından taşındı ───
    {
        id: "nissan-note-1-5-dci",
        slug: "nissan-note-1-5-dci",
        brand: "Nissan",
        model: "Note",
        variant: "1.5 dCi",
        years: "2006-2013",
        generation: "E11",
        price: 250000,
        reliabilityScore: 73,
        totalIssues: 5,
        searchCount: 5500,
        expertNote: "Note pratik mini MPV. Renault 1.5 dCi motor güvenilir. Küçük dışarıdan ama içeride şaşırtıcı geniş. Kayan arka koltuk sistemi çok pratik. Basit ve işlevsel.",
        issues: [
            { id: "note-1", title: "Enjektör Arızası", description: "1.5 dCi enjektörlerin yüksek km'de tıkanması.", category: "motor", riskLevel: "HIGH", affectedKm: "120.000+ km", repairCost: "5.000 - 12.000 TL" },
            { id: "note-2", title: "Turbo Aktuatör", description: "Turbo aktuatörünün bozulması. Güç kaybı.", category: "motor", riskLevel: "MEDIUM", affectedKm: "80.000+ km", repairCost: "4.000 - 8.000 TL" },
            { id: "note-3", title: "Ön Süspansiyon Bilyası", description: "Ön salıncak bilyası aşınması. Vuruntu.", category: "suspansiyon", riskLevel: "LOW", affectedKm: "50.000+ km", repairCost: "1.500 - 3.000 TL" },
            { id: "note-4", title: "Kapı Kilit Aktüatörü", description: "Merkezi kilit aktüatörlerinin bozulması.", category: "elektronik", riskLevel: "LOW", affectedKm: "60.000+ km", repairCost: "1.000 - 2.000 TL" },
            { id: "note-5", title: "Bagaj Amortisörü", description: "Bagaj kapağı gaz amortisörlerinin zayıflaması.", category: "govde", riskLevel: "LOW", affectedKm: "Yaş kaynaklı", repairCost: "500 - 1.000 TL" }
        ],
        pros: ["Pratik kayan koltuk", "Ekonomik dCi", "Küçük ama geniş", "Ucuz bakım"],
        cons: ["Tasarımı sıradan", "Otoyolda yetersiz", "Parça bulma zorlaşıyor"],
        buyingTips: ["Enjektör testi", "Turbo kontrolü", "Yaş kaynaklı pas"]
    }
,

    // ─── Eski new-cars dosyasından taşındı ───
    {
        id: "nissan-navara-2-3-dci",
        slug: "nissan-navara-2-3-dci",
        brand: "Nissan",
        model: "Navara",
        variant: "2.3 dCi",
        years: "2016-2023",
        generation: "D23",
        price: 2200000,
        reliabilityScore: 74,
        totalIssues: 6,
        searchCount: 6500,
        expertNote: "Navara pick-up segmentinin en konforlu aracıdır (bağımsız arka süspansiyon). Ama bu avantaj dezavantaja dönüşebilir — arka aks yüklüyken sarkma problemi vardır. 4x4 sistemi güvenilirdir.",
        issues: [
            { id: "navara-1", title: "Arka Süspansiyon Sarkması", description: "Bağımsız arka süspansiyonun ağır yük altında sarkması ve helezon yayların yorulması. Nissan takviye yay kiti çıkardı ancak tam çözmez. Yüklü kullanımda sürekli yaşanır.", category: "suspansiyon", riskLevel: "HIGH", affectedKm: "30.000+ km (Yüklü)", repairCost: "8.000 - 15.000 TL" },
            { id: "navara-2", title: "Enjektör Arızası (2.3 dCi)", description: "Piezo enjektörlerin arızalanması sonucu motor titremesi, güç kaybı ve siyah duman. Kötü yakıt enjektör ömrünü ciddi kısaltır.", category: "motor", riskLevel: "HIGH", affectedKm: "80.000+ km", repairCost: "15.000 - 30.000 TL" },
            { id: "navara-3", title: "DPF Tıkanması", description: "Şehir içi ve düşük devir kullanımda partikül filtresi dolması. Pick-up olmasına rağmen şehir içinde kullanılıyorsa sık yaşanır.", category: "motor", riskLevel: "MEDIUM", affectedKm: "60.000+ km", repairCost: "10.000 - 20.000 TL" },
            { id: "navara-4", title: "Transfer Case Aktüatör Arızası", description: "4WD seçici aktüatörünün arızalanması. 2WD'den 4WD'ye geçiş yapılamaması veya geçiş sırasında ses gelmesi.", category: "sanziman", riskLevel: "MEDIUM", affectedKm: "70.000+ km", repairCost: "10.000 - 20.000 TL" },
            { id: "navara-5", title: "Klima Kompresörü", description: "Klima kompresörünün aşırı ses yapması veya tamamen durması. Sıcak iklimlerde sık yaşanır.", category: "elektronik", riskLevel: "MEDIUM", affectedKm: "80.000+ km", repairCost: "10.000 - 18.000 TL" },
            { id: "navara-6", title: "Kasa Korozyonu", description: "Kasa iç kısmında ve çamurluk bağlantılarında korozyon başlaması. Pick-up kullanım koşullarına bağlı.", category: "govde", riskLevel: "LOW", affectedKm: "5+ Yıl", repairCost: "5.000 - 15.000 TL (Kaplama)" }
        ],
        pros: ["Bağımsız arka süspansiyon (Konfor)", "Güçlü 2.3 dCi motor (190hp)", "4x4 güvenilirliği", "Geniş kabin"],
        cons: ["Arka süspansiyon sarkması", "Yüksek yakıt tüketimi", "Parça ve servis pahalı"],
        buyingTips: ["Arka süspansiyonu yüklü kontrol edin (Sarkma var mı?)", "4x4 modlarını test edin", "DPF taraması yaptırın"]
    }
,

    // ─── Eski new-cars dosyasından taşındı ───
    {
        id: "nissan-qashqai-e-power",
        slug: "nissan-qashqai-e-power",
        brand: "Nissan",
        model: "Qashqai",
        variant: "e-POWER N-Connecta",
        years: "2022-2025",
        generation: "J12 e-POWER",
        price: 1600000,
        expertNote: "Seri hibrit — benzinli motor sadece jeneratör görevi yapar, tekerlekleri elektrik motor döndürür. Elektrikli araç hissi verir ama şarj etmeye gerek yoktur. e-Pedal ile tek pedalla sürüş mümkün.",
        reliabilityScore: 84,
        totalIssues: 5,
        searchCount: 20000,
        issues: [
            {
                id: "qash-ep-1",
                title: "Motor Devir Davranışı",
                description: "Benzinli jeneratör motorun beklenmedik anlarda devir yükseltmesi. Elektrikli hisse alışmış sürücüyü rahatsız eder.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "0 TL (Karakteristik)"
            },
            {
                id: "qash-ep-2",
                title: "12V Akü Zayıflığı",
                description: "Hibrit sistemin aksesuar aküsünü yorması. Araç açılmama sorunu.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "24 ay+",
                repairCost: "3.000 - 5.000 TL"
            },
            {
                id: "qash-ep-3",
                title: "e-Pedal Adaptasyon",
                description: "Tek pedal sürüşe (e-Pedal) adapte olmak zaman alır. Yanlış fren hissi verebilir.",
                category: "fren",
                riskLevel: "LOW",
                affectedKm: "Kullanıcıya bağlı",
                repairCost: "0 TL (Tasarım Kaynaklı)"
            },
            {
                id: "qash-ep-4",
                title: "ProPILOT Asistan Uyarıları",
                description: "Şerit takip ve adaptif hız asistanının yanlış uyarılar vermesi.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Hava koşullarına bağlı",
                repairCost: "1.500 - 4.000 TL (Yazılım)"
            },
            {
                id: "qash-ep-5",
                title: "Rüzgar Sesi (Ayna)",
                description: "Yüksek hızlarda dikiz aynasından gelen rüzgar sesi.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "110+ km/s",
                repairCost: "500 - 2.000 TL (Fitil)"
            }
        ],
        pros: [
            "Elektrikli araç hissi",
            "Şarj gerektirmiyor",
            "Sessiz sürüş"
        ],
        cons: [
            "Motor devir davranışı",
            "Fiyat",
            "Bagaj kapasitesi azalmış"
        ],
        buyingTips: [
            "e-Pedal modunu test sürüşünde deneyin",
            "Motor devir davranışını gözlemleyin",
            "N-Connecta donanım yeterlidir"
        ]
    }
,

    // ─── Eski new-cars dosyasından taşındı ───
    {
        id: "nissan-qashqai-j10-1-5-dci",
        slug: "nissan-qashqai-j10-1-5-dci",
        brand: "Nissan",
        model: "Qashqai",
        variant: "J10 1.5 dCi",
        years: "2007-2013",
        generation: "J10",
        price: 380000,
        reliabilityScore: 74,
        totalIssues: 6,
        searchCount: 9000,
        expertNote: "Qashqai J10 crossover segmentini yaratan araç. Renault 1.5 dCi motor güvenilir ve ekonomik. Ama DPF tıkanması ve turbo sorunları var. CVT şanzıman yoktu, 6MT veya 6AT seçenekleri vardı.",
        issues: [
            { id: "qj10-1", title: "DPF Tıkanması", description: "Şehir içi kısa mesafe kullanımda partikül filtresi dolması. Rejenerasyon uyarısı ve güç kaybı.", category: "motor", riskLevel: "HIGH", affectedKm: "60.000+ km", repairCost: "5.000 - 15.000 TL" },
            { id: "qj10-2", title: "Turbo Aktuatör Arızası", description: "Turbo basınç regülatör aktuatörünün bozulması. Motor limp mode.", category: "motor", riskLevel: "MEDIUM", affectedKm: "80.000+ km", repairCost: "5.000 - 10.000 TL" },
            { id: "qj10-3", title: "Ön Süspansiyon Alt Kol", description: "Ön alt kol burçları ve bilyası aşınması. Vuruntu sesi ve direksiyon boşluğu.", category: "suspansiyon", riskLevel: "MEDIUM", affectedKm: "50.000+ km", repairCost: "2.000 - 5.000 TL" },
            { id: "qj10-4", title: "Cam Tavan Mekanizması", description: "Cam tavan motorunun bozulması veya rayların aşınması. Tavan sıkışması.", category: "govde", riskLevel: "LOW", affectedKm: "80.000+ km", repairCost: "5.000 - 10.000 TL" },
            { id: "qj10-5", title: "Kapı Ayna Katlanma Arızası", description: "Elektrikli katlanır ayna motorunun bozulması.", category: "elektronik", riskLevel: "LOW", affectedKm: "60.000+ km", repairCost: "2.000 - 4.000 TL" },
            { id: "qj10-6", title: "Bagaj Kapağı Amortisörü", description: "Bagaj kapağı gaz amortisörlerinin zayıflaması. Kapak açık kalmaz.", category: "govde", riskLevel: "LOW", affectedKm: "Yaş kaynaklı", repairCost: "500 - 1.500 TL" }
        ],
        pros: ["Crossover segmentini yarattı", "Ekonomik 1.5 dCi", "Yüksek sürüş pozisyonu", "Geniş kabin"],
        cons: ["DPF sorunları", "Yaşlandıkça parça bulmak zorlaşıyor", "Plastik kalitesi düşük"],
        buyingTips: ["DPF doluluk oranını tarattırın", "Turbo basıncını kontrol ettirin", "Alt takım kontrolü yaptırın"]
    }
,
    {
            "id": "nissan-micra-ig-t",
            "slug": "nissan-micra-ig-t",
            "brand": "Nissan",
            "model": "Micra (K14)",
            "variant": "1.0 IG-T N-Connecta",
            "years": "2017-2024",
            "generation": "K14",
            "price": 800000,
            "expertNote": "HR10DET 1.0 Turbo 100 HP. Yeni nesil Micra artık premium hissiyat veriyor. Renault-Nissan ortaklığında Fransa'da üretiliyor. Bose ses sistemi opsiyonu sınıfında eşsiz.",
            "reliabilityScore": 82,
            "totalIssues": 5,
            "searchCount": 8000,
            "issues": [
                    {
                            "id": "micra-1",
                            "title": "CVT/Otomatik Gecikmesi",
                            "description": "Xtronic (CVT) şanzımanda kalkışta gecikme.",
                            "category": "sanziman",
                            "riskLevel": "LOW",
                            "affectedKm": "Karakteristik",
                            "repairCost": "0 TL (Karakteristik)"
                    },
                    {
                            "id": "micra-2",
                            "title": "Turbo Lag",
                            "description": "1.0 turbo motorun düşük devirde gecikmesi.",
                            "category": "motor",
                            "riskLevel": "LOW",
                            "affectedKm": "Karakteristik",
                            "repairCost": "0 TL (Karakteristik)"
                    },
                    {
                            "id": "micra-3",
                            "title": "Rüzgar Sesi",
                            "description": "Yüksek hızlarda ayna bölgesinden ses.",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "120+ km/h",
                            "repairCost": "1.000 - 3.000 TL (Fitil)"
                    },
                    {
                            "id": "micra-4",
                            "title": "StartStop Akü",
                            "description": "Start-stop sisteminin aküyü yormasi.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "2-3 yıl",
                            "repairCost": "3.000 - 5.000 TL"
                    },
                    {
                            "id": "micra-5",
                            "title": "Arka Süspansiyon Sertliği",
                            "description": "Arka süspansiyonun sert olması. Kasislerde rahatsız.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "Tasarım",
                            "repairCost": "0 TL (Karakteristik)"
                    }
            ],
            "pros": [
                    "Premium iç mekan",
                    "Bose ses sistemi",
                    "Kompakt boyut",
                    "Düşük yakıt"
            ],
            "cons": [
                    "Arka alan dar",
                    "Bagaj küçük",
                    "1.0 motor otoyolda yetersiz"
            ],
            "buyingTips": [
                    "N-Connecta donanım minimum",
                    "Bose paketi tercih edin",
                    "Manuel versiyonu daha eğlenceli"
            ]
    }
,
    {
            "id": "nissan-xtrail-t31-2-0-dci",
            "slug": "nissan-xtrail-t31-2-0-dci",
            "brand": "Nissan",
            "model": "X-Trail (T31)",
            "variant": "2.0 dCi 4x4 Platinum",
            "years": "2007-2014",
            "generation": "T31",
            "price": 700000,
            "expertNote": "M9R 2.0 dCi 150 HP + 6AT + 4x4. T31 X-Trail Türkiye'de arazi aracı olarak çok sevildi. Motor Renault M9R güvenilir. 4x4 sistemi gerçek off-road sunuyor.",
            "reliabilityScore": 76,
            "totalIssues": 5,
            "searchCount": 9000,
            "issues": [
                    {
                            "id": "xt31-1",
                            "title": "Enjektör Arızası",
                            "description": "M9R enjektörlerin yüksek km'de arızalanması.",
                            "category": "motor",
                            "riskLevel": "HIGH",
                            "affectedKm": "120.000+ km",
                            "repairCost": "8.000 - 18.000 TL"
                    },
                    {
                            "id": "xt31-2",
                            "title": "DPF Tıkanması",
                            "description": "Şehir içi kullanımda DPF dolması.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Şehir içi",
                            "repairCost": "5.000 - 15.000 TL"
                    },
                    {
                            "id": "xt31-3",
                            "title": "Transfer Case",
                            "description": "4x4 transfer kutusu aktüatör arızası.",
                            "category": "sanziman",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "100.000+ km",
                            "repairCost": "8.000 - 15.000 TL"
                    },
                    {
                            "id": "xt31-4",
                            "title": "Arka Süspansiyon",
                            "description": "Arka süspansiyon burçlarının aşınması.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "80.000+ km",
                            "repairCost": "2.000 - 5.000 TL"
                    },
                    {
                            "id": "xt31-5",
                            "title": "Cam Tavan Dreni",
                            "description": "Panoramik tavan dreni tıkanması.",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "2.000 - 4.000 TL"
                    }
            ],
            "pros": [
                    "Gerçek 4x4",
                    "Geniş kabin",
                    "Güvenilir M9R motor",
                    "Uygun fiyat"
            ],
            "cons": [
                    "Enjektör riski",
                    "DPF sorunları",
                    "Yakıt tüketimi yüksek"
            ],
            "buyingTips": [
                    "Enjektör testi yaptırın",
                    "4x4 modlarını test edin",
                    "Platinum donanım tercih edin"
            ]
    }
,
    {
            "id": "nissan-pulsar-1-5-dci",
            "slug": "nissan-pulsar-1-5-dci",
            "brand": "Nissan",
            "model": "Pulsar (C13)",
            "variant": "1.5 dCi Tekna",
            "years": "2014-2018",
            "generation": "C13",
            "price": 500000,
            "expertNote": "K9K 1.5 dCi 110 HP. Pulsar Nissan'ın Golf rakibi C segment hatchback'i. Renault dCi motor güvenilir. Çok geniş arka alan (sınıfının en iyisi). Kısa ömürlü model.",
            "reliabilityScore": 79,
            "totalIssues": 5,
            "searchCount": 5000,
            "issues": [
                    {
                            "id": "puls-1",
                            "title": "DPF Tıkanması",
                            "description": "Şehir içi kullanımda DPF dolması.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Şehir içi",
                            "repairCost": "5.000 - 12.000 TL"
                    },
                    {
                            "id": "puls-2",
                            "title": "Enjektör",
                            "description": "dCi enjektör tıkanması.",
                            "category": "motor",
                            "riskLevel": "HIGH",
                            "affectedKm": "120.000+ km",
                            "repairCost": "5.000 - 12.000 TL"
                    },
                    {
                            "id": "puls-3",
                            "title": "Ön Süspansiyon",
                            "description": "Ön alt kol bilyası aşınması.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "50.000+ km",
                            "repairCost": "1.500 - 3.000 TL"
                    },
                    {
                            "id": "puls-4",
                            "title": "Multimedya",
                            "description": "NissanConnect ekranının yavaşlaması.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "1.500 - 4.000 TL (Yazılım)"
                    },
                    {
                            "id": "puls-5",
                            "title": "Kapı Kilit",
                            "description": "Merkezi kilit aktüatörü arızası.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "60.000+ km",
                            "repairCost": "1.000 - 2.000 TL"
                    }
            ],
            "pros": [
                    "Sınıfının en geniş arka alanı",
                    "Ekonomik dCi",
                    "Geniş C segment",
                    "Ucuz ikinci el"
            ],
            "cons": [
                    "Kısa ömürlü model",
                    "Parça bulmak zorlaşıyor",
                    "Tasarımı sıradan"
            ],
            "buyingTips": [
                    "DPF taraması yaptırın",
                    "Tekna donanım tercih edin",
                    "Enjektör kontrolü"
            ]
    }
,
    {
            "id": "nissan-primera-p11-2-0",
            "slug": "nissan-primera-p11-2-0-gx",
            "brand": "Nissan",
            "model": "Primera",
            "variant": "P11 2.0 GX",
            "years": "1996-2002",
            "generation": "P11",
            "price": 80000,
            "expertNote": "SR20DE 2.0 140 HP. Primera P11 Nissan'ın C/D segment aracı. SR20 motor güvenilir ve güçlü. İyi yol tutuşu. Türkiye'de az bilinen ama kaliteli araç.",
            "reliabilityScore": 76,
            "totalIssues": 5,
            "searchCount": 8000,
            "issues": [
                    {
                            "id": "p11-1",
                            "title": "Triger Zinciri",
                            "description": "SR20 motorlarda triger zinciri gergisi aşınması.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "120.000+ km",
                            "repairCost": "2.000 - 4.000 TL"
                    },
                    {
                            "id": "p11-2",
                            "title": "Motor Takozları",
                            "description": "Motor takozlarının sertleşmesi.",
                            "category": "motor",
                            "riskLevel": "LOW",
                            "affectedKm": "80.000+ km",
                            "repairCost": "500 - 1.500 TL"
                    },
                    {
                            "id": "p11-3",
                            "title": "Kaporta Pası",
                            "description": "Minimal paslanma.",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "3.000 - 10.000 TL (Boya/Rötuş)"
                    },
                    {
                            "id": "p11-4",
                            "title": "Egzoz Manifoldu",
                            "description": "Egzoz manifoldu çatlağı.",
                            "category": "motor",
                            "riskLevel": "LOW",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "500 - 1.500 TL"
                    },
                    {
                            "id": "p11-5",
                            "title": "Ön Süspansiyon",
                            "description": "Ön amortisör ve bilyalar.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "50.000+ km",
                            "repairCost": "500 - 1.500 TL"
                    }
            ],
            "pros": [
                    "SR20 motor güvenilir",
                    "İyi yol tutuşu",
                    "Az bilinen kaliteli araç",
                    "Güçlü 2.0"
            ],
            "cons": [
                    "Yedek parça zor",
                    "Az tanınır",
                    "Değer düşükmüş",
                    "Yaşlı"
            ],
            "buyingTips": [
                    "SR20 motor efsane",
                    "Triger zinciri kontrol",
                    "GX donanım iyi",
                    "Az bilinmesi avantaj (ucuz)"
            ]
    }
,
    {
            "id": "nissan-qashqai-j11-1-6-dci",
            "slug": "nissan-qashqai-j11-1-6-dci-tekna",
            "brand": "Nissan",
            "model": "Qashqai",
            "variant": "J11 1.6 dCi Tekna",
            "years": "2014-2021",
            "generation": "J11",
            "price": 700000,
            "expertNote": "R9M 1.6 dCi 130 HP. Qashqai J11 C-SUV segmentinin öncüsü. Tekna donanım 7 inç, 360° kamera, deri, panoramik tavan, LED. Sunderland üretimi.",
            "reliabilityScore": 75,
            "totalIssues": 5,
            "searchCount": 16000,
            "issues": [
                    {
                            "id": "qj11-1",
                            "title": "CVT Şanzıman",
                            "description": "Xtronic CVT titreşimi ve kayması.",
                            "category": "sanziman",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "80.000+ km",
                            "repairCost": "5.000 - 12.000 TL"
                    },
                    {
                            "id": "qj11-2",
                            "title": "DPF",
                            "description": "DPF filtresi tıkanması.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Şehir içi",
                            "repairCost": "4.000 - 8.000 TL"
                    },
                    {
                            "id": "qj11-3",
                            "title": "Turbo",
                            "description": "Turbo aktuatör arızası.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "120.000+ km",
                            "repairCost": "3.000 - 6.000 TL"
                    },
                    {
                            "id": "qj11-4",
                            "title": "Enjektör",
                            "description": "dCi enjektör sorunları.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "150.000+ km",
                            "repairCost": "3.000 - 8.000 TL"
                    },
                    {
                            "id": "qj11-5",
                            "title": "Süspansiyon",
                            "description": "Ön amortisör gıcırtısı.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "40.000+ km",
                            "repairCost": "1.000 - 2.000 TL"
                    }
            ],
            "pros": [
                    "C-SUV öncüsü",
                    "Tekna donanım mükemmel",
                    "360° kamera",
                    "Güzel tasarım"
            ],
            "cons": [
                    "CVT tartışmalı",
                    "DPF sorunu",
                    "Dizel bakım pahalı",
                    "Plastik iç mekan"
            ],
            "buyingTips": [
                    "Manuel tercih edin",
                    "Tekna en iyi donanım",
                    "1.2 DIG-T benzinli daha sorunsuz",
                    "CVT'ye alışmak lazım"
            ]
    }
,
    {
            "id": "nissan-juke-1-6-turbo",
            "slug": "nissan-juke-f15-1-6-turbo-tekna",
            "brand": "Nissan",
            "model": "Juke",
            "variant": "F15 1.6 Turbo Tekna",
            "years": "2010-2019",
            "generation": "F15",
            "price": 400000,
            "expertNote": "MR16DDT 1.6 Turbo 190 HP. Juke B-SUV segmentinin yaratıcısı. Çılgın tasarım. Tekna donanım Bose ses, deri, navigasyon. Nismo RS versiyonu çok sportif.",
            "reliabilityScore": 72,
            "totalIssues": 5,
            "searchCount": 12000,
            "issues": [
                    {
                            "id": "juk-1",
                            "title": "CVT Şanzıman",
                            "description": "Xtronic CVT kayması ve titreşimi.",
                            "category": "sanziman",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "80.000+ km",
                            "repairCost": "5.000 - 12.000 TL"
                    },
                    {
                            "id": "juk-2",
                            "title": "Turbo",
                            "description": "Turbo wastegate arızası.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "80.000+ km",
                            "repairCost": "3.000 - 8.000 TL"
                    },
                    {
                            "id": "juk-3",
                            "title": "Triger Zinciri",
                            "description": "MR16DDT triger zinciri uzaması.",
                            "category": "motor",
                            "riskLevel": "HIGH",
                            "affectedKm": "80.000+ km",
                            "repairCost": "3.000 - 6.000 TL"
                    },
                    {
                            "id": "juk-4",
                            "title": "Arka Bagaj",
                            "description": "Çok küçük bagaj hacmi.",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "Tasarım",
                            "repairCost": "0 TL (Karakteristik)"
                    },
                    {
                            "id": "juk-5",
                            "title": "Süspansiyon",
                            "description": "Ön amortisör.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "40.000+ km",
                            "repairCost": "1.000 - 2.000 TL"
                    }
            ],
            "pros": [
                    "Çılgın tasarım",
                    "190 HP güçlü",
                    "Nismo versiyonu",
                    "B-SUV öncüsü"
            ],
            "cons": [
                    "CVT riski",
                    "Triger zinciri",
                    "Çok küçük bagaj",
                    "Dar arka koltuk"
            ],
            "buyingTips": [
                    "1.6 NA (117 HP) daha güvenilir",
                    "CVT kontrol edin",
                    "Triger zinciri sesi dinleyin",
                    "Bagaj küçüklüğünü kabul edin"
            ]
    }
,
{
  "id": "nissan-qashqai-j11-fl",
  "slug": "nissan-qashqai-j11-facelift-1-3-dig-t-tekna",
  "brand": "Nissan",
  "model": "Qashqai",
  "variant": "Qashqai J11 Facelift 1.3 DIG-T Tekna",
  "years": "2017-2021",
  "generation": "Ara Kasa (2017-2021)",
  "price": 875000,
  "expertNote": "J11 facelift büyük değişiklik: 1.2 DIG-T yerine Mercedes-Renault ortaklığı H5H 1.3 DIG-T motor geldi (160hp). CVT yerine 7 ileri DCT (Getrag). ProPILOT yarı-otonom sürüş eklendi. Ses yalıtımı iyileştirildi.",
  "reliabilityScore": 66,
  "totalIssues": 5,
  "searchCount": 12800,
  "issues": [
    {
      "id": "nis-q11fl-1",
      "title": "1.3 DIG-T Silindir Cidarı Aşınması",
      "description": "Mercedes A-Class'ta da kullanılan 1.3 turbo motor yüksek km'de silindir cidarı aşınması riski taşır. Yağ tüketimi artabilir.",
      "category": "motor",
      "riskLevel": "HIGH",
      "affectedKm": "100.000+ km",
      "repairCost": "10.000 - 25.000 TL"
    },
    {
      "id": "nis-q11fl-2",
      "title": "7 İleri DCT Kavrama Titreşimi",
      "description": "Getrag 7DCT300 çift kavramalı şanzıman düşük hızda ve manevralarda titreşim yapabilir. Yazılım güncellemesi ile azaltılabilir.",
      "category": "sanziman",
      "riskLevel": "MEDIUM",
      "affectedKm": "30.000-80.000 km",
      "repairCost": "3.000 - 10.000 TL"
    },
    {
      "id": "nis-q11fl-3",
      "title": "ProPILOT Sensör Hassasiyeti",
      "description": "ProPILOT yarı-otonom sürüş sistemi yağmurda veya kirli ön camda hassasiyetini kaybedebilir. Sistem devre dışı kalabilir.",
      "category": "elektronik",
      "riskLevel": "LOW",
      "affectedKm": "Tüm km",
      "repairCost": "0 TL (normal davranış)"
    },
    {
      "id": "nis-q11fl-4",
      "title": "DPF Tıkanması (1.5 dCi)",
      "description": "1.5 dCi dizel seçenekte DPF tıkanması riski devam ediyor. Şehir içi kısa mesafe kullanımda yüksek risk.",
      "category": "motor",
      "riskLevel": "MEDIUM",
      "affectedKm": "80.000+ km",
      "repairCost": "4.000 - 10.000 TL"
    },
    {
      "id": "nis-q11fl-5",
      "title": "Otomatik Park Freni Arızası",
      "description": "Elektronik park freni modülü arızalanabilir. Park freni serbest bırakılamayabilir.",
      "category": "fren",
      "riskLevel": "MEDIUM",
      "affectedKm": "80.000+ km",
      "repairCost": "3.000 - 7.000 TL"
    }
  ],
  "pros": [
    "1.3 DIG-T daha güçlü motor",
    "ProPILOT yarı-otonom sürüş",
    "Ses yalıtımı iyileşmiş",
    "V-Motion tasarım daha modern",
    "Dijital gösterge paneli"
  ],
  "cons": [
    "1.3 DIG-T silindir aşınma riski",
    "DCT titreşim sorunu",
    "DPF riski (dizel)"
  ],
  "buyingTips": [
    "1.3 DIG-T motor yağ tüketimini kontrol edin",
    "DCT'yi şehir içi trafikte test edin",
    "ProPILOT çalışıyorsa büyük avantaj",
    "Dizel isterseniz DPF geçmişini sorun"
  ]
}
];
