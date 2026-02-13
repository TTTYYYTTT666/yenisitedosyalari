import { Car } from '@/types';

export const chevroletCars: Car[] = [
    {
        id: "chevrolet-cruze-1-6",
        slug: "chevrolet-cruze-1-6",
        brand: "Chevrolet",
        model: "Cruze",
        variant: "1.6",
        years: "2009-2016",
        generation: "J300",
        price: 350000,
        reliabilityScore: 70,
        totalIssues: 6,
        searchCount: 9000,
        expertNote: "Cruze Türkiye'de uygun fiyatlı sedan olarak çok satıldı. 1.6 benzinli motor güvenilir ama 6AT şanzıman sorunlu. Boya ve kaporta kalitesi zayıf. GM Türkiye'den çekildi, servis ağı daraldı.",
        issues: [
            { id: "cruze-1", title: "6AT Şanzıman Arızası", description: "GM 6T40 otomatik şanzımanda vites geçiş sırasında sarsıntı, gecikme ve kaydırma. Solenoid valfları ve tork konvertörü sorun çıkarır.", category: "sanziman", riskLevel: "HIGH", affectedKm: "80.000 - 120.000 km", repairCost: "12.000 - 25.000 TL" },
            { id: "cruze-2", title: "Devirdaim Pompası Kaçağı", description: "Plastik gövdeli devirdaim pompasından su sızıntısı. Hararet riski.", category: "motor", riskLevel: "HIGH", affectedKm: "60.000+ km", repairCost: "3.000 - 6.000 TL" },
            { id: "cruze-3", title: "Triger Kapağı Yağ Kaçağı", description: "Triger kapak contasından yağ sızıntısı. Motor bölgesinde yağ birikmesi.", category: "motor", riskLevel: "MEDIUM", affectedKm: "60.000+ km", repairCost: "2.000 - 5.000 TL" },
            { id: "cruze-4", title: "Boya/Kaporta Kalitesi", description: "İnce boya ve sac kalitesi. Taş çarpma ve çiziklere karşı dayanıksız.", category: "govde", riskLevel: "LOW", affectedKm: "1-2 yıl", repairCost: "Lokal Boya" },
            { id: "cruze-5", title: "Klima Kompresörü", description: "Klima kompresörü kavramasının aşınması. Soğutma kaybı.", category: "elektronik", riskLevel: "MEDIUM", affectedKm: "80.000+ km", repairCost: "5.000 - 10.000 TL" },
            { id: "cruze-6", title: "Ön Amortisör Takozu", description: "Ön amortisör takozlarının aşınması. Direksiyon çevirirken ses.", category: "suspansiyon", riskLevel: "LOW", affectedKm: "50.000+ km", repairCost: "2.000 - 4.000 TL" }
        ],
        pros: ["Geniş sedan kabin", "Düşük alış fiyatı", "1.6 motor güvenilir", "Konforlu sürüş"],
        cons: ["GM Türkiye'den çekildi", "Yedek parça bulmak zorlaşıyor", "Otomatik şanzıman sorunlu"],
        buyingTips: ["Otomatik şanzıman titreşimini test edin", "Devirdaim pompası kontrol ettirin", "Yedek parça temin durumunu araştırın"]
    },
    {
        id: "chevrolet-aveo-1-4",
        slug: "chevrolet-aveo-1-4",
        brand: "Chevrolet",
        model: "Aveo",
        variant: "1.4 16V",
        years: "2011-2016",
        generation: "T300",
        price: 280000,
        reliabilityScore: 68,
        totalIssues: 5,
        searchCount: 7000,
        expertNote: "Aveo TR'de giriş seviyesi sedan/hatch olarak satıldı. 1.4 benzinli motor basit ve dayanıklı. Çok ucuz ama iç mekan kalitesi çok düşük. GM çekilince servisi zor. Taksi ve kurye aracı olarak çok kullanıldı.",
        issues: [
            { id: "aveo-1", title: "Triger Kayışı Kopma Riski", description: "Triger kayışının 60.000 km veya 4 yılda değiştirilmemesi durumunda kopma riski. Motor total hasar görür.", category: "motor", riskLevel: "CRITICAL", affectedKm: "60.000 km / 4 yıl", repairCost: "3.000 - 5.000 TL (Kayış) / Motor (Koparsa)" },
            { id: "aveo-2", title: "Termostat Arızası", description: "Termostatın açık kalması. Motor ısınmaz, ısıtma sistemi zayıf çalışır.", category: "motor", riskLevel: "LOW", affectedKm: "60.000+ km", repairCost: "1.500 - 3.000 TL" },
            { id: "aveo-3", title: "Cam Kaldırma Mekanizması", description: "Cam kaldırma telinin kopması veya motorunun bozulması.", category: "govde", riskLevel: "LOW", affectedKm: "40.000+ km", repairCost: "1.000 - 2.000 TL" },
            { id: "aveo-4", title: "Debriyaj Pedal Hissi", description: "Debriyaj pedalının sertleşmesi veya geri gelmemesi. Merkez silindir sorunu.", category: "sanziman", riskLevel: "MEDIUM", affectedKm: "50.000+ km", repairCost: "2.000 - 4.000 TL" },
            { id: "aveo-5", title: "Direksiyon Pompası Sesi", description: "Elektrikli direksiyon pompasından vızıltı sesi.", category: "suspansiyon", riskLevel: "LOW", affectedKm: "50.000+ km", repairCost: "3.000 - 6.000 TL" }
        ],
        pros: ["Çok düşük alım fiyatı", "Basit motor", "Kompakt boyut", "Düşük sigorta"],
        cons: ["GM servisi yok", "İç mekan çok zayıf", "Güvenlik puanı düşük"],
        buyingTips: ["Triger kayışı ne zaman değişmiş sorun", "Ex-taksi mi kontrol edin", "Parça temin durumunu araştırın"]
    }
];
