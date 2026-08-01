import { AIProvider, ImageGenerationRequest, ImageGenerationResponse } from "../types";

export class NanoBananaImageProvider implements AIProvider {
  id = "nanobanana";
  name = "Nano Banana AI (Free Image Generator)";

  isConfigured(): boolean {
    return true; // Free public endpoint, no paid API key required!
  }

  async generateText(): Promise<any> {
    throw new Error("Nano Banana is an image generation model and does not generate text.");
  }

  async generateImage(request: ImageGenerationRequest): Promise<ImageGenerationResponse> {
    const prompt = encodeURIComponent(request.prompt);
    const width = request.width || 1024;
    const height = request.height || 1024;
    const seed = request.seed || Math.floor(Math.random() * 1000000);

    // Nano Banana / Pollinations Free High-Speed Generative Endpoint
    const imageUrl = `https://image.pollinations.ai/prompt/${prompt}?width=${width}&height=${height}&seed=${seed}&model=nanobanana&nologo=true`;

    return {
      imageUrls: [imageUrl],
      provider: this.id,
    };
  }
}
