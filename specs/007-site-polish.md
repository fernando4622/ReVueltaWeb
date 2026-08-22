# Spec 007 — Site Polish

## Branch

`feat/site-polish`

## Objective

Bring the informational website to v0.1 quality before introducing the Ask ReVuelta AI backend.

## Global Context

Read all relevant documents under `docs/`.

## Scope

Review and improve:

- responsive layout;
- typography consistency;
- spacing;
- animation consistency;
- accessibility;
- performance;
- SEO;
- semantic HTML;
- content integrity;
- cross-section visual continuity.

## Accessibility

Verify:

- keyboard navigation;
- focus states;
- heading hierarchy;
- contrast;
- alt text;
- reduced motion;
- touch targets.

## Performance

Review:

- image optimization;
- lazy loading;
- unnecessary Client Components;
- unnecessary JavaScript;
- heavy animation;
- Core Web Vitals risks.

## SEO

Implement or verify:

- metadata;
- page title;
- description;
- Open Graph placeholders;
- canonical placeholder if appropriate;
- sitemap;
- robots.txt;
- semantic headings.

Do not fabricate company structured data.

## Content Review

Ensure the website distinguishes:

- current work;
- proposed behavior;
- pilot validation;
- future vision.

Remove any unsupported claims.

## Out of Scope

- RAG backend;
- FastAPI;
- pgvector;
- operational backend.

## Acceptance Criteria

- Mobile and desktop layouts are polished.
- Accessibility requirements are met.
- No obvious console errors.
- No unsupported claims.
- `npm run lint` passes.
- `npm run build` passes.
- Informational website is ready to tag as v0.1.

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
