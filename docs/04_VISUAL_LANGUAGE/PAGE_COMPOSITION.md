# BOOKLOOM PAGE COMPOSITION

Version: 1.0

Status: Approved

Priority: CRITICAL

---

# PURPOSE

This document defines how every page in BookLoom is composed.

It answers

Where content begins.

How users scan a page.

How whitespace creates hierarchy.

How information flows.

Every page in BookLoom must follow this composition system.

Components do not determine layouts.

Layouts determine where components belong.

---

# DESIGN PHILOSOPHY

BookLoom pages should feel like

A beautifully designed magazine

A premium publishing studio

An editorial workspace

Not

A dashboard full of widgets

Every page should breathe.

Users should never feel visually overwhelmed.

---

# PAGE STRUCTURE

Every screen follows five layers.

Navigation

↓

Page Header

↓

Primary Content

↓

Supporting Content

↓

Page Footer (Optional)

Never rearrange this hierarchy.

---

# PAGE CANVAS

Content is always centered.

Large displays should never stretch content edge-to-edge.

Maximum readability is more important than filling space.

---

# CONTENT WIDTHS

Reading Content

640–760px

Forms

560–720px

Documentation

720–900px

Dashboard

1200–1440px

Analytics

1400–1600px

Marketing Hero

1200–1400px

Ultra-wide displays should increase margins—not content width.

---

# GRID SYSTEM

Desktop

12 Columns

Tablet

8 Columns

Mobile

4 Columns

Components snap to the grid.

Never create arbitrary alignment.

---

# PAGE MARGINS

Desktop

Generous margins

Tablet

Medium margins

Mobile

Comfortable margins

Content should never touch screen edges.

---

# VERTICAL RHYTHM

Large Section

↓

Section

↓

Subsection

↓

Card

↓

Component

↓

Element

Each level decreases spacing consistently.

Never compress the rhythm to fit more information.

---

# PAGE HEADER

Contains

Page Title

Description

Primary Action

Optional Breadcrumb

Optional Status

The page title is always the strongest visual element.

---

# PAGE TITLE

Large.

Editorial.

Clear.

One purpose only.

Avoid long marketing copy inside application pages.

---

# PAGE DESCRIPTION

Optional.

Maximum two lines.

Explains context—not instructions.

---

# PRIMARY ACTION

Only one primary action per page.

Secondary actions remain visually lighter.

Avoid competing CTAs.

---

# HERO SECTIONS

Marketing only.

Contains

Headline

Supporting text

CTA

Visual

Never use hero sections inside the dashboard.

---

# DASHBOARD COMPOSITION

Dashboard pages consist of

Header

↓

Overview Cards

↓

Primary Workspace

↓

Supporting Panels

↓

Secondary Information

Do not scatter unrelated widgets.

Group information logically.

---

# SIDEBAR RELATIONSHIP

Sidebar is persistent.

Content never overlaps sidebar.

Sidebar width remains consistent throughout the application.

---

# CONTENT FLOW

Top

Most important

↓

Middle

Working content

↓

Bottom

Secondary actions

Users should understand a page by scrolling naturally.

---

# CARD ARRANGEMENT

Cards should align to the grid.

Maintain equal spacing.

Never create "masonry" layouts in productivity workflows.

Predictability improves usability.

---

# READING WIDTH

Long-form text should remain within an optimal reading width.

Avoid very wide paragraphs.

Typography determines comfort.

---

# FORMS

Forms are vertically stacked.

Single-column by default.

Two-column layouts only for related fields.

Never place unrelated inputs on the same row.

---

# TABLES

Tables occupy available width.

Actions remain aligned.

Headers remain visible.

Avoid unnecessary card wrappers.

---

# EMPTY STATES

Centered within their parent container.

Contain

Illustration

Headline

Explanation

Primary Action

Large whitespace surrounds the content.

---

# LOADING STATES

Maintain page structure.

Never shift layouts while loading.

Use skeletons matching final content.

---

# ERROR STATES

Remain inside the affected section.

Avoid replacing entire pages for localized errors.

---

# SCROLL BEHAVIOR

Pages scroll naturally.

Avoid nested scrolling unless absolutely necessary.

Users should always know where they are.

---

# SECTION DIVISION

Use whitespace first.

Dividers second.

Background changes last.

Never rely on color alone.

---

# VISUAL HIERARCHY

Hierarchy comes from

Typography

↓

Spacing

↓

Position

↓

Surface

↓

Color

↓

Decoration

Never reverse this order.

---

# RESPONSIVE COMPOSITION

Desktop

Multiple columns.

Tablet

Reduced columns.

Mobile

Single-column layouts.

Never invent new layouts for each breakpoint.

The composition should adapt—not change.

---

# FOCUS MODE

Editor pages remove unnecessary distractions.

Navigation may collapse.

Panels may hide.

Writing remains central.

Everything supports concentration.

---

# ACCESSIBILITY

Content order must match visual order.

Do not rearrange DOM structure purely for appearance.

Maintain logical heading hierarchy.

Ensure keyboard users experience the same flow.

---

# PERFORMANCE

Page composition should rely on CSS Grid and Flexbox.

Avoid unnecessary wrapper elements.

Avoid deeply nested layout structures.

Layouts should remain simple and predictable.

---

# REVIEW CHECKLIST

✓ Consistent margins

✓ Grid alignment

✓ Clear hierarchy

✓ Comfortable reading width

✓ One primary action

✓ Balanced whitespace

✓ Responsive

✓ Accessible

✓ Editorial rhythm maintained

---

# FINAL RULE

Every BookLoom page should feel intentionally composed.

Users should immediately know

where they are,

what matters,

and what to do next—

without the layout demanding attention.
