import { NextResponse } from "next/server";

export async function GET() {
  const pixKey = process.env.PIX_KEY;

  if (!pixKey) {
    return NextResponse.json({ error: "[getPix] Pix key not found" }, { status: 500 });
  }

  return NextResponse.json({
    key: pixKey,
  });
}
