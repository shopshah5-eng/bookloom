# BOOKLOOM CODING & ARCHITECTURE RULES

## 1. Purpose
Enforce Next.js 15 App Router, React 19, TypeScript strict mode, and decoupled service architecture standards.

---

## 2. Rules
1. **Next.js 15 App Router Standards**: Use Server Components by default; add `"use client";` only to interactive components.
2. **Next.js 15 Async Params**: Page/Layout `params` and `searchParams` props MUST be typed as `Promise<{ slug: string }>` and awaited before property dereferencing.
3. **Decoupled Service Layer**: Keep data fetching logic in `lib/services/` (e.g. `EbookService`, `AIServiceBackend`, `BillingService`).
4. **TypeScript Strict Mode**: Zero `any` types; strictly type component props, state objects, and database interfaces in `lib/supabase/types.ts`.
5. **No Hardcoded Secrets**: Secrets and API keys must be read strictly from `process.env`. Never hardcode secrets.

---

## 3. Acceptance Criteria
- [x] `npx tsc --noEmit` passes with 0 errors.
- [x] Next.js 15 async params typed correctly in all dynamic routes (`/blog/[slug]`, `/dashboard/editor/[id]`).
- [x] Zero API keys hardcoded in client or server files.

---

## 4. Dependencies
- `tsconfig.json`
- `lib/supabase/types.ts`
- `package.json`

---

## 5. Files Affected
- All TypeScript files in `app/`, `components/`, and `lib/`.

---

## 6. Implementation Notes
Use `createBrowserClient` in browser contexts and `createServerClient` with explicit `cookiesToSet` handlers in server actions/middleware.

---

## 7. Common Mistakes
- Importing `cookies()` synchronously in Next.js 15 Server Components (must use `await cookies()`).
- Direct property access on un-awaited `params.id` in App Router pages.
- Mutating state directly instead of using React state setters.

---

## 8. Do Not Do
- ❌ DO NOT use `any` type casts to bypass TypeScript checks.
- ❌ DO NOT expose private server secrets in `NEXT_PUBLIC_` environment variables.
- ❌ DO NOT perform blocking synchronous thread loops on the main thread.

---

## 9. Checklist
- [x] `npx tsc --noEmit` clean
- [x] Next.js 15 async params awaited
- [x] Decoupled service methods verified
