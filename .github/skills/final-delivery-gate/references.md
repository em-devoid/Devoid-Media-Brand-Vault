# Final delivery gate reference

## Purpose

This skill decides whether work is actually deliverable, not whether the prose sounds confident.

It is the completion-status gate.

It does not own:
- general truth discipline during work
- final anti-bullshit phrasing audit
- runner integrity policing
- broad provenance logging

It owns the last question before calling something complete:

**Does this actually meet done criteria?**

## Core delivery dimensions

### 1. Objective completion
Did the work actually address the original request, not a nearby easier one?

### 2. Verification reality
Was the claimed verification actually performed?

### 3. Regression exposure
Did the work introduce material risk outside the main claimed improvement?

### 4. Contract/schema safety
Could the work silently damage contracts, interfaces, formats, or expectations?

### 5. Provenance sufficiency
Can a later reviewer tell what was changed, what was verified, and what remains open?

### 6. Commercial-standard gap
For DSP/mastering/audio work, is the result merely plausible, or does it actually meet the claimed standard?

## Common false passes

### False PASS: objective drift
The work sounds substantial, but it did not fully address the asked task.

### False PASS: verification gap
The implementation exists, but relevant verification did not happen.

### False PASS: hidden regression risk
The headline metric improved while adjacent behavior may have worsened.

### False PASS: contract drift
The output or interface changed in a way that might break downstream consumers.

### False PASS: commercial-quality overclaim
The result is workable, but still below the claimed standard.

## Decision definitions

### PASS
Use only when the work is genuinely ready on the terms being claimed.

### PASS WITH EXPLICIT RISKS
Use when the work may be usable or forward-progress worthy, but known risks remain and are stated plainly.

This is not a softer PASS. It is a scoped partial approval with named debt.

### FAIL
Use when the work is not honestly deliverable on the terms being claimed.

## Required bluntness

If the task is not closed, say so.

If the claimed standard is not met, say so.

If the risk is material, do not hide it under “should be fine”.