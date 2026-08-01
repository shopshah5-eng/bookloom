# BUTTON GROUP COMPONENT

Version: 1.0

Status: Production Ready

Category: Actions

Priority: HIGH

---

# PURPOSE

A Button Group visually combines related actions into a single control.

Buttons remain independent while sharing a common layout and border.

---

# WHEN TO USE

Text Alignment

View Switcher

Zoom Controls

Editor Toolbar

Pagination Controls

Filter Groups

Sort Controls

---

# NEVER USE

Unrelated actions

Primary + Danger combinations

Navigation menus

Large forms

---

# GROUP TYPES

Horizontal

Default

Vertical

Mobile

Responsive

Automatically switches when required.

---

# VARIANTS

Primary

Secondary

Outline

Ghost

Mixed variants are not allowed within the same group.

---

# SIZES

SM

36px

MD

44px

LG

52px

All buttons in a group must use the same size.

---

# LAYOUT

Shared border

No gaps

Internal dividers

Equal height

Optional equal width

---

# STATES

Default

Hover

Focus

Pressed

Selected

Disabled

---

# SELECTION MODES

Single Selection

One active button

Example

Left | Center | Right

Multiple Selection

Several active buttons

Example

Bold | Italic | Underline

No Selection

Action buttons only

Example

Undo | Redo

---

# ACCESSIBILITY

Role

group

aria-label

Required for group context

Focus

Arrow key navigation within group

---

# REACT API

```tsx
<ButtonGroup variant="outline" size="md">
  <Button>Left</Button>
  <Button>Center</Button>
  <Button>Right</Button>
</ButtonGroup>
```

---

# DO

✓ Group related actions

✓ Use consistent sizes across all items

✓ Ensure accessible group labeling

---

# DON'T

✗ Mix different button variants in a group

✗ Group unrelated actions

---

# FINAL RULE

A Button Group clarifies relationships between related actions.
