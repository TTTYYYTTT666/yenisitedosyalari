const fs = require('fs');

// 1. Remove old Golf 7.5 entry from volkswagen.ts
let vw = fs.readFileSync('src/data/cars/volkswagen.ts', 'utf-8');
const targetSlug = 'vw-golf-7-5-1-5-tsi';
const faceliftSlug = 'vw-golf-7-5-1-5-tsi-facelift';

// Find all car objects containing this slug
const slugStr = '"slug": "' + targetSlug + '"';
const idx = vw.indexOf(slugStr);
if (idx < 0) { console.log('Slug not found in data'); process.exit(0); }

// Make sure this is NOT the facelift one
const nearby = vw.slice(Math.max(0, idx - 200), idx);
if (nearby.includes('facelift')) { console.log('This is already the facelift entry, skip'); process.exit(0); }

// Find the start of this car object
let objStart = idx;
let depth = 0;
while (objStart > 0) {
    if (vw[objStart] === '}') depth++;
    if (vw[objStart] === '{') {
        if (depth === 0) break;
        depth--;
    }
    objStart--;
}

// Find end of this car object
depth = 0;
let objEnd = objStart;
while (objEnd < vw.length) {
    if (vw[objEnd] === '{') depth++;
    if (vw[objEnd] === '}') {
        depth--;
        if (depth === 0) { objEnd++; break; }
    }
    objEnd++;
}

// Remove trailing comma and whitespace
let removeEnd = objEnd;
while (removeEnd < vw.length && ',\n\r\t '.includes(vw[removeEnd])) removeEnd++;
let removeStart = objStart;
while (removeStart > 0 && ',\n\r\t '.includes(vw[removeStart - 1])) removeStart--;

vw = vw.slice(0, removeStart) + '\n' + vw.slice(removeEnd);
fs.writeFileSync('src/data/cars/volkswagen.ts', vw);
console.log('Removed old Golf 7.5 from volkswagen.ts');

// 2. Remove from brands.ts if exists
let br = fs.readFileSync('src/data/brands.ts', 'utf-8');
const brSlugPat = "slug: '" + targetSlug + "'";
const brIdx = br.indexOf(brSlugPat);
if (brIdx >= 0) {
    let vs = brIdx;
    while (vs > 0 && br[vs] !== '{') vs--;
    let ve = brIdx;
    while (ve < br.length && br[ve] !== '}') ve++;
    ve++;
    let rs = vs;
    while (rs > 0 && ', '.includes(br[rs - 1])) rs--;
    let re = ve;
    while (re < br.length && ', '.includes(br[re])) re++;
    br = br.slice(0, rs) + br.slice(re);
    fs.writeFileSync('src/data/brands.ts', br);
    console.log('Removed old Golf 7.5 variant from brands.ts');
} else {
    console.log('Golf 7.5 slug not found in brands.ts');
}

// Verify
const vw2 = fs.readFileSync('src/data/cars/volkswagen.ts', 'utf-8');
const remaining = [...vw2.matchAll(/golf.*7.*5/gi)];
console.log('Golf 7.5 occurrences remaining:', remaining.length);
