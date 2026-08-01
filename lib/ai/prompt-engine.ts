export interface PromptTemplate {
  id: string;
  name: string;
  category: "writing" | "outline" | "editing" | "cover";
  systemPrompt: string;
  userPromptTemplate: string;
}

export class PromptEngine {
  private static templates: Map<string, PromptTemplate> = new Map([
    [
      "chapter-writing",
      {
        id: "chapter-writing",
        name: "Chapter Content Synthesis",
        category: "writing",
        systemPrompt: "You are a master non-fiction book editor crafting luxury editorial literature.",
        userPromptTemplate: "Write Chapter {{chapterNum}}: '{{chapterTitle}}' for the book '{{bookTitle}}'. Maintain a {{tone}} tone for {{audience}}.",
      },
    ],
    [
      "outline-builder",
      {
        id: "outline-builder",
        name: "10-Chapter Book Outline Builder",
        category: "outline",
        systemPrompt: "You are a senior publishing editor designing cohesive multi-chapter outlines.",
        userPromptTemplate: "Generate a 10-chapter detailed outline for a {{genre}} ebook titled '{{bookTitle}}'.",
      },
    ],
  ]);

  static render(templateId: string, variables: Record<string, string>): { systemPrompt: string; userPrompt: string } {
    const tmpl = this.templates.get(templateId);
    if (!tmpl) throw new Error(`Prompt template '${templateId}' not found.`);

    let userPrompt = tmpl.userPromptTemplate;
    Object.entries(variables).forEach(([key, val]) => {
      userPrompt = userPrompt.replace(new RegExp(`{{${key}}}`, "g"), val);
    });

    return { systemPrompt: tmpl.systemPrompt, userPrompt };
  }
}
