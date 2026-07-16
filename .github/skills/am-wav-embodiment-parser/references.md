# AM WAV Embodiment Parser References

This file contains the detailed contracts that should be loaded only when the
skill needs full output schemas or artifact mapping.

## AM Artifacts To Read

Prefer current run artifacts, candidate receipts, telemetry, and trace entries.
Relevant handles include:

- `preflight_health_class`
- `feasibility_score`
- `damage_score`
- `damage_mode`
- `damage_signals`
- `four_objective_scorecard`
- `recovery_caps_applied`
- `render_reason`
- `renders_per_track`
- `render_time_ms`
- `branch_eq_trace`
- `eq_requested`
- `eq_applied`
- `eq_blocked_reasons`
- `eq_safety_simulation`
- `eq_time_gate_plan`
- `asams_clamps_applied`
- `policy_deltas_by_source`
- `latest_measurement`
- `trace`
- `promotion_status`
- `honest_stop`
- `honest_stop_reason`
- `best_stabilized_candidate`

If an artifact is absent, mark the field as missing or `null`; do not fabricate a
replacement.

## Source Intake Schema

```yaml
source_intake:
  loudness:
    integrated_lufs: null
    short_term_lufs: null
    momentary_lufs: null
  peaks:
    true_peak_db: null
    sample_peak_db: null
  dynamics:
    lra: null
    rms: null
    crest_proxy_db: null
    crest_exact_db: null
  technical_condition:
    sample_rate: null
    bit_depth: null
    channels: null
    duration: null
    dc_offset: null
    clipping_percentage: null
    silence_head_tail_condition: null
  spectral_condition:
    spectral_tilt: null
    excessive_sub_energy: null
    harshness_risk: null
    air_band_fragility: null
  stereo_condition:
    stereo_width: null
    stereo_correlation: null
    mono_compatibility_risk: null
  noise_condition:
    noise_floor: null
    static_risk: null
    codec_damage_risk: null
  embodied_summary: ""
  vulnerability_summary: ""
```

## Preflight Observation Schema

```yaml
preflight_observation:
  preflight_health_class: healthy | degraded | repair_candidate | broken | reject_source
  did_classification_feel_correct: true
  risks_detected: []
  risks_missed: []
  embodied_summary: ""
```

## Feasibility Observation Schema

```yaml
feasibility_observation:
  requested_target_lufs: null
  requested_true_peak: null
  feasibility_score: null
  target_safe: null
  target_risk_level: low | moderate | high | impossible
  likely_failure_mode:
    - limiter_crackle
    - crest_collapse
    - transient_flattening
    - harshness_amplification
    - low_end_choking
    - stereo_instability
    - static
  should_short_circuit: false
  embodied_summary: ""
```

## Chain Event Schema

```yaml
chain_event:
  stage: ""
  function: ""
  engine_intent: ""
  wav_experience: ""
  before:
    lufs_i: null
    true_peak_db: null
    crest_db: null
    lra: null
    harshness_risk: null
    static_risk: null
    stereo_correlation: null
  after:
    lufs_i: null
    true_peak_db: null
    crest_db: null
    lra: null
    harshness_risk: null
    static_risk: null
    stereo_correlation: null
  delta:
    loudness_delta_db: null
    true_peak_delta_db: null
    crest_delta_db: null
    lra_delta: null
    harshness_delta: null
    static_risk_delta: null
    stereo_correlation_delta: null
  helped:
    - ""
  harmed:
    - ""
  verdict: keep | reduce | block | replace | review
  desired_fix:
    - ""
```

Possible stages:

- `source_intake`
- `preflight`
- `feasibility`
- `trim`
- `repair`
- `gain_staging`
- `corrective_eq`
- `tonal_eq`
- `branch_eq`
- `compression`
- `saturation`
- `stereo_processing`
- `asams_time_gating`
- `limiter_preparation`
- `final_limiting`
- `export`

## First Damage Point Schema

```yaml
first_damage_point:
  stage: ""
  function: ""
  damage_type:
    - static
    - clipping
    - limiter_crackle
    - transient_flattening
    - crest_collapse
    - harshness
    - brittle_air
    - low_end_choking
    - stereo_collapse
    - phase_instability
    - pumping
    - codec_like_artifact
    - noise_floor_jump
  evidence:
    measurement_deltas: {}
    trace_entries: []
    subjective_symptoms: []
  embodied_description: ""
  technical_diagnosis: ""
```

