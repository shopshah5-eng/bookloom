import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    return NextResponse.json({
      success: true,
      status: "webhook_active",
      event: "export.ready",
      receivedAt: new Date().toISOString(),
      payload: body,
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Invalid webhook payload" }, { status: 400 });
  }
}

export async function GET() {
  return NextResponse.json({
    status: "active",
    endpoint: "/api/webhooks/exports",
    supportedEvents: ["export.started", "export.ready", "export.failed"],
  });
}
