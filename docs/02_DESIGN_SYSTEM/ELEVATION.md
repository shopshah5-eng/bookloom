# BOOKLOOM ELEVATION SYSTEM

Version: 1.0

Status: Approved

Priority: Critical

---

# PURPOSE

Elevation defines spatial hierarchy.

It determines

• Which element appears above another

• Which element receives interaction priority

• Which layer blocks interaction

• Which surfaces float

Elevation is structural.

Shadows are visual.

They are documented separately.

---

# DESIGN PHILOSOPHY

BookLoom should feel like layered sheets of paper.

Not floating windows everywhere.

Higher elevation should always have a reason.

Never create unnecessary floating UI.

---

# CORE PRINCIPLES

Higher ≠ Better

Higher = More Important

Every elevated element must answer:

Why does this float?

If there is no answer,

it should not float.

---

# LAYER HIERARCHY

Level 0

Application Background

Examples

Page background

Canvas

Reading area

Book pages

---

Level 1

Base Interface

Examples

Cards

Tables

Sidebar

Navigation

Forms

---

Level 2

Interactive Surface

Examples

Hovered cards

Expanded panels

Sticky toolbar

Floating actions

Inspector

---

Level 3

Transient UI

Examples

Dropdown

Popover

Context menu

Tooltip

Autocomplete

Color picker

Date picker

---

Level 4

Overlay Surface

Examples

Drawer

Command Palette

Search

Notifications

Quick Actions

---

Level 5

Modal Layer

Examples

Dialogs

Confirmation

Share

Billing

Export

Workspace Switcher

---

Level 6

Critical Overlay

Examples

Emergency warning

Security verification

Blocking workflow

Session expired

---

Level 7

Developer Layer

Examples

Debug overlays

Accessibility tools

Performance tools

Never visible to users.

---

# Z-INDEX TOKENS

background

0

base

10

navigation

20

sticky

30

dropdown

100

popover

200

drawer

300

modal

400

toast

500

tooltip

600

debug

1000

Never invent z-index values.

---

# MODALS

Maximum

One modal.

Never stack modals.

Instead

Close

↓

Open next

or

Use stepper inside modal.

---

# DRAWERS

Maximum

One active drawer.

Drawer closes before modal opens.

---

# DROPDOWNS

Always above

Forms

Cards

Navigation

Never above

Modal

Toast

Tooltip

---

# TOOLTIPS

Highest user-facing layer.

Never clipped.

Never hidden behind dialogs.

---

# TOASTS

Top-right

Desktop

Bottom-center

Mobile

Always above navigation.

Never block forms.

Auto-dismiss unless destructive.

---

# COMMAND PALETTE

Above everything except

Critical overlay.

Backdrop required.

Keyboard focus trapped.

---

# SEARCH OVERLAY

Behaves like command palette.

One active instance only.

---

# FLOATING TOOLBARS

Only when editing.

Disappear when inactive.

Never overlap important content.

---

# STICKY ELEMENTS

Allowed

Navigation

Editor toolbar

Table header

Inspector tabs

Never sticky

Dialogs

Notifications

Forms

---

# BACKDROP

Every modal

Drawer

Command palette

Search overlay

Uses

Backdrop

Blur

Click outside to dismiss

Unless destructive confirmation.

---

# INTERACTION PRIORITY

Highest

Critical Overlay

↓

Modal

↓

Drawer

↓

Dropdown

↓

Base UI

↓

Background

Keyboard focus follows this order.

---

# FOCUS MANAGEMENT

Opening overlay

↓

Trap focus

↓

Restore focus

↓

Return to triggering element

Required for accessibility.

---

# MOBILE

Reduce overlay complexity.

Prefer

Bottom Sheet

Instead of desktop dialog.

Avoid stacked floating surfaces.

---

# DARK MODE

Elevation should be communicated by

Contrast

Blur

Subtle shadow

Not brightness.

---

# ACCESSIBILITY

Every elevated element must

Trap focus (where applicable)

Support Escape key

Support keyboard navigation

Announce via screen readers

Never hide active focus

---

# PERFORMANCE

Avoid excessive blur.

Avoid nested overlays.

Never animate z-index.

Animate

Opacity

Transform

Scale

Only.

---

# DESIGN TOKENS

elevation.background

elevation.base

elevation.navigation

elevation.sticky

elevation.dropdown

elevation.popover

elevation.drawer

elevation.modal

elevation.toast

elevation.tooltip

elevation.debug

---

# CSS VARIABLES

--z-background: 0;

--z-base: 10;

--z-navigation: 20;

--z-sticky: 30;

--z-dropdown: 100;

--z-popover: 200;

--z-drawer: 300;

--z-modal: 400;

--z-toast: 500;

--z-tooltip: 600;

--z-debug: 1000;

---

# MACHINE TOKENS

{
  "zIndex": {
    "background": 0,
    "base": 10,
    "navigation": 20,
    "sticky": 30,
    "dropdown": 100,
    "popover": 200,
    "drawer": 300,
    "modal": 400,
    "toast": 500,
    "tooltip": 600,
    "debug": 1000
  }
}

---

# REVIEW CHECKLIST

✓ Overlay hierarchy consistent

✓ No arbitrary z-index

✓ One modal maximum

✓ Focus trapped correctly

✓ Escape supported

✓ Keyboard navigation intact

✓ Responsive overlays

✓ Accessible announcements

✓ Performance optimized

---

# FINAL RULE

Users should never think about layers.

They should simply feel that every interface element appears exactly where they expect it to.

If two elements compete for attention,

the elevation system has failed.
