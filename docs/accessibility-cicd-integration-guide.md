---
id: accessibility-cicd-integration-guide
title: CI/CD Integration Guide
sidebar_label: CI/CD Integration Guide
description: Use this guide to connect Accessibility Automation workflows to CI/CD execution and reporting.
slug: accessibility-cicd-integration-guide/
---

# CI/CD Integration Guide

Use this guide when you want Accessibility Automation to run as part of CI/CD rather than only in local or ad hoc execution.

## Typical CI/CD use cases

- run accessibility checks on pull requests or nightly jobs
- compare Accessibility results across builds
- keep automated accessibility validation close to release workflows

## High-level flow

1. Configure the test framework with Accessibility capabilities.
2. Run the tests from CI/CD.
3. Review the resulting report in the Accessibility dashboard.
4. Export or escalate findings if needed.

## Related docs

- [Accessibility Automation (Overview)](/support/docs/accessibility-automation/)
- [Configure Accessibility Automation](/support/docs/accessibility-automation-settings/)
- [Selenium Accessibility Testing on HyperExecute](/support/docs/selenium-hyperexecute-accessibility-tests/)
