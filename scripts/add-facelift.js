/**
 * Add facelift (makyajlı kasa) versions as separate car entries.
 * These cover TR-market cars where facelift changed/resolved significant issues.
 * 
 * Each new entry = a new car data file entry + brands.ts variant.
 */
const fs = require('fs'), p = require('path');
const carsDir = p.join(__dirname, '..', 'src', 'data', 'cars');

function a(file, car) {
    const fp = p.join(carsDir, file);
    let c = fs.readFileSync(fp, 'utf-8');
    if (c.includes(car.slug)) { console.log('SKIP ' + car.slug); return; }
    const last = c.lastIndexOf('];');
    const entry = JSON.stringify(car, null, 2);
    c = c.slice(0, last) + ',\n' + entry + '\n' + c.slice(last);
    fs.writeFileSync(fp, c, 'utf-8');
    console.log('OK ' + car.slug);
}

// ==============================
// VW GOLF 7.5 FACELIFT (2017-2020)
// Golf 7 var: 2012-2019: DSG sorunları, turbo, yağ tüketimi
// Golf 7.5 FL: 2017-2020: DSG iyileşti, yeni MIB2 infotainment, LED farlar std, DQ381 şanzıman
// ==============================
a('volkswagen.ts', {
    id: "vw-golf-75-fl",
    slug: "vw-golf-7-5-1-5-tsi-facelift",
    brand: "Volkswagen",
    model: "Golf",
    variant: "Golf 7.5 Facelift 1.5 TSI Comfortline",
    years: "2017-2020",
    generation: "Ara Kasa (2017-2020)",
    price: "₺900.000 – ₺1.350.000",
    expertNote: "Golf 7.5, 1.4 TSI yerine gelen 1.5 TSI EA211 Evo motorla geldi. Silindır deaktivasyonu (ACT) yakıt tasarrufu sağlıyor ancak düşük devirde titreşim yapabilir. DQ381 DSG yedi ileri şanzıman DQ200'e göre çok daha güvenilir. MIB2+ multimedya ve full LED farlar standart.",
    reliabilityScore: 72,
    totalIssues: 5,
    searchCount: 18500,
    issues: [
        { id: "vw-g75-1", title: "1.5 TSI Silindır Deaktivasyonu Titreşimi", description: "ACT (Active Cylinder Management) sistemi 2 silindiri devre dışı bıraktığında özellikle düşük devirde (1200-1800 rpm) belirgin titreşim ve gürültü hissedilir. Yazılım güncellemesiyle kısmen azaltılabilir.", category: "Motor", riskLevel: "Orta", affectedKm: "0-150.000 km", repairCost: "₺0 – ₺2.000 (yazılım güncelleme)" },
        { id: "vw-g75-2", title: "DQ381 7 İleri DSG Adaptasyon Sorunu", description: "DQ200'e göre çok daha güvenilir olan DQ381, nadiren adaptasyon kaybı yaşayabilir. Vites geçişlerinde hafif sarsıntı olabilir. Yazılım sıfırlama ve yeniden adaptasyon genellikle çözer.", category: "Şanzıman", riskLevel: "Düşük", affectedKm: "50.000-120.000 km", repairCost: "₺1.000 – ₺3.000" },
        { id: "vw-g75-3", title: "Turbo Wastegate Gıcırtısı", description: "1.5 TSI motorun elektronik wastegate'i soğuk havalarda veya motor soğukken gıcırtı sesi çıkarabilir. Performansı etkilemez ama rahatsız edici olabilir.", category: "Motor", riskLevel: "Düşük", affectedKm: "30.000-100.000 km", repairCost: "₺2.000 – ₺5.000" },
        { id: "vw-g75-4", title: "MIB2+ Multimedya Donma", description: "Infotainment sistemi zaman zaman donabilir veya yavaşlayabilir. Yazılım güncellemesiyle büyük ölçüde düzeltilebilir.", category: "Elektrik/Elektronik", riskLevel: "Düşük", affectedKm: "Tüm km", repairCost: "₺0 – ₺500" },
        { id: "vw-g75-5", title: "Arka Fren Disk Aşınması", description: "Arka fren diskleri 40-50 bin km civarında aşınabilir. Ön disklere göre daha sık değişim gerektirir.", category: "Fren", riskLevel: "Düşük", affectedKm: "40.000-60.000 km", repairCost: "₺2.500 – ₺4.000" }
    ],
    pros: ["1.5 TSI motor Golf 7'deki 1.4'ten daha verimli", "DQ381 DSG çok daha güvenilir", "Full LED farlar standart", "ACT yakıt tasarrufu sağlıyor", "Daha modern MIB2+ multimedya"],
    cons: ["ACT titreşimi rahatsız edici olabilir", "Yedek parça fiyatları yüksek", "Sigorta primleri yüksek"],
    buyingTips: ["Silindır deaktivasyonu test edin, aşırı titreşim varsa yazılım güncellemesi yapılmamış olabilir", "DSG adaptasyon testini mutlaka yapın", "Son yazılım güncellemelerinin yüklendiğinden emin olun", "Golf 7'ye göre daha az sorunlu ama fiyat farkı çok — değerlendir"]
});

