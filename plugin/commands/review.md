# Review - Multi-Role Code Review Workflow

Review code: $ARGUMENTS

## Multi-Role Workflow

This command orchestrates multiple roles for comprehensive code review.

### Step 1: Code Quality Review [Dev - /dev:review]
- Logic correctness
- Code readability
- DRY principles
- Error handling
- Edge cases
- Performance implications

### Step 2: Security Audit [Sec - /sec:audit]
- OWASP Top 10 check
- Input validation
- Authentication/Authorization
- Data exposure risks
- Dependency vulnerabilities

### Step 3: Test Coverage [Test - /test:coverage]
- Coverage analysis
- Missing test cases
- Edge case tests
- Integration tests

### Step 4: Architecture Check [Arch]
- Design pattern adherence
- Separation of concerns
- Scalability considerations
- Technical debt assessment

### Output:
Comprehensive review with:
- Code quality findings
- Security issues (Critical/High/Medium/Low)
- Test coverage gaps
- Architecture concerns
- Actionable recommendations

**Provide specific line references for each finding.**
