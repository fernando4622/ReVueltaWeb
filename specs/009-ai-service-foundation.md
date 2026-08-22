# Spec 009 — AI Service Foundation

## Branch

`feat/ai-service-foundation`

## Objective

Create the minimal FastAPI service required for future RAG functionality.

## Global Context

Read:

- `docs/ARCHITECTURE.md`
- `docs/RAG_SPEC.md`

## Scope

Implement:

- FastAPI app structure;
- health endpoint;
- chat request/response schema;
- environment-variable handling;
- basic test setup;
- local run instructions.

## Required Endpoints

```http
GET /health
```

and a temporary:

```http
POST /chat
```

The temporary chat endpoint may return a placeholder response.

## Out of Scope

- embeddings;
- pgvector;
- retrieval;
- LLM calls;
- ingestion;
- streaming.

## Acceptance Criteria

- Service starts locally.
- `/health` returns success.
- `/chat` validates request/response shape.
- tests pass.
- secrets are not committed.

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
