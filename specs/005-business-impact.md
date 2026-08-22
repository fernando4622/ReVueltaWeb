# Spec 005 — Businesses and Impact

## Branch

`feat/business-impact`

## Objective

Explain how businesses may participate and how ReVuelta intends to measure impact without inventing economic or environmental claims.

## Global Context

Read:

- `docs/PRODUCT_SPEC.md`
- `docs/DESIGN_SYSTEM.md`

## Scope

Implement:

- For Businesses section
- Impact section
- placeholder metric treatment

## Business Audience

- cafeterias
- restaurants
- universities
- food courts
- companies
- events

## Potential Benefits

May carefully mention:

- reduced dependence on disposable containers;
- participation in a circular system;
- inventory visibility;
- information about returns;
- shared infrastructure;
- differentiated customer experience.

Do not claim verified savings.

## Impact Metrics

Prepare the UI for:

- disposable containers avoided;
- returns;
- completed cycles;
- return rate.

Until verified data exists, display:

- `—`
- `Coming soon`
- `Pilot data`

## Out of Scope

- fabricated metrics;
- financial ROI claims;
- partner logos;
- fake testimonials;
- real analytics backend.

## Acceptance Criteria

- Businesses can understand the participation concept.
- Impact section contains no fabricated data.
- Future metric placeholders are visually intentional.
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
