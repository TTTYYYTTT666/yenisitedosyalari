import { loadEnvConfig } from '@next/env';
import fs from 'fs';

// Load env vars
loadEnvConfig(process.cwd());

console.log('--- Checking Auth Environment Variables ---');

const requiredVars = [
    'NEXTAUTH_URL',
    'NEXTAUTH_SECRET',
    'GOOGLE_CLIENT_ID',
    'GOOGLE_CLIENT_SECRET',
    'DATABASE_URL',
    'NEXT_PUBLIC_CLOUDFLARE_SITE_KEY',
    'CLOUDFLARE_SECRET_KEY'
];

let hasError = false;

requiredVars.forEach((key) => {
    const val = process.env[key];
    if (!val) {
        console.error(`❌ MISSING: ${key}`);
        hasError = true;
    } else {
        // Redact secrets
        const displayVal = (key.includes('SECRET') || key.includes('KEY'))
            ? val.substring(0, 4) + '****************'
            : val;
        console.log(`✅ FOUND: ${key} = ${displayVal}`);

        if (key === 'NEXTAUTH_URL' && val.includes('localhost')) {
            console.warn(`⚠️ WARNING: NEXTAUTH_URL is set to localhost (${val}). This will likely fail on production.`);
        }
    }
});

if (process.env.AUTH_TRUST_HOST !== 'true') {
    console.warn('⚠️ WARNING: AUTH_TRUST_HOST is not set to "true". If running behind a proxy (IIS/Nginx), login might fail.');
} else {
    console.log('✅ AUTH_TRUST_HOST is set to "true". Good for proxies.');
}

if (hasError) {
    console.log('\n❌ Environment check FAILED. Please fix the missing variables in .env file.');
    process.exit(1);
} else {
    console.log('\n✅ Environment check PASSED. Variables appear to be set.');
}
