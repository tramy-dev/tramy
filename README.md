# DA Toolkit

**Data Analyst Toolkit for Claude Code**

[![npm version](https://img.shields.io/npm/v/tramy.svg?style=flat-square&color=cb3837)](https://www.npmjs.com/package/tramy)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Node](https://img.shields.io/node/v/tramy.svg?style=flat-square&color=green)](https://nodejs.org)

**6 Core Commands** | **5 DA Commands** | **11 Total**

---

## Installation

```bash
npm install -g tramy
```

## Quick Start

### Default Setup (Core Commands Only)

```bash
cd your-project
tramy setup
```

**Generates:**
- `CLAUDE.md` - Project context with 6 core commands
- `.claude/commands/` - 6 core command templates

### Data Analyst Setup (Full Toolkit)

```bash
cd your-project
tramy setup da
```

**Generates:**
- `CLAUDE.md` - Full DA toolkit documentation
- `.claude/commands/` - 6 core + 5 DA commands
- `.claude/agents/` - DA agent template
- `data/raw/` - Raw data files
- `data/processed/` - Processed data files
- `analysis/` - Analysis outputs
- `reports/` - Generated reports
- `notebooks/` - Jupyter notebooks

---

## Core Commands (6)

| Command | Description |
|---------|-------------|
| `/analyze` | Explore and understand data/problems |
| `/plan` | Create detailed analysis plan |
| `/build` | Implement SQL, Python, notebooks |
| `/test` | Validate data quality and results |
| `/doc` | Generate documentation and reports |
| `/commit` | Git commit with proper message |

## DA Commands (5)

| Command | Description |
|---------|-------------|
| `/da:query` | Write optimized SQL queries |
| `/da:analyze` | Exploratory data analysis |
| `/da:report` | Generate analysis reports |
| `/da:dashboard` | Design BI dashboards |
| `/da:notebook` | Create Jupyter notebooks |

---

## Workflow

```
/analyze → /plan → /build → /test → /doc → /commit
```

## Data Workflow

```
data/raw/ → (clean/transform) → data/processed/ → (analyze) → reports/
```

---

## Examples

```bash
# Analyze data
/analyze monthly revenue trends
/analyze user churn patterns

# Write SQL
/da:query top 10 customers by lifetime value
/da:query monthly active users by cohort

# Create reports
/da:report Q1 sales performance
/da:report customer segmentation analysis

# Build dashboards
/da:dashboard executive KPI overview
/da:dashboard marketing campaign metrics

# Create notebooks
/da:notebook churn prediction model
/da:notebook A/B test analysis
```

---

## CLI Commands

```bash
tramy setup        # Setup with core commands
tramy setup da     # Setup DA toolkit with folders
tramy setup --yes  # Quick setup (no prompts)
tramy list         # List all commands
tramy doctor       # Health check
tramy context      # View project context
tramy context update  # Update CLAUDE.md
```

---

## Project Structure

### Default Setup (`tramy setup`)

```
your-project/
├── CLAUDE.md
├── .tramy/
│   └── config.yaml
└── .claude/
    ├── commands/
    │   ├── analyze.md
    │   ├── plan.md
    │   ├── build.md
    │   ├── test.md
    │   ├── doc.md
    │   └── commit.md
    └── settings.json
```

### DA Setup (`tramy setup da`)

```
your-project/
├── CLAUDE.md
├── data/
│   ├── raw/
│   └── processed/
├── analysis/
├── reports/
├── notebooks/
├── .tramy/
│   └── config.yaml
└── .claude/
    ├── agents/
    │   └── data-analyst.md
    ├── commands/
    │   ├── analyze.md
    │   ├── plan.md
    │   ├── build.md
    │   ├── test.md
    │   ├── doc.md
    │   ├── commit.md
    │   └── da/
    │       ├── query.md
    │       ├── analyze.md
    │       ├── report.md
    │       ├── dashboard.md
    │       └── notebook.md
    └── settings.json
```

---

## Available Roles (25)

25 roles available for future extensions:

| Alias | Role | Alias | Role |
|-------|------|-------|------|
| pm | Product Manager | mkt | Marketing |
| da | Data Analyst | sales | Sales Engineer |
| de | Data Engineer | support | Support Engineer |
| dev | Developer | proj | Project Manager |
| fe | Frontend Developer | scrum | Scrum Master |
| be | Backend Developer | dba | Database Admin |
| fs | Fullstack Developer | mobile | Mobile Developer |
| arch | Architect | game | Game Developer |
| test | Tester | web3 | Blockchain Developer |
| ops | DevOps Engineer | hr | HR Specialist |
| sec | Security Engineer | content | Content Writer |
| docs | Technical Writer | ai | AI Engineer |
| ux | UX Designer | | |

**Currently supported:** `da` (Data Analyst)

---

## Requirements

- **Node.js** >= 18.0.0

---

## License

MIT
