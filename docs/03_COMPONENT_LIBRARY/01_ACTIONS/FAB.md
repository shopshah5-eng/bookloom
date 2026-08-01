# FLOATING ACTION BUTTON (FAB)

Version: 1.0

Status: Production Ready

Category: Actions

Priority: MEDIUM

---

# PURPOSE

A Floating Action Button (FAB) provides immediate access to the single most important action on a screen.

It should reduce interaction cost.

It should never become visual clutter.

There must only be one FAB per screen.

---

# DESIGN PHILOSOPHY

BookLoom is not a mobile-first social app.

It is a premium productivity platform.

Therefore,

FABs are exceptional components,

not default navigation.

When in doubt,

use a normal Button instead.

---

# WHEN TO USE

✓ Create New Book

✓ New Workspace

✓ New Collection

✓ New Folder

✓ Add Comment (Mobile)

✓ New Template

✓ Capture Quick Idea

---

# NEVER USE

Delete

Logout

Settings

Payments

Publishing

Export

AI Generation

Navigation

Search

Filtering

Undo

Redo

Multiple simultaneous actions

---

# FAB TYPES

Primary FAB

One important action.

Example

+ New Book

---

Extended FAB

Contains

Icon

+

Text

Example

✏️ New Chapter

Preferred on desktop.

---

Mini FAB

Compact version

Mobile contextual actions only.

---

Speed Dial FAB

Not allowed.

BookLoom intentionally avoids expanding floating menus.

---

# VISUAL ANATOMY

Extended

┌────────────────────────────┐
│ +  New Book                │
└────────────────────────────┘

Standard

┌───────────┐
│     +     │
└───────────┘

---

# STRUCTURE

Container

↓

Elevation

↓

Background

↓

Icon

↓

Optional Label

↓

Focus Ring

---

# PLACEMENT

Desktop

Bottom Right

32px margin

Tablet

Bottom Right

24px margin

Mobile

Bottom Right

20px margin

Never cover navigation.

Never block important content.

---

# ELEVATION

Higher than content.

Lower than

Dialogs

Popovers

Tooltips

Drawers

Notifications

---

# VARIANTS

Primary

Brand Gold

Default

---

Secondary

Neutral

Rare

---

Danger

Not allowed

---

Ghost

Not allowed

---

Outline

Not allowed

---

# SHAPE

Circle

56 × 56px

Default

---

Extended

56px height

Adaptive width

---

Mini

48 × 48px

Mobile only

---

# ICON

Default

24px

Centered

Never animated continuously.

---

# LABELS

Extended FAB only.

Maximum

2 words

Examples

New Book

Quick Note

Add Folder

Create Draft

---

# STATES

Default

Hover

Focus

Pressed

Loading

Disabled

Hidden

Visible

---

# INTERACTION

Hover

Elevation increases slightly.

150ms.

---

Pressed

1px downward movement.

100ms.

---

Loading

Replace icon

↓

Spinner

Maintain dimensions.

---

Disabled

Rare.

FABs should normally disappear instead of remaining disabled.

---

# VISIBILITY

FAB appears only when relevant.

Examples

Library

↓

Visible

Editor

↓

Hidden

Landing Page

↓

Never

Authentication

↓

Never

Checkout

↓

Never

Settings

↓

Usually hidden

---

# SCROLL BEHAVIOR

Desktop

Fixed position.

Mobile

May hide while scrolling down.

Reappear when scrolling up.

Animation

Fade

+

Small Slide

---

# RESPONSIVE

Desktop

Extended FAB preferred.

Tablet

Standard FAB.

Mobile

Standard FAB.

Mini only for contextual actions.

---

# ACCESSIBILITY

Touch Target

56×56px

Role

button

Accessible Name

Required

Visible Focus

Required

Contrast

WCAG AA

---

# KEYBOARD

Tab

Focus

Enter

Activate

Space

Activate

Escape

No action

---

# ARIA

aria-label

Required

aria-disabled

When disabled

aria-busy

When loading

---

# MOTION

Fade

150ms

Scale

0.98 → 1

150ms

Hover

Elevation

Loading

Crossfade

Use Motion Tokens only.

---

# DESIGN TOKENS

fab.size

fab.radius

fab.shadow

fab.background

fab.icon.size

fab.hover

fab.focus

fab.motion

fab.spacing

---

# REACT API

```tsx
<FAB
  variant="primary"
  extended
  icon={<Plus />}
  label="New Book"
  onClick={createBook}
/>
```

---

# PROPS

variant

extended

size

icon

label

loading

disabled

hidden

onClick

ariaLabel

---

# HTML

Use

<button>

Never

<div>

Never

<span>

---

# DO

✓ One FAB per screen

✓ One clear action

✓ Keep labels short

✓ Use consistent placement

✓ Respect safe areas

✓ Hide when unnecessary

---

# DON'T

✗ Multiple FABs

✗ Speed Dial menus

✗ Critical destructive actions

✗ Navigation shortcuts

✗ Cover page content

✗ Decorative animations

---

# QA CHECKLIST

✓ Placement

✓ Hover

✓ Focus

✓ Loading

✓ Mobile

✓ Scroll behavior

✓ Safe area

✓ Keyboard

✓ Screen Reader

✓ Dark Theme

✓ High Contrast

✓ Motion Tokens

---

# RELATED COMPONENTS

BUTTON

ICON_BUTTON

TOOLBAR

BOTTOM_BAR

DRAWER

---

# DEPENDENCIES

Motion

Elevation

Colors

Icons

Spacing

Accessibility

---

# FINAL RULE

A Floating Action Button should answer one question instantly:

"What is the one thing this screen wants me to do?"

If there is more than one answer,

do not use a FAB.
