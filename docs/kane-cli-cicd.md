---
id: kane-cli-cicd
title: CI/CD Integration
sidebar_label: CI/CD
description: Integrate Kane CLI into GitHub Actions, GitLab CI, Jenkins, and Bitbucket Pipelines for automated browser testing.
keywords:
  - kane cli cicd
  - github actions browser testing
  - kaneai
  - testmu ai
  - ci cd browser tests
url: https://www.testmuai.com/support/docs/kane-cli-cicd/
site_name: TestMu AI
slug: kane-cli-cicd/
displayed_sidebar: KaneCLISidebar
canonical: https://www.testmuai.com/support/docs/kane-cli-cicd/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.testmuai.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.testmuai.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Kane CLI",
          "item": "https://www.testmuai.com/support/docs/kane-cli-introduction/"
        }]
      })
    }}
></script>

Kane CLI runs headlessly in CI/CD pipelines using credentials passed as environment variables or inline flags. Tests fail fast on assertion errors and return standard exit codes for pipeline control flow.

## Authentication in CI/CD

Pass credentials directly on the run command using environment variables from your secrets store:

```bash
kane-cli run "Verify checkout flow completes" \
  --url https://staging.myapp.com \
  --username $LT_USERNAME \
  --access-key $LT_ACCESS_KEY \
  --headless \
  --agent \
  --timeout 300
```

Get your `LT_USERNAME` and `LT_ACCESS_KEY` from the <BrandName /> dashboard under **Settings → Keys**.

## Exit Codes

| Code | Meaning | Pipeline Behavior |
|------|---------|-------------------|
| `0` | Test passed | Pipeline continues |
| `1` | Test failed (assertion not met) | Pipeline stops |
| `2` | Error (auth failure, Chrome crash) | Pipeline stops |
| `3` | Timeout or cancelled | Pipeline stops |

## CI/CD Checklist

- ✅ Always use `--headless` and `--agent`: no display server in CI
- ✅ Set `--timeout`: prevents pipeline hangs (e.g. `--timeout 300`)
- ✅ Set `--max-steps`: caps run length (e.g. `--max-steps 50`)
- ✅ Use `--variables-file`: load test data from a committed config file
- ✅ Store credentials as secrets: never hardcode in pipeline files

---

## Platform Guides

<Tabs groupId="ci-platform">

<TabItem value="github" label="GitHub Actions">

Store `LT_USERNAME` and `LT_ACCESS_KEY` as repository secrets under **Settings → Secrets and variables → Actions**.

```yaml
# .github/workflows/browser-tests.yml
name: Browser Tests
on: [push, pull_request]

jobs:
  kane-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install Kane CLI
        run: npm install -g @testmuai/kane-cli

      - name: Run browser tests
        env:
          LT_USERNAME: ${{ secrets.LT_USERNAME }}
          LT_ACCESS_KEY: ${{ secrets.LT_ACCESS_KEY }}
        run: |
          kane-cli run \
            --url https://staging.myapp.com \
            --username $LT_USERNAME \
            --access-key $LT_ACCESS_KEY \
            --headless \
            --agent \
            --timeout 300 \
            --max-steps 50 \
            "Complete the checkout flow and verify order confirmation"

      - name: Upload test logs
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: kane-test-logs
          path: ~/.testmuai/kaneai/sessions/
```

</TabItem>

<TabItem value="gitlab" label="GitLab CI">

Add `LT_USERNAME` and `LT_ACCESS_KEY` as protected CI/CD variables under **Settings → CI/CD → Variables**.

```yaml
# .gitlab-ci.yml
stages:
  - test

browser-tests:
  stage: test
  image: node:20
  before_script:
    - npm install -g @testmuai/kane-cli
  script:
    - kane-cli run
        --url https://staging.myapp.com
        --username $LT_USERNAME
        --access-key $LT_ACCESS_KEY
        --headless
        --agent
        --timeout 300
        --max-steps 50
        "Complete the checkout flow and verify order confirmation"
  artifacts:
    paths:
      - ~/.testmuai/kaneai/sessions/
    when: always
    expire_in: 7 days
```

</TabItem>

<TabItem value="jenkins" label="Jenkins">

Store credentials in **Jenkins → Manage Jenkins → Manage Credentials**.

```groovy
// Jenkinsfile
pipeline {
    agent any
    environment {
        LT_USERNAME = credentials('lambdatest-username')
        LT_ACCESS_KEY = credentials('lambdatest-access-key')
    }
    stages {
        stage('Install') {
            steps {
                sh 'npm install -g @testmuai/kane-cli'
            }
        }
        stage('Browser Tests') {
            steps {
                sh '''
                    kane-cli run \
                        --url https://staging.myapp.com \
                        --username $LT_USERNAME \
                        --access-key $LT_ACCESS_KEY \
                        --headless \
                        --agent \
                        --timeout 300 \
                        --max-steps 50 \
                        "Complete the checkout flow and verify order confirmation"
                '''
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: '~/.testmuai/kaneai/sessions/**',
                             allowEmptyArchive: true
        }
    }
}
```

</TabItem>

<TabItem value="bitbucket" label="Bitbucket Pipelines">

Add `LT_USERNAME` and `LT_ACCESS_KEY` as repository variables under **Repository settings → Repository variables**.

```yaml
# bitbucket-pipelines.yml
pipelines:
  default:
    - step:
        name: Browser Tests
        image: node:20
        script:
          - npm install -g @testmuai/kane-cli
          - kane-cli run
              --url https://staging.myapp.com
              --username $LT_USERNAME
              --access-key $LT_ACCESS_KEY
              --headless
              --agent
              --timeout 300
              --max-steps 50
              "Complete the checkout flow and verify order confirmation"
        artifacts:
          - ~/.testmuai/kaneai/sessions/**
```

</TabItem>

</Tabs>

---

## Running Multiple Tests

Run several tests and fail the pipeline if any fail:

```bash
#!/bin/bash
set -e

PASS=0
FAIL=0
FAILED_TESTS=()

run_test() {
  local name="$1"
  local objective="$2"
  echo "Running: $name"
  if kane-cli run "$objective" \
      --url https://staging.myapp.com \
      --username $LT_USERNAME \
      --access-key $LT_ACCESS_KEY \
      --headless --agent --timeout 120; then
    ((PASS++))
  else
    ((FAIL++))
    FAILED_TESTS+=("$name")
  fi
}

run_test "Login" "Log in with valid credentials and verify dashboard appears"
run_test "Search" "Search for 'laptop' and verify at least one result appears"
run_test "Checkout" "Add first product to cart and complete checkout"
run_test "Settings" "Open account settings and verify profile page loads"

echo ""
echo "Results: $PASS passed, $FAIL failed"
if [[ $FAIL -gt 0 ]]; then
  echo "Failed tests: ${FAILED_TESTS[*]}"
  exit 1
fi
```

---

## Variables in CI/CD

Commit a non-secret variables file to your repo, and inject secrets at runtime:

```json
{
  "app_url": { "value": "https://staging.myapp.com" },
  "test_product_sku": { "value": "PROD-001" }
}
```

Merge with secrets in your pipeline:

```bash
# Inject secret from CI/CD environment
kane-cli run "Log in as {{email}} with {{password}} and verify dashboard" \
  --variables-file ./test-variables.json \
  --variables "{\"email\": {\"value\": \"$TEST_EMAIL\"}, \"password\": {\"value\": \"$TEST_PASSWORD\", \"secret\": true}}" \
  --username $LT_USERNAME \
  --access-key $LT_ACCESS_KEY \
  --headless --agent
```
