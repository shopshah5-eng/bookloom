# BOOKLOOM BACKEND CONVENTIONS

Version: 1.0

Status: Approved

Priority: CRITICAL

---

# PURPOSE

The backend architecture should be modular, testable, observable, and easy to extend.

Every service should look familiar to every backend engineer.

---

# TECHNOLOGY STACK

Runtime

Node.js (Latest LTS)

Framework

NestJS

Language

TypeScript

Validation

Zod + class-validator (where appropriate)

ORM

Prisma

Queues

BullMQ

Realtime

WebSockets

Streaming

Server-Sent Events (SSE)

---

# ARCHITECTURE

Each service follows

Controller

↓

Application Service

↓

Domain Layer

↓

Repository

↓

Database

Business logic never belongs inside controllers.

---

# STANDARD DIRECTORY

/src

controllers/

services/

repositories/

dto/

entities/

domain/

events/

jobs/

guards/

interceptors/

middlewares/

validators/

types/

utils/

constants/

config/

tests/

---

# CONTROLLERS

Responsible for

Request validation

Authentication

Authorization

Calling application services

Formatting responses

Controllers never contain business logic.

---

# APPLICATION SERVICES

Responsible for

Business workflows

Transactions

Domain coordination

Event publishing

Service orchestration

---

# DOMAIN LAYER

Contains

Business rules

Policies

Aggregates

Value Objects

Domain Events

Independent from frameworks.

---

# REPOSITORIES

Responsible only for

Database access

Queries

Persistence

Never implement business rules.

---

# DEPENDENCY INJECTION

Always use constructor injection.

Avoid singleton state.

Keep dependencies explicit.

---

# CONFIGURATION

Environment variables

Typed configuration

Validated at startup

No hardcoded secrets.

---

# BACKGROUND JOBS

Use queues for

AI generation

Publishing

Notifications

Emails

Analytics

Image processing

Search indexing

Large imports

---

# EVENTS

Publish domain events for

Book Created

Chapter Updated

Publishing Completed

Payment Received

User Invited

AI Generation Finished

---

# CACHING

Use Redis for

Sessions

Rate limits

Frequently accessed metadata

Search suggestions

Permission cache

Never cache sensitive data unnecessarily.

---

# ERROR HANDLING

Use typed exceptions.

Every error includes

Code

Message

Context

Request ID

---

# LOGGING

Structured JSON

Correlation ID

Trace ID

Workspace ID

User ID

Service Name

No plain console logging.

---

# TRANSACTIONS

Use transactions only where consistency is required.

Avoid long-running database transactions.

---

# DEPENDENCIES

Prefer internal packages.

Avoid unnecessary third-party libraries.

Every dependency should have a documented reason.

---

# TESTING

Unit

Integration

Contract

End-to-End

Performance

Security

---

# FINAL RULE

Business logic belongs in the domain and application layers.

Frameworks are implementation details—not architecture.
