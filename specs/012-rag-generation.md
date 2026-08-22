# Spec 012 — Grounded RAG Generation

## Branch

`feat/rag-generation`

## Objective

Generate answers using retrieved ReVuelta context while preserving source attribution and refusing unsupported claims.

## Global Context

Read:

- `docs/RAG_SPEC.md`
- `docs/ARCHITECTURE.md`
- `docs/PRODUCT_SPEC.md`

## Scope

Implement:

- context construction;
- LLM request;
- grounding instructions;
- insufficient-context behavior;
- source attribution;
- API response model;
- tests for grounded behavior.

## Required Rule

If the available context is insufficient, the assistant must not invent an answer.

Preferred behavior:

> I don't have enough verified information about that yet.

## Out of Scope

- autonomous actions;
- operational data;
- agent tools;
- external web browsing.

## Acceptance Criteria

- Answers use retrieved context.
- Sources are returned.
- Unsupported questions fail gracefully.
- Future plans are not presented as current facts.
- tests pass.

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
