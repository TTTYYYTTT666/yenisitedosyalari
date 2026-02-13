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
        totalIssues: 5,
        searchCount: 11200,
        issues: [
            {
                id: "corolla-2",
                title: "Hibrit Pil Filtresi Tıkanması",
                description: "Arka koltuk altındaki hava giriş filtresinin tıkanması pil ömrünü kısaltır (Temizlik şart).",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Her 10.000 km",
                repairCost: "Temizlik"
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
                repairCost: "Karakteristik"
            },
            {
                id: "corolla-5",
                title: "Yol ve Rüzgar Sesi",
                description: "110 km/s üzeri hızlarda belirgin rüzgar ve yol sesi (Yalıtım zayıf).",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Dizayn",
                repairCost: "Yalıtım"
            },
            {
                id: "corolla-4",
                title: "Multimedya Donması",
                description: "Ekranın kilitlenmesi, geri görüş kamerasının geç gelmesi.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Yazılım Güncelleme"
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
        totalIssues: 4,
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
                repairCost: "Şanzıman Yağı / Revizyon"
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
                repairCost: "Yalıtım / Değişim"
            },
            {
                id: "chr-3",
                title: "Hibrit Sistem Uyarısı",
                description: "Sensör hataları veya invertör soğutma sıvısı eksikliği nedeniyle uyarı.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "Servis Kontrolü"
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
        totalIssues: 3,
        searchCount: 14000,
        issues: [
            {
                id: "vision-1",
                title: "Yüksek Basınç Pompası Sesi",
                description: "Direkt enjeksiyon pompasının rölantide 'tıkırtılı' çalışması (Dizel gibi ses).",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Yok"
            },
            {
                id: "vision-2",
                title: "Yağ Yakma (1.5 Motor)",
                description: "Bazı 1.5 Dynamic Force motorlarda yüksek devirli kullanımda yağ eksiltme.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Yoklama Yapılmalı",
                repairCost: "Servis Takibi"
            },
            {
                id: "vision-3",
                title: "Trim Sesleri",
                description: "Bozuk yollarda B sütunu ve konsoldan gelen tıkırtılar.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Sıfırdan itibaren",
                repairCost: "Yalıtım"
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
                repairCost: "Yazılım"
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
        totalIssues: 1,
        searchCount: 7000,
        issues: [
            {
                id: "yaris-1",
                title: "Arka Kapı Fitili",
                description: "Arka kapı fitillerinin rüzgar sesi yapması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Fabrikasyon",
                repairCost: "Fitil Ayarı"
            },
            {
                id: "yaris-2",
                title: "12V Akü Bitmesi",
                description: "Hibrit aracın uzun süre (1 hafta+) yatması sonucu 12V aküsünün boşalması.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Yatma Durumunda",
                repairCost: "Akü Takviyesi / Boot"
            },
            {
                id: "yaris-3",
                title: "Arka Fren Sesleri",
                description: "Rejeneratif frenleme nedeniyle az kullanılan arka disklerin paslanması ve ses yapması.",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Temizlik / Balata"
            },
            {
                id: "yaris-4",
                title: "GPF Tıkanıklığı",
                description: "Sürekli kısa mesafe kullanımda Benzin Partikül Filtresi uyarısı.",
                category: "motor",
                riskLevel: "LOW",
                affectedKm: "Şehir İçi",
                repairCost: "Rejenerasyon Sürüşü"
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
        totalIssues: 1,
        searchCount: 6800,
        issues: [
            {
                id: "ccross-1",
                title: "Egzoz Susturucusu",
                description: "Arka alt kısımdan egzoz kazanının çok aşağıda görünmesi (Kozmetik).",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Fabrikasyon",
                repairCost: "Boyama"
            },
            {
                id: "ccross-2",
                title: "Multimedya Donması",
                description: "Ekranın tepkisiz kalması veya kablosuz bağlantı kopmaları.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "Yazılım Güncelleme"
            },
            {
                id: "ccross-3",
                title: "CVT Silkeleme",
                description: "Düşük hızlarda veya dur-kalk trafikte şanzıman kararsızlığı.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Yazılım Güncelleme"
            },
            {
                id: "ccross-4",
                title: "Trim Sesleri",
                description: "Özellikle konsol ve kapı içlerinden gelen plastik sesleri.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Sıfırdan itibaren",
                repairCost: "Yalıtım"
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
        totalIssues: 1,
        searchCount: 14000,
        issues: [
            {
                id: "rav4-1",
                title: "Fren Hissi",
                description: "Rejeneratif frenin suni hissi.",
                category: "fren",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Çözümsüz (Tasarım)"
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
        totalIssues: 1,
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
        totalIssues: 3,
        searchCount: 11000,
        issues: [
            {
                id: "yaris-3",
                title: "Arka Emniyet Kemeri",
                description: "Arka emniyet kemerlerinin takılı kalması veya kilitlenmemesi (Geri çağırma var).",
                category: "govde",
                riskLevel: "HIGH",
                affectedKm: "Fabrikasyon",
                repairCost: "Ücretsiz (Yetkili Servis)"
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
                repairCost: "Yazılım Güncelleme"
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
        totalIssues: 1,
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
        totalIssues: 2,
        searchCount: 25000,
        issues: [
            {
                id: "auris-2",
                title: "Yağ Eksiltme",
                description: "Bazı 1.33 ve 1.6 motorlarda yağ eksiltme (Bakımsızsa).",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "150.000+ km",
                repairCost: "Segman / Revizyon"
            },
            {
                id: "auris-1",
                title: "Fren Kaliper Sesi",
                description: "Fren kaliper pimlerinin boşluk yapıp şıngırdaması.",
                category: "fren",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "500 - 1.000 TL (Torna)"
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
        totalIssues: 1,
        searchCount: 5000,
        issues: [
            {
                id: "camry-1",
                title: "Deri Koltuk",
                description: "Sürücü koltuğu deri deformasyonu.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "80.000+ km",
                repairCost: "Döşeme Tamiri"
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
        totalIssues: 2,
        searchCount: 40000,
        issues: [
            {
                id: "hilux-1",
                title: "DPF Tıkanması",
                description: "Sürekli düşük devirde/şehir içinde kullanılırsa partikül filtresi dolar.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Şehir içi",
                repairCost: "Temizlik / Rejenerasyon"
            },
            {
                id: "hilux-2",
                title: "Makas Sesi",
                description: "Arka makasların gıcırdaması.",
                category: "suspansiyon",
                riskLevel: "LOW",
                affectedKm: "Kronik",
                repairCost: "Yağlama"
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
        totalIssues: 2,
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
];
