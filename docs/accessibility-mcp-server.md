---
id: accessibility-mcp-server
title: Accessibility MCP Server
sidebar_label: Accessibility MCP Server
description: Use the Accessibility MCP Server for supported AI-assisted accessibility analysis workflows.
slug: accessibility-mcp-server/
---

# Accessibility MCP Server

Accessibility MCP Server enables supported AI-assisted Accessibility workflows for public URLs and selected local app analysis flows.

This page describes what the Accessibility MCP Server is, when an MCP-connected, AI-assisted analysis flow makes sense, and how that surface differs from DevTools, Automation, and Web Scanner. Use it to orient prerequisites and boundaries before connecting a client or routing work into an MCP-based accessibility review.

## When to use this

Use the MCP Server when you want an AI-assisted workflow that can request Accessibility analysis through supported MCP-compatible clients and tools.

## What it is good for

- analyzing supported public URLs through an MCP-based workflow
- supporting selected local-app analysis flows where MCP support is available
- routing users into an AI-assisted accessibility review flow instead of a browser-extension or framework-execution flow

## Prerequisites

- access to the Accessibility MCP Server feature
- an MCP-compatible client or workflow that can connect to the server
- a public URL or supported local application flow you are authorized to test

## Product boundary

Accessibility MCP Server is a dedicated product surface. It is not the same as:

- **Accessibility DevTools**, which is for browser-based manual and assisted testing
- **Accessibility Automation**, which is for framework-driven automated execution
- **Web Scanner**, which is an integrated URL-scanning surface

## Related docs

- [Choosing the Right Accessibility Tool](/support/docs/accessibility-choosing-the-right-tool/)
- [Accessibility DevTools (Overview)](/support/docs/accessibility-devtools/)
- [Accessibility Automation (Overview)](/support/docs/accessibility-automation/)
- [Starting an Accessibility Scan with Web Scanner](/support/docs/web-scanner-accessibility-scan/)
