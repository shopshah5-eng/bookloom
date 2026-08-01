export type PlanTier = "free" | "creator" | "pro" | "team" | "enterprise";

export interface PlanLimits {
  tier: PlanTier;
  name: string;
  maxPages: number;
  maxChapters: number;
  maxEbooksPerMonth: number;
  monthlyCredits: number;
  allowedModels: string[];
  features: string[];
}

export const PLAN_LIMITS: Record<PlanTier, PlanLimits> = {
  free: {
    tier: "free",
    name: "Free",
    maxPages: 30, // 3 to 30 pages limit for free tier
    maxChapters: 5,
    maxEbooksPerMonth: 3,
    monthlyCredits: 500,
    allowedModels: ["moonshotai/kimi-k3-free", "nanobanana"],
    features: ["Max 30 pages per book", "3 ebooks/month", "PDF Export", "Standard AI Models"],
  },
  creator: {
    tier: "creator",
    name: "Creator",
    maxPages: 100, // Up to 100 pages for Creator plan
    maxChapters: 15,
    maxEbooksPerMonth: 15,
    monthlyCredits: 2500,
    allowedModels: ["moonshotai/kimi-k3-free", "z-ai/glm-5.2", "nanobanana"],
    features: ["Max 100 pages per book", "15 ebooks/month", "PDF & EPUB Export", "High-Context AI Models"],
  },
  pro: {
    tier: "pro",
    name: "Pro",
    maxPages: 300, // Up to 300 pages for Pro plan
    maxChapters: 35,
    maxEbooksPerMonth: 9999,
    monthlyCredits: 10000,
    allowedModels: ["moonshotai/kimi-k3-free", "z-ai/glm-5.2", "gpt-4o", "nanobanana"],
    features: ["Max 300 pages per book", "Unlimited ebooks", "Full Export Suite", "Priority AI Queue"],
  },
  team: {
    tier: "team",
    name: "Team",
    maxPages: 500,
    maxChapters: 60,
    maxEbooksPerMonth: 9999,
    monthlyCredits: 30000,
    allowedModels: ["moonshotai/kimi-k3-free", "z-ai/glm-5.2", "gpt-4o", "claude-3-5-sonnet", "nanobanana"],
    features: ["Max 500 pages per book", "Team Workspace", "Shared Assets", "API Access"],
  },
  enterprise: {
    tier: "enterprise",
    name: "Enterprise",
    maxPages: 1000,
    maxChapters: 100,
    maxEbooksPerMonth: 9999,
    monthlyCredits: 100000,
    allowedModels: ["all"],
    features: ["Custom page limits", "Dedicated Account Manager", "SSO & SAML", "On-Premise Deployments"],
  },
};

export function checkPageLimit(targetPages: number, plan: PlanTier = "free"): { allowed: boolean; maxAllowed: number; message?: string } {
  const limits = PLAN_LIMITS[plan] || PLAN_LIMITS.free;
  if (targetPages > limits.maxPages) {
    return {
      allowed: false,
      maxAllowed: limits.maxPages,
      message: `Your ${limits.name} plan limits ebooks to a maximum of ${limits.maxPages} pages. Please upgrade to create up to ${plan === "free" ? 100 : 300} pages!`,
    };
  }
  return { allowed: true, maxAllowed: limits.maxPages };
}
