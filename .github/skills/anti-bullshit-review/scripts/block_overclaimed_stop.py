#!/usr/bin/env python3
import json
import re
import sys

data = json.load(sys.stdin)
last = data.get("last_assistant_message", "") or ""

patterns = [
    r"\ball tests pass\b",
    r"\bfull suite pass(?:es|ed)?\b",
    r"\bno regressions\b",
    r"\bfully validated\b",
    r"\bready to merge\b",
    r"\bi merged\b",
    r"\bi deployed\b",
    r"\bi committed\b",
]

for pattern in patterns:
    if re.search(pattern, last, flags=re.IGNORECASE):
        print(json.dumps({
            "decision": "block",
            "reason": "Final response contains an overclaimed or falsely attributed completion/verification statement. Rewrite it with truthful scope and evidence."
        }))
        sys.exit(0)

sys.exit(0)