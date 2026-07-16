# Mastering System ASAMS Auditor Reference Doctrine

## Purpose

This file is the distilled technical reference for the `mastering-system-asams-auditor` skill. It is not the primary instruction file and it is not a collection of worked examples.

Use this file when the audit needs deeper technical standards, doctrine, vocabulary, or decision rules. Use `examples.md` when the skill needs concrete input/output patterns or model responses.

`SKILL.md` should remain the control plane: concise instructions, trigger logic, workflow, and output requirements. `references.md` should hold reusable technical doctrine. Raw source materials may remain in `references/` and should only be consulted when a task requires deeper source context.

## How To Use This Reference

When applying this reference, do not copy it into every answer. Use it to guide reasoning and to choose the correct audit vocabulary.

Load this reference when the user asks about:

- ASAMS target compliance.
- the 19-stage `mastering_system` chain.
- precision, headroom, render depth, or “digital fog.”
- nonlinear processing, saturation, clipping, limiting, or aliasing.
- linear-phase, minimum-phase, crossover, multiband, or stereo imaging behavior.
- low-end mud, mono compatibility, sub-bass translation, or PA/club translation.
- loudness targets, true peak, limiter stress, or platform translation.
- neural audio emulation or offline neural processing constraints.
- accept / direct correction / repair_light / repair / full rerender decisions.
- whether a technical correction damages Ghost Orgy identity.

Do not treat this file as a rigid preset chain. Treat it as a standards and decisioning layer.

---

# 1. Operating Doctrine

## 1.1 The Auditor Is Not A Taste Engine

The auditor’s job is to determine whether the mastering chain is mathematically stable, ASAMS-compliant, translation-safe, and identity-preserving.

The auditor may describe aesthetic consequences, but must not replace deterministic targets with generic mastering taste. The correct question is not “does this seem like a nice commercial master?” The correct question is:

> Does the chain satisfy ASAMS targets, preserve intentional identity, avoid avoidable technical damage, and translate across the requested delivery context?

## 1.2 Evidence Comes Before Prescription

Before recommending changes, inspect whatever evidence exists:

- stage topology
- stage settings
- gain staging
- integrated LUFS
- short-term LUFS max
- momentary LUFS max
- LRA
- true peak
- sample peak
- crest factor or peak/RMS relationship
- clipping or overs count
- limiter gain reduction
- clipper depth
- stereo correlation
- mono fold-down behavior
- low-frequency phase behavior
- spectral balance
- ASAMS score outputs
- before/after render deltas

If this evidence is missing, the audit may still proceed, but it must be labeled provisional.

Do not say “fixed,” “improved,” “cleaner,” “wider,” “louder,” “more transparent,” or “ASAMS-compliant” unless the claim is supported by measurements, known settings, or clearly stated assumptions.

## 1.3 Deterministic Targets Override Generic Advice

If ASAMS targets are present, they are the controlling authority. Subjective advice must defer to them unless the user explicitly requests an artistic override.

If ASAMS targets are missing, stale, contradictory, or incomplete, state that directly. Do not invent ASAMS values. Do not infer strict thresholds from general mastering norms unless marked as a provisional default.

## 1.4 Identity Preservation Is A Technical Requirement

For Ghost Orgy work, “cleaner” is not automatically better. A technically polished master can be a failure if it weakens pressure, dread, violence, texture, ritual force, physicality, or intentional discomfort.

Flag corrections that:

- flatten the emotional arc.
- remove intended aggression.
- over-smooth transient danger.
- make distortion generically pleasant when the track wants threat.
- reduce physical low-end force in pursuit of cleanliness.
- brighten the track into generic sheen.
- widen the stereo image at the expense of center impact.

Identity damage is a valid audit finding.

---

# 2. Source Hierarchy And Conflict Resolution

## 2.1 Priority Order

When references conflict, resolve them in this order:

1. Explicit user-provided ASAMS targets, score outputs, or mastering_system contract requirements.
2. Measured render data from the current chain.
3. Known stage settings and routing topology.
4. Ghost Orgy identity / doctrine requirements.
5. Format-specific delivery constraints.
6. General technical mastering standards.
7. Generic plugin-chain advice.

## 2.2 Strong Defaults Are Not Universal Laws

Some source materials describe strong defaults, such as mono-centering low end below 150 Hz, using 64-bit float internal processing, enabling oversampling on nonlinear stages, or targeting -14 LUFS / -1.0 dBTP for streaming-safe masters.

These are useful defaults, not automatic final answers. The auditor must still account for:

