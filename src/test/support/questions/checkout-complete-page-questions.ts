import { Page, expect } from "@playwright/test";
import { CheckoutCompletePage } from "../page-objects/checkout-complete-page";

/**
 * A function to check if the Thank You message is visible on the Checkout Complete page
 * @param param0 { page: Page; }
 */
export async function isOrderComplete({ page }: { page: Page; }): Promise<void> {
  const checkoutCompletePage = new CheckoutCompletePage(page)
  expect(checkoutCompletePage.thankYou).toBeVisible()
}