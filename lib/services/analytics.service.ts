import { createClient } from "@/lib/supabase/client";

export class AnalyticsService {
  private static getSupabase() {
    return createClient();
  }

  static async trackEvent(eventType: string, payload: Record<string, unknown> = {}) {
    const supabase = this.getSupabase();
    try {
      await supabase.from("analytics_events").insert({
        event_type: eventType,
        event_payload: payload,
      });
    } catch {
      // Non-blocking telemetry
    }
  }

  static async logActivity(action: string, details: Record<string, unknown> = {}) {
    const supabase = this.getSupabase();
    try {
      await supabase.from("activity_logs").insert({
        action,
        details,
      });
    } catch {
      // Non-blocking telemetry
    }
  }
}
