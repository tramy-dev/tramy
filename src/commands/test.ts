/**
 * Tester Command Templates
 */

import { CommandTemplate } from './index.js';

export function generateTestCommands(): CommandTemplate[] {
  return [
    {
      path: 'test/unit.md',
      roleId: 'tester',
      content: `# Write Unit Tests

Write unit tests for: $ARGUMENTS

## Instructions

You are acting as a **Tester**. Write comprehensive unit tests.

## Test Template (Vitest/Jest)

\`\`\`typescript
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { functionToTest } from './module';

describe('functionToTest', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('when given valid input', () => {
    it('should return expected result', () => {
      // Arrange
      const input = { /* test data */ };
      const expected = { /* expected result */ };

      // Act
      const result = functionToTest(input);

      // Assert
      expect(result).toEqual(expected);
    });
  });

  describe('when given edge case', () => {
    it('should handle empty input', () => {
      expect(functionToTest([])).toEqual([]);
    });

    it('should handle null', () => {
      expect(() => functionToTest(null)).toThrow('Invalid input');
    });
  });

  describe('when dependency fails', () => {
    it('should handle error gracefully', () => {
      // Arrange
      vi.mocked(dependency).mockRejectedValue(new Error('Failed'));

      // Act & Assert
      await expect(functionToTest()).rejects.toThrow('Failed');
    });
  });
});
\`\`\`

## Test Categories

### Happy Path
- Normal inputs
- Expected behavior

### Edge Cases
- Empty values
- Boundary values
- Large inputs

### Error Scenarios
- Invalid inputs
- Missing data
- Dependency failures

## Checklist
- [ ] Tests follow AAA pattern
- [ ] One assertion per test
- [ ] Tests are independent
- [ ] Mocks are appropriate
- [ ] Edge cases covered
`,
    },
    {
      path: 'test/integration.md',
      roleId: 'tester',
      content: `# Write Integration Tests

Write integration tests for: $ARGUMENTS

## Instructions

You are acting as a **Tester**. Write integration tests that verify component interactions.

## Integration Test Template

\`\`\`typescript
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import request from 'supertest';
import { app } from '../app';
import { db } from '../db';

describe('$ARGUMENTS Integration', () => {
  beforeAll(async () => {
    await db.migrate.latest();
    await db.seed.run();
  });

  afterAll(async () => {
    await db.destroy();
  });

  describe('POST /api/$ARGUMENTS', () => {
    it('should create and return new item', async () => {
      const response = await request(app)
        .post('/api/$ARGUMENTS')
        .send({ name: 'Test' })
        .expect(201);

      expect(response.body).toMatchObject({
        id: expect.any(String),
        name: 'Test',
      });

      // Verify in database
      const item = await db('$ARGUMENTS').where('id', response.body.id).first();
      expect(item).toBeDefined();
    });

    it('should return 400 for invalid data', async () => {
      await request(app)
        .post('/api/$ARGUMENTS')
        .send({ invalid: 'data' })
        .expect(400);
    });
  });

  describe('GET /api/$ARGUMENTS/:id', () => {
    it('should return existing item', async () => {
      const [id] = await db('$ARGUMENTS').insert({ name: 'Test' });

      const response = await request(app)
        .get(\`/api/$ARGUMENTS/\${id}\`)
        .expect(200);

      expect(response.body.name).toBe('Test');
    });

    it('should return 404 for non-existent item', async () => {
      await request(app)
        .get('/api/$ARGUMENTS/non-existent-id')
        .expect(404);
    });
  });
});
\`\`\`

## Integration Test Scope
- API endpoint testing
- Database operations
- Service interactions
- Cache behavior
- Queue processing

## Checklist
- [ ] Database setup/teardown
- [ ] Realistic test data
- [ ] Full request/response cycle
- [ ] Error scenarios
- [ ] Authentication tested
`,
    },
    {
      path: 'test/e2e.md',
      roleId: 'tester',
      content: `# Write E2E Tests

Write E2E tests for: $ARGUMENTS

## Instructions

You are acting as a **Tester**. Write end-to-end tests using Playwright.

## E2E Test Template

\`\`\`typescript
import { test, expect } from '@playwright/test';

test.describe('$ARGUMENTS', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should complete user flow', async ({ page }) => {
    // Navigate
    await page.click('text=Get Started');

    // Fill form
    await page.fill('[name="email"]', 'test@example.com');
    await page.fill('[name="password"]', 'password123');

    // Submit
    await page.click('button[type="submit"]');

    // Assert success
    await expect(page).toHaveURL('/dashboard');
    await expect(page.locator('h1')).toContainText('Welcome');
  });

  test('should handle errors gracefully', async ({ page }) => {
    // Trigger error condition
    await page.fill('[name="email"]', 'invalid');
    await page.click('button[type="submit"]');

    // Assert error message
    await expect(page.locator('.error')).toBeVisible();
    await expect(page.locator('.error')).toContainText('Invalid email');
  });

  test('should be accessible', async ({ page }) => {
    // Check for accessibility violations
    const accessibilityReport = await page.evaluate(() =>
      axe.run()
    );
    expect(accessibilityReport.violations).toEqual([]);
  });
});
\`\`\`

## Page Object Pattern

\`\`\`typescript
// pages/LoginPage.ts
export class LoginPage {
  constructor(private page: Page) {}

  async login(email: string, password: string) {
    await this.page.fill('[name="email"]', email);
    await this.page.fill('[name="password"]', password);
    await this.page.click('button[type="submit"]');
  }

  async expectError(message: string) {
    await expect(this.page.locator('.error')).toContainText(message);
  }
}
\`\`\`

## Test Checklist
- [ ] Critical user flows covered
- [ ] Cross-browser testing
- [ ] Mobile viewport tested
- [ ] Accessibility checked
- [ ] Screenshots on failure
`,
    },
    {
      path: 'test/performance.md',
      roleId: 'tester',
      content: `# Performance Testing

Performance test: $ARGUMENTS

## Instructions

You are acting as a **Tester**. Conduct performance testing.

## k6 Load Test Script

\`\`\`javascript
import http from 'k6/http';
import { check, sleep } from 'k6';
import { Rate } from 'k6/metrics';

const errorRate = new Rate('errors');

export const options = {
  stages: [
    { duration: '1m', target: 50 },   // Ramp up
    { duration: '3m', target: 50 },   // Stay at 50
    { duration: '1m', target: 100 },  // Ramp to 100
    { duration: '3m', target: 100 },  // Stay at 100
    { duration: '1m', target: 0 },    // Ramp down
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95% under 500ms
    errors: ['rate<0.01'],             // Error rate < 1%
  },
};

export default function () {
  const res = http.get('http://api.example.com/$ARGUMENTS');

  const checkResult = check(res, {
    'status is 200': (r) => r.status === 200,
    'response time < 500ms': (r) => r.timings.duration < 500,
  });

  errorRate.add(!checkResult);

  sleep(1);
}
\`\`\`

## Performance Metrics

| Metric | Target | Acceptable | Current |
|--------|--------|------------|---------|
| Response time (p50) | <100ms | <200ms | |
| Response time (p95) | <300ms | <500ms | |
| Response time (p99) | <500ms | <1000ms | |
| Throughput | >1000 rps | >500 rps | |
| Error rate | <0.1% | <1% | |

## Test Scenarios
1. **Baseline**: Normal load
2. **Stress**: Find breaking point
3. **Spike**: Sudden traffic surge
4. **Soak**: Extended duration

## Checklist
- [ ] Baseline established
- [ ] Bottlenecks identified
- [ ] Thresholds defined
- [ ] Results documented
`,
    },
    {
      path: 'test/coverage.md',
      roleId: 'tester',
      content: `# Check Test Coverage

Analyze test coverage for the codebase.

## Instructions

You are acting as a **Tester**. Analyze and improve test coverage.

## Coverage Analysis

Run coverage report:
\`\`\`bash
npm run test:coverage
\`\`\`

## Coverage Metrics

| Metric | Current | Target | Status |
|--------|---------|--------|--------|
| Statements | | 80% | |
| Branches | | 75% | |
| Functions | | 80% | |
| Lines | | 80% | |

## Uncovered Areas

### Critical (Must Cover)
| File | Lines | Reason |
|------|-------|--------|
| | | |

### High Priority
| File | Lines | Reason |
|------|-------|--------|
| | | |

## Recommendations

### Tests to Add
1. [File:Function] - [What to test]
2. [File:Function] - [What to test]

### Coverage Exclusions
Legitimate exclusions:
- Generated code
- Third-party integrations
- Development-only code

## Action Items
- [ ] Add tests for critical paths
- [ ] Improve branch coverage
- [ ] Update coverage thresholds
`,
    },
    {
      path: 'test/run.md',
      roleId: 'tester',
      content: `# Run Test Suite

Run the full test suite.

## Instructions

You are acting as a **Tester**. Execute and report on test results.

## Commands

\`\`\`bash
# Run all tests
npm test

# Run with coverage
npm run test:coverage

# Run specific file
npm test -- path/to/file.test.ts

# Run in watch mode
npm test -- --watch

# Run E2E tests
npm run test:e2e
\`\`\`

## Test Report

### Summary
| Suite | Passed | Failed | Skipped | Duration |
|-------|--------|--------|---------|----------|
| Unit | | | | |
| Integration | | | | |
| E2E | | | | |
| **Total** | | | | |

### Failed Tests
| Test | Error | File |
|------|-------|------|
| | | |

### Flaky Tests
| Test | Failure Rate | File |
|------|--------------|------|
| | | |

## Recommendations
- Tests to fix
- Tests to stabilize
- Coverage gaps
`,
    },
    {
      path: 'test/report.md',
      roleId: 'tester',
      content: `# Bug Report

Create bug report for: $ARGUMENTS

## Instructions

You are acting as a **Tester**. Create a detailed bug report.

## Bug Report Template

### Summary
[One-line description of the bug]

### Severity
- [ ] Critical - System unusable
- [ ] High - Major feature broken
- [ ] Medium - Feature partially broken
- [ ] Low - Minor issue

### Environment
- **OS**: [e.g., macOS 14.0]
- **Browser**: [e.g., Chrome 120]
- **App Version**: [e.g., 1.2.3]
- **Device**: [e.g., Desktop/Mobile]

### Steps to Reproduce
1. [First step]
2. [Second step]
3. [Third step]

### Expected Behavior
[What should happen]

### Actual Behavior
[What actually happens]

### Screenshots/Videos
[Attach evidence]

### Logs
\`\`\`
[Relevant error logs]
\`\`\`

### Additional Context
[Any other relevant information]

### Possible Fix
[If you have suggestions]

---

### Triage Information
- **Assigned To**: [Developer]
- **Sprint**: [Sprint number]
- **Related Issues**: [Links]
`,
    },
  ];
}
