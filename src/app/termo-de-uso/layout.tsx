import type { Metadata } from "next";
import { Playfair_Display, Lora } from "next/font/google";
import "./../globals.css";
import Script from "next/script";
import { jsonLdTerms } from "@/src/utils";

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
  title: "BotDoSenpai - Termos de Uso",
  description: "Leia os termos e condições para uso do Bot do Senpai e descubra como usamos magia e tecnologia para servir você com segurança.",
  keywords: ["figurinhas", "bot de figurinhas", "bot de whatsapp", "senpai bot", "botdosenpai"],


};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="!scroll-smooth">

      <body className={`${lora.variable} ${playFair.variable} antialiased`}>
        <Script
          id="terms-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdTerms),
          }}
        />
        {children}
      </body>
    </html>
  );
}
