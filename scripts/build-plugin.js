#!/usr/bin/env node
/**
 * Build script to generate static plugin files
 * Run: node scripts/build-plugin.js
 */

import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const pluginDir = path.join(rootDir, 'plugin');

async function buildPlugin() {
  console.log('🔨 Building Tramy plugin...\n');

  // Import the compiled generator
  const { default: generator } = await import('../dist/core/generator.js');

  // If generator exports functions directly
  const generatorModule = await import('../dist/core/index.js');

  const commandsDir = path.join(pluginDir, 'commands');
  const agentsDir = path.join(pluginDir, 'agents');

  // Ensure directories exist
  await fs.ensureDir(commandsDir);
  await fs.ensureDir(agentsDir);

  // Generate using the setup logic
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

  // Generate files
  if (generatorModule.generateCommandTemplates) {
    await generatorModule.generateCommandTemplates(pluginDir);
    console.log('✅ Commands generated');
  }

  if (generatorModule.generateAgentTemplates) {
    await generatorModule.generateAgentTemplates(pluginDir, mockConfig);
    console.log('✅ Agents generated');
  }

  // Count files
  const countMdFiles = async (dir) => {
    if (!await fs.pathExists(dir)) return 0;
    const items = await fs.readdir(dir, { withFileTypes: true });
    let count = 0;
    for (const item of items) {
      const fullPath = path.join(dir, item.name);
      if (item.isDirectory()) {
        count += await countMdFiles(fullPath);
      } else if (item.name.endsWith('.md')) {
        count++;
      }
    }
    return count;
  };

  const commandCount = await countMdFiles(commandsDir);
  const agentCount = await countMdFiles(agentsDir);

  console.log(`\n📊 Plugin built successfully!`);
  console.log(`   Commands: ${commandCount}`);
  console.log(`   Agents: ${agentCount}`);
  console.log(`   Output: ${pluginDir}`);
}

buildPlugin().catch(err => {
  console.error('❌ Build failed:', err.message);
  process.exit(1);
});
