/**
 * Project scanner for Tramy v2.0
 * Scans project to detect tech stack and structure
 */

import fs from 'fs-extra';
import path from 'path';
import { glob } from 'glob';
import { ProjectInfo } from './types.js';

interface PackageJson {
  name?: string;
  description?: string;
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
}

const TECH_PATTERNS: Record<string, string[]> = {
  // JavaScript/TypeScript
  typescript: ['tsconfig.json', '**/*.ts', '**/*.tsx'],
  javascript: ['**/*.js', '**/*.jsx'],
  react: ['**/react', '**/react-dom'],
  vue: ['**/vue', 'vue.config.js'],
  angular: ['angular.json', '**/angular'],
  nextjs: ['next.config.js', 'next.config.mjs', '**/next'],
  nuxt: ['nuxt.config.js', 'nuxt.config.ts'],
  svelte: ['svelte.config.js', '**/svelte'],
  node: ['package.json'],
  express: ['**/express'],
  fastify: ['**/fastify'],
  nestjs: ['**/nestjs', 'nest-cli.json'],

  // Python
  python: ['**/*.py', 'requirements.txt', 'pyproject.toml', 'setup.py'],
  django: ['**/django', 'manage.py'],
  flask: ['**/flask'],
  fastapi: ['**/fastapi'],
  pandas: ['**/pandas'],
  numpy: ['**/numpy'],

  // Go
  go: ['go.mod', '**/*.go'],
  gin: ['**/gin-gonic'],
  fiber: ['**/gofiber'],

  // Rust
  rust: ['Cargo.toml', '**/*.rs'],

  // PHP
  php: ['composer.json', '**/*.php'],
  laravel: ['artisan', '**/laravel'],
  symfony: ['**/symfony'],

  // Java/Kotlin
  java: ['pom.xml', 'build.gradle', '**/*.java'],
  kotlin: ['**/*.kt'],
  spring: ['**/spring'],

  // Databases
  postgresql: ['**/pg', '**/postgres'],
  mysql: ['**/mysql', '**/mysql2'],
  mongodb: ['**/mongoose', '**/mongodb'],
  redis: ['**/redis', '**/ioredis'],
  sqlite: ['**/sqlite', '**/better-sqlite3'],

  // Infrastructure
  docker: ['Dockerfile', 'docker-compose.yml', 'docker-compose.yaml'],
  kubernetes: ['**/*.yaml', '**/k8s/**'],
  terraform: ['**/*.tf'],

  // Testing
  jest: ['jest.config.js', '**/jest'],
  vitest: ['vitest.config.ts', '**/vitest'],
  pytest: ['pytest.ini', 'conftest.py'],
  cypress: ['cypress.config.js', '**/cypress'],
  playwright: ['playwright.config.ts', '**/playwright'],
};

const IGNORE_DIRS = [
  'node_modules',
  '.git',
  'dist',
  'build',
  'coverage',
  '.next',
  '.nuxt',
  '__pycache__',
  'venv',
  '.venv',
  'target',
  'vendor',
];

