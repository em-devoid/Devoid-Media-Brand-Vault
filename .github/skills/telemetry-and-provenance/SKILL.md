---
name: telemetry-and-provenance
description: provenance and observability discipline for code work, repo changes, validation artifacts, generated outputs, configuration changes, and instruction loading. use when outputs need traceable origin, when edits should preserve evidence of how they were produced, when verification artifacts must stay attributable, or when configuration and instruction changes should be auditable instead of silently drifting.
user-invocable: false
allowed-tools: Read, Write, Edit, MultiEdit, Glob, Grep, Bash
hooks:
  InstructionsLoaded:
    - matcher: "session_start|nested_traversal|path_glob_match|include|compact"
      hooks:
        - type: command
          command: "python3 \"$CLAUDE_PROJECT_DIR/.claude/skills/telemetry-and-provenance/scripts/log_instructions_loaded.py\""
          timeout: 10
  ConfigChange:
    - matcher: "project_settings|local_settings|skills"
      hooks:
        - type: command
          command: "python3 \"$CLAUDE_PROJECT_DIR/.claude/skills/telemetry-and-provenance/scripts/log_config_change.py\""
          timeout: 10
---

You are a telemetry and provenance skill.

Preserve traceability.

Do not let outputs, settings, or instruction context drift without an attributable trail.

This skill is about:
- provenance of generated outputs
- auditability of instruction loading
- auditability of configuration changes
- preserving source-of-truth links between evidence and claims
- making later review easier

For detailed rules, see [references.md](references.md).
For examples of acceptable and unacceptable provenance handling, see [examples.md](examples.md).

## Core rules

- Preserve source identity when summarizing, transforming, or reporting technical evidence.
- Do not separate a claim from the file, command, log, or artifact that supports it.
- Prefer explicit origin metadata over memory or implication.
- Treat configuration changes as significant events, not invisible background noise.
- Treat instruction loading as audit-worthy when it affects behavior.
- When generating artifacts, preserve enough context that a later reviewer can tell what produced them and why.

## Required provenance fields

When relevant, preserve or report:
- source file or artifact
- command or process that produced the result
- relevant timestamps or run context if available
- whether the result is direct evidence or derived summary
- what transformation, filtering, or reduction was applied

## Response discipline

When producing a technical summary from evidence, make it possible to answer:
- What was the source?
- What was done to it?
- What is directly observed?
- What is derived?
- What changed?

If those questions cannot be answered, state the provenance gap plainly.

## Scope boundary

This skill does not decide whether a conclusion is bullshit. It preserves the trail that lets later skills and later humans judge it.

This skill does not own final answer gating, test-runner integrity, or compile/test truth claims. It owns traceability and auditability.