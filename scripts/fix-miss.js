const fs = require('fs'), p = require('path');
const brandsFile = p.join(__dirname, '..', 'src', 'data', 'brands.ts');
let c = fs.readFileSync(brandsFile, 'utf-8'), n = 0;

function addVariant(brandId, modelId, modelName, slug, variantName) {
    if (c.includes(slug)) { console.log('SKIP ' + slug); return; }
    const entry = `{ name: "${variantName}", slug: "${slug}" }`;

    // Find model
    const modelRe = new RegExp(`id:\\s*["']${modelId}["']`);
    if (modelRe.test(c)) {
        const idx = c.search(modelRe);
        const varEnd = c.indexOf(']', c.indexOf('variants:', idx));
        if (varEnd > 0) {
            c = c.slice(0, varEnd) + (c[varEnd - 1].trim() ? ', ' : '') + entry + c.slice(varEnd);
            n++;
            console.log('OK VAR ' + slug);
            return;
        }
    }

    // Find brand, add new model
    const brandRe = new RegExp(`id:\\s*["']${brandId}["']`);
    if (brandRe.test(c)) {
        const idx = c.search(brandRe);
        const modelsIdx = c.indexOf('models:', idx);
        const arrStart = c.indexOf('[', modelsIdx);
        const arrEnd = c.indexOf(']', arrStart);
        const newModel = `{ id: "${modelId}", name: "${modelName}", variants: [${entry}] }`;
        c = c.slice(0, arrEnd) + (c[arrEnd - 1].trim() ? ', ' : '') + newModel + c.slice(arrEnd);
        n++;
        console.log('OK NEWM ' + slug);
        return;
    }
    console.log('MISS ' + slug);
}

// Tofaş (brand id: "tofa-")
addVariant('tofa-', 'tofas-sahin', 'Şahin', 'tofas-sahin-1-6-s', 'Şahin 1.6 S');
addVariant('tofa-', 'tofas-kartal', 'Kartal', 'tofas-kartal-slx-1-6-sw', 'Kartal SLX 1.6 SW');

// Mercedes (brand id: "mercedes-benz")
addVariant('mercedes-benz', 'mercedes-c-serisi', 'C-Serisi', 'mercedes-w202-c180-m111', 'W202 C180 M111');
addVariant('mercedes-benz', 'mercedes-e-serisi', 'E-Serisi', 'mercedes-w210-e200-m111', 'W210 E200 M111');
addVariant('mercedes-benz', 'mercedes-e-serisi', 'E-Serisi', 'mercedes-w124-e200-m111', 'W124 E200 M111');

fs.writeFileSync(brandsFile, c, 'utf-8');
console.log(`\nDone! Added ${n} entries`);
