# BOOKLOOM SHADOW SYSTEM

Version: 1.0

Status: Approved

Priority: Critical

---

# PURPOSE

Shadows communicate spatial relationships.

They indicate elevation.

They improve readability.

They separate surfaces.

They never exist for decoration.

If a shadow attracts attention,

it is too strong.

---

# DESIGN PHILOSOPHY

BookLoom follows

Natural Light

↓

Soft Diffusion

↓

Editorial Photography

↓

Luxury Print

↓

Modern Architecture

Instead of

Heavy SaaS shadows

↓

Material Design style

↓

Gaming UI

↓

Neumorphism

↓

Harsh Drop Shadows

---

# PRINCIPLES

Light comes from above.

Shadows become softer as elevation increases.

Opacity remains low.

Blur increases with elevation.

Never use pure black.

Never stack random shadows.

---

# SHADOW COLOR

Light Theme

rgba(20,20,20,0.06)

rgba(20,20,20,0.08)

rgba(20,20,20,0.10)

rgba(20,20,20,0.12)

Dark Theme

rgba(0,0,0,0.28)

rgba(0,0,0,0.36)

rgba(0,0,0,0.42)

---

# ELEVATION LEVELS

Level 0

No shadow

Usage

Page background

Flat surfaces

---

Level 1

Cards

Lists

Panels

Shadow

0 2px 8px rgba(20,20,20,.06)

---

Level 2

Hover Cards

Floating Cards

Widgets

Shadow

0 8px 24px rgba(20,20,20,.08)

---

Level 3

Dropdown

Popover

Tooltip

Command Palette

Shadow

0 16px 40px rgba(20,20,20,.10)

---

Level 4

Dialogs

Large Modals

Side Drawers

Shadow

0 24px 60px rgba(20,20,20,.12)

---

Level 5

Marketing Hero Layers

Floating Artwork

Showcase Mockups

Shadow

0 40px 90px rgba(20,20,20,.14)

---

# COMPONENT SHADOWS

Primary Button

None

Hover

Very subtle

Card

Level 1

Card Hover

Level 2

Dropdown

Level 3

Tooltip

Level 3

Modal

Level 4

Drawer

Level 4

Hero Illustration

Level 5

Toast

Level 3

Floating Toolbar

Level 3

---

# BUTTON SHADOWS

Primary

No permanent shadow

Hover

Small elevation

Pressed

Remove shadow

Focus

Glow handled separately

Never create floating buttons.

---

# CARD SHADOWS

Default

Level 1

Hover

Level 2

Active

Maintain Level 2

Selected

Border + subtle shadow

Never dramatic.

---

# IMAGE SHADOWS

Book Covers

Very subtle

Hero Images

Soft ambient

Feature Images

Minimal

Editorial Images

Optional

Never overpower photography.

---

# NAVIGATION

Navbar

No shadow

Only add a divider

or

minimal shadow

when scrolling.

---

# SIDEBAR

No shadow.

Use spacing and contrast.

---

# MODALS

Single shadow layer.

Avoid multiple stacked effects.

Backdrop blur handles separation.

---

# DRAWERS

Use elevation,

not darkness.

---

# DARK MODE

Reduce opacity.

Increase blur.

Avoid glowing edges.

Dark mode should feel soft,

not heavy.

---

# HOVER STATES

Hover changes

Shadow

Opacity

Position

Very slightly.

Maximum translation

2px

---

# PERFORMANCE

Prefer

box-shadow

for static elements.

Use

filter: drop-shadow()

only when required for irregular shapes.

Avoid animating blur radius.

Animate opacity and transform instead.

---

# ACCESSIBILITY

Shadows must never be the only indication of elevation.

Combine with

Spacing

Borders

Background contrast

Motion

---

# DESIGN TOKENS

shadow.none

shadow.level1

shadow.level2

shadow.level3

shadow.level4

shadow.level5

shadow.hover

shadow.modal

shadow.hero

---

# CSS TOKENS

--shadow-none

none

--shadow-sm

0 2px 8px rgba(20,20,20,.06)

--shadow-md

0 8px 24px rgba(20,20,20,.08)

--shadow-lg

0 16px 40px rgba(20,20,20,.10)

--shadow-xl

0 24px 60px rgba(20,20,20,.12)

--shadow-hero

0 40px 90px rgba(20,20,20,.14)

---

# MACHINE TOKEN STRUCTURE

{
  "shadow": {
    "none": "none",
    "sm": "...",
    "md": "...",
    "lg": "...",
    "xl": "...",
    "hero": "..."
  }
}

---

# REVIEW CHECKLIST

✓ Consistent elevation

✓ No arbitrary shadows

✓ No black shadows

✓ Hover elevation subtle

✓ Modal depth correct

✓ Hero imagery balanced

✓ Dark mode adjusted

✓ Performance optimized

---

# FINAL RULE

Users should perceive depth,

not shadows.

If someone notices the shadow before the content,

the shadow is wrong.
