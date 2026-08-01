# ADR-013 — Redis

Status: Accepted

---

## Decision

Use Redis for transient state.

## Responsibilities

Caching

Sessions

Queues

Rate limiting

Presence

Locks

Pub/Sub

## Rules

Redis is never the source of truth.

Persistent data belongs in PostgreSQL.

## Decision

Accepted.
