/**
 * Workflow definitions and template generators
 */

import { Workflow } from '../core/types.js';

export interface WorkflowTemplate {
  path: string;
  content: string;
}

export const workflows: Workflow[] = [
  {
    id: 'feature',
    name: 'Feature Development',
    description: 'End-to-end feature development',
    roles: ['pm', 'arch', 'fe', 'be', 'test', 'docs', 'ops'],
    phases: [
      { name: 'Requirements', role: 'pm', actions: ['story'], qualityGate: 'Requirements approved' },
      { name: 'Design', role: 'arch', actions: ['design'], qualityGate: 'Architecture approved' },
      { name: 'Implementation', role: ['fe', 'be'], actions: ['component', 'api'], parallel: true },
      { name: 'Testing', role: 'test', actions: ['unit', 'integration'], qualityGate: '>80% coverage' },
      { name: 'Documentation', role: 'docs', actions: ['guide', 'changelog'] },
      { name: 'Deployment', role: 'ops', actions: ['deploy'] },
    ],
  },
  {
    id: 'pipeline',
    name: 'Data Pipeline',
    description: 'Create data pipeline from source to target',
    roles: ['pm', 'da', 'de', 'test', 'docs'],
    phases: [
      { name: 'Requirements', role: 'pm', actions: ['prd'] },
      { name: 'Analysis', role: 'da', actions: ['explore', 'profile'] },
      { name: 'Implementation', role: 'de', actions: ['pipeline', 'schema', 'quality'] },
      { name: 'Validation', role: 'test', actions: ['integration'] },
      { name: 'Documentation', role: 'docs', actions: ['runbook'] },
    ],
  },
  {
    id: 'api',
    name: 'API Development',
    description: 'Design and implement API',
    roles: ['pm', 'arch', 'be', 'test', 'sec', 'docs'],
    phases: [
      { name: 'Requirements', role: 'pm', actions: ['prd'] },
      { name: 'Design', role: 'arch', actions: ['design'] },
      { name: 'Implementation', role: 'be', actions: ['api'] },
      { name: 'Testing', role: 'test', actions: ['unit', 'integration', 'performance'] },
      { name: 'Security', role: 'sec', actions: ['review', 'scan'] },
      { name: 'Documentation', role: 'docs', actions: ['api'] },
    ],
  },
  {
    id: 'fix',
    name: 'Bug Fix',
    description: 'Investigate and fix bugs',
    roles: ['test', 'dev', 'docs'],
    phases: [
      { name: 'Investigation', role: 'test', actions: ['report'] },
      { name: 'Fix', role: 'dev', actions: ['fix'] },
      { name: 'Verification', role: 'test', actions: ['run'] },
      { name: 'Documentation', role: 'docs', actions: ['changelog'] },
    ],
  },
  {
    id: 'security',
    name: 'Security Audit',
    description: 'Comprehensive security audit',
    roles: ['sec', 'fe', 'be', 'ops', 'test', 'docs'],
    phases: [
      { name: 'Assessment', role: 'sec', actions: ['audit', 'scan'] },
      { name: 'Remediation', role: ['fe', 'be', 'ops'], actions: ['fix'], parallel: true },
      { name: 'Verification', role: 'test', actions: ['e2e'] },
      { name: 'Documentation', role: 'docs', actions: ['runbook'] },
    ],
  },
  {
    id: 'release',
    name: 'Release',
    description: 'Release workflow',
    roles: ['pm', 'dev', 'test', 'sec', 'ops', 'docs'],
    phases: [
      { name: 'Planning', role: 'pm', actions: ['sprint'] },
      { name: 'Preparation', role: ['dev', 'test', 'sec'], actions: ['review', 'run', 'scan'], parallel: true },
      { name: 'Testing', role: 'test', actions: ['e2e', 'performance'] },
      { name: 'Deployment', role: 'ops', actions: ['deploy'] },
      { name: 'Documentation', role: 'docs', actions: ['changelog'] },
    ],
  },
  {
    id: 'analytics',
    name: 'Analytics Report',
    description: 'Create analytics report',
    roles: ['pm', 'da', 'docs'],
    phases: [
      { name: 'Requirements', role: 'pm', actions: ['kpi'] },
      { name: 'Analysis', role: 'da', actions: ['explore', 'visualize', 'report'] },
      { name: 'Documentation', role: 'docs', actions: ['guide'] },
    ],
  },
  {
    id: 'dashboard',
    name: 'Dashboard Development',
    description: 'Create analytics dashboard',
    roles: ['pm', 'da', 'fe', 'de', 'test'],
    phases: [
      { name: 'Requirements', role: 'pm', actions: ['prd'] },
      { name: 'Analysis', role: 'da', actions: ['dashboard'] },
      { name: 'Frontend', role: 'fe', actions: ['component'] },
      { name: 'Backend', role: 'de', actions: ['pipeline'] },
      { name: 'Testing', role: 'test', actions: ['integration'] },
    ],
  },
  {
    id: 'onboarding',
    name: 'Onboarding Documentation',
    description: 'Create developer onboarding docs',
    roles: ['pm', 'arch', 'ops', 'docs'],
    phases: [
      { name: 'Planning', role: 'pm', actions: ['prd'] },
      { name: 'Content', role: ['arch', 'ops'], actions: ['design', 'docker'], parallel: true },
      { name: 'Documentation', role: 'docs', actions: ['readme', 'guide', 'tutorial'] },
    ],
  },
  {
    id: 'tech-debt',
    name: 'Tech Debt Cleanup',
    description: 'Address technical debt',
    roles: ['arch', 'dev', 'test', 'docs'],
    phases: [
      { name: 'Assessment', role: 'arch', actions: ['review'] },
      { name: 'Implementation', role: 'dev', actions: ['refactor', 'debt'] },
      { name: 'Testing', role: 'test', actions: ['unit', 'integration'] },
      { name: 'Documentation', role: 'docs', actions: ['changelog'] },
    ],
  },
  {
    id: 'performance',
    name: 'Performance Optimization',
    description: 'Optimize system performance',
    roles: ['da', 'fe', 'be', 'de', 'test'],
    phases: [
      { name: 'Analysis', role: 'da', actions: ['profile'] },
      { name: 'Optimization', role: ['fe', 'be', 'de'], actions: ['optimize'], parallel: true },
      { name: 'Verification', role: 'test', actions: ['performance'] },
    ],
  },
  {
    id: 'migrate',
    name: 'Migration',
    description: 'System/data migration',
    roles: ['arch', 'de', 'dev', 'test', 'ops'],
    phases: [
      { name: 'Planning', role: 'arch', actions: ['design', 'adr'] },
      { name: 'Data', role: 'de', actions: ['migrate', 'quality'] },
      { name: 'Code', role: 'dev', actions: ['refactor'] },
      { name: 'Testing', role: 'test', actions: ['integration', 'e2e'] },
      { name: 'Deployment', role: 'ops', actions: ['deploy'] },
    ],
  },
  {
    id: 'abtest',
    name: 'A/B Test',
    description: 'Run A/B test experiment',
    roles: ['pm', 'da', 'dev', 'docs'],
    phases: [
      { name: 'Design', role: 'pm', actions: ['prd'] },
      { name: 'Planning', role: 'da', actions: ['abtest'] },
      { name: 'Implementation', role: 'dev', actions: ['feature'] },
      { name: 'Analysis', role: 'da', actions: ['report'] },
      { name: 'Documentation', role: 'docs', actions: ['guide'] },
    ],
  },
  {
    id: 'incident',
    name: 'Incident Response',
    description: 'Respond to production incident',
    roles: ['ops', 'sec', 'be', 'test', 'docs'],
    phases: [
      { name: 'Triage', role: 'ops', actions: ['monitor'] },
      { name: 'Resolution', role: ['sec', 'be'], actions: ['incident', 'fix'], parallel: true },
      { name: 'Verification', role: 'test', actions: ['e2e'] },
      { name: 'Documentation', role: 'docs', actions: ['runbook'] },
    ],
  },
  {
    id: 'compliance',
    name: 'Compliance Audit',
    description: 'Audit for compliance standards',
    roles: ['sec', 'dev', 'ops', 'de', 'docs'],
    phases: [
      { name: 'Assessment', role: 'sec', actions: ['compliance', 'audit'] },
      { name: 'Remediation', role: ['dev', 'ops', 'de'], actions: ['fix'], parallel: true },
      { name: 'Documentation', role: 'docs', actions: ['guide'] },
    ],
  },
];

