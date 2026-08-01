# ADR-001 — Monorepo Architecture

Status: Accepted

Date: 2026

Decision Makers

Engineering

Architecture

Product

---

# Context

BookLoom consists of multiple applications, shared UI, AI services, infrastructure, SDKs, and documentation.

Without a shared repository, dependency management and code sharing become increasingly difficult.

---

# Decision

BookLoom will use a single PNPM monorepo.

The repository will contain

Applications

Packages

Services

Infrastructure

Documentation

Scripts

Tooling

---

# Alternatives Considered

## Multiple Repositories

Pros

Independent deployments

Smaller repositories

Cons

Duplicated code

Version drift

Difficult refactoring

Cross-repository changes

Rejected.

---

## Git Submodules

Pros

Shared packages

Cons

Complex workflow

Poor developer experience

Rejected.

---

# Consequences

Positive

Single source of truth

Unified tooling

Shared types

Shared design system

Simpler refactoring

Consistent dependency versions

Negative

Larger repository

Requires workspace tooling

Slightly slower initial clone

---

# Future Review

Review if

Repository exceeds practical scaling limits

Independent business units require complete isolation

---

# Decision

Accepted
