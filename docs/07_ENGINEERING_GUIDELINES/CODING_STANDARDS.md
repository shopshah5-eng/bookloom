# BOOKLOOM CODING STANDARDS

Version: 1.0

Status: Approved

Priority: CRITICAL

---

# PURPOSE

Every line of code should be readable, maintainable, testable, and predictable.

Code is written for humans first.

---

# GENERAL PRINCIPLES

Readable

Explicit

Composable

Typed

Documented

Testable

Consistent

---

# NAMING

Classes

PascalCase

Functions

camelCase

Variables

camelCase

Constants

UPPER_SNAKE_CASE

Files

kebab-case

Folders

kebab-case

---

# TYPESCRIPT

Strict Mode

No any

Prefer interfaces for public contracts

Prefer readonly where possible

Discriminated unions for state

---

# FUNCTIONS

Small

Single responsibility

Pure when possible

Return early

Avoid nesting

---

# COMMENTS

Explain why.

Never explain obvious code.

Prefer expressive names over comments.

---

# ERROR HANDLING

Never swallow exceptions.

Always include context.

Return meaningful error messages.

---

# LOGGING

Structured only.

Never use console.log in production.

---

# IMPORTS

Absolute imports.

No unused imports.

Group

External

Internal

Relative

---

# ASYNC

Prefer async/await.

Never ignore promises.

Use cancellation where appropriate.

---

# SECURITY

Validate every input.

Escape every output.

Never trust client data.

---

# TESTING

Every business rule should be testable.

Critical paths require automated tests.

---

# CODE REVIEWS

Readable

Secure

Performant

Accessible

Documented

---

# FINAL RULE

Future developers should understand any file within five minutes.
