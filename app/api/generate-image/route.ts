import { NextResponse } from "next/server";
import { NanoBananaImageProvider } from "@/lib/ai/providers/nanobanana";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { prompt, width = 1024, height = 1024 } = body;

    const provider = new NanoBananaImageProvider();
    const result = await provider.generateImage({
      prompt: prompt || "Luxury minimal hardcover book cover design, serif typography, high quality aesthetic",
      width,
      height,
    });

    return NextResponse.json({
      success: true,
      imageUrl: result.imageUrls[0],
      provider: "nanobanana",
      cost: "FREE",
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
