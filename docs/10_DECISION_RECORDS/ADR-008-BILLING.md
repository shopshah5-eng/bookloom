# ADR-008 — Billing Platform

Status: Accepted

---

# Context

BookLoom requires subscriptions, invoicing, usage metering, and enterprise billing.

---

# Decision

Use Stripe as the primary billing provider while keeping billing provider-agnostic through an abstraction layer.

---

# Why

Excellent APIs

Reliable webhooks

Global payments

Subscription support

Tax support

Enterprise features

---

# Alternatives

Custom billing

Rejected

Reason

High complexity

---

Provider-specific business logic

Rejected

Reason

Vendor lock-in

---

# Future

Additional regional payment providers

Enterprise invoicing

Marketplace payments

---

# Decision

Accepted
