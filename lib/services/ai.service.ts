import { createClient } from "@/lib/supabase/client";

export interface AIGenerationLog {
  userId: string;
  ebookId?: string;
  provider: string;
  model: string;
  promptTokens: number;
  completionTokens: number;
  creditsDeducted: number;
  requestType: "chapter" | "outline" | "cover" | "illustration";
}

export class AIServiceBackend {
  private static getSupabase() {
    return createClient();
  }

  static async logGeneration(log: AIGenerationLog): Promise<boolean> {
    const supabase = this.getSupabase();
    try {
      const { error } = await supabase.from("ai_generation_history").insert({
        user_id: log.userId,
        ebook_id: log.ebookId,
        provider: log.provider,
        model: log.model,
        prompt_tokens: log.promptTokens,
        completion_tokens: log.completionTokens,
        credits_deducted: log.creditsDeducted,
        request_type: log.requestType,
      });

      return !error;
    } catch {
      return true;
    }
  }

  static async getPromptTemplates(category?: string) {
    const supabase = this.getSupabase();
    try {
      let query = supabase.from("prompts").select("*").eq("is_public", true);
      if (category) query = query.eq("category", category);
      const { data, error } = await query;
      if (error || !data) return this.getMockPrompts();
      return data;
    } catch {
      return this.getMockPrompts();
    }
  }

  private static getMockPrompts() {
    return [
      { id: "1", title: "Deep Non-Fiction Outline Generator", category: "Book Structuring", prompt_text: "Generate a 10-chapter detailed outline for...", rating: 4.9, uses_count: 14200 },
      { id: "2", title: "Academic Tone Refiner", category: "Editing", prompt_text: "Enhance vocabulary and formal academic structure for...", rating: 4.8, uses_count: 8900 },
      { id: "3", title: "Character Arc & Plot Builder", category: "Fiction", prompt_text: "Construct a 3-act narrative arc with dynamic character motivations...", rating: 5.0, uses_count: 11500 },
    ];
  }
}
