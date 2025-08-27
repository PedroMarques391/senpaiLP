// achievements.ts
import { IAchievement } from "../types";

const achievements: IAchievement[] = [
    {
        title: 99.9,
        descriptionKey: "uptime",
        duration: 1.0,
        type: "percentage"
    },
    {
        title: 5,
        descriptionKey: "years",
        duration: 1.5,
        type: "years"
    },
    {
        title: 68,
        descriptionKey: "stickers",
        duration: 2.0,
        type: "amount"
    }
];

export { achievements };
