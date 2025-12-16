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

<p align="center"><strong>25 Roles</strong> | <strong>137 Commands</strong> | <strong>21 Multi-Role Workflows</strong></p>

<p align="center">
  <a href="#-quick-start">Quick Start</a> •
  <a href="#-core-commands">Core Commands</a> •
  <a href="#-roles">Roles</a> •
  <a href="#-workflows">Workflows</a>
</p>

---

## ✨ Features

- **6 Core Commands** - Multi-role workflows: `/plan`, `/build`, `/fix`, `/review`, `/ship`, `/use`
- **25 Professional Roles** - From Product Manager to DevOps to Data Analyst
- **131 Role Commands** - Specialized commands for each role (`/da:query`, `/fe:component`, `/ops:ci`)
- **21 Multi-Role Workflows** - Complex tasks automated across roles
- **Auto-Project Detection** - Scans your project and generates context automatically

---

## 🚀 Quick Start

### npm (Recommended)
```bash
npm install -g tramy
cd your-project
tramy setup
```

### Claude Code Plugin
```bash
/plugin marketplace add tramy-dev/tramy
/plugin install tramy@tramy
```

After setup, use commands in Claude Code:
```bash
/plan "add user authentication"
/build "shopping cart feature"
/fix "login timeout on mobile"
/review src/auth/
/ship v2.1.0
```

---

## 🎯 Core Commands

**6 multi-role workflow commands** that orchestrate multiple specialists:

| Command | Description | Workflow |
|---------|-------------|----------|
| `/plan <desc>` | Planning workflow | PM → Arch → relevant role |
| `/build <desc>` | Build feature | PM → Dev → Test → Docs |
| `/fix <issue>` | Fix bugs with RCA | Support → Dev → Test |
| `/review <scope>` | Code review + security | Dev → Sec → Test |
| `/ship <version>` | Deploy + announce | Test → Ops → Docs → Mkt |
| `/use <alias>` | Show role info & commands | - |

### Examples

```bash
# Planning
/plan "implement OAuth2 authentication"
# → PM defines requirements → Arch designs system → Dev plans implementation

# Building
/build "user dashboard with analytics"
# → PM writes stories → Dev implements → Test writes tests → Docs updates

# Fixing
/fix "users can't reset password"
# → Support triages → Dev investigates → Test adds regression test

# Reviewing
/review src/api/
# → Dev reviews code → Sec audits security → Test checks coverage

# Shipping
/ship v2.0.0
# → Test runs suite → Ops deploys → Docs updates changelog → Mkt announces
```

---

## 👥 25 Roles

| Alias | Role | Commands |
|-------|------|----------|
| `pm` | Product Manager | /pm:prd, /pm:story, /pm:roadmap, /pm:priority |
| `da` | Data Analyst | /da:query, /da:analyze, /da:report, /da:dashboard |
| `de` | Data Engineer | /de:pipeline, /de:schema, /de:etl, /de:quality |
| `dev` | Developer | /dev:implement, /dev:debug, /dev:refactor, /dev:review |
| `fe` | Frontend | /fe:component, /fe:style, /fe:state, /fe:a11y |
| `be` | Backend | /be:api, /be:model, /be:auth, /be:migrate |
| `fs` | Fullstack | /fs:feature, /fs:integrate, /fs:e2e |
| `arch` | Architect | /arch:design, /arch:adr, /arch:diagram, /arch:review |
| `test` | Tester | /test:unit, /test:e2e, /test:coverage, /test:plan |
| `ops` | DevOps | /ops:ci, /ops:docker, /ops:k8s, /ops:monitor |
| `sec` | Security | /sec:audit, /sec:scan, /sec:pentest, /sec:compliance |
| `docs` | Tech Writer | /docs:api, /docs:guide, /docs:changelog, /docs:readme |
| `ux` | UX Designer | /ux:wireframe, /ux:flow, /ux:persona, /ux:audit |
| `ai` | AI Engineer | /ai:prompt, /ai:eval, /ai:rag, /ai:finetune |
| `content` | Content Writer | /content:blog, /content:seo, /content:copy, /content:social |
| `mkt` | Marketing | /mkt:campaign, /mkt:funnel, /mkt:ads, /mkt:analytics |
| `sales` | Sales Engineer | /sales:demo, /sales:proposal, /sales:objection, /sales:deck |
| `support` | Support | /support:ticket, /support:kb, /support:escalate, /support:rca |
| `proj` | Project Manager | /proj:timeline, /proj:standup, /proj:risk, /proj:status |
| `scrum` | Scrum Master | /scrum:sprint, /scrum:retro, /scrum:backlog, /scrum:velocity |
| `dba` | Database Admin | /dba:optimize, /dba:backup, /dba:index, /dba:monitor |
| `mobile` | Mobile Dev | /mobile:screen, /mobile:native, /mobile:push, /mobile:store |
| `game` | Game Dev | /game:mechanic, /game:asset, /game:physics, /game:balance |
| `web3` | Blockchain | /web3:contract, /web3:audit, /web3:deploy, /web3:token |
| `hr` | HR Specialist | /hr:job, /hr:interview, /hr:onboard, /hr:review |

### Using Role Commands

