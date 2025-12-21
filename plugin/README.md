# Tramy - DA Toolkit for Claude Code

> Data Analyst Toolkit with 25 roles, 137 commands, and knowledge management

## Installation

```
/plugin add tramy-dev/tramy
```

## Features

- **25 Specialized Roles** - From Data Analyst to DevOps to Product Manager
- **137 Commands** - Deep expertise for each role
- **Knowledge Management** - Claude remembers insights across sessions
- **Multi-Role Workflows** - Complex tasks automated across roles

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

## DA Commands (6)

| Command | Description |
|---------|-------------|
| `/da:query` | Write optimized SQL queries |
| `/da:analyze` | Exploratory data analysis |
| `/da:clean` | Clean data (raw → processed) |
| `/da:report` | Generate analysis reports |
| `/da:dashboard` | Design BI dashboards |
| `/da:notebook` | Create Jupyter notebooks |

---

## 25 Available Roles

| Alias | Role | Commands |
|-------|------|----------|
| `pm` | Product Manager | /pm:prd, /pm:story, /pm:roadmap |
| `da` | Data Analyst | /da:query, /da:analyze, /da:report |
| `de` | Data Engineer | /de:pipeline, /de:schema, /de:etl |
| `dev` | Developer | /dev:implement, /dev:debug, /dev:refactor |
| `fe` | Frontend | /fe:component, /fe:style, /fe:state |
| `be` | Backend | /be:api, /be:model, /be:auth |
| `fs` | Fullstack | /fs:feature, /fs:integrate, /fs:e2e |
| `arch` | Architect | /arch:design, /arch:adr, /arch:diagram |
| `test` | Tester | /test:unit, /test:e2e, /test:coverage |
| `ops` | DevOps | /ops:ci, /ops:docker, /ops:k8s |
| `sec` | Security | /sec:audit, /sec:scan, /sec:pentest |
| `docs` | Tech Writer | /docs:api, /docs:guide, /docs:changelog |
| `ux` | UX Designer | /ux:wireframe, /ux:flow, /ux:persona |
| `ai` | AI Engineer | /ai:prompt, /ai:eval, /ai:rag |
| `content` | Content Writer | /content:blog, /content:seo, /content:copy |
| `mkt` | Marketing | /mkt:campaign, /mkt:funnel, /mkt:ads |
| `sales` | Sales Engineer | /sales:demo, /sales:proposal, /sales:deck |
| `support` | Support | /support:ticket, /support:kb, /support:rca |
| `proj` | Project Manager | /proj:timeline, /proj:risk, /proj:status |
| `scrum` | Scrum Master | /scrum:sprint, /scrum:retro, /scrum:backlog |
| `dba` | Database Admin | /dba:optimize, /dba:backup, /dba:index |
| `mobile` | Mobile Dev | /mobile:screen, /mobile:native, /mobile:push |
| `game` | Game Dev | /game:mechanic, /game:asset, /game:physics |
| `web3` | Blockchain | /web3:contract, /web3:audit, /web3:deploy |
| `hr` | HR Specialist | /hr:job, /hr:interview, /hr:onboard |

---

## Usage Examples

```bash
# Data Analysis
/da:query monthly active users by cohort
/da:analyze customer churn patterns
/da:report Q1 sales performance

# Development
/dev:implement user authentication
/fe:component reusable data table
/be:api REST endpoints for users

# Operations
/ops:docker multi-stage build
/ops:ci GitHub Actions pipeline
```

---

## CLI Installation (Alternative)

```bash
npm install -g tramy
tramy setup da
```

## Links

- [Documentation](https://tramy.dev/docs)
- [GitHub](https://github.com/tramy-dev/tramy)
- [npm](https://www.npmjs.com/package/tramy)

## License

MIT
