<p align="center">
  <img src="assets/logo.png" alt="Tramy Logo" width="200" />
</p>

<h1 align="center">TRAMY</h1>
<p align="center"><strong>The Ultimate AI Productivity Toolkit for Claude Code</strong></p>

<p align="center">
  <a href="https://www.npmjs.com/package/tramy"><img src="https://img.shields.io/npm/v/tramy.svg?style=flat-square&color=cb3837" alt="npm version" /></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square" alt="License: MIT" /></a>
  <a href="https://www.npmjs.com/package/tramy"><img src="https://img.shields.io/npm/dm/tramy.svg?style=flat-square&color=blue" alt="Downloads" /></a>
  <a href="https://nodejs.org"><img src="https://img.shields.io/node/v/tramy.svg?style=flat-square&color=green" alt="Node" /></a>
</p>

<p align="center"><strong>12 Roles</strong> | <strong>100+ Commands</strong> | <strong>15 Workflows</strong></p>

<p align="center">
  <a href="#-quick-start">Quick Start</a> •
  <a href="#-data-analyst-role">Data Analyst</a> •
  <a href="#-all-roles">All Roles</a> •
  <a href="#-workflows">Workflows</a> •
  <a href="#-configuration">Documentation</a>
</p>

---

## ✨ Features

- **12 Specialized AI Roles** - Product Manager, Data Analyst, Data Engineer, Developer, and 8 more professional roles
- **100+ Slash Commands** - Role-specific commands for SQL, Python, BI tools, coding, testing, and deployment
- **15 Multi-Role Workflows** - Automate complex cross-functional tasks end-to-end
- **Data Analyst Powerhouse** - 35 commands covering SQL, Python/Pandas, Jupyter notebooks, and all major BI tools
- **Quality Gates** - Built-in checkpoints for code review and approval workflows
- **Dual Output** - Analysis commands generate both Markdown reports AND Jupyter notebooks
- **BI Tool Integration** - Native support for Superset, Metabase, PowerBI, Looker, and Tableau
- **Flexible Configuration** - Single-role focus or multi-role collaboration modes

---

## 🚀 Quick Start

```bash
# Install globally
npm install -g tramy

# Navigate to your project
cd your-project

# Initialize Tramy (interactive)
tramy setup

# Or quick setup with defaults
tramy setup --yes

# Or setup specific roles only
tramy setup --roles data-analyst,developer --yes
```

### Example Commands in Claude Code

```bash
# Data Analysis
/da:query "monthly revenue by product category"
/da:funnel "signup to purchase conversion"
/da:cohort "user retention by signup month"

# Product Management
/pm:story "user authentication feature"
/pm:prd "payment integration"

# Development
/dev:feature "add dark mode toggle"
/dev:refactor "optimize database queries"

# Multi-role Workflow
/workflow:feature "shopping cart"
/workflow:analytics "Q4 performance review"
```

---

## 📊 Data Analyst Role

> **The most comprehensive Data Analyst toolkit for Claude Code** - 35 commands covering the entire analytics workflow from daily operations to advanced BI tools.

### Command Overview

| Category | Count | Commands |
|----------|-------|----------|
| Core Analysis | 4 | `explore`, `query`, `visualize`, `profile` |
| Daily Operations | 3 | `morning`, `anomaly`, `compare` |
| Deep Analysis | 7 | `funnel`, `cohort`, `retention`, `segment`, `rootcause`, `abtest`, `forecast` |
| Communication | 6 | `report`, `dashboard`, `insight`, `executive`, `slack`, `adhoc` |
| SQL Advanced | 4 | `optimize`, `debug`, `cte`, `window` |
| Python/Notebook | 3 | `notebook`, `pandas`, `script` |
| BI Tools | 5 | `superset`, `metabase`, `powerbi`, `looker`, `tableau` |
| Documentation | 3 | `dictionary`, `requirement`, `handoff` |

### All 35 Commands

<details>
<summary><b>🔍 Core Analysis (4 commands)</b></summary>

