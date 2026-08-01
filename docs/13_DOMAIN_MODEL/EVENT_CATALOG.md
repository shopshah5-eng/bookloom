# Event Catalog

Version: 1.0

---

# Identity Events

- `user.created`: Emitted when a new user registers.
- `user.invited`: Emitted when a user is invited to a workspace.

---

# Workspace Events

- `workspace.created`: Emitted when a new workspace is provisioned.
- `member.added`: Emitted when a user joins a workspace.

---

# Book & Writing Events

- `book.created`: Emitted when a new book is started.
- `chapter.updated`: Emitted when a chapter manuscript changes.
- `snapshot.created`: Emitted when a version checkpoint is saved.

---

# AI Events

- `ai.generation.started`: Emitted when AI generation begins.
- `ai.generation.completed`: Emitted when AI output finishes streaming.

---

# Publishing Events

- `export.queued`: Emitted when an export job is placed in BullMQ.
- `book.published`: Emitted when a book is released to distribution channels.
