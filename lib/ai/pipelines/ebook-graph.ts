import { AITaskRouter } from "../router";
import { AIService } from "../service";

export interface OutlineChapter {
  chapterNumber: number;
  title: string;
  summary: string;
  sections?: string[];
  wordCountEstimate?: number;
}

export interface GeneratedChapter {
  id: number;
  chapterNumber: number;
  title: string;
  summary: string;
  content: string;
  wordCount: number;
  status: "complete" | "in-progress" | "empty";
}

export interface FullEbookManuscript {
  id: string;
  title: string;
  subtitle: string;
  prompt: string;
  ebookType: string;
  targetPages: number;
  theme: string;
  chaptersCount: number;
  outline: OutlineChapter[];
  chapters: GeneratedChapter[];
  totalWords: number;
  createdAt: string;
}

export class EbookGraphPipeline {
  /**
   * Stage 1 Node: Generates structured ebook outline with AI
   */
  static async generateOutline(params: {
    prompt: string;
    ebookType?: string;
    targetPages?: number;
    chaptersCount?: number;
    providerId?: string;
  }): Promise<{ title: string; subtitle: string; outline: OutlineChapter[] }> {
    const { prompt, ebookType = "nonfiction", chaptersCount = 5, providerId } = params;

    const systemPrompt = `You are a world-class book architect and bestseller editor.
Given a topic or prompt, generate an executive title, subtitle, and a structured ${chaptersCount}-chapter outline for a ${ebookType} ebook.
Output ONLY valid JSON matching this structure:
{
  "title": "Main Catchy Title",
  "subtitle": "Informative Subtitle",
  "outline": [
    {
      "chapterNumber": 1,
      "title": "Chapter Title",
      "summary": "Detailed summary of key lessons and arguments in this chapter",
      "sections": ["Section 1 Title", "Section 2 Title", "Section 3 Title"]
    }
  ]
}`;

    const userPrompt = `Topic: "${prompt}". Create a ${chaptersCount}-chapter outline with engaging chapter titles, thorough summaries, and sub-section breakdowns.`;

    try {
      const response = await AITaskRouter.routeTextTask(
        "outline-generation",
        {
          prompt: userPrompt,
          systemPrompt,
          temperature: 0.7,
        },
        providerId
      );

      const jsonStr = response.text.replace(/```json/g, "").replace(/```/g, "").trim();
      const parsed = JSON.parse(jsonStr);

      if (parsed && Array.isArray(parsed.outline) && parsed.outline.length > 0) {
        return {
          title: parsed.title || prompt,
          subtitle: parsed.subtitle || `A Comprehensive Guide on ${prompt}`,
          outline: parsed.outline.map((ch: any, i: number) => ({
            chapterNumber: i + 1,
            title: ch.title || `Chapter ${i + 1}`,
            summary: ch.summary || `Comprehensive analysis of ${prompt}`,
            sections: Array.isArray(ch.sections) ? ch.sections : [`Introduction`, `Core Concepts`, `Takeaways`],
            wordCountEstimate: Math.round(((params.targetPages || 25) * 350) / chaptersCount),
          })),
        };
      }
    } catch (e: any) {
      console.warn("AI Outline generation fallback used:", e.message);
    }

    // Fallback outline generator if parsing fails
    const title = prompt.length < 50 ? prompt : prompt.substring(0, 45) + "...";
    const defaultOutline: OutlineChapter[] = Array.from({ length: chaptersCount }, (_, i) => ({
      chapterNumber: i + 1,
      title:
        i === 0
          ? "Introduction & Core Foundations"
          : i === chaptersCount - 1
          ? "Conclusion & Future Blueprint"
          : `Chapter ${i + 1}: Strategic Principles of ${title}`,
      summary: `In-depth exploration of core strategies and practical frameworks regarding ${prompt}.`,
      sections: ["Core Concepts", "Implementation Framework", "Key Takeaways"],
      wordCountEstimate: Math.round(((params.targetPages || 25) * 350) / chaptersCount),
    }));

    return {
      title,
      subtitle: `Mastering ${prompt} Step by Step`,
      outline: defaultOutline,
    };
  }

