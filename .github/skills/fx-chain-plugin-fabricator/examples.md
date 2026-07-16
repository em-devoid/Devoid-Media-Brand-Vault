# Examples for Plugin / Effect Chain Fabricator

This file shows example requests and the kind of outputs the **Plugin / Effect Chain Fabricator** skill should produce.

The Fabricator is for turning an approved concept into a **complete production packet**, not just a design spec.

---

## Example 1: Full plugin production packet

### User request
> Take this delay concept and turn it into a complete build packet with manual, whitepaper, QA checklist, and release notes.

### Expected response shape
The skill should produce:

1. **Product Identity**
   - Name
   - Tagline
   - One-sentence pitch
   - Target users
   - Positioning

2. **Scope Definition**
   - v1 scope
   - end-state scope
   - non-goals
   - constraints

3. **End-State Build Spec**
   - purpose
   - controls
   - modes
   - internal state
   - safety
   - precision and determinism rules

4. **DSP / Behavior Specification**
   - signal model
   - equations / laws
   - parameter interactions
   - guard logic

5. **Preset Architecture and Default Tuning**
   - default preset
   - preset banks
   - calibration table
   - tuning priorities

6. **Implementation Handoff**
   - roadmap
   - file/component plan
   - agent brief
   - definition of done

7. **User Instructions Manual**
   - quick start
   - control descriptions
   - workflows
   - troubleshooting

8. **Technical Whitepaper**
   - abstract
   - design philosophy
   - architecture
   - DSP overview
   - validation strategy

9. **QA / Validation Checklist**
   - sonic checks
   - safety checks
   - precision checks
   - regression checks

10. **Release Packet**
   - short description
   - long description
   - release notes draft
   - internal summary

### Why this is a good example
It shows the Fabricator doing the full job it is named for.

---

## Example 2: AM-native processor packet

### User request
> Fabricate a complete AM-native build packet for this mastering-system processor. It must preserve double precision and fit the repo’s telemetry/testing norms.

### Expected response shape
The skill should:
- preserve repo-native constraints
- treat the processor as native to the existing system
- include:
  - v1 and end-state scope
  - integration expectations
  - telemetry fields
  - testing expectations
  - implementation packet
  - manual
  - whitepaper
  - QA checklist
  - release packet

### Good output characteristics
- repo-aware
- double-precision aware
- deterministic where required
- avoids generic plugin-company assumptions

---

## Example 3: Effect-chain full packet

### User request
> Turn this haunted vocal chain into a finished product packet with stage docs, presets, user manual, and internal whitepaper.

### Expected response shape
The skill should produce:

1. **Chain Identity**
   - chain name
   - tagline
   - chain thesis

2. **Scope Definition**
   - v1 chain stages
   - future stages
   - constraints

3. **End-State Chain Spec**
   - stage list
   - stage order
   - stage purpose
   - macro controls
   - per-stage controls
   - inter-stage rules

4. **DSP / Behavior**
   - chain flow logic
   - low / medium / extreme behavior
   - stage interactions

5. **Preset Architecture**
   - usable chain presets
   - ritual/signature presets
   - extreme presets

6. **Implementation Handoff**
   - modular structure
   - phase plan
   - testing plan

7. **User Manual**
   - chain overview
   - stage explanations
   - quick-start workflows

8. **Whitepaper**
   - chain philosophy
   - architecture
   - signal-flow rationale

9. **QA Checklist**
   - stage-level checks
   - chain-level checks
   - gain staging checks

10. **Release Packet**
   - product description
   - release notes
   - internal summary

### Why this is a good example
It shows the Fabricator handling a **chain** as a complete product.

---

## Example 4: Docs packet only

### User request
> The engineering spec already exists. Generate the user manual, whitepaper, and release notes.

### Expected response shape
The skill should switch to a narrower mode and produce only:
- User Instructions Manual
- Technical Whitepaper
- Release Packet

It may also include:
- internal summary
- optional demo copy

### Why this matters
The Fabricator should be able to work from an existing concept/spec and generate the rest of the packet.

---

## Example 5: Agent packet only

### User request
> I just need the implementation packet for my coding agents.

### Expected response shape
The skill should produce:
- Scope Definition
- End-State Build Spec
- DSP / Behavior Specification
- Preset Architecture and Tuning
- Implementation Handoff
- QA / Validation Checklist

It may omit:
- manual
- whitepaper
- release copy

### Why this matters
The Fabricator should be able to output smaller packet modes, not just the entire bundle every time.

---

## Example 6: QA packet only

### User request
> Write the QA checklist and validation plan for this processor.

### Expected response shape
The skill should produce:
- sonic validation checklist
- parameter sanity checks
- safety checks
- determinism checks
- precision checks
- telemetry checks if relevant
- regression and performance checks

### Good output characteristics
- actually runnable
- specific
- tied to the product’s behavior
- not generic software QA filler

---

## Example 7: Release packet only

### User request
> Generate the release notes and product-page copy for this effect.

### Expected response shape
The skill should produce:
- short product description
- long product description
- release notes draft
- internal summary
- optional demo script or promo copy if useful

### Why this matters
The Fabricator should be able to support later-stage product packaging too.

---

## Example 8: Full packet from a rough concept

### User request
> We have an approved idea for a reverb that collapses inward instead of blooming outward. Turn it into a full product packet.

### Expected response shape
The Fabricator should:
- formalize the concept
- define v1 and end-state
- write the engineering packet
- write defaults and presets
- write the manual
- write the whitepaper
- write QA and release materials

### Good output characteristics
- the concept stays coherent across all sections
- the whitepaper and manual reflect the same product identity
- the QA plan matches the actual behavior

---

## Example request phrases this skill should understand
- “Turn this concept into a complete build packet.”
- “Fabricate the full implementation + docs + QA package.”
- “Give me the manual, whitepaper, and release notes for this processor.”
- “Produce the agent packet for this repo-native effect.”
- “Turn this effect chain into a complete product packet.”
- “Generate the validation and release packet.”
- “Package this approved concept for execution.”

---

## Anti-examples
These are requests the skill should **not** overcomplicate unless asked.

### Anti-example 1
> Give me five new plugin ideas.

This is better suited to the **Designer** skill.

### Anti-example 2
> Compare three effect concepts.

Also better suited to the **Designer** skill.

### Anti-example 3
> Help me come up with a name for this plugin.

This is ideation or design-first work, not fabrication.

---

## Summary
The Fabricator skill is best when the user wants:
- a complete implementation packet
- documentation
- QA/validation
- release materials
- a repeatable product package

It starts after the concept is approved or solid enough to package fully.

SCAR ECHO — END-STATE BUILD SPEC
Product name

Scar Echo

Tagline

Only echoes of soul remain.

Core product sentence

Scar Echo is a double-precision, stateful damage-delay processor in which each repeat inherits cumulative tonal, temporal, spatial, and textural injury from prior repeats.

1. PRODUCT INTENT

Scar Echo is not a normal delay and not merely a degradation effect inserted after a delay. It is a recursive injury system.

Its defining behavior is:

each repeat is derived from the previous repeat, not the dry source alone
damage accumulates according to bounded laws
the effect remains musically useful, mixable, and deterministic
the injury can be subtle enough for premium depth or extreme enough for signature destruction
all internal processing preserves double precision

The emotional promise:

memory decays
identity persists but returns altered
damage is cumulative, legible, and sculptable
2. POSITION INSIDE THE REPO

Scar Echo should be implemented as an AM-native processor/effect module under am_helper_toolings, following the existing processor/telemetry/test conventions already used in the mastering system.

It should support three deployment modes:

A. Direct processor mode

Used as a normal effect processor in a branch or effect lane.

B. Sandbox / alternate render mode

Used in exploratory renders or damage-branch generation.

C. Controlled chain-insert mode

Optional integration into the staged system when explicitly enabled by parameter/flag/config, never silently defaulted into doctrinal mastering behavior.

3. DESIGN PHILOSOPHY

Scar Echo must satisfy all of these simultaneously:

Musical
sounds inspiring at low settings
sounds dangerous at high settings
works on vocals, synths, drums, guitars, atmospheres, FX buses
Measurable
emits telemetry describing its internal damage state
exposes bounded, interpretable behavior
can be tested for safety and repeatability
Deterministic
same input + same parameters + same seed/state = same output
Warp and Fracture may feel unstable, but the instability must be controlled and repeatable in deterministic mode
Precision-safe
no float DSP path
no accidental float buffers
no hidden cast-down in helper utilities
all recursive memory states are maintained in double precision
Bounded
feedback is guarded
output is controlled
injury laws are capped
no silent runaway state explosion
4. HIGH-LEVEL ARCHITECTURE
4.1 Signal model

Scar Echo processes audio using:

dry input path
delay write path
feedback recirculation path
damage-law processing path
optional stereo/spatial injury path
output trim / guard path
telemetry extraction path

The key architecture rule:

The feedback path is the site of injury accumulation

Not the dry path.

That means:

input enters delay memory
delayed content is read
delayed content is transformed by injury laws
transformed content is mixed back into feedback memory
future repeats inherit prior injury

This is the entire product.

