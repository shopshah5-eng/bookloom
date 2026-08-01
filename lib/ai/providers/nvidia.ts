import { AIProvider, TextGenerationRequest, TextGenerationResponse } from "../types";

export class NvidiaNimProvider implements AIProvider {
  id = "nvidia";
  name = "NVIDIA NIM (GLM 5.2)";

  isConfigured(): boolean {
    return Boolean(process.env.NVIDIA_NIM_API_KEY);
  }

  async generateText(request: TextGenerationRequest): Promise<TextGenerationResponse> {
    const apiKey = process.env.NVIDIA_NIM_API_KEY;
    const baseUrl = process.env.NVIDIA_NIM_BASE_URL || "https://integrate.api.nvidia.com/v1";
    const modelName = request.model || process.env.NVIDIA_MODEL || "z-ai/glm-5.2";

    if (!apiKey) {
      throw new Error("NVIDIA NIM API key is not configured.");
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
        top_p: 1,
        max_tokens: request.maxTokens ?? 16384,
        seed: 42,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      throw new Error(`NVIDIA NIM Error: ${err}`);
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
    throw new Error("NVIDIA NIM GLM-5.2 is a high-context reasoning model and does not support image generation.");
  }
}
