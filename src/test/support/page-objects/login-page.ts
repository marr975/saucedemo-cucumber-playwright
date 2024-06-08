import { Locator, Page, selectors } from "@playwright/test";

selectors.setTestIdAttribute('id')

export class LoginPage {
  readonly page: Page
  readonly username: Locator
  readonly password: Locator
  readonly login: Locator
  readonly errorMessage: Locator

  constructor(page: Page) {
    this.page = page
    this.username = page.getByTestId("user-name")
    this.password = page.getByTestId("password")
    this.login = page.getByTestId("login-button")
    this.errorMessage = page.locator('h3[data-test="error"]')
  }
}