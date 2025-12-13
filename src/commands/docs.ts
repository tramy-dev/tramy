/**
 * Technical Writer Command Templates
 */

import { CommandTemplate } from './index.js';

export function generateDocsCommands(): CommandTemplate[] {
  return [
    {
      path: 'docs/api.md',
      roleId: 'technical-writer',
      content: `# Document API

Document API: $ARGUMENTS

## Instructions

You are acting as a **Technical Writer**. Create API documentation.

## API Documentation Template

# $ARGUMENTS API

## Overview
[Brief description of the API]

## Base URL
\`\`\`
https://api.example.com/v1
\`\`\`

## Authentication
[Describe authentication method]

\`\`\`bash
curl -H "Authorization: Bearer <token>" https://api.example.com/v1/...
\`\`\`

## Endpoints

### List [Resources]

\`\`\`
GET /resources
\`\`\`

**Parameters**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| page | integer | No | Page number (default: 1) |
| limit | integer | No | Items per page (default: 20) |

**Response**
\`\`\`json
{
  "data": [
    {
      "id": "abc123",
      "name": "Example"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100
  }
}
\`\`\`

### Get [Resource]

\`\`\`
GET /resources/:id
\`\`\`

**Response**
\`\`\`json
{
  "id": "abc123",
  "name": "Example",
  "createdAt": "2024-01-01T00:00:00Z"
}
\`\`\`

### Create [Resource]

\`\`\`
POST /resources
\`\`\`

**Request Body**
\`\`\`json
{
  "name": "New Resource"
}
\`\`\`

**Response** (201 Created)
\`\`\`json
{
  "id": "def456",
  "name": "New Resource"
}
\`\`\`

## Error Responses

\`\`\`json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Name is required"
  }
}
\`\`\`

| Code | Description |
|------|-------------|
| 400 | Bad Request |
| 401 | Unauthorized |
| 404 | Not Found |
| 500 | Internal Error |

## Output Location
Save to: \`docs/api/$ARGUMENTS.md\`
`,
    },
    {
      path: 'docs/readme.md',
      roleId: 'technical-writer',
      content: `# Create/Update README

Create/update README for: $ARGUMENTS

## Instructions

You are acting as a **Technical Writer**. Create a comprehensive README.

## README Template

# $ARGUMENTS

> One-line description of the project

[![License](https://img.shields.io/badge/license-MIT-blue.svg)]()
[![CI](https://github.com/org/repo/actions/workflows/ci.yml/badge.svg)]()

## Features

- Feature 1
- Feature 2
- Feature 3

## Quick Start

\`\`\`bash
npx create-$ARGUMENTS my-app
cd my-app
npm run dev
\`\`\`

## Installation

\`\`\`bash
npm install $ARGUMENTS
# or
yarn add $ARGUMENTS
# or
pnpm add $ARGUMENTS
\`\`\`

## Usage

\`\`\`typescript
import { feature } from '$ARGUMENTS';

const result = feature({ option: 'value' });
\`\`\`

## Configuration

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| option1 | string | 'default' | Description |
| option2 | boolean | false | Description |

## API Reference

### \`functionName(options)\`

Description of function.

**Parameters**
- \`options.param1\` (string): Description

**Returns**
- \`Result\`: Description

**Example**
\`\`\`typescript
const result = functionName({ param1: 'value' });
\`\`\`

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## License

MIT - see [LICENSE](LICENSE) for details.

## Output Location
Save to: \`README.md\`
`,
    },
    {
      path: 'docs/guide.md',
      roleId: 'technical-writer',
      content: `# Write User Guide

Write user guide for: $ARGUMENTS

## Instructions

You are acting as a **Technical Writer**. Create a user guide.

## User Guide Template

# $ARGUMENTS User Guide

## Introduction

### What is $ARGUMENTS?
[Brief explanation]

### Who is this guide for?
[Target audience]

### Prerequisites
- Prerequisite 1
- Prerequisite 2

## Getting Started

### Step 1: Installation
[Detailed installation steps]

### Step 2: Initial Setup
[Setup instructions]

### Step 3: First Use
[Walk through first use]

## Core Concepts

### Concept 1
[Explanation with examples]

### Concept 2
[Explanation with examples]

## Common Tasks

### Task 1: [Name]
1. Step one
2. Step two
3. Step three

### Task 2: [Name]
1. Step one
2. Step two

## Best Practices

### Do
- Recommendation 1
- Recommendation 2

### Don't
- Anti-pattern 1
- Anti-pattern 2

## Troubleshooting

### Issue: [Common Problem]
**Symptoms**: [What you see]
**Cause**: [Why it happens]
**Solution**: [How to fix]

## FAQ

### Q: [Common question]?
A: [Answer]

## Next Steps
- [Link to advanced guide]
- [Link to API reference]

## Output Location
Save to: \`docs/guides/$ARGUMENTS.md\`
`,
    },
    {
      path: 'docs/tutorial.md',
      roleId: 'technical-writer',
      content: `# Create Tutorial

Create tutorial for: $ARGUMENTS

## Instructions

You are acting as a **Technical Writer**. Create a step-by-step tutorial.

## Tutorial Template

# Tutorial: $ARGUMENTS

## Overview

### What you'll learn
- Learning outcome 1
- Learning outcome 2
- Learning outcome 3

### Prerequisites
- Prerequisite 1
- Prerequisite 2

### Time to complete
Approximately X minutes

---

## Step 1: [Title]

[Explanation of what we're doing and why]

\`\`\`bash
# Code for this step
\`\`\`

**Expected output:**
\`\`\`
[What they should see]
\`\`\`

---

## Step 2: [Title]

[Explanation]

\`\`\`typescript
// Code for this step
\`\`\`

> **Note**: [Important information]

---

## Step 3: [Title]

[Explanation]

\`\`\`typescript
// Code for this step
\`\`\`

> **Tip**: [Helpful tip]

---

## Step 4: [Title]

[Explanation]

---

## Verify Your Work

To confirm everything is working:

1. [Verification step 1]
2. [Verification step 2]

You should see:
[Expected result]

---

## Summary

In this tutorial, you learned how to:
- ✅ Accomplishment 1
- ✅ Accomplishment 2
- ✅ Accomplishment 3

## Next Steps
- [Link to next tutorial]
- [Link to related documentation]

## Output Location
Save to: \`docs/tutorials/$ARGUMENTS.md\`
`,
    },
    {
      path: 'docs/changelog.md',
      roleId: 'technical-writer',
      content: `# Update Changelog

Update the changelog.

## Instructions

You are acting as a **Technical Writer**. Update the changelog following Keep a Changelog format.

## Changelog Template

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- New features

### Changed
- Changes in existing functionality

### Deprecated
- Soon-to-be removed features

### Removed
- Now removed features

### Fixed
- Bug fixes

### Security
- Vulnerability fixes

## [1.0.0] - YYYY-MM-DD

### Added
- Initial release
- Feature 1
- Feature 2

---

## Guidelines

### Version Types
- **Major (X.0.0)**: Breaking changes
- **Minor (0.X.0)**: New features, backward compatible
- **Patch (0.0.X)**: Bug fixes, backward compatible

### Entry Format
- Use imperative mood ("Add" not "Added")
- Include issue/PR references
- Group by type (Added, Changed, etc.)

## Output Location
Update: \`CHANGELOG.md\`
`,
    },
    {
      path: 'docs/adr.md',
      roleId: 'technical-writer',
      content: `# Document ADR

Document architecture decision: $ARGUMENTS

## Instructions

You are acting as a **Technical Writer**. Document an architecture decision.

## ADR Template

# ADR-[NUMBER]: $ARGUMENTS

| Field | Value |
|-------|-------|
| Status | Proposed/Accepted/Deprecated |
| Date | YYYY-MM-DD |
| Authors | [Names] |
| Reviewers | [Names] |

## Context

[What is the issue that we're seeing that is motivating this decision?]

## Decision

[What is the change that we're proposing and/or doing?]

## Rationale

[Why did we choose this option over others?]

## Consequences

### Benefits
- Benefit 1
- Benefit 2

### Drawbacks
- Drawback 1
- Drawback 2

### Risks
- Risk 1: Mitigation
- Risk 2: Mitigation

## Alternatives Considered

### Option A: [Name]
- Pros: ...
- Cons: ...
- Why not chosen: ...

### Option B: [Name]
- Pros: ...
- Cons: ...
- Why not chosen: ...

## Implementation

### Steps
1. Step 1
2. Step 2
3. Step 3

### Timeline
- Phase 1: ...
- Phase 2: ...

## References

- [Link 1]
- [Link 2]

## Output Location
Save to: \`docs/adr/[number]-$ARGUMENTS.md\`
`,
    },
    {
      path: 'docs/runbook.md',
      roleId: 'technical-writer',
      content: `# Create Runbook

Create runbook for: $ARGUMENTS

## Instructions

You are acting as a **Technical Writer**. Create an operational runbook.

## Runbook Template

# Runbook: $ARGUMENTS

## Overview
| Field | Value |
|-------|-------|
| Service | [Service name] |
| Team | [Owning team] |
| Escalation | [Contact info] |
| Last Updated | [Date] |

## Service Description
[What does this service do?]

## Architecture
[Brief architecture overview]

## Dependencies
| Service | Purpose | Impact if Down |
|---------|---------|----------------|
| | | |

## Monitoring

### Key Metrics
| Metric | Normal Range | Alert Threshold |
|--------|--------------|-----------------|
| | | |

### Dashboards
- [Link to dashboard 1]
- [Link to dashboard 2]

### Alerts
| Alert | Severity | Runbook Section |
|-------|----------|-----------------|
| | | |

## Common Operations

### Restart Service
\`\`\`bash
kubectl rollout restart deployment/$ARGUMENTS
kubectl rollout status deployment/$ARGUMENTS
\`\`\`

### Scale Service
\`\`\`bash
kubectl scale deployment/$ARGUMENTS --replicas=N
\`\`\`

### View Logs
\`\`\`bash
kubectl logs -l app=$ARGUMENTS --tail=100 -f
\`\`\`

## Incident Response

### High CPU
1. Check current usage
2. Review recent changes
3. Scale if needed
4. Investigate root cause

### High Memory
1. Check memory usage
2. Look for memory leaks
3. Restart if necessary
4. Investigate root cause

### Service Unavailable
1. Check pod status
2. Check recent deployments
3. Review logs
4. Rollback if needed

## Disaster Recovery
[DR procedures]

## Output Location
Save to: \`docs/runbooks/$ARGUMENTS.md\`
`,
    },
  ];
}
