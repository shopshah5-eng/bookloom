# BOOKLOOM API ARCHITECTURE

Version: 1.0

Priority: CRITICAL

---

# STYLE

REST First

Realtime where necessary

Streaming for AI

Webhooks for integrations

---

# API VERSIONING

/api/v1/

Future

/api/v2/

Never break existing clients.

---

# MODULES

Authentication

Users

Organizations

Projects

Books

Chapters

Editor

Templates

AI

Publishing

Analytics

Billing

Search

Notifications

Admin

---

# STANDARD RESPONSE

Success

Data

Meta

Pagination

Request ID

Errors

---

# HTTP CODES

200

201

204

400

401

403

404

409

422

429

500

---

# PAGINATION

Cursor Based

Default

25

Maximum

100

---

# FILTERING

Query Parameters

Status

Owner

Date

Tags

Search

Sort

---

# STREAMING

AI

Realtime Collaboration

Notifications

Publishing Status

---

# AUTHENTICATION

Bearer Token

Refresh Token

Passkeys

OAuth

---

# RATE LIMITS

Anonymous

Authenticated

Enterprise

AI Requests

Publishing

---

# IDEMPOTENCY

Required for

Publishing

Billing

Uploads

Exports

---

# WEBHOOKS

Publishing Finished

Book Published

Invoice Paid

Workspace Invite

Template Approved

AI Completed

---

# OBSERVABILITY

Every request contains

Trace ID

Request ID

Workspace ID

User ID

---

# FINAL RULE

APIs describe business capabilities.

Never expose database structure.
