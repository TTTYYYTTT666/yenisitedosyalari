/**
 * Merge duplicate model entries in brands.ts.
 * For each brand, find models with the same display name,
 * merge their variants into the first (original) model,
 * and remove the duplicate model entry.
 */
const fs = require('fs'), p = require('path');
const file = p.join(__dirname, '..', 'src', 'data', 'brands.ts');
let src = fs.readFileSync(file, 'utf-8');

// Parse all brands
const brandBlocks = [];
const brandRe = /\{\s*id:\s*'([^']+)',\s*name:\s*'([^']+)',\s*logo:\s*'[^']*',\s*models:\s*\[/g;
let m;
while ((m = brandRe.exec(src)) !== null) {
    brandBlocks.push({ id: m[1], name: m[2], startIdx: m.index });
}

let totalMerged = 0;

for (const brand of brandBlocks) {
    // Find all model entries within this brand
    // models are in format: { id: '...', name: '...', variants: [...] }
    const brandStart = brand.startIdx;
    const modelsIdx = src.indexOf('models:', brandStart);
    const modelsArrStart = src.indexOf('[', modelsIdx);

    // Find the end of models array
    let depth = 0, modelsArrEnd = modelsArrStart;
    for (; modelsArrEnd < src.length; modelsArrEnd++) {
        if (src[modelsArrEnd] === '[') depth++;
        if (src[modelsArrEnd] === ']') { depth--; if (depth === 0) break; }
    }

    const modelsBlock = src.slice(modelsArrStart, modelsArrEnd + 1);

    // Find individual model entries with their positions
    const modelRe = /\{\s*id:\s*'([^']+)',\s*name:\s*'([^']+)',\s*variants:\s*\[/g;
    const models = [];
    let mm;
    while ((mm = modelRe.exec(modelsBlock)) !== null) {
        const modelStart = mm.index;
        // Find the end of this model's variants array
        let vStart = modelsBlock.indexOf('[', modelsBlock.indexOf('variants:', modelStart));
        let d2 = 0, vEnd = vStart;
        for (; vEnd < modelsBlock.length; vEnd++) {
            if (modelsBlock[vEnd] === '[') d2++;
            if (modelsBlock[vEnd] === ']') { d2--; if (d2 === 0) break; }
        }
        // Find the closing } of the model
        let modelEnd = modelsBlock.indexOf('}', vEnd);

        models.push({
            id: mm[1],
            name: mm[2],
            startInBlock: modelStart,
            endInBlock: modelEnd + 1,
            variantsContent: modelsBlock.slice(vStart + 1, vEnd).trim()
        });
    }

    // Group models by normalized name
    const byName = {};
    for (const model of models) {
        const key = model.name.toLowerCase().replace(/[^a-z0-9ıöüçğş]/g, '');
        if (!byName[key]) byName[key] = [];
        byName[key].push(model);
    }

    // Find duplicates and merge
    for (const [key, group] of Object.entries(byName)) {
        if (group.length <= 1) continue;

        // Keep the first one, merge variants from others into it
        const primary = group[0];
        const duplicates = group.slice(1);

        for (const dup of duplicates) {
            // Extract variant entries from duplicate
            const variants = dup.variantsContent;
            if (!variants) continue;

            // Check if variants already exist in primary
            const existingSlugs = primary.variantsContent;
            const newVariants = variants.split(/\},\s*\{/).map(v => {
                if (!v.startsWith('{')) v = '{' + v;
                if (!v.endsWith('}')) v = v + '}';
                return v;
            }).filter(v => {
                // Extract slug from variant
                const slugMatch = v.match(/slug:\s*'([^']+)'/);
                if (!slugMatch) return false;
                return !existingSlugs.includes(slugMatch[1]);
            });

            if (newVariants.length > 0) {
                // Add new variants to primary
                const absVarEnd = modelsArrStart + primary.startInBlock;
                const varSearch = src.indexOf('variants:', absVarEnd + modelsArrStart);

                // Instead of complex position math, just do string replacement
                // Find the primary model in current src
                const primaryPattern = `id: '${primary.id}',`;
                const primaryIdx = src.indexOf(primaryPattern, brandStart);
                if (primaryIdx >= 0) {
                    const varIdx = src.indexOf('variants:', primaryIdx);
                    const varBracketStart = src.indexOf('[', varIdx);
                    let d3 = 0, varBracketEnd = varBracketStart;
                    for (; varBracketEnd < src.length; varBracketEnd++) {
                        if (src[varBracketEnd] === '[') d3++;
                        if (src[varBracketEnd] === ']') { d3--; if (d3 === 0) break; }
                    }

                    const existingContent = src.slice(varBracketStart + 1, varBracketEnd).trim();
                    const separator = existingContent.length > 0 ? ', ' : '';
                    src = src.slice(0, varBracketEnd) + separator + newVariants.join(', ') + src.slice(varBracketEnd);

                    console.log(`MERGE ${brand.name}: ${dup.id} -> ${primary.id} (${newVariants.length} variants)`);
                    totalMerged++;
                }
            }

            // Remove the duplicate model entry from src
            const dupPattern = `id: '${dup.id}',`;
            const dupIdx = src.indexOf(dupPattern, brandStart);
            if (dupIdx >= 0) {
                // Find the start of this model object (walk back to find {)
                let objStart = dupIdx;
                while (objStart > 0 && src[objStart] !== '{') objStart--;
                // Also consume leading whitespace/newline
                let wsStart = objStart;
                while (wsStart > 0 && (src[wsStart - 1] === ' ' || src[wsStart - 1] === '\n' || src[wsStart - 1] === '\r' || src[wsStart - 1] === '\t')) wsStart--;
                // If there's a comma before, consume it
                if (wsStart > 0 && src[wsStart - 1] === ',') wsStart--;

                // Find the end of this model object
                let d4 = 0, objEnd = objStart;
                for (; objEnd < src.length; objEnd++) {
                    if (src[objEnd] === '{') d4++;
                    if (src[objEnd] === '}') { d4--; if (d4 === 0) break; }
                }
                // Also consume trailing comma if present
                let trailEnd = objEnd + 1;
                while (trailEnd < src.length && (src[trailEnd] === ',' || src[trailEnd] === ' ' || src[trailEnd] === '\n' || src[trailEnd] === '\r' || src[trailEnd] === '\t')) trailEnd++;

                src = src.slice(0, wsStart) + '\n            ' + src.slice(trailEnd);
                console.log(`REMOVE dup model: ${brand.name} / ${dup.id}`);
            }
        }
    }
}

// Also fix BMW 3-series-e46 duplicate
// The E46 entry should be merged into 3-series
const e46pat = "id: '3-series-e46'";
if (src.includes(e46pat)) {
    const e46idx = src.indexOf(e46pat);
    const e46varStart = src.indexOf('[', src.indexOf('variants:', e46idx));
    let d5 = 0, e46varEnd = e46varStart;
    for (; e46varEnd < src.length; e46varEnd++) { if (src[e46varEnd] === '[') d5++; if (src[e46varEnd] === ']') { d5--; if (d5 === 0) break; } }
    const e46variants = src.slice(e46varStart + 1, e46varEnd).trim();

    // Add to 3-series
    const s3idx = src.indexOf("id: '3-series'");
    if (s3idx >= 0) {
        const s3varStart = src.indexOf('[', src.indexOf('variants:', s3idx));
        let d6 = 0, s3varEnd = s3varStart;
        for (; s3varEnd < src.length; s3varEnd++) { if (src[s3varEnd] === '[') d6++; if (src[s3varEnd] === ']') { d6--; if (d6 === 0) break; } }
        src = src.slice(0, s3varEnd) + ', ' + e46variants + src.slice(s3varEnd);

        // Remove 3-series-e46 model
        let e46obj = src.indexOf(e46pat);
        let objS = e46obj;
        while (objS > 0 && src[objS] !== '{') objS--;
        let wsS = objS;
        while (wsS > 0 && (src[wsS - 1] === ' ' || src[wsS - 1] === '\n' || src[wsS - 1] === '\r' || src[wsS - 1] === '\t')) wsS--;
        if (wsS > 0 && src[wsS - 1] === ',') wsS--;
        let d7 = 0, objE = objS;
        for (; objE < src.length; objE++) { if (src[objE] === '{') d7++; if (src[objE] === '}') { d7--; if (d7 === 0) break; } }
        let tE = objE + 1;
        while (tE < src.length && (src[tE] === ',' || src[tE] === ' ' || src[tE] === '\n' || src[tE] === '\r' || src[tE] === '\t')) tE++;
        src = src.slice(0, wsS) + '\n            ' + src.slice(tE);
        console.log('MERGE BMW: 3-series-e46 -> 3-series');
        totalMerged++;
    }
}

fs.writeFileSync(file, src, 'utf-8');
console.log(`\nDone! Merged ${totalMerged} duplicate model entries.`);
