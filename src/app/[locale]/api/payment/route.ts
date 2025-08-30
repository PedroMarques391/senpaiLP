import { NextRequest, NextResponse } from "next/server";
import { payment } from "../controller/payment.controller";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        // console.log(body)

        const res = await payment(body);

        return NextResponse.json({ status: 200, data: res });
    } catch (error) {
        console.error("Erro ao processar pagamento:", error);
        return NextResponse.json(
            { status: 500 }
        );
    }
}