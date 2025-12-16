# Tramy - The Ultimate AI Productivity Toolkit for Claude Code

> 25 roles, 137 commands, multi-role workflows - supercharge your Claude Code experience

## Features

- **6 Core Commands** - Multi-role workflows that orchestrate multiple specialists
- **25 Specialized Roles** - From Product Manager to DevOps to Data Analyst
- **131 Role Commands** - Deep expertise for each role
- **21 Multi-Role Workflows** - Complex tasks automated across roles

## Installation

### Via Claude Code Plugin (Recommended)
```bash
/plugin marketplace add tramy-dev/tramy
/plugin install tramy@tramy
```

### Via npm
```bash
npm install -g tramy
tramy setup
```

## Core Commands

| Command | Description | Workflow |
|---------|-------------|----------|
| `/plan <desc>` | Planning workflow | PM → Arch → relevant role |
| `/build <desc>` | Build feature | PM → Dev → Test → Docs |
| `/fix <issue>` | Fix bugs with RCA | Support → Dev → Test |
| `/review <scope>` | Code review + security | Dev → Sec → Test |
| `/ship <version>` | Deploy + announce | Test → Ops → Docs → Mkt |
| `/use <alias>` | Show role info | - |

## 25 Available Roles

| Alias | Role | Example Commands |
|-------|------|------------------|
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

## Multi-Role Workflows

Workflows orchestrate multiple roles for complex tasks:

```
/dev:feature "user authentication"
```

This triggers: PM (requirements) → Arch (design) → Dev (implement) → Test (testing) → Sec (security) → Docs (documentation)

### Available Workflows

- `/pm:launch` - Product launch (PM → Mkt → Content → Sales → Support)
- `/pm:discovery` - Product discovery (UX → DA → PM → Arch)
- `/dev:feature` - Full feature build (PM → Arch → Dev → Test → Sec → Docs)
- `/dev:hotfix` - Emergency fix (Support → Dev → Test → Ops)
- `/ops:release` - Release workflow (Dev → Test → Docs → Ops → Mkt)
- `/ops:incident` - Incident response (Support → Dev → Ops → Docs)
- `/sec:hardening` - Security hardening (Sec → Arch → Dev → Ops → Docs)
- And 14 more...

## Usage Examples

### Planning a Feature
```
/plan implement user authentication with OAuth2
```

### Building a Feature
```
/build shopping cart with checkout flow
```

### Fixing a Bug
```
/fix users can't login after password reset
```

### Code Review
```
/review src/auth/
```

### Shipping to Production
```
/ship v2.1.0
```

### Using Role-Specific Commands
```
/da:query monthly active users by cohort
/fe:component reusable data table with sorting
/ops:docker multi-stage build for Node.js app
```

## Requirements

- Claude Code >= 2.0.0

## License

MIT

## Links

- [GitHub Repository](https://github.com/tramy-dev/tramy)
- [npm Package](https://www.npmjs.com/package/tramy)
- [Issues](https://github.com/tramy-dev/tramy/issues)
