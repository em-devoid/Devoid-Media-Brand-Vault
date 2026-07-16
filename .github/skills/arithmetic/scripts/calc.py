#!/usr/bin/env python3
"""
Safe arithmetic calculator for Claude skills.

Usage:
    python calc.py "47 + 18"
    python calc.py "15% of 240"
    python calc.py "average of 12, 18, 25, 29"
    python calc.py "percent increase from 80 to 100"
    python calc.py "36 inches in feet"
    python calc.py sum 16 24 24 18 30 31 33 34 10 20 6 27 47 25 30 3
    python calc.py count 16 24 24 18 30 31 33 34 10 20 6 27 47 25 30 3
    echo "16 24 33" | python calc.py --sum-stdin

Outputs JSON to stdout.
"""

from __future__ import annotations

import ast
import json
import math
import operator
import re
import sys
from dataclasses import dataclass
from typing import Any


# ---------- helpers ----------

OPS: dict[type[ast.AST], Any] = {
    ast.Add: operator.add,
    ast.Sub: operator.sub,
    ast.Mult: operator.mul,
    ast.Div: operator.truediv,
    ast.Pow: operator.pow,
    ast.Mod: operator.mod,
    ast.USub: operator.neg,
    ast.UAdd: operator.pos,
}

UNIT_FACTORS: dict[tuple[str, str], float] = {
    ("inches", "feet"): 1.0 / 12.0,
    ("inch", "foot"): 1.0 / 12.0,
    ("feet", "inches"): 12.0,
    ("foot", "inch"): 12.0,
    ("feet", "yards"): 1.0 / 3.0,
    ("foot", "yard"): 1.0 / 3.0,
    ("yards", "feet"): 3.0,
    ("yard", "foot"): 3.0,
    ("seconds", "minutes"): 1.0 / 60.0,
    ("second", "minute"): 1.0 / 60.0,
    ("minutes", "seconds"): 60.0,
    ("minute", "second"): 60.0,
    ("minutes", "hours"): 1.0 / 60.0,
    ("minute", "hour"): 1.0 / 60.0,
    ("hours", "minutes"): 60.0,
    ("hour", "minute"): 60.0,
    ("grams", "kilograms"): 1.0 / 1000.0,
    ("gram", "kilogram"): 1.0 / 1000.0,
    ("kilograms", "grams"): 1000.0,
    ("kilogram", "gram"): 1000.0,
    ("miles", "feet"): 5280.0,
    ("mile", "foot"): 5280.0,
    ("feet", "miles"): 1.0 / 5280.0,
    ("foot", "mile"): 1.0 / 5280.0,
}


@dataclass
class Result:
    expression: str
    result: Any
    notes: list[str] | None = None
    interpretation: str | None = None
    error: str | None = None

    def to_json(self) -> str:
        payload = {
            "expression": self.expression,
            "result": self.result,
        }
        if self.notes:
            payload["notes"] = self.notes
        if self.interpretation:
            payload["interpretation"] = self.interpretation
        if self.error:
            payload["error"] = self.error
        return json.dumps(payload, ensure_ascii=False)


def fail(msg: str, expression: str = "") -> str:
    return Result(expression=expression, result=None, error=msg).to_json()


def format_number(value: float) -> int | float:
    if isinstance(value, float) and value.is_integer():
        return int(value)
    return value


def eval_ast(node: ast.AST) -> float:
    if isinstance(node, ast.Expression):
        return eval_ast(node.body)

    if isinstance(node, ast.Constant):
        if isinstance(node.value, (int, float)):
            return float(node.value)
        raise ValueError("Only numeric constants are allowed")

    if isinstance(node, ast.Num):  # pragma: no cover
        return float(node.n)

    if isinstance(node, ast.BinOp):
        op_type = type(node.op)
        if op_type not in OPS:
            raise ValueError(f"Operator not allowed: {op_type.__name__}")
        left = eval_ast(node.left)
        right = eval_ast(node.right)
        if op_type is ast.Div and right == 0:
            raise ZeroDivisionError("Division by zero")
        return float(OPS[op_type](left, right))

    if isinstance(node, ast.UnaryOp):
        op_type = type(node.op)
        if op_type not in OPS:
            raise ValueError(f"Unary operator not allowed: {op_type.__name__}")
        return float(OPS[op_type](eval_ast(node.operand)))

    raise ValueError(f"Unsupported syntax: {type(node).__name__}")


