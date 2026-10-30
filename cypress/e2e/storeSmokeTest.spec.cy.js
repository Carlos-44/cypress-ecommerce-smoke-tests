import LoginPage from "../pageObjects/LoginPage";
import InventoryPage from "../pageObjects/InventoryPage";
import CartPage from "../pageObjects/CartPage";

describe("SauceDemo store smoke tests", () => {
  const loginPage = new LoginPage();
  const inventoryPage = new InventoryPage();
  const cartPage = new CartPage();

  beforeEach(function () {
    cy.fixture("users").as("users");
    loginPage.visit();
  });

  it("logs in with a valid user and shows the product list", function () {
    loginPage.login(this.users.standard);

    cy.url().should("include", "/inventory.html");
    inventoryPage.title().should("have.text", "Products");
    inventoryPage.items().should("have.length", 6);
  });

  it("shows an error for a locked-out user", function () {
    loginPage.login(this.users.lockedOut);

    loginPage
      .errorMessage()
      .should("be.visible")
      .and("contain.text", "Sorry, this user has been locked out.");
    cy.url().should("not.include", "/inventory.html");
  });

  it("sorts products by price from low to high", function () {
    loginPage.login(this.users.standard);
    inventoryPage.sortBy("lohi");

    inventoryPage.prices().then((prices) => {
      const sorted = [...prices].sort((a, b) => a - b);
      expect(prices).to.deep.equal(sorted);
    });
  });

  it("adds a product to the cart", function () {
    loginPage.login(this.users.standard);
    inventoryPage.addToCart("sauce-labs-backpack");

    inventoryPage.cartBadge().should("have.text", "1");
    inventoryPage.openCart();
    cartPage.itemNames().should("have.length", 1).and("have.text", "Sauce Labs Backpack");
  });

  it("logs out and returns to the login page", function () {
    loginPage.login(this.users.standard);
    inventoryPage.logout();

    loginPage.loginButton().should("be.visible");
    cy.url().should("eq", `${Cypress.config("baseUrl")}/`);
  });
});
