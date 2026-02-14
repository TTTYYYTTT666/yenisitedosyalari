const fs = require('fs'), p = require('path');
const file = p.join(__dirname, '..', 'src', 'data', 'brands.ts');
let c = fs.readFileSync(file, 'utf-8');

// Fix remaining 6 duplicates by merging variants from duplicate model into original

function mergeAndRemove(dupId, origId) {
    const dupPat = `id: '${dupId}'`;
    const origPat = `id: '${origId}'`;
    if (!c.includes(dupPat) || !c.includes(origPat)) return;

    // Get variants from duplicate
    const di = c.indexOf(dupPat);
    const dvi = c.indexOf('variants:', di);
    const dbs = c.indexOf('[', dvi);
    let d1 = 0, dbe = dbs;
    for (; dbe < c.length; dbe++) { if (c[dbe] === '[') d1++; if (c[dbe] === ']') { d1--; if (d1 === 0) break; } }
    const dupVars = c.slice(dbs + 1, dbe).trim();

    if (dupVars) {
        // Add to original
        const oi = c.indexOf(origPat);
        const ovi = c.indexOf('variants:', oi);
        const obs = c.indexOf('[', ovi);
        let d2 = 0, obe = obs;
        for (; obe < c.length; obe++) { if (c[obe] === '[') d2++; if (c[obe] === ']') { d2--; if (d2 === 0) break; } }
        c = c.slice(0, obe) + ', ' + dupVars + c.slice(obe);
    }

    // Remove duplicate model — find its { and }
    const newDi = c.indexOf(dupPat);
    let objS = newDi;
    while (objS > 0 && c[objS] !== '{') objS--;
    let d3 = 0, objE = objS;
    for (; objE < c.length; objE++) { if (c[objE] === '{') d3++; if (c[objE] === '}') { d3--; if (d3 === 0) break; } }
    // Check for trailing comma + whitespace
    let trailEnd = objE + 1;
    while (trailEnd < c.length && ',\n\r\t '.includes(c[trailEnd])) trailEnd++;
    // Check for leading whitespace
    let leadStart = objS;
    while (leadStart > 0 && '\n\r\t '.includes(c[leadStart - 1])) leadStart--;
    if (leadStart > 0 && c[leadStart - 1] === ',') leadStart--;

    c = c.slice(0, leadStart) + '\n' + ' '.repeat(12) + c.slice(trailEnd);
    console.log('MERGED ' + dupId + ' -> ' + origId);
}

// BMW: 3-series-e46 -> 3-series
mergeAndRemove('3-series-e46', '3-series');

// Fiat: duplicate 500l (same ID) - just remove the second one
// This is special - same ID appears twice, just remove duplicate
const first500l = c.indexOf("id: '500l'");
const second500l = c.indexOf("id: '500l'", first500l + 10);
if (second500l > 0) {
    let objS = second500l;
    while (objS > 0 && c[objS] !== '{') objS--;
    let d = 0, objE = objS;
    for (; objE < c.length; objE++) { if (c[objE] === '{') d++; if (c[objE] === '}') { d--; if (d === 0) break; } }
    let trailEnd = objE + 1;
    while (trailEnd < c.length && ',\n\r\t '.includes(c[trailEnd])) trailEnd++;
    let leadStart = objS;
    while (leadStart > 0 && '\n\r\t '.includes(c[leadStart - 1])) leadStart--;
    if (leadStart > 0 && c[leadStart - 1] === ',') leadStart--;
    c = c.slice(0, leadStart) + '\n' + ' '.repeat(12) + c.slice(trailEnd);
    console.log('REMOVED duplicate 500l');
}

// Hyundai: accent-blue -> accent (merge)
mergeAndRemove('accent-blue', 'accent');

// Mercedes: a-serisi -> a-class, e-serisi -> e-class
mergeAndRemove('a-serisi', 'a-class');
mergeAndRemove('e-serisi', 'e-class');

// Volvo: duplicate v40
const firstV40 = c.indexOf("id: 'v40'");
const secondV40 = c.indexOf("id: 'v40'", firstV40 + 10);
if (secondV40 > 0) {
    // Get variants from second
    const v2vi = c.indexOf('variants:', secondV40);
    const v2bs = c.indexOf('[', v2vi);
    let d1 = 0, v2be = v2bs;
    for (; v2be < c.length; v2be++) { if (c[v2be] === '[') d1++; if (c[v2be] === ']') { d1--; if (d1 === 0) break; } }
    const v2vars = c.slice(v2bs + 1, v2be).trim();

    if (v2vars) {
        const v1vi = c.indexOf('variants:', firstV40);
        const v1bs = c.indexOf('[', v1vi);
        let d2 = 0, v1be = v1bs;
        for (; v1be < c.length; v1be++) { if (c[v1be] === '[') d2++; if (c[v1be] === ']') { d2--; if (d2 === 0) break; } }
        c = c.slice(0, v1be) + ', ' + v2vars + c.slice(v1be);
    }

    // Remove second v40
    const newSecond = c.indexOf("id: 'v40'", c.indexOf("id: 'v40'") + 10);
    let objS = newSecond;
    while (objS > 0 && c[objS] !== '{') objS--;
    let d = 0, objE = objS;
    for (; objE < c.length; objE++) { if (c[objE] === '{') d++; if (c[objE] === '}') { d--; if (d === 0) break; } }
    let trailEnd = objE + 1;
    while (trailEnd < c.length && ',\n\r\t '.includes(c[trailEnd])) trailEnd++;
    let leadStart = objS;
    while (leadStart > 0 && '\n\r\t '.includes(c[leadStart - 1])) leadStart--;
    if (leadStart > 0 && c[leadStart - 1] === ',') leadStart--;
    c = c.slice(0, leadStart) + '\n' + ' '.repeat(12) + c.slice(trailEnd);
    console.log('MERGED duplicate v40');
}

fs.writeFileSync(file, c, 'utf-8');
console.log('Done!');
