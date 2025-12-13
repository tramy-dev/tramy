/**
 * Data Analyst Command Templates
 */

import { CommandTemplate } from './index.js';

export function generateDACommands(): CommandTemplate[] {
  return [
    {
      path: 'da/explore.md',
      roleId: 'data-analyst',
      content: `# Exploratory Data Analysis

Perform exploratory analysis on: $ARGUMENTS

## Instructions

You are acting as a **Data Analyst**. Conduct thorough exploratory data analysis.

## Analysis Framework

### 1. Data Overview
- Source and collection method
- Time period covered
- Number of records
- Number of features

### 2. Data Quality Assessment
- Missing values per column
- Data types
- Duplicate records
- Outliers

### 3. Univariate Analysis
For each key variable:
- Distribution (histogram, box plot)
- Central tendency (mean, median, mode)
- Spread (std dev, IQR, range)
- Skewness and kurtosis

### 4. Bivariate Analysis
- Correlations between numeric variables
- Cross-tabulations for categorical
- Scatter plots for relationships

### 5. Key Findings
- Summary of insights
- Anomalies discovered
- Data quality issues

### 6. Recommendations
- Data cleaning steps needed
- Features to engineer
- Further analysis suggested

## Output Format
Create a markdown report with visualizations (describe them in text or generate code).

## Output Location
Save to: \`analysis/$ARGUMENTS-eda.md\`
`,
    },
    {
      path: 'da/query.md',
      roleId: 'data-analyst',
      content: `# Write SQL Query

Write a SQL query for: $ARGUMENTS

## Instructions

You are acting as a **Data Analyst**. Write an efficient, well-documented SQL query.

## Query Template

\`\`\`sql
-- ============================================
-- Query: [Description]
-- Author: Data Analyst
-- Date: [Current Date]
-- ============================================

-- Purpose: [What this query answers]
-- Expected Output: [Description of results]

WITH
-- CTE 1: [Description]
cte_name AS (
    SELECT ...
),

-- CTE 2: [Description]
another_cte AS (
    SELECT ...
)

-- Main Query
SELECT
    column1,
    column2,
    -- Calculated field
    CASE
        WHEN condition THEN result
        ELSE other_result
    END AS calculated_column
FROM cte_name
JOIN another_cte ON ...
WHERE ...
GROUP BY ...
HAVING ...
ORDER BY ...
LIMIT ...;
\`\`\`

## Query Optimization Notes
- Indexes used: [List]
- Estimated rows: [Number]
- Performance considerations: [Notes]

## Sample Results
| Column1 | Column2 | ... |
|---------|---------|-----|
| | | |

## Output Location
Save to: \`analysis/queries/$ARGUMENTS.sql\`
`,
    },
    {
      path: 'da/visualize.md',
      roleId: 'data-analyst',
      content: `# Create Visualization

Create visualization for: $ARGUMENTS

## Instructions

You are acting as a **Data Analyst**. Create clear, impactful visualizations.

## Visualization Guidelines

### Chart Selection Guide
- **Comparison**: Bar chart, grouped bar
- **Trend over time**: Line chart, area chart
- **Distribution**: Histogram, box plot
- **Composition**: Pie chart, stacked bar
- **Relationship**: Scatter plot, bubble chart

### Code Template (Python)

\`\`\`python
import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd

# Set style
plt.style.use('seaborn-v0_8-whitegrid')
sns.set_palette("husl")

# Create figure
fig, ax = plt.subplots(figsize=(10, 6))

# Plot data
# [Your plotting code here]

# Customize
ax.set_title('Title', fontsize=14, fontweight='bold')
ax.set_xlabel('X Label', fontsize=12)
ax.set_ylabel('Y Label', fontsize=12)

# Add annotations if needed
# ax.annotate('Note', xy=(x, y), xytext=(x2, y2))

# Save
plt.tight_layout()
plt.savefig('visualization.png', dpi=150, bbox_inches='tight')
plt.show()
\`\`\`

### Visualization Checklist
- [ ] Clear, descriptive title
- [ ] Labeled axes with units
- [ ] Legend if multiple series
- [ ] Appropriate color scheme
- [ ] No chartjunk
- [ ] Data source noted

## Output Location
Save visualization to: \`analysis/visualizations/\`
`,
    },
    {
      path: 'da/report.md',
      roleId: 'data-analyst',
      content: `# Generate Report

Generate analytical report on: $ARGUMENTS

## Instructions

You are acting as a **Data Analyst**. Create a comprehensive analytical report.

## Report Template

# [Report Title]

## Executive Summary
[2-3 paragraph summary of key findings and recommendations]

## Key Metrics
| Metric | Value | Change | Trend |
|--------|-------|--------|-------|
| | | | |

## Analysis

### Methodology
- Data sources used
- Time period analyzed
- Analytical methods applied

### Findings

#### Finding 1: [Title]
[Description with supporting data]

#### Finding 2: [Title]
[Description with supporting data]

### Visualizations
[Include relevant charts and graphs]

## Insights & Recommendations

### Insights
1. [Insight 1]
2. [Insight 2]

### Recommendations
| Recommendation | Priority | Expected Impact | Effort |
|----------------|----------|-----------------|--------|
| | | | |

## Appendix
- Data definitions
- Detailed methodology
- Additional charts

## Output Location
Save to: \`reports/$ARGUMENTS-report.md\`
`,
    },
    {
      path: 'da/dashboard.md',
      roleId: 'data-analyst',
      content: `# Design Dashboard

Design dashboard for: $ARGUMENTS

## Instructions

You are acting as a **Data Analyst**. Design an effective dashboard layout.

## Dashboard Design Template

### Dashboard Purpose
- Primary audience: [Who]
- Key questions to answer: [What]
- Update frequency: [How often]

### KPIs & Metrics

| Metric | Definition | Visualization | Position |
|--------|------------|---------------|----------|
| | | Card/Chart/Table | Top/Middle/Bottom |

### Layout Design

\`\`\`
┌─────────────────────────────────────────────────────┐
│  [Header: Dashboard Title]           [Date Filter]  │
├─────────────┬─────────────┬─────────────┬──────────┤
│   KPI 1     │   KPI 2     │   KPI 3     │  KPI 4   │
├─────────────┴─────────────┴─────────────┴──────────┤
│                                                     │
│              [Main Chart Area]                      │
│                                                     │
├────────────────────────┬────────────────────────────┤
│   [Secondary Chart 1]  │   [Secondary Chart 2]      │
├────────────────────────┴────────────────────────────┤
│              [Data Table / Details]                 │
└─────────────────────────────────────────────────────┘
\`\`\`

### Interactivity
- Filters: [List filters]
- Drill-downs: [Where users can click for detail]
- Cross-filtering: [How charts interact]

### Data Sources
| Metric | Source | Refresh Rate |
|--------|--------|--------------|
| | | |

## Output Location
Save to: \`specs/dashboards/$ARGUMENTS.md\`
`,
    },
    {
      path: 'da/abtest.md',
      roleId: 'data-analyst',
      content: `# Analyze A/B Test

Analyze A/B test results for: $ARGUMENTS

## Instructions

You are acting as a **Data Analyst**. Perform rigorous A/B test analysis.

## A/B Test Analysis Template

### Experiment Overview
- **Name**: [Experiment name]
- **Hypothesis**: [What we're testing]
- **Start Date**: [Date]
- **End Date**: [Date]
- **Traffic Split**: [Control/Variant %]

### Sample Size
| Group | Users | Conversions | Rate |
|-------|-------|-------------|------|
| Control | | | |
| Variant | | | |

### Statistical Analysis

#### Primary Metric
- **Control Rate**: X%
- **Variant Rate**: Y%
- **Relative Lift**: Z%
- **P-value**: [Value]
- **Confidence Level**: [95%/99%]
- **Statistical Significance**: [Yes/No]

#### Confidence Interval
- Lower bound: X%
- Upper bound: Y%

### Segmentation Analysis
| Segment | Control | Variant | Lift | Significant? |
|---------|---------|---------|------|--------------|
| | | | | |

### Recommendation
- [ ] **Ship**: Variant is significantly better
- [ ] **Don't Ship**: No significant difference
- [ ] **Iterate**: Promising but needs refinement
- [ ] **Kill**: Control is significantly better

### Learnings
[Key takeaways for future experiments]

## Output Location
Save to: \`analysis/experiments/$ARGUMENTS.md\`
`,
    },
    {
      path: 'da/profile.md',
      roleId: 'data-analyst',
      content: `# Data Profiling

Profile dataset: $ARGUMENTS

## Instructions

You are acting as a **Data Analyst**. Create a comprehensive data profile.

## Data Profile Template

### Dataset Overview
| Attribute | Value |
|-----------|-------|
| Source | |
| Records | |
| Columns | |
| Size | |
| Date Range | |

### Column Profiles

For each column:

#### [Column Name]
| Attribute | Value |
|-----------|-------|
| Data Type | |
| Non-null Count | |
| Null Count (%) | |
| Unique Values | |
| Sample Values | |

**For Numeric:**
| Statistic | Value |
|-----------|-------|
| Min | |
| Max | |
| Mean | |
| Median | |
| Std Dev | |

**For Categorical:**
| Value | Count | Percentage |
|-------|-------|------------|
| | | |

### Data Quality Issues
| Issue | Column(s) | Severity | Recommendation |
|-------|-----------|----------|----------------|
| Missing values | | | |
| Duplicates | | | |
| Outliers | | | |
| Invalid values | | | |

### Relationships
- Primary keys: [List]
- Foreign keys: [List]
- Correlations: [Notable correlations]

## Output Location
Save to: \`analysis/profiles/$ARGUMENTS.md\`
`,
    },
  ];
}
