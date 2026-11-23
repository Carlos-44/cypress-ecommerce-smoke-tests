# 00 Baseline spec: SauceDemo store (smoke scope)

Status: Draft
Date: 2026-11-23
Source: read from `cypress/e2e/storeSmokeTest.spec.cy.js`, `cypress/e2e/features/store-smoke.feature`, page objects in `cypress/pageObjects/`, `cypress.config.js` and README.md. Items marked [INFERRED] were deduced, not read from a written spec.

## Purpose
This repo tests a **third-party public demo store**, [SauceDemo](https://www.saucedemo.com) by Sauce Labs. It was built for practicing test automation. This spec describes **that site** as far as the smoke suite exercises it. The repo contains no application of its own.

## User roles
| Role | Can do |
|---|---|
| Standard user | Log in, browse and sort the 6 products, add to cart, view the cart, log out |
| Locked-out user | Can't log in, and sees a "locked out" error |
| Other demo users (problem, performance-glitch and so on) | Exist on the site but aren't covered here [INFERRED: listed on the SauceDemo login page] |

The credentials are SauceDemo's **public demo accounts**, stored in `cypress/fixtures/users.json`.

## Main flows
1. **Log in:** `/` (username, password, Login button) leads to `/inventory.html`.
2. **Browse products:** 6 items, with a sort menu (name A–Z and Z–A, price low–high and high–low).
3. **Add to cart:** the "Add to cart" button on an item updates the cart badge count.
4. **View the cart:** the cart icon leads to the cart page, which lists the item names.
5. **Log out:** the menu's logout option returns to the login page.

## Data
- **Inputs:** username, password, sort option and product id (for example `sauce-labs-backpack`).
- **Outputs:** the product list (name and price), the cart badge count, cart items and error messages.
- **Error text** for a locked-out user: "Sorry, this user has been locked out."

## Integrations
- **External dependency:** saucedemo.com (internet access required).
- **CI:** GitHub Actions (`test.yml`) runs `cypress-io/github-action@v6` in Chrome on push and PR to main.

## Existing tests
- **Cypress:** `cypress/e2e/storeSmokeTest.spec.cy.js` has 5 tests.
- **Cypress-Cucumber:** `cypress/e2e/features/store-smoke.feature` has the same 5 behaviors as scenarios (`npm run test:bdd`).

## Known gaps
- **G-1:** checkout (information, overview, complete) isn't covered.
- **G-2:** only one sort option is checked (price low–high).
- **G-3:** there's no negative login test with a wrong password, and none for removing items from the cart.
