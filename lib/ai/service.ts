import { AIProvider } from "./types";
import { OpenAIProvider } from "./providers/openai";
import { AnthropicProvider } from "./providers/anthropic";
import { GeminiProvider } from "./providers/gemini";
import { TokenRouterProvider } from "./providers/tokenrouter";
import { NvidiaNimProvider } from "./providers/nvidia";
import { NanoBananaImageProvider } from "./providers/nanobanana";

export class AIService {
  private static providers: Map<string, AIProvider> = new Map([
    ["openai", new OpenAIProvider()],
    ["anthropic", new AnthropicProvider()],
    ["gemini", new GeminiProvider()],
    ["tokenrouter", new TokenRouterProvider()],
    ["nvidia", new NvidiaNimProvider()],
    ["nanobanana", new NanoBananaImageProvider()],
  ]);

  static getProvider(providerId: string = "tokenrouter"): AIProvider {
    const provider = this.providers.get(providerId.toLowerCase());
    if (!provider) {
      return this.providers.get("tokenrouter") || this.providers.get("openai")!;
    }
    return provider;
  }

  static getAvailableProviders(): { id: string; name: string; isConfigured: boolean }[] {
    return Array.from(this.providers.values()).map((p) => ({
      id: p.id,
      name: p.name,
      isConfigured: p.isConfigured(),
    }));
  }
}
