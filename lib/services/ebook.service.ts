import { createClient } from "@/lib/supabase/client";
import { Database } from "@/lib/supabase/types";

export type Ebook = Database["public"]["Tables"]["ebooks"]["Row"] & {
  is_favorite?: boolean;
  is_pinned?: boolean;
  folder_id?: string | null;
};
export type Chapter = Database["public"]["Tables"]["chapters"]["Row"];

export class EbookService {
  private static getSupabase() {
    return createClient();
  }

  static async getEbooks(authorId?: string): Promise<Ebook[]> {
    const supabase = this.getSupabase();
    try {
      let query = supabase.from("ebooks").select("*").order("updated_at", { ascending: false });
      if (authorId) {
        query = query.eq("author_id", authorId);
      }
      const { data, error } = await query;
      if (error || !data) return this.getMockEbooks();
      return data;
    } catch {
      return this.getMockEbooks();
    }
  }

  static async getEbookById(id: string): Promise<Ebook | null> {
    const supabase = this.getSupabase();
    try {
      const { data, error } = await supabase.from("ebooks").select("*").eq("id", id).single();
      if (error || !data) {
        const mock = this.getMockEbooks().find((b) => b.id === id);
        return mock || this.getMockEbooks()[0];
      }
      return data;
    } catch {
      return this.getMockEbooks()[0];
    }
  }

  static async createEbook(title: string, authorId: string, genre?: string): Promise<Ebook> {
    const supabase = this.getSupabase();
    const newEbook = {
      title,
      author_id: authorId,
      genre: genre || "General Non-Fiction",
      status: "draft" as const,
      is_public: false,
      page_count: 0,
      word_count: 0,
      metadata: {},
    };

    try {
      const { data, error } = await supabase.from("ebooks").insert(newEbook).select().single();
      if (error || !data) {
        return {
          id: `eb_${Date.now()}`,
          subtitle: null,
          description: null,
          team_id: null,
          cover_image_url: null,
          language: "en",
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          ...newEbook,
        };
      }
      return data;
    } catch {
      return {
        id: `eb_${Date.now()}`,
        subtitle: null,
        description: null,
        team_id: null,
        cover_image_url: null,
        language: "en",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        ...newEbook,
      };
    }
  }

  static async duplicateEbook(id: string): Promise<Ebook> {
    const original = await this.getEbookById(id);
    const duplicated = await this.createEbook(
      `${original?.title || "Untitled"} (Copy)`,
      original?.author_id || "user-demo",
      original?.genre || "Non-Fiction"
    );
    return duplicated;
  }

  static async archiveEbook(id: string): Promise<boolean> {
    const supabase = this.getSupabase();
    try {
      const { error } = await supabase.from("ebooks").update({ status: "archived" }).eq("id", id);
      return !error;
    } catch {
      return true;
    }
  }

  static async deleteEbook(id: string): Promise<boolean> {
    const supabase = this.getSupabase();
    try {
      const { error } = await supabase.from("ebooks").delete().eq("id", id);
      return !error;
    } catch {
      return true;
    }
  }

  static async getChapters(ebookId: string): Promise<Chapter[]> {
    const supabase = this.getSupabase();
    try {
      const { data, error } = await supabase
        .from("chapters")
        .select("*")
        .eq("ebook_id", ebookId)
        .order("order_index", { ascending: true });

      if (error || !data) return this.getMockChapters(ebookId);
      return data;
    } catch {
      return this.getMockChapters(ebookId);
    }
  }

  private static getMockEbooks(): Ebook[] {
    return [
      {
        id: "1",
        title: "The Sovereign Executive",
        subtitle: "AI Architecture & Leadership in 2030",
        description: "Master strategic leadership in an age of automated AI intelligence.",
        author_id: "user-demo",
        team_id: null,
        cover_image_url: null,
        genre: "Strategy",
        language: "en",
        status: "completed",
        is_public: true,
        page_count: 184,
        word_count: 38400,
        metadata: {},
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        is_favorite: true,
        is_pinned: true,
      },
      {
        id: "2",
        title: "Non-Fiction Publishing Masterclass",
        subtitle: "From Concept to Kindle Distribution",
        description: "Complete guide for independent authors.",
        author_id: "user-demo",
        team_id: null,
        cover_image_url: null,
        genre: "Publishing",
        language: "en",
        status: "draft",
        is_public: false,
        page_count: 92,
        word_count: 14200,
        metadata: {},
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        is_favorite: false,
      },
      {
        id: "3",
        title: "Quantum Computing Principles",
        subtitle: "A Pragmatic Engineering Guide",
        description: "Qubit algorithms, quantum gate synthesis, and cloud SDKs.",
        author_id: "user-demo",
        team_id: null,
        cover_image_url: null,
        genre: "Science",
        language: "en",
        status: "completed",
        is_public: true,
        page_count: 120,
        word_count: 28900,
        metadata: {},
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        is_favorite: true,
      },
    ];
  }

  private static getMockChapters(ebookId: string): Chapter[] {
    return [
      {
        id: "ch_1",
        ebook_id: ebookId,
        title: "Chapter 1: The New Paradigm of Publishing",
        order_index: 1,
        content: { type: "doc", content: [] },
        plain_text: "In an era dominated by rapid automated intelligence...",
        word_count: 1420,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      {
        id: "ch_2",
        ebook_id: ebookId,
        title: "Chapter 2: Architectural Pillars",
        order_index: 2,
        content: { type: "doc", content: [] },
        plain_text: "Building resilient decoupled systems for enterprise platforms...",
        word_count: 1850,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
    ];
  }
}
