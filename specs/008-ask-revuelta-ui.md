# Spec 008 — Ask ReVuelta UI

## Branch

`feat/ask-revuelta-ui`

## Objective

Build the complete Ask ReVuelta frontend experience using mocked responses before connecting a real RAG backend.

## Global Context

Read:

- `docs/PRODUCT_SPEC.md`
- `docs/DESIGN_SYSTEM.md`
- `docs/RAG_SPEC.md`

## Scope

Implement:

- chat entry point;
- chat input;
- user messages;
- assistant messages;
- suggested questions;
- loading state;
- source display;
- retry/error state;
- responsive mobile experience;
- mocked API/response behavior.

## Suggested Questions

- How does ReVuelta work?
- What happens after I return a container?
- Why does ReVuelta use QR codes?
- How can a business participate?

## Design Requirements

- Do not rely on a generic tiny floating support bubble as the primary experience.
- Make the assistant feel integrated into the ReVuelta brand.
- On small screens, a full-screen conversational view is acceptable.

## Out of Scope

- FastAPI;
- embeddings;
- pgvector;
- LLM calls;
- real retrieval;
- real streaming backend.

## Acceptance Criteria

- Users can submit a mocked question.
- Messages render correctly.
- Suggested questions work.
- Source UI exists.
- Loading and error states exist.
- Mobile experience is usable.
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