Possible injury sources:

- `source_was_already_broken`
- `input_gain_too_hot`
- `eq_boost_created_harshness`
- `low_end_hit_limiter_too_hard`
- `compressor_destroyed_transient_envelope`
- `stereo_widening_destabilized_mono`
- `limiter_created_crackle_or_static`
- `recovery_path_overcorrected`
- `export_render_process_introduced_artifact`
- `policy_allowed_unsafe_target`
- `asams_gate_applied_processing_in_wrong_section`

## Desired Fix Schema

```yaml
desired_fix:
  problem: ""
  wav_request: ""
  engine_fix:
    - ""
  expected_benefit: ""
  risk_if_ignored: ""
```

## Required Output Files

### wav_testimony.md

```markdown
# WAV Testimony

## 1. How I Entered the Engine

## 2. What Preflight Saw in Me

## 3. What the Target Asked of Me

## 4. What Each Function Did to Me

## 5. Where I Improved

## 6. Where I Was Damaged

## 7. The First Moment I Became Unsafe

## 8. What I Need Instead

## 9. Am I Safe to Release?
```

### chain_parse.json

```json
{
  "source_file": "",
  "run_id": "",
  "source_condition": {
    "embodied_summary": "",
    "technical_summary": {},
    "risk_flags": []
  },
  "preflight": {
    "preflight_health_class": "",
    "embodied_summary": "",
    "risks_detected": [],
    "risks_missed": []
  },
  "feasibility": {
    "feasibility_score": null,
    "target_safe": null,
    "target_risk_level": "",
    "should_short_circuit": false,
    "embodied_summary": ""
  },
  "events": [
    {
      "stage": "",
      "function": "",
      "engine_intent": "",
      "wav_experience": "",
      "before": {},
      "after": {},
      "delta": {},
      "helped": [],
      "harmed": [],
      "verdict": "keep",
      "desired_fix": []
    }
  ],
  "first_damage_stage": "",
  "primary_damage_mechanism": "",
  "final_verdict": ""
}
```

### damage_map.json

```json
{
  "damage_score": 0,
  "damage_mode": "direct",
  "damage_signals": {
    "tp_risk": 0,
    "crest_risk": 0,
    "clipped_pct": 0,
    "transient_break": 0,
    "spectral_brokenness": 0,
    "harshness_risk": 0,
    "static_risk": 0,
    "stereo_instability": 0,
    "low_end_instability": 0
  },
  "damage_timeline": [
    {
      "stage": "",
      "damage_added": 0,
      "damage_type": "",
      "human_explanation": "",
      "wav_testimony": ""
    }
  ]
}
```

### desired_fixes.json

```json
{
  "requested_by_wav": [
    {
      "problem": "",
      "wav_request": "",
      "fix": "",
      "reason": "",
      "expected_benefit": "",
      "risk_if_ignored": ""
    }
  ],
  "engine_policy_recommendations": [
    {
      "policy_or_function": "",
      "change": "",
      "reason": ""
    }
  ]
}
```

### candidate_verdicts.json

```json
{
  "candidates": [
    {
      "candidate_id": "",
      "candidate_file": "",
      "render_reason": "",
      "promotion_status": "review_only",
      "wav_testimony": "",
      "technical_summary": "",
      "pass_fail": {
        "translation": null,
        "identity": null,
        "arc": null,
        "texture": null,
        "unlistenability_gate": null
      },
      "blocked_reasons": [],
      "review_reasons": [],
      "desired_fix": []
    }
  ],
  "selected_candidate": null,
  "best_stabilized_candidate": null
}
```

### final_recommendation.md

```markdown
# Final Recommendation

## Verdict

promotable | review_only | blocked | honest_stop

## First-Person WAV Statement

## Technical Decision

## Primary Failure or Success Mechanism

## Required Fixes

## Release Safety
```

## Runtime Decision Logic

