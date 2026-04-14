---
id: accessibility-testng-test
title: TestNG
sidebar_label: TestNG
description: Use TestNG with Accessibility Automation when your Selenium stack is organized around TestNG execution.
slug: accessibility-testng-test/
---

# TestNG

Use this page when your Accessibility Automation flow runs through Selenium with TestNG.

TestNG plugs into the same Selenium-based Accessibility Automation model used elsewhere in the product. The sections below outline when that path fits your suite, what to have ready, and how results surface in the standard reporting flow. Use this orientation when you already run TestNG and want accessibility checks to ride along in regression or CI/CD without re-architecting your stack.

## When to use this

Use this workflow when your web automation suite is already organized with TestNG and you want Accessibility checks to run in the same execution path.

## Prerequisites

- a Selenium + TestNG project
- Accessibility enabled in the test session
- access to the Accessibility dashboard for report review

## Typical workflow

1. add Accessibility capabilities to the Selenium session
2. execute the TestNG suite
3. open the resulting report after the run completes
4. review issue counts, severity, and affected pages or elements

## What gets reported

The resulting report follows the standard Accessibility reporting flow used by Selenium-based automation.

## Related docs

- [Selenium](/support/docs/accessibility-automation-test/)
- [Configure Accessibility Automation](/support/docs/accessibility-automation-settings/)
- [CI/CD Integration Guide](/support/docs/accessibility-cicd-integration-guide/)
