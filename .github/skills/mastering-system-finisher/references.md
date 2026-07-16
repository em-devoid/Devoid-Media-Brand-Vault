# Mastering System References

## Controlling Documents
The following files within `annihilation_matrix` are the authoritative sources of truth for project completion:
- `mastering_system/FIXLIST.md` — master fix and bug ledger
- `mastering_system/context/LIVE_STATUS.md` — current project status and render-blocked state
- `mastering_system/context/TASK_QUEUE.md` — open task queue

## Key Architecture Files

| File | What it defines |
| :--- | :--- |
| `am_helper_toolings/include/am_render_chain.h` | 18-stage DSP chain enum, config structs, telemetry struct |
| `am_helper_toolings/include/helper_dynamics.h` | Dynamics engine API (compressor, limiter, expander, gate) |
| `am_helper_toolings/include/am_fast_math.h` | Shared Remez polynomial approximations for hot paths |
| `am_helper_toolings/include/am_saturator.h` | Saturator/exciter (tanh/atan/tube, ADAA, oversampling) |
| `am_helper_toolings/include/am_clipper.h` | Clipper (hard/soft, ADAA order 0/1/2) |
| `am_helper_toolings/include/am_eq.h` | Branch EQ engine with per-band smoothing |
| `am_helper_toolings/include/am_stage_inspector_model.h` | Telemetry model for AMChainInspector |
| `am_helper_toolings/build_tests.bat` | C test build system (compile-once-link-many) |
| `am_helper_toolings/plugins/shared/AMLookAndFeel.h` | Nostromo terminal design system (theme, chrome, CRT) |
| `am_helper_toolings/plugins/shared/PlasmaComponents.h` | Shared UI components (meters, readouts, transfer curves) |
| `am_helper_toolings/tools/am_master_engine.c` | Native mastering engine CLI (WAV I/O, brand stamp, JSON config) |
| `scripts/lib/am_render_executor_v2.ps1` | V2 render executor (PowerShell orchestration) |
| `scripts/lib/am_candidate_generator.ps1` | Candidate generation and stage actuation |
| `data/contracts/` | Schema contracts (resolved policy, run summary, mastering results, ASAMS) |

## Technical DSP Doctrine
For deep mathematical grounding and implementation tradeoffs:

| Resource | Path |
| :--- | :--- |
| **Mastering Index** | `.claude/skills/dsp-mastering-expert/references/mastering-pdfs-index.md` |
| **Advanced DSP Handbook** | `.claude/skills/dsp-mastering-expert/references/Advanced Signal Processing Handbook.pdf` |
| **Advanced DSP** | `.claude/skills/dsp-mastering-expert/references/advanced dsp.pdf` |
| **DSP Math Supplement** | `.claude/skills/dsp-mastering-expert/references/more dsp math.pdf` |

## Test Suites

| Suite | Runner | Location |
| :--- | :--- | :--- |
| C unit/integration tests (16 files) | `build_tests.bat` | `am_helper_toolings/tests/` |
| Pester tests (system + mastering) | `Invoke-Pester` | `system/tests/pester/`, `mastering_system/tests/` |
| Python server tests | `pytest` | `mastering_system/server/tests/` |

## Execution Method Template
Propose work using this format:
- **Current Objective**: [FIXLIST ID or description]
- **Target Files**: [Paths that will be modified]
- **Validation Path**: [Which tests/builds confirm the fix]
- **Doc Updates**: [FIXLIST closure note, any status doc changes]
- **Standing Policies Affected**: [A30 float->double? Brand stamp? RT discipline?]
