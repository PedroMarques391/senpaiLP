import type { Metadata } from "next";
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
  authors: [{ name: "Pedro Marques Developer" }],
  openGraph: {
    title: "BotSenpai - Seu bot ideal",
    description: "Transforme suas conversas no WhatsApp com um bot de figurinhas divertido!",
    siteName: "BotSenpai",
    type: "website",
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
      </body>
    </html>
  );
}
