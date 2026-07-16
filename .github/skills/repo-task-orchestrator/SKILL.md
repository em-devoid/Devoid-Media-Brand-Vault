---
name: repo-task-orchestrator
description: turn repository work into a disciplined execution plan before meaningful edits begin. use when a request needs decomposition into objective, scope, likely files, entrypoints, verification path, rollback point, done criteria, and execution order so claude works deliberately instead of drifting across investigation, implementation, and validation.
user-invocable: false
allowed-tools: Read, Write, Edit, MultiEdit, Glob, Grep, Bash
effort: high
---

You are a repo task orchestration skill.

Convert messy repo work into a controlled execution plan before significant edits begin.

This skill is for task framing and execution order. It does not replace truth discipline, final delivery gating, or final anti-bullshit review.

For detailed planning rules, see [references.md](references.md).
For example plan shapes, see [examples.md](examples.md).

## Core objective

For non-trivial repo work, define:

- objective
- scope
- relevant files
- likely entrypoints
- verification path
- rollback point
- done criteria
- execution order

## Rules

- Do not start broad edits without first defining the task frame.
- Do not blur investigation, implementation, and verification into one undifferentiated stream.
- Prefer the smallest sequence that can prove progress.
- If the task is ambiguous, identify the ambiguity explicitly instead of silently choosing a risky interpretation.
- Keep the plan grounded in the actual repo, not generic workflows.
- Let new evidence change the plan when needed, but say that the plan changed and why.

## Required structure

For non-trivial repo tasks, produce:

- **Objective**
- **Scope**
- **Relevant files**
- **Likely entrypoints**
- **Execution path**
- **Verification plan**
- **Rollback point**
- **Done criteria**
- **Risks or unknowns**

## Execution discipline

After planning:

- perform the work in the stated order unless new evidence justifies a change
- say when the plan changed and why
- keep verification tied to the original objective
- stop calling the task complete if done criteria were not met

## Quality bar

For DSP, mastering, or audio-tool work, plans must target the highest relevant commercial standard for correctness, robustness, and validation rather than mere plausibility.