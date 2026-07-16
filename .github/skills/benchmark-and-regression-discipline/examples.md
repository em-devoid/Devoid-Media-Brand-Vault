\# Examples



\## Example 1: no baseline



\### Bad

This change improves performance.



\### Better

No benchmark baseline is shown here, so performance improvement is not established.



\---



\## Example 2: one-dimensional win with hidden tradeoff



\### Bad

The new limiter logic is better.



\### Better

The measured result reduces the targeted artifact under the tested condition, but broader regression status across adjacent limiter behavior remains unverified.



\---



\## Example 3: honest benchmark framing



\### Baseline

Previous clipper threshold conversion path using exact math.



\### Change under test

Approximate math substitution in the threshold conversion path.



\### Comparison method

Before/after precision and runtime comparison under the stated benchmark condition.



\### Measured improvements

Small runtime gain in the hot path.



\### Measured regressions

Precision drift in a cold/init path caused test failure pressure.



\### Commercial-standard gap

The hot-path improvement may matter, but the cold-path drift is not justified by commercial requirements.



\### Unverified

Broader downstream sensitivity outside the shown tests.



\### Recommendation

Keep approximation only in the hot path and revert it in the cold path.



\---



\## Example 4: anecdote vs measurement



\### Bad

It sounds cleaner, so the de-esser is improved.



\### Better

Listening impressions may be useful, but they do not replace measured comparison. The claim should be narrowed unless the relevant artifacts or metrics were actually compared.



\---



\## Example 5: commercial-standard honesty



\### Good

The result is directionally better on the measured metric, but still does not clearly meet the relevant commercial-quality bar.

