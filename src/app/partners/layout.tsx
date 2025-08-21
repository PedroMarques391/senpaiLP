import type { Metadata } from "next";
import "./../globals.css";
import Script from "next/script";
import { jsonLdPartners } from "@/src/utils";



export const metadata: Metadata = {
    title: "Seja um Parceiro!",
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
                    __html: JSON.stringify(jsonLdPartners),
                }}
            />
            {children}
        </>
    );
}
