/**
 * Setup command - Initialize Tramy in a project
 */

import { Command } from 'commander';
import prompts from 'prompts';
import fs from 'fs-extra';
import path from 'path';
import { logger, createSpinner } from '../utils/logger.js';
import {
  saveConfig,
  getConfigDir,
  getClaudeDir,
  getClaudeCommandsDir,
  getClaudeAgentsDir,
  getClaudeSettingsPath,
  isInitialized,
  DEFAULT_CONFIG,
  TramyConfig,
} from '../../core/index.js';
import { getAllRoles, getRoleById } from '../../roles/index.js';
import { generateAllCommandTemplates } from '../../commands/index.js';
import { generateAllWorkflowTemplates } from '../../workflows/index.js';

export const setupCommand = new Command('setup')
  .description('Initialize Tramy in your project')
  .option('-y, --yes', 'Use defaults without prompting')
  .option('--roles <roles>', 'Comma-separated list of roles to enable')
  .option('--mode <mode>', 'Mode: single-role or multi-role')
  .action(async (options) => {
    const projectPath = process.cwd();

    logger.header('Tramy Setup');

    // Check if already initialized
    if (await isInitialized(projectPath)) {
      const { overwrite } = await prompts({
        type: 'confirm',
        name: 'overwrite',
        message: 'Tramy is already initialized. Do you want to reinitialize?',
        initial: false,
      });

      if (!overwrite) {
        logger.info('Setup cancelled');
        return;
      }
    }

    let config: TramyConfig = { ...DEFAULT_CONFIG };

    // Interactive setup if not using defaults
    if (!options.yes) {
      const allRoles = getAllRoles();

      const answers = await prompts([
        {
          type: 'select',
          name: 'mode',
          message: 'Select mode',
          choices: [
            { title: 'Multi-role (recommended)', value: 'multi-role' },
            { title: 'Single-role', value: 'single-role' },
          ],
          initial: 0,
        },
        {
          type: 'multiselect',
          name: 'roles',
          message: 'Select roles to enable',
          choices: allRoles.map((role) => ({
            title: `${role.alias.padEnd(6)} - ${role.name}`,
            value: role.id,
            selected: true,
          })),
          min: 1,
        },
        {
          type: 'select',
          name: 'defaultRole',
          message: 'Select default role',
          choices: (prev: string[]) =>
            prev.map((roleId: string) => {
              const role = getRoleById(roleId);
              return {
                title: role ? `${role.alias} - ${role.name}` : roleId,
                value: roleId,
              };
            }),
        },
        {
          type: 'confirm',
          name: 'qualityGates',
          message: 'Enable quality gates?',
          initial: true,
        },
        {
          type: 'confirm',
          name: 'checkpoints',
          message: 'Enable auto-checkpoints?',
          initial: true,
        },
      ]);

      if (!answers.mode) {
        logger.info('Setup cancelled');
        return;
      }

      config = {
        ...config,
        mode: answers.mode,
        enabledRoles: answers.roles,
        defaultRole: answers.defaultRole,
        qualityGates: {
          enabled: answers.qualityGates,
          requireApproval: answers.qualityGates,
        },
        checkpoints: {
          enabled: answers.checkpoints,
          autoCreate: answers.checkpoints,
        },
      };
    }

    // Handle CLI options
    if (options.roles) {
      config.enabledRoles = options.roles.split(',').map((r: string) => r.trim());
    }
    if (options.mode) {
      config.mode = options.mode;
    }

    const spinner = createSpinner('Setting up Tramy...');
    spinner.start();

    try {
      // Create directories
      spinner.text = 'Creating directories...';
      await createDirectories(projectPath, config);

      // Save config
      spinner.text = 'Saving configuration...';
      await saveConfig(config, projectPath);

      // Generate command templates
      spinner.text = 'Generating command templates...';
      await generateCommandTemplates(projectPath, config);

      // Generate workflow templates
      spinner.text = 'Generating workflow templates...';
      await generateWorkflowTemplates(projectPath, config);

      // Generate agent templates
      spinner.text = 'Generating agent templates...';
      await generateAgentTemplates(projectPath, config);

      // Generate utility commands
      spinner.text = 'Generating utility commands...';
      await generateUtilityCommands(projectPath);

      // Update Claude settings
      spinner.text = 'Updating Claude settings...';
      await updateClaudeSettings(projectPath, config);

      spinner.succeed('Tramy setup complete!');

      logger.blank();
      logger.success('Tramy is ready to use!');
      logger.blank();
      logger.info('Try these commands in Claude Code:');
      logger.list([
        '/pm:story "your feature"     - Create user stories',
        '/dev:feature "your feature"  - Implement a feature',
        '/tramy:help                  - Show available commands',
        '/tramy:status                - Show current role',
      ]);
      logger.blank();
    } catch (error) {
      spinner.fail('Setup failed');
      logger.error(error instanceof Error ? error.message : 'Unknown error');
      process.exit(1);
    }
  });