// ==============================
// VW PASSAT B8.5 FACELIFT (2019-2023)
// Passat B8: 2015-2019: 1.6 TDI DPF, DSG DQ200 sorunları
// Passat B8.5 FL: 2019-2023: Dijital kokpit, travel assist, DQ381 geldi
// ==============================
a('volkswagen.ts', {
    id: "vw-passat-b85-fl",
    slug: "vw-passat-b8-5-1-5-tsi-facelift",
    brand: "Volkswagen",
    model: "Passat",
    variant: "Passat B8.5 Facelift 1.5 TSI Elegance",
    years: "2019-2023",
    generation: "Ara Kasa (2019-2023)",
    price: "₺1.200.000 – ₺1.800.000",
    expertNote: "B8.5 facelift'te en büyük değişiklik Digital Cockpit (dijital gösterge paneli), Travel Assist yarı-otonom sürüş ve IQ.Light LED matrix farlar. 1.5 TSI motor 1.4 TSI'nin yerini aldı. DSG DQ381 7 ileri şanzıman artık standard. DPF sorunları büyük ölçüde çözüldü.",
    reliabilityScore: 75,
    totalIssues: 4,
    searchCount: 14200,
    issues: [
        { id: "vw-pb85-1", title: "1.5 TSI ACT Titreşim", description: "Golf 7.5 ile aynı 1.5 TSI EA211 Evo motor. Silindır deaktivasyonu düşük devirde titreşim yapabilir. Özellikle D viteste durma anında hissedilir.", category: "Motor", riskLevel: "Orta", affectedKm: "0-150.000 km", repairCost: "₺0 – ₺2.000" },
        { id: "vw-pb85-2", title: "Digital Cockpit Yazılım Hataları", description: "12.3 inç dijital gösterge panelinde nadiren yazılım hataları, donma veya ekran titremesi yaşanabilir. OTA güncelleme ile düzeltilebilir.", category: "Elektrik/Elektronik", riskLevel: "Düşük", affectedKm: "Tüm km", repairCost: "₺0 – ₺2.000" },
        { id: "vw-pb85-3", title: "Travel Assist Sensör Kalibrasyonu", description: "Yarı-otonom sürüş sistemi cam değişiminden sonra kalibrasyon gerektirir. Doğru kalibre edilmezse şerit takip ve adaptif hız sabitleme düzgün çalışmaz.", category: "Güvenlik", riskLevel: "Orta", affectedKm: "Tüm km", repairCost: "₺3.000 – ₺7.000 (cam+kalibrasyon)" },
        { id: "vw-pb85-4", title: "IQ.Light LED Matrix Far Modül Arızası", description: "Matrix LED far modülleri arızalanabilir. Tek LED segment sönebilir. Modül değişimi yüksek maliyetli.", category: "Elektrik/Elektronik", riskLevel: "Düşük", affectedKm: "60.000+ km", repairCost: "₺8.000 – ₺20.000" }
    ],
    pros: ["DSG DQ381 çok güvenilir", "Digital Cockpit modern görünüm", "Travel Assist konforu", "DPF sorunları B8'e göre çözülmüş", "1.5 TSI verimli motor"],
    cons: ["Matrix far tamiri çok pahalı", "ACT titreşimi devam ediyor", "İkinci el fiyatları hâlâ yüksek"],
    buyingTips: ["Matrix farların tüm segmentlerinin çalıştığını kontrol edin", "Digital Cockpit'i test edin", "Cam değişimi yapılmışsa sensör kalibrasyonu sorulmalı", "B8'e göre daha az kronik sorun — fiyat farkına değer"]
});

// ==============================
// FORD FOCUS MK3.5 FACELIFT (2015-2018)
// Focus Mk3: 2011-2015: PowerShift DCT büyük sorun, motor titreşimi
// Focus Mk3.5 FL: 2015-2018: PowerShift kaldırıldı 6AT geldi, 1.5 TDCi yeni motor
// ==============================
a('ford.ts', {
    id: "ford-focus-mk35-fl",
    slug: "ford-focus-mk3-5-1-5-tdci-facelift",
    brand: "Ford",
    model: "Focus",
    variant: "Focus Mk3.5 Facelift 1.5 TDCi Titanium",
    years: "2015-2018",
    generation: "Ara Kasa (2015-2018)",
    price: "₺550.000 – ₺850.000",
    expertNote: "Mk3.5 facelift Ford'un en önemli düzeltmesi: PowerShift DCT kaldırılıp 6 ileri torque converter otomatik şanzıman geldi. Bu tek başına büyük bir iyileşme. 1.5 TDCi motor 1.6 TDCi'ın yerini aldı — daha verimli ama EGR sorunları devam edebilir.",
    reliabilityScore: 70,
    totalIssues: 5,
    searchCount: 12500,
    issues: [
        { id: "ford-fmk35-1", title: "1.5 TDCi EGR Valve Tıkanması", description: "1.6 TDCi'da da olan EGR tıkanma sorunu 1.5 TDCi'da azaldı ama tamamen çözülmedi. Şehir içi kısa mesafe kullanımda EGR valfı karbon biriktirir.", category: "Motor", riskLevel: "Orta", affectedKm: "80.000-150.000 km", repairCost: "₺3.000 – ₺6.000" },
        { id: "ford-fmk35-2", title: "6AT Şanzıman Vites Geçiş Gecikmesi", description: "Torque converter 6AT, PowerShift'e göre çok daha güvenilir ancak düşük hızlarda vites geçiş kararlarında gecikme yaşanabilir. Performans açısından DCT kadar keskin değil.", category: "Şanzıman", riskLevel: "Düşük", affectedKm: "Tüm km", repairCost: "₺0 (normal davranış)" },
        { id: "ford-fmk35-3", title: "Enjektör Sızıntısı", description: "1.5 TDCi enjektörleri yüksek km'de sızıntı yapabilir. Motor bölgesinde dizel kokusu ve güç kaybı belirtisi.", category: "Motor", riskLevel: "Yüksek", affectedKm: "120.000+ km", repairCost: "₺4.000 – ₺12.000" },
        { id: "ford-fmk35-4", title: "SYNC 2 Multimedya Yavaşlama", description: "SYNC 2 infotainment sistemi zamanla yavaşlar. Dokunmatik ekran tepki süreleri uzar.", category: "Elektrik/Elektronik", riskLevel: "Düşük", affectedKm: "Tüm km", repairCost: "₺0 – ₺1.500" },
        { id: "ford-fmk35-5", title: "Süspansiyon Bijon Gevşemesi", description: "Ön süspansiyon alt salıncak bijonları zamanla gevşeyebilir. Direksiyon titremesi ve gürültü yapar.", category: "Süspansiyon", riskLevel: "Orta", affectedKm: "60.000-100.000 km", repairCost: "₺1.500 – ₺3.500" }
    ],
    pros: ["PowerShift DCT KALDIRILDI — en büyük iyileşme", "6AT güvenilir otomatik", "1.5 TDCi daha verimli", "Daha modern ön tasarım", "SYNC 2 dokunmatik ekran"],
    cons: ["EGR sorunu devam ediyor", "1.5 TDCi enjektör riski var", "SYNC 2 zamanla yavaşlıyor"],
    buyingTips: ["MUTLAKA facelift olduğunu teyit edin — PowerShift DCT olan Mk3 ile karıştırmayın", "EGR valfı temizliği yapılmış mı kontrol edin", "6AT şanzıman sağlığını düz yolda test edin", "PowerShift'li Mk3'ten çok daha güvenilir"]
});

