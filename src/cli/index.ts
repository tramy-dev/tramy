/**
 * Tramy CLI v2.0 - The Ultimate AI Productivity Toolkit for Claude Code
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
  .description('The Ultimate AI Productivity Toolkit for Claude Code')
  .version('2.0.0');

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
${chalk.cyan.bold('TRAMY v2.0')} - The Ultimate AI Productivity Toolkit for Claude Code

${chalk.dim('14 Roles | 13 Commands | 1 Killer Feature (Data Analyst)')}
`);

program.addHelpText('after', `
${chalk.dim('Examples:')}
  ${chalk.cyan('$')} tramy setup              ${chalk.dim('# Interactive setup')}
  ${chalk.cyan('$')} tramy setup --yes        ${chalk.dim('# Quick setup with defaults')}
  ${chalk.cyan('$')} tramy list               ${chalk.dim('# List roles and commands')}
  ${chalk.cyan('$')} tramy context update     ${chalk.dim('# Re-scan and update CLAUDE.md')}
  ${chalk.cyan('$')} tramy doctor             ${chalk.dim('# Health check')}

${chalk.dim('After setup, use slash commands in Claude Code:')}
  ${chalk.green('/plan')} "add user authentication"
  ${chalk.green('/cook')} "dark mode toggle"
  ${chalk.cyan('/da:query')} "monthly revenue by category"
  ${chalk.cyan('/da:analyze')} "user churn patterns"
  ${chalk.yellow('/role')} be ${chalk.dim('# Switch to Backend Developer')}

${chalk.dim('Documentation:')} ${chalk.underline('https://github.com/tramy-dev/tramy')}
`);

program.parse();
