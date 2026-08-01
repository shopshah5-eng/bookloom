# ADR-005 — Authentication Strategy

Status: Accepted

---

# Context

BookLoom requires secure authentication for individual users, teams, and enterprise customers.

---

# Decision

Implement authentication using:

- OAuth 2.1
- OpenID Connect
- Passkeys (WebAuthn)
- JWT Access Tokens
- Refresh Tokens
- MFA

---

# Why

Industry standard

Enterprise compatible

Passwordless support

Excellent security

Future-proof

---

# Alternatives

Session-only authentication

Rejected

Reason

Limited scalability

---

Custom authentication

Rejected

Reason

Unnecessary security risk

---

# Security Principles

Argon2id hashing

Refresh rotation

Session revocation

Device management

Audit logs

Rate limiting

---

# Future

Enterprise SAML

SCIM

Hardware keys

---

# Decision

Accepted
