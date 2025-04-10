import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { Playfair_Display, Lora } from "next/font/google";
import "./globals.css";
import { PreloadResources } from "@/src/components/shared/PreloadResources";
import Script from "next/script";
import { jsonLd } from "../utils";

const playFair = Playfair_Display({
  variable: "--font-Playfair_Display",
  subsets: ["latin"],
  weight: "400",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: 'BotDoSenpai - Sua bot ideal',
    template: '%s | BotDoSenpai - Sua bot ideal',
  },
  description: 'Crie figurinhas únicas no WhatsApp com a Bot do Senpai — rápido, gratuito e cheio de fofura.',
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
    siteName: "Bot Senpai",
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
      <body className={`${lora.variable} ${playFair.variable} antialiased`}>
        <Script
          id="main-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        <PreloadResources />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
