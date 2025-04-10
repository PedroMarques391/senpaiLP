import { SoftwareApplication, WithContext } from "schema-dts";

const jsonLd: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    headline: "Crie figurinhas únicas no WhatsApp com A Bot do Senpai",
    name: "Bot Senpai",
    url: "https://botdosenpai.com.br",
    applicationCategory: "Messaging",
    operatingSystem: "All",
    description:
        "Crie figurinhas únicas no WhatsApp com A Bot do Senpai — rápido, gratuito e cheio de fofura!",
    creator: {
        "@type": "Organization",
        "name": "BotDoSenpai",
        "url": "https://botdosenpai.com.br",
    },
    image: "/wallpaper.png",
    dateCreated: "2025-03-12",
    datePublished: "2025-03-25",
}

export {
    jsonLd
}