async function createDirectories(projectPath: string, config: TramyConfig): Promise<void> {
  const dirs = [
    getConfigDir(projectPath),
    getClaudeDir(projectPath),
    getClaudeCommandsDir(projectPath),
    getClaudeAgentsDir(projectPath),
    path.join(projectPath, config.output.specs),
    path.join(projectPath, config.output.docs),
    path.join(projectPath, config.output.analysis),
    path.join(projectPath, config.output.reports),
  ];

  // Create role command directories
  const roles = getAllRoles();
  for (const role of roles) {
    if (config.enabledRoles.includes(role.id)) {
      dirs.push(path.join(getClaudeCommandsDir(projectPath), role.alias));
    }
  }

  // Create workflow and utility command directories
  dirs.push(path.join(getClaudeCommandsDir(projectPath), 'workflow'));
  dirs.push(path.join(getClaudeCommandsDir(projectPath), 'tramy'));
  dirs.push(path.join(getClaudeCommandsDir(projectPath), 'checkpoint'));
  dirs.push(path.join(getClaudeCommandsDir(projectPath), 'git'));

  for (const dir of dirs) {
    await fs.ensureDir(dir);
  }
}

async function generateCommandTemplates(
  projectPath: string,
  config: TramyConfig
): Promise<void> {
  const commandsDir = getClaudeCommandsDir(projectPath);
  const templates = generateAllCommandTemplates();

  for (const template of templates) {
    // Check if role is enabled
    const roleId = template.roleId;
    if (roleId && !config.enabledRoles.includes(roleId)) {
      continue;
    }

    const filePath = path.join(commandsDir, template.path);
    await fs.ensureDir(path.dirname(filePath));
    await fs.writeFile(filePath, template.content, 'utf-8');
  }
}

async function generateWorkflowTemplates(
  projectPath: string,
  _config: TramyConfig
): Promise<void> {
  const commandsDir = getClaudeCommandsDir(projectPath);
  const templates = generateAllWorkflowTemplates();

  for (const template of templates) {
    const filePath = path.join(commandsDir, 'workflow', template.path);
    await fs.ensureDir(path.dirname(filePath));
    await fs.writeFile(filePath, template.content, 'utf-8');
  }
}

async function generateAgentTemplates(
  projectPath: string,
  config: TramyConfig
): Promise<void> {
  const agentsDir = getClaudeAgentsDir(projectPath);
  const roles = getAllRoles();

  for (const role of roles) {
    if (!config.enabledRoles.includes(role.id)) {
      continue;
    }

    const content = generateAgentTemplate(role);
    const filePath = path.join(agentsDir, `${role.id}.md`);
    await fs.writeFile(filePath, content, 'utf-8');
  }
}

function generateAgentTemplate(role: { id: string; name: string; description: string; tools: string[] }): string {
  return `---
name: ${role.id}
description: ${role.description}
tools: ${role.tools.join(', ')}
---

You are acting as a **${role.name}**.

${role.description}

Follow the role-specific guidelines and best practices when completing tasks.
`;
}

