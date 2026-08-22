# Spec 006 — Pilot, Vision, About, CTA and Footer

## Branch

`feat/pilot-vision-about`

## Objective

Complete the main informational narrative with the pilot methodology, future vision, project story, final CTA, and footer.

## Global Context

Read:

- `docs/PRODUCT_SPEC.md`
- `docs/DESIGN_SYSTEM.md`

## Scope

Implement:

- Pilot section
- Future Vision section
- About section
- Final CTA
- Footer

## Pilot

Headline:

> Start small.  
> Learn quickly.  
> Scale responsibly.

Visual sequence:

```text
Design
↓
Test
↓
Measure
↓
Learn
↓
Scale
```

Validation dimensions:

- return behavior;
- logistics;
- sanitization;
- container durability;
- user acceptance;
- establishment operations;
- system economics.

## Future Vision

Headline:

> A city where returning is as easy as throwing away.

Clearly identify this as future vision, not current infrastructure.

## About

Headline:

> ReVuelta started with a simple question.

Use:

> Why do we keep designing containers to become waste after a single use?

## Final CTA

Headline:

> The future does not have to be disposable.

Potential actions:

- Discover the project
- Ask ReVuelta
- Collaborate with us

## Footer

Include:
- ReVuelta
- One container. Many cycles.
- navigation links
- placeholders for Instagram, LinkedIn, GitHub
- Project developed in Mexico.

Do not invent URLs.

## Acceptance Criteria

- Pilot reads as evidence-driven experimentation.
- Future vision is clearly labeled as future.
- About section stays grounded.
- Footer contains no invented links.
- `npm run lint` passes.
- `npm run build` passes.

## Agent Instructions

Before editing:

1. Inspect the repository.
2. Read `docs/PRODUCT_SPEC.md`.
3. Read any other referenced global documents.
4. Preserve current project conventions.
5. Identify the minimum files needed for this task.

After editing:

1. Run the relevant validation commands.
2. Fix errors introduced by this task.
3. Summarize modified files.
4. Explain important architectural decisions.
5. Recommend logical Git commits.
6. Do **not** execute Git commits.
7. Do **not** implement anything explicitly marked out of scope.
