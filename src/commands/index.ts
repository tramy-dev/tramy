/**
 * Command templates generator
 */

import { generatePMCommands } from './pm.js';
import { generateDACommands } from './da.js';
import { generateDECommands } from './de.js';
import { generateDevCommands } from './dev.js';
import { generateFECommands } from './fe.js';
import { generateBECommands } from './be.js';
import { generateArchCommands } from './arch.js';
import { generateTestCommands } from './test.js';
import { generateOpsCommands } from './ops.js';
import { generateSecCommands } from './sec.js';
import { generateDocsCommands } from './docs.js';
import { generateUXCommands } from './ux.js';

export interface CommandTemplate {
  path: string;
  content: string;
  roleId?: string;
}

export function generateAllCommandTemplates(): CommandTemplate[] {
  const templates: CommandTemplate[] = [];

  // Generate commands for each role
  templates.push(...generatePMCommands());
  templates.push(...generateDACommands());
  templates.push(...generateDECommands());
  templates.push(...generateDevCommands());
  templates.push(...generateFECommands());
  templates.push(...generateBECommands());
  templates.push(...generateArchCommands());
  templates.push(...generateTestCommands());
  templates.push(...generateOpsCommands());
  templates.push(...generateSecCommands());
  templates.push(...generateDocsCommands());
  templates.push(...generateUXCommands());

  return templates;
}

export function getCommandTemplatesForRole(roleId: string): CommandTemplate[] {
  const generators: Record<string, () => CommandTemplate[]> = {
    'product-manager': generatePMCommands,
    'data-analyst': generateDACommands,
    'data-engineer': generateDECommands,
    'developer': generateDevCommands,
    'frontend-developer': generateFECommands,
    'backend-developer': generateBECommands,
    'architect': generateArchCommands,
    'tester': generateTestCommands,
    'devops-engineer': generateOpsCommands,
    'security-engineer': generateSecCommands,
    'technical-writer': generateDocsCommands,
    'ux-designer': generateUXCommands,
  };

  const generator = generators[roleId];
  return generator ? generator() : [];
}
