---
id: accessibility-test-scheduling-login-authentication
title: Login & Authentication for Scheduled Scans
sidebar_label: Login & Authentication
description: Create reusable login configurations from the scheduler or dashboard. Choose Basic, Form, or Multi-page authentication and attach them to scheduled accessibility scans.
slug: accessibility-test-scheduling-login-authentication/
url: https://www.testmuai.com/support/docs/accessibility-test-scheduling-login-authentication/
site_name: TestMu AI
canonical: https://www.testmuai.com/support/docs/accessibility-test-scheduling-login-authentication/
---

import { BRAND_URL } from '@site/src/component/BrandName';

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
          "name": "Login & Authentication for Scheduled Scans",
          "item": `${BRAND_URL}/support/docs/accessibility-test-scheduling-login-authentication/`
        }]
      })
    }}
></script>

# Login & Authentication for Scheduled Scans

**Login configurations** are saved profiles the scanner uses to sign in before a scheduled run. You create them once, then pick one from the **login modal** when you set up or edit a scan. The same modal is used whether you open it from the **scheduler** (create or edit scan) or from the **Login configurations** area on the dashboard.

:::note
Treat credentials like production secrets: use dedicated QA or read-only accounts where possible, rotate passwords on your usual cadence, and follow your organization’s security policy.
:::

## When you need a login configuration

Use a saved login when:

- target URLs redirect to a sign-in page or hide content until authenticated
- you want the same credentials and selectors reused across recurring runs
- Basic HTTP auth or an HTML form (single-page or username-then-password) matches how your app signs users in

For non-public hosts without a browser login form, you may still use **local testing / tunnel** options in the schedule wizard where available.

## How to open login configurations

You can reach the **login modal** in either of these ways.

### 1. From the scheduler (create or edit a scan)

1. Open **create scan** or **edit scan** and go to the step where you **add URLs** (manual list, CSV, sitemap, or crawler seed—depending on your flow).
2. Expand **Advanced options**.
3. Under login settings, choose **Add** (or equivalent) on **Add login configurations**.

<img loading="lazy" src={require('../assets/images/accessibility-testing/features/login/login-configs.png').default} className="doc_img" alt="Advanced options showing add login configurations" />

### 2. From the dashboard

1. Open **Login configurations** (or the same entry point your product labels on the Accessibility / Web Scanner dashboard).
2. The same **login modal** opens so you can view existing profiles or create new ones.

<img loading="lazy" src={require('../assets/images/accessibility-testing/features/login/login-modal.png').default} className="doc_img" alt="Login modal listing saved configurations and option to add new" />

## Use the login modal

In the modal you can:

- **See** all configurations you have already saved.
- Choose **New configuration** to switch the modal into **create** mode.

When creating a configuration:

1. Enter a **configuration name** so you can recognize it later in the list.
2. Select an **authentication type**:
   - **Basic**
   - **Form**
   - **Multi-page**

The fields below the type selector change based on that choice. **Save** the configuration. It immediately appears in the modal list and can be **selected** when you configure a scheduled test (create or edit flow).

## Field reference by authentication type

### Basic authentication

Use when the site uses HTTP Basic authentication (browser or server challenges with username/password, not a full HTML SSO form).

| Field | Required | Description |
|--------|----------|-------------|
| Login Page URL | Yes | Entry URL for the protected area (for example `https://www.yourwebsite.com/login`). |
| Username | Yes | User name for Basic auth. |
| Password | Yes | Password for Basic auth. |

<img loading="lazy" src={require('../assets/images/accessibility-testing/features/login/basic_auth.png').default} className="doc_img" alt="Basic authentication fields in the login configuration form" />

### Form authentication

Use when username, password, and submit control live on **one** page after navigation to the login URL.

| Field | Required | Description |
|--------|----------|-------------|
| Login Page URL | Yes | Page where the sign-in form loads. |
| Username | Yes | Value typed into the username field. |
| Username CSS Selector | Yes | Selector for the username input. |
| Password | Yes | Value typed into the password field. |
| Password CSS Selector | Yes | Selector for the password input. |
| Login Button CSS Selector | Yes | Selector for the control that submits the form (for example **Sign in**). |
| Post-login URL | No | Optional URL the scanner can use to confirm navigation after a successful login. |

