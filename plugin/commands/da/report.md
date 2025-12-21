# /da:report - Generate Analysis Report

Report on: $ARGUMENTS

## Purpose
Create a comprehensive analysis report for stakeholders.

## Report Structure

### 1. Executive Summary
- Key findings (3-5 bullets)
- Main recommendations
- Bottom line

### 2. Background
- Business context
- Why this analysis
- Key questions

### 3. Methodology
- Data sources
- Time period
- Approach taken
- Limitations

### 4. Findings
- Detailed analysis
- Visualizations
- Supporting data

### 5. Recommendations
- Actionable items
- Expected impact
- Priority

### 6. Appendix
- Detailed tables
- SQL queries
- Technical notes

## Output Template

```markdown
# [Report Title]
**Date:** [Date]
**Author:** Data Analyst
**Status:** Draft / Final

---

## Executive Summary

[2-3 paragraphs summarizing the most important findings and recommendations]

**Key Findings:**
- Finding 1: [One sentence with key metric]
- Finding 2: [One sentence with key metric]
- Finding 3: [One sentence with key metric]

**Recommendations:**
1. [Action] - Expected impact: [X%]
2. [Action] - Expected impact: [X%]

---

## Background

### Business Context
[Why this analysis was needed]

### Key Questions
1. [Question 1]
2. [Question 2]
3. [Question 3]

---

## Methodology

### Data Sources
| Source | Description | Time Period |
|--------|-------------|-------------|
| [Table] | [Description] | [Period] |

### Approach
[Description of analytical approach]

### Limitations
- [Limitation 1]
- [Limitation 2]

---

## Findings

### Finding 1: [Title]
[Detailed description with supporting data]

| Metric | Value | Change |
|--------|-------|--------|
| [Metric] | [Value] | [+/-X%] |

### Finding 2: [Title]
[Detailed description with supporting data]

---

## Recommendations

| Priority | Recommendation | Expected Impact | Effort |
|----------|----------------|-----------------|--------|
| 1 | [Action] | [Impact] | [H/M/L] |
| 2 | [Action] | [Impact] | [H/M/L] |

---

## Appendix

### A. SQL Queries
[Include key queries]

### B. Data Dictionary
[Relevant field definitions]
```

## Examples
- `/da:report Q1 revenue analysis`
- `/da:report customer churn investigation`
- `/da:report A/B test results for new feature`

## After Completion
Update CLAUDE.md with new knowledge:
1. Add link to generated report in "## Documentation" section
2. Record key insights and recommendations in "## Project Knowledge"
3. Document methodology for future reference
4. Update "## Data Sources" with data used in report
