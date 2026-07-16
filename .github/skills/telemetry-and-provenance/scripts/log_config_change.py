#!/usr/bin/env python3
import json
import os
import pathlib
from datetime import datetime, timezone
import sys

data = json.load(sys.stdin)
project_dir = os.environ.get("CLAUDE_PROJECT_DIR", data.get("cwd", "."))
log_dir = pathlib.Path(project_dir) / ".claude" / "logs"
log_dir.mkdir(parents=True, exist_ok=True)

record = dict(data)
record["logged_at"] = datetime.now(timezone.utc).isoformat()

with (log_dir / "config-change.jsonl").open("a", encoding="utf-8") as f:
    f.write(json.dumps(record, ensure_ascii=False) + "\n")