<img loading="lazy" src={require('../assets/images/accessibility-testing/features/login/form_auth.png').default} className="doc_img" alt="Form authentication fields including selectors and post-login URL" />

### Multi-page authentication

Use when the flow is **sequential**: enter username (and advance), then enter password on the same or a different URL—for example many enterprise IdPs.

#### 1 — Login or Username Page

| Field | Required | Description |
|--------|----------|-------------|
| Login Page URL | Yes | First page of the flow (email/username step). |
| Username | Yes | Identifier the scanner enters on step 1. |
| Username CSS Selector | Yes | Selector for the username/email field. |
| Next Button CSS Selector | Yes | Selector for the control that moves to the password step (for example **Next**). |

<img loading="lazy" src={require('../assets/images/accessibility-testing/features/login/multi-page-username.png').default} className="doc_img" alt="Multi-page authentication step one username page fields" />

#### 2 — Password Page

| Field | Required | Description |
|--------|----------|-------------|
| Password Page URL | No | If the password step loads on a different URL, enter it here; leave blank if the DOM updates on the same URL. |
| Password | Yes | Password value. |
| Password CSS Selector | Yes | Selector for the password field. |
| Login Button CSS Selector | Yes | Selector for the control that completes sign-in. |

<img loading="lazy" src={require('../assets/images/accessibility-testing/features/login/multi-page-password.png').default} className="doc_img" alt="Multi-page authentication step two password page fields" />

#### 3 — After Login Page

| Field | Required | Description |
|--------|----------|-------------|
| Post-login URL | No | Optional URL to verify the session landed on the expected post-login page. |

## Attach a configuration to a schedule

1. Open **create** or **edit scan**, add URLs, and open **Advanced options** → **Add login configurations** (or open the login picker your UI shows).
2. In the **login modal**, select the **saved configuration** you want for this schedule.
3. Save the scan. The scanner uses that profile when the schedule runs.

You can reuse one configuration across multiple scans or maintain separate profiles per environment.

## Best practices

- **Stable selectors** — Prefer `id`, `name`, `data-testid`, or other attributes that survive minor UI changes; confirm selectors in browser DevTools on the real login page.
- **Dedicated accounts** — Use a QA or automation user with least privilege instead of a personal admin account.
- **Post-login URL** — When you set it, use a path that reliably appears only after a successful login so misconfiguration surfaces clearly in results.

## Limitations

These patterns usually **cannot** be solved with Basic / Form / Multi-page fields alone:

- **OTP, SMS, authenticator apps, CAPTCHA** — human or alternate integration required
- **OAuth-only** flows with no password step you can describe with selectors
- **Risk prompts** that appear randomly (“Verify it’s you”) — runs may be flaky

Work with your team on staging URLs, simplified auth, or other supported access paths if you hit these limits.

## Troubleshooting

| Symptom | What to check |
|--------|----------------|
| Scan fails on first URL | Correct configuration selected; Login Page URL matches where the flow starts. |
| Timeout or “element not found” on login | Wrong or brittle CSS selectors; dynamic content not yet visible—increase stability of selectors. |
| Multi-page fails after username | **Next Button CSS Selector** matches the visible control; **Password Page URL** if the step changes URL. |
| Works manually, fails on schedule | Cookie banners, geo blocks, or MFA that appears only for automated traffic. |

## Related docs

- [Steps to Schedule an Accessibility Scan](/support/docs/accessibility-test-scheduling-scan/)
- [Test Scheduling - Sitemap (Overview)](/support/docs/accessibility-test-scheduling/)
- [Edit an Accessibility Scan](/support/docs/accessibility-test-scheduling-edit/)
- [Crawler](/support/docs/accessibility-test-crawler/)
- [Sitemap Extraction & URL Import](/support/docs/accessibility-sitemap-extraction-url-import/)
- [Web Scanner Getting Started](/support/docs/web-scanner-getting-started/)
