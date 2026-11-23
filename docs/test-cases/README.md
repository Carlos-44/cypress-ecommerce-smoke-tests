# Test cases: traceability

One manual test-case file per test case. Automated tests are in `cypress/e2e/storeSmokeTest.spec.cy.js`. TC-001, 002, 003, 005 and 007 also have Cucumber scenarios in `cypress/e2e/features/store-smoke.feature`. Status is Automated only when the test passed in a recorded run.

| TC ID | Feature | Status | Automation file — test name | Manual file |
|---|---|---|---|---|
| TC-001 | [F-01](../features/F-01-login-logout.md) | Automated | `cypress/e2e/storeSmokeTest.spec.cy.js` — [TC-001] logs in with a valid user and shows the product list | [TC-001-standard-user-login.md](TC-001-standard-user-login.md) |
| TC-002 | [F-01](../features/F-01-login-logout.md) | Automated | `cypress/e2e/storeSmokeTest.spec.cy.js` — [TC-002] shows an error for a locked-out user | [TC-002-locked-out-user.md](TC-002-locked-out-user.md) |
| TC-003 | [F-01](../features/F-01-login-logout.md) | Automated | `cypress/e2e/storeSmokeTest.spec.cy.js` — [TC-003] logs out and returns to the login page | [TC-003-logout.md](TC-003-logout.md) |
| TC-004 | [F-01](../features/F-01-login-logout.md) | Automated | `cypress/e2e/storeSmokeTest.spec.cy.js` — [TC-004] shows an error for a wrong password | [TC-004-wrong-password.md](TC-004-wrong-password.md) |
| TC-005 | [F-02](../features/F-02-product-sorting.md) | Automated | `cypress/e2e/storeSmokeTest.spec.cy.js` — [TC-005] sorts products by price from low to high | [TC-005-sort-price-low-high.md](TC-005-sort-price-low-high.md) |
| TC-006 | [F-02](../features/F-02-product-sorting.md) | Automated | `cypress/e2e/storeSmokeTest.spec.cy.js` — [TC-006] sorts products by price from high to low | [TC-006-sort-price-high-low.md](TC-006-sort-price-high-low.md) |
| TC-007 | [F-03](../features/F-03-cart.md) | Automated | `cypress/e2e/storeSmokeTest.spec.cy.js` — [TC-007] adds a product to the cart | [TC-007-add-to-cart.md](TC-007-add-to-cart.md) |
| TC-008 | [F-03](../features/F-03-cart.md) | Automated | `cypress/e2e/storeSmokeTest.spec.cy.js` — [TC-008] removes a product from the cart | [TC-008-remove-from-cart.md](TC-008-remove-from-cart.md) |

Totals: 8 test cases — 8 Automated, 0 Manual only, 0 Not started.
