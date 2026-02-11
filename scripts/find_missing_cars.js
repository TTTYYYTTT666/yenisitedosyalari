
const fs = require('fs');
const path = require('path');

const carsFilePath = path.resolve('src/data/cars.ts');
const fileContent = fs.readFileSync(carsFilePath, 'utf-8');

console.log('File Length:', fileContent.length);

// Extract brands block
const brandsStartStr = 'export const brands: Brand[] = [';
const carsStartStr = 'export const cars: Car[] = [';

const brandsStartIdx = fileContent.indexOf(brandsStartStr);
const carsStartIdx = fileContent.indexOf(carsStartStr);

console.log('Brands Start Index:', brandsStartIdx);
console.log('Cars Start Index:', carsStartIdx);

if (brandsStartIdx === -1 || carsStartIdx === -1) {
    console.error('Could not find start/end markers.');
    process.exit(1);
}

const brandsContent = fileContent.substring(brandsStartIdx, carsStartIdx);
const carsContent = fileContent.substring(carsStartIdx);

// Extract slugs
const brandSlugs = [];
const brandMatches = brandsContent.matchAll(/slug:\s*'([^']+)'/g); // allow space after colon
for (const match of brandMatches) {
    brandSlugs.push(match[1]);
}

const carsSlugs = new Set();
const carMatches = carsContent.matchAll(/slug:\s*'([^']+)'/g);
for (const match of carMatches) {
    carsSlugs.add(match[1]);
}

console.log('Brand Slugs Count:', brandSlugs.length);
console.log('Car Slugs Count:', carsSlugs.size);

if (brandSlugs.length > 0) {
    console.log('Sample Brand Slugs:', brandSlugs.slice(0, 3));
}

// Find missing in order
const missing = [];
for (const slug of brandSlugs) {
    if (!carsSlugs.has(slug)) {
        missing.push(slug);
    }
}


console.log('--- MISSING SLUGS START ---');
missing.slice(0, 10).forEach(s => console.log(s));
console.log('--- MISSING SLUGS END ---');

