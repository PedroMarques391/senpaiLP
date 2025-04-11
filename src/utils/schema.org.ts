import { AboutPage, SoftwareApplication, WebPage, WithContext } from "schema-dts";

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


const jsonLdAbout: WithContext<AboutPage> = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "BotDoSenpai - Sobre Nós",
    url: "https://botdosenpai.com.br/about",
    description: "Conheça o time por trás do Bot do Senpai e a missão de espalhar fofura no WhatsApp com figurinhas personalizadas.",
    mainEntity: {
        "@type": "Organization",
        name: "BotDoSenpai",
        url: "https://botdosenpai.com.br",
    },
};


const jsonLdPrivacy: WithContext<WebPage> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "BotDoSenpai - Política de Privacidade",
    description: "Saiba como o Bot do Senpai coleta, armazena e protege seus dados com carinho e responsabilidade.",
    url: "https://botdosenpai.com.br/privacidade",
};


const jsonLdTerms: WithContext<WebPage> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "BotDoSenpai - Termos de Uso",
    url: "https://botdosenpai.com.br/termo-de-uso",
    description: "Leia os termos e condições para uso do Bot do Senpai e descubra como usamos magia e tecnologia para servir você com segurança.",
};




export {
    jsonLd,
    jsonLdAbout,
    jsonLdPrivacy,
    jsonLdTerms
}