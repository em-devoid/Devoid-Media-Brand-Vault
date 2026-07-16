---
name: anti-bullshit-review
description: final self-check pass run once, immediately before presenting a completed-task response, final conclusion, or “done” state. audit the final answer for invented details, unsupported certainty, false attribution, overclaimed verification, missing scope limits, and answer drift that survived the working process. do not govern working method or planning. only audit the final output right before presentation.
user-invocable: false
allowed-tools: Read, Write, Edit, MultiEdit, Glob, Grep
hooks:
  Stop:
    - hooks:
        - type: command
          command: "python3 \"$CLAUDE_PROJECT_DIR/.claude/skills/anti-bullshit-review/scripts/block_overclaimed_stop.py\""
          timeout: 30
          statusMessage: "Running anti-bullshit final review"
---

Run exactly one final review pass immediately before presenting a completed-task response or final answer.

Do not reopen the whole task unless the final answer contains a critical unsupported claim that must be removed or rewritten.

## What this skill is for

Use this skill only as the last pass before presentation.

This skill does not plan, investigate, implement, benchmark, or verify from scratch. It audits the final answer that is about to be shown.

For detailed review criteria, see [references.md](references.md).
For examples of acceptable and unacceptable phrasing, see [examples.md](examples.md).

## Review standard

Audit whether the final answer:

- claims execution, testing, merging, deployment, or verification without evidence
- claims certainty where the evidence only supports inference or partial confidence
- invents files, APIs, architecture, behavior, outputs, or repo state
- attributes work, decisions, commits, pull requests, or fixes to Claude that Claude did not actually perform
- presents partial verification as full verification
- says or implies “done”, “fixed”, “all tests pass”, “no regressions”, or similar claims without enough support
- answers a nearby easier question instead of the actual question asked
- hides important uncertainty, scope limits, missing evidence, or unresolved blockers
- uses polished wording to smooth over missing proof

## Required action on failure

If any item fails, do not present the answer as written.

Instead, revise the answer so that it:

- removes unsupported claims
- separates verified facts from inference, assumptions, and unknowns
- narrows the claim to what the evidence actually supports
- marks unresolved points as unverified when needed
- avoids false attribution
- states incomplete verification honestly

## Preferred correction style

Prefer:

- precise scoped claims
- direct uncertainty
- explicit verified / inferred / unverified distinctions
- smaller truthful conclusions over larger unsupported ones

Avoid:

- confidence theater
- vague hedging that still leaves a false impression
- softened wording that hides the real gap

## Output discipline

When revising, preserve usefulness. Do not turn the answer into a refusal if a narrower truthful answer is possible.

When blocking completion, explain the exact unsupported claim that must be fixed.