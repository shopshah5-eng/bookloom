import { AIProvider, TextGenerationRequest, TextGenerationResponse } from "../types";

export class AnthropicProvider implements AIProvider {
  id = "anthropic";
  name = "Anthropic Claude";

  isConfigured(): boolean {
    return Boolean(process.env.ANTHROPIC_API_KEY);
  }

  async generateText(request: TextGenerationRequest): Promise<TextGenerationResponse> {
    if (!this.isConfigured()) {
      throw new Error("Anthropic API key is not configured in environment variables.");
    }

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY || "",
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: request.model || "claude-3-5-sonnet-20241022",
        system: request.systemPrompt,
        messages: [{ role: "user", content: request.prompt }],
        max_tokens: request.maxTokens ?? 2000,
        temperature: request.temperature ?? 0.7,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      throw new Error(`Anthropic Provider Error: ${err}`);
    }

    const data = await response.json();
    return {
      text: data.content?.[0]?.text || "",
      usage: {
        promptTokens: data.usage?.input_tokens || 0,
        completionTokens: data.usage?.output_tokens || 0,
        totalTokens: (data.usage?.input_tokens || 0) + (data.usage?.output_tokens || 0),
      },
      provider: this.id,
      model: request.model || "claude-3-5-sonnet",
    };
  }
}
