# BOOKLOOM DATABASE ARCHITECTURE

Version: 1.0

Status: Approved

Priority: CRITICAL

---

# PURPOSE

This document defines every major entity stored inside BookLoom.

The database must support:

• millions of users
• millions of books
• billions of AI generations
• real-time collaboration
• enterprise workspaces

without redesign.

---

# DATABASE ENGINE

Primary Database

PostgreSQL

Secondary

Redis

Vector Database

Object Storage

Search Index

---

# CORE PRINCIPLES

UUID Primary Keys

Soft Deletes

Created At

Updated At

Optimistic Locking

JSONB for flexible metadata

Foreign Keys

Indexes on every searchable field

---

# MAIN ENTITIES

Users

Organizations

Workspaces

Projects

Books

Folders

Chapters

Scenes

Templates

Files

Assets

AI Conversations

AI Messages

Publishing Jobs

Exports

Notifications

Comments

Versions

Collaborators

Invoices

Subscriptions

API Keys

Audit Logs

Feature Flags

---

# USER

Stores

Identity

Profile

Authentication

Preferences

Security

AI Settings

---

# ORGANIZATION

Stores

Company

Members

Permissions

Billing

Storage

Branding

---

# PROJECT

Stores

Workspace

Metadata

Genre

Language

Status

Visibility

AI Settings

---

# BOOK

Stores

Title

Subtitle

Cover

Outline

Publishing Metadata

ISBN

Word Count

Reading Time

Statistics

---

# CHAPTER

Stores

Order

Title

Content

AI Metadata

Version

Reading Time

---

# AI CONVERSATION

Stores

Context

Project

Model

Temperature

Messages

Usage

Cost

---

# VERSION

Immutable.

Snapshot of manuscript.

Supports restore.

---

# SEARCH

Every searchable object has

Embeddings

Keywords

Metadata

Full-text index

---

# SOFT DELETE

Every major entity supports

DeletedAt

DeletedBy

Restore

Permanent Delete

---

# AUDITING

Every important mutation creates

Audit Event

Actor

Timestamp

Entity

Diff

---

# SCALABILITY

Partition

Audit Logs

AI Logs

Notifications

Analytics

Publishing Jobs

---

# FINAL RULE

Every table should answer one business capability.

Never create "miscellaneous" tables.
