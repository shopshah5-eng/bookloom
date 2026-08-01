# ADR-006 — Search Architecture

Status: Accepted

---

# Context

Users expect instant search across books, projects, templates, AI conversations, and assets.

AI also depends on semantic retrieval.

---

# Decision

Implement hybrid search.

Components

Lexical Search

+

Vector Search

+

Ranking Engine

---

# Why

Fast keyword matching

Semantic understanding

AI retrieval

Scalable ranking

---

# Alternatives

Keyword only

Rejected

Poor semantic understanding

---

Vector only

Rejected

Weak exact matching

---

# Hybrid Ranking

Keyword Score

Semantic Score

Freshness

Popularity

Workspace Context

Permission Filtering

---

# Future

Personalized ranking

Learning to Rank

Hybrid reranking

---

# Decision

Accepted
