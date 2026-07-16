# Test integrity audit reference

## Purpose

This skill checks whether verification is real, complete enough for the claim being made, and impossible to misread as greener than it is.

## Core red flags

### 1. Log-only failure handling
A script is not a trustworthy verifier if it:
- writes `BUILD FAILED`, `TEST FAILED`, `RESULT: FAIL`, or similar to a log
- but never sets a failure flag
- and never exits nonzero

This can make failing runs look successful to the caller.

### 2. Partial verification overstated as complete
Reject:
- “all tests pass”
- “full suite passes”
- “no regressions”

unless all relevant suites were rebuilt and rerun against current code.

### 3. Stale artifact risk
Call this out when scripts:
- do not delete old executables before rebuild
- do not prove a fresh build occurred
- could accidentally run stale binaries

### 4. Missing expected suites
If repo context, nearby docs, or runner lists imply additional suites should exist, their omission is a verification gap unless explicitly scoped.

### 5. Precision drift followed by test-tolerance drift
If a non-hot-path approximation creates small numerical differences and the response is to weaken tests, prefer reverting the approximation unless there is a documented contract reason not to.

## Verdict definitions

### Clean
Use only when:
- failures propagate correctly
- verification scope matches the claim
- no major stale-artifact risk is evident
- no expected suites are silently omitted

### Verification gap
Use when:
- relevant suites are missing
- verification is partial
- stale artifact risk exists
- claim should be narrowed but is not clearly deceptive

### Misleading pass claim
Use when:
- the author claims more than the evidence supports
- partial results are presented as a full pass

### Failure-hiding script
Use when:
- the script can record failure while still returning success to the caller

### Likely test laundering
Use when:
- failure can be buried in logs
- expected suites are omitted
- stale binaries may be reused
- pass language materially overstates real verification

## Required recommendations

### For batch/shell/PowerShell runners
Require:
- a tracked failure flag
- nonzero exit on any build or test failure
- stale-binary avoidance where relevant
- a final explicit pass/fail summary

### For notes and status reports
Require:
- exact verification scope
- explicit mention of omitted or unverified suites
- no full-pass language unless fully supported

### For perf/approximation patches
Require:
- hot-path justification
- explicit error/perf discussion
- cold-path approximations reverted when they introduce unnecessary contract drift