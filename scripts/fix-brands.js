const fs = require('fs'), p = require('path');
const D = p.join(__dirname, '..', 'src', 'data', 'cars');
const brandsFile = p.join(__dirname, '..', 'src', 'data', 'brands.ts');
let brands = fs.readFileSync(brandsFile, 'utf-8');

// 1) Remove 21 broken slug entries from brands.ts
const broken = [
    "bmw-320i-f30-n20", "bmw-f30-320d", "bmw-3-serisi-f30-320i",
    "bmw-520i-f10-n20", "bmw-520i-g30-m-sport", "bmw-g30-520i",
    "bmw-5-serisi-f10-520d", "bmw-f10-520i", "bmw-5-serisi-f10-520i",
    "bmw-x5-xdrive30d",
    "chery-omoda-5", "chery-omoda-5-new", "chery-tiggo-8-pro",
    "ford-focus-3-5-1-5-tdci-powershift", "ford-focus-mk2-1-6-tdci", "ford-ranger-wildtrak",
    "honda-city-1-5-ivtec", "honda-civic-fc5-1-6-ivtec", "honda-civic-fb7-1-6-eco", "honda-jazz-1-3-ivtec",
    "mercedes-cla-180d"
];

let removed = 0;
for (const slug of broken) {
    // Find the line with this slug and remove it
    const lines = brands.split('\n');
    const newLines = [];
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes(slug)) {
            console.log(`REMOVED broken: ${slug}`);
            removed++;
            // Check if previous line has this as part of a variants array
            // If the variant entry is the only one in a model, remove the whole model line
            continue;
        }
        newLines.push(lines[i]);
    }
    brands = newLines.join('\n');
}

// 2) Add 2 missing entries to brands.ts
// ford-focus-2-1-6-tdci
if (!brands.includes('ford-focus-2-1-6-tdci')) {
    const focusMatch = brands.match(/id: 'focus'[^}]*?variants: \[/);
    if (focusMatch) {
        const pos = brands.indexOf(focusMatch[0]) + focusMatch[0].length;
        brands = brands.slice(0, pos) + "{ id: 'ford-focus-2-1-6-tdci', name: 'Mk2 1.6 TDCi', years: '2005-2011', slug: 'ford-focus-2-1-6-tdci' }, " + brands.slice(pos);
        console.log('ADDED missing: ford-focus-2-1-6-tdci');
    }
}

// mercedes-c180-w204
if (!brands.includes('mercedes-c180-w204')) {
    const bs = brands.indexOf("id: 'mercedes-benz'");
    if (bs > -1) {
        const nb = brands.slice(bs + 10).match(/\n    \{\s*\n\s*id: '/);
        const be = nb ? bs + 10 + nb.index : brands.length;
        const sec = brands.slice(bs, be);
        const cMatch = sec.match(/id: 'c-class'[^}]*?variants: \[/);
        if (cMatch) {
            const ap = bs + cMatch.index + cMatch[0].length;
            brands = brands.slice(0, ap) + "{ id: 'mercedes-c180-w204', name: 'C180 W204 Kompressor', years: '2007-2014', slug: 'mercedes-c180-w204' }, " + brands.slice(ap);
            console.log('ADDED missing: mercedes-c180-w204');
        }
    }
}

fs.writeFileSync(brandsFile, brands, 'utf-8');

// 3) Clean up empty model entries that now have empty variants arrays
let brands2 = fs.readFileSync(brandsFile, 'utf-8');
// Remove lines that have models with empty variants: [  ]
const emptyModelPattern = /\s*\{ id: '[^']+', name: '[^']+', variants: \[\s*\] \},?\n?/g;
brands2 = brands2.replace(emptyModelPattern, '\n');
// Clean double newlines
brands2 = brands2.replace(/\n{3,}/g, '\n\n');
fs.writeFileSync(brandsFile, brands2, 'utf-8');

console.log(`\nDone! Removed ${removed} broken entries, added 2 missing entries.`);
