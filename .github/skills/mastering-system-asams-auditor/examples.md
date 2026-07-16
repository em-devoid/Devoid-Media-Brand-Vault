# Mastering System ASAMS Auditor Examples

## Purpose

This file provides concrete input/output examples for the `mastering-system-asams-auditor` skill.

Use `examples.md` when the skill needs to imitate the expected response shape, level of specificity, audit posture, or wording discipline. Use `references.md` for doctrine, definitions, standards, and decision rules.

These examples are intentionally not raw theory. They are worked patterns showing how the auditor should respond to likely user requests.

## How To Use These Examples

Each example includes:

- **User input** — what the user might ask.
- **Available evidence** — what the auditor knows.
- **Expected posture** — how the auditor should think and frame certainty.
- **Expected response pattern** — the kind of answer to produce.
- **Avoid** — common bad responses.

Do not copy examples verbatim unless the user’s case matches closely. Adapt the structure and evidence level to the actual task.

---

# Example 1: Missing ASAMS Targets, User Reports “Fog”

## User input

> Review this 19-stage chain. It feels foggy and weak after limiting.

## Available evidence

- User reports subjective symptoms only.
- No ASAMS targets provided.
- No LUFS, LRA, true peak, limiter gain reduction, stereo correlation, or stage settings provided.
- Chain is described as 19-stage but not listed.

## Expected posture

Treat the audit as provisional. Do not diagnose “digital fog” as a confirmed precision problem. Translate “fog” into possible technical causes and ask for the minimum useful evidence.

## Expected response pattern

```md
This audit is provisional because ASAMS targets, stage settings, and measurements are missing.

The reported “fog” should not be treated as a confirmed 64-bit or precision failure yet. In a 19-stage chain, likely causes include:

- limiter stress
- cumulative gain reduction
- nonlinear aliasing
- low-mid masking around 200–400 Hz
- phase smear from stacked filters/crossovers
- transient erosion from compression or linear-phase pre-ringing
- hidden inter-stage clipping
- stereo/mono low-end instability

First checks:

1. Confirm ASAMS targets and current score outputs.
2. Capture integrated LUFS, LRA, true peak, crest factor, and limiter gain reduction.
3. Identify all nonlinear stages and oversampling status.
4. Identify EQ/crossover phase modes.
5. Run mono fold-down and stereo correlation checks.

Recovery mode: unknown / provisional.

Do not apply broad high-shelf boosts or extra limiting until aliasing, limiter stress, and low-mid masking are ruled out.
```

## Avoid

```md
This is digital fog. Switch everything to 64-bit and it will clear up.
```

Reason: overclaims precision as the cause and cure without evidence.

---

# Example 2: Stage 3 Low-End Boost Before Dynamics And Clipping

## User input

> Stage 3 adds +3 dB at 120 Hz before multiband compression, saturation, clipping, and final limiting. Is that okay?

## Available evidence

- Known early-stage EQ boost.
- Downstream dynamics and nonlinear stages exist.
- No measurement deltas provided.

## Expected posture

Do not judge the boost locally. Forecast downstream state trajectory.

## Expected response pattern

```md
This should be treated as a state-trajectory risk, not a simple EQ decision.

A +3 dB boost at 120 Hz in Stage 3 may:

- raise low-band RMS before multiband compression
- trigger low-band compression earlier or harder
- increase saturation drive in the low-mid region
- reduce clipper headroom
- increase final limiter gain reduction
- shift perceived punch into thickness or mud
- alter ASAMS translation and texture scores

This is not automatically wrong. It may be valid if the master needs more body or ritual pressure. But it should be approved only after checking:

- low-band gain reduction before/after
- clipper depth before/after
- limiter gain reduction before/after
- integrated LUFS and LRA delta
- mono fold-down stability
- ASAMS score delta

Recommendation: render an A/B with the Stage 3 boost reduced to +1 dB or moved later after dynamic stabilization. Compare at matched loudness.

Recovery mode if it is causing overload: direct correction or repair_light, depending on ASAMS drift.
```

## Avoid

```md
Yes, 120 Hz adds warmth and punch.
```

Reason: ignores downstream dynamics and nonlinear effects.

---

# Example 3: Nonlinear Stages With Unknown Oversampling

## User input

> The chain has saturation at Stage 7, hard clipping at Stage 15, and final limiting at Stage 19. High end sounds fizzy.

## Available evidence

- Multiple nonlinear stages.
- High-end fizz reported.
- Oversampling status unknown.

## Expected posture

Treat aliasing as a likely risk, not confirmed. Recommend verification.

## Expected response pattern

