#!/usr/bin/env python3
import json
import pathlib
import re
import sys

data = json.load(sys.stdin)
tool_input = data.get("tool_input", {}) or {}
file_path = tool_input.get("file_path")

if not file_path:
    sys.exit(0)

path = pathlib.Path(file_path)
if not path.exists() or not path.is_file():
    sys.exit(0)

name = str(path).lower()
interesting = (
    name.endswith(".bat")
    or name.endswith(".cmd")
    or name.endswith(".ps1")
    or name.endswith(".sh")
    or name.endswith(".bash")
    or "test" in name
    or "build" in name
    or "ci" in name
)

if not interesting:
    sys.exit(0)

try:
    text = path.read_text(encoding="utf-8", errors="replace")
except Exception:
    sys.exit(0)

has_failure_markers = bool(re.search(r"BUILD FAILED|TEST FAILED|RESULT:\s*FAIL|SUITE FAILED", text))
has_hard_fail = bool(re.search(r"exit\s*/b\s+1|exit\s+1|throw\b|return\s+1", text, re.IGNORECASE))

if has_failure_markers and not has_hard_fail:
    print(json.dumps({
        "decision": "block",
        "reason": "This file appears to record build/test failure without a reliable hard-fail path. Do not introduce verifier scripts that can hide failure from the caller."
    }))
    sys.exit(0)

sys.exit(0)