# ADR-007 — Object Storage

Status: Accepted

---

# Context

BookLoom stores covers, images, exported books, attachments, AI assets, and backups.

---

# Decision

Use S3-compatible object storage.

Requirements

Versioning

Encryption

Lifecycle Rules

CDN Integration

Multipart Upload

Cross-region replication

---

# Why

Virtually unlimited scalability

High durability

Industry standard

Cost effective

Excellent tooling

---

# Alternatives

Database BLOB storage

Rejected

Reason

Poor scalability

---

Local filesystem

Rejected

Reason

Not cloud-native

---

# Decision

Accepted
