---
id: accessibility-native-app-automation-test
title: Native App Automation Appium (Overview)
sidebar_label: Native App Automation
description: Overview of Appium-based native app accessibility automation for Android and iOS.
slug: accessibility-native-app-automation-test/
---

# Native App Automation Appium (Overview)

Native App Automation uses Appium with `lambda-accessibility-scan` to generate Accessibility results during mobile app automation runs.

The sections below clarify when direct Appium-based Accessibility automation is the right fit for your team. They outline the high-level execution flow with `lambda-accessibility-scan` and contrast this approach with KaneAI and App Scanner workflows so you pick the correct product path.

## When to use this

Use this page when your team already runs Appium automation and wants Accessibility checks in the same execution path.

## Typical workflow

1. Upload the app and configure the Appium session.
2. Enable Accessibility in the session capabilities.
3. Trigger `lambda-accessibility-scan` at important checkpoints.
4. Review the report in the dashboard.

## Product boundary

This page is for direct Appium-based automation. If you are authoring the flow in KaneAI, use [Mobile App Accessibility Testing](/support/docs/kaneai-mobile-app-accessibility/). If you want manual screen-by-screen testing, use [Accessibility App Scanner (Overview)](/support/docs/accessibility-app-scanner/).

## Related docs

- [Appium TestNG](/support/docs/accessibility-appium-testng/)
- [Appium WebdriverIO](/support/docs/accessibility-appium-webdriverio/)
- [Accessibility App Scanner (Overview)](/support/docs/accessibility-app-scanner/)
