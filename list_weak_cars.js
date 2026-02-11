const fs = require('fs');
const content = fs.readFileSync('src/data/cars.ts', 'utf8');

const lines = content.split('\n');
let currentCarId = '';
let currentCarSlug = '';
let insideIssues = false;
let currentIssueCount = 0;

console.log('--- CARS WITH 1 ISSUE ---');

for (const line of lines) {
    if (line.trim().startsWith('slug:')) {
        currentCarSlug = line.split("'")[1] || line.split('"')[1];
    }

    if (line.includes('issues: [')) {
        insideIssues = true;
        currentIssueCount = 0;
        if (line.includes(']')) {
            const matches = line.match(/{/g);
            currentIssueCount = matches ? matches.length : 0;
            insideIssues = false;
            // Check count immediately for single-line arrays
            if (currentIssueCount === 1) {
                console.log(currentCarSlug);
            }
        }
    } else if (insideIssues) {
        if (line.trim().startsWith(']')) {
            insideIssues = false;
            if (currentIssueCount === 1) {
                console.log(currentCarSlug);
            }
        } else if (line.trim().startsWith('{')) {
            currentIssueCount++;
        }
    }
}
