# Tramy Plugin Submission Guide

This document contains instructions for submitting Tramy to various Claude Code plugin marketplaces.

## Distribution Channels

Tramy is available through 3 channels:

| Channel | Installation | Status |
|---------|-------------|--------|
| npm | `npm install -g tramy && tramy setup` | ✅ Ready |
| Self-hosted | `/plugin marketplace add tramy-dev/tramy` | ✅ Ready |
| claude-code-plugins-plus | `/plugin install tramy@claude-code-plugins-plus` | 🔄 Pending PR |

---

## 1. npm Package (Ready)

```bash
npm install -g tramy
tramy setup
```

**Publish updates:**
```bash
npm version patch  # or minor/major
npm publish
```

---

## 2. Self-hosted Marketplace (Ready)

Users install with:
```bash
/plugin marketplace add tramy-dev/tramy
/plugin install tramy@tramy
```

The plugin files are in the `plugin/` directory of this repo.

**Before publishing, generate plugin files:**
```bash
npm run build:plugin
```

---

## 3. Submit to claude-code-plugins-plus

### Step 1: Fork the repository
```bash
# Fork https://github.com/jeremylongshore/claude-code-plugins-plus
git clone https://github.com/YOUR_USERNAME/claude-code-plugins-plus
cd claude-code-plugins-plus
```

### Step 2: Create plugin directory
```bash
mkdir -p plugins/community/tramy
```

### Step 3: Copy plugin files
```bash
# From tramy repo
cp -r plugin/* ../claude-code-plugins-plus/plugins/community/tramy/
```

### Step 4: Update marketplace catalog

Edit `.claude-plugin/marketplace.extended.json` and add:

```json
{
  "name": "tramy",
  "description": "The Ultimate AI Productivity Toolkit - 25 roles, 137 commands, multi-role workflows",
  "version": "2.0.2",
  "source": "./plugins/community/tramy",
  "author": {
    "name": "tramy.dev",
    "url": "https://github.com/tramy-dev"
  },
  "license": "MIT",
  "tags": ["productivity", "workflow", "roles", "agents", "commands"],
  "categories": ["productivity", "workflow", "development"],
  "stats": {
    "commands": 137,
    "agents": 25
  }
}
```

### Step 5: Sync marketplace
```bash
pnpm run sync-marketplace
# or: npm run sync-marketplace
```

### Step 6: Submit PR

Create a Pull Request with:

**Title:** `feat: Add tramy - AI Productivity Toolkit (137 commands, 25 roles)`

**Description:**
```markdown
## Plugin: tramy

The Ultimate AI Productivity Toolkit for Claude Code.

### Features
- **6 Core Commands**: Multi-role workflows (/plan, /build, /fix, /review, /ship, /use)
- **25 Specialized Roles**: PM, DA, Dev, FE, BE, Ops, Sec, and more
- **131 Role Commands**: Deep expertise for each role
- **21 Multi-Role Workflows**: Complex tasks automated

### Installation
After merge:
```
/plugin install tramy@claude-code-plugins-plus
```

### Links
- [GitHub](https://github.com/tramy-dev/tramy)
- [npm](https://www.npmjs.com/package/tramy)

### Checklist
- [x] Valid `.claude-plugin/plugin.json`
- [x] Comprehensive README.md
- [x] LICENSE file (MIT)
- [x] Tested locally
- [x] No hardcoded secrets
```

---

## Plugin Structure

```
plugin/
├── .claude-plugin/
│   └── plugin.json          # Plugin metadata
├── commands/                 # 137 slash commands
│   ├── plan.md
│   ├── build.md
│   ├── fix.md
│   ├── review.md
│   ├── ship.md
│   ├── use.md
│   ├── da/                   # Data Analyst commands
│   │   ├── query.md
│   │   ├── analyze.md
│   │   └── ...
│   ├── pm/                   # Product Manager commands
│   ├── dev/                  # Developer commands
│   └── ... (25 role folders)
├── agents/                   # 25 agent definitions
│   ├── product-manager.md
│   ├── data-analyst.md
│   └── ...
├── README.md
├── LICENSE
└── marketplace-entry.json    # For submission reference
```

---

## After PR Merged

Users can install with:
```bash
# Add marketplace (one-time)
/plugin marketplace add jeremylongshore/claude-code-plugins-plus

# Install tramy
/plugin install tramy@claude-code-plugins-plus
```

Or shorter if marketplace is already added:
```bash
/plugin install tramy@claude-code-plugins-plus
```
