export interface TextGenerationRequest {
  prompt: string;
  systemPrompt?: string;
  model?: string;
  temperature?: number;
  maxTokens?: number;
}

export interface TextGenerationResponse {
  text: string;
  usage?: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
  provider: string;
  model: string;
}

export interface ImageGenerationRequest {
  prompt: string;
  negativePrompt?: string;
  aspectRatio?: "1:1" | "16:9" | "9:16" | "3:4" | "4:3";
  style?: string;
  numOutputs?: number;
  width?: number;
  height?: number;
  seed?: number;
}

export interface ImageGenerationResponse {
  imageUrls: string[];
  provider: string;
}

export interface AIProvider {
  id: string;
  name: string;
  generateText(request: TextGenerationRequest): Promise<TextGenerationResponse>;
  generateImage?(request: ImageGenerationRequest): Promise<ImageGenerationResponse>;
  isConfigured(): boolean;
}
