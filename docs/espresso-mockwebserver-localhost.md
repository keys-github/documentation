---
id: espresso-mockwebserver-localhost
title: Testing with MockWebServer & Localhost
sidebar_label: MockWebServer & Localhost
description: Test applications using MockWebServer or localhost-based mock servers with Espresso on TestMu AI real devices.
keywords:
  - espresso
  - mockwebserver
  - localhost testing
  - port forwarding
  - mock server
  - real devices
url: https://www.testmuai.com/support/docs/espresso-mockwebserver-localhost/
site_name: TestMu AI
slug: espresso-mockwebserver-localhost/
canonical: https://www.testmuai.com/support/docs/espresso-mockwebserver-localhost/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
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
          "name": "MockWebServer & Localhost",
          "item": `${BRAND_URL}/support/docs/espresso-mockwebserver-localhost/`
        }]
      })
    }}
></script>

<BrandName /> supports testing apps that use MockWebServer or similar localhost-based mock servers in Android Espresso tests.

## Why Special Configuration is Needed

When network capture (`network: true`) is enabled, HTTP requests from the device route through <BrandName />'s proxy. Localhost requests fail because the proxy runs on the host machine, not the device — so `http://localhost:9091` resolves to the host's localhost instead of the device's.

<BrandName /> provides two solutions: **Localhost Bypass** and **Port Forwarding**.

## Option 1: Localhost Bypass

Best when app patching is enabled and your app uses standard HTTP libraries.

```json
{
  "app": "lt://APP_ID",
  "testSuite": "lt://TESTSUITE_ID",
  "device": ["Galaxy S21-12", "Pixel 6-13"],
  "build": "MockWebServer Test",
  "network": true,
  "localhost": true
}
```

| Capability | Data Type | Description |
|------------|-----------|-------------|
| `localhost` | Boolean | Bypass proxy for `localhost`/`127.0.0.1` requests. Default: `false` |

### Supported HTTP Libraries

| Library | Notes |
|---------|-------|
| **Java HttpURLConnection** | `URL.openConnection()` is intercepted |
| **OkHttp** | `proxy()` and `proxySelector()` are intercepted |
| **Retrofit** | Uses OkHttp internally |
| **Volley** | Uses HttpURLConnection internally |

:::note Requirements
- App patching must be enabled (Combined Patching or Image Injection).
- Cannot be used together with `portForwarding`.
:::

## Option 2: Port Forwarding

Best when app patching is unavailable or your app uses unsupported HTTP libraries.

```json
{
  "app": "lt://APP_ID",
  "testSuite": "lt://TESTSUITE_ID",
  "device": ["Galaxy S21-12", "Pixel 6-13"],
  "build": "MockWebServer Test",
  "network": true,
  "portForwarding": {
    "ports": [9091, 9092]
  }
}
```

| Capability | Data Type | Description |
|------------|-----------|-------------|
| `portForwarding` | Object | Configure port forwarding for localhost services on the device |
| `portForwarding.ports` | Array | Ports to forward (max 5, must be > 1023) |

Port forwarding works at the network level, so **all HTTP libraries are supported**.

:::note Requirements
- Maximum 5 ports, each greater than 1023.
- Cannot be used together with `localhost`.
:::

## Choosing Between Options

| Criteria | Localhost Bypass | Port Forwarding |
|----------|------------------|-----------------|
| App patching required | Yes | No |
| Port flexibility | Any port automatically | Specify exact ports (max 5) |
| Library support | OkHttp, Retrofit, Volley, HttpURLConnection | All libraries |
| Setup | Enable one capability | Provide port list |

:::tip
Use `localhost: true` if your app uses OkHttp/Retrofit/Volley. Use `portForwarding` for Apache HttpClient, Ktor, or when patching is unavailable.
:::

## Troubleshooting

- **Connection errors** — Ensure `network: true` and either `localhost: true` or `portForwarding` is set.
- **Bypass not working** — Confirm your app uses a supported library and app patching is enabled.
- **"Cannot use localhost and portForwarding together"** — These are mutually exclusive. Pick one.
- **Port validation errors** — Ports must be > 1023, max 5 ports allowed.

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
        MockWebServer & Localhost
      </span>
    </li>
  </ul>
</nav>
