# BUTTON COMPONENT

Version: 1.0

Status: Production Ready

Category: Actions

Priority: CRITICAL

---

# PURPOSE

Buttons initiate actions.

A Button should communicate:

• What will happen
• How important the action is
• Whether it is available
• Whether it is currently executing

Buttons never navigate to another page.

Navigation belongs to Links.

---

# DESIGN PHILOSOPHY

Buttons are intentional.

Buttons are calm.

Buttons never compete with content.

The primary action should always be obvious.

If everything is Primary,
nothing is Primary.

---

# SEMANTIC HIERARCHY

Primary

Most important action.

One per screen section.

Examples

Publish Book

Continue

Save Changes

Generate Draft

---

Secondary

Supporting actions.

Examples

Cancel

Preview

Duplicate

View Details

---

Outline

Low emphasis.

Examples

Export

Download

Share

---

Ghost

Minimal emphasis.

Toolbar actions.

Inline actions.

Card actions.

---

Danger

Destructive actions.

Delete

Remove

Reset

Archive

---

Success

Positive confirmation.

Approve

Accept

Confirm

---

Warning

Requires caution.

Overwrite

Replace

Force Publish

---

# VISUAL ANATOMY

┌────────────────────────────┐
│  Icon   Label   Badge      │
└────────────────────────────┘

Optional

Leading Icon

Trailing Icon

Loading Spinner

Badge

Shortcut Label

Never include more than one badge.

---

# STRUCTURE

Container

↓

Content Wrapper

↓

Leading Icon

↓

Label

↓

Trailing Icon

↓

Spinner

↓

Badge

---

# VARIANTS

Primary

Filled

Brand Gold

---

Secondary

Neutral Filled

---

Outline

Transparent

Border

---

Ghost

No Border

No Fill

---

Danger

Red Filled

---

Success

Green Filled

---

Warning

Amber Filled

---

# SIZES

XS

Height

32px

Font

12px

Padding X

12px

---

SM

Height

36px

Font

14px

Padding

16px

---

MD (Default)

Height

44px

Font

15px

Padding

20px

---

LG

Height

52px

Font

16px

Padding

24px

---

XL

Height

60px

Font

18px

Padding

32px

---

# STATES

Default

Hover

Focus

Pressed

Disabled

Loading

Success

Error

Visited (never)

Selected (only toggle buttons)

---

# INTERACTION

Hover

Elevation increases slightly.

Background changes.

150ms.

---

Pressed

Small downward movement

1px maximum.

Never bounce.

---

Focus

2px focus ring.

Never rely only on color.

---

Loading

Replace leading icon with spinner.

Preserve width.

Disable repeated clicks.

---

Disabled

Reduced contrast.

No shadow.

Cursor not-allowed.

Not focusable unless accessibility requires.

---

# ICONS

Leading icons preferred.

Trailing icons only when meaning changes.

Examples

Continue →

Download ↓

Upload ↑

Never use decorative icons.

---

# LABELS

Always verbs.

Correct

Publish

Save

Continue

Generate

Wrong

Book

Action

Here

Okay

Click

---

# WRITING RULES

Sentence Case

Maximum

3 words

Avoid punctuation.

Avoid emojis.

---

# WIDTH

Default

Content width

Allowed

Full width

Toolbar width

Never stretch unnecessarily.

---

# RESPONSIVE

Desktop

Standard sizing.

Tablet

Standard.

Mobile

Minimum height

48px.

Full width in forms.

---

# ACCESSIBILITY

Minimum touch target

44×44px

Role

button

Accessible name

Required

Visible focus

Required

Contrast

WCAG AA minimum

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

aria-disabled

aria-busy

aria-label

aria-describedby

Only when applicable.

---

# MOTION

Hover

150ms

Press

100ms

Loading

Fade Spinner

Success

Crossfade

Use only motion tokens.

---

# DESIGN TOKENS

button.height.md

button.padding.x

button.padding.y

button.radius

button.font

button.shadow

button.hover.background

button.focus.ring

button.disabled.opacity

---

# REACT API

```tsx
<Button
  variant="primary"
  size="md"
  disabled={false}
  loading={false}
  fullWidth={false}
  leadingIcon={<Plus />}
  trailingIcon={<ArrowRight />}
>
  Publish Book
</Button>
```

---

# PROPS

variant

size

disabled

loading

fullWidth

leadingIcon

trailingIcon

children

onClick

type

autoFocus

---

# HTML

Use

<button>

Never

<div>

Never

<span>

Never fake buttons.

---

# DO

✓ Use one Primary action

✓ Keep labels short

✓ Maintain width while loading

✓ Show visible focus

✓ Use semantic HTML

---

# DON'T

✗ Multiple Primary buttons beside each other

✗ Decorative icons

✗ Tiny touch targets

✗ Hidden disabled reason

✗ Raw colors

✗ Hardcoded spacing

---

# QA CHECKLIST

✓ Hover

✓ Focus

✓ Active

✓ Disabled

✓ Loading

✓ Keyboard

✓ Screen Reader

✓ Mobile

✓ Dark Theme

✓ High Contrast

✓ RTL

✓ Token Usage

✓ No Layout Shift

---

# RELATED COMPONENTS

ICON_BUTTON

SPLIT_BUTTON

FAB

LINK

MENU_ITEM

TOOLBAR_BUTTON

---

# DEPENDENCIES

Typography

Motion

Colors

Spacing

Radius

Elevation

Icons

Accessibility

---

# FINAL RULE

Buttons ask users to make decisions.

Every Button should make that decision feel clear, confident, and effortless.
