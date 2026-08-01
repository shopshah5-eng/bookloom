# BOOKLOOM SURFACE SYSTEM

Version: 1.0

Status: Approved

Priority: CRITICAL

---

# PURPOSE

Surfaces organize information.

They create hierarchy.

They separate workflows.

They never become decoration.

Users should immediately understand what belongs together simply by looking at the surfaces.

---

# DESIGN PHILOSOPHY

BookLoom surfaces feel like

Premium paper

Fine stationery

Architectural materials

Quiet editorial layouts

Never

Plastic

Glossy

Heavy glass

Neon cards

Gaming panels

---

# SURFACE HIERARCHY

Level 0

Application Canvas

↓

Level 1

Sections

↓

Level 2

Cards

↓

Level 3

Floating Panels

↓

Level 4

Dialogs

↓

Level 5

Command Palette

Higher surfaces always appear more important.

---

# SURFACE TYPES

Application Canvas

Primary workspace.

No border.

No elevation.

---

Section Surface

Used to organize large areas.

Very subtle contrast difference.

No shadows.

---

Card Surface

Primary content container.

Used for

Books

Projects

Analytics

Settings

Templates

Moderate radius.

Thin border.

Very soft shadow.

---

Interactive Card

Hover elevation.

Pointer cursor.

Subtle border transition.

Never dramatic lift.

---

Sidebar

Persistent navigation surface.

Slightly darker (Light Theme)

Slightly lighter (Dark Theme)

No heavy borders.

---

Top Navigation

Transparent when possible.

Otherwise matches sidebar surface.

Always visually lightweight.

---

Toolbar

Compact.

Low elevation.

Minimal padding.

Designed to disappear behind the workflow.

---

Editor Canvas

Special surface.

Highest reading priority.

Flat.

No texture.

No shadows.

Maximum typography contrast.

---

AI Panel

Same material family as sidebar.

Never use futuristic styling.

AI belongs inside BookLoom—not beside it.

---

Table Surface

Flat.

Rows provide separation.

Cards should not wrap tables unless necessary.

---

Empty State Surface

Same as parent surface.

Illustrations remain subtle.

Large whitespace.

---

Modal

Elevated above all content.

Soft shadow.

Background blur.

Rounded corners.

Maximum width

720px

---

Drawer

Shares material with modal.

Slides from edge.

Never darker than dialogs.

---

Command Palette

Highest standard surface.

Soft shadow.

Soft blur.

Maximum width

680px

Centered.

---

Dropdown

Compact floating surface.

Thin border.

Light shadow.

No glass effect.

---

Tooltip

Small floating surface.

High contrast.

Readable.

No transparency.

---

Toast

Floating notification surface.

Subtle elevation.

Never blocks primary workflow.

---

Notification Panel

Matches dropdown material.

Scrollable.

Stable width.

---

# BORDER SYSTEM

Cards

1px

Toolbar

1px

Sidebar

Optional

Inputs

1px

Dialogs

1px

Never use borders to replace spacing.

---

# CORNER RADIUS

Canvas

0

Cards

Medium

Dialogs

Large

Inputs

Medium

Buttons

Defined by Button component

Consistency is more important than uniqueness.

---

# SHADOWS

Canvas

None

Cards

Small

Floating Panels

Medium

Dialogs

Large

Never exceed documented shadow tokens.

---

# SURFACE COLORS

Canvas

Neutral

Cards

Neutral Elevated

Dialogs

Neutral Elevated

Sidebar

Neutral Variant

Toolbar

Transparent or Neutral

No component chooses its own colors.

All surfaces consume semantic tokens.

---

# SPACING

Outer spacing separates surfaces.

Inner spacing organizes content.

Never reduce spacing to compensate for poor hierarchy.

---

# RESPONSIVE

Desktop

Multi-layer hierarchy.

Tablet

Reduced layering.

Mobile

Prefer flat layouts.

Reduce floating surfaces.

Use Bottom Sheets instead of dialogs where appropriate.

---

# ACCESSIBILITY

Contrast

WCAG AA

Visible focus

Required

No information conveyed through elevation alone.

---

# PERFORMANCE

Avoid excessive blur.

Avoid layered shadows.

Prefer flat rendering.

Keep GPU usage minimal.

---

# REVIEW CHECKLIST

✓ Correct hierarchy

✓ Consistent borders

✓ Consistent radius

✓ Correct elevation

✓ Responsive behavior

✓ Accessible

✓ Token-driven

---

# FINAL RULE

Surfaces exist to organize information.

If a surface attracts more attention than the content placed on it,

the surface has failed.
