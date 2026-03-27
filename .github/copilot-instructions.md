# GitHub Copilot Custom Instructions

This project follows universal coding agent rules defined in AGENTS.md at the repository root. All rules there apply to every Copilot interaction in this repository.

## Key Rules Summary

1. **Explore before acting** — read the codebase before modifying it
2. **Plan before implementing** — break tasks into steps
3. **Verify your own work** — run tests, check errors after every change
4. **Small incremental changes** — one logical change per step
5. **Manage context** — stay focused, reference specific files
6. **Communicate clearly** — ask when ambiguous, explain when acting
7. **Write quality code** — follow existing conventions, handle errors
8. **Use structured workflows** — spec→plan→implement→test→commit
9. **Delegate and parallelize** — batch independent operations
10. **Avoid anti-patterns** — no kitchen sinks, no skipping failures

See AGENTS.md for the full rules with rationale and detailed directives.

## Copilot-Specific Notes

- Copilot reads `AGENTS.md` natively — the rules are always active.
- Path-specific instructions can be added in `.github/instructions/*.instructions.md` with `applyTo` globs.
- When generating code, follow the existing patterns in this repository above all else.
