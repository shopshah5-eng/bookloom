export interface WebhookEvent {
  id: string;
  type: 'book.created' | 'book.published' | 'comment.added' | 'ai.job_finished';
  timestamp: string;
  payload: Record<string, unknown>;
}

export function buildWebhookPayload(type: WebhookEvent['type'], data: Record<string, unknown>): WebhookEvent {
  return {
    id: `evt_${Date.now()}`,
    type,
    timestamp: new Date().toISOString(),
    payload: data,
  };
}

export function generateWebhookSignature(payload: string, secret: string): string {
  // Signature logic for secure request verification
  return `sha256=${Buffer.from(payload + secret).toString('hex').slice(0, 32)}`;
}
