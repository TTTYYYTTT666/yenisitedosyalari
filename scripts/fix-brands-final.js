const fs = require('fs'), p = require('path');
const file = p.join(__dirname, '..', 'src', 'data', 'brands.ts');
let c = fs.readFileSync(file, 'utf-8'), n = 0;

function addVar(modelId, vid, vname, years, slug) {
    if (c.includes(`'${slug}'`)) { return; }
    const re = new RegExp(`id:\\s*'${modelId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'`);
    const m = c.match(re);
    if (!m) { console.log('MISS model: ' + modelId + ' for ' + slug); return; }
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
}

function addModel(brandId, modelId, modelName, vid, vname, years, slug) {
    if (c.includes(`'${slug}'`)) { return; }
    const bre = new RegExp(`id:\\s*'${brandId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'`);
    if (!bre.test(c)) { console.log('MISS brand: ' + brandId + ' for ' + slug); return; }
    const bi = c.search(bre);
    const mi = c.indexOf('models:', bi);
    const mas = c.indexOf('[', mi);
    let d = 0, pos = mas;
    for (; pos < c.length; pos++) { if (c[pos] === '[') d++; if (c[pos] === ']') { d--; if (d === 0) break; } }
    const entry = `{ id: '${vid}', name: '${vname}', years: '${years}', slug: '${slug}' }`;
    const newModel = `\n            { id: '${modelId}', name: '${modelName}', variants: [${entry}] },`;
    c = c.slice(0, pos) + newModel + c.slice(pos);
    n++;
}

// === ESKI KASA (variantları mevcut modellere ekle) ===
// BMW — existing models: 3-series, 5-series
addVar('3-series', 'bmw-e36-316i', 'E36 316i M43', '1990-2000', 'bmw-e36-316i-m43');
addVar('3-series', 'bmw-e36-318is', 'E36 318is M42', '1990-2000', 'bmw-e36-318is-m42');
addVar('3-series-e46', 'bmw-e46-320i-v2', 'E46 320i', '1998-2005', 'bmw-e46-320i'); // already exists
addVar('5-series', 'bmw-e39-520i', 'E39 520i M52', '1996-2003', 'bmw-e39-520i-m52');

// Mercedes — existing: c-serisi, e-class (or e-serisi)
addVar('c-serisi', 'merc-w202', 'W202 C180 M111', '1993-2000', 'mercedes-w202-c180-m111');
addVar('e-class', 'merc-w210', 'W210 E200 M111', '1995-2003', 'mercedes-w210-e200-m111');
addVar('e-class', 'merc-w124', 'W124 E200 M111', '1984-1997', 'mercedes-w124-e200-m111');

// Opel — existing: astra, corsa, insignia, mokka
addVar('astra', 'opel-astra-f', 'Astra F 1.6 GL', '1991-1998', 'opel-astra-f-1-6-gl');
addVar('astra', 'opel-astra-g', 'Astra G 1.6 Comfort', '1998-2004', 'opel-astra-g-1-6-comfort');
addVar('corsa', 'opel-corsa-b', 'Corsa B 1.4 Swing', '1993-2000', 'opel-corsa-b-1-4-swing');
// Vectra, Omega — new models needed
addModel('opel', 'opel-vectra', 'Vectra', 'opel-vectra-a', 'Vectra A 2.0 GL', '1988-1995', 'opel-vectra-a-2-0-gl');
addVar('opel-vectra', 'opel-vectra-b', 'Vectra B 1.6 Comfort', '1995-2002', 'opel-vectra-b-1-6-comfort');
addModel('opel', 'opel-omega', 'Omega', 'opel-omega-b', 'Omega B 2.0 GLS', '1994-2003', 'opel-omega-b-2-0-gls');

