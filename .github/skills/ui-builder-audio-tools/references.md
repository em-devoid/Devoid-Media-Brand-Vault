\# UI builder audio tools reference



\## Purpose



This skill designs and critiques UI patterns for audio and mastering tools.



Its job is to make interfaces:

\- workflow-efficient

\- technically legible

\- tightly mapped to actual backend behavior

\- honest about what is happening



\## Core design principles



\### 1. Workflow over ornament

A mastering UI should help:

\- read chain state quickly

\- understand what is active

\- identify where load or risk is coming from

\- adjust parameters with low ambiguity



\### 2. Group by real behavior

Group controls by how the system works, not by vague visual symmetry.



Examples:

\- stage controls grouped by processing stage

\- metering grouped by diagnostic meaning

\- chain overview separated from deep stage detail

\- setup/config separated from live diagnosis



\### 3. Make state visible

A serious audio UI should make clear:

\- enabled vs bypassed

\- default vs overridden

\- pre vs post where relevant

\- measured vs inferred where relevant

\- risky vs safe operating regions when meaningful



\### 4. Do not imply fake capability

If the backend does not support:

\- per-stage automation

\- true bypass

\- meaningful meter interpretation

\- certain parameter interactions



the UI should not pretend it does.



\## What good audio-tool UI should make easy



\- reading the chain at a glance

\- locating the stage causing limiter load

\- understanding why a meter is moving

\- distinguishing loudness, peak, and dynamics information

\- understanding what a control actually changes

\- seeing whether a stage is compensating for another



\## Common UI failures



\### 1. Pretty but behaviorally vague

Looks polished but does not help actual mastering workflow.



\### 2. Decorative metering

Meters exist but do not clearly map to actionable meaning.



\### 3. Parameter drift

Labels and control placement obscure what the backend parameter really does.



\### 4. State ambiguity

The UI does not make clear what is active, overridden, measured, or risky.



\### 5. Too many controls at once

The UI exposes everything equally and destroys hierarchy.



\## Required critique dimensions



When critiquing or designing, consider:



\- macro overview vs detail view

\- chain order visibility

\- control grouping

\- meter meaning

\- stage-state clarity

\- parameter-to-backend mapping

\- sensible defaults

\- workflow efficiency



\## Boundary with other skills



\- `dsp-mastering-expert` explains the DSP behavior

\- `mastering-chain-reasoner` explains stage interactions

\- `ui-builder-audio-tools` turns that into usable interface structure

