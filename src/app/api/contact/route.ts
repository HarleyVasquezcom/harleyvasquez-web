import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    console.log("Contact form submission:", { name, email, message });
    // TODO: replace with Resend: await resend.emails.send(...)
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
