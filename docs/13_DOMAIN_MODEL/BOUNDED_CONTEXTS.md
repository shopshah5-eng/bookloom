# BookLoom Bounded Contexts

Version: 1.0

Status: Approved

---

# Purpose

Define the major business domains of BookLoom.

Each context owns its own data, business rules, and APIs.

Contexts communicate through well-defined interfaces and events.

---

# Contexts

Identity

Workspace

Projects

Books

Editor

AI

Publishing

Templates

Search

Billing

Analytics

Notifications

Administration

---

# Identity

Owns

Users

Authentication

Sessions

Organizations

Roles

Permissions

Events

UserCreated

UserInvited

SessionExpired

PasswordChanged

---

# Workspace

Owns

Workspaces

Members

Invitations

Roles

Settings

Events

WorkspaceCreated

MemberAdded

MemberRemoved

RoleChanged

---

# Books

Owns

Books

Chapters

Drafts

Metadata

Snapshots

Events

BookCreated

ChapterCreated

BookArchived

SnapshotCreated

---

# AI

Owns

Prompt Engine

Context Engine

Memory

Provider Routing

AI History

Events

PromptExecuted

GenerationCompleted

ProviderFailed

---

# Publishing

Owns

Export Jobs

Validation

Distribution

Events

ExportStarted

ExportCompleted

ValidationFailed

---

# Communication

Contexts communicate using events whenever possible.

Avoid direct database access across contexts.

---

# Final Rule

Every piece of business logic belongs to exactly one bounded context.