// ==============================
// RENAULT CLIO 4 PHASE 2 (2016-2019)
// Clio 4 Ph1: 2012-2016: Turbo, şanzıman, MediaNav sorunları
// Clio 4 Ph2: 2016-2019: Yeni ön tasarım, MediaNav Evolution, LED DRL std
// ==============================
a('renault.ts', {
    id: "renault-clio4-ph2",
    slug: "renault-clio-4-phase-2-1-5-dci-icon",
    brand: "Renault",
    model: "Clio",
    variant: "Clio IV Phase 2 1.5 dCi Icon",
    years: "2016-2019",
    generation: "Ara Kasa (2016-2019)",
    price: "₺400.000 – ₺650.000",
    expertNote: "Phase 2 facelift'te ön tampon, farlar ve arka stoplar değişti. MediaNav Evolution daha stabil. LED gündüz farı standart. 1.5 dCi K9K motor aynı ancak EDC (çift kavramalı otomatik) yazılımı iyileştirildi.",
    reliabilityScore: 65,
    totalIssues: 5,
    searchCount: 15800,
    issues: [
        { id: "r-c4p2-1", title: "EDC Şanzıman Kavrama Aşınması (Azalmış)", description: "Phase 1'deki EDC kavrama sorunu Phase 2'de yazılım güncellemesiyle azaldı ama tamamen çözülmedi. Yüksek km'de hâlâ kavrama seti değişimi gerekebilir.", category: "Şanzıman", riskLevel: "Orta", affectedKm: "80.000-130.000 km", repairCost: "₺8.000 – ₺15.000" },
        { id: "r-c4p2-2", title: "1.5 dCi Turbo Actuator", description: "Turbo actuator elektronik arızası. Check engine yanar, turbo basıncı düşer. Phase 1'den devam eden sorun.", category: "Motor", riskLevel: "Orta", affectedKm: "100.000+ km", repairCost: "₺3.000 – ₺6.000" },
        { id: "r-c4p2-3", title: "MediaNav Evolution Donma (Azalmış)", description: "Phase 1'deki MediaNav çok daha sorunluydu. Evolution versiyonu daha stabil ancak GPS güncellemesi sonrası nadiren donma yaşanabilir.", category: "Elektrik/Elektronik", riskLevel: "Düşük", affectedKm: "Tüm km", repairCost: "₺0 – ₺1.000" },
        { id: "r-c4p2-4", title: "Arka Fren Kampana Paslanması", description: "Arka kampanalı frenler nemli iklimlerde paslanıp ses yapabilir. Periyodik temizlik gerekir.", category: "Fren", riskLevel: "Düşük", affectedKm: "30.000+ km", repairCost: "₺500 – ₺2.000" },
        { id: "r-c4p2-5", title: "Direksiyon Kolonu Gıcırtısı", description: "Soğuk havalarda direksiyon kolonu gıcırtı sesi çıkarabilir. Yağlama ile çözülür.", category: "Direksiyon", riskLevel: "Düşük", affectedKm: "40.000+ km", repairCost: "₺200 – ₺800" }
    ],
    pros: ["EDC yazılımı Phase 1'e göre iyileşmiş", "MediaNav Evolution daha stabil", "LED DRL standart", "Daha modern ön görünüm", "1.5 dCi güvenilir motor"],
    cons: ["EDC kavrama sorunu tam çözülmemiş", "Turbo actuator riski devam", "Kampanalı arka fren"],
    buyingTips: ["Ph1 ve Ph2 farkını bilin: 2016 Eylül sonrası üretim Phase 2", "EDC kavrama seti değişmiş mi sorgulan", "MediaNav'ı test edin — daha iyi ama mükemmel değil", "Manuel şanzıman tercih ediliyorsa çok daha az sorun"]
});

