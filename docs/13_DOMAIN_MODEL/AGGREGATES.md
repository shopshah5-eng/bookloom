# BookLoom Aggregates

Version: 1.0

---

# Purpose

Define aggregate roots and transactional boundaries.

---

# Workspace

Aggregate Root

Workspace

Contains

Members

Invitations

Preferences

Rules

Workspace name unique

Member emails unique

Owner cannot be removed

---

# Book

Aggregate Root

Book

Contains

Chapters

Metadata

Outline

Snapshots

Publishing Settings

Rules

Book must belong to exactly one workspace.

Chapter order must be unique.

---

# Project

Aggregate Root

Project

Contains

Books

Assets

Templates

Settings

---

# Subscription

Aggregate Root

Subscription

Contains

Invoices

Usage

Billing Profile

Payment Methods

---

# AI Conversation

Aggregate Root

Conversation

Contains

Messages

Context

Metadata

Tool Calls

---

# Final Rule

All transactional consistency is enforced within aggregate boundaries.
