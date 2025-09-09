import { Payment, MercadoPagoConfig } from "mercadopago";

export async function payment(body: any) {
    const client = new MercadoPagoConfig({
        accessToken: "",
    });

    const payments = new Payment(client);

    try {
        const response = await payments.create({ body });
        // console.log("Payment criada com sucesso:", response);

        return response;
    } catch (error) {
        console.error("Erro ao criar Payment:", error);
        throw error;
    }
}