- material-specific intent
- ASAMS targets
- genre and identity
- delivery format
- measured translation
- CPU/render constraints
- phase and latency consequences
- whether the fix solves the problem or merely moves it downstream

## 2.3 Use Measured Language Around Unverified Causes

Do not convert a symptom into a confirmed diagnosis without evidence.

Good:

- “This is a likely aliasing risk because nonlinear stages are present and oversampling is unknown.”
- “This could be low-end phase cancellation, but mono fold-down or correlation data is needed.”
- “This is a provisional precision risk, not a confirmed audible failure.”

Bad:

- “This is definitely digital fog.”
- “64-bit will fix it.”
- “Linear phase is always better.”
- “Mono everything below 150 Hz no matter what.”

---

# 3. ASAMS Deterministic Priority

## 3.1 Definition For Skill Use

Within this skill, ASAMS means the mastering_system’s deterministic target and scoring authority. It may include acoustic targets, thresholds, tolerances, safety limits, score outputs, and recovery decision data.

The auditor does not need to know the internal implementation of ASAMS to apply the doctrine. It must simply treat provided ASAMS data as the controlling target model.

## 3.2 ASAMS Compliance States

Use these compliance labels:

- **pass** — available evidence indicates targets are satisfied.
- **partial** — some targets pass while others drift or are unknown.
- **fail** — evidence shows target breach or unacceptable drift.
- **unknown** — required ASAMS data is missing.
- **provisional** — recommendation is based on partial evidence or general standards.

## 3.3 ASAMS Audit Questions

For every significant recommendation, ask:

- Which ASAMS target does this support?
- Which ASAMS target might it endanger?
- Does it improve one metric while damaging another?
- Does it change downstream behavior enough to require rerun scoring?
- Does it preserve identity or merely improve generic polish?
- Is this a direct correction, repair_light, repair, or rerender event?

## 3.4 Blocking Subjective Overrides

If a subjective improvement contradicts ASAMS target compliance, block it unless the user explicitly requests an artistic override.

Use this response pattern:

> This may be aesthetically attractive, but it should be blocked under ASAMS unless Jack explicitly chooses an artistic override. The likely risk is [target drift / identity damage / translation failure].

---

# 4. 19-Stage Matrix And Stateful Processing

## 4.1 Treat The Chain As A System

A 19-stage mastering chain is not a list of isolated processors. It is a stateful signal system. Early-stage changes can alter downstream thresholds, saturation drive, clipper behavior, limiter stress, stereo correlation, phase relationships, and final ASAMS scoring.

The auditor must trace consequences through the whole chain.

## 4.2 Required Topology Awareness

When available, identify:

- serial stage order
- parallel paths
- sidechains
- feedback paths
- lookahead dependencies
- bypass states
- metering positions
- nonlinear stages
- dynamics stages
- spatial/stereo stages
- ASAMS-controlled stages
- recovery or safety stages

Unknown topology is itself a risk.

## 4.3 Stage Classification

Classify each stage where possible:

- processor type: EQ, dynamic EQ, compressor, multiband, saturation, clipper, limiter, stereo tool, spatial tool, metering, ASAMS controller, recovery module, utility
- behavior: linear or nonlinear
- time behavior: static, dynamic, stateful, lookahead, feedback-dependent
- phase mode: minimum phase, linear phase, mixed phase, unknown
- precision: 64-bit float, 32-bit float, fixed point, host-dependent, unknown
- oversampling: confirmed, absent, unknown, realtime-only, offline-high-quality
- ASAMS relevance: direct target control, indirect target influence, neutral, unknown

## 4.4 Stateful Trajectory Forecasting

For early-stage changes, always forecast downstream effects.

Examples:

- A low-shelf boost before compression may raise RMS into a multiband detector.
- A high-frequency boost before saturation may generate more ultrasonic harmonic energy and raise aliasing risk.
- A stereo widening stage before clipping may create asymmetric clip behavior or weaken mono impact.
- A dynamic EQ cut before a limiter may reduce limiter stress but change spectral identity.
- A clipper threshold change may reduce limiter pumping but add transient distortion.

## 4.5 Do Not Approve Knobs In Isolation

Never approve a knob move only because it seems locally reasonable.

A change is only safe when:

- it supports ASAMS targets.
- it does not create downstream overload.
- it does not damage identity.
- it does not introduce avoidable phase, aliasing, or headroom risk.
- it can be validated with measurements or a controlled render comparison.

---

# 5. Precision, Arithmetic Integrity, And “Digital Fog”

## 5.1 Principle

Digital signal processing relies on finite arithmetic. Long chains, recursive filters, repeated gain changes, nonlinear processing, and multiple render passes increase the importance of precision discipline.

