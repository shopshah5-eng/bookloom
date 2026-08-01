# ADR-015 — Event Driven Architecture

Status: Accepted

---

## Decision

Use domain events for cross-context communication.

## Benefits

Loose coupling

Scalability

Auditability

Extensibility

Retry support

## Rules

Events are immutable.

Consumers remain idempotent.

Events never replace transactional consistency.

## Decision

Accepted.
