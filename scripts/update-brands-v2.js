const fs = require('fs'), p = require('path');
const brandsFile = p.join(__dirname, '..', 'src', 'data', 'brands.ts');
let c = fs.readFileSync(brandsFile, 'utf-8'), n = 0;

// Strategy: find brand block, then either add to existing model's variants or add new model
// brands.ts structure:
// { id: 'brand-id', name: 'Brand', logo: '...', models: [
//   { id: 'model-id', name: 'Model', variants: [{ id: '...', name: '...', years: '...', slug: '...' }] },
// ] }

function addEntry(brandId, modelId, modelName, variantId, variantName, years, slug) {
    if (c.includes(`'${slug}'`) || c.includes(`"${slug}"`)) {
        console.log('SKIP ' + slug);
        return;
    }

    const variant = `{ id: '${variantId}', name: '${variantName}', years: '${years}', slug: '${slug}' }`;

    // Try to find existing model by ID
    const modelRegex = new RegExp(`id:\\s*['"]${modelId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}['"]`);
    const modelMatch = c.match(modelRegex);

    if (modelMatch) {
        // Model exists — add variant to its variants array
        const modelIdx = c.search(modelRegex);
        // Find the variants: [...] for this model
        const variantsIdx = c.indexOf('variants:', modelIdx);
        if (variantsIdx > 0 && variantsIdx < modelIdx + 500) {
            const bracketStart = c.indexOf('[', variantsIdx);
            const bracketEnd = c.indexOf(']', bracketStart);
            if (bracketEnd > 0) {
                const before = c.slice(bracketStart + 1, bracketEnd).trim();
                const sep = before.length > 0 ? ', ' : '';
                c = c.slice(0, bracketEnd) + sep + variant + c.slice(bracketEnd);
                n++;
                console.log('OK VAR ' + slug);
                return;
            }
        }
    }

    // Model doesn't exist — add new model to brand
    const brandRegex = new RegExp(`id:\\s*['"]${brandId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}['"]`);
    const brandMatch = c.match(brandRegex);

    if (brandMatch) {
        const brandIdx = c.search(brandRegex);
        // Find 'models: [' for this brand
        const modelsIdx = c.indexOf('models:', brandIdx);
        if (modelsIdx > 0 && modelsIdx < brandIdx + 300) {
            const modelsArrStart = c.indexOf('[', modelsIdx);
            // Find the closing ] of models array — need to count brackets
            let depth = 0, pos = modelsArrStart;
            for (; pos < c.length; pos++) {
                if (c[pos] === '[') depth++;
                if (c[pos] === ']') { depth--; if (depth === 0) break; }
            }
            if (pos < c.length) {
                const newModel = `\n            { id: '${modelId}', name: '${modelName}', variants: [${variant}] },`;
                c = c.slice(0, pos) + newModel + c.slice(pos);
                n++;
                console.log('OK MOD ' + slug);
                return;
            }
        }
    }

    console.log('MISS ' + slug + ' (brand: ' + brandId + ')');
}

// === TOFAŞ ===
addEntry('tofa-', 'tofas-sahin', 'Şahin', 'tofas-sahin-1-6', 'Şahin 1.6 S', '1983-2002', 'tofas-sahin-1-6-s');
addEntry('tofa-', 'tofas-kartal', 'Kartal', 'tofas-kartal-slx', 'Kartal SLX 1.6 SW', '1993-2002', 'tofas-kartal-slx-1-6-sw');

// === FIAT ===
addEntry('fiat', 'fiat-tempra', 'Tempra', 'fiat-tempra-1-6-sx', 'Tempra 1.6 SX', '1991-1999', 'fiat-tempra-1-6-sx');
addEntry('fiat', 'fiat-marea', 'Marea', 'fiat-marea-1-6-elx', 'Marea 1.6 16V ELX', '1997-2007', 'fiat-marea-1-6-16v-elx');

