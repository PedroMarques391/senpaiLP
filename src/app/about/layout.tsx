import type { Metadata } from "next";
import "./../globals.css";
import Script from "next/script";
import { jsonLdAbout } from "@/src/utils";

export const metadata: Metadata = {
    title: "BotDoSenpai - Sobre Nós",
    description: "Conheça o time por trás do Bot do Senpai e a missão de espalhar fofura no WhatsApp com figurinhas personalizadas",
    keywords: ["figurinhas", "bot de figurinhas", "bot de whatsapp", "senpai bot", "botdosenpai", "Quem somos", "sobre nós", "about us", "about"],
};

export default function AboutLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Script
                id="about-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLdAbout),
                }}
            />
            {children}
        </>
    );
}
