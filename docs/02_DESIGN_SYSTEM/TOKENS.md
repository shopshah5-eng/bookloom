# BOOKLOOM DESIGN TOKEN SYSTEM

Version: 1.0

Status: Master Token Specification

Priority: CRITICAL

---

# PURPOSE

Design Tokens are the single source of truth for every visual decision in BookLoom.

They eliminate hardcoded values.

They ensure consistency.

They allow every platform to share one design language.

No component may use raw values when a token exists.

---

# DESIGN PHILOSOPHY

Design decisions belong in tokens.

Components consume tokens.

Pages consume components.

Applications never hardcode design values.

---

# TOKEN HIERARCHY

Primitive Tokens

↓

Alias Tokens

↓

Semantic Tokens

↓

Component Tokens

↓

Application

Never skip a layer.

---

# PRIMITIVE TOKENS

Primitive tokens contain raw values.

Examples

color.gold.500

space.24

radius.md

font.size.16

shadow.md

These never reference meaning.

---

# ALIAS TOKENS

Alias tokens map primitives.

Example

color.brand.primary

↓

color.gold.500

Spacing

space.card

↓

space.32

Radius

radius.card

↓

radius.lg

---

# SEMANTIC TOKENS

Semantic tokens describe purpose.

Examples

color.text.primary

color.text.secondary

color.surface

color.surface.hover

color.button.primary

color.input.border

color.card.background

Never expose primitive colors directly to components.

---

# COMPONENT TOKENS

Every reusable component has its own token namespace.

Example

button.primary.background

button.primary.text

button.primary.padding.x

button.primary.padding.y

button.primary.radius

button.primary.shadow

button.primary.hover

button.primary.focus

button.primary.disabled

---

# TOKEN NAMING

Use

category.type.variant.state

Examples

color.text.primary

color.button.primary.hover

space.section.large

radius.card

shadow.modal

motion.duration.fast

Avoid abbreviations.

Avoid numbers in names unless scale values.

---

# TOKEN TYPES

Color

Dimension

Number

Duration

Font

Shadow

Border

Radius

Opacity

Gradient

Typography

Transition

Blur

Z-index

---

# THEMES

Supported themes

Light

Dark

High Contrast

Future themes must inherit existing semantic tokens.

Never duplicate token names.

---

# TOKEN OVERRIDES

Allowed only at

Theme level

Never at component level.

Components remain theme-agnostic.

---

# CSS VARIABLES

Every semantic token exports to CSS.

Example

--color-text-primary

--color-surface

--space-card

--radius-card

--shadow-modal

Never write raw values in components.

---

# TAILWIND

Tailwind consumes generated tokens.

Never manually duplicate values.

Example

bg-surface

text-primary

rounded-card

shadow-modal

space-section

---

# FIGMA VARIABLES

Every token maps to a Figma Variable.

Collections

Color

Typography

Spacing

Radius

Motion

Elevation

Components

Naming must exactly match documentation.

---

# STYLE DICTIONARY

Generate

CSS Variables

Tailwind Config

JSON

Android XML

iOS Swift

Flutter Dart

React Constants

From one source.

---

# DTCG FORMAT

Every machine-readable token follows the Design Tokens Community Group specification.

Example

{
  "$type": "color",
  "$value": "#C8A96A"
}

Never invent custom schemas.

---

# TOKEN VERSIONING

Every token has

Version

Created

Updated

Deprecated

Replacement

Breaking Change

---

# DEPRECATION

Never delete tokens immediately.

Mark deprecated.

Provide replacement.

Remove only in major version.

---

# COMPONENT TOKEN EXAMPLE

button.primary

background

↓

color.brand.primary

text

↓

color.text.inverse

radius

↓

radius.md

padding

↓

space.16

shadow

↓

shadow.none

hover

↓

color.brand.hover

---

# MOTION TOKENS

motion.duration.fast

motion.duration.normal

motion.duration.slow

motion.easing.standard

motion.fade

motion.scale

motion.slide

---

# TYPOGRAPHY TOKENS

font.family.display

font.family.body

font.weight.medium

font.size.h1

font.size.body

font.line.body

font.tracking.display

---

# IMAGE TOKENS

image.hero.aspect

image.hero.radius

image.hero.animation

image.book.aspect

image.book.shadow

---

# RESPONSIVE TOKENS

breakpoint.mobile

breakpoint.tablet

breakpoint.desktop

container.reading

container.hero

grid.columns.desktop

---

# COMPONENT RULE

Components may only consume

Semantic

Component

Motion

Typography

Spacing

Radius

Elevation

Tokens.

Never use primitive tokens directly.

---

# GOVERNANCE

Every new token requires

Purpose

Owner

Documentation

Review

Approval

Version

---

# TOKEN REVIEW CHECKLIST

✓ Correct naming

✓ Semantic purpose

✓ Theme support

✓ Accessibility

✓ DTCG compliant

✓ CSS export

✓ Tailwind export

✓ Figma mapping

✓ Documentation

✓ Version assigned

---

# DIRECTORY STRUCTURE

/design-system/

tokens/

    primitive/

        colors.json

        spacing.json

        typography.json

        shadows.json

        radius.json

        motion.json

        elevation.json

        breakpoints.json

    semantic/

        colors.json

        surfaces.json

        typography.json

        components.json

    themes/

        light.json

        dark.json

        high-contrast.json

    generated/

        css/

        tailwind/

        figma/

        android/

        ios/

        flutter/

---

# FINAL RULE

Every visual decision must originate from a documented design token.

If a value is hardcoded,

it is a bug.
