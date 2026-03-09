# Pending Issues for Production

## 1. Broken Internal Links (1 remaining)

| Link | Status | Notes |
|------|--------|-------|
| `/support/docs/hyperexecute-concepts` | MISSING FILE | File does not exist - needs to be created or links updated |

Files referencing this link:
- Run `grep -r "hyperexecute-concepts" support/docs/` to find affected files

---

## 2. Missing Images (39 total)

These images are referenced in docs but files don't exist:

### Analytics Images
- `/assets/images/analytics/build-status-ratio.png`
- `/assets/images/analytics/builds-summary.png`
- `/assets/images/analytics/builds-trends.png`
- `/assets/images/analytics/screenshot-trends.png`
- `/assets/images/analytics/screenshots-browsers-device-coverage.png`
- `/assets/images/analytics/screenshots-viewport-coverage.png`
- `/assets/images/analytics/smartui-snapshot.png`
- `assets/images/analytics/widget.png`

### HyperExecute Images
- `/assets/images/hyperexecute/knowledge-base/secrets/3.png`
- `/assets/images/hyperexecute/knowledge-base/secrets/4.png`
- `/assets/images/hyperexecute/knowledge-base/secrets/5.png`
- `/assets/images/hyperexecute/knowledge-base/secrets/39.png`
- `/assets/images/hyperexecute/knowledge-base/secrets/40.png`
- `/assets/images/hyperexecute/main/circle-ci-run.png`
- `/assets/images/hyperexecute/main/circle-commit.png`

### KaneAI Images
- `/assets/images/kane-ai/app-test/add-configuration-modal.png`
- `/assets/images/kane-ai/features/bulk-module-update/disabled-cta.png`

### SCIM/SSO Images
- `/assets/images/lambdatest-scim/azure-ad/search-testmu ai-sso.png`
- `/assets/images/lambdatest-scim/conflict-resolution.png`
- `/assets/images/lambdatest-scim/group-approve-mapping.png`
- `/assets/images/lambdatest-scim/group-provisioning-toggle.png`
- `/assets/images/lambdatest-sso-google/sso-setup-testmu ai.png`

### Mobile Testing Images
- `/assets/images/mobile-app-testing/conversation_layer_overview.png`
- `/assets/images/mobile-app-testing/create_and_automate_test_cases.png`
- `/assets/images/mobile-app-testing/create_test_cases.png`
- `/assets/images/mobile-testing-real-devices/create-new.webp`
- `/assets/images/mobile-testing-real-devices/keyboard-language.webp`
- `/assets/images/mobile-testing-real-devices/name-project.webp`
- `/assets/images/mobile-testing-real-devices/settings.webp`

### Integration Images
- `/assets/images/teamcity-plugin/configure-testmu ai-feature.webp`
- `/assets/images/testcomplete-integration/web-caps.png`
- `/assets/images/zebrunner-integration/activate-testmu ai.webp`
- `/assets/images/zebrunner-integration/enter-testmu ai-credentials.webp`
- `/assets/images/zebrunner-integration/select-<BrandName />-environment-for-project.webp`
- `/assets/images/zebrunner-integration/test-on-testmu ai.webp`

### Other Images
- `/assets/images/local-testing-for-macos/real-time-testing-testmu ai.webp`
- `/support/img/kaneai-github-app/github-app-flow-diagram.svg`
- `../../assets/images/smart-visual-testing/RCA/visual-ai-toggle.png`
- `../../assets/images/test-intelligence/flake-icon.webp`

---

## 3. Broken GitHub Links (Pre-existing in testmuCom)

These GitHub links are broken in BOTH branches (pre-existing issues):

| Link | Issue |
|------|-------|
| `https://github.com/actions/virtual-environments/...` | Repo moved/renamed (3 links) |
| `https://github.com/apps/{private-app-name}/installations/new` | Placeholder - OK |
| `https://github.com/gaurav8760/Cypress-` | Incomplete URL |
| `https://github.com/LambdaTest/CSharp-xUnit-Selenium/blob/master/XUnit-` | Incomplete URL |
| `https://github.com/LambdaTest/Nemo-` | Incomplete URL |
| `https://github.com/LambdaTest/puppeteer-sample\`` | Has backtick in URL |
| `https://github.com/LambdaTest/pyppeteer-sample` | Repo not found |
| `https://github.com/LambdaTest/smartui-figma-web-cli-sample\`` | Has backtick in URL |
| `https://github.com/LambdaTest/smartui-node-sample\`` | Has backtick in URL |
| `https://github.com/organization/repo/pull/678` | Placeholder example |
| `https://github.com/QAbleHQ/LamdaTest_Tesbo_Demo` | Repo not found |
| `https://github.com/sushobhit-lt/nodejs-selenium-sample.git` | Repo not found |

### FIXED (were only in stage-mintlify):
- ~~`LambdaTest/applitools-testmu`~~ → Fixed to `applitools-lambdatest-integration`
- ~~`LambdaTest/webdriverio-TestMu`~~ → Fixed to `webdriverio-selenium-sample`

### FIXED (URL naming issues - 'testmu ai' with space):
- ~~`ecommerce-playground.testmu ai.io`~~ → Fixed to `ecommerce-playground.lambdatest.io`
- ~~`4dvanceboy.github.io/testmu ai`~~ → Fixed to `4dvanceboy.github.io/lambdatest`
- ~~`drone.testmu ai.io`~~ → Fixed to `drone.lambdatest.io`
- ~~`io.github.lambdatest`~~ → Fixed to `io.github.lambdatest`
- ~~`fastlane-plugin-testmu ai`~~ → Fixed to `fastlane-plugin-lambdatest`
- ~~`term=testmu ai`~~ → Fixed to `term=lambdatest` (Azure marketplace)
- ~~`vpn-on-testmu ai`~~ → Fixed to `vpn-on-lambdatest`

### Many LambdaTest repos returning connection errors (may be private/moved):
- Multiple `hyp-*` repos
- Multiple `hyperexecute-*` repos
- Multiple `lambdatest-*` repos
- Run `grep -r "github.com/LambdaTest" support/docs/ | grep -E "hyp-|hyperexecute-"` to find affected files

---

## 4. NPM Links

All npm links return 403 (bot protection) but should work in browser:
- `https://www.npmjs.com/package/testcafe-browser-provider-testmu` - May not exist, verify manually

---

## 5. Notes

### Issues Already Fixed
- 13 broken internal doc links fixed
- 1 frontmatter issue fixed (accessibility-automation.mdx)
- ghost-inspector path fixed in docs.json
- 1112 description fields added

### Not Fixed (By Design)
- 240 orphaned docs (files exist but not in navigation) - intentional
- 27 duplicate entries in docs.json - intentional for multiple nav locations

---

*Generated: March 2026*
