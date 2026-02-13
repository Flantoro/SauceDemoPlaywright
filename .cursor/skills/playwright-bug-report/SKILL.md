---
name: playwright-bug-report
description: Generate structured markdown bug reports from failed Playwright test runs by analyzing test output, logs, and artifacts. Use when Playwright tests fail or when the user asks to turn Playwright failures into bug reports or defect tickets.
---

# Playwright Bug Report

## Quick Start

When Playwright tests fail and the user asks for a bug report:

1. Identify the failing tests and their artifacts.
2. Extract key details (environment, test metadata, failure messages, screenshots, traces).
3. Fill in the markdown bug report template from the **Bug Report Template** section.
4. Keep the report concise, reproducible, and ready to paste into an issue tracker (GitHub, Jira, etc.).

---

## What This Skill Is For

Use this skill when:

- The user mentions failed Playwright tests, broken E2E checks, or flaky tests.
- The user shares Playwright output, CI logs, screenshots, or trace files and asks for a bug/defect/issue.
- You are reviewing recent commits and see failing Playwright runs that should be turned into tickets.

Focus on:

- Capturing **one clear bug report per distinct failure cause**.
- Making the report self-contained so someone else can reproduce without reading the full logs.

---

## Inputs To Look For

When generating a bug report from Playwright failures, look for:

- **Test metadata**
  - Test file path and test title.
  - Project/browser (e.g. `chromium`, `firefox`, `webkit`, mobile emulation).
  - Tags or annotations (e.g. `@smoke`, `@regression`, `@flaky`).

- **Environment**
  - Base URL or environment (`staging`, `production`, `dev`).
  - Branch name, commit hash if available.
  - OS and browser version if included in logs.

- **Failure details**
  - Error message and stack trace (first meaningful lines).
  - Which assertion or step failed.
  - Whether the test is flaky or consistently failing across runs.

- **Artifacts**
  - Screenshot paths.
  - Video paths.
  - Trace files or links to the HTML report.

### Where To Find These In a Typical Playwright Project

When you have access to the repository:

1. **Discover configuration**
   - Open `playwright.config.ts` or `playwright.config.js`.
   - Note:
     - `use.baseURL`
     - `use.browserName` or `projects` definitions
     - `outputDir`, `reporter`, and any custom env flags.

2. **Locate artifacts**
   - Look for common locations such as:
     - `playwright-report/`
     - `test-results/`
     - Custom output directories configured in `playwright.config.*`.

3. **Inspect failing tests**
   - Scan terminal or CI logs for `FAIL` sections.
   - Capture:
     - Test file path and title lines.
     - Project name (often shown like `[chromium]`).
     - Error message and stack snippet.

When logs or artifacts are not available, rely on the test title, description, and any steps the user provided.

---

## Bug Report Template

When generating a bug report, start from this markdown template and fill in each section with concrete information from the failed test:

