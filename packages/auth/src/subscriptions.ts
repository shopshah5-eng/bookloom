export type PlanTier = 'free' | 'starter' | 'professional' | 'business' | 'enterprise';

export interface PlanEntitlements {
  tier: PlanTier;
  maxProjects: number;
  maxSeats: number;
  monthlyAITokens: number;
  publishingFormats: string[];
  customPluginsAllowed: boolean;
}

export const PLAN_REGISTRY: Record<PlanTier, PlanEntitlements> = {
  free: {
    tier: 'free',
    maxProjects: 2,
    maxSeats: 1,
    monthlyAITokens: 50000,
    publishingFormats: ['pdf', 'html'],
    customPluginsAllowed: false,
  },
  starter: {
    tier: 'starter',
    maxProjects: 10,
    maxSeats: 3,
    monthlyAITokens: 500000,
    publishingFormats: ['pdf', 'epub', 'docx', 'html', 'md'],
    customPluginsAllowed: false,
  },
  professional: {
    tier: 'professional',
    maxProjects: 50,
    maxSeats: 10,
    monthlyAITokens: 2500000,
    publishingFormats: ['pdf', 'epub', 'docx', 'html', 'md'],
    customPluginsAllowed: true,
  },
  business: {
    tier: 'business',
    maxProjects: 250,
    maxSeats: 50,
    monthlyAITokens: 10000000,
    publishingFormats: ['pdf', 'epub', 'docx', 'html', 'md'],
    customPluginsAllowed: true,
  },
  enterprise: {
    tier: 'enterprise',
    maxProjects: 9999,
    maxSeats: 9999,
    monthlyAITokens: 100000000,
    publishingFormats: ['pdf', 'epub', 'docx', 'html', 'md'],
    customPluginsAllowed: true,
  },
};

export function getEntitlementsForPlan(tier: PlanTier): PlanEntitlements {
  return PLAN_REGISTRY[tier] || PLAN_REGISTRY.free;
}