// === RENAULT ===
addEntry('renault', 'renault-12', '12 Toros', 'renault-12-toros', '12 Toros 1.4', '1971-2000', 'renault-12-toros-1-4');
addEntry('renault', 'renault-9', '9 Broadway', 'renault-9-bway', '9 Broadway 1.4', '1987-1999', 'renault-9-broadway-1-4');
addEntry('renault', 'renault-19', '19 Europa', 'renault-19-europa', '19 Europa 1.6', '1988-2003', 'renault-19-europa-1-6');
addEntry('renault', 'renault-megane', 'Megane', 'renault-megane-1-rte', 'Megane I 1.6 RTE', '1996-2003', 'renault-megane-1-1-6-rte');
addEntry('renault', 'renault-megane', 'Megane', 'renault-megane-2-dci', 'Megane II 1.5 dCi', '2003-2009', 'renault-megane-2-1-5-dci-privilege');
addEntry('renault', 'renault-laguna', 'Laguna', 'renault-laguna-2-16v', 'Laguna II 1.6 16V', '2001-2007', 'renault-laguna-2-1-6-16v-expression');

// === OPEL ===
addEntry('opel', 'opel-vectra', 'Vectra', 'opel-vectra-a-gl', 'Vectra A 2.0 GL', '1988-1995', 'opel-vectra-a-2-0-gl');
addEntry('opel', 'opel-vectra', 'Vectra', 'opel-vectra-b-cmf', 'Vectra B 1.6 Comfort', '1995-2002', 'opel-vectra-b-1-6-comfort');
addEntry('opel', 'opel-astra', 'Astra', 'opel-astra-f-gl', 'Astra F 1.6 GL', '1991-1998', 'opel-astra-f-1-6-gl');
addEntry('opel', 'opel-astra', 'Astra', 'opel-astra-g-cmf', 'Astra G 1.6 Comfort', '1998-2004', 'opel-astra-g-1-6-comfort');
addEntry('opel', 'opel-corsa', 'Corsa', 'opel-corsa-b-swg', 'Corsa B 1.4 Swing', '1993-2000', 'opel-corsa-b-1-4-swing');
addEntry('opel', 'opel-omega', 'Omega', 'opel-omega-b-gls', 'Omega B 2.0 GLS', '1994-2003', 'opel-omega-b-2-0-gls');

// === FORD ===
addEntry('ford', 'ford-taunus', 'Taunus', 'ford-taunus-gl', 'Taunus 2.0 GL Oto', '1970-1994', 'ford-taunus-2-0-gl-oto');
addEntry('ford', 'ford-escort', 'Escort', 'ford-escort-clx', 'Escort 1.6 CLX', '1990-2000', 'ford-escort-1-6-clx-zetec');
addEntry('ford', 'ford-mondeo', 'Mondeo', 'ford-mondeo-mk2', 'Mondeo Mk2 2.0 Ghia', '1996-2000', 'ford-mondeo-mk2-2-0-ghia');
addEntry('ford', 'ford-focus', 'Focus', 'ford-focus-mk1', 'Focus Mk1 1.6 Ghia', '1998-2005', 'ford-focus-mk1-1-6-ghia');
addEntry('ford', 'ford-fiesta', 'Fiesta', 'ford-fiesta-mk4', 'Fiesta Mk4 1.25', '1995-2002', 'ford-fiesta-mk4-1-25-flair');

// === VOLKSWAGEN ===
addEntry('volkswagen', 'vw-golf', 'Golf', 'vw-golf-3', 'Golf III 1.6 CL', '1991-1997', 'vw-golf-3-1-6-cl');
addEntry('volkswagen', 'vw-golf', 'Golf', 'vw-golf-4', 'Golf IV 1.6 Comfortline', '1997-2003', 'vw-golf-4-1-6-comfortline');
addEntry('volkswagen', 'vw-passat', 'Passat', 'vw-passat-b5', 'Passat B5 1.8T', '1996-2005', 'vw-passat-b5-1-8t-comfortline');
addEntry('volkswagen', 'vw-bora', 'Bora', 'vw-bora-pac', 'Bora 1.6 Pacific', '1998-2005', 'vw-bora-1-6-pacific');
addEntry('volkswagen', 'vw-polo', 'Polo', 'vw-polo-6n', 'Polo 6N 1.6', '1994-2001', 'vw-polo-6n-1-6-comfortline');

// === BMW ===
addEntry('bmw', '3-series', '3 Serisi', 'bmw-e36-316i', 'E36 316i M43', '1990-2000', 'bmw-e36-316i-m43');
addEntry('bmw', '3-series', '3 Serisi', 'bmw-e36-318is', 'E36 318is M42/M44', '1990-2000', 'bmw-e36-318is-m42');
addEntry('bmw', '5-series', '5 Serisi', 'bmw-e39-520i', 'E39 520i M52', '1996-2003', 'bmw-e39-520i-m52');

