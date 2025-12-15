<p align="center">
  <img src="assets/logo.png" alt="Tramy Logo" width="200" />
</p>

<h1 align="center">TRAMY</h1>
<p align="center"><strong>The Ultimate AI Productivity Toolkit for Claude Code</strong></p>

<p align="center">
  <a href="https://www.npmjs.com/package/tramy"><img src="https://img.shields.io/npm/v/tramy.svg?style=flat-square&color=cb3837" alt="npm version" /></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square" alt="License: MIT" /></a>
  <a href="https://www.npmjs.com/package/tramy"><img src="https://img.shields.io/npm/dt/tramy.svg?style=flat-square&color=blue" alt="Total Downloads" /></a>
  <a href="https://nodejs.org"><img src="https://img.shields.io/node/v/tramy.svg?style=flat-square&color=green" alt="Node" /></a>
</p>

<p align="center"><strong>14 Roles</strong> | <strong>5 Core Commands</strong> | <strong>8 DA Commands</strong></p>

<p align="center">
  <a href="#-quick-start">Quick Start</a> •
  <a href="#-core-commands">Core Commands</a> •
  <a href="#-data-analyst-commands">Data Analyst</a> •
  <a href="#-roles">Roles</a>
</p>

---

## ✨ Features

- **5 Universal Commands** - `/plan`, `/cook`, `/fix`, `/test`, `/commit` work with any role
- **14 Professional Roles** - Context-aware AI assistants that adapt output to your role
- **8 Data Analyst Commands** - Specialized toolkit for SQL, BI tools, and analytics
- **Auto-Project Detection** - Scans your project and generates context automatically
- **Role-Adaptive Behavior** - Same commands, different outputs based on active role

---

## 🚀 Quick Start

```bash
# Install globally
npm install -g tramy

# Navigate to your project
cd your-project

# Initialize (interactive)
tramy setup

# Or quick setup with defaults
tramy setup --yes
```

After setup, use commands in Claude Code:

```bash
# Plan anything
/plan "add user authentication"

# Plan + implement
/cook "dark mode toggle"

# Fix bugs
/fix "login timeout on mobile"

# Run tests
/test auth

# Smart commit
/commit

# Data Analyst commands
/da:query "monthly revenue by category"
/da:analyze "user churn patterns"
```

---

## 🎯 Core Commands

**5 universal commands** that adapt to your current role:

| Command | Description | Example |
|---------|-------------|---------|
| `/plan <desc>` | Create detailed plan | `/plan "user authentication"` |
| `/cook <desc>` | Plan + implement | `/cook "add dark mode"` |
| `/fix <issue>` | Analyze and fix bug | `/fix "login timeout"` |
| `/test [scope]` | Run tests | `/test`, `/test auth` |
| `/commit [msg]` | Smart git commit | `/commit`, `/commit "feat: add login"` |

### How Roles Affect Commands

```bash
# As Frontend Developer
/plan "responsive navbar"
# → Components, styling, responsive breakpoints

# As Backend Developer
/plan "user authentication"
# → API endpoints, JWT, database schema

# As Architect
/plan "microservices migration"
# → System design, trade-offs, ADRs

# As Data Analyst
/plan "customer segmentation"
# → Data sources, methodology, deliverables
```

---

## 📊 Data Analyst Commands

**8 specialized commands** for data work:

| Command | Description | Example |
|---------|-------------|---------|
| `/da:query <question>` | Write SQL from question | `/da:query "top customers by LTV"` |
| `/da:analyze <topic>` | Auto-detect analysis type | `/da:analyze "conversion funnel"` |
| `/da:report <topic>` | Full report + notebook | `/da:report "Q4 performance"` |
| `/da:dashboard <metrics>` | Design dashboard | `/da:dashboard "exec KPIs"` |
| `/da:bi <tool> <task>` | BI tool integration | `/da:bi superset "revenue chart"` |
| `/da:notebook <analysis>` | Jupyter notebook | `/da:notebook "RFM segmentation"` |
| `/da:profile <table>` | Data profiling | `/da:profile "users"` |
| `/da:sql <type> <desc>` | Advanced SQL patterns | `/da:sql window "running total"` |

### Supported BI Tools

- **Apache Superset** - Charts, dashboards, SQL Lab
- **Metabase** - Questions, native queries
- **Power BI** - DAX measures, Power Query
- **Looker** - LookML views, explores
- **Tableau** - Calculated fields, LOD expressions

### DA Workflow Examples

```bash
# Daily Analysis
/da:query "yesterday's revenue by category"
/da:analyze "any anomalies in user signups"

# Weekly Report
/da:report "weekly KPI summary"
/da:dashboard "team performance metrics"

# Deep Dive
/da:analyze "user churn patterns"
/da:notebook "customer lifetime value analysis"
```

---

## 👥 Roles

**14 professional roles** - Switch with `/role <alias>` or mention in conversation:

