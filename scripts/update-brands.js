const fs = require('fs');
const path = require('path');
const brandsFile = path.join(__dirname, '..', 'src', 'data', 'brands.ts');
let content = fs.readFileSync(brandsFile, 'utf-8');

// New variants to add to existing brands
const newVariants = {
    'volkswagen': [
        { modelId: 'passat', modelName: 'Passat', variant: { id: 'vw-passat-b8-2-0-tdi', name: 'B8 2.0 TDI DSG', years: '2015-2023', slug: 'vw-passat-b8-2-0-tdi' } },
        { modelId: 'golf', modelName: 'Golf', variant: { id: 'vw-golf-7-5-1-5-tsi', name: 'Mk7.5 1.5 TSI ACT DSG', years: '2017-2020', slug: 'vw-golf-7-5-1-5-tsi' } },
    ],
    'renault': [
        { modelId: 'megane', modelName: 'Megane', variant: { id: 'renault-megane-4-1-5-dci', name: 'IV 1.5 dCi EDC Touch', years: '2016-2022', slug: 'renault-megane-4-1-5-dci' } },
        { modelId: 'clio', modelName: 'Clio', variant: { id: 'renault-clio-5-1-3-tce', name: 'V 1.3 TCe RS Line EDC', years: '2019-2025', slug: 'renault-clio-5-1-3-tce' } },
    ],
    'hyundai': [
        { modelId: 'tucson', modelName: 'Tucson', variant: { id: 'hyundai-tucson-nx4-1-6-tgdi', name: 'NX4 1.6 T-GDI 4x4 DCT', years: '2021-2025', slug: 'hyundai-tucson-nx4-1-6-tgdi' } },
        { modelId: 'i30', modelName: 'i30', variant: { id: 'hyundai-i30-1-6-crdi', name: 'GD 1.6 CRDi DCT Elite', years: '2012-2017', slug: 'hyundai-i30-1-6-crdi' }, newModel: true },
    ],
    'ford': [
        { modelId: 'focus', modelName: 'Focus', variant: { id: 'ford-focus-4-1-5-ecoblue', name: 'Mk4 1.5 EcoBlue Titanium', years: '2018-2024', slug: 'ford-focus-4-1-5-ecoblue' } },
    ],
    'skoda': [
        { modelId: 'octavia', modelName: 'Octavia', variant: { id: 'skoda-octavia-a8-1-5-tsi', name: 'A8 1.5 TSI ACT DSG', years: '2020-2025', slug: 'skoda-octavia-a8-1-5-tsi' } },
    ],
    'seat': [
        { modelId: 'leon', modelName: 'Leon', variant: { id: 'seat-leon-mk3-1-4-tsi', name: 'Mk3 1.4 TSI FR DSG', years: '2012-2020', slug: 'seat-leon-mk3-1-4-tsi' } },
    ],
    'audi': [
        { modelId: 'a3', modelName: 'A3', variant: { id: 'audi-a3-8p-2-0-tdi', name: '8P 2.0 TDI S-Tronic', years: '2003-2012', slug: 'audi-a3-8p-2-0-tdi' } },
    ],
    'mercedes-benz': [
        { modelId: 'e-class', modelName: 'E Serisi', variant: { id: 'mercedes-e220d-w212', name: 'E220d W212 2.1 CDI', years: '2009-2016', slug: 'mercedes-e220d-w212' } },
    ],
    'bmw': [
        { modelId: '3-series', modelName: '3 Serisi', variant: { id: 'bmw-f30-320i', name: 'F30 320i 2.0 Turbo', years: '2012-2019', slug: 'bmw-f30-320i' } },
        { modelId: '3-series-e46', modelName: '3 Serisi', variant: { id: 'bmw-e46-320i', name: 'E46 320i 2.2 (170hp)', years: '1998-2005', slug: 'bmw-e46-320i' } },
    ],
    'fiat': [
        { modelId: 'egea', modelName: 'Egea', variant: { id: 'fiat-egea-1-6-multijet-sedan', name: 'Sedan 1.6 Multijet Lounge', years: '2016-2025', slug: 'fiat-egea-1-6-multijet-sedan' } },
    ],
    'toyota': [
        { modelId: 'c-hr', modelName: 'C-HR', variant: { id: 'toyota-chr-2-0-hybrid', name: '2.0 Hybrid Diamond', years: '2020-2024', slug: 'toyota-chr-2-0-hybrid' } },
    ],
    'opel': [
        { modelId: 'astra', modelName: 'Astra', variant: { id: 'opel-astra-h-1-3-cdti', name: 'H 1.3 CDTi Enjoy', years: '2004-2010', slug: 'opel-astra-h-1-3-cdti' } },
    ],
    'peugeot': [
        { modelId: '2008', modelName: '2008', variant: { id: 'peugeot-2008-1-5-bluehdi', name: 'P24 1.5 BlueHDi Allure', years: '2020-2025', slug: 'peugeot-2008-1-5-bluehdi' } },
    ],
    'dacia': [
        { modelId: 'duster', modelName: 'Duster', variant: { id: 'dacia-duster-1-5-dci', name: 'Mk2 1.5 dCi 4x4 Prestige', years: '2018-2024', slug: 'dacia-duster-1-5-dci' } },
    ],
    'citroen': [
        { modelId: 'c3', modelName: 'C3', variant: { id: 'citroen-c3-2-1-4-hdi', name: 'Mk2 1.4 HDi Attraction', years: '2009-2016', slug: 'citroen-c3-2-1-4-hdi' } },
    ],
    'kia': [
        { modelId: 'sportage', modelName: 'Sportage', variant: { id: 'kia-sportage-ql-1-6-crdi', name: 'QL 1.6 CRDi DCT 4x4 GT-Line', years: '2016-2021', slug: 'kia-sportage-ql-1-6-crdi' } },
    ],
    'nissan': [
        { modelId: 'micra', modelName: 'Micra', variant: { id: 'nissan-micra-ig-t', name: 'K14 1.0 IG-T N-Connecta', years: '2017-2024', slug: 'nissan-micra-ig-t' }, newModel: true },
    ],
    'volvo': [
        { modelId: 'xc60', modelName: 'XC60', variant: { id: 'volvo-xc60-d5-awd', name: 'Mk1 D5 AWD Inscription', years: '2008-2017', slug: 'volvo-xc60-d5-awd' } },
    ],
    'mazda': [
        { modelId: 'cx-5', modelName: 'CX-5', variant: { id: 'mazda-cx5-2-5-skyactiv', name: 'KF 2.5 Skyactiv-G AWD', years: '2017-2024', slug: 'mazda-cx5-2-5-skyactiv' } },
    ],
    'honda': [
        { modelId: 'cr-v', modelName: 'CR-V', variant: { id: 'honda-crv-4-1-6-idtec', name: 'Mk4 1.6 i-DTEC Executive', years: '2012-2018', slug: 'honda-crv-4-1-6-idtec' } },
    ],
    'suzuki': [
        { modelId: 'vitara', modelName: 'Vitara', variant: { id: 'suzuki-vitara-1-6-ddis', name: 'LY 1.6 DDiS GLX 4x4', years: '2015-2020', slug: 'suzuki-vitara-1-6-ddis' } },
    ],
    'mitsubishi': [
        { modelId: 'outlander', modelName: 'Outlander', variant: { id: 'mitsubishi-outlander-2-0', name: 'GF 2.0 CVT 4WD Intense', years: '2013-2021', slug: 'mitsubishi-outlander-2-0' }, newModel: true },
    ],
    'land-rover': [
        { modelId: 'discovery-sport', modelName: 'Discovery Sport', variant: { id: 'lr-discovery-sport-2-0-td4', name: '2.0 TD4 HSE AWD', years: '2015-2023', slug: 'lr-discovery-sport-2-0-td4' }, newModel: true },
    ],
    'jeep': [
        { modelId: 'cherokee', modelName: 'Cherokee', variant: { id: 'jeep-cherokee-2-0-td', name: 'KL 2.0 TD Limited AWD', years: '2014-2022', slug: 'jeep-cherokee-2-0-td' }, newModel: true },
    ],
    'porsche': [
        { modelId: 'cayenne', modelName: 'Cayenne', variant: { id: 'porsche-cayenne-3-0-v6', name: 'E3 3.0 V6 Turbo', years: '2018-2024', slug: 'porsche-cayenne-3-0-v6' }, newModel: true },
    ],
    'tesla': [
        { modelId: 'model-3', modelName: 'Model 3', variant: { id: 'tesla-model-3-lr', name: 'Long Range AWD', years: '2019-2024', slug: 'tesla-model-3-lr' } },
    ],
};

