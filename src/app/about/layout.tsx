import type { Metadata } from "next";
import { Playfair_Display, Lora } from "next/font/google";
import "./../globals.css";

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
    title: "BotSenpai - Sobre Nós",
    description: "Política de Privacidade do bot Senpai.",
    keywords: ["figurinhas", "bot de figurinhas", "bot de whatsapp", "senpai bot", "botdosenpai", "Quem somos", "sobre nós", "about us", "about"],


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
                {children}
            </body>
        </html>
    );
}
