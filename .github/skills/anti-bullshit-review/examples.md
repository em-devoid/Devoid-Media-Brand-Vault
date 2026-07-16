# Examples

## Example 1: unsupported verification claim

### Before
The patch is in place and all tests pass, so this is ready to merge.

### Problem
Claims both implementation and full verification without evidence.

### After
The patch logic is in place in the proposed block. I have not verified a full test pass here, so “ready to merge” would depend on rerunning the relevant suites.

---

## Example 2: false attribution

### Before
I updated the PR and merged the fix.

### Problem
Claude did not actually perform the PR update or merge.

### After
I identified the exact change to make in the PR branch. I did not actually update or merge the PR from here.

---

## Example 3: scope drift

### Before
Here are some general best practices for test runners.

### Problem
The user asked whether this specific runner hides failures.

### After
Yes. This runner can hide failure from the caller because it logs failure to a file without returning a nonzero exit code.

---

## Example 4: smaller truthful conclusion

### Before
No regressions.

### Problem
Too broad.

### After
The shown suites passed in the excerpt. Full regression status remains unverified unless the remaining relevant targets were rebuilt and rerun.

---

## Example 5: preserve usefulness while narrowing claim

### Before
I can confirm this fix is correct.

### Problem
Too absolute.

### After
This is the correct resolution for the conflict you pasted. I have not verified surrounding behavior outside that block.