64-bit float processing provides substantially more arithmetic precision and headroom than 32-bit float and can reduce cumulative rounding error in complex mastering environments. However, 64-bit float alone does not guarantee clarity and does not automatically fix a damaged chain.

## 5.2 Use “Digital Fog” As A Symptom Label Only

“Digital fog” is not a precise diagnosis. Translate it into inspectable causes:

- cumulative rounding or truncation error
- hidden inter-stage clipping
- repeated gain scaling
- overcompression
- limiter stress
- nonlinear aliasing
- phase smear
- pre-ringing
- low-mid masking
- loss of transient contrast
- excessive smoothing
- stereo incoherence
- noisy or unstable neural/offline processing

## 5.3 Precision Audit Rules

Audit for:

- host/session internal precision
- plugin internal precision when known
- fixed-point or 24-bit bottlenecks inside the active chain
- repeated export/import cycles
- unnecessary normalization stages
- repeated gain scaling
- dither applied too early
- conversion between floating-point and fixed-point formats
- denormal or numerical stability risks in recursive filters

## 5.4 64-Bit Float Guidance

Prefer 64-bit float host/session processing when available, especially for:

- deep serial chains
- intensive summing
- recursive filters
- multiband chains
- heavy limiting
- parallel processing
- offline final rendering
- repeated analysis/render cycles

Treat 32-bit float as generally usable, but audit it carefully in long, complex, heavily nonlinear chains. Do not claim that a 32-bit float stage is automatically audible damage unless evidence supports the claim.

## 5.5 Dither Guidance

Dither only belongs at the final conversion to fixed-point delivery formats such as 24-bit or 16-bit PCM. Do not dither between floating-point stages. Do not dither repeatedly across intermediate renders.

If the chain exports floating point, preserve floating point until the final delivery conversion.

---

# 6. Gain Staging And Headroom

## 6.1 Principle

Many mastering failures are gain-staging failures disguised as tonal or loudness problems.

Inter-stage headroom matters because downstream dynamic and nonlinear processors react to the level they receive. A processor may be technically “not clipping” at the final output while still being overloaded internally or forcing later stages into unstable behavior.

## 6.2 Audit Targets

Check:

- input level into each stage
- output level from each stage
- cumulative gain increases
- cumulative gain reduction
- true peak and sample peak before final limiting
- clipping before intended clipping stages
- normalization between stages
- hidden makeup gain
- limiter gain reduction
- clipper depth
- whether the limiter is solving peak control or compensating for upstream errors

## 6.3 Red Flags

Flag:

- large boosts before compression or clipping without compensating gain.
- multiple processors adding makeup gain.
- a final limiter doing more work than the clipper/dynamics architecture intended.
- true peak overs after final stage.
- parallel paths recombining hotter than expected.
- sidechains receiving different spectral balance than the main path.
- metering placed before the processor that creates the actual problem.

## 6.4 Safe Recommendation Pattern

When headroom is compromised, prefer:

1. Identify the stage where overload begins.
2. Reduce level before the overloaded stage rather than only lowering the final output.
3. Rebalance makeup gain deliberately.
4. Confirm downstream dynamics still trigger as intended.
5. Rerun ASAMS and true-peak checks.

---

# 7. Nonlinear Processing, Oversampling, And Aliasing

## 7.1 Principle

Nonlinear processors reshape waveforms and generate new harmonic content. If generated harmonics exceed the Nyquist limit, they can fold back into the audible range as inharmonic distortion.

This commonly appears as brittle high-end, glassy fizz, dissonant ghost tones, harshness that follows pitch incorrectly, or a loss of depth and separation.

## 7.2 Common Nonlinear Stages

Treat these as aliasing risks unless confirmed otherwise:

- saturation
- distortion
- waveshaping
- clipping
- hard limiting
- aggressive limiting
- exciters
- tape emulation
- console emulation
- transformer emulation
- analog-modeled compressors driven hard
- digital synthesizers or harmonic generators

## 7.3 Oversampling Doctrine

Oversampling reduces aliasing risk by processing nonlinear stages at a higher internal sample rate, filtering ultrasonic content, and downsampling back to the session rate.

The quality of oversampling depends on the entire process:

1. upsampling quality
2. nonlinear processing at the higher rate
3. anti-alias filtering
4. downsampling quality

Oversampling is not automatically harmless. Poor filters can introduce ringing, phase shift, latency, or transient softening.

## 7.4 Recommended Oversampling Defaults

Use these as defaults, not laws:

