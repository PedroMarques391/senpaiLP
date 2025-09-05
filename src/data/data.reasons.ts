import { IReasonsCard } from "../types";
import { TrendingUp, Megaphone, Gift } from "lucide-react";

export const reasonsCard: IReasonsCard[] = [
    {
        icon: TrendingUp,
        title: "reasons.increaseRevenue.title",
        text: "reasons.increaseRevenue.text",
    },
    {
        icon: Megaphone,
        title: "reasons.increaseAudience.title",
        text: "reasons.increaseAudience.text",
    },
    {
        icon: Gift,
        title: "reasons.exclusiveDiscounts.title",
        text: "reasons.exclusiveDiscounts.text",
    },
];
