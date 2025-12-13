/**
 * Workflow management commands
 */

import { Command } from 'commander';
import chalk from 'chalk';
import { logger } from '../utils/logger.js';
import { getAllWorkflows, getWorkflowById } from '../../workflows/index.js';

export const workflowCommand = new Command('workflow')
  .description('Manage workflows');

workflowCommand
  .command('list')
  .description('List all available workflows')
  .action(async () => {
    logger.header('Available Workflows');

    const workflows = getAllWorkflows();

    console.log();
    console.log(
      chalk.dim('  Name                 │ Description')
    );
    console.log(chalk.dim('  ' + '─'.repeat(60)));

    for (const workflow of workflows) {
      console.log(
        `  ${chalk.magenta(workflow.name.padEnd(19))} │ ${workflow.description}`
      );
      console.log(
        chalk.dim(`  ${' '.repeat(19)} │ Roles: ${workflow.roles.join(' → ')}`)
      );
    }

    console.log();
    logger.info('Use "/workflow:<name>" in Claude Code to run a workflow');
  });

workflowCommand
  .command('info <workflow>')
  .description('Show detailed information about a workflow')
  .action(async (workflowArg: string) => {
    const workflow = getWorkflowById(workflowArg);

    if (!workflow) {
      logger.error(`Workflow not found: ${workflowArg}`);
      logger.info('Use "tramy workflow list" to see available workflows');
      process.exit(1);
    }

    logger.header(workflow.name);

    console.log();
    console.log(chalk.dim('Description:'));
    console.log(`  ${workflow.description}`);

    console.log();
    console.log(chalk.dim('Roles Involved:'));
    console.log(`  ${workflow.roles.join(' → ')}`);

    console.log();
    console.log(chalk.dim('Phases:'));

    workflow.phases.forEach((phase, index) => {
      const roleStr = Array.isArray(phase.role)
        ? phase.role.join(' + ') + (phase.parallel ? ' (parallel)' : '')
        : phase.role;

      console.log();
      console.log(
        `  ${chalk.cyan(`${index + 1}.`)} ${chalk.bold(phase.name)} ${chalk.dim(`[${roleStr}]`)}`
      );

      phase.actions.forEach((action) => {
        console.log(`     ${chalk.dim('•')} ${action}`);
      });

      if (phase.qualityGate) {
        console.log(`     ${chalk.yellow('QUALITY GATE:')} ${phase.qualityGate}`);
      }

      if (phase.output) {
        console.log(`     ${chalk.dim('Output:')} ${phase.output}`);
      }
    });

    console.log();
    logger.info(`Run this workflow: /workflow:${workflow.id}`);
  });

workflowCommand
  .command('run <workflow>')
  .description('Show how to run a workflow (use in Claude Code)')
  .action(async (workflowArg: string) => {
    const workflow = getWorkflowById(workflowArg);

    if (!workflow) {
      logger.error(`Workflow not found: ${workflowArg}`);
      logger.info('Use "tramy workflow list" to see available workflows');
      process.exit(1);
    }

    logger.info(`To run the ${workflow.name} workflow, use in Claude Code:`);
    console.log();
    console.log(`  ${chalk.cyan(`/workflow:${workflow.id}`)} "your description"`);
    console.log();
  });
