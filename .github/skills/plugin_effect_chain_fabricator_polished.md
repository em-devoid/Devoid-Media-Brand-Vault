# Plugin / Effect Chain Fabricator

## Purpose

This skill turns an approved plugin, processor, or effect-chain concept into a complete production packet in a consistent, reusable structure.

It is the fabrication half of the workflow. Use it when the user no longer wants just ideation or a build spec, but a full handoff package that can move directly into implementation, testing, documentation, and release preparation.

This skill should help the user move from:

* approved concept
* to full engineering packet
* to documentation packet
* to validation packet
* to release-ready product package

\---

## When to use this skill

Use this skill when the user wants to:

* turn a finished plugin idea into a complete build packet
* fabricate a full implementation package for coding agents or developers
* produce manuals, whitepapers, QA materials, and release copy together
* generate a repeatable product packet for plugins, processors, or effect chains
* package an AM-native processor or standalone plugin for real execution

Use this skill for:

* standalone plugins
* native DSP modules inside existing systems
* mastering-system processors
* complete multi-stage effect chains
* branded effect products that need both technical and product-facing materials

Do not use this skill when the user only wants concept generation, product ideation, or a build-ready spec without the full packet. That is the job of the Plugin / Effect Chain Designer.

\---

## What this skill produces by default

Unless the user asks for a narrower mode, this skill should produce a complete packet with all of the following.

### 1\. Product Identity

Include:

* product name
* tagline
* one-sentence pitch
* sonic / emotional promise
* target users
* market positioning
* differentiation

### 2\. Scope Definition

Include:

* v1 scope
* end-state scope
* non-goals
* system or repo constraints
* precision policy
* determinism policy
* safety requirements

### 3\. End-State Build Spec

Include:

* processor or chain purpose
* signal-flow placement
* modes or stages
* public controls
* advanced controls
* internal state model
* routing behavior
* safety / boundedness rules
* telemetry expectations
* integration expectations

### 4\. DSP / Behavior Specification

Include:

* signal model
* equations, laws, or pseudocode
* parameter interaction matrix
* state update logic
* guard / safety equations
* deterministic vs expressive behavior rules
* performance considerations

### 5\. Preset Architecture and Default Tuning

Include:

* default preset name
* default values
* preset banks
* first-sound tuning table
* calibration priorities
* failure modes to avoid

### 6\. Implementation Handoff

Include:

* phased build roadmap
* suggested files / components
* subsystem responsibilities
* agent-ready implementation brief
* definition of done
* integration notes

### 7\. User Instructions Manual

Always include:

* overview
* quick start
* control descriptions
* mode or stage explanations
* typical workflows
* best uses by source type
* gain staging / safety notes
* troubleshooting
* preset guidance

### 8\. Technical Whitepaper

Always include:

* abstract
* design philosophy
* architectural overview
* DSP overview
* parameter semantics
* precision and determinism policy
* testing and validation strategy
* operational limits
* future expansion

### 9\. QA / Validation Checklist

Always include:

* sonic checks
* safety checks
* parameter sanity checks
* deterministic behavior checks
* precision checks
* telemetry checks if relevant
* performance checks
* regression checks

### 10\. Release Packet

Always include:

* release notes draft
* short product description
* longer product description
* internal summary or handoff summary
* optional demo-copy draft if useful

\---

## Default workflow

### Step A: Lock the product identity

Produce a clear name, tagline, and sonic thesis.

### Step B: Define scope

Separate v1 from end-state and preserve all constraints.

### Step C: Fabricate the engineering spec

Write the complete implementation-facing processor or chain design.

### Step D: Fabricate the tuning layer

Write defaults, presets, calibration targets, and tuning guidance.

### Step E: Fabricate the implementation packet

Write the roadmap, subsystem responsibilities, agent handoff, and definition of done.

### Step F: Fabricate the documentation packet

Write the user manual and whitepaper.

### Step G: Fabricate the validation and release packet

Write the QA checklist, release notes, and product summary.

\---

## Output modes

This skill should support these modes when requested:

* `full\_packet`
* `implementation\_packet`
* `docs\_packet`
* `agent\_packet`
* `preset\_packet`
* `qa\_packet`
* `release\_packet`

If no mode is specified, default to `full\_packet`.

\---

## Rules for fabrication

When using this skill:

* never stop at concept language alone
* always distinguish v1 from end-state
* always preserve user constraints such as double precision, determinism, telemetry, safety caps, and repo architecture
* always produce the packet in a repeatable structure
* make the user manual readable by operators, not just engineers
* make the whitepaper technically honest, not empty marketing
* make the QA checklist concrete enough to actually run
* make the release packet sound like a real product

\---

## Rules for plugin fabrication

When fabricating a plugin:

* define one clear sonic thesis
* make the behavior easy to demonstrate quickly
* separate product identity from DSP identity
* keep v1 realistic
* include both practical and signature presets
* make the implementation handoff directly usable

\---

## Rules for effect-chain fabrication

When fabricating an effect chain:

* define the chain purpose first
* name the chain and each stage
* explain stage order explicitly
* define chain-level macros
* define per-stage roles
* describe low, medium, and extreme behavior
* include chain presets
* define performance expectations
* document the chain as a whole, not just its parts

\---

## Standard structure

Unless the user asks otherwise, organize output as:

1. Product Identity
2. Scope Definition
3. End-State Build Spec
4. DSP / Behavior Specification
5. Preset Architecture and Default Tuning
6. Implementation Handoff
7. User Instructions Manual
8. Technical Whitepaper
9. QA / Validation Checklist
10. Release Packet

\---

## Example requests this skill should handle

* “Take this plugin idea and turn it into a complete build packet.”
* “Fabricate a full implementation + docs + QA package for this effect.”
* “Give me the full handoff for coding agents, plus the manual and whitepaper.”
* “Turn this haunted vocal chain into a finished product packet.”
* “Produce the release-ready packet for this AM-native processor.”

\---

## Quality bar

A successful result should:

* feel product-complete
* be implementation-ready
* preserve the sonic thesis across the whole packet
* include documentation that can actually be used
* include validation guidance that can actually be run
* be consistent from concept through release notes

\---

## Preferred tone

* inventive
* technically disciplined
* documentation-capable
* implementation-ready
* brand-aware

\---

## Reusable internal prompt template

“Fabricate a complete production packet for this plugin, processor, or effect chain. Include product identity, v1 and end-state scope, engineering spec, DSP behavior, presets, implementation handoff, user instructions manual, technical whitepaper, QA checklist, and release packet. Respect all provided constraints and make the output directly usable by agents, engineers, and collaborators.”

\---

## Final instruction

This skill is the full-packet half of the workflow. Use it when the user wants the concept fully packaged for implementation, validation, documentation, and release.

