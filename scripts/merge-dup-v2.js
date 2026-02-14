/**
 * Fix brands.ts: merge duplicate models within each brand.
 * 
 * Strategy: Parse the file to find each brand's model entries,
 * detect name duplicates within the SAME brand, merge variants,
 * and output clean file.
 */
const fs = require('fs'), p = require('path');
const file = p.join(__dirname, '..', 'src', 'data', 'brands.ts');
let src = fs.readFileSync(file, 'utf-8');

// Known duplicate model IDs that were created by our scripts.
// Map: duplicateModelId -> originalModelId (within the same brand)
// These are EXACT id matches from the brands.ts id fields.
const MERGES = {
    // BMW
    '3-series-e46': '3-series',

    // Volkswagen (new script created vw-* duplicates of existing models)
    'vw-golf': 'golf',
    'vw-golf-3': 'golf',
    'vw-passat': 'passat',
    'vw-passat-b5': 'passat',
    'vw-polo': 'polo',
    'vw-polo-6n': 'polo',
    'vw-jetta': 'jetta',
    'vw-bora': 'bora',
    'vw-tiguan': 'tiguan',

    // Ford
    'ford-focus': 'focus',
    'ford-focus-mk1': 'focus',
    'ford-fiesta': 'fiesta',
    'ford-fiesta-mk4': 'fiesta',
    'ford-mondeo': 'mondeo',
    'ford-mondeo-mk2': 'mondeo',
    'ford-kuga': 'kuga',
    'ford-kuga-mk2': 'kuga',
    'ford-transit-connect': 'transit-connect',
    'ford-taunus': 'taunus',
    'ford-escort': 'escort',
    'ford-courier': 'courier',

    // Renault
    'renault-megane': 'megane',
    'renault-fluence': 'fluence',
    'renault-kadjar': 'kadjar',
    'renault-12': 'r12',
    'renault-9': 'r9',
    'renault-19': 'r19',
    'renault-clio-4': 'clio',
    'renault-symbol-3': 'symbol',
    'renault-laguna': 'laguna',

    // Opel
    'opel-vectra': 'vectra',
    'opel-astra': 'astra',
    'opel-astra-f': 'astra',
    'opel-corsa': 'corsa',
    'opel-corsa-b': 'corsa',
    'opel-omega': 'omega',
    'opel-insignia': 'insignia',
    'opel-mokka': 'mokka',

    // Hyundai
    'hyundai-accent': 'accent',
    'hyundai-elantra': 'elantra',
    'hyundai-i20': 'i20',
    'hyundai-i30': 'i30',
    'hyundai-tucson': 'tucson',

    // Kia
    'kia-sephia': 'sephia',
    'kia-ceed': 'ceed',
    'kia-sportage': 'sportage',
    'kia-rio': 'rio',

    // Honda
    'honda-civic': 'civic',
    'honda-civic-ek': 'civic',
    'honda-accord': 'accord',
    'honda-accord-cg': 'accord',
    'honda-hr-v': 'hr-v',

    // Toyota
    'toyota-corolla': 'corolla',
    'toyota-avensis': 'avensis',
    'toyota-yaris': 'yaris',
    'toyota-c-hr': 'c-hr',

    // Mercedes
    'mercedes-c-serisi': 'c-serisi',
    'mercedes-e-serisi': 'e-class',

    // Peugeot
    'peugeot-106': '106',
    'peugeot-206': '206-plus',
    'peugeot-306': '306',
    'peugeot-405': '405',
    'peugeot-308': '308',
    'peugeot-2008': '2008',

    // Fiat
    'fiat-tempra': 'tempra',
    'fiat-marea': 'marea',
    'fiat-linea': 'linea',
    'fiat-egea': 'egea',
    'fiat-500x': '500x',

    // Citroen
    'citroen-saxo': 'saxo',
    'citroen-xsara': 'xsara',
    'citroen-c5': 'c5',
    'citroen-c-elysee': 'c-elys-e',
    'citroen-c4-cactus': 'c4-cactus',

    // Nissan
    'nissan-primera': 'primera',
    'nissan-qashqai': 'qashqai',
    'nissan-juke': 'juke',

    // Seat
    'seat-cordoba': 'cordoba',

    // Dacia
    'dacia-duster': 'duster',
    'dacia-sandero': 'sandero',

    // Skoda
    'skoda-octavia': 'octavia',
    'skoda-rapid': 'rapid',

    // Tofaş
    'tofas-sahin': '-ahin',
    'tofas-kartal': 'kartal',
};

