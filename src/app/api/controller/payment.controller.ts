import AbacatePay from "abacatepay-nodejs-sdk";
import { CreateCustomerData, CreatePixQrCodeData, CreatePixQrCodeResponse } from "abacatepay-nodejs-sdk/dist/types";

<<<<<<< HEAD
const abacate = AbacatePay(process.env.ABACATE_PAY_API_KEY!);
=======
export async function payment(body: any) {
    const client = new MercadoPagoConfig({
        accessToken: "",
    });
>>>>>>> main

interface ICreatePayment {
    amount: number,
    description: string,
    expiresIn?: number,
    customer?: CreateCustomerData
}

async function createPayment({ amount, description, expiresIn = 3000, customer }: ICreatePayment): Promise<CreatePixQrCodeResponse> {
    const data: CreatePixQrCodeData = {
        amount,
        description,
        expiresIn,
        ...customer
    }

    const response = await abacate.pixQrCode.create(data)
    return response
}

async function checkStatus(paymentId: string): Promise<CreatePixQrCodeResponse> {
    const response = await abacate.pixQrCode.check({ id: paymentId })
    return response
}

async function simulatePayment(paymentId: string): Promise<CreatePixQrCodeResponse> {
    const response = await abacate.pixQrCode.simulatePayment({ id: paymentId })
    return response
}


export {
    createPayment,
    checkStatus,
    simulatePayment
}