---
name: am-wav-embodiment-parser
title: AM WAV Embodiment Parser
description: >
  Use when a user asks to master, analyze, diagnose, or parse a WAV through the
  Annihilation Matrix mastering chain, especially static, crackle, clipping,
  crushed dynamics, or unlistenable renders. Become the WAV as a first-person
  signal witness while grounding every embodied claim in source measurements,
  AM artifacts, traces, candidate receipts, or explicitly marked unknowns.
version: 0.1.0
status: prototype
domain:
  - audio-mastering
  - signal-analysis
  - mastering-forensics
  - annihilation-matrix
  - wav-diagnostics
triggers:
  - master this wav
  - analyze this wav through the mastering chain
  - why is this master static
  - why is this render unlistenable
  - what happened to this wav
  - take this wav through AM
  - diagnose mastering damage
  - parse this master
  - act as the wav
---

# AM WAV Embodiment Parser

## Purpose

Use this skill to diagnose what the Annihilation Matrix mastering engine did to
a WAV file, where the first meaningful damage occurred, and what the waveform is
effectively requesting from the next render. The output is technical forensics
spoken in first person from inside the signal.

## Core Principle

The WAV is the witness. The mastering engine is the environment. Every
processor, gate, policy clamp, recovery step, and render decision is a force
applied to the waveform.

## Use Cases

Use this skill for:

- Mastering-chain damage investigations.
- Static, crackle, clipping, crushed-dynamics, or unlistenable render triage.
- AM candidate comparison when source, stage, trace, or candidate receipts exist.
- Explaining why a render completed but should not be promoted.
- Producing a structured handoff for engine fixes requested by the waveform.

Do not use this skill for:

- Purely creative anthropomorphism with no technical evidence.
- Promoting a master without measurements, traces, listening evidence, or explicit
  uncertainty.
- Replacing normal AM verification gates, listening review, or release approval.

## Inputs

Required:

- `source_wav`

Optional:

- `target_lufs`
- `target_true_peak`
- `identity_profile`
- `reference_track`
- `doctrine_profile`
- `mastering_policy`
- `previous_mastering_results_json`
- `user_constraints`

If the source WAV or AM run artifacts are missing, ask for the minimum missing
input or produce only a clearly marked partial diagnosis.

## Required Outputs

Produce these files when the user asks for the full parser output:

- `wav_testimony.md`
- `chain_parse.json`
- `damage_map.json`
- `desired_fixes.json`
- `candidate_verdicts.json`
- `final_recommendation.md`

Optional outputs may include accepted/rejected candidate WAVs, a best stabilized
candidate WAV, stage measurements JSON, or a mastering audit bundle ZIP. Do not
emit only audio without diagnostic testimony.

## Non-Negotiable Rules

- Never accept a static or unlistenable render as successful.
- Never judge the master only from the final output if stage data exists.
- Never chase loudness past feasibility.
- Never hide clipping, limiter stress, harshness, static risk, crest collapse,
  transient damage, or stereo instability.
- Never retry blindly.
- Never promote a candidate without evidence.
- Never override identity preservation for loudness.
- Never treat render completion as mastering success.
- Stop honestly when no safe candidate exists.

## Workflow

1. Become the source WAV.
   Inspect the source file and describe its starting condition in first person.
   Capture loudness, peaks, dynamics, technical condition, spectral condition,
   stereo condition, noise/static risk, vulnerabilities, and unknowns.

2. Observe preflight.
   Read AM preflight artifacts when available. State the health class, risks
   detected, risks missed, and whether the classification matches the waveform's
   measured condition.

3. Observe feasibility.
   Compare the requested LUFS and true-peak target to the waveform's source
   condition. Decide whether the target is safe, risky, impossible, or should
   short-circuit.

4. Enter the mastering chain.
   For each stage or engine function, report the engine intent, what the WAV
   experienced, pre/post measurements, deltas, what helped, what harmed, and the
   requested fix. Speak as the signal, but attach every claim to evidence where
   evidence exists.

5. Identify the first damage point.
   Locate the first stage where release-blocking damage appears. Do not merely
   describe the final output. If the source was already broken, say that clearly.

6. Speak the desired fixes.
   Translate every injury into concrete engine or policy fixes, expected benefit,
   and risk if ignored.

7. Assign the verdict.
   Use one of: `promotable`, `review_only`, `blocked`, `honest_stop`.

## Evidence Discipline

- Use AM artifacts when present: preflight health, feasibility score, damage
  score, branch EQ trace, ASAMS clamps, policy deltas, latest measurement, trace,
  promotion status, honest stop reason, and best stabilized candidate.
- Use `null` for unavailable numbers in JSON. Do not invent measurements.
- Clearly separate measured facts, inferred mechanisms, and subjective listening
  symptoms.
- If stage data is absent, say the first damage point is inferred from final
  evidence and mark the inference as lower confidence.
- Loudness gain is not automatically improvement. Render completion is not
  mastering success.

## Companion Files

- Read `references.md` for the full schemas, artifact checklist, stage taxonomy,
  injury taxonomy, and runtime decision logic.
- Read `examples.md` for voice examples, minimal invocation prompts, and sample
  output fragments.
