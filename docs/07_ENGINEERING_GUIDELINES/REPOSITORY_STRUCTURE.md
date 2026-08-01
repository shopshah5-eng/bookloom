# BOOKLOOM REPOSITORY STRUCTURE

Version: 1.0

Status: Approved

Priority: CRITICAL

---

# PURPOSE

The repository should be organized by domain rather than technology.

A developer should immediately understand where every piece of code belongs.

---

# MONOREPO

BookLoom uses a monorepo.

Benefits

• Shared types
• Shared UI
• Shared utilities
• Unified versioning
• Easier deployment
• Consistent tooling

---

# TOP LEVEL STRUCTURE

/apps
/packages
/services
/infrastructure
/docs
/scripts
/tools

---

# APPS

/apps/web

Main Next.js application.

/apps/admin

Platform administration.

/apps/docs

Documentation site.

Future

/apps/mobile

/apps/desktop

---

# PACKAGES

/packages/ui

Reusable UI components.

/packages/design-system

Tokens

Themes

Typography

Icons

/packages/types

Shared TypeScript types.

/packages/utils

Helpers

Validation

Formatting

/packages/config

Shared ESLint

TypeScript

Tailwind

Prettier

/packages/sdk

Client SDK

---

# SERVICES

/services/auth

/services/ai

/services/projects

/services/editor

/services/search

/services/storage

/services/publishing

/services/analytics

/services/notifications

/services/billing

/services/realtime

/services/admin

Each service owns one business capability.

---

# INFRASTRUCTURE

Docker

Kubernetes

Terraform

Monitoring

CI

Secrets

---

# DOCS

Architecture

API

Design System

Runbooks

ADR

Developer Guides

---

# SCRIPTS

Database

Migration

Deployment

Code Generation

Testing

Maintenance

---

# RULES

No circular dependencies.

No shared business logic outside packages.

Each service owns its own domain.

---

# FUTURE

Plugin SDK

Marketplace SDK

CLI

AI SDK

---

# FINAL RULE

Organize code around business capabilities—not frameworks.
