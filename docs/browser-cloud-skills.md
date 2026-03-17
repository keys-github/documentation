---
id: browser-cloud-skills
title: Skills - TestMu AI Browser Cloud
hide_title: true
sidebar_label: AI Agent Skills
displayed_sidebar: "BrowserCloudSidebar"
description: Pre-built browser capabilities packaged as tools for AI agent frameworks like LangChain, CrewAI, and AutoGen.
keywords:
  - browser cloud skills
  - ai agent tools
  - langchain browser tool
  - crewai browser tool
  - agent framework integration
url: https://www.testmuai.com/support/docs/browser-cloud-skills/
site_name: TestMu AI
slug: browser-cloud-skills/
canonical: https://www.testmuai.com/support/docs/browser-cloud-skills/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Browser Cloud",
          "item": `${BRAND_URL}/support/docs/what-is-browser-cloud/`
        },{
          "@type": "ListItem",
          "position": 4,
          "name": "Skills",
          "item": `${BRAND_URL}/support/docs/browser-cloud-skills/`
        }]
      })
    }}
></script>

# AI Agent Skills (Coming Soon)

Pre-built browser capabilities packaged as tools for AI agent
frameworks. Instead of writing browser automation code, your agent declares
what it needs and the Skill handles everything - session creation, browser
interaction, data extraction, and cleanup - all powered by <BrandName /> Browser
Cloud.

In the meantime, you can build equivalent functionality using the [TestMu AI Browser SDK to build sessions](/support/docs/launch-first-session/) and [scrape, screenshot, and PDF](/support/docs/browser-cloud-quick-actions/).

## Planned Framework Integrations

- **LangChain** - BrowseWebTool, ScrapePageTool, FillFormTool, ScreenshotTool
- **CrewAI** - WebResearchTool, FormSubmissionTool, MonitoringTool
- **AutoGen** - BrowserSkill, DataExtractionSkill
- **OpenAI Function Calling** - browse_web, scrape_page, take_screenshot
- **Claude Computer Use** - TestMu AI Browser Provider


## Planned Skill Catalog

```
Web Research
  Scrape & Extract
  Multi-Page Crawl
  Content Monitoring (diff detection)

Data Entry & Forms
  Form Fill (single page)
  Multi-Step Wizard
  File Upload

Authentication
  Login & Persist Session
  OAuth Flow Handler

Document Generation
  Page to PDF
  Page to Screenshot
  Page to Markdown
```

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="/support/docs/what-is-browser-cloud/">
        Browser Cloud
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        Skills
      </span>
    </li>
  </ul>
</nav>
