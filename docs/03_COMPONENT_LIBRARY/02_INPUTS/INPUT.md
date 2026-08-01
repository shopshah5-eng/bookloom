# INPUT COMPONENT

Version: 1.0

Status: Production Ready

Category: Inputs

Priority: CRITICAL

---

# PURPOSE

The Input component allows users to enter and edit short text.

It is the foundation for all text-based controls in BookLoom.

All text-entry components inherit from Input.

Examples

Search

Email

Password

URL

Number

Title

Slug

AI Prompt

---

# DESIGN PHILOSOPHY

Inputs should disappear into the workflow.

Users should focus on their content,

not the control itself.

Inputs must feel calm, responsive, and trustworthy.

---

# WHEN TO USE

Single-line text

Names

Titles

Email

Search

URLs

Numbers

Short descriptions

---

# NEVER USE

Long-form writing

Rich text

Multi-paragraph content

Use Textarea or Editor instead.

---

# VISUAL ANATOMY

┌──────────────────────────────┐
│ Label                        │
│ ┌──────────────────────────┐ │
│ │ Leading Icon  Text       │ │
│ └──────────────────────────┘ │
│ Helper Text                 │
└──────────────────────────────┘

Optional

Leading Icon

Trailing Icon

Prefix

Suffix

Clear Button

Character Counter

Validation Icon

---

# STRUCTURE

Container

↓

Label

↓

Input Wrapper

↓

Leading Element

↓

Native Input

↓

Trailing Element

↓

Helper Text

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

36px

MD

44px

(Default)

LG

52px

---

# STATES

Default

Hover

Focus

Typing

Filled

Placeholder

Disabled

Read Only

Loading

Success

Warning

Error

---

# LABELS

Always visible.

Never rely on placeholders as labels.

Labels use Sentence Case.

Required fields display

*

Optional fields display

(Optional)

---

# PLACEHOLDER

Used only as an example.

Never as the only instruction.

Examples

Search books...

Enter title...

example@domain.com

---

# HELPER TEXT

Placed below the input.

Used for

Instructions

Hints

Formatting guidance

Maximum

2 lines

---

# VALIDATION

Validate on

Blur

or

Submit

Avoid validating every keystroke unless necessary.

Error message should explain

What happened

How to fix it

Example

Incorrect

Invalid input.

Correct

Book title must contain at least 3 characters.

---

# PREFIX & SUFFIX

Allowed

https://

₹

$

kg

%

Never use decorative prefixes.

---

# ICONS

Leading

Search

Email

Link

User

Trailing

Visibility Toggle

Clear

Success

Error

Loading

---

# CLEAR BUTTON

Appears only when

Field contains text

Hover (Desktop)

Always visible while focused

Mobile

Always visible

---

# CHARACTER LIMIT

Optional

Displayed only when limits exist.

Format

45 / 100

---

# INTERACTION

Hover

Border changes

150ms

Focus

2px focus ring

Typing

No layout shifts

Disabled

No hover

Read Only

Selectable

Not editable

---

# ACCESSIBILITY

Native

<input>

Required

Associated label

Visible focus

Minimum height

44px

WCAG AA contrast

Autocomplete attributes

Use correct input type

---

# KEYBOARD

Tab

Focus

Shift + Tab

Previous field

Enter

Submit form (if applicable)

Escape

Clear search (optional)

---

# INPUT TYPES

text

email

password

search

number

url

tel

date

time

Never fake input types.

---

# ARIA

aria-label

aria-labelledby

aria-describedby

aria-invalid

aria-required

Only when appropriate.

---

# RESPONSIVE

Desktop

Standard

Tablet

Standard

Mobile

Full width

Minimum

48px height

---

# MOTION

Hover

150ms

Focus Ring

150ms

Validation

Crossfade

Loading

Fade spinner

Use Motion Tokens only.

---

# DESIGN TOKENS

input.height

input.padding

input.radius

input.border

input.focus

input.placeholder

input.label

input.helper

input.error

input.success

---

# REACT API

```tsx
<Input
  label="Book Title"
  placeholder="Enter title"
  value={title}
  onChange={setTitle}
  helperText="Maximum 100 characters."
  required
/>
```

---

# PROPS

label

placeholder

value

defaultValue

required

disabled

readOnly

error

helperText

leadingIcon

trailingIcon

prefix

suffix

maxLength

type

name

id

autoComplete

autoFocus

onChange

onBlur

onFocus

---

# HTML

<label>

<input>

Never recreate native input behavior.

---

# DO

✓ Always show a label

✓ Use helper text when needed

✓ Preserve layout during validation

✓ Use semantic input types

✓ Keep focus visible

---

# DON'T

✗ Placeholder-only labels

✗ Validate every keystroke

✗ Hide error messages

✗ Use decorative icons

✗ Change input height between states

---

# QA CHECKLIST

✓ Hover

✓ Focus

✓ Typing

✓ Disabled

✓ Read Only

✓ Error

✓ Success

✓ Keyboard

✓ Screen Reader

✓ Mobile

✓ RTL

✓ Dark Theme

✓ High Contrast

✓ Autofill

✓ Token Usage

---

# RELATED COMPONENTS

TEXTAREA

SEARCH

PASSWORD_INPUT

SELECT

COMBOBOX

FILE_UPLOAD

AI_PROMPT_INPUT

---

# DEPENDENCIES

Typography

Spacing

Colors

Motion

Icons

Accessibility

Validation

---

# FINAL RULE

An Input should never make users think about the interface.

It should allow them to think only about what they are writing.