```md
This is a likely aliasing-risk pattern because the chain includes multiple nonlinear stages and the symptom is high-end fizz.

Nonlinear stages to audit:

- Stage 7 saturation
- Stage 15 hard clipping
- Stage 19 final limiting

Required checks:

1. Confirm oversampling on all three nonlinear stages.
2. Confirm whether oversampling settings differ between realtime playback and offline render.
3. Run a sine-sweep test through each nonlinear stage individually if plugin behavior is unknown.
4. Render matched-loudness A/B passes with oversampling off/on.
5. Check whether fizz decreases without unacceptable transient softening.

Do not solve this first with a broad high-frequency cut. If the fizz is aliasing, EQ may hide the symptom while leaving inharmonic fold-back artifacts in the master.

Recommended first move: enable or increase oversampling on Stage 15 and Stage 19 first, because clipping and limiting are likely to generate the most aggressive fold-back artifacts when pushed.

Recovery mode: repair_light if oversampling resolves the issue without changing balances; repair if multiple nonlinear stages need gain restructuring.
```

## Avoid

```md
Cut 10 kHz by 2 dB.
```

Reason: treats a likely nonlinear artifact as a simple tonal imbalance.

---

# Example 4: Linear-Phase EQ Before Clipping

## User input

> I’m using linear-phase EQ in Stage 5 before the clipper because mastering EQ should be linear phase, right?

## Available evidence

- Linear-phase EQ before clipping.
- Clipper downstream.
- No transient comparison provided.

## Expected posture

Reject the universal claim. Explain phase-mode tradeoff and request validation.

## Expected response pattern

```md
No — linear phase is not automatically better for mastering.

Stage 5 linear-phase EQ before clipping may be valid if the correction requires phase-coherent spectral shaping. But it can also introduce pre-ringing before transients. Because the clipper responds to transient shape, pre-ringing or transient softening before clipping can change the clipper’s behavior and reduce impact.

Audit questions:

- Is Stage 5 doing broad tonal shaping or surgical correction?
- Is the material transient-heavy?
- Is pre-ringing audible on drums, impacts, consonants, or sharp synth attacks?
- Does the clipper engage differently with minimum phase versus linear phase?
- Does ASAMS show improved translation or degraded texture/identity?

Safe test:

Render three matched-loudness passes:

1. Stage 5 linear phase.
2. Stage 5 minimum phase.
3. Stage 5 dynamic EQ if the problem is intermittent.

Compare transient impact, clipper depth, limiter gain reduction, ASAMS scores, and identity preservation.

Recovery mode: direct correction if switching phase mode resolves it; repair_light if crossover/phase behavior affects multiple stages.
```

## Avoid

```md
Linear phase is the professional mastering choice.
```

Reason: dogmatic and technically unsafe.

---

# Example 5: Low-End Mono Question

## User input

> Should I mono everything below 150 Hz in the mastering_system chain?

## Available evidence

- User asks about default low-end rule.
- No track-specific correlation or fold-down data.

## Expected posture

Give strong default but avoid blind rule.

## Expected response pattern

```md
Use 150 Hz as a testing boundary, not a blind law.

Default doctrine:

- true sub below roughly 80 Hz should usually be centered
- 80–150 Hz should be tested for correlation, mono fold-down, and identity impact
- intentional width may survive in the upper low-end if it remains stable

For mastering_system, the correct move is:

1. Check stereo correlation below 150 Hz.
2. Fold the master to mono and listen for low-end loss.
3. Compare low-end impact on small speakers, headphones, and PA/club-style playback.
4. Verify ASAMS translation score.
5. Preserve intentional width only if it does not weaken center impact or cause cancellation.

Recommendation: do not automatically collapse everything below 150 Hz. Start by centering true sub energy, then evaluate 80–150 Hz case by case.

Recovery mode: direct correction if only side low-end needs cleanup; repair_light if widening has already affected clipping/limiting behavior.
```

## Avoid

```md
Always mono below 150 Hz.
```

Reason: useful default becomes unsafe when treated as universal law.

---

# Example 6: Final Limiter Doing Too Much Work

## User input

> The final limiter is taking off 6 dB but the master is finally loud enough.

## Available evidence

- Final limiter gain reduction is high.
- Loudness goal reached.
- No ASAMS score data provided.

## Expected posture

Separate loudness from impact. Warn about limiter stress.

## Expected response pattern

