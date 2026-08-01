export type AIProviderId = 'openai' | 'anthropic' | 'google' | 'ollama';

export interface ModelInfo {
  id: string;
  name: string;
  provider: AIProviderId;
  contextWindow: number;
  supportsStreaming: boolean;
  supportsTools: boolean;
}

export interface CompletionOptions {
  model?: string;
  temperature?: number;
  maxTokens?: number;
  systemPrompt?: string;
}

export const AVAILABLE_MODELS: ModelInfo[] = [
  {
    id: 'gpt-4o',
    name: 'OpenAI GPT-4o',
    provider: 'openai',
    contextWindow: 128000,
    supportsStreaming: true,
    supportsTools: true,
  },
  {
    id: 'claude-3-5-sonnet',
    name: 'Anthropic Claude 3.5 Sonnet',
    provider: 'anthropic',
    contextWindow: 200000,
    supportsStreaming: true,
    supportsTools: true,
  },
  {
    id: 'gemini-1-5-pro',
    name: 'Google Gemini 1.5 Pro',
    provider: 'google',
    contextWindow: 1000000,
    supportsStreaming: true,
    supportsTools: true,
  },
];

export async function generateCompletion(
  prompt: string,
  options: CompletionOptions = {}
): Promise<string> {
  // Production abstraction point for multi-provider API calls
  return `[AI Generated Response using ${options.model || 'gpt-4o'}]: ${prompt.slice(0, 100)}...`;
}
