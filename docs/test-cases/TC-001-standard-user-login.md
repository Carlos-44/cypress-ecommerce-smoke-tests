# TC-001: Standard user logs in and sees the product list

- **Priority:** P1
- **Linked criteria:** F-01 AC-01 ([F-01](../features/F-01-login-logout.md))
- **Status:** Automated
- **Automation:** cypress/e2e/storeSmokeTest.spec.cy.js — "[TC-001] logs in with a valid user and shows the product list"

## Preconditions
- saucedemo.com is reachable (a public demo store built for test-automation practice).
- On the login page.

## Test data
- The `standard` user from `cypress/fixtures/users.json` (SauceDemo's public demo account).

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | Enter the standard username and password. | The fields accept the input. |
| 2 | Click Login. | The URL includes `/inventory.html`. |
| 3 | Look at the page. | The title is "Products", and 6 items are listed. |

**Pass criteria:** The product page shows "Products" with 6 items.

## Notes
- Passed locally 2026-11-23 (Node 20.20.2, Cypress 13.13.3, Electron headless): 13/13 specs, after the TC-ID renames.