// === MERCEDES ===
addEntry('mercedes-benz', 'mercedes-c-serisi', 'C-Serisi', 'mercedes-w202', 'W202 C180 M111', '1993-2000', 'mercedes-w202-c180-m111');
addEntry('mercedes-benz', 'mercedes-e-serisi', 'E-Serisi', 'mercedes-w210', 'W210 E200 M111', '1995-2003', 'mercedes-w210-e200-m111');
addEntry('mercedes-benz', 'mercedes-e-serisi', 'E-Serisi', 'mercedes-w124', 'W124 E200 M111', '1984-1997', 'mercedes-w124-e200-m111');

// === PEUGEOT ===
addEntry('peugeot', 'peugeot-106', '106', 'peugeot-106-xr', '106 1.4 XR', '1991-2003', 'peugeot-106-1-4-xr');
addEntry('peugeot', 'peugeot-206', '206', 'peugeot-206-xt', '206 1.4 XT', '1998-2010', 'peugeot-206-1-4-xt');
addEntry('peugeot', 'peugeot-306', '306', 'peugeot-306-xt', '306 1.6 XT', '1993-2002', 'peugeot-306-1-6-xt');
addEntry('peugeot', 'peugeot-405', '405', 'peugeot-405-sri', '405 1.6 SRi', '1987-1997', 'peugeot-405-1-6-sri');

// === TOYOTA ===
addEntry('toyota', 'toyota-corolla', 'Corolla', 'toyota-corolla-e100', 'Corolla E100 1.6 XEi', '1991-1997', 'toyota-corolla-e100-1-6-xei');
addEntry('toyota', 'toyota-corolla', 'Corolla', 'toyota-corolla-e110', 'Corolla E110 1.6 Terra', '1997-2002', 'toyota-corolla-e110-1-6-terra');
addEntry('toyota', 'toyota-avensis', 'Avensis', 'toyota-avensis-t22', 'Avensis T22 1.6 Sol', '1997-2003', 'toyota-avensis-t22-1-6-sol');

// === HONDA ===
addEntry('honda', 'honda-civic', 'Civic', 'honda-civic-ek', 'Civic EK 1.6 ViRS', '1996-2000', 'honda-civic-ek-1-6-vtec-virs');
addEntry('honda', 'honda-accord', 'Accord', 'honda-accord-cg', 'Accord CG 2.0 ES', '1998-2003', 'honda-accord-cg-2-0-es');

// === HYUNDAI ===
addEntry('hyundai', 'hyundai-accent', 'Accent', 'hyundai-accent-lc', 'Accent LC 1.5 CRDi', '1999-2005', 'hyundai-accent-lc-1-5-crdi-admire');
addEntry('hyundai', 'hyundai-elantra', 'Elantra', 'hyundai-elantra-xd', 'Elantra XD 1.6 GL', '2000-2006', 'hyundai-elantra-xd-1-6-gl');

// === KIA ===
addEntry('kia', 'kia-sephia', 'Sephia', 'kia-sephia-gtx', 'Sephia 1.5 GTX', '1994-2001', 'kia-sephia-1-5-gtx');

// === CITROEN ===
addEntry('citroen', 'citroen-saxo', 'Saxo', 'citroen-saxo-sx', 'Saxo 1.4i SX', '1996-2004', 'citroen-saxo-1-4i-sx');
addEntry('citroen', 'citroen-xsara', 'Xsara', 'citroen-xsara-sx', 'Xsara 1.6 16V SX', '1997-2006', 'citroen-xsara-1-6-16v-sx');
addEntry('citroen', 'citroen-c5', 'C5', 'citroen-c5-hdi', 'C5 Mk1 2.0 HDi', '2001-2008', 'citroen-c5-mk1-2-0-hdi-exclusive');

// === NISSAN ===
addEntry('nissan', 'nissan-primera', 'Primera', 'nissan-primera-p11', 'Primera P11 2.0 GX', '1996-2002', 'nissan-primera-p11-2-0-gx');

// === SEAT ===
addEntry('seat', 'seat-cordoba', 'Cordoba', 'seat-cordoba-stella', 'Cordoba 1.6 Stella', '1999-2009', 'seat-cordoba-1-6-stella');

fs.writeFileSync(brandsFile, c, 'utf-8');
console.log(`\nDone! Added ${n} entries to brands.ts`);
