# /plan - Create Detailed Plan

Plan: $ARGUMENTS

## Purpose
Create a structured plan before implementation. Think through the approach.

## Process

### 1. Define Objective
- What is the end goal?
- What does success look like?
- What are the constraints?

### 2. Break Down Tasks
- List all required steps
- Identify dependencies
- Estimate complexity (S/M/L)

### 3. Identify Requirements
- Data sources needed
- Tools and technologies
- Access and permissions

### 4. Consider Risks
- What could go wrong?
- What assumptions are we making?
- What's the fallback plan?

## Output Format
```
## Plan: [Title]

### Objective
[Clear statement of what we're trying to achieve]

### Success Criteria
- [ ] [Measurable outcome 1]
- [ ] [Measurable outcome 2]

### Tasks
| # | Task | Complexity | Dependencies |
|---|------|------------|--------------|
| 1 | [Task description] | S/M/L | - |
| 2 | [Task description] | S/M/L | Task 1 |

### Data Requirements
- [Data source 1]: [What fields, what timeframe]
- [Data source 2]: [What fields, what timeframe]

### Assumptions
- [Assumption 1]
- [Assumption 2]

### Risks & Mitigations
| Risk | Impact | Mitigation |
|------|--------|------------|
| [Risk] | H/M/L | [How to handle] |

### Timeline
[Sequence of tasks and estimated effort]
```

## Examples
- `/plan build customer segmentation model`
- `/plan migrate data to new schema`
- `/plan automate weekly report`

## After Completion
Update CLAUDE.md with new knowledge:
1. Add the plan summary to "## Current Plans" section
2. Document dependencies and requirements discovered
3. Note any architectural decisions made
