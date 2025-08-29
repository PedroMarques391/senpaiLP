import { Analytics } from "@vercel/analytics/react"
import { Roboto, Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { jsonLd } from "../../utils";
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/src/i18n/routing';
import React from "react";

const montserrat = Poppins({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: "400",
});

const cabin_Condensed = Roboto({
  variable: "--font-cabin_Condensed",
  subsets: ["latin"],
  weight: "400",
});

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'metadata.home' });

  return {
    title: t('title'),
    description: t('description'),
    metadataBase: new URL('https://botdosenpai.com.br'),
    alternates: {
      canonical: '/',
    },
    authors: [{ name: "Pedro Marques" }],
    applicationName: "BotDoSenpai",
    keywords: t.raw("keywords"),
  };
}

// openGraph: {
//     title: "BotDoSenpai - Seu bot ideal",
//     description: "Transforme suas conversas no WhatsApp com um bot de figurinhas divertido!",
//     siteName: "BotDoSenpai",
//     url: "https://botdosenpai.com.br/",
//     type: "website",
//     locale: "pt_BR",
//     images: [
//       {
//         url: "https://botdosenpai.com.br/wallpaper.png",
//         width: 800,
//         height: 600,
//         alt: "BotDoSenpai - O bot de figurinha mais fofo da internet!",
//       }
//     ]
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Bot de Figurinha",
//     creator: "@BotDoSenpai",
//     description: "Transforme suas conversas no WhatsApp com um bot de figurinhas divertido!",
//     site: "@BotDoSenpai",
//     images: ["/wallpaper.png"]
//   },



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
      <body className={`${montserrat.variable} ${cabin_Condensed.variable} antialiased`}>
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
