# BOOKLOOM GRID SYSTEM

Version: 1.0

Status: Approved

Priority: Critical

---

# PURPOSE

The Grid System defines the structural framework for every BookLoom interface.

Every page, section, card, modal, dashboard, and editor must align to this system.

No page may invent its own layout.

---

# DESIGN PHILOSOPHY

The grid should never be visible.

It should quietly organize content.

The user notices clarity, not columns.

The interface should feel calm, intentional, and balanced.

---

# LAYOUT PRINCIPLES

Content first.

Whitespace second.

Decoration last.

Every layout should answer:

• What deserves attention first?
• What supports it?
• What can be removed?

---

# BREAKPOINTS

Mobile

0–767px

Tablet

768–1023px

Laptop

1024–1439px

Desktop

1440–1919px

Ultra Wide

1920px+

Never create additional breakpoints unless documented.

---

# CONTAINER WIDTHS

Reading

720px

Documentation

960px

Application Content

1280px

Marketing Content

1320px

Wide Hero

1440px

Ultra Wide

1600px max

---

# PAGE MARGINS

Desktop

80px

Laptop

64px

Tablet

40px

Mobile

20px

---

# GRID COLUMNS

Desktop

12 Columns

Tablet

8 Columns

Mobile

4 Columns

---

# COLUMN GUTTERS

Desktop

32px

Tablet

24px

Mobile

16px

---

# COLUMN BEHAVIOR

Columns stretch equally.

Never manually resize individual columns.

Never mix unrelated column widths on the same row.

---

# SECTION WIDTHS

Hero

Full Container

Features

1280px

Testimonials

960px

Pricing

1200px

Documentation

960px

Blog

760px reading width

Dashboard

Fluid

Editor

Fluid with centered reading area

---

# HERO LAYOUT

Desktop

Text: 5 Columns

Visual: 7 Columns

Tablet

Stacked

Mobile

Single Column

Never place the illustration above the headline unless explicitly documented.

---

# TWO-COLUMN LAYOUT

Desktop

6 / 6

or

5 / 7

Tablet

Stack

Mobile

Stack

---

# THREE-COLUMN LAYOUT

Desktop

4 / 4 / 4

Tablet

2 + 1 wrap

Mobile

Single Column

---

# FOUR-COLUMN GRID

Desktop

3 / 3 / 3 / 3

Tablet

2 x 2

Mobile

Single Column

---

# CARD GRID

Desktop

4 Cards

Tablet

2 Cards

Mobile

1 Card

Gap

32px desktop

24px tablet

16px mobile

---

# BOOK GRID

Desktop

5 Covers

Tablet

3 Covers

Mobile

2 Covers

Maintain consistent cover ratio.

---

# SIDEBAR LAYOUT

Expanded

280px

Collapsed

80px

Content automatically expands.

---

# DASHBOARD LAYOUT

Sidebar

280px

Main Content

Flexible

Inspector Panel (optional)

360px

Never reduce content width below usability.

---

# EDITOR LAYOUT

Left Sidebar

320px

Editor

Fluid

Right Inspector

360px

Reading Width

760px

Editor remains centered.

---

# MODAL LAYOUT

Small

480px

Medium

640px

Large

800px

Extra Large

1080px

Maximum Height

90vh

---

# DRAWER LAYOUT

Small

360px

Large

480px

Full Height

Scrollable

---

# NAVIGATION

Navbar Height

72px

Content aligned to container.

Never full-bleed navigation items.

---

# FOOTER

Max Width

1280px

Large top spacing

Multiple aligned columns

---

# VISUAL ALIGNMENT

Align to

Grid

Typography baseline

Component edges

Image edges

Never align randomly.

---

# IMAGE ALIGNMENT

Images align with grid columns.

Never float images arbitrarily.

Never break margins.

---

# CONTENT RHYTHM

Section

↓

Headline

↓

Description

↓

Primary Content

↓

Supporting Content

↓

CTA

↓

Spacing

↓

Next Section

Maintain rhythm throughout every page.

---

# SAFE ZONES

Do not place important content closer than

20px

to any viewport edge.

Interactive controls require additional breathing room.

---

# RESPONSIVE RULES

Never simply shrink desktop layouts.

Recompose layouts.

Prioritize readability.

Reduce complexity on smaller screens.

Maintain visual hierarchy.

---

# ACCESSIBILITY

No horizontal scrolling.

Readable line lengths.

Logical reading order.

Keyboard navigation unaffected by layout.

---

# GRID TOKENS

grid.columns.desktop = 12

grid.columns.tablet = 8

grid.columns.mobile = 4

grid.gutter.desktop = 32px

grid.gutter.tablet = 24px

grid.gutter.mobile = 16px

grid.container.reading = 720px

grid.container.app = 1280px

grid.container.hero = 1440px

---

# REVIEW CHECKLIST

✓ Consistent column alignment

✓ Correct gutters

✓ Responsive behavior

✓ Reading widths respected

✓ Images aligned

✓ No overflow

✓ No arbitrary margins

✓ Layout hierarchy maintained

---

# FINAL RULE

A premium layout never feels crowded.

It never feels empty.

It feels intentional.

Every alignment should appear inevitable, not accidental.
