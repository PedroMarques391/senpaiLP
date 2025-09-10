import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "../../controller/mail.controller";

export async function POST(req: NextRequest) {
  const data = await req.json();

  try {
    await sendEmail(data);
    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.log(error);
    NextResponse.json({ status: 500 });
    throw new Error("[api/emails/support] Erro ao enviar email", { cause: error });
  }
}
