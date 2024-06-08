Feature: Buy item
  In order to buy items from SauceLabs Demo
  As a customer
  I want to use the checkout

    Scenario: Buy single item
    Given a "standard user" has opened the Product page
    And the user clicks the "Sauce Labs Backpack" Add to Cart button
    And the user opens the cart
    And the user opens the checkout
    And the user enters their information
    When the user finishes the transaction
    Then customer order should be confirmed

