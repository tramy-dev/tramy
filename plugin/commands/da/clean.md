# /da:clean - Data Cleaning & Transformation

Clean: $ARGUMENTS

## Purpose
Clean and transform raw data from `data/raw/` to `data/processed/`. Prepare data for analysis.

## Data Cleaning Process

### 1. Data Assessment
- Load raw data from `data/raw/`
- Check data types and structure
- Identify quality issues

### 2. Data Quality Issues
- Missing values (null, NaN, empty strings)
- Duplicates (exact and fuzzy)
- Outliers and anomalies
- Inconsistent formats (dates, strings, categories)
- Invalid values (negative prices, future dates)

### 3. Cleaning Operations
- Handle missing values (drop, fill, impute)
- Remove or merge duplicates
- Fix data types
- Standardize formats
- Validate business rules

### 4. Output
- Save cleaned data to `data/processed/`
- Generate data quality report
- Document transformations applied

## Output Format

### Python Script
```python
import pandas as pd
import numpy as np
from pathlib import Path

# ============================================
# Data Cleaning: [Description]
# Input: data/raw/[filename]
# Output: data/processed/[filename]
# ============================================

# Load raw data
raw_path = Path('data/raw/[filename].csv')
df = pd.read_csv(raw_path)
print(f"Loaded {len(df):,} rows from {raw_path}")

# --- Data Quality Report ---
print("\n=== Data Quality Report ===")
print(f"Shape: {df.shape}")
print(f"\nMissing values:\n{df.isnull().sum()}")
print(f"\nDuplicates: {df.duplicated().sum()}")

# --- Cleaning Steps ---

# 1. Handle missing values
df['column'] = df['column'].fillna(df['column'].median())
# Or: df = df.dropna(subset=['critical_column'])

# 2. Remove duplicates
df = df.drop_duplicates(subset=['id'], keep='first')

# 3. Fix data types
df['date'] = pd.to_datetime(df['date'], errors='coerce')
df['amount'] = pd.to_numeric(df['amount'], errors='coerce')

# 4. Standardize formats
df['category'] = df['category'].str.lower().str.strip()
df['name'] = df['name'].str.title()

# 5. Handle outliers (IQR method)
Q1 = df['amount'].quantile(0.25)
Q3 = df['amount'].quantile(0.75)
IQR = Q3 - Q1
df = df[(df['amount'] >= Q1 - 1.5*IQR) & (df['amount'] <= Q3 + 1.5*IQR)]

# 6. Validate business rules
df = df[df['amount'] > 0]  # No negative amounts
df = df[df['date'] <= pd.Timestamp.now()]  # No future dates

# --- Save cleaned data ---
output_path = Path('data/processed/[filename]_cleaned.csv')
df.to_csv(output_path, index=False)
print(f"\nSaved {len(df):,} rows to {output_path}")

# --- Summary ---
print("\n=== Cleaning Summary ===")
print(f"Rows removed: {original_count - len(df):,}")
print(f"Final shape: {df.shape}")
```

### SQL Approach
```sql
-- Data Cleaning: [Description]
-- Creates cleaned table from raw data

CREATE TABLE processed.cleaned_data AS
WITH raw_data AS (
    SELECT * FROM raw.source_table
),

-- Step 1: Remove duplicates
deduplicated AS (
    SELECT DISTINCT ON (id) *
    FROM raw_data
    ORDER BY id, updated_at DESC
),

-- Step 2: Handle nulls
filled AS (
    SELECT
        id,
        COALESCE(name, 'Unknown') AS name,
        COALESCE(amount, 0) AS amount,
        COALESCE(category, 'Other') AS category,
        date
    FROM deduplicated
    WHERE date IS NOT NULL  -- Drop rows with null dates
),

-- Step 3: Standardize formats
standardized AS (
    SELECT
        id,
        TRIM(LOWER(name)) AS name,
        ROUND(amount, 2) AS amount,
        UPPER(category) AS category,
        DATE_TRUNC('day', date) AS date
    FROM filled
),

-- Step 4: Filter invalid data
validated AS (
    SELECT *
    FROM standardized
    WHERE amount > 0
      AND date <= CURRENT_DATE
)

SELECT * FROM validated;
```

## Common Cleaning Tasks

| Issue | Python Solution | SQL Solution |
|-------|-----------------|--------------|
| Missing values | `df.fillna()` or `df.dropna()` | `COALESCE()` or `WHERE NOT NULL` |
| Duplicates | `df.drop_duplicates()` | `DISTINCT ON` or `ROW_NUMBER()` |
| Type conversion | `pd.to_datetime()`, `pd.to_numeric()` | `CAST()`, `::type` |
| String cleaning | `str.strip()`, `str.lower()` | `TRIM()`, `LOWER()` |
| Outliers | IQR or Z-score filtering | Percentile filtering |

## Examples
- `/da:clean remove duplicates and nulls from sales.csv`
- `/da:clean standardize date formats in transactions`
- `/da:clean handle outliers in revenue data`

## After Completion
Update CLAUDE.md with new knowledge:
1. Document cleaning transformations in "## Project Knowledge"
2. Update "## Data Sources" with cleaned data location and schema
3. Record data quality issues found in "## Data Quality"
4. Add cleaning script reference in "## Project Files"