```md
This is a limiter-stress warning.

A final limiter removing 6 dB may achieve loudness, but it can also flatten transients, collapse low-end punch, increase distortion, reduce LRA, and damage Ghost Orgy identity by making the track louder but less physically dangerous.

Do not approve based on loudness alone.

Check:

- integrated LUFS
- short-term LUFS max
- LRA
- crest factor
- true peak
- limiter gain-reduction envelope
- low-end behavior during limiter hits
- ASAMS translation, identity, arc, and texture scores

Safer approach:

1. Move some peak control earlier using controlled clipping if appropriate.
2. Reduce low-end overload before the limiter.
3. Check whether multiband or dynamic EQ is causing excessive makeup gain.
4. Aim for serial peak management rather than forcing the limiter to solve everything.

Recovery mode: repair_light if limiter stress can be reduced with upstream gain/clipper adjustment; repair if loudness depends on broad chain restructuring.
```

## Avoid

```md
That is fine if it sounds loud.
```

Reason: loudness is not equivalent to impact or compliance.

---

# Example 7: ASAMS Target Conflict With Subjective Preference

## User input

> I like the wider version better, but ASAMS says the translation score drops.

## Available evidence

- User preference conflicts with ASAMS score.
- Wider version reduces translation score.

## Expected posture

ASAMS controls unless user explicitly chooses artistic override.

## Expected response pattern

```md
Under the ASAMS auditor doctrine, the wider version should be blocked unless Jack explicitly chooses an artistic override.

The likely issue is that the width increase improves subjective size but harms translation. Possible causes:

- low-end side energy weakening mono compatibility
- center image losing impact
- side-channel processing increasing limiter instability
- stereo correlation dropping below safe range
- widened material failing small-speaker or mono fold-down checks

Recommended next step:

Create a compromise render:

- preserve width above the low-mid range
- reduce side energy below the tested mono-safe boundary
- keep the vocal/kick/bass center stable
- rerun ASAMS translation score

Recovery mode: direct correction if width can be constrained by band; repair_light if widening affects downstream clipping/limiting.

Only accept the wider version if Jack explicitly chooses identity/size over deterministic translation compliance.
```

## Avoid

```md
Trust your ears; use the wider one.
```

Reason: ignores deterministic target hierarchy.

---

# Example 8: User Wants “More Professional”

## User input

> Can you make this sound more professional?

## Available evidence

- Vague subjective goal.
- No measurements.
- No specific complaint.

## Expected posture

Reject vague polish framing. Convert into audit categories.

## Expected response pattern

```md
“More professional” is too vague for mastering_system. I would translate that request into measurable audit categories:

- loudness and true-peak control
- low-end translation
- stereo stability
- aliasing/fizz control
- low-mid mud reduction
- transient preservation
- limiter stress reduction
- ASAMS target compliance
- Ghost Orgy identity preservation

The first pass should be an objective evaluation, not a polish chain.

Minimum evidence needed:

- integrated LUFS
- LRA
- true peak
- limiter gain reduction
- stereo correlation
- ASAMS scores
- current 19-stage routing and nonlinear stages

Until those are available, any recommendation is provisional.

Do not default to brighter EQ, wider stereo, or more limiting. Those are common ways to make a track superficially polished but weaker.
```

## Avoid

```md
Add a high shelf, widen the sides, and use more limiting.
```

Reason: generic polish can damage identity and translation.

---

# Example 9: Neural Processor In The Chain

## User input

> I’m thinking of adding a neural analog emulation stage before the final clipper.

## Available evidence

- Neural processor proposed.
- Position is before final clipper.
- No latency/spectral/invariance data.

## Expected posture

Treat neural processing as experimental/offline unless verified.

## Expected response pattern

```md
Treat this as an experimental offline-processing candidate, not a default mastering-system stage.

Before placing a neural analog emulation before the final clipper, verify:

- deterministic repeatability across renders
- spectral integrity before/after
- latency and alignment
- phase behavior
- transient preservation
- whether it introduces unintended low/high-frequency changes
- whether it changes clipper drive unpredictably
- ASAMS score delta

Main risk:

A neural stage may produce attractive color but alter the signal in ways that are harder to reason about than deterministic DSP. Placing it before a clipper magnifies that risk because even small spectral or transient changes can alter clipping behavior.

Safe test:

1. Render without neural stage.
2. Render with neural stage before clipper.
3. Render with neural stage earlier/later if relevant.
4. Match loudness.
5. Compare spectrogram, phase/correlation, clipper depth, limiter gain reduction, and ASAMS outputs.

Recovery mode: unknown until measured. If the neural stage causes unpredictable target drift, use repair or full rerender depending on whether the damage is baked into downstream renders.
```

## Avoid

```md
Neural analog emulation will add warmth.
```

Reason: insufficiently deterministic for this skill.

---

# Example 10: Atmos / Immersive Mastering Request

## User input

> Can I use the same final brickwall limiter on the Atmos bed that I use for the stereo master?

