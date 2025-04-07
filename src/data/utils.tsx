import { IServicesInterface } from "@/components/Services";
import { ShieldCheck, Lock, ThumbsUp, Users, RefreshCw } from "lucide-react";
import { JSX } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import CEOImage from "../../public/images/about/marcelo.jpeg"
import CoCEOImage from "../../public/images/about/rodrigo.png"
import Dev1Image from "../../public/images/about/icon3.webp"
import Dev2Image from "../../public/images/about/kaiky.jpeg"
import { ITeamProps } from "@/components/Team";




export interface IBenefit {
    title: string | number
    description: string;
    icon: JSX.Element;
}

export interface IFunctionsCard {
    title: string;
    subtitle: string;
    imagePath: string
    message: string
    duration: number
}


export interface IFaq {
    question: string;
    answer: string;
}

interface ITermsOfUse {
    title: string;
    text: string;
}


export const teamMembers: ITeamProps[] = [
    {
        image: CEOImage,
        name: "Marcelo Pinho",
        jobTitle: "CEO",
        bio: "Ao longo da minha jornada, sempre busquei liderar com paixão, visão e comprometimento com a Senpai.",
        links: [
            { url: "https://github.com/anacosta", color: "text-gray-600", icon: <FaGithub size={32} /> },
            { url: "https://linkedin.com/in/anacosta", color: "text-blue-400", icon: <FaLinkedin size={32} /> },
            { url: "https://instagram.com/ana.costa", color: "text-pink-600", icon: <FaInstagram size={32} /> },
        ],
    },
    {
        image: CoCEOImage,
        name: "Rodrigo Sakae",
        jobTitle: "CTO",
        bio: "Desenvolvedor fullstack, ex advogado e pai de meninas.",
        links: [
            { url: "https://github.com/rafamendes", color: "text-gray-600", icon: <FaGithub size={32} /> },
            { url: "https://linkedin.com/in/rafamendes", color: "text-blue-400", icon: <FaLinkedin size={32} /> },
            { url: "https://instagram.com/rafa.mendes", color: "text-pink-600", icon: <FaInstagram size={32} /> },
        ],
    },
    {
        image: Dev1Image,
        name: "Pedro Marques",
        jobTitle: "Desenvolvedor",
        bio: "Responsável por transformar ideias em soluções práticas e escaláveis, sempre com foco em eficiência e qualidade.",
        links: [
            { url: "https://github.com/PedroMarques391", color: "text-gray-600", icon: <FaGithub size={32} /> },
            { url: "https://linkedin.com/in/pedromarques391", color: "text-blue-400", icon: <FaLinkedin size={32} /> },
            { url: "https://instagram.com/pedromarques.py", color: "text-pink-600", icon: <FaInstagram size={32} /> },
        ],
    },
    {
        image: Dev2Image,
        name: "Kaiky Brito",
        jobTitle: "Desenvolvedor",
        bio: "Programador JavaScript com foco em machine learning, automação com IA e conhecimentos em cyber security.",
        links: [
            { url: "https://github.com/liviarocha", color: "text-gray-600", icon: <FaGithub size={32} /> },
            { url: "https://linkedin.com/in/liviarocha", color: "text-blue-400", icon: <FaLinkedin size={32} /> },
            { url: "https://instagram.com/livia.dev", color: "text-pink-600", icon: <FaInstagram size={32} /> },
        ],
    },
]




