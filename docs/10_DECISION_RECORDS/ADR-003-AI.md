# ADR-003 — AI Architecture

Status

Accepted

---

# Context

AI providers evolve rapidly.

Vendor lock-in would increase costs and reduce flexibility.

---

# Decision

BookLoom will never depend on a single AI provider.

Instead

Provider Interface

↓

Provider Router

↓

Prompt Engine

↓

Context Engine

↓

Streaming

↓

Tool Calling

↓

Memory

---

# Supported Providers

OpenAI

Anthropic

Google

OpenRouter

Future

Enterprise Models

Local Models

---

# Why

Better pricing

Fallback reliability

Model specialization

Regional availability

Enterprise flexibility

---

# Alternatives

Single Provider

Simple

Vendor lock-in

Rejected.

---

Per-feature Provider Logic

Difficult maintenance

Inconsistent behavior

Rejected.

---

# Consequences

Positive

High availability

Lower cost

Easy experimentation

Future proof

Negative

Slightly higher implementation complexity

---

# Review

Review annually.

---

# Decision

Accepted
