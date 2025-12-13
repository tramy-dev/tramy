/**
 * Role definitions index
 */

import { Role } from '../core/types.js';
import { productManagerRole } from './product-manager.js';
import { dataAnalystRole } from './data-analyst.js';
import { dataEngineerRole } from './data-engineer.js';
import { developerRole } from './developer.js';
import { frontendDeveloperRole } from './frontend-developer.js';
import { backendDeveloperRole } from './backend-developer.js';
import { architectRole } from './architect.js';
import { testerRole } from './tester.js';
import { devopsEngineerRole } from './devops-engineer.js';
import { securityEngineerRole } from './security-engineer.js';
import { technicalWriterRole } from './technical-writer.js';
import { uxDesignerRole } from './ux-designer.js';

export const roles: Role[] = [
  productManagerRole,
  dataAnalystRole,
  dataEngineerRole,
  developerRole,
  frontendDeveloperRole,
  backendDeveloperRole,
  architectRole,
  testerRole,
  devopsEngineerRole,
  securityEngineerRole,
  technicalWriterRole,
  uxDesignerRole,
];

export function getAllRoles(): Role[] {
  return roles;
}

export function getRoleById(id: string): Role | undefined {
  return roles.find((role) => role.id === id);
}

export function getRoleByAlias(alias: string): Role | undefined {
  return roles.find((role) => role.alias === alias);
}

export function getRolesByIds(ids: string[]): Role[] {
  return roles.filter((role) => ids.includes(role.id));
}

export * from './product-manager.js';
export * from './data-analyst.js';
export * from './data-engineer.js';
export * from './developer.js';
export * from './frontend-developer.js';
export * from './backend-developer.js';
export * from './architect.js';
export * from './tester.js';
export * from './devops-engineer.js';
export * from './security-engineer.js';
export * from './technical-writer.js';
export * from './ux-designer.js';
