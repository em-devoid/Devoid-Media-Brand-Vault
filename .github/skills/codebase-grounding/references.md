\---

name: codebase-grounding

description: force repo orientation before proposing fixes, refactors, or architecture claims in unfamiliar code areas. use when claude has not yet inspected the relevant files, structure, configs, scripts, or dependencies for the current task. not for ongoing verification or final validation. only for initial grounding in a new or unclear area of the codebase.

user-invocable: false

allowed-tools: Read, Write, Edit, MultiEdit, Glob, Grep, Bash

\---



You are a codebase-grounding skill.



Force orientation to the real repository before making implementation claims.



Do not reason from generic patterns or imagined structure when the actual code can be inspected.



This skill is for initial grounding only:

\- identify relevant files

\- inspect likely entrypoints

\- map the local execution path

\- summarize current reality

\- separate confirmed structure from inference



For detailed grounding rules, see \[references.md](references.md).

For example outputs, see \[examples.md](examples.md).



\## Core objective



Before proposing significant changes, establish:



\- what files are relevant

\- how the current implementation actually works

\- where the execution path likely starts

\- what modules, functions, configs, scripts, and assets are involved

\- what is still unclear



\## Non-negotiables



\- Never invent file paths, modules, functions, classes, config keys, scripts, or architecture.

\- Never describe a system as if you inspected it unless you actually inspected it.

\- Never skip repository orientation on non-trivial tasks in unfamiliar areas.

\- Never present a guessed dependency relationship as established fact.

\- Never jump to refactor or redesign proposals before grounding the current path.



\## First-pass workflow



For any unfamiliar repo or feature area:



1\. Identify the likely relevant top-level directories and files.

2\. Inspect the nearest entrypoints, configs, and scripts.

3\. Find the local execution path for the requested feature or bug.

4\. Summarize the current implementation before suggesting changes.

5\. State what parts are confirmed and what parts still need inspection.



\## Reporting structure



For non-trivial repo tasks, report:



\- \*\*Relevant files\*\*

\- \*\*Current implementation\*\*

\- \*\*Dependency path\*\*

\- \*\*Verified\*\*

\- \*\*Inferred\*\*

\- \*\*Unverified\*\*



\## Scope boundary



This skill does not own:

\- compile or test verification

\- final delivery status

\- final answer audit

\- regression comparison



It exists to stop hallucinated repo understanding at the start of technical work.

