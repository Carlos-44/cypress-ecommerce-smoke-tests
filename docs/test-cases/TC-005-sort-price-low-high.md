# TC-005: Sort by price low to high

- **Priority:** P2
- **Linked criteria:** F-02 AC-01 ([F-02](../features/F-02-product-sorting.md))
- **Status:** Automated
- **Automation:** cypress/e2e/storeSmokeTest.spec.cy.js — "[TC-005] sorts products by price from low to high"

## Preconditions
- saucedemo.com is reachable (a public demo store built for test-automation practice).
- Signed in as the standard user.

## Test data
- Sort option `lohi` ("Price (low to high)").

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | Choose "Price (low to high)" in the sort menu. | The list re-renders. |
| 2 | Read the prices top to bottom. | The prices are in ascending order. |

**Pass criteria:** Prices are ascending.

## Notes
- Passed locally 2026-11-23 (Node 20.20.2, Cypress 13.13.3, Electron headless): 13/13 specs, after the TC-ID renames.
