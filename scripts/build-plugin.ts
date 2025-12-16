/**
 * Build script to generate static plugin files from templates
 * Run: npx ts-node scripts/build-plugin.ts
 */

import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Import will be from compiled dist
async function buildPlugin() {
  console.log('Building Tramy plugin...');

  const pluginDir = path.join(rootDir, 'plugin');
  const commandsDir = path.join(pluginDir, 'commands');
  const agentsDir = path.join(pluginDir, 'agents');

  // Clean and create directories
  await fs.emptyDir(pluginDir);
  await fs.ensureDir(commandsDir);
  await fs.ensureDir(agentsDir);

  // Copy plugin manifest
  await fs.copy(
    path.join(rootDir, '.claude-plugin'),
    path.join(pluginDir, '.claude-plugin')
  );

  // Generate commands and agents using the compiled module
  const { generateCommandTemplates, generateAgentTemplates } = await import('../dist/core/generator.js');

  // Create a mock config with all roles enabled
  const mockConfig = {
    roles: [
      'product-manager', 'data-analyst', 'data-engineer', 'developer',
      'frontend-developer', 'backend-developer', 'fullstack-developer',
      'architect', 'tester', 'devops-engineer', 'security-engineer',
      'technical-writer', 'ux-designer', 'ai-engineer', 'content-writer',
      'marketing', 'sales-engineer', 'support-engineer', 'project-manager',
      'scrum-master', 'database-admin', 'mobile-developer', 'game-developer',
      'blockchain-developer', 'hr-specialist'
    ],
    output: {
      analysis: '.tramy/analysis',
      reports: '.tramy/reports',
      notebooks: '.tramy/notebooks'
    }
  };

  await generateCommandTemplates(pluginDir);
  await generateAgentTemplates(pluginDir, mockConfig);

  // Count generated files
  const countFiles = async (dir: string): Promise<number> => {
    const files = await fs.readdir(dir, { recursive: true });
    return files.filter(f => f.toString().endsWith('.md')).length;
  };

  const commandCount = await countFiles(commandsDir);
  const agentCount = await countFiles(agentsDir);

  console.log(`✅ Plugin built successfully!`);
  console.log(`   Commands: ${commandCount}`);
  console.log(`   Agents: ${agentCount}`);
  console.log(`   Output: ${pluginDir}`);
}

buildPlugin().catch(console.error);
