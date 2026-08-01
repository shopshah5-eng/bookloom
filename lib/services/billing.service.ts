import { createClient } from "@/lib/supabase/client";

export class BillingService {
  private static getSupabase() {
    return createClient();
  }

  static async getCreditBalance(userId: string): Promise<number> {
    const supabase = this.getSupabase();
    try {
      const { data, error } = await supabase
        .from("credit_balances")
        .select("balance")
        .eq("user_id", userId)
        .single();

      if (error || !data) return 500; // default 500 credits
      return data.balance;
    } catch {
      return 500;
    }
  }

  static async deductCredits(userId: string, amount: number, description: string): Promise<boolean> {
    const supabase = this.getSupabase();
    try {
      const current = await this.getCreditBalance(userId);
      const newBalance = Math.max(0, current - amount);

      await supabase.from("credit_balances").upsert({
        user_id: userId,
        balance: newBalance,
        updated_at: new Date().toISOString(),
      });

      await supabase.from("credit_transactions").insert({
        user_id: userId,
        amount: -amount,
        description,
      });

      return true;
    } catch {
      return true;
    }
  }
}
