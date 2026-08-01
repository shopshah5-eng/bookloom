# BOOKLOOM DESIGN INTENT

Version: 1.0

Status: MANDATORY SPECIFICATION

Priority: CRITICAL

---

# PURPOSE

This document explains **WHY** BookLoom looks and feels the way it does.

While `DESIGN_SYSTEM.md` defines *what* rules exist, `DESIGN_INTENT.md` defines the *rationale and visual philosophy* behind those rules.

When AI coding agents or engineers encounter un-documented edge cases, they MUST make decisions that align with the design intent documented here.

---

# THE PSYCHOLOGY OF BOOKLOOM

## 1. Why Generous Whitespace?
Whitespace is not empty space. In BookLoom, whitespace is luxury.

- **Rationale**: Physical books and museum catalogues place content within wide, breathing margins to focus the reader's attention and communicate value.
- **Intent**: Large margins (80px desktop, 32px gutters) create a calm, focused environment that reduces cognitive load during book creation.

---

## 2. Why Typography is the Hero?
BookLoom is a publishing studio. The written word is the primary product.

- **Rationale**: Decorative graphics and saturated UI cards distract from the author's prose.
- **Intent**: High-contrast, elegant serif headlines (`Playfair Display`) paired with crisp sans-serif body text establish an authentic editorial publishing atmosphere.

---

## 3. Why Subtle Glassmorphism over Flat Panels?
Depth without clutter.

- **Rationale**: Pure flat design can feel sterile, while heavy 3D borders feel outdated.
- **Intent**: Soft glassmorphism (`backdrop-filter: blur(16-24px)`, `rgba(18,18,21,0.75)`, 1px golden tint border) creates tactile layer separation without introducing heavy shadows.

---

## 4. Why Soft Gold Accents (`#D4AF37`)?
Restraint in color.

- **Rationale**: High-octane neon blue or purple gradients dominate SaaS interfaces and fatigue the user.
- **Intent**: Soft Gold is reserved exclusively for primary CTAs, active focus states, and key interactive highlights, establishing a premium, timeless publishing aesthetic.

---

## 5. Why Purpose-Driven Motion?
Animations explain; they never decorate.

- **Rationale**: Flashy, bouncy animations feel like consumer video games.
- **Intent**: 150ms-400ms ease-out transitions feel natural, subtle, and executive.

---

# THE SUCCESS MATRIX

| Element | Generic SaaS (AVOID) | BookLoom (REQUIRED) |
| :--- | :--- | :--- |
| **Header Layout** | Cramped, 16px margins, bright badges | Expansive, 80px margins, editorial typography |
| **Primary Button** | Saturated bright blue `#0066FF` | Soft Gold gradient `#D4AF37` with subtle glow |
| **Card Surface** | Plain white `#FFF` with dark shadow | Glassmorphic panel with subtle blur & border |
| **Typography** | Default sans-serif everywhere | Serif titles + crisp sans-serif body |
| **Images** | Stock photos & 3D illustrations | High-resolution editorial photography & mockups |
