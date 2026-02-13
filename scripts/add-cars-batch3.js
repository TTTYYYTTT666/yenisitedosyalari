const fs = require('fs'), path = require('path');
const D = path.join(__dirname, '..', 'src', 'data', 'cars');
function add(file, car) {
    let c = fs.readFileSync(path.join(D, file), 'utf-8');
    if (c.includes('"' + car.slug + '"')) { console.log('SKIP ' + car.slug); return }
    const i = c.lastIndexOf('];');
    c = c.slice(0, i) + ',\n    ' + JSON.stringify(car, null, 8).replace(/\n/g, '\n    ') + '\n' + c.slice(i);
    fs.writeFileSync(path.join(D, file), c, 'utf-8');
    console.log('OK ' + file + ': ' + car.slug);
}
add('renault.ts', { id: "renault-clio-5-1-3-tce", slug: "renault-clio-5-1-3-tce", brand: "Renault", model: "Clio V", variant: "1.3 TCe RS Line EDC", years: "2019-2025", generation: "BF (V)", price: 1000000, expertNote: "H5H 1.3 TCe 130 HP + EDC7. Mercedes ortakligiyla uretilen motor. Clio V Turkiye de cok populer. RS Line ile sportif gorunum.", reliabilityScore: 80, totalIssues: 5, searchCount: 18000, issues: [{ id: "clio5t-1", title: "EDC Sanziman", description: "EDC7 cift kavramali sanzimanda titreme.", category: "sanziman", riskLevel: "MEDIUM", affectedKm: "40.000+ km", repairCost: "10.000 - 22.000 TL" }, { id: "clio5t-2", title: "Turbo Hortumu", description: "Turbo baglanti hortumunun catlamasi.", category: "motor", riskLevel: "MEDIUM", affectedKm: "60.000+ km", repairCost: "2.000 - 5.000 TL" }, { id: "clio5t-3", title: "Park Sensoru", description: "Park sensorlerinin yanlis uyari vermesi.", category: "elektronik", riskLevel: "LOW", affectedKm: "Rastgele", repairCost: "1.500 - 3.000 TL" }, { id: "clio5t-4", title: "Arka Susupansiyon", description: "Arka susupansiyon burclarindan ses.", category: "suspansiyon", riskLevel: "LOW", affectedKm: "50.000+ km", repairCost: "2.000 - 4.000 TL" }, { id: "clio5t-5", title: "Trim Sesleri", description: "Torpido bolgesinden plastik tikirtilari.", category: "govde", riskLevel: "LOW", affectedKm: "Bozuk yollar", repairCost: "Yalitim" }], pros: ["Sportif tasarim", "EDC konfor", "Dusuk yakit", "RS Line gorunum"], cons: ["EDC hassasiyeti", "Arka alan dar", "Plastik kalitesi"], buyingTips: ["EDC trafikte test edin", "RS Line donanim tercih edin", "Motor sogukken dinleyin"] });
console.log('Batch 3 done!');
