import { AIProvider, TextGenerationRequest, TextGenerationResponse } from "../types";

export class TokenRouterProvider implements AIProvider {
  id = "tokenrouter";
  name = "TokenRouter (Kimi K3 Free)";

  isConfigured(): boolean {
    return Boolean(process.env.TOKENROUTER_API_KEY);
  }

  async generateText(request: TextGenerationRequest): Promise<TextGenerationResponse> {
    const apiKey = process.env.TOKENROUTER_API_KEY;
    const baseUrl = process.env.TOKENROUTER_BASE_URL || "https://api.tokenrouter.com/v1";
    const modelName = request.model || process.env.TOKENROUTER_MODEL || "moonshotai/kimi-k3-free";

    if (!apiKey) {
      throw new Error("TokenRouter API key is not configured.");
    }

    const response = await fetch(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: modelName,
        messages: [
          ...(request.systemPrompt ? [{ role: "system", content: request.systemPrompt }] : []),
          { role: "user", content: request.prompt },
        ],
        temperature: request.temperature ?? 0.7,
        max_tokens: request.maxTokens ?? 4000,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      throw new Error(`TokenRouter Error: ${err}`);
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
    throw new Error("TokenRouter is a text/reasoning provider and does not support image generation directly.");
  }
}
