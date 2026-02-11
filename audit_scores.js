const fs = require('fs');
const path = require('path');

const filePath = path.join('src', 'data', 'cars.ts');
const fileContent = fs.readFileSync(filePath, 'utf8');

// Regex to extract car objects
// This is a rough parser, assuming standard formatting in the file
const carRegex = /{\s*id: '([^']+)',[\s\S]*?model: '([^']+)',[\s\S]*?variant: '([^']+)',[\s\S]*?reliabilityScore: (\d+),[\s\S]*?totalIssues: (\d+),/g;

let match;
const cars = [];

while ((match = carRegex.exec(fileContent)) !== null) {
    cars.push({
        id: match[1],
        model: match[2],
        variant: match[3],
        score: parseInt(match[4]),
        issues: parseInt(match[5])
    });
}

// Sort by score descending to find "suspiciously high" scores
cars.sort((a, b) => b.score - a.score);

console.log('--- RELIABILITY SCORE AUDIT ---');
console.log('Model | Variant | Score | Issues');
console.log('--------------------------------');
cars.forEach(c => {
    // Highlight potential issues
    let flag = '';
    if (c.model.includes('BMW') && c.score > 75) flag = ' [CHECK BMW]';
    if (c.model.includes('Land Rover') && c.score > 70) flag = ' [CHECK LR]';
    if (c.variant.includes('DSG') && c.score > 80) flag = ' [CHECK DSG]';
    if (c.variant.includes('TSI') && c.score > 80) flag = ' [CHECK TSI]';
    if (c.variant.includes('THP') && c.score > 70) flag = ' [CHECK THP]';

    // Only print interesting ones to save context
    if (c.score > 70 || c.issues < 3) {
        console.log(`${c.model} ${c.variant} | ${c.score} | ${c.issues}${flag}`);
    }
});