// ==============================
// RENAULT MEGANE 3 PHASE 2 (2012-2016)
// Megane 3 Ph1: 2009-2012: CVT sorunları, turbo, kapı menteşesi
// Megane 3 Ph2: 2012-2016: 6AT geldi CVT kaldırıldı, yeni ön yüz
// ==============================
a('renault.ts', {
    id: "renault-megane3-ph2",
    slug: "renault-megane-3-phase-2-1-5-dci-gt-line",
    brand: "Renault",
    model: "Megane",
    variant: "Megane III Phase 2 1.5 dCi GT Line",
    years: "2012-2016",
    generation: "Ara Kasa (2012-2016)",
    price: "₺350.000 – ₺550.000",
    expertNote: "Phase 2'de en kritik değişiklik: CVT şanzıman kaldırılıp EDC çift kavrama geldi. CVT Megane 3'ün en büyük kabusuydu. Ayrıca ön tampon, farlar ve iç mekan yenilendi. R-Link multimedya geldi.",
    reliabilityScore: 62,
    totalIssues: 5,
    searchCount: 11200,
    issues: [
        { id: "r-m3p2-1", title: "EDC Çift Kavrama Aşınması", description: "CVT gitti ama EDC çift kavrama şanzıman kendi sorunlarını getirdi. 80-120 bin km'de kavrama seti değişimi gerekebilir. CVT kadar feci değil ama ucuz da değil.", category: "Şanzıman", riskLevel: "Orta", affectedKm: "80.000-120.000 km", repairCost: "₺8.000 – ₺15.000" },
        { id: "r-m3p2-2", title: "1.5 dCi DPF Rejenerasyon Sorunu (Azalmış)", description: "Phase 1'deki DPF sorunları hâlâ var ama yazılım güncellemesiyle rejenerasyon döngüleri iyileştirildi. Şehir içi kısa mesafe kullanımda hâlâ dikkat.", category: "Motor", riskLevel: "Orta", affectedKm: "100.000+ km", repairCost: "₺4.000 – ₺10.000" },
        { id: "r-m3p2-3", title: "R-Link Multimedya Donma", description: "R-Link multimedya sistemi sık sık donabilir, yavaşlayabilir. SD kart üzerinden güncelleme gerekir.", category: "Elektrik/Elektronik", riskLevel: "Düşük", affectedKm: "Tüm km", repairCost: "₺0 – ₺1.000" },
        { id: "r-m3p2-4", title: "Kapı Menteşesi Paslanması (Devam)", description: "Phase 1'den devam eden sorun. Özellikle sürücü kapısı menteşesi zamana bağlı paslanıp sıkışabilir.", category: "Kaporta", riskLevel: "Düşük", affectedKm: "80.000+ km", repairCost: "₺800 – ₺2.500" },
        { id: "r-m3p2-5", title: "Arka Amortisör Sızıntısı", description: "Arka amortisörler 60-80 bin km'de yağ sızıntısı yapabilir. Takırtı sesi ve yol tutuş bozulması.", category: "Süspansiyon", riskLevel: "Orta", affectedKm: "60.000-80.000 km", repairCost: "₺2.500 – ₺5.000" }
    ],
    pros: ["CVT KALDIRILDI — en kritik iyileşme", "EDC, CVT'den çok daha iyi", "R-Link multimedya", "Daha modern tasarım", "1.5 dCi güvenilir motor"],
    cons: ["EDC kendi sorunlarını getirdi", "R-Link yavaş ve buggy", "DPF sorunu devam"],
    buyingTips: ["ASLA Phase 1 CVT'li Megane 3 almayın, Phase 2 EDC'yi tercih edin", "EDC kavrama seti km'sini sorun", "DPF temizliği yapılmış mı kontrol edin", "Manuel şanzıman en güvenli seçenek"]
});

// ==============================
// OPEL ASTRA J FACELIFT (2012-2015)
// Astra J: 2009-2012: 1.3 CDTi DPF, 6AT şanzıman uyumu, süspansiyon
// Astra J FL: 2012-2015: IntelliLink, yeni motorlar, DPF iyileştirme
// ==============================
a('opel.ts', {
    id: "opel-astra-j-fl",
    slug: "opel-astra-j-facelift-1-6-cdti-sport",
    brand: "Opel",
    model: "Astra",
    variant: "Astra J Facelift 1.6 CDTi Sport",
    years: "2012-2015",
    generation: "Ara Kasa (2012-2015)",
    price: "₺350.000 – ₺550.000",
    expertNote: "Astra J facelift'te 1.3 CDTi yerine 1.6 CDTi (B16DTH) motor geldi — daha güçlü ve güvenilir. IntelliLink infotainment eklendi. DPF yazılımı iyileştirildi. Start-stop sistemi standart oldu ancak akü tüketimi arttı.",
    reliabilityScore: 68,
    totalIssues: 5,
    searchCount: 9500,
    issues: [
        { id: "opel-ajfl-1", title: "1.6 CDTi Zamanlama Zinciri Gerilmesi", description: "B16DTH motorun zamanlama zinciri 100 bin km sonra gerilme gösterebilir. Çıngırak sesi soğuk çalıştırmada belirgin. Erken müdahale edilmezse motor hasarı riski.", category: "Motor", riskLevel: "Yüksek", affectedKm: "100.000-160.000 km", repairCost: "₺5.000 – ₺12.000" },
        { id: "opel-ajfl-2", title: "Start-Stop AGM Akü Ömrü", description: "Start-stop sistemi AGM akü gerektirir. Normal aküye göre 2-3 kat pahalı ve 3-4 yılda değişim gerekir.", category: "Elektrik/Elektronik", riskLevel: "Düşük", affectedKm: "Tüm km", repairCost: "₺3.000 – ₺5.000 (AGM akü)" },
        { id: "opel-ajfl-3", title: "IntelliLink Bağlantı Kopması", description: "IntelliLink multimedya sistemi Bluetooth ve telefon bağlantısını kaybedebilir. Yazılım güncellemesi ile iyileşir.", category: "Elektrik/Elektronik", riskLevel: "Düşük", affectedKm: "Tüm km", repairCost: "₺0 – ₺500" },
        { id: "opel-ajfl-4", title: "DPF Rejenerasyon (İyileşmiş)", description: "Facelift'te DPF yazılımı güncellenmiş. Pre-facelift'e göre tıkanma riski azalmış ama şehir içi kısa mesafede hâlâ dikkat gerekir.", category: "Motor", riskLevel: "Orta", affectedKm: "80.000-130.000 km", repairCost: "₺3.000 – ₺8.000" },
        { id: "opel-ajfl-5", title: "Ön Fren Disk Çarpıklığı", description: "Ön fren diskleri sert frenleme sonrası çarpılabilir. Direksiyon titremesi yapar. Kaliteli aftermarket disk tavsiye edilir.", category: "Fren", riskLevel: "Düşük", affectedKm: "40.000-70.000 km", repairCost: "₺1.500 – ₺3.500" }
    ],
    pros: ["1.6 CDTi, 1.3 CDTi'den daha güçlü ve güvenilir", "IntelliLink modern multimedya", "DPF yazılımı iyileşmiş", "Daha iyi iç mekan kalitesi", "Start-stop yakıt tasarrufu"],
    cons: ["Zamanlama zinciri riski var", "AGM akü pahalı", "Start-stop Can-Bus sorunları olabilir"],
    buyingTips: ["Zamanlama zinciri sesi kontrol edin — çıngırak varsa kaçın", "1.6 CDTi MUTLAKA tercih edin, 1.3 CDTi'dan kaçının", "IntelliLink yazılım sürümünü kontrol edin", "Start-stop devre dışı bırakılabilir — sorun değil"]
});