| Command | Description | Output |
|---------|-------------|--------|
| `/da:explore <dataset>` | Comprehensive EDA with statistical analysis | `.md` + `.ipynb` |
| `/da:query <question>` | Write optimized SQL with CTEs and best practices | `.sql` |
| `/da:visualize <data>` | Create Python visualizations (matplotlib/plotly) | `.png` + `.html` |
| `/da:profile <dataset>` | Data profiling with quality assessment | `.md` + `.ipynb` |

</details>

<details>
<summary><b>🌅 Daily Operations (3 commands)</b></summary>

| Command | Description | Output |
|---------|-------------|--------|
| `/da:morning <metrics>` | Daily metrics health check with anomaly flags | Slack message |
| `/da:anomaly <metric>` | Detect anomalies with statistical methods | Analysis report |
| `/da:compare <metrics>` | Period comparison (WoW, MoM, YoY) | Comparison chart |

</details>

<details>
<summary><b>📈 Deep Analysis (7 commands)</b></summary>

| Command | Description | Output |
|---------|-------------|--------|
| `/da:funnel <funnel>` | Conversion funnel analysis with drop-off | `.md` + `.ipynb` |
| `/da:cohort <cohort>` | Cohort retention analysis with heatmap | `.md` + `.ipynb` |
| `/da:retention <product>` | D1/D7/D30 retention curves | `.md` + `.ipynb` |
| `/da:segment <criteria>` | RFM user segmentation | `.md` + `.ipynb` |
| `/da:rootcause <issue>` | 5 Whys root cause investigation | Analysis report |
| `/da:abtest <experiment>` | Statistical A/B test analysis | `.md` + `.ipynb` |
| `/da:forecast <metric>` | Time series forecasting (Prophet) | `.md` + `.ipynb` |

</details>

<details>
<summary><b>📢 Communication (6 commands)</b></summary>

| Command | Description | Output |
|---------|-------------|--------|
| `/da:report <topic>` | Full analytical report with methodology | Report document |
| `/da:dashboard <metrics>` | Dashboard specification and wireframe | Spec document |
| `/da:insight <topic>` | Concise insight for email/Slack | Message format |
| `/da:executive <topic>` | 1-page executive summary | Executive brief |
| `/da:slack <topic>` | Formatted Slack update templates | Slack message |
| `/da:adhoc <question>` | Quick ad-hoc analysis | Direct answer |

</details>

<details>
<summary><b>⚡ SQL Advanced (4 commands)</b></summary>

| Command | Description | Output |
|---------|-------------|--------|
| `/da:optimize <query>` | Query optimization with EXPLAIN analysis | Optimized SQL |
| `/da:debug <query>` | Debug slow queries, identify bottlenecks | Diagnosis + fix |
| `/da:cte <requirement>` | Generate complex CTE queries | SQL with CTEs |
| `/da:window <requirement>` | Window function patterns (LAG, RANK, etc.) | SQL examples |

</details>

<details>
<summary><b>🐍 Python/Notebook (3 commands)</b></summary>

| Command | Description | Output |
|---------|-------------|--------|
| `/da:notebook <analysis>` | Create structured Jupyter notebook | `.ipynb` |
| `/da:pandas <task>` | Pandas data manipulation code | Python code |
| `/da:script <task>` | Production-ready Python script | `.py` file |

</details>

<details>
<summary><b>📊 BI Tools (5 commands)</b></summary>

| Command | Description | Output |
|---------|-------------|--------|
| `/da:superset <visualization>` | Apache Superset charts and dashboards | SQL + config |
| `/da:metabase <question>` | Metabase questions with variables | SQL + filters |
| `/da:powerbi <requirement>` | PowerBI DAX measures and calculations | DAX formulas |
| `/da:looker <model>` | LookML views and explores | `.lkml` code |
| `/da:tableau <visualization>` | Tableau calculated fields and LOD | Formulas |

</details>

<details>
<summary><b>📚 Documentation (3 commands)</b></summary>

