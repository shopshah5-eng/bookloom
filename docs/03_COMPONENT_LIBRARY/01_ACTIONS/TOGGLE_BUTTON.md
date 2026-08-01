# TOGGLE BUTTON COMPONENT

Version: 1.0

Status: Production Ready

Category: Actions

Priority: HIGH

---

# PURPOSE

A Toggle Button switches between two persistent states.

Pressed

↓

Not Pressed

Unlike a Button, the state remains after activation.

---

# WHEN TO USE

Bold

Italic

Underline

List

Bookmark

Favorite

Grid/List View

Filters

Sidebar Pin

Theme Toggle

---

# NEVER USE

Submit Forms

Delete

Publish

Navigation

Temporary actions

---

# VISUAL ANATOMY

┌───────────────┐
│ ★ Favorite    │
└───────────────┘

Optional

Leading Icon

Label

Selection Indicator

---

# VARIANTS

Primary

Secondary

Ghost

Outline

Danger

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

Selected

Disabled

---

# BEHAVIOR

Click

Toggle state

Click Again

Return to previous state

Selection persists until changed.

---

# GROUP BEHAVIOR

Independent

Multiple selections allowed.

Exclusive

One selected at a time.

Document behavior explicitly.

---

# VISUAL FEEDBACK

Selected

Filled background

Active icon

High contrast

Unselected

Neutral appearance

---

# ACCESSIBILITY

Role

button

Required

aria-pressed

Visible focus

Minimum touch target

44×44px

---

# KEYBOARD

Tab

Focus

Enter

Toggle

Space

Toggle

---

# ARIA

aria-pressed

Required

aria-disabled

When applicable

aria-label

When no visible text exists

---

# RESPONSIVE

Desktop

Standard

Tablet

Standard

Mobile

Minimum 48px height

---

# MOTION

Hover

150ms

Selection

Crossfade

Press

100ms

---

# DESIGN TOKENS

toggleButton.background

toggleButton.selected

toggleButton.radius

toggleButton.focus

toggleButton.icon

---

# REACT API

```tsx
<ToggleButton
  selected={isBold}
  onChange={toggleBold}
  icon={<Bold />}
>
  Bold
</ToggleButton>
```

---

# PROPS

selected

disabled

variant

size

icon

children

onChange

---

# HTML

<button>

---

# DO

✓ Show clear selected state

✓ Support keyboard

✓ Use aria-pressed

✓ Keep state persistent

---

# DON'T

✗ Use for one-time actions

✗ Hide selection state

✗ Mix toggle and normal button behavior

---

# FINAL RULE

A Toggle Button changes state.

A Button performs an action.

Never confuse the two.
