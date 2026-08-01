# TEXTAREA COMPONENT

Version: 1.0

Status: Production Ready

Category: Inputs

Priority: CRITICAL

---

# PURPOSE

The Textarea component allows users to enter multi-line plain text.

It is designed for longer content than a standard Input while remaining lightweight.

It is not a rich text editor.

---

# WHEN TO USE

Book Description

AI Prompt

Synopsis

Notes

Comments

Feedback

Author Bio

Markdown

Long-form Settings

---

# NEVER USE

Rich text editing

Document writing

Chapter editing

Code editing

Use the Book Editor instead.

---

# VISUAL ANATOMY

┌──────────────────────────────┐
│ Label                        │
│ ┌──────────────────────────┐ │
│ │                          │ │
│ │  Multi-line Text         │ │
│ │                          │ │
│ └──────────────────────────┘ │
│ Helper Text      120 / 500   │
└──────────────────────────────┘

---

# STRUCTURE

Container

↓

Label

↓

Textarea

↓

Resize Handle (optional)

↓

Helper Text

↓

Character Counter

↓

Validation Message

---

# VARIANTS

Default

Filled

Outline

Ghost

---

# SIZES

SM

Minimum Height

96px

MD

Minimum Height

140px

(Default)

LG

Minimum Height

220px

---

# STATES

Default

Hover

Focus

Typing

Filled

Disabled

Read Only

Loading

Success

Warning

Error

---

# AUTO RESIZE

Default

Enabled

Expand vertically only.

Never resize horizontally.

Maximum Height

480px

After reaching maximum height,

internal scrolling begins.

---

# MANUAL RESIZE

Desktop

Optional

Vertical only

Mobile

Disabled

---

# LABELS

Always visible.

Never replace labels with placeholders.

---

# PLACEHOLDER

Example content only.

Never instructions.

Example

Write a short summary...

---

# CHARACTER LIMIT

Optional

Format

245 / 1000

Counter updates live.

Character limit never changes layout.

---

# HELPER TEXT

Maximum

2 lines

Examples

Markdown supported.

Maximum 1,000 characters.

Visible only when useful.

---

# VALIDATION

Validate on

Blur

or

Submit

Error messages explain

What happened

How to fix it

Example

Summary cannot exceed 1000 characters.

---

# SCROLLING

Internal scrolling begins only after

Maximum Height

is reached.

Outer page scrolling should remain smooth.

---

# ACCESSIBILITY

Native

<textarea>

Associated label

Required

Visible focus

Required

Minimum touch height

44px

WCAG AA contrast

Required

---

# KEYBOARD

Tab

Next field

Shift + Tab

Previous field

Enter

New line

Ctrl/Cmd + Enter

Optional form submit

---

# ARIA

aria-label

aria-labelledby

aria-describedby

aria-invalid

aria-required

---

# RESPONSIVE

Desktop

Resizable

Tablet

Auto Resize

Mobile

Full Width

No manual resize

---

# MOTION

Hover

150ms

Focus Ring

150ms

Validation

Crossfade

Never animate height changes.

---

# DESIGN TOKENS

textarea.height

textarea.padding

textarea.radius

textarea.border

textarea.focus

textarea.counter

textarea.error

textarea.helper

---

# REACT API

```tsx
<Textarea
  label="Book Summary"
  placeholder="Write a summary..."
  value={summary}
  maxLength={1000}
  autoResize
  helperText="Maximum 1000 characters."
/>
```

---

# PROPS

label

placeholder

value

defaultValue

rows

maxRows

minRows

autoResize

maxLength

disabled

readOnly

required

helperText

error

name

id

onChange

onBlur

onFocus

---

# HTML

<label>

<textarea>

Never recreate native textarea behavior.

---

# DO

✓ Keep labels visible

✓ Auto-resize vertically

✓ Show character count when needed

✓ Preserve layout during validation

✓ Use semantic HTML

---

# DON'T

✗ Horizontal resize

✗ Rich text editing

✗ Placeholder-only labels

✗ Hide validation errors

✗ Shrink while typing

---

# QA CHECKLIST

✓ Hover

✓ Focus

✓ Typing

✓ Auto Resize

✓ Character Counter

✓ Validation

✓ Disabled

✓ Read Only

✓ Keyboard

✓ Screen Reader

✓ Mobile

✓ RTL

✓ Dark Theme

✓ High Contrast

✓ Token Usage

---

# RELATED COMPONENTS

INPUT

SEARCH

AI_PROMPT_INPUT

BOOK_EDITOR

COMMENT_BOX

---

# DEPENDENCIES

Typography

Spacing

Motion

Colors

Accessibility

Validation

---

# FINAL RULE

A Textarea should expand naturally with the user's thoughts while remaining stable, readable, and distraction-free.
