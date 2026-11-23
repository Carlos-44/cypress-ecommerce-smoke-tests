# TC-003: User can log out

- **Priority:** P2
- **Linked criteria:** F-01 AC-03 ([F-01](../features/F-01-login-logout.md))
- **Status:** Automated
- **Automation:** cypress/e2e/storeSmokeTest.spec.cy.js — "[TC-003] logs out and returns to the login page"

## Preconditions
- saucedemo.com is reachable (a public demo store built for test-automation practice).
- Signed in as the standard user.

## Test data
- None.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | Open the menu (burger icon). | The side menu opens. |
| 2 | Click Logout. | The Login button is visible, and the URL equals the base URL. |

**Pass criteria:** The user is back on the login page.

## Notes
- Passed locally 2026-11-23 (Node 20.20.2, Cypress 13.13.3, Electron headless): 13/13 specs, after the TC-ID renames.
