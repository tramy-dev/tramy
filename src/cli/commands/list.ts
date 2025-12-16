/**
 * List command - List all roles and commands for Tramy v2.0
 */

import { Command } from 'commander';
import chalk from 'chalk';
import { logger } from '../utils/logger.js';
import { getAllRoles } from '../../core/index.js';

export const listCommand = new Command('list')
  .description('List roles and commands')
  .action(async () => {
    logger.header('Tramy v2.0 - The Ultimate AI Productivity Toolkit');

    // Stats
    console.log();
    console.log(chalk.bold.white('📊 Statistics'));
    console.log(`  ${chalk.dim('Core Commands:')} ${chalk.white('6')} multi-role workflows`);
    console.log(`  ${chalk.dim('Roles:')} ${chalk.white('25')} specialized roles`);
    console.log(`  ${chalk.dim('Role Commands:')} ${chalk.white('131')} commands + workflows`);
    console.log(`  ${chalk.dim('Total:')} ${chalk.bold.green('137')} commands available`);

    // Core commands
    console.log();
    console.log(chalk.bold.green('🚀 Core Commands (always available)'));
    console.log(`  ${chalk.green('/plan <desc>'.padEnd(28))} Planning workflow (PM → Arch → role)`);
    console.log(`  ${chalk.green('/build <desc>'.padEnd(28))} Build feature (PM → Dev → Test → Docs)`);
    console.log(`  ${chalk.green('/fix <issue>'.padEnd(28))} Fix bugs with RCA (Support → Dev → Test)`);
    console.log(`  ${chalk.green('/review <scope>'.padEnd(28))} Code review + security (Dev → Sec → Test)`);
    console.log(`  ${chalk.green('/ship <version>'.padEnd(28))} Deploy + announce (Test → Ops → Mkt)`);
    console.log(`  ${chalk.green('/use <alias>'.padEnd(28))} Show role info & commands`);

    // Role commands info
    console.log();
    console.log(chalk.bold.cyan('💼 Role Commands'));
    console.log(chalk.dim('  All role commands are available. Use /use <alias> for role info.'));
    console.log();
    console.log(`  ${chalk.cyan('Pattern:'.padEnd(28))} /<role>:<command>`);
    console.log(`  ${chalk.cyan('Example:'.padEnd(28))} /da:query, /fe:component, /ops:ci`);

    // Roles
    console.log();
    console.log(chalk.bold.yellow('👥 25 Available Roles'));
    console.log();

    const roles = getAllRoles();
    const third = Math.ceil(roles.length / 3);

    for (let i = 0; i < third; i++) {
      const role1 = roles[i];
      const role2 = roles[i + third];
      const role3 = roles[i + third * 2];

      const col1 = `  ${chalk.yellow(role1.alias.padEnd(8))} ${role1.name.padEnd(18)}`;
      const col2 = role2 ? `${chalk.yellow(role2.alias.padEnd(8))} ${role2.name.padEnd(18)}` : '';
      const col3 = role3 ? `${chalk.yellow(role3.alias.padEnd(8))} ${role3.name}` : '';

      console.log(col1 + col2 + col3);
    }

    // Install info
    console.log();
    console.log(chalk.bold.magenta('📦 Installation'));
    console.log(`  ${chalk.magenta('npm:'.padEnd(28))} npm install -g tramy && tramy setup`);
    console.log(`  ${chalk.magenta('plugin:'.padEnd(28))} /plugin marketplace add tramy-dev/tramy`);
    console.log(`  ${chalk.dim(''.padEnd(28))} /plugin install tramy@tramy`);
    console.log();
  });
