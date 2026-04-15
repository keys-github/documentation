---
id: kane-cli-installation
title: Installing Kane CLI
sidebar_label: Installation
description: Install Kane CLI using npm. Supports macOS (Apple Silicon and Intel), Linux (x64), and Windows (x64).
keywords:
  - kane cli
  - install kane cli
  - kaneai
  - testmu ai
  - npm install
url: https://www.testmuai.com/support/docs/kane-cli-installation/
site_name: TestMu AI
slug: kane-cli-installation/
displayed_sidebar: KaneCLISidebar
canonical: https://www.testmuai.com/support/docs/kane-cli-installation/
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

## Install

```bash
npm install -g @testmuai/kane-cli
```

Platform-specific native binaries are installed automatically for your OS. No additional configuration is needed.

## Verify

```bash
kane-cli --version
```

## Platform Support

| Platform | Architecture | Supported |
|----------|-------------|-----------|
| macOS | Apple Silicon (ARM) | ✅ |
| macOS | Intel (x64) | ✅ |
| Linux | x64 | ✅ |
| Windows | x64 | ✅ |

:::note
Kane CLI requires **Node.js 18 or higher** and **Google Chrome** installed on your system. Chrome is used as the automation browser and is launched automatically when you run a test.
:::

## Update

```bash
npm update -g @testmuai/kane-cli
```

## Uninstall

```bash
npm uninstall -g @testmuai/kane-cli
```

## Troubleshooting Installation

**`kane-cli: command not found` after install**

Your npm global bin directory is not in your PATH. Find it and add it:

```bash
# Find your npm global bin directory
npm root -g

# Then add it to your PATH in ~/.zshrc or ~/.bashrc
export PATH="$(npm root -g)/../bin:$PATH"
```

**Installation fails on Node 16**

Kane CLI requires Node.js 18+. Check your version and upgrade if needed:

```bash
node --version
```

## Next Step

[Quick Start](/support/docs/kane-cli-quickstart/): Authenticate and run your first test.
