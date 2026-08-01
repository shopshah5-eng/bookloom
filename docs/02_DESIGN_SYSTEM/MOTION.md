# BOOKLOOM MOTION SYSTEM

Version: 1.0

Status: Approved

Priority: Critical

---

# PURPOSE

Motion provides feedback.

Motion explains relationships.

Motion guides attention.

Motion reinforces quality.

Motion never exists simply because something can move.

Every animation must answer:

Why is this moving?

If there is no clear answer,

remove the animation.

---

# MOTION PHILOSOPHY

BookLoom is inspired by

Apple Human Interface

↓

Luxury Editorial

↓

Physical Paper

↓

Modern Architecture

↓

Film Editing

Motion should feel

Natural

Confident

Calm

Elegant

Purposeful

Invisible

Never

Playful

Elastic

Bouncy

Chaotic

Distracting

Overly dramatic

---

# PRINCIPLES

Motion should

Explain

Reveal

Connect

Confirm

Guide

Never

Decorate

Delay

Confuse

Interrupt

Compete

---

# MOTION HIERARCHY

Level 1

Micro Feedback

Examples

Hover

Focus

Button Press

Checkbox

Switch

---

Level 2

Component Motion

Examples

Dropdown

Tooltip

Popover

Accordion

Tabs

Toast

---

Level 3

Layout Motion

Examples

Sidebar

Drawer

Inspector

Split View

Panels

---

Level 4

Page Motion

Examples

Navigation

Workspace Switch

Project Open

---

Level 5

Brand Motion

Examples

Landing Hero

Marketing

Illustrations

Product Showcase

Never inside productivity workflows.

---

# DURATION SCALE

Instant

75ms

Fast

150ms

Normal

250ms

Comfortable

350ms

Slow

500ms

Large

700ms

Never exceed

900ms

---

# EASING

Standard

cubic-bezier(.2,.8,.2,1)

Entrance

ease-out

Exit

ease-in

Continuous

linear

Never use

Bounce

Elastic

Spring

Back

unless explicitly documented.

---

# FADE

Purpose

Visibility

Opacity

0 → 100%

Duration

150–250ms

Use for

Tooltips

Dropdowns

Toasts

Images

Dialogs

---

# SCALE

Purpose

Surface Appearance

Scale

0.98 → 1

Duration

250ms

Use for

Dialogs

Command Palette

Floating Panels

Never exceed

102%

---

# SLIDE

Purpose

Spatial Relationship

Directions

Top

Bottom

Left

Right

Never diagonal.

---

# BUTTONS

Hover

Opacity

Small Lift

Pressed

Return to origin

Duration

150ms

Never bounce.

---

# INPUTS

Focus Ring

150ms

Error Shake

Never

Instead

Border

Color

Helper Text

---

# DROPDOWN

Fade

↓

Small Slide

↓

Appear

Duration

200ms

---

# TOOLTIP

Fade only.

No scaling.

No bounce.

---

# DRAWER

Slide

↓

Fade

↓

Content Appears

Duration

300ms

---

# MODAL

Backdrop Fade

↓

Scale

↓

Opacity

Duration

250ms

Exit reverses.

---

# SIDEBAR

Expand

Width

↓

Content Fade

Collapse

Reverse

Never animate text scaling.

---

# ACCORDION

Height

↓

Opacity

Never rotate entire content.

Only rotate indicator icon.

---

# TABS

Underline slides.

Content fades.

No dramatic transitions.

---

# PAGE TRANSITIONS

Old Page

↓

Fade Out

↓

New Page

↓

Fade In

↓

Content Reveal

Maximum

500ms

---

# SCROLL

Smooth

Native

Respect operating system settings.

Never hijack scrolling.

---

# HOVER

Small elevation

↓

Small opacity

↓

Optional subtle scale

Maximum

101%

---

# LOADING

Skeleton

Preferred

Progress

When measurable

Spinner

Only when unavoidable

Never freeze UI.

---

# SKELETONS

Gentle shimmer.

Duration

1.5s

Infinite

Low contrast.

---

# PROGRESS

Linear

Predictable

Never fake progress.

---

# SUCCESS

Small fade

↓

Checkmark

↓

Complete

Never fireworks.

---

# ERRORS

Highlight affected field.

Explain issue.

No shake animations.

No flashing.

---

# DRAG & DROP

Lift

↓

Shadow

↓

Scale 101%

↓

Drop

↓

Return

Never exaggerated.

---

# BOOK EDITOR

Cursor remains native.

Toolbar fades.

Selection highlights smoothly.

Scrolling remains uninterrupted.

Typing never waits for animation.

---

# DASHBOARD

Charts animate once.

Statistics count only when useful.

Widgets fade.

No repeated looping.

---

# HERO ANIMATIONS

Illustrations

Very slow float

Maximum

4px

Duration

8–12 seconds

Linear

Infinite

CTA

Subtle appearance

Nothing else.

---

# PARALLAX

Maximum

5%

Landing page only.

Never inside dashboard.

---

# REDUCED MOTION

Respect

prefers-reduced-motion

Disable

Floating

Parallax

Scaling

Large transitions

Retain

Opacity

Essential feedback

---

# PERFORMANCE

Animate only

Transform

Opacity

Filter (rare)

Never animate

Width

Height

Top

Left

Margin

Padding

Blur radius

Box Shadow

Border Radius

During interactions.

Use GPU acceleration.

Avoid layout thrashing.

---

# ACCESSIBILITY

Every motion must

Be skippable

Respect reduced motion

Never trigger vestibular discomfort

Never flash

Never exceed WCAG flashing guidelines

---

# DESIGN TOKENS

motion.duration.instant

motion.duration.fast

motion.duration.normal

motion.duration.comfortable

motion.duration.slow

motion.easing.standard

motion.easing.enter

motion.easing.exit

motion.fade

motion.scale

motion.slide

---

# MACHINE TOKENS

{
  "motion": {
    "duration": {
      "instant": "75ms",
      "fast": "150ms",
      "normal": "250ms",
      "comfortable": "350ms",
      "slow": "500ms",
      "large": "700ms"
    },
    "easing": {
      "standard": "cubic-bezier(.2,.8,.2,1)",
      "enter": "ease-out",
      "exit": "ease-in",
      "linear": "linear"
    }
  }
}

---

# REVIEW CHECKLIST

✓ Motion has purpose

✓ Correct duration

✓ Correct easing

✓ No unnecessary animation

✓ Reduced motion supported

✓ GPU-friendly

✓ No layout shifts

✓ Accessibility compliant

✓ Performance verified

---

# FINAL RULE

The best animation is the one users never consciously notice.

They should simply feel that the interface is alive, responsive, and calm.

Motion should make BookLoom feel handcrafted—not animated.
