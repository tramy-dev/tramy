/**
 * Context command - Manage project context for Tramy v2.0
 */

import { Command } from 'commander';
import fs from 'fs-extra';
import path from 'path';
import { logger, createSpinner } from '../utils/logger.js';
import {
  isInitialized,
  loadConfig,
  scanProject,
  generateClaudeMd,
} from '../../core/index.js';

export const contextCommand = new Command('context')
  .description('Manage project context')
  .action(async () => {
    const projectPath = process.cwd();

    if (!(await isInitialized(projectPath))) {
      logger.error('Tramy not initialized. Run "tramy setup" first.');
      process.exit(1);
    }

    const config = await loadConfig(projectPath);

    logger.header('Project Context');
    console.log();
    console.log(`  Project: ${config.project.name}`);
    console.log(`  Tech Stack: ${config.project.techStack.join(', ') || 'Not detected'}`);
    console.log(`  Default Role: ${config.defaultRole}`);
    console.log(`  Enabled Roles: ${config.roles.length}`);
    console.log();
  });

contextCommand
  .command('update')
  .description('Re-scan project and update CLAUDE.md')
  .action(async () => {
    const projectPath = process.cwd();

    if (!(await isInitialized(projectPath))) {
      logger.error('Tramy not initialized. Run "tramy setup" first.');
      process.exit(1);
    }

    const spinner = createSpinner('Scanning project...');
    spinner.start();

    try {
      const projectInfo = await scanProject(projectPath);
      const config = await loadConfig(projectPath);

      // Update config with new project info
      config.project = {
        name: projectInfo.name,
        description: projectInfo.description,
        techStack: projectInfo.techStack,
      };

      spinner.text = 'Generating CLAUDE.md...';
      const claudeMd = generateClaudeMd(projectInfo, config);
      await fs.writeFile(path.join(projectPath, 'CLAUDE.md'), claudeMd, 'utf-8');

      spinner.succeed('Context updated!');
      logger.info(`Detected tech stack: ${projectInfo.techStack.join(', ') || 'None'}`);
    } catch (error) {
      spinner.fail('Update failed');
      logger.error(error instanceof Error ? error.message : 'Unknown error');
      process.exit(1);
    }
  });
