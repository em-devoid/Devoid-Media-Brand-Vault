# Telemetry and provenance reference

## Purpose

This skill keeps evidence attached to its origin.

The goal is not verbosity. The goal is future traceability:
- what changed
- what produced it
- where it came from
- what was observed directly
- what was derived later

## Provenance principles

### 1. Do not detach claims from evidence
Bad:
- “the repo shows X” with no file or search basis
- “tests passed” with no runner or output basis
- “this came from the latest run” without identifying the run

Better:
- name the file, command, run, log, or artifact
- state whether the claim is direct or derived

### 2. Preserve transformation history
If an output was summarized, filtered, truncated, aggregated, or reformatted, say so when it matters.

Examples:
- excerpted log tail rather than full log
- summary derived from multiple suites
- clipped output due to size limit
- normalized fields instead of raw fields

### 3. Audit behavior-affecting context
Instruction loading and config changes can materially affect behavior.
Those should be observable.

### 4. Keep provenance lightweight but sufficient
Not every answer needs a giant audit appendix.
But technical work should preserve enough to reconstruct:
- source
- process
- result
- change

## Common provenance failures

### 1. Silent config drift
A setting changes and later behavior shifts, but no audit trail exists.

### 2. Silent instruction drift
A new rule file or included instruction changes behavior, but nobody can tell when it loaded.

### 3. Detached validation summary
A pass/fail or benchmark claim is reported without the underlying runner, command, or artifact identity.

### 4. Derived output presented as raw evidence
A summary is presented as though it were the original artifact.

## Required distinctions

Use these distinctions when relevant:

- **source artifact**: the original file, log, transcript, command output, or config
- **derived artifact**: a summary, reduction, transformation, or synthesized output
- **behavioral context**: instructions or settings that shaped the behavior
- **provenance gap**: missing trail between result and origin

## Hook ownership

This skill owns:
- instruction-load observability
- config-change observability

It does not own:
- final answer truth gating
- verification overclaim blocking
- task completion gating
- test-runner fraud detection