- 4x minimum for nonlinear stages when aliasing risk exists.
- 8x to 16x for aggressive clipping, saturation, or high-loudness limiting if CPU allows.
- 32x only when justified by audible or measurable benefit, because CPU and filtering side effects may outweigh gains.
- Use lower quality/realtime settings while mixing if needed.
- Use high-quality/offline settings for final render.

## 7.5 Sine Sweep Test

When plugin aliasing behavior is uncertain, recommend a sine sweep test:

1. Place a sine oscillator before the processor under test.
2. Place a high-resolution spectrum analyzer after it.
3. Sweep upward toward the Nyquist region.
4. Watch for energy moving downward while the sine moves upward.
5. Downward-moving energy indicates fold-back aliasing.

## 7.6 Aliasing Audit Rules

Flag:

- nonlinear processing with oversampling off or unknown.
- saturation after high-frequency boosts.
- clipping at low sample rates.
- exciters before final limiting.
- final limiter driven into heavy gain reduction.
- multiple nonlinear stages without cumulative aliasing review.
- oversampling enabled in realtime but disabled in offline render, or vice versa.

## 7.7 Safe Recommendation Pattern

When aliasing is suspected:

- identify the nonlinear stage most likely to create the artifact.
- check oversampling and quality settings.
- test with sine sweep if needed.
- compare render with oversampling off/on at matched loudness.
- avoid prescribing broad high-end cuts until aliasing is ruled out.
- if oversampling reduces fizz but softens transients, evaluate whether the tradeoff supports ASAMS and identity.

---

# 8. Phase Integrity And Filter Selection

## 8.1 Principle

Every filter choice affects time-domain and phase-domain behavior. In a 19-stage chain, those effects can accumulate.

Minimum-phase filters behave more like causal analog systems and avoid pre-ringing, but introduce frequency-dependent phase shift. Linear-phase filters preserve phase relationships but can introduce latency and pre-ringing before transients. Mixed-phase and proprietary filters require caution when behavior is unknown.

## 8.2 Classify Phase Modes

Classify all relevant stages as:

- minimum phase
- linear phase
- mixed phase
- zero-latency proprietary
- natural phase / analog phase
- unknown

Relevant stages include:

- EQ
- high-pass / low-pass filters
- crossovers
- multiband compressors
- dynamic EQs
- linear-phase processors
- stereo imagers
- M/S processors
- spatial processors
- oversampling filters
- sample-rate conversion stages

## 8.3 Minimum-Phase Risks

Minimum phase is often natural for transient material, but risks accumulate when many filters or crossovers are stacked.

Flag:

- repeated minimum-phase crossovers.
- multiple multiband processors in series.
- aggressive HPF/LPF slopes across several stages.
- low-end EQ before stereo widening.
- parallel paths with mismatched minimum-phase filtering.

Possible symptoms:

- hollow low end
- softened punch
- unstable imaging
- mono fold-down loss
- tonal shift after bypassing parallel paths

## 8.4 Linear-Phase Risks

Linear phase can preserve phase relationships, but can smear transients through pre-ringing.

Flag:

- repeated linear-phase stages.
- linear-phase EQ before clipping/limiting on transient-heavy material.
- steep linear-phase filters on drums or percussive electronic material.
- linear-phase crossovers stacked with lookahead dynamics.
- high-latency modes that disrupt parallel alignment.

Possible symptoms:

- transient softness
- unnatural leading-edge artifacts
- perceived distance or blur
- reduced punch despite clean frequency response

## 8.5 Filter Selection Doctrine

Choose phase mode by problem, not by dogma.

Use minimum phase when:

- natural transient behavior matters.
- broad tonal shaping is sufficient.
- pre-ringing would be worse than phase shift.
- low latency or causal response matters.

Use linear phase when:

- phase coherence across bands/channels is more important than pre-ringing risk.
- parallel spectral processing requires alignment.
- crossover behavior must avoid relative phase shift.
- the material is not transient-sensitive or pre-ringing is inaudible.

Use dynamic EQ when:

- the problem is intermittent.
- static EQ would damage the whole track.
- resonance or harshness appears only during specific moments.

## 8.6 Phase Audit Validation

Recommend:

- mono fold-down checks.
- stereo correlation checks.
- polarity checks on parallel paths.
- bypass comparisons at matched loudness.
- low-end phase analysis.
- transient inspection before and after LP stages.
- checking latency compensation for parallel processing.

---

# 9. Low-End Management And Mono Compatibility

## 9.1 Principle

Low frequencies consume headroom, interact strongly with rooms, and determine physical impact. Low-end problems often appear as muddiness, weak punch, limiter stress, mono collapse, or translation failure.

