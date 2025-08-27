import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '../controller/mail.controller';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        await sendEmail(body);

        return NextResponse.json({ status: 200 });

    } catch (error) {
        console.error('Erro ao enviar email:', error);
        return NextResponse.json(
            { status: 500 }
        );
    }
}

