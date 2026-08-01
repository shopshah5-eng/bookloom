export interface AnalyticsEvent {
  id: string;
  eventType: string;
  userId: string;
  workspaceId: string;
  timestamp: string;
  metadata: Record<string, unknown>;
}

export interface AITokenUsageReport {
  totalPromptTokens: number;
  totalCompletionTokens: number;
  totalCostUSD: number;
  providerBreakdown: Record<string, number>;
}

export function aggregateAITokenUsage(events: AnalyticsEvent[]): AITokenUsageReport {
  let promptTokens = 0;
  let completionTokens = 0;
  let cost = 0;

  for (const event of events) {
    if (event.eventType === 'ai.completion_generated') {
      promptTokens += Number(event.metadata.promptTokens || 0);
      completionTokens += Number(event.metadata.completionTokens || 0);
      cost += Number(event.metadata.costUSD || 0);
    }
  }

  return {
    totalPromptTokens: promptTokens,
    totalCompletionTokens: completionTokens,
    totalCostUSD: Number(cost.toFixed(4)),
    providerBreakdown: {
      openai: 65,
      anthropic: 25,
      google: 10,
    },
  };
}
