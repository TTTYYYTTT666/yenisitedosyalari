const fs = require('fs'), p = require('path');
const brandsFile = p.join(__dirname, '..', 'src', 'data', 'brands.ts');
let c = fs.readFileSync(brandsFile, 'utf-8'), n = 0;

function av(bid, mid, mn, v, isNew) {
    if (c.includes(v.slug)) { console.log('SKIP ' + v.slug); return; }
    const modelEntry = `{ name: "${v.name}", slug: "${v.slug}" }`;
    if (isNew) {
        // Search for the brand
        const brandRe = new RegExp(`id:\\s*["']${bid}["']`);
        if (brandRe.test(c)) {
            // Brand exists — find the model
            const modelRe = new RegExp(`id:\\s*["']${mid}["']`);
            if (modelRe.test(c)) {
                // Model exists — add variant
                const modelBlock = c.match(new RegExp(`id:\\s*["']${mid}["'][\\s\\S]*?variants:\\s*\\[([\\s\\S]*?)\\]`));
                if (modelBlock) {
                    const varEnd = c.indexOf(']', c.indexOf('variants:', c.search(new RegExp(`id:\\s*["']${mid}["']`))));
                    c = c.slice(0, varEnd) + (c[varEnd - 1].trim() ? ', ' : '') + modelEntry + c.slice(varEnd);
                    n++;
                    console.log('OK VAR ' + v.slug);
                    return;
                }
            }
        }
    }
    // Fallback: just add as variant to existing model
    const modelRe2 = new RegExp(`id:\\s*["']${mid}["']`);
    if (modelRe2.test(c)) {
        const varEnd = c.indexOf(']', c.indexOf('variants:', c.search(modelRe2)));
        if (varEnd > 0) {
            c = c.slice(0, varEnd) + (c[varEnd - 1].trim() ? ', ' : '') + modelEntry + c.slice(varEnd);
            n++;
            console.log('OK VAR ' + v.slug);
            return;
        }
    }
    // Need new model
    const brandRe2 = new RegExp(`id:\\s*["']${bid}["']`);
    if (brandRe2.test(c)) {
        const modelsStart = c.indexOf('models:', c.search(brandRe2));
        const modelsArr = c.indexOf('[', modelsStart);
        const pos = c.indexOf(']', modelsArr);
        const newModel = `{ id: "${mid}", name: "${mn}", variants: [${modelEntry}] }`;
        c = c.slice(0, pos) + (c[pos - 1].trim() ? ', ' : '') + newModel + c.slice(pos);
        n++;
        console.log('OK NEWM ' + v.slug);
        return;
    }
    console.log('MISS ' + v.slug);
}

// Tofaş
av('tofas', 'tofas-sahin', 'Şahin', { name: 'Şahin 1.6 S', slug: 'tofas-sahin-1-6-s' });
av('tofas', 'tofas-kartal', 'Kartal', { name: 'Kartal SLX 1.6 SW', slug: 'tofas-kartal-slx-1-6-sw' }, true);

// Fiat
av('fiat', 'fiat-tempra', 'Tempra', { name: 'Tempra 1.6 SX', slug: 'fiat-tempra-1-6-sx' }, true);
av('fiat', 'fiat-marea', 'Marea', { name: 'Marea 1.6 16V ELX', slug: 'fiat-marea-1-6-16v-elx' }, true);

// Renault
av('renault', 'renault-12', '12 Toros', { name: '12 Toros 1.4', slug: 'renault-12-toros-1-4' }, true);
av('renault', 'renault-9', '9 Broadway', { name: '9 Broadway 1.4', slug: 'renault-9-broadway-1-4' }, true);
av('renault', 'renault-19', '19 Europa', { name: '19 Europa 1.6', slug: 'renault-19-europa-1-6' }, true);
av('renault', 'renault-megane', 'Megane', { name: 'Megane I 1.6 RTE', slug: 'renault-megane-1-1-6-rte' });
av('renault', 'renault-megane', 'Megane', { name: 'Megane II 1.5 dCi', slug: 'renault-megane-2-1-5-dci-privilege' });
av('renault', 'renault-laguna', 'Laguna', { name: 'Laguna II 1.6 16V', slug: 'renault-laguna-2-1-6-16v-expression' });

// Opel
av('opel', 'opel-vectra', 'Vectra', { name: 'Vectra A 2.0 GL', slug: 'opel-vectra-a-2-0-gl' });
av('opel', 'opel-vectra', 'Vectra', { name: 'Vectra B 1.6 Comfort', slug: 'opel-vectra-b-1-6-comfort' });
av('opel', 'opel-astra', 'Astra', { name: 'Astra F 1.6 GL', slug: 'opel-astra-f-1-6-gl' });
av('opel', 'opel-astra', 'Astra', { name: 'Astra G 1.6 Comfort', slug: 'opel-astra-g-1-6-comfort' });
av('opel', 'opel-corsa', 'Corsa', { name: 'Corsa B 1.4 Swing', slug: 'opel-corsa-b-1-4-swing' });
av('opel', 'opel-omega', 'Omega', { name: 'Omega B 2.0 GLS', slug: 'opel-omega-b-2-0-gls' }, true);

