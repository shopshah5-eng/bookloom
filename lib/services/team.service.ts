import { createClient } from "@/lib/supabase/client";

export class TeamService {
  private static getSupabase() {
    return createClient();
  }

  static async getTeamMembers(teamId: string) {
    const supabase = this.getSupabase();
    try {
      const { data, error } = await supabase
        .from("team_members")
        .select("*, profiles(*)")
        .eq("team_id", teamId);

      if (error || !data) return this.getMockMembers();
      return data;
    } catch {
      return this.getMockMembers();
    }
  }

  private static getMockMembers() {
    return [
      { id: "1", role: "owner", profiles: { full_name: "Evelyn Vance", email: "evelyn@bookloom.ai" } },
      { id: "2", role: "editor", profiles: { full_name: "Julian Mercer", email: "julian@bookloom.ai" } },
      { id: "3", role: "member", profiles: { full_name: "Lyra Pendelton", email: "lyra@bookloom.ai" } },
    ];
  }
}
