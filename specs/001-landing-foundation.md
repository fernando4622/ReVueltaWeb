# Spec 001 — Landing Foundation

## Branch

`feat/landing-foundation`

## Objective

Establish the initial visual and structural foundation of the ReVuelta public website.

This slice should communicate the essential ReVuelta idea without implementing the entire site.

## Global Context

Read:

- `docs/PRODUCT_SPEC.md`
- `docs/DESIGN_SYSTEM.md`

## Scope

Implement:

- global visual foundation;
- typography;
- base color system;
- responsive navigation;
- hero;
- problem section;
- initial circular-system concept;
- responsive layout for these sections.

## Required Content

### Navigation
Include:
- ReVuelta
- How it works
- Technology
- For businesses
- Impact
- Pilot
- Project
- Ask ReVuelta

Ask ReVuelta does not need to function yet.

### Hero
Headline:

> One container.  
> Many cycles.

Supporting copy:

> ReVuelta proposes a shared network of reusable containers that can be taken, used, returned, sanitized and placed back into circulation.

Primary CTA:

**See how it works**

Secondary CTA:

**Ask ReVuelta**

### Problem
Headline:

> We use it for minutes.  
> It remains for years.

Do not invent environmental statistics.

### Circular Idea
Headline:

> What if the container did not become waste?

Represent:

```text
Receive
↓
Use
↓
Return
↓
Inspect
↓
Sanitize
↓
Reuse
↺
```

## Technical Requirements

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Server Components by default
- Client Components only where justified

Do not add new dependencies unless clearly necessary.

## Accessibility

- semantic HTML;
- keyboard-accessible navigation;
- visible focus states;
- correct heading hierarchy;
- sufficient contrast;
- reduced-motion support if motion exists.

## Responsive Validation

Check at minimum:

- 360 px
- 390 px
- tablet
- desktop

## Out of Scope

Do not implement:

- full How It Works;
- Container Identity;
- Technology section;
- Business section;
- Impact;
- Pilot;
- Future Vision;
- FastAPI;
- chatbot backend;
- RAG;
- database.

## Acceptance Criteria

- The default Next.js starter page is fully replaced.
- The page clearly introduces ReVuelta.
- The hero visually communicates circularity.
- Navigation is responsive.
- The problem and circular-idea sections are present.
- No unsupported facts are introduced.
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