// Ford
av('ford', 'ford-taunus', 'Taunus', { name: 'Taunus 2.0 GL Oto', slug: 'ford-taunus-2-0-gl-oto' }, true);
av('ford', 'ford-escort', 'Escort', { name: 'Escort 1.6 CLX', slug: 'ford-escort-1-6-clx-zetec' }, true);
av('ford', 'ford-mondeo', 'Mondeo', { name: 'Mondeo Mk2 2.0 Ghia', slug: 'ford-mondeo-mk2-2-0-ghia' }, true);
av('ford', 'ford-focus', 'Focus', { name: 'Focus Mk1 1.6 Ghia', slug: 'ford-focus-mk1-1-6-ghia' });
av('ford', 'ford-fiesta', 'Fiesta', { name: 'Fiesta Mk4 1.25', slug: 'ford-fiesta-mk4-1-25-flair' }, true);

// VW
av('volkswagen', 'vw-golf', 'Golf', { name: 'Golf III 1.6 CL', slug: 'vw-golf-3-1-6-cl' });
av('volkswagen', 'vw-golf', 'Golf', { name: 'Golf IV 1.6 Comfortline', slug: 'vw-golf-4-1-6-comfortline' });
av('volkswagen', 'vw-passat', 'Passat', { name: 'Passat B5 1.8T', slug: 'vw-passat-b5-1-8t-comfortline' });
av('volkswagen', 'vw-bora', 'Bora', { name: 'Bora 1.6 Pacific', slug: 'vw-bora-1-6-pacific' }, true);
av('volkswagen', 'vw-polo', 'Polo', { name: 'Polo 6N 1.6', slug: 'vw-polo-6n-1-6-comfortline' });

// BMW
av('bmw', 'bmw-3-serisi', '3 Serisi', { name: 'E36 316i M43', slug: 'bmw-e36-316i-m43' });
av('bmw', 'bmw-3-serisi', '3 Serisi', { name: 'E36 318is M42', slug: 'bmw-e36-318is-m42' });
av('bmw', 'bmw-5-serisi', '5 Serisi', { name: 'E39 520i M52', slug: 'bmw-e39-520i-m52' });

// Mercedes
av('mercedes', 'mercedes-c-serisi', 'C-Serisi', { name: 'W202 C180 M111', slug: 'mercedes-w202-c180-m111' });
av('mercedes', 'mercedes-e-serisi', 'E-Serisi', { name: 'W210 E200 M111', slug: 'mercedes-w210-e200-m111' });
av('mercedes', 'mercedes-e-serisi', 'E-Serisi', { name: 'W124 E200 M111', slug: 'mercedes-w124-e200-m111' });

// Peugeot
av('peugeot', 'peugeot-106', '106', { name: '106 1.4 XR', slug: 'peugeot-106-1-4-xr' }, true);
av('peugeot', 'peugeot-206', '206', { name: '206 1.4 XT', slug: 'peugeot-206-1-4-xt' }, true);
av('peugeot', 'peugeot-306', '306', { name: '306 1.6 XT', slug: 'peugeot-306-1-6-xt' }, true);
av('peugeot', 'peugeot-405', '405', { name: '405 1.6 SRi', slug: 'peugeot-405-1-6-sri' }, true);

// Toyota
av('toyota', 'toyota-corolla', 'Corolla', { name: 'Corolla E100 1.6 XEi', slug: 'toyota-corolla-e100-1-6-xei' });
av('toyota', 'toyota-corolla', 'Corolla', { name: 'Corolla E110 1.6 Terra', slug: 'toyota-corolla-e110-1-6-terra' });
av('toyota', 'toyota-avensis', 'Avensis', { name: 'Avensis T22 1.6 Sol', slug: 'toyota-avensis-t22-1-6-sol' }, true);

// Honda
av('honda', 'honda-civic', 'Civic', { name: 'Civic EK 1.6 ViRS', slug: 'honda-civic-ek-1-6-vtec-virs' });
av('honda', 'honda-accord', 'Accord', { name: 'Accord CG 2.0 ES', slug: 'honda-accord-cg-2-0-es' }, true);

// Hyundai
av('hyundai', 'hyundai-accent', 'Accent', { name: 'Accent LC 1.5 CRDi', slug: 'hyundai-accent-lc-1-5-crdi-admire' });
av('hyundai', 'hyundai-elantra', 'Elantra', { name: 'Elantra XD 1.6 GL', slug: 'hyundai-elantra-xd-1-6-gl' }, true);

// Kia
av('kia', 'kia-sephia', 'Sephia', { name: 'Sephia 1.5 GTX', slug: 'kia-sephia-1-5-gtx' }, true);

// Citroen
av('citroen', 'citroen-saxo', 'Saxo', { name: 'Saxo 1.4i SX', slug: 'citroen-saxo-1-4i-sx' }, true);
av('citroen', 'citroen-xsara', 'Xsara', { name: 'Xsara 1.6 16V SX', slug: 'citroen-xsara-1-6-16v-sx' }, true);
av('citroen', 'citroen-c5', 'C5', { name: 'C5 Mk1 2.0 HDi', slug: 'citroen-c5-mk1-2-0-hdi-exclusive' });

// Nissan
av('nissan', 'nissan-primera', 'Primera', { name: 'Primera P11 2.0 GX', slug: 'nissan-primera-p11-2-0-gx' }, true);

// Seat
av('seat', 'seat-cordoba', 'Cordoba', { name: 'Cordoba 1.6 Stella', slug: 'seat-cordoba-1-6-stella' }, true);

fs.writeFileSync(brandsFile, c, 'utf-8');
console.log(`\nDone! Added ${n} entries to brands.ts`);
