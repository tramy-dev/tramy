/**
 * Setup command - Initialize Tramy v2.0 in a project
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
  getAllRoles,
  getRoleById,
  scanProject,
  generateClaudeMd,
  generateAgentTemplates,
  generateCommandTemplates,
} from '../../core/index.js';

export const setupCommand = new Command('setup')
  .description('Initialize Tramy v2.0 in your project')
  .option('-y, --yes', 'Use defaults without prompting')
  .action(async (options) => {
    const projectPath = process.cwd();

    logger.header('Tramy v2.0 Setup');

    // Check if already initialized
    if (await isInitialized(projectPath)) {
      if (!options.yes) {
        const { overwrite } = await prompts({
          type: 'confirm',
          name: 'overwrite',
          message: 'Tramy is already initialized. Reinitialize?',
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

      let config: TramyConfig = {
        ...DEFAULT_CONFIG,
        project: {
          name: projectInfo.name,
          description: projectInfo.description,
          techStack: projectInfo.techStack,
        },
      };

      spinner.stop();

      // Interactive setup if not using defaults
      if (!options.yes) {
        logger.blank();
        logger.info(`Detected project: ${projectInfo.name}`);
        if (projectInfo.techStack.length > 0) {
          logger.info(`Tech stack: ${projectInfo.techStack.join(', ')}`);
        }
        logger.blank();

        const allRoles = getAllRoles();

        const answers = await prompts([
          {
            type: 'multiselect',
            name: 'roles',
            message: 'Select roles to enable (all recommended)',
            choices: allRoles.map((role) => ({
              title: `${role.alias.padEnd(5)} ${role.name}`,
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
        ]);

        if (!answers.roles) {
          logger.info('Setup cancelled');
          return;
        }

        config = {
          ...config,
          roles: answers.roles,
          defaultRole: answers.defaultRole,
        };
      }

      spinner.start();
      spinner.text = 'Creating directories...';

      // Create directories
      await createDirectories(projectPath, config);

      // Save config
      spinner.text = 'Saving configuration...';
      await saveConfig(config, projectPath);

      // Generate CLAUDE.md
      spinner.text = 'Generating CLAUDE.md...';
      const claudeMd = generateClaudeMd(projectInfo, config);
      await fs.writeFile(path.join(projectPath, 'CLAUDE.md'), claudeMd, 'utf-8');

      // Generate agent templates
      spinner.text = 'Generating agent templates...';
      await generateAgentTemplates(projectPath, config);

      // Generate command templates
      spinner.text = 'Generating command templates...';
      await generateCommandTemplates(projectPath);

      // Create Claude settings
      spinner.text = 'Creating Claude settings...';
      await createClaudeSettings(projectPath);

      spinner.succeed('Tramy v2.0 setup complete!');

      logger.blank();
      logger.success('Tramy is ready!');
      logger.blank();
      logger.info('Core commands (use with any role):');
      logger.list([
        '/plan <desc>    - Create detailed plan',
        '/cook <desc>    - Plan + implement',
        '/fix <issue>    - Fix bugs',
        '/test [scope]   - Run tests',
        '/commit [msg]   - Smart git commit',
      ]);
      logger.blank();
      logger.info('Data Analyst commands:');
      logger.list([
        '/da:query       - Write SQL from question',
        '/da:analyze     - Auto-detect analysis type',
        '/da:report      - Full report + notebook',
      ]);
      logger.blank();
      logger.info('Switch roles: /role <alias> (pm, da, de, dev, fe, be, fs, arch, test, ops, sec, docs, ux, ai)');
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
    path.join(getClaudeCommandsDir(projectPath), 'da'),
    path.join(projectPath, config.output.analysis),
    path.join(projectPath, config.output.reports),
    path.join(projectPath, config.output.notebooks),
  ];

  for (const dir of dirs) {
    await fs.ensureDir(dir);
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
