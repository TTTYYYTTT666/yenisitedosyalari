// Script to generate n8n API key
// Run with: npx ts-node scripts/generate-api-key.ts

import { PrismaClient } from '@prisma/client';
import crypto from 'crypto';

const prisma = new PrismaClient();

async function main() {
    const apiKey = `krn_${crypto.randomBytes(32).toString('hex')}`;

    const key = await prisma.apiKey.create({
        data: {
            name: 'n8n-automation',
            key: apiKey,
            isActive: true
        }
    });

    console.log('============================================');
    console.log('n8n API Key Created Successfully!');
    console.log('============================================');
    console.log('');
    console.log('API Key:', apiKey);
    console.log('');
    console.log('Use this key in n8n HTTP Header:');
    console.log('Header Name: x-api-key');
    console.log('Header Value:', apiKey);
    console.log('');
    console.log('============================================');
    console.log('IMPORTANT: Save this key securely!');
    console.log('You will not be able to see it again.');
    console.log('============================================');
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
