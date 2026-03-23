---
id: browser-cloud-intro
title: Welcome to TestMu AI Browser Cloud
hide_title: true
sidebar_label: What is Browser Cloud?
description: TestMu AI Browser Cloud is cloud browser infrastructure purpose-built for AI agents, with built-in stealth, session persistence, and full observability.
keywords:
  - browser cloud
  - ai browser agents
  - cloud browser infrastructure
  - stealth browsing
  - browser automation
url: https://www.testmuai.com/support/docs/what-is-browser-cloud/
site_name: TestMu AI
slug: what-is-browser-cloud/
canonical: https://www.testmuai.com/support/docs/what-is-browser-cloud/
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
        }]
      })
    }}
></script>

# What is <BrandName /> Browser Cloud?
***

<BrandName /> Browser Cloud gives your AI agents on-demand access to real
browsers in the cloud. Build agents that browse, scrape, and interact with any
website - without getting blocked, losing login state, or managing browser
infrastructure yourself.

<iframe src="https://assets.testmuai.com/resources/images/testmu-ai/sectionFold/browser-cloud-final-home-video.webm" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen height="400" width="710"></iframe>

## Why Browser Cloud?
***

​A better way to take your agents and LLMs online

AI agents that interact with the web run into real problems fast: bot detection,
CAPTCHAs, lost cookies, flaky headless browsers, and no way to see what went
wrong. Browser Cloud solves all of this out of the box.

| Challenge | How Browser Cloud Handles It |
|-----------|----------------------------|
| Sites detect and block your agent | Built-in stealth patches browser fingerprints so your agent looks human |
| Login state lost between runs | Profiles and context transfer persist cookies, storage, and auth |
| Can't access localhost or internal apps | Encrypted tunnels connect cloud browsers to your local network |
| No visibility into what the agent did | Every session is recorded with video, console logs, and network capture |
| Uploading/downloading files is painful | File service handles transfers between your machine and the cloud browser |
| Managing browser infra at scale | 3,000+ browser/OS combinations managed by <BrandName /> |


## Prerequisites
***

To use <BrandName /> Browser Cloud, you need:

1. A <BrandName /> account - [sign up on TestMu AI](https://www.testmuai.com) if you don't have one
2. Your **Username** and **Access Key** from **Settings -> Account Settings**
3. **Node.js 16+** installed (Node 18+ if using Playwright)

## Get Started
***

Ready to get started? [Launch your first cloud browser session](/support/docs/launch-first-session/).


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
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        Browser Cloud Introduction
      </span>
    </li>
  </ul>
</nav>
