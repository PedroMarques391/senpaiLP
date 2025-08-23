import { IReasonsCard } from "../types";
import { TrendingUp, Megaphone, Gift } from "lucide-react";

export const reasonsCard: IReasonsCard[] = [
    {
        icon: TrendingUp,
        title: 'Aumente sua receita',
        text: 'Ganhe comissões atrativas por cada cliente indicado ou venda realizada através da nossa parceria.'
    },
    {
        icon: Megaphone,
        title: 'Aumente o público da sua marca',
        text: 'Utilize nosso bot para atrair mais pessoas, engajar novos clientes e ampliar a presença da sua marca no digital.'
    },
    {
        icon: Gift,
        title: 'Ofereça descontos exclusivos',
        text: 'Proporcione vantagens especiais para seus clientes com cupons e condições exclusivas, gerando fidelização e mais vendas.'
    }
];
