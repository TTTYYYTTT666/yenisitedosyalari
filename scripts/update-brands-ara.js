const fs = require('fs'), p = require('path');
const brandsFile = p.join(__dirname, '..', 'src', 'data', 'brands.ts');
let c = fs.readFileSync(brandsFile, 'utf-8'), n = 0;

function addEntry(brandId, modelId, modelName, variantId, variantName, years, slug) {
    if (c.includes(`'${slug}'`) || c.includes(`"${slug}"`)) { console.log('SKIP ' + slug); return; }
    const variant = `{ id: '${variantId}', name: '${variantName}', years: '${years}', slug: '${slug}' }`;
    const modelRe = new RegExp(`id:\\s*['"]${modelId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}['"]`);
    if (modelRe.test(c)) {
        const idx = c.search(modelRe);
        const vi = c.indexOf('variants:', idx);
        if (vi > 0 && vi < idx + 500) {
            const bs = c.indexOf('[', vi), be = c.indexOf(']', bs);
            if (be > 0) { const bef = c.slice(bs + 1, be).trim(); c = c.slice(0, be) + (bef.length > 0 ? ', ' : '') + variant + c.slice(be); n++; console.log('OK VAR ' + slug); return; }
        }
    }
    const bRe = new RegExp(`id:\\s*['"]${brandId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}['"]`);
    if (bRe.test(c)) {
        const bi = c.search(bRe), mi = c.indexOf('models:', bi), mas = c.indexOf('[', mi);
        let d = 0, pos = mas; for (; pos < c.length; pos++) { if (c[pos] === '[') d++; if (c[pos] === ']') { d--; if (d === 0) break; } }
        if (pos < c.length) { c = c.slice(0, pos) + `\n            { id: '${modelId}', name: '${modelName}', variants: [${variant}] },` + c.slice(pos); n++; console.log('OK MOD ' + slug); return; }
    }
    console.log('MISS ' + slug);
}

