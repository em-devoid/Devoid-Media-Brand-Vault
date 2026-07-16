# Arithmetic References

## Use cases

Use this skill for:
- addition
- subtraction
- multiplication
- division
- percentages
- ratios
- averages
- absolute and relative differences
- simple unit conversions
- sanity checks on numeric claims

Do not use this skill for:
- symbolic algebra
- calculus
- proofs
- statistics beyond simple descriptive calculations
- finance or tax reasoning that depends on laws or current rules

## Output rules

### 1. Show the actual expression
Prefer a readable expression instead of only giving the answer.

Good:
- `15% of 240 = 0.15 × 240 = 36`

Less good:
- `36`

### 2. Preserve units
When the user gives units, include them in the result.

Example:
- `12 miles + 8 miles = 20 miles`

### 3. Handle rounding explicitly
If the decimal does not terminate cleanly:
- give the exact or full value first when practical
- then give the rounded form
- say how it was rounded

Example:
- `355 ÷ 12 = 29.5833333333`
- `Rounded to 2 decimals: 29.58`

### 4. State assumptions
If the prompt is underspecified, say what interpretation was used.

Example:
- `Assuming you want simple average: (12 + 18 + 25 + 29) ÷ 4 = 21`

### 5. Keep simple work simple
Do not over-explain easy arithmetic.

Good:
- **Expression:** `47 + 18`
- **Result:** `65`

Bad:
- long tutorial-style explanation for `47 + 18`

## Preferred formatting

### Default
- **Expression**
- **Result**
- **Notes** if needed

### With units
- **Expression**
- **Result**
- **Units/Notes**

### With ambiguity
- **Interpretation**
- **Expression**
- **Result**

## Conversion guidance

Safe for this skill:
- inches ↔ feet
- feet ↔ yards
- seconds ↔ minutes ↔ hours
- grams ↔ kilograms
- basic decimal/fraction/percentage transformations

Do not invent conversion factors. If unsure, say so.