import { Analytics } from "@vercel/analytics/react";
import { Roboto, Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { jsonLd } from "../../utils";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/src/i18n/routing";
import { generateMetadataProps } from "@/src/types";

const poppins = Poppins({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: "400",
});

const roboto = Roboto({
  variable: "--font-cabin_Condensed",
  subsets: ["latin"],
  weight: "400",
});

export async function generateMetadata({ params }: generateMetadataProps) {
  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: "metadata.home" });

  return {
    title: t("title"),
    description: t("description"),
    metadataBase: new URL("https://botdosenpai.com.br"),
    alternates: {
      canonical: "/",
    },
    authors: [{ name: "Pedro Marques" }],
    applicationName: "BotDoSenpai",
    keywords: t.raw("keywords"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      siteName: "BotDoSenpai",
      url: "https://botdosenpai.com.br/",
      type: "website",
      locale: "pt_BR",
      images: [
        {
          url: "https://botdosenpai.com.br/wallpaper.png",
          width: 800,
          height: 600,
          alt: "BotDoSenpai",
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Bot de Figurinha",
      creator: "@BotDoSenpai",
      description: t("description"),
      site: "@BotDoSenpai",
      images: ["/wallpaper.png"]
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode,
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale} className="!scroll-smooth">
      <body className={`${poppins.variable} ${roboto.variable} antialiased`}>
        <Script
          id="main-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