// Ford — existing: focus, fiesta, mondeo, kuga, transit-connect, tourneo-courier
addVar('focus', 'ford-focus-mk1', 'Focus Mk1 1.6 Ghia', '1998-2005', 'ford-focus-mk1-1-6-ghia');
addVar('fiesta', 'ford-fiesta-mk4', 'Fiesta Mk4 1.25', '1995-2002', 'ford-fiesta-mk4-1-25-flair');
addVar('mondeo', 'ford-mondeo-mk2', 'Mondeo Mk2 2.0 Ghia', '1996-2000', 'ford-mondeo-mk2-2-0-ghia');
addModel('ford', 'ford-taunus', 'Taunus', 'ford-taunus-gl', 'Taunus 2.0 GL Oto', '1970-1994', 'ford-taunus-2-0-gl-oto');
addModel('ford', 'ford-escort', 'Escort', 'ford-escort-clx', 'Escort 1.6 CLX', '1990-2000', 'ford-escort-1-6-clx-zetec');
addModel('ford', 'ford-courier', 'Courier', 'ford-courier-tdci', 'Courier 1.5 TDCi', '2014-2024', 'ford-courier-1-5-tdci-trend');

// Volkswagen — existing: golf, passat, polo, jetta, tiguan
addVar('golf', 'vw-golf3', 'Golf III 1.6 CL', '1991-1997', 'vw-golf-3-1-6-cl');
addVar('golf', 'vw-golf4', 'Golf IV 1.6 Comfortline', '1997-2003', 'vw-golf-4-1-6-comfortline');
addVar('passat', 'vw-passat-b5', 'Passat B5 1.8T', '1996-2005', 'vw-passat-b5-1-8t-comfortline');
addVar('polo', 'vw-polo-6n', 'Polo 6N 1.6', '1994-2001', 'vw-polo-6n-1-6-comfortline');
addModel('volkswagen', 'vw-bora', 'Bora', 'vw-bora-pac', 'Bora 1.6 Pacific', '1998-2005', 'vw-bora-1-6-pacific');

// Renault — existing: megane, clio, symbol, fluence, kadjar, laguna
addVar('megane', 'r-meg1', 'Megane I 1.6 RTE', '1996-2003', 'renault-megane-1-1-6-rte');
addVar('megane', 'r-meg2', 'Megane II 1.5 dCi', '2003-2009', 'renault-megane-2-1-5-dci-privilege');
addVar('laguna', 'r-lag2', 'Laguna II 1.6 16V', '2001-2007', 'renault-laguna-2-1-6-16v-expression');
addModel('renault', 'renault-12', '12 Toros', 'r-12-toros', '12 Toros 1.4', '1971-2000', 'renault-12-toros-1-4');
addModel('renault', 'renault-9', '9 Broadway', 'r-9-bway', '9 Broadway 1.4', '1987-1999', 'renault-9-broadway-1-4');
addModel('renault', 'renault-19', '19 Europa', 'r-19-europa', '19 Europa 1.6', '1988-2003', 'renault-19-europa-1-6');

// Tofas — existing: -ahin (Şahin)
addVar('-ahin', 'tofas-sahin-v', 'Sahin 1.6 S', '1983-2002', 'tofas-sahin-1-6-s');
addModel('tofa-', 'tofas-kartal', 'Kartal', 'tofas-kartal-slx', 'Kartal SLX 1.6 SW', '1993-2002', 'tofas-kartal-slx-1-6-sw');

// Fiat — existing: egea, linea, 500x, punto
addModel('fiat', 'fiat-tempra', 'Tempra', 'fiat-tempra-sx', 'Tempra 1.6 SX', '1991-1999', 'fiat-tempra-1-6-sx');
addModel('fiat', 'fiat-marea', 'Marea', 'fiat-marea-elx', 'Marea 1.6 16V ELX', '1997-2007', 'fiat-marea-1-6-16v-elx');

