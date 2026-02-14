const fs = require('fs'), p = require('path');
const carsDir = p.join(__dirname, '..', 'src', 'data', 'cars');
const files = ['volkswagen.ts', 'ford.ts', 'renault.ts', 'opel.ts', 'hyundai.ts', 'toyota.ts', 'peugeot.ts', 'skoda.ts', 'kia.ts', 'nissan.ts'];

const catMap = {
    'Motor': 'motor',
    'Şanzıman': 'sanziman',
    'Elektrik/Elektronik': 'elektronik',
    'Fren': 'fren',
    'Süspansiyon': 'suspansiyon',
    'Kaporta': 'govde',
    'Klima': 'elektronik',
    'Direksiyon': 'suspansiyon',
    'Güvenlik': 'elektronik',
    'Tasarım': 'govde',
};

const riskMap = {
    'Yüksek': 'HIGH',
    'Orta': 'MEDIUM',
    'Düşük': 'LOW',
    'Kritik': 'CRITICAL',
};

let totalFixes = 0;

for (const file of files) {
    const fp = p.join(carsDir, file);
    let c = fs.readFileSync(fp, 'utf-8');
    let fixes = 0;

    // Fix categories
    for (const [from, to] of Object.entries(catMap)) {
        const re = new RegExp(`"category":\\s*"${from}"`, 'g');
        const matches = c.match(re);
        if (matches) {
            c = c.replace(re, `"category": "${to}"`);
            fixes += matches.length;
        }
    }

    // Fix risk levels
    for (const [from, to] of Object.entries(riskMap)) {
        const re = new RegExp(`"riskLevel":\\s*"${from}"`, 'g');
        const matches = c.match(re);
        if (matches) {
            c = c.replace(re, `"riskLevel": "${to}"`);
            fixes += matches.length;
        }
    }

    // Fix price — convert string prices to number (use average)
    const priceRe = /"price":\s*"₺([\d.]+)\s*[–-]\s*₺([\d.]+)"/g;
    let pm;
    while ((pm = priceRe.exec(c)) !== null) {
        const low = parseInt(pm[1].replace(/\./g, ''));
        const high = parseInt(pm[2].replace(/\./g, ''));
        const avg = Math.round((low + high) / 2);
        c = c.replace(pm[0], `"price": ${avg}`);
        fixes++;
        priceRe.lastIndex = 0; // reset since we modified the string
    }

    if (fixes > 0) {
        fs.writeFileSync(fp, c, 'utf-8');
        console.log(`${file}: ${fixes} fixes`);
        totalFixes += fixes;
    }
}

console.log(`\nDone! Total: ${totalFixes} fixes`);
