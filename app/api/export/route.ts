import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const { ebookId = "book_101", title = "The Masterpiece Manuscript", format = "PDF", content, chapters } = body;

    const requestedFormat = (format || "PDF").toUpperCase();
    const timestamp = Date.now();
    const filename = `${(title || "ebook").toLowerCase().replace(/[^a-z0-9]/g, "_")}_${timestamp}`;

    let exportContent = "";
    let mimeType = "application/pdf";
    let dataUrl = "";

    // Build manuscript body dynamically from chapters array if available
    let manuscriptBody = "";
    if (Array.isArray(chapters) && chapters.length > 0) {
      manuscriptBody = `
===================================================================
${title.toUpperCase()}
Published via BookLoom AI Publishing Studio
===================================================================

${chapters.map((ch: any, i: number) => `
CHAPTER ${i + 1}: ${ch.title || `Chapter ${i + 1}`}
-------------------------------------------------------------------
${ch.content || ch.excerpt || "Manuscript content generated via BookLoom AI engine."}
`).join("\n\n")}
      `.trim();
    } else if (content) {
      manuscriptBody = content;
    } else {
      manuscriptBody = `
===================================================================
${title.toUpperCase()}
Published via BookLoom AI Publishing Studio
===================================================================

CHAPTER 1: INTRODUCTION & VISION
-------------------------------------------------------------------
Welcome to your generated publication. BookLoom's multi-model AI suite synthesizes structured chapters, curated insights, and elegant visual hierarchy.

CHAPTER 2: CORE CONCEPTS & STRATEGY
-------------------------------------------------------------------
Every section is formatted to meet professional self-publishing guidelines across Amazon KDP, Apple Books, and PDF print distributors.

CHAPTER 3: ACTION PLAN & CONCLUSION
-------------------------------------------------------------------
Thank you for publishing with BookLoom. 100% copyright and sales royalties belong to the author.
      `.trim();
    }

    if (requestedFormat === "TXT") {
      mimeType = "text/plain";
      exportContent = manuscriptBody;
      dataUrl = `data:text/plain;charset=utf-8,${encodeURIComponent(exportContent)}`;
    } else if (requestedFormat === "HTML") {
      mimeType = "text/html";
      exportContent = `<!DOCTYPE html><html><head><title>${title}</title><style>body{font-family:Georgia,serif;max-width:800px;margin:40px auto;padding:24px;line-height:1.8;color:#1a1a1a;}h1{font-size:32px;}h2{font-size:22px;border-bottom:1px solid #ddd;padding-bottom:6px;margin-top:32px;}</style></head><body><h1>${title}</h1><div>${manuscriptBody.replace(/\n/g, "<br/>")}</div></body></html>`;
      dataUrl = `data:text/html;charset=utf-8,${encodeURIComponent(exportContent)}`;
    } else if (requestedFormat === "EPUB") {
      mimeType = "application/epub+zip";
      exportContent = `EPUB-3.2-CONTAINER-${title}-${timestamp}\n${manuscriptBody}`;
      dataUrl = `data:application/epub+zip;base64,${Buffer.from(exportContent).toString("base64")}`;
    } else {
      // PDF stream
      mimeType = "application/pdf";
      exportContent = `%PDF-1.7 %BookLoom Printable Document Stream\n${manuscriptBody}`;
      dataUrl = `data:application/pdf;base64,${Buffer.from(exportContent).toString("base64")}`;
    }

    const calculatedSize = `${(Buffer.byteLength(exportContent, 'utf8') / 1024 + 1.2).toFixed(1)} KB`;

    return NextResponse.json({
      success: true,
      export: {
        id: `exp_${timestamp}`,
        ebookId,
        title,
        format: requestedFormat,
        filename: `${filename}.${requestedFormat.toLowerCase()}`,
        downloadUrl: dataUrl,
        fileUrl: dataUrl,
        fileSize: calculatedSize,
        mimeType,
        createdAt: new Date().toISOString(),
      },
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: "Failed to generate ebook export stream" }, { status: 500 });
  }
}
