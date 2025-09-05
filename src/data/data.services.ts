import { IServices } from "../types";

const services: IServices[] = [
    {
        service: "components.services.free.service",
        value: "0",
        description: "components.services.free.description",
        characteristics: [
            "components.services.free.characteristics",
        ],
        textButton: "components.services.free.textButton",
        bestOption: false,
        paymentLink: "https://wa.me/555497153068?text=Ol%C3%A1%20senpai"
    },
    {
        service: "components.services.pro.service",
        value: "4.90",
        description: "components.services.pro.description",
        characteristics: [
            "components.services.pro.characteristics",

        ],
        textButton: "components.services.pro.textButton",
        bestOption: false,
        paymentLink: "https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c9380849564460a0195691fcd1802b6"
    },
    {
        service: "components.services.master.service",
        value: "9.90",
        description: "components.services.master.description",
        characteristics: [
            "components.services.master.characteristics",
        ],
        textButton: "components.services.master.textButton",
        bestOption: true,
        paymentLink: "https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c938084943cdeb601943d5af5f8005c"
    }
];

export {
    services
};
