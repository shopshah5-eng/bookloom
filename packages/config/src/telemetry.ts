export interface LogEntry {
  timestamp: string;
  level: 'info' | 'warn' | 'error' | 'debug';
  service: string;
  traceId: string;
  message: string;
  context?: Record<string, unknown>;
}

export function createTraceId(): string {
  return `trace_${Math.random().toString(36).substring(2, 11)}_${Date.now()}`;
}

export function logStructuredEvent(
  level: LogEntry['level'],
  service: string,
  message: string,
  traceId = createTraceId(),
  context?: Record<string, unknown>
): LogEntry {
  const entry: LogEntry = {
    timestamp: new Date().toISOString(),
    level,
    service,
    traceId,
    message,
    context,
  };
  return entry;
}