| Command | Description | Output |
|---------|-------------|--------|
| `/da:dictionary <table>` | Data dictionary with schema | Documentation |
| `/da:requirement <request>` | Gather analysis requirements | Spec document |
| `/da:handoff <analysis>` | Analysis handoff documentation | Handoff doc |

</details>

### DA Workflow Examples

#### Daily Workflow
```bash
# Morning check
/da:morning "DAU, revenue, conversion"

# Investigate any anomalies
/da:anomaly "revenue drop yesterday"

# Quick Slack update
/da:slack "daily metrics summary"
```

#### Weekly Analysis
```bash
# Weekly comparison
/da:compare "key metrics WoW"

# Funnel analysis
/da:funnel "onboarding flow"

# Executive summary
/da:executive "weekly performance"
```

#### Ad-hoc Deep Dive
```bash
# Cohort retention study
/da:cohort "Q4 signups"

# User segmentation
/da:segment "purchase behavior RFM"

# Full report
/da:report "customer churn analysis"
```

### Output Folder Structure

After running DA commands, outputs are organized in:

```
your-project/
├── analysis/
│   ├── eda-*.md              # Exploratory analysis reports
│   ├── profile-*.md          # Data profiling reports
│   ├── funnel-*.md           # Funnel analysis
│   ├── cohort-*.md           # Cohort analysis
│   ├── retention-*.md        # Retention analysis
│   ├── segment-*.md          # Segmentation analysis
│   ├── abtest-*.md           # A/B test results
│   ├── forecast-*.md         # Forecasting reports
│   ├── rootcause-*.md        # Root cause analysis
│   └── queries/              # SQL queries
├── notebooks/
│   ├── eda-*.ipynb           # EDA notebooks
│   ├── profile-*.ipynb       # Profiling notebooks
│   ├── funnel-*.ipynb        # Funnel notebooks
│   ├── cohort-*.ipynb        # Cohort notebooks
│   └── ...                   # Other analysis notebooks
├── visualizations/
│   ├── *.png                 # Static charts
│   └── *.html                # Interactive Plotly charts
├── reports/
│   ├── *.md                  # Full reports
│   └── executive-*.md        # Executive summaries
├── specs/
│   ├── dashboard-*.md        # Dashboard specifications
│   └── requirements-*.md     # Analysis requirements
└── docs/
    ├── data-dictionary/      # Data dictionaries
    └── handoff-*.md          # Handoff documentation
```

---

## 👥 All Roles

| Alias | Role | Commands | Key Capabilities |
|-------|------|----------|------------------|
| `pm` | Product Manager | 7 | PRDs, user stories, roadmaps, KPIs, sprint planning |
| **`da`** | **Data Analyst** | **35** | **SQL, Python, notebooks, BI tools, stakeholder comms** |
| `de` | Data Engineer | 7 | ETL pipelines, schemas, data quality, orchestration |
| `dev` | Developer | 7 | Features, bug fixes, refactoring, code review |
| `fe` | Frontend Developer | 7 | Components, styling, state management, accessibility |
| `be` | Backend Developer | 7 | REST/GraphQL APIs, auth, caching, microservices |
| `arch` | Architect | 7 | System design, ADRs, tech evaluation, diagrams |
| `test` | Tester | 7 | Unit, integration, E2E tests, coverage reports |
| `ops` | DevOps Engineer | 7 | CI/CD, Docker, Kubernetes, monitoring |
| `sec` | Security Engineer | 7 | Audits, vulnerability scans, compliance, hardening |
| `docs` | Technical Writer | 7 | API docs, READMEs, guides, tutorials, changelogs |
| `ux` | UX Designer | 7 | Research, wireframes, prototypes, design systems |

<details>
<summary><b>View All Role Commands</b></summary>

### Product Manager (`/pm:*`)
```
/pm:prd          Create PRD
/pm:story        Create user stories
/pm:kpi          Define KPIs
/pm:prioritize   Prioritize backlog (RICE)
/pm:roadmap      Create roadmap
/pm:sprint       Plan sprint
/pm:competitive  Competitive analysis
```