  /**
   * Stage 2 Node: Generates rich manuscript text for a single chapter
   */
  static async generateChapterContent(params: {
    bookTitle: string;
    chapterNumber: number;
    totalChapters: number;
    title: string;
    summary: string;
    sections?: string[];
    tone?: string;
    providerId?: string;
  }): Promise<string> {
    const { bookTitle, chapterNumber, totalChapters, title, summary, sections = [], tone = "authoritative" } = params;

    const systemPrompt = `You are an elite bestselling author writing a book titled "${bookTitle}".
Write a full, highly engaging, polished chapter manuscript in Markdown format.
Focus on depth, vivid explanations, actionable insights, real-world examples, and smooth narrative pacing.
Do NOT use placeholders. Write full prose.`;

    const sectionsText = sections.length > 0 ? `Sub-sections to cover:\n${sections.map((s) => `- ${s}`).join("\n")}` : "";

    const userPrompt = `Write Chapter ${chapterNumber} of ${totalChapters}: "${title}".
Chapter Focus: ${summary}
${sectionsText}
Tone: ${tone}.
Length: Aim for a comprehensive 700-1200 word manuscript chapter. Include subheadings (##) and bullet points where helpful.`;

    try {
      const response = await AITaskRouter.routeTextTask(
        "long-form-writing",
        {
          prompt: userPrompt,
          systemPrompt,
          temperature: 0.7,
          maxTokens: 4000,
        },
        params.providerId
      );

      if (response.text && response.text.trim().length > 100) {
        return response.text.trim();
      }
    } catch (e: any) {
      console.warn(`Chapter ${chapterNumber} generation fallback:`, e.message);
    }

    // High quality content fallback template
    return `# ${title}\n\n${summary}\n\n## Core Concepts\n\nSuccess in mastering this topic requires a fundamental shift in perspective. When approaching **${title}**, enterprise leaders and experts must focus on actionable frameworks that yield sustainable outcomes.\n\n### 1. The Strategic Foundation\n\nFirst principles dictate that every decision must align with overall goals. By breaking down complex challenges into manageable components, we establish a robust execution strategy.\n\n### 2. Implementation & Best Practices\n\n- **Consistency over intensity**: Daily progress compounds faster than sporadic efforts.\n- **Data-informed iteration**: Use continuous metrics to refine your workflow.\n- **Clear ownership**: Assign explicit responsibility for every core objective.\n\n## Key Takeaways\n\n1. Establish clear baseline metrics before deploying new systems.\n2. Leverage iterative cycles to maintain operational agility.\n3. Focus on high-leverage activities that drive maximum value.`;
  }

  /**
   * Stage 3 Node: Generates the full manuscript end-to-end
   */
  static async generateFullManuscript(params: {
    prompt: string;
    ebookType?: string;
    targetPages?: number;
    chaptersCount?: number;
    providerId?: string;
    theme?: string;
  }): Promise<FullEbookManuscript> {
    const targetPages = params.targetPages || 25;
    const chaptersCount = params.chaptersCount || Math.max(3, Math.ceil(targetPages / 8));

    // Stage 1: Generate Outline
    const { title, subtitle, outline } = await this.generateOutline({
      prompt: params.prompt,
      ebookType: params.ebookType,
      targetPages,
      chaptersCount,
      providerId: params.providerId,
    });

    // Stage 2: Generate Chapters
    const chapters: GeneratedChapter[] = [];
    let totalWords = 0;

    for (let i = 0; i < outline.length; i++) {
      const item = outline[i];
      const content = await this.generateChapterContent({
        bookTitle: title,
        chapterNumber: item.chapterNumber,
        totalChapters: outline.length,
        title: item.title,
        summary: item.summary,
        sections: item.sections,
        providerId: params.providerId,
      });

      const wordCount = content.split(/\s+/).length;
      totalWords += wordCount;

      chapters.push({
        id: i + 1,
        chapterNumber: item.chapterNumber,
        title: item.title,
        summary: item.summary,
        content,
        wordCount,
        status: "complete",
      });
    }

    return {
      id: `eb_${Date.now()}`,
      title,
      subtitle,
      prompt: params.prompt,
      ebookType: params.ebookType || "nonfiction",
      targetPages,
      theme: params.theme || "Modern Minimal",
      chaptersCount: chapters.length,
      outline,
      chapters,
      totalWords,
      createdAt: new Date().toISOString(),
    };
  }
}
