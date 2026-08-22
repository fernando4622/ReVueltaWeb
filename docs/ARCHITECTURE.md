# ReVuelta Web — Architecture

## 1. Architectural Goal

Keep the public website simple, fast, maintainable, and clearly separated from future operational ReVuelta systems.

The public website is not the same system as the future mobile or operational platform.

---

## 2. Initial Website Architecture

```text
                ReVuelta Website
                      │
                      ▼
              Next.js + React
                      │
           ┌──────────┴──────────┐
           │                     │
           ▼                     ▼
    Informational UI        Ask ReVuelta
                                 │
                                 ▼
                              FastAPI
                                 │
                    ┌────────────┴────────────┐
                    ▼                         ▼
            PostgreSQL + pgvector            LLM
```

---

## 3. Website Responsibilities

### Next.js

Responsible for:

- public pages;
- routing;
- rendering;
- SEO;
- responsive UI;
- accessibility;
- page-level interaction;
- Ask ReVuelta frontend;
- optionally a thin `/api/chat` proxy.

Use the **App Router**.

Use **Server Components by default**.

Use Client Components only where browser-side interactivity is actually necessary.

Examples that may require client behavior:

- mobile menu;
- scroll-reactive animation;
- interactive lifecycle;
- chat input;
- streaming response UI.

---

## 4. UI Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Motion / Framer Motion

### Why Next.js instead of React + Vite?

The public website benefits from:

- integrated routing;
- server/static rendering options;
- metadata and SEO support;
- image optimization;
- server capabilities;
- production-oriented conventions.

### Why TypeScript?

To improve maintainability, component contracts, refactoring safety, and AI-generated-code review.

### Why Tailwind CSS?

To support a custom visual system without depending on a generic component library.

---

## 5. AI Service

Use a separate **FastAPI** service for AI-specific work.

Responsibilities:

- query validation;
- question embedding;
- vector retrieval;
- context construction;
- LLM requests;
- grounded-answer generation;
- source metadata;
- insufficient-context behavior.

The RAG pipeline should not live inside React components.

---

## 6. Vector Storage

Initial choice:

**PostgreSQL + pgvector**

Why:

- small expected knowledge base;
- relational metadata and vectors can coexist;
- operational simplicity;
- no need for a separate distributed vector database initially.

Conceptual schema:

```text
documents
────────────────
id
title
source
content
created_at

document_chunks
────────────────
id
document_id
content
embedding
chunk_index
metadata
```

---

## 7. Request Flow

```text
Visitor
   ↓
Ask ReVuelta UI
   ↓
Next.js /api/chat (optional thin proxy)
   ↓
FastAPI
   ↓
Embed question
   ↓
pgvector similarity search
   ↓
Relevant chunks
   ↓
Context + user question
   ↓
LLM
   ↓
Answer + sources
   ↓
Next.js UI
```

---

## 8. Ingestion Flow

```text
ReVuelta document
        ↓
Text extraction
        ↓
Cleaning
        ↓
Chunking
        ↓
Embedding
        ↓
PostgreSQL + pgvector
```

Ingestion must remain separate from runtime chat requests.

---

## 9. Architecture Boundaries

### Public Website
Responsible for:
- product storytelling;
- visual explanation;
- public project information;
- Ask ReVuelta UI.

### AI Service
Responsible for:
- RAG;
- retrieval;
- LLM interaction.

### Future Operational ReVuelta Backend
Not part of this repository scope unless explicitly added later.

Potential future responsibilities:
- users;
- containers;
- QR scans;
- loans;
- returns;
- establishments;
- operational inventory;
- authentication;
- business rules.

Do not mix those responsibilities into the informational website simply because they belong to the same project.

---

## 10. Avoid Premature Complexity

Do not initially add:

- Kafka;
- Kubernetes;
- Redis;
- RabbitMQ;
- Debezium;
- service mesh;
- multiple microservices;
- multiple vector databases.

Scale only when a real requirement, bottleneck, or reliability need justifies it.

---

## 11. Validation

Website:
```bash
npm run lint
npm run build
```

AI service:
- unit tests;
- retrieval tests;
- API tests;
- later: evaluation dataset.

---

## 12. Security Principles

- Never expose real API keys in client-side code.
- Use environment variables.
- Commit `.env.example`, not secrets.
- Validate user input.
- Add rate limiting when public RAG usage makes it necessary.
- Treat retrieved content as data, not trusted instructions.
- Do not let the RAG assistant fabricate project facts.
