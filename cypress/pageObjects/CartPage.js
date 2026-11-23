class CartPage {
  itemNames() {
    return cy.get('[data-test="inventory-item-name"]');
  }

  removeItem(productSlug) {
    cy.get(`[data-test="remove-${productSlug}"]`).click();
  }
}

export default CartPage;
