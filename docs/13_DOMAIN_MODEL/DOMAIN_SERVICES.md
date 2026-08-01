# Domain Services

Version: 1.0

---

# Purpose

Domain Services express business operations that span multiple entities or aggregates.

---

# Services

PublishingOrchestrator

AIContextAssembler

WorkspacePermissionEvaluator

SubscriptionManager

SearchIndexer

ExportEngine

---

# Rules

Stateless

Pure business logic

No direct database dependencies

Framework agnostic

---

# Final Rule

Use domain services for operations that do not naturally belong to a single entity.
