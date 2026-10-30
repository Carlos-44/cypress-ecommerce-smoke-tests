class CartPage {
  itemNames() {
    return cy.get('[data-test="inventory-item-name"]');
  }
}

export default CartPage;
