---
id: kane-cli-quickstart
title: Quick Start
sidebar_label: Quick Start
description: Authenticate Kane CLI and run your first browser automation test in under 5 minutes.
keywords:
  - kane cli quickstart
  - kaneai
  - testmu ai
  - browser test
  - first test
url: https://www.testmuai.com/support/docs/kane-cli-quickstart/
site_name: TestMu AI
slug: kane-cli-quickstart/
displayed_sidebar: KaneCLISidebar
canonical: https://www.testmuai.com/support/docs/kane-cli-quickstart/
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

## Step 1: Install

```bash
npm install -g @testmuai/kane-cli
```

See [Installation](/support/docs/kane-cli-installation/) for platform requirements and troubleshooting.

## Step 2: Authenticate

<Tabs groupId="auth-method">

<TabItem value="oauth" label="OAuth (Recommended)">

```bash
kane-cli login
```

This opens your default browser to the <BrandName /> sign-in page. After you authorize, tokens are stored securely on your machine and refresh automatically: you rarely need to log in again.

Uses OAuth 2.1 PKCE. No credentials are stored in plain text.

</TabItem>

<TabItem value="basic" label="Basic Auth">

```bash
kane-cli setup \
  --auth-method basic \
  --username YOUR_USERNAME \
  --access-key YOUR_ACCESS_KEY
```

Find your username and access key on the <BrandName /> dashboard under **Settings → Keys**.

Use this method for environments without a browser (servers, containers, CI/CD).

</TabItem>

<TabItem value="ci" label="CI/CD">

For non-interactive CI pipelines, pass credentials inline:

```bash
kane-cli run "your objective" \
  --url https://example.com \
  --username $LT_USERNAME \
  --access-key $LT_ACCESS_KEY \
  --headless
```

Store `LT_USERNAME` and `LT_ACCESS_KEY` as secrets in your CI/CD platform. See [CI/CD Integration](/support/docs/kane-cli-cicd/) for platform-specific guides.

</TabItem>

</Tabs>

Verify authentication at any time:

```bash
kane-cli whoami
```

## Step 3: Run Your First Test

```bash
kane-cli run \
  --url https://example.com \
  "Click the 'More information' link and verify the page loads"
```

Chrome opens, the AI agent navigates the page, clicks the link, and validates the outcome. You see real-time step progress in your terminal.

## Step 4: Read the Result

A passing test looks like this:

```
✓ PASSED in 3 steps (8.4s)

  Step 1: Navigate to https://example.com ✓
  Step 2: Click "More information" link ✓
  Step 3: Verify page loaded ✓

Session: ~/.testmuai/kaneai/sessions/2026-04-14_10-30-45_a1b2c3
```

A failing test exits with code `1` and shows which step failed and why.

| Exit Code | Meaning |
|-----------|---------|
| `0` | Test passed |
| `1` | Test failed (assertion not met) |
| `2` | Error (auth failure, Chrome crash) |
| `3` | Timeout or cancelled |

:::tip
Run `kane-cli` (no arguments) to open the interactive TUI: a full terminal UI where you can type objectives, see step-by-step progress, and chain multiple tests in one session with persistent browser state.
:::

## Next Steps

- [Writing Objectives](/support/docs/kane-cli-writing-objectives/): Learn the three patterns: actions, assertions, extractions
- [Modes of Operation](/support/docs/kane-cli-modes/): Understand Interactive TUI, Headless CLI, and Agent Mode
- [Variables & Context](/support/docs/kane-cli-variables-and-context/): Parameterize tests with credentials and project-specific context
- [CI/CD Integration](/support/docs/kane-cli-cicd/): Add Kane CLI to your pipeline
