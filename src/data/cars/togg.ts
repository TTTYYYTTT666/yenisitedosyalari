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
        totalIssues: 2,
        searchCount: 25000,
        issues: [
            {
                id: "togg-1",
                title: "Yazılım Güncellemeleri",
                description: "Ekran donmaları ve şarj istasyonu tanıma sorunları.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "İlk seriler",
                repairCost: "OTA (Ücretsiz)"
            },
            {
                id: "togg-2",
                title: "Şarj Kapağı",
                description: "Elektrikli şarj kapağının açılmaması.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Servis Ayarı"
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
        totalIssues: 2,
        searchCount: 150000,
        issues: [
            {
                id: "togg-1",
                title: "Yazılım Güncellemesi",
                description: "Ekran donmaları ve şarj istasyonu eşleşme sorunları (OTA ile çözülüyor).",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "İlk seriler",
                repairCost: "Ücretsiz"
            },
            {
                id: "togg-2",
                title: "Trim Sesleri",
                description: "B sütunu ve kapı içlerinden gelen hafif trim sesleri.",
                category: "govde",
                riskLevel: "LOW",
                affectedKm: "Rastgele",
                repairCost: "Servis Ayarı"
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
];
