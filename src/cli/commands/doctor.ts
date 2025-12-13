/**
 * Doctor command - Check installation health
 */

import { Command } from 'commander';
import fs from 'fs-extra';
import chalk from 'chalk';
import { logger } from '../utils/logger.js';
import {
  isInitialized,
  loadConfig,
  getClaudeDir,
  getClaudeCommandsDir,
  getConfigPath,
} from '../../core/index.js';

export const doctorCommand = new Command('doctor')
  .description('Check Tramy installation health')
  .action(async () => {
    const projectPath = process.cwd();

    logger.header('Tramy Health Check');
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
        console.log(`  ${chalk.green('✓')} Config is valid`);
        console.log(chalk.dim(`    Mode: ${config.mode}`));
        console.log(chalk.dim(`    Default role: ${config.defaultRole}`));
        console.log(chalk.dim(`    Enabled roles: ${config.enabledRoles.length}`));
      } catch (error) {
        console.log(`  ${chalk.red('✗')} Config is invalid`);
        allGood = false;
      }
    } else if (initialized) {
      console.log(`  ${chalk.yellow('!')} Config file missing`);
      allGood = false;
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
      const commandCount = entries.length;
      console.log(`  ${chalk.green('✓')} Commands directory exists (${commandCount} items)`);
    } else {
      console.log(`  ${chalk.red('✗')} Commands directory missing`);
      allGood = false;
    }

    // Check Node.js version
    const nodeVersion = process.version;
    const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0], 10);
    if (majorVersion >= 18) {
      console.log(`  ${chalk.green('✓')} Node.js version: ${nodeVersion}`);
    } else {
      console.log(`  ${chalk.red('✗')} Node.js version: ${nodeVersion} (requires >= 18)`);
      allGood = false;
    }

    console.log();

    if (allGood) {
      logger.success('All checks passed!');
    } else {
      logger.warn('Some issues detected. Run "tramy setup" to fix.');
    }
  });