// ==============================
// HYUNDAI TUCSON TL FACELIFT (2018-2020)
// Tucson TL: 2015-2018: DCT sorunları, turbo gecikme, gürültü
// Tucson TL FL: 2018-2020: Yeni ön tasarım, 8AT (DCT kaldırıldı), akıllı far
// ==============================
a('hyundai.ts', {
    id: "hyundai-tucson-tl-fl",
    slug: "hyundai-tucson-tl-facelift-1-6-crdi-elite-plus",
    brand: "Hyundai",
    model: "Tucson",
    variant: "Tucson TL Facelift 1.6 CRDi Elite Plus",
    years: "2018-2020",
    generation: "Ara Kasa (2018-2020)",
    price: "₺750.000 – ₺1.100.000",
    expertNote: "TL facelift'te 7 ileri DCT kaldırılıp 6 ileri torque converter otomatik geldi — DCT Tucson TL'nin en büyük sorunuydu. Kaskad ön ızgara tasarımı, LED farlar ve daha büyük multimedya ekranı eklendi.",
    reliabilityScore: 72,
    totalIssues: 4,
    searchCount: 16800,
    issues: [
        { id: "hy-ttfl-1", title: "1.6 CRDi Motor Titreşimi (Azalmış)", description: "1.6 CRDi diesel motor titreşimi facelift'te motor takozları iyileştirilerek azaltıldı ama tam çözülmedi. Rölantide hafif titreşim devam edebilir.", category: "Motor", riskLevel: "Düşük", affectedKm: "Tüm km", repairCost: "₺0 (normal)" },
        { id: "hy-ttfl-2", title: "6AT Şanzıman Uyum Sorunu (Nadir)", description: "6AT torque converter, DCT'ye göre çok daha güvenilir. Nadiren soğuk havalarda 1-2 vites arası sert geçiş yapabilir.", category: "Şanzıman", riskLevel: "Düşük", affectedKm: "50.000+ km", repairCost: "₺0 – ₺2.000 (yazılım)" },
        { id: "hy-ttfl-3", title: "Navegasyon Harita Güncellemesi", description: "Yerleşik navigasyon haritaları güncelliayetini yitirebilir. Güncelleme ücreti yüksek olabilir.", category: "Elektrik/Elektronik", riskLevel: "Düşük", affectedKm: "Tüm km", repairCost: "₺500 – ₺2.000" },
        { id: "hy-ttfl-4", title: "Arka Süspansiyon Takırtısı", description: "Arka süspansiyon burçları 50-80 bin km'de sertleşip takırtı yapabilir. Pre-facelift'te de olan sorun.", category: "Süspansiyon", riskLevel: "Düşük", affectedKm: "50.000-80.000 km", repairCost: "₺2.000 – ₺4.000" }
    ],
    pros: ["DCT KALDIRILDI — en kritik iyileşme", "6AT çok daha güvenilir", "Modern kaskad ızgara tasarımı", "LED farlar standart", "Motor titreşimi azaltılmış"],
    cons: ["Diesel motor gürültüsü hâlâ var", "Navigasyon güncelleme maliyeti", "Arka süspansiyon takırtısı"],
    buyingTips: ["MUTLAKA facelift (2018+) alın — DCT'li pre-facelift'ten kaçının", "6AT şanzıman sağlığını test edin", "LED far modülleri çalışıyor mu kontrol edin", "Pre-facelift TL'ye göre çok daha güvenilir"]
});