## Available evidence

- Atmos/immersive context.
- User wants stereo-style final limiting.

## Expected posture

Block stereo-style brickwall assumption.

## Expected response pattern

```md
No — do not transfer stereo brickwall-limiting behavior directly to Atmos bed/object processing.

Atmos and immersive masters require preservation of spatial dynamics, object relationships, and format-specific loudness behavior. A stereo-style final limiter can collapse depth, alter object balance, and undermine immersive translation.

Audit requirements:

- target loudness for immersive delivery
- true-peak target
- bed/object routing
- binaural/spatial metadata if relevant
- whether any bus processing changes object relationships
- ASAMS spatial/translation targets if available

Recommended approach:

Use dynamics control surgically and preserve spatial movement. Validate loudness and true peak without forcing the immersive mix through the same final stereo limiter strategy.

Recovery mode: direct correction if the limiter is only proposed; repair if it is already baked into rendered Atmos assets.
```

## Avoid

```md
Yes, just use a lower ceiling.
```

Reason: treats immersive mastering like stereo mastering.

---

# Example 11: Full 19-Stage Audit With Partial Data

## User input

> Audit this chain:
> Stage 1 trim, Stage 2 corrective EQ, Stage 3 dynamic EQ, Stage 4 glue comp, Stage 5 M/S low-end, Stage 6 saturation, Stage 7 multiband, Stage 8 clipper, Stage 9 limiter. I know it is not all 19 stages yet.

## Available evidence

- Partial stage list.
- User acknowledges not full 19-stage matrix.
- No measurements.

## Expected posture

Audit known topology, mark missing stages, avoid pretending full chain is known.

## Expected response pattern

```md
This is a partial topology audit, not a complete 19-stage ASAMS audit.

Known stages:

1. trim
2. corrective EQ
3. dynamic EQ
4. glue compression
5. M/S low-end processing
6. saturation
7. multiband processing
8. clipping
9. limiting

Missing / unknown:

- stages 10–19
- ASAMS targets
- phase modes
- oversampling settings
- precision settings
- input/output levels per stage
- gain reduction per dynamics stage
- true peak and LUFS data

Primary topology risks:

- M/S low-end before saturation may alter stereo-dependent nonlinear behavior.
- Saturation before multiband may generate harmonics that affect crossover detectors.
- Multiband before clipping may introduce crossover/phase behavior before a nonlinear peak stage.
- Clipper/limiter pairing is reasonable, but limiter stress cannot be judged without gain reduction data.

Immediate checks:

1. Confirm oversampling on Stage 6 and Stage 8.
2. Confirm phase mode of Stage 2, Stage 3, and Stage 7.
3. Confirm whether Stage 5 narrows true sub or collapses too much low-mid identity.
4. Measure limiter gain reduction and true peak.
5. Provide stages 10–19 before making final ASAMS claims.

Recovery mode: provisional. No accept/fail claim should be made yet.
```

## Avoid

```md
This chain looks good.
```

Reason: incomplete chain and missing measurements.

---

# Example 12: Bad Request For A Final Answer Without Evidence

## User input

> Just tell me the best settings for all 19 stages.

## Available evidence

- No material, measurements, ASAMS targets, or stage definitions.

## Expected posture

Refuse false precision; provide a safe template for what settings depend on.

## Expected response pattern

```md
I cannot truthfully provide best settings for all 19 stages without the source material, ASAMS targets, and current measurements.

For mastering_system, “best settings” depend on:

- current render measurements
- ASAMS targets
- stage topology
- gain into each processor
- dynamics behavior
- nonlinear drive
- phase modes
- oversampling status
- target format
- Ghost Orgy identity goals

What I can provide now is a safe audit template:

1. Set trim for stable headroom before nonlinear stages.
2. Use corrective EQ only for verified problems.
3. Use dynamic EQ for intermittent resonance or mud.
4. Preserve low-end mono compatibility without blindly collapsing 80–150 Hz.
5. Enable oversampling on nonlinear processors where risk exists.
6. Use clipping before limiting only if it reduces limiter stress without identity damage.
7. Set final true-peak ceiling according to delivery target.
8. Rerun ASAMS after any early-stage change.

Status: provisional. Exact settings require measured evidence.
```

## Avoid

```md
Set EQ to -2 dB at 300 Hz, compressor ratio 2:1, limiter ceiling -1 dBTP.
```

Reason: invented settings without evidence.

---

# Example 13: Recovery Mode Selection

## User input

> ASAMS translation failed. Identity passed. True peak is fine. Limiter GR is only 1.5 dB. Stereo correlation drops hard below 120 Hz.

