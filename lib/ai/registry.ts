import { AIProvider } from "./types";
import { OpenAIProvider } from "./providers/openai";
import { AnthropicProvider } from "./providers/anthropic";
import { GeminiProvider } from "./providers/gemini";
import { TokenRouterProvider } from "./providers/tokenrouter";
import { NvidiaNimProvider } from "./providers/nvidia";
import { NanoBananaImageProvider } from "./providers/nanobanana";
import { OpenRouterProvider } from "./providers/openrouter";

export interface ProviderConfig {
  id: string;
  name: string;
  enabled: boolean;
  priority: number;
  capabilities: ("text" | "image" | "embeddings" | "moderation")[];
}

export class ProviderRegistry {
  private static providers: Map<string, AIProvider> = new Map([
    ["openrouter", new OpenRouterProvider()],
    ["nvidia", new NvidiaNimProvider()],
    ["tokenrouter", new TokenRouterProvider()],
    ["nanobanana", new NanoBananaImageProvider()],
    ["openai", new OpenAIProvider()],
    ["anthropic", new AnthropicProvider()],
    ["gemini", new GeminiProvider()],
  ]);

  private static configs: Map<string, ProviderConfig> = new Map([
    ["openrouter", { id: "openrouter", name: "OpenRouter (DeepSeek R1 / GPT-4o)", enabled: true, priority: 1, capabilities: ["text"] }],
    ["nvidia", { id: "nvidia", name: "NVIDIA NIM (GLM 5.2 / Llama 3.1)", enabled: true, priority: 1, capabilities: ["text"] }],
    ["tokenrouter", { id: "tokenrouter", name: "TokenRouter (Kimi K3 Free)", enabled: true, priority: 2, capabilities: ["text"] }],
    ["nanobanana", { id: "nanobanana", name: "Nano Banana AI (Free Image Generator)", enabled: true, priority: 1, capabilities: ["image"] }],
    ["openai", { id: "openai", name: "OpenAI GPT-4o", enabled: true, priority: 3, capabilities: ["text", "image", "embeddings", "moderation"] }],
    ["anthropic", { id: "anthropic", name: "Anthropic Claude 3.5", enabled: true, priority: 4, capabilities: ["text"] }],
    ["gemini", { id: "gemini", name: "Google Gemini 1.5", enabled: true, priority: 5, capabilities: ["text", "image", "embeddings"] }],
  ]);

  static getProvider(id: string): AIProvider {
    const provider = this.providers.get(id.toLowerCase());
    if (!provider) {
      // Fall back to openrouter or nvidia if configured
      return this.providers.get("openrouter") || this.providers.get("nvidia") || this.providers.get("tokenrouter")!;
    }
    return provider;
  }

  static getFallbackProviders(capability: "text" | "image" | "embeddings"): AIProvider[] {
    const sorted = Array.from(this.configs.values())
      .filter((c) => c.enabled && c.capabilities.includes(capability))
      .sort((a, b) => a.priority - b.priority);

    const configured = sorted
      .map((c) => this.providers.get(c.id))
      .filter((p): p is AIProvider => p !== undefined && p.isConfigured());

    if (configured.length > 0) return configured;
    return Array.from(this.providers.values());
  }

  static getRegisteredProviders(): ProviderConfig[] {
    return Array.from(this.configs.values());
  }
}

