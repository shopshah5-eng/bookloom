export interface QualityGateMetrics {
  unitTestPassRate: number;
  codeCoveragePercent: number;
  securityVulnerabilitiesCount: number;
  accessibilityViolationsCount: number;
  aiEvaluationScorePercent: number;
}

export interface CertificationResult {
  certified: boolean;
  blockers: string[];
}

export function evaluateReleaseQualityGate(metrics: QualityGateMetrics): CertificationResult {
  const blockers: string[] = [];

  if (metrics.unitTestPassRate < 100) {
    blockers.push(`Unit test pass rate is ${metrics.unitTestPassRate}%, requires 100%`);
  }

  if (metrics.codeCoveragePercent < 90) {
    blockers.push(`Code coverage is ${metrics.codeCoveragePercent}%, requires >= 90%`);
  }

  if (metrics.securityVulnerabilitiesCount > 0) {
    blockers.push(`Found ${metrics.securityVulnerabilitiesCount} blocking security vulnerabilities`);
  }

  if (metrics.accessibilityViolationsCount > 0) {
    blockers.push(`Found ${metrics.accessibilityViolationsCount} WCAG accessibility violations`);
  }

  return {
    certified: blockers.length === 0,
    blockers,
  };
}
