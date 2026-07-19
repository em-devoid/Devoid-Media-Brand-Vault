---
name: create-skill-from-conversation
description: 'Create reusable SKILL.md files from conversation workflows. Use when extracting a repeatable method, clarifying scope, drafting a skill, and iterating ambiguous sections before finalizing.'
argument-hint: Describe the workflow to package as a skill
user-invocable: true
---

# Create Skill From Conversation

## What This Skill Produces
- A complete SKILL.md draft in a valid customization location.
- A generalized workflow derived from real conversation behavior.
- Explicit decision branches, quality gates, and completion checks.
- Follow-up questions that tighten weak or ambiguous sections.

## When To Use
Use this when you want to convert a process shown in chat into a reusable skill.

Use this for:
- Multi-step debugging or triage routines
- Review checklists with acceptance criteria
- Repeated implementation playbooks
- Structured pre-flight or final-gate audits

Do not use this for:
- One-off prompts that do not repeat
- Global always-on guidance (use instructions files instead)
- Context isolation workflows that need separate agents (use custom agents)

## Inputs To Collect
1. Outcome: What artifact or decision should the skill produce?
2. Scope: Workspace skill or personal skill?
3. Depth: Quick checklist or full multi-step workflow?
4. Evidence: Which prior messages demonstrate the workflow?

## Procedure
1. Extract workflow from conversation.
Identify ordered steps, recurring checks, and handoff points.

2. Capture branching logic.
Document decision points as if/then rules, including blockers and fallback paths.

3. Define quality criteria.
State what qualifies as complete, valid, or acceptable output.

4. Select placement.
Workspace path options:
- .github/skills/<skill-name>/SKILL.md
- .agents/skills/<skill-name>/SKILL.md
- .claude/skills/<skill-name>/SKILL.md
Personal path options:
- ~/.copilot/skills/<skill-name>/SKILL.md
- ~/.agents/skills/<skill-name>/SKILL.md
- ~/.claude/skills/<skill-name>/SKILL.md

5. Draft SKILL.md.
Include frontmatter with name and keyword-rich description, then write concise sections for use cases and procedure.

6. Run ambiguity pass.
Find weak points such as undefined outputs, vague triggers, missing branch rules, or absent completion gates.

7. Ask targeted clarifications.
Ask only high-impact questions needed to remove ambiguity.

8. Finalize and summarize.
Summarize what the skill does, provide sample prompts, and suggest one to three related customizations.

## Branching Rules
- If no clear workflow is present, ask for outcome, scope, and depth before drafting.
- If workflow evidence is partial, draft with explicit assumptions and mark unknowns.
- If a similar skill already exists, create a companion skill or merge only when requested.
- If frontmatter or naming is invalid, fix before proposing completion.

## Completion Checklist
- Skill name matches folder name.
- Description includes concrete trigger phrases.
- Procedure is executable and ordered.
- Branching and failure paths are documented.
- Completion criteria are explicit.
- Ambiguities are either resolved or listed as assumptions.

## Output Pattern
When presenting the result:
1. State where the SKILL.md was saved.
2. List what the skill produces.
3. Ask focused refinement questions for weak areas.
4. Provide three example slash prompts to test the skill.
5. Suggest related next customizations.