export async function scanProject(projectPath: string = process.cwd()): Promise<ProjectInfo> {
  const info: ProjectInfo = {
    name: path.basename(projectPath),
    description: '',
    techStack: [],
    structure: '',
    hasPackageJson: false,
    hasComposerJson: false,
    hasPyprojectToml: false,
    hasCargoToml: false,
    hasGoMod: false,
  };

  // Check for package managers
  info.hasPackageJson = await fs.pathExists(path.join(projectPath, 'package.json'));
  info.hasComposerJson = await fs.pathExists(path.join(projectPath, 'composer.json'));
  info.hasPyprojectToml = await fs.pathExists(path.join(projectPath, 'pyproject.toml'));
  info.hasCargoToml = await fs.pathExists(path.join(projectPath, 'Cargo.toml'));
  info.hasGoMod = await fs.pathExists(path.join(projectPath, 'go.mod'));

  // Read package.json for name and description
  if (info.hasPackageJson) {
    try {
      const pkgJson = await fs.readJson(path.join(projectPath, 'package.json')) as PackageJson;
      if (pkgJson.name) info.name = pkgJson.name;
      if (pkgJson.description) info.description = pkgJson.description;

      // Detect tech from dependencies
      const deps = { ...pkgJson.dependencies, ...pkgJson.devDependencies };
      for (const [tech, patterns] of Object.entries(TECH_PATTERNS)) {
        for (const pattern of patterns) {
          if (pattern.startsWith('**/') && pattern.length > 3) {
            const depName = pattern.substring(3);
            if (deps[depName]) {
              if (!info.techStack.includes(tech)) {
                info.techStack.push(tech);
              }
              break;
            }
          }
        }
      }
    } catch {
      // Ignore JSON parse errors
    }
  }

  // Detect tech from file patterns
  for (const [tech, patterns] of Object.entries(TECH_PATTERNS)) {
    if (info.techStack.includes(tech)) continue;

    for (const pattern of patterns) {
      if (pattern.startsWith('**/')) continue; // Skip dependency patterns

      try {
        const files = await glob(pattern, {
          cwd: projectPath,
          ignore: IGNORE_DIRS.map(d => `**/${d}/**`),
          nodir: true,
          maxDepth: 3,
        });

        if (files.length > 0) {
          info.techStack.push(tech);
          break;
        }
      } catch {
        // Ignore glob errors
      }
    }
  }

  // Generate structure tree
  info.structure = await generateStructureTree(projectPath);

  return info;
}

async function generateStructureTree(projectPath: string, maxDepth: number = 3): Promise<string> {
  const lines: string[] = [];

  async function walk(dir: string, prefix: string = '', depth: number = 0): Promise<void> {
    if (depth > maxDepth) return;

    const entries = await fs.readdir(dir, { withFileTypes: true });
    const filtered = entries
      .filter(e => !IGNORE_DIRS.includes(e.name) && !e.name.startsWith('.'))
      .sort((a, b) => {
        // Directories first, then files
        if (a.isDirectory() && !b.isDirectory()) return -1;
        if (!a.isDirectory() && b.isDirectory()) return 1;
        return a.name.localeCompare(b.name);
      });

    for (let i = 0; i < filtered.length; i++) {
      const entry = filtered[i];
      const isLast = i === filtered.length - 1;
      const connector = isLast ? '└── ' : '├── ';
      const newPrefix = prefix + (isLast ? '    ' : '│   ');

      if (entry.isDirectory()) {
        lines.push(`${prefix}${connector}${entry.name}/`);
        await walk(path.join(dir, entry.name), newPrefix, depth + 1);
      } else {
        lines.push(`${prefix}${connector}${entry.name}`);
      }
    }
  }

  lines.push(`${path.basename(projectPath)}/`);
  await walk(projectPath);

  return lines.join('\n');
}

export function formatTechStack(techStack: string[]): string[] {
  // Prioritize and deduplicate tech stack
  const priority = ['typescript', 'javascript', 'python', 'go', 'rust', 'java', 'php'];
  const frameworks = ['react', 'vue', 'angular', 'nextjs', 'nuxt', 'svelte', 'django', 'flask', 'fastapi', 'express', 'fastify', 'nestjs', 'spring', 'laravel'];
  const databases = ['postgresql', 'mysql', 'mongodb', 'redis', 'sqlite'];
  const infra = ['docker', 'kubernetes', 'terraform'];

  const result: string[] = [];

  // Add primary language
  for (const tech of priority) {
    if (techStack.includes(tech)) {
      result.push(tech);
      break;
    }
  }

  // Add frameworks
  for (const tech of frameworks) {
    if (techStack.includes(tech)) {
      result.push(tech);
    }
  }

  // Add databases
  for (const tech of databases) {
    if (techStack.includes(tech)) {
      result.push(tech);
    }
  }

  // Add infra
  for (const tech of infra) {
    if (techStack.includes(tech)) {
      result.push(tech);
    }
  }

  return result;
}
