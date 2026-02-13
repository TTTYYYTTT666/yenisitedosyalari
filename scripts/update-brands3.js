const fs = require('fs'), p = require('path');
const brandsFile = p.join(__dirname, '..', 'src', 'data', 'brands.ts');
let c = fs.readFileSync(brandsFile, 'utf-8'), n = 0;

function av(bid, mid, mn, v, isNew) {
    if (c.includes(v.slug)) { console.log('SKIP ' + v.slug); return; }
    const vs = `{ id: '${v.id}', name: '${v.name}', years: '${v.years}', slug: '${v.slug}' }`;
    if (isNew) {
        const bp = new RegExp(`id: '${bid}'[\\s\\S]*?models: \\[`);
        const m = c.match(bp);
        if (m) { const pos = c.indexOf(m[0]) + m[0].length; c = c.slice(0, pos) + `\n            { id: '${mid}', name: '${mn}', variants: [${vs}] },` + c.slice(pos); n++; console.log('OK NEW ' + v.slug); }
    } else {
        const bs = c.indexOf(`id: '${bid}'`);
        if (bs === -1) return;
        const nb = c.slice(bs + 10).match(/\n    \{\s*\n\s*id: '/);
        const be = nb ? bs + 10 + nb.index : c.length;
        const sec = c.slice(bs, be);
        const mm = sec.match(new RegExp(`id: '${mid}'[^}]*?variants: \\[`));
        if (mm) { const ap = bs + mm.index + mm[0].length; c = c.slice(0, ap) + vs + ', ' + c.slice(ap); n++; console.log('OK VAR ' + v.slug); }
        else { const ml = sec.match(/models: \[/); if (ml) { const ap = bs + ml.index + ml[0].length; c = c.slice(0, ap) + `\n            { id: '${mid}', name: '${mn}', variants: [${vs}] },` + c.slice(ap); n++; console.log('OK NEWM ' + v.slug); } }
    }
}

// 15 TR cars
av('renault', 'symbol', 'Symbol', { id: 'renault-symbol-joy-1-5-dci', name: 'L52 Joy 1.5 dCi', years: '2013-2020', slug: 'renault-symbol-joy-1-5-dci' }, false);
av('fiat', 'linea', 'Linea', { id: 'fiat-linea-1-3-multijet-active', name: '1.3 Multijet Active Plus', years: '2007-2016', slug: 'fiat-linea-1-3-multijet-active' }, false);
av('hyundai', 'accent', 'Accent Blue', { id: 'hyundai-accent-blue-1-4-cvvt', name: 'RB 1.4 CVVT Mode Plus', years: '2011-2018', slug: 'hyundai-accent-blue-1-4-cvvt' }, false);
av('opel', 'corsa', 'Corsa', { id: 'opel-corsa-e-1-4-enjoy', name: 'E 1.4 Enjoy Otomatik', years: '2014-2019', slug: 'opel-corsa-e-1-4-enjoy' }, false);
av('toyota', 'yaris', 'Yaris', { id: 'toyota-yaris-3-1-33-vvti', name: 'XP130 1.33 VVT-i Fun', years: '2011-2020', slug: 'toyota-yaris-3-1-33-vvti' }, false);
av('ford', 'tourneo-courier', 'Tourneo Courier', { id: 'ford-courier-1-5-tdci-titanium', name: '1.5 TDCi Titanium Plus', years: '2014-2024', slug: 'ford-courier-1-5-tdci-titanium' }, false);
av('volkswagen', 'caddy', 'Caddy', { id: 'vw-caddy-2k-1-6-tdi', name: '2K 1.6 TDI Trendline', years: '2010-2015', slug: 'vw-caddy-2k-1-6-tdi' }, false);
av('citroen', 'berlingo', 'Berlingo', { id: 'citroen-berlingo-3-1-5-bluehdi', name: 'K9 1.5 BlueHDi Feel', years: '2018-2025', slug: 'citroen-berlingo-3-1-5-bluehdi' }, false);
av('skoda', 'rapid', 'Rapid', { id: 'skoda-rapid-1-6-tdi-greentec', name: 'NH 1.6 TDI Ambition', years: '2013-2019', slug: 'skoda-rapid-1-6-tdi-greentec' }, true);
av('dacia', 'logan-mcv', 'Logan MCV', { id: 'dacia-logan-mcv-1-5-dci', name: 'K90 1.5 dCi Laureate', years: '2013-2020', slug: 'dacia-logan-mcv-1-5-dci' }, true);
av('kia', 'rio', 'Rio', { id: 'kia-rio-4-1-4-mpi-cool', name: 'YB 1.4 MPI Cool Plus', years: '2017-2023', slug: 'kia-rio-4-1-4-mpi-cool' }, false);
av('seat', 'toledo', 'Toledo', { id: 'seat-toledo-1-6-tdi-style', name: 'KG 1.6 TDI Style DSG', years: '2013-2019', slug: 'seat-toledo-1-6-tdi-style' }, true);
av('peugeot', '301', '301', { id: 'peugeot-301-1-6-hdi-active', name: '1.6 HDi Active', years: '2012-2022', slug: 'peugeot-301-1-6-hdi-active' }, false);
av('nissan', 'pulsar', 'Pulsar', { id: 'nissan-pulsar-1-5-dci', name: 'C13 1.5 dCi Tekna', years: '2014-2018', slug: 'nissan-pulsar-1-5-dci' }, true);

// 5 sorunlu arabalar
av('land-rover', 'freelander', 'Freelander 2', { id: 'lr-freelander-2-2-td4', name: '2.2 TD4 HSE', years: '2006-2014', slug: 'lr-freelander-2-2-td4' }, true);
av('renault', 'laguna', 'Laguna III', { id: 'renault-laguna-3-1-5-dci', name: '1.5 dCi Privilege', years: '2007-2015', slug: 'renault-laguna-3-1-5-dci' }, true);
av('opel', 'insignia-a', 'Insignia A', { id: 'opel-insignia-a-2-0-cdti-cosmo', name: '2.0 CDTi Cosmo', years: '2008-2017', slug: 'opel-insignia-a-2-0-cdti-cosmo' }, true);
av('ford', 'focus-ps', 'Focus PowerShift', { id: 'ford-focus-2-1-6-ti-vct-powershift', name: '1.6 Ti-VCT PowerShift', years: '2011-2018', slug: 'ford-focus-2-1-6-ti-vct-powershift' }, true);
av('fiat', '500l', '500L', { id: 'fiat-500l-1-3-multijet-popstar', name: '1.3 Multijet Popstar', years: '2013-2022', slug: 'fiat-500l-1-3-multijet-popstar' }, true);

fs.writeFileSync(brandsFile, c, 'utf-8');
console.log(`\nDone! Added ${n} entries to brands.ts`);
