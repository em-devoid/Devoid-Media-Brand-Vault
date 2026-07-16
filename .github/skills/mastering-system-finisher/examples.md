# Mastering System Execution Examples

## Example 1: Reconciling Stale Status
**Scenario**: `LIVE_STATUS.md` says the saturator stage is "Done," but `am_saturator.c` is missing the `hf_emphasis` wiring required by the FIXLIST.

**Response**:
### Repo state summary
- **Verified**: `am_saturator.c` processes `hf_emphasis` flag but never reads it from the config struct.
- **Verified**: FIXLIST item A1 is open: "Saturator hf_emphasis not wired."
- **Conclusion**: `LIVE_STATUS.md` is stale for Stage 15.

### Plan / next slice
- **Objective**: Wire `hf_emphasis` from config into the processing path in `am_saturator.c`.
- **Validation**: Build via `build_tests.bat`, run `test_new_stages.exe` — verify saturator HF emphasis test passes.
- **Docs**: Update FIXLIST A1 closure note with file, line, test, date. Update LIVE_STATUS if applicable.

---

## Example 2: Triage of New Breakage Found During Work
**Scenario**: While fixing the DynEQ per-band telemetry (A22), you notice the de-esser gain path uses `float` where the rest of the block has been promoted to `double`.

**Response**:
### New issue discovered
- **Issue**: De-esser gain path still `float` in `am_render_chain.c` lines 720-730.
- **Classification**: **Scope-coupled.** Cheap to fix now, directly serves A30 standing policy.
- **Action**: Promoted `sg`, `gain`, and arithmetic to `double`. Used `am_fast_db_to_lin_d()`.
- **Verification**: Rebuilt via `build_tests.bat`. `test_chain_stages.exe` 33/33 pass.

### Documentation updates
- Added to FIXLIST A30 incremental progress: "De-esser gain path promoted (2026-03-23)."

---

## Example 3: Plugin Work Against Compressor Benchmark
**Scenario**: Bringing AMGate up to the AMCompressor design standard.

**Response**:
### Repo state summary
- **Verified**: AMGate uses `TextBoxBelow` knobs, 980x640 window, no CRT readout grid, no versioned ParameterIDs, no unit formatting. Single GR readout.
- **Verified**: AMCompressor uses `NoTextBox` knobs, 1100x720, CRT readout grid (11 readouts), versioned ParameterIDs with `dbText`/`msText`, live telemetry.
- **Verified**: AMGate `processBlock` allocates `std::vector` per block — RT safety violation.

### Plan / next slice
1. Pre-allocate interleave buffers in `prepareToPlay` (fix RT violation first)
2. Add versioned ParameterIDs with unit formatting
3. Add CRT readout grid: threshold, hysteresis, hold, attack, release, range, GR, peak in, peak out, detector level
4. Switch to `NoTextBox` knobs
5. Resize to 1100x720
6. **Cannot build-verify** — requires JUCE at `C:/JUCE`. Mark as **unverified** until JUCE build confirmed.
- **Standing Policies**: RT discipline (processBlock heap alloc), plugin design standard (compressor benchmark).

---

## Example 4: Session Handoff
**Scenario**: End of session after closing 5 FIXLIST items.

**Response**:
### Session handoff — 2026-03-23

**Changed this session:**
- A29: Limiter latency compensation (`am_render_chain.c` line 1285)
- A22: DynEQ per-band telemetry (`am_render_chain.h`, `am_render_chain.c`, `am_master_engine.c`, `test_chain_stages.c`)
- A12: Transient sustain metric (`am_render_chain.c` line 890)
- A14: Image rejection threshold tightened (`test_oversample_loudness.c`)
- A15: Passband flatness threshold tightened (`test_oversample_loudness.c`)

**Verified:**
- `build_tests.bat` full run: 16/16 test files, 384/384 tests pass
- Pester: 123/123 pass (66 system + 54 mastering + 3 new)
- pytest: 35/35 pass

**Still open:**
- A30: Float-to-double ongoing (chain buffers, engine I/O still float)
- Plugin RT heap alloc (AMCompressor, AMExpander, AMGate)
- AMGate/AMExpander need design standard upgrade

**Next engineer should:**
1. Start with AMGate processBlock heap alloc fix (smallest RT safety item)
2. Continue A30 migration wherever code is touched
3. Consider AMSaturator standalone plugin — DSP is complete, no wrapper exists
