---
id: kane-cli-variables-and-context
title: Variables & Context
sidebar_label: Variables & Context
description: Use variables to parameterize objectives with secrets and reusable values. Use context files to give the agent project-specific knowledge.
keywords:
  - kane cli variables
  - kane cli context
  - kaneai
  - testmu ai
  - secrets
  - test data
url: https://www.testmuai.com/support/docs/kane-cli-variables-and-context/
site_name: TestMu AI
slug: kane-cli-variables-and-context/
displayed_sidebar: KaneCLISidebar
canonical: https://www.testmuai.com/support/docs/kane-cli-variables-and-context/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.testmuai.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.testmuai.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Kane CLI",
          "item": "https://www.testmuai.com/support/docs/kane-cli-introduction/"
        }]
      })
    }}
></script>

**Variables** keep credentials and test data out of your objectives and objective strings. **Context files** give the agent background knowledge about your application: navigation patterns, known quirks, and project-specific conventions.

---

## Variables

### Format

Variables are JSON objects. Each key maps to a value descriptor:

```json
{
  "app_url": {
    "value": "https://staging.myapp.com"
  },
  "email": {
    "value": "qa@example.com"
  },
  "password": {
    "value": "s3cret!",
    "secret": true
  },
  "api_token": {
    "value": "sk-abc123",
    "secret": true,
    "syntax": "{{api_token}}"
  }
}
```

| Field | Required | Description |
|-------|----------|-------------|
| `value` | Yes | The value to substitute into the objective |
| `secret` | No | If `true`, mask value in all logs and output |
| `syntax` | No | Custom template syntax (default: `{{key}}`) |

### Usage in Objectives

Reference variables with `{{key}}` syntax:

```bash
kane-cli run \
  --url https://myapp.com \
  --variables-file ./creds.json \
  "fill the email field with '{{email}}',
   fill the password field with '{{password}}',
   click Login,
   assert the Dashboard is visible"
```

### Loading Order

Variables are merged from multiple sources. Later sources override earlier ones:

1. `~/.testmuai/kaneai/variables/*.json`: global, all files alphabetically
2. `.testmuai/variables/*.json`: project-level, in current working directory
3. `--variables-file <path>`: explicit file
4. `--variables '{"key": {"value": "..."} }'`: inline JSON (highest priority)

### Example Variable File

```json
{
  "app_url": { "value": "https://staging.myapp.com" },
  "admin_email": { "value": "admin@example.com" },
  "admin_password": { "value": "admin_pass_123", "secret": true },
  "customer_email": { "value": "customer@example.com" },
  "customer_password": { "value": "customer_pass_456", "secret": true },
  "test_product_sku": { "value": "PROD-2024-001" }
}
```

:::warning
Do not commit credential files to version control. Add `.testmuai/variables/` to your `.gitignore`, or use environment variable substitution in CI/CD.
:::

---

## Context Files

Context files are plain markdown files. They give the agent additional instructions that apply across all runs in that scope.

### Two Levels

| Level | Path | Use For |
|-------|------|---------|
| **Global** | `~/.testmuai/kaneai/global-memory.md` | Company-wide terminology, shared test accounts, universal patterns |
| **Local** | `.testmuai/context.md` (in project directory) | App-specific navigation, known UI quirks, test environment details |

### Example Local Context File

```markdown
# MyApp Staging Context

## Application Overview
MyApp is a SaaS project management tool. Users create projects, invite members, and track tasks.

## Test Environment
- URL: https://staging.myapp.local
- Database resets daily at 2 AM UTC
- File uploads are disabled in staging

## Navigation Patterns
- Main menu is in the left sidebar (hover to expand)
- Settings is under the top-right user avatar menu
- Deep links work: /dashboard/projects/123/tasks

## Known UI Quirks
- The modal close button sometimes needs two clicks
- Date picker defaults to today: click the field to open
- The "Copy Link" toast appears bottom-right for 3 seconds

## Common Test Flows
1. Create a project: Dashboard → "New Project" → fill name → "Create"
2. Invite a member: Project Settings → "Team" → "Invite" → enter email → "Send"
3. Complete a task: Tasks page → click task → "Mark Complete" → confirm dialog

## Test Data
- Existing project for testing: "Test Project" (ID: proj_12345)
- Existing user: john@example.com
```

### Override Per Run

Override either context file for a single run:

```bash
kane-cli run "your objective" \
  --global-context ./custom-global.md \
  --local-context ./custom-local.md
```

### What to Put in Context

**Global context:**
- Company terminology and naming conventions
- Standard test account references (no hardcoded values)
- Performance expectations (e.g., "page loads in under 3 seconds")
- Universal navigation patterns

**Local context:**
- App overview and purpose
- Test environment URL and known limitations
- Navigation patterns specific to this app
- Known UI quirks and workarounds
- Common test flows
- Test data references (IDs, emails: no passwords)

**Keep out of context:**
- Hardcoded secrets (use variables)
- Large code blocks or logs
- Information that changes frequently
