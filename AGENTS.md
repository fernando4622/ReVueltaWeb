# AI Agent Instructions — ReVuelta Web

## Project Workflow

This repository uses a lightweight spec-driven development workflow.

Before implementing a feature:

1. Read the relevant file in `specs/`.
2. Read `docs/PRODUCT_SPEC.md` for global product context.
3. Read `docs/ARCHITECTURE.md`, `docs/DESIGN_SYSTEM.md`, or `docs/RAG_SPEC.md` when relevant.
4. Inspect the existing repository before changing code.
5. Implement only the active feature specification.

## Scope Discipline

Do not implement future roadmap items unless the active spec explicitly requests them.

Do not add infrastructure merely because it may be useful later.

Do not introduce:
- Kafka;
- Kubernetes;
- Redis;
- RabbitMQ;
- Debezium;
- service mesh;
- extra microservices;
- a separate vector database;

unless a later approved specification explicitly requires them.

## Git

Do not execute:

- `git commit`
- `git push`
- branch merges
- destructive Git history operations

unless explicitly instructed by the human developer.

At the end of a task:

- summarize changed files;
- recommend logical commits;
- explain important decisions;
- report validation results.

## Validation

For Next.js work:

```bash
npm run lint
npm run build
```

For FastAPI/RAG work:

- run relevant tests;
- report failures clearly.

## Code Quality

- Prefer simple, maintainable code.
- Avoid giant components.
- Use Server Components by default in Next.js.
- Add `"use client"` only when browser-side behavior requires it.
- Avoid unnecessary dependencies.
- Do not duplicate logic.
- Keep public website concerns separate from AI-service concerns.

## Content Integrity

Never invent ReVuelta:

- customers;
- users;
- partners;
- investors;
- pilot results;
- environmental metrics;
- awards;
- establishments;
- testimonials;
- certifications.

Clearly distinguish current work, proposed behavior, pilot validation, and future vision.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
