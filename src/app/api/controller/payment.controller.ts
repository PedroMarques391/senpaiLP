import { Payment, MercadoPagoConfig } from "mercadopago";

export async function payment(body: any) {
    const client = new MercadoPagoConfig({
        accessToken: "TEST-7959136915828039-042914-aa09647919c45698ea1c53f033a0c502-161823178",
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
