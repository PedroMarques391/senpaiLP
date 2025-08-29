import "./../globals.css";
import Script from "next/script";
import { jsonLdAbout } from "@/src/utils";
import { getTranslations } from "next-intl/server";


export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: 'metadata.about' });

    return {
        title: t('title'),
        description: t('description'),
        keywords: t.raw("keywords"),
    }
}

export default function AboutLayout({
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
                    __html: JSON.stringify(jsonLdAbout),
                }}
            />
            {children}
        </>
    );
}
