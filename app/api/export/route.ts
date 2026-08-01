import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { ebookId, format = "PDF" } = body;

    return NextResponse.json({
      success: true,
      export: {
        id: `exp_${Date.now()}`,
        ebookId,
        format,
        fileUrl: `/images/book_wealth_mindset.png`,
        fileSize: format === "ZIP" ? "245 MB" : format === "EPUB" ? "3.2 MB" : "8.4 MB",
        createdAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to export file" }, { status: 500 });
  }
}
