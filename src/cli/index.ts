/**
 * Tramy CLI - The Ultimate AI Productivity Toolkit for Claude Code
 */

import { Command } from 'commander';
import chalk from 'chalk';
import { setupCommand } from './commands/setup.js';
import { roleCommand } from './commands/role.js';
import { workflowCommand } from './commands/workflow.js';
import { listCommand } from './commands/list.js';
import { doctorCommand } from './commands/doctor.js';

const program = new Command();

program
  .name('tramy')
  .description('The Ultimate AI Productivity Toolkit for Claude Code')
  .version('1.0.0');

// Setup command
program.addCommand(setupCommand);

// Role management
program.addCommand(roleCommand);

// Workflow management
program.addCommand(workflowCommand);

// List resources
program.addCommand(listCommand);

// Doctor command
program.addCommand(doctorCommand);

// Add a nice banner for help
program.addHelpText('before', `
${chalk.cyan.bold('TRAMY')} - The Ultimate AI Productivity Toolkit for Claude Code

${chalk.dim('12 Professional Roles | 60+ Commands | 15 Workflows')}
`);

program.addHelpText('after', `
${chalk.dim('Examples:')}
  ${chalk.cyan('$')} tramy setup                   ${chalk.dim('# Interactive setup')}
  ${chalk.cyan('$')} tramy setup --yes             ${chalk.dim('# Quick setup with defaults')}
  ${chalk.cyan('$')} tramy role list               ${chalk.dim('# List available roles')}
  ${chalk.cyan('$')} tramy workflow list           ${chalk.dim('# List workflows')}

${chalk.dim('After setup, use slash commands in Claude Code:')}
  ${chalk.cyan('/pm:story')} "user authentication"
  ${chalk.cyan('/dev:feature')} "add dark mode"
  ${chalk.cyan('/workflow:feature')} "payment integration"

${chalk.dim('Documentation:')} ${chalk.underline('https://github.com/tramy-dev/tramy')}
`);

program.parse();
