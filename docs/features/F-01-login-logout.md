# F-01: Login and logout
Status: Draft

## Summary (2 to 3 sentences)
Users sign in with a username and password and land on the product list. Locked-out users are refused with an error, and signed-in users can log out from the menu.

## User story
As a shopper, I want to sign in and out, so that I can use the store securely.

## Preconditions
- saucedemo.com is reachable.
- Public demo accounts exist (standard_user, locked_out_user).

## Functional requirements (FR-NN)
- FR-01: The login form accepts a username and password.
- FR-02: Valid credentials open `/inventory.html` with the "Products" title.
- FR-03: A locked-out account shows "Sorry, this user has been locked out." and stays on the login page.
- FR-04: Wrong credentials show an error [INFERRED].
- FR-05: Logout from the menu returns to the login page.

## Acceptance criteria (AC-NN, each one testable)
- AC-01: Logging in as the standard user opens `/inventory.html`, shows the title "Products" and lists 6 items.
- AC-02: Logging in as the locked-out user shows "Sorry, this user has been locked out." and the URL doesn't include `/inventory.html`.
- AC-03: Logging out returns to the base URL, and the Login button is visible.
- AC-04: Logging in with a wrong password shows an error and stays on the login page [INFERRED].

## Out of scope
- The other demo users (problem_user, performance_glitch_user and so on).

## Open questions
- None.

## Source files this feature touches
- cypress/e2e/storeSmokeTest.spec.cy.js
- cypress/e2e/features/store-smoke.feature
- cypress/pageObjects/LoginPage.js
- cypress/pageObjects/InventoryPage.js
- cypress/fixtures/users.json
