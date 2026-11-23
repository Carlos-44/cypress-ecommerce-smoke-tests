# F-03: Cart
Status: Draft

## Summary (2 to 3 sentences)
Signed-in users can add products to the cart. A badge shows the count, and the cart page lists the items.

## User story
As a shopper, I want to add items to a cart, so that I can buy them later.

## Preconditions
- Signed in as the standard user.
- The cart is empty.

## Functional requirements (FR-NN)
- FR-01: "Add to cart" on a product adds it to the cart.
- FR-02: The cart icon badge shows the item count.
- FR-03: The cart page lists the added items by name.
- FR-04: Items can be removed from the cart [INFERRED].

## Acceptance criteria (AC-NN, each one testable)
- AC-01: Adding "Sauce Labs Backpack" shows badge "1", and the cart lists exactly "Sauce Labs Backpack".
- AC-02: Removing the item from the cart empties it, and the badge disappears [INFERRED].

## Out of scope
- Checkout (baseline gap G-1).

## Open questions
- Open question: Should checkout be added as a feature (F-04)?

## Source files this feature touches
- cypress/e2e/storeSmokeTest.spec.cy.js
- cypress/e2e/features/store-smoke.feature
- cypress/pageObjects/InventoryPage.js
- cypress/pageObjects/CartPage.js
