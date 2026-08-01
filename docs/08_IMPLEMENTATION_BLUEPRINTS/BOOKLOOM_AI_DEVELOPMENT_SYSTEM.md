# BookLoom AI Development System (BADS)

Version: 1.0

Status: Active

---

# Purpose

The BookLoom AI Development System (BADS) establishes standardized prompt structures, architecture rules, and automated review checklists for AI-driven software development.

---

# System Rules for AI Assistants

1. Production-Ready Code Only: Never generate placeholder logic, mock comments (`// TODO`), or prototype stubs in production files.
2. Architecture Adherence: Strictly follow monorepo boundaries (`apps/`, `packages/`, `services/`). Never invent unapproved folder structures or duplicate packages.
3. Design System Reuse: Always import components and design tokens from `@bookloom/ui` and `@bookloom/design-tokens`.
4. Dark Mode & Accessibility: Support dark mode by default and ensure keyboard accessibility on all interactive controls.
5. Error Handling & Security: Validate inputs using Zod, handle errors explicitly, and redact sensitive tokens.

---

# Implementation Prompt Template

```text
OBJECTIVE: [Clear description of feature/module]
TARGET FILES: [List of files to create or modify]
DEPENDENCIES: [Packages or services relied upon]
BUSINESS LOGIC: [Detailed functional requirements]
ACCEPTANCE CRITERIA: [Verifiable conditions for completion]
DEFINITION OF DONE: [Tests, typecheck, lint, accessibility, docs]
```

---

# Verification Checklist

- [ ] Builds cleanly without TypeScript or bundler errors
- [ ] Uses design tokens for colors, spacing, and typography
- [ ] Includes automated test coverage
- [ ] Strictly respects security and authorization policies
