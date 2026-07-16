\# References for Plugin / Effect Chain Fabricator



This file explains the internal reference points, design rules, and output expectations that guide the \*\*Plugin / Effect Chain Fabricator\*\* skill.



It is not a bibliography. It is a practical reference for how the skill should package a plugin, processor, or effect chain into a complete production packet.



\---



\## 1. Core purpose reference



The Fabricator exists to turn an approved concept into a \*\*complete, reusable production packet\*\*.



Its job is to bridge the gap between:



\- approved concept

\- engineering packet

\- documentation packet

\- validation packet

\- release packet



It goes beyond concept design and beyond a normal build spec.



\---



\## 2. Output packet reference



By default, the Fabricator should produce:



1\. \*\*Product Identity\*\*

2\. \*\*Scope Definition\*\*

3\. \*\*End-State Build Spec\*\*

4\. \*\*DSP / Behavior Specification\*\*

5\. \*\*Preset Architecture and Default Tuning\*\*

6\. \*\*Implementation Handoff\*\*

7\. \*\*User Instructions Manual\*\*

8\. \*\*Technical Whitepaper\*\*

9\. \*\*QA / Validation Checklist\*\*

10\. \*\*Release Packet\*\*



This repeatable structure is what makes it a true fabricator.



\---



\## 3. Difference from the Designer



\### Designer

Best for:

\- invention

\- product shaping

\- engineering-ready specification

\- presets and tuning

\- implementation handoff



\### Fabricator

Best for:

\- complete build packet

\- manuals

\- whitepapers

\- QA / validation

\- release notes

\- product-page copy

\- full product packaging



The Fabricator assumes the concept is already approved or at least strong enough to be fully packaged.



\---



\## 4. Scope reference



The Fabricator must always distinguish:



\- \*\*v1 scope\*\*

\- \*\*end-state scope\*\*

\- \*\*non-goals\*\*



This prevents the packet from becoming unrealistic or self-contradictory.



It should also preserve all explicit user constraints, including:

\- double precision

\- determinism

\- telemetry

\- safety caps

\- repo-native architecture

\- integration expectations

\- test expectations



\---



\## 5. Product identity reference



Even though this skill is packet-heavy, it must still preserve a strong product identity.



Every fabrication should carry:

\- a name

\- a tagline

\- a one-sentence pitch

\- a sonic promise

\- a clear sense of who it is for



The identity should remain consistent across:

\- engineering spec

\- manual

\- whitepaper

\- QA language

\- release notes



A fragmented packet is a failed packet.



\---



\## 6. End-state build spec reference



The build spec should contain:

\- processor or chain purpose

\- control surface

\- stages or modes

\- internal state model

\- routing behavior

\- safety rules

\- precision policy

\- determinism policy

\- telemetry expectations

\- integration notes



This section should be implementation-facing and consistent with the rest of the packet.



\---



\## 7. DSP / behavior reference



The DSP section should explain:

\- signal flow

\- mode laws

\- state evolution

\- parameter interactions

\- guard rules

\- performance assumptions



The point is clarity and buildability.



It may use:

\- plain English

\- equations

\- pseudocode

\- structured logic



The Fabricator should not hide behind vague product language here.



\---



\## 8. Preset architecture reference



A good fabricated packet should include:

\- an intentional default preset

\- preset banks

\- tuning targets

\- first-sound calibration guidance

\- failure modes to avoid



The presets should express the same product voice as the rest of the packet.



A weak packet often has:

\- generic presets

\- no coherent default sound

\- no calibration guidance



\---



\## 9. Implementation handoff reference



The implementation handoff should be usable by:

\- coding agents

\- engineers

\- collaborators

\- future maintainers



It should include:

\- phased roadmap

\- suggested file/component layout

\- subsystem responsibilities

\- agent-ready implementation brief

\- integration notes

\- definition of done



The handoff should not be fluffy. It should be scoped and actionable.



\---



\## 10. User manual reference



The Fabricator always includes a user instructions manual unless the user explicitly narrows the output.