// Renault ara kasa
addEntry('renault', 'renault-fluence', 'Fluence', 'r-fluence-dci', 'Fluence 1.5 dCi Icon', '2009-2017', 'renault-fluence-1-5-dci-icon');
addEntry('renault', 'renault-clio-4', 'Clio IV', 'r-clio4-tce', 'Clio IV 1.2 TCe Icon', '2012-2019', 'renault-clio-4-1-2-turbo-icon');
addEntry('renault', 'renault-symbol-3', 'Symbol III', 'r-sym3-dci', 'Symbol III 1.5 dCi Joy', '2013-2021', 'renault-symbol-3-1-5-dci-joy');
addEntry('renault', 'renault-megane', 'Megane', 'r-meg3-dci', 'Megane III 1.5 dCi', '2009-2016', 'renault-megane-3-1-5-dci-dynamique');
addEntry('renault', 'renault-kadjar', 'Kadjar', 'r-kadjar-dci', 'Kadjar 1.5 dCi Icon', '2015-2022', 'renault-kadjar-1-5-dci-icon');
// VW ara kasa
addEntry('volkswagen', 'vw-jetta', 'Jetta', 'vw-jetta-mk6', 'Jetta Mk6 1.6 TDI', '2011-2018', 'vw-jetta-mk6-1-6-tdi-comfortline');
addEntry('volkswagen', 'vw-passat', 'Passat', 'vw-passat-b7', 'Passat B7 1.6 TDI', '2010-2015', 'vw-passat-b7-1-6-tdi-comfortline');
addEntry('volkswagen', 'vw-polo', 'Polo', 'vw-polo-6r', 'Polo 6R 1.4 TDI', '2009-2017', 'vw-polo-6r-1-4-tdi-comfortline');
addEntry('volkswagen', 'vw-golf', 'Golf', 'vw-golf7-tdi', 'Golf VII 1.6 TDI', '2012-2019', 'vw-golf-7-1-6-tdi-comfortline');
addEntry('volkswagen', 'vw-tiguan', 'Tiguan', 'vw-tiguan-mk2', 'Tiguan Mk2 1.4 TSI', '2016-2024', 'vw-tiguan-mk2-1-4-tsi-comfortline');
// Ford ara kasa
addEntry('ford', 'ford-focus', 'Focus', 'ford-focus-mk3', 'Focus Mk3 1.6 TDCi', '2011-2018', 'ford-focus-mk3-1-6-tdci-trend-x');
addEntry('ford', 'ford-fiesta', 'Fiesta', 'ford-fiesta-mk7', 'Fiesta Mk7 1.4 TDCi', '2009-2017', 'ford-fiesta-mk7-1-4-tdci-titanium');
addEntry('ford', 'ford-courier', 'Courier', 'ford-courier-tdci', 'Courier 1.5 TDCi', '2014-2024', 'ford-courier-1-5-tdci-trend');
addEntry('ford', 'ford-kuga', 'Kuga', 'ford-kuga-mk2', 'Kuga Mk2 1.5 TDCi', '2013-2020', 'ford-kuga-mk2-1-5-tdci-titanium');
addEntry('ford', 'ford-transit-connect', 'Transit Connect', 'ford-tc-tdci', 'Transit Connect 1.5 TDCi', '2013-2024', 'ford-transit-connect-1-5-tdci-trend');
// Hyundai
addEntry('hyundai', 'hyundai-i20', 'i20', 'hyundai-i20-crdi', 'i20 Mk1 1.4 CRDi', '2009-2014', 'hyundai-i20-mk1-1-4-crdi-style');
addEntry('hyundai', 'hyundai-i30', 'i30', 'hyundai-i30-mk2', 'i30 Mk2 1.6 CRDi', '2012-2017', 'hyundai-i30-mk2-1-6-crdi-elite');
addEntry('hyundai', 'hyundai-tucson', 'Tucson', 'hyundai-tucson-tl', 'Tucson TL 1.6 CRDi', '2015-2020', 'hyundai-tucson-tl-1-6-crdi-elite');
addEntry('hyundai', 'hyundai-accent', 'Accent', 'hyundai-accent-blue', 'Accent Blue 1.6 CRDi', '2011-2018', 'hyundai-accent-blue-1-6-crdi-mode-plus');
// Kia
addEntry('kia', 'kia-ceed', 'Cee\'d', 'kia-ceed-jd', 'Cee\'d JD 1.6 CRDi', '2012-2018', 'kia-ceed-jd-1-6-crdi-concept-plus');
addEntry('kia', 'kia-sportage', 'Sportage', 'kia-sportage-ql', 'Sportage QL 1.6 CRDi', '2016-2021', 'kia-sportage-ql-1-6-crdi-concept-plus');
addEntry('kia', 'kia-rio', 'Rio', 'kia-rio-ub', 'Rio UB 1.4 CRDi', '2011-2017', 'kia-rio-ub-1-4-crdi-concept');
// Toyota
addEntry('toyota', 'toyota-corolla', 'Corolla', 'toyota-e150', 'Corolla E150 1.4 D-4D', '2007-2013', 'toyota-corolla-e150-1-4-d4d-elegant');
addEntry('toyota', 'toyota-corolla', 'Corolla', 'toyota-e160', 'Corolla E160 1.4 D-4D', '2013-2019', 'toyota-corolla-e160-1-4-d4d-advance');
addEntry('toyota', 'toyota-yaris', 'Yaris', 'toyota-yaris-xp130', 'Yaris XP130 1.33', '2011-2019', 'toyota-yaris-xp130-1-33-fun');
addEntry('toyota', 'toyota-c-hr', 'C-HR', 'toyota-chr-turbo', 'C-HR 1.2 Turbo', '2016-2023', 'toyota-c-hr-1-2-turbo-advance');
// Honda
addEntry('honda', 'honda-civic', 'Civic', 'honda-civic-fc', 'Civic FC 1.6 i-VTEC', '2016-2021', 'honda-civic-fc-1-6-i-vtec-eco-elegance');
addEntry('honda', 'honda-hr-v', 'HR-V', 'honda-hrv-ru', 'HR-V RU 1.5 i-VTEC', '2015-2021', 'honda-hr-v-ru-1-5-i-vtec-executive');
// Opel
addEntry('opel', 'opel-astra', 'Astra', 'opel-astra-j', 'Astra J 1.6 CDTi', '2009-2015', 'opel-astra-j-1-6-cdti-sport');
addEntry('opel', 'opel-corsa', 'Corsa', 'opel-corsa-d', 'Corsa D 1.3 CDTi', '2006-2014', 'opel-corsa-d-1-3-cdti-enjoy');
addEntry('opel', 'opel-insignia', 'Insignia', 'opel-insignia-a', 'Insignia A 1.6 CDTi', '2009-2017', 'opel-insignia-a-1-6-cdti-cosmo');
addEntry('opel', 'opel-mokka', 'Mokka', 'opel-mokka-cdti', 'Mokka 1.6 CDTi', '2012-2019', 'opel-mokka-1-6-cdti-enjoy');
// Peugeot
addEntry('peugeot', 'peugeot-308', '308', 'peugeot-308-mk2', '308 Mk2 1.6 BlueHDi', '2013-2021', 'peugeot-308-mk2-1-6-bluehdi-active');
addEntry('peugeot', 'peugeot-2008', '2008', 'peugeot-2008-mk1', '2008 Mk1 1.6 e-HDi', '2013-2019', 'peugeot-2008-mk1-1-6-e-hdi-allure');
// Citroen
addEntry('citroen', 'citroen-c-elysee', 'C-Elysée', 'citroen-cel-hdi', 'C-Elysée 1.6 HDi', '2012-2020', 'citroen-c-elysee-1-6-hdi-shine');
addEntry('citroen', 'citroen-c4-cactus', 'C4 Cactus', 'citroen-cactus', 'C4 Cactus 1.6 BlueHDi', '2014-2020', 'citroen-c4-cactus-1-6-bluehdi-shine');
// Fiat
addEntry('fiat', 'fiat-linea', 'Linea', 'fiat-linea-mj', 'Linea 1.3 Multijet', '2007-2017', 'fiat-linea-1-3-multijet-pop');
addEntry('fiat', 'fiat-egea', 'Egea', 'fiat-egea-mj', 'Egea 1.3 MultiJet', '2015-2024', 'fiat-egea-1-3-multijet-easy');
addEntry('fiat', 'fiat-500x', '500X', 'fiat-500x-mj', '500X 1.6 MultiJet', '2015-2022', 'fiat-500x-1-6-multijet-cross-plus');
// Dacia
addEntry('dacia', 'dacia-duster', 'Duster', 'dacia-duster-mk1', 'Duster Mk1 1.5 dCi', '2010-2017', 'dacia-duster-mk1-1-5-dci-laureate');
addEntry('dacia', 'dacia-sandero', 'Sandero', 'dacia-sandero-mk2', 'Sandero Mk2 1.5 dCi', '2012-2020', 'dacia-sandero-mk2-1-5-dci-stepway');
// Skoda
addEntry('skoda', 'skoda-octavia', 'Octavia', 'skoda-octavia-a7', 'Octavia A7 1.6 TDI', '2013-2020', 'skoda-octavia-a7-1-6-tdi-style');
addEntry('skoda', 'skoda-rapid', 'Rapid', 'skoda-rapid-nh', 'Rapid 1.6 TDI', '2013-2019', 'skoda-rapid-1-6-tdi-style');
// Nissan
addEntry('nissan', 'nissan-qashqai', 'Qashqai', 'nissan-qash-j11', 'Qashqai J11 1.6 dCi', '2014-2021', 'nissan-qashqai-j11-1-6-dci-tekna');
addEntry('nissan', 'nissan-juke', 'Juke', 'nissan-juke-f15', 'Juke F15 1.6 Turbo', '2010-2019', 'nissan-juke-f15-1-6-turbo-tekna');

fs.writeFileSync(brandsFile, c, 'utf-8');
console.log(`\nDone! Added ${n} entries to brands.ts`);
