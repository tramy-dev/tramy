/**
 * Product Manager Command Templates
 */

import { CommandTemplate } from './index.js';

export function generatePMCommands(): CommandTemplate[] {
  return [
    {
      path: 'pm/prd.md',
      roleId: 'product-manager',
      content: `# Create PRD

Create a Product Requirements Document for: $ARGUMENTS

## Instructions

You are acting as a **Product Manager**. Create a comprehensive PRD for the requested feature.

## PRD Template

### 1. Overview
- **Feature Name**: [Name]
- **Author**: [Product Manager]
- **Date**: [Current Date]
- **Status**: Draft

### 2. Problem Statement
What problem are we solving? Who has this problem?

### 3. Goals & Success Metrics
- **Primary Goal**: [Main objective]
- **KPIs**:
  - [ ] Metric 1: Target value
  - [ ] Metric 2: Target value

### 4. User Stories
For each user type, list stories in format:
- As a [user], I want [action], so that [benefit]

### 5. Requirements

#### 5.1 Functional Requirements
| ID | Requirement | Priority | Notes |
|----|-------------|----------|-------|
| FR-1 | | Must | |

#### 5.2 Non-Functional Requirements
- Performance: [Requirements]
- Security: [Requirements]
- Scalability: [Requirements]

### 6. User Experience
- User flows
- Wireframe references
- Edge cases

### 7. Technical Considerations
- Dependencies
- Integration points
- Technical constraints

### 8. Timeline & Milestones
| Milestone | Target Date | Description |
|-----------|-------------|-------------|
| | | |

### 9. Risks & Mitigations
| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| | | | |

### 10. Open Questions
- [ ] Question 1
- [ ] Question 2

---

## Output Location
Save to: \`specs/prd/$ARGUMENTS.md\`

## Quality Checklist
- [ ] Problem clearly defined
- [ ] Success metrics are measurable
- [ ] Requirements are testable
- [ ] Dependencies identified
- [ ] Timeline is realistic
`,
    },
    {
      path: 'pm/story.md',
      roleId: 'product-manager',
      content: `# Create User Stories

Create user stories for: $ARGUMENTS

## Instructions

You are acting as a **Product Manager**. Create comprehensive user stories following INVEST criteria.

## Output Format

For each user story:

### User Story [N]: [Title]

**As a** [user type]
**I want** [action/feature]
**So that** [benefit/value]

#### Acceptance Criteria
- [ ] Given [context], when [action], then [expected result]
- [ ] Given [context], when [action], then [expected result]
- [ ] Given [context], when [action], then [expected result]

#### Technical Notes
- Dependencies: [List dependencies]
- API Changes: [If any]
- Database Changes: [If any]

#### Priority & Estimation
- **Priority**: [High/Medium/Low]
- **Story Points**: [1/2/3/5/8/13]
- **Sprint**: [Target sprint]

---

## INVEST Criteria Reminder
- **I**ndependent: Can be developed separately
- **N**egotiable: Details can be discussed
- **V**aluable: Delivers user value
- **E**stimable: Can be sized
- **S**mall: Fits in a sprint
- **T**estable: Clear acceptance criteria

## Output Location
Save to: \`specs/stories/$ARGUMENTS.md\`

## Quality Checklist
- [ ] All stories follow INVEST criteria
- [ ] Acceptance criteria are testable
- [ ] Dependencies identified
- [ ] Stories are appropriately sized
- [ ] Edge cases considered
`,
    },
    {
      path: 'pm/kpi.md',
      roleId: 'product-manager',
      content: `# Define KPIs

Define Key Performance Indicators for: $ARGUMENTS

## Instructions

You are acting as a **Product Manager**. Define measurable KPIs that align with business objectives.

## KPI Framework

### Business Objectives
1. What are the main business goals?
2. How does this feature support those goals?

### KPI Definitions

For each KPI:

#### KPI [N]: [Name]

| Attribute | Value |
|-----------|-------|
| **Definition** | Clear description of what this measures |
| **Formula** | How to calculate |
| **Data Source** | Where data comes from |
| **Baseline** | Current value |
| **Target** | Goal value |
| **Timeline** | When to achieve |
| **Owner** | Who is responsible |

### Measurement Plan

| KPI | Frequency | Tool | Dashboard |
|-----|-----------|------|-----------|
| | Daily/Weekly/Monthly | | |

### Leading vs Lagging Indicators
- **Leading**: [Predictive metrics]
- **Lagging**: [Outcome metrics]

## Output Location
Save to: \`specs/kpis/$ARGUMENTS.md\`
`,
    },
    {
      path: 'pm/prioritize.md',
      roleId: 'product-manager',
      content: `# Prioritize Backlog

Analyze and prioritize the current backlog.

## Instructions

You are acting as a **Product Manager**. Review and prioritize backlog items using RICE or similar framework.

## Prioritization Framework (RICE)

For each item, score:
- **R**each: How many users affected? (per quarter)
- **I**mpact: How much impact? (3=massive, 2=high, 1=medium, 0.5=low, 0.25=minimal)
- **C**onfidence: How confident are we? (100%, 80%, 50%)
- **E**ffort: Person-months required

**RICE Score = (Reach × Impact × Confidence) / Effort**

## Backlog Analysis

| Item | Reach | Impact | Confidence | Effort | RICE Score | Priority |
|------|-------|--------|------------|--------|------------|----------|
| | | | | | | |

## Prioritized Backlog

### Must Have (P0)
1. [Item] - RICE: X

### Should Have (P1)
1. [Item] - RICE: X

### Nice to Have (P2)
1. [Item] - RICE: X

### Won't Do (This Cycle)
1. [Item] - Reason

## Recommendations
- What should be prioritized and why
- Trade-offs considered
- Dependencies to unblock

## Output Location
Save to: \`specs/backlog-priority.md\`
`,
    },
    {
      path: 'pm/roadmap.md',
      roleId: 'product-manager',
      content: `# Create Roadmap

Create or update the product roadmap.

## Instructions

You are acting as a **Product Manager**. Create a strategic roadmap aligned with business objectives.

## Roadmap Template

### Vision
[One sentence describing the product vision]

### Strategic Themes
1. **Theme 1**: [Description]
2. **Theme 2**: [Description]
3. **Theme 3**: [Description]

### Quarterly Roadmap

#### Q1 [Year]
| Initiative | Theme | Status | Owner |
|------------|-------|--------|-------|
| | | Planned/In Progress/Done | |

**Key Milestones:**
- [ ] Milestone 1
- [ ] Milestone 2

#### Q2 [Year]
[Same format]

#### Q3 [Year]
[Same format]

#### Q4 [Year]
[Same format]

### Dependencies
| Initiative | Depends On | Status |
|------------|------------|--------|
| | | |

### Risks
| Risk | Impact | Mitigation |
|------|--------|------------|
| | | |

## Output Location
Save to: \`specs/roadmap.md\`
`,
    },
    {
      path: 'pm/sprint.md',
      roleId: 'product-manager',
      content: `# Plan Sprint

Plan the upcoming sprint.

## Instructions

You are acting as a **Product Manager**. Plan the sprint with clear goals and deliverables.

## Sprint Planning Template

### Sprint Information
- **Sprint Number**: [N]
- **Duration**: [Start Date] - [End Date]
- **Team Capacity**: [Story Points]

### Sprint Goal
[One clear, measurable goal for this sprint]

### Sprint Backlog

| Story | Points | Assignee | Priority | Dependencies |
|-------|--------|----------|----------|--------------|
| | | | | |

**Total Points**: X / Capacity: Y

### Acceptance Criteria for Sprint
- [ ] All stories meet Definition of Done
- [ ] No critical bugs introduced
- [ ] Documentation updated
- [ ] Tests passing

### Risks & Blockers
| Item | Risk/Blocker | Mitigation |
|------|--------------|------------|
| | | |

### Carryover from Last Sprint
| Story | Reason | Action |
|-------|--------|--------|
| | | |

## Output Location
Save to: \`specs/sprints/sprint-[N].md\`
`,
    },
    {
      path: 'pm/competitive.md',
      roleId: 'product-manager',
      content: `# Competitive Analysis

Analyze competitors for: $ARGUMENTS

## Instructions

You are acting as a **Product Manager**. Conduct a thorough competitive analysis.

## Analysis Framework

### Market Overview
- Market size and growth
- Key trends
- Target segments

### Competitor Profiles

For each competitor:

#### [Competitor Name]

| Attribute | Details |
|-----------|---------|
| **Website** | |
| **Founded** | |
| **Funding** | |
| **Target Market** | |
| **Key Features** | |
| **Pricing** | |
| **Strengths** | |
| **Weaknesses** | |

### Feature Comparison

| Feature | Us | Competitor A | Competitor B | Competitor C |
|---------|-----|--------------|--------------|--------------|
| Feature 1 | ✓/✗ | ✓/✗ | ✓/✗ | ✓/✗ |

### Positioning Map
[Describe where each competitor sits on key dimensions]

### SWOT Analysis

| | Helpful | Harmful |
|---|---------|---------|
| **Internal** | Strengths | Weaknesses |
| **External** | Opportunities | Threats |

### Recommendations
1. Key differentiators to emphasize
2. Gaps to address
3. Features to prioritize

## Output Location
Save to: \`specs/competitive/$ARGUMENTS.md\`
`,
    },
  ];
}
