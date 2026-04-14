---
id: accessibility-junit5-test
title: JUnit 5
sidebar_label: JUnit 5
description: Use JUnit 5 with Accessibility Automation when your Selenium stack is organized around JUnit-based execution.
slug: accessibility-junit5-test/
---

# JUnit 5

Use this page when your Accessibility Automation flow runs through Selenium with JUnit 5.

This page explains when JUnit 5 is the right runner for Selenium Accessibility Automation and how it maps onto the shared grid session model the product expects for enabling scans and collecting results. It is most relevant when your Java suite already uses JUnit 5 and you want accessibility checks in the same execution path.

## When to use this

Use this workflow when your Selenium project already uses JUnit 5 for test execution and you want Accessibility checks in the same run.

## Prerequisites

- a Selenium + JUnit 5 project
- Accessibility enabled in the grid session
- access to the resulting Accessibility reports

## Typical workflow

1. configure the Selenium session for Accessibility
2. run the JUnit 5 suite
3. review the resulting report in the Accessibility dashboard
4. compare results across runs when needed

## Related docs

- [Selenium](/support/docs/accessibility-automation-test/)
- [Configure Accessibility Automation](/support/docs/accessibility-automation-settings/)
