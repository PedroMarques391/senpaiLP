import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppinsSans = Poppins({
  variable: "--font-poppis-sans",
  subsets: ["latin"],
  weight: "400",
});


export const metadata: Metadata = {
  title: "BotSenpai - Seu bot ideal",
  description: "Bot de figurinha ideal para transformar suas conversas no WhatsApp em um verdadeiro festival de figurinhas!",
  keywords: ["figurinhas", "bot de figurinhas", "bot de whatsapp", "senpai bot", "botdosenpai"],
  creator: "Pedro Marques Developer"


};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="!scroll-smooth">
      <body
        className={`${poppinsSans.variable} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
