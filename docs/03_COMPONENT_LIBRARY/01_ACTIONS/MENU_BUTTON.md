# MENU BUTTON COMPONENT

Version: 1.0

Status: Production Ready

Category: Actions

Priority: HIGH

---

# PURPOSE

A Menu Button opens a menu containing related actions.

It never performs an action itself.

Selecting a menu item performs the action.

---

# WHEN TO USE

More Actions

Options

Overflow Menus

Card Actions

Editor Menus

Workspace Menus

User Profile Menu

Context Menus

---

# NEVER USE

Save

Delete

Publish

Generate

Navigation

Single Action

---

# VISUAL ANATOMY

┌──────────────┐
│ More ▼       │
└──────────────┘

Contains

Label (optional)

Icon

Chevron

---

# VARIANTS

Ghost

Default

Outline

Filled

Danger (rare)

---

# SIZES

SM

36px

MD

44px

LG

52px

---

# STATES

Default

Hover

Focus

Pressed

Expanded

Disabled

---

# MENU

Appears below trigger.

Minimum Width

220px

Maximum Width

360px

Scrollable after

10 items

---

# MENU ITEM

Optional Icon

↓

Label

↓

Shortcut

↓

Badge

↓

Description

Maximum

Two text lines.

---

# INTERACTION

Click

Open menu

Click item

Execute action

Outside click

Close menu

Escape

Close menu

Selecting an item always closes the menu.

---

# ACCESSIBILITY

Trigger

button

Menu

role="menu"

Items

role="menuitem"

Visible focus required.

---

# KEYBOARD

Enter

Open

Space

Open

Arrow Down

Next item

Arrow Up

Previous item

Home

First item

End

Last item

Escape

Close

Typeahead

Supported

---

# ARIA

aria-haspopup="menu"

aria-expanded

aria-controls

---

# RESPONSIVE

Desktop

Dropdown

Mobile

Bottom Sheet

---

# MOTION

Fade

150ms

Slide

150ms

Chevron Rotate

150ms

---

# DESIGN TOKENS

menuButton.height

menuButton.radius

menuButton.background

menuButton.focus

menuButton.shadow

---

# REACT API

```tsx
<MenuButton
  label="More"
  items={[
    { label: "Rename", onClick: rename },
    { label: "Duplicate", onClick: duplicate },
    { label: "Archive", onClick: archive }
  ]}
/>
```

---

# PROPS

label

icon

variant

size

disabled

items

onOpen

onClose

---

# HTML

Trigger

<button>

Menu

<ul role="menu">

Items

<li role="menuitem">

---

# DO

✓ Group related actions

✓ Keep labels concise

✓ Support keyboard navigation

✓ Close after selection

---

# DON'T

✗ Execute action on trigger click

✗ Nest multiple submenu levels

✗ Mix unrelated actions

✗ Hide critical actions

---

# FINAL RULE

A Menu Button reveals actions.

It never performs them directly.
