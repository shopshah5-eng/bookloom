# PAGE REVIEW CHECKLIST

## Overview
Before marking any page implementation complete, verify against this 10-point review gate.

---

## Review Gate Items

- [ ] **BDES Grid Compliance**: Margins match 80px (Desktop), 64px (Laptop), 40px (Tablet), 20px (Mobile).
- [ ] **Typography Hierarchy**: Page title uses `font-serif` (`Playfair Display`); line length <= 75 chars.
- [ ] **Design Tokens Only**: Colors match `--background`, `--foreground`, `--primary` (`#D4AF37`). Zero arbitrary HEX colors.
- [ ] **Responsive Integrity**: Mobile view (375px) retains thumb-zone CTA access without horizontal scroll.
- [ ] **Glass Panel Quality**: Backdrop blur `16-24px` applied to navigation/floating drawers with subtle border.
- [ ] **Zero Placeholders**: All content and imagery are production-ready.
- [ ] **Micro-Interactions**: Hover states exist on all interactive elements.
- [ ] **Loading & Empty States**: Page features skeleton loading states and helpful empty states.
- [ ] **Accessibility**: WCAG AA color contrast and visible focus rings verified.
- [ ] **Build Validation**: Page compiles cleanly in `npm run build` with zero errors.
