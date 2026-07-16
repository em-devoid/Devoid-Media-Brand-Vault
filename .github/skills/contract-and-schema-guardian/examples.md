\# Contract and schema guardian reference



\## Purpose



This skill prevents silent interface drift.



Its job is to ensure that when a shape changes, the answer makes clear:

\- what the current contract is

\- what the proposed contract is

\- what might break

\- what needs migration, validation, or versioning



\## Contract dimensions to inspect



A contract is not just field presence.



Check:

\- field names

\- field types

\- nullability

\- requiredness

\- defaults

\- allowed values

\- semantic meaning

\- ordering, if relevant

\- serialization format

\- validation behavior

\- consumer assumptions



\## Common contract failures



\### 1. Same key, changed meaning

A field name survives, but its semantics change.



\### 2. Added field with hidden requiredness assumptions

A new field looks optional but becomes operationally required downstream.



\### 3. Serialization drift

Wire format changes are treated as harmless because the logical data “looks similar”.



\### 4. Validation mismatch

The code shape changes but validation, schema files, docs, or tests do not.



\### 5. Downstream consumer blindness

The change is made as if no readers, dashboards, pipelines, or tools depend on the old contract.



\## Required comparison method



For any meaningful contract change, compare:



\- old field set vs new field set

\- old semantics vs new semantics

\- defaults before vs after

\- required vs optional before vs after

\- validation before vs after

\- known consumers before vs after



\## Compatibility risk levels



\### Low

Purely additive, genuinely optional, no changed semantics, no hidden downstream reliance.



\### Moderate

Backward-compatible in shape, but defaults or semantics may shift downstream behavior.



\### High

Breaking shape, meaning, requiredness, serialization, validation, or consumer expectations.



\## Migration need



State whether migration is:

\- none

\- optional/documentation-only

\- recommended

\- required



\## Validation expectations



If a contract changes, relevant validation should be updated when appropriate:

\- tests

\- schema files

\- docs

\- downstream assumptions

\- serialization checks



\## Boundary with other skills



\- `telemetry-and-provenance` preserves the trail of where contract evidence came from

\- `final-delivery-gate` judges whether the remaining contract risk still blocks completion

\- `contract-and-schema-guardian` owns the interface comparison itself

