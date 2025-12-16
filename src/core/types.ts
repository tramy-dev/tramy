/**
 * Core types for Tramy v2.0
 */

export interface Role {
  id: string;
  alias: string;
  name: string;
  description: string;
}

export interface TramyConfig {
  version: string;
  project: {
    name: string;
    description: string;
    techStack: string[];
  };
  defaultRole: string;
  roles: string[];
  output: {
    analysis: string;
    reports: string;
    notebooks: string;
  };
}

export interface ProjectInfo {
  name: string;
  description: string;
  techStack: string[];
  structure: string;
  hasPackageJson: boolean;
  hasComposerJson: boolean;
  hasPyprojectToml: boolean;
  hasCargoToml: boolean;
  hasGoMod: boolean;
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

export const ALL_ROLES: Role[] = [
  // Original 14 roles
  { id: 'product-manager', alias: 'pm', name: 'Product Manager', description: 'PRD, user stories, roadmap, prioritization' },
  { id: 'data-analyst', alias: 'da', name: 'Data Analyst', description: 'SQL, analysis, BI tools, reporting' },
  { id: 'data-engineer', alias: 'de', name: 'Data Engineer', description: 'ETL, pipelines, data modeling, orchestration' },
  { id: 'developer', alias: 'dev', name: 'Developer', description: 'General development, features, debugging' },
  { id: 'frontend-developer', alias: 'fe', name: 'Frontend Developer', description: 'React, Vue, UI components, styling' },
  { id: 'backend-developer', alias: 'be', name: 'Backend Developer', description: 'APIs, services, databases, authentication' },
  { id: 'fullstack-developer', alias: 'fs', name: 'Fullstack Developer', description: 'End-to-end development' },
  { id: 'architect', alias: 'arch', name: 'Architect', description: 'System design, ADRs, technical decisions' },
  { id: 'tester', alias: 'test', name: 'Tester', description: 'Unit, integration, E2E, test strategies' },
  { id: 'devops-engineer', alias: 'ops', name: 'DevOps Engineer', description: 'CI/CD, infrastructure, deployment' },
  { id: 'security-engineer', alias: 'sec', name: 'Security Engineer', description: 'Security audits, vulnerability, compliance' },
  { id: 'technical-writer', alias: 'docs', name: 'Technical Writer', description: 'Documentation, guides, API docs' },
  { id: 'ux-designer', alias: 'ux', name: 'UX Designer', description: 'User research, wireframes, prototypes' },
  { id: 'ai-engineer', alias: 'ai', name: 'AI Engineer', description: 'ML models, prompts, AI integration' },
  // 10 new roles
  { id: 'content-writer', alias: 'content', name: 'Content Writer', description: 'Blog posts, SEO, copywriting, social media' },
  { id: 'marketing', alias: 'mkt', name: 'Marketing', description: 'Campaigns, funnels, ads, growth analytics' },
  { id: 'sales-engineer', alias: 'sales', name: 'Sales Engineer', description: 'Demos, proposals, technical sales support' },
  { id: 'support-engineer', alias: 'support', name: 'Support Engineer', description: 'Tickets, knowledge base, troubleshooting' },
  { id: 'project-manager', alias: 'proj', name: 'Project Manager', description: 'Timelines, risks, stakeholder management' },
  { id: 'scrum-master', alias: 'scrum', name: 'Scrum Master', description: 'Sprints, ceremonies, team facilitation' },
  { id: 'database-admin', alias: 'dba', name: 'Database Admin', description: 'Query optimization, backups, indexing' },
  { id: 'mobile-developer', alias: 'mobile', name: 'Mobile Developer', description: 'iOS, Android, React Native, Flutter' },
  { id: 'game-developer', alias: 'game', name: 'Game Developer', description: 'Game mechanics, physics, assets, balancing' },
  { id: 'blockchain-developer', alias: 'web3', name: 'Blockchain Developer', description: 'Smart contracts, DeFi, Web3 integration' },
  { id: 'hr-specialist', alias: 'hr', name: 'HR Specialist', description: 'Recruiting, onboarding, policies, performance' },
];

export const DEFAULT_CONFIG: TramyConfig = {
  version: '2.0',
  project: {
    name: '',
    description: '',
    techStack: [],
  },
  defaultRole: 'developer',
  roles: ALL_ROLES.map(r => r.id),
  output: {
    analysis: 'analysis/',
    reports: 'reports/',
    notebooks: 'notebooks/',
  },
};

export function getRoleById(id: string): Role | undefined {
  return ALL_ROLES.find(r => r.id === id);
}

export function getRoleByAlias(alias: string): Role | undefined {
  return ALL_ROLES.find(r => r.alias === alias);
}

export function getAllRoles(): Role[] {
  return ALL_ROLES;
}
