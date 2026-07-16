\# Examples



\## Example 1: multi-file bug fix



\### Objective

Restore timeout handling for mastering jobs without breaking prefill or demucs behavior.



\### Scope

Timeout variable selection and call-site usage. No unrelated server cleanup.



\### Relevant files

\- `mastering\_system/server/app.py`

\- `mastering\_system/mastering\_api/app.py`



\### Likely entrypoints

\- timeout constant definitions

\- `run\_mastering\_job`

\- any retry path using the same timeout



\### Execution path

1\. inspect current timeout constants

2\. inspect mastering job call sites

3\. patch the intended variable path

4\. inspect retry path for consistency

5\. verify with targeted tests or direct evidence



\### Verification plan

Confirm the intended timeout variable is used consistently in the relevant mastering path.



\### Rollback point

Single-file revert of timeout-related edits or revert commit boundary.



\### Done criteria

The intended timeout path is consistent in scope and no stale reference remains in the targeted flow.



\### Risks or unknowns

Adjacent timeout code may still reference older variables outside the main path.



\---



\## Example 2: review-comment-driven fix



\### Objective

Address the review comment without broadening the patch beyond the reported issue.



\### Scope

Fix the commented issue and any strictly necessary nearby alignment changes.



\### Relevant files

\- commented file

\- nearest test file

\- any directly coupled contract/schema file



\### Likely entrypoints

The exact function, path, or runner named in the review.



\### Execution path

1\. inspect the complained-about code

2\. determine whether the comment is valid

3\. patch only the relevant path

4\. update or add targeted validation

5\. restate remaining unverified areas



\### Verification plan

Target the complained-about path first, not a generic suite.



\### Rollback point

Patch-local revert.



\### Done criteria

The reported problem is addressed without accidental scope expansion.



\### Risks or unknowns

The review comment may point to a broader pattern that remains out of scope.



\---



\## Example 3: DSP or mastering change



\### Objective

Improve the targeted DSP behavior without silently degrading adjacent stages or claims of commercial quality.



\### Scope

The named stage or interaction path only.



\### Relevant files

\- stage implementation

\- nearby stage interaction logic

\- targeted tests or telemetry



\### Likely entrypoints

The stage config, stage processing path, telemetry, and validation harness.



\### Execution path

1\. inspect current stage behavior

2\. identify interaction surfaces

3\. patch the smallest viable change

4\. verify targeted behavior

5\. assess adjacent regression risk



\### Verification plan

Use the smallest tests or metrics that actually prove the targeted improvement.



\### Rollback point

Stage-local revert boundary.



\### Done criteria

The targeted improvement is established and adjacent risks are explicitly bounded.



\### Risks or unknowns

Commercial-standard sufficiency may remain unverified even if the local fix looks good.

