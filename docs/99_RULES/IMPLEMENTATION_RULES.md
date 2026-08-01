# BOOKLOOM IMPLEMENTATION WORKFLOW RULES

## 1. Purpose
Define the mandatory step-by-step workflow rules for planning, executing, and verifying code changes.

---

## 2. Rules
1. **Plan First**: Always state requirements, list affected files, and write an `implementation_plan.md` artifact before editing code.
2. **Surgical Changes Only**: Touch only files directly related to the current task. Never refactor unrelated files or rename unchanged variables.
3. **Simplicity First**: Write minimum code required to fulfill specs. Do not over-engineer one-off helper functions.
4. **Token Budget Efficiency**: Plan thoroughly using 10% of tokens; execute surgical edits in focused turns.
5. **No Blind Assumptions**: Always view authoritative source files before writing logic or dereferencing data structures.

---

## 3. Acceptance Criteria
- [x] Implementation plan artifact created and approved before code execution.
- [x] Edits restricted strictly to scoped task files.
- [x] Walkthrough artifact updated after execution.

---

## 4. Dependencies
- `AGENTS.md`
- `README.md`
- `docs/MASTER_INDEX.md`

---

## 5. Files Affected
- All files modified during feature execution.

---

## 6. Implementation Notes
When modifying conditional branches or execution loops, ensure all paths (success, error, loading) are handled explicitly.

---

## 7. Common Mistakes
- Writing code without creating an implementation plan first.
- Modifying unrelated utility files during a scoped feature edit.
- Deleting test assertions to hide underlying contract failures.

---

## 8. Do Not Do
- ❌ DO NOT make un-planned edits.
- ❌ DO NOT re-format or rewrite working code outside task scope.
- ❌ DO NOT proceed to execution without explicit plan approval.

---

## 9. Checklist
- [x] Implementation plan approved
- [x] Surgical edits executed
- [x] Walkthrough artifact updated
