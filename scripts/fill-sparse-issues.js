const fs = require('fs');
const path = require('path');

// Issue templates by category/brand context
const issueTemplates = {
    // Motor issues
    motor_benzin: [
        { title: "Yağ Eksiltme", description: "Motor yağının servis aralarında eksilmesi. Düzenli kontrol şart.", category: "motor", riskLevel: "MEDIUM", affectedKm: "100.000+ km", repairCost: "Segman / 5.000 - 15.000 TL" },
        { title: "Buji/Ateşleme Bobini", description: "Buji veya ateşleme bobini arızası. Rölantide titreşim ve performans kaybı.", category: "motor", riskLevel: "LOW", affectedKm: "60.000+ km", repairCost: "2.000 - 5.000 TL" },
        { title: "Termostat Arızası", description: "Motor sıcaklık göstergesinde dalgalanma. Termostat takılı kalması.", category: "motor", riskLevel: "MEDIUM", affectedKm: "80.000+ km", repairCost: "3.000 - 8.000 TL" },
        { title: "Yağ Filtre Kapağı Sızıntısı", description: "Plastik yağ filtre kapağından sızıntı. Motor bölmesinde yağ izi.", category: "motor", riskLevel: "LOW", affectedKm: "60.000+ km", repairCost: "2.000 - 5.000 TL" },
        { title: "Soğutma Sıvısı Kaçağı", description: "Plastik hortum bağlantılarından soğutma sıvısı sızıntısı.", category: "motor", riskLevel: "MEDIUM", affectedKm: "80.000+ km", repairCost: "3.000 - 8.000 TL" },
    ],
    motor_dizel: [
        { title: "DPF Tıkanması", description: "Şehir içi kısa mesafe kullanımda DPF filtresinin dolması.", category: "motor", riskLevel: "MEDIUM", affectedKm: "Şehir içi kullanım", repairCost: "5.000 - 12.000 TL" },
        { title: "EGR Valfi Karbon Birikimi", description: "EGR valfinde karbon birikmesi. Motor performans kaybı ve titreşim.", category: "motor", riskLevel: "MEDIUM", affectedKm: "80.000+ km", repairCost: "5.000 - 10.000 TL" },
        { title: "Enjektör Tıkanması", description: "Enjektörlerin kirlenme veya tıkanması. Motor hırçın çalışma.", category: "motor", riskLevel: "MEDIUM", affectedKm: "100.000+ km", repairCost: "8.000 - 20.000 TL" },
        { title: "Turbo Yağ Kaçağı", description: "Turbo bağlantı noktalarından yağ sızıntısı.", category: "motor", riskLevel: "MEDIUM", affectedKm: "80.000+ km", repairCost: "5.000 - 15.000 TL" },
        { title: "AdBlue Sistemi", description: "AdBlue pompası veya sensör arızası. Motor güç kısıtlaması.", category: "motor", riskLevel: "MEDIUM", affectedKm: "60.000+ km", repairCost: "10.000 - 25.000 TL" },
    ],
    motor_hybrid: [
        { title: "12V Akü Boşalması", description: "Hibrit sistemin 12V yardımcı aküyü hızla tüketmesi. Araç yatabilir.", category: "elektronik", riskLevel: "MEDIUM", affectedKm: "Rastgele", repairCost: "2.500 - 5.000 TL" },
        { title: "Hibrit Batarya Fan Sesi", description: "Hibrit batarya soğutma fanının yüksek sesle çalışması.", category: "elektronik", riskLevel: "LOW", affectedKm: "Yaz ayları", repairCost: "Fan temizliği / 3.000 TL" },
        { title: "Rejeneratif Fren Hissi", description: "Rejeneratif frenlemenin suni ve alışılmadık hissettirmesi.", category: "fren", riskLevel: "LOW", affectedKm: "Karakteristik", repairCost: "Normal (Tasarım)" },
        { title: "Motor/Elektrik Geçiş Sarsıntısı", description: "Benzin ve elektrik motoru geçişlerinde hafif sarsıntı.", category: "motor", riskLevel: "LOW", affectedKm: "Karakteristik", repairCost: "Normal" },
    ],
    motor_ev: [
        { title: "12V Akü Boşalması", description: "12V yardımcı akünün uzun park halinde boşalması.", category: "elektronik", riskLevel: "MEDIUM", affectedKm: "Rastgele", repairCost: "3.000 - 5.000 TL" },
        { title: "Şarj Kapağı Sorunu", description: "Şarj kapağının donması veya mekanik olarak açılmaması.", category: "govde", riskLevel: "LOW", affectedKm: "Kış ayları", repairCost: "1.500 - 3.000 TL" },
        { title: "Kış Menzil Kaybı", description: "Soğuk havalarda menzilde %20-30 düşüş.", category: "elektronik", riskLevel: "LOW", affectedKm: "Karakteristik", repairCost: "Normal (Batarya fiziği)" },
    ],
    // Şanzıman
    sanziman_otomatik: [
        { title: "Şanzıman Sarsıntısı", description: "Otomatik şanzımanda vites geçişlerinde sarsıntı veya gecikme.", category: "sanziman", riskLevel: "MEDIUM", affectedKm: "80.000+ km", repairCost: "Yağ değişimi / 5.000 - 15.000 TL" },
    ],
    sanziman_dct: [
        { title: "DCT Kavrama Titremesi", description: "Çift kavramalı şanzımanda düşük hızlarda titreşim.", category: "sanziman", riskLevel: "MEDIUM", affectedKm: "40.000+ km", repairCost: "10.000 - 25.000 TL" },
    ],
    sanziman_cvt: [
        { title: "CVT Sesi", description: "CVT şanzımandan hızlanmada uğultu sesi.", category: "sanziman", riskLevel: "LOW", affectedKm: "Karakteristik", repairCost: "Normal (Tasarım)" },
    ],
    // Genel sorunlar
    suspansiyon: [
        { title: "Süspansiyon Burcu Aşınması", description: "Ön/arka süspansiyon burçlarının aşınması. Kasiste vuruntu sesi.", category: "suspansiyon", riskLevel: "LOW", affectedKm: "60.000+ km", repairCost: "2.000 - 5.000 TL" },
        { title: "Amortisör Yağ Kaçağı", description: "Amortisörlerin yağ kaçırması. Sürüş konforunda azalma.", category: "suspansiyon", riskLevel: "MEDIUM", affectedKm: "80.000+ km", repairCost: "3.000 - 8.000 TL (çift)" },
    ],
    fren: [
        { title: "Fren Disk Eğrilmesi", description: "Fren disklerinin ısınıp eğrilmesi. Frende titreşim hissedilir.", category: "fren", riskLevel: "LOW", affectedKm: "40.000+ km", repairCost: "3.000 - 8.000 TL" },
        { title: "Arka Fren Balata Erken Bitmesi", description: "Arka fren balatalarının beklenenden erken aşınması.", category: "fren", riskLevel: "LOW", affectedKm: "30.000+ km", repairCost: "1.500 - 3.000 TL" },
    ],
    elektronik: [
        { title: "Multimedya Donması", description: "Ekranın donması veya tepkisiz kalması.", category: "elektronik", riskLevel: "LOW", affectedKm: "Rastgele", repairCost: "Yazılım Güncelleme" },
        { title: "Park Sensörü Hatası", description: "Park sensörlerinin yanlış uyarı vermesi veya çalışmaması.", category: "elektronik", riskLevel: "LOW", affectedKm: "Rastgele", repairCost: "1.500 - 3.000 TL" },
        { title: "Lastik Basınç Sensörü", description: "TPMS lastik basınç sensörlerinin pil ömrü bitişi.", category: "elektronik", riskLevel: "LOW", affectedKm: "5+ yıl", repairCost: "3.000 - 6.000 TL (4 adet)" },
    ],
    govde: [
        { title: "Rüzgar Sesi", description: "Yüksek hızlarda kapı fitillerinden veya aynalardan rüzgar sesi.", category: "govde", riskLevel: "LOW", affectedKm: "120+ km/h", repairCost: "Fitil / Yalıtım" },
        { title: "Trim Sesleri", description: "Bozuk yollarda konsol ve kapı panellerinden plastik tıkırtıları.", category: "govde", riskLevel: "LOW", affectedKm: "Bozuk yollar", repairCost: "Yalıtım" },
        { title: "Far Buğulanması", description: "Yağmurlu havalarda far camlarının içinden buğulanma.", category: "govde", riskLevel: "LOW", affectedKm: "Rastgele", repairCost: "Fitil / 1.000 - 3.000 TL" },
    ],
};

