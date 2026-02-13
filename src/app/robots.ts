import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/admin/', '/bilgilerim/', '/profil-tamamla/'],
        },
        sitemap: 'https://otoraporu.net/sitemap.xml',
    }
}
