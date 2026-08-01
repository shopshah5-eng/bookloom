# PHASE 24 — Realtime Collaboration & Comments

Version: 1.0

Status: Approved

Priority: High

---

# Purpose

Enable multi-user real-time manuscript editing, live presence, inline comments, and track changes.

---

# Subsystems

1. Realtime Engine: Yjs CRDT over WebSockets for conflict-free document synchronization.
2. Presence Tracker: Live user avatars, cursor positions, text selection highlights, and typing indicators (<150ms latency).
3. Threaded Comments: Inline text commenting, replies, @mentions, resolution states, and notification triggers.
4. Track Changes: Suggestion mode, accept/reject diff view, author attribution, and history audit trail.

---

# Success Criteria

✓ Multiple users edit the same document without data loss or corruption

✓ Presence cursors synchronize smoothly in real time

✓ Inline comments persist accurately across text edits

✓ Disconnect and reconnect scenarios sync queued offline operations cleanly
