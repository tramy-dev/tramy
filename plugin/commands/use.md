# Use - Show Role Info & Commands

Show role information: $ARGUMENTS

## Instructions

Display detailed information about the specified role and its available commands.

### Usage:
- `/use da` - Show Data Analyst role info & commands
- `/use fe` - Show Frontend Developer role info & commands
- `/use` - Show all available roles

### Core Commands (6 multi-role workflows):
| Command | Description | Workflow |
|---------|-------------|----------|
| /plan | Planning workflow | PM → Arch → relevant role |
| /build | Build feature | PM → Dev → Test → Docs |
| /fix | Fix bugs with RCA | Support → Dev → Test |
| /review | Code review + security | Dev → Sec → Test |
| /ship | Deploy + announce | Test → Ops → Docs → Mkt |
| /use | Show role info | - |

### 25 Available Roles with Commands & Workflows:

| Alias | Role | Commands | Workflows |
|-------|------|----------|-----------|
| pm | Product Manager | /pm:prd, /pm:story, /pm:roadmap, /pm:priority | /pm:launch, /pm:discovery |
| da | Data Analyst | /da:query, /da:analyze, /da:report, /da:dashboard | /da:insight |
| de | Data Engineer | /de:pipeline, /de:schema, /de:etl, /de:quality | - |
| dev | Developer | /dev:implement, /dev:debug, /dev:refactor, /dev:review | /dev:feature, /dev:hotfix |
| fe | Frontend | /fe:component, /fe:style, /fe:state, /fe:a11y | - |
| be | Backend | /be:api, /be:model, /be:auth, /be:migrate | - |
| fs | Fullstack | /fs:feature, /fs:integrate, /fs:e2e | - |
| arch | Architect | /arch:design, /arch:adr, /arch:diagram, /arch:review | /arch:rfc |
| test | Tester | /test:unit, /test:e2e, /test:coverage, /test:plan | /test:regression |
| ops | DevOps | /ops:ci, /ops:docker, /ops:k8s, /ops:monitor | /ops:release, /ops:incident |
| sec | Security | /sec:audit, /sec:scan, /sec:pentest, /sec:compliance | /sec:hardening |
| docs | Tech Writer | /docs:api, /docs:guide, /docs:changelog, /docs:readme | - |
| ux | UX Designer | /ux:wireframe, /ux:flow, /ux:persona, /ux:audit | /ux:redesign |
| ai | AI Engineer | /ai:prompt, /ai:eval, /ai:rag, /ai:finetune | /ai:deploy |
| content | Content Writer | /content:blog, /content:seo, /content:copy, /content:social | /content:campaign |
| mkt | Marketing | /mkt:campaign, /mkt:funnel, /mkt:ads, /mkt:analytics | /mkt:gtm |
| sales | Sales Engineer | /sales:demo, /sales:proposal, /sales:objection, /sales:deck | /sales:deal |
| support | Support | /support:ticket, /support:kb, /support:escalate, /support:rca | /support:bug |
| proj | Project Manager | /proj:timeline, /proj:standup, /proj:risk, /proj:status | - |
| scrum | Scrum Master | /scrum:sprint, /scrum:retro, /scrum:backlog, /scrum:velocity | /scrum:kickoff |
| dba | Database Admin | /dba:optimize, /dba:backup, /dba:index, /dba:monitor | /dba:migration |
| mobile | Mobile Dev | /mobile:screen, /mobile:native, /mobile:push, /mobile:store | /mobile:launch |
| game | Game Dev | /game:mechanic, /game:asset, /game:physics, /game:balance | - |
| web3 | Blockchain | /web3:contract, /web3:audit, /web3:deploy, /web3:token | - |
| hr | HR Specialist | /hr:job, /hr:interview, /hr:onboard, /hr:review | /hr:hire, /hr:offboard |

### Role Workflows
Role workflows are multi-role commands that orchestrate several roles to complete complex tasks.
Example: `/dev:feature` coordinates PM → Arch → Dev → Test → Sec → Docs

### When showing role info:
1. Display the role's expertise and capabilities
2. List all role-specific commands with descriptions
3. Show available workflows for that role
4. Provide usage examples
