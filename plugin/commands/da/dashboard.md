# /da:dashboard - Design Dashboard

Dashboard for: $ARGUMENTS

## Purpose
Design a dashboard layout with metrics, charts, and filters.

## Dashboard Design Process

### 1. Define Audience
- Who will use this?
- What decisions will they make?
- How often will they view it?

### 2. Select Metrics
- What are the KPIs?
- What dimensions for breakdown?
- What comparisons needed?

### 3. Design Layout
- Visual hierarchy
- Information flow
- Interactive elements

### 4. Specify Charts
- Chart type for each metric
- Filters and drill-downs
- Refresh frequency

## Output Template

```markdown
# Dashboard Specification: [Name]

## Overview
- **Purpose:** [What decisions this enables]
- **Audience:** [Who will use it]
- **Refresh:** [Real-time / Daily / Weekly]

## Layout

```
+------------------+------------------+------------------+
|   KPI Card 1     |   KPI Card 2     |   KPI Card 3     |
|   [Metric]       |   [Metric]       |   [Metric]       |
+------------------+------------------+------------------+
|                                                        |
|              Main Chart: [Type]                        |
|              [Metric over time]                        |
|                                                        |
+-------------------------+------------------------------+
|     Chart 2             |     Chart 3                  |
|     [Type]              |     [Type]                   |
|     [Breakdown]         |     [Breakdown]              |
+-------------------------+------------------------------+
|                    Data Table                          |
|     [Detail rows with key dimensions]                  |
+--------------------------------------------------------+
```

## Metrics

| Metric | Calculation | Chart Type |
|--------|-------------|------------|
| [KPI 1] | [SQL/Formula] | Scorecard |
| [KPI 2] | [SQL/Formula] | Scorecard |
| [Trend] | [SQL/Formula] | Line chart |
| [Breakdown] | [SQL/Formula] | Bar chart |

## Filters
- Date range (default: Last 30 days)
- [Dimension 1] (multi-select)
- [Dimension 2] (single-select)

## SQL Queries

### KPI 1: [Name]
```sql
SELECT
    COUNT(DISTINCT user_id) AS value,
    'users' AS label
FROM events
WHERE event_date >= CURRENT_DATE - 30;
```

### Main Chart: [Name]
```sql
SELECT
    DATE_TRUNC('day', event_date) AS date,
    COUNT(*) AS events
FROM events
WHERE event_date >= CURRENT_DATE - 30
GROUP BY 1
ORDER BY 1;
```

## Interactivity
- Click on chart → Filter table below
- Hover → Show tooltip with details
- Click KPI → Drill down to detail view

## Implementation Notes
- Tool: [Superset / Metabase / Looker / etc.]
- Data source: [Database/table]
- Cache: [Duration]
```

## Chart Type Guidelines

| Data Type | Recommended Chart |
|-----------|-------------------|
| Trend over time | Line chart |
| Category comparison | Bar chart |
| Part of whole | Pie/Donut (≤5 categories) |
| Distribution | Histogram |
| Correlation | Scatter plot |
| Geographic | Map |
| Single value | Scorecard/KPI card |

## Examples
- `/da:dashboard executive revenue overview`
- `/da:dashboard marketing campaign performance`
- `/da:dashboard customer support metrics`

## After Completion
Update CLAUDE.md with new knowledge:
1. Add dashboard specs to "## Documentation" section
2. Document KPIs and metrics defined in "## Project Knowledge"
3. Record data sources and refresh requirements in "## Data Sources"
4. Link to dashboard implementation or BI tool location