export function getAllWorkflows(): Workflow[] {
  return workflows;
}

export function getWorkflowById(id: string): Workflow | undefined {
  return workflows.find((wf) => wf.id === id);
}

export function generateAllWorkflowTemplates(): WorkflowTemplate[] {
  return workflows.map((workflow) => ({
    path: `${workflow.id}.md`,
    content: generateWorkflowTemplate(workflow),
  }));
}

function generateWorkflowTemplate(workflow: Workflow): string {
  const phases = workflow.phases
    .map((phase, index) => {
      const roleStr = Array.isArray(phase.role)
        ? phase.role.join(' + ') + (phase.parallel ? ' (PARALLEL)' : '')
        : phase.role;

      const actionsStr = phase.actions.map(a => `- /${Array.isArray(phase.role) ? phase.role[0] : phase.role}:${a}`).join('\n');

      let phaseContent = `
## Phase ${index + 1}: ${phase.name}

**Role**: ${roleStr}

**Actions**:
${actionsStr}
`;

      if (phase.qualityGate) {
        phaseContent += `
**QUALITY GATE**: ${phase.qualityGate}
`;
      }

      if (phase.output) {
        phaseContent += `
**Output**: ${phase.output}
`;
      }

      return phaseContent;
    })
    .join('\n---\n');

  return `# ${workflow.name} Workflow

${workflow.description}: $ARGUMENTS

---

## Workflow Overview

\`\`\`
${workflow.roles.join(' → ')}
\`\`\`

---
${phases}
---

## Completion Checklist

- [ ] All phases completed
- [ ] All quality gates passed
- [ ] Documentation updated
- [ ] Changes deployed/merged

---

## Notes

This workflow coordinates the following roles: ${workflow.roles.join(', ')}.

Execute each phase in order, ensuring quality gates are met before proceeding.
`;
}
