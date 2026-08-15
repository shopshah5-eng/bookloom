import { NextResponse } from "next/server";
import { EbookGraphPipeline } from "@/lib/ai/pipelines/ebook-graph";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const {
      bookTitle = "Book Loom Masterpiece",
      chapterNumber = 1,
      totalChapters = 5,
      title = "Chapter 1",
      summary = "Chapter Overview",
      sections = [],
      tone = "Authoritative",
      prompt,
    } = body;

    let content = "";
    if (prompt) {
      // Direct writer assistant call
      content = await EbookGraphPipeline.generateChapterContent({
        bookTitle,
        chapterNumber,
        totalChapters,
        title: title || "Custom Section",
        summary: prompt,
        sections,
        tone,
      });
    } else {
      content = await EbookGraphPipeline.generateChapterContent({
        bookTitle,
        chapterNumber,
        totalChapters,
        title,
        summary,
        sections,
        tone,
      });
    }

    const wordCount = content.split(/\s+/).length;

    return NextResponse.json({
      success: true,
      data: {
        chapterNumber,
        title,
        content,
        wordCount,
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Failed to generate chapter" },
      { status: 500 }
    );
  }
}
