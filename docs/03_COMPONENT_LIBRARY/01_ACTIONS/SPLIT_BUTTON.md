# SPLIT BUTTON COMPONENT

Version: 1.0

Status: Production Ready

Category: Actions

Priority: HIGH

---

# PURPOSE

A Split Button combines

One Primary Action

+

One Secondary Menu

into a single component.

Users should be able to perform the most common action with one click while still having access to related alternatives.

---

# DESIGN PHILOSOPHY

Speed first.

Choice second.

The primary action should always represent the most common workflow.

Never force users to open a menu for the most likely action.

---

# WHEN TO USE

Publishing

Export

Generate AI

Download

Duplicate

Share

Import

Workspace Actions

Version History

Template Actions

---

# NEVER USE

Delete

Logout

Payments

Account Settings

Simple actions

When only one action exists

Critical confirmations

---

# EXAMPLES

Publish ▼

Primary

Publish Now

Menu

Publish Later

Publish Privately

Publish to Team

Save as Draft

Export ▼

Primary

Export PDF

Menu

DOCX

EPUB

Markdown

HTML

TXT

Generate ▼

Primary

Generate Chapter

Menu

Generate Outline

Generate Characters

Generate Summary

Generate Cover Prompt

---

# VISUAL ANATOMY

┌───────────────────────────────┐
│ Publish │ ▼                  │
└───────────────────────────────┘

Left

Primary Button

Right

Dropdown Trigger

Divider

Optional

Loading Indicator

Optional

Leading Icon

---

# STRUCTURE

Container

↓

Primary Action

↓

Divider

↓

Menu Trigger

↓

Dropdown

↓

Menu Items

---

# VARIANTS

Primary

Filled

Default

---

Secondary

Neutral Filled

---

Outline

Border

Transparent

---

Ghost

Toolbar

Minimal UI

---

Danger

Destructive collections only

Rare

---

# SIZES

SM

36px

MD

44px

LG

52px

XL

60px

Both sections always share the same height.

---

# WIDTH

Content Width

Default

Full Width

Allowed

Minimum

120px

Maximum

320px

---

# MENU

Appears below trigger.

Aligned to primary button.

Minimum width

220px

Maximum width

360px

Scrollable after

10 items

---

# MENU ITEMS

Each item contains

Optional Icon

↓

Label

↓

Optional Shortcut

↓

Optional Badge

↓

Optional Description

Never exceed two text lines.

---

# STATES

Default

Hover

Pressed

Focused

Expanded

Disabled

Loading

Success

Error

---

# INTERACTION

Primary click

Immediately executes default action.

Dropdown click

Opens menu.

Selecting a menu item

Executes selected action.

Menu closes automatically.

---

# DEFAULT ACTION

The primary action must always be documented.

Changing the default action requires product approval.

Never dynamically change the default based on user behavior.

Consistency is more important than personalization.

---

# LOADING

Loading affects only the primary action.

Dropdown remains disabled during execution.

Width remains constant.

---

# DISABLED

Both sections disabled.

No hover.

No menu.

Visible disabled styling.

---

# ICONS

Leading icons allowed.

Dropdown chevron always trailing.

Chevron rotates

180°

when menu opens.

---

# RESPONSIVE

Desktop

Standard

Tablet

Standard

Mobile

Full width preferred.

Menu becomes Bottom Sheet when space is constrained.

---

# ACCESSIBILITY

Role

button

Menu Trigger

button

Dropdown

menu

Items

menuitem

Accessible labels

Required

Visible focus

Required

Touch target

44×44px minimum

---

# KEYBOARD

Tab

Moves between controls

Enter

Activates focused section

Space

Activates focused section

Arrow Down

Opens menu

Arrow Up

Navigates menu

Home

First item

End

Last item

Escape

Closes menu

Typeahead

Supported

---

# ARIA

Primary

role="button"

Dropdown Trigger

aria-haspopup="menu"

aria-expanded

aria-controls

Menu

role="menu"

Menu Item

role="menuitem"

---

# MOTION

Button Hover

150ms

Chevron Rotate

150ms

Menu Fade

150ms

Menu Slide

150ms

Use Motion Tokens only.

---

# DESIGN TOKENS

splitButton.height

splitButton.radius

splitButton.divider

splitButton.primary.background

splitButton.menu.background

splitButton.chevron.rotation

splitButton.shadow

splitButton.focus.ring

---

# REACT API

```tsx
<SplitButton
  label="Publish"
  variant="primary"
  size="md"
  onPrimaryClick={publishBook}
  menuItems={[
    {
      label: "Save Draft",
      onClick: saveDraft
    },
    {
      label: "Publish Later",
      onClick: schedulePublish
    },
    {
      label: "Publish Privately",
      onClick: publishPrivate
    }
  ]}
/>
```

---

# PROPS

label

variant

size

leadingIcon

loading

disabled

fullWidth

menuItems

onPrimaryClick

onOpen

onClose

---

# HTML

Primary

<button>

Dropdown Trigger

<button>

Menu

<ul role="menu">

Menu Item

<li role="menuitem">

Never use div-only menus.

---

# DO

✓ Keep one clear default action

✓ Keep menu items related

✓ Show keyboard shortcuts

✓ Preserve button width

✓ Support keyboard navigation

✓ Close menu after selection

---

# DON'T

✗ Hide the default action

✗ Mix unrelated actions

✗ Change default action automatically

✗ Nest submenus

✗ Use for destructive actions

✗ Overload with too many items

---

# QA CHECKLIST

✓ Hover

✓ Focus

✓ Expanded

✓ Keyboard

✓ Typeahead

✓ Screen Reader

✓ RTL

✓ Mobile Bottom Sheet

✓ Dark Theme

✓ High Contrast

✓ Motion Tokens

✓ No Layout Shift

---

# RELATED COMPONENTS

BUTTON

ICON_BUTTON

MENU

POPOVER

COMMAND_PALETTE

TOOLBAR

---

# DEPENDENCIES

Buttons

Menus

Motion

Icons

Elevation

Spacing

Accessibility

---

# FINAL RULE

The primary action should satisfy at least 80% of user interactions.

The dropdown exists to expose alternatives—not to hide the main workflow.
