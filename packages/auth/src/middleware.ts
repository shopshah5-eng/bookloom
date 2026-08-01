import { isSessionExpired, AuthSession } from './session';

export function validateRouteAccess(
  pathname: string,
  session: AuthSession | null
): { allowed: boolean; redirectTo?: string } {
  const publicRoutes = ['/', '/login', '/signup', '/forgot-password', '/docs'];

  const isPublic = publicRoutes.some((route) => pathname === route || pathname.startsWith('/docs/'));

  if (isPublic) {
    return { allowed: true };
  }

  if (!session || isSessionExpired(session)) {
    return { allowed: false, redirectTo: '/login' };
  }

  return { allowed: true };
}
