import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { Cabin, Montserrat } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { jsonLd } from "../utils";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: "400",
});

const cabin_Condensed = Cabin({
  variable: "--font-cabin_Condensed",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: 'BotDoSenpai - Crie Figurinhas',
  description: 'A Senpai é o bot de figurinhas para WhatsApp mais querida do Brasil! Transforme imagens, GIFs e vídeos em figurinhas animadas em segundos. Tudo 100% gratuito, sem precisar baixar nada, e com recursos exclusivos para deixar suas conversas mais divertidas, criativas e personalizadas.',
  metadataBase: new URL('https://botdosenpai.com.br'),
  alternates: {
    canonical: '/',
  },
  authors: [{ name: "Pedro Marques" }],
  applicationName: "BotDoSenpai",
  keywords: ["bot de figurinha", "WhatsApp", "figurinhas divertidas", "BotSenpai", "conversas animadas", "figurinhas", "senpai", "dosenpai"],
  openGraph: {
    title: "BotDoSenpai - Seu bot ideal",
    description: "Transforme suas conversas no WhatsApp com um bot de figurinhas divertido!",
    siteName: "BotDoSenpai",
    url: "https://botdosenpai.com.br/",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "https://botdosenpai.com.br/wallpaper.png",
        width: 800,
        height: 600,
        alt: "BotDoSenpai - O bot de figurinha mais fofo da internet!",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Bot de Figurinha",
    creator: "@BotDoSenpai",
    description: "Transforme suas conversas no WhatsApp com um bot de figurinhas divertido!",
    site: "@BotDoSenpai",
    images: ["/wallpaper.png"]
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="!scroll-smooth">
      <body className={`${montserrat.variable} ${cabin_Condensed.variable} antialiased`}>
        <Script
          id="main-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
