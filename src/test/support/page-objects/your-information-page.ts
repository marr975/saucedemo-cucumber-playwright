import { Locator, Page, selectors } from "@playwright/test";

selectors.setTestIdAttribute('id')

export class YourInformationPage {
  readonly page: Page
  readonly firstName: Locator
  readonly lastName: Locator
  readonly postcode: Locator
  readonly cancel: Locator
  readonly continue: Locator

  constructor(page: Page) {
    this.page = page
    this.firstName = page.getByTestId('first-name')
    this.lastName = page.getByTestId('last-name')
    this.postcode = page.getByTestId('postal-code')
    this.cancel = page.getByTestId('cancel')
    this.continue = page.getByTestId('continue')
  }
}