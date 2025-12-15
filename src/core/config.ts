/**
 * Configuration management for Tramy v2.0
 */

import fs from 'fs-extra';
import path from 'path';
import yaml from 'yaml';
import { TramyConfig, DEFAULT_CONFIG } from './types.js';

const CONFIG_DIR = '.tramy';
const CONFIG_FILE = 'config.yaml';

/**
 * Get the path to the config directory
 */
export function getConfigDir(projectPath: string = process.cwd()): string {
  return path.join(projectPath, CONFIG_DIR);
}

/**
 * Get the path to the config file
 */
export function getConfigPath(projectPath: string = process.cwd()): string {
  return path.join(getConfigDir(projectPath), CONFIG_FILE);
}

/**
 * Check if Tramy is initialized in the project
 */
export async function isInitialized(projectPath: string = process.cwd()): Promise<boolean> {
  return fs.pathExists(getConfigPath(projectPath));
}

/**
 * Load the Tramy configuration
 */
export async function loadConfig(projectPath: string = process.cwd()): Promise<TramyConfig> {
  const configPath = getConfigPath(projectPath);

  if (!(await fs.pathExists(configPath))) {
    return DEFAULT_CONFIG;
  }

  const content = await fs.readFile(configPath, 'utf-8');
  const config = yaml.parse(content) as Partial<TramyConfig>;

  return {
    ...DEFAULT_CONFIG,
    ...config,
    project: { ...DEFAULT_CONFIG.project, ...config.project },
    output: { ...DEFAULT_CONFIG.output, ...config.output },
  };
}

/**
 * Save the Tramy configuration
 */
export async function saveConfig(
  config: TramyConfig,
  projectPath: string = process.cwd()
): Promise<void> {
  const configDir = getConfigDir(projectPath);
  const configPath = getConfigPath(projectPath);

  await fs.ensureDir(configDir);
  await fs.writeFile(configPath, yaml.stringify(config), 'utf-8');
}

/**
 * Get the Claude settings directory path
 */
export function getClaudeDir(projectPath: string = process.cwd()): string {
  return path.join(projectPath, '.claude');
}

/**
 * Get the Claude commands directory path
 */
export function getClaudeCommandsDir(projectPath: string = process.cwd()): string {
  return path.join(getClaudeDir(projectPath), 'commands');
}

/**
 * Get the Claude agents directory path
 */
export function getClaudeAgentsDir(projectPath: string = process.cwd()): string {
  return path.join(getClaudeDir(projectPath), 'agents');
}

/**
 * Get the Claude settings file path
 */
export function getClaudeSettingsPath(projectPath: string = process.cwd()): string {
  return path.join(getClaudeDir(projectPath), 'settings.json');
}