// ==============================
// TOYOTA C-HR FACELIFT (2020-2023)
// C-HR: 2016-2020: CVT gürültü, süspansiyon sertliği, multimedya
// C-HR FL: 2020-2023: 2.0 Hybrid eklendi, multimedya güncellendi
// ==============================
a('toyota.ts', {
    id: "toyota-chr-fl",
    slug: "toyota-c-hr-facelift-1-8-hybrid",
    brand: "Toyota",
    model: "C-HR",
    variant: "C-HR Facelift 1.8 Hybrid Passion X-Pack",
    years: "2020-2023",
    generation: "Ara Kasa (2020-2023)",
    price: "₺850.000 – ₺1.300.000",
    expertNote: "Facelift'te ön ve arka tasarım belirgin şekilde değişti. 2.0 Hybrid (184hp) motor seçeneği eklendi. Multimedya 8 inç'e büyüdü, Android Auto/CarPlay eklendi. CVT kalibrasyonu iyileştirildi.",
    reliabilityScore: 82,
    totalIssues: 4,
    searchCount: 14500,
    issues: [
        { id: "toy-chrfl-1", title: "CVT Yüksek DevirdaGürültü (Azalmış)", description: "E-CVT kalibrasyonu facelift ile iyileştirildi. Hızlı hızlanmada motor devri eskisi kadar yükselmiyor ama yine de konvansiyonel şanzımana göre farklı hissettiriyor.", category: "Şanzıman", riskLevel: "Düşük", affectedKm: "Tüm km", repairCost: "₺0 (normal)" },
        { id: "toy-chrfl-2", title: "Multimedya Sistem Gecikmesi", description: "Yeni 8 inç multimedya sistemi karmaşık menülerde zaman zaman yavaşlayabilir. Pre-facelift'e göre çok daha iyi.", category: "Elektrik/Elektronik", riskLevel: "Düşük", affectedKm: "Tüm km", repairCost: "₺0" },
        { id: "toy-chrfl-3", title: "Arka Görüş Sınırlılığı (Tasarım)", description: "C-HR'nin coupe tarzı arka tasarımı görüş alanını ciddi şekilde sınırlar. Facelift'te değişmedi. Park sensörü/kamera zorunlu.", category: "Tasarım", riskLevel: "Düşük", affectedKm: "Tüm km", repairCost: "₺0 (tasarım)" },
        { id: "toy-chrfl-4", title: "Süspansiyon Sertliği (Aynı)", description: "Facelift'te süspansiyon ayarları değişmedi. Özellikle 18 inç jantlarda sert sürüş hissi devam ediyor.", category: "Süspansiyon", riskLevel: "Düşük", affectedKm: "Tüm km", repairCost: "₺0 (tasarım tercihi)" }
    ],
    pros: ["Android Auto/CarPlay geldi", "CVT kalibrasyonu iyileştirildi", "Daha agresif tasarım", "2.0 Hybrid seçeneği (daha güçlü)", "Toyota güvenilirliği"],
    cons: ["Arka görüş hâlâ sınırlı", "Süspansiyon hâlâ sert", "Fiyatlar yüksek"],
    buyingTips: ["CarPlay/Android Auto'yu test edin", "1.8 vs 2.0 Hybrid: 2.0 daha dinamik ama daha pahalı", "Arka koltuk darlığı kabul edilmeli", "Pre-facelift'e göre daha modern multimedya"]
});

// ==============================
// PEUGEOT 3008 II FACELIFT (2021-2023)
// 3008: 2016-2020: EAT8 sorunları, i-Cockpit alışma, DPF
// 3008 FL: 2021-2023: Yeni grill, LED farlar, daha büyük ekran
// ==============================
a('peugeot.ts', {
    id: "peugeot-3008-fl",
    slug: "peugeot-3008-facelift-1-5-bluehdi-allure",
    brand: "Peugeot",
    model: "3008",
    variant: "3008 II Facelift 1.5 BlueHDi Allure",
    years: "2021-2023",
    generation: "Ara Kasa (2021-2023)",
    price: "₺1.000.000 – ₺1.500.000",
    expertNote: "Facelift'te çerçevesiz ön ızgara, yeni LED farlar ve 10 inç HD multimedya ekranı geldi. EAT8 şanzıman yazılımı iyileştirildi. 1.5 BlueHDi DV5 motor aynı kaldı ancak emisyon yazılımı güncellendi.",
    reliabilityScore: 70,
    totalIssues: 4,
    searchCount: 11300,
    issues: [
        { id: "peu-30fl-1", title: "EAT8 Şanzıman Titreşimi (Azalmış)", description: "Aisin EAT8 şanzıman facelift'te yazılım güncellemesiyle iyileştirildi. Pre-facelift'teki düşük hızdaki sarsıntı azaldı ama tam gitmedi.", category: "Şanzıman", riskLevel: "Düşük", affectedKm: "30.000+ km", repairCost: "₺0 – ₺2.000 (yazılım)" },
        { id: "peu-30fl-2", title: "AdBlue Seviye Sensörü", description: "SCR katalizör için AdBlue seviye sensörü hatalı okuma yapabilir. Yanlış uyarı vererek aracı çalıştırmayı engelleyebilir.", category: "Motor", riskLevel: "Orta", affectedKm: "60.000+ km", repairCost: "₺2.000 – ₺5.000" },
        { id: "peu-30fl-3", title: "i-Cockpit Dijital Gösterge Yansıması", description: "Küçük direksiyon+yüksek gösterge paneli kombinasyonu güneş ışığında yansıma yapabilir. Polarize güneşlikle azaltılabilir.", category: "Tasarım", riskLevel: "Düşük", affectedKm: "Tüm km", repairCost: "₺0" },
        { id: "peu-30fl-4", title: "Geri Görüş Kamerası Buğulanma", description: "Geri görüş kamerası nemli havalarda buğulanabilir. Lens contası değişimi ile düzelir.", category: "Elektrik/Elektronik", riskLevel: "Düşük", affectedKm: "30.000+ km", repairCost: "₺500 – ₺2.000" }
    ],
    pros: ["EAT8 yazılımı iyileşmiş", "10 inç HD ekran", "Daha modern dış tasarım", "i-Cockpit 2. nesil", "DPF rejenerasyon döngüsü iyileştirilmiş"],
    cons: ["AdBlue sensörü problem potansiyeli", "i-Cockpit alışma süreci", "İkinci el fiyatları yüksek"],
    buyingTips: ["AdBlue sistemi test edin", "EAT8 vites geçişlerini düşük hızda kontrol edin", "Pre-facelift'e göre daha az sorunlu ama fiyat farkı fazla", "i-Cockpit'e alışma süreniz olacak — test sürüşü şart"]
});

