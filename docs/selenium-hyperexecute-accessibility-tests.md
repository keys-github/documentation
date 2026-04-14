---
id: selenium-hyperexecute-accessibility-tests
title: Automation Tests with Accessibility Tool using Selenium
hide_title: false
sidebar_label: Selenium
description: Run Accessibility Automation with Selenium on HyperExecute to detect and report accessibility issues during automated execution.
keywords:
    - TestMu AI
    - Accessibility
    - Testing
    - Selenium
    - HyperExecute
    - Automation
url: https://www.testmuai.com/support/docs/selenium-hyperexecute-accessibility-tests/
site_name: TestMu AI
slug: selenium-hyperexecute-accessibility-tests/
canonical: https://www.testmuai.com/support/docs/selenium-hyperexecute-accessibility-tests/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
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
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Selenium Accessibility Testing on HyperExecute",
          "item": `${BRAND_URL}/support/docs/selenium-hyperexecute-accessibility-tests/`
        }]
      })
    }}
></script>

# Automation Tests with Accessibility Tool using Selenium

Use this guide to run Selenium-based Accessibility Automation on HyperExecute.

:::note
This guide applies to Selenium-based execution on HyperExecute. Reach out to support if the Accessibility feature still needs to be enabled for your organization.
:::

## Prerequisites

- A valid HyperExecute YAML file
- HyperExecute CLI installed locally
- Your [<BrandName /> Username and Access key](/support/docs/using-environment-variables-for-authentication-credentials/)
- A Selenium project that already runs on HyperExecute

## High-level flow

1. Configure your Selenium suite to run on the grid.
2. Enable Accessibility capabilities in the test session.
3. Trigger the HyperExecute run using your YAML configuration.
4. Open the resulting Accessibility report after execution completes.

## Related docs

- [Accessibility Automation (Overview)](/support/docs/accessibility-automation/)
- [Configure Accessibility Automation](/support/docs/accessibility-automation-settings/)
- [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/)
