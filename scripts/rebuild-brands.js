/**
 * Parse brands.ts to JSON, add missing variants from car data files to existing models,
 * and write back. This avoids all the string manipulation issues.
 */
const fs = require('fs'), p = require('path');
const brandsFile = p.join(__dirname, '..', 'src', 'data', 'brands.ts');
let src = fs.readFileSync(brandsFile, 'utf-8');

// Extract the array literal from brands.ts
const arrStart = src.indexOf('[');
// Find matching ]
let d = 0, arrEnd = arrStart;
for (; arrEnd < src.length; arrEnd++) { if (src[arrEnd] === '[') d++; if (src[arrEnd] === ']') { d--; if (d === 0) break; } }
let arrStr = src.slice(arrStart, arrEnd + 1);

// Convert to valid JSON-ish by:
// 1. Replace single quotes with double quotes (carefully)
// 2. Add quotes to unquoted keys
// 3. Remove trailing commas
let json = arrStr
    .replace(/'/g, '"')  // single to double quotes
    .replace(/,(\s*[\]}])/g, '$1')  // remove trailing commas
    .replace(/(\w+):/g, '"$1":');  // quote keys

let brands;
try {
    brands = JSON.parse(json);
} catch (e) {
    console.error('JSON parse failed:', e.message);
    // Find the position
    const pos = parseInt(e.message.match(/position (\d+)/)?.[1] || '0');
    console.error('Near:', json.slice(Math.max(0, pos - 100), pos + 100));
    process.exit(1);
}

console.log(`Parsed ${brands.length} brands`);

// Now collect all slugs from car data files
const carsDir = p.join(__dirname, '..', 'src', 'data', 'cars');
const carFiles = fs.readdirSync(carsDir).filter(f => f.endsWith('.ts'));
const allCars = [];
for (const cf of carFiles) {
    const content = fs.readFileSync(p.join(carsDir, cf), 'utf-8');
    const slugs = [...content.matchAll(/"slug":\s*"([^"]+)"/g)].map(m => m[1]);
    const brandMatches = [...content.matchAll(/"brand":\s*"([^"]+)"/g)].map(m => m[1]);
    const modelMatches = [...content.matchAll(/"model":\s*"([^"]+)"/g)].map(m => m[1]);
    const variantMatches = [...content.matchAll(/"variant":\s*"([^"]+)"/g)].map(m => m[1]);
    const yearsMatches = [...content.matchAll(/"years":\s*"([^"]+)"/g)].map(m => m[1]);

    for (let i = 0; i < slugs.length; i++) {
        allCars.push({
            slug: slugs[i],
            brand: brandMatches[i] || '',
            model: modelMatches[i] || '',
            variant: variantMatches[i] || '',
            years: yearsMatches[i] || '',
            file: cf
        });
    }
}
console.log(`Found ${allCars.length} cars in data files`);

// Build a set of all slugs currently in brands.ts
const existingSlugs = new Set();
for (const brand of brands) {
    for (const model of brand.models) {
        for (const v of model.variants) {
            existingSlugs.add(v.slug);
        }
    }
}

// Find missing slugs
const missing = allCars.filter(c => !existingSlugs.has(c.slug));
console.log(`Missing from brands.ts: ${missing.length} cars`);

// For each missing car, try to find the right brand and model
let added = 0;
for (const car of missing) {
    // Find brand
    const brandName = car.brand.toLowerCase();
    let brand = brands.find(b => b.name.toLowerCase() === brandName || b.id.toLowerCase() === brandName.replace(/\s+/g, '-'));

    // Special brand name mappings
    if (!brand && brandName === 'citroën') brand = brands.find(b => b.id === 'citroen');
    if (!brand && brandName === 'škoda') brand = brands.find(b => b.id === 'skoda');
    if (!brand && brandName === 'tofaş') brand = brands.find(b => b.name.includes('Tofa'));
    if (!brand && brandName === 'mercedes-benz') brand = brands.find(b => b.id === 'mercedes-benz');

    if (!brand) {
        console.log(`  MISS brand for ${car.slug} (brand: ${car.brand})`);
        continue;
    }

    // Find model by name similarity
    const modelName = car.model.toLowerCase().replace(/[^a-z0-9]/g, '');
    let model = brand.models.find(m => m.name.toLowerCase().replace(/[^a-z0-9]/g, '') === modelName);

    // Try partial match
    if (!model) {
        model = brand.models.find(m => {
            const mn = m.name.toLowerCase().replace(/[^a-z0-9]/g, '');
            return mn.includes(modelName) || modelName.includes(mn);
        });
    }

    if (!model) {
        // Create new model
        const newModel = {
            id: car.slug.split('-').slice(0, 2).join('-'),
            name: car.model,
            variants: [{
                id: car.slug,
                name: car.variant,
                years: car.years,
                slug: car.slug
            }]
        };
        brand.models.push(newModel);
        added++;
        console.log(`  NEW MODEL: ${brand.name} / ${car.model} / ${car.slug}`);
        continue;
    }

    // Add variant to existing model
    if (!model.variants.some(v => v.slug === car.slug)) {
        model.variants.push({
            id: car.slug,
            name: car.variant,
            years: car.years,
            slug: car.slug
        });
        added++;
        console.log(`  ADD VAR: ${brand.name} / ${model.name} / ${car.slug}`);
    }
}

console.log(`\nAdded ${added} entries`);

// Now rebuild brands.ts from the clean JSON
let output = `import { Brand } from '@/types';\n\nexport const brands: Brand[] = [\n`;

for (let bi = 0; bi < brands.length; bi++) {
    const b = brands[bi];
    output += `    {\n`;
    output += `        id: '${b.id}',\n`;
    output += `        name: '${b.name.replace(/'/g, "\\'")}',\n`;
    output += `        logo: '${b.logo}',\n`;
    output += `        models: [\n`;

    for (let mi = 0; mi < b.models.length; mi++) {
        const m = b.models[mi];
        const variants = m.variants.map(v =>
            `{ id: '${v.id}', name: '${v.name.replace(/'/g, "\\'")}', years: '${v.years}', slug: '${v.slug}' }`
        ).join(', ');
        output += `            { id: '${m.id}', name: '${m.name.replace(/'/g, "\\'")}', variants: [${variants}] }`;
        output += mi < b.models.length - 1 ? ',\n' : '\n';
    }

    output += `        ]\n`;
    output += `    }`;
    output += bi < brands.length - 1 ? ',\n' : '\n';
}

output += `];\n`;

fs.writeFileSync(brandsFile, output, 'utf-8');
console.log('Done! brands.ts rebuilt cleanly.');
