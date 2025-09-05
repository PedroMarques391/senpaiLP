import { sendEmail } from "../../controller/mail.controller";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const data = await req.json();

    try {
        await sendEmail(data);

        return NextResponse.json({ status: 200 });
    } catch (error) {
        console.error("Erro ao enviar email:", error);
        return NextResponse.json(
            { status: 500 }
        );
    }
}
