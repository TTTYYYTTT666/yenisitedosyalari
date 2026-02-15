
import { cars } from '../src/data/cars/index';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log(`Starting migration of ${cars.length} cars...`);

    for (const car of cars as any[]) {
        console.log(`Migrating: ${car.brand} ${car.model} (${car.slug})`);

        try {
            // Check if car exists to update or create
            const existing = await prisma.car.findUnique({
                where: { slug: car.slug }
            });

            const carData = {
                slug: car.slug,
                brand: car.brand,
                model: car.model,
                variant: car.variant,
                years: car.years,
                generation: car.generation,
                image: car.image,
                expertNote: car.expertNote,
                price: car.price,
                reliabilityScore: car.reliabilityScore,
                searchCount: car.searchCount || 0,

                pros: JSON.stringify(car.pros || []),
                cons: JSON.stringify(car.cons || []),
                buyingTips: JSON.stringify(car.buyingTips || []),
            };

            const issueData = car.issues?.map((issue: any) => ({
                title: issue.title,
                description: issue.description,
                category: issue.category,
                riskLevel: issue.riskLevel,
                affectedKm: issue.affectedKm,
                repairCost: issue.repairCost
            })) || [];

            if (existing) {
                // Update basic info
                await prisma.car.update({
                    where: { slug: car.slug },
                    data: carData
                });

                // Delete old issues and recreate with new data
                await prisma.carIssue.deleteMany({
                    where: { carId: existing.id }
                });

                // Create new issues
                for (const issue of issueData) {
                    await prisma.carIssue.create({
                        data: {
                            ...issue,
                            carId: existing.id
                        }
                    });
                }

                console.log(`Updated: ${car.slug} (${issueData.length} issues)`);
            } else {
                // Create new with issues
                await prisma.car.create({
                    data: {
                        ...carData,
                        issues: {
                            create: issueData
                        }
                    }
                });
                console.log(`Created: ${car.slug} (${issueData.length} issues)`);
            }
        } catch (error) {
            console.error(`Failed to migrate ${car.slug}:`, error);
        }
    }

    console.log('Migration completed.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
