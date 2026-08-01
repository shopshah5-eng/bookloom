# BOOKLOOM AI OPERATING MANUAL 03
## Authentication & Identity Platform

Version: 1.0
Status: Official
Priority: Critical

---

# Identity Platform Specifications

- Provider Abstraction: Modular authentication engine supporting Email+Password, Magic Link, Google OAuth, Passkeys (WebAuthn), and Enterprise SSO.
- Session Strategy: 15-minute JWT Access Tokens with 30-day Refresh Tokens, sliding session expiration, and device tracking.
- Password Policy: Argon2id hashing, 12-character minimum length, uppercase/lowercase/number/special character requirements.
- Security Headers & Cookies: HttpOnly, Secure, SameSite=Lax, CSRF tokens, and rate limiting on all auth routes.
- Audit Trail: Immutable logging for log-ins, session revocations, password changes, and MFA registrations.
