# BOOKLOOM DESIGN SYSTEM RULES

## 1. Purpose
Define the mandatory visual design tokens, color palettes, typography scales, glassmorphism panel standards, and responsive layout rules.

---

## 2. Rules
1. **Palette Tokens Only**: Use Warm White (`#FDFBF7`), Matte Black (`#0A0A0C`), Soft Gold (`#D4AF37`), Cream (`#F7F4EE`), and Muted Purple (`#8B5CF6`).
2. **Typography Hierarchy**: All headings and editorial titles MUST use `font-serif` (`Playfair Display`, Georgia). Body text uses sans-serif.
3. **Glassmorphism Spec**: Use `.glass-panel` and `.glass-panel-gold` utilities with `backdrop-filter: blur(16px)` and subtle borders.
4. **Dark Theme Default**: Dark mode (`#0A0A0C`) is the primary default theme. Light mode tokens must preserve Warm White background contrasts.
5. **Mobile-First Responsive**: All components must be tested for 375px (Mobile), 768px (Tablet), and 1440px (Desktop).

---

## 3. Acceptance Criteria
- [x] All colors match global CSS design tokens in `app/globals.css`.
- [x] Typography uses `Playfair Display` serif font for titles.
- [x] All panels feature glassmorphism depth.

---

## 4. Dependencies
- `app/globals.css`
- `docs/01_BRAND/Brand_Bible.md`
- `docs/02_DESIGN_SYSTEM/`

---

## 5. Files Affected
- `app/globals.css`
- `components/ui/*`
- All App Router page layouts.

---

## 6. Implementation Notes
- Always reference CSS variable tokens `--background`, `--foreground`, `--primary`, `--gold-accent` rather than hardcoding arbitrary HEX values.

---

## 7. Common Mistakes
- Using pure white `#FFFFFF` backgrounds in dark mode.
- Using default browser blue `#0000FF` for primary actions instead of Soft Gold `#D4AF37`.
- Forgetting hover micro-interactions on interactive buttons.

---

## 8. Do Not Do
- ❌ DO NOT use Bootstrap, Material, or Tailwind default blues.
- ❌ DO NOT use unstyled inputs or un-bordered containers.
- ❌ DO NOT break responsive breakpoint layouts.

---

## 9. Checklist
- [x] Warm White / Gold / Dark palette applied
- [x] Serif headings verified
- [x] Responsive layout tested
