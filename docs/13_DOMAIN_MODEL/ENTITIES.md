# BookLoom Domain Entities

Version: 1.0

Status: Approved

---

# Purpose

Entities are business objects with unique identities that persist over time.

---

# User

Identity

UUID

Attributes

Name

Email

Avatar

Status

Preferences

Relationships

Belongs to Organizations

Member of Workspaces

Owns Books

Owns Projects

---

# Workspace

Identity

WorkspaceID

Contains

Members

Projects

Templates

Settings

Audit Logs

---

# Project

Identity

ProjectID

Contains

Books

Research

Assets

Templates

---

# Book

Identity

BookID

Contains

Metadata

Outline

Chapters

Publishing Settings

Snapshots

---

# Chapter

Identity

ChapterID

Contains

Content

Comments

AI Context

Status

---

# Template

Identity

TemplateID

Reusable

Versioned

Categorized

---

# ExportJob

Identity

ExportID

State

Queued

Running

Completed

Failed

---

# Notification

Identity

NotificationID

Recipient

Content

Status

Priority

---

# Subscription

Identity

SubscriptionID

Plan

Usage

Invoices

Payment Methods

---

# Rule

Every entity owns its lifecycle.

No entity is shared across aggregate boundaries without explicit references.
