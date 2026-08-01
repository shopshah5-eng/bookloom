# LINK BUTTON COMPONENT

Version: 1.0

Status: Production Ready

Category: Actions

Priority: HIGH

---

# PURPOSE

A Link Button performs navigation.

Use it when the action moves users to another page, route, or external resource.

Never use a Link Button to submit forms or execute actions.

---

# WHEN TO USE

View Details

Learn More

Open Editor

Go to Dashboard

Documentation

External Links

---

# NEVER USE

Save

Delete

Publish

Generate

Export

Submit Forms

---

# VISUAL STYLE

Text only

Optional leading or trailing icon

Underline on hover only

No filled background

---

# VARIANTS

Primary

Secondary

Muted

Danger

---

# SIZES

SM

MD

LG

---

# STATES

Default

Hover

Focus

Visited

Disabled

---

# INTERACTION

Hover

Underline appears

Color changes

150ms

Focus

Visible focus ring

Visited

Optional for external documentation only

---

# ICONS

Allowed

Leading

Trailing

External Link

Arrow Right

Never use decorative icons.

---

# ACCESSIBILITY

Use semantic

<a>

Required

Accessible name

Visible focus

WCAG AA contrast

---

# KEYBOARD

Tab

Focus

Enter

Navigate

Space

No action

---

# ARIA

aria-label

When required

aria-current

For active navigation

---

# RESPONSIVE

No behavior changes.

Maintain minimum touch target.

---

# DESIGN TOKENS

link.color

link.hover

link.focus

link.visited

link.icon.spacing

---

# REACT API

```tsx
<LinkButton
  href="/books"
  variant="primary"
  trailingIcon={<ArrowRight />}
>
  View Books
</LinkButton>
```

---

# DO

✓ Use for navigation

✓ Keep labels descriptive

✓ Show external link icon when appropriate

---

# DON'T

✗ Use for destructive actions

✗ Trigger business logic

✗ Replace buttons with links

---

# FINAL RULE

If clicking changes location,

use a Link Button.

If clicking performs work,

use a Button.
