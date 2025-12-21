# /da:analyze - Exploratory Data Analysis

Analyze: $ARGUMENTS

## Purpose
Perform exploratory data analysis (EDA) to understand patterns and insights.

## EDA Framework

### 1. Data Overview
- Shape (rows, columns)
- Data types
- Missing values
- Sample records

### 2. Univariate Analysis
- Distributions
- Central tendency (mean, median, mode)
- Spread (std, IQR, range)
- Outliers

### 3. Bivariate Analysis
- Correlations
- Group comparisons
- Trend analysis

### 4. Key Insights
- Patterns discovered
- Anomalies found
- Hypotheses formed

## Output Format

### SQL Approach
```sql
-- Data Overview
SELECT
    COUNT(*) AS total_rows,
    COUNT(DISTINCT user_id) AS unique_users,
    MIN(created_at) AS first_record,
    MAX(created_at) AS last_record
FROM table_name;

-- Distribution
SELECT
    segment,
    COUNT(*) AS count,
    ROUND(100.0 * COUNT(*) / SUM(COUNT(*)) OVER (), 2) AS percentage
FROM table_name
GROUP BY segment
ORDER BY count DESC;

-- Statistics
SELECT
    AVG(amount) AS mean,
    PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY amount) AS median,
    STDDEV(amount) AS std_dev,
    MIN(amount) AS min_value,
    MAX(amount) AS max_value
FROM table_name;
```

### Python Approach
```python
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Load data
df = pd.read_sql(query, connection)

# Overview
print(df.info())
print(df.describe())

# Distributions
fig, axes = plt.subplots(2, 2, figsize=(12, 10))
df['amount'].hist(ax=axes[0,0])
df['category'].value_counts().plot(kind='bar', ax=axes[0,1])
sns.boxplot(data=df, x='segment', y='amount', ax=axes[1,0])
df.groupby('month')['amount'].sum().plot(ax=axes[1,1])
plt.tight_layout()
```

## Analysis Types

| Type | When to Use | Key Metrics |
|------|-------------|-------------|
| Cohort | User behavior over time | Retention, LTV |
| Funnel | Conversion process | Drop-off rates |
| Segmentation | Group comparison | Segment sizes, differences |
| Time Series | Trends over time | Growth, seasonality |
| A/B Test | Experiment results | Significance, lift |

## Examples
- `/da:analyze customer purchase patterns`
- `/da:analyze website funnel conversion`
- `/da:analyze revenue trends by segment`

## After Completion
Update CLAUDE.md with new knowledge:
1. Add key findings to "## Project Knowledge" section
2. Document data patterns and anomalies discovered
3. Update "## Data Sources" with new data characteristics learned
4. Record hypotheses formed for future investigation
