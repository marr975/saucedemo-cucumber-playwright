Feature: Add item to cart

  In order to buy an item from Sauce Demo
  As a user
  I want to add an item to the cart

  Scenario: Add item to cart
    Given a "standard user" has opened the Product page
    And the user clicks the "Sauce Labs Backpack" Add to Cart button
    When the user opens the cart
    Then the "Sauce Labs Backpack" should be added to the cart

  Scenario: Add multiple items to cart
    Given a "standard user" has opened the Product page
    And  the user clicks the "Sauce Labs Backpack" Add to Cart button
    And the user clicks the "Sauce Labs Bike Light" Add to Cart button
    When the user opens the cart
    Then the "Sauce Labs Backpack" should be added to the cart
    And the "Sauce Labs Bike Light" should be added to the cart
  
  
