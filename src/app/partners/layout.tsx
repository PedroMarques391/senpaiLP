import type { Metadata } from "next";
import "./../globals.css";
import Script from "next/script";
import { jsonLdThanks } from "@/src/utils/schema.org";



export const metadata: Metadata = {
    title: "BotDoSenpai - Parcerias",
    description: "Junte-se ao BotDoSenpai como parceiro e ajude a levar figurinhas personalizadas para mais pessoas no WhatsApp. Descubra benefícios exclusivos para parceiros e faça parte dessa comunidade!",
    keywords: ["parceria", "parceiros", "figurinhas", "bot de figurinhas", "whatsapp",
        "senpai bot", "botdosenpai", "benefícios parceiros", "comunidade"
    ],
};

export default function PartnersLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Script
                id="partners-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLdThanks),
                }}
            />
            {children}
        </>
    );
}
