# Spec 002 — How It Works

## Branch

`feat/how-it-works`

## Objective

Implement the complete reusable-container lifecycle as a continuous visual journey.

## Global Context

Read:

- `docs/PRODUCT_SPEC.md`
- `docs/DESIGN_SYSTEM.md`

## Scope

Implement the full six-step lifecycle:

1. Order
2. Scan
3. Use
4. Return
5. Inspect and sanitize
6. Another cycle

## Design Requirements

- Do not use six identical cards.
- Use a flowing path, lifecycle line, scroll narrative, or comparable visual treatment.
- Reinforce circularity.
- Keep copy concise.
- Make the process understandable without reading every sentence.

## Content Requirements

Use the definitions from `docs/PRODUCT_SPEC.md`.

Do not invent:
- return deadlines;
- penalties;
- sanitization standards;
- partner locations.

## Out of Scope

- RAG
- business backend
- real QR scanning
- real-time container data
- operational rules not documented

## Acceptance Criteria

- All six steps are represented.
- Mobile layout remains understandable.
- Flow is visually continuous.
- Animation supports comprehension rather than decoration.
- Reduced-motion behavior is supported.
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
