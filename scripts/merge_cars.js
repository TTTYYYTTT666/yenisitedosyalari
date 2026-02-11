const fs = require('fs');
const path = require('path');

const carsFilePath = path.join(__dirname, '../src/data/cars.ts');
let fileContent = fs.readFileSync(carsFilePath, 'utf8');

// Regex to find start of cars array
// Matches "export const cars: Car[] = [" or similar with spacing
const startRegex = /export\s+const\s+cars\s*:\s*Car\[\]\s*=\s*\[/;
const startMatch = fileContent.match(startRegex);

if (!startMatch) {
    console.error("Could not find cars array start (export const cars: Car[] = [).");
    process.exit(1);
}

const startIndex = startMatch.index;
const startMarkerLength = startMatch[0].length;

// Find successsive export to determine end boundary
const nextExportRegex = /export\s+const\s+(?!cars\s*:)/g;
nextExportRegex.lastIndex = startIndex + startMarkerLength;
const nextExportMatch = nextExportRegex.exec(fileContent);

let endBoundaryIndex = nextExportMatch ? nextExportMatch.index : fileContent.length;

// Extract the block containing the array
let arrayBlock = fileContent.substring(startIndex, endBoundaryIndex);

// Find the last "];" in this block which signifies the end of the array
const lastBracketIndex = arrayBlock.lastIndexOf('];');

if (lastBracketIndex === -1) {
    console.error("Could not find end of cars array (];).");
    process.exit(1);
}

// The clean array content (from [ to ])
let arrayString = arrayBlock.substring(arrayBlock.indexOf('['), lastBracketIndex + 1);

// Sanitize for eval
// We need to allow it to parse. 
// Remove comments? TS files might have comments.
// We can use a simple regex to strip single line comments if they are at end of line
let cleanJs = arrayString
    .replace(/\/\/.*$/gm, '') // Remove single line comments
    .replace(/\/\*[\s\S]*?\*\//g, ''); // Remove block comments

let cars = [];
try {
    cars = eval(cleanJs);
} catch (e) {
    console.error("Error evaluating cars array:", e.message);
    fs.writeFileSync('debug_cars_eval.js', 'module.exports = ' + cleanJs);
    process.exit(1);
}

console.log(`Initial car count: ${cars.length}`);

// DEDUPLICATION
const mergedCars = [];
const seenSlugs = new Map();

// Helper to determine better value
function pickBetter(oldVal, newVal) {
    if (!oldVal && !newVal) return undefined;
    if (!oldVal) return newVal;
    if (!newVal) return oldVal;
    // Prefer longer strings for description/expertNote
    if (typeof oldVal === 'string' && typeof newVal === 'string') {
        return newVal.length > oldVal.length ? newVal : oldVal;
    }
    // Prefer newer value generally for scalars (numbers/booleans etc)
    return newVal;
}

cars.forEach(car => {
    if (seenSlugs.has(car.slug)) {
        const existing = seenSlugs.get(car.slug);
        console.log(`Merging duplicate: ${car.slug}`);

        // Merge Issues logic improved
        const existingIssueIds = new Set(existing.issues.map(i => i.id));

        if (car.issues && Array.isArray(car.issues)) {
            car.issues.forEach(issue => {
                if (!issue.id) {
                    // Generate ID if missing? Should not happen based on types
                    issue.id = 'issue-' + Math.random().toString(36).substr(2, 9);
                }

                if (!existingIssueIds.has(issue.id)) {
                    // New ID entirely, safe to add
                    existing.issues.push(issue);
                    existingIssueIds.add(issue.id);
                } else {
                    // ID Collision!
                    const existingIssue = existing.issues.find(i => i.id === issue.id);

                    // Compare content (Title)
                    const title1 = (existingIssue.title || '').trim().toLowerCase();
                    const title2 = (issue.title || '').trim().toLowerCase();

                    if (title1 !== title2) {
                        // Different issue content with SAME ID. Keep both.
                        let newId = issue.id + '-m'; // suffix for merge
                        // Ensure unique
                        let suffix = 1;
                        while (existingIssueIds.has(newId)) {
                            newId = issue.id + '-m' + suffix++;
                        }

                        const newIssue = { ...issue, id: newId };
                        existing.issues.push(newIssue);
                        existingIssueIds.add(newId);
                        // console.log(`  Resolved ID collision: ${issue.id} -> ${newId} (${issue.title})`);
                    } else {
                        // Same content, likely duplicate entry or update.
                        // Update if new description is longer/better
                        if (issue.description && (!existingIssue.description || issue.description.length > existingIssue.description.length)) {
                            existingIssue.description = issue.description;
                            existingIssue.repairCost = issue.repairCost || existingIssue.repairCost;
                            existingIssue.riskLevel = issue.riskLevel || existingIssue.riskLevel;
                        }
                    }
                }
            });
        }

        // Merge arrays
        ['buyingTips', 'pros', 'cons'].forEach(field => {
            if (car[field]?.length) {
                const set = new Set(existing[field] || []);
                car[field].forEach(item => {
                    if (!item) return;
                    if (!set.has(item)) {
                        existing[field].push(item);
                        set.add(item);
                    }
                });
            }
        });

        // Update scalars
        if (car.expertNote && (!existing.expertNote || car.expertNote.length > existing.expertNote.length)) {
            existing.expertNote = car.expertNote;
        }

        // Price update: prefer the NEW one (car.price) explicitly
        if (car.price) existing.price = car.price;

        if (car.reliabilityScore) existing.reliabilityScore = car.reliabilityScore;

        // Keep verification details
        if (car.generation) existing.generation = car.generation;
        if (car.variant && car.variant !== existing.variant) {
            // Maybe append variant info? Or replace. Replacing is safer for consistency.
            existing.variant = car.variant;
        }
    } else {
        seenSlugs.set(car.slug, car);
        mergedCars.push(car);
    }
});

// PRICE NORMALIZATION
mergedCars.forEach(car => {
    if (!car.price) car.price = 0;

    // Tofas specific
    if (car.brand.toLowerCase() === 'tofas') {
        if (car.price < 200000) car.price = 250000;
        if (car.price > 600000) car.price = 450000;
    } else {
        // General min price
        if (car.price < 300000) {
            car.price = 850000; // Default min for drivable car
        }
    }

    // Round to nearest 10k
    car.price = Math.round(car.price / 10000) * 10000;
});

console.log(`Merged car count: ${mergedCars.length}`);

// SERIALIZATION
function escapeSingleQuotes(str) {
    if (!str) return '';
    return str.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n');
}

let newArrayContent = "[\n";
mergedCars.forEach((car, index) => {
    newArrayContent += "    {\n";
    const keys = ['id', 'slug', 'brand', 'model', 'variant', 'years', 'generation', 'expertNote', 'price', 'reliabilityScore', 'totalIssues', 'searchCount', 'issues', 'pros', 'cons', 'buyingTips'];

    keys.forEach(key => {
        if (car[key] !== undefined) {
            let valueStr = '';
            if (key === 'issues') {
                valueStr = "[\n" + car.issues.map(i => {
                    return `            { id: '${i.id}', title: '${escapeSingleQuotes(i.title)}', description: '${escapeSingleQuotes(i.description)}', category: '${i.category}', riskLevel: '${i.riskLevel}', affectedKm: '${escapeSingleQuotes(i.affectedKm)}', repairCost: '${escapeSingleQuotes(i.repairCost)}' }`;
                }).join(",\n") + "\n        ]";
            } else if (Array.isArray(car[key])) {
                valueStr = "[" + (car[key] || []).map(s => `'${escapeSingleQuotes(s)}'`).join(", ") + "]";
            } else if (typeof car[key] === 'string') {
                valueStr = `'${escapeSingleQuotes(car[key])}'`;
            } else {
                valueStr = car[key];
            }
            newArrayContent += `        ${key}: ${valueStr},\n`;
        }
    });

    newArrayContent = newArrayContent.slice(0, -2) + "\n";
    newArrayContent += "    }" + (index < mergedCars.length - 1 ? "," : "") + "\n";
});
newArrayContent += "];";

const header = fileContent.substring(0, startIndex);
// Find exactly where the old array block ended to splice correctly
const footer = fileContent.substring(startIndex + arrayBlock.lastIndexOf('];') + 2);

const newFileContent = header + "export const cars: Car[] = " + newArrayContent + footer;

fs.writeFileSync(carsFilePath, newFileContent, 'utf8');
console.log("Successfully wrote updated cars.ts");