## 9.2 Low-End Regions

Use these ranges as practical defaults:

- sub-bass: 20-60 Hz
- kick fundamental: often 50-80 Hz
- bass fundamental: often 80-150 Hz
- low-mid body / mud zone: 200-400 Hz
- warmth/body overlap: roughly 150-300 Hz

Do not treat these as fixed facts for every track. Confirm with source material and measurement.

## 9.3 Mono Compatibility Doctrine

A strong default is to keep true sub and core low-end energy centered. Many club and PA systems sum bass to mono, and stereo sub content can weaken impact through cancellation.

However, do not blindly mono everything below 150 Hz. Evaluate the 80-150 Hz region according to:

- mono fold-down behavior
- stereo correlation
- ASAMS target compliance
- low-end impact
- intended identity
- whether width is musical or unstable

Recommended default:

- true sub below roughly 80 Hz should usually be centered.
- 80-150 Hz should be tested, not automatically collapsed.
- preserve intentional low-end width only if it survives mono and translation checks.

## 9.4 Low-Mid Mud Doctrine

The 200-400 Hz region commonly accumulates boxiness and congestion. In mastering, solve this carefully.

Prefer:

- subtractive EQ
- dynamic EQ
- low-mid resonance control
- source diagnosis
- kick/bass relationship cleanup
- phase correction
- controlled multiband compression

Avoid:

- boosting highs to fake clarity.
- cutting so deeply that body and dread disappear.
- high-passing core bass/kick elements without a clear reason.
- assuming every muddy track has the same frequency problem.

## 9.5 High-Pass Filter Doctrine

High-pass filtering can restore headroom by removing useless sub-rumble, but it can also thin the track or introduce phase shift.

Use HPF when:

- sub-rumble is present.
- non-bass material is consuming headroom.
- low-end clutter masks the core foundation.
- ASAMS or translation checks show sub instability.

Do not high-pass kick, bass, or sub-synth by default. If filtering core low-end elements, justify the move and validate the loss of weight.

Prefer gentle slopes when transparency matters. Steep filters may be appropriate for surgical cleanup, but they increase phase/ringing risk.

## 9.6 Kick/Bass Relationship

When kick and bass mask each other:

- identify the kick fundamental.
- identify the bass fundamental.
- avoid forcing both to dominate the same frequency pocket.
- use narrow subtractive EQ or dynamic EQ where needed.
- use sidechain only when rhythmic ducking serves the track.

Useful sidechain defaults:

- attack: 5-10 ms
- release: 50-100 ms
- ratio: 3:1 to 6:1
- gain reduction: 3-6 dB

These are mix-oriented defaults. In mastering, apply only if the architecture supports it and ASAMS allows it.

---

# 10. Dynamics, Dynamic EQ, And Multiband Behavior

## 10.1 Dynamic EQ vs Multiband Compression

Use dynamic EQ for surgical, frequency-specific problems that appear only when a threshold is crossed.

Use multiband compression for broader macro-dynamic control across frequency regions.

Do not use multiband compression as a default cure-all. Crossovers introduce phase and latency considerations, and each band can change downstream clipping and limiting behavior.

## 10.2 Compression Audit Questions

Ask:

- Is compression solving a dynamic problem or adding density by habit?
- Is attack preserving or damaging transient identity?
- Is release timed musically or pumping nervously?
- Does makeup gain overload downstream stages?
- Are multiple compressors stacking gain reduction invisibly?
- Does compression improve ASAMS or only make the track feel flatter?

## 10.3 Multiband Red Flags

Flag:

- multiple multiband processors in sequence.
- unknown crossover phase modes.
- low-band compression causing sub pumping.
- high-band compression creating brittle density.
- makeup gain driving clippers/limiters.
- band solo decisions that do not survive full-chain playback.

## 10.4 Parallel Processing Risks

Parallel processing can add density while preserving transients, but it can also cause phase, latency, or recombination problems.

Audit:

- latency compensation
- polarity
- phase alignment
- dry/wet balance
- gain buildup on recombination
- whether parallel density overloads the limiter

---

# 11. Stereo, M/S, And Spatial Processing

## 11.1 M/S Doctrine

Mid/side processing is powerful because it separates center information from side information. It can tighten low end, widen upper material, control vocal center, or isolate stereo harshness.

But M/S processing can also destabilize mono compatibility, weaken center punch, or cause the side channel to dominate perceived size.

## 11.2 Stereo Audit Questions

Ask:

