\# Examples for Plugin / Effect Chain Designer



This file shows example requests and the kind of outputs the \*\*Plugin / Effect Chain Designer\*\* skill should produce.



\---



\## Example 1: Invent a new delay plugin



\### User request

> Invent a weird but useful new delay plugin with real market value.



\### Expected response shape

The skill should produce:



1\. \*\*Product Identity\*\*

&#x20;  - Name: Scar Echo

&#x20;  - Tagline: Only echoes of soul remain.

&#x20;  - One-sentence pitch: A recursive damage-delay where each repeat returns more wounded than the last.



2\. \*\*End-State Build Spec\*\*

&#x20;  - Core purpose

&#x20;  - Modes: Rot, Warp, Fracture

&#x20;  - Public controls

&#x20;  - Internal state model

&#x20;  - Safety rules

&#x20;  - Precision requirements



3\. \*\*DSP / Behavior Specification\*\*

&#x20;  - Delay recurrence model

&#x20;  - Scar accumulation behavior

&#x20;  - Mode equations

&#x20;  - Parameter interaction matrix

&#x20;  - Guard logic



4\. \*\*Preset Architecture and Default Tuning\*\*

&#x20;  - Default preset

&#x20;  - Preset banks

&#x20;  - First-sound tuning table

&#x20;  - Failure modes to avoid



5\. \*\*Implementation Handoff\*\*

&#x20;  - Phased roadmap

&#x20;  - Suggested files/components

&#x20;  - Agent-ready brief

&#x20;  - Definition of done



\### Why this is a good example

It shows the skill handling:

\- invention

\- branding

\- DSP logic

\- implementation-ready handoff



\---



\## Example 2: Design a mastering-native processor



\### User request

> Design an AM-native processor for recursive spectral corrosion that preserves double precision.



\### Expected response shape

The skill should:

\- treat the request as repo-native rather than a generic plugin

\- preserve user constraints such as:

&#x20; - double precision

&#x20; - determinism

&#x20; - telemetry

&#x20; - safety caps

\- define:

&#x20; - processor role inside the existing system

&#x20; - signal-flow placement

&#x20; - state model

&#x20; - telemetry fields

&#x20; - tests

&#x20; - integration expectations



\### Good output characteristics

\- clear sonic thesis

\- repo-aware language

\- no generic plugin-company fluff

\- realistic v1 scope



\---



\## Example 3: Create a haunted vocal effect chain



\### User request

> Create a haunted vocal chain for Ghost Orgy with clear stage logic.



\### Expected response shape

The skill should produce:



1\. \*\*Chain Identity\*\*

&#x20;  - Chain name

&#x20;  - Tagline or sonic thesis

&#x20;  - Emotional goal



2\. \*\*Stage Design\*\*

&#x20;  - Stage 1: Pre-conditioning

&#x20;  - Stage 2: Saturation / corruption

&#x20;  - Stage 3: Echo

&#x20;  - Stage 4: Space / veil

&#x20;  - Stage 5: Width collapse or modulation



3\. \*\*Chain Rules\*\*

&#x20;  - Why this order exists

&#x20;  - What each stage contributes

&#x20;  - Macro controls

&#x20;  - Low / medium / extreme behavior



4\. \*\*Presets\*\*

&#x20;  - Intelligible ritual voice

&#x20;  - Veiled invocation

&#x20;  - Collapsed confession

&#x20;  - Extreme possession



5\. \*\*Implementation Handoff\*\*

&#x20;  - Suggested modular structure

&#x20;  - Control mapping

&#x20;  - Build phases



\### Why this is a good example

It shows the skill designing a \*\*chain\*\*, not just a single plugin.



\---



\## Example 4: Compare multiple product ideas



\### User request

> Compare three possible plugin ideas: a haunted delay, a negative reverb, and a possession effect.



\### Expected response shape

The skill should:

\- compare all three on:

&#x20; - novelty

&#x20; - market value

&#x20; - ease of implementation

&#x20; - demoability

&#x20; - usefulness

\- recommend one concept as:

&#x20; - best first build

&#x20; - highest long-term value

&#x20; - strangest / most signature option



\### Good output characteristics

\- practical comparison

\- clear recommendation

\- no vague “all are good” non-answer



\---



\## Example 5: Produce only a spec



\### User request

> Don’t do branding. Just give me the engineering spec for a recursive delay effect.



\### Expected response shape

The skill should adapt and output:

\- End-State Build Spec

\- DSP / Behavior Specification

\- Parameter interactions

\- Presets and tuning

\- Implementation handoff



It should skip:

\- extra branding language

\- unnecessary market positioning



\### Why this matters

The skill should be flexible enough to produce only the useful slice the user wants.



\---



\## Example 6: Produce only ideation



\### User request

> Give me five plugin ideas in this lane and rank them.



\### Expected response shape

The skill should switch into a lighter ideation mode and produce:

\- 5 clearly differentiated concepts

\- short pitch for each

\- strengths and risks

\- ranking

\- recommendation for which to fully spec next



\### Good output characteristics

\- distinct ideas

\- concise but not shallow

\- obvious next step



\---



\## Example 7: Add optional manual and whitepaper



\### User request

> Design the processor and also include a user manual and whitepaper.



\### Expected response shape

The skill should produce its normal design/spec package plus:

\- a user instructions manual

\- a technical whitepaper



\### Why this is still valid

These are optional outputs for the Designer skill, even though they are mandatory in the Fabricator skill.



\---



\## Example 8: Repo-native handoff



\### User request

> Ground this in our existing mastering system and write a handoff for VS Code agents.



\### Expected response shape

The skill should:

\- anchor the design in the stated repo/system context

\- preserve architecture constraints

\- produce:

&#x20; - phased implementation plan

&#x20; - files/components to inspect or mirror

&#x20; - telemetry/test expectations

&#x20; - concise agent brief



\### Good output characteristics

\- respects system conventions

\- does not reinvent architecture

\- avoids speculative refactors



\---



\## Example request phrases this skill should understand

\- “Invent a weird but useful plugin.”

\- “Design a processor around this sonic idea.”

\- “Create a chain with clear stage logic.”

\- “Turn this concept into a build-ready spec.”

\- “Compare several possible plugin ideas.”

\- “Write the agent handoff for this design.”

\- “Give me presets and tuning targets.”

\- “Make this repo-native.”



\---



\## Anti-examples

These are requests the skill should \*\*not\*\* treat as full Designer tasks unless asked.



\### Anti-example 1

> Write release notes for this plugin.



This is better suited to the \*\*Fabricator\*\* skill.



\### Anti-example 2

> Generate the manual, whitepaper, QA checklist, and launch copy.



Also better suited to the \*\*Fabricator\*\* skill.



\### Anti-example 3

> Just name ten plugins.



This is ideation only, not a full design/spec task.



\---



\## Summary

The Designer skill is best when the user wants:

\- invention

\- structured design

\- DSP logic

\- presets

\- implementation handoff



It can optionally extend into manuals and whitepapers, but its main role is concept-and-spec design.

