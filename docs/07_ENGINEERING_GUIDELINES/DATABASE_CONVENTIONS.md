# BOOKLOOM DATABASE CONVENTIONS

Version: 1.0

Status: Approved

Priority: CRITICAL

---

# PURPOSE

Database conventions ensure consistency, scalability, and maintainability across all services.

---

# DATABASE ENGINE

PostgreSQL

UTF-8

Timezone

UTC

---

# NAMING

Tables

snake_case

Columns

snake_case

Indexes

idx_<table>_<column>

Foreign Keys

fk_<table>_<reference>

Unique Constraints

uq_<table>_<column>

Primary Keys

pk_<table>

---

# PRIMARY KEYS

UUID v7

Immutable

Never reused

---

# REQUIRED COLUMNS

id

created_at

updated_at

deleted_at

created_by

updated_by

version

---

# TIMESTAMPS

Always UTC.

Never store local time.

---

# SOFT DELETE

Preferred for user-generated content.

Physical deletion only after retention policy expires.

---

# JSON

Use JSONB only for

Flexible metadata

Configuration

AI metadata

Never store relational data in JSON.

---

# INDEXES

Required for

Foreign Keys

Frequently filtered columns

Searchable fields

Unique values

---

# MIGRATIONS

Forward-only

Reviewed

Version controlled

Repeatable

Never modify historical migrations.

---

# RELATIONSHIPS

Use foreign keys.

Enforce referential integrity.

Avoid polymorphic relationships where possible.

---

# PERFORMANCE

Analyze slow queries.

Avoid SELECT *.

Paginate large datasets.

Batch writes when appropriate.

---

# AUDITING

Track

Actor

Timestamp

Entity

Operation

Before Value

After Value

---

# PARTITIONING

Consider for

Audit Logs

Notifications

Analytics

AI Requests

Publishing Jobs

Large Event Tables

---

# BACKUPS

Automated

Encrypted

Verified

Point-in-time recovery enabled.

---

# FINAL RULE

The schema should reflect business concepts—not implementation shortcuts.
