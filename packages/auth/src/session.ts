export interface AuthSession {
  userId: string;
  email: string;
  role: string;
  expiresAt: number;
}

export function createSessionPayload(userId: string, email: string, role = 'editor'): AuthSession {
  const FIFTEEN_MINUTES_MS = 15 * 60 * 1000;
  return {
    userId,
    email,
    role,
    expiresAt: Date.now() + FIFTEEN_MINUTES_MS,
  };
}

export function isSessionExpired(session: AuthSession): boolean {
  return Date.now() >= session.expiresAt;
}
