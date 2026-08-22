# Spec 003 — Digital Container Identity

## Branch

`feat/container-identity`

## Objective

Explain how a ReVuelta container can have a QR-based digital identity and lifecycle history.

## Global Context

Read:

- `docs/PRODUCT_SPEC.md`
- `docs/DESIGN_SYSTEM.md`

## Scope

Implement a section centered on:

- physical container;
- QR representation;
- unique container ID;
- lifecycle events;
- current status;
- cycle history.

## Required Headline

> Every container has a history.

## Example Data

Use clearly illustrative values such as:

```text
RV-02184

08:14 — Issued
11:42 — Returned
12:03 — Received
13:20 — Sanitized
14:05 — Available
```

These values must look like interface examples, not claims about real operational data.

## Design Requirements

The section should communicate that ReVuelta is different from simply selling reusable containers.

Avoid turning the entire page into a dashboard.

## Out of Scope

- real QR generation requirements;
- real QR scanner;
- authentication;
- live database;
- real container APIs.

## Acceptance Criteria

- QR/digital identity concept is understandable.
- Lifecycle timeline is clear.
- Example data is visually identified as conceptual.
- Responsive behavior is strong.
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