// Peugeot — existing: 2008, 308, 301, 206-plus
addVar('206-plus', 'peugeot-206-xt', '206 1.4 XT', '1998-2010', 'peugeot-206-1-4-xt');
addModel('peugeot', 'peugeot-106', '106', 'peugeot-106-xr', '106 1.4 XR', '1991-2003', 'peugeot-106-1-4-xr');
addModel('peugeot', 'peugeot-306', '306', 'peugeot-306-xt', '306 1.6 XT', '1993-2002', 'peugeot-306-1-6-xt');
addModel('peugeot', 'peugeot-405', '405', 'peugeot-405-sri', '405 1.6 SRi', '1987-1997', 'peugeot-405-1-6-sri');

// Toyota — existing: corolla, yaris, c-hr, avensis
addVar('corolla', 'toyota-e100', 'Corolla E100 1.6 XEi', '1991-1997', 'toyota-corolla-e100-1-6-xei');
addVar('corolla', 'toyota-e110', 'Corolla E110 1.6 Terra', '1997-2002', 'toyota-corolla-e110-1-6-terra');
addVar('avensis', 'toyota-avensis-t22', 'Avensis T22 1.6 Sol', '1997-2003', 'toyota-avensis-t22-1-6-sol');

// Honda — existing: civic, accord, hr-v
addVar('civic', 'honda-civic-ek', 'Civic EK 1.6 ViRS', '1996-2000', 'honda-civic-ek-1-6-vtec-virs');
addVar('accord', 'honda-accord-cg', 'Accord CG 2.0 ES', '1998-2003', 'honda-accord-cg-2-0-es');

// Hyundai — existing: accent, elantra, i20, i30, tucson
addVar('accent', 'hyundai-accent-lc', 'Accent LC 1.5 CRDi', '1999-2005', 'hyundai-accent-lc-1-5-crdi-admire');
addVar('elantra', 'hyundai-elantra-xd', 'Elantra XD 1.6 GL', '2000-2006', 'hyundai-elantra-xd-1-6-gl');

// Kia — existing: ceed, sportage, rio
addModel('kia', 'kia-sephia', 'Sephia', 'kia-sephia-gtx', 'Sephia 1.5 GTX', '1994-2001', 'kia-sephia-1-5-gtx');

// Citroen — existing: c-elys-e, c4-cactus, c5-aircross
addModel('citroen', 'citroen-saxo', 'Saxo', 'citroen-saxo-sx', 'Saxo 1.4i SX', '1996-2004', 'citroen-saxo-1-4i-sx');
addModel('citroen', 'citroen-xsara', 'Xsara', 'citroen-xsara-sx', 'Xsara 1.6 16V SX', '1997-2006', 'citroen-xsara-1-6-16v-sx');
addVar('c5-aircross', 'citroen-c5-mk1', 'C5 Mk1 2.0 HDi', '2001-2008', 'citroen-c5-mk1-2-0-hdi-exclusive');

// Nissan — existing: qashqai, juke
addModel('nissan', 'nissan-primera', 'Primera', 'nissan-primera-p11', 'Primera P11 2.0 GX', '1996-2002', 'nissan-primera-p11-2-0-gx');

// Seat — existing: leon, ibiza, toledo
addModel('seat', 'seat-cordoba', 'Cordoba', 'seat-cordoba-stella', 'Cordoba 1.6 Stella', '1999-2009', 'seat-cordoba-1-6-stella');

// === ARA KASA (2009-2017) - variantları mevcut modellere ekle ===
// Renault
addVar('fluence', 'r-fluence-dci', 'Fluence 1.5 dCi Icon', '2009-2017', 'renault-fluence-1-5-dci-icon');
addVar('clio', 'r-clio4-tce', 'Clio IV 1.2 TCe Icon', '2012-2019', 'renault-clio-4-1-2-turbo-icon');
addVar('symbol', 'r-sym3-dci', 'Symbol III 1.5 dCi Joy', '2013-2021', 'renault-symbol-3-1-5-dci-joy');
addVar('megane', 'r-meg3-dci', 'Megane III 1.5 dCi', '2009-2016', 'renault-megane-3-1-5-dci-dynamique');
addVar('kadjar', 'r-kadjar-dci', 'Kadjar 1.5 dCi Icon', '2015-2022', 'renault-kadjar-1-5-dci-icon');

