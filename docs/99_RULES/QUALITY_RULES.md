# BOOKLOOM QUALITY & TESTING RULES

## 1. Purpose
Define quality assurance, hydration safety, build verification, and zero-error delivery standards for BookLoom.

---

## 2. Rules
1. **Zero-Error Build Gate**: `npm run build` must complete with 0 compilation errors across all static and dynamic pages.
2. **TypeScript Strict Type Gate**: `npx tsc --noEmit` must pass cleanly with 0 type errors.
3. **Hydration Protection**: All root layout elements (`<html>`, `<body>`) and dynamic client state components must handle hydration without React warnings.
4. **No Masking Failures**: Never suppress error tracebacks, return dummy nulls silently, or comment out failing checks without fixing root cause.
5. **Empirical Verification**: Never claim a task is complete until `npm run build` has been executed and output verified.

---

## 3. Acceptance Criteria
- [x] `npm run build` passes cleanly (100% route compilation).
- [x] `npx tsc --noEmit` returns 0 stdout/stderr errors.
- [x] Zero hydration warnings on initial render.

---

## 4. Dependencies
- `package.json`
- `tsconfig.json`
- Next.js 15 build pipeline

---

## 5. Files Affected
- All files in repository.

---

## 6. Implementation Notes
Always run `npm run build` as the final empirical step before marking any phase or feature completed.

---

## 7. Common Mistakes
- Declaring a task complete after editing a file without testing `npm run build`.
- Swallowing runtime exceptions in empty try/catch blocks.
- Using non-standard HTML tags that break React 19 rendering.

---

## 8. Do Not Do
- ❌ DO NOT claim completion without empirical build output verification.
- ❌ DO NOT leave console.error or console.warn tracebacks in production code.
- ❌ DO NOT skip TypeScript verification.

---

## 9. Checklist
- [x] `npm run build` clean
- [x] `npx tsc --noEmit` clean
- [x] Empirical log evidence verified
