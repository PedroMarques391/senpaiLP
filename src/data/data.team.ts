import CEOimage from "@/public/images/about/marcelo.webp"
import CTOImage from "@/public/images/about/rodrigo.webp"
import Dev1Image from "@/public/images/about/pedro.webp"
import Dev2Image from "@/public/images/about/kaiky.webp"


import { ITeamMember } from "../types"



const team: ITeamMember[] = [
    {
        image: CEOimage,
        name: "Marcelo Pinho",
        jobTitle: "CEO",
        bio: "Ao longo da minha jornada, sempre busquei liderar com paixão, visão e comprometimento com a Senpai.",
        links: [
            { url: "https://instagram.com/senpai.gif", color: "text-pink-600", icon: "instagram" },
        ],
    },
    {
        image: CTOImage,
        name: "Rodrigo Sakae",
        jobTitle: "CTO",
        bio: "Desenvolvedor fullstack, ex advogado e pai de meninas.",
        links: [
            { url: "https://linkedin.com/in/rodrigosakae", color: "text-blue-400", icon: "linkedin" },
            { url: "https://instagram.com/devsakae", color: "text-pink-600", icon: "instagram" },
        ],
    },
    {
        image: Dev1Image,
        name: "Pedro Marques",
        jobTitle: "Desenvolvedor",
        bio: "Responsável por transformar ideias em soluções práticas e escaláveis, sempre com foco em eficiência e qualidade.",
        links: [
            { url: "https://linkedin.com/in/pedromarques391", color: "text-blue-400", icon: "linkedin" },
            { url: "https://instagram.com/pedromarques.py", color: "text-pink-600", icon: "instagram" },
        ],
    },
    {
        image: Dev2Image,
        name: "Kaiky Brito",
        jobTitle: "Desenvolvedor",
        bio: "Programador JavaScript com foco em machine learning, automação com IA e conhecimentos em cyber security.",
        links: [
            { url: "https://linkedin.com/in/kaiky-gomes", color: "text-blue-400", icon: "linkedin" },
            { url: "https://instagram.com/kaikygr", color: "text-pink-600", icon: "instagram" },
        ],
    },
];

export {
    team
}