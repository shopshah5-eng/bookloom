export interface OrganizationPolicy {
  id: string;
  orgId: string;
  name: string;
  allowedRegions: string[];
  enforceMFA: boolean;
  maxSessionDurationHours: number;
  aiProcessingAllowed: boolean;
}

export function evaluateGovernancePolicy(
  policy: OrganizationPolicy,
  targetRegion: string
): { allowed: boolean; reason?: string } {
  if (!policy.allowedRegions.includes(targetRegion)) {
    return {
      allowed: false,
      reason: `Region '${targetRegion}' violates organization data residency policy. Allowed regions: ${policy.allowedRegions.join(', ')}`,
    };
  }

  if (!policy.aiProcessingAllowed) {
    return {
      allowed: false,
      reason: `AI model invocation disabled by enterprise administrator policy.`,
    };
  }

  return { allowed: true };
}