| Alias | Role | Focus |
|-------|------|-------|
| `pm` | Product Manager | PRD, user stories, roadmap |
| `da` | Data Analyst | SQL, analysis, BI tools |
| `de` | Data Engineer | ETL, pipelines, orchestration |
| `dev` | Developer | Features, debugging |
| `fe` | Frontend Developer | React, Vue, styling |
| `be` | Backend Developer | APIs, databases, auth |
| `fs` | Fullstack Developer | End-to-end development |
| `arch` | Architect | System design, ADRs |
| `test` | Tester | Unit, E2E, strategies |
| `ops` | DevOps Engineer | CI/CD, infrastructure |
| `sec` | Security Engineer | Audits, compliance |
| `docs` | Technical Writer | Documentation, guides |
| `ux` | UX Designer | Research, prototypes |
| `ai` | AI Engineer | ML models, prompts |

### Switching Roles

```bash
# Using the command
/role be
# → Now acting as Backend Developer

# Or mention in conversation
"As a frontend developer, help me..."
"Use the architect role to design..."
```

---

## 🛠 CLI Commands

```bash
# Setup
tramy setup              # Interactive setup
tramy setup --yes        # Quick setup with defaults

# Info
tramy list               # List roles and commands
tramy doctor             # Health check

# Context
tramy context            # Show project context
tramy context update     # Re-scan and update CLAUDE.md
```

---

## ⚙️ Configuration

After setup, customize in `.tramy/config.yaml`:

```yaml
version: "2.0"

project:
  name: "my-project"
  description: "E-commerce platform"
  techStack:
    - typescript
    - react
    - postgresql

defaultRole: developer

roles:
  - product-manager
  - data-analyst
  - developer
  # ... all 14 roles enabled by default

output:
  analysis: analysis/
  reports: reports/
  notebooks: notebooks/
```

---

## 📁 Project Structure

After `tramy setup`:

```
your-project/
├── CLAUDE.md                    # Project context (auto-generated)
├── .tramy/
│   └── config.yaml              # Configuration
└── .claude/
    ├── agents/                  # 14 role definitions
    │   ├── product-manager.md
    │   ├── data-analyst.md
    │   ├── developer.md
    │   └── ...
    ├── commands/                # 13 commands
    │   ├── plan.md
    │   ├── cook.md
    │   ├── fix.md
    │   ├── test.md
    │   ├── commit.md
    │   ├── role.md
    │   └── da/                  # DA commands
    │       ├── query.md
    │       ├── analyze.md
    │       ├── report.md
    │       └── ...
    └── settings.json
```

---

## 📋 Requirements

- **Node.js** >= 18.0.0
- **Claude Code** CLI installed and configured

---

## 📜 License

MIT © [tramy.dev](https://github.com/tramy-dev)

---

## 🔗 Links

- **npm**: [npmjs.com/package/tramy](https://www.npmjs.com/package/tramy)
- **GitHub**: [github.com/tramy-dev/tramy](https://github.com/tramy-dev/tramy)
- **Issues**: [Report a bug](https://github.com/tramy-dev/tramy/issues)

---

## Quick Reference

```
╔═══════════════════════════════════════════════════════════╗
║                        TRAMY                              ║
╠═══════════════════════════════════════════════════════════╣
║                                                           ║
║  CORE COMMANDS (use with any role)                        ║
║  ─────────────────────────────────                        ║
║  /plan <desc>      Plan without implementing              ║
║  /cook <desc>      Plan + implement automatically         ║
║  /fix <issue>      Analyze and fix bugs                   ║
║  /test [scope]     Run tests                              ║
║  /commit [msg]     Smart git commit                       ║
║                                                           ║
║  DATA ANALYST COMMANDS                                    ║
║  ────────────────────────                                 ║
║  /da:query         Write SQL from question                ║
║  /da:analyze       Auto-detect analysis type              ║
║  /da:report        Full report + notebook                 ║
║  /da:dashboard     Design dashboard                       ║
║  /da:bi <tool>     BI tools (superset/metabase/...)       ║
║  /da:notebook      Create Jupyter notebook                ║
║  /da:profile       Data profiling                         ║
║  /da:sql           Advanced SQL patterns                  ║
║                                                           ║
║  ROLES (14)                                               ║
║  ──────────                                               ║
║  pm   Product Manager     ops   DevOps Engineer           ║
║  da   Data Analyst        sec   Security Engineer         ║
║  de   Data Engineer       docs  Technical Writer          ║
║  dev  Developer           ux    UX Designer               ║
║  fe   Frontend Dev        ai    AI Engineer               ║
║  be   Backend Dev         fs    Fullstack Dev             ║
║  arch Architect           test  Tester                    ║
║                                                           ║
║  Switch: /role <alias> or mention in conversation         ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
```

---

<div align="center">

**14 Roles, 13 Commands, 1 Killer Feature**

Star ⭐ this repo if you find it useful!

</div>
