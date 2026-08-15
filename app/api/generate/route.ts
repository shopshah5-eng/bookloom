import { NextResponse } from "next/server";
import { EbookGraphPipeline } from "@/lib/ai/pipelines/ebook-graph";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { z } from "zod";

const GenerateSchema = z.object({
  prompt: z.string().trim().min(3).max(5000),
  chaptersCount: z.number().int().min(1).max(30).optional().default(5),
  targetPages: z.number().int().min(1).max(500).optional().default(25),
  aiProvider: z.string().optional().default("tokenrouter"),
  theme: z.string().optional().default("Modern Minimal"),
  ebookType: z.string().optional().default("nonfiction"),
  mode: z.enum(["outline", "full"]).optional().default("outline"),
});

export async function POST(req: Request) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    let user: any = null;
    if (supabaseUrl && supabaseAnonKey) {
      try {
        const cookieStore = await cookies();
        const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
          cookies: {
            getAll() {
              return cookieStore.getAll();
            },
            setAll() {},
          },
        });
        const authRes = await supabase.auth.getUser();
        user = authRes.data?.user || null;
      } catch (e) {
        // Fallback to guest mode if Supabase session unavailable
      }
    }

    const body = await req.json();
    const result = GenerateSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid input",
          details: result.error.format(),
        },
        { status: 400 }
      );
    }

    const { prompt, aiProvider, chaptersCount, targetPages, theme, ebookType, mode } = result.data;

    const lowerProvider = aiProvider.toLowerCase();
    const selectedProviderId = lowerProvider.includes("openrouter") || lowerProvider.includes("deepseek") || lowerProvider.includes("gpt-4o") || lowerProvider.includes("claude")
      ? "openrouter"
      : lowerProvider.includes("tokenrouter") || lowerProvider.includes("kimi")
      ? "tokenrouter"
      : "nvidia";

    if (mode === "full") {
      const fullBook = await EbookGraphPipeline.generateFullManuscript({
        prompt,
        ebookType,
        targetPages,
        chaptersCount,
        providerId: selectedProviderId,
        theme,
      });

      return NextResponse.json({
        success: true,
        data: fullBook,
      });
    }

    // Default mode: Generate AI Outline
    const { title, subtitle, outline } = await EbookGraphPipeline.generateOutline({
      prompt,
      ebookType,
      targetPages,
      chaptersCount,
      providerId: selectedProviderId,
    });

    return NextResponse.json({
      success: true,
      data: {
        id: `eb_${Date.now()}`,
        title,
        subtitle,
        prompt,
        aiProvider: selectedProviderId,
        theme,
        targetPages,
        chaptersCount: outline.length,
        outline,
        creditsUsed: 1,
        createdAt: new Date().toISOString(),
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Generation failed" },
      { status: 500 }
    );
  }
}

