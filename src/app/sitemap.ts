import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://botdosenpai.com.br/',
            lastModified: "2025-04-08T05:50:59+01:00",
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://botdosenpai.com.br/about',
            lastModified: "2025-04-08T05:50:59+01:00",
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: 'https://botdosenpai.com.br/termo-de-uso',
            lastModified: "2025-04-08T05:50:59+01:00",
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: 'https://botdosenpai.com.br/privacidade',
            lastModified: "2025-04-08T05:50:59+01:00",
            changeFrequency: 'monthly',
            priority: 1,
        }, {
            url: 'https://botdosenpai.com.br/thanks',
            lastModified: "2025-08-03T05:50:59+01:00",
            changeFrequency: 'monthly',
            priority: 1,
        },
    ]
}
