# ReVuelta Web — Design System

## 1. Design Intent

The ReVuelta website should feel like a serious climate-tech / circular-economy project with strong product-design sensibility.

The intended intersection is:

**technology + product design + circular economy + urban infrastructure**

The design should feel specifically created for ReVuelta rather than derived from a generic landing-page template.

---

## 2. Core Visual Language

Circularity is the central visual metaphor.

Use:

- loops;
- circular arrows;
- container trajectories;
- connected nodes;
- recurring paths;
- lifecycle timelines;
- subtle rotational motion;
- continuous section transitions.

Avoid making every concept into a rectangular card.

---

## 3. Color Direction

Predominantly:

- warm white / off-white backgrounds;
- deep green primary color;
- restrained lime or fresh-green accent;
- charcoal / near-black typography;
- subtle natural secondary tones.

Avoid:

- purple-blue AI gradients;
- neon;
- excessive gradients;
- visual noise.

Exact color tokens may be defined during implementation.

---

## 4. Typography

Headings should feel:

- large;
- compact;
- bold;
- editorial;
- expressive.

Possible responsive scale: `clamp(3rem, 7vw, 7rem)`.

Body text should be:

- highly readable;
- relatively narrow;
- concise;
- well spaced.

Avoid oversized blocks of explanatory copy.

---

## 5. Layout Principles

- strong whitespace;
- intentional asymmetry where appropriate;
- editorial composition;
- responsive layouts designed specifically for mobile;
- no repetitive generic card grids;
- strong visual hierarchy;
- product visuals should support comprehension.

---

## 6. Hero

The hero should prioritize:

- the reusable container;
- circular lifecycle;
- direct explanation of ReVuelta;
- strong typography.

Avoid:

- smartphone mockups;
- generic sustainability stock photos;
- decorative 3D blobs;
- random floating leaves.

---

## 7. Motion

Motion should explain the system.

Good uses:

- lifecycle line drawing as the user scrolls;
- container rotation;
- QR scan effect;
- lifecycle state transitions;
- ecosystem links activating;
- nodes responding subtly;
- chatbot messages entering naturally.

Avoid animation solely for decoration.

Prefer performant properties such as:

- `transform`
- `opacity`

Support `@media (prefers-reduced-motion: reduce)`.

---

## 8. Interaction Principles

Interactions should feel:

- deliberate;
- responsive;
- calm;
- informative;
- never intrusive.

Ask ReVuelta should feel integrated into the page, not like a generic support widget.

---

## 9. Accessibility

Required:

- semantic HTML;
- WCAG AA contrast;
- correct heading hierarchy;
- visible focus states;
- keyboard navigation;
- appropriate touch-target sizes;
- meaningful alt text;
- ARIA only where appropriate;
- reduced-motion behavior;
- screen-reader-friendly chat messages.

---

## 10. Responsive Targets

At minimum:

- 360 px
- 390 px
- 430 px
- tablet
- laptop
- desktop
- ultrawide

Do not simply stack desktop layouts vertically on mobile.

---

## 11. Visual Anti-Patterns

Avoid:

- generic SaaS templates;
- excessive glassmorphism;
- repeated card grids;
- excessive border radius;
- obvious AI-generated visual language;
- generic 3D illustrations;
- sustainability clichés;
- cold corporate dashboards;
- visual effects that reduce readability.

---

## 12. Content Tone

The design and copy should communicate:

- seriousness;
- experimentation;
- clarity;
- confidence without hype.

Avoid claims such as:

- “We are revolutionizing Mexico.”
- “The leading platform.”
- “The ultimate solution.”
- “Changing the world forever.”
