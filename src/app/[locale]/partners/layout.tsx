import "./../globals.css";
import Script from "next/script";
import { jsonLdPartners } from "@/src/utils";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: 'metadata.partners' });

    return {
        title: t('title'),
        description: t('description'),
        keywords: t.raw("keywords"),
    }
}

export default function PartnersLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Script
                id="partners-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLdPartners),
                }}
            />
            {children}
        </>
    );
}