### Data Engineer (`/de:*`)
```
/de:pipeline     Create ETL pipeline
/de:schema       Design schema
/de:migrate      Create migration
/de:optimize     Optimize performance
/de:orchestrate  Setup orchestration
/de:quality      Data quality checks
/de:model        Data modeling
```

### Developer (`/dev:*`)
```
/dev:feature     Implement feature
/dev:fix         Fix bug
/dev:refactor    Refactor code
/dev:api         Create API endpoint
/dev:review      Code review
/dev:optimize    Optimize performance
/dev:debt        Address tech debt
```

### Frontend Developer (`/fe:*`)
```
/fe:component    Create component
/fe:page         Create page
/fe:style        Add styling
/fe:state        Setup state management
/fe:a11y         Accessibility audit
/fe:responsive   Make responsive
/fe:optimize     Performance optimization
```

### Backend Developer (`/be:*`)
```
/be:api          Create REST API
/be:graphql      Create GraphQL schema
/be:auth         Implement auth
/be:cache        Setup caching
/be:queue        Create job queue
/be:service      Create microservice
/be:optimize     Optimize endpoint
```

### Architect (`/arch:*`)
```
/arch:design     System design
/arch:adr        Create ADR
/arch:evaluate   Evaluate technology
/arch:scale      Scalability plan
/arch:integrate  Integration design
/arch:review     Architecture review
/arch:diagram    Create diagram
```

### Tester (`/test:*`)
```
/test:unit        Write unit tests
/test:integration Write integration tests
/test:e2e         Write E2E tests
/test:performance Performance testing
/test:coverage    Check coverage
/test:run         Run test suite
/test:report      Create bug report
```

### DevOps Engineer (`/ops:*`)
```
/ops:ci          Setup CI pipeline
/ops:cd          Setup CD pipeline
/ops:infra       Create infrastructure
/ops:docker      Dockerize service
/ops:k8s         Kubernetes deployment
/ops:monitor     Setup monitoring
/ops:deploy      Deploy to environment
```

### Security Engineer (`/sec:*`)
```
/sec:audit       Security audit
/sec:scan        Vulnerability scan
/sec:review      Secure code review
/sec:pentest     Penetration test plan
/sec:compliance  Compliance check
/sec:incident    Incident response
/sec:harden      Security hardening
```

### Technical Writer (`/docs:*`)
```
/docs:api        Document API
/docs:readme     Create/update README
/docs:guide      Write user guide
/docs:tutorial   Create tutorial
/docs:changelog  Update changelog
/docs:adr        Document ADR
/docs:runbook    Create runbook
```

### UX Designer (`/ux:*`)
```
/ux:research     User research
/ux:wireframe    Create wireframe
/ux:prototype    Design prototype
/ux:review       Usability review
/ux:system       Design system
/ux:a11y         Accessibility review
/ux:flow         User flow diagram
```

</details>

---

## 🔄 Workflows

Multi-role workflows coordinate multiple specialists to complete complex tasks end-to-end.

| Workflow | Description | Roles |
|----------|-------------|-------|
| `/workflow:feature` | End-to-end feature development | PM → Arch → FE/BE → Test → Docs → Ops |
| `/workflow:api` | API design and implementation | PM → Arch → BE → Test → Sec → Docs |
| `/workflow:pipeline` | Data pipeline creation | PM → DA → DE → Test → Docs |
| `/workflow:fix` | Bug investigation and fix | Test → Dev → Test → Docs |
| `/workflow:security` | Comprehensive security audit | Sec → FE/BE/Ops → Test → Docs |
| `/workflow:release` | Release preparation and deploy | PM → Dev/Test/Sec → Ops → Docs |
| `/workflow:analytics` | Analytics report creation | PM → DA → Docs |
| `/workflow:dashboard` | Dashboard development | PM → DA → FE → DE → Test |
| `/workflow:onboarding` | Developer onboarding docs | PM → Arch/Ops → Docs |
| `/workflow:tech-debt` | Technical debt cleanup | Arch → Dev → Test → Docs |
| `/workflow:performance` | Performance optimization | DA → FE/BE/DE → Test |
| `/workflow:migrate` | System/data migration | Arch → DE → Dev → Test → Ops |
| `/workflow:abtest` | A/B test experiment | PM → DA → Dev → DA → Docs |
| `/workflow:incident` | Incident response | Ops → Sec/BE → Test → Docs |
| `/workflow:compliance` | Compliance audit | Sec → Dev/Ops/DE → Docs |

