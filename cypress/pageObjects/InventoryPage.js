class InventoryPage {
  title() {
    return cy.get('[data-test="title"]');
  }

  items() {
    return cy.get('[data-test="inventory-item"]');
  }

  sortBy(option) {
    cy.get('[data-test="product-sort-container"]').select(option);
  }

  prices() {
    return cy
      .get('[data-test="inventory-item-price"]')
      .then(($prices) => [...$prices].map((el) => Number(el.innerText.replace("$", ""))));
  }

  addToCart(productSlug) {
    cy.get(`[data-test="add-to-cart-${productSlug}"]`).click();
  }

  cartBadge() {
    return cy.get('[data-test="shopping-cart-badge"]');
  }

  openCart() {
    cy.get('[data-test="shopping-cart-link"]').click();
  }

  logout() {
    cy.get("#react-burger-menu-btn").click();
    cy.get('[data-test="logout-sidebar-link"]').click();
  }
}

export default InventoryPage;
