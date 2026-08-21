---
title: 'RAG pipelines are not just vector search'
publishDate: 2026-08-20
tags: ['rag', 'llm', 'agents']
description: 'Vector search gets a system to "close enough." Reranking, thresholds, and knowing when to say nothing are what get it to correct.'
---

Every RAG tutorial ends at the same place: embed your documents, drop them in a vector store, and let cosine similarity do the rest. That part works on day one, in a demo, with ten clean PDFs. It stops working the moment real documents — inconsistent formatting, duplicate near-matches, stale versions of the same policy — show up in production. The gap between "it retrieves something" and "it retrieves the right thing" is where most of the actual engineering lives.

## Retrieval is the bottleneck, not generation

When a RAG answer is wrong, the instinct is to blame the LLM — a bigger model, a better prompt, more few-shot examples. In practice, I've found the model is rarely the problem. It's usually being asked to reason over the wrong five chunks. Top-k similarity search has no idea whether a match is _actually_ relevant or just lexically nearby; it will happily hand the model a document about last year's policy because the vector distance is small, even though a newer, correct one sits three ranks lower.

The fix isn't a smarter LLM. It's not trusting raw similarity scores as a proxy for relevance in the first place.

## Reranking with a similarity floor

Cosine similarity between a query embedding $q$ and a document embedding $d$ is just:

$$
\text{sim}(q, d) = \frac{q \cdot d}{\lVert q \rVert \lVert d \rVert}
$$

That score is useful for narrowing millions of candidates down to a shortlist — it's a terrible signal for deciding what to hand the model. A cross-encoder reranker, scored _after_ retrieval, catches the cases where similarity and relevance disagree:

```python
def retrieve_and_rerank(query: str, top_k: int = 20, keep: int = 4, floor: float = 0.55):
    candidates = vector_store.search(query, k=top_k)
    scored = cross_encoder.score(query, [c.text for c in candidates])
    ranked = sorted(zip(candidates, scored), key=lambda pair: pair[1], reverse=True)
    return [c for c, score in ranked[:keep] if score >= floor]
```

That `floor` is the part every tutorial skips. If nothing clears it, the pipeline should say so — return an empty context and let the model (or the UI) admit it doesn't have a grounded answer — rather than pad the prompt with the least-bad match just because `top_k` demanded four results.

> A RAG system that can't say "I don't have enough context for that" isn't safer than a plain LLM. It's the same hallucination risk wearing a citation.

## What actually breaks without this

A few things I've hit in systems that skipped reranking entirely:

- Near-duplicate chunks from re-indexed documents crowd out the one that's actually current.
- Short, generic chunks ("see section 4 for details") score deceptively high on similarity alone.
- The model gets confidently wrong answers stitched from two unrelated documents that both matched the query loosely.
- Nobody notices, because the output still _reads_ fluent — wrong-but-fluent is worse than an obvious failure.

None of these show up in a demo with ten documents. All of them show up by week two of real usage.

## A short checklist

If you're taking a RAG prototype toward production, worth checking before you touch the prompt again:

1. Is there a reranking step, or is the model trusting raw vector distance?
2. Is there a similarity floor — and does the pipeline have a defined behavior when nothing clears it?
3. Are near-duplicate or stale chunks getting deduplicated before they reach the model?
4. Can you trace _which_ chunk produced _which_ claim in the final answer?

Get those four right, and the LLM you're using matters a lot less than you'd think.