---

## 🛠 CLI Commands

```bash
# Setup
tramy setup                    # Interactive setup wizard
tramy setup --yes              # Quick setup with defaults
tramy setup --roles pm,da,dev  # Setup specific roles only
tramy setup --mode single-role # Single role mode

# Role Management
tramy role list                # List all available roles
tramy role info <role>         # Show role details and commands
tramy role info da             # Example: show Data Analyst info

# Workflows
tramy workflow list            # List all workflows
tramy workflow info <workflow> # Show workflow details

# Diagnostics
tramy doctor                   # Check installation health
```

---

## ⚙️ Configuration

After setup, customize in `.tramy/config.yaml`:

```yaml
version: "1.2"

# Default role when starting
defaultRole: data-analyst

# Mode: single-role or multi-role
mode: multi-role

# Enabled roles (comment out to disable)
enabledRoles:
  - product-manager
  - data-analyst      # 35 commands!
  - data-engineer
  - developer
  - frontend-developer
  - backend-developer
  - architect
  - tester
  - devops-engineer
  - security-engineer
  - technical-writer
  - ux-designer

# Quality gates for workflows
qualityGates:
  enabled: true
  requireApproval: true

# Auto-create checkpoints
checkpoints:
  enabled: true
  autoCreate: true

# Output directories
output:
  specs: specs/
  docs: docs/
  analysis: analysis/
  reports: reports/
```

---

## 📁 Project Structure

After `tramy setup`, your project will have:

```
your-project/
├── .claude/
│   ├── commands/              # Slash commands
│   │   ├── pm/               # Product Manager (7 commands)
│   │   ├── da/               # Data Analyst (35 commands)
│   │   ├── de/               # Data Engineer (7 commands)
│   │   ├── dev/              # Developer (7 commands)
│   │   ├── fe/               # Frontend (7 commands)
│   │   ├── be/               # Backend (7 commands)
│   │   ├── arch/             # Architect (7 commands)
│   │   ├── test/             # Tester (7 commands)
│   │   ├── ops/              # DevOps (7 commands)
│   │   ├── sec/              # Security (7 commands)
│   │   ├── docs/             # Technical Writer (7 commands)
│   │   ├── ux/               # UX Designer (7 commands)
│   │   ├── workflow/         # Workflow commands (15)
│   │   ├── tramy/            # Utility commands
│   │   ├── checkpoint/       # Checkpoint commands
│   │   └── git/              # Git commands
│   ├── agents/               # Role agent definitions
│   └── settings.json         # Claude settings
├── .tramy/
│   └── config.yaml           # Tramy configuration
├── specs/                    # Specifications output
├── docs/                     # Documentation output
├── analysis/                 # Analysis output (DA)
├── reports/                  # Reports output
├── notebooks/                # Jupyter notebooks (DA)
└── visualizations/           # Charts and graphs (DA)
```

---

## 📋 Requirements

- **Node.js** >= 18.0.0
- **Claude Code** CLI installed and configured
- **Git** (optional, for checkpoint features)

---

## 📜 License

MIT © [tramy.dev](https://github.com/tramy-dev)

---

## 🔗 Links

- **Website**: [tramy.dev](https://tramy.dev)
- **npm**: [npmjs.com/package/tramy](https://www.npmjs.com/package/tramy)
- **GitHub**: [github.com/tramy-dev/tramy](https://github.com/tramy-dev/tramy)
- **Issues**: [Report a bug](https://github.com/tramy-dev/tramy/issues)
- **Changelog**: [CHANGELOG.md](CHANGELOG.md)

---

<div align="center">

**Built for Data Analysts, by Data Analysts** 📊

Star ⭐ this repo if you find it useful!

</div>
