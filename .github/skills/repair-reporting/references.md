\# Repair reporting reference



\## Purpose



This skill turns a failed attempt into a clean report.



Its job is to preserve truth after failure:

\- what was attempted

\- what actually happened

\- what the decisive failure was

\- what changed despite the failure

\- what is now unknown

\- what the next likely corrective step is



\## Use this skill only after failure



Use it only after:

\- a fix attempt failed

\- a build failed

\- a test failed

\- a benchmark failed

\- a render failed

\- a verification attempt failed

\- a merge/conflict resolution path failed



Do not use it for:

\- planning

\- general debugging

\- final delivery judgment

\- broad repair strategy selection



\## Core distinctions



\### Attempted

What exactly was tried?



\### Observed result

What actually happened?



\### Decisive error or symptom

What specific failure best explains why the attempt did not succeed?



\### What changed

What code, state, config, artifacts, or conclusions changed despite the failed attempt?



\### What remains unverified

What can no longer honestly be claimed after the failure?



\### Next most likely corrective step

What is the narrowest sensible next move?



\## Common failure-reporting problems



\### 1. Failure laundering

The report is worded as if the attempt mostly succeeded.



\### 2. Vague symptom blur

The decisive failure is not named.



\### 3. Missing state change

The report omits that code or config was changed before the failure.



\### 4. Fake closure

The report implies the issue is basically fixed despite failed verification.



\### 5. Scope confusion

The report mixes:

\- what this attempt failed to do

\- what the overall problem still is



\## Good reporting style



A good repair report is:

\- narrow

\- evidence-based

\- specific to the failed attempt

\- honest about what is now uncertain

\- useful for the next corrective move



\## Boundary with other skills



\- `issue-to-patch-triage` decides the patch direction

\- `truth-first-engineer` governs honesty during the work

\- `repair-reporting` documents the failed attempt after it happened

