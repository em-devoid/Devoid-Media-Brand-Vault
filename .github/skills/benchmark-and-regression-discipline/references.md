\# Benchmark and regression discipline reference



\## Purpose



This skill prevents fake improvement narratives.



Its job is to ensure that:

\- a baseline exists

\- the comparison is real

\- regressions are not hidden

\- the reported result matches the actual evidence



\## Core benchmark questions



Every meaningful comparison should be able to answer:



1\. What is the baseline?

2\. What changed?

3\. Under what conditions was the comparison made?

4\. What improved?

5\. What worsened?

6\. What remains unverified?

7\. Does the result actually meet the claimed standard?



If those questions cannot be answered, the claim must be narrowed.



\## Required benchmark components



\### Baseline

The prior artifact, build, code path, render, or metric source.



\### Change under test

Exactly what changed, not vague “optimization” language.



\### Comparison method

How the before/after or peer comparison was made:

\- direct benchmark

\- render comparison

\- metric comparison

\- test suite delta

\- profiling run

\- artifact inspection



\### Measured improvements

Only the dimensions that actually improved.



\### Measured regressions

Any dimension that worsened, even if it is not the headline metric.



\### Commercial-standard gap

Whether the result meets the relevant external quality bar, not just internal improvement.



\## Common benchmark failures



\### 1. No baseline

Claiming improvement without a prior reference point.



\### 2. Single-metric tunnel vision

A headline improvement hides regressions in adjacent dimensions.



\### 3. Benchmark theater

A result is technically measured but under unrealistic or underexplained conditions.



\### 4. Anecdote inflation

Listening impression, intuition, or code elegance is treated as proof of performance or quality.



\### 5. Commercial-standard inflation

An internal win is described as market-quality without enough evidence.



\## Multi-dimensional interpretation



A result can be:

\- faster but less stable

\- cleaner but more CPU-heavy

\- lower in distortion but worse in translation

\- more accurate but below real-time requirements



Do not collapse these into a single “better” unless the relevant tradeoff is truly justified.



\## Required downgrade rule



If:

\- the baseline is weak,

\- the measurement is partial,

\- the regression picture is incomplete,

\- or the comparison is anecdotal,



then the conclusion must be narrowed.



Examples:

\- “shows a measured improvement in X under the stated condition”

\- “looks promising but broader regression status remains unverified”

\- “improved one dimension while worsening another”



\## Boundary with other skills



\- `fast-dsp-math` governs approximation and numerical tradeoff logic

\- `truth-first-engineer` governs evidence honesty during work

\- `final-delivery-gate` decides whether completion is actually acceptable

\- `benchmark-and-regression-discipline` owns the comparison itself

