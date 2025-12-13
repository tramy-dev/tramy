/**
 * Architect Command Templates
 */

import { CommandTemplate } from './index.js';

export function generateArchCommands(): CommandTemplate[] {
  return [
    {
      path: 'arch/design.md',
      roleId: 'architect',
      content: `# System Design

Design system for: $ARGUMENTS

## Instructions

You are acting as an **Architect**. Create a comprehensive system design.

## System Design Document

### 1. Overview
- **System Name**: $ARGUMENTS
- **Purpose**: [What problem it solves]
- **Stakeholders**: [Who uses/maintains it]

### 2. Requirements

#### Functional Requirements
| ID | Requirement | Priority |
|----|-------------|----------|
| FR-1 | | |

#### Non-Functional Requirements
- **Performance**: [Response time, throughput]
- **Scalability**: [Expected growth]
- **Availability**: [Uptime SLA]
- **Security**: [Requirements]

### 3. High-Level Architecture

\`\`\`
┌─────────────────────────────────────────────────────┐
│                    Load Balancer                     │
└───────────────────────┬─────────────────────────────┘
                        │
┌───────────────────────┴─────────────────────────────┐
│                    API Gateway                       │
└───────────────────────┬─────────────────────────────┘
                        │
        ┌───────────────┼───────────────┐
        │               │               │
   ┌────┴────┐    ┌────┴────┐    ┌────┴────┐
   │Service A│    │Service B│    │Service C│
   └────┬────┘    └────┬────┘    └────┬────┘
        │               │               │
   ┌────┴────┐    ┌────┴────┐    ┌────┴────┐
   │Database │    │ Cache   │    │  Queue  │
   └─────────┘    └─────────┘    └─────────┘
\`\`\`

### 4. Component Details

#### [Component Name]
- **Purpose**: [Description]
- **Technology**: [Stack choice]
- **Interfaces**: [APIs exposed]
- **Dependencies**: [What it depends on]

### 5. Data Flow
[Describe how data flows through the system]

### 6. Technology Choices
| Component | Technology | Rationale |
|-----------|------------|-----------|
| | | |

### 7. Security Considerations
- Authentication
- Authorization
- Data encryption
- Network security

### 8. Deployment Architecture
[Cloud provider, regions, infrastructure]

### 9. Monitoring & Observability
- Metrics
- Logging
- Tracing
- Alerting

### 10. Trade-offs & Alternatives
[Document key decisions and alternatives considered]

## Output Location
Save to: \`specs/architecture/$ARGUMENTS.md\`
`,
    },
    {
      path: 'arch/adr.md',
      roleId: 'architect',
      content: `# Architecture Decision Record

Create ADR for: $ARGUMENTS

## Instructions

You are acting as an **Architect**. Document an architecture decision.

## ADR Template

# ADR-[NUMBER]: $ARGUMENTS

## Status
[Proposed | Accepted | Deprecated | Superseded by ADR-XXX]

## Context
[What is the issue that we're seeing that is motivating this decision or change?]

## Decision
[What is the change that we're proposing and/or doing?]

## Consequences

### Positive
- [Benefit 1]
- [Benefit 2]

### Negative
- [Drawback 1]
- [Drawback 2]

### Neutral
- [Implication 1]

## Alternatives Considered

### Alternative 1: [Name]
- **Description**: [What it is]
- **Pros**: [Benefits]
- **Cons**: [Drawbacks]
- **Why rejected**: [Reason]

### Alternative 2: [Name]
[Same format]

## References
- [Link to relevant documentation]
- [Link to discussions]

## Notes
[Any additional context or implementation notes]

---

## Output Location
Save to: \`docs/adr/[number]-$ARGUMENTS.md\`

## ADR Naming Convention
- Use sequential numbers: 001, 002, 003
- Lowercase with hyphens: 001-use-postgresql-for-database.md
`,
    },
    {
      path: 'arch/evaluate.md',
      roleId: 'architect',
      content: `# Evaluate Technology

Evaluate technology: $ARGUMENTS

## Instructions

You are acting as an **Architect**. Conduct a thorough technology evaluation.

## Evaluation Framework

### Overview
- **Technology**: $ARGUMENTS
- **Category**: [Database/Framework/Tool/etc.]
- **Evaluation Date**: [Date]

### Evaluation Criteria

| Criterion | Weight | Score (1-5) | Weighted |
|-----------|--------|-------------|----------|
| Functionality | 20% | | |
| Performance | 20% | | |
| Scalability | 15% | | |
| Security | 15% | | |
| Ease of Use | 10% | | |
| Community/Support | 10% | | |
| Cost | 10% | | |
| **Total** | 100% | | |

### Detailed Analysis

#### Functionality
- Features available
- Features missing
- Fit with requirements

#### Performance
- Benchmarks
- Latency
- Throughput

#### Scalability
- Horizontal scaling
- Vertical scaling
- Limits

#### Security
- Authentication
- Authorization
- Compliance

#### Developer Experience
- Learning curve
- Documentation quality
- Tooling

#### Community & Support
- Community size
- Update frequency
- Commercial support

#### Cost
- Licensing
- Infrastructure
- Total cost of ownership

### Comparison Matrix
| Feature | $ARGUMENTS | Alternative 1 | Alternative 2 |
|---------|------------|---------------|---------------|
| | | | |

### Recommendation
[Clear recommendation with reasoning]

### Risks
[Potential risks and mitigations]

## Output Location
Save to: \`specs/evaluations/$ARGUMENTS.md\`
`,
    },
    {
      path: 'arch/scale.md',
      roleId: 'architect',
      content: `# Scalability Plan

Create scalability plan for: $ARGUMENTS

## Instructions

You are acting as an **Architect**. Design a scalability strategy.

## Scalability Analysis

### Current State
- Current capacity: [Requests/sec, users, data size]
- Bottlenecks: [Identified constraints]
- Cost: [Current infrastructure cost]

### Growth Projections
| Metric | Current | 6 months | 1 year | 3 years |
|--------|---------|----------|--------|---------|
| Users | | | | |
| Requests/sec | | | | |
| Data size | | | | |

### Scalability Strategies

#### Horizontal Scaling
- Add more instances behind load balancer
- Stateless service design
- Distributed caching

#### Vertical Scaling
- Upgrade instance sizes
- Optimize resource utilization

#### Database Scaling
- Read replicas
- Sharding strategy
- Caching layer

#### Caching Strategy
- Application cache
- CDN for static assets
- Query result caching

### Implementation Plan

| Phase | Change | Impact | Effort | Timeline |
|-------|--------|--------|--------|----------|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |

### Cost Projections
| Phase | Infrastructure | Additional Cost |
|-------|---------------|-----------------|
| | | |

### Monitoring & Alerts
- Metrics to track
- Thresholds for scaling
- Alerting rules

## Output Location
Save to: \`specs/scalability/$ARGUMENTS.md\`
`,
    },
    {
      path: 'arch/integrate.md',
      roleId: 'architect',
      content: `# Integration Design

Design integration between: $ARGUMENTS

## Instructions

You are acting as an **Architect**. Design system integration.

## Integration Overview

### Systems Involved
| System | Owner | API Type | Auth |
|--------|-------|----------|------|
| | | | |

### Integration Pattern
- [ ] Point-to-Point
- [ ] Hub-and-Spoke
- [ ] Event-Driven
- [ ] API Gateway

### Data Flow

\`\`\`
System A ──► API Gateway ──► System B
    │                           │
    └──────► Event Bus ◄────────┘
\`\`\`

### API Contracts

#### Endpoint: [Name]
- **Method**: GET/POST/etc.
- **URL**: /api/v1/...
- **Request**: [Schema]
- **Response**: [Schema]
- **Errors**: [Error codes]

### Error Handling
- Retry strategy
- Circuit breaker
- Fallback behavior
- Dead letter queue

### Security
- Authentication method
- Authorization
- Data encryption in transit
- API key management

### Monitoring
- Health checks
- SLA tracking
- Error rate alerts

## Output Location
Save to: \`specs/integrations/$ARGUMENTS.md\`
`,
    },
    {
      path: 'arch/review.md',
      roleId: 'architect',
      content: `# Architecture Review

Perform architecture review on current codebase.

## Instructions

You are acting as an **Architect**. Review the codebase for architectural concerns.

## Review Checklist

### Structure & Organization
- [ ] Clear module boundaries
- [ ] Appropriate layering
- [ ] Dependency direction correct
- [ ] No circular dependencies

### Design Patterns
- [ ] Patterns used appropriately
- [ ] Consistent patterns across codebase
- [ ] Anti-patterns identified

### SOLID Principles
- [ ] Single Responsibility
- [ ] Open/Closed
- [ ] Liskov Substitution
- [ ] Interface Segregation
- [ ] Dependency Inversion

### Scalability
- [ ] Stateless services where possible
- [ ] Caching strategy in place
- [ ] Database indexing appropriate
- [ ] Horizontal scaling possible

### Security
- [ ] Authentication implemented correctly
- [ ] Authorization checks in place
- [ ] Sensitive data protected
- [ ] Input validation

### Maintainability
- [ ] Code is readable
- [ ] Documentation adequate
- [ ] Tests present
- [ ] Configuration externalized

## Findings

### Critical
| Issue | Location | Recommendation |
|-------|----------|----------------|
| | | |

### High Priority
| Issue | Location | Recommendation |
|-------|----------|----------------|
| | | |

### Medium Priority
| Issue | Location | Recommendation |
|-------|----------|----------------|
| | | |

## Recommendations
1. [Top recommendation]
2. [Second recommendation]
3. [Third recommendation]

## Output Location
Save to: \`specs/reviews/architecture-review.md\`
`,
    },
    {
      path: 'arch/diagram.md',
      roleId: 'architect',
      content: `# Architecture Diagram

Create architecture diagram for: $ARGUMENTS

## Instructions

You are acting as an **Architect**. Create clear architecture diagrams.

## Diagram Types

### 1. System Context (C4 Level 1)
\`\`\`
┌─────────────────────────────────────────────────────────┐
│                    External Users                        │
└───────────────────────────┬─────────────────────────────┘
                            │
                    ┌───────┴───────┐
                    │  Your System  │
                    └───────┬───────┘
                            │
┌───────────────────────────┴─────────────────────────────┐
│                  External Systems                        │
│   [Payment]    [Email]    [Analytics]    [Storage]      │
└─────────────────────────────────────────────────────────┘
\`\`\`

### 2. Container Diagram (C4 Level 2)
\`\`\`
┌─────────────────────────────────────────────────────────┐
│                      Your System                         │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │
│  │  Web App    │  │  Mobile App │  │   Admin     │     │
│  │  (React)    │  │  (React     │  │   (React)   │     │
│  │             │  │   Native)   │  │             │     │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘     │
│         │                │                │             │
│         └────────────────┼────────────────┘             │
│                          │                              │
│              ┌───────────┴───────────┐                  │
│              │     API Gateway       │                  │
│              └───────────┬───────────┘                  │
│                          │                              │
│    ┌─────────────────────┼─────────────────────┐       │
│    │                     │                     │       │
│ ┌──┴──┐              ┌───┴───┐             ┌───┴───┐   │
│ │Auth │              │ Core  │             │Notify │   │
│ │Svc  │              │ API   │             │ Svc   │   │
│ └──┬──┘              └───┬───┘             └───┬───┘   │
│    │                     │                     │       │
│ ┌──┴──┐              ┌───┴───┐             ┌───┴───┐   │
│ │User │              │ Main  │             │Message│   │
│ │ DB  │              │  DB   │             │Queue  │   │
│ └─────┘              └───────┘             └───────┘   │
└─────────────────────────────────────────────────────────┘
\`\`\`

### 3. Sequence Diagram
\`\`\`
User          Frontend       API            Database
  │               │           │                │
  │──Request────>│           │                │
  │               │──API Call─>│               │
  │               │           │──Query────────>│
  │               │           │<─Result────────│
  │               │<─Response──│               │
  │<─Display──────│           │                │
  │               │           │                │
\`\`\`

## Diagram Best Practices
- Keep it simple
- Use consistent notation
- Include legend
- Show data flow direction
- Label connections

## Output Location
Save diagram to: \`docs/diagrams/$ARGUMENTS.md\`
`,
    },
  ];
}
