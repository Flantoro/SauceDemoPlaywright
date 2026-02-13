---
name: miro-test-checklist
description: Analyze Miro diagrams (flowcharts, user flows, system diagrams) and generate comprehensive test checklists with scenarios, test cases, and validation points. Use when the user asks to create test scenarios from Miro diagrams, analyze diagrams for testing, or generate test checklists from visual designs.
---

# Miro Diagram Test Checklist Generator

## Quick Start

When the user asks to create test scenarios from a Miro diagram:

1. **Fetch the diagram** from Miro using MCP tools (board ID, item IDs, or board content).
2. **Analyze the diagram structure** to identify:
   - User flows and decision points
   - System interactions and boundaries
   - Edge cases and error paths
   - State transitions and data flows
3. **Generate a structured test checklist** using the template below.
4. **Organize scenarios** by priority (critical paths, happy paths, edge cases, error handling).

---

## What This Skill Is For

Use this skill when:

- The user mentions a Miro diagram, board, flowchart, or user flow and wants test scenarios.
- The user asks to "analyze this diagram for testing" or "create test cases from this Miro board."
- You need to extract testable scenarios from visual designs, PRDs, or architecture diagrams in Miro.

Focus on:

- **Extracting actionable test scenarios** from visual representations.
- **Identifying all paths** (happy path, alternative flows, error cases).
- **Creating test checklists** that align with Playwright test structure (test steps, assertions, page objects).

---

## How to Access Miro Diagrams

### Using Miro MCP Tools

When working with Miro diagrams, use available MCP tools to fetch content:

1. **List boards** to find the target diagram:
   - Use MCP tools to list available Miro boards.
   - Identify the board by name or ID.

2. **Fetch board content**:
   - Retrieve board items (shapes, text, connectors, sticky notes).
   - Extract text content, shapes, and relationships.

3. **Analyze diagram elements**:
   - Identify flowchart shapes (rectangles = processes, diamonds = decisions, ovals = start/end).
   - Extract user flow steps from connectors and arrows.
   - Read annotations, notes, or labels attached to elements.

### If MCP Tools Are Not Available

If direct MCP access isn't working, ask the user to:
- Share the Miro board link or board ID.
- Export the diagram as an image and describe key elements.
- Copy/paste text content from the diagram.

---

## Diagram Type Analysis

Different diagram types require different analysis approaches:

### Flowcharts / Process Diagrams
- **Identify**: Start/end points, decision nodes (diamonds), process steps (rectangles), connectors.
- **Extract**: All paths from start to end, decision branches (yes/no, if/else), loops and iterations.
- **Test scenarios**: Each path becomes a test case; decision points create branches to test.

### User Flow Diagrams
- **Identify**: User actions, screens/pages, navigation paths, decision points.
- **Extract**: Happy path, alternative flows, error states, back navigation.
- **Test scenarios**: Each screen transition, each user action, validation at each step.

### Sequence Diagrams / System Interactions
- **Identify**: Actors, system components, messages/interactions, timing.
- **Extract**: Request/response flows, error handling, timeout scenarios, concurrent operations.
- **Test scenarios**: Each interaction sequence, error responses, edge cases in timing.

### State Diagrams
- **Identify**: States, transitions, triggers, guard conditions.
- **Extract**: All state transitions, invalid transitions, initial/final states.
- **Test scenarios**: Each valid transition, attempts at invalid transitions, state persistence.

### Architecture / System Diagrams
- **Identify**: Components, integrations, data flows, external dependencies.
- **Extract**: Integration points, API boundaries, data validation points, failure modes.
- **Test scenarios**: Component interactions, integration failures, data validation, error propagation.

---

## Test Checklist Template

When generating a test checklist from a Miro diagram, use this structure:

```markdown
# Test Checklist: [Diagram/Feature Name]

## Overview
- **Source**: Miro Board: [board name/ID]
- **Diagram Type**: [flowchart / user flow / sequence / state / architecture]
- **Feature/Area**: [brief description]
- **Last Updated**: [date]

## Test Scenarios

### [Scenario Category 1: e.g., Happy Path / Critical Flow]

#### Test Case: [TC-001] [Test Case Name]
- **Priority**: [Critical / High / Medium / Low]
- **Type**: [Functional / E2E / Integration / Regression]
- **Preconditions**: 
  - [Precondition 1]
  - [Precondition 2]

**Test Steps:**
1. [Step 1 - user action or system event]
2. [Step 2 - user action or system event]
3. [Step 3 - user action or system event]

**Expected Results:**
- [ ] [Expected outcome 1]
- [ ] [Expected outcome 2]
- [ ] [Expected outcome 3]

**Test Data:**
- [Relevant test data or variables]

**Notes:**
- [Additional context, edge cases, or related scenarios]

---

#### Test Case: [TC-002] [Another Test Case]
[... repeat structure ...]

---

### [Scenario Category 2: e.g., Alternative Flows]

[... repeat scenario category structure ...]

---

### [Scenario Category 3: e.g., Error Handling / Edge Cases]

[... repeat scenario category structure ...]

---

## Test Coverage Summary

- **Total Test Cases**: [count]
- **Critical Path**: [X] cases
- **Alternative Flows**: [X] cases
- **Error Handling**: [X] cases
- **Edge Cases**: [X] cases

## Implementation Notes

- [Notes about test implementation, required fixtures, page objects, or test data setup]
- [Dependencies or prerequisites for running these tests]
```

---

## Workflow for Generating Test Checklists

### Step 1: Fetch and Parse Diagram

1. **Access the Miro diagram**:
   - Use MCP tools to fetch board content.
   - Extract all relevant items (shapes, text, connectors).

2. **Identify diagram type**:
   - Classify as flowchart, user flow, sequence, state, or architecture diagram.
   - Note any mixed diagram types.

3. **Extract key elements**:
   - List all nodes/processes/steps.
   - Map all connections/transitions.
   - Identify decision points and branches.
   - Note annotations, labels, or descriptions.

### Step 2: Analyze Paths and Scenarios

1. **Map all paths**:
   - Start from entry points (start nodes, initial states).
   - Follow all possible paths to end points.
   - Document decision branches (yes/no, if/else, switch cases).

2. **Categorize scenarios**:
   - **Happy Path**: Primary successful flow.
   - **Alternative Flows**: Valid alternative paths (e.g., "skip optional step", "choose different option").
   - **Error Handling**: Invalid inputs, system failures, error states.
   - **Edge Cases**: Boundary conditions, empty states, concurrent operations.

3. **Identify testable assertions**:
   - State changes at each step.
   - UI elements that should appear/disappear.
   - Data validations and business rules.
   - Error messages and user feedback.

### Step 3: Generate Structured Checklist

1. **Create test cases**:
   - One test case per distinct path or scenario.
   - Use clear, descriptive names (e.g., "User completes checkout with valid payment").
   - Assign priority based on business impact.

2. **Write test steps**:
   - Use **user-facing language** (e.g., "Click the Submit button" not "Call submitHandler()").
   - Make steps atomic and verifiable.
   - Include preconditions and test data.

3. **Define expected results**:
   - List specific, verifiable outcomes.
   - Use checkboxes for easy tracking.
   - Include both positive and negative validations.

4. **Add implementation notes**:
   - Suggest Playwright test structure (test.step() organization).
   - Note required page objects or fixtures.
   - Mention test data setup needs.

### Step 4: Review and Refine

1. **Ensure completeness**:
   - All paths from the diagram are covered.
   - Decision branches have both true/false cases.
   - Error paths are included.

2. **Check clarity**:
   - Test steps are unambiguous.
   - Expected results are specific and measurable.
   - Test data requirements are clear.

---

## Examples

### Example 1: User Login Flow Diagram

**Input**: Miro flowchart showing:
- Start → Enter credentials → Validate → [Valid?] → Yes → Dashboard / No → Error message → End

**Generated Test Checklist Excerpt**:

```markdown
# Test Checklist: User Login Flow

## Test Scenarios

### Happy Path

#### Test Case: TC-001 Successful Login with Valid Credentials
- **Priority**: Critical
- **Type**: Functional / E2E
- **Preconditions**: 
  - User account exists with valid credentials
  - Application is accessible

**Test Steps:**
1. Navigate to login page
2. Enter valid username
3. Enter valid password
4. Click "Login" button

**Expected Results:**
- [ ] User is redirected to dashboard page
- [ ] Dashboard page displays user-specific content
- [ ] User session is established
- [ ] No error messages are displayed

**Test Data:**
- Username: `standard_user`
- Password: `secret_sauce`

---

#### Test Case: TC-002 Failed Login with Invalid Credentials
- **Priority**: High
- **Type**: Functional / Error Handling
- **Preconditions**: 
  - Application is accessible

**Test Steps:**
1. Navigate to login page
2. Enter invalid username
3. Enter invalid password
4. Click "Login" button

**Expected Results:**
- [ ] User remains on login page
- [ ] Error message is displayed (e.g., "Username and password do not match")
- [ ] Password field is cleared (security best practice)
- [ ] User session is not established

**Test Data:**
- Username: `invalid_user`
- Password: `wrong_password`

**Notes:**
- Test both invalid username and invalid password scenarios separately
- Verify error message text matches design specifications
```

