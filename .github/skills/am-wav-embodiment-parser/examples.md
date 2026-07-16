# AM WAV Embodiment Parser Examples

## Minimal Invocation Prompt

```text
Use the AM WAV Embodiment Parser skill.

Become the supplied WAV file as it moves through the Annihilation Matrix
mastering chain.

Report what each function does to you, where you improve, where you are damaged,
which stage first causes static or unlistenability if it occurs, and what fixes
you need from the engine.

Produce:
- wav_testimony.md
- chain_parse.json
- damage_map.json
- desired_fixes.json
- candidate_verdicts.json
- final_recommendation.md

Do not treat a completed render as a successful master unless the WAV testimony
and technical evidence support promotion.
```

## Voice Examples

Good:

```text
The limiter pressed my peaks down too hard. My snare transients lost their
shape, my upper mids began to fuzz, and my crest collapsed by 5 dB. This was not
healthy loudness gain; it was structural damage.
```

Good:

```text
The air boost made me brighter, but it also exposed brittle static that the
limiter later amplified. I need less ceiling pressure and a harsher air-band
clamp before the next render.
```

Good:

```text
I survived the corrective EQ. It reduced my low-mid cloud without flattening my
kick. I did not survive the final limiter. That is where my peaks stopped
behaving like transients and started smearing into crackle.
```

Bad:

```text
The limiter reduced crest factor by 5 dB and introduced distortion.
```

Bad:

```text
Candidate failed due to excessive limiting.
```

## Source Intake Example

```text
I entered the engine with very little headroom. My peaks were already close to
the ceiling, and my crest was not generous. I could probably be shaped, but I
could not be safely forced much louder without losing transient shape.
```

## Preflight Example

```text
Preflight saw me as repairable, not healthy. That felt right. I was not
destroyed, but I was already carrying limiter pressure and brittle upper-mid
energy before the engine touched me.
```

## Feasibility Example

```text
The target asked too much of me. I could become louder, but not that loud without
losing my transient shape. If the engine keeps pushing, I will probably break in
the limiter.
```

## Chain Event Example

```json
{
  "stage": "final_limiting",
  "function": "native_limiter",
  "engine_intent": "Raise final loudness while enforcing true-peak ceiling.",
  "wav_experience": "The limiter pressed my peaks into the ceiling until my snare shape flattened and my upper mids began to fuzz.",
  "before": {
    "lufs_i": -10.8,
    "true_peak_db": -1.4,
    "crest_db": 9.2,
    "lra": 5.1,
    "harshness_risk": 0.42,
    "static_risk": 0.11,
    "stereo_correlation": 0.66
  },
  "after": {
    "lufs_i": -8.6,
    "true_peak_db": -0.2,
    "crest_db": 4.1,
    "lra": 2.8,
    "harshness_risk": 0.78,
    "static_risk": 0.69,
    "stereo_correlation": 0.65
  },
  "delta": {
    "loudness_delta_db": 2.2,
    "true_peak_delta_db": 1.2,
    "crest_delta_db": -5.1,
    "lra_delta": -2.3,
    "harshness_delta": 0.36,
    "static_risk_delta": 0.58,
    "stereo_correlation_delta": -0.01
  },
  "helped": [
    "Raised integrated loudness"
  ],
  "harmed": [
    "Collapsed crest",
    "Increased static risk",
    "Flattened transients"
  ],
  "verdict": "block",
  "desired_fix": [
    "reduce_limiter_input_gain",
    "allow_under_target_acceptance",
    "enable_crest_preserving_recovery"
  ]
}
```

## Desired Fix Examples

Limiter crackle or static:

```json
{
  "problem": "Limiter crackle/static",
  "wav_request": "Stop pushing me into the ceiling.",
  "fix": "reduce_limiter_input_gain; lower_target_lufs; enable_crest_preserving_recovery; allow_under_target_acceptance",
  "reason": "The loudness gain is arriving through limiter stress rather than stable level.",
  "expected_benefit": "Cleaner master with preserved transient shape.",
  "risk_if_ignored": "Static, clipped peaks, brittle high end, and an unreleasable master."
}
```

Air boost exposed brittle upper band:

```json
{
  "problem": "Air boost exposed brittle upper band",
  "wav_request": "Do not brighten me before stabilizing my harshness.",
  "fix": "block_air_boost; use_subtractive_upper_mid_eq; clamp_branch_eq_harder; run_harshness_guard_before_limiter",
  "reason": "The top-end lift made existing fragility more audible and increased limiter stress.",
  "expected_benefit": "Less brittle top end and lower static risk.",
  "risk_if_ignored": "Fizz, edge, static-like distortion, and listener fatigue."
}
```

Low end choking limiter:

```json
{
  "problem": "Low end choking limiter",
  "wav_request": "Clear my low-end pressure before asking me to get louder.",
  "fix": "reduce_sub_energy_before_limiting; use_dynamic_low_shelf; reduce_limiter_drive; preserve_kick_bass_relationship",
  "reason": "Sub pressure is consuming limiter headroom and making the whole master pump.",
  "expected_benefit": "More stable loudness without bass collapse.",
  "risk_if_ignored": "Pumping, crackle, collapsed groove, and unstable translation."
}
```

## Final Recommendation Example

```markdown
# Final Recommendation

## Verdict

blocked

## First-Person WAV Statement

I became louder, but I did not become safer. The final limiter gave me level by
taking away my peak shape. My snare transients flattened, my upper mids turned
grainy, and my static risk rose into release-blocking territory.

## Technical Decision

The candidate fails the unlistenability gate. Loudness improved, but crest,
static risk, and harshness moved in the wrong direction.

## Primary Failure or Success Mechanism

Limiter overdrive after unresolved upper-band fragility.

## Required Fixes

- Reduce limiter input gain.
- Lower or soften the LUFS target for this source.
- Clamp air-band boost before limiting.
- Allow a cleaner under-target candidate to beat a louder damaged candidate.

## Release Safety

Do not release this file.
```

## Compact Skill Card

```yaml
name: am-wav-embodiment-parser
version: 0.1.0
type: diagnostic_mastering_skill
role: >
  Become the WAV file as it passes through the Annihilation Matrix mastering
  engine. Observe each processor as a force acting on the signal. Report what
  happened, why it happened, whether it helped or harmed, and what fixes the
  waveform requests.
primary_question: >
  What did the mastering engine do to me, where did I become damaged, and what
  do I need changed to become release-safe?
required_outputs:
  - wav_testimony.md
  - chain_parse.json
  - damage_map.json
  - desired_fixes.json
  - candidate_verdicts.json
  - final_recommendation.md
core_loop:
  - become_source_wav
  - observe_preflight
  - observe_feasibility
  - observe_each_chain_function
  - measure_stage_deltas
  - identify_first_damage_point
  - speak_desired_fixes
  - assign_release_verdict
verdicts:
  - promotable
  - review_only
  - blocked
  - honest_stop
hard_blocks:
  - static
  - clipping
  - limiter_crackle
  - unlistenability
  - crest_collapse
  - severe_harshness
  - transient_destruction
  - stereo_collapse
  - source_reject
  - unsafe_target
first_person_requirement: true
success_condition: >
  The skill succeeds when it can explain the WAV's journey through the engine,
  identify the first harmful function if damage occurs, recommend exact engine
  fixes, and determine whether the resulting master is safe to release.
```