export const services: IServicesInterface[] = [
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

export const achievements: (Omit<IBenefit, 'icon'> & { duration: number, type: string })[] = [
    {
        title: 99.9,
        description: "Disponibilidade garantida para você, sempre online quando precisar!",
        duration: 1.0,
        type: "%"
    },
    {
        title: 5,
        description: "Construindo histórias e fazendo a diferença na vida das pessoas.",
        duration: 1.5,
        type: "anos"
    },
    {
        title: 68,
        description: "Figurinhas criadas com carinho e compartilhadas pelo mundo!",
        duration: 2.0,
        type: "milhões"
    }
];

export const functionsCardItens: IFunctionsCard[] = [
    {
        title: "Crie Figurinhas com a Senpai",
        subtitle: "Transforme imagens, GIFs e vídeos em figurinhas únicas no WhatsApp! Rápido e fácil.",
        imagePath: "/images/card/cardSticker.webp",
        message: "Olá Senpai, quero criar um sticker mágico!",
        duration: 1.0
    },
    {
        title: "Crie Figurinhas Mágicas com AI",
        subtitle: "Deixe sua criatividade brilhar! Com nossa inteligência artificial, você pode criar figurinhas incríveis de forma rápida e divertida.",
        imagePath: "/images/card/cardGenerateSticker.webp",
        message: "Olá Senpai, quero criar uma figurinha incrível!",
        duration: 1.5
    },
    {
        title: "Vamos Conversar?",
        subtitle: "Oi, oi! Sou a Senpai, sua amiga virtual! Vamos bater um papo? Adoro fazer novas amizades e estou sempre aqui para te ajudar ou só para conversar.",
        imagePath: "/images/card/cardTalkWithMe.webp",
        message: "Olá Senpai, quero conversar com você!",
        duration: 2.0
    },
    {
        title: "Bom Dia com a Senpai",
        subtitle: "Receba mensagens fofas e animadas todo dia de manhâ para começar o dia com muita energia positiva e carinho.",
        imagePath: "/images/card/cardGoodMorning.webp",
        message: "Olá Senpai, quero receber um bom dia!",
        duration: 2.5
    },
    {
        title: "Pesquisa Rápida com a Senpai",
        subtitle: "Quer saber algo? Deixe a senpai fazer uma pesquisa no google para você! Sempre trazendo os melhores resultados.",
        imagePath: "/images/card/cardSearch.webp",
        message: "Olá Senpai, quero criar um lembrete kawaii!",
        duration: 2.5
    },
    {
        title: "Biblíoteca de Figurinhas",
        subtitle: "Explore uma coleção incrivél de figurinhas prontas para usar.",
        imagePath: "/images/card/cardStickerLib.webp",
        message: "Olá Senpai, quero criar um lembrete kawaii!",
        duration: 2.5
    }
];

export const termsOfUse: ITermsOfUse[] = [
    { title: "1. Aceitação dos Termos", text: "Ao utilizar o 'Bot do Senpai', você concorda integralmente com os presentes Termos de Uso. Caso não concorde, não deverá utilizar o Bot." },
    { title: "2. Descrição do Serviço", text: "O Bot do Senpai é um chatbot de WhatsApp que oferece mensagens, conversão de imagens em stickers e serviços limitados de conexão externa com API. O acesso completo aos recursos está condicionado ao pagamento da assinatura mensal." },
    { title: "3. Cadastro e Dados Pessoais", text: "Para utilizar o Bot, o Usuário deverá fornecer seus dados pessoais, como nome, número de telefone e informações de pagamento. O Usuário é responsável pela veracidade e atualização de seus dados." },
    { title: "4. Pagamento da Assinatura", text: "O acesso completo aos recursos do Bot está condicionado ao pagamento da assinatura mensal. O não pagamento resultará na suspensão do acesso aos recursos pagos." },
    { title: "5. Uso Responsável", text: "O Usuário se compromete a utilizar o Bot de forma ética e responsável. É proibido: Spam, Flood e uso para fins ilegais ou fraudulentos." },
    { title: "6. Exclusão da Conta", text: "Em caso de violação dos Termos de Uso, o Bot do Senpai se reserva o direito de excluir a conta do Usuário, sem direito a reembolso." },
    { title: "7. Propriedade Intelectual", text: "O conteúdo e o software do Bot são de propriedade exclusiva do Bot do Senpai. É proibida a reprodução, distribuição ou modificação do conteúdo sem autorização." },
    { title: "8. Alterações nos Termos de Uso", text: "O Bot do Senpai se reserva o direito de alterar os Termos de Uso a qualquer momento, entrando em vigor imediatamente após a publicação." },
    { title: "9. Limitação de Responsabilidade", text: "O Bot do Senpai não se responsabiliza por danos ou prejuízos decorrentes do uso do Bot, incluindo falhas de funcionamento, interrupções ou perda de dados." },
    { title: "10. Disposições Gerais", text: "A tolerância ao descumprimento de qualquer cláusula não implica renúncia ao direito de exigir o cumprimento da obrigação. O foro eleito será o da comarca de Florianópolis, SC." }
]

export const privacyPolicy: ITermsOfUse[] = [
    { title: "Política de Privacidade", text: "A sua privacidade é extremamente importante para nós. Comprometemo-nos a respeitar sua privacidade e proteger qualquer informação pessoal que você possa fornecer através do nosso site, Botdosenpai, localizado em https://botdosenpai.com.br/." },
    { title: "Coleta de Informações", text: "Solicitamos suas informações pessoais apenas quando elas são estritamente necessárias para fornecer nossos serviços a você. Coletamos essas informações de maneira justa e legal, com seu conhecimento e consentimento explícito. Também informamos os motivos da coleta e como essas informações serão utilizadas." },
    { title: "Uso e Armazenamento de Informações", text: "Retemos as informações coletadas somente pelo tempo necessário para fornecer o serviço solicitado. Armazenamos dados protegidos por medidas de segurança tecnicamente adequadas para prevenir perda, roubo, acesso não autorizado, divulgação, cópia, uso ou alteração." },
    { title: "Compartilhamento de Informações", text: "Não compartilhamos suas informações pessoais publicamente nem com terceiros, exceto quando exigido por lei." },
    { title: "Sites Externos", text: "Nosso site pode conter links para sites externos que não são operados por nós. Tenha em mente que não controlamos esses sites e não podemos assumir responsabilidade por suas políticas de privacidade." },
    { title: "Recusa de Informações", text: "Você pode optar por não fornecer suas informações pessoais, com o entendimento de que isso pode impedir que lhe forneçamos determinados serviços." },
    { title: "Publicidade e Cookies", text: "Utilizamos o Google AdSense para veicular publicidade, que usa um cookie DoubleClick para servir anúncios relevantes e limitar a repetição de anúncios. Mais informações sobre as práticas de privacidade do Google AdSense podem ser obtidas diretamente em sua FAQ. Os cookies de publicidade comportamental são empregados para garantir que os anúncios sejam relevantes para você, rastreando seus interesses de maneira anônima." },
    { title: "Compromisso do Usuário", text: "Ao usar o site Botdosenpai, você se compromete a: Não realizar atividades ilegais ou contrárias à ética e à ordem pública; Não difundir conteúdo discriminatório, ilegal ou que promova atividades prejudiciais contra os direitos humanos; Não causar danos aos sistemas físicos e lógicos de Botdosenpai, seus fornecedores ou terceiros." },
    { title: "Mais Informações", text: "Esta política entra em vigor a partir de 28 de janeiro de 2025." }
];
