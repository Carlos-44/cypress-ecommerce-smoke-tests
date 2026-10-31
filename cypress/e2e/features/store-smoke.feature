Feature: SauceDemo Store Smoke Tests
  As a SauceDemo shopper
  I want to verify core store functionality
  So that I can ensure the application is working correctly

  Background:
    Given I am on the SauceDemo login page

  Scenario: Valid user logs in and sees the product list
    When I log in as a standard user
    Then the URL should include "/inventory.html"
    And the page title should be "Products"
    And 6 inventory items should be displayed

  Scenario: Locked-out user cannot log in
    When I log in as a locked-out user
    Then an error message should say "Sorry, this user has been locked out."
    And the URL should not include "/inventory.html"

  Scenario: Products can be sorted by price low to high
    When I log in as a standard user
    And I sort products by "Price (low to high)"
    Then the product prices should be sorted in ascending order

  Scenario: A product can be added to the cart
    When I log in as a standard user
    And I add "sauce-labs-backpack" to the cart
    Then the cart badge should show "1"
    And the cart should contain "Sauce Labs Backpack"

  Scenario: User can log out and return to login page
    When I log in as a standard user
    And I log out
    Then the login button should be visible
    And the URL should equal the base URL
