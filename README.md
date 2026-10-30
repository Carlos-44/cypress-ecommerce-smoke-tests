# Cypress E-Commerce Smoke Tests

> Cypress smoke test suite for [SauceDemo](https://www.saucedemo.com), a public demo store built for test automation practice, covering login, product sorting, the cart and logout.

![Tests](https://github.com/Carlos-44/cypress-ecommerce-smoke-tests/actions/workflows/test.yml/badge.svg)

## Tech Stack
- **Language:** JavaScript (Node.js)
- **Framework:** Cypress 13
- **Design:** Page Object Model (`cypress/pageObjects/`), fixtures for test users
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
5 tests in `cypress/e2e/storeSmokeTest.spec.cy.js`:
- A valid user logs in and sees the 6-item product list
- A locked-out user gets the expected error and stays on the login page
- Sorting by price low to high returns prices in ascending order
- Adding a product updates the cart badge, and the product appears in the cart
- Logging out returns to the login page

The usernames and password in `cypress/fixtures/users.json` are SauceDemo's public demo accounts, shown on its login page.

## CI/CD
Every push and pull request to `main` runs the suite in Chrome on GitHub Actions (see `.github/workflows/test.yml`):
- Cypress writes JUnit XML, and [dorny/test-reporter](https://github.com/dorny/test-reporter) publishes it as a GitHub Check
- Failure screenshots are uploaded as artifacts for 14 days

## Author
Carlos Ozoria — [LinkedIn](https://www.linkedin.com/in/carlos-ozoria-0a292030b)
