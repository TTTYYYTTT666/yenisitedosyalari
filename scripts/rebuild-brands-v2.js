/**
 * Add all missing car slugs to the clean brands.ts.
 * Uses a comprehensive brand name -> brand ID mapping.
 */
const fs = require('fs'), p = require('path');
const file = p.join(__dirname, '..', 'src', 'data', 'brands.ts');
let src = fs.readFileSync(file, 'utf-8');

// Extract the array literal
const arrStart = src.indexOf('[');
let d = 0, arrEnd = arrStart;
for (; arrEnd < src.length; arrEnd++) { if (src[arrEnd] === '[') d++; if (src[arrEnd] === ']') { d--; if (d === 0) break; } }
let arrStr = src.slice(arrStart, arrEnd + 1);
let json = arrStr.replace(/'/g, '"').replace(/,(\s*[\]}])/g, '$1').replace(/(\w+):/g, '"$1":');
let brands = JSON.parse(json);

// Build brand name -> brand object lookup (case insensitive, multiple aliases)
const brandMap = {};
for (const b of brands) {
    brandMap[b.id.toLowerCase()] = b;
    brandMap[b.name.toLowerCase()] = b;
}
// Add special aliases
const aliases = {
    'ford': 'ford', 'volkswagen': 'volkswagen', 'vw': 'volkswagen',
    'bmw': 'bmw', 'mercedes-benz': 'mercedes-benz', 'mercedes': 'mercedes-benz',
    'renault': 'renault', 'opel': 'opel', 'peugeot': 'peugeot',
    'citroen': 'citroen', 'citroën': 'citroen', 'citrën': 'citroen',
    'fiat': 'fiat', 'toyota': 'toyota', 'honda': 'honda',
    'hyundai': 'hyundai', 'kia': 'kia', 'dacia': 'dacia',
    'nissan': 'nissan', 'seat': 'seat', 'skoda': 'skoda', 'škoda': 'skoda',
    'tofaş': 'tofa-', 'tofas': 'tofa-',
    'volvo': 'volvo', 'tesla': 'tesla', 'mg': 'mg', 'mini': 'mini',
    'land rover': 'land-rover', 'jeep': 'jeep', 'porsche': 'porsche',
    'mazda': 'mazda', 'mitsubishi': 'mitsubishi', 'suzuki': 'suzuki',
    'alfa romeo': 'alfa-romeo', 'audi': 'audi', 'chery': 'chery',
    'togg': 'togg', 'ds': 'ds',
};

function findBrand(name) {
    const n = name.toLowerCase().trim();
    if (brandMap[n]) return brandMap[n];
    if (aliases[n] && brandMap[aliases[n]]) return brandMap[aliases[n]];
    // Try partial
    for (const b of brands) {
        if (b.name.toLowerCase().includes(n) || n.includes(b.name.toLowerCase())) return b;
    }
    return null;
}

// Collect all car slugs from data files
const carsDir = p.join(__dirname, '..', 'src', 'data', 'cars');
const carFiles = fs.readdirSync(carsDir).filter(f => f.endsWith('.ts'));
const allCars = [];
for (const cf of carFiles) {
    const content = fs.readFileSync(p.join(carsDir, cf), 'utf-8');
    // Match each car object
    const re = /"slug":\s*"([^"]+)"/g;
    let mm;
    while ((mm = re.exec(content)) !== null) {
        const slug = mm[1];
        const pos = mm.index;
        // Find surrounding brand, model, variant, years
        const chunk = content.slice(Math.max(0, pos - 1500), pos + 500);
        const brand = (chunk.match(/"brand":\s*"([^"]+)"/) || [])[1] || '';
        const model = (chunk.match(/"model":\s*"([^"]+)"/) || [])[1] || '';
        const variant = (chunk.match(/"variant":\s*"([^"]+)"/) || [])[1] || '';
        const years = (chunk.match(/"years":\s*"([^"]+)"/) || [])[1] || '';
        allCars.push({ slug, brand, model, variant, years, file: cf });
    }
}

// Build existing slugs set
const existingSlugs = new Set();
for (const b of brands) for (const m of b.models) for (const v of m.variants) existingSlugs.add(v.slug);

const missing = allCars.filter(c => !existingSlugs.has(c.slug));
console.log(`Total cars: ${allCars.length}, Existing: ${existingSlugs.size}, Missing: ${missing.length}`);

let added = 0, missed = 0;
for (const car of missing) {
    const brand = findBrand(car.brand);
    if (!brand) { console.log(`MISS brand: ${car.slug} (${car.brand})`); missed++; continue; }

    // Find or create model
    const modelName = car.model;
    const modelNameNorm = modelName.toLowerCase().replace(/[^a-z0-9]/g, '');
    let model = brand.models.find(m => {
        const mn = m.name.toLowerCase().replace(/[^a-z0-9]/g, '');
        return mn === modelNameNorm || mn.includes(modelNameNorm) || modelNameNorm.includes(mn);
    });

    if (!model) {
        model = { id: car.slug.split('-').slice(0, 2).join('-'), name: modelName, variants: [] };
        brand.models.push(model);
    }

    if (!model.variants.some(v => v.slug === car.slug)) {
        model.variants.push({ id: car.slug, name: car.variant, years: car.years, slug: car.slug });
        added++;
    }
}

console.log(`Added: ${added}, Missed: ${missed}`);

// Rebuild file
let output = `import { Brand } from '@/types';\n\nexport const brands: Brand[] = [\n`;
for (let bi = 0; bi < brands.length; bi++) {
    const b = brands[bi];
    output += `    {\n        id: '${b.id}',\n        name: '${b.name.replace(/'/g, "\\'")}',\n        logo: '${b.logo}',\n        models: [\n`;
    for (let mi = 0; mi < b.models.length; mi++) {
        const m = b.models[mi];
        const vs = m.variants.map(v => `{ id: '${v.id}', name: '${v.name.replace(/'/g, "\\'")}', years: '${v.years}', slug: '${v.slug}' }`).join(', ');
        output += `            { id: '${m.id}', name: '${m.name.replace(/'/g, "\\'")}', variants: [${vs}] }${mi < b.models.length - 1 ? ',' : ''}\n`;
    }
    output += `        ]\n    }${bi < brands.length - 1 ? ',' : ''}\n`;
}
output += `];\n`;
fs.writeFileSync(file, output, 'utf-8');
console.log('Done!');
