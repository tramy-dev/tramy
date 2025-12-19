/**
 * Setup command - Initialize DA Toolkit in a project
 *
 * Two modes:
 * 1. `tramy setup` - Default: only generate CLAUDE.md with 6 core commands
 * 2. `tramy setup da` - DA mode: generate full toolkit with folders and DA commands
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
  scanProject,
  generateClaudeMd,
  generateClaudeMdDefault,
  generateAgentTemplates,
  generateDACommandTemplates,
  generateCoreCommandTemplates,
  getRoleByAlias,
} from '../../core/index.js';

export const setupCommand = new Command('setup')
  .description('Initialize DA Toolkit in your project')
  .argument('[role]', 'Role alias to setup (e.g., da)')
  .option('-y, --yes', 'Use defaults without prompting')
  .action(async (role: string | undefined, options) => {
    const projectPath = process.cwd();

    // Determine mode
    const isRoleMode = role !== undefined;
    const selectedRole = isRoleMode ? getRoleByAlias(role) : null;

    if (isRoleMode && !selectedRole) {
      logger.error(`Unknown role: ${role}`);
      logger.info('Available roles: da (Data Analyst)');
      process.exit(1);
    }

    // Currently only DA role is fully supported
    if (isRoleMode && selectedRole?.alias !== 'da') {
      logger.error(`Role "${role}" is not yet supported.`);
      logger.info('Currently supported: da (Data Analyst)');
      process.exit(1);
    }

    const modeName = isRoleMode ? `DA Toolkit (${selectedRole?.name})` : 'DA Toolkit (Core)';
    logger.header(`${modeName} v3.0 Setup`);

    // Check if already initialized
    if (await isInitialized(projectPath)) {
      if (!options.yes) {
        const { overwrite } = await prompts({
          type: 'confirm',
          name: 'overwrite',
          message: 'DA Toolkit is already initialized. Reinitialize?',
          initial: false,
        });

        if (!overwrite) {
          logger.info('Setup cancelled');
          return;
        }
      }
    }

    const spinner = createSpinner('Scanning project...');
    spinner.start();

    try {
      // Scan project
      const projectInfo = await scanProject(projectPath);
      spinner.text = 'Project scanned';

      // Configure based on mode
      const config: TramyConfig = {
        ...DEFAULT_CONFIG,
        project: {
          name: projectInfo.name,
          description: projectInfo.description,
          techStack: projectInfo.techStack,
        },
        roles: isRoleMode ? [selectedRole!.id] : DEFAULT_CONFIG.roles,
        defaultRole: isRoleMode ? selectedRole!.id : 'data-analyst',
      };

      spinner.stop();

      // Show detected info
      logger.blank();
      logger.info(`Project: ${projectInfo.name}`);
      if (projectInfo.techStack.length > 0) {
        logger.info(`Tech stack: ${projectInfo.techStack.join(', ')}`);
      }
      logger.blank();

      spinner.start();

      if (isRoleMode) {
        // === ROLE MODE (DA) ===
        spinner.text = 'Creating directories...';
        await createDirectoriesForRole(projectPath, config);

        spinner.text = 'Saving configuration...';
        await saveConfig(config, projectPath);

        spinner.text = 'Generating CLAUDE.md...';
        const claudeMd = generateClaudeMd(projectInfo, config);
        await fs.writeFile(path.join(projectPath, 'CLAUDE.md'), claudeMd, 'utf-8');

        spinner.text = 'Generating agent templates...';
        await generateAgentTemplates(projectPath, config);

        spinner.text = 'Generating DA command templates...';
        await generateDACommandTemplates(projectPath);

        spinner.text = 'Creating Claude settings...';
        await createClaudeSettings(projectPath);

        spinner.succeed('DA Toolkit setup complete!');

        // Show DA mode info
        logger.blank();
        logger.success('DA Toolkit is ready!');
        logger.blank();
        logger.info('6 DA commands installed');
        logger.blank();
        logger.info('DA Commands:');
        logger.list([
          '/da:query     - Write optimized SQL queries',
          '/da:analyze   - Exploratory data analysis',
          '/da:clean     - Clean data (raw → processed)',
          '/da:report    - Generate analysis reports',
          '/da:dashboard - Design BI dashboards',
          '/da:notebook  - Create Jupyter notebooks',
        ]);
        logger.blank();
        logger.info('Directories created:');
        logger.list([
          'data/raw/       - Raw data files',
          'data/processed/ - Processed data files',
          'analysis/       - Analysis outputs',
          'reports/        - Generated reports',
          'notebooks/      - Jupyter notebooks',
        ]);
      } else {
        // === DEFAULT MODE (Core only) ===
        spinner.text = 'Creating directories...';
        await createDirectoriesDefault(projectPath);

        spinner.text = 'Saving configuration...';
        await saveConfig(config, projectPath);

        spinner.text = 'Generating CLAUDE.md...';
        const claudeMd = generateClaudeMdDefault(projectInfo, config);
        await fs.writeFile(path.join(projectPath, 'CLAUDE.md'), claudeMd, 'utf-8');

        spinner.text = 'Generating core commands...';
        await generateCoreCommandTemplates(projectPath);

        spinner.text = 'Creating Claude settings...';
        await createClaudeSettings(projectPath);

        spinner.succeed('DA Toolkit (Core) setup complete!');

        // Show default mode info
        logger.blank();
        logger.success('DA Toolkit is ready!');
        logger.blank();
        logger.info('6 core commands installed');
        logger.blank();
        logger.info('Core Commands:');
        logger.list([
          '/analyze   - Explore and understand data/problems',
          '/plan      - Create detailed analysis plan',
          '/build     - Implement SQL, Python, notebooks',
          '/test      - Validate data quality and results',
          '/doc       - Generate documentation and reports',
          '/commit    - Git commit with proper message',
        ]);
        logger.blank();
        logger.info('25 roles available. To enable role-specific commands:');
        logger.info('  tramy setup da   # Setup Data Analyst toolkit');
      }

      logger.blank();
      if (isRoleMode) {
        logger.info('Workflow: /da:query → /da:analyze → /da:report');
      } else {
        logger.info('Workflow: /analyze → /plan → /build → /test → /doc → /commit');
      }
      logger.blank();
    } catch (error) {
      spinner.fail('Setup failed');
      logger.error(error instanceof Error ? error.message : 'Unknown error');
      process.exit(1);
    }
  });

async function createDirectoriesDefault(projectPath: string): Promise<void> {
  const commandsDir = getClaudeCommandsDir(projectPath);

  const dirs = [
    getConfigDir(projectPath),
    getClaudeDir(projectPath),
    commandsDir,
  ];

  for (const dir of dirs) {
    await fs.ensureDir(dir);
  }
}

async function createDirectoriesForRole(projectPath: string, config: TramyConfig): Promise<void> {
  const commandsDir = getClaudeCommandsDir(projectPath);

  const dirs = [
    getConfigDir(projectPath),
    getClaudeDir(projectPath),
    commandsDir,
    getClaudeAgentsDir(projectPath),
    path.join(commandsDir, 'da'),
    // Output directories
    path.join(projectPath, config.output.analysis),
    path.join(projectPath, config.output.reports),
    path.join(projectPath, config.output.notebooks),
    // Data directories
    path.join(projectPath, config.data.raw),
    path.join(projectPath, config.data.processed),
  ];

  for (const dir of dirs) {
    await fs.ensureDir(dir);
  }

  // Create .gitkeep files for empty data directories
  const gitkeepDirs = [
    path.join(projectPath, config.data.raw),
    path.join(projectPath, config.data.processed),
  ];

  for (const dir of gitkeepDirs) {
    const gitkeepPath = path.join(dir, '.gitkeep');
    if (!await fs.pathExists(gitkeepPath)) {
      await fs.writeFile(gitkeepPath, '', 'utf-8');
    }
  }
}

async function createClaudeSettings(projectPath: string): Promise<void> {
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

  // Add hook to auto-inject CLAUDE.md context on every prompt
  settings.hooks = {
    UserPromptSubmit: [
      {
        matcher: '*',
        hooks: [
          {
            type: 'command',
            command: 'cat CLAUDE.md 2>/dev/null || echo "Run: tramy setup"',
          },
        ],
      },
    ],
  };

  await fs.writeFile(settingsPath, JSON.stringify(settings, null, 2), 'utf-8');
}
