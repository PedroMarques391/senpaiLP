import { DollarSign, Star, Users } from "lucide-react";
import { IReasonsCard } from "../types";

export const reasonsCard: IReasonsCard[] = [
    {
        icon: DollarSign,
        title: 'Aumente sua receita',
        text: 'Ganhe comissões atrativas por cada cliente indicado ou venda realizada através da nossa parceria.'
    },
    {
        icon: Star,
        title: 'Acesso a recursos exclusivos',
        text: 'Receba materiais de marketing, treinamentos especializados e suporte dedicado para impulsionar seus resultados.'
    },
    {
        icon: Users,
        title: 'Agregue valor ao seu portfólio',
        text: 'Ofereça nosso bot aos seus clientes e fortaleça seu portfólio com uma solução líder de mercado.'
    }
];
