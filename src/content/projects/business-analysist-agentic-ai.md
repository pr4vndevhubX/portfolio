---
title: 'Business-Analysist-Agentic-AI — Marketing Crew'
description: 'An 8-task CrewAI pipeline that runs market research through content generation as one collaborative flow.'
tech:
  - CrewAI
  - Python
link: 'https://github.com/pr4vndevhubX/Business-Analysist-Agentic-AI'
repo: 'https://github.com/pr4vndevhubX/Business-Analysist-Agentic-AI'
order: 3
publishDate: 2025-11-24
---

## Brief

Marketing execution splits across disconnected steps — research, strategy, content, SEO — usually done by different people at different times. This project runs all four as one agent crew.

## Approach

An 8-task sequential CrewAI pipeline (research → strategy → content calendar → drafts → SEO) across 4 specialized agents, each chaining prior task outputs as context, with live tool-use for web search, scraping, and file I/O.

Output is enforced through structured JSON-schema contracts via prompt-engineered task specs, backed by a dual-provider LLM fallback (OpenRouter Grok-4.1 primary, Llama-3.1-8B backup) — producing real deliverables end to end: research reports, blog drafts, and SEO-optimized social content.
