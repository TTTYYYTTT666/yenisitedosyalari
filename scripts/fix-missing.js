const fs = require('fs'), p = require('path');
const D = p.join(__dirname, '..', 'src', 'data', 'cars');
const brandsFile = p.join(__dirname, '..', 'src', 'data', 'brands.ts');
let c = fs.readFileSync(brandsFile, 'utf-8'), n = 0;

function av(bid, mid, mn, v, isNew) {
    if (c.includes(v.slug)) { console.log('SKIP ' + v.slug); return; }
    const vs = `{ id: '${v.id}', name: '${v.name}', years: '${v.years}', slug: '${v.slug}' }`;
    if (isNew) {
        const bp = new RegExp(`id: '${bid}'[\\s\\S]*?models: \\[`);
        const m = c.match(bp);
        if (m) { const pos = c.indexOf(m[0]) + m[0].length; c = c.slice(0, pos) + `\n            { id: '${mid}', name: '${mn}', variants: [${vs}] },` + c.slice(pos); n++; console.log('OK ' + v.slug); }
        else console.log('WARN brand not found: ' + bid);
    } else {
        const bs = c.indexOf(`id: '${bid}'`);
        if (bs === -1) { console.log('WARN brand: ' + bid); return; }
        const nb = c.slice(bs + 10).match(/\n    \{\s*\n\s*id: '/);
        const be = nb ? bs + 10 + nb.index : c.length;
        const sec = c.slice(bs, be);
        const mm = sec.match(new RegExp(`id: '${mid}'[^}]*?variants: \\[`));
        if (mm) { const ap = bs + mm.index + mm[0].length; c = c.slice(0, ap) + vs + ', ' + c.slice(ap); n++; console.log('OK ' + v.slug); }
        else { const ml = sec.match(/models: \[/); if (ml) { const ap = bs + ml.index + ml[0].length; c = c.slice(0, ap) + `\n            { id: '${mid}', name: '${mn}', variants: [${vs}] },` + c.slice(ap); n++; console.log('OK NEWM ' + v.slug); } }
    }
}

// BMW - 12
av('bmw', '3-series', '3 Serisi', { id: 'bmw-320i-f30-ed', name: 'F30 320i ED', years: '2012-2019', slug: 'bmw-320i-f30-ed' }, false);
av('bmw', '3-series', '3 Serisi', { id: 'bmw-320d-f30', name: 'F30 320d', years: '2012-2019', slug: 'bmw-320d-f30' }, false);
av('bmw', '3-series', '3 Serisi', { id: 'bmw-g20-320i', name: 'G20 320i', years: '2019-2025', slug: 'bmw-g20-320i' }, false);
av('bmw', '3-series', '3 Serisi', { id: 'bmw-320d-g20', name: 'G20 320d', years: '2019-2025', slug: 'bmw-320d-g20' }, false);
av('bmw', '3-series', '3 Serisi', { id: 'bmw-e90-320i-2-0', name: 'E90 320i 2.0', years: '2005-2012', slug: 'bmw-e90-320i-2-0' }, false);
av('bmw', '3-series', '3 Serisi', { id: 'bmw-f30-320i', name: 'F30 320i 2.0T', years: '2012-2019', slug: 'bmw-f30-320i' }, false);
av('bmw', '5-series', '5 Serisi', { id: 'bmw-520i-f10', name: 'F10 520i', years: '2010-2017', slug: 'bmw-520i-f10' }, false);
av('bmw', '5-series', '5 Serisi', { id: 'bmw-520d-f10', name: 'F10 520d', years: '2010-2017', slug: 'bmw-520d-f10' }, false);
av('bmw', '5-series', '5 Serisi', { id: 'bmw-f10-520d', name: 'F10 520d 2.0 184hp', years: '2010-2017', slug: 'bmw-f10-520d' }, false);
av('bmw', '5-series', '5 Serisi', { id: 'bmw-520i-g30', name: 'G30 520i', years: '2017-2025', slug: 'bmw-520i-g30' }, false);
av('bmw', '5-series', '5 Serisi', { id: 'bmw-520d-g30', name: 'G30 520d', years: '2017-2025', slug: 'bmw-520d-g30' }, false);
av('bmw', 'x5', 'X5', { id: 'bmw-x5-xdrive30d-g05', name: 'G05 xDrive30d', years: '2019-2025', slug: 'bmw-x5-xdrive30d-g05' }, false);

// Chery - 5
av('chery', 'omoda-5', 'Omoda 5', { id: 'chery-omoda-5-1-6-tgdi', name: '1.6 TGDI', years: '2023-2025', slug: 'chery-omoda-5-1-6-tgdi' }, false);
av('chery', 'omoda-5', 'Omoda 5', { id: 'chery-omoda-5-2025-facelift', name: '2025 Facelift', years: '2025', slug: 'chery-omoda-5-2025-facelift' }, false);
av('chery', 'tiggo-8-pro', 'Tiggo 8 Pro', { id: 'chery-tiggo-8-pro-1-6-tgdi', name: '1.6 TGDI', years: '2022-2025', slug: 'chery-tiggo-8-pro-1-6-tgdi' }, false);
av('chery', 'tiggo-8-pro', 'Tiggo 8 Pro', { id: 'chery-tiggo-8-pro-max-2025', name: 'Max 2025', years: '2025', slug: 'chery-tiggo-8-pro-max-2025' }, false);
av('chery', 'tiggo-8-pro', 'Tiggo 8 Pro', { id: 'chery-tiggo-8-pro-e-plus-phev', name: 'E+ PHEV', years: '2024-2025', slug: 'chery-tiggo-8-pro-e-plus-phev' }, false);

// Ford - 5
av('ford', 'focus', 'Focus', { id: 'ford-focus-1-5-ti-vct', name: '1.5 Ti-VCT', years: '2014-2018', slug: 'ford-focus-1-5-ti-vct' }, false);
av('ford', 'focus', 'Focus', { id: 'ford-focus-3-1-6-tdci', name: 'Mk3 1.6 TDCi', years: '2011-2018', slug: 'ford-focus-3-1-6-tdci' }, false);
av('ford', 'focus', 'Focus', { id: 'ford-focus-3-5-1-5-tdci', name: 'Mk3.5 1.5 TDCi', years: '2014-2018', slug: 'ford-focus-3-5-1-5-tdci' }, false);
av('ford', 'focus', 'Focus', { id: 'ford-focus-4-1-5-ecoblue', name: 'Mk4 1.5 EcoBlue', years: '2018-2024', slug: 'ford-focus-4-1-5-ecoblue' }, false);
av('ford', 'ranger', 'Ranger', { id: 'ford-ranger-2-0-ecoblue', name: '2.0 EcoBlue', years: '2019-2025', slug: 'ford-ranger-2-0-ecoblue' }, true);
av('ford', 'focus', 'Focus', { id: 'ford-focus-2-1-6-tdci', name: 'Mk2 1.6 TDCi', years: '2005-2011', slug: 'ford-focus-2-1-6-tdci' }, false);

// Honda - 8
av('honda', 'civic', 'Civic', { id: 'honda-civic-fb7-eco', name: 'FB7 Eco', years: '2012-2016', slug: 'honda-civic-fb7-eco' }, false);
av('honda', 'civic', 'Civic', { id: 'honda-civic-fc5-1-6-vtec', name: 'FC5 1.6 VTEC', years: '2016-2021', slug: 'honda-civic-fc5-1-6-vtec' }, false);
av('honda', 'civic', 'Civic', { id: 'honda-civic-fk7-1-0-turbo', name: 'FK7 1.0 Turbo', years: '2017-2021', slug: 'honda-civic-fk7-1-0-turbo' }, false);
av('honda', 'civic', 'Civic', { id: 'honda-civic-fe1-1-5-turbo', name: 'FE1 1.5 Turbo', years: '2022-2025', slug: 'honda-civic-fe1-1-5-turbo' }, false);
av('honda', 'civic', 'Civic', { id: 'honda-civic-fd6-1-6-vtec', name: 'FD6 1.6 VTEC', years: '2006-2012', slug: 'honda-civic-fd6-1-6-vtec' }, false);
av('honda', 'city', 'City', { id: 'honda-city-1-5-i-vtec', name: '1.5 i-VTEC', years: '2020-2025', slug: 'honda-city-1-5-i-vtec' }, true);
av('honda', 'jazz', 'Jazz', { id: 'honda-jazz-1-5-ehev', name: '1.5 e:HEV', years: '2020-2025', slug: 'honda-jazz-1-5-ehev' }, true);
av('honda', 'civic', 'Civic', { id: 'honda-civic-fb7-1-6-vtec', name: 'FB7 1.6 i-VTEC', years: '2012-2016', slug: 'honda-civic-fb7-1-6-vtec' }, false);

// Mercedes - 3
av('mercedes-benz', 'cla', 'CLA', { id: 'mercedes-cla-200', name: 'CLA 200', years: '2013-2019', slug: 'mercedes-cla-200' }, false);
av('mercedes-benz', 'cla', 'CLA', { id: 'mercedes-cla-180d-c117', name: 'CLA 180d C117', years: '2013-2019', slug: 'mercedes-cla-180d-c117' }, false);
av('mercedes-benz', 'c-class', 'C Serisi', { id: 'mercedes-c180-w204', name: 'C180 W204', years: '2007-2014', slug: 'mercedes-c180-w204' }, false);

fs.writeFileSync(brandsFile, c, 'utf-8');
console.log(`\nDone! Added ${n} missing entries.`);
