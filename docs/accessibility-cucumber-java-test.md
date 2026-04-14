---
id: accessibility-cucumber-java-test
title: Cucumber (Java)
sidebar_label: Cucumber (Java)
description: Use Accessibility Automation with Java Cucumber stacks when Accessibility is enabled in the underlying Selenium session.
slug: accessibility-cucumber-java-test/
---

# Cucumber (Java)

Use this page when your Accessibility Automation flow runs through Selenium with Java Cucumber.

This guide clarifies when Java Cucumber projects should rely on the shared Selenium Accessibility Automation flow and how resulting reports surface in the dashboard for review and follow-up. It matters most when your Gherkin scenarios already drive Selenium and you want accessibility results from the same sessions without a parallel harness.

## When to use this

Use this workflow when your team writes browser tests in Java with Cucumber and wants Accessibility results from the same execution.

## Prerequisites

- a Java + Cucumber Selenium project
- Accessibility enabled in the Selenium session
- access to the resulting Accessibility reports

## Typical workflow

1. configure Accessibility in the Selenium session
2. execute the Cucumber scenarios
3. review the resulting Accessibility report
4. escalate or remediate findings as required

## Related docs

- [Selenium](/support/docs/accessibility-automation-test/)
- [Configure Accessibility Automation](/support/docs/accessibility-automation-settings/)
