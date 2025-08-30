import CEOimage from "@/public/images/about/marcelo.webp"
import CTOImage from "@/public/images/about/rodrigo.webp"
import Dev1Image from "@/public/images/about/pedro.webp"
import Dev2Image from "@/public/images/about/kaiky.webp"


import { ITeamMember } from "../types"



const team: ITeamMember[] = [
    {
        image: CEOimage,
        name: "Marcelo Pinho",
        jobTitle: "team.ceo.title",
        bio: "team.ceo.bio",
        links: [
            { url: "https://instagram.com/senpai.gif", color: "text-pink-600", icon: "instagram" },
        ],
    },
    {
        image: CTOImage,
        name: "Rodrigo Sakae",
        jobTitle: "team.cto.title",
        bio: "team.cto.bio",
        links: [
            { url: "https://linkedin.com/in/rodrigosakae", color: "text-blue-400", icon: "linkedin" },
            { url: "https://instagram.com/devsakae", color: "text-pink-600", icon: "instagram" },
        ],
    },
    {
        image: Dev1Image,
        name: "Pedro Marques",
        jobTitle: "team.developer1.title",
        bio: "team.developer1.bio",
        links: [
            { url: "https://linkedin.com/in/pedromarques391", color: "text-blue-400", icon: "linkedin" },
            { url: "https://instagram.com/pedromarques.py", color: "text-pink-600", icon: "instagram" },
        ],
    },
    {
        image: Dev2Image,
        name: "Kaiky Brito",
        jobTitle: "team.developer2.title",
        bio: "team.developer2.bio",
        links: [
            { url: "https://linkedin.com/in/kaiky-gomes", color: "text-blue-400", icon: "linkedin" },
            { url: "https://instagram.com/kaikygr", color: "text-pink-600", icon: "instagram" },
        ],
    },
];

export {
    team
}