- Is the low end stable in mono?
- Is side energy excessive below the tested mono-safe range?
- Does widening reduce center impact?
- Does widening happen before nonlinear processors that may clip L/R asymmetrically?
- Does stereo enhancement survive small speakers, headphones, club/PA, and mono fold-down?
- Does the stereo field serve identity or generic polish?

## 11.3 Red Flags

Flag:

- stereo widening before heavy clipping.
- wide sub-bass with negative correlation.
- side-channel saturation creating brittle width.
- M/S EQ boosts that destabilize limiter behavior.
- mono collapse after spatial enhancement.

---

# 12. Clipping, Limiting, Loudness, And Translation

## 12.1 Principle

Loudness is not the same as impact. A master can be louder and weaker if transients collapse, low end distorts, or the limiter flattens the arc.

## 12.2 Clipping Before Limiting

A clipper before the final limiter can reduce fast transient peaks and prevent the limiter from doing excessive work. This may preserve punch better than forcing a limiter to handle all peak control.

But clipping adds distortion. It must be evaluated against identity, ASAMS targets, and translation.

Use clipper-before-limiter when:

- transient peaks overload the limiter.
- a small amount of clipping reduces pumping.
- the distortion supports the track.
- true peak and aliasing risks remain controlled.

Avoid or reduce clipping when:

- transient identity becomes flat.
- high-end fizz increases.
- low-end distorts unpleasantly.
- ASAMS texture/identity scores drift.
- oversampling is unavailable or poor.

## 12.3 Limiter Stress

Flag limiter stress when:

- gain reduction is excessive.
- pumping is audible or likely.
- low-end drives the detector disproportionately.
- true peak ceiling is not reliable.
- loudness comes from flattening rather than controlled density.
- upstream processors are forcing the limiter to solve avoidable problems.

## 12.4 Loudness Defaults

Use -14 LUFS / -1.0 dBTP as a streaming-safe reference, not a universal target.

Aggressive commercial, heavy, industrial, experimental, or Ghost Orgy material may validly run louder if:

- distortion is intentional or controlled.
- punch survives.
- fatigue is acceptable for the artistic goal.
- low-end does not collapse.
- ASAMS targets pass.
- identity is strengthened rather than flattened.

## 12.5 True Peak

For many streaming-safe stereo deliveries, -1.0 dBTP is a useful default ceiling to reduce inter-sample peak risk after encoding.

Do not assume sample peak equals true peak. Use true-peak metering when final delivery or transcoding risk matters.

---

# 13. Format-Specific Decision Rules

## 13.1 Stereo Streaming

Default priorities:

- translation across consumer playback
- controlled true peak
- stable mono fold-down
- loudness appropriate to intent
- no avoidable aliasing or limiter damage
- ASAMS target compliance

Do not optimize blindly for platform normalization. Normalization changes playback gain; it does not fix a damaged master.

## 13.2 Aggressive / Heavy Experimental Masters

For heavy Ghost Orgy-style material, accept that some discomfort, saturation, density, or violence may be intentional.

Do not remove:

- dread
- pressure
- ritual force
- useful ugliness
- physical unease
- intentional transient violence
- controlled harmonic aggression

Evaluate whether the discomfort is intentional identity or technical damage.

## 13.3 Dolby Atmos / Immersive

Do not apply stereo mastering assumptions blindly to immersive formats.

Avoid stereo-style brickwall limiting across bed/object channels. Preserve spatial dynamics and object relationships.

Validate:

- target loudness
- true peak
- bed/object routing
- binaural/spatial translation if relevant
- object dynamics
- whether master-bus processing collapses spatial intent

## 13.4 Vinyl-Oriented Masters

For vinyl-oriented delivery, preserve headroom and avoid excessive high-frequency harshness, extreme stereo low-end, or hyper-limited density that creates cutting problems.

Validate:

- mono-compatible low end
- controlled sibilance
- manageable side energy
- sufficient dynamic range
- no unnecessary sub-rumble

## 13.5 CD / Fixed-Point Exports

For fixed-point delivery:

- preserve high-resolution floating-point processing until final export.
- apply dither only once at final bit-depth reduction.
- confirm final peak and true-peak requirements.
- avoid repeated intermediate fixed-point bounces.

---

# 14. Neural And Offline Processing Constraints

## 14.1 Principle

Neural audio processing can model complex nonlinear behavior, but current neural emulation may struggle with latency, spectral integrity, and deterministic reliability.

Treat neural processing as an offline or experimental tool unless real-time performance, spectral preservation, and deterministic behavior are validated.

## 14.2 Audit Questions

Ask:

