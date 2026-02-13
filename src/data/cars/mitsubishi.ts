import { Car } from '@/types';

export const mitsubishiCars: Car[] = [
    {
        id: "mitsubishi-eclipse-cross-phev",
        slug: "mitsubishi-eclipse-cross-phev",
        brand: "Mitsubishi",
        model: "Eclipse Cross",
        variant: "PHEV",
        years: "2021-2024",
        generation: "GK",
        price: 2000000,
        expertNote: "Mitsubishi'nin PHEV teknolojisi (2.4 MIVEC + 2 elektrik motor). S-AWC 4 çeker hibrit sistem kar/buzda mükemmel. Türkiye'de az bilinen ama teknolojik açıdan en ileri SUV'lardan biri. Dahili şarj kablosu dayanıklılığı zayıf — harici şarj kablosu alın. Temsa yetkili servis ağı var ama tecrube sınırlı. Şehir içi sadece elektrikle ~45 km gidebilir.",
        reliabilityScore: 83,
        totalIssues: 1,
        searchCount: 5000,
        issues: [
            {
                id: "eclipse-1",
                title: "Şarj Kablosu",
                description: "Dahili şarj kablosunun dayanıklılık sorunu.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Kullanıma bağlı",
                repairCost: "3.000 - 6.000 TL"
            }
        ],
        pros: [
            "PHEV teknolojisi",
            "S-AWC 4x4",
            "Sessiz şehir içi"
        ],
        cons: [
            "Az bilinen marka",
            "Servis ağı"
        ],
        buyingTips: [
            "Orijinal şarj kablosu sağlam mı?"
        ]
    },
    {
        id: "mitsubishi-asx-1-3-turbo",
        slug: "mitsubishi-asx-1-3-turbo",
        brand: "Mitsubishi",
        model: "ASX",
        variant: "1.3 Turbo Instyle",
        years: "2023-2024",
        generation: "Mk2",
        price: 1450000,
        expertNote: "Renault Captur CMF-B platformu, yalnızca Mitsubishi logosu taşıyor. TCe 130 EDC şanzıman Renault ile BIREBIR aynı. EDC titremesi kalkışta normal, sportif hız şanzıman değil. Captur bulamazsanız aynı aracı Mitsubishi logosuyla alın — garanti koşulları daha iyi olabilir. Start-stop akkü bağımlı, kışın sorun çıkarabilir.",
        reliabilityScore: 88,
        totalIssues: 3,
        searchCount: 5000,
        issues: [
            {
                id: "asx-new-1",
                title: "EDC Titreme",
                description: "Yokuş kalkışlarında şanzıman kararsızlığı.",
                category: "sanziman",
                riskLevel: "LOW",
                affectedKm: "Karakteristik",
                repairCost: "Yazılım"
            },
            {
                id: "asx-new-2",
                title: "Start-Stop",
                description: "Sistemin devreye girmemesi (Akü voltajı).",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Kış ayları",
                repairCost: "Akü"
            },
            {
                id: "asx-new-3",
                title: "Multimedya",
                description: "Ekranın donması ve yeniden başlaması.",
                category: "elektronik",
                riskLevel: "LOW",
                affectedKm: "Yazılım",
                repairCost: "Reset"
            }
        ],
        pros: [
            "Renault Captur altyapısı",
            "Motor performansı",
            "Garanti"
        ],
        cons: [
            "Kopya tasarım (Captur ile aynı)",
            "Marka imajı (Eskiye göre)"
        ],
        buyingTips: [
            "Captur bulamazsanız aynı aracı Mitsubishi logosuyla alabilirsiniz."
        ]
    },
    {
        id: "mitsubishi-l200",
        slug: "mitsubishi-l200-tornado",
        brand: "Mitsubishi",
        model: "L200",
        variant: "2.4 DI-D Tornado",
        years: "2015-2023",
        generation: "Mk5",
        price: 2200000,
        expertNote: "MIVEC 2.4 dizel motor (181 HP), Super Select 4WD. Türkiye'de pick-up segmentinde Toyota Hilux'un en güçlü rakibi. Tornado donanım en dolu versiyon. DPF şehir içi kullanımda doluyor — haftada 1 kez uzun yol yapın. Temsa yetkili servis ağı ticari araç tecrübesine sahip. 2023'den sonra Triton kötü göründüğü için önceki kasayı tercih edin.",
        reliabilityScore: 90,
        totalIssues: 1,
        searchCount: 7000,
        issues: [
            {
                id: "l200-1",
                title: "DPF",
                description: "Şehir içi kullanımda DPF dolması.",
                category: "motor",
                riskLevel: "MEDIUM",
                affectedKm: "Sürekli",
                repairCost: "Temizlik"
            }
        ],
        pros: [
            "Arazi yeteneği (Super Select)",
            "Dayanıklılık",
            "Piyasa"
        ],
        cons: [
            "Arka koltuk konforu",
            "Yakıt"
        ],
        buyingTips: [
            "Tornado donanım en dolusudur."
        ]
    },
];
