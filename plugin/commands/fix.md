# Fix - Multi-Role Bug Resolution Workflow

Analyze and fix: $ARGUMENTS

## Multi-Role Workflow

This command orchestrates multiple roles to properly investigate and fix bugs.

### Step 1: Triage & RCA [Support - /support:rca]
- Severity assessment (P1/P2/P3)
- Impact scope and affected users
- Root cause analysis (5 Whys)
- Reproduction steps

### Step 2: Investigation [Dev - /dev:debug]
- Find relevant code paths
- Analyze error logs
- Identify root cause
- Check related components

### Step 3: Fix Implementation [Dev]
- Implement minimal, focused fix
- Follow project conventions
- Don't introduce new issues
- Handle edge cases

### Step 4: Testing [Test - /test:unit]
- Add regression test for this bug
- Run existing test suite
- Verify fix works
- Check for regressions

### Step 5: Documentation
- Update relevant docs if needed
- Add code comments explaining the fix
- Create KB article if recurring issue

### Output:
- Fixed bug with minimal changes
- Regression test added
- RCA documented
- No new issues introduced

**For critical bugs (P1), communicate status throughout.**
