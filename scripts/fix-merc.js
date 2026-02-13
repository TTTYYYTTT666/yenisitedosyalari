const fs = require('fs'), p = require('path');
const bf = p.join(__dirname, '..', 'src', 'data', 'brands.ts');
let c = fs.readFileSync(bf, 'utf-8');
// Add mercedes-c180-w204 next to the existing kompressor entry
const target = "slug: 'mercedes-c180-w204-kompressor'";
const idx = c.indexOf(target);
if (idx > -1 && !c.includes("slug: 'mercedes-c180-w204'")) {
    // Find end of this variant object
    let end = c.indexOf('}', idx) + 1;
    c = c.slice(0, end) + ", { id: 'mercedes-c180-w204', name: 'C180 W204 1.6', years: '2007-2014', slug: 'mercedes-c180-w204' }" + c.slice(end);
    fs.writeFileSync(bf, c);
    console.log('ADDED mercedes-c180-w204');
} else {
    console.log('SKIP or already exists');
}
