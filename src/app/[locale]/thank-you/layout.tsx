import "./../globals.css";
import Script from "next/script";
import { jsonLdThanks } from "@/src/utils";
import { getTranslations } from "next-intl/server";
import { generateMetadataProps } from "@/src/types";



export async function generateMetadata({ params }: generateMetadataProps) {
    const { locale } = await params

    const t = await getTranslations({ locale, namespace: 'metadata.thanks' });

    return {
        title: t('title'),
        description: t('description'),
        keywords: t.raw("keywords"),
    }
}

export default function ThanksLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Script
                id="about-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLdThanks),
                }}
            />
            {children}
        </>
    );
}
