
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as fs from 'fs';
import * as path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Define types locally to avoid import issues
interface Issue {
    id: string;
    title: string;
    description: string;
    category: 'motor' | 'sanziman' | 'elektronik' | 'suspansiyon' | 'govde' | 'fren' | 'diger';
    riskLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
    affectedKm: string;
    repairCost: string;
}

interface Car {
    id: string;
    slug: string;
    brand: string;
    model: string;
    variant: string;
    years: string;
    generation: string;
    expertNote?: string;
    price: number;
    reliabilityScore: number;
    totalIssues: number;
    searchCount: number;
    issues: Issue[];
    pros: string[];
    cons: string[];
    buyingTips: string[];
}

const carsFilePath = path.join(__dirname, '../src/data/cars.ts');

try {
    const fileContent = fs.readFileSync(carsFilePath, 'utf-8');

    // Extract the cars array using bracket counting
    const startMarker = 'export const cars: Car[] = [';
    const startIndex = fileContent.indexOf(startMarker);

    if (startIndex === -1) {
        throw new Error('Could not find start of cars array');
    }

    const arrayStartIndex = startIndex + startMarker.length - 1; // points to '['
    let bracketCount = 0;
    let arrayEndIndex = -1;

    for (let i = arrayStartIndex; i < fileContent.length; i++) {
        if (fileContent[i] === '[') {
            bracketCount++;
        } else if (fileContent[i] === ']') {
            bracketCount--;
            if (bracketCount === 0) {
                arrayEndIndex = i + 1; // Include the closing ']'
                break;
            }
        }
    }

    if (arrayEndIndex === -1) {
        throw new Error('Could not find end of cars array');
    }

    const carsArrayString = fileContent.substring(arrayStartIndex, arrayEndIndex);

    // Evaluate the array string to get the JS object
    // Using eval is safe here as it's a local file we control
    const cars: Car[] = eval(carsArrayString);

    console.log(`Initial total cars: ${cars.length}`);
    let totalIssuesRemoved = 0;

    const cleanedCars = cars.map(car => {
        const uniqueIssues: Issue[] = [];
        const seenTitles = new Set<string>();

        // Sort issues by description length descending to keep the most detailed one if duplicates exist
        const sortedIssues = [...car.issues].sort((a, b) => b.description.length - a.description.length);

        for (const issue of sortedIssues) {
            // Normalize title for comparison
            const normalizedTitle = issue.title.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "").trim();

            if (!seenTitles.has(normalizedTitle)) {
                seenTitles.add(normalizedTitle);
                uniqueIssues.push(issue);
            } else {
                // console.log(`Removing duplicate issue for ${car.id}: "${issue.title}" (ID: ${issue.id})`);
                totalIssuesRemoved++;
            }
        }

        return {
            ...car,
            issues: uniqueIssues,
            totalIssues: uniqueIssues.length
        };
    });

    console.log(`Total duplicate issues removed: ${totalIssuesRemoved}`);

    // Reconstruct the file content
    // Use a custom stringify to handle single quotes preference usually found in TS code
    const newCarsArrayString = JSON.stringify(cleanedCars, null, 4)
        .replace(/"([a-zA-Z_]\w+)":/g, '$1:') // Unquote simple keys
        .replace(/"/g, "'") // Convert outer double quotes to single
    // Fix breakdown: The above line converts "value" to 'value'. 
    // If value was "I'm", JSON.stringify made it "I'm".
    // The replace makes it 'I'm', which is a syntax error.
    // We need to escape existing single quotes first?
    // JSON.stringify escapes double quotes (e.g. "He said \"Hi\"").
    // It does NOT escape single quotes.
    // So "Türkiye'nin" becomes "Türkiye'nin".
    // We want 'Türkiye\'nin'.

    // Let's implement a safer replacement.
    // We can iterate the JSON string, identify string values, and swap quotes while escaping content.
    // Or simpler: Leave it as double quotes! It's valid TS.
    // But to be nice, let's try to fix it.
    // Actually, simply leaving double quotes is the safest and valid.
    // The previous file used single quotes, but double is fine.

    const safeCarsArrayString = JSON.stringify(cleanedCars, null, 4)
        .replace(/"([a-zA-Z_]\w+)":/g, '$1:'); // Only unquote keys. Leave strings as double quotes.

    const newFileContent = fileContent.replace(carsArrayString, safeCarsArrayString);

    fs.writeFileSync(carsFilePath, newFileContent, 'utf-8');
    console.log('Successfully updated cars.ts');

} catch (error) {
    console.error('Error processing file:', error);
}
