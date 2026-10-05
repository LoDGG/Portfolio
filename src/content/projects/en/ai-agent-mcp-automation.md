---
title: "AI Agent & MCP Automation"
slug: "ai-agent-mcp-automation"
translationKey: "ai-agent-mcp-automation"
locale: "en"
summary: "A Python agent for email automation, combining bounded execution, structured MCP tools and an LLM-provider abstraction. Developed first against a fake Gmail MCP server."
featured: true
storySummary:
  challenge: "Email automation needs clear boundaries between a model’s decisions and actions that change messages."
  solution: "An explicit Python agent loop, schema-validated tool execution and separate MCP client/server integration, capped at 4 iterations and 3 tool calls."
  outcome: "Testable agent behavior and controlled tool execution, with provider-specific code separated from the agent architecture."
evidenceSummary: "Execution bounds: 4 maximum agent iterations · 3 maximum tool calls."
architectureFlow:
  - "User request"
  - "Agent loop"
  - "LLM provider"
  - "Structured tool decision"
  - "MCP client"
  - "Gmail MCP server (fake environment)"
  - "Email action"
order: 2
status: "published"
projectType:
  - "AI agents"
  - "Automation"
tags:
  - "MCP"
  - "Python"
context: "personal"
role:
  - "Agent architecture, implementation and testing"
stack:
  - "Python 3.12+"
  - "MCP"
  - "LLM APIs"
  - "Schema validation"
  - "Structured tool use"
  - "Automated testing"
  - "Git"
confidential: false
anonymized: false
---

## Overview

This personal software-engineering project explores Gmail/email workflow automation through an AI agent. A representative request is: “Find the September invoice and label it TO_REVIEW.” The agent must interpret the request, select tools, retrieve email information and apply a permitted action.

The initial implementation uses a fake Gmail MCP server. This case study describes that development scope, not a production Gmail deployment.

## Challenge

Automation becomes difficult to reason about when model output can directly trigger external actions without clear boundaries. Email workflows require both information retrieval and changes to messages, so tool selection, execution and limits need to be explicit.

## My contribution

I implemented the Python agent architecture: the bounded loop, LLM-provider abstraction, MCP client/server integration, structured tool schemas and validation, and automated tests. I deliberately built the loop without LangChain or LangGraph to keep its execution logic explicit.

## Agent architecture

The logical flow is **user request → agent loop → LLM provider → structured tool decision → MCP client → fake Gmail MCP server → email action**. This describes the main stages within the bounded loop; it is not an unbounded sequence of model-driven actions.

The loop coordinates execution, the provider abstraction isolates LLM-specific integration, and the MCP client communicates with the server that exposes email tools. Structured actions and schema validation connect tool decisions to tool execution.

## MCP integration

The implementation uses the official MCP SDK, with separate client and server responsibilities. The fake Gmail environment exposes four tools: **search**, **get email**, **apply_label**, and **archive**.

`apply_label` was required from the beginning: the invoice example needs a message to be labelled after it is found. Testing against the fake server establishes a development environment for retrieval and actions before real Gmail integration.

## Controlled execution

The agent has two explicit execution bounds:

- A maximum of **4 agent iterations**.
- A maximum of **3 tool calls**.

These caps make the extent of an execution more predictable and limit uncontrolled tool-use loops. They are design constraints, not performance measurements or a complete security mechanism. Schema validation and structured tool execution provide additional boundaries around how actions are expressed and executed.

## Provider abstraction

The agent loop uses `LLMProvider`, with `GeminiProvider` implemented first. Provider-specific code is separated so that adding or switching an LLM provider should not require rewriting the agent architecture.

OpenAI support was planned through this abstraction. This does not establish a completed or production-ready OpenAI integration.

## Testing and validation

Automated tests validate agent behavior and tool execution in the fake MCP environment.

## Development workflow

Development used Git, specification-driven implementation, testing and review. OpenAI Codex and Claude Code supported the implementation workflow; the engineering work centered on explicit architecture and validated behavior.

## Technologies

Python 3.12+, the official MCP SDK, LLM APIs, agent architecture, structured tool use, schema validation, automated testing and Git.

## Status and limitations

The engineering outcome is an explicit, bounded agent with tested behavior and separated provider and tool integrations. The evidence presented here covers the initial fake Gmail MCP environment. Real Gmail integration and any additional provider implementation need separate validation before claims about their readiness can be made.
