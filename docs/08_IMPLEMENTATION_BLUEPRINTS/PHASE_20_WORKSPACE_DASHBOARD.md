# PHASE 20 — Workspace, Dashboard & Project Foundation

Version: 1.0

Status: Approved

Priority: Critical

---

# Purpose

Construct the primary application shell, workspace environment, digital library, and user dashboard.

---

# Modules

1. Workspace Management: Create, rename, archive, delete, switch workspaces, invite members, set roles.
2. Dashboard: Recent books, Continue Writing cards, writing statistics, quick actions, team activity, AI credits meter.
3. Project Organization: Project CRUD, folders, collections, book assignment, status tags.
4. Book Library: Grid/List views, cover previews, word count, reading time, status badges, favorite pinning.
5. Application Shell: Persistent sidebar, breadcrumbs, top navigation bar, workspace switcher, notification panel, global search shell.

---

# State Management

- Server State: TanStack Query
- UI State: Zustand
- Theme & Auth: React Context

---

# Success Criteria

✓ Multi-workspace switching and project organization operational

✓ Dashboard loads in <500ms with real metrics

✓ Responsive sidebar and layout across desktop, tablet, mobile

✓ Onboarding workflow guides new users from signup to book creation
