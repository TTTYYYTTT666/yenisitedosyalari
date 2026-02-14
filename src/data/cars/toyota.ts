import { Car } from '@/types';

export const toyotaCars: Car[] = [
    {
        id: "toyota-corolla-hybrid",
        slug: "toyota-corolla-hybrid",
        brand: "Toyota",
        model: "Corolla",
        variant: "1.8 Hybrid",
        years: "2019-2024",
        generation: "E210",
        expertNote: "Pil garantisi 10 yıl ama her yıl servise girersen. Girmezsen 200 bin TL pil parası hazırlayın. Sanayide ustası azdır, yetkili servis mahkumu olabilirsiniz.",
        price: 1800000,
        reliabilityScore: 92,
        totalIssues: 7,
        searchCount: 11200,
        issues: [
            {
                id: "corolla-2",
                title: "Hibrit Pil Filtresi Tıkanması",
                description: "Arka koltuk altındaki hava giriş filtresinin tıkanması pil ömrünü kısaltır (Temizlik şart).",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Her 10.000 km",
                repairCost: "2.000 - 5.000 TL"
            },
            {
                id: "corolla-3",
                title: "12V Akü Bitmesi",
                description: "Araç 1 hafta çalışmazsa küçük akünün bitmesi ve sistemin açılmaması (Kronik).",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "3.000 - 6.000 TL"
            },
            {
                id: "corolla-6",
                title: "Elektrikli Devirdaim Pompası",
                description: "Elektrikli su pompasının (devirdaim) sızdırması veya arızalanması.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "120.000+ km",
                repairCost: "10.000 - 18.000 TL"
            },
            {
                id: "corolla-1",
                title: "Fren Aktüatör Sesi",
                description: "Frene basınca gelen 'vakum' veya 'gıcırtı' sesi (Normal kabul edilir ama rahatsız edici).",
                category: "fren",
                riskLevel: "LOW",
                affectedKm: "Her km",
                repairCost: "0 TL (Karakteristik)"
            },
            {
                id: "corolla-5",
                title: "Yol ve Rüzgar Sesi",
                description: "110 km/s üzeri hızlarda belirgin rüzgar ve yol sesi (Yalıtım zayıf).",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Dizayn",
                repairCost: "1.000 - 3.000 TL (Yalıtım)"
            },
            {
                id: "corolla-4",
                title: "Multimedya Donması",
                description: "Ekranın kilitlenmesi, geri görüş kamerasının geç gelmesi.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "1.500 - 4.000 TL (Yazılım)"
            },
            {
                id: "corolla-7",
                title: "EGR Tıkanıklığı (Hibrit)",
                description: "Sürekli kısa mesafe sürüşlerde EGR valfi ve soğutucusunun tıkanması.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "5.000 - 10.000 TL"
            }
        ],
        pros: [
            "Şehir içi yakıt (3-4 LT)",
            "Sorunsuz e-CVT",
            "Sessiz sürüş"
        ],
        cons: [
            "Motor sesi (Dip gazda)",
            "Arka tavan basık",
            "Multimedya grafikleri eski"
        ],
        buyingTips: [
            "Hibrit pil sağlık testi raporu isteyin (Yetkili servisten)",
            "Lastik yanaklarında balon var mı?"
        ]
    },
    {
        id: "toyota-chr-1-8-hybrid",
        slug: "toyota-chr-1-8-hybrid",
        brand: "Toyota",
        model: "C-HR",
        variant: "1.8 Hybrid",
        years: "2016-2023",
        generation: "AX10",
        reliabilityScore: 90,
        totalIssues: 7,
        searchCount: 6500,
        issues: [
            {
                id: "chr-2",
                title: "12V Akü Bitmesi",
                description: "Araç 3-4 gün çalışmazsa küçük akünün bitmesi ve kapıların bile açılmaması (Kronik).",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "3.000 - 6.000 TL"
            },
            {
                id: "chr-1",
                title: "Ön Cam Çatlaması",
                description: "Kasa esnemesi kaynaklı ön camın sağ üst köşeden kendiliğinden çatlaması (Nadir ama kronik).",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "25.000 - 40.000 TL"
            },
            {
                id: "chr-5",
                title: "Arka Kapı Kolu Kırılması",
                description: "Plastik arka kapı mandalının mekanizmasının bozulması veya soyulması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "50.000+ km",
                repairCost: "3.000 - 6.000 TL"
            },
            {
                id: "chr-4",
                title: "Şanzıman (Varyatör) Sesi",
                description: "Kalkışlarda veya düşük hızlarda CVT şanzımandan gelen uğultu/titreme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "20.000 - 50.000 TL (Motor Revizyon)"
            },
            {
                id: "chr-6",
                title: "Klima Kondenser Arızası",
                description: "Klima radyatörünün (kondenser) gaz kaçırması ve soğutmaması.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "60.000+ km",
                repairCost: "8.000 - 15.000 TL"
            },
            {
                id: "chr-7",
                title: "Far İçi Nemlenme",
                description: "LED farların içinde su damlacıkları oluşması (Buğu).",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kışın",
                repairCost: "1.000 - 3.000 TL (Yalıtım)"
            },
            {
                id: "chr-3",
                title: "Hibrit Sistem Uyarısı",
                description: "Sensör hataları veya invertör soğutma sıvısı eksikliği nedeniyle uyarı.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "2.000 - 5.000 TL (Servis)"
            }
        ],
        pros: [
            "Fütüristik tasarım",
            "Ekonomik",
            "Yüksek sürüş keyfi (Bağımsız süspansiyon)"
        ],
        cons: [
            "Arka camlar klostrofobik",
            "Bagaj küçük",
            "Kör nokta çok"
        ],
        buyingTips: [
            "Ön camda çatlak veya değişim var mı?",
            "Arka koltuk ferahlığını test edin"
        ]
    },
    {
        id: "toyota-corolla-1-5-vision",
        slug: "toyota-corolla-1-5-vision",
        brand: "Toyota",
        model: "Corolla",
        variant: "1.5 Vision",
        years: "2020-2024",
        generation: "E210",
        reliabilityScore: 93,
        totalIssues: 5,
        searchCount: 14000,
        issues: [
            {
                id: "vision-1",
                title: "Yüksek Basınç Pompası Sesi",
                description: "Direkt enjeksiyon pompasının rölantide 'tıkırtılı' çalışması (Dizel gibi ses).",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "0 TL (Karakteristik)"
            },
            {
                id: "vision-2",
                title: "Yağ Yakma (1.5 Motor)",
                description: "Bazı 1.5 Dynamic Force motorlarda yüksek devirli kullanımda yağ eksiltme.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Yoklama Yapılmalı",
                repairCost: "2.000 - 5.000 TL (Servis)"
            },
            {
                id: "vision-3",
                title: "Trim Sesleri",
                description: "Bozuk yollarda B sütunu ve konsoldan gelen tıkırtılar.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Sıfırdan itibaren",
                repairCost: "1.000 - 3.000 TL (Yalıtım)"
            },
            {
                id: "vision-4",
                title: "Fren Balata Sesi",
                description: "Erken biten arka balatalar ve ıslık sesi.",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "20.000+ km",
                repairCost: "2.000 - 4.000 TL"
            },
            {
                id: "vision-5",
                title: "Multimedya Yavaşlığı",
                description: "Ekranın tepki süresinin yavaş olması ve Apple CarPlay kopmaları.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "1.500 - 4.000 TL (Yazılım)"
            }
        ],
        pros: [
            "Sorunsuzluk",
            "İkinci el",
            "Konfor"
        ],
        cons: [
            "Performans zayıf (3 silindir)",
            "Motor sesi kabine giriyor"
        ],
        buyingTips: [
            "Filo çıkması mı kontrol edin",
            "Titreşimi hissetmeye çalışın"
        ]
    },
    {
        id: "toyota-yaris-hybrid",
        slug: "toyota-yaris-hybrid",
        brand: "Toyota",
        model: "Yaris",
        variant: "1.5 Hybrid",
        years: "2020-2024",
        generation: "XP210",
        reliabilityScore: 94,
        totalIssues: 4,
        searchCount: 7000,
        issues: [
            {
                id: "yaris-1",
                title: "Arka Kapı Fitili",
                description: "Arka kapı fitillerinin rüzgar sesi yapması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Fabrikasyon",
                repairCost: "500 - 2.000 TL (Fitil)"
            },
            {
                id: "yaris-2",
                title: "12V Akü Bitmesi",
                description: "Hibrit aracın uzun süre (1 hafta+) yatması sonucu 12V aküsünün boşalması.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Yatma Durumunda",
                repairCost: "2.000 - 5.000 TL"
            },
            {
                id: "yaris-3",
                title: "Arka Fren Sesleri",
                description: "Rejeneratif frenleme nedeniyle az kullanılan arka disklerin paslanması ve ses yapması.",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "3.000 - 7.000 TL (Fren)"
            },
            {
                id: "yaris-4",
                title: "GPF Tıkanıklığı",
                description: "Sürekli kısa mesafe kullanımda Benzin Partikül Filtresi uyarısı.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Şehir İçi",
                repairCost: "5.000 - 15.000 TL (Egzoz/DPF)"
            }
        ],
        pros: [
            "Şehir içi yakıt (3LT)",
            "Güvenlik (Orta hava yastığı)",
            "Park kolaylığı"
        ],
        cons: [
            "Arka alan çok dar",
            "Bagaj küçük"
        ],
        buyingTips: [
            "Arka kapı fitil boşluğunu kontrol edin"
        ]
    },
    {
        id: "toyota-corolla-cross-hybrid",
        slug: "toyota-corolla-cross-hybrid",
        brand: "Toyota",
        model: "Corolla Cross",
        variant: "1.8 Hybrid",
        years: "2022-2024",
        generation: "XG10",
        reliabilityScore: 90,
        totalIssues: 4,
        searchCount: 6800,
        issues: [
            {
                id: "ccross-1",
                title: "Egzoz Susturucusu",
                description: "Arka alt kısımdan egzoz kazanının çok aşağıda görünmesi (Kozmetik).",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Fabrikasyon",
                repairCost: "3.000 - 10.000 TL (Boya/Rötuş)"
            },
            {
                id: "ccross-2",
                title: "Multimedya Donması",
                description: "Ekranın tepkisiz kalması veya kablosuz bağlantı kopmaları.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "1.500 - 4.000 TL (Yazılım)"
            },
            {
                id: "ccross-3",
                title: "CVT Silkeleme",
                description: "Düşük hızlarda veya dur-kalk trafikte şanzıman kararsızlığı.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "1.500 - 4.000 TL (Yazılım)"
            },
            {
                id: "ccross-4",
                title: "Trim Sesleri",
                description: "Özellikle konsol ve kapı içlerinden gelen plastik sesleri.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Sıfırdan itibaren",
                repairCost: "1.000 - 3.000 TL (Yalıtım)"
            }
        ],
        pros: [
            "SUV konforu",
            "Hibrit verimliliği",
            "Geniş camlar"
        ],
        cons: [
            "Malzeme kalitesi (sert plastik)",
            "Egzoz görüntüsü"
        ],
        buyingTips: [
            "Lastik basınç sensörlerini kontrol edin"
        ]
    },
    {
        id: "toyota-rav4-hybrid",
        slug: "toyota-rav4-hybrid",
        brand: "Toyota",
        model: "RAV4",
        variant: "2.5 Hybrid",
        years: "2019-2024",
        generation: "XA50",
        reliabilityScore: 93,
        totalIssues: 4,
        searchCount: 14000,
        issues: [
            {
                id: "rav4-1",
                title: "Fren Hissi",
                description: "Rejeneratif frenin suni hissi.",
                category: "fren",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "0 TL (Tasarım Kaynaklı)"
            },
            {
                id: "rav4-2",
                title: "12V Akü Boşalması",
                description: "Araç uzun süre park edildiğinde 12V yardımcı akünün boşalması.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "3.000 - 5.000 TL"
            },
            {
                id: "rav4-3",
                title: "CVT Sesi (Dip Gaz)",
                description: "Tam gaz hızlanmada motorun yüksek devirde kalması ve yüksek ses yapması.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "0 TL (Karakteristik)"
            },
            {
                id: "rav4-4",
                title: "Rüzgar Sesi",
                description: "Yüksek hızlarda ayna ve A sütunundan rüzgar sesi.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "120+ km/h",
                repairCost: "1.000 - 3.000 TL (Fitil/Yalıtım)"
            }
        ],
        pros: [
            "Toyota güvenilirliği",
            "Düşük tüketim",
            "AWD-i"
        ],
        cons: [
            "Fren hissi alışkanlık istiyor",
            "Yüksek fiyat"
        ],
        buyingTips: [
            "Frenlere alışmak için yeterince test edin"
        ]
    },
    {
        id: "toyota-yaris-cross-hybrid",
        slug: "toyota-yaris-cross-hybrid",
        brand: "Toyota",
        model: "Yaris Cross",
        variant: "1.5 Hybrid",
        years: "2021-2024",
        generation: "XP210",
        reliabilityScore: 91,
        totalIssues: 4,
        searchCount: 12000,
        issues: [
            {
                id: "yc-1",
                title: "Bagaj Kapağı",
                description: "Elektrikli bagaj motorunun yavaşlaması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "40.000+ km",
                repairCost: "4.000 - 8.000 TL"
            },
            {
                id: "yc-2",
                title: "12V Akü Sorunu",
                description: "Hibrit sistemin 12V aküyü hızla tüketmesi. Araç yatar.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "2.500 - 4.500 TL"
            },
            {
                id: "yc-3",
                title: "Trim Sesleri",
                description: "Konsoldan ve kapı panellerinden plastik tıkırtıları.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Bozuk yollar",
                repairCost: "1.000 - 3.000 TL (Yalıtım)"
            },
            {
                id: "yc-4",
                title: "Arka Görüş Sınırlı",
                description: "Küçük arka cam nedeniyle kör nokta fazla. Sensörlere güvenilmeli.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Tasarım",
                repairCost: "0 TL (Karakteristik)"
            }
        ],
        pros: [
            "B-SUV referansı",
            "Hibrit ekonomisi",
            "Toyota kalitesi"
        ],
        cons: [
            "Arka koltuk sınırlı",
            "Bagaj hacmi ortalama"
        ],
        buyingTips: [
            "Elektrikli bagaj çalışıyorsa sorun yok"
        ]
    },
    {
        id: "toyota-yaris-hybrid",
        slug: "toyota-yaris-1-5-hybrid",
        brand: "Toyota",
        model: "Yaris",
        variant: "1.5 Hybrid Dream",
        years: "2020-2024",
        generation: "XP210",
        price: 1450000,
        reliabilityScore: 96,
        totalIssues: 5,
        searchCount: 11000,
        issues: [
            {
                id: "yaris-3",
                title: "Arka Emniyet Kemeri",
                description: "Arka emniyet kemerlerinin takılı kalması veya kilitlenmemesi (Geri çağırma var).",
                category: "govde",
                riskLevel: "HIGH",
                affectedKm: "Fabrikasyon",
                repairCost: "0 TL (Garanti Kapsamı)"
            },
            {
                id: "yaris-2",
                title: "12V Akü Bitmesi",
                description: "Hibrit sistemin 12V aküsünün araç yatarken çabuk bitmesi.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Kullanıma bağlı",
                repairCost: "2.000 - 4.000 TL"
            },
            {
                id: "yaris-4",
                title: "Hibrit Sistem Uyarısı",
                description: "Yazılım kaynaklı hybird sistem hatası (Limp mode).",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "1.500 - 4.000 TL (Yazılım)"
            },
            {
                id: "yaris-1-5-hybrid-auto-4",
                title: "12V Akü Boşalması",
                description: "Hibrit sistemin 12V yardımcı aküyü hızla tüketmesi. Araç yatabilir.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "2.500 - 5.000 TL"
            },
            {
                id: "yaris-1-5-hybrid-auto-5",
                title: "Rejeneratif Fren Hissi",
                description: "Rejeneratif frenlemenin suni ve alışılmadık hissettirmesi.",
                category: "fren",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "0 TL (Karakteristik)"
            }
        ],
        pros: [
            "Şehir içi yakıt (3.5L)",
            "Sorunsuzluk",
            "Güvenlik domanımı"
        ],
        cons: [
            "Arka yaşam alanı dar",
            "Bagaj küçük",
            "Yol sesi"
        ],
        buyingTips: [
            "Hybrid pil garantisinin devam ettiğini servisten sorgulayın (10 yıla kadar uzar)."
        ]
    },
    {
        id: "toyota-proace-city",
        slug: "toyota-proace-city-1-5-d",
        brand: "Toyota",
        model: "Proace City",
        variant: "1.5 D Dream",
        years: "2020-2024",
        generation: "Mk1",
        price: 1500000,
        reliabilityScore: 88,
        totalIssues: 4,
        searchCount: 12000,
        issues: [
            {
                id: "proace-1",
                title: "AdBlue",
                description: "PSA grubu üretimi olduğu için aynı kronik sorun bunda da var.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "60.000+ km",
                repairCost: "30.000 TL"
            },
            {
                id: "proace-2",
                title: "DPF Tıkanması",
                description: "Şehir içi kısa mesafe kullanımda DPF filtresinin dolması.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "40.000+ km",
                repairCost: "5.000 - 12.000 TL"
            },
            {
                id: "proace-3",
                title: "Sürgili Kapı Mekanizması",
                description: "Sürgili kapı rayı ve rulmanlarının aşınması. Zor açılıp kapanma.",
                category: "govde",
                riskLevel: "MEDIUM",
                affectedKm: "60.000+ km",
                repairCost: "5.000 - 10.000 TL"
            },
            {
                id: "proace-4",
                title: "Direksiyon Sertliği",
                description: "Elektrikli direksiyon sisteminin zaman zaman sertçe tepki vermesi.",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "1.500 - 4.000 TL (Yazılım)"
            }
        ],
        pros: [
            "5 Yıl Garanti",
            "Toyota servis kalitesi",
            "Donanım"
        ],
        cons: [
            "PSA altyapısı (Toyota motoru değil)",
            "Fiyat"
        ],
        buyingTips: [
            "Toyota garantisi için tercih edilebilir, mekanik olarak Rifter ile aynıdır."
        ]
    },
    {
        id: "toyota-auris-1-6-valvematic",
        slug: "toyota-auris-1-6-valvematic",
        brand: "Toyota",
        model: "Auris",
        variant: "1.6 Valvematic Advance",
        years: "2013-2018",
        generation: "E180",
        expertNote: "Corolla Hatchback'in eski adı. Sorunsuzluk konusunda Corolla ile yarışır. 1.6 atmosferik motoru ölümsüzdür ama gitmez ve yakar. LPG ile tam uyumludur.",
        price: 750000,
        reliabilityScore: 90,
        totalIssues: 5,
        searchCount: 25000,
        issues: [
            {
                id: "auris-2",
                title: "Yağ Eksiltme",
                description: "Bazı 1.33 ve 1.6 motorlarda yağ eksiltme (Bakımsızsa).",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "150.000+ km",
                repairCost: "20.000 - 50.000 TL (Motor Revizyon)"
            },
            {
                id: "auris-1",
                title: "Fren Kaliper Sesi",
                description: "Fren kaliper pimlerinin boşluk yapıp şıngırdaması.",
                category: "fren",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "500 - 1.000 TL (Torna)"
            },
            {
                id: "auris-3",
                title: "CVT Titremesi",
                description: "Otomatik (CVT) vitesli modellerde kalkışta titreşim ve yavaşlama.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "0 TL (Karakteristik)"
            },
            {
                id: "auris-4",
                title: "Arka Süspansiyon Sesi",
                description: "Arka süspansiyon aksamından kasis geçişlerinde vuruntu sesi.",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "60.000+ km",
                repairCost: "2.000 - 4.000 TL"
            },
            {
                id: "auris-5",
                title: "LPG Uyum Sorunu",
                description: "Kalitesiz LPG kiti takılmışsa supap yanıkları ve performans kaybı.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "LPG'ye bağlı",
                repairCost: "Supap Revizyonu / 5.000 TL"
            }
        ],
        pros: [
            "Sorunsuzluk",
            "LPG uyumu",
            "İkinci el"
        ],
        cons: [
            "Performans (Otomatik vites)",
            "Tasarım (Kutu gibi)",
            "Yakıt"
        ],
        buyingTips: [
            "Fren kaliperlerinden ses geliyor mu?",
            "LPG sistemi kaliteli mi?"
        ]
    },
    {
        id: "toyota-camry-hybrid",
        slug: "toyota-camry-hybrid",
        brand: "Toyota",
        model: "Camry",
        variant: "2.5 Hybrid Passion",
        years: "2019-2024",
        generation: "XV70",
        expertNote: "Patron arabası. Konforu, sessizliği ve genişliği E segmentinin zirvesidir. 2.5 litrelik hibrit motor hem uçurur hem de yakıtı koklar (Vergisi hariç).",
        price: 3000000,
        reliabilityScore: 96,
        totalIssues: 4,
        searchCount: 5000,
        issues: [
            {
                id: "camry-1",
                title: "Deri Koltuk",
                description: "Sürücü koltuğu deri deformasyonu.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "80.000+ km",
                repairCost: "3.000 - 8.000 TL (Tamir)"
            },
            {
                id: "camry-2",
                title: "CVT Sesi (Tam Gaz)",
                description: "Hızlanmada motorun yüksek devirde sabit kalması ve yüksek ses yapması. e-CVT karakteristiği.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "0 TL (Karakteristik)"
            },
            {
                id: "camry-3",
                title: "Rüzgar Sesi",
                description: "Ayna bölgesinden yüksek hızlarda rüzgar sesi.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "120+ km/h",
                repairCost: "1.000 - 3.000 TL (Fitil)"
            },
            {
                id: "camry-4",
                title: "12V Akü",
                description: "Hibrit aracın 12V aküsünün uzun süre park halinde boşalması.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "3.000 - 5.000 TL"
            }
        ],
        pros: [
            "Mükemmel konfor",
            "Prestij",
            "Performans ve Ekonomi"
        ],
        cons: [
            "MTV (Yıllık vergi)",
            "Büyük boyutlar (Park sorunu)"
        ],
        buyingTips: [
            "Arka koltuk konfor paketini denediniz mi?",
            "Vergi dilimini kontrol ettiniz mi?"
        ]
    },
    {
        id: "toyota-hilux-2-4-d4d",
        slug: "toyota-hilux-2-4-d4d",
        brand: "Toyota",
        model: "Hilux",
        variant: "2.4 D-4D Invincible",
        years: "2016-2024",
        generation: "AN120",
        expertNote: "Yok edilemeyen araç. Çöle düşsen çıkarır. Asfaltta biraz zıplatır ama arazide kraldır. 2.4 motoru sağlamdır. \"Invincible\" donanımı binek araç gibidir.",
        price: 1400000,
        reliabilityScore: 95,
        totalIssues: 5,
        searchCount: 40000,
        issues: [
            {
                id: "hilux-1",
                title: "DPF Tıkanması",
                description: "Sürekli düşük devirde/şehir içinde kullanılırsa partikül filtresi dolar.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Şehir içi",
                repairCost: "5.000 - 15.000 TL (Egzoz/DPF)"
            },
            {
                id: "hilux-2",
                title: "Makas Sesi",
                description: "Arka makasların gıcırdaması.",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "2.000 - 5.000 TL (Yağ)"
            },
            {
                id: "hilux-3",
                title: "Enjektör Geri Dönüş Hortumu",
                description: "Enjektör geri dönüş hortumlarının çatlaması. Motor bölgesinde mazot kokusu.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "2.000 - 5.000 TL"
            },
            {
                id: "hilux-4",
                title: "Arka Diferansiyel Sesi",
                description: "Arka diferansiyelden uğultu sesi. Yağ değişimi gerekli.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "80.000+ km",
                repairCost: "Yağ Değişimi / 5.000 TL"
            },
            {
                id: "hilux-5",
                title: "Kasa Askısı Burçları",
                description: "Otomobilin altındaki kasa-şasi bağlantı burçlarının aşınması.",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "100.000+ km",
                repairCost: "3.000 - 6.000 TL"
            }
        ],
        pros: [
            "Dayanıklılık",
            "Arazi kabiliyeti",
            "İkinci el"
        ],
        cons: [
            "Konfor (Arka taraf)",
            "Şehir içi kullanım zorluğu",
            "Vergi (Kamyonet)"
        ],
        buyingTips: [
            "Alt takımı arazide hırpalanmış mı?",
            "Diferansiyel kilidi çalışıyor mu?"
        ]
    },
    {
        id: "toyota-avensis-1-6-d4d",
        slug: "toyota-avensis-1-6-d4d",
        brand: "Toyota",
        model: "Avensis",
        variant: "1.6 D-4D Premium",
        years: "2015-2018",
        generation: "T27 Facelift",
        expertNote: "BMW motorlu Toyota. Motor BMW N47 (1.6 versiyonu), şanzıman manuel. Sorunsuzdur ama elektronik el freni bazen baş ağrıtır.",
        price: 900000,
        reliabilityScore: 88,
        totalIssues: 5,
        searchCount: 9500,
        issues: [
            {
                id: "avensis-2",
                title: "DPF Tıkanması",
                description: "Şehir içi kullanımda partikül filtresi doluluğu.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Şehir içi",
                repairCost: "8.000 - 15.000 TL"
            },
            {
                id: "avensis-1",
                title: "Elektronik El Freni",
                description: "El freni modülünün bozulması.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "15.000 - 25.000 TL"
            },
            {
                id: "avensis-3",
                title: "Triger Zinciri Sesi",
                description: "BMW kaynaklı 1.6 dizel motorda triger zinciri uzaması ve ses.",
                category: "motor",
                riskLevel: "HIGH",
                affectedKm: "120.000+ km",
                repairCost: "10.000 - 20.000 TL"
            },
            {
                id: "avensis-4",
                title: "Debriyaj Aşınması",
                description: "Manuel vitesli şehir içi kullanımda debriyaj balatacının erken bitmesi.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "5.000 - 10.000 TL"
            },
            {
                id: "avensis-5",
                title: "Radyatör Sızıntısı",
                description: "Radyatör bağlantı hortumlarından soğutma sıvısı sızıntısı.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "3.000 - 6.000 TL"
            }
        ],
        pros: [
            "Geniş ve ferah",
            "Konfor odaklı",
            "Güvenli"
        ],
        cons: [
            "Sadece manuel vites",
            "İkinci eli yavaş",
            "Hantal performans"
        ],
        buyingTips: [
            "El frenini 5-6 kere çek-bırak yapın hata veriyor mu?"
        ]
    }
,

    // ─── Eski new-cars dosyasından taşındı ───
    {
        id: "toyota-rav4-25-hybrid-mk5",
        slug: "toyota-rav4-25-hybrid-mk5",
        brand: "Toyota",
        model: "RAV4",
        variant: "2.5 Hybrid AWD Passion X-Pack",
        years: "2019-2025",
        generation: "XA50",
        price: 2200000,
        expertNote: "Hybrid SUV segmentinin referansı. Toyota güvenilirliği + hybrid ekonomisi. AWD versiyonu arka aksı elektriktir — mekanik bağlantı yok, çok akıllı. Passion X-Pack donanımı tercih edin.",
        reliabilityScore: 92,
        totalIssues: 5,
        searchCount: 30000,
        issues: [
            {
                id: "rav4-mk5-1",
                title: "CVT Uğultusu",
                description: "Toyota eCVT şanzımanın yüksek hızda motor devir yükseltmesi ve güçlenmede uğultu. Karakteristiktir.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "0 TL (Tasarım Kaynaklı)"
            },
            {
                id: "rav4-mk5-2",
                title: "Fren Gıcırtısı",
                description: "Rejeneratif fren sistemiyle birlikte mekanik frenlerin az kullanılmasından kaynaklanan pas ve gıcırtı.",
                category: "fren",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "3.000 - 7.000 TL (Fren)"
            },
            {
                id: "rav4-mk5-3",
                title: "Multimedya Yavaşlığı",
                description: "Toyota Touch & Go ekranının yavaş tepki vermesi ve navigasyonun gecikmesi.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "1.500 - 4.000 TL (Yazılım)"
            },
            {
                id: "rav4-mk5-4",
                title: "Rüzgar Sesi (A Sütunu)",
                description: "120+ km/s hızlarda A sütunu ve aynadan gelen rüzgar sesi.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "120+ km/s",
                repairCost: "500 - 2.000 TL (Fitil)"
            },
            {
                id: "rav4-mk5-5",
                title: "TSS Kalibrasyon Uyarısı",
                description: "Toyota Safety Sense sisteminin kirli ön cam veya sis durumunda kalibrasyon uyarısı vermesi.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Hava koşullarına bağlı",
                repairCost: "3.000 - 8.000 TL (Cam)"
            }
        ],
        pros: [
            "Toyota güvenilirliği",
            "Hibrit ile düşük tüketim (5-6L)",
            "AWD yeteneği"
        ],
        cons: [
            "CVT bağırması",
            "Fiyat yüksek",
            "Multimedya eski"
        ],
        buyingTips: [
            "AWD versiyonunu tercih edin — arka köprü elektrik",
            "Passion X-Pack donanımı alın",
            "Hibrit batarya garantisi kontrol edin"
        ]
    }
,

    // ─── Eski new-cars dosyasından taşındı ───
    {
        id: "toyota-corolla-e150-1-6-vvti",
        slug: "toyota-corolla-e150-1-6-vvti",
        brand: "Toyota",
        model: "Corolla",
        variant: "1.6 VVT-i",
        years: "2007-2013",
        generation: "E150",
        price: 380000,
        reliabilityScore: 88,
        totalIssues: 5,
        searchCount: 13000,
        expertNote: "E150 Corolla efsanedir. 1.6 VVT-i motor neredeyse bozulmaz. Tek derdi yağ tüketimi ve süspansiyon parçaları. 300.000+ km giden motorlar var. İkinci el piyasasında hâlâ değerini koruyor.",
        issues: [
            { id: "e150-1", title: "Yağ Tüketimi (1ZR-FE)", description: "1.6 1ZR-FE motorun piston segman aşınması sonucu yağ tüketimi. 5.000 km'de 500ml-1L yağ eklemek gerekebilir.", category: "motor", riskLevel: "MEDIUM", affectedKm: "100.000+ km", repairCost: "Yağ Ekleme / Segman Revizyonu (15.000 TL)" },
            { id: "e150-2", title: "Ön Amortisör Takozu", description: "Ön amortisör üst takozlarının aşınması. Direksiyon çevirirken gıcırtı ve vuruntu.", category: "suspansiyon", riskLevel: "LOW", affectedKm: "60.000+ km", repairCost: "2.000 - 4.000 TL" },
            { id: "e150-3", title: "Arka Fren Kampana Aşınması", description: "Arka kampanalı fren sisteminde balata ve kampana aşınması. Fren etkinliği düşer.", category: "fren", riskLevel: "MEDIUM", affectedKm: "60.000+ km", repairCost: "2.000 - 4.000 TL" },
            { id: "e150-4", title: "Direksiyon Pompası Sızıntısı", description: "Hidrolik direksiyon pompasından yağ sızıntısı. Direksiyon ağırlaşır.", category: "suspansiyon", riskLevel: "MEDIUM", affectedKm: "120.000+ km", repairCost: "3.000 - 6.000 TL" },
            { id: "e150-5", title: "Kapı Cam Mekanizması", description: "Cam kaldırma mekanizması regülatörünün bozulması. Cam inip kalkmaz.", category: "govde", riskLevel: "LOW", affectedKm: "80.000+ km", repairCost: "1.500 - 3.000 TL" }
        ],
        pros: ["Yıkılmaz güvenilirlik", "Çok düşük bakım maliyeti", "Toyota servis ağı", "Yüksek ikinci el değeri"],
        cons: ["Yağ tüketimi var", "Tasarımı çok sade", "Teknolojisi eski"],
        buyingTips: ["Yağ çubuğunu kontrol edin", "Süspansiyon seslerini dinleyin", "Motor çalışma sesini dinleyin (Takırtı olmamalı)"]
    }
,

    // ─── Eski new-cars dosyasından taşındı ───
    {
        id: "toyota-yaris-2-1-4-d4d",
        slug: "toyota-yaris-2-1-4-d4d",
        brand: "Toyota",
        model: "Yaris",
        variant: "II 1.4 D-4D",
        years: "2006-2011",
        generation: "XP90",
        price: 250000,
        reliabilityScore: 82,
        totalIssues: 5,
        searchCount: 7000,
        expertNote: "Yaris II 1.4 D-4D Türkiye'de şehir aracı olarak çok popülerdi. Toyota güvenilirliği burada da geçerli, motor 200.000+ km rahat yapar. Dizel olmasına rağmen DPF'siz olduğu için eski emisyon sınıfı ama sorunsuz.",
        issues: [
            { id: "yaris2-1", title: "Enjektör Arızası (Yüksek KM)", description: "1.4 D-4D enjektörlerin 150.000+ km'de tıkanması. Rölantide titreşim.", category: "motor", riskLevel: "MEDIUM", affectedKm: "150.000+ km", repairCost: "5.000 - 10.000 TL" },
            { id: "yaris2-2", title: "EGR Valfi", description: "EGR valfinde kurum birikimi. Motor performans düşüşü.", category: "motor", riskLevel: "MEDIUM", affectedKm: "80.000+ km", repairCost: "2.000 - 4.000 TL" },
            { id: "yaris2-3", title: "Arka Kampana Fren Aşınması", description: "Arka kampanalı fren sisteminde balata aşınması.", category: "fren", riskLevel: "LOW", affectedKm: "60.000+ km", repairCost: "1.000 - 2.000 TL" },
            { id: "yaris2-4", title: "Direksiyon Pompası Sesi", description: "Elektrikli direksiyon pompasından vızıltı.", category: "suspansiyon", riskLevel: "LOW", affectedKm: "80.000+ km", repairCost: "3.000 - 5.000 TL" },
            { id: "yaris2-5", title: "Cam Kaldırma Mekanizması", description: "Cam kaldırma regülatörünün bozulması.", category: "govde", riskLevel: "LOW", affectedKm: "Yaş kaynaklı", repairCost: "1.000 - 2.000 TL" }
        ],
        pros: ["Toyota güvenilirliği", "Çok ekonomik", "Küçük ve pratik", "Düşük bakım maliyeti"],
        cons: ["Çok küçük kabin", "Otoyolda yetersiz", "Eski tasarım"],
        buyingTips: ["Motor sesi dinleyin (Düzgün çalışmalı)", "EGR temizliği yapılmış mı sorun", "Yaşı nedeniyle pas kontrolü"]
    }
,

    // ─── Eski new-cars dosyasından taşındı ───
    {
        id: "toyota-rav4-2-5-hybrid",
        slug: "toyota-rav4-2-5-hybrid",
        brand: "Toyota",
        model: "RAV4",
        variant: "2.5 Hybrid",
        years: "2019-2024",
        generation: "XA50",
        price: 2800000,
        reliabilityScore: 91,
        totalIssues: 5,
        searchCount: 11000,
        expertNote: "RAV4 Hybrid Toyota'nın en güvenilir SUV'larından biri. Ama mükemmel değil — inverter pompası ve hibrit aküsü uzun vadede dikkat ister. Fiyatı yüksek ama ikinci el değer kaybı çok düşük.",
        issues: [
            { id: "rav4-1", title: "Inverter Soğutma Pompası Arızası", description: "Hibrit sistem inverter soğutma pompasının arızalanması. Sistem aşırı ısınır ve hibrit modu devre dışı kalır. Erken tespit edilmezse inverter ünitesine zarar verebilir.", category: "elektronik", riskLevel: "HIGH", affectedKm: "80.000+ km", repairCost: "15.000 - 30.000 TL" },
            { id: "rav4-2", title: "CVT Şanzıman Uğultusu", description: "E-CVT şanzımandan yüksek hızlarda gelen uğultu sesi. Yağ değişimi ile azaltılabilir ancak tamamen ortadan kalkmaz. Karakteristik kabul edilir.", category: "sanziman", riskLevel: "LOW", affectedKm: "60.000+ km", repairCost: "Yağ Değişimi (3.000 TL)" },
            { id: "rav4-3", title: "Arka Fren Diski Korozyonu", description: "Hibrit sistemin rejeneratif frenleme kullanması nedeniyle arka fren diskleri yeterince ısınmaz ve korozyon yapar. Fren sesi ve titreşim oluşur.", category: "fren", riskLevel: "MEDIUM", affectedKm: "30.000+ km", repairCost: "3.000 - 6.000 TL" },
            { id: "rav4-4", title: "Multimedya Ekran Donması", description: "Toyota Touch ekranının kararması veya tepki vermemesi. Apple CarPlay bağlantısı kopabilir. Yazılım güncellemesi ile çözülür.", category: "elektronik", riskLevel: "LOW", affectedKm: "Rastgele", repairCost: "1.500 - 4.000 TL (Yazılım)" },
            { id: "rav4-5", title: "Rüzgar Sesi (A Sütunu)", description: "120 km/s üzeri hızlarda A sütunu ve ayna diplerinden gelen rüzgar uğultusu. Fitil iyileştirmesi kısmen çözer.", category: "govde", riskLevel: "LOW", affectedKm: "Yüksek Hız", repairCost: "Fitil (1.000 TL)" }
        ],
        pros: ["Düşük yakıt tüketimi (4.5-5.5L)", "Toyota güvenilirliği", "Geniş iç hacim", "Yüksek ikinci el değeri"],
        cons: ["Yüksek satın alma fiyatı", "CVT uğultusu", "Arka fren korozyonu"],
        buyingTips: ["Hibrit akü sağlık raporunu isteyin", "Inverter soğutma sıvısını kontrol ettirin", "Arka fren disklerini inceleyin"]
    }
,
    {
            "id": "toyota-chr-2-0-hybrid",
            "slug": "toyota-chr-2-0-hybrid",
            "brand": "Toyota",
            "model": "C-HR",
            "variant": "2.0 Hybrid Diamond",
            "years": "2020-2024",
            "generation": "AX50 (FL)",
            "price": 1600000,
            "expertNote": "M20A 2.0 Hybrid 184 HP. C-HR facelift 2.0 motorla çok daha güçlü. Coupe SUV tasarımı dikkat çekici ama arka görüş sınırlı. Toyota hibrit güvenilirliği.",
            "reliabilityScore": 86,
            "totalIssues": 5,
            "searchCount": 14000,
            "issues": [
                    {
                            "id": "chr2-1",
                            "title": "12V Akü Boşalması",
                            "description": "Hibrit sistemin 12V aküyü tüketmesi.",
                            "category": "elektronik",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Rastgele",
                            "repairCost": "3.000 - 5.000 TL"
                    },
                    {
                            "id": "chr2-2",
                            "title": "CVT Sesi",
                            "description": "Tam gaz hızlanmada motorun yüksek devirde kalması.",
                            "category": "sanziman",
                            "riskLevel": "LOW",
                            "affectedKm": "Karakteristik",
                            "repairCost": "0 TL (Karakteristik)"
                    },
                    {
                            "id": "chr2-3",
                            "title": "Arka Görüş Sınırlı",
                            "description": "Dar arka cam nedeniyle kör nokta çok fazla.",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "Tasarım",
                            "repairCost": "0 TL (Karakteristik)"
                    },
                    {
                            "id": "chr2-4",
                            "title": "Trim Sesleri",
                            "description": "İç trim panellerinden plastik tıkırtıları.",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "Bozuk yollar",
                            "repairCost": "1.000 - 3.000 TL (Yalıtım)"
                    },
                    {
                            "id": "chr2-5",
                            "title": "Fren Hissi",
                            "description": "Rejeneratif fren sisteminin suni hissi.",
                            "category": "fren",
                            "riskLevel": "LOW",
                            "affectedKm": "Karakteristik",
                            "repairCost": "0 TL (Karakteristik)"
                    }
            ],
            "pros": [
                    "Hibrit güvenilirlik",
                    "Dikkat çekici tasarım",
                    "Düşük yakıt",
                    "Toyota kalitesi"
            ],
            "cons": [
                    "Arka görüş sınırlı",
                    "Arka koltuk dar",
                    "CVT sesi"
            ],
            "buyingTips": [
                    "Arka koltuğa oturup test edin",
                    "12V akü kontrolü",
                    "Diamond donanım tercih edin"
            ]
    }
,
    {
            "id": "toyota-corolla-e210-hybrid",
            "slug": "toyota-corolla-e210-hybrid",
            "brand": "Toyota",
            "model": "Corolla (E210)",
            "variant": "1.8 Hybrid Dream",
            "years": "2019-2025",
            "generation": "E210",
            "price": 1400000,
            "expertNote": "2ZR-FXE 1.8 Hybrid 122 HP. E210 Corolla Hybrid Türkiye'nin en çok satan hibrit aracı. Toyota'nın efsanevi hibrit güvenilirliği. CVT şanzıman sesi tek dezavantaj.",
            "reliabilityScore": 90,
            "totalIssues": 5,
            "searchCount": 30000,
            "issues": [
                    {
                            "id": "e210-1",
                            "title": "CVT Motor Sesi",
                            "description": "Tam gaz hızlanmada motorun yüksek devirde kalması (rubber band etkisi).",
                            "category": "sanziman",
                            "riskLevel": "LOW",
                            "affectedKm": "Karakteristik",
                            "repairCost": "0 TL (Karakteristik)"
                    },
                    {
                            "id": "e210-2",
                            "title": "12V Akü Boşalma",
                            "description": "12V yardımcı akünün uzun park sonrası boşalması.",
                            "category": "elektronik",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Rastgele",
                            "repairCost": "3.000 - 5.000 TL"
                    },
                    {
                            "id": "e210-3",
                            "title": "Fren Hissi",
                            "description": "Rejeneratif fren geçişinde yapay his.",
                            "category": "fren",
                            "riskLevel": "LOW",
                            "affectedKm": "Karakteristik",
                            "repairCost": "0 TL (Karakteristik)"
                    },
                    {
                            "id": "e210-4",
                            "title": "Rüzgar Sesi",
                            "description": "Ayna bölgesinden yüksek hızda ses.",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "120+ km/h",
                            "repairCost": "1.000 - 3.000 TL (Fitil)"
                    },
                    {
                            "id": "e210-5",
                            "title": "Multimedya Yavaşlığı",
                            "description": "Toyota Touch ekranının tepki gecikmesi.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Tasarım",
                            "repairCost": "0 TL (Karakteristik)"
                    }
            ],
            "pros": [
                    "Toyota güvenilirliği",
                    "4L/100km yakıt",
                    "Hibrit garanti 10 yıl",
                    "Sıfır bakım maliyeti"
            ],
            "cons": [
                    "CVT sesi",
                    "Performans heyecansız",
                    "Plastik kalitesi orta"
            ],
            "buyingTips": [
                    "Dream donanım tercih edin",
                    "Hibrit batarya garantisi 10 yıl",
                    "2021+ makyajlı alın"
            ]
    }
,
    {
            "id": "toyota-yaris-3-1-33",
            "slug": "toyota-yaris-3-1-33-vvti",
            "brand": "Toyota",
            "model": "Yaris (XP130)",
            "variant": "1.33 VVT-i Fun",
            "years": "2011-2020",
            "generation": "XP130",
            "price": 550000,
            "expertNote": "1NR-FE 1.33 VVT-i 99 HP + CVT/6MT. Yaris XP130 Toyota Türkiye Sakarya üretimi. TR'ye özel sedan versiyonu var. Motor çok güvenilir, bakımı ucuz, yedek parça bol.",
            "reliabilityScore": 88,
            "totalIssues": 5,
            "searchCount": 14000,
            "issues": [
                    {
                            "id": "yar3-1",
                            "title": "CVT Sesi",
                            "description": "Multidrive S (CVT) şanzımandan hızlanmada uğultu.",
                            "category": "sanziman",
                            "riskLevel": "LOW",
                            "affectedKm": "Karakteristik",
                            "repairCost": "0 TL (Karakteristik)"
                    },
                    {
                            "id": "yar3-2",
                            "title": "Arka Fren Kampanası",
                            "description": "Arka kampanalı fren aşınması.",
                            "category": "fren",
                            "riskLevel": "LOW",
                            "affectedKm": "40.000+ km",
                            "repairCost": "1.000 - 2.000 TL"
                    },
                    {
                            "id": "yar3-3",
                            "title": "Direksiyon Sesi",
                            "description": "Direksiyon çevirirken hafif plastik ses.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "40.000+ km",
                            "repairCost": "1.000 - 2.000 TL"
                    },
                    {
                            "id": "yar3-4",
                            "title": "Cam Fitili",
                            "description": "Kapı cam fitillerinin sertleşmesi.",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "500 - 1.500 TL"
                    },
                    {
                            "id": "yar3-5",
                            "title": "Klima Kompresörü",
                            "description": "Klima kompresörü arızası (nadir).",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "100.000+ km",
                            "repairCost": "4.000 - 8.000 TL"
                    }
            ],
            "pros": [
                    "Toyota güvenilirliği",
                    "Sakarya üretimi",
                    "Ucuz bakım",
                    "Yedek parça bol"
            ],
            "cons": [
                    "99 HP az",
                    "CVT hissizliği",
                    "İç mekan sade"
            ],
            "buyingTips": [
                    "Manuel versiyonu daha eğlenceli",
                    "Fun donanım yeterli",
                    "Sakarya üretimi avantaj"
            ]
    }
,
    {
            "id": "toyota-corolla-e100-1-6",
            "slug": "toyota-corolla-e100-1-6-xei",
            "brand": "Toyota",
            "model": "Corolla",
            "variant": "E100 1.6 XEi",
            "years": "1991-1997",
            "generation": "E100",
            "price": 100000,
            "expertNote": "4A-FE 1.6 105 HP. E100 Corolla dünya çapında efsane. Toyota güvenilirliğinin simgesi. Motor ölmez, gövde çürümez. 30 yıllık araçlar hâlâ sorunsuz çalışır.",
            "reliabilityScore": 85,
            "totalIssues": 4,
            "searchCount": 16000,
            "issues": [
                    {
                            "id": "e100-1",
                            "title": "Kaporta Pası",
                            "description": "30 yıllık araçta bile minimal pas. Ama kontrol şart.",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "3.000 - 10.000 TL (Boya/Rötuş)"
                    },
                    {
                            "id": "e100-2",
                            "title": "Distribütör",
                            "description": "Distribütör kapağı ve rotoru aşınması.",
                            "category": "motor",
                            "riskLevel": "LOW",
                            "affectedKm": "80.000+ km",
                            "repairCost": "300 - 800 TL"
                    },
                    {
                            "id": "e100-3",
                            "title": "Amortisörler",
                            "description": "Orijinal amortisörlerin bitik olması.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "1.000 - 2.000 TL"
                    },
                    {
                            "id": "e100-4",
                            "title": "Cam Fitili",
                            "description": "Kapı ve cam fitillerinin sertleşmesi.",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "300 - 800 TL"
                    }
            ],
            "pros": [
                    "Toyota güvenilirliği",
                    "4A-FE ölmez motor",
                    "Pas tutmaz",
                    "Bakım ucuz"
            ],
            "cons": [
                    "Çok eski",
                    "Güvenlik düşük",
                    "Konfor az",
                    "Yavaş"
            ],
            "buyingTips": [
                    "Motor sağlamlığı efsane",
                    "Pas kontrolü şart değil ama yapın",
                    "XEi donanım en iyisi",
                    "Koleksiyoner değeri arttı"
            ]
    }
,
    {
            "id": "toyota-corolla-e110-1-6",
            "slug": "toyota-corolla-e110-1-6-terra",
            "brand": "Toyota",
            "model": "Corolla",
            "variant": "E110 1.6 Terra",
            "years": "1997-2002",
            "generation": "E110",
            "price": 140000,
            "expertNote": "4A-FE/3ZZ-FE 1.6 110 HP. E110 Corolla daha modern ama aynı güvenilirlik. Terra donanım iyi. Sedan çok yaygın, HB nadir. Toyota kalitesi devam ediyor.",
            "reliabilityScore": 83,
            "totalIssues": 5,
            "searchCount": 14000,
            "issues": [
                    {
                            "id": "e110-1",
                            "title": "Yağ Keçesi",
                            "description": "Motor yağ keçelerinden hafif sızıntı (yaşa bağlı).",
                            "category": "motor",
                            "riskLevel": "LOW",
                            "affectedKm": "150.000+ km",
                            "repairCost": "500 - 1.500 TL"
                    },
                    {
                            "id": "e110-2",
                            "title": "Kaporta Pası",
                            "description": "Minimal pas ama arka çamurluklar kontrol edilmeli.",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "3.000 - 10.000 TL (Boya/Rötuş)"
                    },
                    {
                            "id": "e110-3",
                            "title": "Ön Süspansiyon",
                            "description": "Rotil ve bilyaların aşınması.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "60.000+ km",
                            "repairCost": "500 - 1.200 TL"
                    },
                    {
                            "id": "e110-4",
                            "title": "Klima Kompresörü",
                            "description": "Klima kompresörü arızası (yaşa bağlı).",
                            "category": "elektronik",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "2.000 - 4.000 TL"
                    },
                    {
                            "id": "e110-5",
                            "title": "Egzoz Sistemi",
                            "description": "Egzoz susturucunun çürümesi.",
                            "category": "motor",
                            "riskLevel": "LOW",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "500 - 1.500 TL"
                    }
            ],
            "pros": [
                    "Toyota güvenilirliği",
                    "Sağlam motor",
                    "Az arıza",
                    "Değer kaybetmez"
            ],
            "cons": [
                    "Sıkıcı tasarım",
                    "Konfor orta",
                    "Yedek parça pahalılaştı",
                    "Plastik iç mekan"
            ],
            "buyingTips": [
                    "Terra donanım tercih edin",
                    "Motor km'ye bakmayın, bakıma bakın",
                    "Sedan çok yaygın",
                    "Değer kaybı az"
            ]
    }
,
    {
            "id": "toyota-avensis-t22-1-6",
            "slug": "toyota-avensis-t22-1-6-sol",
            "brand": "Toyota",
            "model": "Avensis",
            "variant": "T22 1.6 Sol",
            "years": "1997-2003",
            "generation": "T22",
            "price": 130000,
            "expertNote": "4A-FE/1ZZ-FE 1.6/1.8. Avensis T22 Toyota'nın Avrupa D segmenti. Corolla güvenilirliğini D segmente taşıdı. Sol donanım zengin. Carina E'nin halefi.",
            "reliabilityScore": 80,
            "totalIssues": 5,
            "searchCount": 10000,
            "issues": [
                    {
                            "id": "t22-1",
                            "title": "Yağ Tüketimi (1ZZ)",
                            "description": "1ZZ-FE motorlarda yağ tüketimi. Piston segman tasarım sorunu.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "100.000+ km",
                            "repairCost": "3.000 - 6.000 TL"
                    },
                    {
                            "id": "t22-2",
                            "title": "Arka Fren",
                            "description": "Arka disk frenlerin aşınması.",
                            "category": "fren",
                            "riskLevel": "LOW",
                            "affectedKm": "40.000+ km",
                            "repairCost": "500 - 1.200 TL"
                    },
                    {
                            "id": "t22-3",
                            "title": "Kaporta",
                            "description": "Minimal paslanma (Toyota kalitesi).",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "3.000 - 10.000 TL (Boya/Rötuş)"
                    },
                    {
                            "id": "t22-4",
                            "title": "Direksiyon Pompası",
                            "description": "Hidrolik direksiyon pompası sızıntısı.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "100.000+ km",
                            "repairCost": "1.000 - 2.500 TL"
                    },
                    {
                            "id": "t22-5",
                            "title": "Gösterge Paneli",
                            "description": "Gösterge aydınlatması sönmesi.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "300 - 800 TL"
                    }
            ],
            "pros": [
                    "Toyota güvenilirliği",
                    "D segment konfor",
                    "Az arıza",
                    "Geniş bagaj"
            ],
            "cons": [
                    "Sıkıcı tasarım",
                    "1ZZ yağ tüketiyor",
                    "Yedek parça zor",
                    "Popüler değil"
            ],
            "buyingTips": [
                    "4A-FE motor tercih (1ZZ yağ yer)",
                    "Sol donanım en iyisi",
                    "Sedan ve SW var",
                    "Toyota servisi kullanın"
            ]
    }
,
    {
            "id": "toyota-corolla-e150-1-4-d4d",
            "slug": "toyota-corolla-e150-1-4-d4d-elegant",
            "brand": "Toyota",
            "model": "Corolla",
            "variant": "E150 1.4 D-4D Elegant",
            "years": "2007-2013",
            "generation": "E150",
            "price": 350000,
            "expertNote": "1ND-TV 1.4 D-4D 90 HP. E150 Corolla Toyota güvenilirliği devam ediyor. Sakarya Adapazarı üretimi. Elegant donanım deri, klima, CD. Değer kaybı düşük.",
            "reliabilityScore": 80,
            "totalIssues": 5,
            "searchCount": 16000,
            "issues": [
                    {
                            "id": "e150-1",
                            "title": "Turbo",
                            "description": "Turbo aktuatör arızası.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "120.000+ km",
                            "repairCost": "3.000 - 6.000 TL"
                    },
                    {
                            "id": "e150-2",
                            "title": "DPF",
                            "description": "DPF filtresi tıkanması (varsa).",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Şehir içi",
                            "repairCost": "4.000 - 8.000 TL"
                    },
                    {
                            "id": "e150-3",
                            "title": "Süspansiyon",
                            "description": "Ön amortisör ve bilyalar.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "50.000+ km",
                            "repairCost": "500 - 1.500 TL"
                    },
                    {
                            "id": "e150-4",
                            "title": "Enjektör",
                            "description": "D-4D enjektör sorunları.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "150.000+ km",
                            "repairCost": "3.000 - 6.000 TL"
                    },
                    {
                            "id": "e150-5",
                            "title": "Klima",
                            "description": "Klima kompresörü.",
                            "category": "elektronik",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "100.000+ km",
                            "repairCost": "2.000 - 4.000 TL"
                    }
            ],
            "pros": [
                    "Toyota güvenilirliği",
                    "Sakarya üretimi",
                    "Az arıza",
                    "Değer kaybı düşük"
            ],
            "cons": [
                    "90 HP az",
                    "Sıkıcı tasarım",
                    "D-4D parça pahalı",
                    "İç mekan eski"
            ],
            "buyingTips": [
                    "1.33 benzinli daha güvenilir",
                    "Elegant donanım iyi",
                    "Toyota servisi tercih",
                    "Km yüksek olsa da güvenilir"
            ]
    }
,
    {
            "id": "toyota-corolla-e160-1-4-d4d",
            "slug": "toyota-corolla-e160-1-4-d4d-advance",
            "brand": "Toyota",
            "model": "Corolla",
            "variant": "E160 1.4 D-4D Advance",
            "years": "2013-2019",
            "generation": "E160/E170",
            "price": 550000,
            "expertNote": "1ND-TV 1.4 D-4D 90 HP. E160 Corolla modern tasarım. Sakarya üretimi. Advance donanım 7 inç Touch 2, geri kamera, Toyota Safety Sense.",
            "reliabilityScore": 82,
            "totalIssues": 4,
            "searchCount": 18000,
            "issues": [
                    {
                            "id": "e160-1",
                            "title": "Turbo",
                            "description": "Turbo aktuatör.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "120.000+ km",
                            "repairCost": "3.000 - 6.000 TL"
                    },
                    {
                            "id": "e160-2",
                            "title": "DPF",
                            "description": "DPF tıkanması.",
                            "category": "motor",
                            "riskLevel": "MEDIUM",
                            "affectedKm": "Şehir içi",
                            "repairCost": "4.000 - 8.000 TL"
                    },
                    {
                            "id": "e160-3",
                            "title": "CVT Şanzıman",
                            "description": "CVT titreşimi (CVT varsa).",
                            "category": "sanziman",
                            "riskLevel": "LOW",
                            "affectedKm": "100.000+ km",
                            "repairCost": "3.000 - 8.000 TL"
                    },
                    {
                            "id": "e160-4",
                            "title": "Süspansiyon",
                            "description": "Ön amortisör.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "50.000+ km",
                            "repairCost": "500 - 1.500 TL"
                    }
            ],
            "pros": [
                    "Toyota güvenilirliği",
                    "Modern tasarım",
                    "Safety Sense",
                    "Sakarya üretimi"
            ],
            "cons": [
                    "90 HP az",
                    "D-4D parça pahalı",
                    "İç mekan plastik",
                    "CVT tartışmalı"
            ],
            "buyingTips": [
                    "1.33 veya 1.6 benzinli çok daha iyi",
                    "Advance donanım ideal",
                    "Manuel şanzıman tercih",
                    "Toyota'ya özgü düşük değer kaybı"
            ]
    }
,
    {
            "id": "toyota-yaris-1-33",
            "slug": "toyota-yaris-xp130-1-33-fun",
            "brand": "Toyota",
            "model": "Yaris",
            "variant": "XP130 1.33 Fun",
            "years": "2011-2019",
            "generation": "XP130",
            "price": 350000,
            "expertNote": "1NR-FE 1.33 99 HP. Yaris XP130 küçük ama güvenilir. Toyota kalitesi B segmentte. Fun donanım 6.1 inç ekran, geri kamera. Hybrid versiyonu çok ekonomik.",
            "reliabilityScore": 82,
            "totalIssues": 4,
            "searchCount": 12000,
            "issues": [
                    {
                            "id": "yar-1",
                            "title": "CVT Şanzıman",
                            "description": "CVT yavaşlama hissi (performans beklentisi).",
                            "category": "sanziman",
                            "riskLevel": "LOW",
                            "affectedKm": "Tasarım",
                            "repairCost": "0 TL (Karakteristik)"
                    },
                    {
                            "id": "yar-2",
                            "title": "Süspansiyon",
                            "description": "Arka amortisör.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "50.000+ km",
                            "repairCost": "500 - 1.200 TL"
                    },
                    {
                            "id": "yar-3",
                            "title": "Klima",
                            "description": "Klima gazı kaçağı.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Yaş kaynaklı",
                            "repairCost": "500 - 1.000 TL"
                    },
                    {
                            "id": "yar-4",
                            "title": "Motor Takozları",
                            "description": "Motor takozları sertleşmesi.",
                            "category": "motor",
                            "riskLevel": "LOW",
                            "affectedKm": "80.000+ km",
                            "repairCost": "500 - 1.200 TL"
                    }
            ],
            "pros": [
                    "Toyota güvenilirliği",
                    "Az arıza",
                    "Ekonomik",
                    "Hybrid seçeneği"
            ],
            "cons": [
                    "Küçük araç",
                    "99 HP yeterli ama az",
                    "Plastik iç mekan",
                    "CVT sıkıcı"
            ],
            "buyingTips": [
                    "Hybrid varsa kesinlikle tercih edin",
                    "Fun donanım yeterli",
                    "1.33 motor güvenilir",
                    "CVT sorunsuz ama sıkıcı"
            ]
    }
,
    {
            "id": "toyota-c-hr-1-2-turbo",
            "slug": "toyota-c-hr-1-2-turbo-advance",
            "brand": "Toyota",
            "model": "C-HR",
            "variant": "1.2 Turbo Advance",
            "years": "2016-2023",
            "generation": "AX10",
            "price": 800000,
            "expertNote": "8NR-FTS 1.2 Turbo 116 HP. C-HR Toyota'nın ilk B-SUV/crossover'ı. Çığır açan tasarım. Advance donanım 8 inç, JBL ses, Safety Sense. Hybrid 1.8 çok ekonomik.",
            "reliabilityScore": 80,
            "totalIssues": 4,
            "searchCount": 14000,
            "issues": [
                    {
                            "id": "chr-1",
                            "title": "CVT Şanzıman",
                            "description": "CVT titreşim hissi.",
                            "category": "sanziman",
                            "riskLevel": "LOW",
                            "affectedKm": "Tasarım",
                            "repairCost": "0 TL (Karakteristik)"
                    },
                    {
                            "id": "chr-2",
                            "title": "Arka Görüş",
                            "description": "Dar arka cam nedeniyle kör nokta fazla.",
                            "category": "govde",
                            "riskLevel": "LOW",
                            "affectedKm": "Tasarım",
                            "repairCost": "0 TL (Karakteristik)"
                    },
                    {
                            "id": "chr-3",
                            "title": "Süspansiyon",
                            "description": "Ön amortisör gıcırtısı.",
                            "category": "suspansiyon",
                            "riskLevel": "LOW",
                            "affectedKm": "40.000+ km",
                            "repairCost": "1.000 - 2.000 TL"
                    },
                    {
                            "id": "chr-4",
                            "title": "Infotainment",
                            "description": "Multimedya donması.",
                            "category": "elektronik",
                            "riskLevel": "LOW",
                            "affectedKm": "Kronik",
                            "repairCost": "500 - 1.500 TL"
                    }
            ],
            "pros": [
                    "Çığır açan tasarım",
                    "Toyota güvenilirliği",
                    "Hybrid çok ekonomik",
                    "Safety Sense"
            ],
            "cons": [
                    "Arka koltuk dar",
                    "Görüş alanı kısıtlı",
                    "1.2T yağ tüketimi",
                    "Fiyatı yüksek"
            ],
            "buyingTips": [
                    "Hybrid kesinlikle tercih edin",
                    "1.2 Turbo yağ tüketimi var",
                    "Advance donanım ideal",
                    "Arka koltuk test edin"
            ]
    }
,
{
  "id": "toyota-chr-fl",
  "slug": "toyota-c-hr-facelift-1-8-hybrid",
  "brand": "Toyota",
  "model": "C-HR",
  "variant": "C-HR Facelift 1.8 Hybrid Passion X-Pack",
  "years": "2020-2023",
  "generation": "Ara Kasa (2020-2023)",
  "price": 1075000,
  "expertNote": "Facelift'te ön ve arka tasarım belirgin şekilde değişti. 2.0 Hybrid (184hp) motor seçeneği eklendi. Multimedya 8 inç'e büyüdü, Android Auto/CarPlay eklendi. CVT kalibrasyonu iyileştirildi.",
  "reliabilityScore": 82,
  "totalIssues": 4,
  "searchCount": 14500,
  "issues": [
    {
      "id": "toy-chrfl-1",
      "title": "CVT Yüksek DevirdaGürültü (Azalmış)",
      "description": "E-CVT kalibrasyonu facelift ile iyileştirildi. Hızlı hızlanmada motor devri eskisi kadar yükselmiyor ama yine de konvansiyonel şanzımana göre farklı hissettiriyor.",
      "category": "sanziman",
      "riskLevel": "LOW",
      "affectedKm": "Tüm km",
      "repairCost": "0 TL (normal)"
    },
    {
      "id": "toy-chrfl-2",
      "title": "Multimedya Sistem Gecikmesi",
      "description": "Yeni 8 inç multimedya sistemi karmaşık menülerde zaman zaman yavaşlayabilir. Pre-facelift'e göre çok daha iyi.",
      "category": "elektronik",
      "riskLevel": "LOW",
      "affectedKm": "Tüm km",
      "repairCost": "0 TL (Karakteristik)"
    },
    {
      "id": "toy-chrfl-3",
      "title": "Arka Görüş Sınırlılığı (Tasarım)",
      "description": "C-HR'nin coupe tarzı arka tasarımı görüş alanını ciddi şekilde sınırlar. Facelift'te değişmedi. Park sensörü/kamera zorunlu.",
      "category": "govde",
      "riskLevel": "LOW",
      "affectedKm": "Tüm km",
      "repairCost": "0 TL (tasarım)"
    },
    {
      "id": "toy-chrfl-4",
      "title": "Süspansiyon Sertliği (Aynı)",
      "description": "Facelift'te süspansiyon ayarları değişmedi. Özellikle 18 inç jantlarda sert sürüş hissi devam ediyor.",
      "category": "suspansiyon",
      "riskLevel": "LOW",
      "affectedKm": "Tüm km",
      "repairCost": "0 TL (tasarım tercihi)"
    }
  ],
  "pros": [
    "Android Auto/CarPlay geldi",
    "CVT kalibrasyonu iyileştirildi",
    "Daha agresif tasarım",
    "2.0 Hybrid seçeneği (daha güçlü)",
    "Toyota güvenilirliği"
  ],
  "cons": [
    "Arka görüş hâlâ sınırlı",
    "Süspansiyon hâlâ sert",
    "Fiyatlar yüksek"
  ],
  "buyingTips": [
    "CarPlay/Android Auto'yu test edin",
    "1.8 vs 2.0 Hybrid: 2.0 daha dinamik ama daha pahalı",
    "Arka koltuk darlığı kabul edilmeli",
    "Pre-facelift'e göre daha modern multimedya"
  ]
}
];
