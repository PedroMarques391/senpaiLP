import { NextRequest, NextResponse } from "next/server";
import { simulatePayment } from "../controller/payment.controller";


export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const res = await simulatePayment(body.id);
        return NextResponse.json({ data: res }, { status: 200 });



    } catch (error) {
        console.error('Erro ao simular pagamento:', error);

        return NextResponse.json(
            { error: 'Erro interno do servidor ao processar o pagamento' },
            { status: 500 }
        );
    }
}