function detectMotorType(variant, expertNote = '') {
    const text = (variant + ' ' + (expertNote || '')).toLowerCase();
    if (text.includes('hybrid') || text.includes('hibrit') || text.includes('e-cvt')) return 'hybrid';
    if (text.includes('elektrikli') || text.includes('ev') || text.includes('electric')) return 'ev';
    if (text.includes('dizel') || text.includes('diesel') || text.includes('cdi') || text.includes('hdi') || text.includes('d-4d') || text.includes('crdi') || text.includes('tdi') || text.includes('bluehdi') || text.includes('dci') || text.includes('d4d')) return 'dizel';
    return 'benzin';
}

function detectSanzimanType(variant, expertNote = '') {
    const text = (variant + ' ' + (expertNote || '')).toLowerCase();
    if (text.includes('dct') || text.includes('dsg') || text.includes('çift kavrama') || text.includes('powershift') || text.includes('edc')) return 'dct';
    if (text.includes('cvt') || text.includes('e-cvt') || text.includes('varyatör') || text.includes('multitronic')) return 'cvt';
    if (text.includes('otomatik') || text.includes('automatic') || text.includes('steptronic') || text.includes('tiptronic') || text.includes('9g-tronic') || text.includes('7g-tronic')) return 'otomatik';
    return 'otomatik'; // default
}

