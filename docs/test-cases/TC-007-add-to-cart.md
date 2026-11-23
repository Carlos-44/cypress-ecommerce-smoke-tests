# TC-007: Add a product to the cart

- **Priority:** P1
- **Linked criteria:** F-03 AC-01
- **Status:** Automated
- **Automation:** cypress/e2e/storeSmokeTest.spec.cy.js — "adds a product to the cart"

## Preconditions
- saucedemo.com is reachable (a public demo store built for test-automation practice).
- Signed in as the standard user.
- The cart is empty.

## Test data
- Product `sauce-labs-backpack` ("Sauce Labs Backpack").

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | Click "Add to cart" on Sauce Labs Backpack. | The cart badge shows "1". |
| 2 | Open the cart. | The cart lists exactly "Sauce Labs Backpack". |

**Pass criteria:** The cart contains the backpack and the badge shows 1.

## Notes
- Passed locally 2026-11-23 (Node 20.20.2, Cypress 13.13.3, Electron headless): 13/13 specs.
