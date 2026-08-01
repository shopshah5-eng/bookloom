# BOOKLOOM GLASS MATERIAL SYSTEM

Version: 1.0

Status: Approved

Priority: Critical

---

# PURPOSE

Glass is a premium material.

Glass is not a style.

Glass creates separation without creating visual weight.

Glass exists to make floating surfaces feel lighter.

If everything is glass,

nothing feels premium.

---

# DESIGN PHILOSOPHY

BookLoom is inspired by

Luxury Architecture

↓

Museum Glass

↓

Premium Display Cases

↓

Editorial Layering

↓

Modern Software

Glass should feel

Soft

Quiet

Warm

Elegant

Refined

Never

Frosted overload

Heavy blur

Plastic

Glossy

Cyberpunk

Liquid UI

---

# CORE PRINCIPLE

Glass is used only for

temporary

floating

interactive

surfaces.

Never use glass for primary content.

---

# APPROVED GLASS SURFACES

Navigation

Floating Toolbar

Command Palette

Search Overlay

Dropdown

Popover

Tooltip

Floating AI Panel

Floating Quick Actions

Context Menu

Toast

---

# NEVER USE GLASS

Cards

Forms

Book Pages

Editor Canvas

Main Dashboard

Feature Sections

Pricing Cards

Marketing Content

Articles

Blog Posts

Settings Panels

Library Grid

Book Covers

Glass must never become the background material.

---

# GLASS TYPES

## Glass XS

Purpose

Tooltip

Opacity

94%

Blur

10px

Border

1px

---

## Glass Small

Purpose

Dropdown

Popover

Opacity

92%

Blur

16px

Border

1px

---

## Glass Medium

Purpose

Navigation

Floating Toolbar

Command Palette

Opacity

90%

Blur

20px

Border

1px

---

## Glass Large

Purpose

Dialogs

Search Overlay

Drawer

Opacity

88%

Blur

28px

Border

1px

---

## Glass Premium

Purpose

Landing Hero Floating Panel

Showcase Overlay

Marketing Demonstration

Opacity

86%

Blur

36px

Border

1px

Maximum two instances per page.

---

# BACKGROUND TINT

Light Theme

Warm Ivory

White

Very subtle gold tint

Dark Theme

Charcoal

Graphite

Warm gray

Never blue.

Never purple.

Never neon.

---

# BORDER

Always

1px

Border Color

rgba(255,255,255,.35)

Dark Theme

rgba(255,255,255,.08)

Never thicker.

---

# SHADOW

Glass uses

Level 2

or

Level 3

from SHADOWS.md

Never Hero shadow.

---

# BLUR VALUES

Tooltip

10px

Dropdown

16px

Navigation

20px

Dialog

28px

Marketing Showcase

36px

Never exceed

40px

---

# SATURATION

Use minimal saturation increase.

Never create colorful glass.

---

# NOISE

Optional

2%

Paper grain

Only for

Marketing

Never inside dashboard.

---

# TRANSPARENCY

Light

88–94%

Dark

82–90%

Never fully transparent.

---

# MOTION

Glass appears using

Fade

↓

Small Scale

↓

Soft Blur

Duration

250ms

Never bounce.

Never stretch.

---

# RESPONSIVE

Mobile reduces blur.

Maintain readability.

Prefer solid surfaces on low-powered devices.

---

# ACCESSIBILITY

Glass must never reduce contrast.

Text contrast

WCAG AA minimum.

Blur must never obscure content.

Respect

Reduced Transparency

OS settings where available.

---

# PERFORMANCE

Use backdrop-filter sparingly.

Never nest multiple glass layers.

Avoid animating blur radius.

Animate

Opacity

Transform

Only.

Maximum three simultaneous glass surfaces.

---

# COMPONENT MAPPING

Navbar

Glass Medium

Dropdown

Glass Small

Tooltip

Glass XS

Search

Glass Large

Command Palette

Glass Medium

Drawer

Glass Large

Toast

Glass Small

Floating Toolbar

Glass Medium

AI Assistant Bubble

Glass Small

---

# DARK MODE

Increase opacity slightly.

Reduce blur slightly.

Avoid glowing edges.

Keep materials warm.

---

# IMPLEMENTATION

CSS Variables

--glass-xs

--glass-sm

--glass-md

--glass-lg

--glass-premium

---

# DESIGN TOKENS

glass.xs

glass.sm

glass.md

glass.lg

glass.premium

---

# MACHINE TOKENS

{
  "glass": {
    "xs": {
      "blur": "10px",
      "opacity": 0.94
    },
    "sm": {
      "blur": "16px",
      "opacity": 0.92
    },
    "md": {
      "blur": "20px",
      "opacity": 0.90
    },
    "lg": {
      "blur": "28px",
      "opacity": 0.88
    },
    "premium": {
      "blur": "36px",
      "opacity": 0.86
    }
  }
}

---

# REVIEW CHECKLIST

✓ Glass only on approved surfaces

✓ Correct blur values

✓ Correct opacity

✓ Proper border

✓ Warm tint

✓ Accessible contrast

✓ Performance optimized

✓ Maximum simultaneous layers respected

---

# FINAL RULE

Glass should feel like a premium material.

Not a visual effect.

If users notice the glass before they notice the content,

the glass is wrong.