// VW
addVar('jetta', 'vw-jetta-mk6', 'Jetta Mk6 1.6 TDI', '2011-2018', 'vw-jetta-mk6-1-6-tdi-comfortline');
addVar('passat', 'vw-passat-b7', 'Passat B7 1.6 TDI', '2010-2015', 'vw-passat-b7-1-6-tdi-comfortline');
addVar('polo', 'vw-polo-6r', 'Polo 6R 1.4 TDI', '2009-2017', 'vw-polo-6r-1-4-tdi-comfortline');
addVar('golf', 'vw-golf7', 'Golf VII 1.6 TDI', '2012-2019', 'vw-golf-7-1-6-tdi-comfortline');
addVar('tiguan', 'vw-tiguan-mk2', 'Tiguan Mk2 1.4 TSI', '2016-2024', 'vw-tiguan-mk2-1-4-tsi-comfortline');

// Ford
addVar('focus', 'ford-focus-mk3', 'Focus Mk3 1.6 TDCi', '2011-2018', 'ford-focus-mk3-1-6-tdci-trend-x');
addVar('fiesta', 'ford-fiesta-mk7', 'Fiesta Mk7 1.4 TDCi', '2009-2017', 'ford-fiesta-mk7-1-4-tdci-titanium');
addVar('ford-courier', 'ford-courier-tdci2', 'Courier 1.5 TDCi Trend', '2014-2024', 'ford-courier-1-5-tdci-trend'); // already added above
addVar('kuga', 'ford-kuga-mk2', 'Kuga Mk2 1.5 TDCi', '2013-2020', 'ford-kuga-mk2-1-5-tdci-titanium');
addVar('transit-connect', 'ford-tc-tdci', 'Transit Connect 1.5 TDCi', '2013-2024', 'ford-transit-connect-1-5-tdci-trend');

// Hyundai
addVar('i20', 'hyundai-i20-crdi', 'i20 Mk1 1.4 CRDi', '2009-2014', 'hyundai-i20-mk1-1-4-crdi-style');
addVar('i30', 'hyundai-i30-mk2', 'i30 Mk2 1.6 CRDi', '2012-2017', 'hyundai-i30-mk2-1-6-crdi-elite');
addVar('tucson', 'hyundai-tucson-tl', 'Tucson TL 1.6 CRDi', '2015-2020', 'hyundai-tucson-tl-1-6-crdi-elite');
addVar('accent', 'hyundai-accent-blue', 'Accent Blue 1.6 CRDi', '2011-2018', 'hyundai-accent-blue-1-6-crdi-mode-plus');

// Kia
addVar('ceed', 'kia-ceed-jd', 'Ceed JD 1.6 CRDi', '2012-2018', 'kia-ceed-jd-1-6-crdi-concept-plus');
addVar('sportage', 'kia-sportage-ql', 'Sportage QL 1.6 CRDi', '2016-2021', 'kia-sportage-ql-1-6-crdi-concept-plus');
addVar('rio', 'kia-rio-ub', 'Rio UB 1.4 CRDi', '2011-2017', 'kia-rio-ub-1-4-crdi-concept');

// Toyota
addVar('corolla', 'toyota-e150', 'Corolla E150 1.4 D-4D', '2007-2013', 'toyota-corolla-e150-1-4-d4d-elegant');
addVar('corolla', 'toyota-e160', 'Corolla E160 1.4 D-4D', '2013-2019', 'toyota-corolla-e160-1-4-d4d-advance');
addVar('yaris', 'toyota-yaris-xp130', 'Yaris XP130 1.33', '2011-2019', 'toyota-yaris-xp130-1-33-fun');
addVar('c-hr', 'toyota-chr-turbo', 'C-HR 1.2 Turbo', '2016-2023', 'toyota-c-hr-1-2-turbo-advance');

