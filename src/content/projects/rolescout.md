---
title: 'Rolescout — Agentic AI Job-Search Assistant'
description: 'A dual-path LangGraph agent that scouts, matches, and tailors job applications automatically.'
tech:
  - LangGraph
  - LangChain
  - FastAPI
  - pgvector
  - React
link: 'https://github.com/pr4vndevhubX/rolescout'
repo: 'https://github.com/pr4vndevhubX/rolescout'
order: 1
publishDate: 2026-07-16
---

## Brief

Job searching means checking multiple boards daily, matching postings against a resume by hand, and rewriting the resume for every near-miss. Rolescout automates that loop end to end.

## Approach

A dual-path agent architecture: a LangGraph ReAct agent with 8 tool-calling functions handles interactive chat ("find me GenAI roles in Chennai"), while a separate deterministic pipeline — Scout → Evaluator → Tailor → Notify — runs on a schedule for daily discovery. Both paths log to a shared audit-trail schema.

Job matching runs on 384-dimensional MiniLM embeddings over an HNSW-indexed pgvector store, blending semantic similarity with skill-overlap scoring. A 5-provider LLM router (Groq, Gemini, OpenRouter, OpenAI, Ollama) with tiered model selection and exponential-backoff failover keeps the assistant running entirely on free-tier inference. The API is secured with JWT and PBKDF2 authentication.
