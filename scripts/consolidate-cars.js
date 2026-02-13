const fs = require('fs');
const path = require('path');

const carsDir = path.join(__dirname, '..', 'src', 'data', 'cars');

// Brand name to file name mapping
const brandToFile = {
    'BMW': 'bmw',
    'Ford': 'ford',
    'Honda': 'honda',
    'Hyundai': 'hyundai',
    'Mercedes-Benz': 'mercedes',
    'Mercedes': 'mercedes', // inconsistent naming
    'Peugeot': 'peugeot',
    'Renault': 'renault',
    'Skoda': 'skoda',
    'Toyota': 'toyota',
    'Volkswagen': 'volkswagen',
    'Audi': 'audi',
    'Dacia': 'dacia',
    'Kia': 'kia',
    'Nissan': 'nissan',
    'Opel': 'opel',
    'Seat': 'seat',
    'Suzuki': 'suzuki',
    'Volvo': 'volvo',
    'Citroen': 'citroen',
    'Citroën': 'citroen',
    'Fiat': 'fiat',
    'Mazda': 'mazda',
    'Mitsubishi': 'mitsubishi',
    'MG': 'mg',
    'TOGG': 'togg',
    'Chevrolet': 'chevrolet',
    'Chery': 'chery',
    'CUPRA': 'cupra',
    'Cupra': 'cupra',
};

// Parse car entries from new-cars file content
function extractCarEntries(content) {
    const entries = [];
    // Split on top-level objects in the array
    // Find positions of each { ... } object at the top level
    let depth = 0;
    let inArray = false;
    let entryStart = -1;

    for (let i = 0; i < content.length; i++) {
        const ch = content[i];
        if (!inArray && ch === '[') {
            inArray = true;
            continue;
        }
        if (!inArray) continue;

        if (ch === '{') {
            if (depth === 0) entryStart = i;
            depth++;
        } else if (ch === '}') {
            depth--;
            if (depth === 0 && entryStart >= 0) {
                const entryStr = content.substring(entryStart, i + 1);
                // Extract brand
                const brandMatch = entryStr.match(/brand:\s*["']([^"']+)["']/);
                const brand = brandMatch ? brandMatch[1] : null;
                entries.push({ text: entryStr, brand });
                entryStart = -1;
            }
        }
    }
    return entries;
}

// Process all new-cars files
const newCarFiles = fs.readdirSync(carsDir)
    .filter(f => f.startsWith('new-cars') && f.endsWith('.ts'))
    .sort();

console.log(`Found ${newCarFiles.length} new-cars files to process\n`);

let totalMoved = 0;
const movedByBrand = {};
const missingBrandFiles = new Set();

for (const ncf of newCarFiles) {
    const filePath = path.join(carsDir, ncf);
    const content = fs.readFileSync(filePath, 'utf-8');
    const entries = extractCarEntries(content);

    console.log(`${ncf}: ${entries.length} entries`);

    for (const entry of entries) {
        if (!entry.brand) {
            console.log(`  WARNING: No brand found in entry`);
            continue;
        }

        const targetFileName = brandToFile[entry.brand];
        if (!targetFileName) {
            console.log(`  WARNING: Unknown brand "${entry.brand}"`);
            continue;
        }

        const targetFile = path.join(carsDir, targetFileName + '.ts');

        if (!fs.existsSync(targetFile)) {
            missingBrandFiles.add(targetFileName);
            console.log(`  SKIP: ${entry.brand} -> ${targetFileName}.ts (file doesn't exist)`);
            continue;
        }

        // Read target file and append the entry before the closing ];
        let targetContent = fs.readFileSync(targetFile, 'utf-8');

        // Check for duplicate slugs
        const slugMatch = entry.text.match(/slug:\s*["']([^"']+)["']/);
        const slug = slugMatch ? slugMatch[1] : '';
        if (slug && targetContent.includes(`"${slug}"`)) {
            console.log(`  SKIP (duplicate): ${entry.brand} ${slug}`);
            continue;
        }

        // Find the last ]; in the file and insert before it
        const lastBracket = targetContent.lastIndexOf('];');
        if (lastBracket === -1) {
            console.log(`  ERROR: No closing ]; found in ${targetFileName}.ts`);
            continue;
        }

        // Add a comment marker and the entry
        const insertion = `,\n\n    // ─── Eski new-cars dosyasından taşındı ───\n    ${entry.text}`;
        targetContent = targetContent.substring(0, lastBracket) + insertion + '\n' + targetContent.substring(lastBracket);

        fs.writeFileSync(targetFile, targetContent, 'utf-8');

        totalMoved++;
        movedByBrand[entry.brand] = (movedByBrand[entry.brand] || 0) + 1;
        console.log(`  ✓ ${entry.brand} -> ${targetFileName}.ts (${slug})`);
    }
}

console.log(`\n=== Summary ===`);
console.log(`Total entries moved: ${totalMoved}`);
console.log(`By brand:`, JSON.stringify(movedByBrand, null, 2));
if (missingBrandFiles.size > 0) {
    console.log(`Missing brand files:`, [...missingBrandFiles]);
}