let addedCount = 0;

for (const [brandId, entries] of Object.entries(newVariants)) {
    for (const entry of entries) {
        // Skip if slug already exists
        if (content.includes(entry.variant.slug)) {
            console.log(`SKIP ${entry.variant.slug} (already in brands.ts)`);
            continue;
        }

        const variantStr = `{ id: '${entry.variant.id}', name: '${entry.variant.name}', years: '${entry.variant.years}', slug: '${entry.variant.slug}' }`;

        if (entry.newModel) {
            // Need to add a new model entry to the brand
            const brandPattern = new RegExp(`id: '${brandId}'[\\s\\S]*?models: \\[`);
            const match = content.match(brandPattern);
            if (match) {
                const insertPos = content.indexOf(match[0]) + match[0].length;
                const newModelStr = `\n            { id: '${entry.modelId}', name: '${entry.modelName}', variants: [${variantStr}] },`;
                content = content.slice(0, insertPos) + newModelStr + content.slice(insertPos);
                addedCount++;
                console.log(`OK NEW MODEL ${brandId}: ${entry.modelId} -> ${entry.variant.slug}`);
            } else {
                console.log(`WARN: Could not find brand ${brandId}`);
            }
        } else {
            // Add variant to existing model
            // Find the model within the brand
            const modelPattern = new RegExp(`id: '${entry.modelId}'[^}]*?variants: \\[`);
            // We need to find it within the correct brand context
            const brandStart = content.indexOf(`id: '${brandId}'`);
            if (brandStart === -1) {
                console.log(`WARN: brand ${brandId} not found`);
                continue;
            }
            // Find next brand or end
            const nextBrandMatch = content.slice(brandStart + 10).match(/\n    \{\s*\n\s*id: '/);
            const brandEnd = nextBrandMatch ? brandStart + 10 + nextBrandMatch.index : content.length;
            const brandSection = content.slice(brandStart, brandEnd);

            const modelMatch = brandSection.match(new RegExp(`id: '${entry.modelId}'[^}]*?variants: \\[`));
            if (modelMatch) {
                const absPos = brandStart + modelMatch.index + modelMatch[0].length;
                content = content.slice(0, absPos) + variantStr + ', ' + content.slice(absPos);
                addedCount++;
                console.log(`OK VARIANT ${brandId}/${entry.modelId}: ${entry.variant.slug}`);
            } else {
                // Model doesn't exist, add as new model
                const modelsMatch = brandSection.match(/models: \[/);
                if (modelsMatch) {
                    const absPos = brandStart + modelsMatch.index + modelsMatch[0].length;
                    const newModelStr = `\n            { id: '${entry.modelId}', name: '${entry.modelName}', variants: [${variantStr}] },`;
                    content = content.slice(0, absPos) + newModelStr + content.slice(absPos);
                    addedCount++;
                    console.log(`OK NEW MODEL (fallback) ${brandId}: ${entry.modelId} -> ${entry.variant.slug}`);
                }
            }
        }
    }
}

fs.writeFileSync(brandsFile, content, 'utf-8');
console.log(`\nDone! Added ${addedCount} entries to brands.ts`);