```markdown
## Summary
[Short, one-sentence description of the failure and impact.]

## Environment
- App environment: [staging / production / dev / local]
- Base URL: `[https://...]` (if known)
- Browser / project: [e.g. chromium, firefox, webkit, mobile-chromium]
- OS / platform: [e.g. Windows 11, Ubuntu 22.04] (if known)
- Branch / commit: [`main` @ abc123] (if known)

## Test Details
- Test file: `[relative/path/to/test.spec.ts]`
- Test title: `[Playwright test name]`
- Tags / annotations: `[e.g. @smoke, @checkout]` (if any)
- Run context: [local / CI pipeline / scheduled run]

## Steps to Reproduce
1. [Step 1 inferred from test name / description / logs]
2. [Step 2 ...]
3. [Step 3 ...]

If exact user flows are unclear from test code/logs, describe:
- The page or feature under test
- The key user action that triggers the failure

## Expected Result
[Describe the expected behavior based on the test intention or assertions.]

## Actual Result
[Describe what actually happens, including the error message and user-visible behavior.]

Example (replace with actual data):
- Error message: `expect(page).toHaveURL(...): expected "..." to contain "..."`
- Visible outcome: [e.g. user stays on login page instead of being redirected]

## Evidence / Artifacts
- Screenshot: `[path/to/screenshot.png]` (or link)
- Video: `[path/to/video.webm]` (if available)
- Trace: `[path/to/trace.zip]` or `[Playwright HTML report link]`
- Relevant log excerpt:
  \`\`\`text
  [Paste the most relevant 3–10 lines of error/stack, not the entire log]
  \`\`\`

## Suspected Cause / Notes
- [Optional hypothesis based on stack trace, recent code changes, or flaky behavior]
- [Mention if failure appears flaky or consistent across runs]
```

Always tailor the template to the available information—omit sections you cannot fill meaningfully instead of guessing.

---

## Workflow For Using This Skill

When asked to generate a bug report from Playwright failures, follow this workflow:

1. **Aggregate failing tests**
   - Group failures by apparent root cause (same error message, same step).
   - Create **one bug report per root cause**, even if multiple tests fail similarly.

2. **Extract core details**
   - From logs and artifacts, identify:
     - Environment and project.
     - Exact test file and title.
     - Error message and the step where it failed.
     - Any patterns across retries (e.g. fails only on first retry).

3. **Reconstruct steps to reproduce**
   - Infer steps from:
     - Test title and `test.step` descriptions if present.
     - Code in the test file (selectors, navigation, and assertions).
   - Express steps in **user-facing language**, not implementation details.
     - Prefer: "Open the login page" over "Call `page.goto('/login')`".

4. **Write the bug report**
   - Use the markdown template.
   - Keep the **Summary**, **Steps to Reproduce**, **Expected Result**, and **Actual Result** sections crisp and specific.
   - Include artifact paths or links when available.

5. **Redact sensitive data**
   - Avoid including secrets, tokens, full URLs with query parameters, or PII.
   - Truncate long logs to the minimum useful excerpt.

---

## Examples

### Example 1: Login test failure

**Input context (simplified):**
- Failing test: `tests/auth.spec.ts` → `should log in with valid credentials`
- Project: `[chromium]`
- Base URL: `https://staging.example.com`
- Error: `expect(page).toHaveURL(/inventory/): expected "https://staging.example.com/login" to match /inventory/`
- Screenshot: `test-results/auth-should-log-in-with-valid-credentials-chromium/1.png`

**Generated bug report:**

```markdown
## Summary
Login with valid credentials keeps the user on the login page instead of redirecting to the inventory dashboard in staging.

## Environment
- App environment: staging
- Base URL: `https://staging.example.com`
- Browser / project: chromium
- OS / platform: [CI container, Linux] (approximate from CI logs)
- Branch / commit: [`main` @ abc123] (from CI metadata)

## Test Details
- Test file: `tests/auth.spec.ts`
- Test title: `should log in with valid credentials`
- Tags / annotations: `@smoke`
- Run context: CI pipeline (staging E2E suite)

## Steps to Reproduce
1. Navigate to `https://staging.example.com/login`.
2. Enter valid credentials for a standard user.
3. Click the "Login" button.

## Expected Result
After submitting valid credentials, the user is redirected to the inventory dashboard page.

## Actual Result
After clicking "Login" with valid credentials, the user remains on the login page and the URL stays at `/login`. The inventory dashboard is never shown.

## Evidence / Artifacts
- Screenshot: `test-results/auth-should-log-in-with-valid-credentials-chromium/1.png`
- Relevant log excerpt:
  \`\`\`text
  expect(page).toHaveURL(/inventory/):
    expected "https://staging.example.com/login" to match /inventory/
  \`\`\`

## Suspected Cause / Notes
- Likely regression in login flow or redirect logic after authentication succeeds.
- Appears consistent across multiple CI runs, not flaky.
```

Use this example as a style reference: specific, concise, and directly connected to the Playwright failure details.

---

## Notes and Best Practices

- **Prefer clarity over completeness**: include only the most relevant logs and artifacts.
- **Avoid speculation** unless you clearly label it as a hypothesis.
- **Keep titles and summaries user-focused**, describing behavior, not just test names.
- When multiple browsers fail the same way, mention that in the **Environment** or **Notes** instead of duplicating identical reports.