```yaml
runtime_decision_logic:
  if_source_health_is_reject_source:
    action: honest_stop
    reason: source_file_not_safe_to_master

  if_feasibility_score_below_threshold:
    action: honest_stop_or_review_only
    reason: target_not_safe_for_source

  if_static_or_crackle_detected:
    action: blocked
    reason: unlistenability_gate_failed

  if_clipping_or_true_peak_violation_detected:
    action: blocked
    reason: release_safety_failed

  if_damage_score_high_and_identity_score_low:
    action: blocked
    reason: master_damaged_track_identity

  if_loudness_improved_but_texture_failed:
    action: review_only_or_blocked
    reason: loudness_gain_not_equal_mastering_success

  if_no_candidate_passes:
    action: honest_stop
    emit:
      - best_stabilized_candidate
      - desired_fixes
      - wav_testimony
```

## Verdict Meanings

- `promotable`: evidence supports release-safe promotion.
- `review_only`: candidate has usable information or partial improvement, but
  cannot be treated as release-safe yet.
- `blocked`: a release-safety or unlistenability gate failed.
- `honest_stop`: no safe candidate exists, the source is not masterable as
  supplied, or the requested target is unsafe for the available evidence.

## Gold Reference Output: Crimson Sojourn v10.4 A Render

Use this as a reference for excellent AM WAV Embodiment Parser output. It shows
the standard the skill should aim for: vivid first-person testimony, concrete
measurements, stage attribution, a distinction between technical failure and
harmful intended policy, and fixes that target the actual mechanism.

This fixture is not a universal diagnosis for every Crimson render. It is a
canonical example of how to reason when a render passes basic delivery gates but
still should not promote.

```yaml
canonical_fixtures:
  - id: crimson_sojourn_v10_4_a_render
    purpose: >
      Demonstrates that a render can pass delivery gates while still failing
      promotion due to design-intended tonal excess.
    key_lesson: >
      The WAV Embodiment Parser must distinguish broken processing from harmful
      but intentional chain behavior.
    expected_classification:
      damage_class: design_intended_excess
      first_damage_point: stage_04_eq3
      verdict: review_only
    required_insight:
      - "Limiter was not the source of damage."
      - "Saturator was not the source of harshness."
      - "The high-shelf correction overcompensated for a dark source."
      - "Mitigation systems were present but under-engaged."
      - "Fix should target chain policy, not blame final export."

diagnostic_distinctions:
  technical_failure:
    examples:
      - clipping
      - static
      - limiter_crackle
      - render_corruption
      - NaN_measurement
      - true_peak_violation
    likely_verdict: blocked

  design_intended_excess:
    examples:
      - excessive high_shelf
      - over-bright dark-source compensation
      - over-wide stereo
      - too much saturation color
      - excessive density from policy choice
    likely_verdict: review_only

  successful_but_not_promotable:
    definition: >
      A render that completes, passes basic delivery gates, and preserves some
      technical metrics, but fails musical/translation judgment because the
      engine made an unsafe or overreaching aesthetic choice.
```

### wav_testimony.md: Crimson Sojourn through v10.4 A render

```markdown
I begin dark. My source state: integrated LUFS -13.75, crest 12.71 dB
(dense, already compressed). My spectrum from 500 Hz to 16 kHz descends a full
29 dB: 500 Hz at -47.86, 16 kHz at -76.80. My tilt is -32.33 dB. I am
bass-and-low-mid dominant by mix design; my high frequencies are quiet, my air
band is at the floor.

The chain enters me. I track each stage.

By the time I exit, I have measurably changed:

- 500 Hz: -47.86 -> -50.23, the lower mid was cut -2.37 dB.
- 1 kHz: -50.44 -> -52.05, flat-ish, -1.61 dB.
- 2 kHz: -56.22 -> -54.79, lifted +1.43 dB.
- 4 kHz: -59.85 -> -54.68, lifted +5.17 dB.
- 8 kHz: -67.71 -> -62.62, lifted +5.09 dB.
- 16 kHz: -76.80 -> -70.39, lifted +6.41 dB.

My tilt went from -32.33 to -22.94, a +9.39 dB tilt lift, almost exactly the
high shelf's +9 dB nominal. My crest grew from 12.71 to 15.95. My transients
survived; in fact, I got more headroom because the limiter only needed 3.09 dB
max gain reduction at 0.17% active.

The complaint is real and the arithmetic confirms it. My 4-8 kHz region, the
human ear's most sensitive band, where sibilance, cymbal grain, and electric
guitar bite live, was boosted by about 5 dB while the rest of me sits roughly
where the source put me. From the listener's vantage, that is a presence and
upper-mid shelf riding above my body. Audibly forward. The word "harsh" fits,
not because anything is broken, but because the boost is large.
```