### Example 2: E-commerce Checkout Flow

**Input**: Miro user flow showing:
- Cart → Review Items → Enter Shipping → [Payment Method] → Credit Card / PayPal → Process Payment → [Success?] → Confirmation / Error → End

**Generated Test Checklist Excerpt**:

```markdown
# Test Checklist: E-commerce Checkout Flow

## Test Scenarios

### Happy Path - Credit Card Payment

#### Test Case: TC-003 Complete Checkout with Credit Card
- **Priority**: Critical
- **Type**: E2E
- **Preconditions**: 
  - User is logged in
  - Shopping cart contains at least one item

**Test Steps:**
1. Navigate to shopping cart
2. Click "Checkout" button
3. Fill in shipping information (name, address, zip code)
4. Click "Continue" button
5. Select "Credit Card" as payment method
6. Enter valid credit card details
7. Click "Complete Order" button

**Expected Results:**
- [ ] Order confirmation page is displayed
- [ ] Order number is generated and displayed
- [ ] Order summary shows correct items and totals
- [ ] Confirmation email is sent (if applicable)
- [ ] Shopping cart is cleared

**Test Data:**
- Shipping: `John Doe, 123 Main St, 12345`
- Credit Card: `4111 1111 1111 1111` (test card)
- Expiry: `12/25`, CVV: `123`

---

### Alternative Flow - PayPal Payment

#### Test Case: TC-004 Complete Checkout with PayPal
- **Priority**: High
- **Type**: E2E
- **Preconditions**: 
  - User is logged in
  - Shopping cart contains at least one item

**Test Steps:**
1. Navigate to shopping cart
2. Click "Checkout" button
3. Fill in shipping information
4. Click "Continue" button
5. Select "PayPal" as payment method
6. Complete PayPal authentication (redirect flow)
7. Confirm payment in PayPal interface
8. Return to application

**Expected Results:**
- [ ] User is redirected to PayPal login/approval page
- [ ] After PayPal approval, user returns to order confirmation
- [ ] Order is processed successfully
- [ ] Payment method is recorded as PayPal

**Notes:**
- Requires PayPal sandbox/test account setup
- Test PayPal cancellation flow separately
```

---

## Best Practices

### When Analyzing Diagrams

- **Don't assume**: If a path isn't explicitly shown, ask the user or note it as "needs clarification."
- **Look for implicit paths**: Error handling, back navigation, and cancel actions may not be drawn but should be tested.
- **Consider edge cases**: Empty states, maximum values, concurrent users, network failures.

### When Writing Test Cases

- **Use clear naming**: Test case names should describe what is being tested (e.g., "User cannot checkout with empty cart").
- **Keep steps atomic**: Each step should be a single, verifiable action.
- **Be specific in expected results**: Avoid vague statements like "it works"; use "user is redirected to X page" or "error message Y is displayed."
- **Align with existing test structure**: If the project uses Playwright with `test.step()`, organize checklist items to match that pattern.

### When Organizing Checklists

- **Group by feature/flow**: Keep related test cases together.
- **Prioritize by risk**: Critical paths and error handling should be tested first.
- **Include traceability**: Reference the diagram element or path that inspired each test case.

---

## Integration with Playwright Tests

When generating test checklists, consider how they'll be implemented in Playwright:

- **Test structure**: Suggest using `test.step()` to organize test steps (matching the checklist structure).
- **Page objects**: Note which page objects or fixtures will be needed.
- **Test data**: Specify test data requirements and suggest data files or fixtures.
- **Assertions**: Map expected results to Playwright assertions (e.g., `expect(page).toHaveURL(...)`, `expect(element).toBeVisible()`).

Example mapping:
- Checklist step: "User is redirected to dashboard page"
- Playwright assertion: `await expect(page).toHaveURL(/dashboard/)`
- Page object method: `await dashboardPage.checkPageIsOpened(page)`

---

## Notes

- If the diagram is complex or unclear, ask the user for clarification before generating the checklist.
- For large diagrams, consider breaking the checklist into multiple files by feature area.
- Update the checklist when the diagram changes or when new test scenarios are discovered during implementation.
