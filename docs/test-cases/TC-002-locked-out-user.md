# TC-002: Locked-out user cannot log in

- **Priority:** P1
- **Type:** negative
- **Linked criteria:** F-01 AC-02 ([F-01](../features/F-01-login-logout.md))
- **Status:** Automated
- **Automation:** cypress/e2e/storeSmokeTest.spec.cy.js — "[TC-002] shows an error for a locked-out user"

## Preconditions
- saucedemo.com is reachable (a public demo store built for test-automation practice).
- On the login page.

## Test data
- The `lockedOut` user from the fixture (a public demo account).

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | Enter the locked-out username and password, then click Login. | The error "Sorry, this user has been locked out." is visible. |
| 2 | Check the URL. | The URL doesn't include `/inventory.html`. |

**Pass criteria:** Login is refused with the locked-out error.

## Notes
- Passed locally 2026-11-23 (Node 20.20.2, Cypress 13.13.3, Electron headless): 13/13 specs, after the TC-ID renames.
