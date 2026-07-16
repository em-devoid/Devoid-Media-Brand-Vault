# Fast DSP math reference

## Purpose

This skill keeps DSP math both fast and honest.

Its job is to stop:
- hand-wavy derivations
- unlabelled approximations
- weak shortcuts presented as serious DSP engineering
- performance claims without real tradeoff analysis
- cold-path math churn that buys little and costs contract stability

## Core question

For any proposed formula or shortcut, ask:

1. What exact quantity are we computing?
2. Is an exact method practical here?
3. If not, what approximation is being used?
4. What is the numerical error?
5. What is the performance benefit?
6. Is the path hot enough to justify the approximation?
7. Does the result still meet a commercial-grade bar?

## Hot path vs cold path

This distinction matters.

### Hot path
Per-sample, per-frame, per-block, or heavily repeated code where small savings can matter.

### Cold path
Init-time, config-time, schema-time, one-off conversion, or other infrequent paths where drift often costs more than it saves.

Rule:
- hot paths may justify approximation if the gain is real and the error is bounded
- cold paths usually should not accept approximation drift unless there is a strong reason

## Required approximation disclosures

If using an approximation, state:
- what function or quantity is approximated
- approximation family or method, if known
- expected error magnitude
- domain/range where the error claim applies
- performance reason
- whether the gain is measured or merely expected

## Common failure modes

### 1. Approximation without need
A shortcut is used because it is clever, not because the path is expensive.

### 2. Precision drift with no meaningful gain
A cold-path approximation creates output differences and test pressure with negligible runtime benefit.

### 3. Benchmark-free performance claim
“Faster” is asserted without a benchmark or realistic workload context.

### 4. Exactness theater
A formula is described as exact when scaling, units, or numerical conditioning were ignored.

### 5. Stability blindness
A method is locally fast but numerically fragile.

## Preferred reasoning pattern

### Exact if practical
Use the exact formulation when cost is acceptable.

### Approximate only with justification
If approximating:
- quantify the error
- quantify the gain
- justify the path
- state the tradeoff honestly

### Preserve contract integrity
If the exact output matters contractually or behaviorally, do not casually swap in approximate math.

## Commercial-standard bar

A top-tier DSP implementation should be:
- numerically stable
- reproducible
- properly ranged and scaled
- benchmark-conscious
- honest about error
- unwilling to trade output integrity for trivial speedups

## Boundary with other skills

- `benchmark-and-regression-discipline` compares before/after results
- `dsp-mastering-expert` reasons about audible/system consequences
- `fast-dsp-math` owns the derivation, approximation, and error/performance tradeoff itself

## Additional reference material

If the task needs deeper theoretical grounding than this skill should carry inline, consult the advanced DSP PDF references bundled with the broader DSP/mastering skill set.