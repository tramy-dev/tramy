/**
 * List command - List all resources
 */

import { Command } from 'commander';
import chalk from 'chalk';
import { logger } from '../utils/logger.js';
import { getAllRoles, getRoleByAlias } from '../../roles/index.js';
import { getAllWorkflows } from '../../workflows/index.js';

export const listCommand = new Command('commands')
  .description('List commands');

listCommand
  .command('list')
  .description('List all available commands')
  .option('-r, --role <role>', 'Filter by role alias')
  .action(async (options) => {
    const roles = getAllRoles();

    if (options.role) {
      const role = getRoleByAlias(options.role);

      if (!role) {
        logger.error(`Role not found: ${options.role}`);
        logger.info('Use "tramy role list" to see available roles');
        process.exit(1);
      }

      logger.header(`${role.name} Commands`);
      console.log();

      role.commands.forEach((cmd) => {
        const cmdStr = cmd.arguments
          ? `/${role.alias}:${cmd.name} <${cmd.arguments}>`
          : `/${role.alias}:${cmd.name}`;
        console.log(`  ${chalk.green(cmdStr.padEnd(40))} ${cmd.description}`);
      });

      console.log();
      return;
    }

    logger.header('All Commands');

    for (const role of roles) {
      console.log();
      console.log(chalk.bold.cyan(`${role.name} (/${role.alias}:*)`));

      role.commands.forEach((cmd) => {
        const cmdStr = cmd.arguments
          ? `/${role.alias}:${cmd.name} <${cmd.arguments}>`
          : `/${role.alias}:${cmd.name}`;
        console.log(`  ${chalk.green(cmdStr.padEnd(40))} ${cmd.description}`);
      });
    }

    // Workflows
    console.log();
    console.log(chalk.bold.magenta('Workflows (/workflow:*)'));

    const workflows = getAllWorkflows();
    workflows.forEach((wf) => {
      console.log(
        `  ${chalk.magenta(`/workflow:${wf.id}`.padEnd(40))} ${wf.description}`
      );
    });

    // Utilities
    console.log();
    console.log(chalk.bold.yellow('Utilities'));
    console.log(`  ${chalk.yellow('/tramy:help'.padEnd(40))} Show help`);
    console.log(`  ${chalk.yellow('/tramy:status'.padEnd(40))} Show current status`);
    console.log(`  ${chalk.yellow('/tramy:switch <role>'.padEnd(40))} Switch role`);
    console.log(`  ${chalk.yellow('/checkpoint:create [msg]'.padEnd(40))} Create checkpoint`);
    console.log(`  ${chalk.yellow('/checkpoint:restore [n]'.padEnd(40))} Restore checkpoint`);
    console.log(`  ${chalk.yellow('/checkpoint:list'.padEnd(40))} List checkpoints`);
    console.log(`  ${chalk.yellow('/git:commit'.padEnd(40))} Smart commit`);
    console.log(`  ${chalk.yellow('/git:pr'.padEnd(40))} Create PR`);
    console.log(`  ${chalk.yellow('/git:status'.padEnd(40))} Git status`);

    console.log();
  });
