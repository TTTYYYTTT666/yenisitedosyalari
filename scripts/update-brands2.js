const fs = require('fs');
const path = require('path');
const brandsFile = path.join(__dirname, '..', 'src', 'data', 'brands.ts');
let content = fs.readFileSync(brandsFile, 'utf-8');
let count = 0;

function addVariant(brandId, modelId, modelName, variant, isNew) {
    if (content.includes(variant.slug)) { console.log('SKIP ' + variant.slug); return; }
    const vs = `{ id: '${variant.id}', name: '${variant.name}', years: '${variant.years}', slug: '${variant.slug}' }`;
    if (isNew) {
        const bp = new RegExp(`id: '${brandId}'[\\s\\S]*?models: \\[`);
        const m = content.match(bp);
        if (m) { const p = content.indexOf(m[0]) + m[0].length; content = content.slice(0, p) + `\n            { id: '${modelId}', name: '${modelName}', variants: [${vs}] },` + content.slice(p); count++; console.log('OK NEW ' + variant.slug); }
    } else {
        const bs = content.indexOf(`id: '${brandId}'`);
        if (bs === -1) return;
        const nb = content.slice(bs + 10).match(/\n    \{\s*\n\s*id: '/);
        const be = nb ? bs + 10 + nb.index : content.length;
        const sec = content.slice(bs, be);
        const mm = sec.match(new RegExp(`id: '${modelId}'[^}]*?variants: \\[`));
        if (mm) { const ap = bs + mm.index + mm[0].length; content = content.slice(0, ap) + vs + ', ' + content.slice(ap); count++; console.log('OK VAR ' + variant.slug); }
        else { const ml = sec.match(/models: \[/); if (ml) { const ap = bs + ml.index + ml[0].length; content = content.slice(0, ap) + `\n            { id: '${modelId}', name: '${modelName}', variants: [${vs}] },` + content.slice(ap); count++; console.log('OK NEWM ' + variant.slug); } }
    }
}

// Batch 4-1
addVariant('bmw', '3-series', '3 Serisi', { id: 'bmw-x5-e70-3-0d', name: 'X5 E70 3.0d xDrive', years: '2007-2013', slug: 'bmw-x5-e70-3-0d' }, false);
addVariant('bmw', '5-series', '5 Serisi', { id: 'bmw-f10-520d', name: 'F10 520d 2.0 (184hp)', years: '2010-2017', slug: 'bmw-f10-520d' }, false);
addVariant('mercedes-benz', 'c-class', 'C Serisi', { id: 'mercedes-c180-w204', name: 'C180 W204 Kompressor', years: '2007-2014', slug: 'mercedes-c180-w204' }, false);
addVariant('mercedes-benz', 'a-class', 'A Serisi', { id: 'mercedes-a180-w176', name: 'A180 W176 CDI', years: '2012-2018', slug: 'mercedes-a180-w176' }, false);
addVariant('audi', 'a4', 'A4', { id: 'audi-a4-b8-1-8-tfsi', name: 'B8 1.8 TFSI Multitronic', years: '2008-2015', slug: 'audi-a4-b8-1-8-tfsi' }, false);
addVariant('volkswagen', 'tiguan', 'Tiguan', { id: 'vw-tiguan-2-0-tdi-mk2', name: 'Mk2 2.0 TDI DSG 4Motion', years: '2016-2024', slug: 'vw-tiguan-2-0-tdi-mk2' }, false);
addVariant('volkswagen', 'polo', 'Polo', { id: 'vw-polo-6r-1-4-tdi', name: '6R 1.4 TDI Comfortline', years: '2009-2017', slug: 'vw-polo-6r-1-4-tdi' }, false);
addVariant('renault', 'captur', 'Captur', { id: 'renault-captur-1-5-dci', name: 'J87 1.5 dCi EDC Icon', years: '2013-2019', slug: 'renault-captur-1-5-dci' }, false);
addVariant('toyota', 'corolla', 'Corolla', { id: 'toyota-corolla-e210-hybrid', name: 'E210 1.8 Hybrid Dream', years: '2019-2025', slug: 'toyota-corolla-e210-hybrid' }, false);
addVariant('ford', 'transit-connect', 'Transit Connect', { id: 'ford-transit-connect-1-5-ecoblue', name: 'V408 1.5 EcoBlue', years: '2018-2024', slug: 'ford-transit-connect-1-5-ecoblue' }, false);
addVariant('hyundai', 'i20', 'i20', { id: 'hyundai-i20-n-line-1-0-tgdi', name: 'BC3 1.0 T-GDI 48V N Line', years: '2020-2025', slug: 'hyundai-i20-n-line-1-0-tgdi' }, false);
addVariant('fiat', 'doblo', 'Doblo', { id: 'fiat-doblo-2-1-6-multijet', name: 'Mk2 1.6 Multijet Premio Plus', years: '2010-2022', slug: 'fiat-doblo-2-1-6-multijet' }, false);
addVariant('peugeot', '308', '308', { id: 'peugeot-308-t7-1-6-hdi', name: 'T7 1.6 HDi Access', years: '2007-2013', slug: 'peugeot-308-t7-1-6-hdi' }, false);
addVariant('honda', 'civic', 'Civic', { id: 'honda-civic-fb7-1-6-vtec', name: 'FB7 1.6 i-VTEC Eco', years: '2012-2016', slug: 'honda-civic-fb7-1-6-vtec' }, false);

// Batch 4-2
addVariant('opel', 'astra', 'Astra', { id: 'opel-insignia-b-1-5-turbo', name: 'Insignia B 1.5 Turbo', years: '2017-2022', slug: 'opel-insignia-b-1-5-turbo' }, false);
addVariant('citroen', 'c4-cactus', 'C4 Cactus', { id: 'citroen-c4-cactus-1-6-bluehdi', name: '1.6 BlueHDi Shine', years: '2014-2020', slug: 'citroen-c4-cactus-1-6-bluehdi' }, false);
addVariant('dacia', 'sandero-stepway', 'Sandero Stepway', { id: 'dacia-sandero-2-stepway-0-9-tce', name: 'B52 0.9 TCe', years: '2013-2020', slug: 'dacia-sandero-2-stepway-0-9-tce' }, false);
addVariant('skoda', 'superb', 'Superb', { id: 'skoda-superb-b8-2-0-tdi', name: 'B8 2.0 TDI DSG Style', years: '2015-2024', slug: 'skoda-superb-b8-2-0-tdi' }, false);
addVariant('kia', 'ceed', 'Cee\'d', { id: 'kia-ceed-jd-1-6-crdi', name: 'JD 1.6 CRDi DCT Premium', years: '2012-2018', slug: 'kia-ceed-jd-1-6-crdi' }, false);
addVariant('nissan', 'x-trail', 'X-Trail', { id: 'nissan-xtrail-t31-2-0-dci', name: 'T31 2.0 dCi 4x4', years: '2007-2014', slug: 'nissan-xtrail-t31-2-0-dci' }, false);
addVariant('volvo', 'v40', 'V40', { id: 'volvo-v40-d3-aut', name: 'Mk2 D3 Inscription', years: '2012-2019', slug: 'volvo-v40-d3-aut' }, true);
addVariant('seat', 'ibiza', 'Ibiza', { id: 'seat-ibiza-6j-1-4-tdi', name: '6J 1.4 TDI Style DSG', years: '2008-2017', slug: 'seat-ibiza-6j-1-4-tdi' }, false);
addVariant('suzuki', 'swift', 'Swift', { id: 'suzuki-swift-4-1-2-hybrid', name: 'Mk4 1.2 SHVS GLX', years: '2017-2024', slug: 'suzuki-swift-4-1-2-hybrid' }, false);
addVariant('mg', 'zs', 'ZS', { id: 'mg-zs-1-0-turbo', name: '1.0 Turbo Luxury', years: '2020-2025', slug: 'mg-zs-1-0-turbo' }, false);
addVariant('mini', 'cooper', 'Cooper', { id: 'mini-cooper-f55-1-5', name: 'F55 5-Door 1.5 Turbo', years: '2014-2021', slug: 'mini-cooper-f55-1-5' }, false);
addVariant('chery', 'arrizo', 'Arrizo 6 Pro', { id: 'chery-arizzo-6-pro-1-5-tgdi', name: '1.5 TGDI Distinctive', years: '2023-2025', slug: 'chery-arizzo-6-pro-1-5-tgdi' }, true);
addVariant('jeep', 'wrangler', 'Wrangler', { id: 'jeep-wrangler-jl-2-0-turbo', name: 'JL 2.0 Turbo Rubicon', years: '2018-2025', slug: 'jeep-wrangler-jl-2-0-turbo' }, true);
addVariant('cupra', 'ateca', 'Ateca', { id: 'cupra-ateca-2-0-tsi-4drive', name: '2.0 TSI 4Drive DSG', years: '2018-2024', slug: 'cupra-ateca-2-0-tsi-4drive' }, false);
addVariant('tesla', 'model-y', 'Model Y', { id: 'tesla-model-y-standard-range', name: 'Standard Range RWD', years: '2023-2025', slug: 'tesla-model-y-standard-range' }, false);

fs.writeFileSync(brandsFile, content, 'utf-8');
console.log(`\nDone! Added ${count} entries to brands.ts`);
