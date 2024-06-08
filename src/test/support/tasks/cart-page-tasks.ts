import { Page } from "@playwright/test"
import { CartPage } from "../page-objects/cart-page"

/**
 * A function to click the Continue Shopping button on the Cart page
 * @param param0 { page: Page }
 */
export async function clickContinueShopping({ page }: { page: Page }): Promise<void> {
  const cartPage = new CartPage(page)
  await cartPage.continueShopping.click()
}

/**
 * A function to click the Checkout button on the Cart page
 * @param param0 { page: Page }
 */
export async function clickCheckout({ page }: { page: Page }): Promise<void> {
  const cartPage = new CartPage(page)
  await cartPage.checkout.click()
}