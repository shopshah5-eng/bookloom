import { AIProvider, TextGenerationRequest, TextGenerationResponse, ImageGenerationRequest, ImageGenerationResponse } from "../types";

export class OpenAIProvider implements AIProvider {
  id = "openai";
  name = "OpenAI";

  isConfigured(): boolean {
    return Boolean(process.env.OPENAI_API_KEY);
  }

  async generateText(request: TextGenerationRequest): Promise<TextGenerationResponse> {
    if (!this.isConfigured()) {
      throw new Error("OpenAI API key is not configured in environment variables.");
    }
    
    // Abstracted fetch call template for OpenAI API
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: request.model || "gpt-4o",
        messages: [
          ...(request.systemPrompt ? [{ role: "system", content: request.systemPrompt }] : []),
          { role: "user", content: request.prompt },
        ],
        temperature: request.temperature ?? 0.7,
        max_tokens: request.maxTokens ?? 2000,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      throw new Error(`OpenAI Provider Error: ${err}`);
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
      model: request.model || "gpt-4o",
    };
  }

  async generateImage(request: ImageGenerationRequest): Promise<ImageGenerationResponse> {
    if (!this.isConfigured()) {
      throw new Error("OpenAI API key is not configured in environment variables.");
    }

    const response = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "dall-e-3",
        prompt: request.prompt,
        n: request.numOutputs || 1,
        size: "1024x1024",
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      throw new Error(`OpenAI Image Generation Error: ${err}`);
    }

    const data = await response.json();
    return {
      imageUrls: data.data?.map((item: { url: string }) => item.url) || [],
      provider: this.id,
    };
  }
}
