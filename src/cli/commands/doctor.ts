/**
 * Doctor command - Check installation health for Tramy v2.0
 */

import { Command } from 'commander';
import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import { logger } from '../utils/logger.js';
import {
  isInitialized,
  loadConfig,
  getClaudeDir,
  getClaudeCommandsDir,
  getClaudeAgentsDir,
  getConfigPath,
} from '../../core/index.js';

export const doctorCommand = new Command('doctor')
  .description('Check Tramy installation health')
  .action(async () => {
    const projectPath = process.cwd();

    logger.header('Tramy v2.0 Health Check');
    console.log();

    let allGood = true;

    // Check initialization
    const initialized = await isInitialized(projectPath);
    if (initialized) {
      console.log(`  ${chalk.green('✓')} Tramy initialized`);
    } else {
      console.log(`  ${chalk.red('✗')} Tramy not initialized`);
      console.log(chalk.dim('    Run "tramy setup" to initialize'));
      allGood = false;
    }

    // Check config file
    const configPath = getConfigPath(projectPath);
    if (await fs.pathExists(configPath)) {
      console.log(`  ${chalk.green('✓')} Config file exists`);

      try {
        const config = await loadConfig(projectPath);
        console.log(`  ${chalk.green('✓')} Config is valid (v${config.version})`);
        console.log(chalk.dim(`    Project: ${config.project.name}`));
        console.log(chalk.dim(`    Default role: ${config.defaultRole}`));
        console.log(chalk.dim(`    Enabled roles: ${config.roles.length}`));
      } catch {
        console.log(`  ${chalk.red('✗')} Config is invalid`);
        allGood = false;
      }
    } else if (initialized) {
      console.log(`  ${chalk.yellow('!')} Config file missing`);
      allGood = false;
    }

    // Check CLAUDE.md
    const claudeMdPath = path.join(projectPath, 'CLAUDE.md');
    if (await fs.pathExists(claudeMdPath)) {
      console.log(`  ${chalk.green('✓')} CLAUDE.md exists`);
    } else {
      console.log(`  ${chalk.yellow('!')} CLAUDE.md missing`);
      console.log(chalk.dim('    Run "tramy context update" to regenerate'));
    }

    // Check Claude directory
    const claudeDir = getClaudeDir(projectPath);
    if (await fs.pathExists(claudeDir)) {
      console.log(`  ${chalk.green('✓')} .claude directory exists`);
    } else {
      console.log(`  ${chalk.red('✗')} .claude directory missing`);
      allGood = false;
    }

    // Check commands directory
    const commandsDir = getClaudeCommandsDir(projectPath);
    if (await fs.pathExists(commandsDir)) {
      const entries = await fs.readdir(commandsDir);
      console.log(`  ${chalk.green('✓')} Commands: ${entries.length} files`);
    } else {
      console.log(`  ${chalk.red('✗')} Commands directory missing`);
      allGood = false;
    }

    // Check agents directory
    const agentsDir = getClaudeAgentsDir(projectPath);
    if (await fs.pathExists(agentsDir)) {
      const entries = await fs.readdir(agentsDir);
      console.log(`  ${chalk.green('✓')} Agents: ${entries.length} roles`);
    } else {
      console.log(`  ${chalk.red('✗')} Agents directory missing`);
      allGood = false;
    }

    // Check Node.js version
    const nodeVersion = process.version;
    const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0], 10);
    if (majorVersion >= 18) {
      console.log(`  ${chalk.green('✓')} Node.js ${nodeVersion}`);
    } else {
      console.log(`  ${chalk.red('✗')} Node.js ${nodeVersion} (requires >= 18)`);
      allGood = false;
    }

    console.log();

    if (allGood) {
      logger.success('All checks passed!');
    } else {
      logger.warn('Some issues detected. Run "tramy setup" to fix.');
    }
  });
