# Ask ReVuelta — RAG Specification

## 1. Purpose

Ask ReVuelta allows visitors to ask natural-language questions about the ReVuelta project and receive answers grounded in official ReVuelta documentation.

It is an educational and explanatory feature, not a substitute for the website itself.

---

## 2. Example Questions

- What is ReVuelta?
- How does the return system work?
- Why does each container have a QR code?
- What happens after a container is returned?
- How would a restaurant participate?
- How is impact measured?
- What is the purpose of the pilot?
- How is ReVuelta different from buying a reusable container?

---

## 3. Core RAG Behavior

```text
ReVuelta documents
        ↓
     cleaning
        ↓
     chunking
        ↓
    embeddings
        ↓
PostgreSQL + pgvector


User question
        ↓
     embedding
        ↓
 similarity search
        ↓
 relevant chunks
        ↓
 context construction
        ↓
        LLM
        ↓
 grounded answer + sources
```

---

## 4. Grounding Rules

The assistant must:

- answer primarily from ReVuelta documentation;
- avoid inventing project facts;
- distinguish current facts from plans and future vision;
- state when information is unavailable;
- provide source references whenever possible;
- avoid inventing partnerships, metrics, policies, pilot results, customers, or infrastructure.

If the retrieved information is insufficient, respond naturally with a message such as:

> I don't have enough verified information about that yet.

Do not force an answer.

---

## 5. UX Requirements

The interface should eventually support:

- suggested questions;
- conversational history within the session;
- streaming responses where supported;
- loading states;
- retry state;
- graceful error handling;
- source citations;
- responsive mobile behavior;
- full-screen mobile chat if useful.

The primary experience should not be a tiny generic chatbot bubble.

---

## 6. Data Sources

Potential knowledge-base sources include:

- product specification;
- project description;
- business model;
- sanitization protocol;
- pilot documentation;
- FAQ;
- technical explanations;
- environmental objectives;
- research documents;
- operating policies.

Only ingest documents considered appropriate for public-facing answers.

---

## 7. Ingestion

Pipeline:

```text
Document
   ↓
Extract text
   ↓
Clean
   ↓
Chunk
   ↓
Generate embeddings
   ↓
Store chunks + metadata
```

Ingestion must be independent from runtime chat requests.

---

## 8. Retrieval

For each question:

1. generate a question embedding;
2. run vector similarity search;
3. retrieve top-k relevant chunks;
4. preserve source metadata;
5. inspect relevance before generation.

The retrieval layer should be testable independently of the LLM.

---

## 9. Generation

The LLM should receive:

- user question;
- relevant retrieved chunks;
- clear grounding instructions;
- source metadata.

The generated response should return:

- answer;
- sources;
- optionally retrieval/debug metadata in non-production environments.

---

## 10. Initial Storage

Use:

**PostgreSQL + pgvector**

A dedicated vector database should not be introduced unless a concrete need appears.

---

## 11. API Boundary

Conceptual API:

```http
POST /chat
```

Request:

```json
{
  "message": "How does the return system work?"
}
```

Response:

```json
{
  "answer": "Containers can be returned...",
  "sources": [
    {
      "title": "How ReVuelta Works",
      "section": "Returns"
    }
  ]
}
```

Exact schema may evolve.

---

## 12. Evaluation

Before considering the RAG feature production-ready, create a small evaluation set containing:

- expected-answer questions;
- insufficient-context questions;
- misleading questions;
- future-vs-current-state questions;
- source-attribution checks.

Evaluate retrieval separately from generation.

---

## 13. Out of Scope Initially

- operational user data;
- private container ownership information;
- real-time loan data;
- autonomous actions;
- agentic workflows;
- Kafka;
- Kubernetes;
- complex orchestration.

Ask ReVuelta begins as a grounded informational assistant.
