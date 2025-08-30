import { IServices } from "../types";

const services: IServices[] = [
    {
        service: "Grátis",
        value: "0",
        description: "Experimente sem compromisso! Teste a BotDoSenpai e descubra como ela pode facilitar sua vida.",
        characteristics: [
            "Crie 4 figurinha diariamente",
        ],
        textButton: "Teste grátis",
        bestOption: false,
        paymentLink: "https://wa.me/555497153068?text=Ol%C3%A1%20senpai"

    },
    {
        service: "Pro",
        value: "4.90",
        description: "Transforme suas ideias em figurinhas sem limites! Criação rápida, fácil e divertida.",
        characteristics: [
            "Criação ilimitada de figurinhas",
            "Converse comigo, sou uma IA pronta para responder",
            "Atualizações para sempre ter a melhor experiência",
            "Suporte dedicado para tirar todas as suas dúvidas"
        ],
        textButton: "Assine Agora",
        bestOption: false,
        paymentLink: "https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c9380849564460a0195691fcd1802b6",

    },
    {
        service: "Mestre",
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
        bestOption: true,
        paymentLink: "https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c938084943cdeb601943d5af5f8005c"
    }
];

export {
    services
};
