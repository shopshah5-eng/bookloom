# BOOKLOOM AI OPERATING MANUAL 01
## Repository Foundation & Engineering Infrastructure

Version: 1.0
Status: Official
Priority: Critical

---

# Global Operating Principles

- Never generate placeholder code or TODO stubs in production files.
- Strictly adhere to monorepo package boundaries (`apps/`, `packages/`, `services/`, `infrastructure/`).
- Reuse shared `@bookloom/ui` design tokens and components.
- Ensure 100% strict TypeScript compliance with zero `any` usage.
- Follow OWASP security guidelines (CSRF, XSS, rate limiting, SQL injection defense).
- Target Lighthouse >= 95, P95 API < 300ms, and typing latency < 16ms.

---

# Monorepo Workspace Map

```text
bookloom/
├── apps/
│   ├── web/
│   ├── api/
│   ├── docs/
│   └── storybook/
├── packages/
│   ├── ui/
│   ├── design-tokens/
│   ├── types/
│   ├── config/
│   ├── validation/
│   ├── editor/
│   ├── ai/
│   ├── auth/
│   ├── database/
│   ├── analytics/
│   ├── search/
│   ├── storage/
│   ├── notifications/
│   ├── logger/
│   ├── icons/
│   ├── utils/
│   └── sdk/
├── services/
│   ├── ai-gateway/
│   ├── search/
│   ├── publishing/
│   ├── realtime/
│   └── workers/
├── infrastructure/
│   ├── docker/
│   ├── kubernetes/
│   ├── terraform/
│   └── monitoring/
├── docs/
├── scripts/
└── tests/
```
