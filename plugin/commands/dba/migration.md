# DBA: Database Migration Workflow

Migrate database: $ARGUMENTS

## Multi-Role Workflow

### Step 1: Planning [DBA - /dba:backup]
- Backup strategy
- Rollback plan
- Downtime window

### Step 2: Schema Changes [DBA - /dba:index]
- Migration scripts
- Index changes
- Data transformations

### Step 3: Application Updates [Dev - /dev:implement]
- Code changes
- ORM updates
- Backward compatibility

### Step 4: Testing [Test - /test:e2e]
- Migration testing
- Performance testing
- Data validation

### Step 5: Execution [Ops - /ops:ci]
- Maintenance window
- Migration execution
- Monitoring

### Step 6: Validation [DBA - /dba:monitor]
- Data integrity
- Performance check
- Rollback readiness

### Output:
Successful migration with validated data and performance.