5. END-STATE FEATURE SET
5.1 Core controls
Required public parameters
delay_ms
sync_mode (free / note values if host timing exists in system)
feedback
mix
output_trim
damage
memory_loss
mode
stereo_spread
width_decay
tone_bias
motion
guard_amount
seed
deterministic_mode
5.2 Advanced controls
Injury shaping
hf_loss_rate
lf_mass_shift
saturation_curve
smear_amount
drift_depth
drift_rate
fracture_density
fracture_resolution
transient_rounding
echo_blur
echo_asymmetry
collapse_bias
Behavior controls
accumulation_curve
injury_cap
repeat_decay_model
memory_retention_curve
recall_from_dry
feedback_diffusion
tail_persistence
crossfeed_amount
duck_input_into_feedback
duck_feedback_into_input
Trigger / dynamic controls
input_threshold
transient_sensitivity
damage_follow_envelope
injury_on_transients_only
injury_on_sustains_only
5.3 Routing / processing options
mono
stereo
dual mono
linked stereo
ping-pong injury mode
mid/side injury mode
feedback cross-channel routing
6. MODE SYSTEM

The public top-level mode selector should include:

6.1 Rot

Injury profile:

progressive HF damping
slight low-mid thickening or body smear
soft nonlinear saturation increase
transient softening
spatial narrowing / image collapse over repeats
gentle temporal blur

Emotional result:

old tape memory
dying room
voice turning to residue

Best uses:

vocals
guitars
pads
dark dub
cinematic decay
6.2 Warp

Injury profile:

micro pitch drift
time wobble
feedback-path detuning
modulation-induced smear
unstable localization
phase bloom/collapse motion, bounded

Emotional result:

haunted tape
unstable reel
dream logic
recursive hallucination

Best uses:

leads
synths
ambient
sound design
Ghost Orgy material obviously
6.3 Fracture

Injury profile:

edge tearing
roughened repeats
controlled decimation or alias-like abrasions
partial discontinuity feel
increased grain, crack, splintering
possible stereo rupture asymmetry

Emotional result:

broken memory
shattered signal
violent recursive damage

Best uses:

drums
industrial
glitch
transitions
noise design
6.4 Advanced end-state modes

Later or full-build capable:

Hollow

Each repeat loses center/body first, leaving shell and hiss.

Ash

Each repeat burns into broadband dust/noise-soft residue.

Veil

Repeats become distant, filtered, phase-veiled, spatially obscured.

Collapse

Image and bandwidth close inward with each repeat; anti-bloom.

Soul

A curated macro mode combining Rot + Warp + subtle Fracture, designed around the brand line:
Only echoes of soul remain.

This one should probably become the flagship preset/mode bank, even if it is internally composited from sub-laws.

7. CORE DSP MODEL
7.1 Delay engine

Support:

free delay in milliseconds
sample-accurate double-precision delay line
optional tempo sync if system timing supports it
interpolation quality high enough to avoid ugly artifacts unless the selected mode intends them

Recommended internal delay topology:

double-precision circular buffer per channel
fractional read support
bounded interpolation strategy selectable internally by mode
clean modes: higher-order or smooth interpolation
Warp: still high quality, but modulation-aware
Fracture: may optionally swap to rougher bounded interpolation law
7.2 Feedback loop

Core recurrence:

delayed read -> injury law -> feedback gain -> write-back
optional dry injection weighting
optional crossfeed in stereo modes

General recurrence concept:

write = input_injection + guarded(feedback_processed_repeat)

Where:

input_injection can be influenced by ducking, recall, or routing modes
feedback_processed_repeat carries accumulated scar state
7.3 Scar state model

Per channel or linked pair, maintain a structured state:

scar_amount
memory_integrity
hf_loss
lf_smear
saturation_drive
transient_rounding
drift_phase
drift_depth_current
smear_state
fracture_amount
fracture_shape
stereo_width_integrity
collapse_amount
feedback_energy_est
est_repeat_count
last_excitation_level
guard_reduction_amount

These states are updated continuously or per repeat-event estimate, depending on implementation detail.

Important rule

Scar state may be updated:

per sample
per block with smoothing
or hybrid per-repeat-event estimation

But whichever method is used must preserve the audible truth:
successive repeats are meaningfully more injured.

8. DAMAGE LAW FORMALIZATION
8.1 Macro controls
damage

Global injury intensity scaler.

Affects:

accumulation speed
nonlinear depth
modulation depth
fracture emergence
width collapse
tone erosion
memory_loss

Controls how much original identity is forgotten each cycle.

Low:

same phrase, altered body

High:

phrase remains, identity erodes quickly

This should influence:

spectral retention
transient retention
timing retention
stereo retention
dry-memory injection weighting
8.2 Rot law

Each pass through feedback updates state approximately as:

increase hf_loss
increase saturation_drive
increase transient_rounding
decrease stereo_width_integrity
increase echo_blur

Bounded by injury_cap, guard_amount, and musical clamps.

Audible behavior:

top-end dims
saturation warms/thickens
edges soften
image narrows
tail clouds
8.3 Warp law

Each pass:

increase drift_depth_current
evolve drift_phase with deterministic oscillator/noise-hybrid movement
increase smear_state
optionally slightly perturb effective delay read time
slightly destabilize stereo relationship

Audible behavior:

chorusing-like wound
tape sickness
recursive wobble
subtle to severe detachment from fixed time

Hard bound:
Warp must never destabilize timing so much that repeats become unusable unless in explicit extreme preset ranges.

8.4 Fracture law

Each pass:

increase fracture_amount
roughen local waveform contour in bounded ways
increase controlled grit/decimation/abrasion
optionally introduce slight channel asymmetry
retain output ceiling safety

Audible behavior:

cracked edges
broken glass repeat texture
splintering tails
violent but mix-aware damage

Important:
Fracture must not just be “bitcrush slapped on feedback.”
It should feel recursive and cumulative.

9. SIGNAL PATH DETAILS
9.1 Proposed processing order inside feedback path

For most modes:

delay read
pre-conditioning / DC safety if repo conventions require
mode-specific tone erosion
saturation / nonlinear stage
timing smear / drift stage
fracture / abrasion stage
stereo integrity / collapse stage
feedback gain
output guard / trim
write-back

This order may vary by mode, but it should remain conceptually stable.

9.2 Saturation model

Should use an existing AM-compatible nonlinear strategy if one already exists nearby in helper toolings.

Requirements:

double precision
smooth
bounded
musically useful at low levels
not alias-spitty unless Fracture intentionally permits controlled roughness

Potential saturation styles:

soft clip
tanh-like
cubic softening
asymmetrical mild tape/valve-esque transfer
switchable curve if existing infra allows
9.3 Smear / blur model

Should allow:

micro diffusion
transient rounding
short FIR/IIR blur behavior
temporal spreading without losing determinism

Best used in:

Rot
Warp
Soul
9.4 Fracture model

Possible bounded methods:

smooth decimation with controlled interpolation sabotage
wave-fold micro abrasions
sample-edge contour roughening
partial random-but-seeded sign/edge perturbation
grit injection shaped by signal level and state

Must remain bounded and measurable.

9.5 Stereo injury model

Should support:

width decay
cross-channel contamination
asymmetry emergence
mono pressure / inward collapse
optional ping-pong rupture

Metrics should expose:

width change
crossfeed amount
asymmetry score
collapse score
10. DETERMINISM MODEL

Scar Echo should support two behavioral modes:

10.1 Deterministic mode
seeded
fully repeatable
required for testing and validation
default for CI and non-interactive validation
10.2 Expressive mode
may still be seeded internally
can optionally vary initialization or internal modulation slightly per invocation if product UX ever calls for it
not default in automated pipelines

For AM integration, deterministic should remain the default safe posture.

11. PRECISION REQUIREMENTS

Hard rule:

All internal Scar Echo DSP must preserve double precision.

That includes:

sample processing
delay buffers
feedback buffers
accumulators
oscillators/modulators
state variables
saturation internals
telemetry calculations until export boundary

Forbidden:

float delay memory
float-only fracture helper
float modulation LFO
accidental downcast via utility wrapper
mixed-precision shortcuts inside feedback core

Acceptable:

explicit cast at telemetry/UI/export boundary only if contract requires it
12. PARAMETER SPEC
12.1 Core parameter ranges
delay_ms
range: 1 to 4000 ms
skewed for useful short-delay resolution
optionally wider if repo patterns allow
feedback
range: 0.0 to safe-capped max
likely cap around 0.95 to 0.99 unless guarded mode explicitly supports higher
mapping should emphasize useful musical zone
mix
0 to 1
output_trim
dB or linear, depending existing conventions
enough range to compensate for dense tails
damage
0 to 1 or 0 to 100 normalized internally
nonlinear mapping recommended for fine low-end control
memory_loss
0 to 1
affects retention curve
mode
enum
motion
0 to 1
governs Warp and some Soul movement depth
guard_amount
0 to 1
how aggressively output/feedback safety reins in escalating states
seed
integer or normalized deterministic seed
deterministic_mode
bool
13. TELEMETRY SPEC

Scar Echo should emit telemetry that makes it inspectable and useful inside AM.

13.1 Required fields
scar_echo_mode
scar_echo_delay_ms
scar_echo_feedback
scar_echo_mix
scar_echo_damage
scar_echo_memory_loss
scar_echo_motion
scar_echo_output_trim
scar_echo_est_repeat_count
scar_echo_feedback_energy
scar_echo_hf_loss
scar_echo_saturation_drive
scar_echo_drift
scar_echo_smear
scar_echo_fracture
scar_echo_width_integrity
scar_echo_collapse_amount
scar_echo_guard_reduction
scar_echo_output_peak
scar_echo_output_rms
scar_echo_deterministic_mode
scar_echo_seed
13.2 Nice-to-have fields
scar_echo_transient_rounding
scar_echo_asymmetry_score
scar_echo_tail_persistence
scar_echo_input_threshold_hits
scar_echo_injury_cap_hits
scar_echo_guard_events
13.3 Telemetry design rule

Telemetry should reflect:

parameter settings
internal state summary
safety interventions
audible injury profile

Not just dumb parameter echo.

14. PRESET / PERSONALITY SYSTEM
Factory macro presets
Only Echoes
Soul Remains
Rot Chapel
Wounded Tape
Veiled Return
Broken Memory
Ash Repeater
Collapsed Choir
Splinter Dub
Ritual Slap
Dying Halo
Fractured Confession
Functional preset classes
Utility
subtle vocal thickener
premium slap with memory wear
darkened stereo repeat
analog-ish decay
Character
tape ruin
pitch-sick echo
cracked snare room
collapsing pad trail
Extreme
recursive shatter
annihilated feedback
ghost image collapse
soul remains
15. UI/CONTROL SURFACE SPEC

Even if AM-native and not a commercial UI yet, the control grouping should be defined.

15.1 Basic view
Delay
Feedback
Mix
Damage
Memory Loss
Mode
Output Trim
15.2 Advanced view
Tone
HF loss rate
tone bias
transient rounding
saturation curve
Motion
motion
drift depth
drift rate
smear amount
Fracture
fracture density
fracture resolution
asymmetry
Space
stereo spread
width decay
crossfeed
collapse bias
Safety
guard amount
injury cap
deterministic mode
seed
16. FILE / COMPONENT RECOMMENDATION

Your agents should adapt this to actual repo conventions, but the full-build conceptually needs:

scar_echo.h
scar_echo.c
scar_echo_params.h
scar_echo_telemetry.h
scar_echo_test.c
optional scar_echo_presets.* if repo supports processor preset defs
integration touchpoints in:
processor registration
chain/sandbox routing
telemetry emission
test harness
docs

If the repo prefers fewer files, combine accordingly.
Do not force this exact split if existing AM conventions differ.

17. TEST SPEC
17.1 Required functional tests
dry pass correctness when mix=0
wet-only correctness when dry is bypassed
repeat generation with nonzero feedback
repeat spacing matches configured delay
repeat energy decays or remains bounded under safety constraints
deterministic repeatability with same seed
silence behavior
stereo linking/dual-mono correctness
parameter change smoothing or bounded transition behavior
no NaN/Inf under extreme legal parameter ranges
17.2 Required mode tests
Rot
HF loss increases across repeats
transient sharpness decreases across repeats
width integrity decreases within bound
Warp
drift increases but remains capped
modulation remains deterministic when enabled
delay time perturbation stays bounded
Fracture
roughness metric increases across repeats
output remains bounded
fracture accumulation responds to damage
17.3 Precision tests
ensure buffers are double precision
ensure state structs are double precision where appropriate
ensure no hidden float-only helper path
low-level signal preservation behaves smoothly
long-tail behavior does not collapse from numeric coarsening
17.4 Telemetry tests
fields emit under active processing
values track state changes sensibly
deterministic mode/seed reflected correctly
guard/cap events are reported when triggered
17.5 Safety stress tests
max legal feedback + high damage
long delay + high motion
fracture extreme
abrupt input transients
stereo asymmetry edge cases

All must remain bounded and finite.

18. SAFETY / GUARDRAIL SPEC

Scar Echo must include:

output guard
feedback safety cap
state cap for damage dimensions
anti-NaN/anti-Inf protection
modulation clipping
interpolation boundary safety
delay index wrap safety
optional DC handling per repo norms
Guard philosophy

The user should be able to push Scar Echo hard, but not accidentally turn the processor into numeric ruin unless an explicitly labeled destructive mode is added later.

19. PERFORMANCE REQUIREMENTS

Even end-state, Scar Echo should remain efficient enough for branch use and repeat experimentation.

Performance goals:

no absurd allocation churn
buffers allocated once / reused
block-friendly processing
deterministic branch fast enough for iterative renders

Expensive spectral work is intentionally absent from Scar Echo.
That belongs to a later Ghostprint/Possession-type processor.

20. INTEGRATION STRATEGY
Phase 1

Implement Scar Echo as a standalone AM-native processor module in helper toolings.

Phase 2

Wire telemetry and tests.

Phase 3

Expose in sandbox/branch render flows.

Phase 4

Add preset banks and optional advanced controls.

Phase 5

Consider doctrinally safe chain insert points only if the effect proves musically and operationally valuable.

21. PRODUCT COPY / INTERNAL DESCRIPTION
Short description

A recursive damage delay where each repeat returns more wounded than the last.

Long description

Scar Echo is a double-precision AM-native processor that turns delay into memory erosion. Repeats darken, drift, blur, crack, collapse, and deform according to bounded injury laws, producing echoes that preserve identity while progressively shedding integrity. Only echoes of soul remain.

22. WHAT NOT TO DO

Your agents should not:

build a standalone VST shell first
overcomplicate v1 with spectral transfer
attach a giant modulation matrix
add unrelated refactors
sneak in float utilities
mistake Fracture for generic bitcrush
mistake Warp for generic chorus
mistake Rot for generic lowpass delay

Those are all failures of identity.

23. IMPLEMENTATION BRIEF FOR AGENTS

Paste this exact block to them:

Build Scar Echo as a full AM-native, double-precision, stateful damage-delay processor in am_helper_toolings.

Identity:
Scar Echo = a recursive injury delay where each repeat inherits cumulative tonal, temporal, spatial, and textural damage from prior repeats.
Tagline: Only echoes of soul remain.

Hard constraints:
- Preserve double precision throughout DSP path, buffers, state, feedback, and modulators.
- Reuse existing AM processor/test/telemetry conventions.
- No standalone plugin wrapper.
- No GUI work.
- No speculative refactor outside what Scar Echo needs.
- Keep behavior deterministic when deterministic_mode is enabled.

Required public parameters:
delay_ms, sync_mode, feedback, mix, output_trim, damage, memory_loss, mode, stereo_spread, width_decay, tone_bias, motion, guard_amount, seed, deterministic_mode

Required modes:
rot, warp, fracture
Optional if easy within repo patterns: soul

Core internal state should include:
scar_amount, memory_integrity, hf_loss, lf_smear, saturation_drive, transient_rounding, drift_phase, drift_depth_current, smear_state, fracture_amount, fracture_shape, stereo_width_integrity, collapse_amount, feedback_energy_est, est_repeat_count, guard_reduction_amount

Required behavior:
- feedback path is where injury accumulates
- repeat N must inherit transformed state from repeat N-1
- Rot darkens/softens/narrows/saturates across repeats
- Warp introduces bounded deterministic pitch/time instability across repeats
- Fracture introduces bounded recursive roughness/abrasion across repeats
- Output and feedback must remain bounded and guarded

Required telemetry:
scar_echo_mode
scar_echo_delay_ms
scar_echo_feedback
scar_echo_mix
scar_echo_damage
scar_echo_memory_loss
scar_echo_motion
scar_echo_output_trim
scar_echo_est_repeat_count
scar_echo_feedback_energy
scar_echo_hf_loss
scar_echo_saturation_drive
scar_echo_drift
scar_echo_smear
scar_echo_fracture
scar_echo_width_integrity
scar_echo_collapse_amount
scar_echo_guard_reduction
scar_echo_output_peak
scar_echo_output_rms
scar_echo_deterministic_mode
scar_echo_seed

Required tests:
- dry pass correctness
- wet/repeat generation
- delay timing correctness
- accumulation across repeats
- Rot hf loss progression
- Warp drift boundedness
- Fracture output boundedness
- deterministic repeatability
- silence behavior
- no NaN/Inf
- double precision preservation
- telemetry emission sanity

Deliver:
1. changed file list
2. exact files added/modified
3. concise DSP architecture summary
4. precision preservation explanation
5. telemetry fields added
6. tests added
7. known limitations
24. MY HONEST TAKE

You were right. You were asking for the end-state build mind, not a timid starter brief.

This is the real thing:

product identity
DSP philosophy
architecture
precision rule
modes
telemetry
tests
integration strategy

This is enough to direct strong agents without them inventing the product for you.

The next thing I’d do is write the mode equations and parameter interaction matrix so they can implement with less ambiguity.


SCAR ECHO — MODE EQUATIONS + PARAMETER INTERACTION MATRIX
1. Core processing model

At a high level, each sample/block does this:

Signal recurrence

For each channel:

𝑦
𝑑
𝑒
𝑙
𝑎
𝑦
(
𝑛
)
=
𝑅
𝑒
𝑎
𝑑
𝐷
𝑒
𝑙
𝑎
𝑦
(
𝑏
𝑢
𝑓
𝑓
𝑒
𝑟
,
𝑡
𝑟
𝑒
𝑎
𝑑
)
y
delay
	​

(n)=ReadDelay(buffer,t
read
	​

)
𝑦
𝑖
𝑛
𝑗
𝑢
𝑟
𝑒
𝑑
(
𝑛
)
=
𝐼
𝑛
𝑗
𝑢
𝑟
𝑦
𝑀
𝑜
𝑑
𝑒
𝑙
(
𝑦
𝑑
𝑒
𝑙
𝑎
𝑦
(
𝑛
)
,
𝑆
(
𝑛
)
,
𝑃
)
y
injured
	​

(n)=InjuryModel(y
delay
	​

(n),S(n),P)
𝑦
𝑔
𝑢
𝑎
𝑟
𝑑
𝑒
𝑑
(
𝑛
)
=
𝐺
𝑢
𝑎
𝑟
𝑑
(
𝑦
𝑖
𝑛
𝑗
𝑢
𝑟
𝑒
𝑑
(
𝑛
)
,
𝑆
(
𝑛
)
,
𝑃
)
y
guarded
	​