// ==============================
// SKODA OCTAVIA A7 FACELIFT (2017-2020)  
// Octavia A7: 2013-2017: DSG DQ200, turbo, klima kompresörü
// Octavia A7 FL: 2017-2020: Full LED, yeni direksiyon, DSG yazılım update
// ==============================
a('skoda.ts', {
    id: "skoda-octavia-a7fl",
    slug: "skoda-octavia-a7-facelift-1-6-tdi-style",
    brand: "Škoda",
    model: "Octavia",
    variant: "Octavia A7 Facelift 1.6 TDI Style",
    years: "2017-2020",
    generation: "Ara Kasa (2017-2020)",
    price: "₺650.000 – ₺1.000.000",
    expertNote: "A7 facelift'te full LED farlar, yeni 4 kollu direksiyon ve 8 inç Columbus multimedya geldi. DSG DQ200 yazılımı tekrar güncellendi — mekatronik arızaları pre-facelift'e göre belirgin azaldı. 1.6 TDI CXXB motor aynı kaldı.",
    reliabilityScore: 72,
    totalIssues: 4,
    searchCount: 13400,
    issues: [
        { id: "sk-oa7fl-1", title: "DSG DQ200 Mekatronik (İyileşmiş)", description: "DQ200 7 ileri DSG'nin mekatronik ünitesi hâlâ potansiyel risk taşıyor ancak facelift'te güncellenen yazılım ile arıza oranı %40 civarı azaldı. Yine de dikkatli olunmalı.", category: "Şanzıman", riskLevel: "Orta", affectedKm: "80.000-150.000 km", repairCost: "₺8.000 – ₺18.000" },
        { id: "sk-oa7fl-2", title: "1.6 TDI EGR Valve", description: "EGR valfı karbon birikimi şehir içi kullanımda devam eden sorun. Periyodik temizlik gerekir.", category: "Motor", riskLevel: "Orta", affectedKm: "80.000-130.000 km", repairCost: "₺2.500 – ₺5.000" },
        { id: "sk-oa7fl-3", title: "Full LED Far Modül Arızası", description: "Facelift ile gelen full LED farların modülleri arızalanabilir. Tek LED segment sönme durumu.", category: "Elektrik/Elektronik", riskLevel: "Düşük", affectedKm: "80.000+ km", repairCost: "₺5.000 – ₺15.000" },
        { id: "sk-oa7fl-4", title: "Klima Kompresörü (Devam)", description: "Pre-facelift'ten devam eden klima kompresörü arızası. Manyetik kavrama aşınması klima soğutmayı bozar.", category: "Klima", riskLevel: "Düşük", affectedKm: "100.000+ km", repairCost: "₺4.000 – ₺8.000" }
    ],
    pros: ["DSG DQ200 yazılımı iyileşmiş", "Full LED farlar standart", "Columbus multimedya çok iyi", "Geniş iç hacim Octavia avantajı", "1.6 TDI düşük yakıt tüketimi"],
    cons: ["DSG DQ200 riski tam sıfır değil", "LED far tamiri pahalı", "EGR dekarbonizasyon gerekli"],
    buyingTips: ["DSG servis geçmişini mutlaka kontrol edin", "Full LED farların tüm segmentlerini kontrol edin", "2017+ facelift, pre-facelift'e göre daha güvenilir", "Manuel şanzıman varsa DSG riski sıfır"]
});