function getIssuesForCar(car, existingIssueIds, needed) {
    const motorType = detectMotorType(car.variant, car.expertNote);
    const sanzimanType = detectSanzimanType(car.variant, car.expertNote);

    // Collect candidate templates
    let pool = [];

    // Motor-specific
    if (motorType === 'dizel') pool.push(...issueTemplates.motor_dizel);
    else if (motorType === 'hybrid') pool.push(...issueTemplates.motor_hybrid);
    else if (motorType === 'ev') pool.push(...issueTemplates.motor_ev);
    else pool.push(...issueTemplates.motor_benzin);

    // Şanzıman
    if (sanzimanType === 'dct') pool.push(...issueTemplates.sanziman_dct);
    else if (sanzimanType === 'cvt') pool.push(...issueTemplates.sanziman_cvt);
    else pool.push(...issueTemplates.sanziman_otomatik);

    // General
    pool.push(...issueTemplates.suspansiyon);
    pool.push(...issueTemplates.fren);
    pool.push(...issueTemplates.elektronik);
    pool.push(...issueTemplates.govde);

    // Filter: don't repeat titles already present
    const existingTitles = new Set(existingIssueIds);
    pool = pool.filter(t => !existingTitles.has(t.title));

    // Pick diverse categories
    const selected = [];
    const usedCategories = new Set();

    // First pass: pick one from each category
    for (const t of pool) {
        if (selected.length >= needed) break;
        if (!usedCategories.has(t.category)) {
            usedCategories.add(t.category);
            selected.push(t);
        }
    }

    // Second pass: fill remaining
    for (const t of pool) {
        if (selected.length >= needed) break;
        if (!selected.includes(t)) {
            selected.push(t);
        }
    }

    return selected.slice(0, needed);
}

