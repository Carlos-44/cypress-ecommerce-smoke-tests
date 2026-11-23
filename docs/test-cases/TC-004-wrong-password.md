# TC-004: Wrong password shows an error

- **Priority:** P2
- **Type:** negative
- **Linked criteria:** F-01 AC-04 ([F-01](../features/F-01-login-logout.md))
- **Status:** Automated
- **Automation:** cypress/e2e/storeSmokeTest.spec.cy.js — "[TC-004] shows an error for a wrong password"

## Preconditions
- saucedemo.com is reachable (a public demo store built for test-automation practice).
- On the login page.

## Test data
- The `wrongPassword` fixture user: the public `standard_user` username with a deliberately wrong password.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | Enter the standard username with a wrong password, then click Login. | An error containing "Username and password do not match any user in this service" is visible. |
| 2 | Check the URL. | The URL doesn't include `/inventory.html`. |

**Pass criteria:** Login is refused with the mismatch error.

## Notes
- Passed locally 2026-11-23 (Node 20.20.2, Cypress 13.13.3, Electron headless): 13/13 specs, after the TC-ID renames.
