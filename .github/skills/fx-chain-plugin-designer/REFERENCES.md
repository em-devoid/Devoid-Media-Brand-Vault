\# References for Plugin / Effect Chain Designer



This file explains the internal reference points, design principles, and reusable patterns that guide the \*\*Plugin / Effect Chain Designer\*\* skill.



It is not a bibliography of outside sources. It is a practical reference guide for how the skill should think and structure outputs.



\---



\## 1. Core purpose reference



The Designer skill exists to bridge the gap between:



\- raw sonic idea

\- product concept

\- engineering-ready specification



Its job is not merely to brainstorm names or write marketing copy. Its main role is to create a design package that is:



\- distinctive

\- coherent

\- technically grounded

\- handoff-ready



\---



\## 2. Output reference



By default, the skill should produce these sections:



1\. \*\*Product Identity\*\*

2\. \*\*End-State Build Spec\*\*

3\. \*\*DSP / Behavior Specification\*\*

4\. \*\*Preset Architecture and Default Tuning\*\*

5\. \*\*Implementation Handoff\*\*



Optional additions:

\- User Instructions Manual

\- Technical Whitepaper

\- Comparison mode

\- Repo-native handoff mode

\- Preset-pack mode



\---



\## 3. Product identity reference



Every strong result should define:



\- a clear product name

\- a tagline

\- a one-sentence pitch

\- a sonic / emotional promise

\- a reason the product matters



A good product sentence should make the behavior legible quickly.



\### Good examples

\- “A recursive damage delay where each repeat returns more wounded than the last.”

\- “A reverb that collapses inward instead of blooming outward.”

\- “A processor that lets one sound inherit the identity of another.”



\### Weak examples

\- “An innovative next-generation audio solution.”

\- “A unique plugin for creative professionals.”

\- “A powerful processor with many possibilities.”



\---



\## 4. Sonic thesis reference



Every design should be anchored to \*\*one clear sonic thesis\*\*.



This thesis should answer:

\- what does it do?

\- what does it feel like?

\- why is it not just a generic version of something else?



\### Strong thesis qualities

\- audible in a few seconds

\- emotionally distinct

\- technically expressible

\- useful enough to sell or build



\### Weak thesis qualities

\- too broad

\- too abstract

\- just a mood with no mechanism

\- just a mechanism with no identity



\---



\## 5. Build spec reference



The End-State Build Spec should include enough detail for implementation planning, including:



\- processor purpose

\- modes or stages

\- controls

\- internal state

\- safety rules

\- precision policy

\- determinism policy

\- telemetry expectations if relevant

\- integration notes



The spec should preserve all user constraints.



\### Common constraints to preserve

\- double precision

\- deterministic mode

\- telemetry

\- safety caps

\- existing repo architecture

\- native processor expectations

\- bounded feedback behavior



\---



\## 6. DSP / behavior reference



The DSP section should explain the actual behavior, not just name controls.



Useful contents include:

\- signal recurrence

\- state update logic

\- mode laws

\- control interaction rules

\- safety/guard equations

\- performance expectations



This section may use:

\- plain English

\- equations

\- pseudocode

\- structured logic



The point is clarity, not mathematical vanity.



\---



\## 7. Parameter interaction reference



The skill should avoid treating parameters as isolated knobs.



It should explain:

\- what each parameter does directly

\- what each parameter influences indirectly

\- which parameters are primary identity controls

\- which parameters are safety or utility controls



\### Example structure

For `damage`:

\- strongly affects accumulation rate

\- moderately affects saturation and collapse

\- should not secretly boost output level



For `memory\_loss`:

\- affects identity retention

\- should not simply duplicate `damage`



This makes the design more buildable and more coherent.



\---



\## 8. Preset architecture reference



A good design should include:

\- a default preset that immediately sounds like the product

\- preset banks organized by use or character

\- tuning guidance for first listening passes

\- known failure modes to avoid



\### Strong preset architecture

\- Foundations

\- Character

\- Ritual / Signature

\- Extreme



\### Why this matters

A design feels more real when:

\- the default sound is intentional

\- the product voice is clear

\- the first demo path is obvious



\---



\## 9. Implementation handoff reference



Every strong Designer output should include:

\- build phases

\- suggested file/component layout

\- subsystem responsibilities

\- non-goals

\- definition of done



This makes the output usable by:

\- coding agents

\- engineers

\- collaborators

\- future you



The handoff should be direct and scoped, not bloated.



\---



\## 10. Effect-chain reference



When the request is for a chain rather than a single processor, the skill should define:



\- chain purpose

\- stage names

\- stage order

\- why the order matters

\- macro controls

\- stage roles

\- low / medium / extreme behavior

\- chain presets



The chain should be treated like a designed product, not a random stack of effects.



\---



\## 11. Repo-native reference



When the user grounds a request in an existing system or repository, the skill should:



\- adapt to the stated architecture

\- avoid inventing a separate plugin-company workflow

\- preserve existing conventions

\- respect testing/telemetry requirements

\- treat the result as native to that system



The skill should avoid:

\- proposing unnecessary wrappers

\- assuming UI-first development

\- ignoring repo constraints



\---



\## 12. Documentation reference



The Designer skill may optionally produce:

\- a user manual

\- a whitepaper



However, documentation is not its default obligation.



If the user wants a complete packet by default, that belongs to the \*\*Plugin / Effect Chain Fabricator\*\*.



\---



\## 13. Scope reference



The Designer skill is best for:

\- concept generation

\- product shaping

\- engineering-ready specification

\- presets and tuning

\- implementation direction



It is not primarily for:

\- QA packet generation

\- release notes generation

\- full release-ready product packaging

\- launch materials as the main deliverable



Those belong more naturally to the Fabricator skill.



\---



\## 14. Quality bar reference



A strong Designer output should be:



\- specific

\- distinctive

\- technically honest

\- musically literate

\- implementation-aware

\- not overbuilt

\- not generic



\### Signs the result is working

\- you can explain the product in one sentence

\- the main behavior is easy to imagine hearing

\- the controls feel intentional

\- the presets sound like they belong to the same product

\- an engineer could begin building from the spec



\### Signs the result is failing

\- too much feature soup

\- unclear sonic identity

\- generic marketing language

\- vague DSP behavior

\- no implementation path

\- presets that do not express a clear product voice



\---



\## 15. Relationship to the Fabricator



\### Designer

Best for:

\- invention

\- concept

\- spec

\- tuning

\- handoff



\### Fabricator

Best for:

\- full implementation packet

\- manual

\- whitepaper

\- QA checklist

\- release notes

\- release copy



The Designer creates the concept-and-spec half of the workflow.  

The Fabricator creates the full production packet.



\---



\## 16. Reusable internal prompt reference



A reliable internal framing prompt for this skill is:



“Design a plugin, processor, or effect chain with a clear sonic thesis and marketable identity. Produce a build-ready design package including product identity, engineering spec, DSP behavior, parameter interactions, presets, and implementation handoff. Respect all provided constraints such as double precision, determinism, telemetry, safety limits, and repo architecture.”



\---



\## 17. Summary reference



Use the Designer skill when the user wants:

\- a better idea

\- a sharper product

\- a deeper spec

\- a clearer DSP model

\- a more usable handoff



Its job is to make the product real enough to build, without requiring the full release packet unless asked.

