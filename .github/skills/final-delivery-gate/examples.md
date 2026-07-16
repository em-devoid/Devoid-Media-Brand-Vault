# Examples

## Example 1: verified patch, incomplete regression scope

### Delivery status
**Delivery status: PASS WITH EXPLICIT RISKS**

### Objective
Resolve the visible conflict and restore the intended timeout variable path.

### What was actually verified
The merged block now points to the intended timeout variable in the shown file.

### What is still unverified
End-to-end runtime behavior and surrounding call sites.

### Regression risk
Other timeout call sites may still reference the old variable.

### Contract risk
Low in the shown file, but broader timeout contract alignment remains unverified.

### Commercial-standard gap
Not applicable.

### Required next step
Run the relevant runtime and regression checks before claiming full closure.

---

## Example 2: implementation exists, verification missing

### Delivery status
**Delivery status: FAIL**

### Objective
Fix the bug and confirm the failure path is closed.

### What was actually verified
The proposed code change.

### What is still unverified
The original failure path, compile status, and relevant tests.

### Regression risk
Unknown because verification did not happen.

### Contract risk
Unknown.

### Commercial-standard gap
Not applicable.

### Required next step
Run the relevant build/test path and verify the original failure is actually closed.

---

## Example 3: dsp claim below standard

### Delivery status
**Delivery status: FAIL**

### Objective
Produce commercial-quality mastering behavior.

### What was actually verified
Some local behavior improvements and isolated metrics.

### What is still unverified
Full perceptual quality and adjacent stage interactions.

### Regression risk
Potentially material outside the measured metric.

### Contract risk
Low.

### Commercial-standard gap
Known quality gap remains, so “commercial quality” is not justified.

### Required next step
Close the named quality gap or narrow the claim.

---

## Example 4: honest scoped readiness

### Delivery status
**Delivery status: PASS**

### Objective
Restore the contract-safe behavior requested.

### What was actually verified
The relevant file change, the targeted test path, and no material adjacent regression within scope.

### What is still unverified
Nothing material within the delivery scope.

### Regression risk
No material unacknowledged risk remains in scope.

### Contract risk
No silent contract drift identified in scope.

### Commercial-standard gap
Not applicable.

### Required next step
None.