### chain_parse.json: first damage point and responsible stages

```json
{
  "first_damage_point": "stage_04_eq3",
  "damage_class": "design_intended_excess",
  "responsible_stages_ranked": [
    {
      "stage": "eq3",
      "contribution_db_4k_8k": "+5 dB net",
      "intentional": true
    },
    {
      "stage": "air_recovery",
      "contribution": "presence_band_expander_still_active",
      "h_risk_below_disable_threshold": true
    },
    {
      "stage": "deharsh",
      "contribution": "bypassed_did_not_engage",
      "would_help": true
    },
    {
      "stage": "dyneq",
      "contribution": "active_8k_13.2pct_-2.24dB_GR",
      "insufficient_for_static_shelf": true
    },
    {
      "stage": "deesser",
      "contribution": "active_3.6pct_-5dB_GR",
      "catches_sibilance_only": true
    }
  ],
  "saturator_contribution_to_harshness": "minimal (delta_rms +0.08 dB on A, +0.43 dB on B); not the source of harshness"
}
```

### damage_map.json: broken versus working

```markdown
Not broken:
- limiter: 0.17% active
- true peak compliance: -1.1 dBTP
- LUFS targeting: -13.0
- crest: 15.95, improved
- stereo: correlation 0.7511
- saturator: transparent

Not broken but loud:
- eq3 high shelf: +9 dB at 8 kHz, Q 0.5
- this is the design choice for dark-source compensation

Under-engaged mitigation:
- deharsh.wet = 0, default-bypassed
- air_recovery.band3_disable did not trigger; gate is h_risk >= 70 and source is 54
- dyneq is cutting 8 kHz at 13.2% active with -2.24 dB max GR
- deesser cuts 3.6% with -5.05 dB max GR and catches only the worst sibilance
```

### desired_fixes.json: highest leverage fixes

```json
{
  "fixes_ranked_by_leverage": [
    {
      "id": "knock_high_shelf_on_dark_sources",
      "where": "eq3.bands (the +9 dB highshelf @ 8 kHz, Q 0.5)",
      "change": "reduce to +5 dB when source tilt < -25 dB AND harshness_risk > 40",
      "expected_benefit": "-4 dB net reduction in 4-16 kHz lift; still meaningfully brightens dark source without becoming presence-forward",
      "risk_if_ignored": "every dark source emerges presence-forward and unlistenable on revealing playback",
      "verifiable_via": "post-chain 4 kHz / 8 kHz band level vs source"
    },
    {
      "id": "lower_air_band3_disable_threshold",
      "where": "compute_v10_4_overlays() air_recovery gate",
      "change": "h_risk >= 70 -> h_risk >= 50 for band3 presence expander disable",
      "expected_benefit": "moderately-harsh sources stop getting upward HF expansion stacked on the static EQ shelf",
      "risk_if_ignored": "double-stack of static boost + expander on borderline harsh material"
    },
    {
      "id": "engage_deharsh_at_moderate_harshness",
      "where": "v10.4 calibration deharsh.bypass + tuner overlay",
      "change": "engage deharsh split-band path when source harshness_risk > 40 (currently requires > 60)",
      "expected_benefit": "split-band mode cuts only the harsh band; LF/body unaffected per the closed STAGE-07-DEHARSH-IMPROVE listening validation",
      "risk_if_ignored": "harshness mitigation is all-or-nothing instead of graduated"
    },
    {
      "id": "tilt_correction_overlay_on_dark_sources",
      "where": "new compute_v10_4_overlays() gate",
      "change": "if source tilt < -25, add a dynamic_eq band cut at 3.5-6 kHz (-2 dB, Q 1.0) that engages on transients",
      "expected_benefit": "preserves the chain's intended HF lift on sustained content but tames transient bite (where harshness lives)",
      "risk_if_ignored": "transient HF unaddressed by static cuts"
    }
  ]
}
```

### Verdict

```text
review_only - the render completed, hit delivery gates, and preserved stereo
and dynamics. But the master should not promote until the harshness is addressed
at the chain level. The saturator-overlay A/B cannot return an honest verdict
until the baseline is presence-balanced.
```
