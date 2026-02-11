// Bu script bir kullanıcıyı OWNER yapar
// Kullanım: node scripts/make-owner.js email@example.com

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function makeOwner() {
    const email = process.argv[2];

    if (!email) {
        console.log('Kullanım: node scripts/make-owner.js email@example.com');
        process.exit(1);
    }

    const user = await prisma.user.findUnique({
        where: { email }
    });

    if (!user) {
        console.log(`Kullanıcı bulunamadı: ${email}`);
        process.exit(1);
    }

    await prisma.user.update({
        where: { email },
        data: { role: 'OWNER' }
    });

    console.log(`✅ ${user.name || email} artık OWNER!`);
    await prisma.$disconnect();
}

makeOwner().catch(console.error);
