/**
 * Data Analyst Command Templates - Complete Edition
 */

import { CommandTemplate } from './index.js';

export function generateDACommands(): CommandTemplate[] {
  return [
    // ============================================
    // CORE ANALYSIS COMMANDS
    // ============================================
    {
      path: 'da/explore.md',
      roleId: 'data-analyst',
      content: `# Exploratory Data Analysis

Perform EDA on: $ARGUMENTS

## Instructions

You are acting as a **Data Analyst**. Perform comprehensive EDA and provide BOTH:
1. Markdown report with findings
2. Jupyter notebook with reproducible code

## EDA Framework

### 1. Data Overview
- Shape, dtypes, memory usage
- Missing values analysis
- Duplicates check

### 2. Statistical Summary
- Descriptive statistics
- Distribution analysis
- Outlier detection

### 3. Visual Analysis
- Histograms for numeric columns
- Bar charts for categorical
- Correlation heatmap

### 4. Key Findings
- Patterns discovered
- Data quality issues
- Recommendations

## Output Files

1. \`analysis/eda-$ARGUMENTS.md\` - Report with findings
2. \`notebooks/eda-$ARGUMENTS.ipynb\` - Jupyter notebook

## Notebook Template

\`\`\`python
# EDA: $ARGUMENTS
# Author: Data Analyst
# Date: [Current Date]

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Configuration
pd.set_option('display.max_columns', None)
sns.set_style('whitegrid')
%matplotlib inline

# Load Data
df = pd.read_csv('path/to/data.csv')  # Adjust path

# 1. Data Overview
print(f"Shape: {df.shape}")
print(f"\\nData Types:\\n{df.dtypes}")
print(f"\\nMissing Values:\\n{df.isnull().sum()}")

# 2. Statistical Summary
df.describe()

# 3. Distribution Analysis
fig, axes = plt.subplots(2, 2, figsize=(12, 10))
# Add plots...

# 4. Correlation Analysis
plt.figure(figsize=(10, 8))
sns.heatmap(df.corr(), annot=True, cmap='coolwarm')
plt.title('Correlation Matrix')
plt.show()

# 5. Key Findings
# - Finding 1
# - Finding 2
\`\`\`
`,
    },
    {
      path: 'da/query.md',
      roleId: 'data-analyst',
      content: `# Write SQL Query

Write SQL query for: $ARGUMENTS

## Instructions

You are acting as a **Data Analyst**. Write an efficient, readable SQL query.

## SQL Best Practices

1. **Structure**
   - Use CTEs for complex logic
   - Meaningful aliases
   - Proper indentation

2. **Performance**
   - Filter early (WHERE before JOIN)
   - Avoid SELECT *
   - Use appropriate indexes

3. **Documentation**
   - Comment complex logic
   - State assumptions
   - Note performance considerations

## Query Template

\`\`\`sql
-- ================================================
-- Query: $ARGUMENTS
-- Author: Data Analyst
-- Date: [Current Date]
-- Database: [PostgreSQL/MySQL/BigQuery/Snowflake]
-- ================================================

-- Purpose: [What this query answers]
-- Assumptions: [Any assumptions made]

WITH base_data AS (
    -- Step 1: Get base dataset
    SELECT
        column1,
        column2,
        column3
    FROM schema.table
    WHERE date_column >= DATE_SUB(CURRENT_DATE, INTERVAL 30 DAY)
),

aggregated AS (
    -- Step 2: Aggregate metrics
    SELECT
        dimension,
        COUNT(DISTINCT user_id) AS users,
        SUM(amount) AS total_amount,
        AVG(amount) AS avg_amount
    FROM base_data
    GROUP BY dimension
)

-- Final output
SELECT
    dimension,
    users,
    total_amount,
    avg_amount,
    ROUND(total_amount / NULLIF(users, 0), 2) AS amount_per_user
FROM aggregated
ORDER BY total_amount DESC
;

-- Expected Output:
-- | dimension | users | total_amount | avg_amount | amount_per_user |
-- |-----------|-------|--------------|------------|-----------------|
\`\`\`
`,
    },
    {
      path: 'da/visualize.md',
      roleId: 'data-analyst',
      content: `# Create Visualization

Create visualization for: $ARGUMENTS

## Instructions

You are acting as a **Data Analyst**. Create clear visualizations with both Python code and BI tool recommendations.

## Chart Selection Guide

| Data Type | Chart | Use Case |
|-----------|-------|----------|
| Trend | Line | Time series |
| Comparison | Bar | Category comparison |
| Distribution | Histogram/Box | Data spread |
| Composition | Pie/Stacked Bar | Parts of whole |
| Relationship | Scatter | Correlation |
| Funnel | Funnel | Conversion |

## Python Visualization Code

\`\`\`python
import matplotlib.pyplot as plt
import seaborn as sns
import plotly.express as px

# Style setup
plt.style.use('seaborn-v0_8-whitegrid')
colors = ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd']

# Option 1: Matplotlib/Seaborn (Static)
fig, ax = plt.subplots(figsize=(10, 6))
# Add your plot here
ax.set_title('Title', fontsize=14, fontweight='bold')
ax.set_xlabel('X Label')
ax.set_ylabel('Y Label')
plt.tight_layout()
plt.savefig('visualizations/$ARGUMENTS.png', dpi=150)
plt.show()

# Option 2: Plotly (Interactive)
fig = px.line(df, x='date', y='value', title='Title')
fig.update_layout(
    xaxis_title='X Label',
    yaxis_title='Y Label',
    template='plotly_white'
)
fig.write_html('visualizations/$ARGUMENTS.html')
fig.show()
\`\`\`

## Output
- \`visualizations/$ARGUMENTS.png\` - Static image
- \`visualizations/$ARGUMENTS.html\` - Interactive (optional)
`,
    },
    {
      path: 'da/profile.md',
      roleId: 'data-analyst',
      content: `# Data Profiling

Profile dataset: $ARGUMENTS

## Instructions

You are acting as a **Data Analyst**. Create comprehensive data profile with both report and notebook.

## Output Files

1. \`analysis/profile-$ARGUMENTS.md\` - Profile report
2. \`notebooks/profile-$ARGUMENTS.ipynb\` - Profiling notebook

## Notebook Code

\`\`\`python
# Data Profiling: $ARGUMENTS

import pandas as pd
import numpy as np

# Load data
df = pd.read_csv('path/to/data.csv')

# Basic Info
print("="*50)
print("DATASET OVERVIEW")
print("="*50)
print(f"Rows: {len(df):,}")
print(f"Columns: {len(df.columns)}")
print(f"Memory: {df.memory_usage(deep=True).sum() / 1024**2:.2f} MB")

# Column Profiles
print("\\n" + "="*50)
print("COLUMN PROFILES")
print("="*50)

for col in df.columns:
    print(f"\\n--- {col} ---")
    print(f"Type: {df[col].dtype}")
    print(f"Non-null: {df[col].count():,} ({df[col].count()/len(df)*100:.1f}%)")
    print(f"Unique: {df[col].nunique():,}")

    if df[col].dtype in ['int64', 'float64']:
        print(f"Min: {df[col].min()}")
        print(f"Max: {df[col].max()}")
        print(f"Mean: {df[col].mean():.2f}")
    else:
        print(f"Top values: {df[col].value_counts().head(3).to_dict()}")

# Data Quality Score
completeness = (df.count().sum() / df.size) * 100
print(f"\\nData Completeness: {completeness:.1f}%")
\`\`\`
`,
    },

    // ============================================
    // DAILY OPERATIONS COMMANDS
    // ============================================
    {
      path: 'da/morning.md',
      roleId: 'data-analyst',
      content: `# Daily Metrics Health Check

Perform morning metrics check for: $ARGUMENTS

## Instructions

You are acting as a **Data Analyst**. Quick daily health check of key metrics.

## Morning Check Template

### Metrics Snapshot
| Metric | Today | Yesterday | WoW | Status |
|--------|-------|-----------|-----|--------|
| | | | | //// |

### SQL Query Template

\`\`\`sql
-- Daily Metrics Check
WITH today AS (
    SELECT
        COUNT(DISTINCT user_id) AS dau,
        SUM(revenue) AS revenue,
        COUNT(*) AS events
    FROM events
    WHERE DATE(created_at) = CURRENT_DATE
),
yesterday AS (
    SELECT
        COUNT(DISTINCT user_id) AS dau,
        SUM(revenue) AS revenue
    FROM events
    WHERE DATE(created_at) = CURRENT_DATE - INTERVAL '1 day'
),
last_week AS (
    SELECT
        COUNT(DISTINCT user_id) AS dau,
        SUM(revenue) AS revenue
    FROM events
    WHERE DATE(created_at) = CURRENT_DATE - INTERVAL '7 days'
)
SELECT
    t.dau AS today_dau,
    y.dau AS yesterday_dau,
    ROUND((t.dau - y.dau)::numeric / NULLIF(y.dau, 0) * 100, 1) AS dod_change,
    ROUND((t.dau - w.dau)::numeric / NULLIF(w.dau, 0) * 100, 1) AS wow_change
FROM today t, yesterday y, last_week w;
\`\`\`

### Anomaly Flags
- Critical: >20% drop
- Warning: >10% drop
- Normal: within expected range

### Slack Summary Template
\`\`\`
*Morning Metrics* - [Date]

* DAU: X (/ Y% DoD)
* Revenue: $X (/ Y%)
* Conversion: X%

Status: All normal / Watch [metric] / Alert [metric]
\`\`\`
`,
    },
    {
      path: 'da/anomaly.md',
      roleId: 'data-analyst',
      content: `# Anomaly Detection

Detect and explain anomalies in: $ARGUMENTS

## Instructions

You are acting as a **Data Analyst**. Detect anomalies and investigate root causes.

## Anomaly Detection Framework

### 1. Identify the Anomaly
- What metric is affected?
- When did it start?
- Magnitude of change?

### 2. Statistical Detection

\`\`\`python
import pandas as pd
import numpy as np
from scipy import stats

# Z-score method
def detect_anomalies_zscore(data, threshold=3):
    z_scores = np.abs(stats.zscore(data))
    return z_scores > threshold

# IQR method
def detect_anomalies_iqr(data):
    Q1 = data.quantile(0.25)
    Q3 = data.quantile(0.75)
    IQR = Q3 - Q1
    lower = Q1 - 1.5 * IQR
    upper = Q3 + 1.5 * IQR
    return (data < lower) | (data > upper)

# Rolling average method
def detect_anomalies_rolling(data, window=7, threshold=2):
    rolling_mean = data.rolling(window=window).mean()
    rolling_std = data.rolling(window=window).std()
    upper = rolling_mean + threshold * rolling_std
    lower = rolling_mean - threshold * rolling_std
    return (data > upper) | (data < lower)
\`\`\`

### 3. Segment Analysis SQL

\`\`\`sql
-- Break down anomaly by segments
WITH daily_metrics AS (
    SELECT
        DATE(created_at) AS date,
        segment,
        COUNT(DISTINCT user_id) AS users
    FROM events
    WHERE DATE(created_at) >= CURRENT_DATE - INTERVAL '14 days'
    GROUP BY 1, 2
)
SELECT
    date,
    segment,
    users,
    LAG(users, 7) OVER (PARTITION BY segment ORDER BY date) AS prev_week,
    ROUND((users - LAG(users, 7) OVER (PARTITION BY segment ORDER BY date))::numeric
          / NULLIF(LAG(users, 7) OVER (PARTITION BY segment ORDER BY date), 0) * 100, 1) AS wow_change
FROM daily_metrics
ORDER BY date DESC, wow_change;
\`\`\`

### 4. Root Cause Checklist
- [ ] Recent deployments/releases?
- [ ] Marketing campaigns?
- [ ] External events?
- [ ] Data pipeline issues?
- [ ] Seasonal patterns?
`,
    },
    {
      path: 'da/compare.md',
      roleId: 'data-analyst',
      content: `# Period Comparison

Compare metrics: $ARGUMENTS

## Instructions

You are acting as a **Data Analyst**. Compare metrics across time periods.

## Comparison SQL Template

\`\`\`sql
-- Period Comparison: WoW, MoM, YoY
WITH current_period AS (
    SELECT
        'Current Week' AS period,
        SUM(revenue) AS revenue,
        COUNT(DISTINCT user_id) AS users,
        COUNT(*) AS transactions
    FROM orders
    WHERE created_at >= DATE_TRUNC('week', CURRENT_DATE)
),
previous_week AS (
    SELECT
        'Previous Week' AS period,
        SUM(revenue) AS revenue,
        COUNT(DISTINCT user_id) AS users,
        COUNT(*) AS transactions
    FROM orders
    WHERE created_at >= DATE_TRUNC('week', CURRENT_DATE) - INTERVAL '7 days'
      AND created_at < DATE_TRUNC('week', CURRENT_DATE)
),
previous_month AS (
    SELECT
        'Previous Month' AS period,
        SUM(revenue) AS revenue,
        COUNT(DISTINCT user_id) AS users,
        COUNT(*) AS transactions
    FROM orders
    WHERE created_at >= DATE_TRUNC('week', CURRENT_DATE) - INTERVAL '1 month'
      AND created_at < DATE_TRUNC('week', CURRENT_DATE) - INTERVAL '1 month' + INTERVAL '7 days'
)
SELECT * FROM current_period
UNION ALL SELECT * FROM previous_week
UNION ALL SELECT * FROM previous_month;
\`\`\`

## Python Visualization

\`\`\`python
import matplotlib.pyplot as plt

# Comparison bar chart
periods = ['This Week', 'Last Week', 'Last Month']
values = [current, prev_week, prev_month]
changes = ['', f'{wow_change:+.1f}%', f'{mom_change:+.1f}%']

fig, ax = plt.subplots(figsize=(10, 6))
bars = ax.bar(periods, values, color=['#2ecc71', '#3498db', '#9b59b6'])

for bar, change in zip(bars, changes):
    ax.annotate(change, (bar.get_x() + bar.get_width()/2, bar.get_height()),
                ha='center', va='bottom', fontsize=12)

ax.set_title('$ARGUMENTS - Period Comparison')
plt.tight_layout()
plt.show()
\`\`\`
`,
    },

    // ============================================
    // DEEP ANALYSIS COMMANDS
    // ============================================
    {
      path: 'da/funnel.md',
      roleId: 'data-analyst',
      content: `# Funnel Analysis

Analyze funnel: $ARGUMENTS

## Instructions

You are acting as a **Data Analyst**. Perform funnel analysis with report and notebook.

## Output Files
1. \`analysis/funnel-$ARGUMENTS.md\`
2. \`notebooks/funnel-$ARGUMENTS.ipynb\`

## Funnel SQL

\`\`\`sql
-- Funnel Analysis
WITH funnel AS (
    SELECT
        user_id,
        MAX(CASE WHEN event = 'page_view' THEN 1 ELSE 0 END) AS step1_view,
        MAX(CASE WHEN event = 'add_to_cart' THEN 1 ELSE 0 END) AS step2_cart,
        MAX(CASE WHEN event = 'checkout_start' THEN 1 ELSE 0 END) AS step3_checkout,
        MAX(CASE WHEN event = 'purchase' THEN 1 ELSE 0 END) AS step4_purchase
    FROM events
    WHERE created_at >= CURRENT_DATE - INTERVAL '30 days'
    GROUP BY user_id
)
SELECT
    SUM(step1_view) AS step1_users,
    SUM(step2_cart) AS step2_users,
    SUM(step3_checkout) AS step3_users,
    SUM(step4_purchase) AS step4_users,
    ROUND(SUM(step2_cart)::numeric / NULLIF(SUM(step1_view), 0) * 100, 1) AS view_to_cart,
    ROUND(SUM(step3_checkout)::numeric / NULLIF(SUM(step2_cart), 0) * 100, 1) AS cart_to_checkout,
    ROUND(SUM(step4_purchase)::numeric / NULLIF(SUM(step3_checkout), 0) * 100, 1) AS checkout_to_purchase,
    ROUND(SUM(step4_purchase)::numeric / NULLIF(SUM(step1_view), 0) * 100, 1) AS overall_conversion
FROM funnel;
\`\`\`

## Notebook Code

\`\`\`python
# Funnel Analysis: $ARGUMENTS

import pandas as pd
import plotly.graph_objects as go

# Funnel data
stages = ['Page View', 'Add to Cart', 'Checkout', 'Purchase']
values = [10000, 4000, 2000, 1000]  # Replace with actual data

# Calculate conversion rates
conversions = []
for i in range(len(values)-1):
    conv = values[i+1] / values[i] * 100
    conversions.append(f"{conv:.1f}%")

# Funnel visualization
fig = go.Figure(go.Funnel(
    y = stages,
    x = values,
    textinfo = "value+percent initial",
    marker = {"color": ["#3498db", "#2ecc71", "#f39c12", "#e74c3c"]}
))

fig.update_layout(title='$ARGUMENTS - Conversion Funnel')
fig.write_html('visualizations/funnel-$ARGUMENTS.html')
fig.show()

# Drop-off analysis
print("\\nDrop-off Analysis:")
for i in range(len(stages)-1):
    dropoff = values[i] - values[i+1]
    dropoff_pct = dropoff / values[i] * 100
    print(f"{stages[i]} -> {stages[i+1]}: {dropoff:,} dropped ({dropoff_pct:.1f}%)")
\`\`\`
`,
    },
    {
      path: 'da/cohort.md',
      roleId: 'data-analyst',
      content: `# Cohort Analysis

Perform cohort analysis: $ARGUMENTS

## Instructions

You are acting as a **Data Analyst**. Create cohort analysis with report and notebook.

## Output Files
1. \`analysis/cohort-$ARGUMENTS.md\`
2. \`notebooks/cohort-$ARGUMENTS.ipynb\`

## Cohort SQL

\`\`\`sql
-- Cohort Retention Analysis
WITH user_cohorts AS (
    SELECT
        user_id,
        DATE_TRUNC('week', MIN(created_at)) AS cohort_week
    FROM events
    WHERE event = 'signup'
    GROUP BY user_id
),
user_activities AS (
    SELECT
        e.user_id,
        uc.cohort_week,
        DATE_TRUNC('week', e.created_at) AS activity_week,
        (DATE_TRUNC('week', e.created_at) - uc.cohort_week) / 7 AS week_number
    FROM events e
    JOIN user_cohorts uc ON e.user_id = uc.user_id
)
SELECT
    cohort_week,
    week_number,
    COUNT(DISTINCT user_id) AS users
FROM user_activities
WHERE week_number <= 8
GROUP BY cohort_week, week_number
ORDER BY cohort_week, week_number;
\`\`\`

## Notebook Code

\`\`\`python
# Cohort Analysis: $ARGUMENTS

import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

# Create cohort pivot table
cohort_pivot = df.pivot_table(
    index='cohort_week',
    columns='week_number',
    values='users',
    aggfunc='sum'
)

# Calculate retention percentages
cohort_size = cohort_pivot.iloc[:, 0]
retention = cohort_pivot.divide(cohort_size, axis=0) * 100

# Heatmap
plt.figure(figsize=(12, 8))
sns.heatmap(retention, annot=True, fmt='.0f', cmap='YlGnBu',
            cbar_kws={'label': 'Retention %'})
plt.title('$ARGUMENTS - Cohort Retention Heatmap')
plt.xlabel('Week Number')
plt.ylabel('Cohort Week')
plt.tight_layout()
plt.savefig('visualizations/cohort-$ARGUMENTS.png', dpi=150)
plt.show()
\`\`\`
`,
    },
    {
      path: 'da/retention.md',
      roleId: 'data-analyst',
      content: `# Retention Analysis

Analyze retention: $ARGUMENTS

## Output Files
1. \`analysis/retention-$ARGUMENTS.md\`
2. \`notebooks/retention-$ARGUMENTS.ipynb\`

## Retention SQL

\`\`\`sql
-- D1, D7, D30 Retention
WITH first_activity AS (
    SELECT
        user_id,
        DATE(MIN(created_at)) AS first_date
    FROM events
    GROUP BY user_id
),
retention AS (
    SELECT
        fa.first_date AS cohort_date,
        COUNT(DISTINCT fa.user_id) AS cohort_size,
        COUNT(DISTINCT CASE
            WHEN DATE(e.created_at) = fa.first_date + INTERVAL '1 day'
            THEN e.user_id END) AS d1_retained,
        COUNT(DISTINCT CASE
            WHEN DATE(e.created_at) = fa.first_date + INTERVAL '7 days'
            THEN e.user_id END) AS d7_retained,
        COUNT(DISTINCT CASE
            WHEN DATE(e.created_at) = fa.first_date + INTERVAL '30 days'
            THEN e.user_id END) AS d30_retained
    FROM first_activity fa
    LEFT JOIN events e ON fa.user_id = e.user_id
    WHERE fa.first_date >= CURRENT_DATE - INTERVAL '60 days'
    GROUP BY fa.first_date
)
SELECT
    cohort_date,
    cohort_size,
    ROUND(d1_retained::numeric / cohort_size * 100, 1) AS d1_retention,
    ROUND(d7_retained::numeric / cohort_size * 100, 1) AS d7_retention,
    ROUND(d30_retained::numeric / cohort_size * 100, 1) AS d30_retention
FROM retention
ORDER BY cohort_date DESC;
\`\`\`

## Notebook Code

\`\`\`python
# Retention Curve
import matplotlib.pyplot as plt

days = [0, 1, 7, 14, 30, 60, 90]
retention_rates = [100, 45, 30, 25, 20, 15, 12]  # Replace with actual

plt.figure(figsize=(10, 6))
plt.plot(days, retention_rates, marker='o', linewidth=2, markersize=8)
plt.fill_between(days, retention_rates, alpha=0.3)
plt.xlabel('Days Since First Activity')
plt.ylabel('Retention Rate (%)')
plt.title('$ARGUMENTS - Retention Curve')
plt.grid(True, alpha=0.3)
plt.tight_layout()
plt.savefig('visualizations/retention-$ARGUMENTS.png', dpi=150)
plt.show()
\`\`\`
`,
    },
    {
      path: 'da/segment.md',
      roleId: 'data-analyst',
      content: `# User Segmentation

Segment users by: $ARGUMENTS

## Output Files
1. \`analysis/segment-$ARGUMENTS.md\`
2. \`notebooks/segment-$ARGUMENTS.ipynb\`

## Segmentation SQL

\`\`\`sql
-- RFM Segmentation
WITH rfm AS (
    SELECT
        user_id,
        CURRENT_DATE - MAX(DATE(created_at)) AS recency_days,
        COUNT(DISTINCT DATE(created_at)) AS frequency,
        SUM(amount) AS monetary
    FROM orders
    WHERE created_at >= CURRENT_DATE - INTERVAL '365 days'
    GROUP BY user_id
),
rfm_scores AS (
    SELECT
        user_id,
        NTILE(5) OVER (ORDER BY recency_days DESC) AS r_score,
        NTILE(5) OVER (ORDER BY frequency) AS f_score,
        NTILE(5) OVER (ORDER BY monetary) AS m_score
    FROM rfm
)
SELECT
    user_id,
    r_score,
    f_score,
    m_score,
    CASE
        WHEN r_score >= 4 AND f_score >= 4 AND m_score >= 4 THEN 'Champions'
        WHEN r_score >= 3 AND f_score >= 3 THEN 'Loyal Customers'
        WHEN r_score >= 4 AND f_score <= 2 THEN 'New Customers'
        WHEN r_score <= 2 AND f_score >= 3 THEN 'At Risk'
        WHEN r_score <= 2 AND f_score <= 2 THEN 'Lost'
        ELSE 'Others'
    END AS segment
FROM rfm_scores;
\`\`\`
`,
    },
    {
      path: 'da/rootcause.md',
      roleId: 'data-analyst',
      content: `# Root Cause Analysis

Investigate: $ARGUMENTS

## 5 Whys Framework

1. Why did [problem] happen? -> Because...
2. Why? -> Because...
3. Why? -> Because...
4. Why? -> Because...
5. Why? -> **Root Cause**

## Investigation SQL

\`\`\`sql
-- Segment breakdown for root cause
SELECT
    DATE(created_at) AS date,
    platform,
    country,
    traffic_source,
    COUNT(DISTINCT user_id) AS users,
    SUM(revenue) AS revenue
FROM events
WHERE created_at >= CURRENT_DATE - INTERVAL '14 days'
GROUP BY 1, 2, 3, 4
ORDER BY date DESC, users DESC;
\`\`\`

## Output
Save to: \`analysis/rootcause-$ARGUMENTS.md\`
`,
    },
    {
      path: 'da/abtest.md',
      roleId: 'data-analyst',
      content: `# A/B Test Analysis

Analyze experiment: $ARGUMENTS

## Output Files
1. \`analysis/abtest-$ARGUMENTS.md\`
2. \`notebooks/abtest-$ARGUMENTS.ipynb\`

## A/B Test SQL

\`\`\`sql
-- A/B Test Results
SELECT
    variant,
    COUNT(DISTINCT user_id) AS users,
    SUM(converted) AS conversions,
    ROUND(SUM(converted)::numeric / COUNT(DISTINCT user_id) * 100, 2) AS conversion_rate,
    SUM(revenue) AS total_revenue,
    ROUND(SUM(revenue) / COUNT(DISTINCT user_id), 2) AS revenue_per_user
FROM experiment_$ARGUMENTS
GROUP BY variant;
\`\`\`

## Statistical Analysis Notebook

\`\`\`python
# A/B Test: $ARGUMENTS

from scipy import stats
import numpy as np

# Sample data
control_conversions, control_users = 500, 10000
variant_conversions, variant_users = 550, 10000

# Conversion rates
control_rate = control_conversions / control_users
variant_rate = variant_conversions / variant_users
lift = (variant_rate - control_rate) / control_rate * 100

# Chi-square test
contingency = [[control_conversions, control_users - control_conversions],
               [variant_conversions, variant_users - variant_conversions]]
chi2, p_value, dof, expected = stats.chi2_contingency(contingency)

# Results
print(f"Control: {control_rate:.2%}")
print(f"Variant: {variant_rate:.2%}")
print(f"Lift: {lift:+.1f}%")
print(f"P-value: {p_value:.4f}")
print(f"Significant: {'Yes' if p_value < 0.05 else 'No'}")
\`\`\`
`,
    },
    {
      path: 'da/forecast.md',
      roleId: 'data-analyst',
      content: `# Forecasting

Forecast: $ARGUMENTS

## Output Files
1. \`analysis/forecast-$ARGUMENTS.md\`
2. \`notebooks/forecast-$ARGUMENTS.ipynb\`

## Forecasting Notebook

\`\`\`python
# Forecasting: $ARGUMENTS

import pandas as pd
import numpy as np
from prophet import Prophet
import matplotlib.pyplot as plt

# Prepare data for Prophet
df_prophet = df[['date', 'value']].rename(columns={'date': 'ds', 'value': 'y'})

# Fit model
model = Prophet(yearly_seasonality=True, weekly_seasonality=True)
model.fit(df_prophet)

# Make future dataframe
future = model.make_future_dataframe(periods=30)
forecast = model.predict(future)

# Plot
fig = model.plot(forecast)
plt.title('$ARGUMENTS - Forecast')
plt.savefig('visualizations/forecast-$ARGUMENTS.png', dpi=150)
plt.show()

# Summary
print("Forecast Summary (Next 30 Days):")
print(forecast[['ds', 'yhat', 'yhat_lower', 'yhat_upper']].tail(30))
\`\`\`
`,
    },

    // ============================================
    // REPORTING & COMMUNICATION
    // ============================================
    {
      path: 'da/report.md',
      roleId: 'data-analyst',
      content: `# Generate Report

Create report: $ARGUMENTS

## Report Structure

### Executive Summary
- Key findings (3-5 bullets)
- Recommendation
- Impact

### 1. Background
### 2. Methodology
### 3. Key Findings
### 4. Recommendations
### 5. Next Steps
### Appendix

## Output
Save to: \`reports/$ARGUMENTS.md\`
`,
    },
    {
      path: 'da/dashboard.md',
      roleId: 'data-analyst',
      content: `# Dashboard Design

Design dashboard: $ARGUMENTS

## Dashboard Specification

### Purpose & Audience
### Key Metrics (5-7)
### Layout Wireframe
### Chart Specifications
### Filters & Interactivity
### Data Sources & Refresh

## Output
Save to: \`specs/dashboard-$ARGUMENTS.md\`
`,
    },
    {
      path: 'da/insight.md',
      roleId: 'data-analyst',
      content: `# Create Insight

Create insight summary: $ARGUMENTS

## Insight Template

### One-Line Summary
[Key takeaway]

### Key Metrics
| Metric | Value | Change |
|--------|-------|--------|

### What Happened
[2-3 sentences]

### Recommendation
**Action:** [Clear action]
**Owner:** [Who]
**Timeline:** [When]

## Email Version
**Subject:** [Insight] $ARGUMENTS

## Slack Version
**$ARGUMENTS**
* Insight 1
* Insight 2
Action: [recommendation]
`,
    },
    {
      path: 'da/executive.md',
      roleId: 'data-analyst',
      content: `# Executive Summary

Create executive summary: $ARGUMENTS

## 1-Page Format

### Bottom Line Up Front
[2-3 sentences]

### Key Metrics
| Metric | Value | Status |
|--------|-------|--------|

### Highlights
What's working
Concerns

### Recommended Actions
| Priority | Action | Owner |
|----------|--------|-------|

## Output
Save to: \`reports/executive-$ARGUMENTS.md\`
`,
    },
    {
      path: 'da/slack.md',
      roleId: 'data-analyst',
      content: `# Slack Update

Format for Slack: $ARGUMENTS

## Templates

### Daily Update
\`\`\`
*Daily Metrics* - [Date]
* DAU: X (/ Y%)
* Revenue: $X
<link|Dashboard>
\`\`\`

### Insight Alert
\`\`\`
*Insight*: $ARGUMENTS
* What: [description]
* Impact: [quantified]
* Action: [recommendation]
\`\`\`

### Weekly Summary
\`\`\`
*Weekly Summary*
Wins: [list]
Watch: [list]
<link|Full Report>
\`\`\`
`,
    },
    {
      path: 'da/adhoc.md',
      roleId: 'data-analyst',
      content: `# Ad-hoc Analysis

Analyze: $ARGUMENTS

## Framework

### 1. Clarify Question
### 2. Define Scope
### 3. Gather Data
### 4. Analyze
### 5. Answer + Recommendations

## Output
Provide direct answer with supporting analysis.
`,
    },

    // ============================================
    // SQL ADVANCED COMMANDS
    // ============================================
    {
      path: 'da/optimize.md',
      roleId: 'data-analyst',
      content: `# Optimize SQL Query

Optimize query: $ARGUMENTS

## Instructions

You are acting as a **Data Analyst**. Optimize SQL query for better performance.

## Optimization Checklist

### 1. EXPLAIN Analysis
\`\`\`sql
EXPLAIN ANALYZE
[Your query here]
;
\`\`\`

### 2. Common Optimizations

| Issue | Solution |
|-------|----------|
| Full table scan | Add WHERE clause, use indexes |
| Large JOINs | Filter before joining |
| SELECT * | Select only needed columns |
| Subqueries | Convert to JOINs or CTEs |
| OR conditions | Use UNION or IN |
| Functions on indexed columns | Avoid or create functional index |

### 3. Query Structure
\`\`\`sql
-- Before (Slow)
SELECT *
FROM large_table
WHERE DATE(created_at) = '2024-01-01';

-- After (Fast) - uses index
SELECT column1, column2
FROM large_table
WHERE created_at >= '2024-01-01'
  AND created_at < '2024-01-02';
\`\`\`

### 4. Index Recommendations
\`\`\`sql
-- Check existing indexes
SELECT indexname, indexdef
FROM pg_indexes
WHERE tablename = 'your_table';

-- Suggest new index
CREATE INDEX idx_table_column
ON schema.table(column1, column2);
\`\`\`

## Output
Provide:
1. Original query analysis
2. EXPLAIN plan interpretation
3. Optimized query
4. Performance comparison
`,
    },
    {
      path: 'da/debug.md',
      roleId: 'data-analyst',
      content: `# Debug SQL Query

Debug slow query: $ARGUMENTS

## Debugging Steps

### 1. Get Execution Plan
\`\`\`sql
-- PostgreSQL
EXPLAIN (ANALYZE, BUFFERS, FORMAT TEXT)
[Your query]
;

-- MySQL
EXPLAIN FORMAT=JSON
[Your query]
;

-- BigQuery
-- Use Query Execution Details in Console
\`\`\`

### 2. Identify Bottlenecks

| Warning Sign | Meaning | Fix |
|--------------|---------|-----|
| Seq Scan | Full table scan | Add index |
| Nested Loop | O(n^2) joins | Improve join conditions |
| Sort | Sorting large result | Add ORDER BY index |
| Hash Join large | Memory pressure | Filter earlier |

### 3. Common Fixes
\`\`\`sql
-- Add statistics
ANALYZE table_name;

-- Force index (PostgreSQL)
SET enable_seqscan = off;

-- Check table size
SELECT pg_size_pretty(pg_total_relation_size('table'));
\`\`\`

## Output
Provide query diagnosis and fix.
`,
    },
    {
      path: 'da/cte.md',
      roleId: 'data-analyst',
      content: `# Generate CTE Query

Create CTE for: $ARGUMENTS

## CTE Patterns

### Basic CTE
\`\`\`sql
WITH base AS (
    SELECT ...
),
transformed AS (
    SELECT ...
    FROM base
)
SELECT * FROM transformed;
\`\`\`

### Recursive CTE
\`\`\`sql
WITH RECURSIVE hierarchy AS (
    -- Base case
    SELECT id, parent_id, name, 1 AS level
    FROM categories
    WHERE parent_id IS NULL

    UNION ALL

    -- Recursive case
    SELECT c.id, c.parent_id, c.name, h.level + 1
    FROM categories c
    JOIN hierarchy h ON c.parent_id = h.id
)
SELECT * FROM hierarchy;
\`\`\`

### Multi-step Analysis
\`\`\`sql
WITH
step1_raw AS (
    -- Get raw data
),
step2_clean AS (
    -- Clean and filter
),
step3_aggregate AS (
    -- Aggregate metrics
),
step4_enrich AS (
    -- Add dimensions
)
SELECT * FROM step4_enrich;
\`\`\`
`,
    },
    {
      path: 'da/window.md',
      roleId: 'data-analyst',
      content: `# Window Functions

Create window function: $ARGUMENTS

## Common Patterns

### Running Total
\`\`\`sql
SELECT
    date,
    revenue,
    SUM(revenue) OVER (ORDER BY date) AS running_total
FROM daily_metrics;
\`\`\`

### Moving Average
\`\`\`sql
SELECT
    date,
    revenue,
    AVG(revenue) OVER (
        ORDER BY date
        ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
    ) AS ma_7day
FROM daily_metrics;
\`\`\`

### Rank / Dense Rank / Row Number
\`\`\`sql
SELECT
    user_id,
    revenue,
    ROW_NUMBER() OVER (ORDER BY revenue DESC) AS row_num,
    RANK() OVER (ORDER BY revenue DESC) AS rank,
    DENSE_RANK() OVER (ORDER BY revenue DESC) AS dense_rank,
    NTILE(4) OVER (ORDER BY revenue DESC) AS quartile
FROM user_revenue;
\`\`\`

### Lag / Lead (Previous/Next)
\`\`\`sql
SELECT
    date,
    revenue,
    LAG(revenue, 1) OVER (ORDER BY date) AS prev_day,
    LEAD(revenue, 1) OVER (ORDER BY date) AS next_day,
    revenue - LAG(revenue, 1) OVER (ORDER BY date) AS daily_change
FROM daily_metrics;
\`\`\`

### First / Last Value
\`\`\`sql
SELECT
    user_id,
    event_date,
    FIRST_VALUE(event_date) OVER (
        PARTITION BY user_id ORDER BY event_date
    ) AS first_activity,
    LAST_VALUE(event_date) OVER (
        PARTITION BY user_id
        ORDER BY event_date
        ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING
    ) AS last_activity
FROM events;
\`\`\`

### Percent of Total
\`\`\`sql
SELECT
    category,
    revenue,
    ROUND(revenue * 100.0 / SUM(revenue) OVER (), 2) AS pct_of_total
FROM category_revenue;
\`\`\`
`,
    },

    // ============================================
    // PYTHON / NOTEBOOK COMMANDS
    // ============================================
    {
      path: 'da/notebook.md',
      roleId: 'data-analyst',
      content: `# Create Jupyter Notebook

Create notebook for: $ARGUMENTS

## Instructions

You are acting as a **Data Analyst**. Create a well-structured Jupyter notebook.

## Notebook Template

\`\`\`python
# %% [markdown]
# # $ARGUMENTS
#
# **Author:** Data Analyst
# **Date:** [Current Date]
# **Purpose:** [Description]

# %% [markdown]
# ## 1. Setup

# %%
# Imports
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from datetime import datetime, timedelta

# Configuration
pd.set_option('display.max_columns', None)
pd.set_option('display.max_rows', 100)
pd.set_option('display.float_format', '{:.2f}'.format)

sns.set_style('whitegrid')
plt.rcParams['figure.figsize'] = (12, 6)
plt.rcParams['font.size'] = 12

%matplotlib inline

# %% [markdown]
# ## 2. Load Data

# %%
# Load data
# Option 1: From CSV
df = pd.read_csv('data/input.csv')

# Option 2: From SQL
# from sqlalchemy import create_engine
# engine = create_engine('postgresql://user:pass@host:port/db')
# df = pd.read_sql(query, engine)

print(f"Loaded {len(df):,} rows, {len(df.columns)} columns")
df.head()

# %% [markdown]
# ## 3. Data Overview

# %%
# Shape and types
print(f"Shape: {df.shape}")
print(f"\\nData types:\\n{df.dtypes}")

# %%
# Missing values
missing = df.isnull().sum()
missing_pct = (missing / len(df) * 100).round(1)
pd.DataFrame({'Missing': missing, 'Percent': missing_pct}).query('Missing > 0')

# %% [markdown]
# ## 4. Analysis

# %%
# Your analysis here

# %% [markdown]
# ## 5. Visualizations

# %%
# Your visualizations here

# %% [markdown]
# ## 6. Key Findings
#
# 1. **Finding 1:** Description
# 2. **Finding 2:** Description
# 3. **Finding 3:** Description

# %% [markdown]
# ## 7. Recommendations
#
# - Recommendation 1
# - Recommendation 2

# %% [markdown]
# ## 8. Next Steps
#
# - [ ] Action item 1
# - [ ] Action item 2
\`\`\`

## Output
Save to: \`notebooks/$ARGUMENTS.ipynb\`
`,
    },
    {
      path: 'da/pandas.md',
      roleId: 'data-analyst',
      content: `# Pandas Operations

Perform pandas task: $ARGUMENTS

## Common Operations

### Data Loading
\`\`\`python
# CSV
df = pd.read_csv('file.csv', parse_dates=['date_col'])

# Excel
df = pd.read_excel('file.xlsx', sheet_name='Sheet1')

# SQL
df = pd.read_sql(query, connection)

# Multiple files
import glob
files = glob.glob('data/*.csv')
df = pd.concat([pd.read_csv(f) for f in files])
\`\`\`

### Data Cleaning
\`\`\`python
# Handle missing
df.dropna(subset=['important_col'])
df.fillna({'col1': 0, 'col2': 'Unknown'})

# Remove duplicates
df.drop_duplicates(subset=['id'], keep='last')

# Data types
df['date'] = pd.to_datetime(df['date'])
df['category'] = df['category'].astype('category')
df['amount'] = pd.to_numeric(df['amount'], errors='coerce')
\`\`\`

### Transformations
\`\`\`python
# New columns
df['year'] = df['date'].dt.year
df['revenue_per_user'] = df['revenue'] / df['users']

# Apply function
df['status'] = df['score'].apply(lambda x: 'High' if x > 80 else 'Low')

# Binning
df['age_group'] = pd.cut(df['age'], bins=[0, 18, 35, 50, 100],
                         labels=['<18', '18-35', '35-50', '50+'])
\`\`\`

### Aggregations
\`\`\`python
# GroupBy
summary = df.groupby('category').agg({
    'revenue': ['sum', 'mean'],
    'users': 'nunique',
    'orders': 'count'
}).round(2)

# Pivot table
pivot = df.pivot_table(
    values='revenue',
    index='month',
    columns='category',
    aggfunc='sum',
    fill_value=0
)
\`\`\`

### Merging
\`\`\`python
# Left join
merged = df1.merge(df2, on='key', how='left')

# Multiple keys
merged = df1.merge(df2, on=['key1', 'key2'], how='inner')
\`\`\`
`,
    },
    {
      path: 'da/script.md',
      roleId: 'data-analyst',
      content: `# Python Analysis Script

Create script for: $ARGUMENTS

## Script Template

\`\`\`python
#!/usr/bin/env python3
"""
$ARGUMENTS Analysis Script

Author: Data Analyst
Date: [Current Date]
Usage: python script.py --input data.csv --output results/
"""

import argparse
import pandas as pd
import numpy as np
import logging
from pathlib import Path
from datetime import datetime

# Setup logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


def load_data(filepath: str) -> pd.DataFrame:
    """Load and validate input data."""
    logger.info(f"Loading data from {filepath}")
    df = pd.read_csv(filepath)
    logger.info(f"Loaded {len(df):,} rows")
    return df


def clean_data(df: pd.DataFrame) -> pd.DataFrame:
    """Clean and prepare data."""
    logger.info("Cleaning data...")

    # Remove duplicates
    initial_rows = len(df)
    df = df.drop_duplicates()
    logger.info(f"Removed {initial_rows - len(df)} duplicates")

    # Handle missing values
    df = df.dropna(subset=['required_column'])

    return df


def analyze(df: pd.DataFrame) -> dict:
    """Perform main analysis."""
    logger.info("Running analysis...")

    results = {
        'total_records': len(df),
        'summary': df.describe().to_dict(),
        # Add more analysis...
    }

    return results


def save_results(results: dict, output_dir: str):
    """Save analysis results."""
    output_path = Path(output_dir)
    output_path.mkdir(parents=True, exist_ok=True)

    # Save summary
    timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
    output_file = output_path / f'results_{timestamp}.json'

    import json
    with open(output_file, 'w') as f:
        json.dump(results, f, indent=2, default=str)

    logger.info(f"Results saved to {output_file}")


def main():
    parser = argparse.ArgumentParser(description='$ARGUMENTS Analysis')
    parser.add_argument('--input', required=True, help='Input data file')
    parser.add_argument('--output', default='results/', help='Output directory')
    args = parser.parse_args()

    # Run pipeline
    df = load_data(args.input)
    df = clean_data(df)
    results = analyze(df)
    save_results(results, args.output)

    logger.info("Analysis complete!")


if __name__ == '__main__':
    main()
\`\`\`

## Output
Save to: \`scripts/$ARGUMENTS.py\`
`,
    },

    // ============================================
    // BI TOOLS COMMANDS
    // ============================================
    {
      path: 'da/superset.md',
      roleId: 'data-analyst',
      content: `# Apache Superset

Create Superset visualization: $ARGUMENTS

## Instructions

You are acting as a **Data Analyst**. Create Apache Superset chart or dashboard.

## Chart Types in Superset

| Chart | Use Case |
|-------|----------|
| Big Number | Single KPI |
| Big Number with Trendline | KPI with trend |
| Table | Detailed data |
| Pivot Table | Cross-tabulation |
| Line Chart | Time series |
| Bar Chart | Comparison |
| Pie Chart | Composition |
| Area Chart | Stacked trends |
| Scatter Plot | Correlation |
| Funnel | Conversion |
| Heatmap | Matrix visualization |

## SQL Lab Query Template

\`\`\`sql
-- Superset SQL Lab: $ARGUMENTS
-- Dataset for: [Chart type]

SELECT
    DATE_TRUNC('day', created_at) AS date,
    category,
    COUNT(DISTINCT user_id) AS users,
    SUM(revenue) AS revenue
FROM schema.table
WHERE created_at >= CURRENT_DATE - INTERVAL '30 days'
GROUP BY 1, 2
ORDER BY 1
;
\`\`\`

## Dashboard Layout

\`\`\`
+-----------------------------------------------------+
|  Filter: Date Range | Category | Region             |
+-----------+-----------+-----------+-----------------+
|  KPI 1    |  KPI 2    |  KPI 3    |     KPI 4       |
+-----------+-----------+-----------+-----------------+
|              Main Trend Chart (Line)                |
+-------------------------+---------------------------+
|   Breakdown (Bar)       |   Composition (Pie)       |
+-------------------------+---------------------------+
|                  Detail Table                       |
+-----------------------------------------------------+
\`\`\`

## Calculated Column Examples

\`\`\`sql
-- Conversion Rate
CAST(conversions AS FLOAT) / NULLIF(visitors, 0) * 100

-- Previous Period Comparison
LAG(metric, 1) OVER (ORDER BY date)

-- Running Total
SUM(metric) OVER (ORDER BY date)
\`\`\`

## Output
Provide:
1. SQL query for dataset
2. Chart configuration
3. Dashboard layout spec
`,
    },
    {
      path: 'da/metabase.md',
      roleId: 'data-analyst',
      content: `# Metabase

Create Metabase question: $ARGUMENTS

## Instructions

You are acting as a **Data Analyst**. Create Metabase question or dashboard.

## Question Types

### Simple Question (GUI)
- Select table
- Pick columns
- Add filters
- Choose visualization

### Native Query (SQL)
\`\`\`sql
-- Metabase Native Query: $ARGUMENTS

SELECT
    {{date_filter}}  -- Variable filter
    category,
    SUM(revenue) AS revenue
FROM orders
WHERE
    created_at >= {{start_date}}
    AND created_at <= {{end_date}}
    [[AND category = {{category}}]]  -- Optional filter
GROUP BY 1, 2
ORDER BY revenue DESC
\`\`\`

## Variable Syntax

| Type | Syntax | Usage |
|------|--------|-------|
| Text | \`{{variable}}\` | Required input |
| Optional | \`[[AND col = {{var}}]]\` | Optional filter |
| Field Filter | \`{{field_filter}}\` | Smart filter |
| Date | \`{{date}}\` | Date picker |

## Dashboard Filters

\`\`\`
Filter Types:
- Time: Date range picker
- Location: Dropdown from column
- ID: Search input
- Category: Multi-select
\`\`\`

## Output
Provide:
1. SQL query with Metabase variables
2. Filter configuration
3. Visualization settings
`,
    },
    {
      path: 'da/powerbi.md',
      roleId: 'data-analyst',
      content: `# PowerBI DAX

Create PowerBI measures: $ARGUMENTS

## Instructions

You are acting as a **Data Analyst**. Create PowerBI DAX measures and calculated columns.

## Common DAX Patterns

### Basic Measures
\`\`\`dax
// Total Revenue
Total Revenue = SUM(Sales[Revenue])

// Count Distinct
Unique Customers = DISTINCTCOUNT(Sales[CustomerID])

// Average
Avg Order Value = AVERAGE(Sales[OrderAmount])
\`\`\`

### Time Intelligence
\`\`\`dax
// Year to Date
YTD Revenue = TOTALYTD(SUM(Sales[Revenue]), 'Date'[Date])

// Previous Year
PY Revenue = CALCULATE(
    SUM(Sales[Revenue]),
    SAMEPERIODLASTYEAR('Date'[Date])
)

// Year over Year %
YoY % =
VAR CurrentYear = SUM(Sales[Revenue])
VAR PreviousYear = [PY Revenue]
RETURN
DIVIDE(CurrentYear - PreviousYear, PreviousYear, 0)

// Moving Average
MA 7 Day =
AVERAGEX(
    DATESINPERIOD('Date'[Date], LASTDATE('Date'[Date]), -7, DAY),
    [Total Revenue]
)
\`\`\`

### Ranking
\`\`\`dax
// Rank by Revenue
Revenue Rank =
RANKX(
    ALL(Products[Category]),
    [Total Revenue],
    ,
    DESC,
    DENSE
)
\`\`\`

### Conditional
\`\`\`dax
// Status Flag
Status =
SWITCH(
    TRUE(),
    [Growth %] > 0.1, "High Growth",
    [Growth %] > 0, "Growth",
    [Growth %] > -0.1, "Decline",
    "High Decline"
)
\`\`\`

### Calculated Column
\`\`\`dax
// Age Group
Age Group =
SWITCH(
    TRUE(),
    Customer[Age] < 18, "Under 18",
    Customer[Age] < 35, "18-34",
    Customer[Age] < 50, "35-49",
    "50+"
)
\`\`\`

## Output
Provide DAX formulas with explanations.
`,
    },
    {
      path: 'da/looker.md',
      roleId: 'data-analyst',
      content: `# Looker LookML

Create LookML model: $ARGUMENTS

## Instructions

You are acting as a **Data Analyst**. Create Looker LookML views and explores.

## View Template

\`\`\`lookml
# $ARGUMENTS View

view: orders {
  sql_table_name: schema.orders ;;

  # Primary Key
  dimension: order_id {
    primary_key: yes
    type: number
    sql: \${TABLE}.order_id ;;
  }

  # Dimensions
  dimension: customer_id {
    type: number
    sql: \${TABLE}.customer_id ;;
  }

  dimension_group: created {
    type: time
    timeframes: [
      raw,
      date,
      week,
      month,
      quarter,
      year
    ]
    sql: \${TABLE}.created_at ;;
  }

  dimension: status {
    type: string
    sql: \${TABLE}.status ;;
  }

  dimension: amount {
    type: number
    sql: \${TABLE}.amount ;;
    value_format_name: usd
  }

  # Measures
  measure: total_orders {
    type: count
    drill_fields: [order_id, customer_id, created_date, amount]
  }

  measure: total_revenue {
    type: sum
    sql: \${amount} ;;
    value_format_name: usd
  }

  measure: average_order_value {
    type: average
    sql: \${amount} ;;
    value_format_name: usd
  }

  measure: unique_customers {
    type: count_distinct
    sql: \${customer_id} ;;
  }
}
\`\`\`

## Explore Template

\`\`\`lookml
explore: orders {
  label: "Orders Analysis"
  description: "Analyze order data"

  join: customers {
    type: left_outer
    sql_on: \${orders.customer_id} = \${customers.id} ;;
    relationship: many_to_one
  }

  join: products {
    type: left_outer
    sql_on: \${orders.product_id} = \${products.id} ;;
    relationship: many_to_one
  }
}
\`\`\`

## Output
Provide LookML code for views and explores.
`,
    },
    {
      path: 'da/tableau.md',
      roleId: 'data-analyst',
      content: `# Tableau Calculated Fields

Create Tableau calculations: $ARGUMENTS

## Instructions

You are acting as a **Data Analyst**. Create Tableau calculated fields and LOD expressions.

## Basic Calculations

\`\`\`tableau
// Profit Margin
[Profit] / [Revenue]

// Year over Year Growth
(SUM([Revenue]) - LOOKUP(SUM([Revenue]), -1)) / ABS(LOOKUP(SUM([Revenue]), -1))

// Running Total
RUNNING_SUM(SUM([Revenue]))

// Percent of Total
SUM([Revenue]) / TOTAL(SUM([Revenue]))
\`\`\`

## LOD Expressions (Level of Detail)

\`\`\`tableau
// FIXED - Customer Lifetime Value
{ FIXED [Customer ID] : SUM([Revenue]) }

// INCLUDE - Add dimension to calculation
{ INCLUDE [Product] : AVG([Price]) }

// EXCLUDE - Remove dimension from calculation
{ EXCLUDE [Region] : SUM([Revenue]) }

// Customer's First Purchase Date
{ FIXED [Customer ID] : MIN([Order Date]) }

// Cohort Analysis
DATEDIFF('month', { FIXED [Customer ID] : MIN([Order Date]) }, [Order Date])
\`\`\`

## Table Calculations

\`\`\`tableau
// Moving Average (7 periods)
WINDOW_AVG(SUM([Revenue]), -6, 0)

// Rank
RANK(SUM([Revenue]))

// Percent Difference
(ZN(SUM([Revenue])) - LOOKUP(ZN(SUM([Revenue])), -1)) / ABS(LOOKUP(ZN(SUM([Revenue])), -1))

// Index (for cohort visualization)
INDEX()
\`\`\`

## Conditional Formatting

\`\`\`tableau
// Status Color
IF [Growth %] > 0 THEN "Green"
ELSEIF [Growth %] > -0.1 THEN "Yellow"
ELSE "Red"
END
\`\`\`

## Output
Provide Tableau calculated field formulas.
`,
    },

    // ============================================
    // DOCUMENTATION COMMANDS
    // ============================================
    {
      path: 'da/dictionary.md',
      roleId: 'data-analyst',
      content: `# Data Dictionary

Document table: $ARGUMENTS

## Data Dictionary Template

### Table: $ARGUMENTS

| Column | Type | Description | Example | Notes |
|--------|------|-------------|---------|-------|
| id | INT | Primary key | 12345 | Auto-increment |
| user_id | INT | User identifier | 67890 | FK to users |
| created_at | TIMESTAMP | Record creation time | 2024-01-15 10:30:00 | UTC |
| status | VARCHAR | Order status | completed | Enum: pending, completed, cancelled |
| amount | DECIMAL | Transaction amount | 99.99 | In USD |

### Business Rules
- Rule 1: [Description]
- Rule 2: [Description]

### Data Quality Notes
- Known issues
- Update frequency
- Owner

### Related Tables
- \`users\` - Customer information
- \`products\` - Product catalog

## SQL to Generate Schema

\`\`\`sql
-- Get column info (PostgreSQL)
SELECT
    column_name,
    data_type,
    is_nullable,
    column_default
FROM information_schema.columns
WHERE table_schema = 'public'
  AND table_name = '$ARGUMENTS'
ORDER BY ordinal_position;
\`\`\`

## Output
Save to: \`docs/data-dictionary/$ARGUMENTS.md\`
`,
    },
    {
      path: 'da/requirement.md',
      roleId: 'data-analyst',
      content: `# Analysis Requirements

Gather requirements for: $ARGUMENTS

## Requirements Template

### 1. Request Summary
- **Requester:** [Name, Team]
- **Date:** [Request date]
- **Priority:** High / Medium / Low
- **Deadline:** [When needed]

### 2. Business Context
- What problem are we solving?
- What decision will this inform?
- Who will use this analysis?

### 3. Key Questions
1. Question 1?
2. Question 2?
3. Question 3?

### 4. Success Criteria
- What does a good answer look like?
- What format is preferred?
- How will success be measured?

### 5. Data Requirements
- Time period needed
- Segments to include/exclude
- Metrics to analyze

### 6. Constraints
- Data availability
- Timeline
- Resource limitations

### 7. Deliverables
- [ ] Report/Dashboard
- [ ] Presentation
- [ ] Raw data
- [ ] Notebook

## Output
Save to: \`specs/requirements-$ARGUMENTS.md\`
`,
    },
    {
      path: 'da/handoff.md',
      roleId: 'data-analyst',
      content: `# Analysis Handoff

Document handoff for: $ARGUMENTS

## Handoff Template

### Analysis Summary
- **Title:** $ARGUMENTS
- **Author:** [Name]
- **Date:** [Date]
- **Status:** Complete / In Progress

### Files & Locations
| File | Location | Description |
|------|----------|-------------|
| Report | \`reports/\` | Main findings |
| Notebook | \`notebooks/\` | Analysis code |
| Data | \`data/\` | Source data |
| Dashboard | [Link] | Visualization |

### Key Findings
1. Finding 1
2. Finding 2
3. Finding 3

### Methodology
- Data sources used
- Analysis approach
- Assumptions made

### Limitations & Caveats
- Known limitations
- Data quality issues
- Out of scope items

### Follow-up Items
- [ ] Pending action 1
- [ ] Pending action 2

### Contact
Questions? Contact [Name] via [Email/Slack]

## Output
Save to: \`docs/handoff-$ARGUMENTS.md\`
`,
    },
  ];
}
