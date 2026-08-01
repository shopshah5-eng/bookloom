# ICON BUTTON COMPONENT

Version: 1.0

Status: Production Ready

Category: Actions

Priority: CRITICAL

---

# PURPOSE

Icon Buttons perform compact actions.

They save space.

They support dense interfaces.

They should never force users to guess their purpose.

Every Icon Button must communicate its meaning through:

• Icon
• Tooltip
• Accessible label
• Position
• Context

---

# DESIGN PHILOSOPHY

Text Buttons explain.

Icon Buttons assist.

Use Icon Buttons only when users can reasonably predict the action.

If clarity is reduced,

use a normal Button instead.

---

# USE CASES

Rich Text Toolbar

Editor Formatting

Sidebar Controls

Navigation

Card Actions

Search Controls

Pagination

Media Controls

Bookmarks

Favorites

View Switching

Zoom Controls

---

# NEVER USE

Primary page actions

Checkout

Publishing

Payments

Account deletion

Critical confirmation

Multi-step workflows

---

# VISUAL ANATOMY

┌──────────────┐
│     Icon     │
└──────────────┘

Optional

Notification Dot

Loading Spinner

Selection Indicator

Never combine multiple indicators.

---

# STRUCTURE

Container

↓

Icon Wrapper

↓

Icon

↓

Optional Badge

↓

Focus Ring

---

# VARIANTS

Ghost

Default

Most common.

Transparent background.

---

Filled

For emphasis.

Toolbar groups.

Floating actions.

---

Outline

Low emphasis.

Cards.

Lists.

Settings.

---

Danger

Delete

Remove

Clear

Reset

---

Success

Confirm

Accept

Approve

---

# SHAPES

Square

Default

Rounded Corners

Circle

Allowed

Only for floating actions

Navigation

Avatars

Never mix shapes in one toolbar.

---

# SIZES

XS

32px

Dense toolbars

---

SM

36px

Compact navigation

---

MD

44px

Default

---

LG

48px

Touch interfaces

---

XL

56px

Mobile only

Floating controls

---

# ICON SIZE

XS

16px

SM

18px

MD

20px

LG

24px

XL

24px

Icons should always remain optically centered.

---

# STATES

Default

Hover

Focus

Pressed

Disabled

Loading

Selected

Active

Never include Visited.

---

# INTERACTION

Hover

Background appears

150ms

---

Pressed

1px downward movement

100ms

---

Focus

Visible focus ring

2px

---

Selected

Persistent background

Persistent icon color

Used for

Bold

Italic

List

Alignment

Bookmark

Favorite

---

Loading

Replace icon with spinner.

Maintain size.

Prevent repeated clicks.

---

Disabled

Reduced opacity

No hover

No pointer events

---

# TOOLTIPS

Required

Desktop

Optional

Mobile

Delay

300ms

Never use tooltips as the only explanation.

---

# ACCESSIBILITY

Every Icon Button requires

Accessible name

Example

aria-label="Bold"

Never rely on tooltip text.

Role

button

Minimum touch target

44×44px

Visible focus

Required

---

# KEYBOARD

Tab

Focus

Enter

Activate

Space

Activate

Arrow Keys

Toolbar navigation

Escape

Close menus if applicable

---

# ARIA

aria-label

Required

aria-pressed

Required for toggle buttons

aria-disabled

When disabled

aria-expanded

For disclosure controls

aria-controls

If opening content

---

# RESPONSIVE

Desktop

Standard

Tablet

Standard

Mobile

Minimum

48×48px

Increase spacing between adjacent buttons.

---

# MOTION

Hover Fade

150ms

Press

100ms

Selection

Crossfade

Loading

Spinner Fade

Use Motion Tokens only.

---

# DESIGN TOKENS

iconButton.size.md

iconButton.radius

iconButton.background.hover

iconButton.background.selected

iconButton.icon.default

iconButton.icon.active

iconButton.focus.ring

iconButton.shadow

---

# REACT API

```tsx
<IconButton
  icon={<Bold />}
  ariaLabel="Bold"
  variant="ghost"
  size="md"
  selected={false}
  disabled={false}
  loading={false}
  onClick={toggleBold}
/>
```

---

# PROPS

icon

variant

size

selected

disabled

loading

ariaLabel

tooltip

onClick

type

autoFocus

---

# HTML

Use

<button>

Never use

<div>

<span>

<a>

unless the control performs navigation.

---

# DO

✓ Always provide an accessible label

✓ Use clear icons

✓ Show selection state

✓ Keep touch targets large

✓ Group related controls

✓ Use consistent spacing

---

# DON'T

✗ Use for critical actions

✗ Remove tooltips

✗ Mix square and circular buttons

✗ Use decorative icons

✗ Shrink below 44px touch targets

✗ Change icon meaning across screens

---

# QA CHECKLIST

✓ Hover

✓ Focus

✓ Pressed

✓ Selected

✓ Disabled

✓ Loading

✓ Tooltip

✓ Keyboard

✓ Screen Reader

✓ Mobile

✓ RTL

✓ Dark Theme

✓ High Contrast

✓ Token Usage

---

# RELATED COMPONENTS

BUTTON

SPLIT_BUTTON

FAB

TOGGLE_BUTTON

TOOLBAR

MENU_BUTTON

EDITOR_TOOLBAR

---

# DEPENDENCIES

Icons

Motion

Colors

Radius

Spacing

Typography

Accessibility

Elevation

---

# FINAL RULE

An Icon Button should never make users stop and think.

If users hesitate about what it does,

replace it with a text Button.
