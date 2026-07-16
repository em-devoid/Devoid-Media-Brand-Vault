#!/usr/bin/env python3
import json
import re
import sys

data = json.load(sys.stdin)
subject = data.get("task_subject", "") or ""
description = data.get("task_description", "") or ""
text = f"{subject}\n{description}"

patterns = [
    r"\btest\b",
    r"\bbuild\b",
    r"\bcompile\b",
    r"\bverification\b",
    r"\bvalidate\b",
    r"\bregression\b",
    r"\bbenchmark\b",
    r"\bperformance\b",
    r"\bfix\b",
]

if any(re.search(p, text, re.IGNORECASE) for p in patterns):
    sys.stderr.write(
        "Do not mark this task completed until the completion claim is scoped truthfully and any build/test/verification status is explicitly verified, inferred, unverified, or blocked.\n"
    )
    sys.exit(2)

sys.exit(0)