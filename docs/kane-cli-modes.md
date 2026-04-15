---
id: kane-cli-modes
title: Modes of Operation
sidebar_label: Modes
description: "Kane CLI has three modes: Interactive TUI for development, Headless CLI for scripts and CI/CD, and Agent Mode for AI coding agent integrations."
keywords:
  - kane cli modes
  - interactive tui
  - headless cli
  - agent mode
  - kaneai
  - testmu ai
url: https://www.testmuai.com/support/docs/kane-cli-modes/
site_name: TestMu AI
slug: kane-cli-modes/
displayed_sidebar: KaneCLISidebar
canonical: https://www.testmuai.com/support/docs/kane-cli-modes/
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

Kane CLI has three modes. Choose based on who (or what) is running the test.

| Mode | Command | Output | Best For |
|------|---------|--------|----------|
| **Interactive TUI** | `kane-cli` | Terminal UI | Development, exploration, chained sessions |
| **Headless CLI** | `kane-cli run "..." --headless` | Formatted text + JSON | CI/CD, shell scripts |
| **Agent Mode** | `kane-cli run "..." --agent` | NDJSON on stdout | AI coding agents (Claude, Codex, Gemini) |

---

## Interactive TUI

Launch with no arguments:

```bash
kane-cli
```

The full terminal UI starts with auth verification, then a main menu.

### Main Menu

Select from four options: **Run**, **Auth**, **Config**, **Exit**.

Select **Run** to open the chat interface. Type a natural language objective and press Enter. Real-time step progress streams to the terminal as the agent works.

### Multi-Run Sessions

The browser stays open between runs. Each new objective inherits the previous session's state: cookies, login sessions, and page context carry over. This lets you chain related tests without repeating setup:

```
> go to https://myapp.com and log in as admin
  ✓ PASSED (5 steps, 8.2s)

> navigate to User Management and create a new user "testuser@example.com"
  ✓ PASSED (7 steps, 12.1s)

> verify the new user appears in the users table
  ✓ PASSED (3 steps, 4.5s)
```

### TUI Slash Commands

| Command | Description |
|---------|-------------|
| `/cancel` | Stop the current run |
| `/clear` | Clear chat history |
| `/login` | Authenticate |
| `/logout` | Sign out |
| `/whoami` | Show active user and auth status |
| `/config show` | Show current settings |
| `/profiles` | Manage auth profiles |
| `/help` | Show all commands |
| `/exit` | Save session and quit |

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| Enter | Submit objective |
| Ctrl+C | Cancel current run |
| Ctrl+C (twice) | Exit TUI |
| Esc | Go back / close picker |
| Up / Down | Navigate menu or history |
| Tab | Accept autocomplete |

---

## Headless CLI

Run a single test directly without the interactive UI:

```bash
kane-cli run "Search for 'automation testing' on Google" \
  --url https://google.com \
  --headless
```

Step progress streams to **stderr**. The final JSON result outputs to **stdout**. The process exits with a [standard exit code](/support/docs/kane-cli-cli-reference/#exit-codes).

Use this mode for shell scripts, CI/CD pipelines, and any scenario where the interactive TUI is not needed.

---

## Agent Mode

Add `--agent` to get structured NDJSON output designed for AI coding agents:

```bash
kane-cli run "Verify login page loads" --url https://myapp.com --agent --headless
```

With `--agent`:
- The interactive TUI is **fully suppressed**: no boot screen, no menus
- Each event is a **single JSON line** on stdout
- Progress UI renders to **stderr** (clean separation)
- Stdin is not used (no interactive prompts)

This mode is how Claude Code, Codex CLI, and Gemini CLI consume Kane CLI results. The agent reads the NDJSON stream, parses the final `run_end` event, and presents results to you.

See [Agent Mode](/support/docs/kane-cli-agent-mode/) for the full event schema and parsing guide.

:::tip
Always combine `--agent` with `--headless` in non-interactive environments to prevent display server errors.
:::
