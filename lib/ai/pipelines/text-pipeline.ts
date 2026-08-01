import { AITaskRouter } from "../router";
import { PromptEngine } from "../prompt-engine";

export class TextGenerationPipeline {
  static async generateChapterContent(bookTitle: string, chapterNum: number, chapterTitle: string, tone: string): Promise<string> {
    const { systemPrompt, userPrompt } = PromptEngine.render("chapter-writing", {
      bookTitle,
      chapterNum: String(chapterNum),
      chapterTitle,
      tone,
      audience: "enterprise leaders",
    });

    const response = await AITaskRouter.routeTextTask("long-form-writing", {
      prompt: userPrompt,
      systemPrompt,
      temperature: 0.7,
    });

    return response.text;
  }
}
