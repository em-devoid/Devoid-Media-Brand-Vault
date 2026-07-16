# Examples

## Example 1: failure-hiding runner

### Verdict
Failure-hiding script

### Why
The script records build/test failure to a log but does not fail hard.

### Evidence
It echoes failure markers but never sets a failure flag and never exits nonzero.

### What is missing
A hard-fail path and a trustworthy final process exit status.

### Required fix
Track failure state and exit nonzero on any build or test failure.

### Safe claim language
“This helper records results, but it is not yet a trustworthy verifier because failures do not propagate to the caller.”

---

## Example 2: partial suite overstated

### Verdict
Misleading pass claim

### Why
The claim exceeds the actual verification scope.

### Evidence
Several relevant suites were not rebuilt or rerun against current code.

### What is missing
Fresh results for the omitted suites.

### Required fix
Run the missing suites or narrow the claim to the suites actually verified.

### Safe claim language
“Partial verification passed for the listed suites; full regression status remains unverified.”

---

## Example 3: stale binary risk

### Verdict
Verification gap

### Why
The runner does not prove a fresh build and may reuse old executables.

### Evidence
It does not remove old binaries and does not surface a hard build failure.

### What is missing
Fresh-build assurance.

### Required fix
Delete stale targets before rebuild or otherwise guarantee fresh artifacts.

### Safe claim language
“The shown results may reflect the current build, but fresh-build status is not fully established by this runner.”

---

## Example 4: non-hot-path approximation

### Verdict
Verification gap

### Why
A cold-path approximation changed numerical behavior and created pressure to weaken tests.

### Evidence
The changed path is init-time only, while the tests failed on precision drift rather than behavior.

### What is missing
A contract reason to accept the drift.

### Required fix
Revert the approximation in the cold path and keep optimization only where it materially matters.