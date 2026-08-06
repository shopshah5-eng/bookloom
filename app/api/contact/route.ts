import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const { email, message } = body;

    if (!email || !message) {
      return NextResponse.json({ success: false, error: "Email and message are required." }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      ticketId: `tkt_${Date.now()}`,
      message: "Thank you for contacting BookLoom Support. We will respond within 24 hours.",
      receivedAt: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to process message." }, { status: 500 });
  }
}