```bash
# Data Analyst
/da:query "monthly active users by cohort"
/da:analyze "conversion funnel drop-off"

# Frontend Developer
/fe:component "reusable data table with sorting"
/fe:a11y "audit checkout form"

# DevOps
/ops:docker "multi-stage build for Node.js"
/ops:k8s "deployment with auto-scaling"

# Security
/sec:audit "OWASP top 10 check"
/sec:scan "dependency vulnerabilities"
```

---

## 🔄 Multi-Role Workflows

Workflows orchestrate multiple roles for complex tasks:

| Workflow | Roles | Description |
|----------|-------|-------------|
| `/pm:launch` | PM → Mkt → Content → Sales → Support | Product launch |
| `/pm:discovery` | UX → DA → PM → Arch | Product discovery |
| `/dev:feature` | PM → Arch → Dev → Test → Sec → Docs | Full feature build |
| `/dev:hotfix` | Support → Dev → Test → Ops | Emergency fix |
| `/ops:release` | Dev → Test → Docs → Ops → Mkt | Release workflow |
| `/ops:incident` | Support → Dev → Ops → Docs | Incident response |
| `/sec:hardening` | Sec → Arch → Dev → Ops → Docs | Security hardening |
| `/da:insight` | DA → PM → Dev → DA | Data to action |
| `/arch:rfc` | Arch → Sec → Ops → Dev → Docs | RFC process |
| `/test:regression` | Test → Support → Dev → Test | Full regression |
| `/ux:redesign` | UX → PM → UX → FE → Test | UX redesign |
| `/ai:deploy` | AI → Dev → Test → Sec → Ops → Docs | AI deployment |
| `/content:campaign` | Mkt → Content → Sales → DA | Content campaign |
| `/mkt:gtm` | Mkt → PM → Content → Sales → DA | Go-to-market |
| `/sales:deal` | Sales → Arch → Sec → Proj → Support | Enterprise deal |
| `/support:bug` | Support → Dev → Test → Ops | Bug resolution |
| `/scrum:kickoff` | PM → Arch → Scrum → PM → Dev | Project kickoff |
| `/dba:migration` | DBA → Dev → Test → Ops → DBA | Database migration |
| `/mobile:launch` | Mobile → Test → Content → Ops → Mkt | App launch |
| `/hr:hire` | HR → PM → HR → Dev → HR | Hiring workflow |
| `/hr:offboard` | HR → Dev → Ops → PM → HR | Offboarding |

---

## 🛠 CLI Commands

```bash
tramy setup              # Interactive setup
tramy setup --yes        # Quick setup with defaults
tramy list               # List all roles and commands
tramy doctor             # Health check
tramy context            # Show project context
tramy context update     # Re-scan and update
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
    ├── agents/                  # 25 role definitions
    ├── commands/                # 137 commands
    │   ├── plan.md
    │   ├── build.md
    │   ├── fix.md
    │   ├── review.md
    │   ├── ship.md
    │   ├── use.md
    │   ├── da/                  # Data Analyst (8 commands)
    │   ├── pm/                  # Product Manager (6 commands)
    │   ├── dev/                 # Developer (6 commands)
    │   └── ...                  # 25 role folders
    └── settings.json
```

---

## 📋 Requirements

- **Node.js** >= 18.0.0
- **Claude Code** CLI installed

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
╔════════════════════════════════════════════════════════════════╗
║                          TRAMY v2.0                            ║
╠════════════════════════════════════════════════════════════════╣
║                                                                ║
║  CORE COMMANDS (6 multi-role workflows)                        ║
║  ──────────────────────────────────────                        ║
║  /plan <desc>       PM → Arch → relevant role                  ║
║  /build <desc>      PM → Dev → Test → Docs                     ║
║  /fix <issue>       Support → Dev → Test                       ║
║  /review <scope>    Dev → Sec → Test                           ║
║  /ship <version>    Test → Ops → Docs → Mkt                    ║
║  /use <alias>       Show role info & commands                  ║
║                                                                ║
║  ROLE COMMANDS (131 total)                                     ║
║  ─────────────────────────                                     ║
║  /da:query, /da:analyze, /da:report, /da:dashboard             ║
║  /fe:component, /fe:style, /fe:state, /fe:a11y                 ║
║  /ops:ci, /ops:docker, /ops:k8s, /ops:monitor                  ║
║  /sec:audit, /sec:scan, /sec:pentest, /sec:compliance          ║
║  ... and 115 more across 25 roles                              ║
║                                                                ║
║  25 ROLES                                                      ║
║  ────────                                                      ║
║  pm    Product Manager      mkt     Marketing                  ║
║  da    Data Analyst         sales   Sales Engineer             ║
║  de    Data Engineer        support Support                    ║
║  dev   Developer            proj    Project Manager            ║
║  fe    Frontend             scrum   Scrum Master               ║
║  be    Backend              dba     Database Admin             ║
║  fs    Fullstack            mobile  Mobile Dev                 ║
║  arch  Architect            game    Game Dev                   ║
║  test  Tester               web3    Blockchain                 ║
║  ops   DevOps               hr      HR Specialist              ║
║  sec   Security             content Content Writer             ║
║  docs  Tech Writer          ai      AI Engineer                ║
║  ux    UX Designer                                             ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
```

---

<div align="center">

**25 Roles • 137 Commands • 21 Workflows**

Star ⭐ this repo if you find it useful!

</div>