// ==============================
// KIA SPORTAGE QL FACELIFT (2019-2021)
// Sportage QL: 2016-2019: DCT, turbo lag, multimedya
// Sportage QL FL: 2019-2021: Mild hybrid, yeni ön, ADAS gelişmiş
// ==============================
a('kia.ts', {
    id: "kia-sportage-ql-fl",
    slug: "kia-sportage-ql-facelift-1-6-crdi-gt-line",
    brand: "Kia",
    model: "Sportage",
    variant: "Sportage QL Facelift 1.6 CRDi GT Line",
    years: "2019-2021",
    generation: "Ara Kasa (2019-2021)",
    price: "₺800.000 – ₺1.200.000",
    expertNote: "QL facelift'te ön ızgara, LED farlar ve arka stoplar değişti. 48V mild hybrid sistem eklendi — yakıt tasarrufu sağlıyor. DCT şanzıman kaldırılıp 6AT geldi (bazı pazarlarda). ADAS güvenlik sistemleri geliştirildi.",
    reliabilityScore: 74,
    totalIssues: 4,
    searchCount: 12100,
    issues: [
        { id: "kia-sqfl-1", title: "48V Mild Hybrid Akü Ömrü", description: "48V lithium-ion akü 5-7 yıl sonra kapasite kaybedebilir. Değişim maliyeti yüksek.", category: "Elektrik/Elektronik", riskLevel: "Orta", affectedKm: "100.000+ km / 5+ yıl", repairCost: "₺5.000 – ₺12.000" },
        { id: "kia-sqfl-2", title: "Otomatik Şanzıman Adaptasyon", description: "6AT şanzıman zaman zaman adaptasyon kaybı yapabilir. Yazılım sıfırlama ile çözülür. DCT'ye göre çok daha güvenilir.", category: "Şanzıman", riskLevel: "Düşük", affectedKm: "50.000+ km", repairCost: "₺0 – ₺1.500" },
        { id: "kia-sqfl-3", title: "ADAS Sensör Kalibrasyonu", description: "Gelişmiş sürüş destek sistemleri cam değişimi veya tampon hasarı sonrası kalibrasyon gerektirir.", category: "Güvenlik", riskLevel: "Orta", affectedKm: "Tüm km", repairCost: "₺2.000 – ₺5.000" },
        { id: "kia-sqfl-4", title: "LED Far Buğulanma", description: "LED farlar içinde buğulanma olabilir. Conta değişimi ile çözülür.", category: "Elektrik/Elektronik", riskLevel: "Düşük", affectedKm: "Tüm km", repairCost: "₺500 – ₺2.000" }
    ],
    pros: ["DCT kaldırılmış olabilir (6AT daha güvenilir)", "48V mild hybrid yakıt tasarrufu", "Gelişmiş ADAS güvenlik", "LED farlar standart", "7 yıl Kia garantisi"],
    cons: ["48V akü gelecekte pahalı", "ADAS kalibrasyon maliyeti", "Pre-facelift'e göre fiyat farkı yüksek"],
    buyingTips: ["DCT mi 6AT mi olduğunu mutlaka teyit edin", "48V sistemin sağlığını kontrol edin", "Kia garantisi hâlâ devam ediyor mu bakın", "Pre-facelift QL'ye göre daha rafine"]
});

// ==============================
// NISSAN QASHQAI J11 FACELIFT (2017-2021)
// Qashqai J11: 2014-2017: CVT, 1.2 DIG-T turbo, gürültü
// Qashqai J11 FL: 2017-2021: ProPILOT, yeni V-Motion grille, 1.3 DIG-T
// ==============================
a('nissan.ts', {
    id: "nissan-qashqai-j11-fl",
    slug: "nissan-qashqai-j11-facelift-1-3-dig-t-tekna",
    brand: "Nissan",
    model: "Qashqai",
    variant: "Qashqai J11 Facelift 1.3 DIG-T Tekna",
    years: "2017-2021",
    generation: "Ara Kasa (2017-2021)",
    price: "₺700.000 – ₺1.050.000",
    expertNote: "J11 facelift büyük değişiklik: 1.2 DIG-T yerine Mercedes-Renault ortaklığı H5H 1.3 DIG-T motor geldi (160hp). CVT yerine 7 ileri DCT (Getrag). ProPILOT yarı-otonom sürüş eklendi. Ses yalıtımı iyileştirildi.",
    reliabilityScore: 66,
    totalIssues: 5,
    searchCount: 12800,
    issues: [
        { id: "nis-q11fl-1", title: "1.3 DIG-T Silindir Cidarı Aşınması", description: "Mercedes A-Class'ta da kullanılan 1.3 turbo motor yüksek km'de silindir cidarı aşınması riski taşır. Yağ tüketimi artabilir.", category: "Motor", riskLevel: "Yüksek", affectedKm: "100.000+ km", repairCost: "₺10.000 – ₺25.000" },
        { id: "nis-q11fl-2", title: "7 İleri DCT Kavrama Titreşimi", description: "Getrag 7DCT300 çift kavramalı şanzıman düşük hızda ve manevralarda titreşim yapabilir. Yazılım güncellemesi ile azaltılabilir.", category: "Şanzıman", riskLevel: "Orta", affectedKm: "30.000-80.000 km", repairCost: "₺3.000 – ₺10.000" },
        { id: "nis-q11fl-3", title: "ProPILOT Sensör Hassasiyeti", description: "ProPILOT yarı-otonom sürüş sistemi yağmurda veya kirli ön camda hassasiyetini kaybedebilir. Sistem devre dışı kalabilir.", category: "Güvenlik", riskLevel: "Düşük", affectedKm: "Tüm km", repairCost: "₺0 (normal davranış)" },
        { id: "nis-q11fl-4", title: "DPF Tıkanması (1.5 dCi)", description: "1.5 dCi dizel seçenekte DPF tıkanması riski devam ediyor. Şehir içi kısa mesafe kullanımda yüksek risk.", category: "Motor", riskLevel: "Orta", affectedKm: "80.000+ km", repairCost: "₺4.000 – ₺10.000" },
        { id: "nis-q11fl-5", title: "Otomatik Park Freni Arızası", description: "Elektronik park freni modülü arızalanabilir. Park freni serbest bırakılamayabilir.", category: "Fren", riskLevel: "Orta", affectedKm: "80.000+ km", repairCost: "₺3.000 – ₺7.000" }
    ],
    pros: ["1.3 DIG-T daha güçlü motor", "ProPILOT yarı-otonom sürüş", "Ses yalıtımı iyileşmiş", "V-Motion tasarım daha modern", "Dijital gösterge paneli"],
    cons: ["1.3 DIG-T silindir aşınma riski", "DCT titreşim sorunu", "DPF riski (dizel)"],
    buyingTips: ["1.3 DIG-T motor yağ tüketimini kontrol edin", "DCT'yi şehir içi trafikte test edin", "ProPILOT çalışıyorsa büyük avantaj", "Dizel isterseniz DPF geçmişini sorun"]
});

console.log('\n=== Facelift araçları ekleme tamamlandı ===');
