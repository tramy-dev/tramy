# Ops: Release Workflow

Orchestrate release for: $ARGUMENTS

## Multi-Role Workflow

### Step 1: Code Freeze [Dev - /dev:review]
- Final code review
- Merge all PRs
- Version bump

### Step 2: QA Sign-off [Test - /test:e2e]
- Full regression
- Performance tests
- Security scan

### Step 3: Release Notes [Docs - /docs:changelog]
- Changelog generation
- Migration guide
- Breaking changes

### Step 4: Deployment [Ops]
- Staging deployment
- Production deployment
- Rollback preparation

### Step 5: Monitoring [Ops - /ops:monitor]
- Alert thresholds
- Dashboard checks
- On-call handoff

### Step 6: Announcement [Mkt - /mkt:campaign]
- Release announcement
- Social media posts
- Customer notification

### Output:
Successful release with monitoring and customer communication.
