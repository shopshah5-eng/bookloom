import { NextResponse } from "next/server";
import { AIService } from "@/lib/ai/service";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { prompt, aiProvider = "tokenrouter", chaptersCount = 7, theme = "Modern Minimal" } = body;

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
      title: i === 0 ? "Introduction & Mindset Shift" : i === chaptersCount - 1 ? "Conclusion & Next Steps" : `Chapter ${i}: Strategic Execution`,
      summary: `Comprehensive chapter detailing principles of ${prompt || 'your ebook subject'}.`,
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
        creditsUsed: 0, // FREE with your API keys!
        createdAt: new Date().toISOString(),
      },
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message || "Generation failed" }, { status: 500 });
  }
}
