import { IServices } from "../types";


const services: IServices[] = [
    {
        service: "Grátis",
        url: "gratis",
        value: "0",
        description: "Experimente sem compromisso! Teste a Bot Senpai e descubra como ela pode facilitar sua vida.",
        characteristics: [
            "Crie 1 figurinha diariamente",
            "Pergunte algo e receba os 3 melhores resultados do Google"
        ],
        textButton: "Teste grátis",
        message: ".menu"
    },
    {
        service: "Pro",
        url: "pro",
        value: "4.90",
        description: "Transforme suas ideias em figurinhas sem limites! Criação rápida, fácil e divertida.",
        characteristics: [
            "Criação ilimitada de figurinhas",
            "Converse comigo, sou uma IA pronta para responder",
            "Atualizações para sempre ter a melhor experiência",
            "Suporte dedicado para tirar todas as suas dúvidas"
        ],
        textButton: "Assine Agora",
        message: ".menu"
    },
    {
        service: "Mestre",
        url: "mestre",
        value: "9.90",
        description: "Ideal para donos de grupos grandes que querem mais controle, segurança e diversão no grupo.",
        characteristics: [
            "Moderação avançada",
            "Antilink automático",
            "Horário programado",
            "Mensagens de boas-vindas",
            "Mini jogos e comandos dinâmicos",
            "Baixe vídeos do Instagram e Twitter",
            "Editor de figurinhas",
            "Figurinhas com fundo transparente",
            "Transforme frases em figurinhas",
            "Converta figurinhas em imagens",
            "Atualizações semanais"
        ],
        textButton: "Assine Agora",
        message: ".menu"
    }
];


export {
    services
}







