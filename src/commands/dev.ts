/**
 * Developer Command Templates
 */

import { CommandTemplate } from './index.js';

export function generateDevCommands(): CommandTemplate[] {
  return [
    {
      path: 'dev/feature.md',
      roleId: 'developer',
      content: `# Implement Feature

Implement feature: $ARGUMENTS

## Instructions

You are acting as a **Developer**. Implement the requested feature following best practices.

## Implementation Checklist

### 1. Understand Requirements
- [ ] Read related specs/stories
- [ ] Clarify edge cases
- [ ] Identify dependencies

### 2. Plan Implementation
- [ ] Break into subtasks
- [ ] Identify affected files
- [ ] Consider backward compatibility

### 3. Implement
- [ ] Write tests first (TDD)
- [ ] Implement in small commits
- [ ] Follow existing patterns
- [ ] Handle errors properly

### 4. Verify
- [ ] All tests pass
- [ ] No linting errors
- [ ] Types are correct
- [ ] Edge cases handled

### 5. Document
- [ ] Update relevant docs
- [ ] Add code comments where needed
- [ ] Update changelog

## Code Quality Standards
- Follow SOLID principles
- Keep functions small (<20 lines ideal)
- Meaningful variable names
- No magic numbers
- Proper error handling

## Commit Convention
\`\`\`
feat(scope): description

- Detail 1
- Detail 2
\`\`\`
`,
    },
    {
      path: 'dev/fix.md',
      roleId: 'developer',
      content: `# Fix Bug

Fix bug: $ARGUMENTS

## Instructions

You are acting as a **Developer**. Fix the bug with proper root cause analysis.

## Bug Fix Process

### 1. Reproduce
- [ ] Identify reproduction steps
- [ ] Confirm the bug exists
- [ ] Note environment details

### 2. Root Cause Analysis
- [ ] Identify the source of the bug
- [ ] Understand why it occurred
- [ ] Check for similar issues elsewhere

### 3. Fix
- [ ] Write a failing test first
- [ ] Implement the fix
- [ ] Verify the test passes
- [ ] Check for regressions

### 4. Verify
- [ ] Bug is fixed
- [ ] No new bugs introduced
- [ ] All existing tests pass

### 5. Document
- [ ] Update changelog
- [ ] Add comments if complex
- [ ] Document for future reference

## Commit Convention
\`\`\`
fix(scope): description

Fixes #issue-number

Root cause: [explanation]
\`\`\`
`,
    },
    {
      path: 'dev/refactor.md',
      roleId: 'developer',
      content: `# Refactor Code

Refactor: $ARGUMENTS

## Instructions

You are acting as a **Developer**. Improve code quality without changing behavior.

## Refactoring Guidelines

### Principles
- Tests pass before AND after
- Small, incremental changes
- Preserve external behavior
- Improve readability/maintainability

### Common Refactorings
- Extract method/function
- Rename for clarity
- Remove duplication
- Simplify conditionals
- Introduce meaningful variables

### Checklist
- [ ] Write/verify tests first
- [ ] Make one change at a time
- [ ] Run tests after each change
- [ ] Commit frequently

### Code Smells to Address
- Long methods
- Duplicated code
- Large classes
- Long parameter lists
- Feature envy
- Data clumps

## Commit Convention
\`\`\`
refactor(scope): description

- What was refactored
- Why (improved X)
\`\`\`
`,
    },
    {
      path: 'dev/api.md',
      roleId: 'developer',
      content: `# Create API Endpoint

Create API endpoint: $ARGUMENTS

## Instructions

You are acting as a **Developer**. Create a well-designed API endpoint.

## API Design Template

### Endpoint Specification
- **Method**: GET/POST/PUT/PATCH/DELETE
- **Path**: /api/v1/resource
- **Auth**: Required/Optional

### Request
\`\`\`json
{
  "field1": "string",
  "field2": 123
}
\`\`\`

### Response
\`\`\`json
{
  "success": true,
  "data": {
    "id": "uuid",
    "field1": "string"
  }
}
\`\`\`

### Error Response
\`\`\`json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable message"
  }
}
\`\`\`

### Implementation Checklist
- [ ] Input validation
- [ ] Authentication check
- [ ] Authorization check
- [ ] Error handling
- [ ] Logging
- [ ] Tests
- [ ] Documentation
`,
    },
    {
      path: 'dev/review.md',
      roleId: 'developer',
      content: `# Code Review

Perform a code review on the current changes.

## Instructions

You are acting as a **Developer**. Review code for quality, correctness, and maintainability.

## Review Checklist

### Correctness
- [ ] Code does what it's supposed to
- [ ] Edge cases handled
- [ ] No off-by-one errors
- [ ] Null/undefined handled

### Security
- [ ] Input validation
- [ ] No SQL injection
- [ ] No XSS vulnerabilities
- [ ] Secrets not exposed
- [ ] Proper authorization

### Performance
- [ ] No N+1 queries
- [ ] Efficient algorithms
- [ ] Proper caching
- [ ] No memory leaks

### Maintainability
- [ ] Clear naming
- [ ] Small functions
- [ ] Minimal duplication
- [ ] Proper abstraction

### Testing
- [ ] Tests cover functionality
- [ ] Edge cases tested
- [ ] Tests are readable
- [ ] Mocks appropriate

### Documentation
- [ ] Complex logic explained
- [ ] API documented
- [ ] README updated if needed

## Review Format
\`\`\`
### [File:Line]
**Type**: Bug/Suggestion/Question/Nitpick
**Comment**: [Your comment]
**Suggested Change**: [If applicable]
\`\`\`
`,
    },
    {
      path: 'dev/optimize.md',
      roleId: 'developer',
      content: `# Optimize Performance

Optimize: $ARGUMENTS

## Instructions

You are acting as a **Developer**. Identify and fix performance issues.

## Optimization Process

### 1. Measure
- [ ] Profile current performance
- [ ] Identify bottlenecks
- [ ] Set improvement targets

### 2. Analyze
- [ ] Understand the hot paths
- [ ] Check for inefficient algorithms
- [ ] Review database queries

### 3. Optimize
- [ ] Apply targeted fixes
- [ ] One change at a time
- [ ] Measure after each change

### Common Optimizations
- Reduce unnecessary re-renders (React)
- Memoize expensive computations
- Lazy load components/modules
- Optimize database queries
- Add appropriate indexes
- Implement caching

### Performance Checklist
- [ ] No N+1 queries
- [ ] Appropriate pagination
- [ ] Images optimized
- [ ] Bundle size reasonable
- [ ] Caching strategy in place

### Before/After Metrics
| Metric | Before | After | Target |
|--------|--------|-------|--------|
| Load time | | | |
| Response time | | | |
| Memory usage | | | |
`,
    },
    {
      path: 'dev/debt.md',
      roleId: 'developer',
      content: `# Address Technical Debt

Address tech debt: $ARGUMENTS

## Instructions

You are acting as a **Developer**. Address technical debt systematically.

## Tech Debt Assessment

### Current State
- What is the debt?
- Why does it exist?
- Impact on development velocity

### Proposed Solution
- How to address it
- Estimated effort
- Benefits

### Implementation Plan
1. [Step 1]
2. [Step 2]
3. [Step 3]

### Risk Assessment
- What could go wrong?
- Mitigation strategies
- Rollback plan

### Checklist
- [ ] Tests exist or added
- [ ] Incremental approach
- [ ] No new debt introduced
- [ ] Documentation updated

## Commit Convention
\`\`\`
chore(tech-debt): description

Addresses: [description of debt]
Benefit: [improvement achieved]
\`\`\`
`,
    },
  ];
}
