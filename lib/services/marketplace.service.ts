import { createClient } from "@/lib/supabase/client";

export class MarketplaceService {
  private static getSupabase() {
    return createClient();
  }

  static async getTemplates() {
    const supabase = this.getSupabase();
    try {
      const { data, error } = await supabase.from("templates").select("*");
      if (error || !data) return this.getMockTemplates();
      return data;
    } catch {
      return this.getMockTemplates();
    }
  }

  private static getMockTemplates() {
    return [
      { id: "1", name: "Luxury Editorial Serif", category: "Serif", price_cents: 0, is_featured: true },
      { id: "2", name: "Minimalist Modern Mono", category: "Technical", price_cents: 0, is_featured: false },
      { id: "3", name: "Classic Literature", category: "Classic", price_cents: 0, is_featured: false },
    ];
  }
}