(n)=Guard(y
injured
	​

(n),S(n),P)
𝑏
𝑢
𝑓
𝑓
𝑒
𝑟
𝑤
𝑟
𝑖
𝑡
𝑒
(
𝑛
)
=
𝐼
𝑛
𝑝
𝑢
𝑡
𝐼
𝑛
𝑗
𝑒
𝑐
𝑡
𝑖
𝑜
𝑛
(
𝑥
(
𝑛
)
,
𝑃
,
𝑆
(
𝑛
)
)
+
𝑓
𝑒
𝑒
𝑑
𝑏
𝑎
𝑐
𝑘
⋅
𝑦
𝑔
𝑢
𝑎
𝑟
𝑑
𝑒
𝑑
(
𝑛
)
buffer
write
	​

(n)=InputInjection(x(n),P,S(n))+feedback⋅y
guarded
	​

(n)
𝑜
𝑢
𝑡
(
𝑛
)
=
𝐷
𝑟
𝑦
𝑀
𝑖
𝑥
(
𝑥
(
𝑛
)
,
𝑚
𝑖
𝑥
)
+
𝑊
𝑒
𝑡
𝑀
𝑖
𝑥
(
𝑦
𝑔
𝑢
𝑎
𝑟
𝑑
𝑒
𝑑
(
𝑛
)
,
𝑚
𝑖
𝑥
)
out(n)=DryMix(x(n),mix)+WetMix(y
guarded
	​

(n),mix)

Where:

P = parameter set
S(n) = current scar state
feedback is bounded
InjuryModel is mode-dependent
all math remains in double
2. Scar state vector

Define a persistent state struct per channel or linked stereo pair:

𝑆
=
{
𝑠
𝑠
𝑐
𝑎
𝑟
,
𝑠
𝑚
𝑒
𝑚
,
𝑠
ℎ
𝑓
,
𝑠
𝑙
𝑓
,
𝑠
𝑠
𝑎
𝑡
,
𝑠
𝑡
𝑟
,
𝑠
𝑑
𝑟
𝑖
𝑓
𝑡
,
𝜙
𝑑
𝑟
𝑖
𝑓
𝑡
,
𝑠
𝑠
𝑚
𝑒
𝑎
𝑟
,
𝑠
𝑓
𝑟
𝑎
𝑐
𝑡
,
𝑠
𝑤
𝑖
𝑑
𝑡
ℎ
,
𝑠
𝑐
𝑜
𝑙
𝑙
𝑎
𝑝
𝑠
𝑒
,
𝑠
𝑒
𝑛
𝑒
𝑟
𝑔
𝑦
,
𝑠
𝑟
𝑒
𝑝
𝑒
𝑎
𝑡
𝑠
,
𝑠
𝑔
𝑢
𝑎
𝑟
𝑑
}
S={s
scar
	​

,s
mem
	​

,s
hf
	​

,s
lf
	​

,s
sat
	​

,s
tr
	​

,s
drift
	​

,ϕ
drift
	​

,s
smear
	​

,s
fract
	​

,s
width
	​

,s
collapse
	​

,s
energy
	​

,s
repeats
	​

,s
guard
	​

}

Meaning:

s_scar = overall accumulated injury
s_mem = memory integrity
s_hf = high-frequency retention loss
s_lf = low-frequency mass smear
s_sat = saturation drive state
s_tr = transient rounding
s_drift = drift depth
phi_drift = drift phase
s_smear = temporal blur
s_fract = fracture amount
s_width = stereo width integrity
s_collapse = inward image collapse
s_energy = feedback energy estimate
s_repeats = estimated repeat progression
s_guard = cumulative guard intervention
3. Global parameter mappings

These should be normalized internally first.

Let:

D = damage in [0,1]
M = memory_loss in [0,1]
F = feedback in [0,1]
W = motion in [0,1]
C = guard_amount in [0,1]
T = tone_bias in [-1,1] or remapped equivalent
WD = width_decay in [0,1]
SP = stereo_spread in [0,1]
Recommended nonlinear mapping

Agents should not use linear raw knobs for all behavior.

Suggested transforms:

𝐷
′
=
𝐷
1.5
D
′
=D
1.5
𝑀
′
=
𝑀
1.25
M
′
=M
1.25
𝑊
′
=
𝑊
1.75
W
′
=W
1.75
𝐹
′
=
𝑐
𝑙
𝑎
𝑚
𝑝
(
𝐹
,
0
,
𝐹
𝑚
𝑎
𝑥
)
F
′
=clamp(F,0,F
max
	​

)

This gives more fine control in subtle zones.

4. Global scar accumulation law

Scar accumulation should not just be “add damage every sample.”
It should grow as a function of feedback persistence, signal energy, and memory loss.

Core accumulation increment
Δ
𝑠
𝑠
𝑐
𝑎
𝑟
=
𝑘
𝑠
𝑐
𝑎
𝑟
⋅
𝐷
′
⋅
(
0.35
+
0.65
𝐹
′
)
⋅
(
0.25
+
0.75
𝐸
𝑛
𝑜
𝑟
𝑚
)
⋅
(
0.5
+
0.5
𝑀
′
)
Δs
scar
	​

=k
scar
	​

⋅D
′
⋅(0.35+0.65F
′
)⋅(0.25+0.75E
norm
	​

)⋅(0.5+0.5M
′
)

Where:

k_scar is mode-tuned
E_norm is normalized feedback-path energy estimate

Then:

𝑠
𝑠
𝑐
𝑎
𝑟
(
𝑛
+
1
)
=
𝑐
𝑙
𝑎
𝑚
𝑝
(
𝑠
𝑠
𝑐
𝑎
𝑟
(
𝑛
)
+
Δ
𝑠
𝑠
𝑐
𝑎
𝑟
−
𝑟
𝑠
𝑐
𝑎
𝑟
,
0
,
𝑠
𝑐
𝑎
𝑟
𝑐
𝑎
𝑝
)
s
scar
	​

(n+1)=clamp(s
scar
	​

(n)+Δs
scar
	​

−r
scar
	​

,0,scar
cap
	​

)

Where:

r_scar is optional slow recovery/leak term
scar_cap bounded by injury_cap
Memory integrity decay
Δ
𝑠
𝑚
𝑒
𝑚
=
−
𝑘
𝑚
𝑒
𝑚
⋅
𝐷
′
⋅
𝑀
′
⋅
(
0.4
+
0.6
𝐹
′
)
Δs
mem
	​

=−k
mem
	​

⋅D
′
⋅M
′
⋅(0.4+0.6F
′
)
𝑠
𝑚
𝑒
𝑚
(
𝑛
+
1
)
=
𝑐
𝑙
𝑎
𝑚
𝑝
(
𝑠
𝑚
𝑒
𝑚
(
𝑛
)
+
Δ
𝑠
𝑚
𝑒
𝑚
,
𝑚
𝑒
𝑚
𝑚
𝑖
𝑛
,
1.0
)
s
mem
	​

(n+1)=clamp(s
mem
	​

(n)+Δs
mem
	​

,mem
min
	​

,1.0)

Interpretation:

s_mem = 1 means repeat still remembers itself
lower values mean identity is being lost
5. Repeat estimation law

This is useful for telemetry and for per-repeat shaping.

A simple energy-driven repeat estimate:

𝑠
𝑟
𝑒
𝑝
𝑒
𝑎
𝑡
𝑠
(
𝑛
+
1
)
=
{
𝑠
𝑟
𝑒
𝑝
𝑒
𝑎
𝑡
𝑠
(
𝑛
)
+
𝛼
𝑟
	
if 
𝐸
𝑓
𝑏
>
𝜃
𝑟


max
⁡
(
0
,
𝑠
𝑟
𝑒
𝑝
𝑒
𝑎
𝑡
𝑠
(
𝑛
)
−
𝛽
𝑟
)
	
otherwise
s
repeats
	​

(n+1)={
s
repeats
	​

(n)+α
r
	​

max(0,s
repeats
	​

(n)−β
r
	​

)
	​

if E
fb
	​

>θ
r
	​

otherwise
	​


Or more simply, increment at each detected echo peak if existing AM infra supports peak/event tracking.

This does not need to be perfect. It just needs to track “how far down the recursive wound path we are.”

6. Mode equations
6.1 ROT
Intent

Rot should sound like:

darkening memory
softening edge
warm decay
inward narrowing
persistent but wounded identity
State updates
Δ
𝑠
ℎ
𝑓
=
𝑘
ℎ
𝑓
𝑟
𝑜
𝑡
⋅
𝐷
′
⋅
(
0.4
+
0.6
𝑀
′
)
⋅
(
0.5
+
0.5
𝐹
′
)
Δs
hf
	​

=k
hf
rot
	​

⋅D
′
⋅(0.4+0.6M
′
)⋅(0.5+0.5F
′
)
Δ
𝑠
𝑠
𝑎
𝑡
=
𝑘
𝑠
𝑎
𝑡
𝑟
𝑜
𝑡
⋅
𝐷
′
⋅
(
0.3
+
0.7
𝐹
′
)
Δs
sat
	​

=k
sat
rot
	​

⋅D
′
⋅(0.3+0.7F
′
)
Δ
𝑠
𝑡
𝑟
=
𝑘
𝑡
𝑟
𝑟
𝑜
𝑡
⋅
𝐷
′
⋅
(
0.4
+
0.6
𝑀
′
)
Δs
tr
	​

=k
tr
rot
	​

⋅D
′
⋅(0.4+0.6M
′
)
Δ
𝑠
𝑐
𝑜
𝑙
𝑙
𝑎
𝑝
𝑠
𝑒
=
𝑘
𝑐
𝑜
𝑙
𝑟
𝑜
𝑡
⋅
𝐷
′
⋅
𝑊
𝐷
Δs
collapse
	​

=k
col
rot
	​

⋅D
′
⋅WD
Δ
𝑠
𝑠
𝑚
𝑒
𝑎
𝑟
=
𝑘
𝑠
𝑚
𝑒
𝑎
𝑟
𝑟
𝑜
𝑡
⋅
𝐷
′
⋅
(
0.25
+
0.75
𝑀
′
)
Δs
smear
	​

=k
smear
rot
	​

⋅D
′
⋅(0.25+0.75M
′
)

Then:

𝑠
ℎ
𝑓
←
𝑐
𝑙
𝑎
𝑚
𝑝
(
𝑠
ℎ
𝑓
+
Δ
𝑠
ℎ
𝑓
,
0
,
ℎ
𝑓
𝑐
𝑎
𝑝
)
s
hf
	​

←clamp(s
hf
	​

+Δs
hf
	​

,0,hf
cap
	​

)
𝑠
𝑠
𝑎
𝑡
←
𝑐
𝑙
𝑎
𝑚
𝑝
(
𝑠
𝑠
𝑎
𝑡
+
Δ
𝑠
𝑠
𝑎
𝑡
,
0
,
𝑠
𝑎
𝑡
𝑐
𝑎
𝑝
)
s
sat
	​

←clamp(s
sat
	​

+Δs
sat
	​

,0,sat
cap
	​

)
𝑠
𝑡
𝑟
←
𝑐
𝑙
𝑎
𝑚
𝑝
(
𝑠
𝑡
𝑟
+
Δ
𝑠
𝑡
𝑟
,
0
,
𝑡
𝑟
𝑐
𝑎
𝑝
)
s
tr
	​

←clamp(s
tr
	​

+Δs
tr
	​

,0,tr
cap
	​

)
𝑠
𝑐
𝑜
𝑙
𝑙
𝑎
𝑝
𝑠
𝑒
←
𝑐
𝑙
𝑎
𝑚
𝑝
(
𝑠
𝑐
𝑜
𝑙
𝑙
𝑎
𝑝
𝑠
𝑒
+
Δ
𝑠
𝑐
𝑜
𝑙
𝑙
𝑎
𝑝
𝑠
𝑒
,
0
,
𝑐
𝑜
𝑙
𝑐
𝑎
𝑝
)
s
collapse
	​

←clamp(s
collapse
	​

+Δs
collapse
	​

,0,col
cap
	​

)
𝑠
𝑠
𝑚
𝑒
𝑎
𝑟
←
𝑐
𝑙
𝑎
𝑚
𝑝
(
𝑠
𝑠
𝑚
𝑒
𝑎
𝑟
+
Δ
𝑠
𝑠
𝑚
𝑒
𝑎
𝑟
,
0
,
𝑠
𝑚
𝑒
𝑎
𝑟
𝑐
𝑎
𝑝
)
s
smear
	​

←clamp(s
smear
	​

+Δs
smear
	​

,0,smear
cap
	​

)
Audio transforms
HF loss filter coefficient
𝑔
ℎ
𝑓
=
𝑒
𝑥
𝑝
(
−
𝑎
ℎ
𝑓
⋅
𝑠
ℎ
𝑓
)
g
hf
	​

=exp(−a
hf
	​

⋅s
hf
	​

)

Use g_hf to drive a lowpass or tilt darkening stage.

Saturation drive
𝑑
𝑟
𝑖
𝑣
𝑒
𝑟
𝑜
𝑡
=
1
+
𝑎
𝑠
𝑎
𝑡
⋅
𝑠
𝑠
𝑎
𝑡
drive
rot
	​

=1+a
sat
	​

⋅s
sat
	​

Transient rounding

Use s_tr to crossfade between:

normal signal
slightly smoothed / softened signal
Collapse
𝑤
𝑖
𝑑
𝑡
ℎ
𝑒
𝑓
𝑓
=
1
−
𝑎
𝑤
𝑖
𝑑
𝑡
ℎ
⋅
𝑠
𝑐
𝑜
𝑙
𝑙
𝑎
𝑝
𝑠
𝑒
width
eff
	​

=1−a
width
	​

⋅s
collapse
	​

Rot summary

Rot is basically:

darker
thicker
softer
narrower
blurrier
with each repeat.
6.2 WARP
Intent

Warp should sound like:

unstable time memory
pitch sickening
recursive wobble
hallucinated motion
detachment from fixed identity
State updates
Δ
𝑠
𝑑
𝑟
𝑖
𝑓
𝑡
=
𝑘
𝑑
𝑟
𝑖
𝑓
𝑡
𝑤
𝑎
𝑟
𝑝
⋅
𝐷
′
⋅
𝑊
′
⋅
(
0.3
+
0.7
𝐹
′
)
Δs
drift
	​

=k
drift
warp
	​

⋅D
′
⋅W
′
⋅(0.3+0.7F
′
)
Δ
𝑠
𝑠
𝑚
𝑒
𝑎
𝑟
=
𝑘
𝑠
𝑚
𝑒
𝑎
𝑟
𝑤
𝑎
𝑟
𝑝
⋅
𝐷
′
⋅
(
0.4
+
0.6
𝑊
′
)
Δs
smear
	​

=k
smear
warp
	​

⋅D
′
⋅(0.4+0.6W
′
)
Δ
𝑠
𝑐
𝑜
𝑙
𝑙
𝑎
𝑝
𝑠
𝑒
=
𝑘
𝑐
𝑜
𝑙
𝑤
𝑎
𝑟
𝑝
⋅
𝐷
′
⋅
𝑊
𝐷
⋅
0.5
Δs
collapse
	​

=k
col
warp
	​

⋅D
′
⋅WD⋅0.5
𝜙
𝑑
𝑟
𝑖
𝑓
𝑡
(
𝑛
+
1
)
=
𝜙
𝑑
𝑟
𝑖
𝑓
𝑡
(
𝑛
)
+
𝜔
0
+
𝜔
1
𝑠
𝑑
𝑟
𝑖
𝑓
𝑡
+
𝜂
𝑠
𝑒
𝑒
𝑑
𝑒
𝑑
ϕ
drift
	​

(n+1)=ϕ
drift
	​

(n)+ω
0
	​

+ω
1
	​

s
drift
	​

+η
seeded
	​


Where:

eta_seeded is deterministic seeded micro-perturbation
never free uncontrolled randomness

Then:

𝑠
𝑑
𝑟
𝑖
𝑓
𝑡
←
𝑐
𝑙
𝑎
𝑚
𝑝
(
𝑠
𝑑
𝑟
𝑖
𝑓
𝑡
+
Δ
𝑠
𝑑
𝑟
𝑖
𝑓
𝑡
,
0
,
𝑑
𝑟
𝑖
𝑓
𝑡
𝑐
𝑎
𝑝
)
s
drift
	​

←clamp(s
drift
	​

+Δs
drift
	​

,0,drift
cap
	​

)
𝑠
𝑠
𝑚
𝑒
𝑎
𝑟
←
𝑐
𝑙
𝑎
𝑚
𝑝
(
𝑠
𝑠
𝑚
𝑒
𝑎
𝑟
+
Δ
𝑠
𝑠
𝑚
𝑒
𝑎
𝑟
,
0
,
𝑠
𝑚
𝑒
𝑎
𝑟
𝑐
𝑎
𝑝
)
s
smear
	​

←clamp(s
smear
	​

+Δs
smear
	​

,0,smear
cap
	​

)
Effective delay perturbation
Δ
𝑡
𝑤
𝑎
𝑟
𝑝
(
𝑛
)
=
𝐴
𝑡
⋅
𝑠
𝑑
𝑟
𝑖
𝑓
𝑡
⋅
sin
⁡
(
𝜙
𝑑
𝑟
𝑖
𝑓
𝑡
)
+
𝐵
𝑡
⋅
𝑠
𝑑
𝑟
𝑖
𝑓
𝑡
⋅
𝜂
𝑠
𝑒
𝑒
𝑑
𝑒
𝑑
Δt
warp
	​

(n)=A
t
	​

⋅s
drift
	​

⋅sin(ϕ
drift
	​

)+B
t
	​

⋅s
drift
	​

⋅η
seeded
	​


Then:

𝑡
𝑟
𝑒
𝑎
𝑑
,
𝑒
𝑓
𝑓
=
𝑡
𝑟
𝑒
𝑎
𝑑
,
𝑏
𝑎
𝑠
𝑒
+
Δ
𝑡
𝑤
𝑎
𝑟
𝑝
t
read,eff
	​

=t
read,base
	​

+Δt
warp
	​

Pitch wobble relation

Pitch movement is implied by delay modulation.
Do not build a separate naive pitch shifter unless needed.

Stereo instability

A mild left/right phase offset:

𝜙
𝑑
𝑟
𝑖
𝑓
𝑡
,
𝑅
=
𝜙
𝑑
𝑟
𝑖
𝑓
𝑡
,
𝐿
+
𝛿
𝜙
ϕ
drift,R
	​

=ϕ
drift,L
	​

+δ
ϕ
	​


with bounded delta_phi.

Warp summary

Warp is:

delay read perturbation
drift depth accumulation
smear increase
subtle spatial destabilization

The important thing is that it remain musically bounded.

6.3 FRACTURE
Intent

Fracture should sound like:

cracking
splintering
abrasion
wounded edge detail
recursive roughening
State updates
Δ
𝑠
𝑓
𝑟
𝑎
𝑐
𝑡
=
𝑘
𝑓
𝑟
𝑎
𝑐
𝑡
𝑓
𝑟
𝑎
𝑐
𝑡
⋅
𝐷
′
⋅
(
0.4
+
0.6
𝐹
′
)
⋅
(
0.3
+
0.7
𝐸
𝑛
𝑜
𝑟
𝑚
)
Δs
fract
	​

=k
fract
fract
	​

⋅D
′
⋅(0.4+0.6F
′
)⋅(0.3+0.7E
norm
	​

)
Δ
𝑠
𝑠
𝑎
𝑡
=
𝑘
𝑠
𝑎
𝑡
𝑓
𝑟
𝑎
𝑐
𝑡
⋅
𝐷
′
⋅
0.5
Δs
sat
	​

=k
sat
fract
	​

⋅D
′
⋅0.5
Δ
𝑠
𝑐
𝑜
𝑙
𝑙
𝑎
𝑝
𝑠
𝑒
=
𝑘
𝑐
𝑜
𝑙
𝑓
𝑟
𝑎
𝑐
𝑡
⋅
𝐷
′
⋅
𝑊
𝐷
⋅
0.3
Δs
collapse
	​

=k
col
fract
	​

⋅D
′
⋅WD⋅0.3

Then:

𝑠
𝑓
𝑟
𝑎
𝑐
𝑡
←
𝑐
𝑙
𝑎
𝑚
𝑝
(
𝑠
𝑓
𝑟
𝑎
𝑐
𝑡
+
Δ
𝑠
𝑓
𝑟
𝑎
𝑐
𝑡
,
0
,
𝑓
𝑟
𝑎
𝑐
𝑡
𝑐
𝑎
𝑝
)
s
fract
	​

←clamp(s
fract
	​

+Δs
fract
	​

,0,fract
cap
	​

)
Fracture transform model

Do not use crude bitcrush as the identity.
Use a bounded roughness composite such as:

𝑦
𝑓
𝑟
𝑎
𝑐
𝑡
=
(
1
−
𝜆
𝑓
)
𝑦
+
𝜆
𝑓
⋅
𝐹
𝑟
𝑎
𝑐
𝑡
𝑢
𝑟
𝑒
𝐾
𝑒
𝑟
𝑛
𝑒
𝑙
(
𝑦
,
𝑠
𝑓
𝑟
𝑎
𝑐
𝑡
,
𝑠
𝑒
𝑒
𝑑
)
y
fract
	​

=(1−λ
f
	​

)y+λ
f
	​

⋅FractureKernel(y,s
fract
	​

,seed)

Where:

𝜆
𝑓
=
𝑐
𝑙
𝑎
𝑚
𝑝
(
𝑎
𝑓
⋅
𝑠
𝑓
𝑟
𝑎
𝑐
𝑡
,
0
,
𝜆
𝑚
𝑎
𝑥
)
λ
f
	​

=clamp(a
f
	​

⋅s
fract
	​

,0,λ
max
	​

)

FractureKernel can be built from a combination of:

edge-sensitive saturation
sample contour abrasion
micro decimation with interpolated discontinuity
seeded roughness injection shaped by signal level
Useful contour formulation

For example, define local contour:

𝑐
(
𝑛
)
=
𝑦
(
𝑛
)
−
𝑦
(
𝑛
−
1
)
c(n)=y(n)−y(n−1)

Then roughness grows with contour energy:

𝑟
(
𝑛
)
=
𝑐
𝑙
𝑎
𝑚
𝑝
(
𝑎
𝑟
⋅
𝑠
𝑓
𝑟
𝑎
𝑐
𝑡
⋅
∣
𝑐
(
𝑛
)
∣
,
0
,
𝑟
𝑚
𝑎
𝑥
)
r(n)=clamp(a
r
	​

⋅s
fract
	​

⋅∣c(n)∣,0,r
max
	​

)

and apply:

𝑦
𝑓
𝑟
𝑎
𝑐
𝑡
(
𝑛
)
=
𝑦
(
𝑛
)
+
𝑟
(
𝑛
)
⋅
Ψ
(
𝑦
(
𝑛
)
,
𝑠
𝑒
𝑒
𝑑
)
y
fract
	​

(n)=y(n)+r(n)⋅Ψ(y(n),seed)

Where Psi is deterministic shaped perturbation, not full noise chaos.

Fracture summary

Fracture is:

recursive contour injury
roughness on edges and detail
bounded splintering
not just “lofi mode”
7. SOUL mode composite

If you add Soul, it should be a curated weighted combination:

𝑅
𝑜
𝑡
=
𝑤
𝑟
⋅
𝑅
𝑜
𝑡
𝐿
𝑎
𝑤
Rot=w
r
	​

⋅RotLaw
𝑊
𝑎
𝑟
𝑝
=
𝑤
𝑤
⋅
𝑊
𝑎
𝑟
𝑝
𝐿
𝑎
𝑤
Warp=w
w
	​

⋅WarpLaw
𝐹
𝑟
𝑎
𝑐
𝑡
=
𝑤
𝑓
⋅
𝐹
𝑟
𝑎
𝑐
𝑡
𝑢
𝑟
𝑒
𝐿
𝑎
𝑤
Fract=w
f
	​

⋅FractureLaw

Suggested weights:

w_r = 0.50
w_w = 0.35
w_f = 0.15

Soul should feel:

emotionally decayed
unstable but not gimmicky
cracked without turning glitch-first

This is probably your signature preset/macro even if not a first-class base mode in v1.

8. Parameter interaction matrix

This is the part your agents will absolutely misuse if you do not define it.

8.1 damage
Affects strongly
scar accumulation rate
hf loss progression
saturation depth
drift growth
fracture emergence
collapse growth
Affects moderately
transient rounding
smear amount
guard intervention frequency
Should NOT directly do
raw output gain boost
unbounded feedback increase
8.2 memory_loss
Affects strongly
identity retention across repeats
spectral retention
transient retention
timing retention
dry-memory bleedback reduction
Behavioral meaning

Low memory_loss:

the repeat remains recognizably itself

High memory_loss:

the repeat forgets its body and contour faster
Good interaction

memory_loss should multiply injury states rather than duplicate damage.

8.3 feedback
Affects strongly
persistence
repeat count
injury audibility
energy available for recursive transformation
Should interact with
scar accumulation
guard behavior
smear audibility
fracture build-up
Should NOT do alone

Feedback alone should not create strong injury; it just allows injury to persist.

8.4 motion

Primarily Warp and Soul relevant.

Affects strongly
drift depth
delay modulation excursion
stereo instability
modulation rate complexity
Affects weakly
Rot smear
Fracture agitation
8.5 tone_bias

Useful for emphasizing dark vs body vs edge.

Negative side
emphasize darkening and collapse
less bright residue
Positive side
preserve more edge/harmonic detail
fracture becomes more audible
warp remains more “present”
8.6 width_decay
Affects strongly
stereo width loss across repeats
inward collapse
mono pressure
image erosion
By mode
strongest in Rot
moderate in Soul
subtle in Warp
optional asymmetry in Fracture
8.7 guard_amount
Affects strongly
output peak containment
injury cap enforcement
self-oscillation prevention
extreme mode taming
High guard
safer
less wild
more production-friendly
Low guard
more dangerous
more signature
still bounded, never numerically reckless
8.8 seed
Affects
deterministic modulation phase start
deterministic fracture contour
repeatable asymmetry motion
Must NOT affect
base parameter semantics
output level behavior in a hidden way
9. Suggested caps

Your agents need default bounds or they will either neuter it or make it stupid.

Rot caps
hf_cap = 0.90
sat_cap = moderate musical max
tr_cap = subtle-to-strong, never full mush
col_cap = near mono but not forced mono unless explicit
Warp caps
delay perturbation max around a few milliseconds at sane settings
drift cap strong enough to hear, weak enough to remain playable
stereo phase divergence bounded tightly
Fracture caps
roughness never becomes white-noise override by default
output ceiling always guarded
fracture mix max below full replacement
10. Guard equations

A soft dynamic guard is better than a brick-only mentality.

Output guard gain
𝑔
𝑔
𝑢
𝑎
𝑟
𝑑
=
1
1
+
𝑎
𝑔
⋅
max
⁡
(
0
,
𝐿
𝑒
𝑠
𝑡
−
𝐿
𝑡
𝑎
𝑟
𝑔
𝑒
𝑡
)
g
guard
	​

=
1+a
g
	​

⋅max(0,L
est
	​

−L
target
	​

)
1
	​


Then:

𝑦
𝑔
𝑢
𝑎
𝑟
𝑑
𝑒
𝑑
=
𝑔
𝑔
𝑢
𝑎
𝑟
𝑑
⋅
𝑦
𝑖
𝑛
𝑗
𝑢
𝑟
𝑒
𝑑
y
guarded
	​

=g
guard
	​

⋅y
injured
	​


Update:

𝑠
𝑔
𝑢
𝑎
𝑟
𝑑
(
𝑛
+
1
)
=
𝑠
𝑚
𝑜
𝑜
𝑡
ℎ
(
𝑠
𝑔
𝑢
𝑎
𝑟
𝑑
(
𝑛
)
,
1
−
𝑔
𝑔
𝑢
𝑎
𝑟
𝑑
)
s
guard
	​

(n+1)=smooth(s
guard
	​

(n),1−g
guard
	​

)
Injury cap enforcement

Each state gets a cap:

𝑠
𝑖
←
𝑚
𝑖
𝑛
(
𝑠
𝑖
,
𝑐
𝑎
𝑝
𝑖
(
𝐷
,
𝐶
)
)
s
i
	​

←min(s
i
	​

,cap
i
	​

(D,C))

Where:

lower guard_amount permits more extreme caps
higher guard_amount tightens them
11. Dry-memory injection model

This is one subtle thing that can make the plugin feel expensive.

Optionally, instead of writing only:

𝑤
𝑟
𝑖
𝑡
𝑒
=
𝑥
+
𝑓
𝑒
𝑒
𝑑
𝑏
𝑎
𝑐
𝑘
⋅
𝑦
𝑔
𝑢
𝑎
𝑟
𝑑
𝑒
𝑑
write=x+feedback⋅y
guarded
	​


Use:

𝑤
𝑟
𝑖
𝑡
𝑒
=
𝛼
𝑑
𝑟
𝑦
⋅
𝑥
+
𝛼
𝑓
𝑏
⋅
𝑦
𝑔
𝑢
𝑎
𝑟
𝑑
𝑒
𝑑
write=α
dry
	​

⋅x+α
fb
	​

⋅y
guarded
	​


Where:

𝛼
𝑑
𝑟
𝑦
=
1
−
𝜌
⋅
𝑀
′
α
dry
	​

=1−ρ⋅M
′

At high memory_loss, less fresh dry identity is reintroduced, so the feedback loop becomes more self-derived and ghostly.

That is very on-brand and very useful.

12. Recommended coefficient behavior by mode
Rot
high k_hf
medium k_sat
medium k_tr
medium k_collapse
low k_drift
very low k_fract
Warp
low k_hf
low k_sat
high k_drift
medium k_smear
low-medium k_collapse
very low k_fract
Fracture
low k_hf
medium k_sat
low k_tr
low k_drift
high k_fract
low-medium k_collapse
Soul
medium k_hf
medium k_sat
medium k_drift
medium k_smear
low-medium k_fract
medium k_collapse
13. What the agents should implement first, exactly

Tell them to implement this order:

Pass 1
core double-precision delay
feedback recurrence
state struct
damage accumulation backbone
Rot only
telemetry skeleton
tests
Pass 2
Warp with deterministic modulation
related telemetry
boundedness tests
Pass 3
Fracture kernel
safety pass
preset/macro tuning
Pass 4
Soul composite
advanced params
branch/sandbox integration refinement

That sequence avoids them getting lost in Fracture too early.

14. Paste-this-to-agents version
Scar Echo mode equations and interaction rules:

1. Implement Scar Echo as a double-precision recursive delay where injury accumulates in the feedback path, not on the dry path.

2. Maintain persistent scar state including:
overall scar amount, memory integrity, hf loss, saturation drive, transient rounding, drift depth/phase, smear amount, fracture amount, stereo width integrity, collapse amount, feedback energy estimate, repeat estimate, and guard reduction.

3. Global behavior:
- damage increases injury accumulation rate
- memory_loss reduces identity retention across repeats
- feedback provides persistence and energy for recursive injury
- motion primarily drives Warp instability
- width_decay drives inward stereo collapse
- guard_amount constrains output and state growth

4. Rot equations:
- progressively increase hf loss, saturation drive, transient rounding, collapse, and smear
- each repeat should get darker, softer, warmer, narrower, and blurrier

5. Warp equations:
- progressively increase drift depth and smear
- perturb effective delay read time with deterministic seeded modulation
- keep drift tightly bounded and repeatable in deterministic mode

6. Fracture equations:
- progressively increase recursive roughness/abrasion
- use a bounded contour/edge-sensitive fracture kernel
- do not reduce Fracture to plain bitcrush

7. Add telemetry for:
mode, delay, feedback, mix, damage, memory_loss, motion, repeat estimate, feedback energy, hf loss, saturation drive, drift, smear, fracture, width integrity, collapse amount, guard reduction, output peak/rms, deterministic mode, seed

8. Required implementation order:
Pass 1 = core delay + state + Rot + telemetry skeleton + tests
Pass 2 = Warp
Pass 3 = Fracture
Pass 4 = Soul composite and refinements

9. Preserve double precision everywhere in the DSP path, state, buffers, and feedback memory.

SCAR ECHO — PRESET ARCHITECTURE + DEFAULTS + FIRST-SOUND TUNING
1. Product tuning philosophy

Scar Echo should not boot up sounding neutral, brittle, or “developer-default.”

It should open in a state that immediately says:

this is a delay
this is not a normal delay
this already has soul
it is usable on real material without blowing up the mix

So the default must be:

musical
darkly flattering
obviously characterful
restrained enough to leave headroom for escalation

The default sound should feel like:

a premium echo with gentle memory damage already beginning

Not full destruction.
Not plain clean delay.

2. Preset architecture

Organize presets into four banks:

A. Foundations

Core usable everyday sounds.
These prove the plugin has market value.

B. Character

Distinct artistic signatures.

C. Ritual

More stylized, Ghost Orgy-flavored, emotionally loaded sounds.

D. Extreme

Harder, unstable, destructive, edge-case but still bounded.

This gives both:

practical users something they can reach for immediately
weirdos the good stuff
3. Default preset
Default preset name

Only Echoes

This should be the boot state.

Intent

A dark, softened, slightly narrowing, subtly wounded echo that flatters vocals, guitars, synths, and leads immediately.

Default mode

Soul if implemented
otherwise Rot

Recommended default values

Assuming normalized/internal logic similar to the spec:

delay_ms = 320
sync_mode = free
feedback = 0.42
mix = 0.18
output_trim = -1.0 dB
damage = 0.22
memory_loss = 0.18
mode = soul or rot
stereo_spread = 0.72
width_decay = 0.20
tone_bias = -0.12
motion = 0.16
guard_amount = 0.78
seed = 13
deterministic_mode = true
Advanced defaults
hf_loss_rate = low-medium
lf_mass_shift = slight
saturation_curve = soft
smear_amount = 0.14
drift_depth = 0.08
drift_rate = low
fracture_density = 0.04
fracture_resolution = restrained
transient_rounding = 0.10
echo_blur = 0.12
echo_asymmetry = 0.06
collapse_bias = 0.18
accumulation_curve = gentle exponential
injury_cap = medium
memory_retention_curve = smooth
feedback_diffusion = low
tail_persistence = medium
crossfeed_amount = 0.10
What it should sound like
first repeat: rich and slightly darkened
second repeat: a little less intact
later repeats: noticeably softer, more inward, more haunted
never instantly gimmicky

This default should make people say:
“Oh, this is classy.”

4. Parameter default behavior targets
damage

Default should not scream.
At default it should be felt before it is obvious.

Target response
0.00–0.15 = premium enhancement
0.15–0.35 = audible identity damage
0.35–0.60 = strong character
0.60–1.00 = obvious signature / extreme
Recommended default

0.22

memory_loss

This is incredibly important for identity.

Target response
low = remembers original body
medium = identity begins to hollow
high = phrase remains, soul degrades rapidly
Recommended default

0.18

This keeps the echoes recognizable while starting the erosion.

feedback
Target response
below 0.25 = quick slap/space
0.30–0.55 = core musical zone
0.55–0.80 = pronounced recursive injury
0.80+ = danger zone with guard support only
Recommended default

0.42

mix
Recommended default

0.18

Enough to hear the brand, not enough to overpower the insert path.

motion
Recommended default

0.16

Should imply life without obvious chorusing unless Warp or Soul is pushed.

width_decay
Recommended default

0.20

Enough to create inward emotional pull over repeats.

guard_amount
Recommended default

0.78

Default should be safe and polished.

5. Foundation bank presets

These are the ones that make it commercially viable.

Only Echoes

Mode: Soul or Rot
Purpose: default premium signature echo

delay_ms: 320
feedback: 0.42
mix: 0.18
damage: 0.22
memory_loss: 0.18
motion: 0.16
width_decay: 0.20
tone_bias: -0.12
output_trim: -1.0 dB
guard_amount: 0.78

Use: vocals, synth lead, guitar, snare send

Ritual Slap

A darkened, expensive short slap.

mode: Rot
delay_ms: 95
feedback: 0.22
mix: 0.14
damage: 0.16
memory_loss: 0.12
motion: 0.05
width_decay: 0.10
tone_bias: -0.08
transient_rounding: 0.08
smear_amount: 0.06

Use: vocal slap, guitar slap, spoken word

Wounded Stereo

Wide first echo, inward later decay.

mode: Soul
delay_ms: 380
feedback: 0.46
mix: 0.20
damage: 0.24
memory_loss: 0.20
stereo_spread: 0.84
width_decay: 0.30
motion: 0.18
crossfeed_amount: 0.14

Use: pads, synth arps, post-rock leads

Dark Utility

Subtle, mix-safe, always-useful.

mode: Rot
delay_ms: 250
feedback: 0.34
mix: 0.12
damage: 0.12
memory_loss: 0.10
motion: 0.06
width_decay: 0.10
tone_bias: -0.18
guard_amount: 0.85

Use: almost anything

6. Character bank presets

These define personality without going full extreme.

Wounded Tape
mode: Warp
delay_ms: 410
feedback: 0.50
mix: 0.22
damage: 0.30
memory_loss: 0.24
motion: 0.32
drift_depth: 0.24
drift_rate: low-medium
smear_amount: 0.16
tone_bias: -0.10
width_decay: 0.18

Sound: unstable reel, nostalgic sickness

Broken Memory
mode: Soul
delay_ms: 540
feedback: 0.58
mix: 0.26
damage: 0.42
memory_loss: 0.40
motion: 0.22
width_decay: 0.28
echo_blur: 0.24
collapse_bias: 0.22
fracture_density: 0.08

Sound: recognizable phrase, damaged identity

Collapsed Choir
mode: Rot or Soul
delay_ms: 680
feedback: 0.62
mix: 0.28
damage: 0.34
memory_loss: 0.26
width_decay: 0.36
stereo_spread: 0.76
echo_blur: 0.26
transient_rounding: 0.18

Sound: decaying halo, sacred inward pull

Glass Wound
mode: Fracture
delay_ms: 220
feedback: 0.40
mix: 0.18
damage: 0.32
memory_loss: 0.20
fracture_density: 0.24
fracture_resolution: medium-high
tone_bias: 0.10
motion: 0.08
guard_amount: 0.82

Sound: cracked edge without chaos

7. Ritual bank presets

These are the brand myth presets.

Soul Remains

This should be the flagship branded sound.

mode: Soul
delay_ms: 460
feedback: 0.54
mix: 0.24
damage: 0.36
memory_loss: 0.34
motion: 0.20
stereo_spread: 0.78
width_decay: 0.30
tone_bias: -0.14
smear_amount: 0.18
drift_depth: 0.14
fracture_density: 0.06
collapse_bias: 0.24
guard_amount: 0.76

Sound: the ideal trailer/demo preset

Veiled Return
mode: Rot/Soul
delay_ms: 700
feedback: 0.48
mix: 0.22
damage: 0.28
memory_loss: 0.30
tone_bias: -0.26
echo_blur: 0.24
transient_rounding: 0.20
stereo_spread: 0.70
width_decay: 0.22

Sound: hidden, obscured, emotionally distant

Dying Halo
mode: Warp/Soul
delay_ms: 820
feedback: 0.66
mix: 0.30
damage: 0.32
memory_loss: 0.26
motion: 0.28
drift_depth: 0.18
smear_amount: 0.20
stereo_spread: 0.82
width_decay: 0.26

Sound: angelic but unstable, sinking light

Rot Chapel
mode: Rot
delay_ms: 560
feedback: 0.60
mix: 0.27
damage: 0.40
memory_loss: 0.28
tone_bias: -0.22
hf_loss_rate: medium-high
saturation_curve: warm
width_decay: 0.34
transient_rounding: 0.22

Sound: devotional decay, dark sacred space

8. Extreme bank presets

These need to be dangerous but still defensible.

Splinter Dub
mode: Fracture
delay_ms: 480
feedback: 0.68
mix: 0.30
damage: 0.52
memory_loss: 0.30
fracture_density: 0.38
fracture_resolution: high
tone_bias: 0.16
motion: 0.12
width_decay: 0.14
crossfeed_amount: 0.08
guard_amount: 0.70

Sound: broken-space dub violence

Ash Repeater
mode: Soul/Rot
delay_ms: 640
feedback: 0.72
mix: 0.32
damage: 0.56
memory_loss: 0.48
tone_bias: -0.30
hf_loss_rate: high
smear_amount: 0.32
transient_rounding: 0.26
collapse_bias: 0.34

Sound: the repeat nearly burns into residue

Fractured Confession
mode: Fracture/Soul
delay_ms: 300
feedback: 0.64
mix: 0.28
damage: 0.58
memory_loss: 0.42
fracture_density: 0.42
fracture_resolution: medium
motion: 0.18
tone_bias: 0.04
width_decay: 0.24
guard_amount: 0.74

Sound: speech/vocal becoming morally broken

Only echoes of soul remain

This should be the hero extreme preset using the full tagline.

mode: Soul
delay_ms: 520
feedback: 0.74
mix: 0.31
damage: 0.60
memory_loss: 0.52
motion: 0.26
stereo_spread: 0.80
width_decay: 0.36
tone_bias: -0.18
smear_amount: 0.26
drift_depth: 0.18
fracture_density: 0.10
collapse_bias: 0.32
guard_amount: 0.72

Sound: branded signature devastation

9. Good first-sound tuning table

This is crucial. These are the settings your agents should use while listening and calibrating the initial processor.

A. Vocal lead test

Goal: premium haunted vocal echo

mode: Soul
delay_ms: 300 to 420
feedback: 0.35 to 0.50
mix: 0.12 to 0.22
damage: 0.18 to 0.32
memory_loss: 0.14 to 0.24
motion: 0.10 to 0.20
width_decay: 0.14 to 0.24
tone_bias: slightly negative
fracture_density: very low
Desired result
repeat sits behind lead
repeat is darker and emotionally wounded
no obvious chorus cheese
no brittle breakup
B. Snare send test

Goal: cracked, expensive short-space identity

mode: Fracture or Rot
delay_ms: 90 to 180
feedback: 0.18 to 0.38
mix: 0.10 to 0.18
damage: 0.20 to 0.36
memory_loss: 0.10 to 0.20
motion: low
width_decay: low-medium
Desired result
adds character without washing out the transient
repeat has broken detail
no ugly digital spit unless intentionally pushed
C. Ambient synth test

Goal: unstable beautiful tail

mode: Warp or Soul
delay_ms: 450 to 900
feedback: 0.45 to 0.70
mix: 0.18 to 0.32
damage: 0.20 to 0.40
memory_loss: 0.20 to 0.35
motion: 0.18 to 0.34
width_decay: 0.18 to 0.32
smear_amount: medium
drift_depth: low-medium
Desired result
tail feels alive
motion is emotional, not seasick
image slowly folds inward
D. Guitar lead test

Goal: wounded tape memory

mode: Warp/Rot
delay_ms: 280 to 420
feedback: 0.32 to 0.52
mix: 0.14 to 0.24
damage: 0.20 to 0.34
memory_loss: 0.16 to 0.24
motion: 0.14 to 0.24
tone_bias: slight negative
width_decay: 0.12 to 0.20
Desired result
sustain becomes tragic and dimensional
not cartoon wobble
first repeat still useful in mix
E. Spoken word / ritual voice test

Goal: psychological echo with identity erosion

mode: Soul/Rot
delay_ms: 240 to 520
feedback: 0.38 to 0.62
mix: 0.18 to 0.30
damage: 0.28 to 0.48
memory_loss: 0.30 to 0.50
motion: 0.10 to 0.18
width_decay: 0.22 to 0.34
tone_bias: negative
transient_rounding: medium
Desired result
the words remain intelligible at first
later echoes feel morally or spiritually damaged
10. Calibration priorities for your agents

Tell them to tune in this order:

1. First repeat quality

The first repeat must already sound good.

If the first repeat sounds cheap, the whole product fails.

2. Progressive legibility

Repeat 2, 3, 4 should each feel progressively altered in a musically legible way.

Not random. Not flat.

3. Low-setting elegance

At low damage, it should still feel premium enough for mainstream use.

4. High-setting identity

At high damage, it should sound unmistakably like Scar Echo, not generic lofi delay.

5. Mix behavior

The output must sit in a real mix without constant rescue EQ.

11. What “bad tuning” looks like

Your agents should avoid these failure modes:

Rot failures
just dulling everything instantly
sounding like lowpass-only
too much mud too fast
no emotional progression
Warp failures
chorus pedal vibes
seasick timing
random wobble with no identity
too much modulation on repeat 1
Fracture failures
plain bitcrush
harsh alias spit with no contour
broken in a cheap way
no recursive accumulation feel
Global failures
default too extreme
default too clean
too wet by default
too loud in perceived gain
guard flattening the personality
12. Factory preset naming architecture

This is the cleanest naming stack:

Foundations
Only Echoes
Ritual Slap
Dark Utility
Wounded Stereo
Character
Wounded Tape
Broken Memory
Glass Wound
Collapsed Choir
Ritual
Soul Remains
Veiled Return
Dying Halo
Rot Chapel
Extreme
Splinter Dub
Ash Repeater
Fractured Confession
Only echoes of soul remain

That’s a great set. Strong product language without sounding corny.

13. Agent-ready preset instruction block

Paste this to them:

Tune Scar Echo like a product, not a neutral DSP demo.

Default preset:
Name: Only Echoes
Intent: premium darkened wounded echo that is immediately musical
Default target values:
delay_ms 320
feedback 0.42
mix 0.18
output_trim -1.0 dB
damage 0.22
memory_loss 0.18
mode soul if available, else rot
stereo_spread 0.72
width_decay 0.20
tone_bias -0.12
motion 0.16
guard_amount 0.78
seed 13
deterministic_mode true

Tuning priorities:
1. first repeat must already sound good
2. successive repeats must become progressively more injured
3. low damage settings must still feel premium and mixable
4. high damage settings must sound signature, not generic lofi
5. output must remain bounded and mix-usable

Implement factory preset banks:
Foundations:
- Only Echoes
- Ritual Slap
- Dark Utility
- Wounded Stereo

Character:
- Wounded Tape
- Broken Memory
- Glass Wound
- Collapsed Choir

Ritual:
- Soul Remains
- Veiled Return
- Dying Halo
- Rot Chapel

Extreme:
- Splinter Dub
- Ash Repeater
- Fractured Confession
- Only echoes of soul remain

Calibrate on at least:
- vocal lead
- snare send
- ambient synth
- guitar lead
- spoken word / ritual voice

Avoid failure modes:
- Rot must not be just dull lowpass
- Warp must not feel like generic chorus
- Fracture must not be plain bitcrush
- default must not be too extreme or too clean
14. My real recommendation

For the very first demo render they make, tell them to produce exactly these three examples:

Lead vocal with “Only Echoes”
Ambient synth with “Soul Remains”
Snare or percussion with “Glass Wound”

If those three work, Scar Echo is real.

The next layer after this would be the final boss document:
implementation roadmap by file/class/function responsibility, written as if assigning a small internal team.