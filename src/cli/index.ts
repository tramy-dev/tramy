/**
 * DA Toolkit CLI - Data Analyst Toolkit for Claude Code
 */

import { Command } from 'commander';
import chalk from 'chalk';
import { setupCommand } from './commands/setup.js';
import { listCommand } from './commands/list.js';
import { doctorCommand } from './commands/doctor.js';
import { contextCommand } from './commands/context.js';

const program = new Command();

program
  .name('tramy')
  .description('DA Toolkit - Data Analyst Toolkit for Claude Code')
  .version('3.0.0');

// Setup command
program.addCommand(setupCommand);

// List roles and commands
program.addCommand(listCommand);

// Context management
program.addCommand(contextCommand);

// Doctor command
program.addCommand(doctorCommand);

// Add a nice banner for help
program.addHelpText('before', `
${chalk.cyan.bold('DA Toolkit v3.0')} - Data Analyst Toolkit for Claude Code

${chalk.dim('6 Core Commands | 5 DA Commands | 11 Total')}
`);

program.addHelpText('after', `
${chalk.dim('Examples:')}
  ${chalk.cyan('$')} tramy setup              ${chalk.dim('# Initialize DA Toolkit')}
  ${chalk.cyan('$')} tramy setup --yes        ${chalk.dim('# Quick setup')}
  ${chalk.cyan('$')} tramy list               ${chalk.dim('# List all commands')}
  ${chalk.cyan('$')} tramy context update     ${chalk.dim('# Update CLAUDE.md')}
  ${chalk.cyan('$')} tramy doctor             ${chalk.dim('# Health check')}

${chalk.dim('After setup, use slash commands in Claude Code:')}
  ${chalk.green('/analyze')} "monthly revenue trends"
  ${chalk.green('/plan')} "build customer segmentation"
  ${chalk.cyan('/da:query')} "top 10 products by sales"
  ${chalk.cyan('/da:report')} "Q1 performance analysis"
  ${chalk.cyan('/da:notebook')} "churn prediction model"

${chalk.dim('Workflow:')}
  /analyze → /plan → /build → /test → /doc → /commit

${chalk.dim('Documentation:')} ${chalk.underline('https://github.com/tramy-dev/tramy')}
`);

program.parse();
