# Ship - Multi-Role Deployment Workflow

Ship to production: $ARGUMENTS

## Multi-Role Workflow

This command orchestrates multiple roles for safe deployment and announcement.

### Step 1: Pre-Deployment Checks [Test - /test:e2e]
- Run full test suite
- E2E tests pass
- Performance benchmarks
- No blocking issues

### Step 2: Release Preparation [Ops - /ops:release]
- Version bump
- Changelog generation
- Migration scripts ready
- Rollback plan documented

### Step 3: Deployment [Ops - /ops:ci]
- Build production artifacts
- Deploy to staging
- Smoke tests
- Deploy to production
- Health checks

### Step 4: Documentation [Docs - /docs:changelog]
- Update changelog
- Release notes
- Migration guide (if breaking changes)
- API documentation updates

### Step 5: Monitoring [Ops - /ops:monitor]
- Alert thresholds set
- Dashboard monitoring
- Error rate tracking
- Performance metrics

### Step 6: Announcement [Mkt - /mkt:campaign]
- Release announcement
- Social media posts
- Customer notification
- Blog post (if major release)

### Step 7: Git Commit
- Stage all changes
- Create conventional commit
- Tag release version

### Output:
Successful deployment with:
- Production verified
- Documentation updated
- Customers notified
- Monitoring active

**For hotfixes, use /fix workflow instead.**
