/**
 * Core types for Tramy
 */

export interface Role {
  id: string;
  alias: string;
  name: string;
  description: string;
  tools: string[];
  capabilities: string[];
  commands: RoleCommand[];
}

export interface RoleCommand {
  name: string;
  description: string;
  arguments?: string;
}

export interface Workflow {
  id: string;
  name: string;
  description: string;
  roles: string[];
  phases: WorkflowPhase[];
}

export interface WorkflowPhase {
  name: string;
  role: string | string[];
  actions: string[];
  parallel?: boolean;
  qualityGate?: string;
  output?: string;
}

export interface TramyConfig {
  version: string;
  defaultRole: string;
  enabledRoles: string[];
  mode: 'single-role' | 'multi-role';
  qualityGates: {
    enabled: boolean;
    requireApproval: boolean;
  };
  hooks: {
    typecheck?: HookConfig;
    lint?: HookConfig;
    test?: HookConfig;
    [key: string]: HookConfig | undefined;
  };
  checkpoints: {
    enabled: boolean;
    autoCreate: boolean;
  };
  output: {
    specs: string;
    docs: string;
    analysis: string;
    reports: string;
  };
}

export interface HookConfig {
  enabled: boolean;
  command: string;
}

export interface ClaudeSettings {
  hooks?: {
    PreToolUse?: ClaudeHook[];
    PostToolUse?: ClaudeHook[];
    Stop?: ClaudeHook[];
    UserPromptSubmit?: ClaudeHook[];
  };
}

export interface ClaudeHook {
  matcher: string;
  command: string;
}

export const DEFAULT_CONFIG: TramyConfig = {
  version: '1.0',
  defaultRole: 'developer',
  enabledRoles: [
    'product-manager',
    'data-analyst',
    'data-engineer',
    'developer',
    'frontend-developer',
    'backend-developer',
    'architect',
    'tester',
    'devops-engineer',
    'security-engineer',
    'technical-writer',
    'ux-designer',
  ],
  mode: 'multi-role',
  qualityGates: {
    enabled: true,
    requireApproval: true,
  },
  hooks: {
    typecheck: {
      enabled: true,
      command: 'npm run typecheck',
    },
    lint: {
      enabled: true,
      command: 'npm run lint',
    },
    test: {
      enabled: true,
      command: 'npm run test',
    },
  },
  checkpoints: {
    enabled: true,
    autoCreate: true,
  },
  output: {
    specs: 'specs/',
    docs: 'docs/',
    analysis: 'analysis/',
    reports: 'reports/',
  },
};
