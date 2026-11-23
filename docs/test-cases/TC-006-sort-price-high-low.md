# TC-006: Sort by price high to low

- **Priority:** P3
- **Linked criteria:** F-02 AC-02
- **Status:** Automated
- **Automation:** cypress/e2e/storeSmokeTest.spec.cy.js — "[TC-006] sorts products by price from high to low"

## Preconditions
- saucedemo.com is reachable (a public demo store built for test-automation practice).
- Signed in as the standard user.

## Test data
- Sort option `hilo` ("Price (high to low)").

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | Choose "Price (high to low)" in the sort menu. | The list re-renders. |
| 2 | Read the prices top to bottom. | The prices are in descending order. |

**Pass criteria:** Prices are descending.

## Notes
- Passed locally 2026-11-23 (Node 20.20.2, Cypress 13.13.3, Electron headless): 13/13 specs.
