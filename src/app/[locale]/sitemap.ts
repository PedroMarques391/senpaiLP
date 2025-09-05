import { getPathname } from "@/src/i18n/navigation";
import type { MetadataRoute } from "next";

const host = "https://botdosenpai.com.br";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: host,
            lastModified: new Date(),
            changeFrequency: "monthly",
            alternates: {
                languages: {
                    pt: host + (await getPathname({ locale: "pt", href: "/" })),
                    es: host + (await getPathname({ locale: "es", href: "/" })),
                    ja: host + (await getPathname({ locale: "jp", href: "/" })),
                    en: host + (await getPathname({ locale: "en", href: "/" })),
                },
            },
            priority: 1,
        },
        {
            url: `${host}/about`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            alternates: {
                languages: {
                    pt: host + (await getPathname({ locale: "pt", href: "/about" })),
                    es: host + (await getPathname({ locale: "es", href: "/about" })),
                    ja: host + (await getPathname({ locale: "jp", href: "/about" })),
                    en: host + (await getPathname({ locale: "en", href: "/about" })),
                },
            },
            priority: 0.9,
        },
        {
            url: `${host}/termo-de-uso`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            alternates: {
                languages: {
                    pt: host + (await getPathname({ locale: "pt", href: "/termo-de-uso" })),
                    es: host + (await getPathname({ locale: "es", href: "/termo-de-uso" })),
                    ja: host + (await getPathname({ locale: "jp", href: "/termo-de-uso" })),
                    en: host + (await getPathname({ locale: "en", href: "/termo-de-uso" })),
                },
            },
            priority: 0.6,

        },
        {
            url: `${host}/privacidade`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            alternates: {
                languages: {
                    pt: host + (await getPathname({ locale: "pt", href: "/privacidade" })),
                    es: host + (await getPathname({ locale: "es", href: "/privacidade" })),
                    ja: host + (await getPathname({ locale: "jp", href: "/privacidade" })),
                    en: host + (await getPathname({ locale: "en", href: "/privacidade" })),
                },
            },
            priority: 0.6,

        },
        {
            url: `${host}/partners`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            alternates: {
                languages: {
                    pt: host + (await getPathname({ locale: "pt", href: "/partners" })),
                    es: host + (await getPathname({ locale: "es", href: "/partners" })),
                    ja: host + (await getPathname({ locale: "jp", href: "/partners" })),
                    en: host + (await getPathname({ locale: "en", href: "/partners" })),
                },
            },
            priority: 0.9,

        },
        {
            url: `${host}/thanks`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            alternates: {
                languages: {
                    pt: host + (await getPathname({ locale: "pt", href: "/thank-you" })),
                    es: host + (await getPathname({ locale: "es", href: "/thank-you" })),
                    ja: host + (await getPathname({ locale: "jp", href: "/thank-you" })),
                    en: host + (await getPathname({ locale: "en", href: "/thank-you" })),
                },
            },
            priority: 0.5,
        },
    ];
}
