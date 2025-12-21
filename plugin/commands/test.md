# /test - Validate and Verify

Test: $ARGUMENTS

## Purpose
Validate data quality, verify results, and ensure outputs are correct.

## Types of Testing

### 1. Data Quality Checks
- Completeness: Are there missing values?
- Accuracy: Do values make sense?
- Consistency: Are formats uniform?
- Timeliness: Is data fresh?
- Uniqueness: Are there duplicates?

### 2. Query Validation
- Does the query return expected row count?
- Are joins correct (no unexpected multiplication)?
- Do aggregations match known totals?
- Are filters applied correctly?

### 3. Results Verification
- Do results make business sense?
- Are edge cases handled?
- Do totals reconcile?
- Are trends consistent with expectations?

## Output Format
```
## Test Report: [What was tested]

### Summary
- Status: PASS / FAIL / WARNING
- Items tested: [Count]
- Issues found: [Count]

### Data Quality Checks
| Check | Status | Details |
|-------|--------|---------|
| Null values | PASS/FAIL | [Details] |
| Duplicates | PASS/FAIL | [Details] |
| Value ranges | PASS/FAIL | [Details] |

### Validation Results
| Test | Expected | Actual | Status |
|------|----------|--------|--------|
| Row count | X | Y | PASS/FAIL |
| Total sum | X | Y | PASS/FAIL |

### Issues Found
1. [Issue description and severity]
2. [Issue description and severity]

### Recommendations
- [Action to take]
```

## Example Queries

### Check for nulls
```sql
SELECT
    COUNT(*) AS total_rows,
    COUNT(column1) AS non_null_col1,
    COUNT(*) - COUNT(column1) AS null_col1
FROM table_name;
```

### Check for duplicates
```sql
SELECT
    id,
    COUNT(*) AS cnt
FROM table_name
GROUP BY id
HAVING COUNT(*) > 1;
```

## Examples
- `/test data quality in orders table`
- `/test this SQL query results`
- `/test the analysis results make sense`

## After Completion
Update CLAUDE.md with new knowledge:
1. Add data quality findings to "## Data Quality" section
2. Document known issues and their status
3. Note validation rules for future reference
