---
name: miro-test-decomposition
description: Analyze auto-test codebase structure (test files, page objects, fixtures, configuration) and generate decomposition diagrams in Miro showing test suite architecture, test cases, page objects hierarchy, and infrastructure components. Use when the user asks to create test decomposition diagrams, visualize test structure, or generate architecture diagrams for test suites.
---

# Miro Test Decomposition Diagram Generator

## Quick Start

When the user asks to create a decomposition diagram for auto-tests:

1. **Analyze the test codebase structure**:
   - Scan test files (`*.spec.ts`, `*.test.ts`, etc.)
   - Identify page objects and their hierarchy
   - Find fixtures and test utilities
   - Review configuration files
   - Identify test data sources

2. **Map relationships**:
   - Test cases → Page Objects
   - Page Objects → Base classes
   - Fixtures → Page Objects
   - Test Cases → Test Steps
   - Configuration → Test execution

3. **Generate Miro flowchart diagram** using the DSL format with clusters.

4. **Create visual decomposition** showing the complete test architecture.

---

## What This Skill Is For

Use this skill when:

- The user asks to "create a decomposition diagram for tests" or "visualize test structure."
- The user wants to document test architecture in Miro.
- You need to generate diagrams similar to WBAP decomposition showing test suite structure.
- The user mentions "test decomposition," "test architecture diagram," or "test structure visualization."

Focus on:

- **Visualizing test suite architecture** clearly and comprehensively.
- **Showing relationships** between components (tests, page objects, fixtures, config).
- **Organizing information** into logical clusters for readability.
- **Creating reusable diagrams** that follow consistent patterns.

---

## How to Analyze Test Codebase

### Step 1: Discover Test Files

Scan the project for test files:

- **Common test file patterns**:
  - `*.spec.ts`, `*.spec.js` (Playwright, Jest, Vitest)
  - `*.test.ts`, `*.test.js` (Jest, Vitest, Mocha)
  - `**/tests/**/*.ts`, `**/tests/**/*.js`
  - `**/__tests__/**/*.ts`, `**/__tests__/**/*.js`
  - `**/e2e/**/*.ts`, `**/e2e/**/*.js`

- **Read test files** to identify:
  - Test case names and descriptions
  - Test steps (using `test.step()` or similar)
  - Page objects used in tests
  - Fixtures and test utilities imported

### Step 2: Identify Page Objects

Locate page object files:

- **Common page object patterns**:
  - `**/pages/**/*.ts`, `**/pages/**/*.js`
  - `**/page-objects/**/*.ts`
  - `**/PageObjects/**/*.ts`
  - Files with names like `*Page.ts`, `*PageObject.ts`

- **Analyze page objects** to identify:
  - Page object classes and their names
  - Base classes (inheritance hierarchy)
  - Methods and actions available
  - Dependencies between page objects

### Step 3: Find Fixtures and Utilities

Locate test infrastructure:

- **Fixture files**:
  - `**/fixtures/**/*.ts`
  - `**/test-utils/**/*.ts`
  - Files extending Playwright's `test.extend()` or similar

- **Test utilities**:
  - Helper functions
  - Test data generators
  - Custom matchers/assertions

### Step 4: Review Configuration

Check test configuration:

- **Configuration files**:
  - `playwright.config.ts`, `playwright.config.js`
  - `jest.config.ts`, `vitest.config.ts`
  - `cypress.config.ts`
  - `.env` files or environment configuration

- **Extract configuration details**:
  - Test directories
  - Browser/project configurations
  - Reporter settings
  - Test data paths

### Step 5: Map Test Data

Identify test data sources:

- **Test data files**:
  - `**/data/**/*.ts`, `**/data/**/*.js`
  - `**/fixtures/**/*.json`
  - `**/test-data/**/*.ts`
  - Data files imported in tests

---

## Diagram Structure Template

When creating a decomposition diagram, use this structure:

### Top-Level Components

1. **Test Suite** (root node - terminator shape)
   - Main test suite name/project name

2. **Test Cases** (process nodes)
   - Individual test cases with their steps

3. **Page Objects** (process nodes)
   - Page object classes
   - Base classes (if inheritance exists)

4. **Fixtures** (process nodes)
   - Custom fixtures
   - Test utilities

