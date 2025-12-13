/**
 * Data Engineer Command Templates
 */

import { CommandTemplate } from './index.js';

export function generateDECommands(): CommandTemplate[] {
  return [
    {
      path: 'de/pipeline.md',
      roleId: 'data-engineer',
      content: `# Create ETL Pipeline

Create ETL pipeline for: $ARGUMENTS

## Instructions

You are acting as a **Data Engineer**. Design and implement a robust ETL pipeline.

## Pipeline Specification

### Overview
- **Source**: [Data source]
- **Target**: [Destination]
- **Schedule**: [Frequency]
- **SLA**: [Max runtime]

### Extract
\`\`\`python
# Extract configuration
source_config = {
    "type": "postgres|mysql|api|file",
    "connection": "...",
    "query": "...",
    "incremental_key": "updated_at"
}
\`\`\`

### Transform
- Business rules applied
- Data cleaning steps
- Aggregations
- Joins

### Load
\`\`\`python
# Load configuration
target_config = {
    "type": "snowflake|bigquery|postgres",
    "table": "...",
    "write_mode": "append|overwrite|merge",
    "partition_key": "..."
}
\`\`\`

### Implementation

\`\`\`python
from datetime import datetime
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def extract(config: dict) -> pd.DataFrame:
    """Extract data from source."""
    logger.info(f"Extracting from {config['type']}")
    # Implementation
    return df

def transform(df: pd.DataFrame) -> pd.DataFrame:
    """Apply transformations."""
    logger.info(f"Transforming {len(df)} rows")
    # Implementation
    return df

def load(df: pd.DataFrame, config: dict) -> None:
    """Load data to target."""
    logger.info(f"Loading {len(df)} rows to {config['table']}")
    # Implementation

def run_pipeline():
    """Main pipeline execution."""
    try:
        df = extract(source_config)
        df = transform(df)
        load(df, target_config)
        logger.info("Pipeline completed successfully")
    except Exception as e:
        logger.error(f"Pipeline failed: {e}")
        raise

if __name__ == "__main__":
    run_pipeline()
\`\`\`

### Quality Checks
- [ ] Row counts match expected
- [ ] No null primary keys
- [ ] Data types correct
- [ ] Referential integrity maintained

### Monitoring
- Metrics to track
- Alerts to configure
- Runbook location

## Output Location
Save to: \`pipelines/$ARGUMENTS/\`
`,
    },
    {
      path: 'de/schema.md',
      roleId: 'data-engineer',
      content: `# Design Schema

Design database schema for: $ARGUMENTS

## Instructions

You are acting as a **Data Engineer**. Design an efficient, normalized schema.

## Schema Design

### Entity Relationship Diagram
\`\`\`
[Table1] 1----* [Table2] *----1 [Table3]
\`\`\`

### Tables

#### [table_name]
\`\`\`sql
CREATE TABLE schema.table_name (
    -- Primary Key
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    -- Foreign Keys
    related_id UUID NOT NULL REFERENCES schema.related_table(id),

    -- Attributes
    name VARCHAR(255) NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'active',
    amount DECIMAL(10, 2),

    -- Metadata
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    created_by UUID REFERENCES users(id),

    -- Constraints
    CONSTRAINT check_status CHECK (status IN ('active', 'inactive', 'deleted'))
);

-- Indexes
CREATE INDEX idx_table_name_related_id ON schema.table_name(related_id);
CREATE INDEX idx_table_name_status ON schema.table_name(status);
CREATE INDEX idx_table_name_created_at ON schema.table_name(created_at);

-- Comments
COMMENT ON TABLE schema.table_name IS 'Description of the table';
COMMENT ON COLUMN schema.table_name.name IS 'Description of the column';
\`\`\`

### Normalization Level
- Current: [1NF/2NF/3NF/BCNF]
- Reasoning: [Why this level]

### Denormalization (if any)
- What: [Fields denormalized]
- Why: [Performance reason]

## Output Location
Save to: \`migrations/schemas/$ARGUMENTS.sql\`
`,
    },
    {
      path: 'de/migrate.md',
      roleId: 'data-engineer',
      content: `# Create Migration

Create database migration for: $ARGUMENTS

## Instructions

You are acting as a **Data Engineer**. Create a safe, reversible migration.

## Migration Template

\`\`\`sql
-- Migration: [Description]
-- Author: Data Engineer
-- Date: [Current Date]

-- ============================================
-- UP MIGRATION
-- ============================================

BEGIN;

-- Add new column
ALTER TABLE schema.table_name
ADD COLUMN new_column VARCHAR(100);

-- Add index
CREATE INDEX CONCURRENTLY idx_new_column
ON schema.table_name(new_column);

-- Backfill data (if needed)
UPDATE schema.table_name
SET new_column = 'default_value'
WHERE new_column IS NULL;

-- Add constraint
ALTER TABLE schema.table_name
ALTER COLUMN new_column SET NOT NULL;

COMMIT;

-- ============================================
-- DOWN MIGRATION (Rollback)
-- ============================================

BEGIN;

ALTER TABLE schema.table_name
ALTER COLUMN new_column DROP NOT NULL;

DROP INDEX IF EXISTS idx_new_column;

ALTER TABLE schema.table_name
DROP COLUMN IF EXISTS new_column;

COMMIT;
\`\`\`

## Migration Checklist
- [ ] Has rollback script
- [ ] Tested on staging
- [ ] No locks on large tables
- [ ] Backward compatible
- [ ] Documented

## Deployment Plan
1. Run migration in staging
2. Test application compatibility
3. Schedule production deployment
4. Monitor after deployment

## Output Location
Save to: \`migrations/[timestamp]_$ARGUMENTS.sql\`
`,
    },
    {
      path: 'de/optimize.md',
      roleId: 'data-engineer',
      content: `# Optimize Performance

Optimize: $ARGUMENTS

## Instructions

You are acting as a **Data Engineer**. Analyze and optimize database performance.

## Analysis

### Current Performance
- Query/Table: [Name]
- Current runtime: [Time]
- Rows scanned: [Number]
- Current plan: [EXPLAIN output]

### Bottleneck Identification
1. [Issue 1]: [Description]
2. [Issue 2]: [Description]

## Optimization Strategies

### 1. Indexing
\`\`\`sql
-- Recommended indexes
CREATE INDEX CONCURRENTLY idx_name ON table(column1, column2);

-- Index analysis
SELECT
    indexname,
    idx_scan,
    idx_tup_read,
    idx_tup_fetch
FROM pg_stat_user_indexes
WHERE schemaname = 'public';
\`\`\`

### 2. Query Rewrite
\`\`\`sql
-- Before (slow)
SELECT * FROM table WHERE date > '2024-01-01';

-- After (fast)
SELECT specific_columns
FROM table
WHERE date > '2024-01-01'
AND partition_key = 'value';
\`\`\`

### 3. Table Optimization
- Partitioning strategy
- Vacuuming schedule
- Statistics updates

### 4. Caching
- Query result caching
- Materialized views

## Expected Improvements
| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Runtime | | | |
| Rows scanned | | | |
| Memory | | | |

## Output Location
Save to: \`specs/optimizations/$ARGUMENTS.md\`
`,
    },
    {
      path: 'de/orchestrate.md',
      roleId: 'data-engineer',
      content: `# Setup Orchestration

Setup orchestration for: $ARGUMENTS

## Instructions

You are acting as a **Data Engineer**. Setup pipeline orchestration with proper dependencies.

## Airflow DAG Template

\`\`\`python
from datetime import datetime, timedelta
from airflow import DAG
from airflow.operators.python import PythonOperator
from airflow.operators.dummy import DummyOperator
from airflow.utils.task_group import TaskGroup

default_args = {
    'owner': 'data-engineering',
    'depends_on_past': False,
    'email': ['alerts@company.com'],
    'email_on_failure': True,
    'email_on_retry': False,
    'retries': 3,
    'retry_delay': timedelta(minutes=5),
}

with DAG(
    dag_id='$ARGUMENTS',
    default_args=default_args,
    description='Description of the pipeline',
    schedule_interval='0 6 * * *',  # Daily at 6 AM
    start_date=datetime(2024, 1, 1),
    catchup=False,
    tags=['production', 'etl'],
) as dag:

    start = DummyOperator(task_id='start')

    with TaskGroup('extract') as extract_group:
        extract_source1 = PythonOperator(
            task_id='extract_source1',
            python_callable=extract_source1_func,
        )
        extract_source2 = PythonOperator(
            task_id='extract_source2',
            python_callable=extract_source2_func,
        )

    with TaskGroup('transform') as transform_group:
        transform_data = PythonOperator(
            task_id='transform_data',
            python_callable=transform_func,
        )

    with TaskGroup('load') as load_group:
        load_warehouse = PythonOperator(
            task_id='load_warehouse',
            python_callable=load_func,
        )

    with TaskGroup('quality') as quality_group:
        run_tests = PythonOperator(
            task_id='run_tests',
            python_callable=quality_check_func,
        )

    end = DummyOperator(task_id='end')

    # Define dependencies
    start >> extract_group >> transform_group >> load_group >> quality_group >> end
\`\`\`

## Output Location
Save to: \`dags/$ARGUMENTS.py\`
`,
    },
    {
      path: 'de/quality.md',
      roleId: 'data-engineer',
      content: `# Data Quality Checks

Implement quality checks for: $ARGUMENTS

## Instructions

You are acting as a **Data Engineer**. Implement comprehensive data quality checks.

## Quality Framework

### Check Categories

#### 1. Completeness
\`\`\`python
def check_completeness(df, columns):
    """Check for missing values."""
    results = {}
    for col in columns:
        null_pct = df[col].isnull().sum() / len(df) * 100
        results[col] = {
            'null_count': df[col].isnull().sum(),
            'null_pct': null_pct,
            'passed': null_pct < 5  # Threshold
        }
    return results
\`\`\`

#### 2. Uniqueness
\`\`\`python
def check_uniqueness(df, columns):
    """Check for duplicate values."""
    duplicates = df.duplicated(subset=columns).sum()
    return {
        'duplicate_count': duplicates,
        'passed': duplicates == 0
    }
\`\`\`

#### 3. Validity
\`\`\`python
def check_validity(df, column, valid_values):
    """Check values are in allowed set."""
    invalid = ~df[column].isin(valid_values)
    return {
        'invalid_count': invalid.sum(),
        'passed': invalid.sum() == 0
    }
\`\`\`

#### 4. Consistency
\`\`\`python
def check_consistency(df, rules):
    """Check business rules."""
    # Example: end_date >= start_date
    violations = df[df['end_date'] < df['start_date']]
    return {
        'violation_count': len(violations),
        'passed': len(violations) == 0
    }
\`\`\`

#### 5. Timeliness
\`\`\`python
def check_timeliness(df, date_column, max_age_hours=24):
    """Check data freshness."""
    latest = df[date_column].max()
    age_hours = (datetime.now() - latest).total_seconds() / 3600
    return {
        'latest_record': latest,
        'age_hours': age_hours,
        'passed': age_hours < max_age_hours
    }
\`\`\`

### Quality Report
| Check | Status | Details |
|-------|--------|---------|
| Completeness | PASS/FAIL | |
| Uniqueness | PASS/FAIL | |
| Validity | PASS/FAIL | |
| Consistency | PASS/FAIL | |
| Timeliness | PASS/FAIL | |

## Output Location
Save to: \`pipelines/$ARGUMENTS/quality_checks.py\`
`,
    },
    {
      path: 'de/model.md',
      roleId: 'data-engineer',
      content: `# Data Modeling

Create data model for: $ARGUMENTS

## Instructions

You are acting as a **Data Engineer**. Design dimensional or normalized data models.

## Model Design

### Business Process
[Description of the business process being modeled]

### Grain
[The most atomic level of data in the fact table]

### Dimensions

#### dim_[name]
| Column | Type | Description |
|--------|------|-------------|
| dim_key | INT | Surrogate key |
| natural_key | VARCHAR | Business key |
| ... | | |
| effective_date | DATE | SCD Type 2 |
| expiration_date | DATE | SCD Type 2 |
| is_current | BOOLEAN | Current flag |

### Facts

#### fact_[name]
| Column | Type | Description |
|--------|------|-------------|
| fact_key | BIGINT | Surrogate key |
| dim1_key | INT | FK to dim1 |
| dim2_key | INT | FK to dim2 |
| measure1 | DECIMAL | Additive measure |
| measure2 | DECIMAL | Non-additive |
| event_date | DATE | Event date |

### dbt Model

\`\`\`sql
-- models/marts/fact_[name].sql
{{
    config(
        materialized='incremental',
        unique_key='fact_key',
        partition_by={
            'field': 'event_date',
            'data_type': 'date'
        }
    )
}}

WITH source AS (
    SELECT * FROM {{ ref('stg_[source]') }}
    {% if is_incremental() %}
    WHERE event_date > (SELECT MAX(event_date) FROM {{ this }})
    {% endif %}
),

transformed AS (
    SELECT
        {{ dbt_utils.generate_surrogate_key(['col1', 'col2']) }} as fact_key,
        ...
    FROM source
)

SELECT * FROM transformed
\`\`\`

## Output Location
Save to: \`models/$ARGUMENTS/\`
`,
    },
  ];
}
