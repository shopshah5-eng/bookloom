# BookLoom Business Rules

Version: 1.0

---

# Workspace

Every project belongs to one workspace.

Workspace names must be unique per organization.

A workspace must have at least one Owner.

---

# Books & Chapters

A book belongs to one project.

Chapter positions must be distinct and sequential.

Deleted chapters move to trash before permanent removal.

---

# AI & Memory

AI memory is scoped exclusively to the active workspace.

AI requests must respect user token quotas.

---

# Publishing & Exporting

Manuscripts must pass validation before publishing.

Export outputs must match specified formatting rules.

---

# Security & Compliance

Every user action is evaluated against RBAC permissions.

Audit logs are immutable.
