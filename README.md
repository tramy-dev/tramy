# TRAMY

> The Ultimate AI Productivity Toolkit for Claude Code

[![npm version](https://img.shields.io/npm/v/@tramy-dev/tramy.svg)](https://www.npmjs.com/package/@tramy-dev/tramy)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**12 Professional Roles | 60+ Commands | 15 Workflows**

Tramy supercharges [Claude Code](https://claude.ai/code) with specialized AI roles, powerful slash commands, and multi-role workflows for the entire product development lifecycle.

## Features

- **12 Specialized Roles**: Product Manager, Data Analyst, Data Engineer, Developer, Frontend Developer, Backend Developer, Architect, Tester, DevOps Engineer, Security Engineer, Technical Writer, UX Designer
- **60+ Slash Commands**: Role-specific commands for every task
- **15 Multi-Role Workflows**: Complex cross-functional tasks automated
- **Quality Gates**: Built-in checkpoints for review
- **Flexible Configuration**: Single-role or multi-role modes

## Quick Start

```bash
# Install globally
npm install -g @tramy-dev/tramy

# Initialize in your project
cd your-project
tramy setup
```

## Usage

After setup, use slash commands directly in Claude Code:

```
/pm:story "user authentication"      # Create user stories
/dev:feature "add dark mode"         # Implement a feature
/test:unit src/utils/                # Write unit tests
/workflow:feature "payment system"   # Run full feature workflow
```

## Available Roles

| Alias | Role | Description |
|-------|------|-------------|
| `pm` | Product Manager | PRDs, user stories, roadmaps |
| `da` | Data Analyst | SQL, analysis, visualizations |
| `de` | Data Engineer | Pipelines, schemas, ETL |
| `dev` | Developer | Features, bug fixes, refactoring |
| `fe` | Frontend Developer | Components, styling, state |
| `be` | Backend Developer | APIs, auth, caching |
| `arch` | Architect | System design, ADRs |
| `test` | Tester | Unit, integration, E2E tests |
| `ops` | DevOps Engineer | CI/CD, Docker, K8s |
| `sec` | Security Engineer | Audits, scans, compliance |
| `docs` | Technical Writer | API docs, guides, changelogs |
| `ux` | UX Designer | Research, wireframes, prototypes |

## Commands

Each role has 7 specialized commands:

```
/pm:prd          /pm:story        /pm:kpi          /pm:prioritize
/pm:roadmap      /pm:sprint       /pm:competitive

/dev:feature     /dev:fix         /dev:refactor    /dev:api
/dev:review      /dev:optimize    /dev:debt

# ... and 60+ more
```

Use `/tramy:help` in Claude Code to see all available commands.

## Workflows

Multi-role workflows automate complex tasks:

| Command | Description | Roles |
|---------|-------------|-------|
| `/workflow:feature` | End-to-end feature | PM → Arch → FE/BE → Test → Docs → Ops |
| `/workflow:api` | API development | PM → Arch → BE → Test → Sec → Docs |
| `/workflow:pipeline` | Data pipeline | PM → DA → DE → Test → Docs |
| `/workflow:fix` | Bug fix | Test → Dev → Test → Docs |
| `/workflow:security` | Security audit | Sec → FE/BE/Ops → Test → Docs |
| `/workflow:release` | Release | PM → Dev/Test/Sec → Ops → Docs |

## CLI Commands

```bash
tramy setup              # Initialize Tramy
tramy setup --yes        # Quick setup with defaults
tramy role list          # List available roles
tramy role info <role>   # Show role details
tramy workflow list      # List workflows
tramy doctor             # Check installation health
```

## Configuration

After setup, configure in `.tramy/config.yaml`:

```yaml
version: "1.0"
defaultRole: developer
mode: multi-role  # or single-role
enabledRoles:
  - product-manager
  - developer
  - tester
  # ... more roles
qualityGates:
  enabled: true
  requireApproval: true
```

## Project Structure

After `tramy setup`, your project will have:

```
your-project/
├── .claude/
│   ├── commands/           # Slash commands
│   │   ├── pm/            # Product Manager commands
│   │   ├── dev/           # Developer commands
│   │   ├── workflow/      # Workflow commands
│   │   └── ...
│   └── agents/            # Role agents
├── .tramy/
│   └── config.yaml        # Configuration
├── specs/                 # Specifications output
├── docs/                  # Documentation output
├── analysis/              # Analysis output
└── reports/               # Reports output
```

## Requirements

- Node.js >= 18
- Claude Code CLI

## License

MIT

## Contributing

Contributions are welcome! Please read our [contributing guidelines](CONTRIBUTING.md) first.

## Links

- [Documentation](https://github.com/tramy-dev/tramy)
- [Issues](https://github.com/tramy-dev/tramy/issues)
- [Changelog](CHANGELOG.md)
