import { Locator, Page, selectors } from "@playwright/test"

selectors.setTestIdAttribute('id')

export class CheckoutCompletePage {
  readonly page: Page
  readonly thankYou: Locator
  readonly backHome: Locator

  constructor(page: Page) {
    this.page = page
    this.thankYou = page.locator('.complete-header')
    this.backHome = page.getByTestId('back-to-products')
  }
}