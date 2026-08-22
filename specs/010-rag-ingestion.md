# Spec 010 — RAG Document Ingestion

## Branch

`feat/rag-ingestion`

## Objective

Build the ingestion pipeline that converts approved ReVuelta documents into embedded chunks stored in PostgreSQL + pgvector.

## Global Context

Read:

- `docs/ARCHITECTURE.md`
- `docs/RAG_SPEC.md`

## Scope

Implement:

- source-document representation;
- text cleaning;
- chunking;
- metadata preservation;
- embedding generation;
- pgvector persistence;
- ingestion command or script;
- ingestion tests.

## Pipeline

```text
Document
↓
Extract
↓
Clean
↓
Chunk
↓
Embed
↓
Store
```

## Requirements

- Keep ingestion separate from runtime chat.
- Preserve source title and relevant metadata.
- Make chunk size/configuration explicit.
- Do not silently ingest private or unsupported files.

## Out of Scope

- answer generation;
- chatbot UI;
- production document-management UI.

## Acceptance Criteria

- Approved sample documents can be ingested.
- Chunks are stored with embeddings and metadata.
- Pipeline can be rerun safely according to documented behavior.
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
