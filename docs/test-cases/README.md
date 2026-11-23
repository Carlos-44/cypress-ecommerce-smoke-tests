# Test cases: traceability

One manual test-case file per test case. Automated tests are in `cypress/e2e/storeSmokeTest.spec.cy.js`. TC-001, 002, 003, 005 and 007 also have Cucumber scenarios in `cypress/e2e/features/store-smoke.feature`. Status is Automated only when the test passed in a recorded run.

| TC ID | Status | Automation file | Manual file |
|---|---|---|---|
| TC-001 | Automated | `cypress/e2e/storeSmokeTest.spec.cy.js` | [TC-001-standard-user-login.md](TC-001-standard-user-login.md) |
| TC-002 | Automated | `cypress/e2e/storeSmokeTest.spec.cy.js` | [TC-002-locked-out-user.md](TC-002-locked-out-user.md) |
| TC-003 | Automated | `cypress/e2e/storeSmokeTest.spec.cy.js` | [TC-003-logout.md](TC-003-logout.md) |
| TC-004 | Automated | `cypress/e2e/storeSmokeTest.spec.cy.js` | [TC-004-wrong-password.md](TC-004-wrong-password.md) |
| TC-005 | Automated | `cypress/e2e/storeSmokeTest.spec.cy.js` | [TC-005-sort-price-low-high.md](TC-005-sort-price-low-high.md) |
| TC-006 | Automated | `cypress/e2e/storeSmokeTest.spec.cy.js` | [TC-006-sort-price-high-low.md](TC-006-sort-price-high-low.md) |
| TC-007 | Automated | `cypress/e2e/storeSmokeTest.spec.cy.js` | [TC-007-add-to-cart.md](TC-007-add-to-cart.md) |
| TC-008 | Automated | `cypress/e2e/storeSmokeTest.spec.cy.js` | [TC-008-remove-from-cart.md](TC-008-remove-from-cart.md) |

Totals: 8 test cases — 8 Automated, 0 Manual only, 0 Not started.
