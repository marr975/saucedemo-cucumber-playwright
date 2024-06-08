import { Locator, Page, selectors } from "@playwright/test"

selectors.setTestIdAttribute('id')

export class CommonPageObjects {
  readonly page: Page
  readonly menu: Locator
  readonly allItems: Locator
  readonly about: Locator
  readonly logout: Locator
  readonly resetAppState: Locator
  readonly cart: Locator

  constructor(page: Page) {
    this.page = page
    this.menu = page.getByTestId('react-burger-menu-btn')
    this.allItems = page.getByTestId('inventory_sidebar_link')
    this.about = page.getByTestId('about_sidebar_link')
    this.logout = page.getByTestId('logout_sidebar_link')
    this.resetAppState = page.getByTestId('reset_sidebar_link')
    this.cart = page.locator('a[class="shopping_cart_link"]')
  }
}