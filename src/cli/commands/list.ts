/**
 * List command - List all commands for DA Toolkit
 */

import { Command } from 'commander';
import chalk from 'chalk';
import { logger } from '../utils/logger.js';

export const listCommand = new Command('list')
  .description('List all DA Toolkit commands')
  .action(async () => {
    logger.header('DA Toolkit v3.0 - Data Analyst Toolkit for Claude Code');

    // Stats
    console.log();
    console.log(chalk.bold.white('Statistics'));
    console.log(`  ${chalk.dim('Core Commands:')} ${chalk.white('6')}`);
    console.log(`  ${chalk.dim('DA Commands:')} ${chalk.white('5')}`);
    console.log(`  ${chalk.dim('Total:')} ${chalk.bold.green('11')} commands`);

    // Core commands
    console.log();
    console.log(chalk.bold.green('Core Commands'));
    console.log(`  ${chalk.green('/analyze'.padEnd(20))} Explore and understand data/problems`);
    console.log(`  ${chalk.green('/plan'.padEnd(20))} Create detailed analysis plan`);
    console.log(`  ${chalk.green('/build'.padEnd(20))} Implement SQL, Python, notebooks`);
    console.log(`  ${chalk.green('/test'.padEnd(20))} Validate data quality and results`);
    console.log(`  ${chalk.green('/doc'.padEnd(20))} Generate documentation and reports`);
    console.log(`  ${chalk.green('/commit'.padEnd(20))} Git commit with proper message`);

    // DA commands
    console.log();
    console.log(chalk.bold.cyan('DA Commands'));
    console.log(`  ${chalk.cyan('/da:query'.padEnd(20))} Write optimized SQL queries`);
    console.log(`  ${chalk.cyan('/da:analyze'.padEnd(20))} Exploratory data analysis`);
    console.log(`  ${chalk.cyan('/da:report'.padEnd(20))} Generate analysis reports`);
    console.log(`  ${chalk.cyan('/da:dashboard'.padEnd(20))} Design BI dashboards`);
    console.log(`  ${chalk.cyan('/da:notebook'.padEnd(20))} Create Jupyter notebooks`);

    // Workflow
    console.log();
    console.log(chalk.bold.yellow('Recommended Workflow'));
    console.log(`  ${chalk.yellow('/analyze')} → ${chalk.yellow('/plan')} → ${chalk.yellow('/build')} → ${chalk.yellow('/test')} → ${chalk.yellow('/doc')} → ${chalk.yellow('/commit')}`);

    // Examples
    console.log();
    console.log(chalk.bold.magenta('Examples'));
    console.log(`  ${chalk.magenta('/analyze'.padEnd(20))} monthly revenue trends`);
    console.log(`  ${chalk.magenta('/da:query'.padEnd(20))} top 10 customers by LTV`);
    console.log(`  ${chalk.magenta('/da:report'.padEnd(20))} Q1 sales analysis`);
    console.log(`  ${chalk.magenta('/da:notebook'.padEnd(20))} customer churn analysis`);
    console.log();
  });
