---
id: accessibility-appium-testng
title: Appium TestNG
sidebar_label: Appium TestNG
description: Use this page when your Appium accessibility automation is organized around TestNG.
slug: accessibility-appium-testng/
---

# Appium TestNG

Use this page when your Appium Accessibility Automation flow is organized around TestNG.

This page explains how TestNG-based Appium automation fits into the broader Native App Accessibility Automation flow, including where session setup and `lambda-accessibility-scan` checkpoints belong in a standard run. That mental model is useful when you extend Android or iOS suites that already execute under TestNG.

## When to use this

Use this workflow when your Appium Android or iOS tests already run with TestNG and you want to trigger `lambda-accessibility-scan` from the same suite.

## Prerequisites

- an Appium + TestNG project
- Accessibility enabled in the mobile session
- a supported mobile app or mobile web flow

## Typical workflow

1. configure the Appium session with Accessibility enabled
2. trigger `lambda-accessibility-scan` at the required checkpoints
3. complete the TestNG run
4. review the report after execution completes

## Related docs

- [Native App Automation Appium (Overview)](/support/docs/accessibility-native-app-automation-test/)
- [Tag Support for Accessibility Scans](/support/docs/accessibility-tag-support/)
