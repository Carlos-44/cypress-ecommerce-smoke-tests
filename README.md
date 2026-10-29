# Amazon Cypress Smoke Tests

> Cypress smoke test suite covering core Amazon.com user flows: homepage load, product search, Today's Deals navigation, the footer Careers link and a category search.

![Tests](https://github.com/Carlos-44/amazon-cypress-smoke-tests/actions/workflows/test.yml/badge.svg)

## Tech Stack
- **Language:** JavaScript (Node.js)
- **Framework:** Cypress 13
- **Design:** Page Object Model (`cypress/pageObjects/`), custom setup command (`cy.setupAmazonTest`)
- **CI:** GitHub Actions

## Getting Started

### Prerequisites
- Node.js v18+
- npm

### Install
```bash
npm install
```

### Run Tests
```bash
# Run all tests headless
npm test

# Open the interactive Cypress runner
npm run test:open
```

## What's Tested
5 smoke tests in `cypress/e2e/amazonSmokeTest.spec.cy.js`:
- The homepage loads and the search box is visible
- Searching for "laptop" shows matching results
- The "Today's Deals" page opens and shows its header
- The footer "Careers" link opens the Amazon Jobs page with "Find jobs"
- Searching for "men's graphic t-shirt" shows the fashion category filter on the results page

> These tests run against live amazon.com. Amazon's bot protection often blocks automated browsers from cloud CI servers, so CI runs can fail on a CAPTCHA page even when the tests themselves are fine. Run them locally for reliable results.

## CI/CD
Every push and pull request to `main` runs the suite in Chrome on GitHub Actions (see `.github/workflows/test.yml`):
- Cypress writes JUnit XML, and [dorny/test-reporter](https://github.com/dorny/test-reporter) publishes it as a GitHub Check
- Failure screenshots are uploaded as artifacts for 14 days

## Author
Carlos Ozoria — [LinkedIn](https://www.linkedin.com/in/carlos-ozoria-0a292030b)
