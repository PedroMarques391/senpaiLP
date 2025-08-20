import { sendEmail } from "../../controller/mail.controller";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

    const { name, email, phone, message, subject } = await req.json();;

    try {
        await sendEmail({
            type: "support",
            name,
            email,
            phone,
            message,
            subject,
        });

        return NextResponse.json({ status: 200 });
    } catch (error) {
        console.error('Erro ao enviar email:', error);
        return NextResponse.json(
            { status: 500 }
        );
    }
}
