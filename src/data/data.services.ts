import { IServices } from "../types";


const services: IServices[] = [
    {
        service: "Plano Grátis",
        value: "0",
        description: "Experimente sem compromisso! Teste a Senpai Bot e descubra como ela pode facilitar sua vida.",
        characteristics: [
            "Crie 1 figurinha diariamente",
            "Pergunte algo e receba os 3 melhores resultados do Google"
        ],
        textButton: "Teste grátis",
        message: ".menu"
    },
    {
        service: "Plano Pro",
        value: "4.90",
        description: "Transforme suas ideias em figurinhas sem limites! Criação rápida, fácil e divertida.",
        characteristics: [
            "Criação ilimitada de figurinhas",
            "Converse comigo, sou uma IA pronta para responder",
            "Newsletter exclusiva",
            "Atualizações para sempre ter a melhor experiência",
            "Suporte dedicado para tirar todas as suas dúvidas"
        ],
        textButton: "Assine Agora",
        message: ".getPremium"
    },
    {
        service: "Plano Mestre",
        value: "9.90",
        description: "Experiência completa! A melhor escolha para criar figurinhas personalizadas com inteligência artificial.",
        characteristics: [
            "Criação ilimitada de figurinhas ",
            "Crie figurinhas com Inteligência Artificial",
            "Biblioteca de figurinhas",
            "Converse comigo, sou uma IA pronta para responder",
            "Newsletter exclusiva",
            "Atualizações para sempre ter a melhor experiência",
            "Novidades exclusivas para assinantes Mestre",
            "Suporte dedicado para tirar todas as suas dúvidas"
        ],
        textButton: "Assine Agora",
        message: ".getPremium"
    }
];


export {
    services
}







