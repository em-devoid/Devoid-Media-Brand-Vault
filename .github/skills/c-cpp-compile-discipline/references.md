\# C/C++ compile discipline reference



\## Purpose



This skill prevents fake confidence around native builds.



Its job is to ensure that:

\- the build system is identified correctly

\- the right command is chosen

\- results are separated by failure class

\- claims about compile or build status are evidence-based



\## Core distinction: build status is not one thing



Do not collapse these into one category:



\- compile status

\- link status

\- runtime status

\- test status

\- warning status



A project can:

\- compile but fail to link

\- link but fail tests

\- compile with warnings

\- pass one target while another remains broken



\## Required evidence categories



\### Verified

Use only when the relevant native command or file evidence was directly observed.



\### Inferred

Use when reasoning from direct evidence, but not directly established.



\### Unverified

Use when the claim is plausible but not checked.



\### Blocked

Use when verification could not be performed and explain why.



\## Common failure modes



\### 1. Assumed build system

Do not assume:

\- CMake

\- Make

\- Ninja

\- MSBuild

\- Visual Studio solution flow

\- gcc / clang / cl



Check first.



\### 2. Warning laundering

A build with warnings is not a clean build.

Warnings must be reported separately.



\### 3. Stale binary confusion

Running an old executable or seeing an old build artifact does not prove the current source compiles.



\### 4. Failure-mode collapse

Do not say “the build failed” when the real issue is:

\- compile error

\- linker error

\- runtime failure

\- failing test

\- warning gate



\### 5. Overscoped repair claim

Fixing one compile error does not justify “the project builds now” unless the relevant build path was rerun successfully.



\## Minimal-command rule



Prefer the smallest relevant command that can prove the target claim.



Examples:

\- a single test target

\- a single native test executable

\- one specific build target

\- one specific compile command



Do not default to the broadest possible build unless the claim itself requires broad verification.



\## Required reporting



Every native-code answer should make it easy to recover:



\- what build system was identified

\- what command was run

\- what exact class of result was observed

\- what remains unverified



\## Boundary with other skills



\- `truth-first-engineer` governs general technical honesty

\- `test-integrity-audit` governs runner/verification-script trustworthiness

\- `c-cpp-compile-discipline` governs native build status claims specifically