// Process all brand files
const carsDir = path.join(__dirname, '..', 'src', 'data', 'cars');
const files = fs.readdirSync(carsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts' && !f.startsWith('new-cars'));

let totalCarsFixed = 0;
let totalIssuesAdded = 0;

for (const file of files) {
    const filePath = path.join(carsDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    // Find all car entries with sparse issues
    const carRegex = /(?:slug: "([^"]+)".*?variant: "([^"]+)".*?(?:expertNote: "([^"]*)".*?)?totalIssues: (\d+).*?issues: \[(.*?)\],\s*pros:)/gs;

    let matches = [];
    let match;
    while ((match = carRegex.exec(content)) !== null) {
        const issueBlock = match[5];
        const issueCount = (issueBlock.match(/id: "/g) || []).length;
        const existingTitles = [];
        const titleRegex = /title: "([^"]+)"/g;
        let titleMatch;
        while ((titleMatch = titleRegex.exec(issueBlock)) !== null) {
            existingTitles.push(titleMatch[1]);
        }

        if (issueCount < 4) {
            matches.push({
                fullMatch: match[0],
                slug: match[1],
                variant: match[2],
                expertNote: match[3] || '',
                totalIssues: parseInt(match[4]),
                issueBlock: issueBlock,
                actualCount: issueCount,
                existingTitles: existingTitles,
                index: match.index
            });
        }
    }

    if (matches.length === 0) continue;

    // Process in reverse order to preserve indices
    matches.reverse();

    for (const m of matches) {
        const needed = Math.max(4 - m.actualCount, 2); // Add at least 2, target 4
        const newIssues = getIssuesForCar(
            { variant: m.variant, expertNote: m.expertNote },
            m.existingTitles,
            needed
        );

        if (newIssues.length === 0) continue;

        // Generate issue entries
        const newCount = m.actualCount + newIssues.length;
        const slugBase = m.slug.replace(/^.*?-/, '').replace(/-/g, '-');

        let issueStr = '';
        for (let i = 0; i < newIssues.length; i++) {
            const issue = newIssues[i];
            const issueId = `${slugBase}-auto-${m.actualCount + i + 1}`;
            issueStr += `,\n            {\n                id: "${issueId}",\n                title: "${issue.title}",\n                description: "${issue.description}",\n                category: "${issue.category}",\n                riskLevel: "${issue.riskLevel}",\n                affectedKm: "${issue.affectedKm}",\n                repairCost: "${issue.repairCost}"\n            }`;
        }

        // Find the last closing brace of the last issue in the issues array
        const issuesEndPos = content.lastIndexOf('}', content.indexOf('],', m.index + m.fullMatch.indexOf('issues: [')));

        // Actually, let's use a simpler approach - find the ],\s*pros: pattern after the issues block
        const issuesStart = content.indexOf('issues: [', m.index);
        const prosMatch = content.indexOf('],\n        pros:', issuesStart);
        if (prosMatch === -1) continue;

        // Find the last } before the ],\n        pros:
        let lastBrace = prosMatch - 1;
        while (lastBrace > 0 && content[lastBrace] !== '}') lastBrace--;

        if (lastBrace <= 0) continue;

        // Insert after the last }
        content = content.slice(0, lastBrace + 1) + issueStr + content.slice(lastBrace + 1);

        // Update totalIssues counter
        const totalStr = `totalIssues: ${m.totalIssues}`;
        const newTotalStr = `totalIssues: ${newCount}`;
        const totalPos = content.indexOf(totalStr, m.index > 200 ? m.index - 200 : 0);
        if (totalPos !== -1 && totalPos < issuesStart + 500) {
            content = content.slice(0, totalPos) + newTotalStr + content.slice(totalPos + totalStr.length);
        }

        totalCarsFixed++;
        totalIssuesAdded += newIssues.length;
        console.log(`  ${file}: ${m.slug} (${m.actualCount} -> ${newCount} issues)`);
    }

    fs.writeFileSync(filePath, content, 'utf-8');
}

console.log(`\nDone! Fixed ${totalCarsFixed} cars, added ${totalIssuesAdded} total issues.`);
