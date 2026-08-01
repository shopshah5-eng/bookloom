# ADR-004 — Database Architecture

Status: Accepted

Date: 2026

---

# Context

BookLoom stores structured relational data including users, workspaces, books, chapters, billing records, permissions, analytics, and publishing metadata.

The database must support:

- ACID transactions
- Complex relationships
- Full-text search integration
- JSON support
- Horizontal growth
- Strong consistency

---

# Decision

Use PostgreSQL as the primary relational database.

Supporting technologies

- PostgreSQL
- Prisma ORM
- Read Replicas
- Point-in-Time Recovery
- WAL Archiving

---

# Why PostgreSQL

Excellent ACID compliance

Battle-tested

Rich indexing

JSONB support

Full-text search

Strong ecosystem

Enterprise support

Reliable backups

Logical replication

---

# Alternatives

## MySQL

Pros

Large ecosystem

Cons

Less capable JSON support

Rejected.

---

## MongoDB

Pros

Flexible schema

Cons

Complex relationships

Weak transactional fit

Rejected.

---

## CockroachDB

Pros

Distributed

Cons

Operational complexity

Rejected for initial versions.

---

# Consequences

Positive

Reliable

Scalable

Mature tooling

Excellent performance

Negative

Requires schema migrations

Relational modeling discipline

---

# Decision

Accepted
