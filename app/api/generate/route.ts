import { NextResponse } from "next/server";
import { AIService } from "@/lib/ai/service";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { z } from "zod";

const GenerateSchema = z.object({
  prompt: z.string().trim().min(5).max(5000),
  chaptersCount: z.number().int().min(1).max(30).default(7),
  targetPages: z.number().int().min(1).max(500).optional(),
  aiProvider: z.string().optional().default("tokenrouter"),
  theme: z.string().optional().default("Modern Minimal"),
  ebookType: z.enum(["nonfiction", "fiction", "guide", "workbook"]).optional().default("nonfiction"),
});

export async function POST(req: Request) {
  try {
    const cookieStore = await cookies();
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

    const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch (error) {
            // Handled by middleware
          }
        },
      },
    });

    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const result = GenerateSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ 
        success: false, 
        error: "Invalid input", 
        details: result.error.format() 
      }, { status: 400 });
    }

    const { prompt, aiProvider, chaptersCount, theme } = result.data;

    // Pick provider: tokenrouter, nvidia, openai, etc.
    const selectedProviderId = aiProvider.toLowerCase().includes("nvidia") || aiProvider.toLowerCase().includes("glm")
      ? "nvidia"
      : aiProvider.toLowerCase().includes("token") || aiProvider.toLowerCase().includes("kimi")
      ? "tokenrouter"
      : "tokenrouter";

    const provider = AIService.getProvider(selectedProviderId);

    let generatedText = "";
    if (provider.isConfigured()) {
      try {
        const aiResponse = await provider.generateText({
          prompt: `Create a structured ${chaptersCount}-chapter ebook outline for an ebook titled or about: "${prompt}". Return chapter titles and brief summaries.`,
          systemPrompt: "You are an expert ebook author and publishing strategist.",
          maxTokens: 3000,
        });
        generatedText = aiResponse.text;
      } catch (e: any) {
        console.warn(`AI Provider ${selectedProviderId} call fallback:`, e.message);
      }
    }

    const defaultChapters = Array.from({ length: chaptersCount }, (_, i) => ({
      chapterNumber: i + 1,
      title: i === 0 ? "Introduction & Mindset Shift" : i === chaptersCount - 1 ? "Conclusion & Next Steps" : `Chapter ${i + 1}: Strategic Execution`,
      summary: `Comprehensive chapter detailing principles of ${prompt}.`,
      wordCountEstimate: 2500,
    }));

    return NextResponse.json({
      success: true,
      data: {
        id: `eb_${Date.now()}`,
        prompt,
        aiProvider: selectedProviderId,
        theme,
        chaptersCount,
        aiText: generatedText,
        outline: defaultChapters,
        creditsUsed: 1, // Will be managed in Phase 2
        createdAt: new Date().toISOString(),
      },
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message || "Generation failed" }, { status: 500 });
  }
}