- Is the model operating offline or real-time?
- Does it preserve the frequency spectrum?
- Does it introduce unintended spectral loss?
- Does it preserve phase and transient behavior?
- Is the latency acceptable for the use case?
- Is output deterministic across runs?
- Can ASAMS verify the result?

## 14.3 Red Flags

Flag:

- neural EQ or effect emulation used where deterministic DSP is required.
- high-latency models in live or monitoring paths.
- models evaluated only with sample-domain MSE but not spectral loss or listening checks.
- neural stages that change identity unpredictably.
- lack of before/after spectrogram or ASAMS validation.

## 14.4 Safe Recommendation Pattern

Use traditional deterministic DSP as the default foundation for high-fidelity mastering decisions. Use neural tools only when:

- they are offline or latency-safe.
- the output can be measured.
- spectral integrity is checked.
- ASAMS validation passes.
- identity is preserved.

---

# 15. Recovery Mode Decision Rules

## 15.1 Recovery Labels

Use exactly these modes unless the user provides a different contract:

- **Accept**
- **Direct correction**
- **Repair light**
- **Repair**
- **Full rerender required**

## 15.2 Accept

Use when:

- ASAMS targets pass.
- translation risks are controlled.
- no serious phase, aliasing, headroom, or limiter issues are evident.
- identity is preserved.
- remaining concerns are optional refinements.

## 15.3 Direct Correction

Use when:

- a small deterministic adjustment is likely sufficient.
- topology is stable.
- no broad recovery pass is needed.
- downstream impact is predictable.

Examples:

- adjust final ceiling.
- reduce one stage’s makeup gain.
- enable oversampling on a known nonlinear stage.
- correct a small M/S low-end issue.

## 15.4 Repair Light

Use when:

- issue is real but bounded.
- identity risk is low.
- correction affects a limited stage range.
- rerender from scratch is not required.

Examples:

- mild low-mid cleanup.
- reduced limiter stress through clipper adjustment.
- limited phase-mode correction.
- targeted dynamic EQ adjustment.

## 15.5 Repair

Use when:

- multiple stages contribute to target drift.
- gain staging, phase, aliasing, or dynamics need coordinated correction.
- ASAMS compliance is materially compromised.
- identity damage is possible if corrected carelessly.

Examples:

- multiband crossover issues plus limiter overload.
- aliasing from several nonlinear stages.
- low-end phase collapse plus loudness instability.
- heavy compression flattening arc.

## 15.6 Full Rerender Required

Use when:

- topology is compromised.
- stage order is wrong enough that patching is unsafe.
- clipping or limiting damage is baked into source renders.
- ASAMS targets fail broadly.
- phase or aliasing issues are systemic.
- recovery would be more speculative than deterministic.

## 15.7 Recovery Explanation Pattern

Always include:

- selected mode
- primary reason
- evidence level
- downstream risk
- next validation step

Example:

> Recovery mode: repair_light. The likely issue is bounded limiter stress caused by upstream low-band gain. Reduce Stage 3 output or adjust low-band dynamic control, then rerun ASAMS and true-peak checks.

---

# 16. Ghost Orgy Identity Protection

## 16.1 Principle

Ghost Orgy identity is part of the acceptance criteria. The master should not become generically clean, polite, or flattened unless the user requests that direction.

The skill must preserve:

- pressure
- dread
- violence
- texture
- ritual force
- physicality
- unease
- intentional ugliness
- emotional arc
- sonic danger

## 16.2 Identity Damage Symptoms

Flag identity damage when a correction:

- removes teeth from transients.
- turns threat into gloss.
- weakens the center image.
- thins the low-end body.
- smooths out intentional saturation.
- reduces contrast too much.
- makes the track safer but less alive.
- makes loudness higher but impact lower.

## 16.3 Identity-Safe Language

Good:

- “This correction improves translation but may reduce ritual pressure; validate against identity before accepting.”
- “The harshness may be intentional aggression. Treat as damage only if ASAMS or fatigue checks fail.”
- “A cleaner high end is not automatically better if it weakens the track’s threat profile.”

Bad:

- “Make it smoother.”
- “Make it more professional.”
- “Remove all distortion.”
- “Brighten it for clarity.”

---

# 17. Audit Vocabulary

## 17.1 Use Precise Terms

Prefer:

- “likely aliasing risk”
- “phase coherency risk”
- “inter-stage headroom risk”
- “limiter stress”
- “state-trajectory risk”
- “ASAMS target drift”
- “identity damage”
- “mono fold-down risk”
- “pre-ringing risk”
- “minimum-phase accumulation”
- “hidden clipping risk”

Avoid vague terms unless translated:

