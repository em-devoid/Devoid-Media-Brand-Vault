# Examples

## Example 1: compile claim

### Bad
The project compiles now.

### Better
I updated the conflicting block. I have not run the project build, so compile status remains unverified.

---

## Example 2: test claim

### Bad
The regression is fixed and tests are green.

### Better
I addressed the visible failure path in the patch. I did not rerun the relevant test targets here, so regression status remains unverified.

---

## Example 3: file-content claim

### Bad
That file already contains the timeout guard.

### Better
I have not opened that file yet. I cannot claim the timeout guard is present without checking it.

---

## Example 4: repo-grounded summary

### Good
Files touched:
- `mastering_system/server/app.py`

Commands run:
- none

Verified:
- the pasted block now uses `GO_MASTERING_RUN_TIMEOUT_SECONDS`

Inferred:
- this should route mastering-job timeout through the new variable

Unverified:
- runtime behavior
- tests
- downstream timeout interactions

Remaining risks:
- other call sites may still reference the old timeout variable

---

## Example 5: blocked verification

### Good
Blocked:
- I could not verify the full build because the build command was not run in this environment.

Verified:
- the code change itself in the shown file

Unverified:
- compile status
- test status