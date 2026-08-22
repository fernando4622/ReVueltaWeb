# Spec 013 — Ask ReVuelta End-to-End Integration

## Branch

`feat/rag-integration`

## Objective

Connect the existing Ask ReVuelta frontend to the FastAPI RAG service.

## Global Context

Read:

- `docs/ARCHITECTURE.md`
- `docs/RAG_SPEC.md`
- `docs/DESIGN_SYSTEM.md`

## Scope

Implement:

- frontend API integration;
- Next.js thin proxy if needed;
- real answer rendering;
- source rendering;
- loading behavior;
- error handling;
- session conversation history;
- streaming if supported cleanly.

## Requirements

- No API secrets in the browser.
- Errors must fail gracefully.
- Source citations must remain visible.
- Mobile UX must remain strong.

## Out of Scope

- operational ReVuelta backend;
- user accounts;
- autonomous agents;
- real-time container data.

## Acceptance Criteria

- User submits a real question.
- RAG service returns grounded answer.
- Sources display correctly.
- Insufficient-context behavior reaches the UI.
- `npm run lint` passes.
- `npm run build` passes.
- backend tests pass.

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
