import { NextRequest, NextResponse } from "next/server";
import { checkStatus } from "../controller/payment.controller";


export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        console.log(body)

        const res = await checkStatus(body.id);

        return NextResponse.json({ data: res }, { status: 200 });

    } catch (error) {
        console.error('Erro ao verificar status:', error);

        return NextResponse.json(
            { error: 'Erro interno do servidor ao processar o pagamento' },
            { status: 500 }
        );
    }
}