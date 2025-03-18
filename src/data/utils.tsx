import { IServicesInterface } from "@/components/Services";
import { ShieldCheck, Lock, ThumbsUp, Users, RefreshCw } from "lucide-react";
import { JSX } from "react";



export interface IBenefit {
    title: string;
    description: string;
    icon: JSX.Element;
}

export interface IFunctionsCard {
    title: string;
    subtitle: string;
    imagePath: string
    message: string
}


export interface IFaq {
    question: string;
    answer: string;
}

export const services: IServicesInterface[] = [
    {
        service: "Plano Gratuito",
        value: "0",
        description: "Experimente sem compromisso! Teste a Senpai Bot e descubra como ela pode facilitar sua vida.",
        characteristics: [
            "Criação de até 5 figurinhas por dia",
            "Figurinhas estáticas e animadas",
            "Conversas ilimitadas com a Senpai Bot",
            "Suporte básico via WhatsApp"
        ],
        textButton: "Teste grátis"
    },
    {
        service: "Plano Pro",
        value: "4.90",
        description: "Transforme suas ideias em figurinhas sem limites! Criação rápida, fácil e divertida.",
        characteristics: [
            "Uso ilimitado, sem restrições",
            "Criação de figurinhas animadas e estáticas",
            "Suporte dedicado para dúvidas",
            "Atualizações constantes com novos recursos"
        ],
        textButton: "Assine Agora"
    },
    {
        service: "Plano Master",
        value: "9.90",
        description: "Experiência completa! A melhor tecnologia para criar figurinhas personalizadas com inteligência artificial.",
        characteristics: [
            "Figurinhas ilimitadas (estáticas e animadas)",
            "Criação com Inteligência Artificial 🤖",
            "Biblioteca exclusiva de figurinhas",
            "Renomeie suas figurinhas do seu jeito",
            "Suporte prioritário e atendimento premium"
        ],
        textButton: "Assine Agora"
    }
];

export const benefits: IBenefit[] = [
    {
        title: "Segurança Garantida",
        description: "Protegemos seus dados com criptografia de ponta a ponta.",
        icon: <ShieldCheck className="w-6 h-6 text-green-500" />
    },
    {
        title: "Privacidade Total",
        description: "Seus dados são seus! Nunca compartilhamos suas informações.",
        icon: <Lock className="w-6 h-6 text-blue-500" />
    },
    {
        title: "Fácil de Usar",
        description: "Uma interface intuitiva para você aproveitar sem complicação.",
        icon: <ThumbsUp className="w-6 h-6 text-yellow-500" />
    },
    {
        title: "Comunidade Ativa",
        description: "Conecte-se com outros usuários e receba suporte rápido.",
        icon: <Users className="w-6 h-6 text-purple-500" />
    },
    {
        title: "Atualizações Frequentes",
        description: "Novas funcionalidades e melhorias constantes para você.",
        icon: <RefreshCw className="w-6 h-6 text-red-500" />
    }
];

export const faq: IFaq[] = [
    {
        question: "O bot é seguro e legalizado?",
        answer: "Sim! Nosso bot utiliza a API oficial do WhatsApp (Meta API), garantindo total conformidade com as diretrizes da plataforma. Você pode usá-lo com segurança e tranquilidade."
    },
    {
        question: "O bot suporta figurinhas animadas?",
        answer: "Sim! Nosso bot aceita GIFs e vídeos curtos para criar figurinhas animadas automaticamente, sem complicações."
    },
    {
        question: "Quem está por trás do Bot de Figurinhas?",
        answer: "Nosso time é composto por desenvolvedores, designers e entusiastas de tecnologia apaixonados por inovação. Trabalhamos para oferecer a melhor experiência possível aos usuários."
    },
    {
        question: "O que o futuro reserva para o bot de figurinhas?",
        answer: "Estamos constantemente aprimorando o bot! Em breve, teremos mais opções de personalização, integração com novas plataformas e uma experiência de uso ainda mais fluida."
    },
    {
        question: "Como posso criar minhas figurinhas?",
        answer: "É super simples! Basta enviar uma imagem, GIF ou vídeo curto para o bot, e ele transformará automaticamente no formato de figurinha para você usar no WhatsApp."
    },
    {
        question: "O bot tem custo?",
        answer: "Atualmente, oferecemos um plano gratuito com funcionalidades básicas. Para recursos avançados e uso ilimitado, temos planos pagos acessíveis para todos os perfis de usuários."
    },
    {
        question: "Preciso baixar algum aplicativo?",
        answer: "Não! Nosso bot funciona diretamente no WhatsApp, sem a necessidade de baixar aplicativos adicionais. Basta iniciar uma conversa e começar a criar suas figurinhas!"
    }
];

export const achievements: (Omit<IBenefit, 'icon'> & { duration: number })[] = [
    {
        title: "99,9%",
        description: "Disponibilidade garantida para você, sempre online quando precisar!",
        duration: 1.0
    },
    {
        title: "5 anos",
        description: "Construindo histórias e fazendo a diferença na vida das pessoas.",
        duration: 1.5
    },
    {
        title: "68 milhões",
        description: "Figurinhas criadas com carinho e compartilhadas pelo mundo!",
        duration: 2.0
    }
];

export const functionsCardItens: IFunctionsCard[] = [
    {
        title: "Crie Stickers Mágicos! ✨",
        subtitle: "Envie sua imagem e transforme-a em um adesivo super kawaii! A Senpai faz isso rapidinho para você! 💕📸",
        imagePath: "/images/generateSticker.jpg",
        message: "Olá Senpai, quero criar um sticker mágico!"
    },
    {
        title: "Sticker AI no Jutsu! 🎨🤖",
        subtitle: "Com o poder da inteligência artificial, transforme qualquer imagem em um sticker perfeito, digno de um anime! 🚀",
        imagePath: "/images/IA.jpg",
        message: "Olá Senpai, quero usar o Sticker AI no Jutsu!"
    },
    {
        title: "Arte Digital com AI! 🖌️💡",
        subtitle: "Deixe a IA criar imagens incríveis para você! Inspire-se e gere artes únicas para compartilhar com seus nakamas! 🌸✨",
        imagePath: "/images/chatIA.jpg",
        message: "Olá Senpai, quero criar arte digital com AI!"
    },
    {
        title: "Lembretes Kawaii! 📝💖",
        subtitle: "Precisa lembrar de algo importante? Deixe a Senpai anotar para você com mensagens fofinhas e cheias de amor! 🐰🎀",
        imagePath: "/images/remember.jpg",
        message: "Olá Senpai, quero criar um lembrete kawaii!"
    }
];


