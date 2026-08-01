# BOOKLOOM ICONOGRAPHY SYSTEM

Version: 1.0

Status: Approved

Priority: Critical

---

# PURPOSE

Icons communicate meaning quickly.

They support text.

They improve scanning.

They reduce cognitive load.

Icons never replace clear language.

If an icon requires explanation,

it is the wrong icon.

---

# DESIGN PHILOSOPHY

BookLoom uses icons that feel

Minimal

Elegant

Editorial

Professional

Timeless

Quiet

Icons should disappear into the interface.

Users should understand them instantly.

---

# ICON LIBRARY

Primary Library

Lucide

Reason

Consistent

Open Source

Tree-shakeable

Excellent stroke quality

Highly readable

Never mix icon libraries.

---

# CUSTOM ICONS

Allowed only when

No suitable Lucide icon exists.

Custom icons must match

Stroke width

Corner radius

Visual weight

Perspective

Grid

Naming convention

---

# STYLE

Outline only.

Rounded line joins.

Rounded line caps.

No filled icons.

No duotone.

No gradients.

No skeuomorphic artwork.

---

# STROKE WIDTH

Default

1.75px

Small Icons

1.5px

Large Decorative Icons

2px

Never mix stroke weights on the same screen.

---

# ICON GRID

Every icon aligns to

24 × 24px

Internal drawing area

20 × 20px

Visual padding

2px

---

# ICON SIZES

XS

16px

Usage

Dense tables

Metadata

Inline text

---

SM

20px

Usage

Buttons

Navigation

Forms

---

MD

24px

Default

Most UI

---

LG

32px

Feature cards

Dialogs

Illustrations

---

XL

48px

Empty states

Large callouts

---

2XL

64px

Landing page

Marketing

---

# ICON COLOR

Primary

Text Primary

Secondary

Text Secondary

Disabled

Muted

Interactive

Brand Gold

Error

Error Color

Success

Success Color

Warning

Warning Color

Never use decorative colors.

---

# ICON SPACING

Icon → Label

8px

Icon → Button Edge

12px

Icon → Input Edge

12px

Icon → Card Title

16px

Never crowd icons.

---

# BUTTON ICONS

Leading icons

Preferred

Trailing icons

Only when meaningful

Icon-only buttons

Require accessible label

Minimum size

44 × 44px

---

# NAVIGATION ICONS

Sidebar

20px

Top Navigation

20px

Active

Brand accent

Inactive

Secondary text

---

# FORM ICONS

Leading

Search

Email

Password

Trailing

Visibility toggle

Validation

Never use decorative icons in forms.

---

# STATUS ICONS

Success

Check

Warning

Triangle

Error

Circle X

Info

Circle Info

Loading

Loader

Draft

File

Published

Book

Archived

Archive

Deleted

Trash

Use consistent semantics across the product.

---

# EDITOR ICONS

Bold

Italic

Underline

Heading

List

Quote

Image

Table

Link

Code

Comment

Undo

Redo

Export

These actions must never change icons between pages.

---

# AI ICONS

AI Assistant

Sparkles

Generation

Wand

Suggestions

Lightbulb

Refine

Magic Wand

Chat

Message Circle

Keep AI icons subtle.

Never make them playful.

---

# EMPTY STATES

Large

48–64px

Low contrast

Supportive

Never oversized.

---

# MARKETING

Illustrative icons allowed.

Maximum

64px

Maintain the same visual language.

---

# ACCESSIBILITY

Every interactive icon requires

Accessible name

Tooltip where appropriate

Visible focus

Keyboard support

Never rely on icon alone.

Pair with text where clarity matters.

---

# RTL SUPPORT

Directional icons

Mirror automatically

Examples

Arrow Left

Arrow Right

Chevron

Navigation

Non-directional icons

Do not mirror.

---

# PERFORMANCE

Import individual icons.

Never import the entire library.

Tree shake all icon usage.

Avoid duplicate custom icons.

---

# DESIGN TOKENS

icon.size.xs

icon.size.sm

icon.size.md

icon.size.lg

icon.size.xl

icon.stroke.default

icon.stroke.small

icon.stroke.large

---

# CSS VARIABLES

--icon-xs: 16px;

--icon-sm: 20px;

--icon-md: 24px;

--icon-lg: 32px;

--icon-xl: 48px;

--icon-stroke: 1.75px;

---

# MACHINE TOKENS

{
  "icon": {
    "size": {
      "xs": "16px",
      "sm": "20px",
      "md": "24px",
      "lg": "32px",
      "xl": "48px",
      "2xl": "64px"
    },
    "stroke": {
      "small": "1.5px",
      "default": "1.75px",
      "large": "2px"
    }
  }
}

---

# REVIEW CHECKLIST

✓ Single icon library

✓ Consistent stroke width

✓ Proper sizing

✓ Accessible labels

✓ Correct spacing

✓ Semantic consistency

✓ Tree-shaken imports

✓ No decorative misuse

---

# FINAL RULE

Icons support the interface.

Typography leads.

If removing the icon makes the interface confusing,

improve the wording before adding more icons.
