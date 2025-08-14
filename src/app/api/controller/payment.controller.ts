import AbacatePay from "abacatepay-nodejs-sdk";
import { CreateCustomerData, CreatePixQrCodeData, CreatePixQrCodeResponse } from "abacatepay-nodejs-sdk/dist/types";

const abacate = AbacatePay(process.env.ABACATE_PAY_API_KEY!);

async function createPayment(customer: CreateCustomerData): Promise<CreatePixQrCodeResponse> {
    const data: CreatePixQrCodeData = {
        amount: 1000,
        description: 'plano pro',
        expiresIn: 3000,
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