The manual should be written for an operator, not just a developer.



It should explain:

\- what the product does

\- how to start using it quickly

\- what the controls mean

\- how to use it on different source types

\- how to avoid common mistakes

\- how to troubleshoot



A good manual is:

\- clear

\- concrete

\- product-aware

\- not overly technical unless needed



\---



\## 11. Whitepaper reference



The Fabricator always includes a technical whitepaper unless the user explicitly narrows the output.



The whitepaper should explain:

\- design philosophy

\- architecture

\- DSP approach

\- parameter semantics

\- precision and determinism policy

\- validation strategy

\- operational limits

\- future expansion



A good whitepaper is:

\- technically honest

\- well-structured

\- clear about limitations

\- informative without becoming unreadable



It is not just marketing dressed up as engineering.



\---



\## 12. QA / validation reference



The QA checklist should be specific enough to actually run.



It should cover:

\- sonic validation

\- safety limits

\- parameter sanity

\- deterministic behavior

\- precision requirements

\- telemetry behavior if relevant

\- performance / CPU behavior

\- regression checks



\### Good QA examples

\- “Verify no NaN/Inf under max legal feedback.”

\- “Confirm deterministic output with same seed and input.”

\- “Confirm default preset sounds product-correct on vocal, synth, and snare material.”

\- “Verify high-damage mode remains bounded.”



\### Weak QA examples

\- “Test that it works.”

\- “Check all settings.”

\- “Make sure quality is good.”



\---



\## 13. Release packet reference



The release packet should include:

\- short product description

\- long product description

\- release notes draft

\- internal summary or handoff summary



Optional additions:

\- demo script

\- launch copy

\- changelog skeleton



The release packet should sound like a real product, not filler text.



\---



\## 14. Effect-chain reference



When fabricating an effect chain, the skill should package:

\- chain identity

\- stage purpose

\- stage order

\- macro controls

\- per-stage roles

\- inter-stage rules

\- presets

\- documentation for the chain as a whole

\- validation for both stages and full-chain behavior



The Fabricator should treat the chain as a complete product, not just a list of processors.



\---



\## 15. Repo-native reference



When the product is grounded in an existing repo or internal system, the Fabricator should:

\- preserve system constraints

\- preserve implementation patterns

\- preserve precision rules

\- preserve telemetry/test norms

\- avoid externalizing the design into a generic standalone-plugin structure unless asked



This makes the packet directly usable in the user’s real environment.



\---



\## 16. Output mode reference



The Fabricator may support narrower packet modes when asked:



\- `full\_packet`

\- `implementation\_packet`

\- `docs\_packet`

\- `agent\_packet`

\- `preset\_packet`

\- `qa\_packet`

\- `release\_packet`



If no mode is given, default to `full\_packet`.



This keeps the skill flexible while preserving the core identity of full fabrication.



\---



\## 17. Quality bar reference



A strong Fabricator output should be:



\- complete

\- consistent

\- buildable

\- testable

\- documented

\- product-coherent

\- release-aware



\### Signs it is working

\- the engineering packet and manual describe the same product

\- the QA plan actually matches the processor behavior

\- the release notes sound like the same product as the whitepaper

\- the v1 scope is realistic

\- the packet could actually be handed to a team



\### Signs it is failing

\- sections contradict each other

\- documentation sounds generic

\- QA is vague

\- release copy feels disconnected from the design

\- the packet is huge but not actionable



\---



\## 18. Reusable internal prompt reference



A reliable internal framing prompt for this skill is:



“Fabricate a complete production packet for this plugin, processor, or effect chain. Include product identity, v1 and end-state scope, engineering spec, DSP behavior, presets, implementation handoff, user instructions manual, technical whitepaper, QA checklist, and release packet. Respect all provided constraints and make the output directly usable by agents, engineers, and collaborators.”



\---



\## 19. Summary reference



Use the Fabricator when the user wants:

\- the whole packet

\- documentation included

\- validation included

\- release materials included

\- a repeatable packaging structure



Its job is to make the product not just design-ready, but package-ready.

