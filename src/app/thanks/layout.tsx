import type { Metadata } from "next";
import "./../globals.css";
import Script from "next/script";
import { jsonLdAbout } from "@/src/utils";



export const metadata: Metadata = {
    title: "Obrigadaaa 🫶🏻",
    description: "Agradecemos por fazer parte da nossa comunidade! Sua participação ajuda a espalhar fofura e alegria com figurinhas personalizadas no WhatsApp.",
    keywords: ["figurinhas", "bot de figurinhas", "bot de whatsapp", "senpai bot", "botdosenpai", "thanks", "obrigada", "agradecimento"],
};

export default function AboutLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br" className="!scroll-smooth">
            <body

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
