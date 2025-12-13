/**
 * Security Engineer Command Templates
 */

import { CommandTemplate } from './index.js';

export function generateSecCommands(): CommandTemplate[] {
  return [
    {
      path: 'sec/audit.md',
      roleId: 'security-engineer',
      content: `# Security Audit

Conduct security audit for: $ARGUMENTS

## Instructions

You are acting as a **Security Engineer**. Perform a comprehensive security audit.

## Audit Scope
- Application security
- Infrastructure security
- Data security
- Access controls

## OWASP Top 10 Checklist

### A01: Broken Access Control
- [ ] Authorization checks on all endpoints
- [ ] No IDOR vulnerabilities
- [ ] CORS properly configured
- [ ] JWT validation complete

### A02: Cryptographic Failures
- [ ] Data encrypted at rest
- [ ] Data encrypted in transit (TLS)
- [ ] Strong algorithms used
- [ ] Keys properly managed

### A03: Injection
- [ ] Input validation on all endpoints
- [ ] Parameterized queries used
- [ ] No command injection
- [ ] No LDAP injection

### A04: Insecure Design
- [ ] Threat modeling done
- [ ] Security requirements defined
- [ ] Secure defaults

### A05: Security Misconfiguration
- [ ] Default credentials changed
- [ ] Unnecessary features disabled
- [ ] Error messages don't leak info
- [ ] Security headers set

### A06: Vulnerable Components
- [ ] Dependencies up to date
- [ ] No known vulnerabilities
- [ ] SBOM maintained

### A07: Auth Failures
- [ ] Strong password policy
- [ ] MFA available
- [ ] Session management secure
- [ ] Brute force protection

### A08: Data Integrity
- [ ] Input validation
- [ ] CI/CD pipeline secured
- [ ] Integrity verification

### A09: Logging & Monitoring
- [ ] Security events logged
- [ ] Logs protected
- [ ] Alerting configured

### A10: SSRF
- [ ] URL validation
- [ ] Allowlist for external calls
- [ ] Network segmentation

## Findings

| ID | Severity | Finding | Recommendation |
|----|----------|---------|----------------|
| SEC-001 | | | |

## Output Location
Save to: \`specs/security/$ARGUMENTS-audit.md\`
`,
    },
    {
      path: 'sec/scan.md',
      roleId: 'security-engineer',
      content: `# Vulnerability Scan

Scan for vulnerabilities: $ARGUMENTS

## Instructions

You are acting as a **Security Engineer**. Run vulnerability scans.

## Dependency Scanning

\`\`\`bash
# NPM audit
npm audit

# With fix
npm audit fix

# Snyk
snyk test

# OWASP Dependency Check
dependency-check --project "$ARGUMENTS" --scan .
\`\`\`

## Container Scanning

\`\`\`bash
# Trivy
trivy image myapp:latest

# Grype
grype myapp:latest
\`\`\`

## Static Analysis (SAST)

\`\`\`bash
# Semgrep
semgrep --config auto .

# CodeQL
codeql database create db --language=javascript
codeql database analyze db javascript-security-extended.qls
\`\`\`

## Scan Results

### Critical
| CVE | Package | Version | Fix Version | Description |
|-----|---------|---------|-------------|-------------|
| | | | | |

### High
| CVE | Package | Version | Fix Version | Description |
|-----|---------|---------|-------------|-------------|
| | | | | |

### Medium
| CVE | Package | Version | Fix Version | Description |
|-----|---------|---------|-------------|-------------|
| | | | | |

## Remediation Plan
1. [Critical fixes - immediate]
2. [High fixes - within 7 days]
3. [Medium fixes - within 30 days]

## Output Location
Save to: \`specs/security/$ARGUMENTS-scan.md\`
`,
    },
    {
      path: 'sec/review.md',
      roleId: 'security-engineer',
      content: `# Secure Code Review

Review code for security issues: $ARGUMENTS

## Instructions

You are acting as a **Security Engineer**. Review code for security vulnerabilities.

## Review Checklist

### Input Validation
- [ ] All user input validated
- [ ] Allowlist validation preferred
- [ ] Length limits enforced
- [ ] Type checking done

### Output Encoding
- [ ] HTML encoding for web output
- [ ] URL encoding for URLs
- [ ] SQL parameterization
- [ ] JSON encoding for APIs

### Authentication
- [ ] Password hashing (bcrypt/argon2)
- [ ] No hardcoded credentials
- [ ] Session tokens secure
- [ ] Logout invalidates session

### Authorization
- [ ] Check on every request
- [ ] No client-side only checks
- [ ] Principle of least privilege
- [ ] No IDOR vulnerabilities

### Data Protection
- [ ] Sensitive data identified
- [ ] Encryption appropriate
- [ ] No sensitive data in logs
- [ ] Secure deletion

### Error Handling
- [ ] No stack traces exposed
- [ ] Generic error messages
- [ ] Errors logged securely

## Findings

### Critical
\`\`\`
File: [path]
Line: [number]
Issue: [description]
Risk: [explanation]
Fix: [recommendation]
\`\`\`

### High
[Same format]

### Medium
[Same format]

## Output Location
Save to: \`specs/security/$ARGUMENTS-review.md\`
`,
    },
    {
      path: 'sec/pentest.md',
      roleId: 'security-engineer',
      content: `# Penetration Test Plan

Create pentest plan for: $ARGUMENTS

## Instructions

You are acting as a **Security Engineer**. Create a penetration testing plan.

## Test Plan

### Scope
- **In Scope**: [Systems/URLs]
- **Out of Scope**: [Exclusions]
- **Test Type**: [Black box/Gray box/White box]
- **Duration**: [Timeline]

### Methodology

#### 1. Reconnaissance
- Subdomain enumeration
- Technology fingerprinting
- Open source intelligence

#### 2. Scanning
- Port scanning
- Service enumeration
- Vulnerability scanning

#### 3. Exploitation
- Authentication testing
- Injection attacks
- Business logic flaws
- API security testing

#### 4. Post-Exploitation
- Privilege escalation
- Lateral movement
- Data exfiltration

### Test Cases

| ID | Category | Test Case | Priority |
|----|----------|-----------|----------|
| PT-001 | Auth | Brute force login | High |
| PT-002 | Auth | Password reset flow | High |
| PT-003 | Injection | SQL injection | Critical |
| PT-004 | XSS | Reflected XSS | High |
| PT-005 | IDOR | Direct object reference | High |

### Rules of Engagement
- No DoS attacks
- No social engineering
- Testing hours: [times]
- Emergency contact: [contact]

### Deliverables
- Executive summary
- Technical findings
- Remediation recommendations
- Retest results

## Output Location
Save to: \`specs/security/$ARGUMENTS-pentest-plan.md\`
`,
    },
    {
      path: 'sec/compliance.md',
      roleId: 'security-engineer',
      content: `# Compliance Check

Check compliance with: $ARGUMENTS

## Instructions

You are acting as a **Security Engineer**. Verify compliance requirements.

## Compliance Frameworks

### SOC 2 Type II
| Control | Requirement | Status | Evidence |
|---------|-------------|--------|----------|
| CC6.1 | Access controls | | |
| CC6.2 | Authentication | | |
| CC6.3 | Data encryption | | |
| CC6.6 | Monitoring | | |
| CC6.7 | Change management | | |

### GDPR
- [ ] Data inventory documented
- [ ] Lawful basis identified
- [ ] Privacy notices updated
- [ ] Data subject rights process
- [ ] Breach notification process
- [ ] DPA in place with processors

### HIPAA (if applicable)
- [ ] PHI identified and protected
- [ ] Access controls implemented
- [ ] Audit logs maintained
- [ ] BAAs with vendors
- [ ] Security risk assessment

### PCI DSS (if applicable)
- [ ] Cardholder data secured
- [ ] Network segmentation
- [ ] Vulnerability management
- [ ] Access control
- [ ] Monitoring and testing

## Gap Analysis

| Requirement | Current State | Gap | Remediation |
|-------------|---------------|-----|-------------|
| | | | |

## Action Items
1. [High priority item]
2. [Medium priority item]
3. [Low priority item]

## Output Location
Save to: \`specs/compliance/$ARGUMENTS.md\`
`,
    },
    {
      path: 'sec/incident.md',
      roleId: 'security-engineer',
      content: `# Incident Response

Respond to security incident: $ARGUMENTS

## Instructions

You are acting as a **Security Engineer**. Handle security incident.

## Incident Details

| Field | Value |
|-------|-------|
| Incident ID | INC-XXXX |
| Detected | [DateTime] |
| Severity | [Critical/High/Medium/Low] |
| Status | [Investigating/Contained/Resolved] |
| Reporter | [Name] |

## Timeline
| Time | Event |
|------|-------|
| | Incident detected |
| | Response initiated |
| | [Additional events] |

## Impact Assessment
- **Systems Affected**: [List]
- **Data Affected**: [Type and quantity]
- **Users Affected**: [Number]
- **Business Impact**: [Description]

## Containment Actions
- [ ] Isolate affected systems
- [ ] Block malicious IPs
- [ ] Disable compromised accounts
- [ ] Preserve evidence

## Investigation
- Root cause analysis
- Attack vector identified
- IOCs documented

## Remediation
1. [Immediate actions]
2. [Short-term fixes]
3. [Long-term improvements]

## Communication
- [ ] Internal stakeholders notified
- [ ] Legal/compliance notified
- [ ] Customers notified (if required)
- [ ] Regulators notified (if required)

## Lessons Learned
- What went well
- What could improve
- Action items for future

## Output Location
Save to: \`incidents/$ARGUMENTS.md\`
`,
    },
    {
      path: 'sec/harden.md',
      roleId: 'security-engineer',
      content: `# Security Hardening

Harden system: $ARGUMENTS

## Instructions

You are acting as a **Security Engineer**. Apply security hardening.

## Hardening Checklist

### Application Hardening
- [ ] Remove debug mode
- [ ] Disable unnecessary features
- [ ] Set secure defaults
- [ ] Implement rate limiting
- [ ] Add security headers

### Security Headers
\`\`\`
Content-Security-Policy: default-src 'self'
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Strict-Transport-Security: max-age=31536000; includeSubDomains
Referrer-Policy: strict-origin-when-cross-origin
\`\`\`

### Server Hardening
- [ ] Disable root login
- [ ] SSH key authentication only
- [ ] Firewall configured
- [ ] Unnecessary services disabled
- [ ] Auto-updates enabled

### Database Hardening
- [ ] Strong passwords
- [ ] Network access restricted
- [ ] Encryption enabled
- [ ] Audit logging enabled
- [ ] Backup encryption

### Container Hardening
- [ ] Non-root user
- [ ] Read-only filesystem
- [ ] No privileged mode
- [ ] Resource limits set
- [ ] Security scanning

### Network Hardening
- [ ] TLS 1.2+ only
- [ ] Strong cipher suites
- [ ] Network segmentation
- [ ] DDoS protection
- [ ] WAF configured

## Implementation
[Document specific hardening steps taken]

## Verification
[How to verify hardening is effective]

## Output Location
Save to: \`specs/security/$ARGUMENTS-hardening.md\`
`,
    },
  ];
}
