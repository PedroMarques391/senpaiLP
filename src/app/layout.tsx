import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { Playfair_Display, Lora } from "next/font/google";
import "./globals.css";

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
  openGraph: {
    title: "BotSenpai - Seu bot ideal",
    description: "Transforme suas conversas no WhatsApp com um bot de figurinhas divertido!",
    siteName: "BotSenpai",
    url: "https://botdosenpai.com.br/",
    type: "website",
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
        {children}
        <Analytics />
      </body>
    </html>
  );
}
