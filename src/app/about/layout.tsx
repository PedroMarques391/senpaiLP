import type { Metadata } from "next";
import { Playfair_Display, Lora } from "next/font/google";
import "./../globals.css";
import Script from "next/script";
import { jsonLdAbout } from "@/src/utils";

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
        <html lang="pt-br" className="!scroll-smooth">
            <body
                className={`${lora.variable} ${playFair.variable} antialiased`}
            >
                <Script
                    id="about-schema"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(jsonLdAbout),
                    }}
                />
                {children}
            </body>
        </html>
    );
}
