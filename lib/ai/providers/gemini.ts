import { AIProvider, TextGenerationRequest, TextGenerationResponse } from "../types";

export class GeminiProvider implements AIProvider {
  id = "gemini";
  name = "Google Gemini";

  isConfigured(): boolean {
    return Boolean(process.env.GEMINI_API_KEY);
  }

  async generateText(request: TextGenerationRequest): Promise<TextGenerationResponse> {
    if (!this.isConfigured()) {
      throw new Error("Gemini API key is not configured in environment variables.");
    }

    const modelName = request.model || "gemini-1.5-pro";
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: request.prompt }],
            },
          ],
          generationConfig: {
            temperature: request.temperature ?? 0.7,
            maxOutputTokens: request.maxTokens ?? 2000,
          },
        }),
      }
    );

    if (!response.ok) {
      const err = await response.text();
      throw new Error(`Gemini Provider Error: ${err}`);
    }

    const data = await response.json();
    const textResult = data.candidates?.[0]?.content?.parts?.[0]?.text || "";

    return {
      text: textResult,
      provider: this.id,
      model: modelName,
    };
  }
}
