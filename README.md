# Let's Play!! W Right

This guide will walk you through the installation and setup process for running automation scripts using Playwright.

## System requirements

- Node.js 18+
- Windows 10+, Windows Server 2016+ or Windows Subsystem for Linux (WSL).
- MacOS 12 Monterey, MacOS 13 Ventura, or MacOS 14 Sonoma.
- Debian 11, Debian 12, Ubuntu 20.04 or Ubuntu 22.04, with x86-64 or arm64 architecture.

## Prerequisites

Before you begin, ensure you have the following prerequisites installed:

- [Node.js](https://nodejs.org/) (recommended version 14 or later)
- [npm](https://www.npmjs.com/) (Node.js package manager)
- [Playwright](https://playwright.dev/) (automated browser testing library)

## Installation

Follow these steps to install Playwright and set up your environment:

1. **Install Node.js and npm**:
   
   If you haven't installed Node.js and npm yet, you can download and install them from the [official Node.js website](https://nodejs.org/).

2. **Create a new project directory**:
   
   Create a new directory for your Playwright project:
   ```bash
   mkdir my-playwright-project
   cd my-playwright-project
   ```

3. **Initialize a new Node.js project**:
   
   Run the following command to create a new package.json file:

   ```bash
   npm init -y
   ```

3. **Install Playwright**:
   
   Install Playwright as a dependency in your project:

   ```bash
   npm install playwright
   ```   
   This command will install Playwright and its dependencies in your project.

## Running the Example Test

By default tests will be run on all 3 browsers, chromium, firefox and webkit using 3 workers. This can be configured in the playwright.config file. Tests are run in headless mode meaning no browser will open up when running the tests. Results of the tests and test logs will be shown in the terminal.

```bash
npx playwright test
```

## HTML Test Report

After your test completes, an HTML Reporter will be generated, which shows you a full report of your tests allowing you to filter the report by browsers, passed tests, failed tests, skipped tests and flaky tests. You can click on each test and explore the test's errors as well as each step of the test. By default, the HTML report is opened automatically if some of the tests failed.

```bash
npx playwright show-report
```

## Running Test in UI Mode

Run your tests with UI Mode for a better developer experience with time travel debugging, watch mode and more.

```bash
npx playwright test --ui
```