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
    logger.header('Tramy v2.0 - Roles & Commands');

    // Core commands
    console.log();
    console.log(chalk.bold.green('Core Commands (use with any role)'));
    console.log(`  ${chalk.green('/plan <desc>'.padEnd(30))} Create detailed plan`);
    console.log(`  ${chalk.green('/cook <desc>'.padEnd(30))} Plan and implement`);
    console.log(`  ${chalk.green('/fix <issue>'.padEnd(30))} Fix bugs`);
    console.log(`  ${chalk.green('/test [scope]'.padEnd(30))} Run tests`);
    console.log(`  ${chalk.green('/commit [msg]'.padEnd(30))} Smart git commit`);

    // DA commands
    console.log();
    console.log(chalk.bold.cyan('Data Analyst Commands'));
    console.log(`  ${chalk.cyan('/da:query'.padEnd(30))} Write SQL from question`);
    console.log(`  ${chalk.cyan('/da:analyze'.padEnd(30))} Auto-detect analysis type`);
    console.log(`  ${chalk.cyan('/da:report'.padEnd(30))} Generate full report`);
    console.log(`  ${chalk.cyan('/da:dashboard'.padEnd(30))} Design dashboard`);
    console.log(`  ${chalk.cyan('/da:bi <tool>'.padEnd(30))} BI tools (superset/metabase/...)`);
    console.log(`  ${chalk.cyan('/da:notebook'.padEnd(30))} Create Jupyter notebook`);
    console.log(`  ${chalk.cyan('/da:profile'.padEnd(30))} Data profiling`);
    console.log(`  ${chalk.cyan('/da:sql'.padEnd(30))} Advanced SQL patterns`);

    // Roles
    console.log();
    console.log(chalk.bold.yellow('Roles (14)'));
    console.log(chalk.dim('  Switch with /role <alias> or mention in conversation'));
    console.log();

    const roles = getAllRoles();
    const half = Math.ceil(roles.length / 2);

    for (let i = 0; i < half; i++) {
      const role1 = roles[i];
      const role2 = roles[i + half];

      const col1 = `  ${chalk.yellow(role1.alias.padEnd(5))} ${role1.name.padEnd(20)}`;
      const col2 = role2 ? `${chalk.yellow(role2.alias.padEnd(5))} ${role2.name}` : '';

      console.log(col1 + col2);
    }

    console.log();
  });
