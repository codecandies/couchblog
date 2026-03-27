# Claude Code Project Instructions

@AGENTS.md

## Claude-Specific Notes

- Use `@file` imports in CLAUDE.md to keep rules DRY — AGENTS.md is the canonical source.
- When using skills (`.claude/skills/`), each skill should be a focused, self-contained behavior.
- Prefer `/clear` between unrelated tasks to keep context clean.
- Use subagents for deep investigation that shouldn't pollute the main session context.
- When in doubt, use the 4-phase workflow: **Explore → Plan → Implement → Commit**.
