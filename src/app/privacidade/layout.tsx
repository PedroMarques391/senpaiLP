import type { Metadata } from "next";
import { Playfair_Display, Lora } from "next/font/google";
import "./../globals.css";
import Script from "next/script";
import { jsonLdPrivacy } from "@/src/utils";

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
  title: "BotDoSenpai - Política de Privacidade",
  description: "Saiba como o Bot do Senpai coleta, armazena e protege seus dados com carinho e responsabilidade.",
  keywords: ["figurinhas", "bot de figurinhas", "bot de whatsapp", "senpai bot", "botdosenpai"],


};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="!scroll-smooth">
      <body
        className={`${lora.variable} ${playFair.variable} antialiased`}
      >
        <Script
          id="privacy-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdPrivacy),
          }}
        />
        {children}
      </body>
    </html>
  );
}
