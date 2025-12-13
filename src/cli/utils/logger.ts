/**
 * Logger utilities for CLI output
 */

import chalk from 'chalk';
import ora, { Ora } from 'ora';

export const logger = {
  info: (message: string) => {
    console.log(chalk.blue('info') + ' ' + message);
  },

  success: (message: string) => {
    console.log(chalk.green('success') + ' ' + message);
  },

  warn: (message: string) => {
    console.log(chalk.yellow('warn') + ' ' + message);
  },

  error: (message: string) => {
    console.log(chalk.red('error') + ' ' + message);
  },

  log: (message: string) => {
    console.log(message);
  },

  blank: () => {
    console.log();
  },

  header: (message: string) => {
    console.log();
    console.log(chalk.bold.cyan(message));
    console.log(chalk.dim('─'.repeat(50)));
  },

  list: (items: string[]) => {
    items.forEach((item) => {
      console.log(chalk.dim('  •') + ' ' + item);
    });
  },

  table: (rows: [string, string][]) => {
    const maxKeyLength = Math.max(...rows.map(([key]) => key.length));
    rows.forEach(([key, value]) => {
      console.log(`  ${chalk.dim(key.padEnd(maxKeyLength))}  ${value}`);
    });
  },
};

export function createSpinner(text: string): Ora {
  return ora({
    text,
    color: 'cyan',
  });
}

export function formatRole(alias: string, name: string): string {
  return `${chalk.cyan(alias.padEnd(6))} ${chalk.dim('│')} ${name}`;
}

export function formatCommand(command: string, description: string): string {
  return `${chalk.green(command.padEnd(30))} ${description}`;
}

export function formatWorkflow(name: string, description: string, roles: string[]): string {
  return `${chalk.magenta(name.padEnd(20))} ${description}\n${chalk.dim('  Roles: ' + roles.join(' → '))}`;
}
