#!/usr/bin/env bash
set -euo pipefail

target="${1:-.}"

grep -RInE \
  'BUILD FAILED|TEST FAILED|RESULT: FAIL|SUITE COMPLETE|SUITE PASSED|SUITE FAILED|exit /b 0|endlocal$|errorlevel 1' \
  "$target" || true