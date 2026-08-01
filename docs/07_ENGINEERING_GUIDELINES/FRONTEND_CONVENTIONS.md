# BOOKLOOM FRONTEND CONVENTIONS

Version: 1.0

Status: Approved

Priority: CRITICAL

---

# PURPOSE

The frontend architecture prioritizes maintainability, accessibility, performance, and consistency.

---

# FRAMEWORK

Next.js

React

TypeScript

Tailwind CSS

---

# ARCHITECTURE

Feature First

Components

Hooks

Services

Types

Utils

Each feature owns its implementation.

---

# COMPONENTS

Presentational

Container

Layout

Provider

Primitive

Composite

---

# DIRECTORY EXAMPLE

/features/editor

components/

hooks/

services/

types/

utils/

constants/

---

# STATE

Server State

React Query

UI State

Zustand

Local State

React

Forms

React Hook Form

---

# DATA FETCHING

Server Components when appropriate.

Client Components only when interactive.

Minimize waterfalls.

---

# STYLING

Tailwind

Design Tokens

CSS Variables

No inline styles except dynamic values.

---

# ACCESSIBILITY

Semantic HTML

Keyboard Navigation

Visible Focus

ARIA only when necessary.

WCAG AA minimum.

---

# PERFORMANCE

Code Splitting

Lazy Loading

Image Optimization

Streaming

Memoization where beneficial

Avoid unnecessary re-renders.

---

# FORMS

Schema Validation

Optimistic UI

Loading States

Error States

Autosave where applicable.

---

# COMPONENT RULES

One responsibility.

Typed props.

Composable APIs.

Predictable behavior.

---

# ANIMATION

Framer Motion

Subtle

Purposeful

Respect reduced-motion preferences.

---

# TESTING

Unit Tests

Component Tests

E2E for critical flows.

---

# FINAL RULE

The frontend should feel effortless because its architecture is disciplined.
