import { AIProvider } from "./types";
import { OpenAIProvider } from "./providers/openai";
import { AnthropicProvider } from "./providers/anthropic";
import { GeminiProvider } from "./providers/gemini";

export interface ProviderConfig {
  id: string;
  name: string;
  enabled: boolean;
  priority: number;
  capabilities: ("text" | "image" | "embeddings" | "moderation")[];
}

export class ProviderRegistry {
  private static providers: Map<string, AIProvider> = new Map([
    ["openai", new OpenAIProvider()],
    ["anthropic", new AnthropicProvider()],
    ["gemini", new GeminiProvider()],
  ]);

  private static configs: Map<string, ProviderConfig> = new Map([
    ["openai", { id: "openai", name: "OpenAI GPT-4o", enabled: true, priority: 1, capabilities: ["text", "image", "embeddings", "moderation"] }],
    ["anthropic", { id: "anthropic", name: "Anthropic Claude 3.5", enabled: true, priority: 2, capabilities: ["text"] }],
    ["gemini", { id: "gemini", name: "Google Gemini 1.5", enabled: true, priority: 3, capabilities: ["text", "image", "embeddings"] }],
  ]);

  static getProvider(id: string): AIProvider {
    const provider = this.providers.get(id.toLowerCase());
    if (!provider) throw new Error(`AI Provider '${id}' is not registered.`);
    return provider;
  }

  static getFallbackProviders(capability: "text" | "image" | "embeddings"): AIProvider[] {
    const sorted = Array.from(this.configs.values())
      .filter((c) => c.enabled && c.capabilities.includes(capability))
      .sort((a, b) => a.priority - b.priority);

    return sorted.map((c) => this.getProvider(c.id));
  }

  static getRegisteredProviders(): ProviderConfig[] {
    return Array.from(this.configs.values());
  }
}
