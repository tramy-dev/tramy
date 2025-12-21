# /da:notebook - Create Jupyter Notebook

Notebook for: $ARGUMENTS

## Purpose
Create a structured Jupyter notebook for analysis or data processing.

## Notebook Structure

### Standard Sections
1. **Title & Overview** - What this notebook does
2. **Setup** - Imports and configuration
3. **Data Loading** - Get the data
4. **Exploration** - Understand the data
5. **Analysis** - Main analysis work
6. **Visualization** - Charts and graphs
7. **Conclusions** - Summary and next steps

## Output Template

```python
# %% [markdown]
# # [Analysis Title]
#
# **Author:** Data Analyst
# **Date:** [Date]
# **Purpose:** [One-line description]
#
# ## Overview
# [2-3 sentences about what this notebook accomplishes]

# %% [markdown]
# ## 1. Setup

# %%
# Standard imports
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from datetime import datetime, timedelta

# Configuration
pd.set_option('display.max_columns', 50)
pd.set_option('display.max_rows', 100)
plt.style.use('seaborn-v0_8-whitegrid')
%matplotlib inline

# Database connection (if needed)
# from sqlalchemy import create_engine
# engine = create_engine('postgresql://...')

# %% [markdown]
# ## 2. Data Loading

# %%
# Option 1: From SQL
query = """
SELECT *
FROM table_name
WHERE date >= '2024-01-01'
"""
# df = pd.read_sql(query, engine)

# Option 2: From file
# df = pd.read_csv('data.csv')

# Option 3: Sample data for development
df = pd.DataFrame({
    'date': pd.date_range('2024-01-01', periods=100),
    'user_id': np.random.randint(1, 1000, 100),
    'amount': np.random.uniform(10, 500, 100),
    'category': np.random.choice(['A', 'B', 'C'], 100)
})

print(f"Loaded {len(df):,} rows")
df.head()

# %% [markdown]
# ## 3. Data Exploration

# %%
# Basic info
print("Shape:", df.shape)
print("\nData types:")
print(df.dtypes)
print("\nMissing values:")
print(df.isnull().sum())

# %%
# Summary statistics
df.describe()

# %%
# Value distributions
for col in df.select_dtypes(include=['object', 'category']).columns:
    print(f"\n{col}:")
    print(df[col].value_counts())

# %% [markdown]
# ## 4. Analysis

# %%
# [Main analysis code here]
# Group by analysis
summary = df.groupby('category').agg({
    'amount': ['sum', 'mean', 'count'],
    'user_id': 'nunique'
}).round(2)
summary.columns = ['total_amount', 'avg_amount', 'transactions', 'unique_users']
summary

# %%
# Time series analysis
daily = df.groupby('date')['amount'].sum().reset_index()
daily['rolling_7d'] = daily['amount'].rolling(7).mean()
daily

# %% [markdown]
# ## 5. Visualization

# %%
fig, axes = plt.subplots(2, 2, figsize=(14, 10))

# Chart 1: Distribution
df['amount'].hist(bins=30, ax=axes[0,0], edgecolor='black')
axes[0,0].set_title('Amount Distribution')
axes[0,0].set_xlabel('Amount')

# Chart 2: Category breakdown
df.groupby('category')['amount'].sum().plot(kind='bar', ax=axes[0,1])
axes[0,1].set_title('Total by Category')
axes[0,1].set_xlabel('Category')

# Chart 3: Time series
axes[1,0].plot(daily['date'], daily['amount'], alpha=0.5, label='Daily')
axes[1,0].plot(daily['date'], daily['rolling_7d'], label='7-day avg')
axes[1,0].set_title('Amount Over Time')
axes[1,0].legend()

# Chart 4: Box plot
df.boxplot(column='amount', by='category', ax=axes[1,1])
axes[1,1].set_title('Amount by Category')

plt.tight_layout()
plt.savefig('analysis_charts.png', dpi=150, bbox_inches='tight')
plt.show()

# %% [markdown]
# ## 6. Conclusions
#
# ### Key Findings
# 1. [Finding 1]
# 2. [Finding 2]
# 3. [Finding 3]
#
# ### Recommendations
# - [Recommendation 1]
# - [Recommendation 2]
#
# ### Next Steps
# - [ ] [Follow-up analysis]
# - [ ] [Data to collect]

# %%
# Export results if needed
# summary.to_csv('results.csv', index=False)
```

## Notebook Best Practices

1. **Clear structure** - Use markdown headers to organize
2. **Reproducible** - Include all imports and data loading
3. **Documented** - Explain what each section does
4. **Visualized** - Use charts to support findings
5. **Actionable** - End with conclusions and next steps

## Examples
- `/da:notebook customer churn analysis`
- `/da:notebook A/B test results evaluation`
- `/da:notebook monthly metrics review`

## After Completion
Update CLAUDE.md with new knowledge:
1. Add link to notebook in "## Documentation" section
2. Record analysis findings in "## Project Knowledge"
3. Document data transformations and methodologies used
4. Update "## Data Sources" with datasets analyzed