// Honda
addVar('civic', 'honda-civic-fc', 'Civic FC 1.6 i-VTEC', '2016-2021', 'honda-civic-fc-1-6-i-vtec-eco-elegance');
addVar('hr-v', 'honda-hrv-ru', 'HR-V RU 1.5 i-VTEC', '2015-2021', 'honda-hr-v-ru-1-5-i-vtec-executive');

// Opel
addVar('astra', 'opel-astra-j', 'Astra J 1.6 CDTi', '2009-2015', 'opel-astra-j-1-6-cdti-sport');
addVar('corsa', 'opel-corsa-d', 'Corsa D 1.3 CDTi', '2006-2014', 'opel-corsa-d-1-3-cdti-enjoy');
addVar('insignia', 'opel-insignia-a-cdti', 'Insignia A 1.6 CDTi', '2009-2017', 'opel-insignia-a-1-6-cdti-cosmo');
addVar('mokka', 'opel-mokka-cdti', 'Mokka 1.6 CDTi', '2012-2019', 'opel-mokka-1-6-cdti-enjoy');

// Peugeot
addVar('301', 'peugeot-301-hdi', '301 1.6 HDi Active', '2012-2022', 'peugeot-301-1-6-hdi-active');
addVar('308', 'peugeot-308-mk2', '308 Mk2 1.6 BlueHDi', '2013-2021', 'peugeot-308-mk2-1-6-bluehdi-active');
addVar('2008', 'peugeot-2008-mk1', '2008 Mk1 1.6 e-HDi', '2013-2019', 'peugeot-2008-mk1-1-6-e-hdi-allure');

// Citroen
addVar('c-elys-e', 'citroen-cel-hdi', 'C-Elysee 1.6 HDi', '2012-2020', 'citroen-c-elysee-1-6-hdi-shine');
addVar('c4-cactus', 'citroen-cactus-bhdi', 'C4 Cactus 1.6 BlueHDi', '2014-2020', 'citroen-c4-cactus-1-6-bluehdi-shine');

// Fiat
addVar('linea', 'fiat-linea-mj', 'Linea 1.3 Multijet', '2007-2017', 'fiat-linea-1-3-multijet-pop');
addVar('egea', 'fiat-egea-mj', 'Egea 1.3 MultiJet', '2015-2024', 'fiat-egea-1-3-multijet-easy');
addVar('500x', 'fiat-500x-mj', '500X 1.6 MultiJet', '2015-2022', 'fiat-500x-1-6-multijet-cross-plus');

// Dacia
addVar('duster', 'dacia-duster-mk1', 'Duster Mk1 1.5 dCi', '2010-2017', 'dacia-duster-mk1-1-5-dci-laureate');
addVar('sandero', 'dacia-sandero-mk2', 'Sandero Mk2 1.5 dCi', '2012-2020', 'dacia-sandero-mk2-1-5-dci-stepway');

// Skoda
addVar('octavia', 'skoda-octavia-a7', 'Octavia A7 1.6 TDI', '2013-2020', 'skoda-octavia-a7-1-6-tdi-style');
addVar('rapid', 'skoda-rapid-nh', 'Rapid 1.6 TDI', '2013-2019', 'skoda-rapid-1-6-tdi-style');

// Nissan
addVar('qashqai', 'nissan-qash-j11', 'Qashqai J11 1.6 dCi', '2014-2021', 'nissan-qashqai-j11-1-6-dci-tekna');
addVar('juke', 'nissan-juke-f15', 'Juke F15 1.6 Turbo', '2010-2019', 'nissan-juke-f15-1-6-turbo-tekna');

// Seat
addVar('seat-cordoba', 'seat-cordoba-v', 'Cordoba 1.6 Stella', '1999-2009', 'seat-cordoba-1-6-stella');

fs.writeFileSync(file, c, 'utf-8');
console.log(`Done! Added ${n} entries to brands.ts`);
