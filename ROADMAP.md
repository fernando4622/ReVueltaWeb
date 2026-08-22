# ReVuelta Web Roadmap

This roadmap defines the intended development sequence. It is not a promise of delivery dates.

The project should be implemented incrementally. Each roadmap item should normally correspond to a scoped feature specification, feature branch, review, and pull request.

---

## v0.1 — Informational Website

Goal: deliver a polished, responsive, accessible public website that explains ReVuelta without requiring the AI assistant.

### 1. Landing foundation
- Global visual foundation
- Typography and colors
- Responsive navigation
- Hero
- Problem section
- Initial circular-system section

Spec: `specs/001-landing-foundation.md`

### 2. How it works
- Full container lifecycle
- Continuous visual journey
- Clear user flow
- Return and sanitization explanation

Spec: `specs/002-how-it-works.md`

### 3. Digital container identity
- QR concept
- Unique container ID
- Lifecycle timeline
- Container state visualization

Spec: `specs/003-container-identity.md`

### 4. Technology and ecosystem
- Technology as infrastructure
- Container record visualization
- Ecosystem network
- Physical + digital system explanation

Spec: `specs/004-technology-ecosystem.md`

### 5. Businesses and impact
- Business participation
- Carefully framed benefits
- Impact placeholders
- No fabricated metrics

Spec: `specs/005-business-impact.md`

### 6. Pilot, future vision, and project story
- Pilot methodology
- Validation dimensions
- Future network vision
- About the project
- Final CTA and footer

Spec: `specs/006-pilot-vision-about.md`

### 7. Site polish
- Responsive refinement
- Accessibility audit
- Performance improvements
- Motion refinement
- SEO metadata
- Final content consistency

Spec: `specs/007-site-polish.md`

Milestone outcome:

**v0.1 — Informational website complete**

---

## v0.2 — Ask ReVuelta Interface

Goal: build the chatbot experience before connecting it to a real RAG backend.

### 8. Ask ReVuelta UI
- Chat interface
- Suggested questions
- Loading state
- Source display
- Mobile full-screen mode
- Mock responses

Spec: `specs/008-ask-revuelta-ui.md`

---

## v0.3 — RAG Backend

Goal: build the AI service incrementally rather than introducing generation before retrieval works.

### 9. AI service foundation
- FastAPI service
- Health endpoint
- Chat contract
- Environment configuration

Spec: `specs/009-ai-service-foundation.md`

### 10. Document ingestion
- Document source model
- Cleaning
- Chunking
- Embedding generation
- pgvector persistence

Spec: `specs/010-rag-ingestion.md`

### 11. Retrieval
- Question embedding
- Similarity search
- Top-k retrieval
- Metadata and source handling
- Retrieval inspection

Spec: `specs/011-rag-retrieval.md`

### 12. Grounded generation
- Context construction
- LLM request
- Insufficient-context behavior
- Source citations
- Hallucination controls

Spec: `specs/012-rag-generation.md`

### 13. End-to-end integration
- Next.js chat → FastAPI
- Streaming where supported
- Error handling
- Source rendering
- Session history

Spec: `specs/013-rag-integration.md`

Milestone outcome:

**v0.3 — Ask ReVuelta grounded RAG experience**

---

## v0.4 — Quality and Production Readiness

- RAG evaluation dataset
- Retrieval quality checks
- Accessibility review
- Core Web Vitals review
- Security review
- Rate limiting if needed
- Observability if justified
- Deployment
- Production environment documentation

---

## Deferred Until Justified

Do not add these only to make the architecture look sophisticated:

- Kafka
- Kubernetes
- Redis
- RabbitMQ
- Debezium
- service mesh
- multiple microservices
- dedicated vector database

Add infrastructure only when a real requirement or bottleneck appears.
