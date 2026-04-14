---
id: accessibility-fragment-identifier
title: Fragment Identifier
sidebar_label: Fragment Identifier
description: Treat URLs with different fragment identifiers as separate report entities when that level of granularity is useful.
slug: accessibility-fragment-identifier/
---

# Fragment Identifier

Fragment Identifier lets teams treat URLs with different hash fragments as separate reporting targets instead of collapsing them into a single parent URL.

Hash fragments often represent real differences in SPA or deep-linked flows even when the base URL stays identical, which can blur reporting if everything collapses to one parent page. Fragment Identifier reporting treats distinct `#` values as separate targets so dashboards reflect those states accurately. Refer here when you need that finer grouping for audits, triage, or trend tracking on hash-driven navigation.

## When to use this

Use this feature when different `#fragment` states represent meaningfully different content, navigation states, or user flows that should be reviewed separately.

## Why it matters

Without fragment-aware grouping, different states of the same base URL can look like one report target, which can hide important differences between flows.

## Related docs

- [Navigating the Dashboard](/support/docs/accessibility-testing-navigating-dashboard/)
- [Hide and Restore Issues](/support/docs/accessibility-hide-restore-issues/)
