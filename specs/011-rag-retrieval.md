# Spec 011 — RAG Retrieval

## Branch

`feat/rag-retrieval`

## Objective

Retrieve relevant ReVuelta document chunks for a user question before introducing LLM generation.

## Global Context

Read:

- `docs/ARCHITECTURE.md`
- `docs/RAG_SPEC.md`

## Scope

Implement:

- question embedding;
- pgvector similarity search;
- configurable top-k;
- source metadata;
- retrieval result inspection;
- retrieval tests.

## Required Behavior

Given:

> How does sanitization work?

the system should return the most relevant available chunks from approved ReVuelta documentation.

Do not generate an answer yet.

## Out of Scope

- LLM generation;
- streaming;
- agentic behavior.

## Acceptance Criteria

- Retrieval works independently of an LLM.
- Results include source metadata.
- Top-k is configurable.
- Empty/low-relevance cases are handled.
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
