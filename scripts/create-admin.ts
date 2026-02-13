
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
    const username = 'dexaxtalhakronik';
    const password = 'Talha.0715';
    // We'll use the username as the email field for this special user, 
    // or we can just use a fake email since we modified the login to accept "text".
    // However, Prisma schema has email as @unique String?. 
    // Let's use a fake email but store the username in the 'name' field effectively, 
    // OR just use the username in the email field if it validates (Prisma doesn't validate email format by default).
    const email = 'dexaxtalhakronik';

    console.log(`Creating/Updating Admin User: ${username}`);

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.upsert({
        where: { email: email },
        update: {
            password: hashedPassword,
            role: 'ADMIN',
            name: 'Talha (Admin)',
            emailVerified: new Date(),
        },
        create: {
            email: email,
            password: hashedPassword,
            role: 'ADMIN',
            name: 'Talha (Admin)',
            emailVerified: new Date(),
        },
    });

    console.log('✅ Admin user ready:', user);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
