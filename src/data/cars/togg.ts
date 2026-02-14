import { Car } from '@/types';

export const toggCars: Car[] = [
    {
        id: "togg-t10x-v2",
        slug: "togg-t10x-v2",
        brand: "Togg",
        model: "T10X",
        variant: "V2 RWD",
        years: "2023-2024",
        generation: "Gen1",
        price: 2600000,
        expertNote: "Türkiye'nin ilk yerli elektrikli otomobili. RWD (arkadan itiş), 218 HP. Trugo şarj ağı hızla yayılıyor. Yazılım stabil değil ama OTA ile sürekli güncelleniyor — 1.4.0+ sürüm daha kararlı. Şarj kapağı açılmama sorunu erken serilere özel. Batarya Türkiye iklimi için uygun performans veriyor. Türkiye'de yerli üretim MTV avantajı var (düşük vergi).",
        reliabilityScore: 85,
        totalIssues: 4,
        searchCount: 25000,
        issues: [
            {
                id: "togg-1",
                title: "Yazılım Güncellemeleri",
                description: "Ekran donmaları ve şarj istasyonu tanıma sorunları.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "İlk seriler",
                repairCost: "0 TL (Garanti Kapsamı)"
            },
            {
                id: "togg-2",
                title: "Şarj Kapağı",
                description: "Elektrikli şarj kapağının açılmaması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "2.000 - 5.000 TL (Servis)"
            },
            {
                id: "t10x-v2-auto-3",
                title: "12V Akü Boşalması",
                description: "12V yardımcı akünün uzun park halinde boşalması.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Rastgele",
                repairCost: "3.000 - 5.000 TL"
            },
            {
                id: "t10x-v2-auto-4",
                title: "Şarj Kapağı Sorunu",
                description: "Şarj kapağının donması veya mekanik olarak açılmaması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Kış ayları",
                repairCost: "1.500 - 3.000 TL"
            }
        ],
        pros: [
            "Yerli üretim gururu",
            "Geniş iç hacim",
            "Performans (218hp)"
        ],
        cons: [
            "Şarj altyapısı (Genel sorun)",
            "Yazılım stabilite"
        ],
        buyingTips: [
            "Yazılım sürümünü kontrol edin (1.4.0+)"
        ]
    },
    {
        id: "togg-t10x-v2",
        slug: "togg-t10x-v2-long-range",
        brand: "Togg",
        model: "T10X",
        variant: "V2 Long Range",
        years: "2023-2024",
        generation: "Mk1",
        price: 1850000,
        expertNote: "V2 Long Range versiyonu en mantıklı seçim — şehir içi 350+ km, şehirlerarası 250+ km menzil. Kışın menzil %25-30 düşüyor, göze alın. Trim sesleri B sütunu ve kapı içlerinden gelir, ilk seri üretim kalıte kontrol eksikliği. Togg TGS (Togg Geniş Servis Ağı) ile birlikte servis noktaları artıyor. Yerli üretim sebebiyle ÖTV avantajı yüksek, sıfır fiyatı rekabetçi.",
        reliabilityScore: 85,
        totalIssues: 4,
        searchCount: 150000,
        issues: [
            {
                id: "togg-1",
                title: "Yazılım Güncellemesi",
                description: "Ekran donmaları ve şarj istasyonu eşleşme sorunları (OTA ile çözülüyor).",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "İlk seriler",
                repairCost: "0 TL (Garanti Kapsamı)"
            },
            {
                id: "togg-2",
                title: "Trim Sesleri",
                description: "B sütunu ve kapı içlerinden gelen hafif trim sesleri.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "2.000 - 5.000 TL (Servis)"
            },
            {
                id: "t10x-v2-long-range-auto-3",
                title: "Yağ Eksiltme",
                description: "Motor yağının servis aralarında eksilmesi. Düzenli kontrol şart.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "100.000+ km",
                repairCost: "Segman / 5.000 - 15.000 TL"
            },
            {
                id: "t10x-v2-long-range-auto-4",
                title: "Şanzıman Sarsıntısı",
                description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.",
                category: "sanziman",
                riskLevel: "MEDIUM",
                affectedKm: "80.000+ km",
                repairCost: "Yağ değişimi / 5.000 - 15.000 TL"
            }
        ],
        pros: [
            "Yerli üretim avantajı",
            "Performans (218 HP)",
            "Geniş iç hacim"
        ],
        cons: [
            "Menzil kışın düşüyor",
            "Servis ağı henüz yaygınlaşıyor"
        ],
        buyingTips: [
            "V2 Long Range en mantıklı seçenektir, menzil farkı çok belirgindir."
        ]
    },

    // ─── Eski new-cars dosyasından taşındı ───
    {
        id: "togg-t10f",
        slug: "togg-t10f",
        brand: "TOGG",
        model: "T10F",
        variant: "Uzun Menzil",
        years: "2025-2026",
        generation: "Mk1",
        price: 1800000,
        expertNote: "Yerli otomobilin sedan versiyonu. T10X platformu üzerine kurulu. SUV kardeşine göre daha düşük ağırlık merkezi ve daha sportif sürüş. Henüz çok yeni — kronikler zamanla ortaya çıkacak.",
        reliabilityScore: 80,
        totalIssues: 5,
        searchCount: 35000,
        issues: [
            {
                id: "t10f-1",
                title: "Yazılım Güncelleme Gerekliliği",
                description: "OTA güncellemelerin sıkça gelmesi ve bazı güncellemelerin mevcut özelliklerde regresyona neden olması.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Sürekli",
                repairCost: "0 TL (Garanti Kapsamı)"
            },
            {
                id: "t10f-2",
                title: "Şarj Uyumluluk Sorunları",
                description: "Bazı üçüncü parti DC şarj istasyonlarıyla uyumsuzluk ve şarjın kesilmesi.",
                category: "elektronik",
                riskLevel: "MEDIUM",
                affectedKm: "Şarj istasyonuna bağlı",
                repairCost: "1.500 - 4.000 TL (Yazılım)"
            },
            {
                id: "t10f-3",
                title: "Menzil Düşüşü (Soğuk Hava)",
                description: "Kış aylarında batarya menzilinin %25-30 düşmesi.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Kış ayları",
                repairCost: "0 TL (Karakteristik)"
            },
            {
                id: "t10f-4",
                title: "Gıcırtı Sesleri (Yeni Araç)",
                description: "İlk üretim araçlarda iç trim ve göğüs panelinden gelen gıcırtı sesleri.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Sıfırdan",
                repairCost: "0 TL (Garanti Kapsamı)"
            },
            {
                id: "t10f-5",
                title: "Rejeneratif Fren Kalibrasyonu",
                description: "Rejeneratif fren kuvvetinin bazen tutarsız olması. Yazılım güncellemesiyle iyileşir.",
                category: "fren",
                riskLevel: "LOW",
                affectedKm: "Yazılıma bağlı",
                repairCost: "1.500 - 4.000 TL (Yazılım)"
            }
        ],
        pros: [
            "Yerli ve milli gurur",
            "Sportif sedan tasarımı",
            "Elektrikli araç avantajları"
        ],
        cons: [
            "Henüz çok yeni (Kronikler belirsiz)",
            "Şarj altyapısı yetersiz",
            "İkinci el değer belirsizliği"
        ],
        buyingTips: [
            "Uzun menzil versiyonunu tercih edin",
            "Yazılım güncellemelerini takip edin",
            "Garanti koşullarını detaylıca okuyun"
        ]
    }
];
