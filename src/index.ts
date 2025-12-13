/**
 * Tramy - The Ultimate AI Productivity Toolkit for Claude Code
 *
 * @packageDocumentation
 */

// Core exports
export * from './core/types.js';
export * from './core/config.js';

// Role exports
export {
  getAllRoles,
  getRoleById,
  getRoleByAlias,
  getRolesByIds,
  roles,
} from './roles/index.js';

// Command exports
export {
  generateAllCommandTemplates,
  getCommandTemplatesForRole,
} from './commands/index.js';

// Workflow exports
export {
  getAllWorkflows,
  getWorkflowById,
  generateAllWorkflowTemplates,
  workflows,
} from './workflows/index.js';

// Version
export const VERSION = '1.0.0';
