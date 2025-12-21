# /da:query - Write SQL Query

Query for: $ARGUMENTS

## Purpose
Write optimized SQL queries based on business requirements.

## Process

### 1. Understand Requirements
- What question are we answering?
- What level of granularity?
- What time period?
- Any filters or segments?

### 2. Identify Tables
- What tables contain the data?
- How do they join?
- What are the key fields?

### 3. Write Query
- Use CTEs for readability
- Add comments
- Optimize for performance

### 4. Validate
- Check row counts
- Verify calculations
- Test edge cases

## Output Format
```sql
-- ===========================================
-- Query: [Title]
-- Purpose: [Business question being answered]
-- Author: DA Toolkit
-- Date: [Current date]
-- ===========================================

-- Step 1: [Description]
WITH base AS (
    SELECT
        user_id,
        created_at,
        amount
    FROM orders
    WHERE created_at >= '2024-01-01'
),

-- Step 2: [Description]
aggregated AS (
    SELECT
        DATE_TRUNC('month', created_at) AS month,
        COUNT(DISTINCT user_id) AS unique_users,
        SUM(amount) AS total_revenue
    FROM base
    GROUP BY 1
)

-- Final output
SELECT
    month,
    unique_users,
    total_revenue,
    total_revenue / unique_users AS revenue_per_user
FROM aggregated
ORDER BY month;
```

## Common Patterns

### Window Functions
```sql
-- Running total
SUM(amount) OVER (ORDER BY date) AS running_total

-- Month-over-month change
LAG(value) OVER (ORDER BY month) AS prev_month

-- Rank within group
ROW_NUMBER() OVER (PARTITION BY category ORDER BY amount DESC) AS rank
```

### Date Operations
```sql
-- PostgreSQL
DATE_TRUNC('month', created_at)
created_at::date

-- BigQuery
DATE_TRUNC(created_at, MONTH)
DATE(created_at)
```

## Examples
- `/da:query monthly active users by country`
- `/da:query customer lifetime value`
- `/da:query top 10 products by revenue`

## After Completion
Update CLAUDE.md with new knowledge:
1. Add useful SQL patterns to "## Project Knowledge" section
2. Document table schemas discovered in "## Data Sources" section
3. Save reusable query templates for future reference
