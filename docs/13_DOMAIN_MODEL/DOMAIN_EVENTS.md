# Domain Events

Version: 1.0

---

# Purpose

Capture important business events that other parts of the platform may react to.

Events represent facts that already happened.

---

# Identity

UserCreated

UserInvited

UserDeleted

PasswordReset

SessionExpired

---

# Workspace

WorkspaceCreated

WorkspaceDeleted

MemberJoined

MemberRemoved

RoleChanged

---

# Projects

ProjectCreated

ProjectArchived

ProjectDeleted

---

# Books

BookCreated

BookDeleted

BookPublished

ChapterAdded

ChapterDeleted

SnapshotCreated

---

# AI

GenerationStarted

GenerationCompleted

GenerationFailed

ProviderChanged

MemoryUpdated

---

# Publishing

ValidationStarted

ValidationCompleted

ExportQueued

ExportCompleted

ExportFailed

---

# Billing

SubscriptionCreated

SubscriptionRenewed

InvoicePaid

InvoiceFailed

UsageExceeded

---

# Notifications

NotificationCreated

NotificationRead

DigestSent

---

# Rules

Events are immutable.

Events never change.

Events may be replayed.

Events are timestamped.

Events are idempotent.

---

# Final Rule

Events describe business facts, not implementation details.
