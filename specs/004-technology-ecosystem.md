# Spec 004 — Technology and Ecosystem

## Branch

`feat/technology-ecosystem`

## Objective

Explain that technology supports ReVuelta's physical circular system and show the broader network of participants and processes.

## Global Context

Read:

- `docs/PRODUCT_SPEC.md`
- `docs/DESIGN_SYSTEM.md`
- `docs/ARCHITECTURE.md`

## Scope

Implement:

1. Technology section
2. Container-record visualization
3. Ecosystem network visualization

## Required Headline

> Circular by design.  
> Digital by infrastructure.

## Technology Concepts

Conceptually show support for:

- container identification;
- QR scanning;
- circulation history;
- return records;
- establishment management;
- inventory visibility;
- lifecycle status;
- impact measurement.

## Ecosystem Nodes

Represent:

- User
- Café
- Restaurant
- Return point
- Sanitization
- Inventory
- Digital platform

## Design Requirements

- Technology must not become the product itself.
- The section should feel like evidence of system design, not a SaaS dashboard.
- Ecosystem links may animate subtly.

## Out of Scope

- working operational APIs;
- Spring Boot;
- real inventory system;
- Kafka;
- real-time event processing.

## Acceptance Criteria

- Technology's supporting role is clear.
- Ecosystem reads as physical + digital infrastructure.
- No real operational capabilities are implied.
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
