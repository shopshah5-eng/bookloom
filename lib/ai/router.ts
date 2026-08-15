import { ProviderRegistry } from "./registry";
import { TextGenerationRequest, TextGenerationResponse, ImageGenerationRequest, ImageGenerationResponse } from "./types";
import { AIObservability } from "./observability";

export type AITaskType =
  | "long-form-writing"
  | "outline-generation"
  | "summarization"
  | "rewriting"
  | "cover-art"
  | "illustration"
  | "embeddings";

export class AITaskRouter {
  static async routeTextTask(taskType: AITaskType, request: TextGenerationRequest, preferredProviderId?: string): Promise<TextGenerationResponse> {
    const startTime = Date.now();
    let providers = ProviderRegistry.getFallbackProviders("text");

    if (preferredProviderId) {
      const preferred = ProviderRegistry.getProvider(preferredProviderId);
      if (preferred && preferred.isConfigured()) {
        providers = [preferred, ...providers.filter((p) => p.id !== preferred.id)];
      }
    }

    let lastError: Error | null = null;
    for (const provider of providers) {
      try {
        const response = await provider.generateText(request);
        const latencyMs = Date.now() - startTime;
        AIObservability.logRequest(provider.id, response.model || "default", latencyMs, true, response.usage?.totalTokens || 0);
        return response;
      } catch (err: any) {
        lastError = err;
        AIObservability.logRequest(provider.id, "default", Date.now() - startTime, false, 0, err.message);
      }
    }

    throw new Error(`All AI providers failed for task '${taskType}': ${lastError?.message || "Unknown error"}`);
  }

  static async routeImageTask(taskType: AITaskType, request: ImageGenerationRequest): Promise<ImageGenerationResponse> {
    const startTime = Date.now();
    const providers = ProviderRegistry.getFallbackProviders("image");

    for (const provider of providers) {
      if (provider.generateImage) {
        try {
          const response = await provider.generateImage(request);
          AIObservability.logRequest(provider.id, "image-gen", Date.now() - startTime, true, 0);
          return response;
        } catch (err: any) {
          AIObservability.logRequest(provider.id, "image-gen", Date.now() - startTime, false, 0, err.message);
        }
      }
    }

    throw new Error(`No image generation provider available for task '${taskType}'`);
  }
}
