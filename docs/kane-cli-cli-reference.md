---
id: kane-cli-cli-reference
title: CLI Reference
sidebar_label: CLI Reference
description: "Complete command and flag reference for Kane CLI: all commands, options, exit codes, TUI slash commands, keyboard shortcuts, and directory structure."
keywords:
  - kane cli reference
  - kane cli commands
  - kaneai
  - testmu ai
  - cli flags
url: https://www.testmuai.com/support/docs/kane-cli-cli-reference/
site_name: TestMu AI
slug: kane-cli-cli-reference/
displayed_sidebar: KaneCLISidebar
canonical: https://www.testmuai.com/support/docs/kane-cli-cli-reference/
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

## Commands

### `kane-cli`

Launch the interactive TUI.

```bash
kane-cli
```

---

### `kane-cli run`

Run a browser automation test.

```bash
kane-cli run "<objective>" [options]
```

| Flag | Description | Default |
|------|-------------|---------|
| `--url <url>` | Starting URL for the browser | Last used or configured URL |
| `--headless` | Run Chrome without a visible window | Off |
| `--max-steps <n>` | Maximum agent reasoning steps | 30 |
| `--timeout <s>` | Abort after N seconds | No limit |
| `--cdp-endpoint <url>` | Connect to an existing Chrome via CDP | Auto-launch Chrome |
| `--ws-endpoint <url>` | Connect via WebSocket (e.g. LambdaTest remote grid) | Local Chrome |
| `--variables <json>` | Inline variable JSON | None |
| `--variables-file <path>` | Load variables from a JSON file | None |
| `--global-context <file>` | Override global context markdown | `~/.testmuai/kaneai/global-memory.md` |
| `--local-context <file>` | Override local context markdown | `.testmuai/context.md` |
| `--agent` | Output structured NDJSON (for AI coding agents) | Off |
| `--code-export` | Generate code export after run uploads | Off |
| `--username <user>` | LambdaTest username (overrides stored profile) | N/A |
| `--access-key <key>` | LambdaTest access key (overrides stored profile) | N/A |

---

### `kane-cli login`

OAuth login. Opens browser for authentication.

```bash
kane-cli login [--profile <name>]
```

Uses OAuth 2.1 PKCE. Tokens stored locally and auto-refreshed.

---

### `kane-cli setup`

First-time setup with explicit auth method. Use in CI/CD or agent contexts where `kane-cli login` is not possible.

```bash
kane-cli setup \
  --auth-method basic \
  --username <user> \
  --access-key <key> \
  [--profile <name>]
```

| Flag | Description |
|------|-------------|
| `--auth-method` | `basic` or `oauth` |
| `--username` | LambdaTest username |
| `--access-key` | LambdaTest access key |
| `--profile` | Optional profile name (default: `default`) |

---

### `kane-cli logout`

Revoke tokens and remove stored credentials for the active profile.

```bash
kane-cli logout [--profile <name>]
```

---

### `kane-cli whoami`

Show the active profile and authentication status.

```bash
kane-cli whoami
```

---

### `kane-cli profiles`

Manage multiple accounts or environments.

```bash
kane-cli profiles list
kane-cli profiles switch --profile <name>
kane-cli profiles delete --profile <name>
```

---

### `kane-cli config`

View and modify persistent settings.

```bash
kane-cli config show                       # Show all settings
kane-cli config set-url <url>              # Set default URL
kane-cli config set-window <W>x<H>        # Set browser window size
kane-cli config set-mode <action|testing>  # Set mode
kane-cli config set-model <model>          # Set model
kane-cli config set-chrome-profile         # Interactive Chrome profile picker (human only)
kane-cli config set-project                # Interactive TMS project picker (human only)
kane-cli config set-folder                 # Interactive TMS folder picker (human only)
kane-cli config reset                      # Reset all settings to defaults
```

:::note
Commands marked "human only" launch an interactive picker UI. AI agents cannot run these: ask the user to run them directly.
:::

---

### `kane-cli feedback`

Submit feedback on a completed test run.

```bash
kane-cli feedback \
  --test-id <id> \
  --feedback-type <positive|negative> \
  --details "optional message"
```

---

## Exit Codes

| Code | Meaning |
|------|---------|
| `0` | Test passed |
| `1` | Test failed (assertion not met) |
| `2` | Error (auth failure, Chrome crash, infra issue) |
| `3` | Timeout or cancelled |

---

## TUI Slash Commands

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

---

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| Enter | Submit objective |
| Ctrl+C | Cancel current run |
| Ctrl+C (twice) | Exit TUI |
| Esc | Go back / close picker |
| Up / Down | Navigate menu or input history |
| Tab | Accept autocomplete |

---

## Settings Reference

| Setting | Default | Command |
|---------|---------|---------|
| `window_size` | `1920x1080` | `config set-window` |
| `default_url` | None | `config set-url` |
| `chrome_profile_path` | `~/.testmuai/kaneai/chrome-profile` | `config set-chrome-profile` |
| `project_id` / `project_name` | None | `config set-project` |
| `folder_id` / `folder_name` | None | `config set-folder` |

Settings are stored at `~/.testmuai/kaneai/tui-config.json`.

---

## Directory Structure

```
~/.testmuai/kaneai/
├── tui-config.json              # Persistent settings
├── config.json                  # Shared auth configuration
├── global-memory.md             # Global agent context
├── chrome-profile/              # Default Chrome user profile
├── profiles/                    # Stored credentials
│   └── {profile-name}/
│       └── {environment}/
│           └── credentials      # OAuth tokens or basic auth
├── sessions/                    # All session history
│   └── {session-id}/
│       ├── session.json         # Session metadata and run list
│       ├── tui.log              # Session event log
│       └── runs/
│           └── {n}/             # Per-run directory
│               ├── run.log
│               └── run-test/
│                   ├── run_summary.json
│                   ├── step_001.json
│                   ├── step_002.json
│                   ├── screenshots/
│                   │   ├── step_001.png
│                   │   └── step_002.png
│                   └── dag_diagram.md
└── variables/                   # Global variable files
    └── *.json

.testmuai/                       # Project-local (in cwd)
├── context.md                   # Project-specific agent context
└── variables/
    └── *.json                   # Project-specific variables
```
