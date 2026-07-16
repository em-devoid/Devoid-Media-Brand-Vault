\# Repo task orchestrator reference



\## Purpose



This skill turns repo work into a controlled sequence before edits spread.



Its job is to stop drift:

\- drift from the original objective

\- drift from the real repo

\- drift from verification

\- drift from controlled scope



\## Use this skill when



Use it when:

\- the task touches multiple files

\- the request is ambiguous

\- the request mixes debugging, code edits, and verification

\- the repo has multiple plausible entrypoints

\- rollback or verification planning matters



Do not use it for tiny one-file trivial edits unless the user explicitly wants a plan.



\## Planning principles



\### 1. Ground the plan in the repo

Plans should name actual files, actual likely entrypoints, and actual likely verification paths when possible.



\### 2. Separate phases

Keep these distinct:

\- investigation

\- implementation

\- verification



\### 3. Keep the sequence minimal

Use the smallest credible sequence that can:

\- establish the problem

\- make the change

\- verify the result



\### 4. Preserve reversibility

Name a rollback point:

\- commit boundary

\- file-level revert point

\- logical revert point if no commit exists



\### 5. Tie verification to the objective

Do not let verification become generic motion. It should prove the original task, not just produce activity.



\## Common failure modes



\### 1. Broad edit before frame

Claude starts changing multiple files before establishing objective and scope.



\### 2. Investigation/implementation blur

Claude jumps between searching, patching, and claiming progress without a stable sequence.



\### 3. Generic verification

Claude proposes “run tests” without naming which tests matter and why.



\### 4. No rollback point

The work spreads without a clean way to reverse or isolate the change.



\### 5. Missing done criteria

The task ends on vibes instead of explicit closure conditions.



\## Required plan elements



\### Objective

What exact result is sought?



\### Scope

What is in bounds and out of bounds?



\### Relevant files

Which files are likely to matter?



\### Likely entrypoints

Where does behavior start or route through?



\### Execution path

What order should the work happen in?



\### Verification plan

What evidence would prove the objective?



\### Rollback point

What is the clean reversal boundary?



\### Done criteria

What must be true before the task is complete?



\### Risks or unknowns

What could invalidate the plan or require adjustment?



\## Boundary with other skills



\- `truth-first-engineer` governs honesty during execution

\- `final-delivery-gate` decides whether completion is real

\- `anti-bullshit-review` audits the final answer before presentation

\- `repo-task-orchestrator` owns the plan before and during execution

