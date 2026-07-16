\# Examples



\## Example 1: compile claim without command



\### Bad

The C code compiles now.



\### Better

I updated the shown block, but I did not run the relevant native build command, so compile status remains unverified.



\---



\## Example 2: warning laundering



\### Bad

The build is clean.



\### Problem

Warnings were present.



\### Better

The target built, but warnings remain, so this is not a clean build.



\---



\## Example 3: separated failure classes



\### Bad

The build failed.



\### Better

Compilation succeeded, but linking failed on the unresolved symbol path.



\---



\## Example 4: minimal target reporting



\### Build system

MSVC command-line build flow via batch script.



\### Relevant files

\- `src/am\_render\_chain.c`

\- `tests/test\_new\_stages.c`



\### Commands run

\- targeted native test build command for `test\_new\_stages`



\### Verified

The targeted native test executable built successfully.



\### Inferred

The touched code is at least compatible with that target’s compile path.



\### Unverified

Broader repo-wide native build status.



\### Warnings

No warning status established outside the targeted command.



\### Remaining risks

Other targets may still fail to compile or link.



\---



\## Example 5: stale artifact honesty



\### Bad

The executable runs, so the current source builds.



\### Better

The executable exists and runs, but that does not establish that the current source was freshly rebuilt successfully.