def safe_eval(expr: str) -> float:
    expr = expr.replace("^", "**")
    tree = ast.parse(expr, mode="eval")
    return eval_ast(tree)


def normalize(text: str) -> str:
    text = text.strip().lower()
    text = text.replace("÷", "/")
    text = text.replace("×", "*")
    text = re.sub(r"\s+", " ", text)
    return text


def extract_numbers(text: str) -> list[float]:
    return [float(x) for x in re.findall(r"-?\d+(?:\.\d+)?", text)]


# ---------- subcommands ----------

def cmd_sum(args: list[str]) -> str:
    """Sum a list of numbers passed as arguments."""
    nums = []
    for a in args:
        try:
            nums.append(float(a))
        except ValueError:
            return fail(f"Not a number: {a}", expression="sum " + " ".join(args))
    total = sum(nums)
    expr = " + ".join(str(format_number(n)) for n in nums)
    return Result(
        expression=expr,
        result=format_number(total),
        notes=[f"count: {len(nums)} items"],
    ).to_json()


def cmd_count(args: list[str]) -> str:
    """Count items and sum them."""
    nums = []
    for a in args:
        try:
            nums.append(float(a))
        except ValueError:
            return fail(f"Not a number: {a}", expression="count " + " ".join(args))
    total = sum(nums)
    expr = " + ".join(str(format_number(n)) for n in nums)
    payload = {
        "expression": expr,
        "count": len(nums),
        "sum": format_number(total),
        "items": [format_number(n) for n in nums],
    }
    return json.dumps(payload, ensure_ascii=False)


def cmd_sum_stdin() -> str:
    """Read numbers from stdin (any whitespace/comma/newline separated), sum them."""
    raw = sys.stdin.read()
    tokens = re.findall(r"-?\d+(?:\.\d+)?", raw)
    if not tokens:
        return fail("No numbers found on stdin", expression="--sum-stdin")
    nums = [float(t) for t in tokens]
    total = sum(nums)
    expr = " + ".join(str(format_number(n)) for n in nums)
    payload = {
        "expression": expr,
        "count": len(nums),
        "sum": format_number(total),
        "items": [format_number(n) for n in nums],
    }
    return json.dumps(payload, ensure_ascii=False)


# ---------- parsers ----------

def parse_percentage_of(text: str) -> Result | None:
    m = re.fullmatch(r"(-?\d+(?:\.\d+)?)%\s+of\s+(-?\d+(?:\.\d+)?)", text)
    if not m:
        return None
    pct = float(m.group(1))
    base = float(m.group(2))
    value = (pct / 100.0) * base
    return Result(
        expression=f"({pct} / 100) × {base}",
        result=format_number(value),
    )


def parse_average(text: str) -> Result | None:
    if not text.startswith("average of "):
        return None
    nums = extract_numbers(text)
    if not nums:
        return Result(expression=text, result=None, error="No numbers found for average")
    total = sum(nums)
    avg = total / len(nums)
    return Result(
        expression=f"({' + '.join(str(format_number(n)) for n in nums)}) ÷ {len(nums)}",
        result=format_number(avg),
    )


def parse_percent_increase(text: str) -> Result | None:
    m = re.fullmatch(
        r"percent increase from (-?\d+(?:\.\d+)?) to (-?\d+(?:\.\d+)?)", text
    )
    if not m:
        return None
    old = float(m.group(1))
    new = float(m.group(2))
    if old == 0:
        return Result(
            expression=f"({new} - {old}) ÷ {old} × 100",
            result=None,
            error="Percent increase from zero is undefined",
        )
    value = ((new - old) / old) * 100.0
    return Result(
        expression=f"({new} - {old}) ÷ {old} × 100",
        result=format_number(value),
        notes=["Result is a percentage"],
    )


