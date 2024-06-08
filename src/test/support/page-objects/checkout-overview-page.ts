import { Locator, Page, selectors } from "@playwright/test";

selectors.setTestIdAttribute('id')

export class CheckoutOverviewPage {
  readonly page: Page
  readonly cancel: Locator
  readonly finish: Locator

  constructor(page: Page) {
    this.page = page
    this.cancel = page.getByTestId('cancel')
    this.finish = page.getByTestId('finish')
  }
}