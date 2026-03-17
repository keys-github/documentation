---
id: browser-cloud-quickstart
title: Quickstart - TestMu AI Browser Cloud
hide_title: true
sidebar_label: Launch Your First Session
description: Get up and running with your first TestMu AI Browser Cloud session in a few minutes using TypeScript and Puppeteer.
keywords:
  - browser cloud quickstart
  - browser cloud getting started
  - testmu sdk setup
  - puppeteer cloud browser
  - ai agent browser setup
url: https://www.testmuai.com/support/docs/launch-first-session/
site_name: TestMu AI
slug: launch-first-session/
canonical: https://www.testmuai.com/support/docs/launch-first-session/
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
          "name": "Quickstart",
          "item": `${BRAND_URL}/support/docs/launch-first-session/`
        }]
      })
    }}
></script>

# Launch Your First Browser Session
***

This guide walks you through setting up your <BrandName /> account, creating
your first browser session on <BrandName /> Browser Cloud, and driving it using
TypeScript/Puppeteer. In just a few minutes, you'll be programmatically
controlling a cloud browser.


## Prerequisites
***

**Step 1**: [Sign up on TestMu AI](https://www.testmuai.com)

**Step 2**: Get your credentials:

1. After signing up, navigate to **Settings → Account Settings**
2. Find your **Username** and **Access Key**

**Step 3**: Set up environment variables:

1. Create a `.env` file in your project root (if you don't have one)
2. Add your credentials:

```
LT_USERNAME=your_username
LT_ACCESS_KEY=your_access_key
```

> Make sure to add `.env` to your `.gitignore` file to keep your credentials secure.


## Installing the TestMu AI Browser SDK
***

```bash
npm i @testmuai/testmu-cloud
```

**Requirements:** Node.js 16+ (Node 18+ required if using the Playwright adapter)


## Create Your First Session
***

Let's create a simple script that launches a cloud browser, navigates to a page,
and cleans up:

```typescript
// my-first-session.ts

import { Browser } from '@testmuai/testmu-cloud';

const client = new Browser();

async function main() {
    // Create a session
    const session = await client.sessions.create({
        adapter: 'puppeteer',
        lambdatestOptions: {
            build: 'Getting Started',
            name: 'My First Session',
            'LT:Options': {
                username: process.env.LT_USERNAME,
                accessKey: process.env.LT_ACCESS_KEY,
            }
        }
    });

    console.log('Session created:', session.id);
    console.log('View live session at:', session.sessionViewerUrl);

    // Your session is now ready to use!
    // When done, release the session
    await client.sessions.release(session.id);
    console.log('Session released');
}

main().catch(console.error);
```


## Connecting to Your Session
***

Now that you have a session, connect to it using your preferred automation tool:

```typescript
// Connect via Puppeteer
const browser = await client.puppeteer.connect(session);
const page = (await browser.pages())[0];

await page.goto('https://example.com');
console.log('Title:', await page.title());
```

Run it:

```bash
npx ts-node my-first-session.ts
```

You can open the `sessionViewerUrl` printed in the console to watch the browser
session live on the <BrandName /> dashboard.


## Session Features
***

Want to do more with your session? Here are some common options you can add when
creating:

```typescript
const session = await client.sessions.create({
    adapter: 'puppeteer',
    stealthConfig: {                  // Make the browser look human
        humanizeInteractions: true,
        randomizeUserAgent: true,
    },
    profileId: 'my-saved-login',      // Persist auth across runs
    tunnel: true,                     // Access localhost from cloud
    timeout: 600000,                  // 10-minute timeout
    lambdatestOptions: { ... }
});
```

You've now created your first TestMu AI session and learned the basics of session
management. With these fundamentals, you can start building more complex agent
workflows on <BrandName /> Browser Cloud.



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
        Quickstart
      </span>
    </li>
  </ul>
</nav>
