import type { Metadata } from "next";
import "./../globals.css";


export const metadata: Metadata = {
  title: "BotSenpai - Política de Privacidade",
  description: "Política de Privacidade do bot Senpai.",
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
        className={` antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
