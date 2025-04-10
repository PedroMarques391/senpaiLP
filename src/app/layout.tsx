import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { Playfair_Display, Lora } from "next/font/google";
import "./globals.css";
import { PreloadResources } from "@/src/components/shared/PreloadResources";

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
  other: {
    'script:ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Bot Senpai",
      "url": "https://botdosenpai.com.br",
      "applicationCategory": "Messaging",
      "operatingSystem": "All",
      "description":
        "Crie figurinhas únicas no WhatsApp com A Bot do Senpai — rápido, gratuito e cheio de fofura!",
      "offers": {
        "@type": "Offer",
        "price": "0.00",
        "priceCurrency": "BRL",
      },
      "creator": {
        "@type": "Organization",
        "name": "BotDoSenpai",
        "url": "https://botdosenpai.com.br",
      }
    })
  }
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="!scroll-smooth">
      <body className={`${lora.variable} ${playFair.variable} antialiased`}>
        <PreloadResources />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
