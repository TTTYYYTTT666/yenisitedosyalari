const fs = require('fs'), p = require('path');
const brandsFile = p.join(__dirname, '..', 'src', 'data', 'brands.ts');
let c = fs.readFileSync(brandsFile, 'utf-8'), n = 0;

// Find brand IDs for Tofaş and Mercedes
const tofasMatch = c.match(/id:\s*["']([^"']+)["'][\s\S]*?Tofa/);
const mercMatch = c.match(/id:\s*["']([^"']+)["'][\s\S]*?Mercedes/);
console.log('Tofaş brand pattern:', tofasMatch ? tofasMatch[1] : 'NOT FOUND');
console.log('Mercedes brand pattern:', mercMatch ? mercMatch[1] : 'NOT FOUND');

// Search brands by name
const brands = c.matchAll(/{\s*id:\s*["']([^"']+)["'],\s*name:\s*["']([^"']+)["']/g);
for (const b of brands) {
    if (b[2].toLowerCase().includes('tofa') || b[2].toLowerCase().includes('mercedes')) {
        console.log(`Brand: id="${b[1]}", name="${b[2]}"`);
    }
}

// Search models
const models = c.matchAll(/models:\s*\[\s*{\s*id:\s*["']([^"']+)["'],\s*name:\s*["']([^"']+)["']/g);
for (const m of models) {
    if (m[2].toLowerCase().includes('şahin') || m[2].toLowerCase().includes('dogan') || m[2].toLowerCase().includes('c-') || m[2].toLowerCase().includes('e-')) {
        console.log(`Model: id="${m[1]}", name="${m[2]}"`);
    }
}
