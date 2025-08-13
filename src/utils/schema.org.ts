import { AboutPage, SoftwareApplication, WebPage, WithContext } from "schema-dts";

const jsonLd: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    headline: "Crie figurinhas únicas no WhatsApp com a Bot do Senpai",
    name: "BotDoSenpai",
    url: "https://botdosenpai.com.br",
    applicationCategory: "Messaging",
    operatingSystem: "All",
    description:
        "A Senpai é o bot de figurinhas para WhatsApp mais querida do Brasil! Transforme imagens, GIFs e vídeos em figurinhas animadas em segundos. Tudo 100% gratuito, sem precisar baixar nada, e com recursos exclusivos para deixar suas conversas mais divertidas, criativas e personalizadas.",
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


const jsonLdThanks: WithContext<WebPage> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "BotDoSenpai - Agradecimentos",
    url: "https://botdosenpai.com.br/thanks",
    description: "Agradecimento da Senpai por adquirir uma das assinaturas.",
};


export {
    jsonLd,
    jsonLdAbout,
    jsonLdPrivacy,
    jsonLdTerms,
    jsonLdThanks
}