---
id: kane-cli-troubleshooting
title: Troubleshooting
sidebar_label: Troubleshooting
description: Fix common Kane CLI issues: Chrome launch failures, authentication errors, run timeouts, variables not resolving, and Agent Mode output problems.
keywords:
  - kane cli troubleshooting
  - kaneai errors
  - testmu ai
  - chrome failed to launch
  - authentication failed
url: https://www.testmuai.com/support/docs/kane-cli-troubleshooting/
site_name: TestMu AI
slug: kane-cli-troubleshooting/
displayed_sidebar: KaneCLISidebar
canonical: https://www.testmuai.com/support/docs/kane-cli-troubleshooting/
---

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

## Log Locations

Before diagnosing, know where to look:

| Log | Path |
|-----|------|
| Run text log | `{run_dir}/run.log` |
| Step detail (JSON) | `{run_dir}/run-test/step_NNN.json` |
| Step screenshot | `{run_dir}/run-test/screenshots/step_NNN.png` |
| Run summary | `{run_dir}/run-test/run_summary.json` |
| Session log | `{session_dir}/tui.log` |
| All sessions | `~/.testmuai/kaneai/sessions/` |

The `run_end` event in Agent Mode provides `session_dir` and `run_dir` directly.

---

## Chrome Issues

### "Chrome failed to launch"

**Cause:** Chrome is not installed, or CDP ports 9222–9230 are already in use.

**Fix:**
1. Install Google Chrome if not present
2. Check for processes on CDP ports:
   ```bash
   lsof -i :9222-9230
   ```
3. Kill any blocking processes, or connect to the existing instance:
   ```bash
   kane-cli run "..." --cdp-endpoint http://localhost:9222
   ```

### "CDP endpoint not reachable"

**Cause:** Using `--cdp-endpoint` but Chrome is not running on that port.

**Fix:** Remove `--cdp-endpoint` and let Kane CLI manage Chrome automatically. Or start Chrome with remote debugging before running:

```bash
google-chrome --remote-debugging-port=9222 &
kane-cli run "..." --cdp-endpoint http://localhost:9222
```

### Chrome opens then closes immediately

**Cause:** Another Kane CLI instance is already running and holds the Chrome profile lock.

**Fix:** Check for running kane-cli processes:
```bash
ps aux | grep kane-cli
```
Kill any existing processes, then retry.

---

## Authentication Issues

### "Authentication failed" (exit code 2)

**Cause:** Expired tokens or incorrect credentials.

**Fix:** Refresh tokens with `kane-cli login`, or verify your active profile:
```bash
kane-cli whoami
```

### "Not configured" on first run

**Cause:** No profile exists yet.

**Fix:** Run first-time setup:
```bash
kane-cli setup --auth-method basic --username YOUR_USERNAME --access-key YOUR_ACCESS_KEY
```

Get credentials from the <BrandName /> dashboard under **Settings → Keys**.

### Basic auth not working

**Cause:** Wrong username or access key.

**Fix:** Verify your credentials on the <BrandName /> dashboard. Username and access key are case-sensitive. Make sure you're using the access key (not the password).

---

## Run Issues

### "Run timed out" (exit code 3)

**Cause:** Objective is too complex, page is slow to load, or `--max-steps` is too low.

**Fix:**
- Increase `--timeout`: `--timeout 300`
- Increase `--max-steps`: `--max-steps 60`
- Split the objective into smaller, sequential runs

### Agent repeats the same action

**Cause:** The agent is stuck in a loop: the page didn't change after the action.

**Fix:** Rephrase the objective to be more explicit. Add an assertion after the action to confirm state changed:
```
"click the Save button, assert the page shows 'Saved successfully'"
```

### "Variables not resolving": `{{key}}` appears literally

**Cause:** Variable file not loaded, wrong JSON format, or wrong variable key name.

**Fix:**
1. Test with inline variables first:
   ```bash
   kane-cli run "Login as {{email}}" --variables '{"email": {"value": "test@example.com"}}'
   ```
2. Verify your variable file JSON is valid: `jq . your-file.json`
3. Check the variable file is in the right directory (see [Variables & Context](/support/docs/kane-cli-variables-and-context/))

### Assertions fail even though the page looks correct

**Cause:** The assertion phrasing doesn't match what's on the page, or there's a timing issue.

**Fix:**
1. Check the screenshot at `{run_dir}/run-test/screenshots/step_NNN.png`: see exactly what the agent saw
2. Refine the assertion: use `assert the page contains` (substring) instead of exact text
3. Add a wait: `"wait for the confirmation message to appear, then assert..."`

---

## Agent Mode Issues

### No NDJSON output / only seeing TUI

**Cause:** Missing `--agent` flag.

**Fix:** Add `--agent` to your command:
```bash
kane-cli run "..." --agent --headless
```

### NDJSON parsing fails: `jq` errors or unexpected output

**Cause:** Stderr is mixing with stdout, or you're trying to parse mid-stream events.

**Fix:** Redirect stderr and use `tail -1` to get only the `run_end` event:
```bash
kane-cli run "..." --agent 2>/dev/null | tail -1 | jq .
```

### `ask_user` event fires and blocks the run

**Cause:** The objective requires human input in an agent context.

**Fix:** Rewrite the objective to avoid prompts. For example, instead of "navigate through the sign-up flow", be explicit:
```
"click Sign Up, fill email with '{{email}}', fill password with '{{password}}', click Create Account"
```

---

## Installation Issues

### `kane-cli: command not found` after install

**Cause:** npm global bin directory is not in your PATH.

**Fix:**
```bash
# Find the npm global bin directory
npm root -g

# Add to PATH (adjust path based on above output)
export PATH="$(npm root -g)/../bin:$PATH"

# Make permanent: add to ~/.zshrc or ~/.bashrc
echo 'export PATH="$(npm root -g)/../bin:$PATH"' >> ~/.zshrc
```

### Installation fails

**Cause:** Node.js version is below 18.

**Fix:** Check your version and upgrade:
```bash
node --version   # Must be 18 or higher
```

---

## Filing a Bug Report

If you encounter behavior that looks like an agent bug (not auth, timeout, or a vague objective), file an issue:

**[github.com/LambdaTest/kane-cli/issues](https://github.com/LambdaTest/kane-cli/issues)**

Include the following:

| Field | How to Get It |
|-------|---------------|
| Kane CLI version | `kane-cli --version` |
| OS | macOS (ARM/Intel), Linux (x64/ARM64), Windows (x64) |
| Install method | npm, Homebrew, curl, binary |
| What happened | Describe the behavior |
| Reproduction steps | The exact `kane-cli run` command and objective |
| Expected behavior | What should have happened |
| Logs | `run_summary.json` and `step_NNN.json` from `run_dir` |
| Screenshot | `screenshots/step_NNN.png` from `run_dir` |

Do NOT file bug reports for: auth issues, low timeouts, vague objectives, or site-side errors (CAPTCHAs, 500 errors).
