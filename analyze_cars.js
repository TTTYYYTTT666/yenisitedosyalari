const fs = require('fs');
const content = fs.readFileSync('src/data/cars.ts', 'utf8');

// Regex to find issues array
// Matches: issues: [ ... ]
// We need to be careful about nested brackets, but the structure seems consistent.
// We'll iterate through the file line by line for simplicity and robustness.

const lines = content.split('\n');
let carCount = 0;
let issueCounts = {};

let insideIssues = false;
let currentIssueCount = 0;
let currentCarId = '';

for (const line of lines) {
    if (line.trim().startsWith('id:')) {
        currentCarId = line.split("'")[1] || line.split('"')[1];
    }

    if (line.includes('issues: [')) {
        insideIssues = true;
        currentIssueCount = 0;
        // Check if it closes on the same line
        if (line.includes(']')) {
            // Count objects in one line
            const matches = line.match(/{/g);
            currentIssueCount = matches ? matches.length : 0;
            insideIssues = false;
            if (!issueCounts[currentIssueCount]) issueCounts[currentIssueCount] = 0;
            issueCounts[currentIssueCount]++;
        }
    } else if (insideIssues) {
        if (line.trim().startsWith(']')) {
            insideIssues = false;
            if (!issueCounts[currentIssueCount]) issueCounts[currentIssueCount] = 0;
            issueCounts[currentIssueCount]++;
        } else if (line.trim().startsWith('{')) {
            currentIssueCount++;
        }
    }
}

console.log('Total Cars:', Object.values(issueCounts).reduce((a, b) => a + b, 0));
console.log('Issue Distribution:');
for (const [count, num] of Object.entries(issueCounts)) {
    console.log(`${count} issues: ${num} cars`);
}