let mergeCount = 0;

for (const [dupId, origId] of Object.entries(MERGES)) {
    const dupPat = `id: '${dupId}'`;
    const origPat = `id: '${origId}'`;

    if (!src.includes(dupPat)) continue;
    if (!src.includes(origPat)) {
        console.log(`SKIP ${dupId}: original '${origId}' not found`);
        continue;
    }

    // Extract variants from duplicate
    const dupIdx = src.indexOf(dupPat);
    const dupVarIdx = src.indexOf('variants:', dupIdx);
    if (dupVarIdx < 0 || dupVarIdx > dupIdx + 500) { console.log('SKIP ' + dupId + ': no variants'); continue; }
    const dupBracketStart = src.indexOf('[', dupVarIdx);
    let d1 = 0, dupBracketEnd = dupBracketStart;
    for (; dupBracketEnd < src.length; dupBracketEnd++) { if (src[dupBracketEnd] === '[') d1++; if (src[dupBracketEnd] === ']') { d1--; if (d1 === 0) break; } }
    const dupVariants = src.slice(dupBracketStart + 1, dupBracketEnd).trim();

    if (!dupVariants) { console.log('SKIP ' + dupId + ': empty variants'); continue; }

    // Add variants to original model
    const origIdx = src.indexOf(origPat);
    const origVarIdx = src.indexOf('variants:', origIdx);
    const origBracketStart = src.indexOf('[', origVarIdx);
    let d2 = 0, origBracketEnd = origBracketStart;
    for (; origBracketEnd < src.length; origBracketEnd++) { if (src[origBracketEnd] === '[') d2++; if (src[origBracketEnd] === ']') { d2--; if (d2 === 0) break; } }

    const existingVariants = src.slice(origBracketStart + 1, origBracketEnd).trim();

    // Check which variant slugs are already present
    const existingSlugs = new Set();
    for (const m of existingVariants.matchAll(/slug:\s*'([^']+)'/g)) existingSlugs.add(m[1]);

    const newVariantEntries = [];
    // Parse individual variant objects from dupVariants
    let depth = 0, objStart = -1;
    for (let i = 0; i < dupVariants.length; i++) {
        if (dupVariants[i] === '{' && depth === 0) objStart = i;
        if (dupVariants[i] === '{') depth++;
        if (dupVariants[i] === '}') {
            depth--;
            if (depth === 0 && objStart >= 0) {
                const entry = dupVariants.slice(objStart, i + 1);
                const slugM = entry.match(/slug:\s*'([^']+)'/);
                if (slugM && !existingSlugs.has(slugM[1])) {
                    newVariantEntries.push(entry);
                }
                objStart = -1;
            }
        }
    }

    if (newVariantEntries.length > 0) {
        const sep = existingVariants.length > 0 ? ', ' : '';
        src = src.slice(0, origBracketEnd) + sep + newVariantEntries.join(', ') + src.slice(origBracketEnd);
        console.log(`MERGE ${dupId} -> ${origId} (${newVariantEntries.length} variants)`);
    }

    // Remove the duplicate model entry
    // Re-find dupPat since positions shifted
    const newDupIdx = src.indexOf(`id: '${dupId}'`);
    if (newDupIdx < 0) continue;

    // Find the { that starts this model object
    let objS = newDupIdx;
    while (objS > 0 && src[objS] !== '{') objS--;

    // Find the } that ends this model object
    let d3 = 0, objE = objS;
    for (; objE < src.length; objE++) { if (src[objE] === '{') d3++; if (src[objE] === '}') { d3--; if (d3 === 0) break; } }

    // Consume leading whitespace and comma
    let removeStart = objS;
    while (removeStart > 0 && ' \n\r\t'.includes(src[removeStart - 1])) removeStart--;
    if (removeStart > 0 && src[removeStart - 1] === ',') removeStart--;

    // Consume trailing comma and whitespace
    let removeEnd = objE + 1;
    while (removeEnd < src.length && ' \n\r\t,'.includes(src[removeEnd])) removeEnd++;

    src = src.slice(0, removeStart) + src.slice(removeEnd);
    mergeCount++;
    console.log(`REMOVE ${dupId}`);
}

// Fix Cee'd apostrophe issue
src = src.replace(/Cee'd/g, 'Ceed');

fs.writeFileSync(file, src, 'utf-8');
console.log(`\nDone! Merged ${mergeCount} duplicate models.`);
