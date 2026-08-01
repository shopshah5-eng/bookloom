import { IntermediatePublication } from './compiler';

export interface PreflightCheckResult {
  valid: boolean;
  warnings: string[];
  errors: string[];
}

export function runPreflightChecks(pub: IntermediatePublication): PreflightCheckResult {
  const warnings: string[] = [];
  const errors: string[] = [];

  if (!pub.title || pub.title.trim() === '') {
    errors.push('Publication title is missing');
  }

  if (!pub.author || pub.author.trim() === '') {
    warnings.push('Author attribution is blank');
  }

  if (pub.chapters.length === 0) {
    errors.push('Publication contains no chapters');
  }

  if (!pub.isbn) {
    warnings.push('ISBN is missing (Required for commercial print distribution)');
  }

  return {
    valid: errors.length === 0,
    warnings,
    errors,
  };
}