- “mud” should become low-mid congestion, masking, phase conflict, or low-end buildup.
- “harsh” should become resonance, aliasing, clipping distortion, excessive upper-mid energy, or intentional aggression.
- “fog” should become precision risk, masking, phase smear, limiter flattening, transient erosion, or aliasing.
- “weak” should become reduced crest, low-end cancellation, limiter overwork, center loss, or arc flattening.

## 17.2 Evidence Labels

Use these labels when useful:

- **verified** — supported by measurements or known settings.
- **likely** — strongly suggested by topology or symptoms.
- **possible** — plausible but needs verification.
- **unknown** — required data is missing.
- **provisional** — recommendation can be useful but must be validated.

---

# 18. Red Flag Matrix

| Symptom | Likely Causes | First Checks | Safer First Move |
|---|---|---|---|
| brittle fizz | aliasing, clipping, exciters, limiter stress | oversampling, sine sweep, high-band gain | enable/test oversampling, reduce nonlinear drive |
| digital fog | masking, phase smear, overcompression, precision/render issues | low-mid spectrum, GR, phase, render depth | identify source, avoid generic high-shelf boosts |
| weak low end | phase cancellation, stereo sub, over-limiting, HPF overuse | mono fold-down, correlation, limiter GR | center true sub, reduce limiter stress |
| hollow punch | stacked crossovers, MP accumulation, LP pre-ringing | phase modes, crossover count, transient comparison | reduce crossover stacking or change phase mode |
| loud but flat | excessive limiting/compression | GR, crest factor, LRA, transients | serial peak management, reduce limiter work |
| harsh vocal/top | resonance, upper-mid build, aliasing, intentional aggression | dynamic EQ triggers, nonlinear stages | dynamic resonance control, verify identity |
| mono collapse | stereo low end, M/S overprocessing, phase mismatch | correlation, mono fold-down | reduce side low energy, align parallel paths |
| ASAMS drift | late-stage correction, overload, target conflict | score deltas, stage deltas | identify responsible stage, rerun scoring |

---

# 19. Safe Recommendation Patterns

## 19.1 Pattern: Missing Measurements

> This audit is provisional because [measurement/ASAMS target] is missing. Based on the chain topology, the primary risks are [risk list]. The next validation step is [specific measurement].

## 19.2 Pattern: Early-Stage Change

> This change should not be judged locally. Raising Stage [n] will likely affect [downstream stages] by [mechanism]. Approve only after rerunning [ASAMS / true peak / limiter GR / mono fold-down].

## 19.3 Pattern: Suspected Aliasing

> Treat this as an aliasing risk, not a confirmed failure, until oversampling or sine-sweep evidence is available. Check [stage], compare oversampling off/on at matched loudness, and verify whether high-end fizz decreases without transient damage.

## 19.4 Pattern: Phase Risk

> This is a cumulative phase-risk because [filters/crossovers] are stacked before [critical downstream stage]. Verify phase mode, mono fold-down, and transient behavior before approving.

## 19.5 Pattern: Identity Conflict

> The correction may improve conventional cleanliness but risks identity damage by reducing [pressure/dread/violence/texture]. Treat as blocked unless ASAMS confirms benefit or Jack chooses an artistic override.

---

# 20. Quick Checklist

Before finalizing an audit, confirm:

- ASAMS targets are present, missing, or marked provisional.
- stage topology is understood or unknowns are named.
- early-stage recommendations include downstream forecasts.
- nonlinear stages have oversampling status reviewed.
- phase modes are classified or marked unknown.
- low-end mono compatibility is tested or requested.
- limiter stress is considered.
- true peak is considered for delivery.
- dither is only recommended for final fixed-point export.
- neural/offline tools are treated cautiously.
- Ghost Orgy identity is protected.
- recovery mode is assigned when appropriate.
- every confident claim is supported by evidence.

---

# 21. Source Material Map

This reference distills the bundled source materials. When deeper source context is required, consult the raw files in `references/`:

- `Advanced Audio Engineering and Mastering_ A Comprehensive Briefing.md`
- `Elite Digital Audio Mastering_ A Technical DSP Reference Guide.md`
- `Technical Standards Manual_ High-Fidelity Signal Integrity in Digital Audio Production.md`
- `Mastering Clarity_ A Producer's Guide to Low-End Mud and Digital Aliasing.md`
- `Neural Synthesis vs. Traditional Digital Signal Processing_ A Software Evaluation Report.md`
- `Comparison of Audio Effects, Neural Network Models, and Processing Techniques - Table 1.csv`
- `Modern_Audio_Architecture.pdf`

Use source files for deeper background, but use this `references.md` as the skill’s condensed decision doctrine.