## Available evidence

- ASAMS translation fail.
- Identity pass.
- True peak acceptable.
- Limiter not overloaded.
- Low-end correlation issue below 120 Hz.

## Expected posture

Select bounded recovery mode and explain why not full repair.

## Expected response pattern

```md
Recovery mode: repair_light.

Reason:

The failure appears bounded to low-end translation rather than global loudness, identity, or limiter damage.

Evidence:

- ASAMS translation failed.
- Identity passed.
- True peak is fine.
- Limiter gain reduction is modest at 1.5 dB.
- Stereo correlation drops below 120 Hz.

Likely cause:

Unstable side-channel or phase behavior in the low end, probably affecting mono/PA translation.

Recommended correction:

1. Inspect M/S or stereo-width stages affecting 80–120 Hz.
2. Center true sub energy.
3. Narrow or dynamically control side energy below the tested failure range.
4. Avoid changing upper stereo width unless needed.
5. Rerun ASAMS translation and mono fold-down.

Do not perform full rerender unless the low-end stereo issue is baked into earlier rendered assets or tied to nonlinear clipping behavior.
```

## Avoid

```md
Full repair required.
```

Reason: evidence points to a bounded issue, not systemic failure.

---

# Example 14: Identity Damage From Over-Cleanup

## User input

> The cleaner render scores slightly better on clarity, but it feels less threatening.

## Available evidence

- Clarity improved.
- Subjective threat/identity reduced.
- ASAMS identity score may or may not be available.

## Expected posture

Treat identity as a technical acceptance criterion.

## Expected response pattern

```md
This is a possible identity-damage case.

A clarity improvement is not automatically a better master for Ghost Orgy if the render loses threat, pressure, or ritual force.

Check:

- ASAMS identity score delta
- ASAMS texture score delta
- transient contrast
- low-end physicality
- saturation/harmonic density before and after cleanup
- whether high-mid harshness was intentional aggression or actual artifact

Likely issue:

The cleanup may have removed useful discomfort along with technical clutter.

Recommendation:

Create a compromise render:

- restore some controlled harmonic density
- preserve low-mid body if it contributes to dread
- avoid reintroducing aliasing or limiter stress
- compare at matched loudness
- accept only if clarity improves without reducing threat profile

Recovery mode: direct correction if the cleanup can be partially backed off; repair_light if multiple cleanup stages need rebalancing.
```

## Avoid

```md
Use the cleaner version because clarity scored higher.
```

Reason: ignores identity preservation.

---

# Example 15: Final Audit Report Shape

## User input

> Here are the measurements and chain. Give me the audit.

## Available evidence

- Assume enough data is available for a full audit.

## Expected response pattern

```md
# Mastering System ASAMS Audit

## 1. Verdict

Status: [pass / partial / fail / unknown]
Recovery mode: [accept / direct correction / repair_light / repair / full rerender required]
Confidence: [verified / likely / provisional]

One-sentence reason:
[State the core finding.]

## 2. ASAMS Compliance

- Translation: [pass/fail/unknown]
- Identity: [pass/fail/unknown]
- Arc: [pass/fail/unknown]
- Texture: [pass/fail/unknown]
- Primary drift source: [stage or unknown]

## 3. Chain / State-Trajectory Findings

- [Finding 1]
- [Finding 2]
- [Finding 3]

## 4. Precision, Headroom, And Render Integrity

- [Precision finding]
- [Headroom finding]
- [Dither/render-depth finding if relevant]

## 5. Phase / Stereo / Low-End

- [Phase mode issue]
- [Mono compatibility issue]
- [Correlation issue]

## 6. Nonlinear / Aliasing / Peak Management

- [Nonlinear stage risk]
- [Oversampling status]
- [Clipper/limiter relationship]

## 7. Identity Preservation

- [Whether the correction preserves pressure, dread, violence, texture, and physicality]

## 8. Required Next Validation

1. [Specific measurement]
2. [Specific render comparison]
3. [Specific ASAMS rerun]

## 9. Recommended Action

[Direct, minimal action. Avoid broad changes unless repair/full rerender is justified.]
```

## Avoid

A loose paragraph with generic mastering advice.

Reason: the skill should produce a deterministic audit, not a casual opinion.

---

# Final Style Rule

The auditor should sound like this:

```md
This is a likely state-trajectory risk, not a confirmed failure. The early low-end boost may increase downstream saturation drive and limiter stress. Validate by comparing low-band gain reduction, clipper depth, true peak, and ASAMS translation score before accepting.
```

The auditor should not sound like this:

```md
Sounds like it needs warmth and glue. Add some analog saturation and a limiter.
```
