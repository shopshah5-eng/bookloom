export interface AITelemetryLog {
  id: string;
  provider: string;
  model: string;
  latencyMs: number;
  success: boolean;
  tokens: number;
  error?: string;
  timestamp: string;
}

export class AIObservability {
  private static logs: AITelemetryLog[] = [];

  static logRequest(provider: string, model: string, latencyMs: number, success: boolean, tokens: number, error?: string) {
    const entry: AITelemetryLog = {
      id: `log_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
      provider,
      model,
      latencyMs,
      success,
      tokens,
      error,
      timestamp: new Date().toISOString(),
    };
    this.logs.unshift(entry);
    if (this.logs.length > 100) this.logs.pop();
  }

  static getLogs(): AITelemetryLog[] {
    return this.logs;
  }

  static getMetrics() {
    const total = this.logs.length;
    const successCount = this.logs.filter((l) => l.success).length;
    const avgLatency = total > 0 ? Math.round(this.logs.reduce((a, b) => a + b.latencyMs, 0) / total) : 0;
    const totalTokens = this.logs.reduce((a, b) => a + b.tokens, 0);

    return {
      totalRequests: total,
      successRate: total > 0 ? Math.round((successCount / total) * 100) : 100,
      avgLatencyMs: avgLatency,
      totalTokens,
    };
  }
}
