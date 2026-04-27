---
id: smartui-hooks-layout-fullpage-smartignore
title: SmartUI Hooks - Layout, Full Page, and Smart Ignore
sidebar_label: Hooks Layout + Full Page
description: Configure SmartUI Hooks for layout testing, full-page screenshots, and Smart Ignore using Selenium capabilities—including smartUI.smartIgnore for Java.
keywords:
  - smartui hooks
  - layout testing hooks
  - full page screenshot hooks
  - smart ignore hooks
  - smartUI.smartIgnore
  - ignoreType
url: https://www.testmuai.com/support/docs/smartui-hooks-layout-fullpage-smartignore/
site_name: TestMu AI
slug: smartui-hooks-layout-fullpage-smartignore/
canonical: https://www.testmuai.com/support/docs/smartui-hooks-layout-fullpage-smartignore/
---

# SmartUI Hooks Flow: Layout Testing, Full-Page Screenshots, and Smart Ignore

This guide explains the recommended SmartUI Hooks setup when you want to:

- run visual checks directly from automation (without `smartui exec` wrapper),
- capture full-page screenshots,
- switch comparison strategy between **Layout** and **Smart Ignore**.

## How hooks strategy works

In the **Hooks** flow, comparison strategy comes from **LambdaTest / `LT:Options` capabilities** (and your SmartUI project context). The screenshot hook (`executeScript`) usually supplies the screenshot name (or a small config object). **Capability names must match what the grid expects**—typos or legacy keys are a common reason Smart Ignore does not turn on.

:::info Smart Ignore vs Ignore DOM / Select DOM
With the **Smart Ignore** strategy, use either **Ignore DOM** or **Select DOM** in the product where those options apply. **Do not combine Ignore DOM and Select DOM together** for the same flow; pick one approach. Mixing both is unsupported and does not match best practices.
:::

## 1. Capability setup (Hooks)

### Layout strategy (example)

```json
{
  "visual": true,
  "smartUI.project": "Your_Project_Name",
  "ignoreType": ["layout"],
  "smartUI.options": {
    "ignoreType": ["layout"],
    "layout": true,
    "captureDom": true
  }
}
```

- Use `ignoreType: ["layout"]` (with the rest of your layout options) for **layout-only** comparisons.

### Smart Ignore strategy (Selenium Java) — recommended

For **Selenium with Java** and Hooks, enable Smart Ignore for the session by setting **`smartUI.smartIgnore`** to **`true`** on your **`LT:Options`** map (not only `ignoreType`).

```java
import java.util.HashMap;
import org.openqa.selenium.chrome.ChromeOptions;

ChromeOptions browserOptions = new ChromeOptions();
HashMap<String, Object> ltOptions = new HashMap<>();
ltOptions.put("username", System.getenv("LT_USERNAME"));
ltOptions.put("accessKey", System.getenv("LT_ACCESS_KEY"));
ltOptions.put("visual", true);
ltOptions.put("smartUI.project", "Your_Project_Name");
// Enables Smart Ignore for this run (baseline capture and comparisons)
ltOptions.put("smartUI.smartIgnore", true);

browserOptions.setCapability("LT:Options", ltOptions);
```

Apply the **same** `smartUI.project` and **`smartUI.smartIgnore`: true** when you capture the **baseline** and when you run **non-baseline** builds. Changing strategy mid-stream without a new baseline will produce confusing diffs.

### Smart Ignore (JSON / Node-style `LT:Options`)

```javascript
'LT:Options': {
  visual: true,
  'smartUI.project': 'Your_Project_Name',
  'smartUI.smartIgnore': true,
},
```

### C# (Hooks)

```csharp
capabilities.SetCapability("visual", true);
capabilities.SetCapability("smartUI.project", "Your_Project_Name");
capabilities.SetCapability("smartUI.smartIgnore", true);
```

:::warning Deprecated or ineffective patterns (do not use for Smart Ignore)
The following are **not** sufficient on their own to enable Smart Ignore in typical Selenium Java Hooks sessions, and they match common presales confusion:

- `ltOptions.put("ignoreType", Arrays.asList("smartignore"));` **without** `smartUI.smartIgnore`
- `ltOptions.put("smartignore", true);` at the root of `LT:Options` (wrong key)
- Relying only on UI project toggles while capabilities still imply **strict / pixel** behavior for the build

