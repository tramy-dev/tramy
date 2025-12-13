/**
 * Role management commands
 */

import { Command } from 'commander';
import chalk from 'chalk';
import { logger } from '../utils/logger.js';
import { getAllRoles, getRoleByAlias, getRoleById } from '../../roles/index.js';
import { loadConfig, isInitialized } from '../../core/index.js';

export const roleCommand = new Command('role')
  .description('Manage roles');

roleCommand
  .command('list')
  .description('List all available roles')
  .action(async () => {
    const projectPath = process.cwd();

    logger.header('Available Roles');

    const allRoles = getAllRoles();
    let enabledRoles: string[] = [];

    if (await isInitialized(projectPath)) {
      const config = await loadConfig(projectPath);
      enabledRoles = config.enabledRoles;
    }

    console.log();
    console.log(
      chalk.dim('  Alias  │ Name                    │ Status')
    );
    console.log(chalk.dim('  ' + '─'.repeat(50)));

    for (const role of allRoles) {
      const isEnabled = enabledRoles.length === 0 || enabledRoles.includes(role.id);
      const status = isEnabled ? chalk.green('enabled') : chalk.dim('disabled');
      console.log(
        `  ${chalk.cyan(role.alias.padEnd(5))} │ ${role.name.padEnd(23)} │ ${status}`
      );
    }

    console.log();
    logger.info('Use "tramy role info <alias>" for role details');
  });

roleCommand
  .command('info <role>')
  .description('Show detailed information about a role')
  .action(async (roleArg: string) => {
    const role = getRoleByAlias(roleArg) || getRoleById(roleArg);

    if (!role) {
      logger.error(`Role not found: ${roleArg}`);
      logger.info('Use "tramy role list" to see available roles');
      process.exit(1);
    }

    logger.header(`${role.name} (${role.alias})`);

    console.log();
    console.log(chalk.dim('Description:'));
    console.log(`  ${role.description}`);

    console.log();
    console.log(chalk.dim('Tools:'));
    console.log(`  ${role.tools.join(', ')}`);

    console.log();
    console.log(chalk.dim('Capabilities:'));
    role.capabilities.forEach((cap) => {
      console.log(`  ${chalk.dim('•')} ${cap}`);
    });

    console.log();
    console.log(chalk.dim('Commands:'));
    role.commands.forEach((cmd) => {
      const cmdStr = cmd.arguments
        ? `/${role.alias}:${cmd.name} <${cmd.arguments}>`
        : `/${role.alias}:${cmd.name}`;
      console.log(`  ${chalk.green(cmdStr.padEnd(35))} ${cmd.description}`);
    });

    console.log();
  });

roleCommand
  .command('switch <role>')
  .description('Switch to a different role (for documentation)')
  .action(async (roleArg: string) => {
    const role = getRoleByAlias(roleArg) || getRoleById(roleArg);

    if (!role) {
      logger.error(`Role not found: ${roleArg}`);
      logger.info('Use "tramy role list" to see available roles');
      process.exit(1);
    }

    logger.success(`Switched to ${role.name} (${role.alias})`);
    logger.info('In Claude Code, use /tramy:switch to switch roles dynamically');
  });
