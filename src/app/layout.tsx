import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { Playfair_Display, Lora } from "next/font/google";
import "./globals.css";
import { PreloadResources } from "@/components/PreloadResources";

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
  title: "BotSenpai - Seu bot ideal",
  description: "Bot de figurinha ideal para transformar suas conversas no WhatsApp em um verdadeiro festival de figurinhas!",
  authors: [{ name: "Pedro Marques" }],
  keywords: ["bot de figurinha", "WhatsApp", "figurinhas divertidas", "BotSenpai", "conversas animadas", "figurinhas", "senpai", "dosenpai"],
  openGraph: {
    title: "BotSenpai - Seu bot ideal",
    description: "Transforme suas conversas no WhatsApp com um bot de figurinhas divertido!",
    siteName: "BotSenpai",
    url: "https://botdosenpai.com.br/",
    type: "website",
    images: [
      {
        url: "/images/senpai/wallpaper.png",
        width: 1200,
        height: 630,
        alt: "BotSenpai - A bot de figurinha mais fofa da internet!",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Bot de Figurinha",
    creator: "@BotDoSenpai",
    description: "Transforme suas conversas no WhatsApp com um bot de figurinhas divertido!",
    site: "@BotDoSenpai",
  },
};

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
