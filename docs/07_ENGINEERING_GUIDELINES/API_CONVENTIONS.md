# BOOKLOOM API CONVENTIONS

Version: 1.0

Status: Approved

Priority: CRITICAL

---

# PURPOSE

Every API should behave consistently regardless of which service implements it.

Clients should never need to guess how an endpoint works.

---

# API STYLE

REST

Resource-oriented

Stateless

Versioned

Streaming where appropriate

---

# URL STRUCTURE

/api/v1/{resource}

/api/v1/books

/api/v1/projects

/api/v1/templates

---

# HTTP METHODS

GET

Read

POST

Create

PUT

Replace

PATCH

Partial Update

DELETE

Soft Delete

---

# REQUEST VALIDATION

Validate

Headers

Body

Query

Path Parameters

Before entering business logic.

---

# RESPONSE FORMAT

Every response contains

success

data

meta

errors

requestId

timestamp

---

# PAGINATION

Cursor-based

Fields

cursor

limit

hasNext

nextCursor

---

# FILTERING

Support

search

sort

order

page size

date ranges

tags

status

---

# SORTING

Ascending

Descending

Multiple fields where appropriate.

---

# ERROR FORMAT

Every error contains

Error Code

Human-readable Message

Details

Request ID

Documentation Link (future)

---

# IDEMPOTENCY

Required for

Publishing

Billing

Exports

Uploads

Retry-safe operations

---

# RATE LIMITING

Anonymous

Authenticated

Enterprise

Per Workspace

Per AI Model

---

# STREAMING ENDPOINTS

AI Generation

Publishing Progress

Realtime Collaboration

Long-running Imports

Use Server-Sent Events unless bidirectional communication is required.

---

# FILE UPLOADS

Signed URLs

Chunked Upload

Virus Scan

Validation

Progress Events

---

# DEPRECATION

Announce

Warn

Monitor

Remove

Never break clients unexpectedly.

---

# OBSERVABILITY

Every request includes

Request ID

Trace ID

Workspace ID

User ID

Client Version

---

# DOCUMENTATION

Every endpoint includes

Description

Authentication

Permissions

Request Example

Response Example

Possible Errors

Rate Limits

---

# FINAL RULE

APIs should express business capabilities clearly while remaining stable over time.
