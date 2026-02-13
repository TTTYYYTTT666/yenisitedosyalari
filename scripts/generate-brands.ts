import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';

const prisma = new PrismaClient();

// Brand logos mapping
const brandLogos: Record<string, string> = {
    'Tofaş': 'https://upload.wikimedia.org/wikipedia/commons/2/22/Tofas_logo.jpg',
    'Fiat': 'https://logo.clearbit.com/fiat.com',
    'Renault': 'https://logo.clearbit.com/renault.com',
    'Volkswagen': 'https://logo.clearbit.com/volkswagen.com',
    'Honda': 'https://logo.clearbit.com/honda.com',
    'Toyota': 'https://logo.clearbit.com/toyota.com',
    'Hyundai': 'https://logo.clearbit.com/hyundai.com',
    'Ford': 'https://logo.clearbit.com/ford.com',
    'Dacia': 'https://logo.clearbit.com/dacia.com.tr',
    'Peugeot': 'https://logo.clearbit.com/peugeot.com',
    'Skoda': 'https://logo.clearbit.com/skoda-auto.com',
    'Opel': 'https://logo.clearbit.com/opel.com',
    'Citroen': 'https://logo.clearbit.com/citroen.com',
    'Nissan': 'https://logo.clearbit.com/nissan.com.tr',
    'Kia': 'https://logo.clearbit.com/kia.com',
    'BMW': 'https://logo.clearbit.com/bmw.com',
    'Mercedes-Benz': 'https://logo.clearbit.com/mercedes-benz.com',
    'Mercedes': 'https://logo.clearbit.com/mercedes-benz.com',
    'Audi': 'https://logo.clearbit.com/audi.com',
    'Seat': 'https://logo.clearbit.com/seat.com',
    'Volvo': 'https://logo.clearbit.com/volvocars.com',
    'Mazda': 'https://logo.clearbit.com/mazda.com',
    'Jeep': 'https://logo.clearbit.com/jeep.com',
    'Suzuki': 'https://logo.clearbit.com/suzuki.com',
    'MG': 'https://logo.clearbit.com/mgmotor.eu',
    'Cupra': 'https://logo.clearbit.com/cupraofficial.com',
    'Alfa Romeo': 'https://logo.clearbit.com/alfaromeo.com',
    'Mini': 'https://logo.clearbit.com/mini.com',
    'DS': 'https://logo.clearbit.com/dsautomobiles.com',
    'Mitsubishi': 'https://logo.clearbit.com/mitsubishi-motors.com',
    'Togg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/TOGG_logo.svg/2560px-TOGG_logo.svg.png',
    'TOGG': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/TOGG_logo.svg/2560px-TOGG_logo.svg.png',
    'Land Rover': 'https://logo.clearbit.com/landrover.com',
    'Subaru': 'https://logo.clearbit.com/subaru.com',
    'Porsche': 'https://logo.clearbit.com/porsche.com',
    'Jaguar': 'https://logo.clearbit.com/jaguar.com',
    'Chery': 'https://logo.clearbit.com/cheryinternational.com',
    'Tesla': 'https://logo.clearbit.com/tesla.com',
};

async function main() {
    const cars = await prisma.car.findMany({
        select: { slug: true, brand: true, model: true, variant: true, years: true },
        orderBy: [{ brand: 'asc' }, { model: 'asc' }, { variant: 'asc' }]
    });

    // Merge "Mercedes" and "Mercedes-Benz" into one brand
    cars.forEach(c => {
        if (c.brand === 'Mercedes') c.brand = 'Mercedes-Benz';
        if (c.brand === 'TOGG') c.brand = 'Togg';
    });

    // Group by brand -> model -> variants
    const brandMap = new Map<string, Map<string, Array<{ slug: string; variant: string; years: string | null }>>>();

    for (const car of cars) {
        if (!brandMap.has(car.brand)) brandMap.set(car.brand, new Map());
        const modelMap = brandMap.get(car.brand)!;
        if (!modelMap.has(car.model)) modelMap.set(car.model, []);
        modelMap.get(car.model)!.push({ slug: car.slug, variant: car.variant || '', years: car.years || '' });
    }

    // Generate TypeScript
    let output = `import { Brand } from '@/types';\n\nexport const brands: Brand[] = [\n`;

    for (const [brand, modelMap] of brandMap) {
        const brandId = brand.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
        const logo = brandLogos[brand] || '';
        output += `    {\n        id: '${brandId}',\n        name: '${brand}',\n        logo: '${logo}',\n        models: [\n`;

        for (const [model, variants] of modelMap) {
            const modelId = model.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
            const variantStr = variants.map(v => {
                const vid = v.slug;
                const vName = v.variant || model;
                const vYears = v.years || '';
                return `{ id: '${vid}', name: '${vName.replace(/'/g, "\\'")}', years: '${vYears}', slug: '${v.slug}' }`;
            }).join(', ');
            output += `            { id: '${modelId}', name: '${model}', variants: [${variantStr}] },\n`;
        }

        output += `        ]\n    },\n`;
    }

    output += `];\n`;

    const targetPath = path.join(__dirname, '..', 'src', 'data', 'brands.ts');
    fs.writeFileSync(targetPath, output, 'utf-8');
    console.log(`Generated brands.ts with ${brandMap.size} brands`);
    console.log(`Total models: ${Array.from(brandMap.values()).reduce((acc, m) => acc + m.size, 0)}`);
    console.log(`Total variants: ${cars.length}`);
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
