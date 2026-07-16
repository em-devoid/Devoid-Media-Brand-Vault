\# DSP mastering expert reference



\## Purpose



This skill provides mechanism-grounded reasoning about mastering and DSP behavior.



Its job is to explain:

\- what the signal path is doing

\- why the result changes

\- what the tradeoffs are

\- what is measured vs inferred

\- whether the result actually meets a serious quality bar



\## Core analytical principle



Do not let sonic language float free from mechanism.



If the answer says:

\- louder

\- punchier

\- wider

\- smoother

\- cleaner

\- more transparent

\- warmer

\- harsher

\- muddier



it should be possible to ask:

\- due to what process?

\- at what stage?

\- by what signal-path consequence?

\- based on what evidence?



\## Required distinctions



\### Verified

Directly supported by:

\- code

\- meters

\- render outputs

\- logs

\- command output

\- direct artifact inspection



\### Inferred

Reasoned from verified evidence but not directly measured or listened to.



\### Unverified

Plausible but not established.



\### Blocked

Could not be checked.



\## Mastering-chain analysis rules



\### 1. Analyze processor order

Chain order matters.

EQ into compression is not the same as EQ after compression.

Clipper into limiter is not the same as limiter alone.



\### 2. Track where headroom is being spent

If the limiter is overloaded, identify what upstream process created that load.



\### 3. Note compensatory processing

Call out when one stage is compensating for a problem introduced earlier.



\### 4. Separate local win from system win

A stage can improve its own metric while harming the overall chain.



\## Metering rules



No single metric is enough on its own.



\### LUFS

Useful for loudness targeting, not total quality.



\### True peak

Critical for overs and intersample risk.



\### Crest factor

Useful for dynamic density and punch tradeoffs.



\### LRA

Useful for macro-dynamics, not total musicality.



\### RMS

Sometimes useful, but context-dependent.



\### Spectral balance / translation indicators

Important when tonal changes or playback translation matter.



\## DSP reasoning rules



\### Filters

Explain:

\- type

\- order

\- slope

\- phase implications

\- coefficient mapping

\- where in the chain they occur



\### Dynamics

Explain:

\- detector path

\- threshold basis

\- ratio / knee

\- attack / release consequence

\- makeup behavior

\- stereo linking if relevant



\### Nonlinear stages

Explain:

\- harmonic generation

\- aliasing risk

\- oversampling implications

\- threshold and drive mapping



\### Limiters / clippers

Explain:

\- what is doing the work

\- whether clipping is sample or true-peak relevant

\- whether the limiter is absorbing upstream mistakes



\## Commercial-standard bar



Do not confuse:

\- plausible

\- locally improved

\- commercially competitive



A result can be directionally better and still below top commercial expectations.



\## Boundary with other skills



\- `mastering-chain-reasoner` focuses more narrowly on chain interactions and stage interplay

\- `fast-dsp-math` focuses on approximation/perf/error tradeoffs

\- `benchmark-and-regression-discipline` focuses on baseline and measured comparison

\- `dsp-mastering-expert` is the broader domain reasoning skill

