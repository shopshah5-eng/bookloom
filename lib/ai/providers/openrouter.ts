import { AIProvider, TextGenerationRequest, TextGenerationResponse } from "../types";

export class OpenRouterProvider implements AIProvider {
  id = "openrouter";
  name = "OpenRouter (DeepSeek R1 / GPT-4o / Llama 3.3)";

  isConfigured(): boolean {
    return Boolean(process.env.OPENROUTER_API_KEY);
  }

  async generateText(request: TextGenerationRequest): Promise<TextGenerationResponse> {
    const apiKey = process.env.OPENROUTER_API_KEY;
    const baseUrl = process.env.OPENROUTER_BASE_URL || "https://openrouter.ai/api/v1";
    const modelName = request.model || process.env.OPENROUTER_MODEL || "deepseek/deepseek-r1";

    if (!apiKey) {
      throw new Error("OpenRouter API key is not configured.");
    }

    const response = await fetch(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
        "HTTP-Referer": "https://bookloom.app",
        "X-Title": "BookLoom Studio",
      },
      body: JSON.stringify({
        model: modelName,
        messages: [
          ...(request.systemPrompt ? [{ role: "system", content: request.systemPrompt }] : []),
          { role: "user", content: request.prompt },
        ],
        temperature: request.temperature ?? 0.7,
        max_tokens: request.maxTokens ?? 16384,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      throw new Error(`OpenRouter Error: ${err}`);
    }

    const data = await response.json();
    return {
      text: data.choices?.[0]?.message?.content || "",
      usage: {
        promptTokens: data.usage?.prompt_tokens || 0,
        completionTokens: data.usage?.completion_tokens || 0,
        totalTokens: data.usage?.total_tokens || 0,
      },
      provider: this.id,
      model: modelName,
    };
  }

  async generateImage(): Promise<any> {
    throw new Error("OpenRouter is a multi-LLM text & reasoning router. Use NanoBanana for images.");
  }
}
