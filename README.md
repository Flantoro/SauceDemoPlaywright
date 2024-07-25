# Playwright Sauce Demo

## Overview

This repository contains end-to-end Automated Quality Assurance (AQA) tests for the Sauce Demo website using Playwright. The test results are displayed using the Allure report.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Running Tests](#running-tests)
- [Allure Reporting](#allure-reporting)
- [Author](#author)

## Installation

```bash
npm install
```

This command installs the necessary dependencies specified in the `package.json` file, including Playwright and other related packages.

## Configuration

Playwright configurations are stored in the `playwright.config.ts` file.

## Running Tests

```bash
npm run test
```

You can add more scripts in the `package.json` file for different browsers or test configurations.

## Allure Reporting

### Generate and open Allure report

```bash
npm run allure:serve
```

This script generates the Allure report based on the results in the `allure-results` directory and opens it in your default browser.

## Author

- [Andrii Stetsula](https://github.com/Flantoro)