const fs = require('fs'), p = require('path');
const D = p.join(__dirname, '..', 'src', 'data', 'cars');
const brandsFile = p.join(__dirname, '..', 'src', 'data', 'brands.ts');

// 1) Collect all slugs from car data files
const files = fs.readdirSync(D).filter(f => f.endsWith('.ts') && f !== 'index.ts');
const allSlugs = []; // {slug, file}
const duplicates = [];

for (const file of files) {
    const content = fs.readFileSync(p.join(D, file), 'utf-8');
    // Match both formats: slug: "xxx" and "slug": "xxx"
    const matches = content.matchAll(/["']?slug["']?\s*:\s*["']([^"']+)["']/g);
    for (const m of matches) {
        const slug = m[1];
        const existing = allSlugs.find(s => s.slug === slug);
        if (existing) {
            duplicates.push({ slug, file1: existing.file, file2: file });
        } else {
            allSlugs.push({ slug, file });
        }
    }
}

console.log(`\n=== TOPLAM ARAÇ: ${allSlugs.length} ===\n`);

// 2) Check for duplicates
console.log('--- KOPYA ARAÇLAR ---');
if (duplicates.length === 0) {
    console.log('✅ Kopya araç YOK\n');
} else {
    duplicates.forEach(d => console.log(`❌ KOPYA: "${d.slug}" -> ${d.file1} & ${d.file2}`));
    console.log();
}

// 3) Collect all slugs from brands.ts
const brandsContent = fs.readFileSync(brandsFile, 'utf-8');
const brandSlugs = new Set();
const brandSlugMatches = brandsContent.matchAll(/slug:\s*'([^']+)'/g);
for (const m of brandSlugMatches) {
    brandSlugs.add(m[1]);
}

// 4) Find cars in data files but NOT in brands.ts
console.log('--- VERİ DOSYASINDA VAR AMA BRANDS.TS\'DE YOK (gösterilmiyor) ---');
const missing = allSlugs.filter(s => !brandSlugs.has(s.slug));
if (missing.length === 0) {
    console.log('✅ Tüm araçlar brands.ts\'de listeleniyor\n');
} else {
    missing.forEach(m => console.log(`⚠️  EKSİK: "${m.slug}" (${m.file})`));
    console.log(`\nToplam eksik: ${missing.length}\n`);
}

// 5) Find slugs in brands.ts but NOT in data files
console.log('--- BRANDS.TS\'DE VAR AMA VERİ DOSYASINDA YOK (kırık link) ---');
const dataSlugSet = new Set(allSlugs.map(s => s.slug));
const orphans = [...brandSlugs].filter(s => !dataSlugSet.has(s));
if (orphans.length === 0) {
    console.log('✅ Tüm brands.ts linkleri geçerli\n');
} else {
    orphans.forEach(o => console.log(`❌ KIRIK: "${o}" (brands.ts'de var ama veri dosyasında yok)`));
    console.log(`\nToplam kırık: ${orphans.length}\n`);
}
