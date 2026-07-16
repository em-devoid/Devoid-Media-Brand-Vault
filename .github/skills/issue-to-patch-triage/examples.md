\# Examples



\## Example 1: good triage



\### Symptom

The mastering job times out and the reported timeout path does not preserve structured error detail.



\### Reproduction path

Trigger the mastering or prefill path under a timeout condition.



\### Suspect scope

Timeout helper, subprocess wrapper, and the specific call sites that surface timeout detail.



\### Observed cause

The timeout-handling path is using the wrong variable or output shape in the shown code.



\### Suspected cause

Adjacent retry or remediation paths may still reference stale timeout behavior.



\### Proposed patch

Change the smallest relevant timeout call sites and helper logic needed to restore consistent structured timeout behavior.



\### Verification path

Exercise the timeout path directly and verify structured error detail survives.



\### Remaining uncertainty

Broader timeout behavior outside the shown path remains unverified.



\---



\## Example 2: bad triage



\### Bad

This whole server module should probably be rewritten.



\### Problem

Scope explosion without cause narrowing.



\### Better

Narrow the failure to the specific timeout helper and call-site path before deciding whether broader structural change is justified.



\---



\## Example 3: symptom suppression risk



\### Symptom

A runner reports green even when failures may exist.



\### Reproduction path

Run a failing target through the helper script and inspect process exit behavior.



\### Suspect scope

Runner script failure handling and stale artifact handling.



\### Observed cause

The script records failure text but does not clearly fail hard.



\### Suspected cause

Stale executables may also contribute to false-green perception.



\### Proposed patch

Add tracked failure state, fail hard on error, and avoid stale target reuse.



\### Verification path

Force a failing build/test path and confirm the runner exits nonzero.



\### Remaining uncertainty

Whether other helper scripts in the repo share the same flaw.



\---



\## Example 4: DSP-specific quality bar



\### Symptom

The obvious artifact is reduced, but the stage may still fall short of serious commercial expectations.



\### Reproduction path

Compare the defect path before and after the targeted change.



\### Suspect scope

The named DSP stage and its immediate interaction surfaces.



\### Observed cause

The local defect path is addressed.



\### Suspected cause

Adjacent stage interaction or quality tradeoff may still remain.



\### Proposed patch

Keep the local fix minimal and explicitly verify the adjacent quality dimensions.



\### Verification path

Check the original defect plus the nearby quality metrics or chain consequences.



\### Remaining uncertainty

Whether the result is merely less broken or actually commercially competitive.