async function generateUtilityCommands(projectPath: string): Promise<void> {
  const commandsDir = getClaudeCommandsDir(projectPath);

  // Tramy utility commands
  const tramyCommands = {
    'tramy/help.md': `# Tramy Help

Show available Tramy commands and workflows.

## Instructions

List all available commands grouped by role:

### Product Manager (/pm:*)
- /pm:prd - Create PRD
- /pm:story - Create user stories
- /pm:kpi - Define KPIs
- /pm:prioritize - Prioritize backlog
- /pm:roadmap - Create roadmap
- /pm:sprint - Plan sprint
- /pm:competitive - Competitive analysis

### Data Analyst (/da:*)
- /da:explore - Exploratory analysis
- /da:query - Write SQL query
- /da:visualize - Create visualization
- /da:report - Generate report
- /da:dashboard - Design dashboard
- /da:abtest - Analyze A/B test
- /da:profile - Data profiling

### Data Engineer (/de:*)
- /de:pipeline - Create ETL pipeline
- /de:schema - Design schema
- /de:migrate - Create migration
- /de:optimize - Optimize performance
- /de:orchestrate - Setup orchestration
- /de:quality - Data quality checks
- /de:model - Data modeling

### Developer (/dev:*)
- /dev:feature - Implement feature
- /dev:fix - Fix bug
- /dev:refactor - Refactor code
- /dev:api - Create API endpoint
- /dev:review - Code review
- /dev:optimize - Optimize performance
- /dev:debt - Address tech debt

### Frontend Developer (/fe:*)
- /fe:component - Create component
- /fe:page - Create page
- /fe:style - Add styling
- /fe:state - Setup state management
- /fe:a11y - Accessibility audit
- /fe:responsive - Make responsive
- /fe:optimize - Performance optimization

### Backend Developer (/be:*)
- /be:api - Create REST API
- /be:graphql - Create GraphQL schema
- /be:auth - Implement auth
- /be:cache - Setup caching
- /be:queue - Create job queue
- /be:service - Create microservice
- /be:optimize - Optimize endpoint

### Architect (/arch:*)
- /arch:design - System design
- /arch:adr - Create ADR
- /arch:evaluate - Evaluate technology
- /arch:scale - Scalability plan
- /arch:integrate - Integration design
- /arch:review - Architecture review
- /arch:diagram - Create diagram

### Tester (/test:*)
- /test:unit - Write unit tests
- /test:integration - Write integration tests
- /test:e2e - Write E2E tests
- /test:performance - Performance testing
- /test:coverage - Check coverage
- /test:run - Run test suite
- /test:report - Create bug report

### DevOps Engineer (/ops:*)
- /ops:ci - Setup CI pipeline
- /ops:cd - Setup CD pipeline
- /ops:infra - Create infrastructure
- /ops:docker - Dockerize service
- /ops:k8s - Kubernetes deployment
- /ops:monitor - Setup monitoring
- /ops:deploy - Deploy to environment

### Security Engineer (/sec:*)
- /sec:audit - Security audit
- /sec:scan - Vulnerability scan
- /sec:review - Secure code review
- /sec:pentest - Penetration test plan
- /sec:compliance - Compliance check
- /sec:incident - Incident response
- /sec:harden - Security hardening

### Technical Writer (/docs:*)
- /docs:api - Document API
- /docs:readme - Create/update README
- /docs:guide - Write user guide
- /docs:tutorial - Create tutorial
- /docs:changelog - Update changelog
- /docs:adr - Document ADR
- /docs:runbook - Create runbook

### UX Designer (/ux:*)
- /ux:research - User research
- /ux:wireframe - Create wireframe
- /ux:prototype - Design prototype
- /ux:review - Usability review
- /ux:system - Design system
- /ux:a11y - Accessibility review
- /ux:flow - User flow diagram

### Workflows (/workflow:*)
- /workflow:feature - Full feature development
- /workflow:pipeline - Data pipeline creation
- /workflow:api - API development
- /workflow:fix - Bug fix workflow
- /workflow:security - Security audit
- /workflow:release - Release workflow

### Utilities
- /tramy:help - Show this help
- /tramy:status - Show current status
- /tramy:switch - Switch role
- /checkpoint:create - Create checkpoint
- /checkpoint:restore - Restore checkpoint
- /git:commit - Smart commit
- /git:pr - Create PR
`,
    'tramy/status.md': `# Tramy Status

Show current Tramy status and active role.

## Instructions

Report the current status:

1. **Active Role**: The role currently being used
2. **Mode**: Single-role or multi-role
3. **Available Commands**: Commands available for the current role
4. **Recent Activity**: Summary of recent actions

If in a workflow, also show:
- Current workflow name
- Current phase
- Completed phases
- Next steps
`,
    'tramy/switch.md': `# Switch Role

Switch to a different role: $ARGUMENTS

## Instructions

Switch to the specified role and acknowledge the change.

### Available Roles:
- pm - Product Manager
- da - Data Analyst
- de - Data Engineer
- dev - Developer
- fe - Frontend Developer
- be - Backend Developer
- arch - Architect
- test - Tester
- ops - DevOps Engineer
- sec - Security Engineer
- docs - Technical Writer
- ux - UX Designer

When switching, acknowledge:
1. The new role you're now acting as
2. The capabilities available in this role
3. Any relevant context from previous work
`,
    'checkpoint/create.md': `# Create Checkpoint

Create a checkpoint: $ARGUMENTS

## Instructions

Create a Git checkpoint (commit) with the provided message.

1. Stage all changed files
2. Create a commit with the message
3. Tag the commit if this is a significant milestone

Report what was checkpointed.
`,
    'checkpoint/restore.md': `# Restore Checkpoint

Restore to checkpoint: $ARGUMENTS

## Instructions

Restore to a previous checkpoint.

1. List recent checkpoints if no argument provided
2. Confirm before restoring
3. Perform the restore (git checkout or reset)
4. Report the restored state
`,
    'checkpoint/list.md': `# List Checkpoints

List available checkpoints.

## Instructions

Show recent Git commits that serve as checkpoints:

1. List the last 10 commits
2. Show commit hash, message, and timestamp
3. Highlight any tagged commits
`,
    'git/commit.md': `# Smart Git Commit

Create a smart commit based on current changes.

## Instructions

1. Run \`git status\` to see changes
2. Run \`git diff\` to understand the changes
3. Generate a meaningful commit message based on:
   - Type of change (feat, fix, refactor, docs, test, chore)
   - Scope of change
   - Brief description
4. Stage appropriate files
5. Create the commit

Follow conventional commit format:
\`type(scope): description\`
`,
    'git/pr.md': `# Create Pull Request

Create a pull request for current changes.

## Instructions

1. Ensure all changes are committed
2. Push to remote if needed
3. Create PR with:
   - Descriptive title
   - Summary of changes
   - Test plan
   - Related issues

Use \`gh pr create\` command.
`,
    'git/status.md': `# Git Status

Show current Git status.

## Instructions

Run \`git status\` and present:
1. Current branch
2. Staged changes
3. Unstaged changes
4. Untracked files
5. Ahead/behind status
`,
  };

  for (const [filePath, content] of Object.entries(tramyCommands)) {
    const fullPath = path.join(commandsDir, filePath);
    await fs.ensureDir(path.dirname(fullPath));
    await fs.writeFile(fullPath, content, 'utf-8');
  }
}

async function updateClaudeSettings(
  projectPath: string,
  _config: TramyConfig
): Promise<void> {
  const settingsPath = getClaudeSettingsPath(projectPath);

  let settings: Record<string, unknown> = {};

  if (await fs.pathExists(settingsPath)) {
    const content = await fs.readFile(settingsPath, 'utf-8');
    try {
      settings = JSON.parse(content);
    } catch {
      // Invalid JSON, start fresh
    }
  }

  // We don't add hooks by default to avoid conflicts
  // Users can enable hooks manually in .claude/settings.json

  await fs.writeFile(settingsPath, JSON.stringify(settings, null, 2), 'utf-8');
}
