#!/usr/bin/env python3
import json
import re
import sys

data = json.load(sys.stdin)
subject = data.get("task_subject", "") or ""
description = data.get("task_description", "") or ""
text = f"{subject}\n{description}"

delivery_like = [
    r"\bdeliver\b",
    r"\bcomplete\b",
    r"\bdone\b",
    r"\bready\b",
    r"\bfix\b",
    r"\bverification\b",
    r"\bregression\b",
    r"\bbenchmark\b",
    r"\bmastering\b",
    r"\bcommercial\b",
]

if any(re.search(p, text, re.IGNORECASE) for p in delivery_like):
    sys.stderr.write(
        "Do not mark this task completed until delivery status is stated truthfully as PASS, PASS WITH EXPLICIT RISKS, or FAIL, with verification, regression risk, contract risk, and remaining gaps made explicit.\n"
    )
    sys.exit(2)

sys.exit(0)