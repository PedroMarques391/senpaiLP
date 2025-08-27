import type { Metadata } from "next";
import "./../globals.css";
import Script from "next/script";
import { jsonLdTerms } from "@/src/utils";





export const metadata: Metadata = {
  title: "BotDoSenpai - Termos de Uso",
  description: "Leia os termos e condições para uso do Bot do Senpai e descubra como usamos magia e tecnologia para servir você com segurança.",
  keywords: ["figurinhas", "bot de figurinhas", "bot de whatsapp", "senpai bot", "botdosenpai"],


};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Script
        id="terms-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdTerms),
        }}
      />
      {children}
    </>
  );
}
