import type { Metadata } from "next";
import "./../globals.css";
import Script from "next/script";
import { jsonLdPrivacy } from "@/src/utils";


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
