# F-02: Product list and sorting
Status: Draft

## Summary (2 to 3 sentences)
Signed-in users see 6 products and can sort them by name or price. The list re-renders in the chosen order.

## User story
As a shopper, I want to sort products, so that I can find what I want quickly.

## Preconditions
- Signed in as the standard user.

## Functional requirements (FR-NN)
- FR-01: The inventory page lists 6 products with names and prices.
- FR-02: The sort menu offers name A–Z and Z–A and price low–high and high–low [INFERRED: from the SauceDemo UI].
- FR-03: Choosing an option reorders the list.

## Acceptance criteria (AC-NN, each one testable)
- AC-01: Sorting by "Price (low to high)" orders prices ascending.
- AC-02: Sorting by "Price (high to low)" orders prices descending [INFERRED].

## Out of scope
- Product detail pages.

## Open questions
- None.

## Source files this feature touches
- cypress/e2e/storeSmokeTest.spec.cy.js
- cypress/e2e/features/store-smoke.feature
- cypress/pageObjects/InventoryPage.js
