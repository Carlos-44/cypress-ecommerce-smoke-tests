import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../../pageObjects/LoginPage';
import InventoryPage from '../../pageObjects/InventoryPage';
import CartPage from '../../pageObjects/CartPage';

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();
const cartPage = new CartPage();

Given('I am on the SauceDemo login page', () => {
  loginPage.visit();
});

When('I log in as a standard user', () => {
  cy.fixture('users').then((users) => {
    loginPage.login(users.standard);
  });
});

When('I log in as a locked-out user', () => {
  cy.fixture('users').then((users) => {
    loginPage.login(users.lockedOut);
  });
});

When('I sort products by {string}', (sortOption) => {
  const optionMap = {
    'Price (low to high)': 'lohi',
    'Price (high to low)': 'hilo',
    'Name (A to Z)': 'az',
    'Name (Z to A)': 'za',
  };
  inventoryPage.sortBy(optionMap[sortOption] || sortOption);
});

When('I add {string} to the cart', (productSlug) => {
  inventoryPage.addToCart(productSlug);
});

When('I log out', () => {
  inventoryPage.logout();
});

Then('the URL should include {string}', (urlPart) => {
  cy.url().should('include', urlPart);
});

Then('the URL should not include {string}', (urlPart) => {
  cy.url().should('not.include', urlPart);
});

Then('the URL should equal the base URL', () => {
  cy.url().should('eq', `${Cypress.config('baseUrl')}/`);
});

Then('the page title should be {string}', (title) => {
  inventoryPage.title().should('have.text', title);
});

Then('{int} inventory items should be displayed', (count) => {
  inventoryPage.items().should('have.length', count);
});

Then('an error message should say {string}', (message) => {
  loginPage.errorMessage().should('be.visible').and('contain.text', message);
});

Then('the product prices should be sorted in ascending order', () => {
  inventoryPage.prices().then((prices) => {
    const sorted = [...prices].sort((a, b) => a - b);
    expect(prices).to.deep.equal(sorted);
  });
});

Then('the cart badge should show {string}', (count) => {
  inventoryPage.cartBadge().should('have.text', count);
});

Then('the cart should contain {string}', (itemName) => {
  inventoryPage.openCart();
  cartPage.itemNames().should('have.length', 1).and('have.text', itemName);
});

Then('the login button should be visible', () => {
  loginPage.loginButton().should('be.visible');
});
