const fs = require('fs'), p = require('path');
const file = p.join(__dirname, '..', 'src', 'data', 'brands.ts');
let c = fs.readFileSync(file, 'utf-8'), n = 0;

function addVar(modelId, vid, vname, years, slug) {
    if (c.includes(`'${slug}'`)) { return; }
    const re = new RegExp(`id:\\s*'${modelId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'`);
    if (!re.test(c)) { console.log('MISS model: ' + modelId + ' for ' + slug); return; }
    const idx = c.search(re);
    const vi = c.indexOf('variants:', idx);
    if (vi < 0 || vi > idx + 500) return;
    const bs = c.indexOf('[', vi);
    let d = 0, be = bs;
    for (; be < c.length; be++) { if (c[be] === '[') d++; if (c[be] === ']') { d--; if (d === 0) break; } }
    const existing = c.slice(bs + 1, be).trim();
    const sep = existing.length > 0 ? ', ' : '';
    const entry = `{ id: '${vid}', name: '${vname}', years: '${years}', slug: '${slug}' }`;
    c = c.slice(0, be) + sep + entry + c.slice(be);
    n++;
    console.log('OK ' + slug);
}

// VW
addVar('golf', 'vw-golf-75-fl', 'Golf 7.5 FL 1.5 TSI', '2017-2020', 'vw-golf-7-5-1-5-tsi-facelift');
addVar('passat', 'vw-passat-b85', 'Passat B8.5 FL 1.5 TSI', '2019-2023', 'vw-passat-b8-5-1-5-tsi-facelift');
// Ford
addVar('focus', 'ford-focus-mk35', 'Focus Mk3.5 FL 1.5 TDCi', '2015-2018', 'ford-focus-mk3-5-1-5-tdci-facelift');
// Renault
addVar('clio', 'r-clio4-ph2', 'Clio IV Ph2 1.5 dCi', '2016-2019', 'renault-clio-4-phase-2-1-5-dci-icon');
addVar('megane', 'r-meg3-ph2', 'Megane III Ph2 1.5 dCi', '2012-2016', 'renault-megane-3-phase-2-1-5-dci-gt-line');
// Opel
addVar('astra', 'opel-astra-j-fl', 'Astra J FL 1.6 CDTi', '2012-2015', 'opel-astra-j-facelift-1-6-cdti-sport');
// Hyundai
addVar('tucson', 'hyundai-tucson-tl-fl', 'Tucson TL FL 1.6 CRDi', '2018-2020', 'hyundai-tucson-tl-facelift-1-6-crdi-elite-plus');
// Toyota
addVar('c-hr', 'toyota-chr-fl', 'C-HR FL 1.8 Hybrid', '2020-2023', 'toyota-c-hr-facelift-1-8-hybrid');
// Peugeot
addVar('3008', 'peugeot-3008-fl', '3008 II FL 1.5 BlueHDi', '2021-2023', 'peugeot-3008-facelift-1-5-bluehdi-allure');
// Skoda
addVar('octavia', 'skoda-octavia-a7fl', 'Octavia A7 FL 1.6 TDI', '2017-2020', 'skoda-octavia-a7-facelift-1-6-tdi-style');
// Kia
addVar('sportage', 'kia-sportage-ql-fl', 'Sportage QL FL 1.6 CRDi', '2019-2021', 'kia-sportage-ql-facelift-1-6-crdi-gt-line');
// Nissan
addVar('qashqai', 'nissan-qashqai-j11-fl', 'Qashqai J11 FL 1.3 DIG-T', '2017-2021', 'nissan-qashqai-j11-facelift-1-3-dig-t-tekna');

fs.writeFileSync(file, c, 'utf-8');
console.log(`\nDone! Added ${n} facelift entries to brands.ts`);
