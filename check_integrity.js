const fs = require('fs');
const path = require('path');

// Read the file content
const filePath = path.join('src', 'data', 'cars.ts');
const fileContent = fs.readFileSync(filePath, 'utf8');

// Quick and dirty regex parsing because importing TS in a node script without setup is hard
// We will extract slugs from the brands section and the cars section

// 1. Extract Brands Section
const brandsMatch = fileContent.match(/export const brands: Brand\[] = \[(.*?)\];/s);
let brandsSlugs = [];
if (brandsMatch) {
    const brandsText = brandsMatch[1];
    const slugMatches = brandsText.matchAll(/slug:\s*'([^']+)'/g);
    for (const match of slugMatches) {
        brandsSlugs.push(match[1]);
    }
}

// 2. Extract Cars Section
const carsMatch = fileContent.match(/export const cars: Car\[] = \[(.*?)\];/s);
let carsSlugs = [];
if (carsMatch) {
    const carsText = carsMatch[1];
    const slugMatches = carsText.matchAll(/slug:\s*'([^']+)'/g);
    for (const match of slugMatches) {
        carsSlugs.push(match[1]);
    }
}

// 3. Compare
const brandsSet = new Set(brandsSlugs);
const carsSet = new Set(carsSlugs);

const missingInCars = brandsSlugs.filter(slug => !carsSet.has(slug));
const orphanedCars = carsSlugs.filter(slug => !brandsSet.has(slug));

console.log('--- INTEGRITY CHECK REPORT ---');
console.log(`Total Brand Variants (Links): ${brandsSlugs.length}`);
console.log(`Total Car Definitions (Pages): ${carsSlugs.length}`);
console.log('\n--- BROKEN LINKS (In Menu but NO Page) ---');
missingInCars.forEach(slug => console.log(`MISSING PAGE: ${slug}`));

console.log('\n--- ORPHANED CARS (Page exists but NO Menu Link) ---');
orphanedCars.forEach(slug => console.log(`ORPHANED: ${slug}`));