Use **`smartUI.smartIgnore`: `true`** as shown above, keep baseline and compare runs aligned, then re-run.
:::

## 2. Full-page screenshot in hooks

### Name-only hook (widely supported)

```java
((JavascriptExecutor) driver).executeScript("smartui.takeFullPageScreenshot=Home_Page_Desktop");
```

```csharp
((IJavaScriptExecutor)driver).ExecuteScript("smartui.takeFullPageScreenshot=Home_Page_Desktop");
```

### Config-based hook (runtime dependent)

```java
Map<String, Object> cfg = new HashMap<>();
cfg.put("screenshotName", "Home_Page_Desktop");
cfg.put("fullPage", true);
cfg.put("ignoreType", Arrays.asList("layout"));
((JavascriptExecutor) driver).executeScript("smartui.takeScreenshot", cfg);
```

```csharp
var cfg = new Dictionary<string, object>
{
  { "screenshotName", "Home_Page_Desktop" },
  { "fullPage", true },
  { "ignoreType", new[] { "layout" } }
};
((IJavaScriptExecutor)driver).ExecuteScript("smartui.takeScreenshot", cfg);
```

For **Smart Ignore**, prefer session-level **`smartUI.smartIgnore`** in `LT:Options` rather than pushing `smartignore` only inside ad-hoc hook config objects.

## 3. Baseline and comparison requirements

1. Same **`smartUI.project`**.
2. Same **screenshot names** between runs.
3. Same **comparison strategy**: for Smart Ignore, **`smartUI.smartIgnore`: true** on both baseline and comparison sessions (and avoid mixing with conflicting DOM-override modes).
4. If you change strategy or major options, **recapture baseline**.

## 4. Strict comparison vs Smart Ignore

If the build or project is effectively using **strict (pixel-to-pixel) comparison** as the dominant mode, some Smart Ignore–centric workflows (for example certain **baseline diff** experiences in the UI) **do not apply** the same way. **Smart Ignore–first behavior** (including the capabilities above) is what unlocks the intended Smart Ignore comparison path. Align **dashboard project comparison options** with your automation caps when customers refuse to use per-screenshot UI toggles.

## 5. Why your name appears on every build

Builds executed with a **project token** (or default org identity) often show the **project creator** as the actor. To attribute runs differently where the product allows it, configure the **username**, **access key**, and **project name** / token context as appropriate for that automation user—not the personal account used to create the project, if that is not desired.

## 6. Best practices for hooks

- Keep screenshot names deterministic, for example: `page_viewport_1366x768`.
- Use one shared **build name** for all viewport sessions in a single run where applicable.
- Wait for page stabilization before triggering screenshot hooks.
- Include viewport in screenshot name if running responsive coverage.
- For Smart Ignore on Java Hooks, treat **`smartUI.smartIgnore`** as the source of truth at the capability layer.

## 7. Troubleshooting

### Smart Ignore still not applied (Java / Selenium)

1. Confirm **`smartUI.smartIgnore`** is **`true`** in the **final** session capabilities (not only in a discarded map).
2. Confirm **baseline** was taken with **`smartUI.smartIgnore`: true** as well.
3. Remove conflicting keys: avoid stacking **Ignore DOM** and **Select DOM** patterns against Smart Ignore guidance.
4. Confirm you are not expecting Smart Ignore–only UI behavior while the build is still in an effective **strict** comparison context.

### Strategy not applied (general)

- Verify capabilities on the session in LambdaTest automation logs.
- Check **project-level** comparison defaults in the SmartUI dashboard.
- After doc or product updates, refresh any cached examples—older snippets may show `ignoreType` alone for Smart Ignore.

### "Please provide screenshot name"

- Use name directly in script string for name-only hooks:
  - `smartui.takeScreenshot=MyName`
  - `smartui.takeFullPageScreenshot=MyName`

### Invalid C# dictionary initializer

- In older C# projects, use classic dictionary syntax:
  - `{ "key", value }`
- Avoid mixing index initializer with old syntax in same block.

### No comparison generated

- Confirm same screenshot name and same project on both runs.
- Confirm second run is uploaded to the intended branch/build context.

## Related docs

- [Layout Testing](/support/docs/smartui-layout-testing/)
- [Smart Ignore](/support/docs/smartui-smartignore/)
- [Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide/)
- [SmartUI SDK Config Options](/support/docs/smartui-sdk-config-options/)