5. **Test Data** (process nodes)
   - Data files
   - Test data sources

6. **Configuration** (process nodes)
   - Config files
   - Environment settings

### Clusters

Organize nodes into clusters:

- **Test Suite Structure** - Top-level organization
- **Test Cases** - All test cases and their steps
- **Page Object Model** - Page objects and inheritance
- **Test Infrastructure** - Fixtures, data, configuration

### Relationships

Connect nodes to show:

- Test Suite → Components (Test Cases, Page Objects, Fixtures, etc.)
- Test Cases → Test Steps
- Page Objects → Base Classes (inheritance)
- Fixtures → Page Objects (provides instances)
- Test Cases → Page Objects (uses)

---

## Miro Flowchart DSL Format

When generating diagrams, use the flowchart DSL format:

```dsl
graphdir TB
palette #fff6b6 #c6dcff #adf0c7

# Root node
n1 [Test Suite Name] flowchart-terminator 2

# Component nodes
n2 Test Cases flowchart-process 0
n3 Page Objects flowchart-process 0
n4 Fixtures flowchart-process 0
n5 Test Data flowchart-process 0
n6 Configuration flowchart-process 0

# Test case nodes
n7 [Test Case 1] flowchart-process 0
n8 [Test Case 2] flowchart-process 0

# Test step nodes
n9 [Step 1] flowchart-process 0
n10 [Step 2] flowchart-process 0

# Page object nodes
n11 [PageObject1] flowchart-process 0
n12 [PageObject2] flowchart-process 0
n13 [BasePage] flowchart-process 0

# Fixture nodes
n14 [CustomFixture] flowchart-process 0

# Data nodes
n15 [TestData] flowchart-process 0

# Config nodes
n16 [ConfigFile] flowchart-process 0

# Connections
c n1 - n2
c n1 - n3
c n1 - n4
c n1 - n5
c n1 - n6
c n2 - n7
c n2 - n8
c n7 - n9
c n7 - n10
c n3 - n11
c n3 - n12
c n13 - n11
c n13 - n12
c n4 - n14
c n14 - n11
c n14 - n12
c n5 - n15
c n6 - n16

# Clusters
cluster c1 "Test Suite Structure" n1 n2 n3 n4 n5 n6
cluster c2 "Test Cases" n7 n8 n9 n10
cluster c3 "Page Object Model" n11 n12 n13
cluster c4 "Test Infrastructure" n14 n15 n16
```

### Node Types

- **flowchart-terminator**: Start/end nodes (use for root Test Suite)
- **flowchart-process**: Regular process nodes (use for most components)
- **flowchart-decision**: Decision points (use sparingly, if needed)

### Color Palette

Default palette: `#fff6b6 #c6dcff #adf0c7`
- `#adf0c7` (green): Start/end/root nodes
- `#c6dcff` (blue): Decision nodes (if any)
- `#fff6b6` (yellow): Process nodes

---

## Workflow for Creating Decomposition Diagrams

### Step 1: Analyze Codebase

1. **Scan project structure**:
   - List test files
   - List page object files
   - List fixture files
   - List configuration files
   - List test data files

2. **Read key files**:
   - Test files to extract test cases and steps
   - Page object files to understand hierarchy
   - Fixture files to see what they provide
   - Config files to understand setup

3. **Map relationships**:
   - Which tests use which page objects
   - Which page objects inherit from base classes
   - Which fixtures provide which page objects
   - Which tests have which steps

### Step 2: Design Diagram Structure

1. **Create root node**: Test Suite/Project name

2. **Create component nodes**:
   - Test Cases
   - Page Objects
   - Fixtures
   - Test Data
   - Configuration

3. **Create detail nodes**:
   - Individual test cases
   - Test steps (if detailed breakdown needed)
   - Page object classes
   - Base classes
   - Fixture names
   - Data file names
   - Config file names

4. **Plan clusters**:
   - Group related nodes
   - Keep clusters logical and readable
   - Avoid too many nested clusters

### Step 3: Generate DSL

1. **Write DSL following format**:
   - Start with `graphdir TB` (top-to-bottom)
   - Define palette
   - List all nodes with IDs, labels, types, colors
   - List all connections
   - List all clusters

