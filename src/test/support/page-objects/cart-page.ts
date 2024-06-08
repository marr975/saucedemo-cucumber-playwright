import { Locator, Page, selectors } from "@playwright/test";

selectors.setTestIdAttribute('id')

export class CartPage {
  readonly page: Page
  readonly continueShopping: Locator
  readonly checkout: Locator

  constructor(page: Page) {
    this.page = page
    this.continueShopping = page.getByTestId('continue-shopping')
    this.checkout = page.getByTestId('checkout')
  }
}