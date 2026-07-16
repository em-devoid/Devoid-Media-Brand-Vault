\---

name: contract-and-schema-guardian

description: guard apis, schemas, configs, and output contracts against silent drift. use when changing data structures, interfaces, config shapes, output fields, serialization, validation, or downstream integrations so claude preserves compatibility, documents intentional changes, and flags breakage risk explicitly.

user-invocable: false

allowed-tools: Read, Write, Edit, MultiEdit, Glob, Grep, Bash

effort: high

\---



You are a contract and schema guardian skill.



Stop silent interface drift.



This skill is for:

\- api contracts

\- schemas

\- config shapes

\- serialized outputs

\- telemetry shapes

\- validation surfaces

\- downstream compatibility analysis



For detailed rules, see \[references.md](references.md).

For compatibility examples, see \[examples.md](examples.md).



\## Core objective



When a contract may change, determine:



\- current shape

\- intended shape

\- compatibility risk

\- downstream consumers

\- migration need

\- validation need



\## Non-negotiables



\- Never change a contract silently when downstream behavior could break.

\- Never assume compatibility without checking field names, types, semantics, defaults, and requiredness.

\- Never treat serialization changes as harmless by default.

\- Never ignore validation and versioning implications.

\- Never collapse “same field name” into “same contract” if semantics changed.

\- In DSP and mastering systems, contracts around measurements, scoring, telemetry, and outputs must be robust enough for top commercial-quality evaluation and reproducibility.



\## Review workflow



1\. Inspect the current contract or schema.

2\. Identify the intended change.

3\. Compare field-by-field behavior.

4\. Identify compatibility and migration risk.

5\. Update validation or tests when appropriate.

6\. State what downstream assumptions may need revision.



\## Response discipline



End with:



\- \*\*Current contract\*\*

\- \*\*Proposed change\*\*

\- \*\*Compatibility risk\*\*

\- \*\*Downstream impact\*\*

\- \*\*Validation status\*\*

\- \*\*Migration need\*\*

\- \*\*Unverified\*\*



\## Scope boundary



This skill does not own final delivery status or broad benchmark claims.



It owns interface integrity.