2. **Ensure**:
   - All node IDs are unique (`n1`, `n2`, etc.)
   - All connector IDs reference existing nodes
   - Clusters reference existing nodes
   - Labels are clear and concise

### Step 4: Create Diagram in Miro

1. **Use MCP tool** `diagram_create`:
   - Provide board ID
   - Set diagram type: `flowchart`
   - Provide title
   - Provide DSL text
   - Optionally set x/y coordinates for positioning

2. **Verify diagram**:
   - Check all nodes appear
   - Check connections are correct
   - Check clusters group correctly
   - Verify layout is readable

---

## Examples

### Example 1: Simple Test Suite

**Input**: Test suite with 2 test cases, 3 page objects, 1 fixture

**Generated Diagram Structure**:

```
Test Suite
├── Test Cases
│   ├── Test Case 1
│   │   ├── Step 1: Login
│   │   └── Step 2: Checkout
│   └── Test Case 2
│       └── Step 1: Login Validation
├── Page Objects
│   ├── LoginPage (extends BasePage)
│   ├── CheckoutPage (extends BasePage)
│   └── BasePage
├── Fixtures
│   └── baseTest (provides page objects)
└── Configuration
    └── playwright.config.ts
```

### Example 2: Complex Test Suite (like WBAP)

**Input**: Large test suite with multiple test cases, page objects with inheritance, fixtures, data files

**Generated Diagram Structure**:

```
Test Suite
├── Test Cases
│   ├── Purchase Path Test
│   │   ├── Step 1: Login
│   │   ├── Step 2: Add Items
│   │   └── Step 3: Checkout
│   └── Locked User Login Test
│       └── Step 1: Login Validation
├── Page Objects
│   ├── LoginPage (extends CommonPage)
│   ├── InventoryPage (extends CommonPage)
│   ├── CartPage (extends CommonPage)
│   ├── CheckoutPage (extends CommonPage)
│   └── CommonPage (base class)
├── Fixtures
│   └── baseTest (provides all page objects)
├── Test Data
│   ├── credentials.ts
│   └── data.ts
└── Configuration
    └── playwright.config.ts
```

---

## Best Practices

### When Analyzing Codebase

- **Be thorough**: Scan all relevant directories, not just obvious ones.
- **Read actual code**: Don't assume structure from file names alone.
- **Identify patterns**: Look for common naming conventions and structures.
- **Note relationships**: Inheritance, dependencies, imports.

### When Creating Diagrams

- **Keep it readable**: Don't overcrowd with too many nodes.
- **Use clusters**: Group related components logically.
- **Show key relationships**: Focus on important connections.
- **Use clear labels**: Node names should be self-explanatory.
- **Limit depth**: 2-3 levels of detail is usually sufficient.

### When Generating DSL

- **Follow format strictly**: Miro DSL is sensitive to format.
- **Unique IDs**: Ensure all node IDs are unique.
- **Valid references**: All connections must reference existing nodes.
- **Cluster membership**: Nodes can belong to only one cluster.
- **Test DSL**: Review DSL before creating diagram.

---

## Common Patterns to Recognize

### Playwright Test Structure

- **Test files**: `*.spec.ts` in `tests/` or `src/tests/`
- **Page objects**: Classes in `pages/` directory
- **Fixtures**: `test.extend()` in `fixtures/` directory
- **Test steps**: `test.step()` calls within tests

### Jest/Vitest Structure

- **Test files**: `*.test.ts` or `*.spec.ts`
- **Page objects**: May be in `page-objects/` or `pages/`
- **Fixtures**: Custom setup/teardown in test files or separate files
- **Test utilities**: Helper functions in `utils/` or `helpers/`

### Cypress Structure

- **Test files**: `*.spec.ts` in `cypress/e2e/`
- **Page objects**: Custom commands or page object classes
- **Fixtures**: JSON files in `cypress/fixtures/`
- **Support**: Custom commands in `cypress/support/`

---

## Notes

- If the codebase structure is unclear, ask the user for clarification.
- For very large test suites, consider creating multiple diagrams by feature area.
- Update diagrams when test structure changes.
- Use consistent naming conventions across diagrams.
- Diagrams should be self-documenting - clear labels and organization.
