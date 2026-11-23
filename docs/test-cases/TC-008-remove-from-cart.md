# TC-008: Remove a product from the cart

- **Priority:** P3
- **Linked criteria:** F-03 AC-02 ([F-03](../features/F-03-cart.md))
- **Status:** Automated
- **Automation:** cypress/e2e/storeSmokeTest.spec.cy.js — "[TC-008] removes a product from the cart"

## Preconditions
- saucedemo.com is reachable (a public demo store built for test-automation practice).
- Signed in as the standard user.

## Test data
- Product `sauce-labs-backpack`.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | Add Sauce Labs Backpack to the cart. | The badge shows "1". |
| 2 | Open the cart and click Remove on the item. | The item disappears from the cart list. |
| 3 | Look at the cart icon. | There's no badge. |

**Pass criteria:** The cart is empty and the badge is gone.

## Notes
- Passed locally 2026-11-23 (Node 20.20.2, Cypress 13.13.3, Electron headless): 13/13 specs, after the TC-ID renames.
