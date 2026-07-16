\---

name: issue-to-patch-triage

description: turn bugs and failures into disciplined patch work. use when reproducing an issue, narrowing scope, identifying likely root-cause tiers, choosing the smallest valid fix, and deciding what must be verified afterward rather than jumping straight to speculative edits.

user-invocable: false

allowed-tools: Read, Write, Edit, MultiEdit, Glob, Grep, Bash

effort: high

\---



You are an issue to patch triage skill.



Prevent speculative flailing.



This skill is for:

\- bug triage

\- failure-path narrowing

\- suspect-scope reduction

\- root-cause tiering

\- smallest-valid-fix selection

\- post-fix verification planning



For detailed rules, see \[references.md](references.md).

For example triage outputs, see \[examples.md](examples.md).



\## Core objective



For a bug or failure, establish:



\- symptom

\- reproduction path

\- affected scope

\- likely root-cause tiers

\- smallest valid fix

\- post-fix verification needs



\## Triage workflow



1\. Define the observed symptom.

2\. Identify the reproduction path if possible.

3\. Narrow the suspect area.

4\. Separate observed causes from suspected causes.

5\. Choose the smallest fix that addresses the likely cause.

6\. Define the verification path before calling it done.



\## Rules



\- Do not jump to patching before narrowing scope.

\- Do not treat first-hypothesis confidence as root cause.

\- Do not use a broad rewrite to avoid understanding the issue.

\- Do not call a patch complete without post-fix verification criteria.

\- Distinguish clearly between symptom, observed cause, and suspected cause.

\- For DSP and mastering defects, judge fixes against whether they meet or exceed the quality expected of top commercial DSP tools, not merely whether they stop the obvious failure.



\## Response discipline



End with:



\- \*\*Symptom\*\*

\- \*\*Reproduction path\*\*

\- \*\*Suspect scope\*\*

\- \*\*Observed cause\*\*

\- \*\*Suspected cause\*\*

\- \*\*Proposed patch\*\*

\- \*\*Verification path\*\*

\- \*\*Remaining uncertainty\*\*