def parse_percent_decrease(text: str) -> Result | None:
    m = re.fullmatch(
        r"percent decrease from (-?\d+(?:\.\d+)?) to (-?\d+(?:\.\d+)?)", text
    )
    if not m:
        return None
    old = float(m.group(1))
    new = float(m.group(2))
    if old == 0:
        return Result(
            expression=f"({old} - {new}) ÷ {old} × 100",
            result=None,
            error="Percent decrease from zero is undefined",
        )
    value = ((old - new) / old) * 100.0
    return Result(
        expression=f"({old} - {new}) ÷ {old} × 100",
        result=format_number(value),
        notes=["Result is a percentage"],
    )


def parse_difference(text: str) -> Result | None:
    m = re.fullmatch(r"difference between (-?\d+(?:\.\d+)?) and (-?\d+(?:\.\d+)?)", text)
    if not m:
        return None
    a = float(m.group(1))
    b = float(m.group(2))
    value = abs(a - b)
    return Result(
        interpretation="Using absolute difference",
        expression=f"|{a} - {b}|",
        result=format_number(value),
    )


def parse_ratio(text: str) -> Result | None:
    m = re.fullmatch(r"ratio of (-?\d+(?:\.\d+)?) to (-?\d+(?:\.\d+)?)", text)
    if not m:
        return None
    a = float(m.group(1))
    b = float(m.group(2))
    if b == 0:
        return Result(expression=f"{a}:{b}", result=None, error="Ratio to zero is undefined")
    value = a / b
    return Result(
        expression=f"{a} ÷ {b}",
        result=format_number(value),
        notes=[f"Ratio form: {format_number(a)}:{format_number(b)}"],
    )


def parse_unit_conversion(text: str) -> Result | None:
    m = re.fullmatch(
        r"(-?\d+(?:\.\d+)?)\s+([a-z]+)\s+(?:in|to)\s+([a-z]+)",
        text,
    )
    if not m:
        return None

    value = float(m.group(1))
    from_unit = m.group(2)
    to_unit = m.group(3)

    factor = UNIT_FACTORS.get((from_unit, to_unit))
    if factor is None:
        return Result(
            expression=f"{value} {from_unit} to {to_unit}",
            result=None,
            error=f"Unsupported conversion: {from_unit} to {to_unit}",
        )

    converted = value * factor
    return Result(
        expression=f"{value} × {factor}",
        result=f"{format_number(converted)} {to_unit}",
    )


def parse_plain_expression(text: str) -> Result | None:
    allowed = re.fullmatch(r"[0-9\.\+\-\*\/\(\)\^\s%]+", text)
    if not allowed:
        return None

    # Convert simple percent literals like 15% -> (15/100)
    expr = re.sub(r"(\d+(?:\.\d+)?)%", r"(\1/100)", text)

    try:
        value = safe_eval(expr)
    except Exception as exc:
        return Result(expression=text, result=None, error=str(exc))

    notes: list[str] = []
    if isinstance(value, float) and not value.is_integer():
        notes.append(f"Rounded to 2 decimals: {value:.2f}")

    return Result(
        expression=text,
        result=format_number(value),
        notes=notes or None,
    )


def calculate(raw: str) -> Result:
    text = normalize(raw)

    for parser in (
        parse_percentage_of,
        parse_average,
        parse_percent_increase,
        parse_percent_decrease,
        parse_difference,
        parse_ratio,
        parse_unit_conversion,
        parse_plain_expression,
    ):
        parsed = parser(text)
        if parsed is not None:
            return parsed

    return Result(
        expression=raw,
        result=None,
        error="Could not parse arithmetic input",
    )


def main() -> int:
    if len(sys.argv) < 2:
        print(
            fail("Usage: python calc.py \"<expression>\" | sum <nums> | count <nums> | --sum-stdin"),
            file=sys.stdout,
        )
        return 1

    # Subcommand dispatch
    first = sys.argv[1].lower()

    if first == "sum" and len(sys.argv) > 2:
        print(cmd_sum(sys.argv[2:]))
        return 0

    if first == "count" and len(sys.argv) > 2:
        print(cmd_count(sys.argv[2:]))
        return 0

    if first == "--sum-stdin":
        output = cmd_sum_stdin()
        print(output)
        parsed = json.loads(output)
        return 1 if "error" in parsed else 0

    # Default: expression mode
    raw = " ".join(sys.argv[1:])
    result = calculate(raw)
    print(result.to_json())
    return 0 if result.error is None else 1


if __name__ == "__main__":
    raise SystemExit(main())
